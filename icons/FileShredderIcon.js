import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'FileShredderIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,

  render(ctx) {
    const h = arguments[0];
    const size = parseInt(ctx.props.size) + 'px';
    const attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "stroke-width": "2",
        "stroke": "currentColor",
        "fill": "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "icon icon-tabler icon-tabler-file-shredder"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M14 3v4a1 1 0 0 0 1 1h4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "3",
        "y1": "12",
        "x2": "21",
        "y2": "12"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "6",
        "y1": "16",
        "x2": "6",
        "y2": "18"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "10",
        "y1": "16",
        "x2": "10",
        "y2": "22"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "14",
        "y1": "16",
        "x2": "14",
        "y2": "18"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "18",
        "y1": "16",
        "x2": "18",
        "y2": "20"
      }
    }), " "]);
  }

};