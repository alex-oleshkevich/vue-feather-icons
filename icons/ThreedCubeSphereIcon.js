import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'ThreedCubeSphereIcon',
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
      "class": "icon icon-tabler icon-tabler-3d-cube-sphere"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M6 17.6l-2 -1.1v-2.5"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 10v-2.5l2 -1.1"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M10 4.1l2 -1.1l2 1.1"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M18 6.4l2 1.1v2.5"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M20 14v2.5l-2 1.12"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M14 19.9l-2 1.1l-2 -1.1"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "12",
        "x2": "14",
        "y2": "10.9"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "18",
        "y1": "8.6",
        "x2": "20",
        "y2": "7.5"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "12",
        "x2": "12",
        "y2": "14.5"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "18.5",
        "x2": "12",
        "y2": "21"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 12l-2 -1.12"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "6",
        "y1": "8.6",
        "x2": "4",
        "y2": "7.5"
      }
    }), " "]);
  }

};