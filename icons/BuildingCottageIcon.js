import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'BuildingCottageIcon',
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
      "class": "icon icon-tabler icon-tabler-building-cottage"
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
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 21v-11l2.5 -4.5l5.5 -2.5l5.5 2.5l2.5 4.5v11"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "12",
        "cy": "9",
        "r": "2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M9 21v-5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v5"
      }
    }), " "]);
  }

};