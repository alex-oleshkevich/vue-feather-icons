import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'MoodTongueIcon',
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
      "class": "icon icon-tabler icon-tabler-mood-tongue"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "12",
        "cy": "12",
        "r": "9"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "9",
        "y1": "10",
        "x2": "9.01",
        "y2": "10"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "15",
        "y1": "10",
        "x2": "15.01",
        "y2": "10"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M10 14v2a2 2 0 0 0 4 0v-2m1.5 0h-7"
      }
    }), " "]);
  }

};