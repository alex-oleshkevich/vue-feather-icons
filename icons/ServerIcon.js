import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'ServerIcon',
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
      "class": "icon icon-tabler icon-tabler-server"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "3",
        "y": "4",
        "width": "18",
        "height": "8",
        "rx": "3"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "3",
        "y": "12",
        "width": "18",
        "height": "8",
        "rx": "3"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "7",
        "y1": "8",
        "x2": "7",
        "y2": "8.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "7",
        "y1": "16",
        "x2": "7",
        "y2": "16.01"
      }
    }), " "]);
  }

};