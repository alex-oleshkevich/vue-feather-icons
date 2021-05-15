import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'DeviceCctvIcon',
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
      "class": "icon icon-tabler icon-tabler-device-cctv"
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
        "width": "18",
        "height": "4",
        "rx": "1"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "12",
        "cy": "14",
        "r": "4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M19 7v7a7 7 0 0 1 -14 0v-7"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "14",
        "x2": "12.01",
        "y2": "14"
      }
    }), " "]);
  }

};