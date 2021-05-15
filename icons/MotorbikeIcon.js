import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'MotorbikeIcon',
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
      "class": "icon icon-tabler icon-tabler-motorbike",
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
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "5",
      "cy": "16",
      "r": "3"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "19",
      "cy": "16",
      "r": "3"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7.5 14h5l4 -4h-10.5m1.5 4l4 -4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M13 6h2l1.5 3l2 4"
    }, null), _createTextVNode(" ")]);
  }

};