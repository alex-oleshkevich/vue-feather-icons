import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'TrophyIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,

  render(ctx) {
    const size = parseInt(ctx.$props.size) + 'px';
    const attrs = ctx.$data.attrs || {};
    const ctxData = { ...ctx.$data,
      width: attrs.width || size,
      height: attrs.height || size
    };
    return _createVNode("svg", _mergeProps({
      "xmlns": "http://www.w3.org/2000/svg",
      "class": "icon icon-tabler icon-tabler-trophy",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24",
      "stroke-width": "2",
      "stroke": "currentColor",
      "fill": "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, ctxData), [_createTextVNode("   "), _createVNode("path", {
      "stroke": "none",
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "8",
      "y1": "21",
      "x2": "16",
      "y2": "21"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "17",
      "x2": "12",
      "y2": "21"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7",
      "y1": "4",
      "x2": "17",
      "y2": "4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M17 4v8a5 5 0 0 1 -10 0v-8"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "5",
      "cy": "9",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "19",
      "cy": "9",
      "r": "2"
    }, null), _createTextVNode(" ")]);
  }

};