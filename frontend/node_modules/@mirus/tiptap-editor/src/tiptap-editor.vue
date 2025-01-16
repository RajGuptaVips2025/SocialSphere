<template>
    <div>
        <div class="tiptap-editor" tabindex="0">
            <div
                v-if="showMenu && editor"
                class="menubar"
                role="toolbar"
                :aria-controls="id || null"
            >
                <button
                    :aria-pressed="`${editor.isActive('bold') ? 'true' : 'false'}`"
                    :class="{ 'is-active': editor.isActive('bold') }"
                    @keyup.left="toolbarGoLeft"
                    @keyup.right="toolbarGoRight"
                    @click="editor.chain().focus().toggleBold().run()"
                    aria-label="bold"
                    value="bold"
                    type="button"
                >
                    <b>B</b>
                </button>
                <button
                    :aria-pressed="`${editor.isActive('italic') ? 'true' : 'false'}`"
                    :class="{ 'is-active': editor.isActive('italic') }"
                    @click="editor.chain().focus().toggleItalic().run()"
                    @keyup.left="toolbarGoLeft"
                    @keyup.right="toolbarGoRight"
                    value="italic"
                    type="button"
                >
                    <i>I</i>
                </button>
                <button
                    @click="editor.chain().focus().toggleBulletList().run()"
                    :class="{ 'is-active': editor.isActive('bulletList') }"
                    @keyup.left="toolbarGoLeft"
                    @keyup.right="toolbarGoRight"
                    aria-label="bullet list"
                    value="bulletlist"
                    type="button"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="list-ul"
                        class="svg-inline--fa fa-list-ul fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M96 96c0 26.51-21.49 48-48 48S0 122.51 0 96s21.49-48 48-48 48 21.49 48 48zM48 208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm0 160c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm96-236h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                        ></path>
                    </svg>
                </button>
                <div class="character-count" v-if="maxCharacterCount && editor">
                    <svg
                        height="20"
                        width="20"
                        viewBox="0 0 20 20"
                        :class="
                            maxCharacterCountExceeded
                                ? 'character-count__graph--warning'
                                : 'character-count__graph'
                        "
                    >
                        <circle r="10" cx="10" cy="10" class="character-count__outer-circle" />
                        <circle
                            r="5"
                            cx="10"
                            cy="10"
                            fill="transparent"
                            stroke="currentColor"
                            stroke-width="10"
                            :stroke-dasharray="`calc(${characterCountPercentage}px * 31.4 / 100) 31.4`"
                            transform="rotate(-90) translate(-20)"
                        />
                        <circle r="6" cx="10" cy="10" class="character-count__inner-circle" />
                    </svg>
                    <div class="character-count__text" aria-live="polite">
                        {{ currentCharacterCount }} / {{ maxCharacterCount }} characters
                    </div>
                </div>
            </div>
            <editor-content
                :editor="editor"
                :style="{ height: height }"
                :id="id || null"
                role="textbox"
                class="editor__content"
                aria-label="text area"
                tabindex="-1"
            />
        </div>
        <div class="error-list" :v-show="false" ref="renderedErrors">
            <template v-if="currentWarning">
                <b>{{ currentWarning.message }}</b>
                <div
                    v-for="(option, index) in currentOptions"
                    :key="option.id"
                    class="error-list__item"
                    :class="{ selected: navigatedOptionIndex === index }"
                    @click="selectOption(option)"
                >
                    {{ option.value }}
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch, onBeforeUnmount, onMounted } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import CharacterCount from '@tiptap/extension-character-count';
import Document from '@tiptap/extension-document';
import Italic from '@tiptap/extension-italic';
import History from '@tiptap/extension-history';
import ListItem from '@tiptap/extension-list-item';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Text from '@tiptap/extension-text';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import Warning from './warnings';
import unescape from 'lodash.unescape';

const emit = defineEmits(['update:value', 'new-character-count']);
const props = defineProps({
    height: { type: String, default: '300px' },
    id: { type: String, default: null },
    value: { type: String, default: '' },
    warnings: { type: Array, default: () => [] },
    maxCharacterCount: { type: Number, default: null },
    placeholder: { type: String, default: 'write your content here...' },
    showMenu: { type: Boolean, default: true },
});

