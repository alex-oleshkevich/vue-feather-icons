import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'BuildingStoreIcon',
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
      "class": "icon icon-tabler icon-tabler-building-store"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "3",
        "y1": "21",
        "x2": "21",
        "y2": "21"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "5",
        "y1": "21",
        "x2": "5",
        "y2": "10.85"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "19",
        "y1": "21",
        "x2": "19",
        "y2": "10.85"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"
      }
    }), " "]);
  }

};