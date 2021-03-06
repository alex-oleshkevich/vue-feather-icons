import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CompassIcon',
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
      "class": "icon icon-tabler icon-tabler-compass"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("polyline", {
      "attrs": {
        "points": "8 16 10 10 16 8 14 14 8 16"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "12",
        "cy": "12",
        "r": "9"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "3",
        "x2": "12",
        "y2": "5"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "19",
        "x2": "12",
        "y2": "21"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "3",
        "y1": "12",
        "x2": "5",
        "y2": "12"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "19",
        "y1": "12",
        "x2": "21",
        "y2": "12"
      }
    }), " "]);
  }

};