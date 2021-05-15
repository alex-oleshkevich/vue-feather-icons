import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'VectorIcon',
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
      "class": "icon icon-tabler icon-tabler-vector"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "3",
        "y": "3",
        "width": "4",
        "height": "4",
        "rx": "1"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "17",
        "y": "3",
        "width": "4",
        "height": "4",
        "rx": "1"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "17",
        "y": "17",
        "width": "4",
        "height": "4",
        "rx": "1"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "3",
        "y": "17",
        "width": "4",
        "height": "4",
        "rx": "1"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "5",
        "y1": "7",
        "x2": "5",
        "y2": "17"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "19",
        "y1": "7",
        "x2": "19",
        "y2": "17"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "7",
        "y1": "5",
        "x2": "17",
        "y2": "5"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "7",
        "y1": "19",
        "x2": "17",
        "y2": "19"
      }
    }), " "]);
  }

};