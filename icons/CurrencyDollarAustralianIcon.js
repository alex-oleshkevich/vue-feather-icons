import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'CurrencyDollarAustralianIcon',
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
      "class": "icon icon-tabler icon-tabler-currency-dollar-australian"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M3 18l3.279 -11.476a0.75 .75 0 0 1 1.442 0l3.279 11.476"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M17 20v-2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M18 6v-2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4.5 14h5"
      }
    }), " "]);
  }

};