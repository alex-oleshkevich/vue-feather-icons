import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'LivePhotoIcon',
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
      "class": "icon icon-tabler icon-tabler-live-photo"
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
        "r": "1"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "12",
        "cy": "12",
        "r": "5"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "15.9",
        "y1": "20.11",
        "x2": "15.9",
        "y2": "20.12"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "19.04",
        "y1": "17.61",
        "x2": "19.04",
        "y2": "17.62"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "20.77",
        "y1": "14",
        "x2": "20.77",
        "y2": "14.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "20.77",
        "y1": "10",
        "x2": "20.77",
        "y2": "10.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "19.04",
        "y1": "6.39",
        "x2": "19.04",
        "y2": "6.4"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "15.9",
        "y1": "3.89",
        "x2": "15.9",
        "y2": "3.9"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "3",
        "x2": "12",
        "y2": "3.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "8.1",
        "y1": "3.89",
        "x2": "8.1",
        "y2": "3.9"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "4.96",
        "y1": "6.39",
        "x2": "4.96",
        "y2": "6.4"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "3.23",
        "y1": "10",
        "x2": "3.23",
        "y2": "10.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "3.23",
        "y1": "14",
        "x2": "3.23",
        "y2": "14.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "4.96",
        "y1": "17.61",
        "x2": "4.96",
        "y2": "17.62"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "8.1",
        "y1": "20.11",
        "x2": "8.1",
        "y2": "20.12"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "21",
        "x2": "12",
        "y2": "21.01"
      }
    }), " "]);
  }

};