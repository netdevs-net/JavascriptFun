document.addEventListener("DOMContentLoaded", function () {
  window.pageYOffset || document.documentElement.scrollTop;
  function e(e, t) {
    if (e) {
      "string" == typeof e
        ? (e = document.querySelectorAll(e))
        : e.tagName && (e = [e]);
      for (var n = 0; n < e.length; n++)
        (" " + e[n].className + " ").indexOf(" " + t + " ") < 0 &&
          (e[n].className += " " + t);
    }
  }
  function t(e, t) {
    if (e) {
      "string" == typeof e
        ? (e = document.querySelectorAll(e))
        : e.tagName && (e = [e]);
      for (
        var n = new RegExp("(^| )" + t + "($| )", "g"), o = 0;
        o < e.length;
        o++
      )
        e[o].className = e[o].className.replace(n, " ");
    }
  }
  if (
    ((window.onresize = function (e) {
      window.pageYOffset || document.documentElement.scrollTop;
    }),
    "querySelector" in document &&
      "addEventListener" in window &&
      Array.prototype.forEach)
  ) {
    var n = document.querySelectorAll(".scroll");
    [].forEach.call(n, function (o) {
      o.addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          var t = document.querySelector(".landing__section"),
            n = o.getAttribute("data-speed");
          t &&
            (function (e, t) {
              var n,
                o = window.pageYOffset,
                r = e.offsetTop - 40,
                i = (r - o) / (t / 16);
              0 <= i &&
                (n = function () {
                  var e = window.pageYOffset;
                  (r - i <= e ||
                    window.innerHeight + e >= document.body.offsetHeight) &&
                    clearInterval(s);
                });
              var s = setInterval(function () {
                window.scrollBy(0, i), n();
              }, 16);
            })(t, n || 700);
        },
        !1
      );
    });
  }
  if (
    (window.addEventListener("scroll", function () {
      document.body.contains(document.getElementById("navConverter")) &&
        ((window.pageYOffset || document.documentElement.scrollTop) >
        (function (e) {
          for (
            var t = 0, n = 0;
            e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

          )
            (t += e.offsetLeft - e.scrollLeft),
              (n += e.offsetTop - e.scrollTop),
              (e = e.offsetParent);
          return { top: n, left: t };
        })(document.getElementById("navConverter")).top -
          60
          ? t(document.querySelector(".navbar"), "navbar--extended")
          : e(document.querySelector(".navbar"), "navbar--extended"));
      document.body.contains(document.getElementById("scrollToNext")) &&
        (20 < (window.pageYOffset || document.documentElement.scrollTop)
          ? e(document.getElementById("scrollToNext"), "invisible")
          : t(document.getElementById("scrollToNext"), "invisible"));
    }),
    document.getElementsByClassName("nav__mobile") &&
      0 < document.getElementsByClassName("nav__mobile").length)
  ) {
    var o = document.getElementsByClassName("navbar__menu")[0].innerHTML;
    document.getElementsByClassName("nav__mobile")[0].innerHTML = o;
    responsiveNav(".nav__mobile", {
      animate: !0,
      transition: 284,
      label: "Menu",
      insert: "before",
      customToggle: "toggle",
      openPos: "relative",
      navClass: "nav__mobile",
    });
  } else e(document.querySelector(".navbar__menu"), "navbar__menu--noMob"), e(document.querySelector(".navbar__menu-mob"), "navbar__menu-mob--noMob");
}),
  (function (e) {
    if ("object" == typeof exports && "undefined" != typeof module)
      module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
      ("undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this
      ).flexibility = e();
    }
  })(function () {
    return (function i(s, a, c) {
      function l(n, e) {
        if (!a[n]) {
          if (!s[n]) {
            var t = "function" == typeof require && require;
            if (!e && t) return t(n, !0);
            if (f) return f(n, !0);
            var o = new Error("Cannot find module '" + n + "'");
            throw ((o.code = "MODULE_NOT_FOUND"), o);
          }
          var r = (a[n] = { exports: {} });
          s[n][0].call(
            r.exports,
            function (e) {
              var t = s[n][1][e];
              return l(t || e);
            },
            r,
            r.exports,
            i,
            s,
            a,
            c
          );
        }
        return a[n].exports;
      }
      for (
        var f = "function" == typeof require && require, e = 0;
        e < c.length;
        e++
      )
        l(c[e]);
      return l;
    })(
      {
        1: [
          function (e, t, n) {
            t.exports = function (e) {
              var t, n;
              e.lines.length < 2 || "stretch" === e.alignContent
                ? ((n = e.crossSpace / e.lines.length),
                  (t = 0),
                  e.lines.forEach(function (e) {
                    (e.crossStart = t), (e.cross += n), (t += e.cross);
                  }))
                : "flex-start" === e.alignContent
                ? ((t = 0),
                  e.lines.forEach(function (e) {
                    (e.crossStart = t), (t += e.cross);
                  }))
                : "flex-end" === e.alignContent
                ? ((t = e.crossSpace),
                  e.lines.forEach(function (e) {
                    (e.crossStart = t), (t += e.cross);
                  }))
                : "center" === e.alignContent
                ? ((t = e.crossSpace / 2),
                  e.lines.forEach(function (e) {
                    (e.crossStart = t), (t += e.cross);
                  }))
                : "space-between" === e.alignContent
                ? ((n = e.crossSpace / (e.lines.length - 1)),
                  (t = 0),
                  e.lines.forEach(function (e) {
                    (e.crossStart = t), (t += e.cross + n);
                  }))
                : "space-around" === e.alignContent
                ? ((n = (2 * e.crossSpace) / (2 * e.lines.length)),
                  (t = n / 2),
                  e.lines.forEach(function (e) {
                    (e.crossStart = t), (t += e.cross + n);
                  }))
                : "stretch" === e.alignContent &&
                  ((n = e.crossSpace / e.lines.length),
                  (t = 0),
                  e.lines.forEach(function (e) {
                    (e.crossStart = t), (e.cross += n), (t += e.cross);
                  }));
            };
          },
          {},
        ],
        2: [
          function (e, t, n) {
            t.exports = function (e) {
              e.lines.forEach(function (t) {
                t.children.forEach(function (e) {
                  "flex-start" === e.alignSelf
                    ? (e.crossStart = t.crossStart)
                    : "flex-end" === e.alignSelf
                    ? (e.crossStart = t.crossStart + t.cross - e.crossAround)
                    : "center" === e.alignSelf
                    ? (e.crossStart =
                        t.crossStart + (t.cross - e.crossAround) / 2)
                    : "stretch" === e.alignSelf &&
                      ((e.crossStart = t.crossStart),
                      (e.crossAround = t.cross));
                });
              });
            };
          },
          {},
        ],
        3: [
          function (e, t, n) {
            t.exports = function (e, t, n) {
              var o = e.node.getBoundingClientRect();
              (e.crossAfter =
                "row" === t || "row-reverse" === t
                  ? ((e.mainAxis = "inline"),
                    (e.crossAxis = "block"),
                    ("number" != typeof e.main && "number" != typeof e.cross) ||
                      ("row" === e.flexDirection || "row-reverse" === t
                        ? ((e.width = e.main), (e.height = e.cross))
                        : ((e.width = e.cross), (e.height = e.main))),
                    (e.main = e.width),
                    (e.cross = e.height),
                    (e.mainClient = o.width || e.node.offsetWidth),
                    (e.crossClient = o.height || e.node.offsetHeight),
                    (e.mainBefore = e.marginLeft),
                    (e.mainAfter = e.marginRight),
                    (e.crossBefore = e.marginTop),
                    e.marginBottom)
                  : ((e.mainAxis = "block"),
                    (e.crossAxis = "inline"),
                    (e.main = e.height),
                    (e.cross = e.width),
                    ("number" != typeof e.main && "number" != typeof e.cross) ||
                      ("column" === e.flexDirection || "column-reverse" === t
                        ? ((e.width = e.cross), (e.height = e.main))
                        : ((e.width = e.main), (e.height = e.cross))),
                    (e.mainClient = o.height || e.node.offsetHeight),
                    (e.crossClient = o.width || e.node.offsetWidth),
                    (e.mainBefore = e.marginTop),
                    (e.mainAfter = e.marginBottom),
                    (e.crossBefore = e.marginLeft),
                    e.marginRight)),
                "number" == typeof e.flexBasis && (e.main = e.flexBasis),
                "auto" === e.main
                  ? (e.mainAround = e.mainClient)
                  : (e.mainAround = e.main),
                "auto" === e.cross
                  ? (e.crossAround = e.crossClient)
                  : (e.crossAround = e.cross),
                "number" == typeof e.mainBefore &&
                  (e.mainAround += e.mainBefore),
                "number" == typeof e.mainAfter && (e.mainAround += e.mainAfter),
                "number" == typeof e.crossBefore &&
                  (e.crossAround += e.crossBefore),
                "number" == typeof e.crossBefore &&
                  (e.crossAround += e.crossBefore),
                "auto" === e.alignSelf && (e.alignSelf = n);
            };
          },
          {},
        ],
        4: [
          function (e, t, n) {
            t.exports = function (t) {
              if (0 < t.mainSpace) {
                var n = t.children.reduce(function (e, t) {
                  return e + t.flexGrow;
                }, 0);
                0 < n &&
                  (t.children.forEach(function (e) {
                    e.mainAround += (e.flexGrow / n) * t.mainSpace;
                  }),
                  (t.main = t.children.reduce(function (e, t) {
                    return e + t.mainAround;
                  }, 0)),
                  (t.mainSpace = 0));
              }
            };
          },
          {},
        ],
        5: [
          function (e, t, n) {
            t.exports = function (t) {
              if (t.mainSpace < 0) {
                var n = t.children.reduce(function (e, t) {
                  return e + t.flexShrink;
                }, 0);
                0 < n &&
                  (t.children.forEach(function (e) {
                    e.mainAround += (e.flexShrink / n) * t.mainSpace;
                  }),
                  (t.main = t.children.reduce(function (e, t) {
                    return e + t.mainAround;
                  }, 0)),
                  (t.mainSpace = 0));
              }
            };
          },
          {},
        ],
        6: [
          function (e, t, n) {
            t.exports = function (t) {
              var n;
              (t.lines = [(n = { main: 0, cross: 0, children: [] })]),
                t.children.forEach(function (e) {
                  "nowrap" === t.flexWrap ||
                  0 === n.children.length ||
                  t.mainAround >= n.main + e.mainAround
                    ? ((n.main += e.mainAround),
                      (n.cross = Math.max(n.cross, e.crossAround)))
                    : t.lines.push(
                        (n = {
                          main: e.mainAround,
                          cross: e.crossAround,
                          children: [],
                        })
                      ),
                    n.children.push(e);
                });
            };
          },
          {},
        ],
        7: [
          function (n, o, e) {
            o.exports = function (t) {
              return (
                t.descendants.forEach(function (e) {
                  o.exports(e);
                }),
                "flex" !== t.display ||
                  (t.children.forEach(function (e) {
                    n("./flex-direction")(e, t.flexDirection, t.alignItems);
                  }),
                  n("./order")(t),
                  n("./flex-direction")(t, t.flexDirection, t.alignItems),
                  n("./flexbox-lines")(t),
                  "auto" === t.main &&
                    ((t.main = Math.max(
                      t.mainAround,
                      t.lines.reduce(function (e, t) {
                        return Math.max(e, t.main);
                      }, 0)
                    )),
                    "row" === t.flexDirection
                      ? (t.mainAround =
                          t.mainClient + t.mainBefore + t.mainAfter)
                      : (t.mainAround = t.main + t.mainBefore + t.mainAfter)),
                  "auto" === t.cross
                    ? ((t.cross = t.lines.reduce(function (e, t) {
                        return e + t.cross;
                      }, 0)),
                      "column" === t.flexDirection
                        ? (t.crossAround =
                            t.crossClient + t.crossBefore + t.crossAfter)
                        : (t.crossAround =
                            t.cross + t.crossBefore + t.crossAfter),
                      (t.crossSpace = t.crossAround - t.cross))
                    : (t.crossSpace =
                        t.cross -
                        t.lines.reduce(function (e, t) {
                          return e + t.cross;
                        }, 0)),
                  n("./align-content")(t),
                  t.lines.forEach(function (e) {
                    (e.mainSpace = t.main - e.main),
                      n("./flex-grow")(e),
                      n("./flex-shrink")(e),
                      n("./margin-main")(e),
                      n("./margin-cross")(e),
                      n("./justify-content")(e, t.justifyContent);
                  }),
                  n("./align-items")(t)),
                t
              );
            };
          },
          {
            "./align-content": 1,
            "./align-items": 2,
            "./flex-direction": 3,
            "./flex-grow": 4,
            "./flex-shrink": 5,
            "./flexbox-lines": 6,
            "./justify-content": 8,
            "./margin-cross": 9,
            "./margin-main": 10,
            "./order": 11,
          },
        ],
        8: [
          function (e, t, n) {
            t.exports = function (e, t) {
              var n, o;
              "flex-start" === t
                ? ((n = 0),
                  e.children.forEach(function (e) {
                    (e.mainStart = n), (n += e.mainAround);
                  }))
                : "flex-end" === t
                ? ((n = e.mainSpace),
                  e.children.forEach(function (e) {
                    (e.mainStart = n), (n += e.mainAround);
                  }))
                : "center" === t
                ? ((n = e.mainSpace / 2),
                  e.children.forEach(function (e) {
                    (e.mainStart = n), (n += e.mainAround);
                  }))
                : "space-between" === t
                ? ((o = e.mainSpace / (e.children.length - 1)),
                  (n = 0),
                  e.children.forEach(function (e) {
                    (e.mainStart = n), (n += e.mainAround + o);
                  }))
                : "space-around" === t &&
                  ((o = (2 * e.mainSpace) / (2 * e.children.length)),
                  (n = o / 2),
                  e.children.forEach(function (e) {
                    (e.mainStart = n), (n += e.mainAround + o);
                  }));
            };
          },
          {},
        ],
        9: [
          function (e, t, n) {
            t.exports = function (o) {
              o.children.forEach(function (e) {
                var t = 0;
                "auto" === e.crossBefore && ++t, "auto" === e.crossAfter && ++t;
                var n = o.cross - e.crossAround;
                "auto" === e.crossBefore &&
                  ((e.crossBefore = n / t), (e.crossAround += e.crossBefore)),
                  "auto" === e.crossAfter &&
                    ((e.crossAfter = n / t), (e.crossAround += e.crossAfter));
              });
            };
          },
          {},
        ],
        10: [
          function (e, t, n) {
            t.exports = function (t) {
              var n = 0;
              t.children.forEach(function (e) {
                "auto" === e.mainBefore && ++n, "auto" === e.mainAfter && ++n;
              }),
                0 < n &&
                  (t.children.forEach(function (e) {
                    "auto" === e.mainBefore &&
                      ((e.mainBefore = t.mainSpace / n),
                      (e.mainAround += e.mainBefore)),
                      "auto" === e.mainAfter &&
                        ((e.mainAfter = t.mainSpace / n),
                        (e.mainAround += e.mainAfter));
                  }),
                  (t.mainSpace = 0));
            };
          },
          {},
        ],
        11: [
          function (e, t, n) {
            t.exports = function (e) {
              e.children.sort(function (e, t) {
                return e.order - t.order || e.index - t.index;
              });
            };
          },
          {},
        ],
        12: [
          function (e, t, n) {
            t.exports = function (e, t, n) {
              var o = Object.assign(t, {
                alignContent: "stretch",
                alignItems: "stretch",
                alignSelf: "auto",
                display: "inline",
                flexBasis: "auto",
                flexDirection: "row",
                flexGrow: 0,
                flexShrink: 1,
                flexWrap: "nowrap",
                justifyContent: "flex-start",
                height: "auto",
                marginTop: 0,
                marginRight: 0,
                marginLeft: 0,
                marginBottom: 0,
                maxHeight: "none",
                maxWidth: "none",
                minHeight: 0,
                minWidth: 0,
                order: 0,
                position: "static",
                width: "auto",
              });
              e.hasAttribute("data-style")
                ? e.setAttribute("style", e.getAttribute("data-style"))
                : e.setAttribute("data-style", e.getAttribute("style") || "");
              for (
                var r,
                  i =
                    (e.getAttribute("data-style") || "") +
                    ";" +
                    (e.getAttribute("data-flex") || ""),
                  s = /([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g;
                (r = s.exec(i));

              ) {
                var a = r[1].toLowerCase().replace(/-[a-z]/g, function (e) {
                  return e.slice(1).toUpperCase();
                });
                (o[a] = parseFloat(r[2])), isNaN(o[a]) && (o[a] = r[2]);
              }
              n &&
                ((e.style.display = "inline-block"),
                (e.style.position = "absolute"));
              var c = e.getBoundingClientRect();
              return (
                (o.clientWidth = c.width || e.offsetWidth),
                (o.clientHeight = c.height || e.offsetHeight),
                o
              );
            };
          },
          {},
        ],
        13: [
          function (e, o, t) {
            (o.exports = function (e) {
              var t = o.exports.walk(e),
                n = o.exports.flexbox(t);
              return o.exports.write(n);
            }),
              (o.exports.flexbox = e("./flexbox")),
              (o.exports.getFlexStyles = e("./getFlexStyles")),
              (o.exports.walk = e("./walk")),
              (o.exports.write = e("./write"));
          },
          {
            "./flexbox": 7,
            "./getFlexStyles": 12,
            "./walk": 14,
            "./write": 15,
          },
        ],
        14: [
          function (e, a, t) {
            var n = e("../getFlexStyles");
            a.exports = function (o, r, e) {
              var i = /(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i.test(
                  o.getAttribute("data-flex")
                ),
                s = { node: o, children: [], descendants: [] };
              return (
                i && void 0 !== r && r.descendants.push(s),
                (!i && r) || (r = s),
                Array.prototype.forEach.call(o.childNodes, function (e) {
                  if (i && 3 === e.nodeType && e.nodeValue.trim()) {
                    var t = e;
                    (e = o.insertBefore(
                      document.createElement("flex-item"),
                      t
                    )).appendChild(t);
                  }
                  if (1 === e.nodeType) {
                    var n = a.exports(e, r, i);
                    i && s.children.push(n);
                  }
                }),
                (i || e) && n(o, s, e),
                s
              );
            };
          },
          { "../getFlexStyles": 12 },
        ],
        15: [
          function (e, n, t) {
            n.exports = function (t) {
              if (
                (t.descendants
                  .filter(function (e) {
                    return -1 === t.children.indexOf(e);
                  })
                  .forEach(function (e) {
                    n.exports(e);
                  }),
                t.display)
              ) {
                var e = t.node.style;
                "mainStart" in t
                  ? ((e.position = "absolute"),
                    "inline" === t.mainAxis
                      ? ((e.left = t.mainStart + "px"),
                        (e.top = t.crossStart + "px"),
                        (e.marginTop = t.crossBefore + "px"),
                        (e.marginRight = t.mainAfter + "px"),
                        (e.marginBottom = t.crossAfter + "px"),
                        (e.marginLeft = t.mainBefore + "px"))
                      : ((e.left = t.crossStart + "px"),
                        (e.top = t.mainStart + "px"),
                        (e.marginTop = t.mainBefore + "px"),
                        (e.marginRight = t.crossAfter + "px"),
                        (e.marginBottom = t.mainAfter + "px"),
                        (e.marginLeft = t.crossBefore + "px")),
                    "inline" === t.mainAxis
                      ? ((e.width =
                          t.mainAround - t.mainBefore - t.mainAfter + "px"),
                        (e.height =
                          t.crossAround - t.crossBefore - t.crossAfter + "px"))
                      : ("auto" === t.cross
                          ? (e.width =
                              t.crossClient -
                              t.crossBefore -
                              t.crossAfter +
                              "px")
                          : (e.width =
                              t.crossAround -
                              t.crossBefore -
                              t.crossAfter +
                              "px"),
                        "auto" === t.main
                          ? (e.height =
                              t.mainClient - t.mainBefore - t.mainAfter + "px")
                          : (e.height =
                              t.mainAround -
                              t.mainBefore -
                              t.mainAfter +
                              "px")))
                  : (e.position || (e.position = "relative"),
                    "inline" === t.mainAxis
                      ? ((e.width =
                          t.mainAround - t.mainBefore - t.mainAfter + "px"),
                        (e.height =
                          t.crossAround - t.crossBefore - t.crossAfter + "px"))
                      : ((e.width =
                          t.crossAround - t.crossBefore - t.crossAfter + "px"),
                        (e.height =
                          t.mainAround - t.mainBefore - t.mainAfter + "px"))),
                  t.children &&
                    t.children.forEach(function (e) {
                      n.exports(e);
                    });
              }
            };
          },
          {},
        ],
      },
      {},
      [13]
    )(13);
  }),
  (function (g, v, x) {
    "use strict";
    var e = function (e, t) {
      !!v.getComputedStyle ||
        (v.getComputedStyle = function (n) {
          return (
            (this.el = n),
            (this.getPropertyValue = function (e) {
              var t = /(\-([a-z]){1})/g;
              return (
                "float" === e && (e = "styleFloat"),
                t.test(e) &&
                  (e = e.replace(t, function () {
                    return arguments[2].toUpperCase();
                  })),
                n.currentStyle[e] ? n.currentStyle[e] : null
              );
            }),
            this
          );
        });
      var r,
        i,
        n,
        o,
        s,
        a,
        c = function (t, n, o, r) {
          if ("addEventListener" in t)
            try {
              t.addEventListener(n, o, r);
            } catch (e) {
              if ("object" != typeof o || !o.handleEvent) throw e;
              t.addEventListener(
                n,
                function (e) {
                  o.handleEvent.call(o, e);
                },
                r
              );
            }
          else
            "attachEvent" in t &&
              ("object" == typeof o && o.handleEvent
                ? t.attachEvent("on" + n, function () {
                    o.handleEvent.call(o);
                  })
                : t.attachEvent("on" + n, o));
        },
        l = function (t, n, o, r) {
          if ("removeEventListener" in t)
            try {
              t.removeEventListener(n, o, r);
            } catch (e) {
              if ("object" != typeof o || !o.handleEvent) throw e;
              t.removeEventListener(
                n,
                function (e) {
                  o.handleEvent.call(o, e);
                },
                r
              );
            }
          else
            "detachEvent" in t &&
              ("object" == typeof o && o.handleEvent
                ? t.detachEvent("on" + n, function () {
                    o.handleEvent.call(o);
                  })
                : t.detachEvent("on" + n, o));
        },
        f = function (e, t) {
          for (var n in t) e.setAttribute(n, t[n]);
        },
        u = function (e, t) {
          0 !== e.className.indexOf(t) &&
            ((e.className += " " + t),
            (e.className = e.className.replace(/(^\s*)|(\s*$)/g, "")));
        },
        d = function (e, t) {
          var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
          e.className = e.className
            .replace(n, " ")
            .replace(/(^\s*)|(\s*$)/g, "");
        },
        m = g.createElement("style"),
        h = g.documentElement,
        p = function (e, t) {
          var n;
          for (n in ((this.options = {
            animate: !0,
            transition: 284,
            label: "Menu",
            insert: "before",
            customToggle: "",
            closeOnNavClick: !1,
            openPos: "relative",
            navClass: "nav-collapse",
            navActiveClass: "js-nav-active",
            jsClass: "js",
            init: function () {},
            open: function () {},
            close: function () {},
          }),
          t))
            this.options[n] = t[n];
          if (
            (u(h, this.options.jsClass),
            (this.wrapperEl = e.replace("#", "")),
            g.getElementById(this.wrapperEl))
          )
            this.wrapper = g.getElementById(this.wrapperEl);
          else {
            if (!g.querySelector(this.wrapperEl))
              throw new Error(
                "The nav element you are trying to select doesn't exist"
              );
            this.wrapper = g.querySelector(this.wrapperEl);
          }
          (this.wrapper.inner = (function (e) {
            if (e.children.length < 1)
              throw new Error("The Nav container has no containing elements");
            for (var t = [], n = 0; n < e.children.length; n++)
              1 === e.children[n].nodeType && t.push(e.children[n]);
            return t;
          })(this.wrapper)),
            (i = this.options),
            (r = this.wrapper),
            this._init(this);
        };
      return (
        (p.prototype = {
          destroy: function () {
            this._removeStyles(),
              d(r, "closed"),
              d(r, "opened"),
              d(r, i.navClass),
              d(r, i.navClass + "-" + this.index),
              d(h, i.navActiveClass),
              r.removeAttribute("style"),
              r.removeAttribute("aria-hidden"),
              l(v, "resize", this, !1),
              l(v, "focus", this, !1),
              l(g.body, "touchmove", this, !1),
              l(n, "touchstart", this, !1),
              l(n, "touchend", this, !1),
              l(n, "mouseup", this, !1),
              l(n, "keyup", this, !1),
              l(n, "click", this, !1),
              i.customToggle
                ? n.removeAttribute("aria-hidden")
                : n.parentNode.removeChild(n);
          },
          toggle: function () {
            !0 === o && (a ? this.close() : this.open());
          },
          open: function () {
            a ||
              (d(r, "closed"),
              u(r, "opened"),
              u(h, i.navActiveClass),
              u(n, "active"),
              (r.style.position = i.openPos),
              f(r, { "aria-hidden": "false" }),
              (a = !0),
              i.open());
          },
          close: function () {
            a &&
              (u(r, "closed"),
              d(r, "opened"),
              d(h, i.navActiveClass),
              d(n, "active"),
              f(r, { "aria-hidden": "true" }),
              i.animate
                ? ((o = !1),
                  setTimeout(function () {
                    (r.style.position = "absolute"), (o = !0);
                  }, i.transition + 10))
                : (r.style.position = "absolute"),
              (a = !1),
              i.close());
          },
          resize: function () {
            "none" !== v.getComputedStyle(n, null).getPropertyValue("display")
              ? ((s = !0),
                f(n, { "aria-hidden": "false" }),
                r.className.match(/(^|\s)closed(\s|$)/) &&
                  (f(r, { "aria-hidden": "true" }),
                  (r.style.position = "absolute")),
                this._createStyles(),
                this._calcHeight())
              : ((s = !1),
                f(n, { "aria-hidden": "true" }),
                f(r, { "aria-hidden": "false" }),
                (r.style.position = i.openPos),
                this._removeStyles());
          },
          handleEvent: function (e) {
            var t = e || v.event;
            switch (t.type) {
              case "touchstart":
                this._onTouchStart(t);
                break;
              case "touchmove":
                this._onTouchMove(t);
                break;
              case "touchend":
              case "mouseup":
                this._onTouchEnd(t);
                break;
              case "click":
                this._preventDefault(t);
                break;
              case "keyup":
                this._onKeyUp(t);
                break;
              case "focus":
              case "resize":
                this.resize(t);
            }
          },
          _init: function () {
            (this.index = x++),
              u(r, i.navClass),
              u(r, i.navClass + "-" + this.index),
              u(r, "closed"),
              (a = !(o = !0)),
              this._closeOnNavClick(),
              this._createToggle(),
              this._transitions(),
              this.resize();
            var e = this;
            setTimeout(function () {
              e.resize();
            }, 20),
              c(v, "resize", this, !1),
              c(v, "focus", this, !1),
              c(g.body, "touchmove", this, !1),
              c(n, "touchstart", this, !1),
              c(n, "touchend", this, !1),
              c(n, "mouseup", this, !1),
              c(n, "keyup", this, !1),
              c(n, "click", this, !1),
              i.init();
          },
          _createStyles: function () {
            m.parentNode ||
              ((m.type = "text/css"),
              g.getElementsByTagName("head")[0].appendChild(m));
          },
          _removeStyles: function () {
            m.parentNode && m.parentNode.removeChild(m);
          },
          _createToggle: function () {
            if (i.customToggle) {
              var e = i.customToggle.replace("#", "");
              if (g.getElementById(e)) n = g.getElementById(e);
              else {
                if (!g.querySelector(e))
                  throw new Error(
                    "The custom nav toggle you are trying to select doesn't exist"
                  );
                n = g.querySelector(e);
              }
            } else {
              var t = g.createElement("a");
              (t.innerHTML = i.label),
                f(t, { href: "#", class: "nav-toggle" }),
                "after" === i.insert
                  ? r.parentNode.insertBefore(t, r.nextSibling)
                  : r.parentNode.insertBefore(t, r),
                (n = t);
            }
          },
          _closeOnNavClick: function () {
            if (i.closeOnNavClick) {
              var n = r.getElementsByTagName("a"),
                o = this;
              !(function (e, t, n) {
                for (var o = 0; o < e.length; o++) t.call(n, o, e[o]);
              })(n, function (e, t) {
                c(
                  n[e],
                  "click",
                  function () {
                    s && o.toggle();
                  },
                  !1
                );
              });
            }
          },
          _preventDefault: function (e) {
            if (e.preventDefault)
              return (
                e.stopImmediatePropagation && e.stopImmediatePropagation(),
                e.preventDefault(),
                e.stopPropagation(),
                !1
              );
            e.returnValue = !1;
          },
          _onTouchStart: function (e) {
            Event.prototype.stopImmediatePropagation || this._preventDefault(e),
              (this.startX = e.touches[0].clientX),
              (this.startY = e.touches[0].clientY),
              (this.touchHasMoved = !1),
              l(n, "mouseup", this, !1);
          },
          _onTouchMove: function (e) {
            (10 < Math.abs(e.touches[0].clientX - this.startX) ||
              10 < Math.abs(e.touches[0].clientY - this.startY)) &&
              (this.touchHasMoved = !0);
          },
          _onTouchEnd: function (e) {
            if ((this._preventDefault(e), s && !this.touchHasMoved)) {
              if ("touchend" === e.type) return void this.toggle();
              var t = e || v.event;
              3 !== t.which && 2 !== t.button && this.toggle();
            }
          },
          _onKeyUp: function (e) {
            13 === (e || v.event).keyCode && this.toggle();
          },
          _transitions: function () {
            if (i.animate) {
              var e = r.style,
                t = "max-height " + i.transition + "ms";
              e.WebkitTransition =
                e.MozTransition =
                e.OTransition =
                e.transition =
                  t;
            }
          },
          _calcHeight: function () {
            for (var e = 0, t = 0; t < r.inner.length; t++)
              e += r.inner[t].offsetHeight;
            var n =
              "." +
              i.jsClass +
              " ." +
              i.navClass +
              "-" +
              this.index +
              ".opened{max-height:" +
              e +
              "px !important} ." +
              i.jsClass +
              " ." +
              i.navClass +
              "-" +
              this.index +
              ".opened.dropdown-active {max-height:9999px !important}";
            m.styleSheet ? (m.styleSheet.cssText = n) : (m.innerHTML = n),
              (n = "");
          },
        }),
        new p(e, t)
      );
    };
    "undefined" != typeof module && module.exports
      ? (module.exports = e)
      : (v.responsiveNav = e);
  })(document, window, 0);
