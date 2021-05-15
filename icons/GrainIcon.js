import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'GrainIcon',
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
      "class": "icon icon-tabler icon-tabler-grain"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "4.5",
        "cy": "9.5",
        "r": "1"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "9.5",
        "cy": "4.5",
        "r": "1"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "9.5",
        "cy": "14.5",
        "r": "1"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "4.5",
        "cy": "19.5",
        "r": "1"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "14.5",
        "cy": "9.5",
        "r": "1"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "19.5",
        "cy": "4.5",
        "r": "1"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "14.5",
        "cy": "19.5",
        "r": "1"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "19.5",
        "cy": "14.5",
        "r": "1"
      }
    }), " "]);
  }

};