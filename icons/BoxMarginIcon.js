import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'BoxMarginIcon',
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
      "class": "icon icon-tabler icon-tabler-box-margin"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8 8h8v8h-8z"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 4v.01"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8 4v.01"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 4v.01"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M16 4v.01"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M20 4v.01"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 20v.01"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8 20v.01"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 20v.01"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M16 20v.01"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M20 20v.01"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M20 16v.01"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M20 12v.01"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M20 8v.01"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 16v.01"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 12v.01"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 8v.01"
      }
    }), " "]);
  }

};