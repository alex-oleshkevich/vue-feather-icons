import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'BrandRedditIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-reddit"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 8l1 -5l6 1"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "19",
        "cy": "4",
        "r": "1"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "9",
        "cy": "13",
        "r": ".5",
        "fill": "currentColor"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "15",
        "cy": "13",
        "r": ".5",
        "fill": "currentColor"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5"
      }
    }), " "]);
  }

};