const currentValue = ref(props.value);
const editor = useEditor({
    content: props.value,
    parseOptions: { preserveWhitespace: 'full' },
    onCreate: ({ editor }) => {
        currentCharacterCount.value = editor.storage.characterCount.characters();
    },
    onUpdate: ({ getJSON, getHTML, editor }) => {
        currentCharacterCount.value = editor.storage.characterCount.characters();
        currentValue.value = editor.getHTML();

        emit('update:value', currentValue.value);

        props.warnings.forEach((warning) => {
            if (warning.length && warning.offset) {
                if (editor.state.selection.head - 1 <= warning.offset) {
                    let charCountDiff = currentCharacterCount.value - previousCharacterCount.value;
                    charCountDiff += adjustForNewlines(editor);
                    warning.offset += charCountDiff;
                }
            }
        });
        previousCharacterCount.value = currentCharacterCount.value;
        previousHTML.value = editor.getHTML();
        editor.commands.focus();
    },
    extensions: [
        Bold,
        BulletList,
        CharacterCount.configure({ limit: props.maxCharacterCount }),
        Document,
        History,
        Italic,
        ListItem,
        Paragraph,
        Placeholder.configure({ placeholder: props.placeholder }),
        Text,
        Warning.configure({
            getErrorWords: getErrorWords,
            onEnter: ({ range, command, virtualNode, text }) => {
                currentWarning.value = errors.value.find((err) => err.value === text);
                currentOptions.value = currentWarning.value.options || [];
                navigatedOptionIndex.value = 0;
                optionRange.value = range;
                renderPopup(virtualNode);
                insertOption.value = command;
            },
            onChange: ({ range, virtualNode, text }) => {
                currentWarning.value = errors.value.find((err) => err.value === text);
                currentOptions.value = currentWarning.value.options || [];
                navigatedOptionIndex.value = 0;
                optionRange.value = range;
                renderPopup(virtualNode);
            },
            onExit: () => {
                navigatedOptionIndex.value = 0;
                currentOptions.value = null;
                optionRange.value = null;
                destroyPopup();
            },
            onKeyDown: ({ event }) => {
                // pressing up arrow
                if (event.keyCode === 38 && currentOptions.value !== null) {
                    upHandler();
                    return true;
                }
                // pressing down arrow
                if (event.keyCode === 40 && currentOptions !== null) {
                    downHandler();
                    return true;
                }
                // pressing enter
                if (event.keyCode === 13) {
                    return enterHandler();
                }
                // pressing escape
                if (event.keyCode === 27) {
                    navigatedOptionIndex.value = 0;
                    optionRange.value = null;
                    currentOptions.value = null;
                    destroyPopup();
                    return true;
                }
                return false;
            },
        }),
    ],
});

// Warnings & errors popup
const currentWarning = ref(null);
const currentOptions = ref(null);
const navigatedOptionIndex = ref(0);
const insertOption = ref(() => {});
const optionRange = ref(null);
const popup = ref(null);
const renderedErrors = ref(null);

watch(
    () => props.warnings,
    (n, o) => {
        if (editor) {
            props.warnings.forEach((warning) => {
                if (warning.length && warning.offset >= 0) {
                    warning.offset += getOffsetAdjustment(warning);
                }
            });

            // preserve selection after updating warnings
            /* const oldSelection = editor.view.state.selection; */

            /* editor.commands.setTextSelection({
		       from: oldSelection.from,
		       to: oldSelection.to,
		       }); */

            // record length of text that was used to generate the list of warnings
            initialCharacterCount.value = currentCharacterCount.value;
        }
    }
);

tippy.setDefaultProps({
    content: renderedErrors.value,
    trigger: 'mouseenter',
    interactive: true,
    theme: 'tiptap',
    placement: 'top-start',
    inertia: true,
    duration: [400, 200],
    showOnCreate: true,
    arrow: true,
    hideOnClick: false,
});

props.warnings.forEach((warning) => {
    if (warning.length && warning.offset >= 0) {
        warning.offset += getOffsetAdjustment(warning);
    }
});

const errors = computed(() => {
    if (props.warnings.length < 1) {
        return [];
    }
    return props.warnings.map((mistake) => {
        const isWord = mistake.isWord === undefined ? true : mistake.isWord;
        return {
            overrideClass: mistake.overrideClass,
            isWord: isWord,
            value: isWord ? mistake.value : unescape(mistake.value),
            message: mistake.message,
            offset: mistake.offset,
            length: mistake.length,
            options: (mistake.options || []).map((value, id) => ({ value, id })),
        };
    });
});

// character counting
const currentCharacterCount = ref(0);
const initialCharacterCount = ref(currentCharacterCount.value);
const previousCharacterCount = ref(currentCharacterCount.value);
const previousHTML = ref('');

const maxCharacterCountExceeded = computed(
    () => currentCharacterCount.value >= props.maxCharacterCount
);
const characterCountPercentage = computed(() =>
    Math.round((100 / props.maxCharacterCount) * currentCharacterCount.value)
);

