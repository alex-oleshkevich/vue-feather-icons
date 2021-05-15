import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'WifiIcon',
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
      "class": "icon icon-tabler icon-tabler-wifi"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "18",
        "x2": "12.01",
        "y2": "18"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M9.172 15.172a4 4 0 0 1 5.656 0"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M6.343 12.343a8 8 0 0 1 11.314 0"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"
      }
    }), " "]);
  }

};