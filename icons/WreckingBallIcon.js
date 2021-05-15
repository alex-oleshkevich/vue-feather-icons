import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'WreckingBallIcon',
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
      "class": "icon icon-tabler icon-tabler-wrecking-ball"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "19",
        "cy": "13",
        "r": "2"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "4",
        "cy": "17",
        "r": "2"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "13",
        "cy": "17",
        "r": "2"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "13",
        "y1": "19",
        "x2": "4",
        "y2": "19"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "4",
        "y1": "15",
        "x2": "13",
        "y2": "15"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8 12v-5h2a3 3 0 0 1 3 3v5"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M5 15v-2a1 1 0 0 1 1 -1h7"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M19 11v-7l-6 7"
      }
    }), " "]);
  }

};