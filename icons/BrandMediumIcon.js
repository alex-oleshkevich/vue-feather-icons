import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'BrandMediumIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-medium"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "4",
        "y": "4",
        "width": "16",
        "height": "16",
        "rx": "2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8 9h1l3 3l3 -3h1"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "8",
        "y1": "15",
        "x2": "10",
        "y2": "15"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "14",
        "y1": "15",
        "x2": "16",
        "y2": "15"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "9",
        "y1": "9",
        "x2": "9",
        "y2": "15"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "15",
        "y1": "9",
        "x2": "15",
        "y2": "15"
      }
    }), " "]);
  }

};