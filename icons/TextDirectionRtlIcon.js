import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'TextDirectionRtlIcon',
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
      "class": "icon icon-tabler icon-tabler-text-direction-rtl"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M14 15v-11"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M10 15v-11"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M5 19h14"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M7 21l-2 -2l2 -2"
      }
    }), " "]);
  }

};