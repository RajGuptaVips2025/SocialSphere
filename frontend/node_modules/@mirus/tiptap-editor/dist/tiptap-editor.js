(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}.error-list .error-list__item{padding:3px;border-radius:2px}.error-list .error-list__item.selected,.error-list .error-list__item:hover{background-color:#fff3}.tiptap-editor{border:1px solid #e5e7eb;background:#fff;border-radius:8px;padding:4px}.tiptap-editor p.is-empty:first-child:before{content:attr(data-placeholder);float:left;color:#aaa;pointer-events:none;height:0}.tiptap-editor .menubar{padding:4px;border-radius:4px;background:#f4f4f5;display:flex}.tiptap-editor .menubar button{font-size:14px;background-color:transparent;border:none;cursor:pointer;height:30px;outline:50;width:35px;vertical-align:bottom;border-radius:4px;margin-right:3px}.tiptap-editor .menubar button:focus{outline:2px solid #3b82f6;transition:all .08s ease-in-out}.tiptap-editor .menubar button.is-active{background-color:#d3e3fd}.tiptap-editor .menubar button.is-active:focus{background-color:#bfd2f9}.tiptap-editor .menubar button:not(.is-active):hover{background-color:#e5e7eb}.tiptap-editor .menubar button:not(.is-active):focus{background-color:#e5e7eb}.tiptap-editor .menubar button svg{width:12px}.tiptap-editor .editor__content{font-size:16px;outline:0;overflow-y:auto;padding:6px 2px 4px}.tiptap-editor .editor__content .underline-red{border-bottom:3px red solid}.tiptap-editor .editor__content .underline-orange{border-bottom:3px orange solid}.tiptap-editor .editor__content .underline-green{border-bottom:3px lightgreen solid}.tiptap-editor .editor__content .underline-blue{border-bottom:3px #3b82f6 solid}.tiptap-editor .editor__content ul{padding:0 40px}.tiptap-editor .editor__content .ProseMirror{height:100%;padding:2px 8px;border-radius:4px}.tiptap-editor .editor__content .ProseMirror:focus{outline:2px solid #3b82f6;transition:all .08s ease-in-out}.character-count{padding:4px 15px 4px 4px;border-radius:4px;text-align:right;display:flex;gap:8px;justify-content:flex-end;align-items:center;flex-grow:2}.character-count__graph{color:#a8c2f7}.character-count__graph--warning{color:#fb7373}.character-count__inner-circle{fill:#f4f4f5}.character-count__outer-circle{fill:#fff}.tippy-box[data-theme~=tiptap]{background-color:#0a0a0a}.tippy-box[data-theme~=tiptap]>.tippy-arrow{width:14px;height:14px}.tippy-box[data-theme~=tiptap][data-placement^=top]>.tippy-arrow:before{border-width:7px 7px 0;border-top-color:#0a0a0a}.tippy-box[data-theme~=tiptap][data-placement^=bottom]>.tippy-arrow:before{border-width:0 7px 7px;border-bottom-color:#0a0a0a}.tippy-box[data-theme~=tiptap][data-placement^=left]>.tippy-arrow:before{border-width:7px 0 7px 7px;border-left-color:#0a0a0a}.tippy-box[data-theme~=tiptap][data-placement^=right]>.tippy-arrow:before{border-width:7px 7px 7px 0;border-right-color:#0a0a0a}.tippy-box[data-theme~=tiptap]>.tippy-backdrop{background-color:#0a0a0a}.tippy-box[data-theme~=tiptap]>.tippy-svg-arrow{fill:#0a0a0a}html[color-scheme=dark] .tiptap-editor{border:2px solid #27272a;background:#18181b;color:#e4e4e7}html[color-scheme=dark] .tiptap-editor .menubar{background:#27272a;color:#d1d5db}html[color-scheme=dark] .tiptap-editor .menubar button{color:#e4e4e7}html[color-scheme=dark] .tiptap-editor .menubar button:focus{outline:2px solid #3b82f6;transition:all .08s ease-in-out}html[color-scheme=dark] .tiptap-editor .menubar button.is-active{background-color:#515e75}html[color-scheme=dark] .tiptap-editor .menubar button.is-active:focus{background-color:#515e75}html[color-scheme=dark] .tiptap-editor .menubar button:not(.is-active):hover{background-color:#3f3f46}html[color-scheme=dark] .tiptap-editor .menubar button:not(.is-active):focus{background-color:#3f3f46}html[color-scheme=dark] .tiptap-editor .menubar button svg{width:12px}html[color-scheme=dark] .character-count__graph{color:#a8c2f7}html[color-scheme=dark] .character-count__graph--warning{color:#fb7373}html[color-scheme=dark] .character-count__inner-circle,html[color-scheme=dark] .character-count__outer-circle{fill:#27272a}html[color-scheme=dark] .tippy-box[data-theme~=tiptap]{background-color:#d1d5db;color:#111827}html[color-scheme=dark] .tippy-box[data-theme~=tiptap][data-placement^=top]>.tippy-arrow:before{border-top-color:#d1d5db}html[color-scheme=dark] .tippy-box[data-theme~=tiptap][data-placement^=bottom]>.tippy-arrow:before{border-bottom-color:#d1d5db}html[color-scheme=dark] .tippy-box[data-theme~=tiptap][data-placement^=left]>.tippy-arrow:before{border-left-color:#d1d5db}html[color-scheme=dark] .tippy-box[data-theme~=tiptap][data-placement^=right]>.tippy-arrow:before{border-right-color:#d1d5db}html[color-scheme=dark] .tippy-box[data-theme~=tiptap]>.tippy-backdrop{background-color:#d1d5db}html[color-scheme=dark] .tippy-box[data-theme~=tiptap]>.tippy-svg-arrow{fill:#d1d5db}html[color-scheme=dark] .error-list .error-list__item.selected,html[color-scheme=dark] .error-list .error-list__item:hover{background-color:#00000026}')),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { defineComponent as er, ref as ae, onMounted as hs, onBeforeUnmount as tr, h as nr, getCurrentInstance as Yc, watchEffect as Xc, nextTick as Zc, unref as be, shallowRef as Qc, markRaw as eu, customRef as tu, watch as nu, computed as mi, openBlock as Tt, createElementBlock as Et, createElementVNode as de, normalizeClass as Nn, withKeys as en, toDisplayString as vr, createCommentVNode as gi, createVNode as ru, normalizeStyle as iu, Fragment as Js, renderList as su } from "vue";
function te(n) {
  this.content = n;
}
te.prototype = {
  constructor: te,
  find: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === n) return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(n) {
    var e = this.find(n);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(n, e, t) {
    var r = t && t != n ? this.remove(t) : this, i = r.find(n), s = r.content.slice();
    return i == -1 ? s.push(t || n, e) : (s[i + 1] = e, t && (s[i] = t)), new te(s);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(n) {
    var e = this.find(n);
    if (e == -1) return this;
    var t = this.content.slice();
    return t.splice(e, 2), new te(t);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(n, e) {
    return new te([n, e].concat(this.remove(n).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(n, e) {
    var t = this.remove(n).content.slice();
    return t.push(n, e), new te(t);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(n, e, t) {
    var r = this.remove(e), i = r.content.slice(), s = r.find(n);
    return i.splice(s == -1 ? i.length : s, 0, e, t), new te(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      n(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(n) {
    return n = te.from(n), n.size ? new te(n.content.concat(this.subtract(n).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(n) {
    return n = te.from(n), n.size ? new te(this.subtract(n).content.concat(n.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(n) {
    var e = this;
    n = te.from(n);
    for (var t = 0; t < n.content.length; t += 2)
      e = e.remove(n.content[t]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var n = {};
    return this.forEach(function(e, t) {
      n[e] = t;
    }), n;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
te.from = function(n) {
  if (n instanceof te) return n;
  var e = [];
  if (n) for (var t in n) e.push(t, n[t]);
  return new te(e);
};
function Pl(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), s = e.child(r);
    if (i == s) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(s))
      return t;
    if (i.isText && i.text != s.text) {
      for (let o = 0; i.text[o] == s.text[o]; o++)
        t++;
      return t;
    }
    if (i.content.size || s.content.size) {
      let o = Pl(i.content, s.content, t + 1);
      if (o != null)
        return o;
    }
    t += i.nodeSize;
  }
}
function Bl(n, e, t, r) {
  for (let i = n.childCount, s = e.childCount; ; ) {
    if (i == 0 || s == 0)
      return i == s ? null : { a: t, b: r };
    let o = n.child(--i), l = e.child(--s), a = o.nodeSize;
    if (o == l) {
      t -= a, r -= a;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: t, b: r };
    if (o.isText && o.text != l.text) {
      let c = 0, u = Math.min(o.text.length, l.text.length);
      for (; c < u && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, r--;
      return { a: t, b: r };
    }
    if (o.content.size || l.content.size) {
      let c = Bl(o.content, l.content, t - 1, r - 1);
      if (c)
        return c;
    }
    t -= a, r -= a;
  }
}
class k {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, r, i = 0, s) {
    for (let o = 0, l = 0; l < t; o++) {
      let a = this.content[o], c = l + a.nodeSize;
      if (c > e && r(a, i + l, s || null, o) !== !1 && a.content.size) {
        let u = l + 1;
        a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, t - u), r, i + u);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, r, i) {
    let s = "", o = !0;
    return this.nodesBetween(e, t, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (o ? o = !1 : s += r), s += c;
    }, 0), s;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), s = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), s = 1); s < e.content.length; s++)
      i.push(e.content[s]);
    return new k(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let s = 0, o = 0; o < t; s++) {
        let l = this.content[s], a = o + l.nodeSize;
        a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), r.push(l), i += l.nodeSize), o = a;
      }
    return new k(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? k.empty : e == 0 && t == this.content.length ? this : new k(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), s = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new k(i, s);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new k([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new k(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return Pl(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return Bl(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e, t = -1) {
    if (e == 0)
      return xr(0, e);
    if (e == this.size)
      return xr(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, i = 0; ; r++) {
      let s = this.child(r), o = i + s.nodeSize;
      if (o >= e)
        return o == e || t > 0 ? xr(r + 1, o) : xr(r, i);
      i = o;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return k.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new k(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return k.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      r += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (t || (t = e.slice(0, i)), t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s);
    }
    return new k(t || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return k.empty;
    if (e instanceof k)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new k([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
k.empty = new k([], 0);
const yi = { index: 0, offset: 0 };
function xr(n, e) {
  return yi.index = n, yi.offset = e, yi;
}
function Rr(n, e) {
  if (n === e)
    return !0;
  if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(n);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (n.length != e.length)
      return !1;
    for (let r = 0; r < n.length; r++)
      if (!Rr(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !Rr(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
let q = class ji {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, r = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.eq(s))
        return e;
      if (this.type.excludes(s.type))
        t || (t = e.slice(0, i));
      else {
        if (s.type.excludes(this.type))
          return e;
        !r && s.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(s);
      }
    }
    return t || (t = e.slice()), r || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && Rr(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[t.type];
    if (!r)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    let i = r.create(t.attrs);
    return r.checkAttrs(i.attrs), i;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(t[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return ji.none;
    if (e instanceof ji)
      return [e];
    let t = e.slice();
    return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
};
q.none = [];
class Pr extends Error {
}
class C {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let r = zl(this.content, e + this.openStart, t);
    return r && new C(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new C(Ll(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return C.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new C(k.fromJSON(e, t.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild)
      r++;
    for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild)
      i++;
    return new C(e, r, i);
  }
}
C.empty = new C(k.empty, 0, 0);
function Ll(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), s = n.maybeChild(r), { index: o, offset: l } = n.findIndex(t);
  if (i == e || s.isText) {
    if (l != t && !n.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != o)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, s.copy(Ll(s.content, e - i - 1, t - i - 1)));
}
function zl(n, e, t, r) {
  let { index: i, offset: s } = n.findIndex(e), o = n.maybeChild(i);
  if (s == e || o.isText)
    return n.cut(0, e).append(t).append(n.cut(e));
  let l = zl(o.content, e - s - 1, t);
  return l && n.replaceChild(i, o.copy(l));
}
function ou(n, e, t) {
  if (t.openStart > n.depth)
    throw new Pr("Inserted content deeper than insertion position");
  if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new Pr("Inconsistent open depths");
  return Fl(n, e, t, 0);
}
function Fl(n, e, t, r) {
  let i = n.index(r), s = n.node(r);
  if (i == e.index(r) && r < n.depth - t.openStart) {
    let o = Fl(n, e, t, r + 1);
    return s.copy(s.content.replaceChild(i, o));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
      let o = n.parent, l = o.content;
      return Bt(o, l.cut(0, n.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: o, end: l } = lu(t, n);
      return Bt(s, $l(n, o, l, e, r));
    }
  else return Bt(s, Br(n, e, r));
}
function Vl(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new Pr("Cannot join " + e.type.name + " onto " + n.type.name);
}
function Hi(n, e, t) {
  let r = n.node(t);
  return Vl(r, e.node(t)), r;
}
function Pt(n, e) {
  let t = e.length - 1;
  t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function Bn(n, e, t, r) {
  let i = (e || n).node(t), s = 0, o = e ? e.index(t) : i.childCount;
  n && (s = n.index(t), n.depth > t ? s++ : n.textOffset && (Pt(n.nodeAfter, r), s++));
  for (let l = s; l < o; l++)
    Pt(i.child(l), r);
  e && e.depth == t && e.textOffset && Pt(e.nodeBefore, r);
}
function Bt(n, e) {
  return n.type.checkContent(e), n.copy(e);
}
function $l(n, e, t, r, i) {
  let s = n.depth > i && Hi(n, e, i + 1), o = r.depth > i && Hi(t, r, i + 1), l = [];
  return Bn(null, n, i, l), s && o && e.index(i) == t.index(i) ? (Vl(s, o), Pt(Bt(s, $l(n, e, t, r, i + 1)), l)) : (s && Pt(Bt(s, Br(n, e, i + 1)), l), Bn(e, t, i, l), o && Pt(Bt(o, Br(t, r, i + 1)), l)), Bn(r, null, i, l), new k(l);
}
function Br(n, e, t) {
  let r = [];
  if (Bn(null, n, t, r), n.depth > t) {
    let i = Hi(n, e, t + 1);
    Pt(Bt(i, Br(n, e, t + 1)), r);
  }
  return Bn(e, null, t, r), new k(r);
}
function lu(n, e) {
  let t = e.depth - n.openStart, i = e.node(t).copy(n.content);
  for (let s = t - 1; s >= 0; s--)
    i = e.node(s).copy(k.from(i));
  return {
    start: i.resolveNoCache(n.openStart + t),
    end: i.resolveNoCache(i.content.size - n.openEnd - t)
  };
}
class Hn {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.path = t, this.parentOffset = r, this.depth = t.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(t);
    return r ? e.child(t).cut(r) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let r = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let s = 0; s < e; s++)
      i += r.child(s).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return q.none;
    if (this.textOffset)
      return e.child(t).marks;
    let r = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!r) {
      let l = r;
      r = i, i = l;
    }
    let s = r.marks;
    for (var o = 0; o < s.length; o++)
      s[o].type.spec.inclusive === !1 && (!i || !s[o].isInSet(i.marks)) && (s = s[o--].removeFromSet(s));
    return s;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let r = t.marks, i = e.parent.maybeChild(e.index());
    for (var s = 0; s < r.length; s++)
      r[s].type.spec.inclusive === !1 && (!i || !r[s].isInSet(i.marks)) && (r = r[s--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!t || t(this.node(r))))
        return new Lr(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let r = [], i = 0, s = t;
    for (let o = e; ; ) {
      let { index: l, offset: a } = o.content.findIndex(s), c = s - a;
      if (r.push(o, l, i + a), !c || (o = o.child(l), o.isText))
        break;
      s = c - 1, i += a + 1;
    }
    return new Hn(t, r, s);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    let r = Us.get(e);
    if (r)
      for (let s = 0; s < r.elts.length; s++) {
        let o = r.elts[s];
        if (o.pos == t)
          return o;
      }
    else
      Us.set(e, r = new au());
    let i = r.elts[r.i] = Hn.resolve(e, t);
    return r.i = (r.i + 1) % cu, i;
  }
}
class au {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const cu = 12, Us = /* @__PURE__ */ new WeakMap();
class Lr {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const uu = /* @__PURE__ */ Object.create(null);
let Lt = class _i {
  /**
  @internal
  */
  constructor(e, t, r, i = q.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = r || k.empty;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, t, r, i = 0) {
    this.content.nodesBetween(e, t, r, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.
  */
  textBetween(e, t, r, i) {
    return this.content.textBetween(e, t, r, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, t, r) {
    return this.type == e && Rr(this.attrs, t || e.defaultAttrs || uu) && q.sameSet(this.marks, r || q.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new _i(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new _i(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, t = this.content.size, r = !1) {
    if (e == t)
      return C.empty;
    let i = this.resolve(e), s = this.resolve(t), o = r ? 0 : i.sharedDepth(t), l = i.start(o), c = i.node(o).content.cut(i.pos - l, s.pos - l);
    return new C(c, i.depth - o, s.depth - o);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, t, r) {
    return ou(this.resolve(e), this.resolve(t), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: r, offset: i } = t.content.findIndex(e);
      if (t = t.maybeChild(r), !t)
        return null;
      if (i == e || t.isText)
        return t;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: t, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(t), index: t, offset: r };
    let i = this.content.child(t - 1);
    return { node: i, index: t - 1, offset: r - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return Hn.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return Hn.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, r) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (s) => (r.isInSet(s.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), jl(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, t, r = k.empty, i = 0, s = r.childCount) {
    let o = this.contentMatchAt(e).matchFragment(r, i, s), l = o && o.matchFragment(this.content, t);
    if (!l || !l.validEnd)
      return !1;
    for (let a = i; a < s; a++)
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let s = this.contentMatchAt(e).matchType(r), o = s && s.matchFragment(this.content, t);
    return o ? o.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = q.none;
    for (let t = 0; t < this.marks.length; t++) {
      let r = this.marks[t];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!q.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, r);
    }
    let i = k.fromJSON(e, t.content), s = e.nodeType(t.type).create(t.attrs, i, r);
    return s.type.checkAttrs(s.attrs), s;
  }
};
Lt.prototype.text = void 0;
class zr extends Lt {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    if (super(e, t, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : jl(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new zr(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new zr(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function jl(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    e = n[t].type.name + "(" + e + ")";
  return e;
}
class jt {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, t) {
    let r = new fu(e, t);
    if (r.next == null)
      return jt.empty;
    let i = Hl(r);
    r.next && r.err("Unexpected trailing text");
    let s = bu(yu(i));
    return vu(s, r), s;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, t = 0, r = e.childCount) {
    let i = this;
    for (let s = t; i && s < r; s++)
      i = i.matchType(e.child(s).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[t].type == e.next[r].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, t = !1, r = 0) {
    let i = [this];
    function s(o, l) {
      let a = o.matchFragment(e, r);
      if (a && (!t || a.validEnd))
        return k.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < o.next.length; c++) {
        let { type: u, next: f } = o.next[c];
        if (!(u.isText || u.hasRequiredAttrs()) && i.indexOf(f) == -1) {
          i.push(f);
          let d = s(f, l.concat(u));
          if (d)
            return d;
        }
      }
      return null;
    }
    return s(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), s = i.match;
      if (s.matchType(e)) {
        let o = [];
        for (let l = i; l.type; l = l.via)
          o.push(l.type);
        return o.reverse();
      }
      for (let o = 0; o < s.next.length; o++) {
        let { type: l, next: a } = s.next[o];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!i.type || a.validEnd) && (r.push({ match: l.contentMatch, type: l, via: i }), t[l.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function t(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && t(r.next[i].next);
    }
    return t(this), e.map((r, i) => {
      let s = i + (r.validEnd ? "*" : " ") + " ";
      for (let o = 0; o < r.next.length; o++)
        s += (o ? ", " : "") + r.next[o].type.name + "->" + e.indexOf(r.next[o].next);
      return s;
    }).join(`
`);
  }
}
jt.empty = new jt(!0);
class fu {
  constructor(e, t) {
    this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function Hl(n) {
  let e = [];
  do
    e.push(du(n));
  while (n.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function du(n) {
  let e = [];
  do
    e.push(hu(n));
  while (n.next && n.next != ")" && n.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function hu(n) {
  let e = gu(n);
  for (; ; )
    if (n.eat("+"))
      e = { type: "plus", expr: e };
    else if (n.eat("*"))
      e = { type: "star", expr: e };
    else if (n.eat("?"))
      e = { type: "opt", expr: e };
    else if (n.eat("{"))
      e = pu(n, e);
    else
      break;
  return e;
}
function Gs(n) {
  /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
  let e = Number(n.next);
  return n.pos++, e;
}
function pu(n, e) {
  let t = Gs(n), r = t;
  return n.eat(",") && (n.next != "}" ? r = Gs(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: r, expr: e };
}
function mu(n, e) {
  let t = n.nodeTypes, r = t[e];
  if (r)
    return [r];
  let i = [];
  for (let s in t) {
    let o = t[s];
    o.groups.indexOf(e) > -1 && i.push(o);
  }
  return i.length == 0 && n.err("No node type or group '" + e + "' found"), i;
}
function gu(n) {
  if (n.eat("(")) {
    let e = Hl(n);
    return n.eat(")") || n.err("Missing closing paren"), e;
  } else if (/\W/.test(n.next))
    n.err("Unexpected token '" + n.next + "'");
  else {
    let e = mu(n, n.next).map((t) => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t }));
    return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function yu(n) {
  let e = [[]];
  return i(s(n, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function r(o, l, a) {
    let c = { term: a, to: l };
    return e[o].push(c), c;
  }
  function i(o, l) {
    o.forEach((a) => a.to = l);
  }
  function s(o, l) {
    if (o.type == "choice")
      return o.exprs.reduce((a, c) => a.concat(s(c, l)), []);
    if (o.type == "seq")
      for (let a = 0; ; a++) {
        let c = s(o.exprs[a], l);
        if (a == o.exprs.length - 1)
          return c;
        i(c, l = t());
      }
    else if (o.type == "star") {
      let a = t();
      return r(l, a), i(s(o.expr, a), a), [r(a)];
    } else if (o.type == "plus") {
      let a = t();
      return i(s(o.expr, l), a), i(s(o.expr, a), a), [r(a)];
    } else {
      if (o.type == "opt")
        return [r(l)].concat(s(o.expr, l));
      if (o.type == "range") {
        let a = l;
        for (let c = 0; c < o.min; c++) {
          let u = t();
          i(s(o.expr, a), u), a = u;
        }
        if (o.max == -1)
          i(s(o.expr, a), a);
        else
          for (let c = o.min; c < o.max; c++) {
            let u = t();
            r(a, u), i(s(o.expr, a), u), a = u;
          }
        return [r(a)];
      } else {
        if (o.type == "name")
          return [r(l, void 0, o.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function _l(n, e) {
  return e - n;
}
function Ys(n, e) {
  let t = [];
  return r(e), t.sort(_l);
  function r(i) {
    let s = n[i];
    if (s.length == 1 && !s[0].term)
      return r(s[0].to);
    t.push(i);
    for (let o = 0; o < s.length; o++) {
      let { term: l, to: a } = s[o];
      !l && t.indexOf(a) == -1 && r(a);
    }
  }
}
function bu(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(Ys(n, 0));
  function t(r) {
    let i = [];
    r.forEach((o) => {
      n[o].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let u = 0; u < i.length; u++)
          i[u][0] == l && (c = i[u][1]);
        Ys(n, a).forEach((u) => {
          c || i.push([l, c = []]), c.indexOf(u) == -1 && c.push(u);
        });
      });
    });
    let s = e[r.join(",")] = new jt(r.indexOf(n.length - 1) > -1);
    for (let o = 0; o < i.length; o++) {
      let l = i[o][1].sort(_l);
      s.next.push({ type: i[o][0], next: e[l.join(",")] || t(l) });
    }
    return s;
  }
}
function vu(n, e) {
  for (let t = 0, r = [n]; t < r.length; t++) {
    let i = r[t], s = !i.validEnd, o = [];
    for (let l = 0; l < i.next.length; l++) {
      let { type: a, next: c } = i.next[l];
      o.push(a.name), s && !(a.isText || a.hasRequiredAttrs()) && (s = !1), r.indexOf(c) == -1 && r.push(c);
    }
    s && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function Wl(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let r = n[t];
    if (!r.hasDefault)
      return null;
    e[t] = r.default;
  }
  return e;
}
function Kl(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r in n) {
    let i = e && e[r];
    if (i === void 0) {
      let s = n[r];
      if (s.hasDefault)
        i = s.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    t[r] = i;
  }
  return t;
}
function ql(n, e, t, r) {
  for (let i in e)
    if (!(i in n))
      throw new RangeError(`Unsupported attribute ${i} for ${t} of type ${i}`);
  for (let i in n) {
    let s = n[i];
    s.validate && s.validate(e[i]);
  }
}
function Jl(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      t[r] = new ku(n, r, e[r]);
  return t;
}
let Xs = class Ul {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.name = e, this.schema = t, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = Jl(e, r.attrs), this.defaultAttrs = Wl(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == jt.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : Kl(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, t, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new Lt(this, this.computeAttrs(e), k.from(t), q.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, t, r) {
    return t = k.from(t), this.checkContent(t), new Lt(this, this.computeAttrs(e), t, q.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, t, r) {
    if (e = this.computeAttrs(e), t = k.from(t), t.size) {
      let o = this.contentMatch.fillBefore(t);
      if (!o)
        return null;
      t = o.append(t);
    }
    let i = this.contentMatch.matchFragment(t), s = i && i.fillBefore(k.empty, !0);
    return s ? new Lt(this, e, t.append(s), q.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(e) {
    ql(this.attrs, e, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let t;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? t && t.push(e[r]) : t || (t = e.slice(0, r));
    return t ? t.length ? t : q.none : e;
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((s, o) => r[s] = new Ul(s, t, o));
    let i = t.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let s in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
function xu(n, e, t) {
  let r = t.split("|");
  return (i) => {
    let s = i === null ? "null" : typeof i;
    if (r.indexOf(s) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${n}, got ${s}`);
  };
}
class ku {
  constructor(e, t, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? xu(e, t, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Zr {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    this.name = e, this.rank = t, this.schema = r, this.spec = i, this.attrs = Jl(e, i.attrs), this.excluded = null;
    let s = Wl(this.attrs);
    this.instance = s ? new q(this, s) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new q(this, Kl(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((s, o) => r[s] = new Zr(s, i++, t, o)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  /**
  @internal
  */
  checkAttrs(e) {
    ql(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class Gl {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let i in e)
      t[i] = e[i];
    t.nodes = te.from(e.nodes), t.marks = te.from(e.marks || {}), this.nodes = Xs.compile(this.spec.nodes, this), this.marks = Zr.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let s = this.nodes[i], o = s.spec.content || "", l = s.spec.marks;
      if (s.contentMatch = r[o] || (r[o] = jt.parse(o, this.nodes)), s.inlineContent = s.contentMatch.inlineContent, s.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!s.isInline || !s.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = s;
      }
      s.markSet = l == "_" ? null : l ? Zs(this, l.split(" ")) : l == "" || !s.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let s = this.marks[i], o = s.spec.excludes;
      s.excluded = o == null ? [s] : o == "" ? [] : Zs(this, o.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, t = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof Xs) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, r, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, t) {
    let r = this.nodes.text;
    return new zr(r, r.defaultAttrs, e, q.setFrom(t));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  /**
  Deserialize a node from its JSON representation. This method is
  bound.
  */
  nodeFromJSON(e) {
    return Lt.fromJSON(this, e);
  }
  /**
  Deserialize a mark from its JSON representation. This method is
  bound.
  */
  markFromJSON(e) {
    return q.fromJSON(this, e);
  }
  /**
  @internal
  */
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function Zs(n, e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], s = n.marks[i], o = s;
    if (s)
      t.push(s);
    else
      for (let l in n.marks) {
        let a = n.marks[l];
        (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && t.push(o = a);
      }
    if (!o)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return t;
}
function wu(n) {
  return n.tag != null;
}
function Su(n) {
  return n.style != null;
}
class dt {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    t.forEach((i) => {
      if (wu(i))
        this.tags.push(i);
      else if (Su(i)) {
        let s = /[^=]*/.exec(i.style)[0];
        r.indexOf(s) < 0 && r.push(s), this.styles.push(i);
      }
    }), this.normalizeLists = !this.tags.some((i) => {
      if (!/^(ul|ol)\b/.test(i.tag) || !i.node)
        return !1;
      let s = e.nodes[i.node];
      return s.contentMatch.matchType(s);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, t = {}) {
    let r = new eo(this, t, !1);
    return r.addAll(e, q.none, t.from, t.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, t = {}) {
    let r = new eo(this, t, !0);
    return r.addAll(e, q.none, t.from, t.to), C.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let s = this.tags[i];
      if (Mu(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || t.matchesContext(s.context))) {
        if (s.getAttrs) {
          let o = s.getAttrs(e);
          if (o === !1)
            continue;
          s.attrs = o || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, t, r, i) {
    for (let s = i ? this.styles.indexOf(i) + 1 : 0; s < this.styles.length; s++) {
      let o = this.styles[s], l = o.style;
      if (!(l.indexOf(e) != 0 || o.context && !r.matchesContext(o.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
        if (o.getAttrs) {
          let a = o.getAttrs(t);
          if (a === !1)
            continue;
          o.attrs = a || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let t = [];
    function r(i) {
      let s = i.priority == null ? 50 : i.priority, o = 0;
      for (; o < t.length; o++) {
        let l = t[o];
        if ((l.priority == null ? 50 : l.priority) < s)
          break;
      }
      t.splice(o, 0, i);
    }
    for (let i in e.marks) {
      let s = e.marks[i].spec.parseDOM;
      s && s.forEach((o) => {
        r(o = to(o)), o.mark || o.ignore || o.clearMark || (o.mark = i);
      });
    }
    for (let i in e.nodes) {
      let s = e.nodes[i].spec.parseDOM;
      s && s.forEach((o) => {
        r(o = to(o)), o.node || o.ignore || o.mark || (o.node = i);
      });
    }
    return t;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.ParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new dt(e, dt.schemaRules(e)));
  }
}
const Yl = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, Cu = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, Xl = { ol: !0, ul: !0 }, Fr = 1, Vr = 2, Ln = 4;
function Qs(n, e, t) {
  return e != null ? (e ? Fr : 0) | (e === "full" ? Vr : 0) : n && n.whitespace == "pre" ? Fr | Vr : t & ~Ln;
}
class kr {
  constructor(e, t, r, i, s, o) {
    this.type = e, this.attrs = t, this.marks = r, this.solid = i, this.options = o, this.content = [], this.activeMarks = q.none, this.match = s || (o & Ln ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(k.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & Fr)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let s = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = s.withText(s.text.slice(0, s.text.length - i[0].length));
      }
    }
    let t = k.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(k.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Yl.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class eo {
  constructor(e, t, r) {
    this.parser = e, this.options = t, this.isOpen = r, this.open = 0;
    let i = t.topNode, s, o = Qs(null, t.preserveWhitespace, 0) | (r ? Ln : 0);
    i ? s = new kr(i.type, i.attrs, q.none, !0, t.topMatch || i.type.contentMatch, o) : r ? s = new kr(null, null, q.none, !0, null, o) : s = new kr(e.schema.topNodeType, null, q.none, !0, null, o), this.nodes = [s], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e, t) {
    e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
  }
  addTextNode(e, t) {
    let r = e.nodeValue, i = this.top;
    if (i.options & Vr || i.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (i.options & Fr)
        i.options & Vr ? r = r.replace(/\r\n?/g, `
`) : r = r.replace(/\r?\n|\r/g, " ");
      else if (r = r.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1) {
        let s = i.content[i.content.length - 1], o = e.previousSibling;
        (!s || o && o.nodeName == "BR" || s.isText && /[ \t\r\n\u000c]$/.test(s.text)) && (r = r.slice(1));
      }
      r && this.insertNode(this.parser.schema.text(r), t), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t, r) {
    let i = e.nodeName.toLowerCase(), s;
    Xl.hasOwnProperty(i) && this.parser.normalizeLists && Ou(e);
    let o = this.options.ruleFromNode && this.options.ruleFromNode(e) || (s = this.parser.matchTag(e, this, r));
    if (o ? o.ignore : Cu.hasOwnProperty(i))
      this.findInside(e), this.ignoreFallback(e, t);
    else if (!o || o.skip || o.closeParent) {
      o && o.closeParent ? this.open = Math.max(0, this.open - 1) : o && o.skip.nodeType && (e = o.skip);
      let l, a = this.top, c = this.needsBlock;
      if (Yl.hasOwnProperty(i))
        a.content.length && a.content[0].isInline && this.open && (this.open--, a = this.top), l = !0, a.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, t);
        return;
      }
      let u = o && o.skip ? t : this.readStyles(e, t);
      u && this.addAll(e, u), l && this.sync(a), this.needsBlock = c;
    } else {
      let l = this.readStyles(e, t);
      l && this.addElementByRule(e, o, l, o.consuming === !1 ? s : void 0);
    }
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, t) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), t);
  }
  // Called for ignored nodes
  ignoreFallback(e, t) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), t);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, t) {
    let r = e.style;
    if (r && r.length)
      for (let i = 0; i < this.parser.matchedStyles.length; i++) {
        let s = this.parser.matchedStyles[i], o = r.getPropertyValue(s);
        if (o)
          for (let l = void 0; ; ) {
            let a = this.parser.matchStyle(s, o, this, l);
            if (!a)
              break;
            if (a.ignore)
              return null;
            if (a.clearMark ? t = t.filter((c) => !a.clearMark(c)) : t = t.concat(this.parser.schema.marks[a.mark].create(a.attrs)), a.consuming === !1)
              l = a;
            else
              break;
          }
      }
    return t;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, t, r, i) {
    let s, o;
    if (t.node)
      if (o = this.parser.schema.nodes[t.node], o.isLeaf)
        this.insertNode(o.create(t.attrs), r) || this.leafFallback(e, r);
      else {
        let a = this.enter(o, t.attrs || null, r, t.preserveWhitespace);
        a && (s = !0, r = a);
      }
    else {
      let a = this.parser.schema.marks[t.mark];
      r = r.concat(a.create(t.attrs));
    }
    let l = this.top;
    if (o && o.isLeaf)
      this.findInside(e);
    else if (i)
      this.addElement(e, r, i);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a, r));
    else {
      let a = e;
      typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a, r);
    }
    s && this.sync(l) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, r, i) {
    let s = r || 0;
    for (let o = r ? e.childNodes[r] : e.firstChild, l = i == null ? null : e.childNodes[i]; o != l; o = o.nextSibling, ++s)
      this.findAtPoint(e, s), this.addDOM(o, t);
    this.findAtPoint(e, s);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, t) {
    let r, i;
    for (let s = this.open; s >= 0; s--) {
      let o = this.nodes[s], l = o.findWrapping(e);
      if (l && (!r || r.length > l.length) && (r = l, i = o, !l.length) || o.solid)
        break;
    }
    if (!r)
      return null;
    this.sync(i);
    for (let s = 0; s < r.length; s++)
      t = this.enterInner(r[s], null, t, !1);
    return t;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, t) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let i = this.textblockFromContext();
      i && (t = this.enterInner(i, null, t));
    }
    let r = this.findPlace(e, t);
    if (r) {
      this.closeExtra();
      let i = this.top;
      i.match && (i.match = i.match.matchType(e.type));
      let s = q.none;
      for (let o of r.concat(e.marks))
        (i.type ? i.type.allowsMarkType(o.type) : no(o.type, e.type)) && (s = o.addToSet(s));
      return i.content.push(e.mark(s)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, r, i) {
    let s = this.findPlace(e.create(t), r);
    return s && (s = this.enterInner(e, t, r, !0, i)), s;
  }
  // Open a node of the given type
  enterInner(e, t, r, i = !1, s) {
    this.closeExtra();
    let o = this.top;
    o.match = o.match && o.match.matchType(e);
    let l = Qs(e, s, o.options);
    o.options & Ln && o.content.length == 0 && (l |= Ln);
    let a = q.none;
    return r = r.filter((c) => (o.type ? o.type.allowsMarkType(c.type) : no(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new kr(e, t, a, i, null, l)), this.open++, r;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen);
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--)
      if (this.nodes[t] == e)
        return this.open = t, !0;
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let r = this.nodes[t].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == t && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, r) {
    if (e != t && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), s = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), o = (l, a) => {
      for (; l >= 0; l--) {
        let c = t[l];
        if (c == "") {
          if (l == t.length - 1 || l == 0)
            continue;
          for (; a >= s; a--)
            if (o(l - 1, a))
              return !0;
          return !1;
        } else {
          let u = a > 0 || a == 0 && i ? this.nodes[a].type : r && a >= s ? r.node(a - s).type : null;
          if (!u || u.name != c && u.groups.indexOf(c) == -1)
            return !1;
          a--;
        }
      }
      return !0;
    };
    return o(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let r = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let t in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[t];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
}
function Ou(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && Xl.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
  }
}
function Mu(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function to(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function no(n, e) {
  let t = e.schema.nodes;
  for (let r in t) {
    let i = t[r];
    if (!i.allowsMarkType(n))
      continue;
    let s = [], o = (l) => {
      s.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: u } = l.edge(a);
        if (c == e || s.indexOf(u) < 0 && o(u))
          return !0;
      }
    };
    if (o(i.contentMatch))
      return !0;
  }
}
class Jt {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, t) {
    this.nodes = e, this.marks = t;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, t = {}, r) {
    r || (r = bi(t).createDocumentFragment());
    let i = r, s = [];
    return e.forEach((o) => {
      if (s.length || o.marks.length) {
        let l = 0, a = 0;
        for (; l < s.length && a < o.marks.length; ) {
          let c = o.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(s[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < s.length; )
          i = s.pop()[1];
        for (; a < o.marks.length; ) {
          let c = o.marks[a++], u = this.serializeMark(c, o.isInline, t);
          u && (s.push([c, i]), i.appendChild(u.dom), i = u.contentDOM || u.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(o, t));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, t) {
    let { dom: r, contentDOM: i } = Er(bi(t), this.nodes[e.type.name](e), null, e.attrs);
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, i);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, t = {}) {
    let r = this.serializeNodeInner(e, t);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let s = this.serializeMark(e.marks[i], e.isInline, t);
      s && ((s.contentDOM || s.dom).appendChild(r), r = s.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, t, r = {}) {
    let i = this.marks[e.type.name];
    return i && Er(bi(r), i(e, t), null, e.attrs);
  }
  static renderSpec(e, t, r = null, i) {
    return Er(e, t, r, i);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new Jt(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let t = ro(e.nodes);
    return t.text || (t.text = (r) => r.text), t;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return ro(e.marks);
  }
}
function ro(n) {
  let e = {};
  for (let t in n) {
    let r = n[t].spec.toDOM;
    r && (e[t] = r);
  }
  return e;
}
function bi(n) {
  return n.document || window.document;
}
const io = /* @__PURE__ */ new WeakMap();
function Tu(n) {
  let e = io.get(n);
  return e === void 0 && io.set(n, e = Eu(n)), e;
}
function Eu(n) {
  let e = null;
  function t(r) {
    if (r && typeof r == "object")
      if (Array.isArray(r))
        if (typeof r[0] == "string")
          e || (e = []), e.push(r);
        else
          for (let i = 0; i < r.length; i++)
            t(r[i]);
      else
        for (let i in r)
          t(r[i]);
  }
  return t(n), e;
}
function Er(n, e, t, r) {
  if (typeof e == "string")
    return { dom: n.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let i = e[0], s;
  if (typeof i != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (s = Tu(r)) && s.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let o = i.indexOf(" ");
  o > 0 && (t = i.slice(0, o), i = i.slice(o + 1));
  let l, a = t ? n.createElementNS(t, i) : n.createElement(i), c = e[1], u = 1;
  if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
    u = 2;
    for (let f in c)
      if (c[f] != null) {
        let d = f.indexOf(" ");
        d > 0 ? a.setAttributeNS(f.slice(0, d), f.slice(d + 1), c[f]) : a.setAttribute(f, c[f]);
      }
  }
  for (let f = u; f < e.length; f++) {
    let d = e[f];
    if (d === 0) {
      if (f < e.length - 1 || f > u)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: a, contentDOM: a };
    } else {
      let { dom: h, contentDOM: p } = Er(n, d, t, r);
      if (a.appendChild(h), p) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = p;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const Zl = 65535, Ql = Math.pow(2, 16);
function Nu(n, e) {
  return n + e * Ql;
}
function so(n) {
  return n & Zl;
}
function Du(n) {
  return (n - (n & Zl)) / Ql;
}
const ea = 1, ta = 2, Nr = 4, na = 8;
class Wi {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.delInfo = t, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & na) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (ea | Nr)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (ta | Nr)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Nr) > 0;
  }
}
class ve {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && ve.empty)
      return ve.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, r = so(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + t + Du(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0, s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], u = this.ranges[l + o], f = a + c;
      if (e <= f) {
        let d = c ? e == a ? -1 : e == f ? 1 : t : t, h = a + i + (d < 0 ? 0 : u);
        if (r)
          return h;
        let p = e == (t < 0 ? a : f) ? null : Nu(l / 3, e - a), m = e == a ? ta : e == f ? ea : Nr;
        return (t < 0 ? e != a : e != f) && (m |= na), new Wi(h, m, p);
      }
      i += u - c;
    }
    return r ? e + i : new Wi(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let r = 0, i = so(t), s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], u = a + c;
      if (e <= u && l == i * 3)
        return !0;
      r += this.ranges[l + o] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, s = 0; i < this.ranges.length; i += 3) {
      let o = this.ranges[i], l = o - (this.inverted ? s : 0), a = o + (this.inverted ? 0 : s), c = this.ranges[i + t], u = this.ranges[i + r];
      e(l, l + c, a, a + u), s += u - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new ve(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? ve.empty : new ve(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
ve.empty = new ve([]);
class un {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e = [], t, r = 0, i = e.length) {
    this.maps = e, this.mirror = t, this.from = r, this.to = i;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, t = this.maps.length) {
    return new un(this.maps, this.mirror, e, t);
  }
  /**
  @internal
  */
  copy() {
    return new un(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, t) {
    this.to = this.maps.push(e), t != null && this.setMirror(this.maps.length - 1, t);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let t = 0, r = this.maps.length; t < e.maps.length; t++) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t], i != null && i < t ? r + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++)
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, t) {
    this.mirror || (this.mirror = []), this.mirror.push(e, t);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, r = this.maps.length + e.maps.length; t >= 0; t--) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t].invert(), i != null && i > t ? r - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new un();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let r = this.from; r < this.to; r++)
      e = this.maps[r].map(e, t);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0;
    for (let s = this.from; s < this.to; s++) {
      let o = this.maps[s], l = o.mapResult(e, t);
      if (l.recover != null) {
        let a = this.getMirror(s);
        if (a != null && a > s && a < this.to) {
          s = a, e = this.maps[a].recover(l.recover);
          continue;
        }
      }
      i |= l.delInfo, e = l.pos;
    }
    return r ? e : new Wi(e, i, null);
  }
}
const vi = /* @__PURE__ */ Object.create(null);
class oe {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return ve.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = vi[t.stepType];
    if (!r)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in vi)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return vi[e] = t, t.prototype.jsonID = e, t;
  }
}
class U {
  /**
  @internal
  */
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new U(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new U(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, r, i) {
    try {
      return U.ok(e.replace(t, r, i));
    } catch (s) {
      if (s instanceof Pr)
        return U.fail(s.message);
      throw s;
    }
  }
}
function ps(n, e, t) {
  let r = [];
  for (let i = 0; i < n.childCount; i++) {
    let s = n.child(i);
    s.content.size && (s = s.copy(ps(s.content, e, s))), s.isInline && (s = e(s, t, i)), r.push(s);
  }
  return k.fromArray(r);
}
class at extends oe {
  /**
  Create a mark step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), s = new C(ps(t.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), i), t.openStart, t.openEnd);
    return U.fromReplace(e, this.from, this.to, s);
  }
  invert() {
    return new $e(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new at(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof at && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new at(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new at(t.from, t.to, e.markFromJSON(t.mark));
  }
}
oe.jsonID("addMark", at);
class $e extends oe {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new C(ps(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return U.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new at(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new $e(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof $e && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new $e(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new $e(t.from, t.to, e.markFromJSON(t.mark));
  }
}
oe.jsonID("removeMark", $e);
class ct extends oe {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return U.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return U.fromReplace(e, this.pos, this.pos + 1, new C(k.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(r))
            return new ct(this.pos, t.marks[i]);
        return new ct(this.pos, this.mark);
      }
    }
    return new pn(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new ct(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new ct(t.pos, e.markFromJSON(t.mark));
  }
}
oe.jsonID("addNodeMark", ct);
class pn extends oe {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return U.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return U.fromReplace(e, this.pos, this.pos + 1, new C(k.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new ct(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new pn(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new pn(t.pos, e.markFromJSON(t.mark));
  }
}
oe.jsonID("removeNodeMark", pn);
class Y extends oe {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, r, i = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && Ki(e, this.from, this.to) ? U.fail("Structure replace would overwrite content") : U.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new ve([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new Y(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new Y(t.pos, Math.max(t.pos, r.pos), this.slice);
  }
  merge(e) {
    if (!(e instanceof Y) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? C.empty : new C(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new Y(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? C.empty : new C(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new Y(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new Y(t.from, t.to, C.fromJSON(e, t.slice), !!t.structure);
  }
}
oe.jsonID("replace", Y);
class X extends oe {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, r, i, s, o, l = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = s, this.insert = o, this.structure = l;
  }
  apply(e) {
    if (this.structure && (Ki(e, this.from, this.gapFrom) || Ki(e, this.gapTo, this.to)))
      return U.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return U.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? U.fromReplace(e, this.from, this.to, r) : U.fail("Content does not fit in gap");
  }
  getMap() {
    return new ve([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new X(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1), s = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || i < t.pos || s > r.pos ? null : new X(t.pos, r.pos, i, s, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new X(t.from, t.to, t.gapFrom, t.gapTo, C.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
oe.jsonID("replaceAround", X);
function Ki(n, e, t) {
  let r = n.resolve(e), i = t - e, s = r.depth;
  for (; i > 0 && s > 0 && r.indexAfter(s) == r.node(s).childCount; )
    s--, i--;
  if (i > 0) {
    let o = r.node(s).maybeChild(r.indexAfter(s));
    for (; i > 0; ) {
      if (!o || o.isLeaf)
        return !0;
      o = o.firstChild, i--;
    }
  }
  return !1;
}
function Au(n, e, t, r) {
  let i = [], s = [], o, l;
  n.doc.nodesBetween(e, t, (a, c, u) => {
    if (!a.isInline)
      return;
    let f = a.marks;
    if (!r.isInSet(f) && u.type.allowsMarkType(r.type)) {
      let d = Math.max(c, e), h = Math.min(c + a.nodeSize, t), p = r.addToSet(f);
      for (let m = 0; m < f.length; m++)
        f[m].isInSet(p) || (o && o.to == d && o.mark.eq(f[m]) ? o.to = h : i.push(o = new $e(d, h, f[m])));
      l && l.to == d ? l.to = h : s.push(l = new at(d, h, r));
    }
  }), i.forEach((a) => n.step(a)), s.forEach((a) => n.step(a));
}
function Iu(n, e, t, r) {
  let i = [], s = 0;
  n.doc.nodesBetween(e, t, (o, l) => {
    if (!o.isInline)
      return;
    s++;
    let a = null;
    if (r instanceof Zr) {
      let c = o.marks, u;
      for (; u = r.isInSet(c); )
        (a || (a = [])).push(u), c = u.removeFromSet(c);
    } else r ? r.isInSet(o.marks) && (a = [r]) : a = o.marks;
    if (a && a.length) {
      let c = Math.min(l + o.nodeSize, t);
      for (let u = 0; u < a.length; u++) {
        let f = a[u], d;
        for (let h = 0; h < i.length; h++) {
          let p = i[h];
          p.step == s - 1 && f.eq(i[h].style) && (d = p);
        }
        d ? (d.to = c, d.step = s) : i.push({ style: f, from: Math.max(l, e), to: c, step: s });
      }
    }
  }), i.forEach((o) => n.step(new $e(o.from, o.to, o.style)));
}
function ra(n, e, t, r = t.contentMatch, i = !0) {
  let s = n.doc.nodeAt(e), o = [], l = e + 1;
  for (let a = 0; a < s.childCount; a++) {
    let c = s.child(a), u = l + c.nodeSize, f = r.matchType(c.type);
    if (!f)
      o.push(new Y(l, u, C.empty));
    else {
      r = f;
      for (let d = 0; d < c.marks.length; d++)
        t.allowsMarkType(c.marks[d].type) || n.step(new $e(l, u, c.marks[d]));
      if (i && c.isText && t.whitespace != "pre") {
        let d, h = /\r?\n|\r/g, p;
        for (; d = h.exec(c.text); )
          p || (p = new C(k.from(t.schema.text(" ", t.allowedMarks(c.marks))), 0, 0)), o.push(new Y(l + d.index, l + d.index + d[0].length, p));
      }
    }
    l = u;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(k.empty, !0);
    n.replace(l, l, new C(a, 0, 0));
  }
  for (let a = o.length - 1; a >= 0; a--)
    n.step(o[a]);
}
function Ru(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function wn(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth; ; --r) {
    let i = n.$from.node(r), s = n.$from.index(r), o = n.$to.indexAfter(r);
    if (r < n.depth && i.canReplace(s, o, t))
      return r;
    if (r == 0 || i.type.spec.isolating || !Ru(i, s, o))
      break;
  }
  return null;
}
function Pu(n, e, t) {
  let { $from: r, $to: i, depth: s } = e, o = r.before(s + 1), l = i.after(s + 1), a = o, c = l, u = k.empty, f = 0;
  for (let p = s, m = !1; p > t; p--)
    m || r.index(p) > 0 ? (m = !0, u = k.from(r.node(p).copy(u)), f++) : a--;
  let d = k.empty, h = 0;
  for (let p = s, m = !1; p > t; p--)
    m || i.after(p + 1) < i.end(p) ? (m = !0, d = k.from(i.node(p).copy(d)), h++) : c++;
  n.step(new X(a, c, o, l, new C(u.append(d), f, h), u.size - f, !0));
}
function ms(n, e, t = null, r = n) {
  let i = Bu(n, e), s = i && Lu(r, e);
  return s ? i.map(oo).concat({ type: e, attrs: t }).concat(s.map(oo)) : null;
}
function oo(n) {
  return { type: n, attrs: null };
}
function Bu(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.contentMatchAt(r).findWrapping(e);
  if (!s)
    return null;
  let o = s.length ? s[0] : e;
  return t.canReplaceWith(r, i, o) ? s : null;
}
function Lu(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.child(r), o = e.contentMatch.findWrapping(s.type);
  if (!o)
    return null;
  let a = (o.length ? o[o.length - 1] : e).contentMatch;
  for (let c = r; a && c < i; c++)
    a = a.matchType(t.child(c).type);
  return !a || !a.validEnd ? null : o;
}
function zu(n, e, t) {
  let r = k.empty;
  for (let o = t.length - 1; o >= 0; o--) {
    if (r.size) {
      let l = t[o].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = k.from(t[o].type.create(t[o].attrs, r));
  }
  let i = e.start, s = e.end;
  n.step(new X(i, s, i, s, new C(r, 0, 0), t.length, !0));
}
function Fu(n, e, t, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let s = n.steps.length;
  n.doc.nodesBetween(e, t, (o, l) => {
    let a = typeof i == "function" ? i(o) : i;
    if (o.isTextblock && !o.hasMarkup(r, a) && ju(n.doc, n.mapping.slice(s).map(l), r)) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let h = r.whitespace == "pre", p = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        h && !p ? c = !1 : !h && p && (c = !0);
      }
      c === !1 && $u(n, o, l, s), ra(n, n.mapping.slice(s).map(l, 1), r, void 0, c === null);
      let u = n.mapping.slice(s), f = u.map(l, 1), d = u.map(l + o.nodeSize, 1);
      return n.step(new X(f, d, f + 1, d - 1, new C(k.from(r.create(a, null, o.marks)), 0, 0), 1, !0)), c === !0 && Vu(n, o, l, s), !1;
    }
  });
}
function Vu(n, e, t, r) {
  e.forEach((i, s) => {
    if (i.isText) {
      let o, l = /\r?\n|\r/g;
      for (; o = l.exec(i.text); ) {
        let a = n.mapping.slice(r).map(t + 1 + s + o.index);
        n.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function $u(n, e, t, r) {
  e.forEach((i, s) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let o = n.mapping.slice(r).map(t + 1 + s);
      n.replaceWith(o, o + 1, e.type.schema.text(`
`));
    }
  });
}
function ju(n, e, t) {
  let r = n.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, t);
}
function Hu(n, e, t, r, i) {
  let s = n.doc.nodeAt(e);
  if (!s)
    throw new RangeError("No node at given position");
  t || (t = s.type);
  let o = t.create(r, null, i || s.marks);
  if (s.isLeaf)
    return n.replaceWith(e, e + s.nodeSize, o);
  if (!t.validContent(s.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new X(e, e + s.nodeSize, e + 1, e + s.nodeSize - 1, new C(k.from(o), 0, 0), 1, !0));
}
function fn(n, e, t = 1, r) {
  let i = n.resolve(e), s = i.depth - t, o = r && r[r.length - 1] || i.parent;
  if (s < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, u = t - 2; c > s; c--, u--) {
    let f = i.node(c), d = i.index(c);
    if (f.type.spec.isolating)
      return !1;
    let h = f.content.cutByIndex(d, f.childCount), p = r && r[u + 1];
    p && (h = h.replaceChild(0, p.type.create(p.attrs)));
    let m = r && r[u] || f;
    if (!f.canReplace(d + 1, f.childCount) || !m.type.validContent(h))
      return !1;
  }
  let l = i.indexAfter(s), a = r && r[0];
  return i.node(s).canReplaceWith(l, l, a ? a.type : i.node(s + 1).type);
}
function _u(n, e, t = 1, r) {
  let i = n.doc.resolve(e), s = k.empty, o = k.empty;
  for (let l = i.depth, a = i.depth - t, c = t - 1; l > a; l--, c--) {
    s = k.from(i.node(l).copy(s));
    let u = r && r[c];
    o = k.from(u ? u.type.create(u.attrs, o) : i.node(l).copy(o));
  }
  n.step(new Y(e, e, new C(s.append(o), t, t), !0));
}
function bt(n, e) {
  let t = n.resolve(e), r = t.index();
  return ia(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function ia(n, e) {
  return !!(n && e && !n.isLeaf && n.canAppend(e));
}
function Qr(n, e, t = -1) {
  let r = n.resolve(e);
  for (let i = r.depth; ; i--) {
    let s, o, l = r.index(i);
    if (i == r.depth ? (s = r.nodeBefore, o = r.nodeAfter) : t > 0 ? (s = r.node(i + 1), l++, o = r.node(i).maybeChild(l)) : (s = r.node(i).maybeChild(l - 1), o = r.node(i + 1)), s && !s.isTextblock && ia(s, o) && r.node(i).canReplace(l, l + 1))
      return e;
    if (i == 0)
      break;
    e = t < 0 ? r.before(i) : r.after(i);
  }
}
function Wu(n, e, t) {
  let r = new Y(e - t, e + t, C.empty, !0);
  n.step(r);
}
function Ku(n, e, t) {
  let r = n.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), t))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.index(i);
      if (r.node(i).canReplaceWith(s, s, t))
        return r.before(i + 1);
      if (s > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.indexAfter(i);
      if (r.node(i).canReplaceWith(s, s, t))
        return r.after(i + 1);
      if (s < r.node(i).childCount)
        return null;
    }
  return null;
}
function qu(n, e, t) {
  let r = n.resolve(e);
  if (!t.content.size)
    return e;
  let i = t.content;
  for (let s = 0; s < t.openStart; s++)
    i = i.firstChild.content;
  for (let s = 1; s <= (t.openStart == 0 && t.size ? 2 : 1); s++)
    for (let o = r.depth; o >= 0; o--) {
      let l = o == r.depth ? 0 : r.pos <= (r.start(o + 1) + r.end(o + 1)) / 2 ? -1 : 1, a = r.index(o) + (l > 0 ? 1 : 0), c = r.node(o), u = !1;
      if (s == 1)
        u = c.canReplace(a, a, i);
      else {
        let f = c.contentMatchAt(a).findWrapping(i.firstChild.type);
        u = f && c.canReplaceWith(a, a, f[0]);
      }
      if (u)
        return l == 0 ? r.pos : l < 0 ? r.before(o + 1) : r.after(o + 1);
    }
  return null;
}
function ei(n, e, t = e, r = C.empty) {
  if (e == t && !r.size)
    return null;
  let i = n.resolve(e), s = n.resolve(t);
  return sa(i, s, r) ? new Y(e, t, r) : new Ju(i, s, r).fit();
}
function sa(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class Ju {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = k.empty;
    for (let i = 0; i <= e.depth; i++) {
      let s = e.node(i);
      this.frontier.push({
        type: s.type,
        match: s.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = k.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let s = this.placed, o = r.depth, l = i.depth;
    for (; o && l && s.childCount == 1; )
      s = s.firstChild.content, o--, l--;
    let a = new C(s, o, l);
    return e > -1 ? new X(r.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || r.pos != this.$to.pos ? new Y(r.pos, i.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let s = t.firstChild;
      if (t.childCount > 1 && (i = 0), s.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      t = s.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, s = null;
        r ? (s = xi(this.unplaced.content, r - 1).firstChild, i = s.content) : i = this.unplaced.content;
        let o = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], u, f = null;
          if (t == 1 && (o ? c.matchType(o.type) || (f = c.fillBefore(k.from(o), !1)) : s && a.compatibleContent(s.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, inject: f };
          if (t == 2 && o && (u = c.findWrapping(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, wrap: u };
          if (s && c.matchType(s.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = xi(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new C(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = xi(e, t);
    if (i.childCount <= 1 && t > 0) {
      let s = e.size - t <= t + i.size;
      this.unplaced = new C(In(e, t - 1, 1), t - 1, s ? t - 1 : r);
    } else
      this.unplaced = new C(In(e, t, 1), t, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: s }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (s)
      for (let m = 0; m < s.length; m++)
        this.openFrontierNode(s[m]);
    let o = this.unplaced, l = r ? r.content : o.content, a = o.openStart - e, c = 0, u = [], { match: f, type: d } = this.frontier[t];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        u.push(i.child(m));
      f = f.matchFragment(i);
    }
    let h = l.size + e - (o.content.size - o.openEnd);
    for (; c < l.childCount; ) {
      let m = l.child(c), y = f.matchType(m.type);
      if (!y)
        break;
      c++, (c > 1 || a == 0 || m.content.size) && (f = y, u.push(oa(m.mark(d.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let p = c == l.childCount;
    p || (h = -1), this.placed = Rn(this.placed, t, k.from(u)), this.frontier[t].match = f, p && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, y = l; m < h; m++) {
      let b = y.lastChild;
      this.frontier.push({ type: b.type, match: b.contentMatchAt(b.childCount) }), y = b.content;
    }
    this.unplaced = p ? e == 0 ? C.empty : new C(In(o.content, e - 1, 1), e - 1, h < 0 ? o.openEnd : e - 1) : new C(In(o.content, e, c), o.openStart, o.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !ki(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
      let { match: r, type: i } = this.frontier[t], s = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), o = ki(e, t, i, r, s);
      if (o) {
        for (let l = t - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l], u = ki(e, l, c, a, !0);
          if (!u || u.childCount)
            continue e;
        }
        return { depth: t, fit: o, move: s ? e.doc.resolve(e.after(t + 1)) : e };
      }
    }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = Rn(this.placed, t.depth, t.fit)), e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), s = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, s);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = Rn(this.placed, this.depth, k.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(k.empty, !0);
    t.childCount && (this.placed = Rn(this.placed, this.frontier.length, t));
  }
}
function In(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(In(n.firstChild.content, e - 1, t)));
}
function Rn(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(Rn(n.lastChild.content, e - 1, t)));
}
function xi(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function oa(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, oa(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(k.empty, !0)))), n.copy(r);
}
function ki(n, e, t, r, i) {
  let s = n.node(e), o = i ? n.indexAfter(e) : n.index(e);
  if (o == s.childCount && !t.compatibleContent(s.type))
    return null;
  let l = r.fillBefore(s.content, !0, o);
  return l && !Uu(t, s.content, o) ? l : null;
}
function Uu(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function Gu(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function Yu(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t);
  let i = n.doc.resolve(e), s = n.doc.resolve(t);
  if (sa(i, s, r))
    return n.step(new Y(e, t, r));
  let o = aa(i, n.doc.resolve(t));
  o[o.length - 1] == 0 && o.pop();
  let l = -(i.depth + 1);
  o.unshift(l);
  for (let d = i.depth, h = i.pos - 1; d > 0; d--, h--) {
    let p = i.node(d).type.spec;
    if (p.defining || p.definingAsContext || p.isolating)
      break;
    o.indexOf(d) > -1 ? l = d : i.before(d) == h && o.splice(1, 0, -d);
  }
  let a = o.indexOf(l), c = [], u = r.openStart;
  for (let d = r.content, h = 0; ; h++) {
    let p = d.firstChild;
    if (c.push(p), h == r.openStart)
      break;
    d = p.content;
  }
  for (let d = u - 1; d >= 0; d--) {
    let h = c[d], p = Gu(h.type);
    if (p && !h.sameMarkup(i.node(Math.abs(l) - 1)))
      u = d;
    else if (p || !h.type.isTextblock)
      break;
  }
  for (let d = r.openStart; d >= 0; d--) {
    let h = (d + u + 1) % (r.openStart + 1), p = c[h];
    if (p)
      for (let m = 0; m < o.length; m++) {
        let y = o[(m + a) % o.length], b = !0;
        y < 0 && (b = !1, y = -y);
        let w = i.node(y - 1), O = i.index(y - 1);
        if (w.canReplaceWith(O, O, p.type, p.marks))
          return n.replace(i.before(y), b ? s.after(y) : t, new C(la(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let f = n.steps.length;
  for (let d = o.length - 1; d >= 0 && (n.replace(e, t, r), !(n.steps.length > f)); d--) {
    let h = o[d];
    h < 0 || (e = i.before(h), t = s.after(h));
  }
}
function la(n, e, t, r, i) {
  if (e < t) {
    let s = n.firstChild;
    n = n.replaceChild(0, s.copy(la(s.content, e + 1, t, r, s)));
  }
  if (e > r) {
    let s = i.contentMatchAt(0), o = s.fillBefore(n).append(n);
    n = o.append(s.matchFragment(o).fillBefore(k.empty, !0));
  }
  return n;
}
function Xu(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let i = Ku(n.doc, e, r.type);
    i != null && (e = t = i);
  }
  n.replaceRange(e, t, new C(k.from(r), 0, 0));
}
function Zu(n, e, t) {
  let r = n.doc.resolve(e), i = n.doc.resolve(t), s = aa(r, i);
  for (let o = 0; o < s.length; o++) {
    let l = s[o], a = o == s.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return n.delete(r.start(l), i.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1))))
      return n.delete(r.before(l), i.after(l));
  }
  for (let o = 1; o <= r.depth && o <= i.depth; o++)
    if (e - r.start(o) == r.depth - o && t > r.end(o) && i.end(o) - t != i.depth - o)
      return n.delete(r.before(o), t);
  n.delete(e, t);
}
function aa(n, e) {
  let t = [], r = Math.min(n.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let s = n.start(i);
    if (s < n.pos - (n.depth - i) || e.end(i) > e.pos + (e.depth - i) || n.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (s == e.start(i) || i == n.depth && i == e.depth && n.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == s - 1) && t.push(i);
  }
  return t;
}
class dn extends oe {
  /**
  Construct an attribute step.
  */
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return U.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in t.attrs)
      r[s] = t.attrs[s];
    r[this.attr] = this.value;
    let i = t.type.create(r, null, t.marks);
    return U.fromReplace(e, this.pos, this.pos + 1, new C(k.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return ve.empty;
  }
  invert(e) {
    return new dn(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new dn(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new dn(t.pos, t.attr, t.value);
  }
}
oe.jsonID("attr", dn);
class _n extends oe {
  /**
  Construct an attribute step.
  */
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      t[i] = e.attrs[i];
    t[this.attr] = this.value;
    let r = e.type.create(t, e.content, e.marks);
    return U.ok(r);
  }
  getMap() {
    return ve.empty;
  }
  invert(e) {
    return new _n(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new _n(t.attr, t.value);
  }
}
oe.jsonID("docAttr", _n);
let mn = class extends Error {
};
mn = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
mn.prototype = Object.create(Error.prototype);
mn.prototype.constructor = mn;
mn.prototype.name = "TransformError";
class Qu {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new un();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed)
      throw new mn(t.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let t = e.apply(this.doc);
    return t.failed || this.addStep(e, t.doc), t;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, t = e, r = C.empty) {
    let i = ei(this.doc, e, t, r);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, t, r) {
    return this.replace(e, t, new C(k.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, t) {
    return this.replace(e, t, C.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, t, r) {
    return Yu(this, e, t, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, t, r) {
    return Xu(this, e, t, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, t) {
    return Zu(this, e, t), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, t) {
    return Pu(this, e, t), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, t = 1) {
    return Wu(this, e, t), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, t) {
    return zu(this, e, t), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, t = e, r, i = null) {
    return Fu(this, e, t, r, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, t, r = null, i) {
    return Hu(this, e, t, r, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, t, r) {
    return this.step(new dn(e, t, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, t) {
    return this.step(new _n(e, t)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, t) {
    return this.step(new ct(e, t)), this;
  }
  /**
  Remove a mark (or a mark of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, t) {
    if (!(t instanceof q)) {
      let r = this.doc.nodeAt(e);
      if (!r)
        throw new RangeError("No node at position " + e);
      if (t = t.isInSet(r.marks), !t)
        return this;
    }
    return this.step(new pn(e, t)), this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split.
  */
  split(e, t = 1, r) {
    return _u(this, e, t, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, t, r) {
    return Au(this, e, t, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, t, r) {
    return Iu(this, e, t, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, t, r) {
    return ra(this, e, t, r), this;
  }
}
const wi = /* @__PURE__ */ Object.create(null);
class F {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, t, r) {
    this.$anchor = e, this.$head = t, this.ranges = r || [new ef(e.min(t), e.max(t))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let t = 0; t < e.length; t++)
      if (e[t].$from.pos != e[t].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, t = C.empty) {
    let r = t.content.lastChild, i = null;
    for (let l = 0; l < t.openEnd; l++)
      i = r, r = r.lastChild;
    let s = e.steps.length, o = this.ranges;
    for (let l = 0; l < o.length; l++) {
      let { $from: a, $to: c } = o[l], u = e.mapping.slice(s);
      e.replaceRange(u.map(a.pos), u.map(c.pos), l ? C.empty : t), l == 0 && co(e, s, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, t) {
    let r = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      let { $from: o, $to: l } = i[s], a = e.mapping.slice(r), c = a.map(o.pos), u = a.map(l.pos);
      s ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, t), co(e, r, t.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, t, r = !1) {
    let i = e.parent.inlineContent ? new B(e) : sn(e.node(0), e.parent, e.pos, e.index(), t, r);
    if (i)
      return i;
    for (let s = e.depth - 1; s >= 0; s--) {
      let o = t < 0 ? sn(e.node(0), e.node(s), e.before(s + 1), e.index(s), t, r) : sn(e.node(0), e.node(s), e.after(s + 1), e.index(s) + 1, t, r);
      if (o)
        return o;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new Pe(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return sn(e, e, 0, 0, 1) || new Pe(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return sn(e, e, e.content.size, e.childCount, -1) || new Pe(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = wi[t.type];
    if (!r)
      throw new RangeError(`No selection type ${t.type} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, t) {
    if (e in wi)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return wi[e] = t, t.prototype.jsonID = e, t;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return B.between(this.$anchor, this.$head).getBookmark();
  }
}
F.prototype.visible = !0;
class ef {
  /**
  Create a range.
  */
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let lo = !1;
function ao(n) {
  !lo && !n.parent.inlineContent && (lo = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class B extends F {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, t = e) {
    ao(e), ao(t), super(e, t);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    if (!r.parent.inlineContent)
      return F.near(r);
    let i = e.resolve(t.map(this.anchor));
    return new B(i.parent.inlineContent ? i : r, r);
  }
  replace(e, t = C.empty) {
    if (super.replace(e, t), t == C.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof B && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new ti(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new B(e.resolve(t.anchor), e.resolve(t.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, t, r = t) {
    let i = e.resolve(t);
    return new this(i, r == t ? i : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, t, r) {
    let i = e.pos - t.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let s = F.findFrom(t, r, !0) || F.findFrom(t, -r, !0);
      if (s)
        t = s.$head;
      else
        return F.near(t, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (F.findFrom(e, -r, !0) || F.findFrom(e, r, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new B(e, t);
  }
}
F.jsonID("text", B);
class ti {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new ti(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return B.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class A extends F {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let t = e.nodeAfter, r = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, r), this.node = t;
  }
  map(e, t) {
    let { deleted: r, pos: i } = t.mapResult(this.anchor), s = e.resolve(i);
    return r ? F.near(s) : new A(s);
  }
  content() {
    return new C(k.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof A && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new gs(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new A(e.resolve(t.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, t) {
    return new A(e.resolve(t));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
A.prototype.visible = !1;
F.jsonID("node", A);
class gs {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: r } = e.mapResult(this.anchor);
    return t ? new ti(r, r) : new gs(r);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), r = t.nodeAfter;
    return r && A.isSelectable(r) ? new A(t) : F.near(t);
  }
}
class Pe extends F {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = C.empty) {
    if (t == C.empty) {
      e.delete(0, e.doc.content.size);
      let r = F.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new Pe(e);
  }
  map(e) {
    return new Pe(e);
  }
  eq(e) {
    return e instanceof Pe;
  }
  getBookmark() {
    return tf;
  }
}
F.jsonID("all", Pe);
const tf = {
  map() {
    return this;
  },
  resolve(n) {
    return new Pe(n);
  }
};
function sn(n, e, t, r, i, s = !1) {
  if (e.inlineContent)
    return B.create(n, t);
  for (let o = r - (i > 0 ? 0 : 1); i > 0 ? o < e.childCount : o >= 0; o += i) {
    let l = e.child(o);
    if (l.isAtom) {
      if (!s && A.isSelectable(l))
        return A.create(n, t - (i < 0 ? l.nodeSize : 0));
    } else {
      let a = sn(n, l, t + i, i < 0 ? l.childCount : 0, i, s);
      if (a)
        return a;
    }
    t += l.nodeSize * i;
  }
  return null;
}
function co(n, e, t) {
  let r = n.steps.length - 1;
  if (r < e)
    return;
  let i = n.steps[r];
  if (!(i instanceof Y || i instanceof X))
    return;
  let s = n.mapping.maps[r], o;
  s.forEach((l, a, c, u) => {
    o == null && (o = u);
  }), n.setSelection(F.near(n.doc.resolve(o), t));
}
const uo = 1, wr = 2, fo = 4;
class nf extends Qu {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | uo) & ~wr, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & uo) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= wr, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return q.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & wr) > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    super.addStep(e, t), this.updated = this.updated & ~wr, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, t = !0) {
    let r = this.selection;
    return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || q.none))), r.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, t, r) {
    let i = this.doc.type.schema;
    if (t == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = t), r = r ?? t, !e)
        return this.deleteRange(t, r);
      let s = this.storedMarks;
      if (!s) {
        let o = this.doc.resolve(t);
        s = r == t ? o.marks() : o.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(t, r, i.text(e, s)), this.selection.empty || this.setSelection(F.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, t) {
    return this.meta[typeof e == "string" ? e : e.key] = t, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= fo, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & fo) > 0;
  }
}
function ho(n, e) {
  return !e || !n ? n : n.bind(e);
}
class Pn {
  constructor(e, t, r) {
    this.name = e, this.init = ho(t.init, r), this.apply = ho(t.apply, r);
  }
}
const rf = [
  new Pn("doc", {
    init(n) {
      return n.doc || n.schema.topNodeType.createAndFill();
    },
    apply(n) {
      return n.doc;
    }
  }),
  new Pn("selection", {
    init(n, e) {
      return n.selection || F.atStart(e.doc);
    },
    apply(n) {
      return n.selection;
    }
  }),
  new Pn("storedMarks", {
    init(n) {
      return n.storedMarks || null;
    },
    apply(n, e, t, r) {
      return r.selection.$cursor ? n.storedMarks : null;
    }
  }),
  new Pn("scrollToSelection", {
    init() {
      return 0;
    },
    apply(n, e) {
      return n.scrolledIntoView ? e + 1 : e;
    }
  })
];
class Si {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = rf.slice(), t && t.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new Pn(r.key, r.spec.state, r));
    });
  }
}
class an {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, t = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != t) {
        let i = this.config.plugins[r];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let t = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let s = !1;
      for (let o = 0; o < this.config.plugins.length; o++) {
        let l = this.config.plugins[o];
        if (l.spec.appendTransaction) {
          let a = i ? i[o].n : 0, c = i ? i[o].state : this, u = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, c, r);
          if (u && r.filterTransaction(u, o)) {
            if (u.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let f = 0; f < this.config.plugins.length; f++)
                i.push(f < o ? { state: r, n: t.length } : { state: this, n: 0 });
            }
            t.push(u), r = r.applyInner(u), s = !0;
          }
          i && (i[o] = { state: r, n: t.length });
        }
      }
      if (!s)
        return { state: r, transactions: t };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let t = new an(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let s = r[i];
      t[s.name] = s.apply(e, this[s.name], this, t);
    }
    return t;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new nf(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let t = new Si(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new an(t);
    for (let i = 0; i < t.fields.length; i++)
      r[t.fields[i].name] = t.fields[i].init(e, r);
    return r;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let t = new Si(this.schema, e.plugins), r = t.fields, i = new an(t);
    for (let s = 0; s < r.length; s++) {
      let o = r[s].name;
      i[o] = this.hasOwnProperty(o) ? this[o] : r[s].init(e, i);
    }
    return i;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (t.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], s = i.spec.state;
        s && s.toJSON && (t[r] = s.toJSON.call(i, this[i.key]));
      }
    return t;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, t, r) {
    if (!t)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new Si(e.schema, e.plugins), s = new an(i);
    return i.fields.forEach((o) => {
      if (o.name == "doc")
        s.doc = Lt.fromJSON(e.schema, t.doc);
      else if (o.name == "selection")
        s.selection = F.fromJSON(s.doc, t.selection);
      else if (o.name == "storedMarks")
        t.storedMarks && (s.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let l in r) {
            let a = r[l], c = a.spec.state;
            if (a.key == o.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
              s[o.name] = c.fromJSON.call(a, e, t[l], s);
              return;
            }
          }
        s[o.name] = o.init(e, s);
      }
    }), s;
  }
}
function ca(n, e, t) {
  for (let r in n) {
    let i = n[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = ca(i, e, {})), t[r] = i;
  }
  return t;
}
class ye {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && ca(e.props, this, this.props), this.key = e.key ? e.key.key : ua("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Ci = /* @__PURE__ */ Object.create(null);
function ua(n) {
  return n in Ci ? n + "$" + ++Ci[n] : (Ci[n] = 0, n + "$");
}
class De {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = ua(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const ne = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, Wn = function(n) {
  let e = n.assignedSlot || n.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let qi = null;
const Xe = function(n, e, t) {
  let r = qi || (qi = document.createRange());
  return r.setEnd(n, t ?? n.nodeValue.length), r.setStart(n, e || 0), r;
}, sf = function() {
  qi = null;
}, Ht = function(n, e, t, r) {
  return t && (po(n, e, t, r, -1) || po(n, e, t, r, 1));
}, of = /^(img|br|input|textarea|hr)$/i;
function po(n, e, t, r, i) {
  for (; ; ) {
    if (n == t && e == r)
      return !0;
    if (e == (i < 0 ? 0 : Oe(n))) {
      let s = n.parentNode;
      if (!s || s.nodeType != 1 || rr(n) || of.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = ne(n) + (i < 0 ? 0 : 1), n = s;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (i < 0 ? -1 : 0)], n.contentEditable == "false")
        return !1;
      e = i < 0 ? Oe(n) : 0;
    } else
      return !1;
  }
}
function Oe(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function lf(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e)
      return n;
    if (n.nodeType == 1 && e > 0) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e - 1], e = Oe(n);
    } else if (n.parentNode && !rr(n))
      e = ne(n), n = n.parentNode;
    else
      return null;
  }
}
function af(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e < n.nodeValue.length)
      return n;
    if (n.nodeType == 1 && e < n.childNodes.length) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e], e = 0;
    } else if (n.parentNode && !rr(n))
      e = ne(n) + 1, n = n.parentNode;
    else
      return null;
  }
}
function cf(n, e, t) {
  for (let r = e == 0, i = e == Oe(n); r || i; ) {
    if (n == t)
      return !0;
    let s = ne(n);
    if (n = n.parentNode, !n)
      return !1;
    r = r && s == 0, i = i && s == Oe(n);
  }
}
function rr(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const ni = function(n) {
  return n.focusNode && Ht(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function Dt(n, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
function uf(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function ff(n, e, t) {
  if (n.caretPositionFromPoint)
    try {
      let r = n.caretPositionFromPoint(e, t);
      if (r)
        return { node: r.offsetNode, offset: Math.min(Oe(r.offsetNode), r.offset) };
    } catch {
    }
  if (n.caretRangeFromPoint) {
    let r = n.caretRangeFromPoint(e, t);
    if (r)
      return { node: r.startContainer, offset: Math.min(Oe(r.startContainer), r.startOffset) };
  }
}
const He = typeof navigator < "u" ? navigator : null, mo = typeof document < "u" ? document : null, vt = He && He.userAgent || "", Ji = /Edge\/(\d+)/.exec(vt), fa = /MSIE \d/.exec(vt), Ui = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(vt), he = !!(fa || Ui || Ji), ht = fa ? document.documentMode : Ui ? +Ui[1] : Ji ? +Ji[1] : 0, Be = !he && /gecko\/(\d+)/i.test(vt);
Be && +(/Firefox\/(\d+)/.exec(vt) || [0, 0])[1];
const Gi = !he && /Chrome\/(\d+)/.exec(vt), se = !!Gi, da = Gi ? +Gi[1] : 0, ce = !he && !!He && /Apple Computer/.test(He.vendor), gn = ce && (/Mobile\/\w+/.test(vt) || !!He && He.maxTouchPoints > 2), Ce = gn || (He ? /Mac/.test(He.platform) : !1), df = He ? /Win/.test(He.platform) : !1, Ie = /Android \d/.test(vt), ir = !!mo && "webkitFontSmoothing" in mo.documentElement.style, hf = ir ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function pf(n) {
  let e = n.defaultView && n.defaultView.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: n.documentElement.clientWidth,
    top: 0,
    bottom: n.documentElement.clientHeight
  };
}
function Ye(n, e) {
  return typeof n == "number" ? n : n[e];
}
function mf(n) {
  let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, r = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * r
  };
}
function go(n, e, t) {
  let r = n.someProp("scrollThreshold") || 0, i = n.someProp("scrollMargin") || 5, s = n.dom.ownerDocument;
  for (let o = t || n.dom; o; o = Wn(o)) {
    if (o.nodeType != 1)
      continue;
    let l = o, a = l == s.body, c = a ? pf(s) : mf(l), u = 0, f = 0;
    if (e.top < c.top + Ye(r, "top") ? f = -(c.top - e.top + Ye(i, "top")) : e.bottom > c.bottom - Ye(r, "bottom") && (f = e.bottom - e.top > c.bottom - c.top ? e.top + Ye(i, "top") - c.top : e.bottom - c.bottom + Ye(i, "bottom")), e.left < c.left + Ye(r, "left") ? u = -(c.left - e.left + Ye(i, "left")) : e.right > c.right - Ye(r, "right") && (u = e.right - c.right + Ye(i, "right")), u || f)
      if (a)
        s.defaultView.scrollBy(u, f);
      else {
        let d = l.scrollLeft, h = l.scrollTop;
        f && (l.scrollTop += f), u && (l.scrollLeft += u);
        let p = l.scrollLeft - d, m = l.scrollTop - h;
        e = { left: e.left - p, top: e.top - m, right: e.right - p, bottom: e.bottom - m };
      }
    if (a || /^(fixed|sticky)$/.test(getComputedStyle(o).position))
      break;
  }
}
function gf(n) {
  let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), r, i;
  for (let s = (e.left + e.right) / 2, o = t + 1; o < Math.min(innerHeight, e.bottom); o += 5) {
    let l = n.root.elementFromPoint(s, o);
    if (!l || l == n.dom || !n.dom.contains(l))
      continue;
    let a = l.getBoundingClientRect();
    if (a.top >= t - 20) {
      r = l, i = a.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: ha(n.dom) };
}
function ha(n) {
  let e = [], t = n.ownerDocument;
  for (let r = n; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), n != t); r = Wn(r))
    ;
  return e;
}
function yf({ refDOM: n, refTop: e, stack: t }) {
  let r = n ? n.getBoundingClientRect().top : 0;
  pa(t, r == 0 ? 0 : r - e);
}
function pa(n, e) {
  for (let t = 0; t < n.length; t++) {
    let { dom: r, top: i, left: s } = n[t];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != s && (r.scrollLeft = s);
  }
}
let tn = null;
function bf(n) {
  if (n.setActive)
    return n.setActive();
  if (tn)
    return n.focus(tn);
  let e = ha(n);
  n.focus(tn == null ? {
    get preventScroll() {
      return tn = { preventScroll: !0 }, !0;
    }
  } : void 0), tn || (tn = !1, pa(e, 0));
}
function ma(n, e) {
  let t, r = 2e8, i, s = 0, o = e.top, l = e.top, a, c;
  for (let u = n.firstChild, f = 0; u; u = u.nextSibling, f++) {
    let d;
    if (u.nodeType == 1)
      d = u.getClientRects();
    else if (u.nodeType == 3)
      d = Xe(u).getClientRects();
    else
      continue;
    for (let h = 0; h < d.length; h++) {
      let p = d[h];
      if (p.top <= o && p.bottom >= l) {
        o = Math.max(p.bottom, o), l = Math.min(p.top, l);
        let m = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
        if (m < r) {
          t = u, r = m, i = m && t.nodeType == 3 ? {
            left: p.right < e.left ? p.right : p.left,
            top: e.top
          } : e, u.nodeType == 1 && m && (s = f + (e.left >= (p.left + p.right) / 2 ? 1 : 0));
          continue;
        }
      } else p.top > e.top && !a && p.left <= e.left && p.right >= e.left && (a = u, c = { left: Math.max(p.left, Math.min(p.right, e.left)), top: p.top });
      !t && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom) && (s = f + 1);
    }
  }
  return !t && a && (t = a, i = c, r = 0), t && t.nodeType == 3 ? vf(t, i) : !t || r && t.nodeType == 1 ? { node: n, offset: s } : ma(t, i);
}
function vf(n, e) {
  let t = n.nodeValue.length, r = document.createRange();
  for (let i = 0; i < t; i++) {
    r.setEnd(n, i + 1), r.setStart(n, i);
    let s = it(r, 1);
    if (s.top != s.bottom && ys(e, s))
      return { node: n, offset: i + (e.left >= (s.left + s.right) / 2 ? 1 : 0) };
  }
  return { node: n, offset: 0 };
}
function ys(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function xf(n, e) {
  let t = n.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function kf(n, e, t) {
  let { node: r, offset: i } = ma(e, t), s = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let o = r.getBoundingClientRect();
    s = o.left != o.right && t.left > (o.left + o.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(r, i, s);
}
function wf(n, e, t, r) {
  let i = -1;
  for (let s = e, o = !1; s != n.dom; ) {
    let l = n.docView.nearestDesc(s, !0);
    if (!l)
      return null;
    if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM)) {
      let a = l.dom.getBoundingClientRect();
      if (l.node.isBlock && l.parent && (!o && a.left > r.left || a.top > r.top ? i = l.posBefore : (!o && a.right < r.left || a.bottom < r.top) && (i = l.posAfter), o = !0), !l.contentDOM && i < 0 && !l.node.isText)
        return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
    }
    s = l.dom.parentNode;
  }
  return i > -1 ? i : n.docView.posFromDOM(e, t, -1);
}
function ga(n, e, t) {
  let r = n.childNodes.length;
  if (r && t.top < t.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), s = i; ; ) {
      let o = n.childNodes[s];
      if (o.nodeType == 1) {
        let l = o.getClientRects();
        for (let a = 0; a < l.length; a++) {
          let c = l[a];
          if (ys(e, c))
            return ga(o, e, c);
        }
      }
      if ((s = (s + 1) % r) == i)
        break;
    }
  return n;
}
function Sf(n, e) {
  let t = n.dom.ownerDocument, r, i = 0, s = ff(t, e.left, e.top);
  s && ({ node: r, offset: i } = s);
  let o = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), l;
  if (!o || !n.dom.contains(o.nodeType != 1 ? o.parentNode : o)) {
    let c = n.dom.getBoundingClientRect();
    if (!ys(e, c) || (o = ga(n.dom, e, c), !o))
      return null;
  }
  if (ce)
    for (let c = o; r && c; c = Wn(c))
      c.draggable && (r = void 0);
  if (o = xf(o, e), r) {
    if (Be && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let u = r.childNodes[i], f;
      u.nodeName == "IMG" && (f = u.getBoundingClientRect()).right <= e.left && f.bottom > e.top && i++;
    }
    let c;
    ir && i && r.nodeType == 1 && (c = r.childNodes[i - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && i--, r == n.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = n.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (l = wf(n, r, i, e));
  }
  l == null && (l = kf(n, o, e));
  let a = n.docView.nearestDesc(o, !0);
  return { pos: l, inside: a ? a.posAtStart - a.border : -1 };
}
function yo(n) {
  return n.top < n.bottom || n.left < n.right;
}
function it(n, e) {
  let t = n.getClientRects();
  if (t.length) {
    let r = t[e < 0 ? 0 : t.length - 1];
    if (yo(r))
      return r;
  }
  return Array.prototype.find.call(t, yo) || n.getBoundingClientRect();
}
const Cf = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function ya(n, e, t) {
  let { node: r, offset: i, atom: s } = n.docView.domFromPos(e, t < 0 ? -1 : 1), o = ir || Be;
  if (r.nodeType == 3)
    if (o && (Cf.test(r.nodeValue) || (t < 0 ? !i : i == r.nodeValue.length))) {
      let a = it(Xe(r, i, i), t);
      if (Be && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let c = it(Xe(r, i - 1, i - 1), -1);
        if (c.top == a.top) {
          let u = it(Xe(r, i, i + 1), -1);
          if (u.top != a.top)
            return Dn(u, u.left < c.left);
        }
      }
      return a;
    } else {
      let a = i, c = i, u = t < 0 ? 1 : -1;
      return t < 0 && !i ? (c++, u = -1) : t >= 0 && i == r.nodeValue.length ? (a--, u = 1) : t < 0 ? a-- : c++, Dn(it(Xe(r, a, c), u), u < 0);
    }
  if (!n.state.doc.resolve(e - (s || 0)).parent.inlineContent) {
    if (s == null && i && (t < 0 || i == Oe(r))) {
      let a = r.childNodes[i - 1];
      if (a.nodeType == 1)
        return Oi(a.getBoundingClientRect(), !1);
    }
    if (s == null && i < Oe(r)) {
      let a = r.childNodes[i];
      if (a.nodeType == 1)
        return Oi(a.getBoundingClientRect(), !0);
    }
    return Oi(r.getBoundingClientRect(), t >= 0);
  }
  if (s == null && i && (t < 0 || i == Oe(r))) {
    let a = r.childNodes[i - 1], c = a.nodeType == 3 ? Xe(a, Oe(a) - (o ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (c)
      return Dn(it(c, 1), !1);
  }
  if (s == null && i < Oe(r)) {
    let a = r.childNodes[i];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let c = a ? a.nodeType == 3 ? Xe(a, 0, o ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (c)
      return Dn(it(c, -1), !0);
  }
  return Dn(it(r.nodeType == 3 ? Xe(r) : r, -t), t >= 0);
}
function Dn(n, e) {
  if (n.width == 0)
    return n;
  let t = e ? n.left : n.right;
  return { top: n.top, bottom: n.bottom, left: t, right: t };
}
function Oi(n, e) {
  if (n.height == 0)
    return n;
  let t = e ? n.top : n.bottom;
  return { top: t, bottom: t, left: n.left, right: n.right };
}
function ba(n, e, t) {
  let r = n.state, i = n.root.activeElement;
  r != e && n.updateState(e), i != n.dom && n.focus();
  try {
    return t();
  } finally {
    r != e && n.updateState(r), i != n.dom && i && i.focus();
  }
}
function Of(n, e, t) {
  let r = e.selection, i = t == "up" ? r.$from : r.$to;
  return ba(n, e, () => {
    let { node: s } = n.docView.domFromPos(i.pos, t == "up" ? -1 : 1);
    for (; ; ) {
      let l = n.docView.nearestDesc(s, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        s = l.contentDOM || l.dom;
        break;
      }
      s = l.dom.parentNode;
    }
    let o = ya(n, i.pos, 1);
    for (let l = s.firstChild; l; l = l.nextSibling) {
      let a;
      if (l.nodeType == 1)
        a = l.getClientRects();
      else if (l.nodeType == 3)
        a = Xe(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < a.length; c++) {
        let u = a[c];
        if (u.bottom > u.top + 1 && (t == "up" ? o.top - u.top > (u.bottom - o.top) * 2 : u.bottom - o.bottom > (o.bottom - u.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const Mf = /[\u0590-\u08ac]/;
function Tf(n, e, t) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, s = !i, o = i == r.parent.content.size, l = n.domSelection();
  return l ? !Mf.test(r.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? s : o : ba(n, e, () => {
    let { focusNode: a, focusOffset: c, anchorNode: u, anchorOffset: f } = n.domSelectionRange(), d = l.caretBidiLevel;
    l.modify("move", t, "character");
    let h = r.depth ? n.docView.domAfterPos(r.before()) : n.dom, { focusNode: p, focusOffset: m } = n.domSelectionRange(), y = p && !h.contains(p.nodeType == 1 ? p : p.parentNode) || a == p && c == m;
    try {
      l.collapse(u, f), a && (a != u || c != f) && l.extend && l.extend(a, c);
    } catch {
    }
    return d != null && (l.caretBidiLevel = d), y;
  }) : r.pos == r.start() || r.pos == r.end();
}
let bo = null, vo = null, xo = !1;
function Ef(n, e, t) {
  return bo == e && vo == t ? xo : (bo = e, vo = t, xo = t == "up" || t == "down" ? Of(n, e, t) : Tf(n, e, t));
}
const Me = 0, ko = 1, It = 2, _e = 3;
class sr {
  constructor(e, t, r, i) {
    this.parent = e, this.children = t, this.dom = r, this.contentDOM = i, this.dirty = Me, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, t, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let t = 0; t < this.children.length; t++)
      e += this.children[t].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let t = 0, r = this.posAtStart; ; t++) {
      let i = this.children[t];
      if (i == e)
        return r;
      r += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, t, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let s, o;
        if (e == this.contentDOM)
          s = e.childNodes[t - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.previousSibling;
        }
        for (; s && !((o = s.pmViewDesc) && o.parent == this); )
          s = s.previousSibling;
        return s ? this.posBeforeChild(o) + o.size : this.posAtStart;
      } else {
        let s, o;
        if (e == this.contentDOM)
          s = e.childNodes[t];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.nextSibling;
        }
        for (; s && !((o = s.pmViewDesc) && o.parent == this); )
          s = s.nextSibling;
        return s ? this.posBeforeChild(o) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = t > ne(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (t == 0)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !1;
            break;
          }
          if (s.previousSibling)
            break;
        }
      if (i == null && t == e.childNodes.length)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !0;
            break;
          }
          if (s.nextSibling)
            break;
        }
    }
    return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, t = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let s = this.getDesc(i), o;
      if (s && (!t || s.node))
        if (r && (o = s.nodeDOM) && !(o.nodeType == 1 ? o.contains(e.nodeType == 1 ? e : e.parentNode) : o == e))
          r = !1;
        else
          return s;
    }
  }
  getDesc(e) {
    let t = e.pmViewDesc;
    for (let r = t; r; r = r.parent)
      if (r == this)
        return t;
  }
  posFromDOM(e, t, r) {
    for (let i = e; i; i = i.parentNode) {
      let s = this.getDesc(i);
      if (s)
        return s.localPosFromDOM(e, t, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let t = 0, r = 0; t < this.children.length; t++) {
      let i = this.children[t], s = r + i.size;
      if (r == e && s != r) {
        for (; !i.border && i.children.length; )
          i = i.children[0];
        return i;
      }
      if (e < s)
        return i.descAt(e - r - i.border);
      r = s;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let s = 0; r < this.children.length; r++) {
      let o = this.children[r], l = s + o.size;
      if (l > e || o instanceof xa) {
        i = e - s;
        break;
      }
      s = l;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, t);
    for (let s; r && !(s = this.children[r - 1]).size && s instanceof va && s.side >= 0; r--)
      ;
    if (t <= 0) {
      let s, o = !0;
      for (; s = r ? this.children[r - 1] : null, !(!s || s.dom.parentNode == this.contentDOM); r--, o = !1)
        ;
      return s && t && o && !s.border && !s.domAtom ? s.domFromPos(s.size, t) : { node: this.contentDOM, offset: s ? ne(s.dom) + 1 : 0 };
    } else {
      let s, o = !0;
      for (; s = r < this.children.length ? this.children[r] : null, !(!s || s.dom.parentNode == this.contentDOM); r++, o = !1)
        ;
      return s && o && !s.border && !s.domAtom ? s.domFromPos(0, t) : { node: this.contentDOM, offset: s ? ne(s.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, t, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, s = -1;
    for (let o = r, l = 0; ; l++) {
      let a = this.children[l], c = o + a.size;
      if (i == -1 && e <= c) {
        let u = o + a.border;
        if (e >= u && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, t, u);
        e = o;
        for (let f = l; f > 0; f--) {
          let d = this.children[f - 1];
          if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(1)) {
            i = ne(d.dom) + 1;
            break;
          }
          e -= d.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (c > t || l == this.children.length - 1)) {
        t = c;
        for (let u = l + 1; u < this.children.length; u++) {
          let f = this.children[u];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(-1)) {
            s = ne(f.dom);
            break;
          }
          t += f.size;
        }
        s == -1 && (s = this.contentDOM.childNodes.length);
        break;
      }
      o = c;
    }
    return { node: this.contentDOM, from: e, to: t, fromOffset: i, toOffset: s };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let t = this.children[e < 0 ? 0 : this.children.length - 1];
    return t.size == 0 || t.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: t, offset: r } = this.domFromPos(e, 0);
    if (t.nodeType != 1 || r == t.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return t.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, t, r, i = !1) {
    let s = Math.min(e, t), o = Math.max(e, t);
    for (let d = 0, h = 0; d < this.children.length; d++) {
      let p = this.children[d], m = h + p.size;
      if (s > h && o < m)
        return p.setSelection(e - h - p.border, t - h - p.border, r, i);
      h = m;
    }
    let l = this.domFromPos(e, e ? -1 : 1), a = t == e ? l : this.domFromPos(t, t ? -1 : 1), c = r.getSelection(), u = !1;
    if ((Be || ce) && e == t) {
      let { node: d, offset: h } = l;
      if (d.nodeType == 3) {
        if (u = !!(h && d.nodeValue[h - 1] == `
`), u && h == d.nodeValue.length)
          for (let p = d, m; p; p = p.parentNode) {
            if (m = p.nextSibling) {
              m.nodeName == "BR" && (l = a = { node: m.parentNode, offset: ne(m) + 1 });
              break;
            }
            let y = p.pmViewDesc;
            if (y && y.node && y.node.isBlock)
              break;
          }
      } else {
        let p = d.childNodes[h - 1];
        u = p && (p.nodeName == "BR" || p.contentEditable == "false");
      }
    }
    if (Be && c.focusNode && c.focusNode != a.node && c.focusNode.nodeType == 1) {
      let d = c.focusNode.childNodes[c.focusOffset];
      d && d.contentEditable == "false" && (i = !0);
    }
    if (!(i || u && ce) && Ht(l.node, l.offset, c.anchorNode, c.anchorOffset) && Ht(a.node, a.offset, c.focusNode, c.focusOffset))
      return;
    let f = !1;
    if ((c.extend || e == t) && !u) {
      c.collapse(l.node, l.offset);
      try {
        e != t && c.extend(a.node, a.offset), f = !0;
      } catch {
      }
    }
    if (!f) {
      if (e > t) {
        let h = l;
        l = a, a = h;
      }
      let d = document.createRange();
      d.setEnd(a.node, a.offset), d.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(d);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, t) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let s = this.children[i], o = r + s.size;
      if (r == o ? e <= o && t >= r : e < o && t > r) {
        let l = r + s.border, a = o - s.border;
        if (e >= l && t <= a) {
          this.dirty = e == r || t == o ? It : ko, e == l && t == a && (s.contentLost || s.dom.parentNode != this.contentDOM) ? s.dirty = _e : s.markDirty(e - l, t - l);
          return;
        } else
          s.dirty = s.dom == s.contentDOM && s.dom.parentNode == this.contentDOM && !s.children.length ? It : _e;
      }
      r = o;
    }
    this.dirty = It;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let r = e == 1 ? It : ko;
      t.dirty < r && (t.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
  isText(e) {
    return !1;
  }
}
class va extends sr {
  constructor(e, t, r, i) {
    let s, o = t.type.toDOM;
    if (typeof o == "function" && (o = o(r, () => {
      if (!s)
        return i;
      if (s.parent)
        return s.parent.posBeforeChild(s);
    })), !t.type.spec.raw) {
      if (o.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(o), o = l;
      }
      o.contentEditable = "false", o.classList.add("ProseMirror-widget");
    }
    super(e, [], o, null), this.widget = t, this.widget = t, s = this;
  }
  matchesWidget(e) {
    return this.dirty == Me && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let t = this.widget.spec.stopEvent;
    return t ? t(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get side() {
    return this.widget.type.side;
  }
}
class Nf extends sr {
  constructor(e, t, r, i) {
    super(e, [], t, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, t) {
    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class _t extends sr {
  constructor(e, t, r, i) {
    super(e, [], r, i), this.mark = t;
  }
  static create(e, t, r, i) {
    let s = i.nodeViews[t.type.name], o = s && s(t, i, r);
    return (!o || !o.dom) && (o = Jt.renderSpec(document, t.type.spec.toDOM(t, r), null, t.attrs)), new _t(e, t, o.dom, o.contentDOM || o.dom);
  }
  parseRule() {
    return this.dirty & _e || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != _e && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != Me) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = Me;
    }
  }
  slice(e, t, r) {
    let i = _t.create(this.parent, this.mark, !0, r), s = this.children, o = this.size;
    t < o && (s = Zi(s, t, o, r)), e > 0 && (s = Zi(s, 0, e, r));
    for (let l = 0; l < s.length; l++)
      s[l].parent = i;
    return i.children = s, i;
  }
}
class pt extends sr {
  constructor(e, t, r, i, s, o, l, a, c) {
    super(e, [], s, o), this.node = t, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = l;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, t, r, i, s, o) {
    let l = s.nodeViews[t.type.name], a, c = l && l(t, s, () => {
      if (!a)
        return o;
      if (a.parent)
        return a.parent.posBeforeChild(a);
    }, r, i), u = c && c.dom, f = c && c.contentDOM;
    if (t.isText) {
      if (!u)
        u = document.createTextNode(t.text);
      else if (u.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else u || ({ dom: u, contentDOM: f } = Jt.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs));
    !f && !t.isText && u.nodeName != "BR" && (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), t.type.spec.draggable && (u.draggable = !0));
    let d = u;
    return u = Sa(u, r, t), c ? a = new Df(e, t, r, i, u, f || null, d, c, s, o + 1) : t.isText ? new ri(e, t, r, i, u, d, s) : new pt(e, t, r, i, u, f || null, d, s, o + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let t = this.children.length - 1; t >= 0; t--) {
        let r = this.children[t];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => k.empty);
    }
    return e;
  }
  matchesNode(e, t, r) {
    return this.dirty == Me && e.eq(this.node) && Xi(t, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, t) {
    let r = this.node.inlineContent, i = t, s = e.composing ? this.localCompositionInfo(e, t) : null, o = s && s.pos > -1 ? s : null, l = s && s.pos < 0, a = new If(this, o && o.node, e);
    Bf(this.node, this.innerDeco, (c, u, f) => {
      c.spec.marks ? a.syncToMarks(c.spec.marks, r, e) : c.type.side >= 0 && !f && a.syncToMarks(u == this.node.childCount ? q.none : this.node.child(u).marks, r, e), a.placeWidget(c, e, i);
    }, (c, u, f, d) => {
      a.syncToMarks(c.marks, r, e);
      let h;
      a.findNodeMatch(c, u, f, d) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (h = a.findIndexWithChild(s.node)) > -1 && a.updateNodeAt(c, u, f, h, e) || a.updateNextNode(c, u, f, e, d, i) || a.addNode(c, u, f, e, i), i += c.nodeSize;
    }), a.syncToMarks([], r, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == It) && (o && this.protectLocalComposition(e, o), ka(this.contentDOM, this.children, e), gn && Lf(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof B) || r < t || i > t + this.node.content.size)
      return null;
    let s = e.input.compositionNode;
    if (!s || !this.dom.contains(s.parentNode))
      return null;
    if (this.node.inlineContent) {
      let o = s.nodeValue, l = zf(this.node.content, o, r - t, i - t);
      return l < 0 ? null : { node: s, pos: l, text: o };
    } else
      return { node: s, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: t, pos: r, text: i }) {
    if (this.getDesc(t))
      return;
    let s = t;
    for (; s.parentNode != this.contentDOM; s = s.parentNode) {
      for (; s.previousSibling; )
        s.parentNode.removeChild(s.previousSibling);
      for (; s.nextSibling; )
        s.parentNode.removeChild(s.nextSibling);
      s.pmViewDesc && (s.pmViewDesc = void 0);
    }
    let o = new Nf(this, s, t, i);
    e.input.compositionNodes.push(o), this.children = Zi(this.children, r, r + i.length, e, o);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, t, r, i) {
    return this.dirty == _e || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, i), !0);
  }
  updateInner(e, t, r, i) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = Me;
  }
  updateOuterDeco(e) {
    if (Xi(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = wa(this.dom, this.nodeDOM, Yi(this.outerDeco, this.node, t), Yi(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable"));
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function wo(n, e, t, r, i) {
  Sa(r, e, n);
  let s = new pt(void 0, n, e, t, r, r, r, i, 0);
  return s.contentDOM && s.updateChildren(i, 0), s;
}
class ri extends pt {
  constructor(e, t, r, i, s, o, l) {
    super(e, t, r, i, s, null, o, l, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, t, r, i) {
    return this.dirty == _e || this.dirty != Me && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != Me || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = Me, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let t = this.nodeDOM; t; t = t.parentNode)
      if (t == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, t, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, t, r) {
    let i = this.node.cut(e, t), s = document.createTextNode(i.text);
    return new ri(this.parent, i, this.outerDeco, this.innerDeco, s, s, r);
  }
  markDirty(e, t) {
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = _e);
  }
  get domAtom() {
    return !1;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class xa extends sr {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == Me && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class Df extends pt {
  constructor(e, t, r, i, s, o, l, a, c, u) {
    super(e, t, r, i, s, o, l, c, u), this.spec = a;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, t, r, i) {
    if (this.dirty == _e)
      return !1;
    if (this.spec.update) {
      let s = this.spec.update(e, t, r);
      return s && this.updateInner(e, t, r, i), s;
    } else return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, t, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, t, r) : super.setSelection(e, t, r, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function ka(n, e, t) {
  let r = n.firstChild, i = !1;
  for (let s = 0; s < e.length; s++) {
    let o = e[s], l = o.dom;
    if (l.parentNode == n) {
      for (; l != r; )
        r = So(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, n.insertBefore(l, r);
    if (o instanceof _t) {
      let a = r ? r.previousSibling : n.lastChild;
      ka(o.contentDOM, o.children, t), r = a ? a.nextSibling : n.firstChild;
    }
  }
  for (; r; )
    r = So(r), i = !0;
  i && t.trackWrites == n && (t.trackWrites = null);
}
const zn = function(n) {
  n && (this.nodeName = n);
};
zn.prototype = /* @__PURE__ */ Object.create(null);
const Rt = [new zn()];
function Yi(n, e, t) {
  if (n.length == 0)
    return Rt;
  let r = t ? Rt[0] : new zn(), i = [r];
  for (let s = 0; s < n.length; s++) {
    let o = n[s].type.attrs;
    if (o) {
      o.nodeName && i.push(r = new zn(o.nodeName));
      for (let l in o) {
        let a = o[l];
        a != null && (t && i.length == 1 && i.push(r = new zn(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a));
      }
    }
  }
  return i;
}
function wa(n, e, t, r) {
  if (t == Rt && r == Rt)
    return e;
  let i = e;
  for (let s = 0; s < r.length; s++) {
    let o = r[s], l = t[s];
    if (s) {
      let a;
      l && l.nodeName == o.nodeName && i != n && (a = i.parentNode) && a.nodeName.toLowerCase() == o.nodeName || (a = document.createElement(o.nodeName), a.pmIsDeco = !0, a.appendChild(i), l = Rt[0]), i = a;
    }
    Af(i, l || Rt[0], o);
  }
  return i;
}
function Af(n, e, t) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r);
  for (let r in t)
    r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]);
  if (e.class != t.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let s = 0; s < r.length; s++)
      i.indexOf(r[s]) == -1 && n.classList.remove(r[s]);
    for (let s = 0; s < i.length; s++)
      r.indexOf(i[s]) == -1 && n.classList.add(i[s]);
    n.classList.length == 0 && n.removeAttribute("class");
  }
  if (e.style != t.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        n.style.removeProperty(i[1]);
    }
    t.style && (n.style.cssText += t.style);
  }
}
function Sa(n, e, t) {
  return wa(n, n, Rt, Yi(e, t, n.nodeType != 1));
}
function Xi(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].type.eq(e[t].type))
      return !1;
  return !0;
}
function So(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class If {
  constructor(e, t, r) {
    this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = Rf(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, t) {
    if (e != t) {
      for (let r = e; r < t; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, t - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, t, r) {
    let i = 0, s = this.stack.length >> 1, o = Math.min(s, e.length);
    for (; i < o && (i == s - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
      i++;
    for (; i < s; )
      this.destroyRest(), this.top.dirty = Me, this.index = this.stack.pop(), this.top = this.stack.pop(), s--;
    for (; s < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let l = -1;
      for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
        let c = this.top.children[a];
        if (c.matchesMark(e[s]) && !this.isLocked(c.dom)) {
          l = a;
          break;
        }
      }
      if (l > -1)
        l > this.index && (this.changed = !0, this.destroyBetween(this.index, l)), this.top = this.top.children[this.index];
      else {
        let a = _t.create(this.top, e[s], t, r);
        this.top.children.splice(this.index, 0, a), this.top = a, this.changed = !0;
      }
      this.index = 0, s++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, t, r, i) {
    let s = -1, o;
    if (i >= this.preMatch.index && (o = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && o.matchesNode(e, t, r))
      s = this.top.children.indexOf(o, this.index);
    else
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let c = this.top.children[l];
        if (c.matchesNode(e, t, r) && !this.preMatch.matched.has(c)) {
          s = l;
          break;
        }
      }
    return s < 0 ? !1 : (this.destroyBetween(this.index, s), this.index++, !0);
  }
  updateNodeAt(e, t, r, i, s) {
    let o = this.top.children[i];
    return o.dirty == _e && o.dom == o.contentDOM && (o.dirty = It), o.update(e, t, r, s) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let t = e.parentNode;
      if (!t)
        return -1;
      if (t == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = t;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, t, r, i, s, o) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let a = this.top.children[l];
      if (a instanceof pt) {
        let c = this.preMatch.matched.get(a);
        if (c != null && c != s)
          return !1;
        let u = a.dom, f, d = this.isLocked(u) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != _e && Xi(t, a.outerDeco));
        if (!d && a.update(e, t, r, i))
          return this.destroyBetween(this.index, l), a.dom != u && (this.changed = !0), this.index++, !0;
        if (!d && (f = this.recreateWrapper(a, e, t, r, i, o)))
          return this.top.children[this.index] = f, f.contentDOM && (f.dirty = It, f.updateChildren(i, o + 1), f.dirty = Me), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, t, r, i, s, o) {
    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content))
      return null;
    let l = pt.create(this.top, t, r, i, s, o);
    if (l.contentDOM) {
      l.children = e.children, e.children = [];
      for (let a of l.children)
        a.parent = l;
    }
    return e.destroy(), l;
  }
  // Insert the node as a newly created node desc.
  addNode(e, t, r, i, s) {
    let o = pt.create(this.top, e, t, r, i, s);
    o.contentDOM && o.updateChildren(i, s + 1), this.top.children.splice(this.index++, 0, o), this.changed = !0;
  }
  placeWidget(e, t, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let s = new va(this.top, e, t, r);
      this.top.children.splice(this.index++, 0, s), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], t = this.top;
    for (; e instanceof _t; )
      t = e, e = t.children[t.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof ri) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((ce || se) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new xa(this.top, [], r, null);
      t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function Rf(n, e) {
  let t = e, r = t.children.length, i = n.childCount, s = /* @__PURE__ */ new Map(), o = [];
  e: for (; i > 0; ) {
    let l;
    for (; ; )
      if (r) {
        let c = t.children[r - 1];
        if (c instanceof _t)
          t = c, r = c.children.length;
        else {
          l = c, r--;
          break;
        }
      } else {
        if (t == e)
          break e;
        r = t.parent.children.indexOf(t), t = t.parent;
      }
    let a = l.node;
    if (a) {
      if (a != n.child(i - 1))
        break;
      --i, s.set(l, i), o.push(l);
    }
  }
  return { index: i, matched: s, matches: o.reverse() };
}
function Pf(n, e) {
  return n.type.side - e.type.side;
}
function Bf(n, e, t, r) {
  let i = e.locals(n), s = 0;
  if (i.length == 0) {
    for (let c = 0; c < n.childCount; c++) {
      let u = n.child(c);
      r(u, i, e.forChild(s, u), c), s += u.nodeSize;
    }
    return;
  }
  let o = 0, l = [], a = null;
  for (let c = 0; ; ) {
    let u, f;
    for (; o < i.length && i[o].to == s; ) {
      let y = i[o++];
      y.widget && (u ? (f || (f = [u])).push(y) : u = y);
    }
    if (u)
      if (f) {
        f.sort(Pf);
        for (let y = 0; y < f.length; y++)
          t(f[y], c, !!a);
      } else
        t(u, c, !!a);
    let d, h;
    if (a)
      h = -1, d = a, a = null;
    else if (c < n.childCount)
      h = c, d = n.child(c++);
    else
      break;
    for (let y = 0; y < l.length; y++)
      l[y].to <= s && l.splice(y--, 1);
    for (; o < i.length && i[o].from <= s && i[o].to > s; )
      l.push(i[o++]);
    let p = s + d.nodeSize;
    if (d.isText) {
      let y = p;
      o < i.length && i[o].from < y && (y = i[o].from);
      for (let b = 0; b < l.length; b++)
        l[b].to < y && (y = l[b].to);
      y < p && (a = d.cut(y - s), d = d.cut(0, y - s), p = y, h = -1);
    } else
      for (; o < i.length && i[o].to < p; )
        o++;
    let m = d.isInline && !d.isLeaf ? l.filter((y) => !y.inline) : l.slice();
    r(d, m, e.forChild(s, d), h), s = p;
  }
}
function Lf(n) {
  if (n.nodeName == "UL" || n.nodeName == "OL") {
    let e = n.style.cssText;
    n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
  }
}
function zf(n, e, t, r) {
  for (let i = 0, s = 0; i < n.childCount && s <= r; ) {
    let o = n.child(i++), l = s;
    if (s += o.nodeSize, !o.isText)
      continue;
    let a = o.text;
    for (; i < n.childCount; ) {
      let c = n.child(i++);
      if (s += c.nodeSize, !c.isText)
        break;
      a += c.text;
    }
    if (s >= t) {
      if (s >= r && a.slice(r - e.length - l, r - l) == e)
        return r - e.length;
      let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
      if (c >= 0 && c + e.length + l >= t)
        return l + c;
      if (t == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e)
        return r;
    }
  }
  return -1;
}
function Zi(n, e, t, r, i) {
  let s = [];
  for (let o = 0, l = 0; o < n.length; o++) {
    let a = n[o], c = l, u = l += a.size;
    c >= t || u <= e ? s.push(a) : (c < e && s.push(a.slice(0, e - c, r)), i && (s.push(i), i = void 0), u > t && s.push(a.slice(t - c, a.size, r)));
  }
  return s;
}
function bs(n, e = null) {
  let t = n.domSelectionRange(), r = n.state.doc;
  if (!t.focusNode)
    return null;
  let i = n.docView.nearestDesc(t.focusNode), s = i && i.size == 0, o = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (o < 0)
    return null;
  let l = r.resolve(o), a, c;
  if (ni(t)) {
    for (a = l; i && !i.node; )
      i = i.parent;
    let u = i.node;
    if (i && u.isAtom && A.isSelectable(u) && i.parent && !(u.isInline && cf(t.focusNode, t.focusOffset, i.dom))) {
      let f = i.posBefore;
      c = new A(o == f ? l : r.resolve(f));
    }
  } else {
    let u = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (u < 0)
      return null;
    a = r.resolve(u);
  }
  if (!c) {
    let u = e == "pointer" || n.state.selection.head < l.pos && !s ? 1 : -1;
    c = vs(n, a, l, u);
  }
  return c;
}
function Ca(n) {
  return n.editable ? n.hasFocus() : Ma(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function et(n, e = !1) {
  let t = n.state.selection;
  if (Oa(n, t), !!Ca(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && se) {
      let r = n.domSelectionRange(), i = n.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && Ht(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      Vf(n);
    else {
      let { anchor: r, head: i } = t, s, o;
      Co && !(t instanceof B) && (t.$from.parent.inlineContent || (s = Oo(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (o = Oo(n, t.to))), n.docView.setSelection(r, i, n.root, e), Co && (s && Mo(s), o && Mo(o)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Ff(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const Co = ce || se && da < 63;
function Oo(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0), i = r < t.childNodes.length ? t.childNodes[r] : null, s = r ? t.childNodes[r - 1] : null;
  if (ce && i && i.contentEditable == "false")
    return Mi(i);
  if ((!i || i.contentEditable == "false") && (!s || s.contentEditable == "false")) {
    if (i)
      return Mi(i);
    if (s)
      return Mi(s);
  }
}
function Mi(n) {
  return n.contentEditable = "true", ce && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function Mo(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function Ff(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), r = t.anchorNode, i = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!Ca(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function Vf(n) {
  let e = n.domSelection(), t = document.createRange();
  if (!e)
    return;
  let r = n.cursorWrapper.dom, i = r.nodeName == "IMG";
  i ? t.setStart(r.parentNode, ne(r) + 1) : t.setStart(r, 0), t.collapse(!0), e.removeAllRanges(), e.addRange(t), !i && !n.state.selection.visible && he && ht <= 11 && (r.disabled = !0, r.disabled = !1);
}
function Oa(n, e) {
  if (e instanceof A) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && (To(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    To(n);
}
function To(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function vs(n, e, t, r) {
  return n.someProp("createSelectionBetween", (i) => i(n, e, t)) || B.between(e, t, r);
}
function Eo(n) {
  return n.editable && !n.hasFocus() ? !1 : Ma(n);
}
function Ma(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function $f(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
  return Ht(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function Qi(n, e) {
  let { $anchor: t, $head: r } = n.selection, i = e > 0 ? t.max(r) : t.min(r), s = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return s && F.findFrom(s, e);
}
function st(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function No(n, e, t) {
  let r = n.state.selection;
  if (r instanceof B)
    if (t.indexOf("s") > -1) {
      let { $head: i } = r, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
      if (!s || s.isText || !s.isLeaf)
        return !1;
      let o = n.state.doc.resolve(i.pos + s.nodeSize * (e < 0 ? -1 : 1));
      return st(n, new B(r.$anchor, o));
    } else if (r.empty) {
      if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let i = Qi(n.state, e);
        return i && i instanceof A ? st(n, i) : !1;
      } else if (!(Ce && t.indexOf("m") > -1)) {
        let i = r.$head, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, o;
        if (!s || s.isText)
          return !1;
        let l = e < 0 ? i.pos - s.nodeSize : i.pos;
        return s.isAtom || (o = n.docView.descAt(l)) && !o.contentDOM ? A.isSelectable(s) ? st(n, new A(e < 0 ? n.state.doc.resolve(i.pos - s.nodeSize) : i)) : ir ? st(n, new B(n.state.doc.resolve(e < 0 ? l : l + s.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof A && r.node.isInline)
      return st(n, new B(e > 0 ? r.$to : r.$from));
    {
      let i = Qi(n.state, e);
      return i ? st(n, i) : !1;
    }
  }
}
function $r(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function Fn(n, e) {
  let t = n.pmViewDesc;
  return t && t.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR");
}
function nn(n, e) {
  return e < 0 ? jf(n) : Hf(n);
}
function jf(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i, s, o = !1;
  for (Be && t.nodeType == 1 && r < $r(t) && Fn(t.childNodes[r], -1) && (o = !0); ; )
    if (r > 0) {
      if (t.nodeType != 1)
        break;
      {
        let l = t.childNodes[r - 1];
        if (Fn(l, -1))
          i = t, s = --r;
        else if (l.nodeType == 3)
          t = l, r = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (Ta(t))
        break;
      {
        let l = t.previousSibling;
        for (; l && Fn(l, -1); )
          i = t.parentNode, s = ne(l), l = l.previousSibling;
        if (l)
          t = l, r = $r(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = 0;
        }
      }
    }
  o ? es(n, t, r) : i && es(n, i, s);
}
function Hf(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i = $r(t), s, o;
  for (; ; )
    if (r < i) {
      if (t.nodeType != 1)
        break;
      let l = t.childNodes[r];
      if (Fn(l, 1))
        s = t, o = ++r;
      else
        break;
    } else {
      if (Ta(t))
        break;
      {
        let l = t.nextSibling;
        for (; l && Fn(l, 1); )
          s = l.parentNode, o = ne(l) + 1, l = l.nextSibling;
        if (l)
          t = l, r = 0, i = $r(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = i = 0;
        }
      }
    }
  s && es(n, s, o);
}
function Ta(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function _f(n, e) {
  for (; n && e == n.childNodes.length && !rr(n); )
    e = ne(n) + 1, n = n.parentNode;
  for (; n && e < n.childNodes.length; ) {
    let t = n.childNodes[e];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = 0;
  }
}
function Wf(n, e) {
  for (; n && !e && !rr(n); )
    e = ne(n), n = n.parentNode;
  for (; n && e; ) {
    let t = n.childNodes[e - 1];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = n.childNodes.length;
  }
}
function es(n, e, t) {
  if (e.nodeType != 3) {
    let s, o;
    (o = _f(e, t)) ? (e = o, t = 0) : (s = Wf(e, t)) && (e = s, t = s.nodeValue.length);
  }
  let r = n.domSelection();
  if (!r)
    return;
  if (ni(r)) {
    let s = document.createRange();
    s.setEnd(e, t), s.setStart(e, t), r.removeAllRanges(), r.addRange(s);
  } else r.extend && r.extend(e, t);
  n.domObserver.setCurSelection();
  let { state: i } = n;
  setTimeout(() => {
    n.state == i && et(n);
  }, 50);
}
function Do(n, e) {
  let t = n.state.doc.resolve(e);
  if (!(se || df) && t.parent.inlineContent) {
    let i = n.coordsAtPos(e);
    if (e > t.start()) {
      let s = n.coordsAtPos(e - 1), o = (s.top + s.bottom) / 2;
      if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
        return s.left < i.left ? "ltr" : "rtl";
    }
    if (e < t.end()) {
      let s = n.coordsAtPos(e + 1), o = (s.top + s.bottom) / 2;
      if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
        return s.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
}
function Ao(n, e, t) {
  let r = n.state.selection;
  if (r instanceof B && !r.empty || t.indexOf("s") > -1 || Ce && t.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: s } = r;
  if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let o = Qi(n.state, e);
    if (o && o instanceof A)
      return st(n, o);
  }
  if (!i.parent.inlineContent) {
    let o = e < 0 ? i : s, l = r instanceof Pe ? F.near(o, e) : F.findFrom(o, e);
    return l ? st(n, l) : !1;
  }
  return !1;
}
function Io(n, e) {
  if (!(n.state.selection instanceof B))
    return !0;
  let { $head: t, $anchor: r, empty: i } = n.state.selection;
  if (!t.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let s = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (s && !s.isText) {
    let o = n.state.tr;
    return e < 0 ? o.delete(t.pos - s.nodeSize, t.pos) : o.delete(t.pos, t.pos + s.nodeSize), n.dispatch(o), !0;
  }
  return !1;
}
function Ro(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function Kf(n) {
  if (!ce || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    Ro(n, r, "true"), setTimeout(() => Ro(n, r, "false"), 20);
  }
  return !1;
}
function qf(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function Jf(n, e) {
  let t = e.keyCode, r = qf(e);
  if (t == 8 || Ce && t == 72 && r == "c")
    return Io(n, -1) || nn(n, -1);
  if (t == 46 && !e.shiftKey || Ce && t == 68 && r == "c")
    return Io(n, 1) || nn(n, 1);
  if (t == 13 || t == 27)
    return !0;
  if (t == 37 || Ce && t == 66 && r == "c") {
    let i = t == 37 ? Do(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return No(n, i, r) || nn(n, i);
  } else if (t == 39 || Ce && t == 70 && r == "c") {
    let i = t == 39 ? Do(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return No(n, i, r) || nn(n, i);
  } else {
    if (t == 38 || Ce && t == 80 && r == "c")
      return Ao(n, -1, r) || nn(n, -1);
    if (t == 40 || Ce && t == 78 && r == "c")
      return Kf(n) || Ao(n, 1, r) || nn(n, 1);
    if (r == (Ce ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
      return !0;
  }
  return !1;
}
function Ea(n, e) {
  n.someProp("transformCopied", (h) => {
    e = h(e, n);
  });
  let t = [], { content: r, openStart: i, openEnd: s } = e;
  for (; i > 1 && s > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, s--;
    let h = r.firstChild;
    t.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let o = n.someProp("clipboardSerializer") || Jt.fromSchema(n.state.schema), l = Pa(), a = l.createElement("div");
  a.appendChild(o.serializeFragment(r, { document: l }));
  let c = a.firstChild, u, f = 0;
  for (; c && c.nodeType == 1 && (u = Ra[c.nodeName.toLowerCase()]); ) {
    for (let h = u.length - 1; h >= 0; h--) {
      let p = l.createElement(u[h]);
      for (; a.firstChild; )
        p.appendChild(a.firstChild);
      a.appendChild(p), f++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${s}${f ? ` -${f}` : ""} ${JSON.stringify(t)}`);
  let d = n.someProp("clipboardTextSerializer", (h) => h(e, n)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: d, slice: e };
}
function Na(n, e, t, r, i) {
  let s = i.parent.type.spec.code, o, l;
  if (!t && !e)
    return null;
  let a = e && (r || s || !t);
  if (a) {
    if (n.someProp("transformPastedText", (d) => {
      e = d(e, s || r, n);
    }), s)
      return e ? new C(k.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : C.empty;
    let f = n.someProp("clipboardTextParser", (d) => d(e, i, r, n));
    if (f)
      l = f;
    else {
      let d = i.marks(), { schema: h } = n.state, p = Jt.fromSchema(h);
      o = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let y = o.appendChild(document.createElement("p"));
        m && y.appendChild(p.serializeNode(h.text(m, d)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (f) => {
      t = f(t, n);
    }), o = Yf(t), ir && Xf(o);
  let c = o && o.querySelector("[data-pm-slice]"), u = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (u && u[3])
    for (let f = +u[3]; f > 0; f--) {
      let d = o.firstChild;
      for (; d && d.nodeType != 1; )
        d = d.nextSibling;
      if (!d)
        break;
      o = d;
    }
  if (l || (l = (n.someProp("clipboardParser") || n.someProp("domParser") || dt.fromSchema(n.state.schema)).parseSlice(o, {
    preserveWhitespace: !!(a || u),
    context: i,
    ruleFromNode(d) {
      return d.nodeName == "BR" && !d.nextSibling && d.parentNode && !Uf.test(d.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), u)
    l = Zf(Po(l, +u[1], +u[2]), u[4]);
  else if (l = C.maxOpen(Gf(l.content, i), !0), l.openStart || l.openEnd) {
    let f = 0, d = 0;
    for (let h = l.content.firstChild; f < l.openStart && !h.type.spec.isolating; f++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; d < l.openEnd && !h.type.spec.isolating; d++, h = h.lastChild)
      ;
    l = Po(l, f, d);
  }
  return n.someProp("transformPasted", (f) => {
    l = f(l, n);
  }), l;
}
const Uf = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Gf(n, e) {
  if (n.childCount < 2)
    return n;
  for (let t = e.depth; t >= 0; t--) {
    let i = e.node(t).contentMatchAt(e.index(t)), s, o = [];
    if (n.forEach((l) => {
      if (!o)
        return;
      let a = i.findWrapping(l.type), c;
      if (!a)
        return o = null;
      if (c = o.length && s.length && Aa(a, s, l, o[o.length - 1], 0))
        o[o.length - 1] = c;
      else {
        o.length && (o[o.length - 1] = Ia(o[o.length - 1], s.length));
        let u = Da(l, a);
        o.push(u), i = i.matchType(u.type), s = a;
      }
    }), o)
      return k.from(o);
  }
  return n;
}
function Da(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--)
    n = e[r].create(null, k.from(n));
  return n;
}
function Aa(n, e, t, r, i) {
  if (i < n.length && i < e.length && n[i] == e[i]) {
    let s = Aa(n, e, t, r.lastChild, i + 1);
    if (s)
      return r.copy(r.content.replaceChild(r.childCount - 1, s));
    if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1]))
      return r.copy(r.content.append(k.from(Da(t, n, i + 1))));
  }
}
function Ia(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, Ia(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(k.empty, !0);
  return n.copy(t.append(r));
}
function ts(n, e, t, r, i, s) {
  let o = e < 0 ? n.firstChild : n.lastChild, l = o.content;
  return n.childCount > 1 && (s = 0), i < r - 1 && (l = ts(l, e, t, r, i + 1, s)), i >= t && (l = e < 0 ? o.contentMatchAt(0).fillBefore(l, s <= i).append(l) : l.append(o.contentMatchAt(o.childCount).fillBefore(k.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, o.copy(l));
}
function Po(n, e, t) {
  return e < n.openStart && (n = new C(ts(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new C(ts(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const Ra = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let Bo = null;
function Pa() {
  return Bo || (Bo = document.implementation.createHTMLDocument("title"));
}
function Yf(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = Pa().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), i;
  if ((i = r && Ra[r[1].toLowerCase()]) && (n = i.map((s) => "<" + s + ">").join("") + n + i.map((s) => "</" + s + ">").reverse().join("")), t.innerHTML = n, i)
    for (let s = 0; s < i.length; s++)
      t = t.querySelector(i[s]) || t;
  return t;
}
function Xf(n) {
  let e = n.querySelectorAll(se ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
  }
}
function Zf(n, e) {
  if (!n.size)
    return n;
  let t = n.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return n;
  }
  let { content: i, openStart: s, openEnd: o } = n;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = t.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    i = k.from(a.create(r[l + 1], i)), s++, o++;
  }
  return new C(i, s, o);
}
const ue = {}, fe = {}, Qf = { touchstart: !0, touchmove: !0 };
class ed {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "" }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastAndroidDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function td(n) {
  for (let e in ue) {
    let t = ue[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = (r) => {
      rd(n, r) && !xs(n, r) && (n.editable || !(r.type in fe)) && t(n, r);
    }, Qf[e] ? { passive: !0 } : void 0);
  }
  ce && n.dom.addEventListener("input", () => null), ns(n);
}
function ut(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function nd(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers)
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function ns(n) {
  n.someProp("handleDOMEvents", (e) => {
    for (let t in e)
      n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = (r) => xs(n, r));
  });
}
function xs(n, e) {
  return n.someProp("handleDOMEvents", (t) => {
    let r = t[e.type];
    return r ? r(n, e) || e.defaultPrevented : !1;
  });
}
function rd(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != n.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function id(n, e) {
  !xs(n, e) && ue[e.type] && (n.editable || !(e.type in fe)) && ue[e.type](n, e);
}
fe.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !La(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(Ie && se && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), gn && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (i) => i(n, Dt(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else n.someProp("handleKeyDown", (r) => r(n, t)) || Jf(n, t) ? t.preventDefault() : ut(n, "key");
};
fe.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
fe.keypress = (n, e) => {
  let t = e;
  if (La(n, t) || !t.charCode || t.ctrlKey && !t.altKey || Ce && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (i) => i(n, t))) {
    t.preventDefault();
    return;
  }
  let r = n.state.selection;
  if (!(r instanceof B) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(t.charCode);
    !/[\r\n]/.test(i) && !n.someProp("handleTextInput", (s) => s(n, r.$from.pos, r.$to.pos, i)) && n.dispatch(n.state.tr.insertText(i).scrollIntoView()), t.preventDefault();
  }
};
function ii(n) {
  return { left: n.clientX, top: n.clientY };
}
function sd(n, e) {
  let t = e.x - n.clientX, r = e.y - n.clientY;
  return t * t + r * r < 100;
}
function ks(n, e, t, r, i) {
  if (r == -1)
    return !1;
  let s = n.state.doc.resolve(r);
  for (let o = s.depth + 1; o > 0; o--)
    if (n.someProp(e, (l) => o > s.depth ? l(n, t, s.nodeAfter, s.before(o), i, !0) : l(n, t, s.node(o), s.before(o), i, !1)))
      return !0;
  return !1;
}
function hn(n, e, t) {
  if (n.focused || n.focus(), n.state.selection.eq(e))
    return;
  let r = n.state.tr.setSelection(e);
  r.setMeta("pointer", !0), n.dispatch(r);
}
function od(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), r = t.nodeAfter;
  return r && r.isAtom && A.isSelectable(r) ? (hn(n, new A(t)), !0) : !1;
}
function ld(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.selection, r, i;
  t instanceof A && (r = t.node);
  let s = n.state.doc.resolve(e);
  for (let o = s.depth + 1; o > 0; o--) {
    let l = o > s.depth ? s.nodeAfter : s.node(o);
    if (A.isSelectable(l)) {
      r && t.$from.depth > 0 && o >= t.$from.depth && s.before(t.$from.depth + 1) == t.$from.pos ? i = s.before(t.$from.depth) : i = s.before(o);
      break;
    }
  }
  return i != null ? (hn(n, A.create(n.state.doc, i)), !0) : !1;
}
function ad(n, e, t, r, i) {
  return ks(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (s) => s(n, e, r)) || (i ? ld(n, t) : od(n, t));
}
function cd(n, e, t, r) {
  return ks(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (i) => i(n, e, r));
}
function ud(n, e, t, r) {
  return ks(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (i) => i(n, e, r)) || fd(n, t, r);
}
function fd(n, e, t) {
  if (t.button != 0)
    return !1;
  let r = n.state.doc;
  if (e == -1)
    return r.inlineContent ? (hn(n, B.create(r, 0, r.content.size)), !0) : !1;
  let i = r.resolve(e);
  for (let s = i.depth + 1; s > 0; s--) {
    let o = s > i.depth ? i.nodeAfter : i.node(s), l = i.before(s);
    if (o.inlineContent)
      hn(n, B.create(r, l + 1, l + 1 + o.content.size));
    else if (A.isSelectable(o))
      hn(n, A.create(r, l));
    else
      continue;
    return !0;
  }
}
function ws(n) {
  return jr(n);
}
const Ba = Ce ? "metaKey" : "ctrlKey";
ue.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = ws(n), i = Date.now(), s = "singleClick";
  i - n.input.lastClick.time < 500 && sd(t, n.input.lastClick) && !t[Ba] && (n.input.lastClick.type == "singleClick" ? s = "doubleClick" : n.input.lastClick.type == "doubleClick" && (s = "tripleClick")), n.input.lastClick = { time: i, x: t.clientX, y: t.clientY, type: s };
  let o = n.posAtCoords(ii(t));
  o && (s == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new dd(n, o, t, !!r)) : (s == "doubleClick" ? cd : ud)(n, o.pos, o.inside, t) ? t.preventDefault() : ut(n, "pointer"));
};
class dd {
  constructor(e, t, r, i) {
    this.view = e, this.pos = t, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[Ba], this.allowDefault = r.shiftKey;
    let s, o;
    if (t.inside > -1)
      s = e.state.doc.nodeAt(t.inside), o = t.inside;
    else {
      let u = e.state.doc.resolve(t.pos);
      s = u.parent, o = u.depth ? u.before() : 0;
    }
    const l = i ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a && a.dom.nodeType == 1 ? a.dom : null;
    let { selection: c } = e.state;
    (r.button == 0 && s.type.spec.draggable && s.type.spec.selectable !== !1 || c instanceof A && c.from <= o && c.to > o) && (this.mightDrag = {
      node: s,
      pos: o,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && Be && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), ut(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => et(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(ii(e))), this.updateAllowDefault(e), this.allowDefault || !t ? ut(this.view, "pointer") : ad(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    ce && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    se && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (hn(this.view, F.near(this.view.state.doc.resolve(t.pos))), e.preventDefault()) : ut(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), ut(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
ue.touchstart = (n) => {
  n.input.lastTouch = Date.now(), ws(n), ut(n, "pointer");
};
ue.touchmove = (n) => {
  n.input.lastTouch = Date.now(), ut(n, "pointer");
};
ue.contextmenu = (n) => ws(n);
function La(n, e) {
  return n.composing ? !0 : ce && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const hd = Ie ? 5e3 : -1;
fe.compositionstart = fe.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$to;
    if (e.selection instanceof B && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      n.markCursor = n.state.storedMarks || t.marks(), jr(n, !0), n.markCursor = null;
    else if (jr(n, !e.selection.empty), Be && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let r = n.domSelectionRange();
      for (let i = r.focusNode, s = r.focusOffset; i && i.nodeType == 1 && s != 0; ) {
        let o = s < 0 ? i.lastChild : i.childNodes[s - 1];
        if (!o)
          break;
        if (o.nodeType == 3) {
          let l = n.domSelection();
          l && l.collapse(o, o.nodeValue.length);
          break;
        } else
          i = o, s = -1;
      }
    }
    n.input.composing = !0;
  }
  za(n, hd);
};
fe.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0, n.input.compositionNode = null, n.input.compositionPendingChanges && Promise.resolve().then(() => n.domObserver.flush()), n.input.compositionID++, za(n, 20));
};
function za(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => jr(n), e));
}
function Fa(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = md()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function pd(n) {
  let e = n.domSelectionRange();
  if (!e.focusNode)
    return null;
  let t = lf(e.focusNode, e.focusOffset), r = af(e.focusNode, e.focusOffset);
  if (t && r && t != r) {
    let i = r.pmViewDesc, s = n.domObserver.lastChangedTextNode;
    if (t == s || r == s)
      return s;
    if (!i || !i.isText(r.nodeValue))
      return r;
    if (n.input.compositionNode == r) {
      let o = t.pmViewDesc;
      if (!(!o || !o.isText(t.nodeValue)))
        return r;
    }
  }
  return t || r;
}
function md() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function jr(n, e = !1) {
  if (!(Ie && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), Fa(n), e || n.docView && n.docView.dirty) {
      let t = bs(n);
      return t && !t.eq(n.state.selection) ? n.dispatch(n.state.tr.setSelection(t)) : (n.markCursor || e) && !n.state.selection.empty ? n.dispatch(n.state.tr.deleteSelection()) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function gd(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const Kn = he && ht < 15 || gn && hf < 604;
ue.copy = fe.cut = (n, e) => {
  let t = e, r = n.state.selection, i = t.type == "cut";
  if (r.empty)
    return;
  let s = Kn ? null : t.clipboardData, o = r.content(), { dom: l, text: a } = Ea(n, o);
  s ? (t.preventDefault(), s.clearData(), s.setData("text/html", l.innerHTML), s.setData("text/plain", a)) : gd(n, l), i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function yd(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function bd(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = n.input.shiftKey && n.input.lastKeyCode != 45;
  setTimeout(() => {
    n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? qn(n, r.value, null, i, e) : qn(n, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function qn(n, e, t, r, i) {
  let s = Na(n, e, t, r, n.state.selection.$from);
  if (n.someProp("handlePaste", (a) => a(n, i, s || C.empty)))
    return !0;
  if (!s)
    return !1;
  let o = yd(s), l = o ? n.state.tr.replaceSelectionWith(o, r) : n.state.tr.replaceSelection(s);
  return n.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function Va(n) {
  let e = n.getData("text/plain") || n.getData("Text");
  if (e)
    return e;
  let t = n.getData("text/uri-list");
  return t ? t.replace(/\r?\n/g, " ") : "";
}
fe.paste = (n, e) => {
  let t = e;
  if (n.composing && !Ie)
    return;
  let r = Kn ? null : t.clipboardData, i = n.input.shiftKey && n.input.lastKeyCode != 45;
  r && qn(n, Va(r), r.getData("text/html"), i, t) ? t.preventDefault() : bd(n, t);
};
class $a {
  constructor(e, t, r) {
    this.slice = e, this.move = t, this.node = r;
  }
}
const ja = Ce ? "altKey" : "ctrlKey";
ue.dragstart = (n, e) => {
  let t = e, r = n.input.mouseDown;
  if (r && r.done(), !t.dataTransfer)
    return;
  let i = n.state.selection, s = i.empty ? null : n.posAtCoords(ii(t)), o;
  if (!(s && s.pos >= i.from && s.pos <= (i instanceof A ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      o = A.create(n.state.doc, r.mightDrag.pos);
    else if (t.target && t.target.nodeType == 1) {
      let f = n.docView.nearestDesc(t.target, !0);
      f && f.node.type.spec.draggable && f != n.docView && (o = A.create(n.state.doc, f.posBefore));
    }
  }
  let l = (o || n.state.selection).content(), { dom: a, text: c, slice: u } = Ea(n, l);
  (!t.dataTransfer.files.length || !se || da > 120) && t.dataTransfer.clearData(), t.dataTransfer.setData(Kn ? "Text" : "text/html", a.innerHTML), t.dataTransfer.effectAllowed = "copyMove", Kn || t.dataTransfer.setData("text/plain", c), n.dragging = new $a(u, !t[ja], o);
};
ue.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
fe.dragover = fe.dragenter = (n, e) => e.preventDefault();
fe.drop = (n, e) => {
  let t = e, r = n.dragging;
  if (n.dragging = null, !t.dataTransfer)
    return;
  let i = n.posAtCoords(ii(t));
  if (!i)
    return;
  let s = n.state.doc.resolve(i.pos), o = r && r.slice;
  o ? n.someProp("transformPasted", (p) => {
    o = p(o, n);
  }) : o = Na(n, Va(t.dataTransfer), Kn ? null : t.dataTransfer.getData("text/html"), !1, s);
  let l = !!(r && !t[ja]);
  if (n.someProp("handleDrop", (p) => p(n, t, o || C.empty, l))) {
    t.preventDefault();
    return;
  }
  if (!o)
    return;
  t.preventDefault();
  let a = o ? qu(n.state.doc, s.pos, o) : s.pos;
  a == null && (a = s.pos);
  let c = n.state.tr;
  if (l) {
    let { node: p } = r;
    p ? p.replace(c) : c.deleteSelection();
  }
  let u = c.mapping.map(a), f = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1, d = c.doc;
  if (f ? c.replaceRangeWith(u, u, o.content.firstChild) : c.replaceRange(u, u, o), c.doc.eq(d))
    return;
  let h = c.doc.resolve(u);
  if (f && A.isSelectable(o.content.firstChild) && h.nodeAfter && h.nodeAfter.sameMarkup(o.content.firstChild))
    c.setSelection(new A(h));
  else {
    let p = c.mapping.map(a);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((m, y, b, w) => p = w), c.setSelection(vs(n, h, c.doc.resolve(p)));
  }
  n.focus(), n.dispatch(c.setMeta("uiEvent", "drop"));
};
ue.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && et(n);
  }, 20));
};
ue.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
ue.beforeinput = (n, e) => {
  if (se && Ie && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let { domChangeCount: r } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (s) => s(n, Dt(8, "Backspace")))))
        return;
      let { $cursor: i } = n.state.selection;
      i && i.pos > 0 && n.dispatch(n.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let n in fe)
  ue[n] = fe[n];
function Jn(n, e) {
  if (n == e)
    return !0;
  for (let t in n)
    if (n[t] !== e[t])
      return !1;
  for (let t in e)
    if (!(t in n))
      return !1;
  return !0;
}
class Hr {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || zt, this.side = this.spec.side || 0;
  }
  map(e, t, r, i) {
    let { pos: s, deleted: o } = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
    return o ? null : new ke(s - r, s - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof Hr && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Jn(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class mt {
  constructor(e, t) {
    this.attrs = e, this.spec = t || zt;
  }
  map(e, t, r, i) {
    let s = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r, o = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return s >= o ? null : new ke(s, o, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof mt && Jn(this.attrs, e.attrs) && Jn(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof mt;
  }
  destroy() {
  }
}
class Ss {
  constructor(e, t) {
    this.attrs = e, this.spec = t || zt;
  }
  map(e, t, r, i) {
    let s = e.mapResult(t.from + i, 1);
    if (s.deleted)
      return null;
    let o = e.mapResult(t.to + i, -1);
    return o.deleted || o.pos <= s.pos ? null : new ke(s.pos - r, o.pos - r, this);
  }
  valid(e, t) {
    let { index: r, offset: i } = e.content.findIndex(t.from), s;
    return i == t.from && !(s = e.child(r)).isText && i + s.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof Ss && Jn(this.attrs, e.attrs) && Jn(this.spec, e.spec);
  }
  destroy() {
  }
}
class ke {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.from = e, this.to = t, this.type = r;
  }
  /**
  @internal
  */
  copy(e, t) {
    return new ke(e, t, this.type);
  }
  /**
  @internal
  */
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  /**
  @internal
  */
  map(e, t, r) {
    return this.type.map(e, this, t, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, t, r) {
    return new ke(e, e, new Hr(t, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, t, r, i) {
    return new ke(e, t, new mt(r, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, t, r, i) {
    return new ke(e, t, new Ss(r, i));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof mt;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof Hr;
  }
}
const on = [], zt = {};
class J {
  /**
  @internal
  */
  constructor(e, t) {
    this.local = e.length ? e : on, this.children = t.length ? t : on;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, t) {
    return t.length ? _r(t, e, 0, zt) : ie;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, t, r) {
    let i = [];
    return this.findInner(e ?? 0, t ?? 1e9, i, 0, r), i;
  }
  findInner(e, t, r, i, s) {
    for (let o = 0; o < this.local.length; o++) {
      let l = this.local[o];
      l.from <= t && l.to >= e && (!s || s(l.spec)) && r.push(l.copy(l.from + i, l.to + i));
    }
    for (let o = 0; o < this.children.length; o += 3)
      if (this.children[o] < t && this.children[o + 1] > e) {
        let l = this.children[o] + 1;
        this.children[o + 2].findInner(e - l, t - l, r, i + l, s);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, t, r) {
    return this == ie || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || zt);
  }
  /**
  @internal
  */
  mapInner(e, t, r, i, s) {
    let o;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, i);
      a && a.type.valid(t, a) ? (o || (o = [])).push(a) : s.onRemove && s.onRemove(this.local[l].spec);
    }
    return this.children.length ? vd(this.children, o || [], e, t, r, i, s) : o ? new J(o.sort(Ft), on) : ie;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, t) {
    return t.length ? this == ie ? J.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, r) {
    let i, s = 0;
    e.forEach((l, a) => {
      let c = a + r, u;
      if (u = _a(t, l, c)) {
        for (i || (i = this.children.slice()); s < i.length && i[s] < a; )
          s += 3;
        i[s] == a ? i[s + 2] = i[s + 2].addInner(l, u, c + 1) : i.splice(s, 0, a, a + l.nodeSize, _r(u, l, c + 1, zt)), s += 3;
      }
    });
    let o = Ha(s ? Wa(t) : t, -r);
    for (let l = 0; l < o.length; l++)
      o[l].type.valid(e, o[l]) || o.splice(l--, 1);
    return new J(o.length ? this.local.concat(o).sort(Ft) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == ie ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let r = this.children, i = this.local;
    for (let s = 0; s < r.length; s += 3) {
      let o, l = r[s] + t, a = r[s + 1] + t;
      for (let u = 0, f; u < e.length; u++)
        (f = e[u]) && f.from > l && f.to < a && (e[u] = null, (o || (o = [])).push(f));
      if (!o)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[s + 2].removeInner(o, l + 1);
      c != ie ? r[s + 2] = c : (r.splice(s, 3), s -= 3);
    }
    if (i.length) {
      for (let s = 0, o; s < e.length; s++)
        if (o = e[s])
          for (let l = 0; l < i.length; l++)
            i[l].eq(o, t) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new J(i, r) : ie;
  }
  forChild(e, t) {
    if (this == ie)
      return this;
    if (t.isLeaf)
      return J.empty;
    let r, i;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let s = e + 1, o = s + t.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < o && a.to > s && a.type instanceof mt) {
        let c = Math.max(s, a.from) - s, u = Math.min(o, a.to) - s;
        c < u && (i || (i = [])).push(a.copy(c, u));
      }
    }
    if (i) {
      let l = new J(i.sort(Ft), on);
      return r ? new lt([l, r]) : l;
    }
    return r || ie;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof J) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let t = 0; t < this.local.length; t++)
      if (!this.local[t].eq(e.local[t]))
        return !1;
    for (let t = 0; t < this.children.length; t += 3)
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return Cs(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == ie)
      return on;
    if (e.inlineContent || !this.local.some(mt.is))
      return this.local;
    let t = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof mt || t.push(this.local[r]);
    return t;
  }
  forEachSet(e) {
    e(this);
  }
}
J.empty = new J([], []);
J.removeOverlap = Cs;
const ie = J.empty;
class lt {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map((i) => i.map(e, t, zt));
    return lt.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return J.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].forChild(e, t);
      s != ie && (s instanceof lt ? r = r.concat(s.members) : r.push(s));
    }
    return lt.from(r);
  }
  eq(e) {
    if (!(e instanceof lt) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].localsInner(e);
      if (s.length)
        if (!t)
          t = s;
        else {
          r && (t = t.slice(), r = !1);
          for (let o = 0; o < s.length; o++)
            t.push(s[o]);
        }
    }
    return t ? Cs(r ? t : t.sort(Ft)) : on;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return ie;
      case 1:
        return e[0];
      default:
        return new lt(e.every((t) => t instanceof J) ? e : e.reduce((t, r) => t.concat(r instanceof J ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let t = 0; t < this.members.length; t++)
      this.members[t].forEachSet(e);
  }
}
function vd(n, e, t, r, i, s, o) {
  let l = n.slice();
  for (let c = 0, u = s; c < t.maps.length; c++) {
    let f = 0;
    t.maps[c].forEach((d, h, p, m) => {
      let y = m - p - (h - d);
      for (let b = 0; b < l.length; b += 3) {
        let w = l[b + 1];
        if (w < 0 || d > w + u - f)
          continue;
        let O = l[b] + u - f;
        h >= O ? l[b + 1] = d <= O ? -2 : -1 : d >= u && y && (l[b] += y, l[b + 1] += y);
      }
      f += y;
    }), u = t.maps[c].map(u, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let u = t.map(n[c] + s), f = u - i;
      if (f < 0 || f >= r.content.size) {
        a = !0;
        continue;
      }
      let d = t.map(n[c + 1] + s, -1), h = d - i, { index: p, offset: m } = r.content.findIndex(f), y = r.maybeChild(p);
      if (y && m == f && m + y.nodeSize == h) {
        let b = l[c + 2].mapInner(t, y, u + 1, n[c] + s + 1, o);
        b != ie ? (l[c] = f, l[c + 1] = h, l[c + 2] = b) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = xd(l, n, e, t, i, s, o), u = _r(c, r, 0, o);
    e = u.local;
    for (let f = 0; f < l.length; f += 3)
      l[f + 1] < 0 && (l.splice(f, 3), f -= 3);
    for (let f = 0, d = 0; f < u.children.length; f += 3) {
      let h = u.children[f];
      for (; d < l.length && l[d] < h; )
        d += 3;
      l.splice(d, 0, u.children[f], u.children[f + 1], u.children[f + 2]);
    }
  }
  return new J(e.sort(Ft), l);
}
function Ha(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    t.push(new ke(i.from + e, i.to + e, i.type));
  }
  return t;
}
function xd(n, e, t, r, i, s, o) {
  function l(a, c) {
    for (let u = 0; u < a.local.length; u++) {
      let f = a.local[u].map(r, i, c);
      f ? t.push(f) : o.onRemove && o.onRemove(a.local[u].spec);
    }
    for (let u = 0; u < a.children.length; u += 3)
      l(a.children[u + 2], a.children[u] + c + 1);
  }
  for (let a = 0; a < n.length; a += 3)
    n[a + 1] == -1 && l(n[a + 2], e[a] + s + 1);
  return t;
}
function _a(n, e, t) {
  if (e.isLeaf)
    return null;
  let r = t + e.nodeSize, i = null;
  for (let s = 0, o; s < n.length; s++)
    (o = n[s]) && o.from > t && o.to < r && ((i || (i = [])).push(o), n[s] = null);
  return i;
}
function Wa(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    n[t] != null && e.push(n[t]);
  return e;
}
function _r(n, e, t, r) {
  let i = [], s = !1;
  e.forEach((l, a) => {
    let c = _a(n, l, a + t);
    if (c) {
      s = !0;
      let u = _r(c, l, t + a + 1, r);
      u != ie && i.push(a, a + l.nodeSize, u);
    }
  });
  let o = Ha(s ? Wa(n) : n, -t).sort(Ft);
  for (let l = 0; l < o.length; l++)
    o[l].type.valid(e, o[l]) || (r.onRemove && r.onRemove(o[l].spec), o.splice(l--, 1));
  return o.length || i.length ? new J(o, i) : ie;
}
function Ft(n, e) {
  return n.from - e.from || n.to - e.to;
}
function Cs(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t];
    if (r.from != r.to)
      for (let i = t + 1; i < e.length; i++) {
        let s = e[i];
        if (s.from == r.from) {
          s.to != r.to && (e == n && (e = n.slice()), e[i] = s.copy(s.from, r.to), Lo(e, i + 1, s.copy(r.to, s.to)));
          continue;
        } else {
          s.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, s.from), Lo(e, i, r.copy(s.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function Lo(n, e, t) {
  for (; e < n.length && Ft(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
function Ti(n) {
  let e = [];
  return n.someProp("decorations", (t) => {
    let r = t(n.state);
    r && r != ie && e.push(r);
  }), n.cursorWrapper && e.push(J.create(n.state.doc, [n.cursorWrapper.deco])), lt.from(e);
}
const kd = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, wd = he && ht <= 11;
class Sd {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class Cd {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new Sd(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      he && ht <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), wd && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, kd)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let t = 0; t < e.length; t++)
          this.queue.push(e[t]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (Eo(this.view)) {
      if (this.suppressingSelectionUpdates)
        return et(this.view);
      if (he && ht <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && Ht(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let t = /* @__PURE__ */ new Set(), r;
    for (let s = e.focusNode; s; s = Wn(s))
      t.add(s);
    for (let s = e.anchorNode; s; s = Wn(s))
      if (t.has(s)) {
        r = s;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && Eo(e) && !this.ignoreSelectionChange(r), s = -1, o = -1, l = !1, a = [];
    if (e.editable)
      for (let u = 0; u < t.length; u++) {
        let f = this.registerMutation(t[u], a);
        f && (s = s < 0 ? f.from : Math.min(f.from, s), o = o < 0 ? f.to : Math.max(f.to, o), f.typeOver && (l = !0));
      }
    if (Be && a.length) {
      let u = a.filter((f) => f.nodeName == "BR");
      if (u.length == 2) {
        let [f, d] = u;
        f.parentNode && f.parentNode.parentNode == d.parentNode ? d.remove() : f.remove();
      } else {
        let { focusNode: f } = this.currentSelection;
        for (let d of u) {
          let h = d.parentNode;
          h && h.nodeName == "LI" && (!f || Td(e, f) != h) && d.remove();
        }
      }
    }
    let c = null;
    s < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && ni(r) && (c = bs(e)) && c.eq(F.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, et(e), this.currentSelection.set(r), e.scrollToSelection()) : (s > -1 || i) && (s > -1 && (e.docView.markDirty(s, o), Od(e)), this.handleDOMChange(s, o, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || et(e), this.currentSelection.set(r));
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let u = 0; u < e.addedNodes.length; u++) {
        let f = e.addedNodes[u];
        t.push(f), f.nodeType == 3 && (this.lastChangedTextNode = f);
      }
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, s = e.nextSibling;
      if (he && ht <= 11 && e.addedNodes.length)
        for (let u = 0; u < e.addedNodes.length; u++) {
          let { previousSibling: f, nextSibling: d } = e.addedNodes[u];
          (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (i = f), (!d || Array.prototype.indexOf.call(e.addedNodes, d) < 0) && (s = d);
        }
      let o = i && i.parentNode == e.target ? ne(i) + 1 : 0, l = r.localPosFromDOM(e.target, o, -1), a = s && s.parentNode == e.target ? ne(s) : e.target.childNodes.length, c = r.localPosFromDOM(e.target, a, 1);
      return { from: l, to: c };
    } else return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : (this.lastChangedTextNode = e.target, {
      from: r.posAtStart,
      to: r.posAtEnd,
      // An event was generated for a text change that didn't change
      // any text. Mark the dom change to fall back to assuming the
      // selection was typed over with an identical value if it can't
      // find another change.
      typeOver: e.target.nodeValue == e.oldValue
    });
  }
}
let zo = /* @__PURE__ */ new WeakMap(), Fo = !1;
function Od(n) {
  if (!zo.has(n) && (zo.set(n, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
    if (n.requiresGeckoHackNode = Be, Fo)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), Fo = !0;
  }
}
function Vo(n, e) {
  let t = e.startContainer, r = e.startOffset, i = e.endContainer, s = e.endOffset, o = n.domAtPos(n.state.selection.anchor);
  return Ht(o.node, o.offset, i, s) && ([t, r, i, s] = [i, s, t, r]), { anchorNode: t, anchorOffset: r, focusNode: i, focusOffset: s };
}
function Md(n, e) {
  if (e.getComposedRanges) {
    let i = e.getComposedRanges(n.root)[0];
    if (i)
      return Vo(n, i);
  }
  let t;
  function r(i) {
    i.preventDefault(), i.stopImmediatePropagation(), t = i.getTargetRanges()[0];
  }
  return n.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", r, !0), t ? Vo(n, t) : null;
}
function Td(n, e) {
  for (let t = e.parentNode; t && t != n.dom; t = t.parentNode) {
    let r = n.docView.nearestDesc(t, !0);
    if (r && r.node.isBlock)
      return t;
  }
  return null;
}
function Ed(n, e, t) {
  let { node: r, fromOffset: i, toOffset: s, from: o, to: l } = n.docView.parseRange(e, t), a = n.domSelectionRange(), c, u = a.anchorNode;
  if (u && n.dom.contains(u.nodeType == 1 ? u : u.parentNode) && (c = [{ node: u, offset: a.anchorOffset }], ni(a) || c.push({ node: a.focusNode, offset: a.focusOffset })), se && n.input.lastKeyCode === 8)
    for (let y = s; y > i; y--) {
      let b = r.childNodes[y - 1], w = b.pmViewDesc;
      if (b.nodeName == "BR" && !w) {
        s = y;
        break;
      }
      if (!w || w.size)
        break;
    }
  let f = n.state.doc, d = n.someProp("domParser") || dt.fromSchema(n.state.schema), h = f.resolve(o), p = null, m = d.parse(r, {
    topNode: h.parent,
    topMatch: h.parent.contentMatchAt(h.index()),
    topOpen: !0,
    from: i,
    to: s,
    preserveWhitespace: h.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: c,
    ruleFromNode: Nd,
    context: h
  });
  if (c && c[0].pos != null) {
    let y = c[0].pos, b = c[1] && c[1].pos;
    b == null && (b = y), p = { anchor: y + o, head: b + o };
  }
  return { doc: m, sel: p, from: o, to: l };
}
function Nd(n) {
  let e = n.pmViewDesc;
  if (e)
    return e.parseRule();
  if (n.nodeName == "BR" && n.parentNode) {
    if (ce && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (n.parentNode.lastChild == n || ce && /^(tr|table)$/i.test(n.parentNode.nodeName))
      return { ignore: !0 };
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const Dd = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Ad(n, e, t, r, i) {
  let s = n.input.compositionPendingChanges || (n.composing ? n.input.compositionID : 0);
  if (n.input.compositionPendingChanges = 0, e < 0) {
    let N = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, $ = bs(n, N);
    if ($ && !n.state.selection.eq($)) {
      if (se && Ie && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", (W) => W(n, Dt(13, "Enter"))))
        return;
      let _ = n.state.tr.setSelection($);
      N == "pointer" ? _.setMeta("pointer", !0) : N == "key" && _.scrollIntoView(), s && _.setMeta("composition", s), n.dispatch(_);
    }
    return;
  }
  let o = n.state.doc.resolve(e), l = o.sharedDepth(t);
  e = o.before(l + 1), t = n.state.doc.resolve(t).after(l + 1);
  let a = n.state.selection, c = Ed(n, e, t), u = n.state.doc, f = u.slice(c.from, c.to), d, h;
  n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (d = n.state.selection.to, h = "end") : (d = n.state.selection.from, h = "start"), n.input.lastKeyCode = null;
  let p = Pd(f.content, c.doc.content, c.from, d, h);
  if (p && n.input.domChangeCount++, (gn && n.input.lastIOSEnter > Date.now() - 225 || Ie) && i.some((N) => N.nodeType == 1 && !Dd.test(N.nodeName)) && (!p || p.endA >= p.endB) && n.someProp("handleKeyDown", (N) => N(n, Dt(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!p)
    if (r && a instanceof B && !a.empty && a.$head.sameParent(a.$anchor) && !n.composing && !(c.sel && c.sel.anchor != c.sel.head))
      p = { start: a.from, endA: a.to, endB: a.to };
    else {
      if (c.sel) {
        let N = $o(n, n.state.doc, c.sel);
        if (N && !N.eq(n.state.selection)) {
          let $ = n.state.tr.setSelection(N);
          s && $.setMeta("composition", s), n.dispatch($);
        }
      }
      return;
    }
  n.state.selection.from < n.state.selection.to && p.start == p.endB && n.state.selection instanceof B && (p.start > n.state.selection.from && p.start <= n.state.selection.from + 2 && n.state.selection.from >= c.from ? p.start = n.state.selection.from : p.endA < n.state.selection.to && p.endA >= n.state.selection.to - 2 && n.state.selection.to <= c.to && (p.endB += n.state.selection.to - p.endA, p.endA = n.state.selection.to)), he && ht <= 11 && p.endB == p.start + 1 && p.endA == p.start && p.start > c.from && c.doc.textBetween(p.start - c.from - 1, p.start - c.from + 1) == "  " && (p.start--, p.endA--, p.endB--);
  let m = c.doc.resolveNoCache(p.start - c.from), y = c.doc.resolveNoCache(p.endB - c.from), b = u.resolve(p.start), w = m.sameParent(y) && m.parent.inlineContent && b.end() >= p.endA, O;
  if ((gn && n.input.lastIOSEnter > Date.now() - 225 && (!w || i.some((N) => N.nodeName == "DIV" || N.nodeName == "P")) || !w && m.pos < c.doc.content.size && !m.sameParent(y) && (O = F.findFrom(c.doc.resolve(m.pos + 1), 1, !0)) && O.head == y.pos) && n.someProp("handleKeyDown", (N) => N(n, Dt(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > p.start && Rd(u, p.start, p.endA, m, y) && n.someProp("handleKeyDown", (N) => N(n, Dt(8, "Backspace")))) {
    Ie && se && n.domObserver.suppressSelectionUpdates();
    return;
  }
  se && Ie && p.endB == p.start && (n.input.lastAndroidDelete = Date.now()), Ie && !w && m.start() != y.start() && y.parentOffset == 0 && m.depth == y.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == p.endA && (p.endB -= 2, y = c.doc.resolveNoCache(p.endB - c.from), setTimeout(() => {
    n.someProp("handleKeyDown", function(N) {
      return N(n, Dt(13, "Enter"));
    });
  }, 20));
  let g = p.start, E = p.endA, x, R, L;
  if (w) {
    if (m.pos == y.pos)
      he && ht <= 11 && m.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => et(n), 20)), x = n.state.tr.delete(g, E), R = u.resolve(p.start).marksAcross(u.resolve(p.endA));
    else if (
      // Adding or removing a mark
      p.endA == p.endB && (L = Id(m.parent.content.cut(m.parentOffset, y.parentOffset), b.parent.content.cut(b.parentOffset, p.endA - b.start())))
    )
      x = n.state.tr, L.type == "add" ? x.addMark(g, E, L.mark) : x.removeMark(g, E, L.mark);
    else if (m.parent.child(m.index()).isText && m.index() == y.index() - (y.textOffset ? 0 : 1)) {
      let N = m.parent.textBetween(m.parentOffset, y.parentOffset);
      if (n.someProp("handleTextInput", ($) => $(n, g, E, N)))
        return;
      x = n.state.tr.insertText(N, g, E);
    }
  }
  if (x || (x = n.state.tr.replace(g, E, c.doc.slice(p.start - c.from, p.endB - c.from))), c.sel) {
    let N = $o(n, x.doc, c.sel);
    N && !(se && Ie && n.composing && N.empty && (p.start != p.endB || n.input.lastAndroidDelete < Date.now() - 100) && (N.head == g || N.head == x.mapping.map(E) - 1) || he && N.empty && N.head == g) && x.setSelection(N);
  }
  R && x.ensureMarks(R), s && x.setMeta("composition", s), n.dispatch(x.scrollIntoView());
}
function $o(n, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : vs(n, e.resolve(t.anchor), e.resolve(t.head));
}
function Id(n, e) {
  let t = n.firstChild.marks, r = e.firstChild.marks, i = t, s = r, o, l, a;
  for (let u = 0; u < r.length; u++)
    i = r[u].removeFromSet(i);
  for (let u = 0; u < t.length; u++)
    s = t[u].removeFromSet(s);
  if (i.length == 1 && s.length == 0)
    l = i[0], o = "add", a = (u) => u.mark(l.addToSet(u.marks));
  else if (i.length == 0 && s.length == 1)
    l = s[0], o = "remove", a = (u) => u.mark(l.removeFromSet(u.marks));
  else
    return null;
  let c = [];
  for (let u = 0; u < e.childCount; u++)
    c.push(a(e.child(u)));
  if (k.from(c).eq(n))
    return { mark: l, type: o };
}
function Rd(n, e, t, r, i) {
  if (
    // The content must have shrunk
    t - e <= i.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
    Ei(r, !0, !1) < i.pos
  )
    return !1;
  let s = n.resolve(e);
  if (!r.parent.isTextblock) {
    let l = s.nodeAfter;
    return l != null && t == e + l.nodeSize;
  }
  if (s.parentOffset < s.parent.content.size || !s.parent.isTextblock)
    return !1;
  let o = n.resolve(Ei(s, !0, !0));
  return !o.parent.isTextblock || o.pos > t || Ei(o, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(o.parent.content);
}
function Ei(n, e, t) {
  let r = n.depth, i = e ? n.end() : n.pos;
  for (; r > 0 && (e || n.indexAfter(r) == n.node(r).childCount); )
    r--, i++, e = !1;
  if (t) {
    let s = n.node(r).maybeChild(n.indexAfter(r));
    for (; s && !s.isLeaf; )
      s = s.firstChild, i++;
  }
  return i;
}
function Pd(n, e, t, r, i) {
  let s = n.findDiffStart(e, t);
  if (s == null)
    return null;
  let { a: o, b: l } = n.findDiffEnd(e, t + n.size, t + e.size);
  if (i == "end") {
    let a = Math.max(0, s - Math.min(o, l));
    r -= o + a - s;
  }
  if (o < s && n.size < e.size) {
    let a = r <= s && r >= o ? s - r : 0;
    s -= a, s && s < e.size && jo(e.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1), l = s + (l - o), o = s;
  } else if (l < s) {
    let a = r <= s && r >= l ? s - r : 0;
    s -= a, s && s < n.size && jo(n.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1), o = s + (o - l), l = s;
  }
  return { start: s, endA: o, endB: l };
}
function jo(n) {
  if (n.length != 2)
    return !1;
  let e = n.charCodeAt(0), t = n.charCodeAt(1);
  return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319;
}
class Bd {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new ed(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(qo), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Wo(this), _o(this), this.nodeViews = Ko(this), this.docView = wo(this.state.doc, Ho(this), Ti(this), this.dom, this), this.domObserver = new Cd(this, (r, i, s, o) => Ad(this, r, i, s, o)), this.domObserver.start(), td(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let t in e)
        this._props[t] = e[t];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && ns(this);
    let t = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(qo), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let t = {};
    for (let r in this._props)
      t[r] = this._props[r];
    t.state = this.state;
    for (let r in e)
      t[r] = e[r];
    this.update(t);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    var r;
    let i = this.state, s = !1, o = !1;
    e.storedMarks && this.composing && (Fa(this), o = !0), this.state = e;
    let l = i.plugins != e.plugins || this._props.plugins != t.plugins;
    if (l || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let h = Ko(this);
      zd(h, this.nodeViews) && (this.nodeViews = h, s = !0);
    }
    (l || t.handleDOMEvents != this._props.handleDOMEvents) && ns(this), this.editable = Wo(this), _o(this);
    let a = Ti(this), c = Ho(this), u = i.plugins != e.plugins && !i.doc.eq(e.doc) ? "reset" : e.scrollToSelection > i.scrollToSelection ? "to selection" : "preserve", f = s || !this.docView.matchesNode(e.doc, c, a);
    (f || !e.selection.eq(i.selection)) && (o = !0);
    let d = u == "preserve" && o && this.dom.style.overflowAnchor == null && gf(this);
    if (o) {
      this.domObserver.stop();
      let h = f && (he || se) && !this.composing && !i.selection.empty && !e.selection.empty && Ld(i.selection, e.selection);
      if (f) {
        let p = se ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = pd(this)), (s || !this.docView.update(e.doc, c, a, this)) && (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = wo(e.doc, c, a, this.dom, this)), p && !this.trackWrites && (h = !0);
      }
      h || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && $f(this)) ? et(this, h) : (Oa(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(i), !((r = this.dragging) === null || r === void 0) && r.node && !i.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, i), u == "reset" ? this.dom.scrollTop = 0 : u == "to selection" ? this.scrollToSelection() : d && yf(d);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!this.someProp("handleScrollToSelection", (t) => t(this))) if (this.state.selection instanceof A) {
      let t = this.docView.domAfterPos(this.state.selection.from);
      t.nodeType == 1 && go(this, t.getBoundingClientRect(), e);
    } else
      go(this, this.coordsAtPos(this.state.selection.head, 1), e);
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let t = 0; t < this.directPlugins.length; t++) {
        let r = this.directPlugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let t = 0; t < this.state.plugins.length; t++) {
        let r = this.state.plugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let t = 0; t < this.pluginViews.length; t++) {
        let r = this.pluginViews[t];
        r.update && r.update(this, e);
      }
  }
  updateDraggedNode(e, t) {
    let r = e.node, i = -1;
    if (this.state.doc.nodeAt(r.from) == r.node)
      i = r.from;
    else {
      let s = r.from + (this.state.doc.content.size - t.doc.content.size);
      (s > 0 && this.state.doc.nodeAt(s)) == r.node && (i = s);
    }
    this.dragging = new $a(e.slice, e.move, i < 0 ? void 0 : A.create(this.state.doc, i));
  }
  someProp(e, t) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = t ? t(r) : r))
      return i;
    for (let o = 0; o < this.directPlugins.length; o++) {
      let l = this.directPlugins[o].props[e];
      if (l != null && (i = t ? t(l) : l))
        return i;
    }
    let s = this.state.plugins;
    if (s)
      for (let o = 0; o < s.length; o++) {
        let l = s[o].props[e];
        if (l != null && (i = t ? t(l) : l))
          return i;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (he) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && bf(this.dom), et(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let t = this.dom.parentNode; t; t = t.parentNode)
        if (t.nodeType == 9 || t.nodeType == 11 && t.host)
          return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t;
    }
    return e || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return Sf(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, t = 1) {
    return ya(this, e, t);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    return t ? t.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, t, r = -1) {
    let i = this.docView.posFromDOM(e, t, r);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, t) {
    return Ef(this, t || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, t) {
    return qn(this, "", e, !1, t || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, t) {
    return qn(this, e, null, !0, t || new ClipboardEvent("paste"));
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (nd(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], Ti(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, sf());
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return id(this, e);
  }
  /**
  Dispatch a transaction. Will call
  [`dispatchTransaction`](https://prosemirror.net/docs/ref/#view.DirectEditorProps.dispatchTransaction)
  when given, and otherwise defaults to applying the transaction to
  the current state and calling
  [`updateState`](https://prosemirror.net/docs/ref/#view.EditorView.updateState) with the result.
  This method is bound to the view instance, so that it can be
  easily passed around.
  */
  dispatch(e) {
    let t = this._props.dispatchTransaction;
    t ? t.call(this, e) : this.updateState(this.state.apply(e));
  }
  /**
  @internal
  */
  domSelectionRange() {
    let e = this.domSelection();
    return e ? ce && this.root.nodeType === 11 && uf(this.dom.ownerDocument) == this.dom && Md(this, e) || e : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
function Ho(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(n.editable), n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t)
      for (let r in t)
        r == "class" ? e.class += " " + t[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
  }), e.translate || (e.translate = "no"), [ke.node(0, n.state.doc.content.size, e)];
}
function _o(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: ke.widget(n.state.selection.from, e, { raw: !0, marks: n.markCursor }) };
  } else
    n.cursorWrapper = null;
}
function Wo(n) {
  return !n.someProp("editable", (e) => e(n.state) === !1);
}
function Ld(n, e) {
  let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
  return n.$anchor.start(t) != e.$anchor.start(t);
}
function Ko(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return n.someProp("nodeViews", t), n.someProp("markViews", t), e;
}
function zd(n, e) {
  let t = 0, r = 0;
  for (let i in n) {
    if (n[i] != e[i])
      return !0;
    t++;
  }
  for (let i in e)
    r++;
  return t != r;
}
function qo(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var gt = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, Wr = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Fd = typeof navigator < "u" && /Mac/.test(navigator.platform), Vd = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var re = 0; re < 10; re++) gt[48 + re] = gt[96 + re] = String(re);
for (var re = 1; re <= 24; re++) gt[re + 111] = "F" + re;
for (var re = 65; re <= 90; re++)
  gt[re] = String.fromCharCode(re + 32), Wr[re] = String.fromCharCode(re);
for (var Ni in gt) Wr.hasOwnProperty(Ni) || (Wr[Ni] = gt[Ni]);
function $d(n) {
  var e = Fd && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || Vd && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? Wr : gt)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const jd = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function Hd(n) {
  let e = n.split(/-(?!$)/), t = e[e.length - 1];
  t == "Space" && (t = " ");
  let r, i, s, o;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      jd ? o = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (t = "Alt-" + t), i && (t = "Ctrl-" + t), o && (t = "Meta-" + t), s && (t = "Shift-" + t), t;
}
function _d(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n)
    e[Hd(t)] = n[t];
  return e;
}
function Di(n, e, t = !0) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t && e.shiftKey && (n = "Shift-" + n), n;
}
function Wd(n) {
  return new ye({ props: { handleKeyDown: Kd(n) } });
}
function Kd(n) {
  let e = _d(n);
  return function(t, r) {
    let i = $d(r), s, o = e[Di(i, r)];
    if (o && o(t.state, t.dispatch, t))
      return !0;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let l = e[Di(i, r, !1)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
      if ((r.shiftKey || r.altKey || r.metaKey || i.charCodeAt(0) > 127) && (s = gt[r.keyCode]) && s != i) {
        let l = e[Di(s, r)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
    }
    return !1;
  };
}
const qd = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0);
function Ka(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t;
}
const Jd = (n, e, t) => {
  let r = Ka(n, t);
  if (!r)
    return !1;
  let i = Os(r);
  if (!i) {
    let o = r.blockRange(), l = o && wn(o);
    return l == null ? !1 : (e && e(n.tr.lift(o, l).scrollIntoView()), !0);
  }
  let s = i.nodeBefore;
  if (Ga(n, i, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (yn(s, "end") || A.isSelectable(s)))
    for (let o = r.depth; ; o--) {
      let l = ei(n.doc, r.before(o), r.after(o), C.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = n.tr.step(l);
          a.setSelection(yn(s, "end") ? F.findFrom(a.doc.resolve(a.mapping.map(i.pos, -1)), -1) : A.create(a.doc, i.pos - s.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (o == 1 || r.node(o - 1).childCount > 1)
        break;
    }
  return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos - s.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, Ud = (n, e, t) => {
  let r = Ka(n, t);
  if (!r)
    return !1;
  let i = Os(r);
  return i ? qa(n, i, e) : !1;
}, Gd = (n, e, t) => {
  let r = Ja(n, t);
  if (!r)
    return !1;
  let i = Ms(r);
  return i ? qa(n, i, e) : !1;
};
function qa(n, e, t) {
  let r = e.nodeBefore, i = r, s = e.pos - 1;
  for (; !i.isTextblock; s--) {
    if (i.type.spec.isolating)
      return !1;
    let u = i.lastChild;
    if (!u)
      return !1;
    i = u;
  }
  let o = e.nodeAfter, l = o, a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating)
      return !1;
    let u = l.firstChild;
    if (!u)
      return !1;
    l = u;
  }
  let c = ei(n.doc, s, a, C.empty);
  if (!c || c.from != s || c instanceof Y && c.slice.size >= a - s)
    return !1;
  if (t) {
    let u = n.tr.step(c);
    u.setSelection(B.create(u.doc, s)), t(u.scrollIntoView());
  }
  return !0;
}
function yn(n, e, t = !1) {
  for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (t && r.childCount != 1)
      return !1;
  }
  return !1;
}
const Yd = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, s = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0)
      return !1;
    s = Os(r);
  }
  let o = s && s.nodeBefore;
  return !o || !A.isSelectable(o) ? !1 : (e && e(n.tr.setSelection(A.create(n.doc, s.pos - o.nodeSize)).scrollIntoView()), !0);
};
function Os(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0)
        return n.doc.resolve(n.before(e + 1));
      if (n.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Ja(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t;
}
const Xd = (n, e, t) => {
  let r = Ja(n, t);
  if (!r)
    return !1;
  let i = Ms(r);
  if (!i)
    return !1;
  let s = i.nodeAfter;
  if (Ga(n, i, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (yn(s, "start") || A.isSelectable(s))) {
    let o = ei(n.doc, r.before(), r.after(), C.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = n.tr.step(o);
        l.setSelection(yn(s, "start") ? F.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : A.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos, i.pos + s.nodeSize).scrollIntoView()), !0) : !1;
}, Zd = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, s = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size)
      return !1;
    s = Ms(r);
  }
  let o = s && s.nodeAfter;
  return !o || !A.isSelectable(o) ? !1 : (e && e(n.tr.setSelection(A.create(n.doc, s.pos)).scrollIntoView()), !0);
};
function Ms(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      let t = n.node(e);
      if (n.index(e) + 1 < t.childCount)
        return n.doc.resolve(n.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const Qd = (n, e) => {
  let t = n.selection, r = t instanceof A, i;
  if (r) {
    if (t.node.isTextblock || !bt(n.doc, t.from))
      return !1;
    i = t.from;
  } else if (i = Qr(n.doc, t.from, -1), i == null)
    return !1;
  if (e) {
    let s = n.tr.join(i);
    r && s.setSelection(A.create(s.doc, i - n.doc.resolve(i).nodeBefore.nodeSize)), e(s.scrollIntoView());
  }
  return !0;
}, eh = (n, e) => {
  let t = n.selection, r;
  if (t instanceof A) {
    if (t.node.isTextblock || !bt(n.doc, t.to))
      return !1;
    r = t.to;
  } else if (r = Qr(n.doc, t.to, 1), r == null)
    return !1;
  return e && e(n.tr.join(r).scrollIntoView()), !0;
}, th = (n, e) => {
  let { $from: t, $to: r } = n.selection, i = t.blockRange(r), s = i && wn(i);
  return s == null ? !1 : (e && e(n.tr.lift(i, s).scrollIntoView()), !0);
}, nh = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  return !t.parent.type.spec.code || !t.sameParent(r) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
};
function Ua(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const rh = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  if (!t.parent.type.spec.code || !t.sameParent(r))
    return !1;
  let i = t.node(-1), s = t.indexAfter(-1), o = Ua(i.contentMatchAt(s));
  if (!o || !i.canReplaceWith(s, s, o))
    return !1;
  if (e) {
    let l = t.after(), a = n.tr.replaceWith(l, l, o.createAndFill());
    a.setSelection(F.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, ih = (n, e) => {
  let t = n.selection, { $from: r, $to: i } = t;
  if (t instanceof Pe || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let s = Ua(i.parent.contentMatchAt(i.indexAfter()));
  if (!s || !s.isTextblock)
    return !1;
  if (e) {
    let o = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, l = n.tr.insert(o, s.createAndFill());
    l.setSelection(B.create(l.doc, o + 1)), e(l.scrollIntoView());
  }
  return !0;
}, sh = (n, e) => {
  let { $cursor: t } = n.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let s = t.before();
    if (fn(n.doc, s))
      return e && e(n.tr.split(s).scrollIntoView()), !0;
  }
  let r = t.blockRange(), i = r && wn(r);
  return i == null ? !1 : (e && e(n.tr.lift(r, i).scrollIntoView()), !0);
}, oh = (n, e) => {
  let { $from: t, to: r } = n.selection, i, s = t.sharedDepth(r);
  return s == 0 ? !1 : (i = t.before(s), e && e(n.tr.setSelection(A.create(n.doc, i))), !0);
};
function lh(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, s = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(s - 1, s) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(s, s + 1) || !(i.isTextblock || bt(n.doc, e.pos)) ? !1 : (t && t(n.tr.clearIncompatible(e.pos, r.type, r.contentMatchAt(r.childCount)).join(e.pos).scrollIntoView()), !0);
}
function Ga(n, e, t, r) {
  let i = e.nodeBefore, s = e.nodeAfter, o, l, a = i.type.spec.isolating || s.type.spec.isolating;
  if (!a && lh(n, e, t))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (o = (l = i.contentMatchAt(i.childCount)).findWrapping(s.type)) && l.matchType(o[0] || s.type).validEnd) {
    if (t) {
      let h = e.pos + s.nodeSize, p = k.empty;
      for (let b = o.length - 1; b >= 0; b--)
        p = k.from(o[b].create(null, p));
      p = k.from(i.copy(p));
      let m = n.tr.step(new X(e.pos - 1, h, e.pos, h, new C(p, 1, 0), o.length, !0)), y = h + 2 * o.length;
      bt(m.doc, y) && m.join(y), t(m.scrollIntoView());
    }
    return !0;
  }
  let u = s.type.spec.isolating || r > 0 && a ? null : F.findFrom(e, 1), f = u && u.$from.blockRange(u.$to), d = f && wn(f);
  if (d != null && d >= e.depth)
    return t && t(n.tr.lift(f, d).scrollIntoView()), !0;
  if (c && yn(s, "start", !0) && yn(i, "end")) {
    let h = i, p = [];
    for (; p.push(h), !h.isTextblock; )
      h = h.lastChild;
    let m = s, y = 1;
    for (; !m.isTextblock; m = m.firstChild)
      y++;
    if (h.canReplace(h.childCount, h.childCount, m.content)) {
      if (t) {
        let b = k.empty;
        for (let O = p.length - 1; O >= 0; O--)
          b = k.from(p[O].copy(b));
        let w = n.tr.step(new X(e.pos - p.length, e.pos + s.nodeSize, e.pos + y, e.pos + s.nodeSize - y, new C(b, p.length, 0), 0, !0));
        t(w.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Ya(n) {
  return function(e, t) {
    let r = e.selection, i = n < 0 ? r.$from : r.$to, s = i.depth;
    for (; i.node(s).isInline; ) {
      if (!s)
        return !1;
      s--;
    }
    return i.node(s).isTextblock ? (t && t(e.tr.setSelection(B.create(e.doc, n < 0 ? i.start(s) : i.end(s)))), !0) : !1;
  };
}
const ah = Ya(-1), ch = Ya(1);
function uh(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s), l = o && ms(o, n, e);
    return l ? (r && r(t.tr.wrap(o, l).scrollIntoView()), !0) : !1;
  };
}
function Jo(n, e = null) {
  return function(t, r) {
    let i = !1;
    for (let s = 0; s < t.selection.ranges.length && !i; s++) {
      let { $from: { pos: o }, $to: { pos: l } } = t.selection.ranges[s];
      t.doc.nodesBetween(o, l, (a, c) => {
        if (i)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(n, e)))
          if (a.type == n)
            i = !0;
          else {
            let u = t.doc.resolve(c), f = u.index();
            i = u.parent.canReplaceWith(f, f + 1, n);
          }
      });
    }
    if (!i)
      return !1;
    if (r) {
      let s = t.tr;
      for (let o = 0; o < t.selection.ranges.length; o++) {
        let { $from: { pos: l }, $to: { pos: a } } = t.selection.ranges[o];
        s.setBlockType(l, a, n, e);
      }
      r(s.scrollIntoView());
    }
    return !0;
  };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function fh(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s), l = !1, a = o;
    if (!o)
      return !1;
    if (o.depth >= 2 && i.node(o.depth - 1).type.compatibleContent(n) && o.startIndex == 0) {
      if (i.index(o.depth - 1) == 0)
        return !1;
      let u = t.doc.resolve(o.start - 2);
      a = new Lr(u, u, o.depth), o.endIndex < o.parent.childCount && (o = new Lr(i, t.doc.resolve(s.end(o.depth)), o.depth)), l = !0;
    }
    let c = ms(a, n, e, o);
    return c ? (r && r(dh(t.tr, o, c, l, n).scrollIntoView()), !0) : !1;
  };
}
function dh(n, e, t, r, i) {
  let s = k.empty;
  for (let u = t.length - 1; u >= 0; u--)
    s = k.from(t[u].type.create(t[u].attrs, s));
  n.step(new X(e.start - (r ? 2 : 0), e.end, e.start, e.end, new C(s, 0, 0), t.length, !0));
  let o = 0;
  for (let u = 0; u < t.length; u++)
    t[u].type == i && (o = u + 1);
  let l = t.length - o, a = e.start + t.length - (r ? 2 : 0), c = e.parent;
  for (let u = e.startIndex, f = e.endIndex, d = !0; u < f; u++, d = !1)
    !d && fn(n.doc, a, l) && (n.split(a, l), a += 2 * l), a += c.child(u).nodeSize;
  return n;
}
function hh(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, s = r.blockRange(i, (o) => o.childCount > 0 && o.firstChild.type == n);
    return s ? t ? r.node(s.depth - 1).type == n ? ph(e, t, n, s) : mh(e, t, s) : !0 : !1;
  };
}
function ph(n, e, t, r) {
  let i = n.tr, s = r.end, o = r.$to.end(r.depth);
  s < o && (i.step(new X(s - 1, o, s, o, new C(k.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new Lr(i.doc.resolve(r.$from.pos), i.doc.resolve(o), r.depth));
  const l = wn(r);
  if (l == null)
    return !1;
  i.lift(r, l);
  let a = i.mapping.map(s, -1) - 1;
  return bt(i.doc, a) && i.join(a), e(i.scrollIntoView()), !0;
}
function mh(n, e, t) {
  let r = n.tr, i = t.parent;
  for (let h = t.end, p = t.endIndex - 1, m = t.startIndex; p > m; p--)
    h -= i.child(p).nodeSize, r.delete(h - 1, h + 1);
  let s = r.doc.resolve(t.start), o = s.nodeAfter;
  if (r.mapping.map(t.end) != t.start + s.nodeAfter.nodeSize)
    return !1;
  let l = t.startIndex == 0, a = t.endIndex == i.childCount, c = s.node(-1), u = s.index(-1);
  if (!c.canReplace(u + (l ? 0 : 1), u + 1, o.content.append(a ? k.empty : k.from(i))))
    return !1;
  let f = s.pos, d = f + o.nodeSize;
  return r.step(new X(f - (l ? 1 : 0), d + (a ? 1 : 0), f + 1, d - 1, new C((l ? k.empty : k.from(i.copy(k.empty))).append(a ? k.empty : k.from(i.copy(k.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function gh(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, s = r.blockRange(i, (c) => c.childCount > 0 && c.firstChild.type == n);
    if (!s)
      return !1;
    let o = s.startIndex;
    if (o == 0)
      return !1;
    let l = s.parent, a = l.child(o - 1);
    if (a.type != n)
      return !1;
    if (t) {
      let c = a.lastChild && a.lastChild.type == l.type, u = k.from(c ? n.create() : null), f = new C(k.from(n.create(null, k.from(l.type.create(null, u)))), c ? 3 : 1, 0), d = s.start, h = s.end;
      t(e.tr.step(new X(d - (c ? 3 : 1), h, d, h, f, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function si(n) {
  const { state: e, transaction: t } = n;
  let { selection: r } = t, { doc: i } = t, { storedMarks: s } = t;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return s;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = t.selection, i = t.doc, s = t.storedMarks, t;
    }
  };
}
class oi {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: t, state: r } = this, { view: i } = t, { tr: s } = r, o = this.buildProps(s);
    return Object.fromEntries(Object.entries(e).map(([l, a]) => [l, (...u) => {
      const f = a(...u)(o);
      return !s.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(s), f;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, t = !0) {
    const { rawCommands: r, editor: i, state: s } = this, { view: o } = i, l = [], a = !!e, c = e || s.tr, u = () => (!a && t && !c.getMeta("preventDispatch") && !this.hasCustomState && o.dispatch(c), l.every((d) => d === !0)), f = {
      ...Object.fromEntries(Object.entries(r).map(([d, h]) => [d, (...m) => {
        const y = this.buildProps(c, t), b = h(...m)(y);
        return l.push(b), f;
      }])),
      run: u
    };
    return f;
  }
  createCan(e) {
    const { rawCommands: t, state: r } = this, i = !1, s = e || r.tr, o = this.buildProps(s, i);
    return {
      ...Object.fromEntries(Object.entries(t).map(([a, c]) => [a, (...u) => c(...u)({ ...o, dispatch: void 0 })])),
      chain: () => this.createChain(s, i)
    };
  }
  buildProps(e, t = !0) {
    const { rawCommands: r, editor: i, state: s } = this, { view: o } = i, l = {
      tr: e,
      editor: i,
      view: o,
      state: si({
        state: s,
        transaction: e
      }),
      dispatch: t ? () => {
      } : void 0,
      chain: () => this.createChain(e, t),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([a, c]) => [a, (...u) => c(...u)(l)]));
      }
    };
    return l;
  }
}
class yh {
  constructor() {
    this.callbacks = {};
  }
  on(e, t) {
    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
  }
  emit(e, ...t) {
    const r = this.callbacks[e];
    return r && r.forEach((i) => i.apply(this, t)), this;
  }
  off(e, t) {
    const r = this.callbacks[e];
    return r && (t ? this.callbacks[e] = r.filter((i) => i !== t) : delete this.callbacks[e]), this;
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function M(n, e, t) {
  return n.config[e] === void 0 && n.parent ? M(n.parent, e, t) : typeof n.config[e] == "function" ? n.config[e].bind({
    ...t,
    parent: n.parent ? M(n.parent, e, t) : null
  }) : n.config[e];
}
function li(n) {
  const e = n.filter((i) => i.type === "extension"), t = n.filter((i) => i.type === "node"), r = n.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: r
  };
}
function Xa(n) {
  const e = [], { nodeExtensions: t, markExtensions: r } = li(n), i = [...t, ...r], s = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return n.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage,
      extensions: i
    }, a = M(o, "addGlobalAttributes", l);
    if (!a)
      return;
    a().forEach((u) => {
      u.types.forEach((f) => {
        Object.entries(u.attributes).forEach(([d, h]) => {
          e.push({
            type: f,
            name: d,
            attribute: {
              ...s,
              ...h
            }
          });
        });
      });
    });
  }), i.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage
    }, a = M(o, "addAttributes", l);
    if (!a)
      return;
    const c = a();
    Object.entries(c).forEach(([u, f]) => {
      const d = {
        ...s,
        ...f
      };
      typeof (d == null ? void 0 : d.default) == "function" && (d.default = d.default()), d != null && d.isRequired && (d == null ? void 0 : d.default) === void 0 && delete d.default, e.push({
        type: o.name,
        name: u,
        attribute: d
      });
    });
  }), e;
}
function Q(n, e) {
  if (typeof n == "string") {
    if (!e.nodes[n])
      throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return e.nodes[n];
  }
  return n;
}
function xt(...n) {
  return n.filter((e) => !!e).reduce((e, t) => {
    const r = { ...e };
    return Object.entries(t).forEach(([i, s]) => {
      if (!r[i]) {
        r[i] = s;
        return;
      }
      if (i === "class") {
        const l = s ? s.split(" ") : [], a = r[i] ? r[i].split(" ") : [], c = l.filter((u) => !a.includes(u));
        r[i] = [...a, ...c].join(" ");
      } else i === "style" ? r[i] = [r[i], s].join("; ") : r[i] = s;
    }), r;
  }, {});
}
function rs(n, e) {
  return e.filter((t) => t.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : {
    [t.name]: n.attrs[t.name]
  }).reduce((t, r) => xt(t, r), {});
}
function Za(n) {
  return typeof n == "function";
}
function V(n, e = void 0, ...t) {
  return Za(n) ? e ? n.bind(e)(...t) : n(...t) : n;
}
function bh(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function vh(n) {
  return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n;
}
function Uo(n, e) {
  return "style" in n ? n : {
    ...n,
    getAttrs: (t) => {
      const r = n.getAttrs ? n.getAttrs(t) : n.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((s, o) => {
        const l = o.attribute.parseHTML ? o.attribute.parseHTML(t) : vh(t.getAttribute(o.name));
        return l == null ? s : {
          ...s,
          [o.name]: l
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function Go(n) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(n).filter(([e, t]) => e === "attrs" && bh(t) ? !1 : t != null)
  );
}
function xh(n, e) {
  var t;
  const r = Xa(n), { nodeExtensions: i, markExtensions: s } = li(n), o = (t = i.find((c) => M(c, "topNode"))) === null || t === void 0 ? void 0 : t.name, l = Object.fromEntries(i.map((c) => {
    const u = r.filter((b) => b.type === c.name), f = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, d = n.reduce((b, w) => {
      const O = M(w, "extendNodeSchema", f);
      return {
        ...b,
        ...O ? O(c) : {}
      };
    }, {}), h = Go({
      ...d,
      content: V(M(c, "content", f)),
      marks: V(M(c, "marks", f)),
      group: V(M(c, "group", f)),
      inline: V(M(c, "inline", f)),
      atom: V(M(c, "atom", f)),
      selectable: V(M(c, "selectable", f)),
      draggable: V(M(c, "draggable", f)),
      code: V(M(c, "code", f)),
      whitespace: V(M(c, "whitespace", f)),
      defining: V(M(c, "defining", f)),
      isolating: V(M(c, "isolating", f)),
      attrs: Object.fromEntries(u.map((b) => {
        var w;
        return [b.name, { default: (w = b == null ? void 0 : b.attribute) === null || w === void 0 ? void 0 : w.default }];
      }))
    }), p = V(M(c, "parseHTML", f));
    p && (h.parseDOM = p.map((b) => Uo(b, u)));
    const m = M(c, "renderHTML", f);
    m && (h.toDOM = (b) => m({
      node: b,
      HTMLAttributes: rs(b, u)
    }));
    const y = M(c, "renderText", f);
    return y && (h.toText = y), [c.name, h];
  })), a = Object.fromEntries(s.map((c) => {
    const u = r.filter((y) => y.type === c.name), f = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, d = n.reduce((y, b) => {
      const w = M(b, "extendMarkSchema", f);
      return {
        ...y,
        ...w ? w(c) : {}
      };
    }, {}), h = Go({
      ...d,
      inclusive: V(M(c, "inclusive", f)),
      excludes: V(M(c, "excludes", f)),
      group: V(M(c, "group", f)),
      spanning: V(M(c, "spanning", f)),
      code: V(M(c, "code", f)),
      attrs: Object.fromEntries(u.map((y) => {
        var b;
        return [y.name, { default: (b = y == null ? void 0 : y.attribute) === null || b === void 0 ? void 0 : b.default }];
      }))
    }), p = V(M(c, "parseHTML", f));
    p && (h.parseDOM = p.map((y) => Uo(y, u)));
    const m = M(c, "renderHTML", f);
    return m && (h.toDOM = (y) => m({
      mark: y,
      HTMLAttributes: rs(y, u)
    })), [c.name, h];
  }));
  return new Gl({
    topNode: o,
    nodes: l,
    marks: a
  });
}
function Ai(n, e) {
  return e.nodes[n] || e.marks[n] || null;
}
function Yo(n, e) {
  return Array.isArray(e) ? e.some((t) => (typeof t == "string" ? t : t.name) === n.name) : e;
}
const kh = (n, e = 500) => {
  let t = "";
  const r = n.parentOffset;
  return n.parent.nodesBetween(Math.max(0, r - e), r, (i, s, o, l) => {
    var a, c;
    const u = ((c = (a = i.type.spec).toText) === null || c === void 0 ? void 0 : c.call(a, {
      node: i,
      pos: s,
      parent: o,
      index: l
    })) || i.textContent || "%leaf%";
    t += i.isAtom && !i.isText ? u : u.slice(0, Math.max(0, r - s));
  }), t;
};
function Ts(n) {
  return Object.prototype.toString.call(n) === "[object RegExp]";
}
class Qa {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const wh = (n, e) => {
  if (Ts(e))
    return e.exec(n);
  const t = e(n);
  if (!t)
    return null;
  const r = [t.text];
  return r.index = t.index, r.input = n, r.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(t.replaceWith)), r;
};
function Sr(n) {
  var e;
  const { editor: t, from: r, to: i, text: s, rules: o, plugin: l } = n, { view: a } = t;
  if (a.composing)
    return !1;
  const c = a.state.doc.resolve(r);
  if (
    // check for code node
    c.parent.type.spec.code || !((e = c.nodeBefore || c.nodeAfter) === null || e === void 0) && e.marks.find((d) => d.type.spec.code)
  )
    return !1;
  let u = !1;
  const f = kh(c) + s;
  return o.forEach((d) => {
    if (u)
      return;
    const h = wh(f, d.find);
    if (!h)
      return;
    const p = a.state.tr, m = si({
      state: a.state,
      transaction: p
    }), y = {
      from: r - (h[0].length - s.length),
      to: i
    }, { commands: b, chain: w, can: O } = new oi({
      editor: t,
      state: m
    });
    d.handler({
      state: m,
      range: y,
      match: h,
      commands: b,
      chain: w,
      can: O
    }) === null || !p.steps.length || (p.setMeta(l, {
      transform: p,
      from: r,
      to: i,
      text: s
    }), a.dispatch(p), u = !0);
  }), u;
}
function Sh(n) {
  const { editor: e, rules: t } = n, r = new ye({
    state: {
      init() {
        return null;
      },
      apply(i, s) {
        const o = i.getMeta(r);
        if (o)
          return o;
        const l = i.getMeta("applyInputRules");
        return !!l && setTimeout(() => {
          const { from: c, text: u } = l, f = c + u.length;
          Sr({
            editor: e,
            from: c,
            to: f,
            text: u,
            rules: t,
            plugin: r
          });
        }), i.selectionSet || i.docChanged ? null : s;
      }
    },
    props: {
      handleTextInput(i, s, o, l) {
        return Sr({
          editor: e,
          from: s,
          to: o,
          text: l,
          rules: t,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: s } = i.state.selection;
          s && Sr({
            editor: e,
            from: s.pos,
            to: s.pos,
            text: "",
            rules: t,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(i, s) {
        if (s.key !== "Enter")
          return !1;
        const { $cursor: o } = i.state.selection;
        return o ? Sr({
          editor: e,
          from: o.pos,
          to: o.pos,
          text: `
`,
          rules: t,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
function Ch(n) {
  return typeof n == "number";
}
class Oh {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const Mh = (n, e, t) => {
  if (Ts(e))
    return [...n.matchAll(e)];
  const r = e(n, t);
  return r ? r.map((i) => {
    const s = [i.text];
    return s.index = i.index, s.input = n, s.data = i.data, i.replaceWith && (i.text.includes(i.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), s.push(i.replaceWith)), s;
  }) : [];
};
function Th(n) {
  const { editor: e, state: t, from: r, to: i, rule: s, pasteEvent: o, dropEvent: l } = n, { commands: a, chain: c, can: u } = new oi({
    editor: e,
    state: t
  }), f = [];
  return t.doc.nodesBetween(r, i, (h, p) => {
    if (!h.isTextblock || h.type.spec.code)
      return;
    const m = Math.max(r, p), y = Math.min(i, p + h.content.size), b = h.textBetween(m - p, y - p, void 0, "￼");
    Mh(b, s.find, o).forEach((O) => {
      if (O.index === void 0)
        return;
      const g = m + O.index + 1, E = g + O[0].length, x = {
        from: t.tr.mapping.map(g),
        to: t.tr.mapping.map(E)
      }, R = s.handler({
        state: t,
        range: x,
        match: O,
        commands: a,
        chain: c,
        can: u,
        pasteEvent: o,
        dropEvent: l
      });
      f.push(R);
    });
  }), f.every((h) => h !== null);
}
const Eh = (n) => {
  var e;
  const t = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (e = t.clipboardData) === null || e === void 0 || e.setData("text/html", n), t;
};
function Nh(n) {
  const { editor: e, rules: t } = n;
  let r = null, i = !1, s = !1, o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  const a = ({ state: u, from: f, to: d, rule: h, pasteEvt: p }) => {
    const m = u.tr, y = si({
      state: u,
      transaction: m
    });
    if (!(!Th({
      editor: e,
      state: y,
      from: Math.max(f - 1, 0),
      to: d.b - 1,
      rule: h,
      pasteEvent: p,
      dropEvent: l
    }) || !m.steps.length))
      return l = typeof DragEvent < "u" ? new DragEvent("drop") : null, o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, m;
  };
  return t.map((u) => new ye({
    // we register a global drag handler to track the current drag source element
    view(f) {
      const d = (h) => {
        var p;
        r = !((p = f.dom.parentElement) === null || p === void 0) && p.contains(h.target) ? f.dom.parentElement : null;
      };
      return window.addEventListener("dragstart", d), {
        destroy() {
          window.removeEventListener("dragstart", d);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (f, d) => (s = r === f.dom.parentElement, l = d, !1),
        paste: (f, d) => {
          var h;
          const p = (h = d.clipboardData) === null || h === void 0 ? void 0 : h.getData("text/html");
          return o = d, i = !!(p != null && p.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (f, d, h) => {
      const p = f[0], m = p.getMeta("uiEvent") === "paste" && !i, y = p.getMeta("uiEvent") === "drop" && !s, b = p.getMeta("applyPasteRules"), w = !!b;
      if (!m && !y && !w)
        return;
      if (w) {
        const { from: E, text: x } = b, R = E + x.length, L = Eh(x);
        return a({
          rule: u,
          state: h,
          from: E,
          to: { b: R },
          pasteEvt: L
        });
      }
      const O = d.doc.content.findDiffStart(h.doc.content), g = d.doc.content.findDiffEnd(h.doc.content);
      if (!(!Ch(O) || !g || O === g.b))
        return a({
          rule: u,
          state: h,
          from: O,
          to: g,
          pasteEvt: o
        });
    }
  }));
}
function Dh(n) {
  const e = n.filter((t, r) => n.indexOf(t) !== r);
  return Array.from(new Set(e));
}
class cn {
  constructor(e, t) {
    this.splittableMarks = [], this.editor = t, this.extensions = cn.resolve(e), this.schema = xh(this.extensions, t), this.setupExtensions();
  }
  /**
   * Returns a flattened and sorted extension list while
   * also checking for duplicated extensions and warns the user.
   * @param extensions An array of Tiptap extensions
   * @returns An flattened and sorted array of Tiptap extensions
   */
  static resolve(e) {
    const t = cn.sort(cn.flatten(e)), r = Dh(t.map((i) => i.name));
    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((i) => `'${i}'`).join(", ")}]. This can lead to issues.`), t;
  }
  /**
   * Create a flattened array of extensions by traversing the `addExtensions` field.
   * @param extensions An array of Tiptap extensions
   * @returns A flattened array of Tiptap extensions
   */
  static flatten(e) {
    return e.map((t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage
      }, i = M(t, "addExtensions", r);
      return i ? [t, ...this.flatten(i())] : t;
    }).flat(10);
  }
  /**
   * Sort extensions by priority.
   * @param extensions An array of Tiptap extensions
   * @returns A sorted array of Tiptap extensions by priority
   */
  static sort(e) {
    return e.sort((r, i) => {
      const s = M(r, "priority") || 100, o = M(i, "priority") || 100;
      return s > o ? -1 : s < o ? 1 : 0;
    });
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((e, t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage,
        editor: this.editor,
        type: Ai(t.name, this.schema)
      }, i = M(t, "addCommands", r);
      return i ? {
        ...e,
        ...i()
      } : e;
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor: e } = this, t = cn.sort([...this.extensions].reverse()), r = [], i = [], s = t.map((o) => {
      const l = {
        name: o.name,
        options: o.options,
        storage: o.storage,
        editor: e,
        type: Ai(o.name, this.schema)
      }, a = [], c = M(o, "addKeyboardShortcuts", l);
      let u = {};
      if (o.type === "mark" && M(o, "exitable", l) && (u.ArrowRight = () => Wt.handleExit({ editor: e, mark: o })), c) {
        const m = Object.fromEntries(Object.entries(c()).map(([y, b]) => [y, () => b({ editor: e })]));
        u = { ...u, ...m };
      }
      const f = Wd(u);
      a.push(f);
      const d = M(o, "addInputRules", l);
      Yo(o, e.options.enableInputRules) && d && r.push(...d());
      const h = M(o, "addPasteRules", l);
      Yo(o, e.options.enablePasteRules) && h && i.push(...h());
      const p = M(o, "addProseMirrorPlugins", l);
      if (p) {
        const m = p();
        a.push(...m);
      }
      return a;
    }).flat();
    return [
      Sh({
        editor: e,
        rules: r
      }),
      ...Nh({
        editor: e,
        rules: i
      }),
      ...s
    ];
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return Xa(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor: e } = this, { nodeExtensions: t } = li(this.extensions);
    return Object.fromEntries(t.filter((r) => !!M(r, "addNodeView")).map((r) => {
      const i = this.attributes.filter((a) => a.type === r.name), s = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: e,
        type: Q(r.name, this.schema)
      }, o = M(r, "addNodeView", s);
      if (!o)
        return [];
      const l = (a, c, u, f) => {
        const d = rs(a, i);
        return o()({
          editor: e,
          node: a,
          getPos: u,
          decorations: f,
          HTMLAttributes: d,
          extension: r
        });
      };
      return [r.name, l];
    }));
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    this.extensions.forEach((e) => {
      var t;
      this.editor.extensionStorage[e.name] = e.storage;
      const r = {
        name: e.name,
        options: e.options,
        storage: e.storage,
        editor: this.editor,
        type: Ai(e.name, this.schema)
      };
      e.type === "mark" && (!((t = V(M(e, "keepOnSplit", r))) !== null && t !== void 0) || t) && this.splittableMarks.push(e.name);
      const i = M(e, "onBeforeCreate", r), s = M(e, "onCreate", r), o = M(e, "onUpdate", r), l = M(e, "onSelectionUpdate", r), a = M(e, "onTransaction", r), c = M(e, "onFocus", r), u = M(e, "onBlur", r), f = M(e, "onDestroy", r);
      i && this.editor.on("beforeCreate", i), s && this.editor.on("create", s), o && this.editor.on("update", o), l && this.editor.on("selectionUpdate", l), a && this.editor.on("transaction", a), c && this.editor.on("focus", c), u && this.editor.on("blur", u), f && this.editor.on("destroy", f);
    });
  }
}
function Ah(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function Cr(n) {
  return Ah(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function ai(n, e) {
  const t = { ...n };
  return Cr(n) && Cr(e) && Object.keys(e).forEach((r) => {
    Cr(e[r]) && Cr(n[r]) ? t[r] = ai(n[r], e[r]) : t[r] = e[r];
  }), t;
}
class ge {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = V(M(this, "addOptions", {
      name: this.name
    }))), this.storage = V(M(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new ge(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => ai(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new ge({ ...this.config, ...e });
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = V(M(t, "addOptions", {
      name: t.name
    })), t.storage = V(M(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function ec(n, e, t) {
  const { from: r, to: i } = e, { blockSeparator: s = `

`, textSerializers: o = {} } = t || {};
  let l = "";
  return n.nodesBetween(r, i, (a, c, u, f) => {
    var d;
    a.isBlock && c > r && (l += s);
    const h = o == null ? void 0 : o[a.type.name];
    if (h)
      return u && (l += h({
        node: a,
        pos: c,
        parent: u,
        index: f,
        range: e
      })), !1;
    a.isText && (l += (d = a == null ? void 0 : a.text) === null || d === void 0 ? void 0 : d.slice(Math.max(r, c) - c, i - c));
  }), l;
}
function tc(n) {
  return Object.fromEntries(Object.entries(n.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
const Ih = ge.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new ye({
        key: new De("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: n } = this, { state: e, schema: t } = n, { doc: r, selection: i } = e, { ranges: s } = i, o = Math.min(...s.map((u) => u.$from.pos)), l = Math.max(...s.map((u) => u.$to.pos)), a = tc(t);
            return ec(r, { from: o, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), Rh = () => ({ editor: n, view: e }) => (requestAnimationFrame(() => {
  var t;
  n.isDestroyed || (e.dom.blur(), (t = window == null ? void 0 : window.getSelection()) === null || t === void 0 || t.removeAllRanges());
}), !0), Ph = (n = !1) => ({ commands: e }) => e.setContent("", n), Bh = () => ({ state: n, tr: e, dispatch: t }) => {
  const { selection: r } = e, { ranges: i } = r;
  return t && i.forEach(({ $from: s, $to: o }) => {
    n.doc.nodesBetween(s.pos, o.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: u } = e, f = c.resolve(u.map(a)), d = c.resolve(u.map(a + l.nodeSize)), h = f.blockRange(d);
      if (!h)
        return;
      const p = wn(h);
      if (l.type.isTextblock) {
        const { defaultType: m } = f.parent.contentMatchAt(f.index());
        e.setNodeMarkup(h.start, m);
      }
      (p || p === 0) && e.lift(h, p);
    });
  }), !0;
}, Lh = (n) => (e) => n(e), zh = () => ({ state: n, dispatch: e }) => ih(n, e), Fh = (n, e) => ({ editor: t, tr: r }) => {
  const { state: i } = t, s = i.doc.slice(n.from, n.to);
  r.deleteRange(n.from, n.to);
  const o = r.mapping.map(e);
  return r.insert(o, s.content), r.setSelection(new B(r.doc.resolve(o - 1))), !0;
}, Vh = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, r = t.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const i = n.selection.$anchor;
  for (let s = i.depth; s > 0; s -= 1)
    if (i.node(s).type === r.type) {
      if (e) {
        const l = i.before(s), a = i.after(s);
        n.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, $h = (n) => ({ tr: e, state: t, dispatch: r }) => {
  const i = Q(n, t.schema), s = e.selection.$anchor;
  for (let o = s.depth; o > 0; o -= 1)
    if (s.node(o).type === i) {
      if (r) {
        const a = s.before(o), c = s.after(o);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, jh = (n) => ({ tr: e, dispatch: t }) => {
  const { from: r, to: i } = n;
  return t && e.delete(r, i), !0;
}, Hh = () => ({ state: n, dispatch: e }) => qd(n, e), _h = () => ({ commands: n }) => n.keyboardShortcut("Enter"), Wh = () => ({ state: n, dispatch: e }) => rh(n, e);
function Kr(n, e, t = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => t.strict ? e[i] === n[i] : Ts(e[i]) ? e[i].test(n[i]) : e[i] === n[i]) : !0;
}
function is(n, e, t = {}) {
  return n.find((r) => r.type === e && Kr(r.attrs, t));
}
function Kh(n, e, t = {}) {
  return !!is(n, e, t);
}
function Es(n, e, t = {}) {
  if (!n || !e)
    return;
  let r = n.parent.childAfter(n.parentOffset);
  if (n.parentOffset === r.offset && r.offset !== 0 && (r = n.parent.childBefore(n.parentOffset)), !r.node)
    return;
  const i = is([...r.node.marks], e, t);
  if (!i)
    return;
  let s = r.index, o = n.start() + r.offset, l = s + 1, a = o + r.node.nodeSize;
  for (is([...r.node.marks], e, t); s > 0 && i.isInSet(n.parent.child(s - 1).marks); )
    s -= 1, o -= n.parent.child(s).nodeSize;
  for (; l < n.parent.childCount && Kh([...n.parent.child(l).marks], e, t); )
    a += n.parent.child(l).nodeSize, l += 1;
  return {
    from: o,
    to: a
  };
}
function kt(n, e) {
  if (typeof n == "string") {
    if (!e.marks[n])
      throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return e.marks[n];
  }
  return n;
}
const qh = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const s = kt(n, r.schema), { doc: o, selection: l } = t, { $from: a, from: c, to: u } = l;
  if (i) {
    const f = Es(a, s, e);
    if (f && f.from <= c && f.to >= u) {
      const d = B.create(o, f.from, f.to);
      t.setSelection(d);
    }
  }
  return !0;
}, Jh = (n) => (e) => {
  const t = typeof n == "function" ? n(e) : n;
  for (let r = 0; r < t.length; r += 1)
    if (t[r](e))
      return !0;
  return !1;
};
function Ns(n) {
  return n instanceof B;
}
function Qe(n = 0, e = 0, t = 0) {
  return Math.min(Math.max(n, e), t);
}
function nc(n, e = null) {
  if (!e)
    return null;
  const t = F.atStart(n), r = F.atEnd(n);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return r;
  const i = t.from, s = r.to;
  return e === "all" ? B.create(n, Qe(0, i, s), Qe(n.content.size, i, s)) : B.create(n, Qe(e, i, s), Qe(e, i, s));
}
function Ds() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const Uh = (n = null, e = {}) => ({ editor: t, view: r, tr: i, dispatch: s }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const o = () => {
    Ds() && r.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (r.focus(), e != null && e.scrollIntoView && t.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && n === null || n === !1)
    return !0;
  if (s && n === null && !Ns(t.state.selection))
    return o(), !0;
  const l = nc(i.doc, n) || t.state.selection, a = t.state.selection.eq(l);
  return s && (a || i.setSelection(l), a && i.storedMarks && i.setStoredMarks(i.storedMarks), o()), !0;
}, Gh = (n, e) => (t) => n.every((r, i) => e(r, { ...t, index: i })), Yh = (n, e) => ({ tr: t, commands: r }) => r.insertContentAt({ from: t.selection.from, to: t.selection.to }, n, e), rc = (n) => {
  const e = n.childNodes;
  for (let t = e.length - 1; t >= 0; t -= 1) {
    const r = e[t];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? n.removeChild(r) : r.nodeType === 1 && rc(r);
  }
  return n;
};
function Or(n) {
  const e = `<body>${n}</body>`, t = new window.DOMParser().parseFromString(e, "text/html").body;
  return rc(t);
}
function qr(n, e, t) {
  t = {
    slice: !0,
    parseOptions: {},
    ...t
  };
  const r = typeof n == "object" && n !== null, i = typeof n == "string";
  if (r)
    try {
      if (Array.isArray(n) && n.length > 0)
        return k.fromArray(n.map((l) => e.nodeFromJSON(l)));
      const o = e.nodeFromJSON(n);
      return t.errorOnInvalidContent && o.check(), o;
    } catch (s) {
      if (t.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: s });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", s), qr("", e, t);
    }
  if (i) {
    if (t.errorOnInvalidContent) {
      let o = !1, l = "";
      const a = new Gl({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (c) => (o = !0, l = typeof c == "string" ? c : c.outerHTML, null)
              }
            ]
          }
        })
      });
      if (t.slice ? dt.fromSchema(a).parseSlice(Or(n), t.parseOptions) : dt.fromSchema(a).parse(Or(n), t.parseOptions), t.errorOnInvalidContent && o)
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${l}`) });
    }
    const s = dt.fromSchema(e);
    return t.slice ? s.parseSlice(Or(n), t.parseOptions).content : s.parse(Or(n), t.parseOptions);
  }
  return qr("", e, t);
}
function Xh(n, e, t) {
  const r = n.steps.length - 1;
  if (r < e)
    return;
  const i = n.steps[r];
  if (!(i instanceof Y || i instanceof X))
    return;
  const s = n.mapping.maps[r];
  let o = 0;
  s.forEach((l, a, c, u) => {
    o === 0 && (o = u);
  }), n.setSelection(F.near(n.doc.resolve(o), t));
}
const Zh = (n) => !("type" in n), Qh = (n, e, t) => ({ tr: r, dispatch: i, editor: s }) => {
  var o;
  if (i) {
    t = {
      parseOptions: {},
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...t
    };
    let l;
    try {
      l = qr(e, s.schema, {
        parseOptions: {
          preserveWhitespace: "full",
          ...t.parseOptions
        },
        errorOnInvalidContent: (o = t.errorOnInvalidContent) !== null && o !== void 0 ? o : s.options.enableContentCheck
      });
    } catch (p) {
      return s.emit("contentError", {
        editor: s,
        error: p,
        disableCollaboration: () => {
          console.error("[tiptap error]: Unable to disable collaboration at this point in time");
        }
      }), !1;
    }
    let { from: a, to: c } = typeof n == "number" ? { from: n, to: n } : { from: n.from, to: n.to }, u = !0, f = !0;
    if ((Zh(l) ? l : [l]).forEach((p) => {
      p.check(), u = u ? p.isText && p.marks.length === 0 : !1, f = f ? p.isBlock : !1;
    }), a === c && f) {
      const { parent: p } = r.doc.resolve(a);
      p.isTextblock && !p.type.spec.code && !p.childCount && (a -= 1, c += 1);
    }
    let h;
    u ? (Array.isArray(e) ? h = e.map((p) => p.text || "").join("") : typeof e == "object" && e && e.text ? h = e.text : h = e, r.insertText(h, a, c)) : (h = l, r.replaceWith(a, c, h)), t.updateSelection && Xh(r, r.steps.length - 1, -1), t.applyInputRules && r.setMeta("applyInputRules", { from: a, text: h }), t.applyPasteRules && r.setMeta("applyPasteRules", { from: a, text: h });
  }
  return !0;
}, ep = () => ({ state: n, dispatch: e }) => Qd(n, e), tp = () => ({ state: n, dispatch: e }) => eh(n, e), np = () => ({ state: n, dispatch: e }) => Jd(n, e), rp = () => ({ state: n, dispatch: e }) => Xd(n, e), ip = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Qr(n.doc, n.selection.$from.pos, -1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, sp = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Qr(n.doc, n.selection.$from.pos, 1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, op = () => ({ state: n, dispatch: e }) => Ud(n, e), lp = () => ({ state: n, dispatch: e }) => Gd(n, e);
function ic() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function ap(n) {
  const e = n.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let r, i, s, o;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      Ds() || ic() ? o = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), o && (t = `Meta-${t}`), s && (t = `Shift-${t}`), t;
}
const cp = (n) => ({ editor: e, view: t, tr: r, dispatch: i }) => {
  const s = ap(n).split(/-(?!$)/), o = s.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: o === "Space" ? " " : o,
    altKey: s.includes("Alt"),
    ctrlKey: s.includes("Ctrl"),
    metaKey: s.includes("Meta"),
    shiftKey: s.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (c) => c(t, l));
  });
  return a == null || a.steps.forEach((c) => {
    const u = c.map(r.mapping);
    u && i && r.maybeStep(u);
  }), !0;
};
function Un(n, e, t = {}) {
  const { from: r, to: i, empty: s } = n.selection, o = e ? Q(e, n.schema) : null, l = [];
  n.doc.nodesBetween(r, i, (f, d) => {
    if (f.isText)
      return;
    const h = Math.max(r, d), p = Math.min(i, d + f.nodeSize);
    l.push({
      node: f,
      from: h,
      to: p
    });
  });
  const a = i - r, c = l.filter((f) => o ? o.name === f.node.type.name : !0).filter((f) => Kr(f.node.attrs, t, { strict: !1 }));
  return s ? !!c.length : c.reduce((f, d) => f + d.to - d.from, 0) >= a;
}
const up = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = Q(n, t.schema);
  return Un(t, i, e) ? th(t, r) : !1;
}, fp = () => ({ state: n, dispatch: e }) => sh(n, e), dp = (n) => ({ state: e, dispatch: t }) => {
  const r = Q(n, e.schema);
  return hh(r)(e, t);
}, hp = () => ({ state: n, dispatch: e }) => nh(n, e);
function ci(n, e) {
  return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null;
}
function Xo(n, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(n).reduce((r, i) => (t.includes(i) || (r[i] = n[i]), r), {});
}
const pp = (n, e) => ({ tr: t, state: r, dispatch: i }) => {
  let s = null, o = null;
  const l = ci(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (s = Q(n, r.schema)), l === "mark" && (o = kt(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    r.doc.nodesBetween(a.$from.pos, a.$to.pos, (c, u) => {
      s && s === c.type && t.setNodeMarkup(u, void 0, Xo(c.attrs, e)), o && c.marks.length && c.marks.forEach((f) => {
        o === f.type && t.addMark(u, u + c.nodeSize, o.create(Xo(f.attrs, e)));
      });
    });
  }), !0) : !1;
}, mp = () => ({ tr: n, dispatch: e }) => (e && n.scrollIntoView(), !0), gp = () => ({ tr: n, commands: e }) => e.setTextSelection({
  from: 0,
  to: n.doc.content.size
}), yp = () => ({ state: n, dispatch: e }) => Yd(n, e), bp = () => ({ state: n, dispatch: e }) => Zd(n, e), vp = () => ({ state: n, dispatch: e }) => oh(n, e), xp = () => ({ state: n, dispatch: e }) => ch(n, e), kp = () => ({ state: n, dispatch: e }) => ah(n, e);
function ss(n, e, t = {}, r = {}) {
  return qr(n, e, {
    slice: !1,
    parseOptions: t,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
const wp = (n, e = !1, t = {}, r = {}) => ({ editor: i, tr: s, dispatch: o, commands: l }) => {
  var a, c;
  const { doc: u } = s;
  if (t.preserveWhitespace !== "full") {
    const f = ss(n, i.schema, t, {
      errorOnInvalidContent: (a = r.errorOnInvalidContent) !== null && a !== void 0 ? a : i.options.enableContentCheck
    });
    return o && s.replaceWith(0, u.content.size, f).setMeta("preventUpdate", !e), !0;
  }
  return o && s.setMeta("preventUpdate", !e), l.insertContentAt({ from: 0, to: u.content.size }, n, {
    parseOptions: t,
    errorOnInvalidContent: (c = r.errorOnInvalidContent) !== null && c !== void 0 ? c : i.options.enableContentCheck
  });
};
function As(n, e) {
  const t = kt(e, n.schema), { from: r, to: i, empty: s } = n.selection, o = [];
  s ? (n.storedMarks && o.push(...n.storedMarks), o.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, i, (a) => {
    o.push(...a.marks);
  });
  const l = o.find((a) => a.type.name === t.name);
  return l ? { ...l.attrs } : {};
}
function Sp(n) {
  for (let e = 0; e < n.edgeCount; e += 1) {
    const { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function Cp(n, e) {
  for (let t = n.depth; t > 0; t -= 1) {
    const r = n.node(t);
    if (e(r))
      return {
        pos: t > 0 ? n.before(t) : 0,
        start: n.start(t),
        depth: t,
        node: r
      };
  }
}
function Is(n) {
  return (e) => Cp(e.$from, n);
}
function Op(n, e) {
  const t = Jt.fromSchema(e).serializeFragment(n), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(t), i.innerHTML;
}
function Mp(n, e) {
  const t = {
    from: 0,
    to: n.content.size
  };
  return ec(n, t, e);
}
function Tp(n, e) {
  const t = Q(e, n.schema), { from: r, to: i } = n.selection, s = [];
  n.doc.nodesBetween(r, i, (l) => {
    s.push(l);
  });
  const o = s.reverse().find((l) => l.type.name === t.name);
  return o ? { ...o.attrs } : {};
}
function Ep(n, e) {
  const t = ci(typeof e == "string" ? e : e.name, n.schema);
  return t === "node" ? Tp(n, e) : t === "mark" ? As(n, e) : {};
}
function sc(n, e, t) {
  const r = [];
  return n === e ? t.resolve(n).marks().forEach((i) => {
    const s = t.resolve(n), o = Es(s, i.type);
    o && r.push({
      mark: i,
      ...o
    });
  }) : t.nodesBetween(n, e, (i, s) => {
    !i || (i == null ? void 0 : i.nodeSize) === void 0 || r.push(...i.marks.map((o) => ({
      from: s,
      to: s + i.nodeSize,
      mark: o
    })));
  }), r;
}
function Dr(n, e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => {
    const i = n.find((s) => s.type === e && s.name === r);
    return i ? i.attribute.keepOnSplit : !1;
  }));
}
function ls(n, e, t = {}) {
  const { empty: r, ranges: i } = n.selection, s = e ? kt(e, n.schema) : null;
  if (r)
    return !!(n.storedMarks || n.selection.$from.marks()).filter((f) => s ? s.name === f.type.name : !0).find((f) => Kr(f.attrs, t, { strict: !1 }));
  let o = 0;
  const l = [];
  if (i.forEach(({ $from: f, $to: d }) => {
    const h = f.pos, p = d.pos;
    n.doc.nodesBetween(h, p, (m, y) => {
      if (!m.isText && !m.marks.length)
        return;
      const b = Math.max(h, y), w = Math.min(p, y + m.nodeSize), O = w - b;
      o += O, l.push(...m.marks.map((g) => ({
        mark: g,
        from: b,
        to: w
      })));
    });
  }), o === 0)
    return !1;
  const a = l.filter((f) => s ? s.name === f.mark.type.name : !0).filter((f) => Kr(f.mark.attrs, t, { strict: !1 })).reduce((f, d) => f + d.to - d.from, 0), c = l.filter((f) => s ? f.mark.type !== s && f.mark.type.excludes(s) : !0).reduce((f, d) => f + d.to - d.from, 0);
  return (a > 0 ? a + c : a) >= o;
}
function Np(n, e, t = {}) {
  if (!e)
    return Un(n, null, t) || ls(n, null, t);
  const r = ci(e, n.schema);
  return r === "node" ? Un(n, e, t) : r === "mark" ? ls(n, e, t) : !1;
}
function Zo(n, e) {
  const { nodeExtensions: t } = li(e), r = t.find((o) => o.name === n);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, s = V(M(r, "group", i));
  return typeof s != "string" ? !1 : s.split(" ").includes("list");
}
function Rs(n, { checkChildren: e = !0, ignoreWhitespace: t = !1 } = {}) {
  var r;
  if (t) {
    if (n.type.name === "hardBreak")
      return !0;
    if (n.isText)
      return /^\s*$/m.test((r = n.text) !== null && r !== void 0 ? r : "");
  }
  if (n.isText)
    return !n.text;
  if (n.isAtom || n.isLeaf)
    return !1;
  if (n.content.childCount === 0)
    return !0;
  if (e) {
    let i = !0;
    return n.content.forEach((s) => {
      i !== !1 && (Rs(s, { ignoreWhitespace: t, checkChildren: e }) || (i = !1));
    }), i;
  }
  return !1;
}
function Dp(n) {
  return n instanceof A;
}
function oc(n, e, t) {
  const i = n.state.doc.content.size, s = Qe(e, 0, i), o = Qe(t, 0, i), l = n.coordsAtPos(s), a = n.coordsAtPos(o, -1), c = Math.min(l.top, a.top), u = Math.max(l.bottom, a.bottom), f = Math.min(l.left, a.left), d = Math.max(l.right, a.right), h = d - f, p = u - c, b = {
    top: c,
    bottom: u,
    left: f,
    right: d,
    width: h,
    height: p,
    x: f,
    y: c
  };
  return {
    ...b,
    toJSON: () => b
  };
}
function Ap(n, e, t) {
  var r;
  const { selection: i } = e;
  let s = null;
  if (Ns(i) && (s = i.$cursor), s) {
    const l = (r = n.storedMarks) !== null && r !== void 0 ? r : s.marks();
    return !!t.isInSet(l) || !l.some((a) => a.type.excludes(t));
  }
  const { ranges: o } = i;
  return o.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(t) : !1;
    return n.doc.nodesBetween(l.pos, a.pos, (u, f, d) => {
      if (c)
        return !1;
      if (u.isInline) {
        const h = !d || d.type.allowsMarkType(t), p = !!t.isInSet(u.marks) || !u.marks.some((m) => m.type.excludes(t));
        c = h && p;
      }
      return !c;
    }), c;
  });
}
const Ip = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const { selection: s } = t, { empty: o, ranges: l } = s, a = kt(n, r.schema);
  if (i)
    if (o) {
      const c = As(r, a);
      t.addStoredMark(a.create({
        ...c,
        ...e
      }));
    } else
      l.forEach((c) => {
        const u = c.$from.pos, f = c.$to.pos;
        r.doc.nodesBetween(u, f, (d, h) => {
          const p = Math.max(h, u), m = Math.min(h + d.nodeSize, f);
          d.marks.find((b) => b.type === a) ? d.marks.forEach((b) => {
            a === b.type && t.addMark(p, m, a.create({
              ...b.attrs,
              ...e
            }));
          }) : t.addMark(p, m, a.create(e));
        });
      });
  return Ap(r, t, a);
}, Rp = (n, e) => ({ tr: t }) => (t.setMeta(n, e), !0), Pp = (n, e = {}) => ({ state: t, dispatch: r, chain: i }) => {
  const s = Q(n, t.schema);
  return s.isTextblock ? i().command(({ commands: o }) => Jo(s, e)(t) ? !0 : o.clearNodes()).command(({ state: o }) => Jo(s, e)(o, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, Bp = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, i = Qe(n, 0, r.content.size), s = A.create(r, i);
    e.setSelection(s);
  }
  return !0;
}, Lp = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, { from: i, to: s } = typeof n == "number" ? { from: n, to: n } : n, o = B.atStart(r).from, l = B.atEnd(r).to, a = Qe(i, o, l), c = Qe(s, o, l), u = B.create(r, a, c);
    e.setSelection(u);
  }
  return !0;
}, zp = (n) => ({ state: e, dispatch: t }) => {
  const r = Q(n, e.schema);
  return gh(r)(e, t);
};
function Qo(n, e) {
  const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
  if (t) {
    const r = t.filter((i) => e == null ? void 0 : e.includes(i.type.name));
    n.tr.ensureMarks(r);
  }
}
const Fp = ({ keepMarks: n = !0 } = {}) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  const { selection: s, doc: o } = e, { $from: l, $to: a } = s, c = i.extensionManager.attributes, u = Dr(c, l.node().type.name, l.node().attrs);
  if (s instanceof A && s.node.isBlock)
    return !l.parentOffset || !fn(o, l.pos) ? !1 : (r && (n && Qo(t, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const f = a.parentOffset === a.parent.content.size, d = l.depth === 0 ? void 0 : Sp(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let h = f && d ? [
    {
      type: d,
      attrs: u
    }
  ] : void 0, p = fn(e.doc, e.mapping.map(l.pos), 1, h);
  if (!h && !p && fn(e.doc, e.mapping.map(l.pos), 1, d ? [{ type: d }] : void 0) && (p = !0, h = d ? [
    {
      type: d,
      attrs: u
    }
  ] : void 0), r) {
    if (p && (s instanceof B && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, h), d && !f && !l.parentOffset && l.parent.type !== d)) {
      const m = e.mapping.map(l.before()), y = e.doc.resolve(m);
      l.node(-1).canReplaceWith(y.index(), y.index() + 1, d) && e.setNodeMarkup(e.mapping.map(l.before()), d);
    }
    n && Qo(t, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return p;
}, Vp = (n, e = {}) => ({ tr: t, state: r, dispatch: i, editor: s }) => {
  var o;
  const l = Q(n, r.schema), { $from: a, $to: c } = r.selection, u = r.selection.node;
  if (u && u.isBlock || a.depth < 2 || !a.sameParent(c))
    return !1;
  const f = a.node(-1);
  if (f.type !== l)
    return !1;
  const d = s.extensionManager.attributes;
  if (a.parent.content.size === 0 && a.node(-1).childCount === a.indexAfter(-1)) {
    if (a.depth === 2 || a.node(-3).type !== l || a.index(-2) !== a.node(-2).childCount - 1)
      return !1;
    if (i) {
      let b = k.empty;
      const w = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let L = a.depth - w; L >= a.depth - 3; L -= 1)
        b = k.from(a.node(L).copy(b));
      const O = a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3, g = {
        ...Dr(d, a.node().type.name, a.node().attrs),
        ...e
      }, E = ((o = l.contentMatch.defaultType) === null || o === void 0 ? void 0 : o.createAndFill(g)) || void 0;
      b = b.append(k.from(l.createAndFill(null, E) || void 0));
      const x = a.before(a.depth - (w - 1));
      t.replace(x, a.after(-O), new C(b, 4 - w, 0));
      let R = -1;
      t.doc.nodesBetween(x, t.doc.content.size, (L, N) => {
        if (R > -1)
          return !1;
        L.isTextblock && L.content.size === 0 && (R = N + 1);
      }), R > -1 && t.setSelection(B.near(t.doc.resolve(R))), t.scrollIntoView();
    }
    return !0;
  }
  const h = c.pos === a.end() ? f.contentMatchAt(0).defaultType : null, p = {
    ...Dr(d, f.type.name, f.attrs),
    ...e
  }, m = {
    ...Dr(d, a.node().type.name, a.node().attrs),
    ...e
  };
  t.delete(a.pos, c.pos);
  const y = h ? [
    { type: l, attrs: p },
    { type: h, attrs: m }
  ] : [{ type: l, attrs: p }];
  if (!fn(t.doc, a.pos, 2))
    return !1;
  if (i) {
    const { selection: b, storedMarks: w } = r, { splittableMarks: O } = s.extensionManager, g = w || b.$to.parentOffset && b.$from.marks();
    if (t.split(a.pos, 2, y).scrollIntoView(), !g || !i)
      return !0;
    const E = g.filter((x) => O.includes(x.type.name));
    t.ensureMarks(E);
  }
  return !0;
}, Ii = (n, e) => {
  const t = Is((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && bt(n.doc, t.pos) && n.join(t.pos), !0;
}, Ri = (n, e) => {
  const t = Is((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(t.start).after(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && bt(n.doc, r) && n.join(r), !0;
}, $p = (n, e, t, r = {}) => ({ editor: i, tr: s, state: o, dispatch: l, chain: a, commands: c, can: u }) => {
  const { extensions: f, splittableMarks: d } = i.extensionManager, h = Q(n, o.schema), p = Q(e, o.schema), { selection: m, storedMarks: y } = o, { $from: b, $to: w } = m, O = b.blockRange(w), g = y || m.$to.parentOffset && m.$from.marks();
  if (!O)
    return !1;
  const E = Is((x) => Zo(x.type.name, f))(m);
  if (O.depth >= 1 && E && O.depth - E.depth <= 1) {
    if (E.node.type === h)
      return c.liftListItem(p);
    if (Zo(E.node.type.name, f) && h.validContent(E.node.content) && l)
      return a().command(() => (s.setNodeMarkup(E.pos, h), !0)).command(() => Ii(s, h)).command(() => Ri(s, h)).run();
  }
  return !t || !g || !l ? a().command(() => u().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => Ii(s, h)).command(() => Ri(s, h)).run() : a().command(() => {
    const x = u().wrapInList(h, r), R = g.filter((L) => d.includes(L.type.name));
    return s.ensureMarks(R), x ? !0 : c.clearNodes();
  }).wrapInList(h, r).command(() => Ii(s, h)).command(() => Ri(s, h)).run();
}, jp = (n, e = {}, t = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: s = !1 } = t, o = kt(n, r.schema);
  return ls(r, o, e) ? i.unsetMark(o, { extendEmptyMarkRange: s }) : i.setMark(o, e);
}, Hp = (n, e, t = {}) => ({ state: r, commands: i }) => {
  const s = Q(n, r.schema), o = Q(e, r.schema);
  return Un(r, s, t) ? i.setNode(o) : i.setNode(s, t);
}, _p = (n, e = {}) => ({ state: t, commands: r }) => {
  const i = Q(n, t.schema);
  return Un(t, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, Wp = () => ({ state: n, dispatch: e }) => {
  const t = n.plugins;
  for (let r = 0; r < t.length; r += 1) {
    const i = t[r];
    let s;
    if (i.spec.isInputRules && (s = i.getState(n))) {
      if (e) {
        const o = n.tr, l = s.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          o.step(l.steps[a].invert(l.docs[a]));
        if (s.text) {
          const a = o.doc.resolve(s.from).marks();
          o.replaceWith(s.from, s.to, n.schema.text(s.text, a));
        } else
          o.delete(s.from, s.to);
      }
      return !0;
    }
  }
  return !1;
}, Kp = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, { empty: r, ranges: i } = t;
  return r || e && i.forEach((s) => {
    n.removeMark(s.$from.pos, s.$to.pos);
  }), !0;
}, qp = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  var s;
  const { extendEmptyMarkRange: o = !1 } = e, { selection: l } = t, a = kt(n, r.schema), { $from: c, empty: u, ranges: f } = l;
  if (!i)
    return !0;
  if (u && o) {
    let { from: d, to: h } = l;
    const p = (s = c.marks().find((y) => y.type === a)) === null || s === void 0 ? void 0 : s.attrs, m = Es(c, a, p);
    m && (d = m.from, h = m.to), t.removeMark(d, h, a);
  } else
    f.forEach((d) => {
      t.removeMark(d.$from.pos, d.$to.pos, a);
    });
  return t.removeStoredMark(a), !0;
}, Jp = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  let s = null, o = null;
  const l = ci(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (s = Q(n, r.schema)), l === "mark" && (o = kt(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    const c = a.$from.pos, u = a.$to.pos;
    r.doc.nodesBetween(c, u, (f, d) => {
      s && s === f.type && t.setNodeMarkup(d, void 0, {
        ...f.attrs,
        ...e
      }), o && f.marks.length && f.marks.forEach((h) => {
        if (o === h.type) {
          const p = Math.max(d, c), m = Math.min(d + f.nodeSize, u);
          t.addMark(p, m, o.create({
            ...h.attrs,
            ...e
          }));
        }
      });
    });
  }), !0) : !1;
}, Up = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = Q(n, t.schema);
  return uh(i, e)(t, r);
}, Gp = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = Q(n, t.schema);
  return fh(i, e)(t, r);
};
var Yp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: Rh,
  clearContent: Ph,
  clearNodes: Bh,
  command: Lh,
  createParagraphNear: zh,
  cut: Fh,
  deleteCurrentNode: Vh,
  deleteNode: $h,
  deleteRange: jh,
  deleteSelection: Hh,
  enter: _h,
  exitCode: Wh,
  extendMarkRange: qh,
  first: Jh,
  focus: Uh,
  forEach: Gh,
  insertContent: Yh,
  insertContentAt: Qh,
  joinBackward: np,
  joinDown: tp,
  joinForward: rp,
  joinItemBackward: ip,
  joinItemForward: sp,
  joinTextblockBackward: op,
  joinTextblockForward: lp,
  joinUp: ep,
  keyboardShortcut: cp,
  lift: up,
  liftEmptyBlock: fp,
  liftListItem: dp,
  newlineInCode: hp,
  resetAttributes: pp,
  scrollIntoView: mp,
  selectAll: gp,
  selectNodeBackward: yp,
  selectNodeForward: bp,
  selectParentNode: vp,
  selectTextblockEnd: xp,
  selectTextblockStart: kp,
  setContent: wp,
  setMark: Ip,
  setMeta: Rp,
  setNode: Pp,
  setNodeSelection: Bp,
  setTextSelection: Lp,
  sinkListItem: zp,
  splitBlock: Fp,
  splitListItem: Vp,
  toggleList: $p,
  toggleMark: jp,
  toggleNode: Hp,
  toggleWrap: _p,
  undoInputRule: Wp,
  unsetAllMarks: Kp,
  unsetMark: qp,
  updateAttributes: Jp,
  wrapIn: Up,
  wrapInList: Gp
});
const Xp = ge.create({
  name: "commands",
  addCommands() {
    return {
      ...Yp
    };
  }
}), Zp = ge.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new ye({
        key: new De("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), Qp = ge.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      new ye({
        key: new De("focusEvents"),
        props: {
          handleDOMEvents: {
            focus: (e, t) => {
              n.isFocused = !0;
              const r = n.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, t) => {
              n.isFocused = !1;
              const r = n.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), em = ge.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const n = () => this.editor.commands.first(({ commands: o }) => [
      () => o.undoInputRule(),
      // maybe convert first text block node to default node
      () => o.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: u, $anchor: f } = a, { pos: d, parent: h } = f, p = f.parent.isTextblock && d > 0 ? l.doc.resolve(d - 1) : f, m = p.parent.type.spec.isolating, y = f.pos - f.parentOffset, b = m && p.parent.childCount === 1 ? y === f.pos : F.atStart(c).from === d;
        return !u || !h.type.isTextblock || h.textContent.length || !b || b && f.parent.type.name === "paragraph" ? !1 : o.clearNodes();
      }),
      () => o.deleteSelection(),
      () => o.joinBackward(),
      () => o.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: o }) => [
      () => o.deleteSelection(),
      () => o.deleteCurrentNode(),
      () => o.joinForward(),
      () => o.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: o }) => [
        () => o.newlineInCode(),
        () => o.createParagraphNear(),
        () => o.liftEmptyBlock(),
        () => o.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: n,
      "Mod-Backspace": n,
      "Shift-Backspace": n,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...r
    }, s = {
      ...r,
      "Ctrl-h": n,
      "Alt-Backspace": n,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return Ds() || ic() ? s : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new ye({
        key: new De("clearDocument"),
        appendTransaction: (n, e, t) => {
          if (!(n.some((p) => p.docChanged) && !e.doc.eq(t.doc)))
            return;
          const { empty: i, from: s, to: o } = e.selection, l = F.atStart(e.doc).from, a = F.atEnd(e.doc).to;
          if (i || !(s === l && o === a) || !(t.doc.textBetween(0, t.doc.content.size, " ", " ").length === 0))
            return;
          const f = t.tr, d = si({
            state: t,
            transaction: f
          }), { commands: h } = new oi({
            editor: this.editor,
            state: d
          });
          if (h.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
}), tm = ge.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new ye({
        key: new De("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
class At {
  get name() {
    return this.node.type.name;
  }
  constructor(e, t, r = !1, i = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = e, this.editor = t, this.currentNode = i;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var e;
    return (e = this.actualDepth) !== null && e !== void 0 ? e : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(e) {
    let t = this.from, r = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      t = this.from + 1, r = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: t, to: r }, e);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0)
      return null;
    const e = this.resolvedPos.start(this.resolvedPos.depth - 1), t = this.resolvedPos.doc.resolve(e);
    return new At(t, this.editor);
  }
  get before() {
    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new At(e, this.editor);
  }
  get after() {
    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new At(e, this.editor);
  }
  get children() {
    const e = [];
    return this.node.content.forEach((t, r) => {
      const i = t.isBlock && !t.isTextblock, s = this.pos + r + 1, o = this.resolvedPos.doc.resolve(s);
      if (!i && o.depth <= this.depth)
        return;
      const l = new At(o, this.editor, i, i ? t : null);
      i && (l.actualDepth = this.depth + 1), e.push(new At(o, this.editor, i, i ? t : null));
    }), e;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const e = this.children;
    return e[e.length - 1] || null;
  }
  closest(e, t = {}) {
    let r = null, i = this.parent;
    for (; i && !r; ) {
      if (i.node.type.name === e)
        if (Object.keys(t).length > 0) {
          const s = i.node.attrs, o = Object.keys(t);
          for (let l = 0; l < o.length; l += 1) {
            const a = o[l];
            if (s[a] !== t[a])
              break;
          }
        } else
          r = i;
      i = i.parent;
    }
    return r;
  }
  querySelector(e, t = {}) {
    return this.querySelectorAll(e, t, !0)[0] || null;
  }
  querySelectorAll(e, t = {}, r = !1) {
    let i = [];
    if (!this.children || this.children.length === 0)
      return i;
    const s = Object.keys(t);
    return this.children.forEach((o) => {
      r && i.length > 0 || (o.node.type.name === e && s.every((a) => t[a] === o.node.attrs[a]) && i.push(o), !(r && i.length > 0) && (i = i.concat(o.querySelectorAll(e, t, r))));
    }), i;
  }
  setAttribute(e) {
    const t = this.editor.state.selection;
    this.editor.chain().setTextSelection(this.from).updateAttributes(this.node.type.name, e).setTextSelection(t.from).run();
  }
}
const nm = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function rm(n, e, t) {
  const r = document.querySelector("style[data-tiptap-style]");
  if (r !== null)
    return r;
  const i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.setAttribute("data-tiptap-style", ""), i.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(i), i;
}
let im = class extends yh {
  constructor(e = {}) {
    super(), this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      enableContentCheck: !1,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({ error: t }) => {
        throw t;
      }
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("contentError", this.options.onContentError), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
    }, 0);
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && document && (this.css = rm(nm, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(e, t = !0) {
    this.setOptions({ editable: e }), t && this.emit("update", { editor: this, transaction: this.state.tr });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.view.state;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   */
  registerPlugin(e, t) {
    const r = Za(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], i = this.state.reconfigure({ plugins: r });
    this.view.updateState(i);
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKey The plugins name
   */
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const t = typeof e == "string" ? `${e}$` : e.key, r = this.state.reconfigure({
      // @ts-ignore
      plugins: this.state.plugins.filter((i) => !i.key.startsWith(t))
    });
    this.view.updateState(r);
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var e, t;
    const i = [...this.options.enableCoreExtensions ? [
      Zp,
      Ih.configure({
        blockSeparator: (t = (e = this.options.coreExtensionOptions) === null || e === void 0 ? void 0 : e.clipboardTextSerializer) === null || t === void 0 ? void 0 : t.blockSeparator
      }),
      Xp,
      Qp,
      em,
      tm
    ] : [], ...this.options.extensions].filter((s) => ["extension", "node", "mark"].includes(s == null ? void 0 : s.type));
    this.extensionManager = new cn(i, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new oi({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView() {
    let e;
    try {
      e = ss(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
    } catch (s) {
      if (!(s instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(s.message))
        throw s;
      this.emit("contentError", {
        editor: this,
        error: s,
        disableCollaboration: () => {
          this.options.extensions = this.options.extensions.filter((o) => o.name !== "collaboration"), this.createExtensionManager();
        }
      }), e = ss(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
    }
    const t = nc(e, this.options.autofocus);
    this.view = new Bd(this.options.element, {
      ...this.options.editorProps,
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: an.create({
        doc: e,
        selection: t || void 0
      })
    });
    const r = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(r), this.createNodeViews(), this.prependClass();
    const i = this.view.dom;
    i.editor = this;
  }
  /**
   * Creates all node views.
   */
  createNodeViews() {
    this.view.isDestroyed || this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const t = this.capturedTransaction;
    return this.capturedTransaction = null, t;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((o) => {
        var l;
        return (l = this.capturedTransaction) === null || l === void 0 ? void 0 : l.step(o);
      });
      return;
    }
    const t = this.state.apply(e), r = !this.state.selection.eq(t.selection);
    this.emit("beforeTransaction", {
      editor: this,
      transaction: e,
      nextState: t
    }), this.view.updateState(t), this.emit("transaction", {
      editor: this,
      transaction: e
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const i = e.getMeta("focus"), s = e.getMeta("blur");
    i && this.emit("focus", {
      editor: this,
      event: i.event,
      transaction: e
    }), s && this.emit("blur", {
      editor: this,
      event: s.event,
      transaction: e
    }), !(!e.docChanged || e.getMeta("preventUpdate")) && this.emit("update", {
      editor: this,
      transaction: e
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(e) {
    return Ep(this.state, e);
  }
  isActive(e, t) {
    const r = typeof e == "string" ? e : null, i = typeof e == "string" ? t : e;
    return Np(this.state, r, i);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return Op(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: t = `

`, textSerializers: r = {} } = e || {};
    return Mp(this.state.doc, {
      blockSeparator: t,
      textSerializers: {
        ...tc(this.schema),
        ...r
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return Rs(this.state.doc);
  }
  /**
   * Get the number of characters for the current document.
   *
   * @deprecated
   */
  getCharacterCount() {
    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    this.emit("destroy"), this.view && this.view.destroy(), this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var e;
    return !(!((e = this.view) === null || e === void 0) && e.docView);
  }
  $node(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelector(e, t)) || null;
  }
  $nodes(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelectorAll(e, t)) || null;
  }
  $pos(e) {
    const t = this.state.doc.resolve(e);
    return new At(t, this);
  }
  get $doc() {
    return this.$pos(0);
  }
};
function Jr(n) {
  return new Qa({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = V(n.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: s } = e, o = r[r.length - 1], l = r[0];
      if (o) {
        const a = l.search(/\S/), c = t.from + l.indexOf(o), u = c + o.length;
        if (sc(t.from, t.to, e.doc).filter((h) => h.mark.type.excluded.find((m) => m === n.type && m !== h.mark.type)).filter((h) => h.to > c).length)
          return null;
        u < t.to && s.delete(u, t.to), c > t.from && s.delete(t.from + a, c);
        const d = t.from + a + o.length;
        s.addMark(t.from + a, d, n.type.create(i || {})), s.removeStoredMark(n.type);
      }
    }
  });
}
function el(n) {
  return new Qa({
    find: n.find,
    handler: ({ state: e, range: t, match: r, chain: i }) => {
      const s = V(n.getAttributes, void 0, r) || {}, o = e.tr.delete(t.from, t.to), a = o.doc.resolve(t.from).blockRange(), c = a && ms(a, n.type, s);
      if (!c)
        return null;
      if (o.wrap(a, c), n.keepMarks && n.editor) {
        const { selection: f, storedMarks: d } = e, { splittableMarks: h } = n.editor.extensionManager, p = d || f.$to.parentOffset && f.$from.marks();
        if (p) {
          const m = p.filter((y) => h.includes(y.type.name));
          o.ensureMarks(m);
        }
      }
      if (n.keepAttributes) {
        const f = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList";
        i().updateAttributes(f, s).run();
      }
      const u = o.doc.resolve(t.from - 1).nodeBefore;
      u && u.type === n.type && bt(o.doc, t.from - 1) && (!n.joinPredicate || n.joinPredicate(r, u)) && o.join(t.from - 1);
    }
  });
}
class Wt {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = V(M(this, "addOptions", {
      name: this.name
    }))), this.storage = V(M(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Wt(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => ai(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new Wt(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = V(M(t, "addOptions", {
      name: t.name
    })), t.storage = V(M(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  static handleExit({ editor: e, mark: t }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const o = i.marks();
      if (!!!o.find((c) => (c == null ? void 0 : c.type.name) === t.name))
        return !1;
      const a = o.find((c) => (c == null ? void 0 : c.type.name) === t.name);
      return a && r.removeStoredMark(a), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
}
class We {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = V(M(this, "addOptions", {
      name: this.name
    }))), this.storage = V(M(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new We(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => ai(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new We(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = V(M(t, "addOptions", {
      name: t.name
    })), t.storage = V(M(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function Ur(n) {
  return new Oh({
    find: n.find,
    handler: ({ state: e, range: t, match: r, pasteEvent: i }) => {
      const s = V(n.getAttributes, void 0, r, i);
      if (s === !1 || s === null)
        return null;
      const { tr: o } = e, l = r[r.length - 1], a = r[0];
      let c = t.to;
      if (l) {
        const u = a.search(/\S/), f = t.from + a.indexOf(l), d = f + l.length;
        if (sc(t.from, t.to, e.doc).filter((p) => p.mark.type.excluded.find((y) => y === n.type && y !== p.mark.type)).filter((p) => p.to > f).length)
          return null;
        d < t.to && o.delete(d, t.to), f > t.from && o.delete(t.from + u, f), c = t.from + u + l.length, o.addMark(t.from + u, c, n.type.create(s || {})), o.removeStoredMark(n.type);
      }
    }
  });
}
var pe = "top", Ee = "bottom", Ne = "right", me = "left", Ps = "auto", or = [pe, Ee, Ne, me], bn = "start", Gn = "end", sm = "clippingParents", lc = "viewport", An = "popper", om = "reference", tl = /* @__PURE__ */ or.reduce(function(n, e) {
  return n.concat([e + "-" + bn, e + "-" + Gn]);
}, []), ac = /* @__PURE__ */ [].concat(or, [Ps]).reduce(function(n, e) {
  return n.concat([e, e + "-" + bn, e + "-" + Gn]);
}, []), lm = "beforeRead", am = "read", cm = "afterRead", um = "beforeMain", fm = "main", dm = "afterMain", hm = "beforeWrite", pm = "write", mm = "afterWrite", gm = [lm, am, cm, um, fm, dm, hm, pm, mm];
function Ke(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function we(n) {
  if (n == null)
    return window;
  if (n.toString() !== "[object Window]") {
    var e = n.ownerDocument;
    return e && e.defaultView || window;
  }
  return n;
}
function Kt(n) {
  var e = we(n).Element;
  return n instanceof e || n instanceof Element;
}
function Te(n) {
  var e = we(n).HTMLElement;
  return n instanceof e || n instanceof HTMLElement;
}
function Bs(n) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = we(n).ShadowRoot;
  return n instanceof e || n instanceof ShadowRoot;
}
function ym(n) {
  var e = n.state;
  Object.keys(e.elements).forEach(function(t) {
    var r = e.styles[t] || {}, i = e.attributes[t] || {}, s = e.elements[t];
    !Te(s) || !Ke(s) || (Object.assign(s.style, r), Object.keys(i).forEach(function(o) {
      var l = i[o];
      l === !1 ? s.removeAttribute(o) : s.setAttribute(o, l === !0 ? "" : l);
    }));
  });
}
function bm(n) {
  var e = n.state, t = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var i = e.elements[r], s = e.attributes[r] || {}, o = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : t[r]), l = o.reduce(function(a, c) {
        return a[c] = "", a;
      }, {});
      !Te(i) || !Ke(i) || (Object.assign(i.style, l), Object.keys(s).forEach(function(a) {
        i.removeAttribute(a);
      }));
    });
  };
}
const cc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ym,
  effect: bm,
  requires: ["computeStyles"]
};
function je(n) {
  return n.split("-")[0];
}
var Vt = Math.max, Gr = Math.min, vn = Math.round;
function as() {
  var n = navigator.userAgentData;
  return n != null && n.brands && Array.isArray(n.brands) ? n.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function uc() {
  return !/^((?!chrome|android).)*safari/i.test(as());
}
function xn(n, e, t) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  var r = n.getBoundingClientRect(), i = 1, s = 1;
  e && Te(n) && (i = n.offsetWidth > 0 && vn(r.width) / n.offsetWidth || 1, s = n.offsetHeight > 0 && vn(r.height) / n.offsetHeight || 1);
  var o = Kt(n) ? we(n) : window, l = o.visualViewport, a = !uc() && t, c = (r.left + (a && l ? l.offsetLeft : 0)) / i, u = (r.top + (a && l ? l.offsetTop : 0)) / s, f = r.width / i, d = r.height / s;
  return {
    width: f,
    height: d,
    top: u,
    right: c + f,
    bottom: u + d,
    left: c,
    x: c,
    y: u
  };
}
function Ls(n) {
  var e = xn(n), t = n.offsetWidth, r = n.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: n.offsetLeft,
    y: n.offsetTop,
    width: t,
    height: r
  };
}
function fc(n, e) {
  var t = e.getRootNode && e.getRootNode();
  if (n.contains(e))
    return !0;
  if (t && Bs(t)) {
    var r = e;
    do {
      if (r && n.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function tt(n) {
  return we(n).getComputedStyle(n);
}
function vm(n) {
  return ["table", "td", "th"].indexOf(Ke(n)) >= 0;
}
function wt(n) {
  return ((Kt(n) ? n.ownerDocument : (
    // $FlowFixMe[prop-missing]
    n.document
  )) || window.document).documentElement;
}
function ui(n) {
  return Ke(n) === "html" ? n : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    n.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    n.parentNode || // DOM Element detected
    (Bs(n) ? n.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    wt(n)
  );
}
function nl(n) {
  return !Te(n) || // https://github.com/popperjs/popper-core/issues/837
  tt(n).position === "fixed" ? null : n.offsetParent;
}
function xm(n) {
  var e = /firefox/i.test(as()), t = /Trident/i.test(as());
  if (t && Te(n)) {
    var r = tt(n);
    if (r.position === "fixed")
      return null;
  }
  var i = ui(n);
  for (Bs(i) && (i = i.host); Te(i) && ["html", "body"].indexOf(Ke(i)) < 0; ) {
    var s = tt(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || e && s.willChange === "filter" || e && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function lr(n) {
  for (var e = we(n), t = nl(n); t && vm(t) && tt(t).position === "static"; )
    t = nl(t);
  return t && (Ke(t) === "html" || Ke(t) === "body" && tt(t).position === "static") ? e : t || xm(n) || e;
}
function zs(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function Vn(n, e, t) {
  return Vt(n, Gr(e, t));
}
function km(n, e, t) {
  var r = Vn(n, e, t);
  return r > t ? t : r;
}
function dc() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function hc(n) {
  return Object.assign({}, dc(), n);
}
function pc(n, e) {
  return e.reduce(function(t, r) {
    return t[r] = n, t;
  }, {});
}
var wm = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, {
    placement: t.placement
  })) : e, hc(typeof e != "number" ? e : pc(e, or));
};
function Sm(n) {
  var e, t = n.state, r = n.name, i = n.options, s = t.elements.arrow, o = t.modifiersData.popperOffsets, l = je(t.placement), a = zs(l), c = [me, Ne].indexOf(l) >= 0, u = c ? "height" : "width";
  if (!(!s || !o)) {
    var f = wm(i.padding, t), d = Ls(s), h = a === "y" ? pe : me, p = a === "y" ? Ee : Ne, m = t.rects.reference[u] + t.rects.reference[a] - o[a] - t.rects.popper[u], y = o[a] - t.rects.reference[a], b = lr(s), w = b ? a === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, O = m / 2 - y / 2, g = f[h], E = w - d[u] - f[p], x = w / 2 - d[u] / 2 + O, R = Vn(g, x, E), L = a;
    t.modifiersData[r] = (e = {}, e[L] = R, e.centerOffset = R - x, e);
  }
}
function Cm(n) {
  var e = n.state, t = n.options, r = t.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || fc(e.elements.popper, i) && (e.elements.arrow = i));
}
const Om = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Sm,
  effect: Cm,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function kn(n) {
  return n.split("-")[1];
}
var Mm = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Tm(n, e) {
  var t = n.x, r = n.y, i = e.devicePixelRatio || 1;
  return {
    x: vn(t * i) / i || 0,
    y: vn(r * i) / i || 0
  };
}
function rl(n) {
  var e, t = n.popper, r = n.popperRect, i = n.placement, s = n.variation, o = n.offsets, l = n.position, a = n.gpuAcceleration, c = n.adaptive, u = n.roundOffsets, f = n.isFixed, d = o.x, h = d === void 0 ? 0 : d, p = o.y, m = p === void 0 ? 0 : p, y = typeof u == "function" ? u({
    x: h,
    y: m
  }) : {
    x: h,
    y: m
  };
  h = y.x, m = y.y;
  var b = o.hasOwnProperty("x"), w = o.hasOwnProperty("y"), O = me, g = pe, E = window;
  if (c) {
    var x = lr(t), R = "clientHeight", L = "clientWidth";
    if (x === we(t) && (x = wt(t), tt(x).position !== "static" && l === "absolute" && (R = "scrollHeight", L = "scrollWidth")), x = x, i === pe || (i === me || i === Ne) && s === Gn) {
      g = Ee;
      var N = f && x === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        x[R]
      );
      m -= N - r.height, m *= a ? 1 : -1;
    }
    if (i === me || (i === pe || i === Ee) && s === Gn) {
      O = Ne;
      var $ = f && x === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        x[L]
      );
      h -= $ - r.width, h *= a ? 1 : -1;
    }
  }
  var _ = Object.assign({
    position: l
  }, c && Mm), W = u === !0 ? Tm({
    x: h,
    y: m
  }, we(t)) : {
    x: h,
    y: m
  };
  if (h = W.x, m = W.y, a) {
    var K;
    return Object.assign({}, _, (K = {}, K[g] = w ? "0" : "", K[O] = b ? "0" : "", K.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + m + "px)" : "translate3d(" + h + "px, " + m + "px, 0)", K));
  }
  return Object.assign({}, _, (e = {}, e[g] = w ? m + "px" : "", e[O] = b ? h + "px" : "", e.transform = "", e));
}
function Em(n) {
  var e = n.state, t = n.options, r = t.gpuAcceleration, i = r === void 0 ? !0 : r, s = t.adaptive, o = s === void 0 ? !0 : s, l = t.roundOffsets, a = l === void 0 ? !0 : l, c = {
    placement: je(e.placement),
    variation: kn(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, rl(Object.assign({}, c, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: o,
    roundOffsets: a
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, rl(Object.assign({}, c, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const Nm = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Em,
  data: {}
};
var Mr = {
  passive: !0
};
function Dm(n) {
  var e = n.state, t = n.instance, r = n.options, i = r.scroll, s = i === void 0 ? !0 : i, o = r.resize, l = o === void 0 ? !0 : o, a = we(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return s && c.forEach(function(u) {
    u.addEventListener("scroll", t.update, Mr);
  }), l && a.addEventListener("resize", t.update, Mr), function() {
    s && c.forEach(function(u) {
      u.removeEventListener("scroll", t.update, Mr);
    }), l && a.removeEventListener("resize", t.update, Mr);
  };
}
const Am = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Dm,
  data: {}
};
var Im = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ar(n) {
  return n.replace(/left|right|bottom|top/g, function(e) {
    return Im[e];
  });
}
var Rm = {
  start: "end",
  end: "start"
};
function il(n) {
  return n.replace(/start|end/g, function(e) {
    return Rm[e];
  });
}
function Fs(n) {
  var e = we(n), t = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: r
  };
}
function Vs(n) {
  return xn(wt(n)).left + Fs(n).scrollLeft;
}
function Pm(n, e) {
  var t = we(n), r = wt(n), i = t.visualViewport, s = r.clientWidth, o = r.clientHeight, l = 0, a = 0;
  if (i) {
    s = i.width, o = i.height;
    var c = uc();
    (c || !c && e === "fixed") && (l = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: s,
    height: o,
    x: l + Vs(n),
    y: a
  };
}
function Bm(n) {
  var e, t = wt(n), r = Fs(n), i = (e = n.ownerDocument) == null ? void 0 : e.body, s = Vt(t.scrollWidth, t.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = Vt(t.scrollHeight, t.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + Vs(n), a = -r.scrollTop;
  return tt(i || t).direction === "rtl" && (l += Vt(t.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: o,
    x: l,
    y: a
  };
}
function $s(n) {
  var e = tt(n), t = e.overflow, r = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + i + r);
}
function mc(n) {
  return ["html", "body", "#document"].indexOf(Ke(n)) >= 0 ? n.ownerDocument.body : Te(n) && $s(n) ? n : mc(ui(n));
}
function $n(n, e) {
  var t;
  e === void 0 && (e = []);
  var r = mc(n), i = r === ((t = n.ownerDocument) == null ? void 0 : t.body), s = we(r), o = i ? [s].concat(s.visualViewport || [], $s(r) ? r : []) : r, l = e.concat(o);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat($n(ui(o)))
  );
}
function cs(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  });
}
function Lm(n, e) {
  var t = xn(n, !1, e === "fixed");
  return t.top = t.top + n.clientTop, t.left = t.left + n.clientLeft, t.bottom = t.top + n.clientHeight, t.right = t.left + n.clientWidth, t.width = n.clientWidth, t.height = n.clientHeight, t.x = t.left, t.y = t.top, t;
}
function sl(n, e, t) {
  return e === lc ? cs(Pm(n, t)) : Kt(e) ? Lm(e, t) : cs(Bm(wt(n)));
}
function zm(n) {
  var e = $n(ui(n)), t = ["absolute", "fixed"].indexOf(tt(n).position) >= 0, r = t && Te(n) ? lr(n) : n;
  return Kt(r) ? e.filter(function(i) {
    return Kt(i) && fc(i, r) && Ke(i) !== "body";
  }) : [];
}
function Fm(n, e, t, r) {
  var i = e === "clippingParents" ? zm(n) : [].concat(e), s = [].concat(i, [t]), o = s[0], l = s.reduce(function(a, c) {
    var u = sl(n, c, r);
    return a.top = Vt(u.top, a.top), a.right = Gr(u.right, a.right), a.bottom = Gr(u.bottom, a.bottom), a.left = Vt(u.left, a.left), a;
  }, sl(n, o, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function gc(n) {
  var e = n.reference, t = n.element, r = n.placement, i = r ? je(r) : null, s = r ? kn(r) : null, o = e.x + e.width / 2 - t.width / 2, l = e.y + e.height / 2 - t.height / 2, a;
  switch (i) {
    case pe:
      a = {
        x: o,
        y: e.y - t.height
      };
      break;
    case Ee:
      a = {
        x: o,
        y: e.y + e.height
      };
      break;
    case Ne:
      a = {
        x: e.x + e.width,
        y: l
      };
      break;
    case me:
      a = {
        x: e.x - t.width,
        y: l
      };
      break;
    default:
      a = {
        x: e.x,
        y: e.y
      };
  }
  var c = i ? zs(i) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (s) {
      case bn:
        a[c] = a[c] - (e[u] / 2 - t[u] / 2);
        break;
      case Gn:
        a[c] = a[c] + (e[u] / 2 - t[u] / 2);
        break;
    }
  }
  return a;
}
function Yn(n, e) {
  e === void 0 && (e = {});
  var t = e, r = t.placement, i = r === void 0 ? n.placement : r, s = t.strategy, o = s === void 0 ? n.strategy : s, l = t.boundary, a = l === void 0 ? sm : l, c = t.rootBoundary, u = c === void 0 ? lc : c, f = t.elementContext, d = f === void 0 ? An : f, h = t.altBoundary, p = h === void 0 ? !1 : h, m = t.padding, y = m === void 0 ? 0 : m, b = hc(typeof y != "number" ? y : pc(y, or)), w = d === An ? om : An, O = n.rects.popper, g = n.elements[p ? w : d], E = Fm(Kt(g) ? g : g.contextElement || wt(n.elements.popper), a, u, o), x = xn(n.elements.reference), R = gc({
    reference: x,
    element: O,
    strategy: "absolute",
    placement: i
  }), L = cs(Object.assign({}, O, R)), N = d === An ? L : x, $ = {
    top: E.top - N.top + b.top,
    bottom: N.bottom - E.bottom + b.bottom,
    left: E.left - N.left + b.left,
    right: N.right - E.right + b.right
  }, _ = n.modifiersData.offset;
  if (d === An && _) {
    var W = _[i];
    Object.keys($).forEach(function(K) {
      var ee = [Ne, Ee].indexOf(K) >= 0 ? 1 : -1, S = [pe, Ee].indexOf(K) >= 0 ? "y" : "x";
      $[K] += W[S] * ee;
    });
  }
  return $;
}
function Vm(n, e) {
  e === void 0 && (e = {});
  var t = e, r = t.placement, i = t.boundary, s = t.rootBoundary, o = t.padding, l = t.flipVariations, a = t.allowedAutoPlacements, c = a === void 0 ? ac : a, u = kn(r), f = u ? l ? tl : tl.filter(function(p) {
    return kn(p) === u;
  }) : or, d = f.filter(function(p) {
    return c.indexOf(p) >= 0;
  });
  d.length === 0 && (d = f);
  var h = d.reduce(function(p, m) {
    return p[m] = Yn(n, {
      placement: m,
      boundary: i,
      rootBoundary: s,
      padding: o
    })[je(m)], p;
  }, {});
  return Object.keys(h).sort(function(p, m) {
    return h[p] - h[m];
  });
}
function $m(n) {
  if (je(n) === Ps)
    return [];
  var e = Ar(n);
  return [il(n), e, il(e)];
}
function jm(n) {
  var e = n.state, t = n.options, r = n.name;
  if (!e.modifiersData[r]._skip) {
    for (var i = t.mainAxis, s = i === void 0 ? !0 : i, o = t.altAxis, l = o === void 0 ? !0 : o, a = t.fallbackPlacements, c = t.padding, u = t.boundary, f = t.rootBoundary, d = t.altBoundary, h = t.flipVariations, p = h === void 0 ? !0 : h, m = t.allowedAutoPlacements, y = e.options.placement, b = je(y), w = b === y, O = a || (w || !p ? [Ar(y)] : $m(y)), g = [y].concat(O).reduce(function(qe, Ae) {
      return qe.concat(je(Ae) === Ps ? Vm(e, {
        placement: Ae,
        boundary: u,
        rootBoundary: f,
        padding: c,
        flipVariations: p,
        allowedAutoPlacements: m
      }) : Ae);
    }, []), E = e.rects.reference, x = e.rects.popper, R = /* @__PURE__ */ new Map(), L = !0, N = g[0], $ = 0; $ < g.length; $++) {
      var _ = g[$], W = je(_), K = kn(_) === bn, ee = [pe, Ee].indexOf(W) >= 0, S = ee ? "width" : "height", D = Yn(e, {
        placement: _,
        boundary: u,
        rootBoundary: f,
        altBoundary: d,
        padding: c
      }), P = ee ? K ? Ne : me : K ? Ee : pe;
      E[S] > x[S] && (P = Ar(P));
      var z = Ar(P), G = [];
      if (s && G.push(D[W] <= 0), l && G.push(D[P] <= 0, D[z] <= 0), G.every(function(qe) {
        return qe;
      })) {
        N = _, L = !1;
        break;
      }
      R.set(_, G);
    }
    if (L)
      for (var Le = p ? 3 : 1, St = function(Ae) {
        var Je = g.find(function(Gt) {
          var Ue = R.get(Gt);
          if (Ue)
            return Ue.slice(0, Ae).every(function(Yt) {
              return Yt;
            });
        });
        if (Je)
          return N = Je, "break";
      }, ze = Le; ze > 0; ze--) {
        var Ct = St(ze);
        if (Ct === "break") break;
      }
    e.placement !== N && (e.modifiersData[r]._skip = !0, e.placement = N, e.reset = !0);
  }
}
const Hm = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: jm,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ol(n, e, t) {
  return t === void 0 && (t = {
    x: 0,
    y: 0
  }), {
    top: n.top - e.height - t.y,
    right: n.right - e.width + t.x,
    bottom: n.bottom - e.height + t.y,
    left: n.left - e.width - t.x
  };
}
function ll(n) {
  return [pe, Ne, Ee, me].some(function(e) {
    return n[e] >= 0;
  });
}
function _m(n) {
  var e = n.state, t = n.name, r = e.rects.reference, i = e.rects.popper, s = e.modifiersData.preventOverflow, o = Yn(e, {
    elementContext: "reference"
  }), l = Yn(e, {
    altBoundary: !0
  }), a = ol(o, r), c = ol(l, i, s), u = ll(a), f = ll(c);
  e.modifiersData[t] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: f
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": f
  });
}
const Wm = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: _m
};
function Km(n, e, t) {
  var r = je(n), i = [me, pe].indexOf(r) >= 0 ? -1 : 1, s = typeof t == "function" ? t(Object.assign({}, e, {
    placement: n
  })) : t, o = s[0], l = s[1];
  return o = o || 0, l = (l || 0) * i, [me, Ne].indexOf(r) >= 0 ? {
    x: l,
    y: o
  } : {
    x: o,
    y: l
  };
}
function qm(n) {
  var e = n.state, t = n.options, r = n.name, i = t.offset, s = i === void 0 ? [0, 0] : i, o = ac.reduce(function(u, f) {
    return u[f] = Km(f, e.rects, s), u;
  }, {}), l = o[e.placement], a = l.x, c = l.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += a, e.modifiersData.popperOffsets.y += c), e.modifiersData[r] = o;
}
const Jm = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: qm
};
function Um(n) {
  var e = n.state, t = n.name;
  e.modifiersData[t] = gc({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const Gm = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Um,
  data: {}
};
function Ym(n) {
  return n === "x" ? "y" : "x";
}
function Xm(n) {
  var e = n.state, t = n.options, r = n.name, i = t.mainAxis, s = i === void 0 ? !0 : i, o = t.altAxis, l = o === void 0 ? !1 : o, a = t.boundary, c = t.rootBoundary, u = t.altBoundary, f = t.padding, d = t.tether, h = d === void 0 ? !0 : d, p = t.tetherOffset, m = p === void 0 ? 0 : p, y = Yn(e, {
    boundary: a,
    rootBoundary: c,
    padding: f,
    altBoundary: u
  }), b = je(e.placement), w = kn(e.placement), O = !w, g = zs(b), E = Ym(g), x = e.modifiersData.popperOffsets, R = e.rects.reference, L = e.rects.popper, N = typeof m == "function" ? m(Object.assign({}, e.rects, {
    placement: e.placement
  })) : m, $ = typeof N == "number" ? {
    mainAxis: N,
    altAxis: N
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, N), _ = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, W = {
    x: 0,
    y: 0
  };
  if (x) {
    if (s) {
      var K, ee = g === "y" ? pe : me, S = g === "y" ? Ee : Ne, D = g === "y" ? "height" : "width", P = x[g], z = P + y[ee], G = P - y[S], Le = h ? -L[D] / 2 : 0, St = w === bn ? R[D] : L[D], ze = w === bn ? -L[D] : -R[D], Ct = e.elements.arrow, qe = h && Ct ? Ls(Ct) : {
        width: 0,
        height: 0
      }, Ae = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : dc(), Je = Ae[ee], Gt = Ae[S], Ue = Vn(0, R[D], qe[D]), Yt = O ? R[D] / 2 - Le - Ue - Je - $.mainAxis : St - Ue - Je - $.mainAxis, nt = O ? -R[D] / 2 + Le + Ue + Gt + $.mainAxis : ze + Ue + Gt + $.mainAxis, Xt = e.elements.arrow && lr(e.elements.arrow), ar = Xt ? g === "y" ? Xt.clientTop || 0 : Xt.clientLeft || 0 : 0, Cn = (K = _ == null ? void 0 : _[g]) != null ? K : 0, cr = P + Yt - Cn - ar, ur = P + nt - Cn, On = Vn(h ? Gr(z, cr) : z, P, h ? Vt(G, ur) : G);
      x[g] = On, W[g] = On - P;
    }
    if (l) {
      var Mn, fr = g === "x" ? pe : me, dr = g === "x" ? Ee : Ne, Ge = x[E], rt = E === "y" ? "height" : "width", Tn = Ge + y[fr], Ot = Ge - y[dr], En = [pe, me].indexOf(b) !== -1, hr = (Mn = _ == null ? void 0 : _[E]) != null ? Mn : 0, pr = En ? Tn : Ge - R[rt] - L[rt] - hr + $.altAxis, mr = En ? Ge + R[rt] + L[rt] - hr - $.altAxis : Ot, gr = h && En ? km(pr, Ge, mr) : Vn(h ? pr : Tn, Ge, h ? mr : Ot);
      x[E] = gr, W[E] = gr - Ge;
    }
    e.modifiersData[r] = W;
  }
}
const Zm = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Xm,
  requiresIfExists: ["offset"]
};
function Qm(n) {
  return {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  };
}
function eg(n) {
  return n === we(n) || !Te(n) ? Fs(n) : Qm(n);
}
function tg(n) {
  var e = n.getBoundingClientRect(), t = vn(e.width) / n.offsetWidth || 1, r = vn(e.height) / n.offsetHeight || 1;
  return t !== 1 || r !== 1;
}
function ng(n, e, t) {
  t === void 0 && (t = !1);
  var r = Te(e), i = Te(e) && tg(e), s = wt(e), o = xn(n, i, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !t) && ((Ke(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  $s(s)) && (l = eg(e)), Te(e) ? (a = xn(e, !0), a.x += e.clientLeft, a.y += e.clientTop) : s && (a.x = Vs(s))), {
    x: o.left + l.scrollLeft - a.x,
    y: o.top + l.scrollTop - a.y,
    width: o.width,
    height: o.height
  };
}
function rg(n) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), r = [];
  n.forEach(function(s) {
    e.set(s.name, s);
  });
  function i(s) {
    t.add(s.name);
    var o = [].concat(s.requires || [], s.requiresIfExists || []);
    o.forEach(function(l) {
      if (!t.has(l)) {
        var a = e.get(l);
        a && i(a);
      }
    }), r.push(s);
  }
  return n.forEach(function(s) {
    t.has(s.name) || i(s);
  }), r;
}
function ig(n) {
  var e = rg(n);
  return gm.reduce(function(t, r) {
    return t.concat(e.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function sg(n) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(n());
      });
    })), e;
  };
}
function og(n) {
  var e = n.reduce(function(t, r) {
    var i = t[r.name];
    return t[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
var al = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function cl() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function lg(n) {
  n === void 0 && (n = {});
  var e = n, t = e.defaultModifiers, r = t === void 0 ? [] : t, i = e.defaultOptions, s = i === void 0 ? al : i;
  return function(l, a, c) {
    c === void 0 && (c = s);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, al, s),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, f = [], d = !1, h = {
      state: u,
      setOptions: function(b) {
        var w = typeof b == "function" ? b(u.options) : b;
        m(), u.options = Object.assign({}, s, u.options, w), u.scrollParents = {
          reference: Kt(l) ? $n(l) : l.contextElement ? $n(l.contextElement) : [],
          popper: $n(a)
        };
        var O = ig(og([].concat(r, u.options.modifiers)));
        return u.orderedModifiers = O.filter(function(g) {
          return g.enabled;
        }), p(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!d) {
          var b = u.elements, w = b.reference, O = b.popper;
          if (cl(w, O)) {
            u.rects = {
              reference: ng(w, lr(O), u.options.strategy === "fixed"),
              popper: Ls(O)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function($) {
              return u.modifiersData[$.name] = Object.assign({}, $.data);
            });
            for (var g = 0; g < u.orderedModifiers.length; g++) {
              if (u.reset === !0) {
                u.reset = !1, g = -1;
                continue;
              }
              var E = u.orderedModifiers[g], x = E.fn, R = E.options, L = R === void 0 ? {} : R, N = E.name;
              typeof x == "function" && (u = x({
                state: u,
                options: L,
                name: N,
                instance: h
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: sg(function() {
        return new Promise(function(y) {
          h.forceUpdate(), y(u);
        });
      }),
      destroy: function() {
        m(), d = !0;
      }
    };
    if (!cl(l, a))
      return h;
    h.setOptions(c).then(function(y) {
      !d && c.onFirstUpdate && c.onFirstUpdate(y);
    });
    function p() {
      u.orderedModifiers.forEach(function(y) {
        var b = y.name, w = y.options, O = w === void 0 ? {} : w, g = y.effect;
        if (typeof g == "function") {
          var E = g({
            state: u,
            name: b,
            instance: h,
            options: O
          }), x = function() {
          };
          f.push(E || x);
        }
      });
    }
    function m() {
      f.forEach(function(y) {
        return y();
      }), f = [];
    }
    return h;
  };
}
var ag = [Am, Gm, Nm, cc, Jm, Hm, Zm, Om, Wm], cg = /* @__PURE__ */ lg({
  defaultModifiers: ag
}), ug = "tippy-box", yc = "tippy-content", fg = "tippy-backdrop", bc = "tippy-arrow", vc = "tippy-svg-arrow", Nt = {
  passive: !0,
  capture: !0
}, xc = function() {
  return document.body;
};
function dg(n, e) {
  return {}.hasOwnProperty.call(n, e);
}
function Pi(n, e, t) {
  if (Array.isArray(n)) {
    var r = n[e];
    return r ?? (Array.isArray(t) ? t[e] : t);
  }
  return n;
}
function js(n, e) {
  var t = {}.toString.call(n);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
function kc(n, e) {
  return typeof n == "function" ? n.apply(void 0, e) : n;
}
function ul(n, e) {
  if (e === 0)
    return n;
  var t;
  return function(r) {
    clearTimeout(t), t = setTimeout(function() {
      n(r);
    }, e);
  };
}
function hg(n, e) {
  var t = Object.assign({}, n);
  return e.forEach(function(r) {
    delete t[r];
  }), t;
}
function pg(n) {
  return n.split(/\s+/).filter(Boolean);
}
function ln(n) {
  return [].concat(n);
}
function fl(n, e) {
  n.indexOf(e) === -1 && n.push(e);
}
function mg(n) {
  return n.filter(function(e, t) {
    return n.indexOf(e) === t;
  });
}
function gg(n) {
  return n.split("-")[0];
}
function Yr(n) {
  return [].slice.call(n);
}
function dl(n) {
  return Object.keys(n).reduce(function(e, t) {
    return n[t] !== void 0 && (e[t] = n[t]), e;
  }, {});
}
function jn() {
  return document.createElement("div");
}
function Xn(n) {
  return ["Element", "Fragment"].some(function(e) {
    return js(n, e);
  });
}
function yg(n) {
  return js(n, "NodeList");
}
function bg(n) {
  return js(n, "MouseEvent");
}
function vg(n) {
  return !!(n && n._tippy && n._tippy.reference === n);
}
function xg(n) {
  return Xn(n) ? [n] : yg(n) ? Yr(n) : Array.isArray(n) ? n : Yr(document.querySelectorAll(n));
}
function Bi(n, e) {
  n.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
function hl(n, e) {
  n.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
function kg(n) {
  var e, t = ln(n), r = t[0];
  return r != null && (e = r.ownerDocument) != null && e.body ? r.ownerDocument : document;
}
function wg(n, e) {
  var t = e.clientX, r = e.clientY;
  return n.every(function(i) {
    var s = i.popperRect, o = i.popperState, l = i.props, a = l.interactiveBorder, c = gg(o.placement), u = o.modifiersData.offset;
    if (!u)
      return !0;
    var f = c === "bottom" ? u.top.y : 0, d = c === "top" ? u.bottom.y : 0, h = c === "right" ? u.left.x : 0, p = c === "left" ? u.right.x : 0, m = s.top - r + f > a, y = r - s.bottom - d > a, b = s.left - t + h > a, w = t - s.right - p > a;
    return m || y || b || w;
  });
}
function Li(n, e, t) {
  var r = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(i) {
    n[r](i, t);
  });
}
function pl(n, e) {
  for (var t = e; t; ) {
    var r;
    if (n.contains(t))
      return !0;
    t = t.getRootNode == null || (r = t.getRootNode()) == null ? void 0 : r.host;
  }
  return !1;
}
var Ve = {
  isTouch: !1
}, ml = 0;
function Sg() {
  Ve.isTouch || (Ve.isTouch = !0, window.performance && document.addEventListener("mousemove", wc));
}
function wc() {
  var n = performance.now();
  n - ml < 20 && (Ve.isTouch = !1, document.removeEventListener("mousemove", wc)), ml = n;
}
function Cg() {
  var n = document.activeElement;
  if (vg(n)) {
    var e = n._tippy;
    n.blur && !e.state.isVisible && n.blur();
  }
}
function Og() {
  document.addEventListener("touchstart", Sg, Nt), window.addEventListener("blur", Cg);
}
var Mg = typeof window < "u" && typeof document < "u", Tg = Mg ? (
  // @ts-ignore
  !!window.msCrypto
) : !1;
function rn(n) {
  var e = n === "destroy" ? "n already-" : " ";
  return [n + "() was called on a" + e + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
function gl(n) {
  var e = /[ \t]{2,}/g, t = /^[ \t]*/gm;
  return n.replace(e, " ").replace(t, "").trim();
}
function Eg(n) {
  return gl(`
  %ctippy.js

  %c` + gl(n) + `

  %c👷‍ This is a development-only message. It will be removed in production.
  `);
}
function Sc(n) {
  return [
    Eg(n),
    // title
    "color: #00C584; font-size: 1.3em; font-weight: bold;",
    // message
    "line-height: 1.5",
    // footer
    "color: #a6a095;"
  ];
}
var Zn;
process.env.NODE_ENV !== "production" && Ng();
function Ng() {
  Zn = /* @__PURE__ */ new Set();
}
function Ze(n, e) {
  if (n && !Zn.has(e)) {
    var t;
    Zn.add(e), (t = console).warn.apply(t, Sc(e));
  }
}
function us(n, e) {
  if (n && !Zn.has(e)) {
    var t;
    Zn.add(e), (t = console).error.apply(t, Sc(e));
  }
}
function Dg(n) {
  var e = !n, t = Object.prototype.toString.call(n) === "[object Object]" && !n.addEventListener;
  us(e, ["tippy() was passed", "`" + String(n) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" ")), us(t, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
var Cc = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, Ag = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, xe = Object.assign({
  appendTo: xc,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: !0,
  ignoreAttributes: !1,
  interactive: !1,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function() {
  },
  onBeforeUpdate: function() {
  },
  onCreate: function() {
  },
  onDestroy: function() {
  },
  onHidden: function() {
  },
  onHide: function() {
  },
  onMount: function() {
  },
  onShow: function() {
  },
  onShown: function() {
  },
  onTrigger: function() {
  },
  onUntrigger: function() {
  },
  onClickOutside: function() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: !1,
  touch: !0,
  trigger: "mouseenter focus",
  triggerTarget: null
}, Cc, Ag), Ig = Object.keys(xe), Rg = function(e) {
  process.env.NODE_ENV !== "production" && Mc(e, []);
  var t = Object.keys(e);
  t.forEach(function(r) {
    xe[r] = e[r];
  });
};
function Oc(n) {
  var e = n.plugins || [], t = e.reduce(function(r, i) {
    var s = i.name, o = i.defaultValue;
    if (s) {
      var l;
      r[s] = n[s] !== void 0 ? n[s] : (l = xe[s]) != null ? l : o;
    }
    return r;
  }, {});
  return Object.assign({}, n, t);
}
function Pg(n, e) {
  var t = e ? Object.keys(Oc(Object.assign({}, xe, {
    plugins: e
  }))) : Ig, r = t.reduce(function(i, s) {
    var o = (n.getAttribute("data-tippy-" + s) || "").trim();
    if (!o)
      return i;
    if (s === "content")
      i[s] = o;
    else
      try {
        i[s] = JSON.parse(o);
      } catch {
        i[s] = o;
      }
    return i;
  }, {});
  return r;
}
function yl(n, e) {
  var t = Object.assign({}, e, {
    content: kc(e.content, [n])
  }, e.ignoreAttributes ? {} : Pg(n, e.plugins));
  return t.aria = Object.assign({}, xe.aria, t.aria), t.aria = {
    expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded,
    content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content
  }, t;
}
function Mc(n, e) {
  n === void 0 && (n = {}), e === void 0 && (e = []);
  var t = Object.keys(n);
  t.forEach(function(r) {
    var i = hg(xe, Object.keys(Cc)), s = !dg(i, r);
    s && (s = e.filter(function(o) {
      return o.name === r;
    }).length === 0), Ze(s, ["`" + r + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", `

`, `All props: https://atomiks.github.io/tippyjs/v6/all-props/
`, "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
var Bg = function() {
  return "innerHTML";
};
function fs(n, e) {
  n[Bg()] = e;
}
function bl(n) {
  var e = jn();
  return n === !0 ? e.className = bc : (e.className = vc, Xn(n) ? e.appendChild(n) : fs(e, n)), e;
}
function vl(n, e) {
  Xn(e.content) ? (fs(n, ""), n.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? fs(n, e.content) : n.textContent = e.content);
}
function ds(n) {
  var e = n.firstElementChild, t = Yr(e.children);
  return {
    box: e,
    content: t.find(function(r) {
      return r.classList.contains(yc);
    }),
    arrow: t.find(function(r) {
      return r.classList.contains(bc) || r.classList.contains(vc);
    }),
    backdrop: t.find(function(r) {
      return r.classList.contains(fg);
    })
  };
}
function Tc(n) {
  var e = jn(), t = jn();
  t.className = ug, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var r = jn();
  r.className = yc, r.setAttribute("data-state", "hidden"), vl(r, n.props), e.appendChild(t), t.appendChild(r), i(n.props, n.props);
  function i(s, o) {
    var l = ds(e), a = l.box, c = l.content, u = l.arrow;
    o.theme ? a.setAttribute("data-theme", o.theme) : a.removeAttribute("data-theme"), typeof o.animation == "string" ? a.setAttribute("data-animation", o.animation) : a.removeAttribute("data-animation"), o.inertia ? a.setAttribute("data-inertia", "") : a.removeAttribute("data-inertia"), a.style.maxWidth = typeof o.maxWidth == "number" ? o.maxWidth + "px" : o.maxWidth, o.role ? a.setAttribute("role", o.role) : a.removeAttribute("role"), (s.content !== o.content || s.allowHTML !== o.allowHTML) && vl(c, n.props), o.arrow ? u ? s.arrow !== o.arrow && (a.removeChild(u), a.appendChild(bl(o.arrow))) : a.appendChild(bl(o.arrow)) : u && a.removeChild(u);
  }
  return {
    popper: e,
    onUpdate: i
  };
}
Tc.$$tippy = !0;
var Lg = 1, Tr = [], zi = [];
function zg(n, e) {
  var t = yl(n, Object.assign({}, xe, Oc(dl(e)))), r, i, s, o = !1, l = !1, a = !1, c = !1, u, f, d, h = [], p = ul(cr, t.interactiveDebounce), m, y = Lg++, b = null, w = mg(t.plugins), O = {
    // Is the instance currently enabled?
    isEnabled: !0,
    // Is the tippy currently showing and not transitioning out?
    isVisible: !1,
    // Has the instance been destroyed?
    isDestroyed: !1,
    // Is the tippy currently mounted to the DOM?
    isMounted: !1,
    // Has the tippy finished transitioning in?
    isShown: !1
  }, g = {
    // properties
    id: y,
    reference: n,
    popper: jn(),
    popperInstance: b,
    props: t,
    state: O,
    plugins: w,
    // methods
    clearDelayTimeouts: pr,
    setProps: mr,
    setContent: gr,
    show: Wc,
    hide: Kc,
    hideWithInteractivity: qc,
    enable: En,
    disable: hr,
    unmount: Jc,
    destroy: Uc
  };
  if (!t.render)
    return process.env.NODE_ENV !== "production" && us(!0, "render() function has not been supplied."), g;
  var E = t.render(g), x = E.popper, R = E.onUpdate;
  x.setAttribute("data-tippy-root", ""), x.id = "tippy-" + g.id, g.popper = x, n._tippy = g, x._tippy = g;
  var L = w.map(function(v) {
    return v.fn(g);
  }), N = n.hasAttribute("aria-expanded");
  return Xt(), Le(), P(), z("onCreate", [g]), t.showOnCreate && Tn(), x.addEventListener("mouseenter", function() {
    g.props.interactive && g.state.isVisible && g.clearDelayTimeouts();
  }), x.addEventListener("mouseleave", function() {
    g.props.interactive && g.props.trigger.indexOf("mouseenter") >= 0 && ee().addEventListener("mousemove", p);
  }), g;
  function $() {
    var v = g.props.touch;
    return Array.isArray(v) ? v : [v, 0];
  }
  function _() {
    return $()[0] === "hold";
  }
  function W() {
    var v;
    return !!((v = g.props.render) != null && v.$$tippy);
  }
  function K() {
    return m || n;
  }
  function ee() {
    var v = K().parentNode;
    return v ? kg(v) : document;
  }
  function S() {
    return ds(x);
  }
  function D(v) {
    return g.state.isMounted && !g.state.isVisible || Ve.isTouch || u && u.type === "focus" ? 0 : Pi(g.props.delay, v ? 0 : 1, xe.delay);
  }
  function P(v) {
    v === void 0 && (v = !1), x.style.pointerEvents = g.props.interactive && !v ? "" : "none", x.style.zIndex = "" + g.props.zIndex;
  }
  function z(v, T, I) {
    if (I === void 0 && (I = !0), L.forEach(function(j) {
      j[v] && j[v].apply(j, T);
    }), I) {
      var H;
      (H = g.props)[v].apply(H, T);
    }
  }
  function G() {
    var v = g.props.aria;
    if (v.content) {
      var T = "aria-" + v.content, I = x.id, H = ln(g.props.triggerTarget || n);
      H.forEach(function(j) {
        var le = j.getAttribute(T);
        if (g.state.isVisible)
          j.setAttribute(T, le ? le + " " + I : I);
        else {
          var Se = le && le.replace(I, "").trim();
          Se ? j.setAttribute(T, Se) : j.removeAttribute(T);
        }
      });
    }
  }
  function Le() {
    if (!(N || !g.props.aria.expanded)) {
      var v = ln(g.props.triggerTarget || n);
      v.forEach(function(T) {
        g.props.interactive ? T.setAttribute("aria-expanded", g.state.isVisible && T === K() ? "true" : "false") : T.removeAttribute("aria-expanded");
      });
    }
  }
  function St() {
    ee().removeEventListener("mousemove", p), Tr = Tr.filter(function(v) {
      return v !== p;
    });
  }
  function ze(v) {
    if (!(Ve.isTouch && (a || v.type === "mousedown"))) {
      var T = v.composedPath && v.composedPath()[0] || v.target;
      if (!(g.props.interactive && pl(x, T))) {
        if (ln(g.props.triggerTarget || n).some(function(I) {
          return pl(I, T);
        })) {
          if (Ve.isTouch || g.state.isVisible && g.props.trigger.indexOf("click") >= 0)
            return;
        } else
          z("onClickOutside", [g, v]);
        g.props.hideOnClick === !0 && (g.clearDelayTimeouts(), g.hide(), l = !0, setTimeout(function() {
          l = !1;
        }), g.state.isMounted || Je());
      }
    }
  }
  function Ct() {
    a = !0;
  }
  function qe() {
    a = !1;
  }
  function Ae() {
    var v = ee();
    v.addEventListener("mousedown", ze, !0), v.addEventListener("touchend", ze, Nt), v.addEventListener("touchstart", qe, Nt), v.addEventListener("touchmove", Ct, Nt);
  }
  function Je() {
    var v = ee();
    v.removeEventListener("mousedown", ze, !0), v.removeEventListener("touchend", ze, Nt), v.removeEventListener("touchstart", qe, Nt), v.removeEventListener("touchmove", Ct, Nt);
  }
  function Gt(v, T) {
    Yt(v, function() {
      !g.state.isVisible && x.parentNode && x.parentNode.contains(x) && T();
    });
  }
  function Ue(v, T) {
    Yt(v, T);
  }
  function Yt(v, T) {
    var I = S().box;
    function H(j) {
      j.target === I && (Li(I, "remove", H), T());
    }
    if (v === 0)
      return T();
    Li(I, "remove", f), Li(I, "add", H), f = H;
  }
  function nt(v, T, I) {
    I === void 0 && (I = !1);
    var H = ln(g.props.triggerTarget || n);
    H.forEach(function(j) {
      j.addEventListener(v, T, I), h.push({
        node: j,
        eventType: v,
        handler: T,
        options: I
      });
    });
  }
  function Xt() {
    _() && (nt("touchstart", Cn, {
      passive: !0
    }), nt("touchend", ur, {
      passive: !0
    })), pg(g.props.trigger).forEach(function(v) {
      if (v !== "manual")
        switch (nt(v, Cn), v) {
          case "mouseenter":
            nt("mouseleave", ur);
            break;
          case "focus":
            nt(Tg ? "focusout" : "blur", On);
            break;
          case "focusin":
            nt("focusout", On);
            break;
        }
    });
  }
  function ar() {
    h.forEach(function(v) {
      var T = v.node, I = v.eventType, H = v.handler, j = v.options;
      T.removeEventListener(I, H, j);
    }), h = [];
  }
  function Cn(v) {
    var T, I = !1;
    if (!(!g.state.isEnabled || Mn(v) || l)) {
      var H = ((T = u) == null ? void 0 : T.type) === "focus";
      u = v, m = v.currentTarget, Le(), !g.state.isVisible && bg(v) && Tr.forEach(function(j) {
        return j(v);
      }), v.type === "click" && (g.props.trigger.indexOf("mouseenter") < 0 || o) && g.props.hideOnClick !== !1 && g.state.isVisible ? I = !0 : Tn(v), v.type === "click" && (o = !I), I && !H && Ot(v);
    }
  }
  function cr(v) {
    var T = v.target, I = K().contains(T) || x.contains(T);
    if (!(v.type === "mousemove" && I)) {
      var H = rt().concat(x).map(function(j) {
        var le, Se = j._tippy, Zt = (le = Se.popperInstance) == null ? void 0 : le.state;
        return Zt ? {
          popperRect: j.getBoundingClientRect(),
          popperState: Zt,
          props: t
        } : null;
      }).filter(Boolean);
      wg(H, v) && (St(), Ot(v));
    }
  }
  function ur(v) {
    var T = Mn(v) || g.props.trigger.indexOf("click") >= 0 && o;
    if (!T) {
      if (g.props.interactive) {
        g.hideWithInteractivity(v);
        return;
      }
      Ot(v);
    }
  }
  function On(v) {
    g.props.trigger.indexOf("focusin") < 0 && v.target !== K() || g.props.interactive && v.relatedTarget && x.contains(v.relatedTarget) || Ot(v);
  }
  function Mn(v) {
    return Ve.isTouch ? _() !== v.type.indexOf("touch") >= 0 : !1;
  }
  function fr() {
    dr();
    var v = g.props, T = v.popperOptions, I = v.placement, H = v.offset, j = v.getReferenceClientRect, le = v.moveTransition, Se = W() ? ds(x).arrow : null, Zt = j ? {
      getBoundingClientRect: j,
      contextElement: j.contextElement || K()
    } : n, qs = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(yr) {
        var Qt = yr.state;
        if (W()) {
          var Gc = S(), pi = Gc.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(br) {
            br === "placement" ? pi.setAttribute("data-placement", Qt.placement) : Qt.attributes.popper["data-popper-" + br] ? pi.setAttribute("data-" + br, "") : pi.removeAttribute("data-" + br);
          }), Qt.attributes.popper = {};
        }
      }
    }, Mt = [{
      name: "offset",
      options: {
        offset: H
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !le
      }
    }, qs];
    W() && Se && Mt.push({
      name: "arrow",
      options: {
        element: Se,
        padding: 3
      }
    }), Mt.push.apply(Mt, (T == null ? void 0 : T.modifiers) || []), g.popperInstance = cg(Zt, x, Object.assign({}, T, {
      placement: I,
      onFirstUpdate: d,
      modifiers: Mt
    }));
  }
  function dr() {
    g.popperInstance && (g.popperInstance.destroy(), g.popperInstance = null);
  }
  function Ge() {
    var v = g.props.appendTo, T, I = K();
    g.props.interactive && v === xc || v === "parent" ? T = I.parentNode : T = kc(v, [I]), T.contains(x) || T.appendChild(x), g.state.isMounted = !0, fr(), process.env.NODE_ENV !== "production" && Ze(g.props.interactive && v === xe.appendTo && I.nextElementSibling !== x, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", `

`, "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", `

`, "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", `

`, "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
  }
  function rt() {
    return Yr(x.querySelectorAll("[data-tippy-root]"));
  }
  function Tn(v) {
    g.clearDelayTimeouts(), v && z("onTrigger", [g, v]), Ae();
    var T = D(!0), I = $(), H = I[0], j = I[1];
    Ve.isTouch && H === "hold" && j && (T = j), T ? r = setTimeout(function() {
      g.show();
    }, T) : g.show();
  }
  function Ot(v) {
    if (g.clearDelayTimeouts(), z("onUntrigger", [g, v]), !g.state.isVisible) {
      Je();
      return;
    }
    if (!(g.props.trigger.indexOf("mouseenter") >= 0 && g.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(v.type) >= 0 && o)) {
      var T = D(!1);
      T ? i = setTimeout(function() {
        g.state.isVisible && g.hide();
      }, T) : s = requestAnimationFrame(function() {
        g.hide();
      });
    }
  }
  function En() {
    g.state.isEnabled = !0;
  }
  function hr() {
    g.hide(), g.state.isEnabled = !1;
  }
  function pr() {
    clearTimeout(r), clearTimeout(i), cancelAnimationFrame(s);
  }
  function mr(v) {
    if (process.env.NODE_ENV !== "production" && Ze(g.state.isDestroyed, rn("setProps")), !g.state.isDestroyed) {
      z("onBeforeUpdate", [g, v]), ar();
      var T = g.props, I = yl(n, Object.assign({}, T, dl(v), {
        ignoreAttributes: !0
      }));
      g.props = I, Xt(), T.interactiveDebounce !== I.interactiveDebounce && (St(), p = ul(cr, I.interactiveDebounce)), T.triggerTarget && !I.triggerTarget ? ln(T.triggerTarget).forEach(function(H) {
        H.removeAttribute("aria-expanded");
      }) : I.triggerTarget && n.removeAttribute("aria-expanded"), Le(), P(), R && R(T, I), g.popperInstance && (fr(), rt().forEach(function(H) {
        requestAnimationFrame(H._tippy.popperInstance.forceUpdate);
      })), z("onAfterUpdate", [g, v]);
    }
  }
  function gr(v) {
    g.setProps({
      content: v
    });
  }
  function Wc() {
    process.env.NODE_ENV !== "production" && Ze(g.state.isDestroyed, rn("show"));
    var v = g.state.isVisible, T = g.state.isDestroyed, I = !g.state.isEnabled, H = Ve.isTouch && !g.props.touch, j = Pi(g.props.duration, 0, xe.duration);
    if (!(v || T || I || H) && !K().hasAttribute("disabled") && (z("onShow", [g], !1), g.props.onShow(g) !== !1)) {
      if (g.state.isVisible = !0, W() && (x.style.visibility = "visible"), P(), Ae(), g.state.isMounted || (x.style.transition = "none"), W()) {
        var le = S(), Se = le.box, Zt = le.content;
        Bi([Se, Zt], 0);
      }
      d = function() {
        var Mt;
        if (!(!g.state.isVisible || c)) {
          if (c = !0, x.offsetHeight, x.style.transition = g.props.moveTransition, W() && g.props.animation) {
            var hi = S(), yr = hi.box, Qt = hi.content;
            Bi([yr, Qt], j), hl([yr, Qt], "visible");
          }
          G(), Le(), fl(zi, g), (Mt = g.popperInstance) == null || Mt.forceUpdate(), z("onMount", [g]), g.props.animation && W() && Ue(j, function() {
            g.state.isShown = !0, z("onShown", [g]);
          });
        }
      }, Ge();
    }
  }
  function Kc() {
    process.env.NODE_ENV !== "production" && Ze(g.state.isDestroyed, rn("hide"));
    var v = !g.state.isVisible, T = g.state.isDestroyed, I = !g.state.isEnabled, H = Pi(g.props.duration, 1, xe.duration);
    if (!(v || T || I) && (z("onHide", [g], !1), g.props.onHide(g) !== !1)) {
      if (g.state.isVisible = !1, g.state.isShown = !1, c = !1, o = !1, W() && (x.style.visibility = "hidden"), St(), Je(), P(!0), W()) {
        var j = S(), le = j.box, Se = j.content;
        g.props.animation && (Bi([le, Se], H), hl([le, Se], "hidden"));
      }
      G(), Le(), g.props.animation ? W() && Gt(H, g.unmount) : g.unmount();
    }
  }
  function qc(v) {
    process.env.NODE_ENV !== "production" && Ze(g.state.isDestroyed, rn("hideWithInteractivity")), ee().addEventListener("mousemove", p), fl(Tr, p), p(v);
  }
  function Jc() {
    process.env.NODE_ENV !== "production" && Ze(g.state.isDestroyed, rn("unmount")), g.state.isVisible && g.hide(), g.state.isMounted && (dr(), rt().forEach(function(v) {
      v._tippy.unmount();
    }), x.parentNode && x.parentNode.removeChild(x), zi = zi.filter(function(v) {
      return v !== g;
    }), g.state.isMounted = !1, z("onHidden", [g]));
  }
  function Uc() {
    process.env.NODE_ENV !== "production" && Ze(g.state.isDestroyed, rn("destroy")), !g.state.isDestroyed && (g.clearDelayTimeouts(), g.unmount(), ar(), delete n._tippy, g.state.isDestroyed = !0, z("onDestroy", [g]));
  }
}
function yt(n, e) {
  e === void 0 && (e = {});
  var t = xe.plugins.concat(e.plugins || []);
  process.env.NODE_ENV !== "production" && (Dg(n), Mc(e, t)), Og();
  var r = Object.assign({}, e, {
    plugins: t
  }), i = xg(n);
  if (process.env.NODE_ENV !== "production") {
    var s = Xn(r.content), o = i.length > 1;
    Ze(s && o, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", `

`, "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", `

`, `1) content: element.innerHTML
`, "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var l = i.reduce(function(a, c) {
    var u = c && zg(c, r);
    return u && a.push(u), a;
  }, []);
  return Xn(n) ? l[0] : l;
}
yt.defaultProps = xe;
yt.setDefaultProps = Rg;
yt.currentInput = Ve;
Object.assign({}, cc, {
  effect: function(e) {
    var t = e.state, r = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow);
  }
});
yt.setDefaultProps({
  render: Tc
});
class Fg {
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, updateDelay: s = 250, shouldShow: o }) {
    this.preventHide = !1, this.shouldShow = ({ view: l, state: a, from: c, to: u }) => {
      const { doc: f, selection: d } = a, { empty: h } = d, p = !f.textBetween(c, u).length && Ns(a.selection), m = this.element.contains(document.activeElement);
      return !(!(l.hasFocus() || m) || h || p || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.dragstartHandler = () => {
      this.hide();
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: l }) => {
      var a;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      l != null && l.relatedTarget && (!((a = this.element.parentNode) === null || a === void 0) && a.contains(l.relatedTarget)) || this.hide();
    }, this.tippyBlurHandler = (l) => {
      this.blurHandler({ event: l });
    }, this.handleDebouncedUpdate = (l, a) => {
      const c = !(a != null && a.selection.eq(l.state.selection)), u = !(a != null && a.doc.eq(l.state.doc));
      !c && !u || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(l, c, u, a);
      }, this.updateDelay));
    }, this.updateHandler = (l, a, c, u) => {
      var f, d, h;
      const { state: p, composing: m } = l, { selection: y } = p;
      if (m || !a && !c)
        return;
      this.createTooltip();
      const { ranges: w } = y, O = Math.min(...w.map((x) => x.$from.pos)), g = Math.max(...w.map((x) => x.$to.pos));
      if (!((f = this.shouldShow) === null || f === void 0 ? void 0 : f.call(this, {
        editor: this.editor,
        view: l,
        state: p,
        oldState: u,
        from: O,
        to: g
      }))) {
        this.hide();
        return;
      }
      (d = this.tippy) === null || d === void 0 || d.setProps({
        getReferenceClientRect: ((h = this.tippyOptions) === null || h === void 0 ? void 0 : h.getReferenceClientRect) || (() => {
          if (Dp(p.selection)) {
            let x = l.nodeDOM(O);
            const R = x.dataset.nodeViewWrapper ? x : x.querySelector("[data-node-view-wrapper]");
            if (R && (x = R.firstChild), x)
              return x.getBoundingClientRect();
          }
          return oc(l, O, g);
        })
      }), this.show();
    }, this.editor = e, this.element = t, this.view = r, this.updateDelay = s, o && (this.shouldShow = o), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, t = !!e.parentElement;
    this.tippy || !t || (this.tippy = yt(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "top",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, t) {
    const { state: r } = e, i = r.selection.from !== r.selection.to;
    if (this.updateDelay > 0 && i) {
      this.handleDebouncedUpdate(e, t);
      return;
    }
    const s = !(t != null && t.selection.eq(e.state.selection)), o = !(t != null && t.doc.eq(e.state.doc));
    this.updateHandler(e, s, o, t);
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, t;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (t = this.tippy) === null || t === void 0 || t.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const Ec = (n) => new ye({
  key: typeof n.pluginKey == "string" ? new De(n.pluginKey) : n.pluginKey,
  view: (e) => new Fg({ view: e, ...n })
});
ge.create({
  name: "bubbleMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "bubbleMenu",
      updateDelay: void 0,
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      Ec({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        updateDelay: this.options.updateDelay,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
class Vg {
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, shouldShow: s }) {
    this.preventHide = !1, this.shouldShow = ({ view: o, state: l }) => {
      const { selection: a } = l, { $anchor: c, empty: u } = a, f = c.depth === 1, d = c.parent.isTextblock && !c.parent.type.spec.code && !c.parent.textContent;
      return !(!o.hasFocus() || !u || !f || !d || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: o }) => {
      var l;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      o != null && o.relatedTarget && (!((l = this.element.parentNode) === null || l === void 0) && l.contains(o.relatedTarget)) || this.hide();
    }, this.tippyBlurHandler = (o) => {
      this.blurHandler({ event: o });
    }, this.editor = e, this.element = t, this.view = r, s && (this.shouldShow = s), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, t = !!e.parentElement;
    this.tippy || !t || (this.tippy = yt(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "right",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, t) {
    var r, i, s;
    const { state: o } = e, { doc: l, selection: a } = o, { from: c, to: u } = a;
    if (t && t.doc.eq(l) && t.selection.eq(a))
      return;
    if (this.createTooltip(), !((r = this.shouldShow) === null || r === void 0 ? void 0 : r.call(this, {
      editor: this.editor,
      view: e,
      state: o,
      oldState: t
    }))) {
      this.hide();
      return;
    }
    (i = this.tippy) === null || i === void 0 || i.setProps({
      getReferenceClientRect: ((s = this.tippyOptions) === null || s === void 0 ? void 0 : s.getReferenceClientRect) || (() => oc(e, c, u))
    }), this.show();
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, t;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (t = this.tippy) === null || t === void 0 || t.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const Nc = (n) => new ye({
  key: typeof n.pluginKey == "string" ? new De(n.pluginKey) : n.pluginKey,
  view: (e) => new Vg({ view: e, ...n })
});
ge.create({
  name: "floatingMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "floatingMenu",
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      Nc({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
er({
  name: "BubbleMenu",
  props: {
    pluginKey: {
      type: [String, Object],
      default: "bubbleMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    updateDelay: {
      type: Number,
      default: void 0
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(n, { slots: e }) {
    const t = ae(null);
    return hs(() => {
      const { updateDelay: r, editor: i, pluginKey: s, shouldShow: o, tippyOptions: l } = n;
      i.registerPlugin(Ec({
        updateDelay: r,
        editor: i,
        element: t.value,
        pluginKey: s,
        shouldShow: o,
        tippyOptions: l
      }));
    }), tr(() => {
      const { pluginKey: r, editor: i } = n;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return nr("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
function xl(n) {
  return tu((e, t) => ({
    get() {
      return e(), n;
    },
    set(r) {
      n = r, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          t();
        });
      });
    }
  }));
}
class $g extends im {
  constructor(e = {}) {
    return super(e), this.contentComponent = null, this.appContext = null, this.reactiveState = xl(this.view.state), this.reactiveExtensionStorage = xl(this.extensionStorage), this.on("beforeTransaction", ({ nextState: t }) => {
      this.reactiveState.value = t, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), eu(this);
  }
  get state() {
    return this.reactiveState ? this.reactiveState.value : this.view.state;
  }
  get storage() {
    return this.reactiveExtensionStorage ? this.reactiveExtensionStorage.value : super.storage;
  }
  /**
   * Register a ProseMirror plugin.
   */
  registerPlugin(e, t) {
    super.registerPlugin(e, t), this.reactiveState.value = this.view.state;
  }
  /**
   * Unregister a ProseMirror plugin.
   */
  unregisterPlugin(e) {
    super.unregisterPlugin(e), this.reactiveState.value = this.view.state;
  }
}
const jg = er({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(n) {
    const e = ae(), t = Yc();
    return Xc(() => {
      const r = n.editor;
      r && r.options.element && e.value && Zc(() => {
        if (!e.value || !r.options.element.firstChild)
          return;
        const i = be(e.value);
        e.value.append(...r.options.element.childNodes), r.contentComponent = t.ctx._, t && (r.appContext = {
          ...t.appContext,
          // Vue internally uses prototype chain to forward/shadow injects across the entire component chain
          // so don't use object spread operator or 'Object.assign' and just set `provides` as is on editor's appContext
          // @ts-expect-error forward instance's 'provides' into appContext
          provides: t.provides
        }), r.setOptions({
          element: i
        }), r.createNodeViews();
      });
    }), tr(() => {
      const r = n.editor;
      if (!r || (r.isDestroyed || r.view.setProps({
        nodeViews: {}
      }), r.contentComponent = null, r.appContext = null, !r.options.element.firstChild))
        return;
      const i = document.createElement("div");
      i.append(...r.options.element.childNodes), r.setOptions({
        element: i
      });
    }), { rootEl: e };
  },
  render() {
    return nr("div", {
      ref: (n) => {
        this.rootEl = n;
      }
    });
  }
});
er({
  name: "FloatingMenu",
  props: {
    pluginKey: {
      // TODO: TypeScript breaks :(
      // type: [String, Object as PropType<Exclude<FloatingMenuPluginProps['pluginKey'], string>>],
      type: null,
      default: "floatingMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(n, { slots: e }) {
    const t = ae(null);
    return hs(() => {
      const { pluginKey: r, editor: i, tippyOptions: s, shouldShow: o } = n;
      i.registerPlugin(Nc({
        pluginKey: r,
        editor: i,
        element: t.value,
        tippyOptions: s,
        shouldShow: o
      }));
    }), tr(() => {
      const { pluginKey: r, editor: i } = n;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return nr("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
er({
  name: "NodeViewContent",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  render() {
    return nr(this.as, {
      style: {
        whiteSpace: "pre-wrap"
      },
      "data-node-view-content": ""
    });
  }
});
er({
  name: "NodeViewWrapper",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  inject: ["onDragStart", "decorationClasses"],
  render() {
    var n, e;
    return nr(this.as, {
      // @ts-ignore
      class: this.decorationClasses,
      style: {
        whiteSpace: "normal"
      },
      "data-node-view-wrapper": "",
      // @ts-ignore (https://github.com/vuejs/vue-next/issues/3031)
      onDragstart: this.onDragStart
    }, (e = (n = this.$slots).default) === null || e === void 0 ? void 0 : e.call(n));
  }
});
const Hg = (n = {}) => {
  const e = Qc();
  return hs(() => {
    e.value = new $g(n);
  }), tr(() => {
    var t;
    (t = e.value) === null || t === void 0 || t.destroy();
  }), e;
}, _g = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, Wg = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, Kg = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, qg = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, Jg = Wt.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (n) => n.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight",
        getAttrs: (n) => /^(bold(er)?|[5-9]\d{2,})$/.test(n) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["strong", xt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: n }) => n.setMark(this.name),
      toggleBold: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetBold: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      Jr({
        find: _g,
        type: this.type
      }),
      Jr({
        find: Kg,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Ur({
        find: Wg,
        type: this.type
      }),
      Ur({
        find: qg,
        type: this.type
      })
    ];
  }
}), Ug = We.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", xt(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), kl = Wt.create({
  name: "textStyle",
  priority: 101,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (n) => n.hasAttribute("style") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["span", xt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ state: n, commands: e }) => {
        const t = As(n, this.type);
        return Object.entries(t).some(([, i]) => !!i) ? !0 : e.unsetMark(this.name);
      }
    };
  }
}), wl = /^\s*([-+*])\s$/, Gg = We.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["ul", xt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Ug.name, this.editor.getAttributes(kl.name)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let n = el({
      find: wl,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = el({
      find: wl,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(kl.name),
      editor: this.editor
    })), [
      n
    ];
  }
}), Yg = ge.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      mode: "textSize"
    };
  },
  addStorage() {
    return {
      characters: () => 0,
      words: () => 0
    };
  },
  onBeforeCreate() {
    this.storage.characters = (n) => {
      const e = (n == null ? void 0 : n.node) || this.editor.state.doc;
      return ((n == null ? void 0 : n.mode) || this.options.mode) === "textSize" ? e.textBetween(0, e.content.size, void 0, " ").length : e.nodeSize;
    }, this.storage.words = (n) => {
      const e = (n == null ? void 0 : n.node) || this.editor.state.doc;
      return e.textBetween(0, e.content.size, " ", " ").split(" ").filter((i) => i !== "").length;
    };
  },
  addProseMirrorPlugins() {
    return [
      new ye({
        key: new De("characterCount"),
        filterTransaction: (n, e) => {
          const t = this.options.limit;
          if (!n.docChanged || t === 0 || t === null || t === void 0)
            return !0;
          const r = this.storage.characters({ node: e.doc }), i = this.storage.characters({ node: n.doc });
          if (i <= t || r > t && i > t && i <= r)
            return !0;
          if (r > t && i > t && i > r || !n.getMeta("paste"))
            return !1;
          const o = n.selection.$head.pos, l = i - t, a = o - l, c = o;
          return n.deleteRange(a, c), !(this.storage.characters({ node: n.doc }) > t);
        }
      })
    ];
  }
}), Xg = We.create({
  name: "doc",
  topNode: !0,
  content: "block+"
}), Zg = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, Qg = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, ey = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, ty = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, ny = Wt.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (n) => n.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["em", xt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: n }) => n.setMark(this.name),
      toggleItalic: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetItalic: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      Jr({
        find: Zg,
        type: this.type
      }),
      Jr({
        find: ey,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Ur({
        find: Qg,
        type: this.type
      }),
      Ur({
        find: ty,
        type: this.type
      })
    ];
  }
});
var Xr = 200, Z = function() {
};
Z.prototype.append = function(e) {
  return e.length ? (e = Z.from(e), !this.length && e || e.length < Xr && this.leafAppend(e) || this.length < Xr && e.leafPrepend(this) || this.appendInner(e)) : this;
};
Z.prototype.prepend = function(e) {
  return e.length ? Z.from(e).append(this) : this;
};
Z.prototype.appendInner = function(e) {
  return new ry(this, e);
};
Z.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? Z.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
Z.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
Z.prototype.forEach = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length), t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0);
};
Z.prototype.map = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(s, o) {
    return i.push(e(s, o));
  }, t, r), i;
};
Z.from = function(e) {
  return e instanceof Z ? e : e && e.length ? new Dc(e) : Z.empty;
};
var Dc = /* @__PURE__ */ function(n) {
  function e(r) {
    n.call(this), this.values = r;
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, s) {
    return i == 0 && s == this.length ? this : new e(this.values.slice(i, s));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, s, o, l) {
    for (var a = s; a < o; a++)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, s, o, l) {
    for (var a = s - 1; a >= o; a--)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= Xr)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= Xr)
      return new e(i.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
}(Z);
Z.empty = new Dc([]);
var ry = /* @__PURE__ */ function(n) {
  function e(t, r) {
    n.call(this), this.left = t, this.right = r, this.length = t.length + r.length, this.depth = Math.max(t.depth, r.depth) + 1;
  }
  return n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, s, o) {
    var l = this.left.length;
    if (i < l && this.left.forEachInner(r, i, Math.min(s, l), o) === !1 || s > l && this.right.forEachInner(r, Math.max(i - l, 0), Math.min(this.length, s) - l, o + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, s, o) {
    var l = this.left.length;
    if (i > l && this.right.forEachInvertedInner(r, i - l, Math.max(s, l) - l, o + l) === !1 || s < l && this.left.forEachInvertedInner(r, Math.min(i, l), s, o) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var s = this.left.length;
    return i <= s ? this.left.slice(r, i) : r >= s ? this.right.slice(r - s, i - s) : this.left.slice(r, s).append(this.right.slice(0, i - s));
  }, e.prototype.leafAppend = function(r) {
    var i = this.right.leafAppend(r);
    if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function(r) {
    var i = this.left.leafPrepend(r);
    if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
}(Z);
const iy = 500;
class Re {
  constructor(e, t) {
    this.items = e, this.eventCount = t;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, t) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let i, s;
    t && (i = this.remapping(r, this.items.length), s = i.maps.length);
    let o = e.tr, l, a, c = [], u = [];
    return this.items.forEach((f, d) => {
      if (!f.step) {
        i || (i = this.remapping(r, d + 1), s = i.maps.length), s--, u.push(f);
        return;
      }
      if (i) {
        u.push(new Fe(f.map));
        let h = f.step.map(i.slice(s)), p;
        h && o.maybeStep(h).doc && (p = o.mapping.maps[o.mapping.maps.length - 1], c.push(new Fe(p, void 0, void 0, c.length + u.length))), s--, p && i.appendMap(p, s);
      } else
        o.maybeStep(f.step);
      if (f.selection)
        return l = i ? f.selection.map(i.slice(s)) : f.selection, a = new Re(this.items.slice(0, r).append(u.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: o, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, t, r, i) {
    let s = [], o = this.eventCount, l = this.items, a = !i && l.length ? l.get(l.length - 1) : null;
    for (let u = 0; u < e.steps.length; u++) {
      let f = e.steps[u].invert(e.docs[u]), d = new Fe(e.mapping.maps[u], f, t), h;
      (h = a && a.merge(d)) && (d = h, u ? s.pop() : l = l.slice(0, l.length - 1)), s.push(d), t && (o++, t = void 0), i || (a = d);
    }
    let c = o - r.depth;
    return c > oy && (l = sy(l, c), o -= c), new Re(l.append(s), o);
  }
  remapping(e, t) {
    let r = new un();
    return this.items.forEach((i, s) => {
      let o = i.mirrorOffset != null && s - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, o);
    }, e, t), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new Re(this.items.append(e.map((t) => new Fe(t))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - t), s = e.mapping, o = e.steps.length, l = this.eventCount;
    this.items.forEach((d) => {
      d.selection && l--;
    }, i);
    let a = t;
    this.items.forEach((d) => {
      let h = s.getMirror(--a);
      if (h == null)
        return;
      o = Math.min(o, h);
      let p = s.maps[h];
      if (d.step) {
        let m = e.steps[h].invert(e.docs[h]), y = d.selection && d.selection.map(s.slice(a + 1, h));
        y && l++, r.push(new Fe(p, m, y));
      } else
        r.push(new Fe(p));
    }, i);
    let c = [];
    for (let d = t; d < o; d++)
      c.push(new Fe(s.maps[d]));
    let u = this.items.slice(0, i).append(c).append(r), f = new Re(u, l);
    return f.emptyItemCount() > iy && (f = f.compress(this.items.length - r.length)), f;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let t = this.remapping(0, e), r = t.maps.length, i = [], s = 0;
    return this.items.forEach((o, l) => {
      if (l >= e)
        i.push(o), o.selection && s++;
      else if (o.step) {
        let a = o.step.map(t.slice(r)), c = a && a.getMap();
        if (r--, c && t.appendMap(c, r), a) {
          let u = o.selection && o.selection.map(t.slice(r));
          u && s++;
          let f = new Fe(c.invert(), a, u), d, h = i.length - 1;
          (d = i.length && i[h].merge(f)) ? i[h] = d : i.push(f);
        }
      } else o.map && r--;
    }, this.items.length, 0), new Re(Z.from(i.reverse()), s);
  }
}
Re.empty = new Re(Z.empty, 0);
function sy(n, e) {
  let t;
  return n.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return t = i, !1;
  }), n.slice(t);
}
class Fe {
  constructor(e, t, r, i) {
    this.map = e, this.step = t, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new Fe(t.getMap().invert(), t, this.selection);
    }
  }
}
class ot {
  constructor(e, t, r, i, s) {
    this.done = e, this.undone = t, this.prevRanges = r, this.prevTime = i, this.prevComposition = s;
  }
}
const oy = 20;
function ly(n, e, t, r) {
  let i = t.getMeta($t), s;
  if (i)
    return i.historyState;
  t.getMeta(uy) && (n = new ot(n.done, n.undone, null, 0, -1));
  let o = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return n;
  if (o && o.getMeta($t))
    return o.getMeta($t).redo ? new ot(n.done.addTransform(t, void 0, r, Ir(e)), n.undone, Sl(t.mapping.maps), n.prevTime, n.prevComposition) : new ot(n.done, n.undone.addTransform(t, void 0, r, Ir(e)), null, n.prevTime, n.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
    let l = t.getMeta("composition"), a = n.prevTime == 0 || !o && n.prevComposition != l && (n.prevTime < (t.time || 0) - r.newGroupDelay || !ay(t, n.prevRanges)), c = o ? Fi(n.prevRanges, t.mapping) : Sl(t.mapping.maps);
    return new ot(n.done.addTransform(t, a ? e.selection.getBookmark() : void 0, r, Ir(e)), Re.empty, c, t.time, l ?? n.prevComposition);
  } else return (s = t.getMeta("rebased")) ? new ot(n.done.rebased(t, s), n.undone.rebased(t, s), Fi(n.prevRanges, t.mapping), n.prevTime, n.prevComposition) : new ot(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), Fi(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
}
function ay(n, e) {
  if (!e)
    return !1;
  if (!n.docChanged)
    return !0;
  let t = !1;
  return n.mapping.maps[0].forEach((r, i) => {
    for (let s = 0; s < e.length; s += 2)
      r <= e[s + 1] && i >= e[s] && (t = !0);
  }), t;
}
function Sl(n) {
  let e = [];
  for (let t = n.length - 1; t >= 0 && e.length == 0; t--)
    n[t].forEach((r, i, s, o) => e.push(s, o));
  return e;
}
function Fi(n, e) {
  if (!n)
    return null;
  let t = [];
  for (let r = 0; r < n.length; r += 2) {
    let i = e.map(n[r], 1), s = e.map(n[r + 1], -1);
    i <= s && t.push(i, s);
  }
  return t;
}
function cy(n, e, t) {
  let r = Ir(e), i = $t.get(e).spec.config, s = (t ? n.undone : n.done).popEvent(e, r);
  if (!s)
    return null;
  let o = s.selection.resolve(s.transform.doc), l = (t ? n.done : n.undone).addTransform(s.transform, e.selection.getBookmark(), i, r), a = new ot(t ? l : s.remaining, t ? s.remaining : l, null, 0, -1);
  return s.transform.setSelection(o).setMeta($t, { redo: t, historyState: a });
}
let Vi = !1, Cl = null;
function Ir(n) {
  let e = n.plugins;
  if (Cl != e) {
    Vi = !1, Cl = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        Vi = !0;
        break;
      }
  }
  return Vi;
}
const $t = new De("history"), uy = new De("closeHistory");
function fy(n = {}) {
  return n = {
    depth: n.depth || 100,
    newGroupDelay: n.newGroupDelay || 500
  }, new ye({
    key: $t,
    state: {
      init() {
        return new ot(Re.empty, Re.empty, null, 0, -1);
      },
      apply(e, t, r) {
        return ly(t, r, e, n);
      }
    },
    config: n,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let r = t.inputType, i = r == "historyUndo" ? Ic : r == "historyRedo" ? Rc : null;
          return i ? (t.preventDefault(), i(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
function Ac(n, e) {
  return (t, r) => {
    let i = $t.getState(t);
    if (!i || (n ? i.undone : i.done).eventCount == 0)
      return !1;
    if (r) {
      let s = cy(i, t, n);
      s && r(e ? s.scrollIntoView() : s);
    }
    return !0;
  };
}
const Ic = Ac(!1, !0), Rc = Ac(!0, !0), dy = ge.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: n, dispatch: e }) => Ic(n, e),
      redo: () => ({ state: n, dispatch: e }) => Rc(n, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      fy(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), hy = We.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", xt(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), py = We.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["p", xt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: n }) => n.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), my = ge.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    return [
      new ye({
        key: new De("placeholder"),
        props: {
          decorations: ({ doc: n, selection: e }) => {
            const t = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: r } = e, i = [];
            if (!t)
              return null;
            const s = this.editor.isEmpty;
            return n.descendants((o, l) => {
              const a = r >= l && r <= l + o.nodeSize, c = !o.isLeaf && Rs(o);
              if ((a || !this.options.showOnlyCurrent) && c) {
                const u = [this.options.emptyNodeClass];
                s && u.push(this.options.emptyEditorClass);
                const f = ke.node(l, l + o.nodeSize, {
                  class: u.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: o,
                    pos: l,
                    hasAnchor: a
                  }) : this.options.placeholder
                });
                i.push(f);
              }
              return this.options.includeChildren;
            }), J.create(n, i);
          }
        }
      })
    ];
  }
}), gy = We.create({
  name: "text",
  group: "inline"
});
var ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pc(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var yy = "Expected a function", Bc = "__lodash_hash_undefined__", Lc = 1 / 0, by = "[object Function]", vy = "[object GeneratorFunction]", xy = "[object Symbol]", ky = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, wy = /^\w*$/, Sy = /^\./, Cy = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Oy = /[\\^$.*+?()[\]{}|]/g, My = /\\(\\)?/g, Ty = /^\[object .+?Constructor\]$/, Ey = typeof ft == "object" && ft && ft.Object === Object && ft, Ny = typeof self == "object" && self && self.Object === Object && self, Hs = Ey || Ny || Function("return this")();
function Dy(n, e) {
  return n == null ? void 0 : n[e];
}
function Ay(n) {
  var e = !1;
  if (n != null && typeof n.toString != "function")
    try {
      e = !!(n + "");
    } catch {
    }
  return e;
}
var Iy = Array.prototype, Ry = Function.prototype, zc = Object.prototype, $i = Hs["__core-js_shared__"], Ol = function() {
  var n = /[^.]+$/.exec($i && $i.keys && $i.keys.IE_PROTO || "");
  return n ? "Symbol(src)_1." + n : "";
}(), Fc = Ry.toString, _s = zc.hasOwnProperty, Vc = zc.toString, Py = RegExp(
  "^" + Fc.call(_s).replace(Oy, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
), Ml = Hs.Symbol, By = Iy.splice, Ly = $c(Hs, "Map"), Qn = $c(Object, "create"), Tl = Ml ? Ml.prototype : void 0, El = Tl ? Tl.toString : void 0;
function qt(n) {
  var e = -1, t = n ? n.length : 0;
  for (this.clear(); ++e < t; ) {
    var r = n[e];
    this.set(r[0], r[1]);
  }
}
function zy() {
  this.__data__ = Qn ? Qn(null) : {};
}
function Fy(n) {
  return this.has(n) && delete this.__data__[n];
}
function Vy(n) {
  var e = this.__data__;
  if (Qn) {
    var t = e[n];
    return t === Bc ? void 0 : t;
  }
  return _s.call(e, n) ? e[n] : void 0;
}
function $y(n) {
  var e = this.__data__;
  return Qn ? e[n] !== void 0 : _s.call(e, n);
}
function jy(n, e) {
  var t = this.__data__;
  return t[n] = Qn && e === void 0 ? Bc : e, this;
}
qt.prototype.clear = zy;
qt.prototype.delete = Fy;
qt.prototype.get = Vy;
qt.prototype.has = $y;
qt.prototype.set = jy;
function Sn(n) {
  var e = -1, t = n ? n.length : 0;
  for (this.clear(); ++e < t; ) {
    var r = n[e];
    this.set(r[0], r[1]);
  }
}
function Hy() {
  this.__data__ = [];
}
function _y(n) {
  var e = this.__data__, t = fi(e, n);
  if (t < 0)
    return !1;
  var r = e.length - 1;
  return t == r ? e.pop() : By.call(e, t, 1), !0;
}
function Wy(n) {
  var e = this.__data__, t = fi(e, n);
  return t < 0 ? void 0 : e[t][1];
}
function Ky(n) {
  return fi(this.__data__, n) > -1;
}
function qy(n, e) {
  var t = this.__data__, r = fi(t, n);
  return r < 0 ? t.push([n, e]) : t[r][1] = e, this;
}
Sn.prototype.clear = Hy;
Sn.prototype.delete = _y;
Sn.prototype.get = Wy;
Sn.prototype.has = Ky;
Sn.prototype.set = qy;
function Ut(n) {
  var e = -1, t = n ? n.length : 0;
  for (this.clear(); ++e < t; ) {
    var r = n[e];
    this.set(r[0], r[1]);
  }
}
function Jy() {
  this.__data__ = {
    hash: new qt(),
    map: new (Ly || Sn)(),
    string: new qt()
  };
}
function Uy(n) {
  return di(this, n).delete(n);
}
function Gy(n) {
  return di(this, n).get(n);
}
function Yy(n) {
  return di(this, n).has(n);
}
function Xy(n, e) {
  return di(this, n).set(n, e), this;
}
Ut.prototype.clear = Jy;
Ut.prototype.delete = Uy;
Ut.prototype.get = Gy;
Ut.prototype.has = Yy;
Ut.prototype.set = Xy;
function fi(n, e) {
  for (var t = n.length; t--; )
    if (ab(n[t][0], e))
      return t;
  return -1;
}
function Zy(n, e) {
  e = nb(e, n) ? [e] : tb(e);
  for (var t = 0, r = e.length; n != null && t < r; )
    n = n[ob(e[t++])];
  return t && t == r ? n : void 0;
}
function Qy(n) {
  if (!Hc(n) || ib(n))
    return !1;
  var e = cb(n) || Ay(n) ? Py : Ty;
  return e.test(lb(n));
}
function eb(n) {
  if (typeof n == "string")
    return n;
  if (Ks(n))
    return El ? El.call(n) : "";
  var e = n + "";
  return e == "0" && 1 / n == -Lc ? "-0" : e;
}
function tb(n) {
  return jc(n) ? n : sb(n);
}
function di(n, e) {
  var t = n.__data__;
  return rb(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
}
function $c(n, e) {
  var t = Dy(n, e);
  return Qy(t) ? t : void 0;
}
function nb(n, e) {
  if (jc(n))
    return !1;
  var t = typeof n;
  return t == "number" || t == "symbol" || t == "boolean" || n == null || Ks(n) ? !0 : wy.test(n) || !ky.test(n) || e != null && n in Object(e);
}
function rb(n) {
  var e = typeof n;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? n !== "__proto__" : n === null;
}
function ib(n) {
  return !!Ol && Ol in n;
}
var sb = Ws(function(n) {
  n = fb(n);
  var e = [];
  return Sy.test(n) && e.push(""), n.replace(Cy, function(t, r, i, s) {
    e.push(i ? s.replace(My, "$1") : r || t);
  }), e;
});
function ob(n) {
  if (typeof n == "string" || Ks(n))
    return n;
  var e = n + "";
  return e == "0" && 1 / n == -Lc ? "-0" : e;
}
function lb(n) {
  if (n != null) {
    try {
      return Fc.call(n);
    } catch {
    }
    try {
      return n + "";
    } catch {
    }
  }
  return "";
}
function Ws(n, e) {
  if (typeof n != "function" || e && typeof e != "function")
    throw new TypeError(yy);
  var t = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], s = t.cache;
    if (s.has(i))
      return s.get(i);
    var o = n.apply(this, r);
    return t.cache = s.set(i, o), o;
  };
  return t.cache = new (Ws.Cache || Ut)(), t;
}
Ws.Cache = Ut;
function ab(n, e) {
  return n === e || n !== n && e !== e;
}
var jc = Array.isArray;
function cb(n) {
  var e = Hc(n) ? Vc.call(n) : "";
  return e == by || e == vy;
}
function Hc(n) {
  var e = typeof n;
  return !!n && (e == "object" || e == "function");
}
function ub(n) {
  return !!n && typeof n == "object";
}
function Ks(n) {
  return typeof n == "symbol" || ub(n) && Vc.call(n) == xy;
}
function fb(n) {
  return n == null ? "" : eb(n);
}
function db(n, e, t) {
  var r = n == null ? void 0 : Zy(n, e);
  return r === void 0 ? t : r;
}
var hb = db;
const pb = /* @__PURE__ */ Pc(hb);
function mb(n) {
  const t = new RegExp(/[!@#$^%^&*(),.?":{}|<>]/g).test(n.value[0]);
  return n.isWord && !t;
}
function Nl(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Dl(n, e, t, r) {
  const i = r(), s = i.map((u) => mb(u) ? `\\b(${Nl(u.value)})\\b` : `(${Nl(u.value)})`).join("|"), o = new RegExp(s, "ig");
  let l = [], a = { active: !1 };
  if (i.length < 1)
    return { highlights: l, on: a };
  function c(u, f, d) {
    const h = i.find((p) => p.value === d);
    if (h !== void 0) {
      const p = h.overrideClass;
      if (e && e.pos >= u && e.pos <= f) {
        const m = pb(
          t,
          "on.decorationId",
          (Math.random() + 1).toString(36).substr(2, 5)
        );
        l.push({ from: u, to: f, text: d, decorationId: m, overrideClass: p }), a.active = !0, a.decorationId = m, a.range = { to: f, from: u }, a.query = d, a.text = d;
      } else
        l.push({ from: u, to: f, text: d, overrideClass: p });
    }
  }
  return n.descendants((u, f) => {
    if (u.isText) {
      const d = u.text.normalize("NFKC").replace(/&nbsp;/g, " ");
      let h;
      for (; h = o.exec(d); ) {
        const p = i.filter((b) => b.value === h[0]), m = f + h.index;
        let y = !1;
        p.forEach((b) => {
          b.length && b.offset >= 0 && (y = !0, m === b.offset && c(m, m + h[0].length, h[0]));
        }), y || c(m, m + h[0].length, h[0]);
      }
    }
  }), { highlights: l, on: a };
}
const gb = We.create({
  name: "Warning",
  addOptions() {
    return {
      getErrorWords: () => [],
      onChange: () => {
      },
      onEnter: () => {
      },
      onExit: () => {
      },
      onKeyDown: () => {
      },
      defaultClass: "underline-red"
    };
  },
  group: "inline*",
  inline: !0,
  atom: !1,
  selectable: !1,
  parseHTML() {
    return [
      {
        tag: "[data-mention-id]",
        getAttrs: (n) => {
          const e = n.getAttribute("data-mention-id"), t = n.innerText.split(this.options.matcher.char).join("");
          return { id: e, label: t };
        }
      }
    ];
  },
  addProseMirrorPlugins() {
    const n = this;
    return [
      // underline the words
      new ye({
        key: new De("warning"),
        appendTransaction: (e, t, r) => {
          const i = r.doc.content.size, s = r.selection.$from.pos, o = r.selection.$to.pos, l = r.tr;
          return l.selection.$from.pos = Math.min(i, s), l.selection.$to.pos = Math.min(i, o), l;
        },
        view() {
          return {
            update: (e, t) => {
              const r = this.key.getState(t).on, i = this.key.getState(e.state).on, s = r.active && i.active && r.range.from !== i.range.from, o = !r.active && i.active, l = r.active && !i.active, a = !o && !l && r.query !== i.query, c = o || s, u = a, f = l || s;
              if (!c && !u && !f)
                return;
              const d = f && !u ? r : i, h = document.querySelector(
                '[data-decoration-id="' + d.decorationId + '"]'
              ), p = h ? {
                getBoundingClientRect() {
                  return h.getBoundingClientRect();
                },
                clientWidth: h.clientWidth,
                clientHeight: h.clientHeight
              } : null, m = {
                view: e,
                range: d.range,
                text: d.text,
                decorationNode: h,
                virtualNode: p,
                command: function({ range: y, attrs: b }) {
                  const w = e.state.tr.replaceWith(
                    y.from,
                    y.to,
                    e.state.schema.text(b.label)
                  ), O = e.dispatch(w);
                  return setTimeout(() => {
                    document.getElementsByClassName("editor__content")[0].normalize();
                  }), O;
                }
              };
              f && n.options.onExit(m), u && n.options.onChange(m), c && n.options.onEnter(m);
            }
          };
        },
        state: {
          init(e, { doc: t }) {
            return Dl(t, null, {}, n.options.getErrorWords);
          },
          apply(e, t) {
            const { selection: r } = e;
            Object.assign({}, t);
            const i = r.$from;
            return Dl(e.doc, i, t, n.options.getErrorWords);
          }
        },
        props: {
          handleKeyDown(e, t) {
            const { active: r, range: i } = this.getState(e.state).on;
            return r ? n.options.onKeyDown({ event: t }) : !1;
          },
          decorations(e) {
            let t = [];
            if (this.getState(e).highlights.forEach((r) => {
              t.push(
                ke.inline(r.from, r.to, {
                  class: r.overrideClass ? r.overrideClass : n.options.defaultClass,
                  "data-decoration-id": r.decorationId ? r.decorationId : void 0
                })
              );
            }), t.length > 0)
              return J.create(e.doc, t);
          }
        }
      })
    ];
  }
});
var yb = 1 / 0, bb = "[object Symbol]", _c = /&(?:amp|lt|gt|quot|#39|#96);/g, vb = RegExp(_c.source), xb = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&#96;": "`"
}, kb = typeof ft == "object" && ft && ft.Object === Object && ft, wb = typeof self == "object" && self && self.Object === Object && self, Sb = kb || wb || Function("return this")();
function Cb(n) {
  return function(e) {
    return n == null ? void 0 : n[e];
  };
}
var Ob = Cb(xb), Mb = Object.prototype, Tb = Mb.toString, Al = Sb.Symbol, Il = Al ? Al.prototype : void 0, Rl = Il ? Il.toString : void 0;
function Eb(n) {
  if (typeof n == "string")
    return n;
  if (Db(n))
    return Rl ? Rl.call(n) : "";
  var e = n + "";
  return e == "0" && 1 / n == -yb ? "-0" : e;
}
function Nb(n) {
  return !!n && typeof n == "object";
}
function Db(n) {
  return typeof n == "symbol" || Nb(n) && Tb.call(n) == bb;
}
function Ab(n) {
  return n == null ? "" : Eb(n);
}
function Ib(n) {
  return n = Ab(n), n && vb.test(n) ? n.replace(_c, Ob) : n;
}
var Rb = Ib;
const Pb = /* @__PURE__ */ Pc(Rb), Bb = {
  class: "tiptap-editor",
  tabindex: "0"
}, Lb = ["aria-controls"], zb = ["aria-pressed"], Fb = /* @__PURE__ */ de("b", null, "B", -1), Vb = [
  Fb
], $b = ["aria-pressed"], jb = /* @__PURE__ */ de("i", null, "I", -1), Hb = [
  jb
], _b = /* @__PURE__ */ de("svg", {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "list-ul",
  class: "svg-inline--fa fa-list-ul fa-w-16",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, [
  /* @__PURE__ */ de("path", {
    fill: "currentColor",
    d: "M96 96c0 26.51-21.49 48-48 48S0 122.51 0 96s21.49-48 48-48 48 21.49 48 48zM48 208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm0 160c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm96-236h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
  })
], -1), Wb = [
  _b
], Kb = {
  key: 0,
  class: "character-count"
}, qb = /* @__PURE__ */ de("circle", {
  r: "10",
  cx: "10",
  cy: "10",
  class: "character-count__outer-circle"
}, null, -1), Jb = ["stroke-dasharray"], Ub = /* @__PURE__ */ de("circle", {
  r: "6",
  cx: "10",
  cy: "10",
  class: "character-count__inner-circle"
}, null, -1), Gb = {
  class: "character-count__text",
  "aria-live": "polite"
}, Yb = ["onClick"], Qb = {
  __name: "tiptap-editor",
  props: {
    height: { type: String, default: "300px" },
    id: { type: String, default: null },
    value: { type: String, default: "" },
    warnings: { type: Array, default: () => [] },
    maxCharacterCount: { type: Number, default: null },
    placeholder: { type: String, default: "write your content here..." },
    showMenu: { type: Boolean, default: !0 }
  },
  emits: ["update:value", "new-character-count"],
  setup(n, { emit: e }) {
    const t = e, r = n, i = ae(r.value), s = Hg({
      content: r.value,
      parseOptions: { preserveWhitespace: "full" },
      onCreate: ({ editor: S }) => {
        p.value = S.storage.characterCount.characters();
      },
      onUpdate: ({ getJSON: S, getHTML: D, editor: P }) => {
        p.value = P.storage.characterCount.characters(), i.value = P.getHTML(), t("update:value", i.value), r.warnings.forEach((z) => {
          if (z.length && z.offset && P.state.selection.head - 1 <= z.offset) {
            let G = p.value - y.value;
            G += E(P), z.offset += G;
          }
        }), y.value = p.value, b.value = P.getHTML(), P.commands.focus();
      },
      extensions: [
        Jg,
        Gg,
        Yg.configure({ limit: r.maxCharacterCount }),
        Xg,
        dy,
        ny,
        hy,
        py,
        my.configure({ placeholder: r.placeholder }),
        gy,
        gb.configure({
          getErrorWords: x,
          onEnter: ({ range: S, command: D, virtualNode: P, text: z }) => {
            o.value = h.value.find((G) => G.value === z), l.value = o.value.options || [], a.value = 0, u.value = S, _(P), c.value = D;
          },
          onChange: ({ range: S, virtualNode: D, text: P }) => {
            o.value = h.value.find((z) => z.value === P), l.value = o.value.options || [], a.value = 0, u.value = S, _(D);
          },
          onExit: () => {
            a.value = 0, l.value = null, u.value = null, W();
          },
          onKeyDown: ({ event: S }) => S.keyCode === 38 && l.value !== null ? (R(), !0) : S.keyCode === 40 && l !== null ? (L(), !0) : S.keyCode === 13 ? N() : S.keyCode === 27 ? (a.value = 0, u.value = null, l.value = null, W(), !0) : !1
        })
      ]
    }), o = ae(null), l = ae(null), a = ae(0), c = ae(() => {
    }), u = ae(null), f = ae(null), d = ae(null);
    nu(
      () => r.warnings,
      (S, D) => {
        s && (r.warnings.forEach((P) => {
          P.length && P.offset >= 0 && (P.offset += g(P));
        }), m.value = p.value);
      }
    ), yt.setDefaultProps({
      content: d.value,
      trigger: "mouseenter",
      interactive: !0,
      theme: "tiptap",
      placement: "top-start",
      inertia: !0,
      duration: [400, 200],
      showOnCreate: !0,
      arrow: !0,
      hideOnClick: !1
    }), r.warnings.forEach((S) => {
      S.length && S.offset >= 0 && (S.offset += g(S));
    });
    const h = mi(() => r.warnings.length < 1 ? [] : r.warnings.map((S) => {
      const D = S.isWord === void 0 ? !0 : S.isWord;
      return {
        overrideClass: S.overrideClass,
        isWord: D,
        value: D ? S.value : Pb(S.value),
        message: S.message,
        offset: S.offset,
        length: S.length,
        options: (S.options || []).map((P, z) => ({ value: P, id: z }))
      };
    })), p = ae(0), m = ae(p.value), y = ae(p.value), b = ae(""), w = mi(
      () => p.value >= r.maxCharacterCount
    ), O = mi(
      () => Math.round(100 / r.maxCharacterCount * p.value)
    );
    function g(S) {
      const D = r.value.normalize("NFKC").replace(/&nbsp;/g, " ");
      for (; D.substr(S.offset, S.value.length) !== S.value && S.offset <= D.length; )
        S.offset++;
      const P = S.offset;
      let z = r.value.substr(0, S.offset);
      z = z.replace(/<p>|<\/p>|<li>|<ul>|<\/ul>|<\/li>|<div>|<\/div>/g, " ");
      const G = /<strong>|<\/strong>|<em>|<\/em>/g;
      return z = z.replace(G, ""), z.length - P;
    }
    function E(S) {
      const D = /<\/p><p>/g, P = (b.value.match(D) || []).length;
      return ((S.getHTML().match(D) || []).length - P) * 2;
    }
    function x() {
      return h.value.length < 1 ? [] : h.value.map((S) => ({
        value: S.value,
        overrideClass: S.overrideClass,
        isWord: S.isWord,
        offset: S.offset,
        length: S.length
      }));
    }
    function R() {
      optionsLength = l.value.length, a.value = (a.value + optionsLength - 1) % optionsLength;
    }
    function L() {
      a.value = (a.value + 1) % l.value.length;
    }
    function N() {
      if (l.value.length === 0)
        return !1;
      const S = l.value[a.value];
      return S && $(S), !0;
    }
    function $(S) {
      c.value({
        range: u.value,
        attrs: { id: S.id, label: S.value }
      });
    }
    function _(S) {
      if (!f.value && S) {
        const D = S.getBoundingClientRect();
        f.value = yt(document.body, {
          content: d.value,
          getReferenceClientRect: () => ({
            width: D.width,
            height: D.height,
            left: D.left,
            right: D.right,
            top: D.top,
            bottom: D.bottom
          })
        });
      }
    }
    function W() {
      f.value && (f.value.destroy(), f.value = null);
    }
    function K(S) {
      S.preventDefault();
      const D = S.target.previousSibling;
      D && D.focus !== void 0 && D.focus();
    }
    function ee(S) {
      S.preventDefault();
      const D = S.target.nextSibling;
      D && D.focus !== void 0 && D.focus();
    }
    return tr(() => {
      f.value && f.value.destroy();
    }), (S, D) => (Tt(), Et("div", null, [
      de("div", Bb, [
        n.showMenu && be(s) ? (Tt(), Et("div", {
          key: 0,
          class: "menubar",
          role: "toolbar",
          "aria-controls": n.id || null
        }, [
          de("button", {
            "aria-pressed": `${be(s).isActive("bold") ? "true" : "false"}`,
            class: Nn({ "is-active": be(s).isActive("bold") }),
            onKeyup: [
              en(K, ["left"]),
              en(ee, ["right"])
            ],
            onClick: D[0] || (D[0] = (P) => be(s).chain().focus().toggleBold().run()),
            "aria-label": "bold",
            value: "bold",
            type: "button"
          }, Vb, 42, zb),
          de("button", {
            "aria-pressed": `${be(s).isActive("italic") ? "true" : "false"}`,
            class: Nn({ "is-active": be(s).isActive("italic") }),
            onClick: D[1] || (D[1] = (P) => be(s).chain().focus().toggleItalic().run()),
            onKeyup: [
              en(K, ["left"]),
              en(ee, ["right"])
            ],
            value: "italic",
            type: "button"
          }, Hb, 42, $b),
          de("button", {
            onClick: D[2] || (D[2] = (P) => be(s).chain().focus().toggleBulletList().run()),
            class: Nn({ "is-active": be(s).isActive("bulletList") }),
            onKeyup: [
              en(K, ["left"]),
              en(ee, ["right"])
            ],
            "aria-label": "bullet list",
            value: "bulletlist",
            type: "button"
          }, Wb, 34),
          n.maxCharacterCount && be(s) ? (Tt(), Et("div", Kb, [
            (Tt(), Et("svg", {
              height: "20",
              width: "20",
              viewBox: "0 0 20 20",
              class: Nn(
                w.value ? "character-count__graph--warning" : "character-count__graph"
              )
            }, [
              qb,
              de("circle", {
                r: "5",
                cx: "10",
                cy: "10",
                fill: "transparent",
                stroke: "currentColor",
                "stroke-width": "10",
                "stroke-dasharray": `calc(${O.value}px * 31.4 / 100) 31.4`,
                transform: "rotate(-90) translate(-20)"
              }, null, 8, Jb),
              Ub
            ], 2)),
            de("div", Gb, vr(p.value) + " / " + vr(n.maxCharacterCount) + " characters ", 1)
          ])) : gi("", !0)
        ], 8, Lb)) : gi("", !0),
        ru(be(jg), {
          editor: be(s),
          style: iu({ height: n.height }),
          id: n.id || null,
          role: "textbox",
          class: "editor__content",
          "aria-label": "text area",
          tabindex: "-1"
        }, null, 8, ["editor", "style", "id"])
      ]),
      de("div", {
        class: "error-list",
        "v-show": !1,
        ref_key: "renderedErrors",
        ref: d
      }, [
        o.value ? (Tt(), Et(Js, { key: 0 }, [
          de("b", null, vr(o.value.message), 1),
          (Tt(!0), Et(Js, null, su(l.value, (P, z) => (Tt(), Et("div", {
            key: P.id,
            class: Nn(["error-list__item", { selected: a.value === z }]),
            onClick: (G) => $(P)
          }, vr(P.value), 11, Yb))), 128))
        ], 64)) : gi("", !0)
      ], 512)
    ]));
  }
};
export {
  Qb as default
};
