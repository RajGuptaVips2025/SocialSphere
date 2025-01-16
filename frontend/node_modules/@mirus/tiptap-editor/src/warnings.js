import { Node } from '@tiptap/core';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import { Decoration, DecorationSet } from 'prosemirror-view';
import get from 'lodash.get';

function dispatch(tr, state, view) {
    state = state.apply(tr);
    view.updateState(state);
}

function isWord(w) {
    const regex = new RegExp(/[!@#$^%^&*(),.?":{}|<>]/g);
    const startsSpecial = regex.test(w.value[0]);
    return w.isWord && !startsSpecial;
}

// cribbed from here https://stackoverflow.com/a/6969486/216154
// and here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function lint(doc, position, prev, getErrorWords) {
    const words = getErrorWords();
    const regexString = words
        .map((w) => (isWord(w) ? `\\b(${escapeRegExp(w.value)})\\b` : `(${escapeRegExp(w.value)})`))
        .join('|');
    const badWordsRegex = new RegExp(regexString, 'ig');

    let highlights = [];
    let on = { active: false };

    if (words.length < 1) {
        return { highlights, on };
    }

    function record(from, to, text) {
        const word = words.find((w) => w.value === text);

        if (word !== undefined) {
            const overrideClass = word.overrideClass;

            if (position && position.pos >= from && position.pos <= to) {
                const decorationId = get(
                    prev,
                    'on.decorationId',
                    (Math.random() + 1).toString(36).substr(2, 5)
                );
                highlights.push({ from, to, text, decorationId, overrideClass });
                on.active = true;
                on.decorationId = decorationId;
                on.range = { to, from };
                on.query = text;
                on.text = text;
            } else {
                highlights.push({ from, to, text, overrideClass });
            }
        }
    }

    // For each node in the document
    doc.descendants((node, pos) => {
        if (node.isText) {
            // Scan text nodes for bad words
            const normalizedText = node.text.normalize('NFKC').replace(/&nbsp;/g, ' ');
            let m;
            while ((m = badWordsRegex.exec(normalizedText))) {
                const matchingErrorWords = words.filter((word) => word.value === m[0]);
                const indexOfMatchedWord = pos + m.index;
                let errorHasOffsetData = false;
                matchingErrorWords.forEach((word) => {
                    if (word.length && word.offset >= 0) {
                        errorHasOffsetData = true;
                        if (indexOfMatchedWord === word.offset) {
                            record(indexOfMatchedWord, indexOfMatchedWord + m[0].length, m[0]);
                        }
                    }
                });
                if (!errorHasOffsetData) {
                    record(indexOfMatchedWord, indexOfMatchedWord + m[0].length, m[0]);
                }
            }
        }
    });

    return { highlights, on };
}

const Warning = Node.create({
    name: 'Warning',

    addOptions() {
        return {
            getErrorWords: () => [],
            onChange: () => {},
            onEnter: () => {},
            onExit: () => {},
            onKeyDown: () => {},
            defaultClass: 'underline-red',
        };
    },

    group: 'inline*',
    inline: true,
    atom: false,
    selectable: false,

    parseHTML() {
        return [
            {
                tag: '[data-mention-id]',
                getAttrs: (dom) => {
                    const id = dom.getAttribute('data-mention-id');
                    const label = dom.innerText.split(this.options.matcher.char).join('');
                    return { id, label };
                },
            },
        ];
    },

    addProseMirrorPlugins() {
        const self = this;

        return [
            // underline the words
            new Plugin({
                key: new PluginKey('warning'),
                appendTransaction: (transactions, oldState, newState) => {
                    // make sure the position of the cursor never goes beyond the size of the doc
                    const maxPos = newState.doc.content.size;
                    const currentFrom = newState.selection.$from.pos;
                    const currentTo = newState.selection.$to.pos;
                    const transaction = newState.tr;

                    transaction.selection.$from.pos = Math.min(maxPos, currentFrom);
                    transaction.selection.$to.pos = Math.min(maxPos, currentTo);

                    return transaction;
                },
                view() {
                    return {
                        update: (view, prevState) => {
                            const prev = this.key.getState(prevState).on;
                            const next = this.key.getState(view.state).on;
                            const moved =
                                prev.active && next.active && prev.range.from !== next.range.from;
                            const started = !prev.active && next.active;
                            const stopped = prev.active && !next.active;
                            const changed = !started && !stopped && prev.query !== next.query;

                            const handleStart = started || moved;
                            const handleChange = changed; //&& !moved;
                            const handleExit = stopped || moved;

                            // Cancel when suggestion isn't active
                            if (!handleStart && !handleChange && !handleExit) {
                                return;
                            }

                            const state = handleExit && !handleChange ? prev : next;
                            const decorationNode = document.querySelector(
                                '[data-decoration-id="' + state.decorationId + '"]'
                            );

                            // build a virtual node for popper.js or tippy.js
                            // this can be used for building popups without a DOM node
                            const virtualNode = decorationNode
                                ? {
                                      getBoundingClientRect() {
                                          return decorationNode.getBoundingClientRect();
                                      },
                                      clientWidth: decorationNode.clientWidth,
                                      clientHeight: decorationNode.clientHeight,
                                  }
                                : null;

                            const props = {
                                view,
                                range: state.range,
                                text: state.text,
                                decorationNode,
                                virtualNode,
                                command: function ({ range, attrs }) {
                                    const tr = view.state.tr.replaceWith(
                                        range.from,
                                        range.to,
                                        view.state.schema.text(attrs.label)
                                    );
                                    const result = view.dispatch(tr);

                                    // need to merge text nodes
                                    setTimeout(() => {
                                        document
                                            .getElementsByClassName('editor__content')[0]
                                            .normalize();
                                    });

                                    return result;
                                },
                            };

                            // Trigger the hooks when necessary
                            if (handleExit) {
                                self.options.onExit(props);
                            }

                            if (handleChange) {
                                self.options.onChange(props);
                            }

                            if (handleStart) {
                                self.options.onEnter(props);
                            }
                        },
                    };
                },
                state: {
                    init(_, { doc }) {
                        return lint(doc, null, {}, self.options.getErrorWords);
                    },
                    apply(tr, prev) {
                        const { selection } = tr;
                        const next = Object.assign({}, prev);
                        const position = selection.$from;
                        return lint(tr.doc, position, prev, self.options.getErrorWords);
                    },
                },
                props: {
                    handleKeyDown(view, event) {
                        const { active, range } = this.getState(view.state).on;
                        if (!active) {
                            return false;
                        }
                        return self.options.onKeyDown({ event });
                    },
                    decorations(state) {
                        let decos = [];
                        this.getState(state).highlights.forEach((prob) => {
                            decos.push(
                                Decoration.inline(prob.from, prob.to, {
                                    class: prob.overrideClass
                                        ? prob.overrideClass
                                        : self.options.defaultClass,
                                    'data-decoration-id': prob.decorationId
                                        ? prob.decorationId
                                        : undefined,
                                })
                            );
                        });
                        if (decos.length > 0) {
                            return DecorationSet.create(state.doc, decos);
                        }
                    },
                },
            }),
        ];
    },
});

export default Warning;
