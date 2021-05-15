import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'ChartRadarIcon',
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
      "class": "icon icon-tabler icon-tabler-chart-radar"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 3l9.5 7l-3.5 11h-12l-3.5 -11z"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 7.5l5.5 4l-2.5 5.5h-6.5l-2 -5.5z"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M2.5 10l9.5 3l9.5 -3"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 3v10l6 8"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M6 21l6 -8"
      }
    }), " "]);
  }

};