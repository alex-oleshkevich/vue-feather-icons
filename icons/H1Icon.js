import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'H1Icon',
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
      "class": "icon icon-tabler icon-tabler-h-1"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M19 18v-8l-2 2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 6v12"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 6v12"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M11 18h2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M3 18h2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 12h8"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M3 6h2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M11 6h2"
      }
    }), " "]);
  }

};