// compliance checks base offset data off the HTML value of the text
// ProseMirror uses a unique token sequence indexing system - see https://prosemirror.net/docs/guide/#doc.indexing
// we need to convert warning offsets to the index values ProseMirror expects
function getOffsetAdjustment(warning) {
    // compliance check offsets count all HTML entities as one character, whereas the editor value does not. compensate for
    // this by adding to the offset until it matches (or equals the length of the editor text as a failsafe break from the loop)
    const normalizedString = props.value.normalize('NFKC').replace(/&nbsp;/g, ' ');
    while (
        normalizedString.substr(warning.offset, warning.value.length) !== warning.value &&
        warning.offset <= normalizedString.length
    ) {
        warning.offset++;
    }

    // obtain the substring up until the beginning of the warning
    const originalLength = warning.offset;
    let substr = props.value.substr(0, warning.offset);

    // these tags count as one token, so we replace them with a single space
    substr = substr.replace(/<p>|<\/p>|<li>|<ul>|<\/ul>|<\/li>|<div>|<\/div>/g, ' ');

    // these tags don't count as a token, so we remove them
    const knownTagRegex = /<strong>|<\/strong>|<em>|<\/em>/g;
    substr = substr.replace(knownTagRegex, '');

    // return the number of chars the offset should be adjusted by
    return substr.length - originalLength;
}

// when the user adds a newline to the text of the editor, the character count stays the same, but ProseMirror's token
// sequence indexing system adds 2 tokens to the content. We need to adjust warning offsets to account for that
function adjustForNewlines(editor) {
    const regex = /<\/p><p>/g;
    const previousNewlines = (previousHTML.value.match(regex) || []).length;
    const newlines = (editor.getHTML().match(regex) || []).length;

    // multiply the difference in newlines by 2 since each instance counts as 2 tokens
    return (newlines - previousNewlines) * 2;
}

function getErrorWords() {
    if (errors.value.length < 1) {
        return [];
    }
    return errors.value.map((err) => ({
        value: err.value,
        overrideClass: err.overrideClass,
        isWord: err.isWord,
        offset: err.offset,
        length: err.length,
    }));
}

function upHandler() {
    optionsLength = currentOptions.value.length;
    navigatedOptionIndex.value = (navigatedOptionIndex.value + optionsLength - 1) % optionsLength;
}

function downHandler() {
    navigatedOptionIndex.value = (navigatedOptionIndex.value + 1) % currentOptions.value.length;
}

function enterHandler() {
    if (currentOptions.value.length === 0) {
        return false;
    }

    const option = currentOptions.value[navigatedOptionIndex.value];
    if (option) {
        selectOption(option);
    }
    return true;
}

function selectOption(option) {
    insertOption.value({
        range: optionRange.value,
        attrs: { id: option.id, label: option.value },
    });
}

function renderPopup(virtualNode) {
    if (!popup.value && virtualNode) {
        const rect = virtualNode.getBoundingClientRect();
        popup.value = tippy(document.body, {
            content: renderedErrors.value,
            getReferenceClientRect: () => ({
                width: rect.width,
                height: rect.height,
                left: rect.left,
                right: rect.right,
                top: rect.top,
                bottom: rect.bottom,
            }),
        });
    }
}

function destroyPopup() {
    if (popup.value) {
        popup.value.destroy();
        popup.value = null;
    }
}

function toolbarGoLeft(evt) {
    evt.preventDefault();
    const prevSibling = evt.target.previousSibling;

    if (prevSibling && prevSibling.focus !== undefined) {
        prevSibling.focus();
    }
}

function toolbarGoRight(evt) {
    evt.preventDefault();
    const nextSibling = evt.target.nextSibling;

    if (nextSibling && nextSibling.focus !== undefined) {
        nextSibling.focus();
    }
}

onBeforeUnmount(() => {
    if (popup.value) {
        popup.value.destroy();
    }
});
</script>

<style lang="scss">
.error-list {
    .error-list__item {
        padding: 3px;
        border-radius: 2px;

        &.selected,
        &:hover {
            background-color: rgba(white, 0.2);
        }
    }
}

