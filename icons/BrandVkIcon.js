import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BrandVkIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-vk",
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
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10 6h2v12c-4.5 -1 -8 -6.5 -9 -12"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20 6c-1 2 -3 5 -5 6h-3"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20 18c-1 -2 -3 -5 -5 -6"
    }, null), _createTextVNode(" ")]);
  }

};