import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'LayoutKanbanIcon',
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
      "class": "icon icon-tabler icon-tabler-layout-kanban"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "4",
        "y1": "4",
        "x2": "10",
        "y2": "4"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "14",
        "y1": "4",
        "x2": "20",
        "y2": "4"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "4",
        "y": "8",
        "width": "6",
        "height": "12",
        "rx": "2"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "14",
        "y": "8",
        "width": "6",
        "height": "6",
        "rx": "2"
      }
    }), " "]);
  }

};