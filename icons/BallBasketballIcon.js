import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'BallBasketballIcon',
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
      "class": "icon icon-tabler icon-tabler-ball-basketball"
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
        "x1": "5.65",
        "y1": "5.65",
        "x2": "18.35",
        "y2": "18.35"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "5.65",
        "y1": "18.35",
        "x2": "18.35",
        "y2": "5.65"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 3a9 9 0 0 0 9 9"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M3 12a9 9 0 0 1 9 9"
      }
    }), " "]);
  }

};