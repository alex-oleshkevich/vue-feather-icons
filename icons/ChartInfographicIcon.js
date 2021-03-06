import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChartInfographicIcon',
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
      "class": "icon icon-tabler icon-tabler-chart-infographic"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "7",
        "cy": "7",
        "r": "4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M7 3v4h4"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "9",
        "y1": "17",
        "x2": "9",
        "y2": "21"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "17",
        "y1": "14",
        "x2": "17",
        "y2": "21"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "13",
        "y1": "13",
        "x2": "13",
        "y2": "21"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "21",
        "y1": "12",
        "x2": "21",
        "y2": "21"
      }
    }), " "]);
  }

};