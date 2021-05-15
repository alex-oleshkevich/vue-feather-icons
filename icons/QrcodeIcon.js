import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'QrcodeIcon',
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
      "class": "icon icon-tabler icon-tabler-qrcode",
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
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "4",
      "y": "4",
      "width": "6",
      "height": "6",
      "rx": "1"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7",
      "y1": "17",
      "x2": "7",
      "y2": "17.01"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "14",
      "y": "4",
      "width": "6",
      "height": "6",
      "rx": "1"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7",
      "y1": "7",
      "x2": "7",
      "y2": "7.01"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "4",
      "y": "14",
      "width": "6",
      "height": "6",
      "rx": "1"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "17",
      "y1": "7",
      "x2": "17",
      "y2": "7.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "14",
      "y1": "14",
      "x2": "17",
      "y2": "14"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "20",
      "y1": "14",
      "x2": "20",
      "y2": "14.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "14",
      "y1": "14",
      "x2": "14",
      "y2": "17"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "14",
      "y1": "20",
      "x2": "17",
      "y2": "20"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "17",
      "y1": "17",
      "x2": "20",
      "y2": "17"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "20",
      "y1": "17",
      "x2": "20",
      "y2": "20"
    }, null), _createTextVNode(" ")]);
  }

};