.tiptap-editor {
    border: 1px solid #e5e7eb;
    background: white;
    border-radius: 8px;
    padding: 4px;

    p.is-empty:first-child::before {
        content: attr(data-placeholder);
        float: left;
        color: #aaa;
        pointer-events: none;
        height: 0;
    }

    .menubar {
        // border-bottom: 1px solid #e5e7eb;
        padding: 4px;
        border-radius: 4px;
        background: #f4f4f5;
        display: flex;

        button {
            font-size: 14px;
            background-color: transparent;
            border: none;
            cursor: pointer;
            height: 30px;
            outline: 50;
            width: 35px;
            vertical-align: bottom;
            border-radius: 4px;
            margin-right: 3px;

            &:focus {
                outline: 2px solid #3b82f6;
                transition: all 0.08s ease-in-out;
            }

            &.is-active {
                background-color: #d3e3fd;
            }

            &.is-active:focus {
                background-color: #bfd2f9;
            }

            &:not(.is-active):hover {
                background-color: #e5e7eb;
            }

            &:not(.is-active):focus {
                background-color: #e5e7eb;
            }

            svg {
                width: 12px;
            }
        }
    }

    .editor__content {
        font-size: 16px;
        outline: 0;
        overflow-y: auto;
        padding: 6px 2px 4px 2px;

        .underline-red {
            border-bottom: 3px red solid;
        }

        .underline-orange {
            border-bottom: 3px orange solid;
        }

        .underline-green {
            border-bottom: 3px lightgreen solid;
        }

        .underline-blue {
            border-bottom: 3px #3b82f6 solid;
        }

        ul {
            padding: 0px 40px;
        }

        .ProseMirror {
            height: 100%;
            padding: 2px 8px 2px 8px;
            border-radius: 4px;

            &:focus {
                outline: 2px solid #3b82f6;
                transition: all 0.08s ease-in-out;
            }
        }
    }
}

.character-count {
    padding: 4px;
    border-radius: 4px;
    text-align: right;
    padding-right: 15px;
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 2;

    &__graph {
        color: #a8c2f7;

        &--warning {
            color: #fb7373;
        }
    }

    &__inner-circle {
        fill: #f4f4f5;
    }

    &__outer-circle {
        fill: #ffffff;
    }
}

.tippy-box[data-theme~='tiptap'] {
    background-color: #0a0a0a;
}
.tippy-box[data-theme~='tiptap'] > .tippy-arrow {
    width: 14px;
    height: 14px;
}
.tippy-box[data-theme~='tiptap'][data-placement^='top'] > .tippy-arrow:before {
    border-width: 7px 7px 0;
    border-top-color: #0a0a0a;
}
.tippy-box[data-theme~='tiptap'][data-placement^='bottom'] > .tippy-arrow:before {
    border-width: 0 7px 7px;
    border-bottom-color: #0a0a0a;
}
.tippy-box[data-theme~='tiptap'][data-placement^='left'] > .tippy-arrow:before {
    border-width: 7px 0 7px 7px;
    border-left-color: #0a0a0a;
}
.tippy-box[data-theme~='tiptap'][data-placement^='right'] > .tippy-arrow:before {
    border-width: 7px 7px 7px 0;
    border-right-color: #0a0a0a;
}
.tippy-box[data-theme~='tiptap'] > .tippy-backdrop {
    background-color: #0a0a0a;
}
.tippy-box[data-theme~='tiptap'] > .tippy-svg-arrow {
    fill: #0a0a0a;
}

html[color-scheme='dark'] {
    .tiptap-editor {
        border: 2px solid #27272a;
        background: #18181b;
        color: #e4e4e7;

        .menubar {
            background: #27272a;
            color: #d1d5db;

            button {
                color: #e4e4e7;

                &:focus {
                    outline: 2px solid #3b82f6;
                    transition: all 0.08s ease-in-out;
                }

                &.is-active {
                    background-color: #515e75;
                }

                &.is-active:focus {
                    background-color: #515e75;
                }

                &:not(.is-active):hover {
                    background-color: #3f3f46;
                }

                &:not(.is-active):focus {
                    background-color: #3f3f46;
                }

                svg {
                    width: 12px;
                }
            }
        }
    }

    .character-count {
        &__graph {
            color: #a8c2f7;

            &--warning {
                color: #fb7373;
            }
        }

        &__inner-circle {
            fill: #27272a;
        }

        &__outer-circle {
            fill: #27272a;
        }
    }

    .tippy-box[data-theme~='tiptap'] {
        background-color: #d1d5db;
        color: #111827;
    }
    .tippy-box[data-theme~='tiptap'][data-placement^='top'] > .tippy-arrow:before {
        border-top-color: #d1d5db;
    }
    .tippy-box[data-theme~='tiptap'][data-placement^='bottom'] > .tippy-arrow:before {
        border-bottom-color: #d1d5db;
    }
    .tippy-box[data-theme~='tiptap'][data-placement^='left'] > .tippy-arrow:before {
        border-left-color: #d1d5db;
    }
    .tippy-box[data-theme~='tiptap'][data-placement^='right'] > .tippy-arrow:before {
        border-right-color: #d1d5db;
    }
    .tippy-box[data-theme~='tiptap'] > .tippy-backdrop {
        background-color: #d1d5db;
    }
    .tippy-box[data-theme~='tiptap'] > .tippy-svg-arrow {
        fill: #d1d5db;
    }
    .error-list {
        .error-list__item {
            &.selected,
            &:hover {
                background-color: rgba(black, 0.15);
            }
        }
    }
}
</style>
