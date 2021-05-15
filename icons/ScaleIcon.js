import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'ScaleIcon',
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
      "class": "icon icon-tabler icon-tabler-scale"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "7",
        "y1": "20",
        "x2": "17",
        "y2": "20"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M6 6l6 -1l6 1"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "3",
        "x2": "12",
        "y2": "20"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M9 12l-3 -6l-3 6a3 3 0 0 0 6 0"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M21 12l-3 -6l-3 6a3 3 0 0 0 6 0"
      }
    }), " "]);
  }

};