import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'TemperaturePlusIcon',
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
      "class": "icon icon-tabler icon-tabler-temperature-plus"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "8",
        "y1": "9",
        "x2": "12",
        "y2": "9"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "16",
        "y1": "9",
        "x2": "22",
        "y2": "9"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "19",
        "y1": "6",
        "x2": "19",
        "y2": "12"
      }
    }), " "]);
  }

};