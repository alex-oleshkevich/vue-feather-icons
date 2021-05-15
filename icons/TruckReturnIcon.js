import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'TruckReturnIcon',
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
      "class": "icon icon-tabler icon-tabler-truck-return"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "7",
        "cy": "17",
        "r": "2"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "17",
        "cy": "17",
        "r": "2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M5 17h-2v-11a1 1 0 0 1 1 -1h9v6h-5l2 2m0 -4l-2 2"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "9",
        "y1": "17",
        "x2": "15",
        "y2": "17"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M13 6h5l3 5v6h-2"
      }
    }), " "]);
  }

};