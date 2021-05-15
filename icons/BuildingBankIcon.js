import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'BuildingBankIcon',
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
      "class": "icon icon-tabler icon-tabler-building-bank"
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
    }), "   ", h("line", {
      "attrs": {
        "x1": "3",
        "y1": "10",
        "x2": "21",
        "y2": "10"
      }
    }), "   ", h("polyline", {
      "attrs": {
        "points": "5 6 12 3 19 6"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "4",
        "y1": "10",
        "x2": "4",
        "y2": "21"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "20",
        "y1": "10",
        "x2": "20",
        "y2": "21"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "8",
        "y1": "14",
        "x2": "8",
        "y2": "17"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "14",
        "x2": "12",
        "y2": "17"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "16",
        "y1": "14",
        "x2": "16",
        "y2": "17"
      }
    }), " "]);
  }

};