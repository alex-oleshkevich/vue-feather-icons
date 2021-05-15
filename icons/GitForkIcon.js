import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'GitForkIcon',
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
      "class": "icon icon-tabler icon-tabler-git-fork"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "12",
        "cy": "18",
        "r": "2"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "7",
        "cy": "6",
        "r": "2"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "17",
        "cy": "6",
        "r": "2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "12",
        "x2": "12",
        "y2": "16"
      }
    }), " "]);
  }

};