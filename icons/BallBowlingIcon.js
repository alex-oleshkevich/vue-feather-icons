import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'BallBowlingIcon',
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
      "class": "icon icon-tabler icon-tabler-ball-bowling"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "12",
        "cy": "12",
        "r": "9"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "11",
        "y1": "9",
        "x2": "11",
        "y2": "9.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "15",
        "y1": "8",
        "x2": "15",
        "y2": "8.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "14",
        "y1": "12",
        "x2": "14",
        "y2": "12.01"
      }
    }), " "]);
  }

};