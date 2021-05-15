import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'BrandCodesandboxIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-codesandbox"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25z"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 12l4 -2.25l4 -2.25"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "12",
        "x2": "12",
        "y2": "21"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 12l-4 -2.25l-4 -2.25"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M20 12l-4 2v4.75"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 12l4 2l0 4.75"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8 5.25l4 2.25l4 -2.25"
      }
    }), " "]);
  }

};