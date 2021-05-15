import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'ScooterElectricIcon',
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
      "class": "icon icon-tabler icon-tabler-scooter-electric"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "18",
        "cy": "17",
        "r": "2"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "6",
        "cy": "17",
        "r": "2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8 17h5a6 6 0 0 1 5 -5v-5a2 2 0 0 0 -2 -2h-1"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M10 4l-2 4h3l-2 4"
      }
    }), " "]);
  }

};