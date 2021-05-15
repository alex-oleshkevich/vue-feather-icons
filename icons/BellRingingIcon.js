import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'BellRingingIcon',
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
      "class": "icon icon-tabler icon-tabler-bell-ringing"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M9 17v1a3 3 0 0 0 6 0v-1"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M3 6.727a11.05 11.05 0 0 1 2.792 -3.727"
      }
    }), " "]);
  }

};