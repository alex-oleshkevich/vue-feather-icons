import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ClickIcon',
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
      "class": "icon icon-tabler icon-tabler-click"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "3",
        "y1": "12",
        "x2": "6",
        "y2": "12"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "3",
        "x2": "12",
        "y2": "6"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "7.8",
        "y1": "7.8",
        "x2": "5.6",
        "y2": "5.6"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "16.2",
        "y1": "7.8",
        "x2": "18.4",
        "y2": "5.6"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "7.8",
        "y1": "16.2",
        "x2": "5.6",
        "y2": "18.4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 12l9 3l-4 2l-2 4l-3 -9"
      }
    }), " "]);
  }

};