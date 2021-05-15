import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'LineHeightIcon',
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
      "class": "icon icon-tabler icon-tabler-line-height"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("polyline", {
      "attrs": {
        "points": "3 8 6 5 9 8"
      }
    }), "   ", h("polyline", {
      "attrs": {
        "points": "3 16 6 19 9 16"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "6",
        "y1": "5",
        "x2": "6",
        "y2": "19"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "13",
        "y1": "6",
        "x2": "20",
        "y2": "6"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "13",
        "y1": "12",
        "x2": "20",
        "y2": "12"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "13",
        "y1": "18",
        "x2": "20",
        "y2": "18"
      }
    }), " "]);
  }

};