import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ZoomInIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,

  render(h, ctx) {
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
      "class": "icon icon-tabler icon-tabler-zoom-in"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "10",
        "cy": "10",
        "r": "7"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "7",
        "y1": "10",
        "x2": "13",
        "y2": "10"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "10",
        "y1": "7",
        "x2": "10",
        "y2": "13"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "21",
        "y1": "21",
        "x2": "15",
        "y2": "15"
      }
    }), " "]);
  }

};