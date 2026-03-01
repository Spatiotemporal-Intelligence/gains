(window.webpackJsonp = window.webpackJsonp || []).push([
  [30],
  {
    0: function (t, e, r) {
      (r("GcxT"), (t.exports = r("nOHt")));
    },
    "1TCz": function (t, e, r) {
      "use strict";
      (r.r(e),
        function (t) {
          var n = r("1OyB"),
            o = r("vuIU"),
            a = r("Ji7U"),
            i = r("md7G"),
            c = r("foSv"),
            u = r("8Bbg"),
            s = r.n(u),
            l = r("q1tI"),
            f = r.n(l),
            p = r("/MKj"),
            h = r("7DA+"),
            d = r("bVkC"),
            v = r("kQFM"),
            y = r("5Yp1"),
            g = r("p46w"),
            m = r.n(g),
            b = f.a.createElement;
          function w() {
            w = function () {
              return t;
            };
            var t = {},
              e = Object.prototype,
              r = e.hasOwnProperty,
              n =
                Object.defineProperty ||
                function (t, e, r) {
                  t[e] = r.value;
                },
              o = "function" == typeof Symbol ? Symbol : {},
              a = o.iterator || "@@iterator",
              i = o.asyncIterator || "@@asyncIterator",
              c = o.toStringTag || "@@toStringTag";
            function u(t, e, r) {
              return (
                Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                }),
                t[e]
              );
            }
            try {
              u({}, "");
            } catch (S) {
              u = function (t, e, r) {
                return (t[e] = r);
              };
            }
            function s(t, e, r, o) {
              var a = e && e.prototype instanceof p ? e : p,
                i = Object.create(a.prototype),
                c = new _(o || []);
              return (n(i, "_invoke", { value: O(t, r, c) }), i);
            }
            function l(t, e, r) {
              try {
                return { type: "normal", arg: t.call(e, r) };
              } catch (S) {
                return { type: "throw", arg: S };
              }
            }
            t.wrap = s;
            var f = {};
            function p() {}
            function h() {}
            function d() {}
            var v = {};
            u(v, a, function () {
              return this;
            });
            var y = Object.getPrototypeOf,
              g = y && y(y(k([])));
            g && g !== e && r.call(g, a) && (v = g);
            var m = (d.prototype = p.prototype = Object.create(v));
            function b(t) {
              ["next", "throw", "return"].forEach(function (e) {
                u(t, e, function (t) {
                  return this._invoke(e, t);
                });
              });
            }
            function x(t, e) {
              var o;
              n(this, "_invoke", {
                value: function (n, a) {
                  function i() {
                    return new e(function (o, i) {
                      !(function n(o, a, i, c) {
                        var u = l(t[o], t, a);
                        if ("throw" !== u.type) {
                          var s = u.arg,
                            f = s.value;
                          return f &&
                            "object" == typeof f &&
                            r.call(f, "__await")
                            ? e.resolve(f.__await).then(
                                function (t) {
                                  n("next", t, i, c);
                                },
                                function (t) {
                                  n("throw", t, i, c);
                                },
                              )
                            : e.resolve(f).then(
                                function (t) {
                                  ((s.value = t), i(s));
                                },
                                function (t) {
                                  return n("throw", t, i, c);
                                },
                              );
                        }
                        c(u.arg);
                      })(n, a, o, i);
                    });
                  }
                  return (o = o ? o.then(i, i) : i());
                },
              });
            }
            function O(t, e, r) {
              var n = "suspendedStart";
              return function (o, a) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === o) throw a;
                  return N();
                }
                for (r.method = o, r.arg = a; ; ) {
                  var i = r.delegate;
                  if (i) {
                    var c = j(i, r);
                    if (c) {
                      if (c === f) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var u = l(t, e, r);
                  if ("normal" === u.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      u.arg === f)
                    )
                      continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            }
            function j(t, e) {
              var r = e.method,
                n = t.iterator[r];
              if (void 0 === n)
                return (
                  (e.delegate = null),
                  ("throw" === r &&
                    t.iterator.return &&
                    ((e.method = "return"),
                    (e.arg = void 0),
                    j(t, e),
                    "throw" === e.method)) ||
                    ("return" !== r &&
                      ((e.method = "throw"),
                      (e.arg = new TypeError(
                        "The iterator does not provide a '" + r + "' method",
                      )))),
                  f
                );
              var o = l(n, t.iterator, e.arg);
              if ("throw" === o.type)
                return (
                  (e.method = "throw"),
                  (e.arg = o.arg),
                  (e.delegate = null),
                  f
                );
              var a = o.arg;
              return a
                ? a.done
                  ? ((e[t.resultName] = a.value),
                    (e.next = t.nextLoc),
                    "return" !== e.method &&
                      ((e.method = "next"), (e.arg = void 0)),
                    (e.delegate = null),
                    f)
                  : a
                : ((e.method = "throw"),
                  (e.arg = new TypeError("iterator result is not an object")),
                  (e.delegate = null),
                  f);
            }
            function E(t) {
              var e = { tryLoc: t[0] };
              (1 in t && (e.catchLoc = t[1]),
                2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                this.tryEntries.push(e));
            }
            function L(t) {
              var e = t.completion || {};
              ((e.type = "normal"), delete e.arg, (t.completion = e));
            }
            function _(t) {
              ((this.tryEntries = [{ tryLoc: "root" }]),
                t.forEach(E, this),
                this.reset(!0));
            }
            function k(t) {
              if (t) {
                var e = t[a];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                  var n = -1,
                    o = function e() {
                      for (; ++n < t.length; )
                        if (r.call(t, n))
                          return ((e.value = t[n]), (e.done = !1), e);
                      return ((e.value = void 0), (e.done = !0), e);
                    };
                  return (o.next = o);
                }
              }
              return { next: N };
            }
            function N() {
              return { value: void 0, done: !0 };
            }
            return (
              (h.prototype = d),
              n(m, "constructor", { value: d, configurable: !0 }),
              n(d, "constructor", { value: h, configurable: !0 }),
              (h.displayName = u(d, c, "GeneratorFunction")),
              (t.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return (
                  !!e &&
                  (e === h || "GeneratorFunction" === (e.displayName || e.name))
                );
              }),
              (t.mark = function (t) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, d)
                    : ((t.__proto__ = d), u(t, c, "GeneratorFunction")),
                  (t.prototype = Object.create(m)),
                  t
                );
              }),
              (t.awrap = function (t) {
                return { __await: t };
              }),
              b(x.prototype),
              u(x.prototype, i, function () {
                return this;
              }),
              (t.AsyncIterator = x),
              (t.async = function (e, r, n, o, a) {
                void 0 === a && (a = Promise);
                var i = new x(s(e, r, n, o), a);
                return t.isGeneratorFunction(r)
                  ? i
                  : i.next().then(function (t) {
                      return t.done ? t.value : i.next();
                    });
              }),
              b(m),
              u(m, c, "Generator"),
              u(m, a, function () {
                return this;
              }),
              u(m, "toString", function () {
                return "[object Generator]";
              }),
              (t.keys = function (t) {
                var e = Object(t),
                  r = [];
                for (var n in e) r.push(n);
                return (
                  r.reverse(),
                  function t() {
                    for (; r.length; ) {
                      var n = r.pop();
                      if (n in e) return ((t.value = n), (t.done = !1), t);
                    }
                    return ((t.done = !0), t);
                  }
                );
              }),
              (t.values = k),
              (_.prototype = {
                constructor: _,
                reset: function (t) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = void 0),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = void 0),
                    this.tryEntries.forEach(L),
                    !t)
                  )
                    for (var e in this)
                      "t" === e.charAt(0) &&
                        r.call(this, e) &&
                        !isNaN(+e.slice(1)) &&
                        (this[e] = void 0);
                },
                stop: function () {
                  this.done = !0;
                  var t = this.tryEntries[0].completion;
                  if ("throw" === t.type) throw t.arg;
                  return this.rval;
                },
                dispatchException: function (t) {
                  if (this.done) throw t;
                  var e = this;
                  function n(r, n) {
                    return (
                      (i.type = "throw"),
                      (i.arg = t),
                      (e.next = r),
                      n && ((e.method = "next"), (e.arg = void 0)),
                      !!n
                    );
                  }
                  for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var a = this.tryEntries[o],
                      i = a.completion;
                    if ("root" === a.tryLoc) return n("end");
                    if (a.tryLoc <= this.prev) {
                      var c = r.call(a, "catchLoc"),
                        u = r.call(a, "finallyLoc");
                      if (c && u) {
                        if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                      } else if (c) {
                        if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                      } else {
                        if (!u)
                          throw new Error(
                            "try statement without catch or finally",
                          );
                        if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (t, e) {
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (
                      o.tryLoc <= this.prev &&
                      r.call(o, "finallyLoc") &&
                      this.prev < o.finallyLoc
                    ) {
                      var a = o;
                      break;
                    }
                  }
                  a &&
                    ("break" === t || "continue" === t) &&
                    a.tryLoc <= e &&
                    e <= a.finallyLoc &&
                    (a = null);
                  var i = a ? a.completion : {};
                  return (
                    (i.type = t),
                    (i.arg = e),
                    a
                      ? ((this.method = "next"), (this.next = a.finallyLoc), f)
                      : this.complete(i)
                  );
                },
                complete: function (t, e) {
                  if ("throw" === t.type) throw t.arg;
                  return (
                    "break" === t.type || "continue" === t.type
                      ? (this.next = t.arg)
                      : "return" === t.type
                        ? ((this.rval = this.arg = t.arg),
                          (this.method = "return"),
                          (this.next = "end"))
                        : "normal" === t.type && e && (this.next = e),
                    f
                  );
                },
                finish: function (t) {
                  for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t)
                      return (this.complete(r.completion, r.afterLoc), L(r), f);
                  }
                },
                catch: function (t) {
                  for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                      var n = r.completion;
                      if ("throw" === n.type) {
                        var o = n.arg;
                        L(r);
                      }
                      return o;
                    }
                  }
                  throw new Error("illegal catch attempt");
                },
                delegateYield: function (t, e, r) {
                  return (
                    (this.delegate = {
                      iterator: k(t),
                      resultName: e,
                      nextLoc: r,
                    }),
                    "next" === this.method && (this.arg = void 0),
                    f
                  );
                },
              }),
              t
            );
          }
          function x(t) {
            var e = (function () {
              if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {}),
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var r,
                n = Object(c.a)(t);
              if (e) {
                var o = Object(c.a)(this).constructor;
                r = Reflect.construct(n, arguments, o);
              } else r = n.apply(this, arguments);
              return Object(i.a)(this, r);
            };
          }
          var O = (function (e) {
            Object(a.a)(i, e);
            var r = x(i);
            function i() {
              return (Object(n.a)(this, i), r.apply(this, arguments));
            }
            return (
              Object(o.a)(
                i,
                [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.props.WENV && m.a.set("checkKey", this.props.WENV);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var t = this.props,
                        e = t.Component,
                        r = t.pageProps,
                        n = t.store;
                      return b(p.a, { store: n }, b(y.a, null, b(e, r)));
                    },
                  },
                ],
                [
                  {
                    key: "getInitialProps",
                    value: function (e) {
                      var r, n, o;
                      return w().async(
                        function (a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                if (
                                  ((r = e.Component),
                                  (n = e.ctx),
                                  (o = {}),
                                  !r.getInitialProps)
                                ) {
                                  a.next = 6;
                                  break;
                                }
                                return (
                                  (a.next = 5),
                                  w().awrap(r.getInitialProps(n))
                                );
                              case 5:
                                o = a.sent;
                              case 6:
                                return a.abrupt("return", {
                                  pageProps: o,
                                  WENV: t.env.WENV,
                                });
                              case 7:
                              case "end":
                                return a.stop();
                            }
                        },
                        null,
                        null,
                        null,
                        Promise,
                      );
                    },
                  },
                ],
              ),
              i
            );
          })(s.a);
          e.default = Object(h.a)(v.a)(Object(d.a)(O));
        }.call(this, r("8oxB")));
    },
    "5Yp1": function (t, e, r) {
      "use strict";
      var n = r("1OyB"),
        o = r("vuIU"),
        a = r("Ji7U"),
        i = r("md7G"),
        c = r("foSv"),
        u = r("q1tI"),
        s = r.n(u),
        l = r("/MKj"),
        f = r("nOHt"),
        p = r.n(f),
        h = r("JX7q"),
        d = r("rePB"),
        v = r("8Kt/"),
        y = r.n(v),
        g = r("a6RD"),
        m = r.n(g),
        b = r("p46w"),
        w = r.n(b),
        x = r("K4CH"),
        O = r.n(x),
        j = r("wd/R"),
        E = r.n(j),
        L = r("UZxA"),
        _ = r("QrVo"),
        k = r("kRGu"),
        N = r("8ihE"),
        S = r("bMwp"),
        A = r("FaKB"),
        T = s.a.createElement;
      function I(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = Object(c.a)(t);
          if (e) {
            var o = Object(c.a)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return Object(i.a)(this, r);
        };
      }
      E.a.locale("zh-cn");
      var P = m()(
          function () {
            return r.e(67).then(r.bind(null, "XkeD"));
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return ["XkeD"];
              },
              modules: ["./UserState"],
            },
          },
        ),
        C = (function (t) {
          Object(a.a)(r, t);
          var e = I(r);
          function r(t) {
            var o;
            return (
              Object(n.a)(this, r),
              (o = e.call(this, t)),
              Object(d.a)(
                Object(h.a)(o),
                "handleGetVipTopArticles",
                function () {
                  var t = {
                    last_time: parseInt(new Date().getTime() / 1e3, 10),
                    refresh_Type: 1,
                  };
                  try {
                    Object(S.request)({
                      url: "/featured/v2/home/recommend/article",
                      params: t,
                    }).then(function (t) {
                      t &&
                        200 === t.status &&
                        t.data &&
                        0 === t.data.errno &&
                        t.data.data &&
                        o.setState({ vipTopArticles: t.data.data });
                    });
                  } catch (e) {
                    console.log("handleGetVipTopArticles", e);
                  }
                },
              ),
              (o.state = {
                searchValue: "",
                router: o.props.router.pathname || "/",
                isShowLogOutBox: !1,
                homeBannerData: {},
                isIEUpdate: !1,
                isShowTopArticles: !1,
                vipTopArticles: [],
              }),
              o
            );
          }
          return (
            Object(o.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  var t = this;
                  (this.handleNextUserInfo(),
                    this.handleGetHomeBanner(),
                    clearInterval(this.timer),
                    (this.timer = setInterval(function () {
                      t.handleNextUserInfo();
                    }, 2e3)));
                  var e = new O.a().getResult(),
                    r = (e.browser && e.browser.name) || "",
                    n = (e.browser && e.browser.version) || "",
                    o = r && r.toUpperCase && "IE" === r.toUpperCase(),
                    a = n && parseInt(n, 10);
                  (((o && a && a <= 10) ||
                    navigator.userAgent.search(/Trident/i) > 0) &&
                    this.setState({ isIEUpdate: !0 }),
                    "/vip" === this.props.router.pathname &&
                      this.handleGetVipTopArticles());
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (t) {
                  this.setState({
                    router:
                      "searchPage" === t.chooseNav
                        ? "/searchPage"
                        : "user" === t.chooseNav
                          ? "/user"
                          : "vip" === t.chooseNav
                            ? "/vip"
                            : "",
                  });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  clearInterval(this.timer);
                },
              },
              {
                key: "handleNextUserInfo",
                value: function () {
                  var t = {},
                    e = w.a.get("userInfo")
                      ? "string" === typeof w.a.get("userInfo")
                        ? "undefined" !== w.a.get("userInfo")
                          ? JSON.parse(w.a.get("userInfo"))
                          : {}
                        : w.a.get("userInfo")
                      : {};
                  t =
                    e && e.oauth_info && e.oauth_info.token
                      ? JSON.parse(w.a.get("userInfo"))
                      : {};
                  var r =
                    (this.props.userInfo &&
                      this.props.userInfo.oauth_info &&
                      this.props.userInfo.oauth_info.token) ||
                    "";
                  ((t.oauth_info && t.oauth_info.token) || "") !== r &&
                    this.props.handleSetUserInfo({ userInfo: t });
                  var n = w.a.get("CLS_WEB_AVATAR") || "";
                  this.props.handelChangeUserAvatar(n);
                },
              },
              {
                key: "handleGetHomeBanner",
                value: function () {
                  var t = this;
                  Object(S.request)({ url: "/v3/depth/banner" })
                    .then(function (e) {
                      e &&
                        e.data &&
                        0 === e.data.errno &&
                        (t.setState({ homeBannerData: e.data.data }),
                        t.props.handleSetBanner({ bannerData: e.data.data }));
                    })
                    .catch(function (t) {
                      console.log("handleGetHomeBanner", t);
                    });
                },
              },
              {
                key: "handleIsShowLogOutBox",
                value: function (t) {
                  ((document.documentElement.style.overflowY = "scroll"),
                    this.setState({ isShowLogOutBox: t.isShowLogOutBox }));
                },
              },
              {
                key: "handleChangeSearchValue",
                value: function (t) {
                  this.setState({ searchValue: t });
                },
              },
              {
                key: "handleSubmit",
                value: function (t) {
                  13 === t &&
                    this.onSubmit({ searchValue: this.state.searchValue });
                },
              },
              {
                key: "onSubmit",
                value: function (t) {
                  t.searchValue &&
                    ((location.href = encodeURI(
                      "/searchPage?keyword=".concat(
                        this.state.searchValue,
                        "&type=all",
                      ),
                    )),
                    this.setState({ searchValue: "" }));
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this.state.router;
                  return T(
                    s.a.Fragment,
                    null,
                    T(
                      y.a,
                      null,
                      T("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=Edge,chrome=1",
                      }),
                      T("meta", { name: "renderer", content: "webkit" }),
                      T("meta", { charSet: "UTF-8" }),
                      T("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1",
                      }),
                      T("link", {
                        rel: "icon",
                        href: "https://cdnjs.cls.cn/www/20200601/image/favicon.ico",
                      }),
                      T("script", {
                        src: "https://cdnjs.cls.cn/www/20190123/js/polyfill.min.js",
                      }),
                      T("script", {
                        src: "https://cdnjs.cls.cn/www/20180717/js/history.min.js",
                      }),
                      T("script", {
                        src: "https://cdnjs.cls.cn/www/20180717/js/baidu.js",
                      }),
                      T("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "/static/slick.min.css",
                      }),
                      T("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "/static/slick-theme.min.css",
                      }),
                      T("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "/static/video-js.min.css",
                      }),
                      T("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "https://cdnjs.cls.cn/www/20200601/css/iconfont.css",
                      }),
                      T("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "https://cdnjs.cls.cn/www/20251127/css/global-2025113.css",
                      }),
                      T("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "https://cdnjs.cls.cn/www/20250806/css/header-2025081.css",
                      }),
                      T("script", {
                        type: "text/javascript",
                        src: "https://cdnjs.cls.cn/www/20251127/js/aliyun_captcha_2025113.js",
                      }),
                      T("script", {
                        type: "text/javascript",
                        src: "https://o.alicdn.com/captcha-frontend/aliyunCaptcha/AliyunCaptcha.js",
                      }),
                    ),
                    // T(
                    //   "div",
                    //   { className: "header-wraper" },
                    //   this.state.isIEUpdate &&
                    //     T(
                    //       "div",
                    //       { className: "p-r m-auto w-1200" },
                    //       T(
                    //         "div",
                    //         {
                    //           className:
                    //             "f-s-12 l-h-141667 c-43454b bg-c-fffbe6 b-c-f1db8d ie-update",
                    //         },
                    //         "\u60a8\u5f53\u524d\u6d4f\u89c8\u5668\u7248\u672c\u8fc7\u4f4e\uff0c\u5b58\u5728\u5b89\u5168\u98ce\u9669\uff0c\u5efa\u8bae\u60a8\u5347\u7ea7\u6d4f\u89c8\u5668",
                    //         T("img", {
                    //           className: "c-p ie-update-close",
                    //           src: "https://cdnjs.cls.cn/www/stib/images/close-02.png",
                    //           onClick: function () {
                    //             return t.setState({ isIEUpdate: !1 });
                    //           },
                    //         }),
                    //       ),
                    //     ),
                    //   "/vip" === e
                    //     ? T(
                    //         "div",
                    //         {
                    //           className: "p-r ".concat(
                    //             "/detail" === this.props.router.pathname ||
                    //               "/mainline" === this.props.router.pathname
                    //               ? "bg-c-fff"
                    //               : "bg-c-1f232f",
                    //             " vip-header-box",
                    //           ),
                    //         },
                    //         T(
                    //           "div",
                    //           { className: "m-auto w-1200" },
                    //           T(
                    //             "div",
                    //             {
                    //               className: "".concat(
                    //                 this.state.homeBannerData.top &&
                    //                   this.state.homeBannerData.top.length
                    //                   ? "m-b-10"
                    //                   : "",
                    //                 " clearfix",
                    //               ),
                    //             },
                    //             T(
                    //               "div",
                    //               { className: "f-l top-nav-left" },
                    //               [
                    //                 {
                    //                   type: "/our?nav=our",
                    //                   name: "\u5173\u4e8e\u6211\u4eec",
                    //                 },
                    //                 {
                    //                   type: "/our?nav=copyright",
                    //                   name: "\u7f51\u7ad9\u58f0\u660e",
                    //                 },
                    //                 {
                    //                   type: "/our?nav=contact",
                    //                   name: "\u8054\u7cfb\u65b9\u5f0f",
                    //                 },
                    //                 {
                    //                   type: "/our?nav=feedBack",
                    //                   name: "\u7528\u6237\u53cd\u9988",
                    //                 },
                    //                 {
                    //                   type: "/our?nav=map",
                    //                   name: "\u7f51\u7ad9\u5730\u56fe",
                    //                 },
                    //                 {
                    //                   type: "/our?nav=tips",
                    //                   name: "\u5e2e\u52a9",
                    //                 },
                    //               ].map(function (e, r) {
                    //                 return T(
                    //                   "a",
                    //                   {
                    //                     key: "".concat(e.type, "-").concat(r),
                    //                     href: "".concat(e.type),
                    //                     className: "f-s-15 ".concat(
                    //                       "/detail" ===
                    //                         t.props.router.pathname ||
                    //                         "/mainline" ===
                    //                           t.props.router.pathname
                    //                         ? "c-363c4a"
                    //                         : "c-fff",
                    //                     ),
                    //                   },
                    //                   e.name,
                    //                 );
                    //               }),
                    //             ),
                    //             T(P, {
                    //               handleIsShowLogOutBox: function (e) {
                    //                 return t.handleIsShowLogOutBox(e);
                    //               },
                    //             }),
                    //           ),
                    //           !!this.state.homeBannerData.top &&
                    //             !!this.state.homeBannerData.top.length &&
                    //             T(
                    //               "div",
                    //               { className: "w-100p o-h top-activity" },
                    //               T(L.a, {
                    //                 dataList: this.state.homeBannerData.top,
                    //                 type: "top",
                    //               }),
                    //             ),
                    //           T(
                    //             "div",
                    //             { className: "clearfix level-1-nav-box" },
                    //             T(
                    //               "a",
                    //               { href: "/", className: "f-l" },
                    //               T(
                    //                 "h1",
                    //                 null,
                    //                 T("img", {
                    //                   className: "home-logo",
                    //                   src: "https://cdnjs.cls.cn/www/20200601/image/logo.png",
                    //                   alt: "\u8d22\u8054\u793e",
                    //                 }),
                    //               ),
                    //             ),
                    //             T(
                    //               "div",
                    //               { className: "f-l level-1-nav" },
                    //               [
                    //                 { type: "index", name: "\u9996\u9875" },
                    //                 { type: "telegraph", name: "\u7535\u62a5" },
                    //                 { type: "subject", name: "\u8bdd\u9898" },
                    //                 { type: "finance", name: "\u76ef\u76d8" },
                    //                 { type: "vip", name: "VIP" },
                    //                 { type: "fm", name: "FM" },
                    //                 { type: "investpro", name: "\u6295\u7814" },
                    //                 { type: "download", name: "\u4e0b\u8f7d" },
                    //               ].map(function (e, r) {
                    //                 return T(
                    //                   "a",
                    //                   {
                    //                     key: "".concat(e.type, "-").concat(r),
                    //                     href: "/".concat(
                    //                       "index" === e.type ? "" : e.type,
                    //                     ),
                    //                     className: "".concat(
                    //                       "/detail" ===
                    //                         t.props.router.pathname ||
                    //                         "/mainline" ===
                    //                           t.props.router.pathname
                    //                         ? "c-363c4a"
                    //                         : "c-fff",
                    //                       " vip-header-nav",
                    //                     ),
                    //                     target: "_blank",
                    //                     rel: "noopener noreferrer",
                    //                   },
                    //                   T(
                    //                     "h2",
                    //                     { className: "f-s-20" },
                    //                     "VIP" === e.name
                    //                       ? T("img", {
                    //                           className: "vip-header-icon",
                    //                           src: "".concat(
                    //                             "/detail" ===
                    //                               t.props.router.pathname ||
                    //                               "/mainline" ===
                    //                                 t.props.router.pathname
                    //                               ? "https://cdnjs.cls.cn/www/20220401/vip-detail.png"
                    //                               : "https://cdnjs.cls.cn/www/20200601/image/vip.png",
                    //                           ),
                    //                           alt: "VIP",
                    //                           onMouseEnter: function () {
                    //                             return t.setState({
                    //                               isShowTopArticles: !0,
                    //                             });
                    //                           },
                    //                           onMouseLeave: function () {
                    //                             return t.setState({
                    //                               isShowTopArticles: !1,
                    //                             });
                    //                           },
                    //                         })
                    //                       : e.name,
                    //                   ),
                    //                 );
                    //               }),
                    //             ),
                    //             T(
                    //               "div",
                    //               { className: "f-r p-r header-search-box" },
                    //               T("input", {
                    //                 className: "f-s-14 c-9295a6 ".concat(
                    //                   "/detail" ===
                    //                     this.props.router.pathname ||
                    //                     "/mainline" ===
                    //                       this.props.router.pathname
                    //                     ? "bg-c-f5f5f5 b-c-d9d9d9"
                    //                     : "bg-c-333a4c b-c-333a4c",
                    //                   " header-search-input",
                    //                 ),
                    //                 type: "text",
                    //                 placeholder:
                    //                   "\u8bf7\u8f93\u5165\u8981\u641c\u7d22\u7684\u4fe1\u606f",
                    //                 value: this.state.searchValue,
                    //                 onKeyDown: function (e) {
                    //                   return t.handleSubmit(e.keyCode);
                    //                 },
                    //                 onChange: function (e) {
                    //                   return t.handleChangeSearchValue(
                    //                     e.target.value,
                    //                   );
                    //                 },
                    //               }),
                    //               T(
                    //                 "span",
                    //                 {
                    //                   onClick: function () {
                    //                     t.state.searchValue &&
                    //                       Object(A.k)(t.state.searchValue) &&
                    //                       (location.href =
                    //                         "/searchPage?type=all&keyword=".concat(
                    //                           encodeURIComponent(
                    //                             Object(A.k)(
                    //                               t.state.searchValue,
                    //                             ),
                    //                           ),
                    //                         ));
                    //                   },
                    //                   rel: "noopener noreferrer",
                    //                 },
                    //                 T("em", {
                    //                   className: "v-a-m f-s-20 l-h-1 ".concat(
                    //                     "/detail" ===
                    //                       this.props.router.pathname ||
                    //                       "/mainline" ===
                    //                         this.props.router.pathname
                    //                       ? "c-363c4a"
                    //                       : "c-fff",
                    //                     " c-p iconfont iconsearch header-search-icon",
                    //                   ),
                    //                 }),
                    //               ),
                    //             ),
                    //           ),
                    //         ),
                    //         this.state.isShowTopArticles &&
                    //           this.state.vipTopArticles.length > 0 &&
                    //           T(
                    //             "div",
                    //             {
                    //               className: "vip-top-articles-box ".concat(
                    //                 this.state.homeBannerData.top &&
                    //                   this.state.homeBannerData.top.length
                    //                   ? "vip-top-articles-banner-box"
                    //                   : "",
                    //               ),
                    //               onMouseEnter: function () {
                    //                 return t.setState({
                    //                   isShowTopArticles: !0,
                    //                 });
                    //               },
                    //               onMouseLeave: function () {
                    //                 return t.setState({
                    //                   isShowTopArticles: !1,
                    //                 });
                    //               },
                    //             },
                    //             T(
                    //               "div",
                    //               { className: "vip-top-articles" },
                    //               T(
                    //                 "div",
                    //                 { className: "m-auto w-1200 clearfix" },
                    //                 this.state.vipTopArticles.map(
                    //                   function (t, e) {
                    //                     return (
                    //                       e < 3 &&
                    //                       T(
                    //                         "div",
                    //                         {
                    //                           className: "f-l ".concat(
                    //                             e < 2 ? "m-r-35" : "",
                    //                             " vip-top-articles-list",
                    //                           ),
                    //                           key: e,
                    //                         },
                    //                         T(
                    //                           "a",
                    //                           {
                    //                             href: "/detail/".concat(t.id),
                    //                             target: "_blank",
                    //                           },
                    //                           T(
                    //                             "div",
                    //                             {
                    //                               className:
                    //                                 "f-s-14 l-h-142857 c-290504 line3 vip-top-articles-content",
                    //                             },
                    //                             T(
                    //                               "span",
                    //                               {
                    //                                 className: "m-r-5 c-f6082c",
                    //                               },
                    //                               E()(
                    //                                 1e3 * t.sort_score,
                    //                               ).format("HH:mm"),
                    //                             ),
                    //                             t.title,
                    //                           ),
                    //                         ),
                    //                         T(
                    //                           "div",
                    //                           { className: "f-s-13 c-4e1f19" },
                    //                           E()(1e3 * t.sort_score).format(
                    //                             "YYYY\u5e74MM\u6708DD\u65e5 dddd",
                    //                           ),
                    //                         ),
                    //                       )
                    //                     );
                    //                   },
                    //                 ),
                    //               ),
                    //             ),
                    //           ),
                    //       )
                    //     : T(
                    //         "div",
                    //         null,
                    //         T(
                    //           "div",
                    //           {
                    //             className: "".concat(
                    //               "/searchPage" === e ||
                    //                 "/user" === e ||
                    //                 "/_error" === e
                    //                 ? "bg-c-34304b top-nav-box-search"
                    //                 : "top-nav-box",
                    //             ),
                    //           },
                    //           T(
                    //             "div",
                    //             { className: "c-b m-auto w-1200" },
                    //             T(
                    //               "div",
                    //               { className: "f-l top-nav-left" },
                    //               "/searchPage" === e ||
                    //                 "/user" === e ||
                    //                 "/_error" === e
                    //                 ? [
                    //                     {
                    //                       type: "index",
                    //                       name: "\u8d22\u8054\u793e\u9996\u9875",
                    //                     },
                    //                     {
                    //                       type: "telegraph",
                    //                       name: "\u7535\u62a5",
                    //                     },
                    //                     {
                    //                       type: "subject",
                    //                       name: "\u8bdd\u9898",
                    //                     },
                    //                     {
                    //                       type: "finance",
                    //                       name: "\u76ef\u76d8",
                    //                     },
                    //                     { type: "vip", name: "VIP" },
                    //                     { type: "fm", name: "FM" },
                    //                     {
                    //                       type: "investpro",
                    //                       name: "\u6295\u7814",
                    //                     },
                    //                     {
                    //                       type: "download",
                    //                       name: "\u4e0b\u8f7d",
                    //                     },
                    //                   ].map(function (t, e) {
                    //                     return T(
                    //                       "a",
                    //                       {
                    //                         className: "f-s-15 c-a6a6b3",
                    //                         key: ""
                    //                           .concat(t.type, "-")
                    //                           .concat(e),
                    //                         href: "/".concat(
                    //                           "index" === t.type ? "" : t.type,
                    //                         ),
                    //                       },
                    //                       t.name,
                    //                     );
                    //                   })
                    //                 : [
                    //                     {
                    //                       type: "/our?nav=our",
                    //                       name: "\u5173\u4e8e\u6211\u4eec",
                    //                     },
                    //                     {
                    //                       type: "/our?nav=copyright",
                    //                       name: "\u7f51\u7ad9\u58f0\u660e",
                    //                     },
                    //                     {
                    //                       type: "/our?nav=contact",
                    //                       name: "\u8054\u7cfb\u65b9\u5f0f",
                    //                     },
                    //                     {
                    //                       type: "/our?nav=feedBack",
                    //                       name: "\u7528\u6237\u53cd\u9988",
                    //                     },
                    //                     {
                    //                       type: "/our?nav=map",
                    //                       name: "\u7f51\u7ad9\u5730\u56fe",
                    //                     },
                    //                     {
                    //                       type: "/our?nav=tips",
                    //                       name: "\u5e2e\u52a9",
                    //                     },
                    //                   ].map(function (t, e) {
                    //                     return T(
                    //                       "a",
                    //                       {
                    //                         key: ""
                    //                           .concat(t.type, "-")
                    //                           .concat(e),
                    //                         href: "".concat(t.type),
                    //                         className: "f-s-15 c-6a6a6a",
                    //                       },
                    //                       t.name,
                    //                     );
                    //                   }),
                    //             ),
                    //             T(P, {
                    //               handleIsShowLogOutBox: function (e) {
                    //                 return t.handleIsShowLogOutBox(e);
                    //               },
                    //             }),
                    //           ),
                    //         ),
                    //         T(
                    //           "div",
                    //           { className: "p-r m-auto w-1200" },
                    //           "/searchPage" !== e &&
                    //             "/user" !== e &&
                    //             "/_error" !== e &&
                    //             "/vip" !== e &&
                    //             T(
                    //               s.a.Fragment,
                    //               null,
                    //               !!this.state.homeBannerData.top &&
                    //                 !!this.state.homeBannerData.top.length &&
                    //                 T(
                    //                   "div",
                    //                   { className: "w-100p o-h top-activity" },
                    //                   T(L.a, {
                    //                     dataList: this.state.homeBannerData.top,
                    //                     type: "top",
                    //                   }),
                    //                 ),
                    //               T(
                    //                 "div",
                    //                 { className: "clearfix level-1-nav-box" },
                    //                 T(
                    //                   "a",
                    //                   { href: "/", className: "f-l" },
                    //                   T(
                    //                     "h1",
                    //                     null,
                    //                     T("div", {
                    //                       className: "p-r level-1-logo-box",
                    //                       title: "\u8d22\u8054\u793e",
                    //                     }),
                    //                   ),
                    //                 ),
                    //                 T(
                    //                   "div",
                    //                   { className: "f-l level-1-nav" },
                    //                   [
                    //                     { type: "index", name: "\u9996\u9875" },
                    //                     {
                    //                       type: "telegraph",
                    //                       name: "\u7535\u62a5",
                    //                     },
                    //                     {
                    //                       type: "subject",
                    //                       name: "\u8bdd\u9898",
                    //                     },
                    //                     {
                    //                       type: "finance",
                    //                       name: "\u76ef\u76d8",
                    //                     },
                    //                     { type: "vip", name: "VIP" },
                    //                     { type: "fm", name: "FM" },
                    //                     {
                    //                       type: "investpro",
                    //                       name: "\u6295\u7814",
                    //                     },
                    //                     {
                    //                       type: "download",
                    //                       name: "\u4e0b\u8f7d",
                    //                     },
                    //                   ].map(function (e, r) {
                    //                     return T(
                    //                       "a",
                    //                       {
                    //                         key: ""
                    //                           .concat(e.type, "-")
                    //                           .concat(r),
                    //                         href: "/".concat(
                    //                           "index" === e.type ? "" : e.type,
                    //                         ),
                    //                         className:
                    //                           t.props.chooseNav === e.type
                    //                             ? "c-de0422"
                    //                             : "c-4d4d4d",
                    //                         target: "_blank",
                    //                         rel: "noopener noreferrer",
                    //                       },
                    //                       T(
                    //                         "h2",
                    //                         { className: "f-s-20" },
                    //                         e.name,
                    //                       ),
                    //                     );
                    //                   }),
                    //                 ),
                    //                 T(
                    //                   "div",
                    //                   {
                    //                     className: "f-r p-r header-search-box",
                    //                   },
                    //                   T("input", {
                    //                     className:
                    //                       "f-s-14 c-222 bg-c-f9fafc b-c-e6e7ea header-search-input",
                    //                     type: "text",
                    //                     placeholder:
                    //                       "\u8bf7\u8f93\u5165\u8981\u641c\u7d22\u7684\u4fe1\u606f",
                    //                     value: this.state.searchValue,
                    //                     onKeyDown: function (e) {
                    //                       return t.handleSubmit(e.keyCode);
                    //                     },
                    //                     onChange: function (e) {
                    //                       return t.handleChangeSearchValue(
                    //                         e.target.value,
                    //                       );
                    //                     },
                    //                   }),
                    //                   T(
                    //                     "span",
                    //                     {
                    //                       onClick: function () {
                    //                         t.state.searchValue &&
                    //                           Object(A.k)(
                    //                             t.state.searchValue,
                    //                           ) &&
                    //                           (location.href =
                    //                             "/searchPage?type=all&keyword=".concat(
                    //                               encodeURIComponent(
                    //                                 Object(A.k)(
                    //                                   t.state.searchValue,
                    //                                 ),
                    //                               ),
                    //                             ));
                    //                       },
                    //                       rel: "noopener noreferrer",
                    //                     },
                    //                     T("em", {
                    //                       className:
                    //                         "v-a-m f-s-20 l-h-1 c-222 c-p iconfont iconsearch header-search-icon",
                    //                     }),
                    //                   ),
                    //                 ),
                    //               ),
                    //             ),
                    //         ),
                    //       ),
                    // ),
                    this.state.isShowLogOutBox &&
                      T(_.a, {
                        handleIsShowLogOutBox: function (e) {
                          return t.handleIsShowLogOutBox(e);
                        },
                      }),
                  );
                },
              },
            ]),
            r
          );
        })(u.Component),
        G = Object(f.withRouter)(
          Object(l.b)(
            function (t) {
              return {
                userInfo: t.user.userInfo,
                chooseNav: t.common.chooseNav,
              };
            },
            function (t) {
              return {
                handleLogOut: function () {
                  return t(Object(k.j)());
                },
                handleSetUserInfo: function (e) {
                  return t(Object(k.m)(e));
                },
                handleSetBanner: function (e) {
                  return t(Object(k.k)(e));
                },
                handelChangeUserAvatar: function (e) {
                  return t(Object(N.l)(e));
                },
              };
            },
          )(C),
        ),
        R = r("aCH8"),
        D = r.n(R),
        F = r("ozPp"),
        M = s.a.createElement,
        B = Object(l.b)(
          function (t) {
            return {
              step: t.layout.step,
              uid: t.user.userInfo.uid,
              siteHost: t.layout.siteHost,
            };
          },
          function (t) {
            return {
              handleLogin: function (e) {
                return t(Object(k.i)(e));
              },
              handleCloseLoginRegister: function () {
                return t(Object(k.h)());
              },
              handleToggleStep: function (e) {
                return t(Object(k.n)(e));
              },
            };
          },
        )(function (t) {
          var e = Object(u.useState)(""),
            r = e[0],
            n = e[1],
            o = Object(u.useState)(""),
            a = o[0],
            i = o[1],
            c = Object(u.useState)(""),
            l = c[0],
            f = c[1],
            p = Object(u.useState)("\u53d1\u9001\u9a8c\u8bc1\u7801"),
            h = p[0],
            d = p[1],
            v = Object(u.useState)(""),
            y = v[0],
            g = v[1],
            m = Object(u.useState)("password"),
            b = m[0],
            x = m[1],
            O = Object(u.useState)(!1),
            j = O[0],
            E = O[1],
            L = Object(u.useState)(!1),
            _ = L[0],
            k = L[1],
            N = Object(u.useRef)(null),
            A = Object(u.useRef)(null);
          (Object(u.useEffect)(function () {
            return function () {
              ((document.documentElement.style.overflowY = ""),
                clearInterval(N.current),
                A.current &&
                  "function" === typeof A.current.destroyCaptcha &&
                  A.current.destroyCaptcha());
            };
          }, []),
            Object(u.useEffect)(
              function () {
                (clearInterval(N.current),
                  t.step
                    ? ((document.documentElement.style.overflowY = "hidden"),
                      d("\u53d1\u9001\u9a8c\u8bc1\u7801"),
                      "register" === t.step
                        ? (n(""), i(""), g(""), E(!1))
                        : "login" === t.step
                          ? (i(""), g(""), x("password"))
                          : "forgetPassword" === t.step && (i(""), g("")))
                    : (document.documentElement.style.overflowY = ""));
              },
              [t.step],
            ),
            Object(u.useEffect)(
              function () {
                f("");
              },
              [r, a, y, b, j, t.step, _],
            ),
            Object(u.useEffect)(
              function () {
                return (
                  "number" === typeof h &&
                    (N.current = setInterval(function () {
                      d(function (t) {
                        return t <= 1
                          ? "\u91cd\u53d1\u9a8c\u8bc1\u7801"
                          : t - 1;
                      });
                    }, 1e3)),
                  function () {
                    N.current && clearInterval(N.current);
                  }
                );
              },
              [h],
            ));
          var T = function () {
              return r && r.trim()
                ? /^\d{11}$/.test(r.trim())
                  ? ""
                  : "\u624b\u673a\u53f7\u683c\u5f0f\u4e0d\u6b63\u786e"
                : "\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7";
            },
            I = function (t, e) {
              var r = T();
              r ? f(r) : P(t, e);
            },
            P = function (t, e) {
              Object(S.request)({
                url: "/v1/sms/send",
                params: { captcha_verify_param: e, codeBy: t, phone: r },
              })
                .then(function (t) {
                  t &&
                    200 === t.status &&
                    t.data &&
                    (0 === t.data.errno
                      ? (clearInterval(N.current),
                        ("\u53d1\u9001\u9a8c\u8bc1\u7801" !== h &&
                          "\u91cd\u53d1\u9a8c\u8bc1\u7801" !== h) ||
                          d(59))
                      : f(t.data.msg || "\u8bf7\u6c42\u5931\u8d25"));
                })
                .catch(function (t) {
                  console.log(t);
                });
            },
            C = function (t) {
              var e = T();
              e
                ? (f(e),
                  A.current &&
                    "function" === typeof A.current.destroyCaptcha &&
                    A.current.destroyCaptcha())
                : B(t);
            },
            G = function (t) {
              (x(t.type),
                "verify" === t.type &&
                  (clearInterval(N.current),
                  d("\u53d1\u9001\u9a8c\u8bc1\u7801")));
            },
            R = function (e) {
              var n = T();
              n
                ? f(n)
                : y || "password" !== b
                  ? a || "verify" !== b
                    ? _ || "verify" !== b
                      ? Object(S.request)({
                          url: "/v1/user/login",
                          method: "POST",
                          data: {
                            captcha_verify_param: "password" === b ? e : "",
                            login_type: "password" === b ? 1 : 7,
                            password: D()(y),
                            phone: r,
                            captcha: a || "",
                          },
                        })
                          .then(function (e) {
                            e &&
                              200 === e.status &&
                              e.data &&
                              (0 === e.data.error && e.data.data
                                ? t.handleLogin(e.data.data)
                                : f(
                                    e.data.msg
                                      ? e.data.msg
                                      : e.data.data
                                        ? e.data.data
                                        : "\u8bf7\u6c42\u5931\u8d25",
                                  ));
                          })
                          .catch(function (t) {
                            console.log(t);
                          })
                      : f(
                          "\u8bf7\u5148\u9605\u8bfb\u5e76\u540c\u610f\u76f8\u5173\u534f\u8bae",
                        )
                    : f("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801")
                  : f("\u8bf7\u8f93\u5165\u5bc6\u7801");
            },
            B = function (t) {
              window.initAliyunCaptcha({
                SceneId: "69c2pyfs",
                mode: "embed",
                element: "#aliyun-captcha",
                button: "#aliyun-captcha-button-hide",
                success: function (e) {
                  "function" === typeof t && t(e);
                },
                fail: function (t) {
                  console.error(t);
                },
                getInstance: function (t) {
                  A.current = t;
                },
                slideStyle: { width: 360, height: 40 },
                language: "cn",
              });
            },
            V = t.siteHost,
            q = "";
          return (
            (q =
              "test" === w.a.get("checkKey")
                ? "https://open.weixin.qq.com/connect/qrconnect?appid=wxc3e11fd6ee8f9501&redirect_uri=https%3A%2F%2Ft-api3.cls.cn%2Fv1%2Fuser%2Fweb%2Fwx_login%3Fsite_url%3Dhttp%3A%2F%2F".concat(
                    V,
                    "%2Fweixin&response_type=code&scope=snsapi_login#wechat_redirect",
                  )
                : "https://open.weixin.qq.com/connect/qrconnect?appid=wxc3e11fd6ee8f9501&redirect_uri=https%3A%2F%2Fapi3.cls.cn%2Fv1%2Fuser%2Fweb%2Fwx_login%3Fsite_url%3Dhttps%3A%2F%2F".concat(
                    V,
                    "%2Fweixin&response_type=code&scope=snsapi_login#wechat_redirect",
                  )),
            t.step &&
              M(
                "div",
                { className: "p-f t-0 l-0 z-i-1100 w-100p h-100p bg-c-000-78" },
                M(
                  "div",
                  {
                    className:
                      "p-a t-50p l-50p z-i-10 w-420 o-h bg-c-fff t-t--50p",
                  },
                  M(
                    "div",
                    {
                      className:
                        "p-a t-0 r-0 p-t-10 p-r-20 p-b-10 p-l-20 f-s-20 l-h-1 c-666 c-p",
                      onClick: t.handleCloseLoginRegister,
                    },
                    "\u2715",
                  ),
                  "login" === t.step &&
                    M(
                      s.a.Fragment,
                      null,
                      M(
                        "div",
                        { className: "m-t-67 m-b-46 m-auto w-142" },
                        M("img", {
                          className: "v-a-t w-100p",
                          src: "https://cdnjs.cls.cn/www/20200601/image/logo.png",
                          alt: "\u8d22\u8054\u793e",
                        }),
                      ),
                      M(
                        "div",
                        { className: "p-r-30 p-l-30" },
                        M(
                          "div",
                          null,
                          M(
                            "div",
                            {
                              className:
                                "clearfix m-b-30 w-100p h-39 f-s-14 l-h-38p c-747474 b-b-w-1 b-b-s-s b-c-e6e7ea",
                            },
                            M(
                              "div",
                              {
                                className:
                                  "f-l w-178 t-a-c b-t-w-1 b-t-s-s b-l-w-1 b-l-s-s b-c-e6e7ea c-p ".concat(
                                    "password" === b
                                      ? "f-w-b c-222 bg-c-fff b-t-w-2 b-t-c-222"
                                      : "bg-c-f9fafc",
                                  ),
                                onClick: function () {
                                  return G({ type: "password" });
                                },
                              },
                              "\u5bc6\u7801\u767b\u5f55",
                            ),
                            M(
                              "div",
                              {
                                className:
                                  "f-l w-179 t-a-c b-t-w-1 b-t-s-s b-l-w-1 b-l-s-s b-r-w-1 b-r-s-s b-c-e6e7ea c-p ".concat(
                                    "verify" === b
                                      ? "f-w-b c-222 bg-c-fff b-t-w-2 b-t-c-222"
                                      : "bg-c-f9fafc",
                                  ),
                                onClick: function () {
                                  return G({ type: "verify" });
                                },
                              },
                              "\u9a8c\u8bc1\u7801\u767b\u5f55",
                            ),
                          ),
                          M(
                            "div",
                            null,
                            M(
                              "div",
                              { className: "m-b-11 w-100p l-h-22p" },
                              M("input", {
                                type: "text",
                                className:
                                  "p-t-17 p-r-0 p-b-17 p-l-0 w-100p f-s-16 l-h-22p c-222 b-b-w-1 b-b-s-s b-c-e6e7ea register-input",
                                placeholder:
                                  "\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7",
                                value: r,
                                onChange: function (t) {
                                  (n(t.target.value),
                                    A.current &&
                                      "function" ===
                                        typeof A.current.destroyCaptcha &&
                                      A.current.destroyCaptcha());
                                },
                              }),
                            ),
                            "verify" === b &&
                              M(
                                s.a.Fragment,
                                null,
                                M(
                                  "div",
                                  { className: "p-r m-b-11 w-100p l-h-22p" },
                                  M("input", {
                                    type: "text",
                                    className:
                                      "p-t-17 p-r-0 p-b-17 p-l-0 w-100p f-s-16 l-h-22p c-222 b-b-w-1 b-b-s-s b-c-e6e7ea register-input",
                                    placeholder:
                                      "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
                                    autoComplete: "one-time-code",
                                    value: a,
                                    onChange: function (t) {
                                      return i(t.target.value);
                                    },
                                    onKeyDown: function (t) {
                                      13 === t.keyCode && R();
                                    },
                                  }),
                                  M(
                                    "div",
                                    {
                                      className:
                                        "p-a t-17 r-0 p-l-15 f-s-14 l-h-142857 bg-c-fff ".concat(
                                          "\u53d1\u9001\u9a8c\u8bc1\u7801" !==
                                            h &&
                                            "\u91cd\u53d1\u9a8c\u8bc1\u7801" !==
                                              h
                                            ? "p-r-15"
                                            : "c-p",
                                        ),
                                      onClick: function () {
                                        ("\u53d1\u9001\u9a8c\u8bc1\u7801" !==
                                          h &&
                                          "\u91cd\u53d1\u9a8c\u8bc1\u7801" !==
                                            h) ||
                                          C(function (t) {
                                            return I("login", t);
                                          });
                                      },
                                    },
                                    "number" === typeof h
                                      ? "".concat(h, "s")
                                      : h,
                                  ),
                                ),
                                M(F.a, { className: "m-b-11" }),
                              ),
                            "password" === b &&
                              M(
                                s.a.Fragment,
                                null,
                                M(
                                  "div",
                                  { className: "p-r m-b-11 w-100p l-h-22p" },
                                  M("input", {
                                    type: "password",
                                    className:
                                      "p-t-17 p-r-0 p-b-17 p-l-0 w-100p f-s-16 l-h-22p c-222 b-b-w-1 b-b-s-s b-c-e6e7ea register-input",
                                    value: y,
                                    placeholder:
                                      "\u8bf7\u8f93\u5165\u5bc6\u7801",
                                    onChange: function (t) {
                                      return g(t.target.value || "");
                                    },
                                    onKeyDown: function (t) {
                                      13 === t.keyCode && R();
                                    },
                                  }),
                                  M(
                                    "div",
                                    {
                                      className:
                                        "p-a t-17 r-0 p-l-15 p-r-15 f-s-14 bg-c-fff c-p",
                                      onClick: function () {
                                        return t.handleToggleStep({
                                          step: "forgetPassword",
                                        });
                                      },
                                    },
                                    "\u5fd8\u8bb0\u5bc6\u7801\uff1f",
                                  ),
                                ),
                                M(F.a, { className: "m-b-11" }),
                              ),
                          ),
                        ),
                        "verify" === b &&
                          M(
                            "div",
                            { className: "d-f m-b-10 f-s-12 c-999 t-a-c" },
                            M("input", {
                              type: "checkbox",
                              className: "m-r-10",
                              checked: _,
                              onChange: function (t) {
                                return k(t.target.checked);
                              },
                            }),
                            M(
                              "div",
                              null,
                              "\u767b\u5f55/\u6ce8\u518c\u5373\u4ee3\u8868\u60a8\u5df2\u7ecf\u540c\u610f",
                            ),
                            M(
                              "span",
                              { className: "c-de0422" },
                              "\u300a",
                              M(
                                "a",
                                {
                                  className: "c-de0422",
                                  href: "https://image.cls.cn/html/privilege/agreement.html",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                },
                                "\u7528\u6237\u534f\u8bae",
                              ),
                              "/",
                              M(
                                "a",
                                {
                                  className: "c-de0422",
                                  href: "https://image.cls.cn/html/privilege/privacy_policy.html",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                },
                                "\u9690\u79c1\u653f\u7b56",
                              ),
                              "\u300b",
                            ),
                          ),
                        M(
                          "div",
                          { className: "m-b-30 f-s-12 l-h-141667 c-de0422" },
                          l,
                        ),
                        M(
                          "div",
                          {
                            className:
                              "m-b-40 h-48 l-h-48p f-s-18 f-w-b c-fff b-r-999 l-s-2 \n                      ".concat(
                                "password" === b
                                  ? "".concat(
                                      r && y
                                        ? "bg-c-de0422 c-p"
                                        : "bg-c-e6e7ea",
                                    )
                                  : " ".concat(
                                      r && a
                                        ? "bg-c-de0422 c-p"
                                        : "bg-c-e6e7ea",
                                      "  ",
                                    ),
                                " t-a-c",
                              ),
                            onClick: function () {
                              "verify" === b && r && a
                                ? R()
                                : "password" === b &&
                                  r &&
                                  y &&
                                  C(function (t) {
                                    return R(t);
                                  });
                            },
                          },
                          "\u767b\u5f55",
                        ),
                      ),
                      M(
                        "div",
                        { className: "w-100p h-100 t-a-c bg-c-e6e7ea" },
                        M(
                          "div",
                          { className: "clearfix p-t-26" },
                          M(
                            "div",
                            { className: "m-auto w-48 t-a-c login-wx" },
                            M(
                              "a",
                              { href: q },
                              M("div", {
                                className:
                                  "m-auto m-b-11 w-36 h-30 bg-r-n bg-p-c bg-s-100-a login-icon",
                              }),
                              M(
                                "div",
                                { className: "f-s-12 c-999" },
                                "\u5fae\u4fe1\u767b\u5f55",
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  "forgetPassword" === t.step &&
                    M(
                      "div",
                      { className: "p-t-67 p-r-30 p-b-31 p-l-30" },
                      M(
                        "div",
                        {
                          className:
                            "m-t-49 m-b-11 f-s-28 f-w-b l-h-142857 c-222",
                        },
                        "\u5fd8\u8bb0\u5bc6\u7801",
                      ),
                      M(
                        "div",
                        { className: "m-b-11 w-100p l-h-22p" },
                        M("input", {
                          type: "text",
                          className:
                            "p-t-17 p-r-0 p-b-17 p-l-0 w-100p f-s-16 l-h-22p c-222 b-b-w-1 b-b-s-s b-c-e6e7ea register-input",
                          placeholder:
                            "\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7",
                          value: r,
                          onChange: function (t) {
                            (n(t.target.value),
                              A.current &&
                                "function" ===
                                  typeof A.current.destroyCaptcha &&
                                A.current.destroyCaptcha());
                          },
                        }),
                      ),
                      M(
                        "div",
                        { className: "p-r m-b-11 w-100p l-h-22p" },
                        M("input", {
                          type: "text",
                          className:
                            "p-t-17 p-r-0 p-b-17 p-l-0 w-100p f-s-16 l-h-22p c-222 b-b-w-1 b-b-s-s b-c-e6e7ea register-input",
                          placeholder: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
                          autoComplete: "one-time-code",
                          value: a,
                          onChange: function (t) {
                            return i(t.target.value);
                          },
                        }),
                        M(
                          "div",
                          {
                            className:
                              "p-a t-17 r-0 p-l-15 f-s-14 l-h-142857 c-222 bg-c-fff ".concat(
                                "\u53d1\u9001\u9a8c\u8bc1\u7801" !== h &&
                                  "\u91cd\u53d1\u9a8c\u8bc1\u7801" !== h
                                  ? "p-r-15"
                                  : "c-p",
                              ),
                            onClick: function () {
                              ("\u53d1\u9001\u9a8c\u8bc1\u7801" !== h &&
                                "\u91cd\u53d1\u9a8c\u8bc1\u7801" !== h) ||
                                C(function (t) {
                                  return I("forget", t);
                                });
                            },
                          },
                          "number" === typeof h ? "".concat(h, "s") : h,
                        ),
                      ),
                      M(F.a, { className: "m-b-11" }),
                      M(
                        "div",
                        { className: "p-r m-b-11 w-100p l-h-22p" },
                        M("input", {
                          type: "password",
                          className:
                            "p-t-17 p-r-0 p-b-17 p-l-0 w-100p f-s-16 l-h-22p c-222 b-b-w-1 b-b-s-s b-c-e6e7ea register-input",
                          value: y,
                          placeholder: "\u8bf7\u8f93\u5165\u65b0\u5bc6\u7801",
                          autoComplete: "new-password",
                          onChange: function (t) {
                            return g(t.target.value || "");
                          },
                        }),
                      ),
                      M(
                        "div",
                        { className: "m-b-11 f-s-12 l-h-141667 c-222" },
                        "6~15\u4f4d\u81f3\u5c11\u5305\u542b\u5927\u5199\u5b57\u6bcd\u3001\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u7279\u6b8a\u7b26\u53f7\u4e2d\u76843\u79cd",
                      ),
                      M(
                        "div",
                        { className: "m-b-30 f-s-12 l-h-141667 c-de0422" },
                        l,
                      ),
                      M(
                        "div",
                        {
                          className:
                            "m-t-110 m-b-10 h-48 f-s-18 l-h-48p c-fff \n                    ".concat(
                              "forgetPassword" === t.step
                                ? "".concat(
                                    r && a && y ? "bg-c-de0422" : "bg-c-e6e7ea",
                                  )
                                : "",
                              " t-a-c b-r-999 c-p l-s-2",
                            ),
                          onClick: function () {
                            return (function () {
                              var e = T();
                              e
                                ? f(e)
                                : y
                                  ? /^.{6,15}$/.test(y)
                                    ? /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/.test(
                                        y,
                                      ) ||
                                      /(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9])/.test(
                                        y,
                                      ) ||
                                      /(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?=.*[a-zA-Z])/.test(
                                        y,
                                      )
                                      ? /^[^\s]*$/.test(y)
                                        ? a
                                          ? Object(S.request)({
                                              url: "/v1/user/forget_password",
                                              method: "POST",
                                              data: {
                                                phone: Number(r),
                                                captcha: a,
                                                password: D()(y),
                                              },
                                            })
                                              .then(function (e) {
                                                e &&
                                                  200 === e.status &&
                                                  e.data &&
                                                  (0 === e.data.errno
                                                    ? t.handleToggleStep({
                                                        step: "login",
                                                      })
                                                    : f(
                                                        e.data.msg
                                                          ? e.data.msg
                                                          : e.data.data
                                                            ? e.data.data
                                                            : "\u8bf7\u6c42\u5931\u8d25",
                                                      ));
                                              })
                                              .catch(function (t) {
                                                console.log(t);
                                              })
                                          : f(
                                              "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
                                            )
                                        : f(
                                            "\u5bc6\u7801\u4e0d\u5141\u8bb8\u6709\u7a7a\u683c",
                                          )
                                      : f(
                                          "\u5bc6\u7801\u81f3\u5c11\u5305\u542b\u5927\u5199\u5b57\u6bcd\u3001\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u7279\u6b8a\u7b26\u53f7\u4e2d\u76843\u79cd",
                                        )
                                    : f(
                                        "\u5bc6\u7801\u957f\u5ea6\u9700\u89816~15\u4f4d",
                                      )
                                  : f("\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a");
                            })();
                          },
                        },
                        "\u786e\u8ba4",
                      ),
                      M(
                        "div",
                        {
                          className: "f-s-14 c-222 t-a-c c-p",
                          onClick: function () {
                            return t.handleToggleStep({ step: "login" });
                          },
                        },
                        "\u53bb\u767b\u5f55",
                      ),
                    ),
                  "register" === t.step &&
                    M(
                      s.a.Fragment,
                      null,
                      M(
                        "div",
                        { className: "p-t-67 p-r-30 p-b-31 p-l-30" },
                        M(
                          "div",
                          {
                            className:
                              "m-t-49 m-b-11 f-s-28 f-w-b l-h-142857 c-222",
                          },
                          "\u65b0\u7528\u6237\u6ce8\u518c",
                        ),
                        M(
                          "div",
                          { className: "p-r m-b-11 w-100p l-h-22p" },
                          M("input", {
                            type: "text",
                            className:
                              "p-t-17 p-r-0 p-b-17 p-l-0 w-100p f-s-16 l-h-22p c-222 b-b-w-1 b-b-s-s b-c-e6e7ea register-input",
                            placeholder:
                              "\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7",
                            autoComplete: "username",
                            value: r,
                            onChange: function (t) {
                              (n(t.target.value),
                                A.current &&
                                  "function" ===
                                    typeof A.current.destroyCaptcha &&
                                  A.current.destroyCaptcha());
                            },
                          }),
                        ),
                        M(
                          "div",
                          { className: "p-r m-b-11 w-100p l-h-22p" },
                          M("input", {
                            type: "text",
                            className:
                              "p-t-17 p-r-0 p-b-17 p-l-0 w-100p f-s-16 l-h-22p c-222 b-b-w-1 b-b-s-s b-c-e6e7ea register-input",
                            placeholder: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
                            autoComplete: "one-time-code",
                            value: a,
                            onChange: function (t) {
                              return i(t.target.value);
                            },
                          }),
                          M(
                            "div",
                            {
                              className:
                                "p-a t-17 r-0 p-l-15 f-s-14 l-h-142857 c-222 bg-c-fff ".concat(
                                  "\u53d1\u9001\u9a8c\u8bc1\u7801" !== h &&
                                    "\u91cd\u53d1\u9a8c\u8bc1\u7801" !== h
                                    ? "p-r-15"
                                    : "c-p",
                                ),
                              onClick: function () {
                                ("\u53d1\u9001\u9a8c\u8bc1\u7801" !== h &&
                                  "\u91cd\u53d1\u9a8c\u8bc1\u7801" !== h) ||
                                  C(function (t) {
                                    return I("reg", t);
                                  });
                              },
                            },
                            "number" === typeof h ? "".concat(h, "s") : h,
                          ),
                        ),
                        M(F.a, { className: "m-b-11" }),
                        M(
                          "div",
                          { className: "m-b-11 w-100p l-h-22p" },
                          M("input", {
                            type: "password",
                            className:
                              "p-t-17 p-r-0 p-b-17 p-l-0 w-100p f-s-16 l-h-22p c-222 b-b-w-1 b-b-s-s b-c-e6e7ea register-input",
                            value: y,
                            placeholder: "\u8bf7\u8f93\u5165\u5bc6\u7801",
                            autoComplete: "new-password",
                            onChange: function (t) {
                              return g(t.target.value || "");
                            },
                          }),
                        ),
                        M(
                          "div",
                          { className: "m-b-17 f-s-12 c-222" },
                          "6~15\u4f4d\u81f3\u5c11\u5305\u542b\u5927\u5199\u5b57\u6bcd\u3001\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u7279\u6b8a\u7b26\u53f7\u4e2d\u76843\u79cd",
                        ),
                        M(
                          "div",
                          { className: "d-f m-b-10 f-s-12 c-999" },
                          M("input", {
                            type: "checkbox",
                            checked: j,
                            className: "m-r-10",
                            onChange: function (t) {
                              return E(t.target.checked);
                            },
                          }),
                          "\u540c\u610f",
                          M(
                            "span",
                            { className: "c-de0422" },
                            "\u300a",
                            M(
                              "a",
                              {
                                className: "c-de0422",
                                href: "https://image.cls.cn/html/privilege/agreement.html",
                                target: "_blank",
                                rel: "noopener noreferrer",
                              },
                              "\u7528\u6237\u534f\u8bae",
                            ),
                            "/",
                            M(
                              "a",
                              {
                                className: "c-de0422",
                                href: "https://image.cls.cn/html/privilege/privacy_policy.html",
                                target: "_blank",
                                rel: "noopener noreferrer",
                              },
                              "\u9690\u79c1\u653f\u7b56",
                            ),
                            "\u300b",
                          ),
                        ),
                        M(
                          "div",
                          { className: "m-b-30 f-s-12 l-h-141667 c-de0422" },
                          l,
                        ),
                        M(
                          "div",
                          {
                            className:
                              "m-t-110 m-b-10 h-48 f-s-18 l-h-48p f-w-b c-fff ".concat(
                                r && a && y ? "bg-c-de0422" : "bg-c-e6e7ea",
                                " t-a-c b-r-999 c-p l-s-2",
                              ),
                            onClick: function () {
                              r &&
                                a &&
                                y &&
                                (function () {
                                  var e = T();
                                  e
                                    ? f(e)
                                    : a && a.trim()
                                      ? y
                                        ? /^.{6,15}$/.test(y)
                                          ? /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/.test(
                                              y,
                                            ) ||
                                            /(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9])/.test(
                                              y,
                                            ) ||
                                            /(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?=.*[a-zA-Z])/.test(
                                              y,
                                            )
                                            ? /^[^\s]*$/.test(y)
                                              ? j
                                                ? Object(S.request)({
                                                    url: "/v1/user/register",
                                                    method: "POST",
                                                    data: {
                                                      login_type: 0,
                                                      captcha: a,
                                                      password: D()(y),
                                                      phone: Number(r),
                                                      cuid: r,
                                                      uname: "",
                                                    },
                                                  })
                                                    .then(function (e) {
                                                      e &&
                                                        200 === e.status &&
                                                        e.data &&
                                                        (0 === e.data.errno
                                                          ? t.handleToggleStep({
                                                              step: "login",
                                                            })
                                                          : f(
                                                              e.data.msg
                                                                ? e.data.msg
                                                                : "\u8bf7\u6c42\u5931\u8d25",
                                                            ));
                                                    })
                                                    .catch(function (t) {
                                                      console.log(t);
                                                    })
                                                : f(
                                                    "\u8bf7\u5148\u9605\u8bfb\u5e76\u540c\u610f\u76f8\u5173\u534f\u8bae",
                                                  )
                                              : f(
                                                  "\u5bc6\u7801\u4e0d\u5141\u8bb8\u6709\u7a7a\u683c",
                                                )
                                            : f(
                                                "\u5bc6\u7801\u81f3\u5c11\u5305\u542b\u5927\u5199\u5b57\u6bcd\u3001\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u7279\u6b8a\u7b26\u53f7\u4e2d\u76843\u79cd",
                                              )
                                          : f(
                                              "\u5bc6\u7801\u957f\u5ea6\u9700\u89816~15\u4f4d",
                                            )
                                        : f(
                                            "\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a",
                                          )
                                      : f(
                                          "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
                                        );
                                })();
                            },
                          },
                          "\u786e\u8ba4",
                        ),
                        M(
                          "div",
                          {
                            className: "f-s-14 c-222 t-a-c c-p",
                            onClick: function () {
                              return t.handleToggleStep({ step: "login" });
                            },
                          },
                          "\u8fd4\u56de\u767b\u5f55",
                        ),
                      ),
                    ),
                ),
              )
          );
        }),
        V = s.a.createElement,
        q = Object(l.b)(
          function () {
            return {};
          },
          function (t) {
            return {
              handleLogin: function (e) {
                return t(Object(k.i)(e));
              },
            };
          },
        )(function (t) {
          var e = Object(u.useState)(""),
            r = e[0],
            n = e[1],
            o = Object(u.useState)(!1),
            a = o[0],
            i = o[1],
            c = Object(u.useState)(""),
            s = c[0],
            l = c[1],
            f = Object(u.useState)(""),
            h = f[0],
            d = f[1],
            v = Object(u.useState)(""),
            y = v[0],
            g = v[1],
            m = Object(u.useState)("\u53d1\u9001\u9a8c\u8bc1\u7801"),
            b = m[0],
            w = m[1],
            x = Object(u.useRef)(null),
            O = Object(u.useRef)(null),
            j = Object(u.useRef)(null);
          (Object(u.useEffect)(function () {
            return function () {
              (clearInterval(x.current),
                clearTimeout(O.current),
                j.current &&
                  "function" === typeof j.current.destroyCaptcha &&
                  j.current.destroyCaptcha());
            };
          }, []),
            Object(u.useEffect)(
              function () {
                t.isShow && i(t.isShow);
              },
              [t.isShow],
            ),
            Object(u.useEffect)(
              function () {
                d("");
              },
              [y, s],
            ),
            Object(u.useEffect)(
              function () {
                document.documentElement.style.overflowY = a ? "hidden" : "";
              },
              [a],
            ),
            Object(u.useEffect)(
              function () {
                "success" === r && (O.current = setTimeout(L, 5e3));
              },
              [r],
            ),
            Object(u.useEffect)(
              function () {
                return (
                  "number" === typeof b &&
                    (x.current = setInterval(function () {
                      w(function (t) {
                        return t <= 1
                          ? "\u91cd\u53d1\u9a8c\u8bc1\u7801"
                          : t - 1;
                      });
                    }, 1e3)),
                  function () {
                    x.current && clearInterval(x.current);
                  }
                );
              },
              [b],
            ));
          var E = function () {
              return y && y.trim()
                ? /^\d{11}$/.test(y.trim())
                  ? ""
                  : "\u624b\u673a\u53f7\u683c\u5f0f\u4e0d\u6b63\u786e"
                : "\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7";
            },
            L = function () {
              var e = t.queryData || {};
              e.type &&
                Object(S.request)({
                  url: "/v1/user/login",
                  method: "POST",
                  data: {
                    login_type: "weixin" === e.type ? 5 : 4,
                    QuickLoginUID: e.qq_uid ? e.qq_uid : "",
                    wxUnionId: e.unionid ? e.unionid : "",
                  },
                })
                  .then(function (e) {
                    e &&
                      200 === e.status &&
                      e.data &&
                      (0 === e.data.error && e.data.data
                        ? t.handleLogin(e.data.data)
                        : d(
                            e.data.msg
                              ? e.data.msg
                              : e.data.data
                                ? e.data.data
                                : "\u8bf7\u6c42\u5931\u8d25",
                          ));
                  })
                  .catch(function (t) {
                    console.log(t);
                  });
            },
            _ = function () {
              (n(""), i(!1), p.a.push({ pathname: "/" }));
            },
            k = function (t, e) {
              Object(S.request)({
                url: "/v1/sms/send",
                params: { captcha_verify_param: e, codeBy: t, phone: y },
              })
                .then(function (t) {
                  t &&
                    200 === t.status &&
                    t.data &&
                    (0 === t.data.errno
                      ? (clearInterval(x.current),
                        ("\u53d1\u9001\u9a8c\u8bc1\u7801" !== b &&
                          "\u91cd\u53d1\u9a8c\u8bc1\u7801" !== b) ||
                          w(59))
                      : d(t.data.msg || "\u8bf7\u6c42\u5931\u8d25"));
                })
                .catch(function (t) {
                  console.log(t);
                });
            },
            N = function (t) {
              window.initAliyunCaptcha({
                SceneId: "69c2pyfs",
                mode: "embed",
                element: "#aliyun-captcha",
                button: "#aliyun-captcha-button-hide",
                success: function (e) {
                  "function" === typeof t && t(e);
                },
                fail: function (t) {
                  console.error(t);
                },
                getInstance: function (t) {
                  j.current = t;
                },
                slideStyle: { width: 360, height: 40 },
                language: "cn",
              });
            };
          return r
            ? V(
                "div",
                { className: "p-f t-0 l-0 z-i-1100 w-100p h-100p bg-c-000-78" },
                V(
                  "div",
                  { className: "o-h bg-c-fff pay-box" },
                  V(
                    "div",
                    {
                      className:
                        "p-a t-0 r-0 p-t-10 p-r-20 p-b-10 p-l-20 f-s-20 l-h-1 c-666 c-p",
                      onClick: function () {
                        return _();
                      },
                    },
                    "\u2715",
                  ),
                  V(
                    "div",
                    { className: "m-t-50 m-b-10 t-a-c" },
                    V("img", {
                      className: "m-b-10 v-m-t",
                      src: "https://cdnjs.cls.cn/www/20180717/images/pay/pay_".concat(
                        r,
                        ".png",
                      ),
                      alt: "\u7ed1\u5b9a\u624b\u673a",
                    }),
                    V(
                      "div",
                      { className: "f-w-b" },
                      "success" === r
                        ? "\u7ed1\u5b9a\u6210\u529f"
                        : "\u7ed1\u5b9a\u5931\u8d25",
                    ),
                  ),
                  "success" === r
                    ? V(
                        "div",
                        { className: "t-a-c" },
                        V(
                          "div",
                          { className: "m-b-15 f-s-16 c-666" },
                          "\u606d\u559c\u60a8\u5df2\u6210\u529f\u8ba4\u8bc1\u8eab\u4efd\uff0c\u7acb\u5373\u53bb\u53d1\u8868\u60a8\u7684\u770b\u6cd5\u5427",
                        ),
                        V(
                          "div",
                          { className: "m-b-30 f-s-12" },
                          "5s \u540e\u81ea\u52a8\u767b\u5f55 ",
                        ),
                      )
                    : V(
                        "div",
                        { className: "m-b-20 t-a-c" },
                        V(
                          "div",
                          {
                            className:
                              "d-i-b w-375 h-50 f-s-14 l-h-50p c-fff t-a-c bg-c-ff9a02 c-p",
                            onClick: function () {
                              n("");
                            },
                          },
                          "\u91cd\u65b0\u7ed1\u5b9a",
                        ),
                      ),
                ),
              )
            : a
              ? V(
                  "div",
                  {
                    className: "p-f t-0 l-0 z-i-1100 w-100p h-100p bg-c-000-78",
                  },
                  V(
                    "div",
                    {
                      className:
                        "p-a t-50p l-50p z-i-10 w-420 bg-c-fff t-t--50p",
                    },
                    V(
                      "div",
                      {
                        className:
                          "p-a t-0 r-0 p-t-10 p-r-20 p-b-10 p-l-20 f-s-20 l-h-1 c-666 c-p",
                        onClick: function () {
                          return _();
                        },
                      },
                      "\u2715",
                    ),
                    V(
                      "div",
                      { className: "p-t-67 p-r-30 p-b-31 p-l-30" },
                      V(
                        "div",
                        null,
                        V(
                          "div",
                          {
                            className:
                              "m-t-49 m-b-11 f-s-28 f-w-b l-h-142857 c-222",
                          },
                          "\u7ed1\u5b9a\u624b\u673a\u53f7",
                        ),
                        V(
                          "div",
                          null,
                          "\u60a8\u9700\u8981\u7ed1\u5b9a\u624b\u673a\u53f7\u8ba4\u8bc1\u8eab\u4efd\u540e\u624d\u80fd\u53d1\u5e03\u4fe1\u606f\u3002\u8d76\u7d27\u7ed1\u5b9a\u4e00\u4e0b\u5427",
                        ),
                      ),
                      V(
                        "div",
                        { className: "m-b-11 w-100p l-h-22p" },
                        V("input", {
                          className:
                            "p-t-17 p-r-0 p-b-17 p-l-0 w-100p f-s-16 l-h-22p c-222 b-b-w-1 b-b-s-s b-c-e6e7ea register-input",
                          onChange: function (t) {
                            (g(t.target.value),
                              j.current &&
                                "function" ===
                                  typeof j.current.destroyCaptcha &&
                                j.current.destroyCaptcha());
                          },
                          value: y,
                          type: "text",
                          placeholder:
                            "\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7",
                        }),
                      ),
                      V(
                        "div",
                        { className: "p-r m-b-11 w-100p l-h-22p" },
                        V("input", {
                          className:
                            "p-t-17 p-r-0 p-b-17 p-l-0 w-100p f-s-16 l-h-22p c-222 b-b-w-1 b-b-s-s b-c-e6e7ea register-input",
                          type: "text",
                          onChange: function (t) {
                            return l(t.target.value);
                          },
                          value: s,
                          placeholder: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
                          autoComplete: "one-time-code",
                        }),
                        V(
                          "div",
                          {
                            className:
                              "p-a t-17 r-0 p-l-15 f-s-14 l-h-142857 c-222 bg-c-fff ".concat(
                                "\u53d1\u9001\u9a8c\u8bc1\u7801" !== b &&
                                  "\u91cd\u53d1\u9a8c\u8bc1\u7801" !== b
                                  ? "p-r-15"
                                  : "c-p ",
                              ),
                            onClick: function () {
                              ("\u53d1\u9001\u9a8c\u8bc1\u7801" !== b &&
                                "\u91cd\u53d1\u9a8c\u8bc1\u7801" !== b) ||
                                (function (t) {
                                  var e = E();
                                  e
                                    ? (d(e),
                                      j.current &&
                                        "function" ===
                                          typeof j.current.destroyCaptcha &&
                                        j.current.destroyCaptcha())
                                    : N(t);
                                })(function (t) {
                                  return (function (t, e) {
                                    var r = E();
                                    r ? d(r) : k(t, e);
                                  })("quickLogin", t);
                                });
                            },
                          },
                          "number" === typeof b ? "".concat(b, "s") : b,
                        ),
                      ),
                      V(F.a, { className: "m-b-11" }),
                      V(
                        "div",
                        { className: "m-b-30 f-s-12 l-h-141667 c-de0422" },
                        h,
                      ),
                      V(
                        "div",
                        {
                          className:
                            "m-b-10 h-48 f-s-18 l-h-48p f-w-b c-fff bg-c-de0422 t-a-c b-r-999 c-p l-s-2",
                          onClick: function () {
                            var e = t.queryData || {},
                              r = E();
                            r
                              ? d(r)
                              : s
                                ? e.type &&
                                  Object(S.request)({
                                    url: "/v1/user/register",
                                    method: "POST",
                                    data: {
                                      phone: Number(y),
                                      cuid: y,
                                      captcha: s,
                                      uname: e.nickname,
                                      login_type: "weixin" === e.type ? 5 : 4,
                                      QuickLoginUID: e.qq_uid ? e.qq_uid : "",
                                      wxUnionId: e.unionid ? e.unionid : "",
                                    },
                                  })
                                    .then(function (t) {
                                      t &&
                                        200 === t.status &&
                                        t.data &&
                                        (0 === t.data.errno
                                          ? n("success")
                                          : (d(
                                              t.data.msg
                                                ? t.data.msg
                                                : "\u8bf7\u6c42\u5931\u8d25",
                                            ),
                                            n("failed")));
                                    })
                                    .catch(function (t) {
                                      console.log(t);
                                    })
                                : d("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801");
                          },
                        },
                        "\u7acb\u5373\u7ed1\u5b9a",
                      ),
                    ),
                  ),
                )
              : null;
        }),
        U = r("hKvw");
      function z(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = Object(c.a)(t);
          if (e) {
            var o = Object(c.a)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return Object(i.a)(this, r);
        };
      }
      var H = (function (t) {
          Object(a.a)(r, t);
          var e = z(r);
          function r(t) {
            var o;
            return (
              Object(n.a)(this, r),
              ((o = e.call(this, t)).telegraphList = []),
              o
            );
          }
          return (
            Object(o.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  (this.props.dispatch(Object(U.z)()),
                    this.props.dispatch(Object(U.A)()));
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            r
          );
        })(u.Component),
        Y = Object(l.b)(function (t) {
          return t;
        })(H),
        K = s.a.createElement,
        W = function () {
          return null;
          // return K(
          //   "div",
          //   { className: "p-a l-0 b-0 w-100p h-100 bg-c-222" },
          //   K(
          //     "div",
          //     { className: "m-auto p-t-24 w-1200 f-s-12 l-h-141667 c-5f5f6a" },
          //     K(
          //       "div",
          //       { className: "c-b m-b-10" },
          //       [
          //         { type: "/our?nav=our", name: "\u5173\u4e8e\u6211\u4eec" },
          //         {
          //           type: "/our?nav=copyright",
          //           name: "\u7f51\u7ad9\u58f0\u660e",
          //         },
          //         {
          //           type: "/our?nav=contact",
          //           name: "\u8054\u7cfb\u65b9\u5f0f",
          //         },
          //         {
          //           type: "/our?nav=feedBack",
          //           name: "\u7528\u6237\u53cd\u9988",
          //         },
          //         { type: "/our?nav=map", name: "\u7f51\u7ad9\u5730\u56fe" },
          //         { type: "/our?nav=friend", name: "\u53cb\u60c5\u94fe\u63a5" },
          //       ].map(function (t, e) {
          //         return K(
          //           "span",
          //           { key: "".concat(t.type, "-").concat(e) },
          //           K(
          //             "a",
          //             {
          //               href: "".concat(t.type),
          //               className: "c-5f5f6a h-c-bcbcbc",
          //             },
          //             t.name,
          //           ),
          //           K("span", { className: "m-r-15 m-l-15" }, "|"),
          //         );
          //       }),
          //       K(
          //         "span",
          //         { className: "m-r-15" },
          //         "\u4e3e\u62a5\u7535\u8bdd\uff1a021-54679377\u8f6c617",
          //       ),
          //       K("span", null, "\u4e3e\u62a5\u90ae\u7bb1\uff1aeditor@cls.cn"),
          //       K(
          //         "a",
          //         {
          //           className: "f-r w-140",
          //           href: "http://www.shjbzx.cn",
          //           rel: "nofollow",
          //           target: "_blank",
          //         },
          //         K("img", {
          //           className: "w-100p",
          //           src: "https://cdnjs.cls.cn/images/site/cailianWeb/jubaologo1.png",
          //           alt: "\u8d22\u8054\u793e\u4e3e\u62a5",
          //         }),
          //       ),
          //     ),
          //     K(
          //       "div",
          //       null,
          //       K(
          //         "a",
          //         {
          //           className: "m-r-15 c-5f5f6a",
          //           href: "/",
          //           title: "\u8d22\u8054\u793e",
          //         },
          //         "\u8d22\u8054\u793e",
          //       ),
          //       " \xa92018-2026",
          //       K(
          //         "span",
          //         { className: "m-r-15" },
          //         "\u4e0a\u6d77\u754c\u9762\u8d22\u8054\u793e\u79d1\u6280\u80a1\u4efd\u6709\u9650\u516c\u53f8 \u7248\u6743\u6240\u6709",
          //         K("a", {
          //           className: "map",
          //           href: "/map.xml",
          //           target: "_blank",
          //         }),
          //       ),
          //       K(
          //         "a",
          //         {
          //           className: "m-r-15 c-5f5f6a",
          //           href: "http://beian.miit.gov.cn",
          //           target: "_blank",
          //           rel: "nofollow",
          //         },
          //         "\u6caaICP\u590714040942\u53f7-9",
          //       ),
          //       K(
          //         "a",
          //         {
          //           className: "m-r-15 c-5f5f6a",
          //           href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402006047",
          //           target: "_blank",
          //           rel: "nofollow",
          //         },
          //         "\u6caa\u516c\u7f51\u5b89\u590731010402006047\u53f7",
          //       ),
          //       K(
          //         "span",
          //         { className: "m-r-15" },
          //         "\u4e92\u8054\u7f51\u65b0\u95fb\u4fe1\u606f\u670d\u52a1\u8bb8\u53ef\u8bc1\uff1a31120170007",
          //       ),
          //       K(
          //         "a",
          //         {
          //           className: "c-5f5f6a",
          //           href: "https://fisbaobei.ifcert.cn/Home/homeIindex",
          //           target: "_blank",
          //           rel: "nofollow",
          //         },
          //         "\u6caa\u91d1\u4fe1\u5907 [2021] 2\u53f7",
          //       ),
          //     ),
          //   ),
          // );
        },
        X = r("KQm4"),
        Q = r("9ONQ"),
        Z = r("BQsQ");
      function J(t, e) {
        var r =
          ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!r) {
          if (
            Array.isArray(t) ||
            (r = (function (t, e) {
              if (!t) return;
              if ("string" === typeof t) return $(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === r && t.constructor && (r = t.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return $(t, e);
            })(t)) ||
            (e && t && "number" === typeof t.length)
          ) {
            r && (t = r);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[n++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var a,
          i = !0,
          c = !1;
        return {
          s: function () {
            r = r.call(t);
          },
          n: function () {
            var t = r.next();
            return ((i = t.done), t);
          },
          e: function (t) {
            ((c = !0), (a = t));
          },
          f: function () {
            try {
              i || null == r.return || r.return();
            } finally {
              if (c) throw a;
            }
          },
        };
      }
      function $(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function tt(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = Object(c.a)(t);
          if (e) {
            var o = Object(c.a)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return Object(i.a)(this, r);
        };
      }
      var et = new Q.a(),
        rt = (function (t) {
          Object(a.a)(r, t);
          var e = tt(r);
          function r(t) {
            var o;
            return (
              Object(n.a)(this, r),
              (o = e.call(this, t)),
              Object(d.a)(Object(h.a)(o), "popNotice", function (t, e) {
                var r = "notification" + t.id;
                ((window[r] = new Notification(t.title, {
                  body: t.body,
                  icon: "https://cdnjs.cls.cn/www/20180929/images/logo.png",
                  requireInteraction: !0,
                  tag: t.id,
                  renotify: !0,
                })),
                  (window[r].onshow = function () {
                    setTimeout(window[r].close.bind(window[r]), 5e3);
                  }),
                  (window[r].onclick = function () {
                    (window.open(t.url, "_blank"),
                      "undefined" !== typeof window[r] &&
                        (window[r].close(), delete window[r]));
                  }),
                  (window[r].onclose = function () {
                    "undefined" !== typeof window[r] &&
                      (window[r].close(), delete window[r]);
                  }),
                  (window[r].onerror = function () {
                    "undefined" !== typeof window[r] &&
                      (window[r].close(), delete window[r]);
                  }));
              }),
              Object(d.a)(
                Object(h.a)(o),
                "setNewVipNotification",
                function (t) {
                  var e = t;
                  if (window.Notification)
                    if ("granted" === Notification.permission) {
                      if (localStorage) {
                        var r = et.get("vipNotificationState");
                        "on" === o.props.vipNotificationState &&
                          "off" !== r &&
                          o.popNotice({
                            id: e.id,
                            title: "VIP-".concat(e.type_name),
                            body: e.title,
                            url: "/detail/".concat(e.id),
                          });
                      }
                    } else
                      window.navigator.userAgent
                        .toLowerCase()
                        .indexOf("se 2.x") > -1 &&
                        Notification.requestPermission().then(function (t) {
                          if ("granted" === t && localStorage) {
                            var r = et.get("vipNotificationState");
                            "on" === o.props.vipNotificationState &&
                              "off" !== r &&
                              o.popNotice({
                                id: e.id,
                                title: "VIP-".concat(e.type_name),
                                body: e.title,
                                url: "/detail/".concat(e.id),
                              });
                          }
                        });
                },
              ),
              (o.vipNotification = 0),
              (o.vipNotificationCtime = 0),
              o
            );
          }
          return (
            Object(o.a)(r, [
              {
                key: "shouldComponentUpdate",
                value: function (t) {
                  return !1;
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var t = this;
                  if (window.Notification) {
                    if (
                      "default" === Notification.permission &&
                      Notification.requestPermission
                    )
                      -1 !== window.navigator.userAgent.indexOf("Safari") &&
                      -1 !== window.navigator.userAgent.indexOf("Version")
                        ? Notification.requestPermission(function (e) {
                            "granted" === e
                              ? (t.props.handleToggleNotification({
                                  switch: "on",
                                }),
                                t.props.handleChangeVipNotificationValue("on"),
                                localStorage &&
                                  localStorage.setItem(
                                    "vipNotificationState",
                                    "on",
                                  ))
                              : (t.props.handleToggleNotification({
                                  switch: "off",
                                }),
                                t.props.handleChangeVipNotificationValue(
                                  "off",
                                ));
                          })
                        : Notification.requestPermission().then(function (e) {
                            "granted" === e
                              ? (t.props.handleToggleNotification({
                                  switch: "on",
                                }),
                                t.props.handleChangeVipNotificationValue("on"),
                                localStorage &&
                                  localStorage.setItem(
                                    "vipNotificationState",
                                    "on",
                                  ))
                              : (t.props.handleToggleNotification({
                                  switch: "off",
                                }),
                                t.props.handleChangeVipNotificationValue("off"),
                                localStorage &&
                                  localStorage.setItem(
                                    "vipNotificationState",
                                    "off",
                                  ));
                          });
                    if (
                      !this.props.articleList ||
                      this.props.articleList.length <= 0
                    )
                      this.props.handleGetTelegraphList();
                    else {
                      var e = this.props.articleList[0];
                      localStorage &&
                        localStorage.setItem(
                          "telegraphNotification",
                          String(e.id),
                        );
                    }
                    this.props.handleGetSubscribedColumn();
                  }
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (t) {
                  var e = this,
                    r =
                      (this.props.userInfo &&
                        this.props.userInfo.oauth_info &&
                        this.props.userInfo.oauth_info.token) ||
                      "",
                    n =
                      (t.userInfo &&
                        t.userInfo.oauth_info &&
                        t.userInfo.oauth_info.token) ||
                      "";
                  if (
                    (n !== r && this.props.handleGetSubscribedColumn(),
                    n !== r &&
                      n &&
                      localStorage &&
                      localStorage.getItem("vipGlobalArticleIdCtime") >
                        localStorage.getItem("vipNotificationCtime") &&
                      (localStorage.setItem(
                        "vipNotification",
                        String(localStorage.getItem("vipGlobalArticleId")),
                      ),
                      localStorage.setItem(
                        "vipNotificationCtime",
                        String(localStorage.getItem("vipGlobalArticleIdCtime")),
                      )),
                    window.Notification)
                  )
                    if ("granted" === Notification.permission) {
                      if (
                        t.articleList.length > 0 &&
                        this.props.articleList.length > 0 &&
                        t.articleList.length > this.props.articleList.length
                      ) {
                        var o,
                          a = Object(X.a)(this.props.articleList),
                          i = Object(X.a)(t.articleList).filter(function (t) {
                            return !a.includes(t);
                          }),
                          c = J((i = i.reverse()));
                        try {
                          var u = function () {
                            var t = o.value;
                            setTimeout(function () {
                              e.getNewTelegraphNotification(t);
                            }, 2e3);
                          };
                          for (c.s(); !(o = c.n()).done; ) u();
                        } catch (m) {
                          c.e(m);
                        } finally {
                          c.f();
                        }
                      }
                      if (t.subscribedList && t.subscribedList.length > 0)
                        if (0 === this.vipNotification) {
                          var s = t.subscribedList[0].id,
                            l = t.subscribedList[0].ctime;
                          if (
                            "number" === typeof s &&
                            ((this.vipNotification = s),
                            (this.vipNotificationCtime = l),
                            localStorage)
                          ) {
                            var f = localStorage.getItem("vipNotification");
                            if (f) {
                              var p = f.split(",");
                              (p.length > 10 && (p.length = 10),
                                p.indexOf(String(this.vipNotification)) <= -1 &&
                                  p.unshift(String(this.vipNotification)),
                                localStorage.setItem(
                                  "vipNotification",
                                  p.join(","),
                                ));
                            } else
                              localStorage.setItem(
                                "vipNotification",
                                String(s),
                              );
                            localStorage.setItem(
                              "vipNotificationCtime",
                              String(l),
                            );
                          }
                        } else if (this.vipNotification > 0) {
                          var h = t.subscribedList[0].id,
                            d = t.subscribedList[0].ctime;
                          if ("number" === typeof h && localStorage) {
                            var v = localStorage.getItem("vipNotification"),
                              y = localStorage.getItem("vipNotificationCtime");
                            if (v) {
                              var g = v.split(",");
                              (g.length > 10 && (g.length = 10),
                                g.indexOf(String(h)) <= -1 &&
                                  d > y &&
                                  (g.unshift(String(h)),
                                  this.setNewVipNotification(
                                    t.subscribedList[0],
                                  )),
                                localStorage.setItem(
                                  "vipNotification",
                                  g.join(","),
                                ),
                                localStorage.setItem(
                                  "vipNotificationCtime",
                                  String(d),
                                ),
                                (this.vipNotification = h));
                            } else
                              (this.setNewVipNotification(t.subscribedList[0]),
                                localStorage.setItem(
                                  "vipNotification",
                                  String(h),
                                ),
                                localStorage.setItem(
                                  "vipNotificationCtime",
                                  String(d),
                                ),
                                (this.vipNotification = h),
                                (this.vipNotificationCtime = d));
                          }
                        }
                    } else {
                      window.navigator.userAgent
                        .toLowerCase()
                        .indexOf("se 2.x") > -1 &&
                        Notification.requestPermission().then(function (r) {
                          if ("granted" === r) {
                            if (
                              t.articleList.length > 0 &&
                              e.props.articleList.length > 0 &&
                              t.articleList.length > e.props.articleList.length
                            ) {
                              var n,
                                o = Object(X.a)(e.props.articleList),
                                a = Object(X.a)(t.articleList).filter(
                                  function (t) {
                                    return !o.includes(t);
                                  },
                                ),
                                i = J((a = a.reverse()));
                              try {
                                var c = function () {
                                  var t = n.value;
                                  setTimeout(function () {
                                    e.getNewTelegraphNotification(t);
                                  }, 2e3);
                                };
                                for (i.s(); !(n = i.n()).done; ) c();
                              } catch (m) {
                                i.e(m);
                              } finally {
                                i.f();
                              }
                            }
                            if (t.subscribedList && t.subscribedList.length > 0)
                              if (0 === e.vipNotification) {
                                var u = t.subscribedList[0].id,
                                  s = t.subscribedList[0].ctime;
                                if (
                                  "number" === typeof u &&
                                  ((e.vipNotification = u),
                                  (e.vipNotificationCtime = s),
                                  localStorage)
                                ) {
                                  var l =
                                    localStorage.getItem("vipNotification");
                                  if (l) {
                                    var f = l.split(",");
                                    (f.length > 10 && (f.length = 10),
                                      f.indexOf(String(e.vipNotification)) <=
                                        -1 &&
                                        f.unshift(String(e.vipNotification)),
                                      localStorage.setItem(
                                        "vipNotification",
                                        f.join(","),
                                      ));
                                  } else
                                    localStorage.setItem(
                                      "vipNotification",
                                      String(u),
                                    );
                                  localStorage.setItem(
                                    "vipNotificationCtime",
                                    String(s),
                                  );
                                }
                              } else if (e.vipNotification > 0) {
                                var p = t.subscribedList[0].id,
                                  h = t.subscribedList[0].ctime;
                                if ("number" === typeof p && localStorage) {
                                  var d =
                                      localStorage.getItem("vipNotification"),
                                    v = localStorage.getItem(
                                      "vipNotificationCtime",
                                    );
                                  if (d) {
                                    var y = d.split(",");
                                    (y.length > 10 && (y.length = 10),
                                      y.indexOf(String(p)) <= -1 &&
                                        h > v &&
                                        (y.unshift(String(p)),
                                        e.setNewVipNotification(
                                          t.subscribedList[0],
                                        )),
                                      localStorage.setItem(
                                        "vipNotification",
                                        y.join(","),
                                      ),
                                      localStorage.setItem(
                                        "vipNotificationCtime",
                                        String(h),
                                      ),
                                      (e.vipNotification = p));
                                  } else
                                    (e.setNewVipNotification(
                                      t.subscribedList[0],
                                    ),
                                      localStorage.setItem(
                                        "vipNotification",
                                        String(p),
                                      ),
                                      localStorage.setItem(
                                        "vipNotificationCtime",
                                        String(h),
                                      ),
                                      (e.vipNotification = p),
                                      (e.vipNotificationCtime = h));
                                }
                              }
                          }
                        });
                    }
                },
              },
              {
                key: "getNewTelegraphNotification",
                value: function (t) {
                  var e = this,
                    r = t;
                  if (window.Notification)
                    if ("granted" === Notification.permission) {
                      if (localStorage) {
                        var n = localStorage.getItem("telegraphNotification"),
                          o = et.get("hasTelegraphNotification");
                        "on" ===
                          this.props.telegraphVoice.hasTelegraphNotification &&
                          "off" !== o &&
                          r.id > Number(n) &&
                          -1 === r.type &&
                          1 === r.jpush &&
                          (localStorage.setItem(
                            "telegraphNotification",
                            String(r.id),
                          ),
                          this.popNotice({
                            id: r.id,
                            title: "\u8d22\u8054\u793e\u7535\u62a5",
                            body: r.content,
                            url: "/detail/".concat(r.id),
                          }));
                      }
                    } else
                      window.navigator.userAgent
                        .toLowerCase()
                        .indexOf("se 2.x") > -1 &&
                        Notification.requestPermission().then(function (t) {
                          if ("granted" === t && localStorage) {
                            var n = localStorage.getItem(
                                "telegraphNotification",
                              ),
                              o = et.get("hasTelegraphNotification");
                            "on" ===
                              e.props.telegraphVoice.hasTelegraphNotification &&
                              "off" !== o &&
                              r.id > Number(n) &&
                              -1 === r.type &&
                              1 === r.jpush &&
                              (localStorage.setItem(
                                "telegraphNotification",
                                String(r.id),
                              ),
                              e.popNotice({
                                id: r.id,
                                title: "\u8d22\u8054\u793e\u7535\u62a5",
                                body: r.content,
                                url: "/detail/".concat(r.id),
                              }));
                          }
                        });
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            r
          );
        })(u.Component),
        nt = Object(l.b)(
          function (t) {
            return {
              telegraphVoice: t.telegraphVoice,
              articleList: t.telegraph.telegraphList,
              subscribedList: t.vip.newSubscribedArticle,
              vipGlobalArticle: t.vip.vipGlobalArticle,
              vipNotificationState: t.vip.vipNotificationState,
              userInfo: t.user.userInfo,
            };
          },
          function (t) {
            return {
              handleGetTelegraphList: function () {
                return t(Object(U.y)());
              },
              handleToggleNotification: function (e) {
                return t(Object(U.B)(e));
              },
              handleGetSubscribedColumn: function () {
                return t(Object(Z.l)());
              },
              handleChangeVipNotificationValue: function (e) {
                return t(Object(Z.k)(e));
              },
            };
          },
        )(rt),
        ot = s.a.createElement,
        at = Object(l.b)(function (t) {
          return { newNumber: t.telegraph.newNumber };
        })(function (t) {
          var e = Object(f.useRouter)();
          return null;
          // return ot(
          //   "div",
          //   { className: "p-f r-20 b-10p z-i-11" },
          //   ot(
          //     "div",
          //     { className: "p-r m-b-7 h-33 c-p sidebar-image-box" },
          //     ot("img", {
          //       src: "https://cdnjs.cls.cn/images/site/cailianWeb/kefu.png",
          //       className: "w-32",
          //     }),
          //     ot("img", {
          //       className: "d-n p-a t-0 l--242 w-230 ma-w-n sidebar-image",
          //       src: "https://cdnjs.cls.cn/www/20180717/images/rightSide/kfCodeSlider.png",
          //     }),
          //   ),
          //   ot(
          //     "div",
          //     { className: "p-r m-b-7 h-33 c-p sidebar-image-box" },
          //     ot("img", {
          //       src: "https://cdnjs.cls.cn/images/site/cailianWeb/xlCode.png",
          //       className: "w-32",
          //     }),
          //     ot("img", {
          //       className: "d-n p-a t-0 l--162 w-150 ma-w-n sidebar-image",
          //       src: "https://cdnjs.cls.cn/www/20180717/images/rightSide/xlCodeSlider.png",
          //     }),
          //   ),
          //   ot(
          //     "div",
          //     { className: "p-r m-b-7 h-33 c-p sidebar-image-box" },
          //     ot("img", {
          //       src: "https://cdnjs.cls.cn/images/site/cailianWeb/wxCode.png",
          //       className: "w-32",
          //     }),
          //     ot("img", {
          //       className: "d-n p-a t-0 l--162 w-150 ma-w-n sidebar-image",
          //       src: "https://cdnjs.cls.cn/www/20180717/images/rightSide/wxCodeSlider.png",
          //     }),
          //   ),
          //   ot(
          //     "div",
          //     { className: "p-r m-b-7 h-33 c-p sidebar-image-box" },
          //     ot("img", {
          //       src: "https://cdnjs.cls.cn/images/site/cailianWeb/appLogo.png",
          //       className: "w-32",
          //     }),
          //     ot("img", {
          //       className: "d-n p-a t-0 l--162 w-150 ma-w-n sidebar-image",
          //       src: "https://cdnjs.cls.cn/www/20180717/images/rightSide/downloadCodeSlider.png",
          //     }),
          //   ),
          //   ot(
          //     "div",
          //     { className: "p-r m-b-7 h-33 c-p" },
          //     ot(
          //       "div",
          //       {
          //         className: "c-p",
          //         onClick: function () {
          //           return window.scrollTo(
          //             document.documentElement.scrollLeft ||
          //               document.body.scrollLeft,
          //             0,
          //           );
          //         },
          //       },
          //       ot("img", {
          //         src: "https://cdnjs.cls.cn/images/site/cailianWeb/toTop.png",
          //         className: "w-32",
          //       }),
          //     ),
          //   ),
          //   t.newNumber > 0 &&
          //     ("/telegraph" !== e.pathname
          //       ? ot(
          //           "a",
          //           {
          //             className:
          //               "p-a t-160 r-36 p-t-7 p-r-15 p-b-7 p-l-15 f-s-16 t-a-c c-333 bg-c-fff c-p b-r-5 w-s-n b-s-0-0-6-b0b0b0",
          //             href: "/telegraph",
          //           },
          //           "\u6709",
          //           ot("span", { className: "c-de0422" }, t.newNumber),
          //           "\u6761\u65b0\u7535\u62a5",
          //         )
          //       : ot(
          //           "a",
          //           {
          //             className:
          //               "p-a t-160 r-36 p-t-7 p-r-15 p-b-7 p-l-15 f-s-16 t-a-c c-333 bg-c-fff c-p b-r-5 w-s-n b-s-0-0-6-b0b0b0",
          //             onClick: function () {
          //               e.query && e.query.type
          //                 ? e.push("/telegraph")
          //                 : t.dispatch(Object(U.v)());
          //             },
          //           },
          //           "\u6709",
          //           ot("span", { className: "c-de0422" }, t.newNumber),
          //           "\u6761\u65b0\u7535\u62a5",
          //         )),
          // );
        }),
        it = r("GL9P"),
        ct = s.a.createElement;
      function ut(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = Object(c.a)(t);
          if (e) {
            var o = Object(c.a)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return Object(i.a)(this, r);
        };
      }
      E.a.locale("zh-cn");
      var st = (function (t) {
          Object(a.a)(r, t);
          var e = ut(r);
          function r(t) {
            var o;
            return (
              Object(n.a)(this, r),
              (o = e.call(this, t)),
              Object(d.a)(
                Object(h.a)(o),
                "handleTelegraphClosePopup",
                function () {
                  if (localStorage) {
                    var t = (
                      localStorage.getItem("telegraphCloseArticleId") || ""
                    ).split(",");
                    (t.length > 10 && (t.length = 10),
                      t.indexOf(String(o.state.newTelegraphArticle.id)) <= -1 &&
                        t.unshift(String(o.state.newTelegraphArticle.id)),
                      localStorage.setItem(
                        "telegraphCloseArticleId",
                        t.join(","),
                      ),
                      o.setState({ telegraphCloseArticleId: t }));
                  }
                  o.setState({
                    telegraphArticlePopup: "off",
                    newTelegraphArticle: {},
                  });
                },
              ),
              (o.state = {
                telegraphArticlePopup: "off",
                newTelegraphArticle: {},
                telegraphCloseArticleId: [],
                newTelegraphArticleArray: [],
              }),
              (o.timer = null),
              o
            );
          }
          return (
            Object(o.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  var t = this;
                  localStorage &&
                    (clearInterval(this.telegraphPopupTimer),
                    (this.telegraphPopupTimer = setInterval(function () {
                      var e = (
                        localStorage.getItem("telegraphCloseArticleId") || ""
                      ).split(",");
                      t.state.newTelegraphArticle &&
                        e.some(function (e) {
                          return e == t.state.newTelegraphArticle.id;
                        }) &&
                        t.setState({
                          telegraphArticlePopup: "off",
                          newTelegraphArticle: {},
                          telegraphCloseArticleId: e,
                        });
                    }, 2e3)));
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (t) {
                  if (
                    t.articleList.length > 0 &&
                    t.articleList !== this.props.articleList
                  ) {
                    var e = this.state.newTelegraphArticleArray.concat(
                      t.articleList.reverse(),
                    );
                    this.setState({ newTelegraphArticleArray: e });
                  }
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function (t, e) {
                  var r = this.state.telegraphArticlePopup,
                    n = e.telegraphArticlePopup;
                  return (
                    (e.newTelegraphArticleArray.length > 0 &&
                      "off" === r &&
                      "off" === n) ||
                    !(!e.newTelegraphArticle.id || "off" !== r || "on" !== n) ||
                    (!e.newTelegraphArticle.id && "on" === r && "off" === n)
                  );
                },
              },
              {
                key: "componentDidUpdate",
                value: function (t, e) {
                  var r = this;
                  Array.isArray(this.state.newTelegraphArticleArray) &&
                    this.state.newTelegraphArticleArray.length > 0 &&
                    !this.state.newTelegraphArticle.id &&
                    this.setState(
                      {
                        telegraphArticlePopup: "on",
                        newTelegraphArticle:
                          this.state.newTelegraphArticleArray[0],
                      },
                      function () {
                        (clearTimeout(r.timer),
                          (r.timer = setTimeout(function () {
                            if (localStorage) {
                              var t = (
                                localStorage.getItem(
                                  "telegraphCloseArticleId",
                                ) || ""
                              ).split(",");
                              (t.length > 10 && (t.length = 10),
                                t.indexOf(
                                  String(r.state.newTelegraphArticle.id),
                                ) <= -1 &&
                                  t.unshift(
                                    String(r.state.newTelegraphArticle.id),
                                  ),
                                localStorage.setItem(
                                  "telegraphCloseArticleId",
                                  t.join(","),
                                ),
                                r.setState({ telegraphCloseArticleId: t }));
                            }
                            var e = [].concat(r.state.newTelegraphArticleArray);
                            (e.shift(),
                              r.setState({
                                telegraphArticlePopup: "off",
                                newTelegraphArticle: {},
                                newTelegraphArticleArray: e,
                              }));
                          }, 5e3)));
                      },
                    );
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  clearInterval(this.telegraphPopupTimer);
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this;
                  return (
                    !!this.state.telegraphArticlePopup &&
                    "on" === this.state.telegraphArticlePopup &&
                    !!this.state.newTelegraphArticle &&
                    -1 ===
                      this.state.telegraphCloseArticleId.indexOf(
                        String(this.state.newTelegraphArticle.id),
                      ) &&
                    1 === this.state.newTelegraphArticle.jpush &&
                    -1 === this.state.newTelegraphArticle.type &&
                    ct(
                      "div",
                      { className: "m-auto p-r telegraph-article-popup" },
                      ct("img", {
                        className: "telegraph-article-popup-close",
                        src: "https://cdnjs.cls.cn/www/20220401/vip-popup-close-icon.png",
                        onClick: function () {
                          t.handleTelegraphClosePopup();
                        },
                      }),
                      ct(
                        "div",
                        {
                          className:
                            "f-s-16 line1 telegraph-article-popup-content clearfix",
                        },
                        ct(
                          "span",
                          { className: "m-r-30 f-s-16 c-fff l-h-1875" },
                          "\u91cd\u8981\u65b0\u95fb",
                        ),
                        ct(
                          "a",
                          {
                            className: "c-403426",
                            href: "/detail/".concat(
                              this.state.newTelegraphArticle.id,
                            ),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: function () {
                              t.handleTelegraphClosePopup();
                            },
                          },
                          this.state.newTelegraphArticle.content,
                        ),
                      ),
                    )
                  );
                },
              },
            ]),
            r
          );
        })(u.Component),
        lt = Object(l.b)(
          function (t) {
            return {
              telegraphArticleList: t.telegraph.telegraphList,
              articleList: t.telegraphVoice.articleList,
            };
          },
          function (t) {
            return {};
          },
        )(st),
        ft = s.a.createElement;
      function pt(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = Object(c.a)(t);
          if (e) {
            var o = Object(c.a)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return Object(i.a)(this, r);
        };
      }
      E.a.locale("zh-cn");
      var ht = (function (t) {
          Object(a.a)(r, t);
          var e = pt(r);
          function r(t) {
            var o;
            return (
              Object(n.a)(this, r),
              (o = e.call(this, t)),
              Object(d.a)(Object(h.a)(o), "vipPopupTimer", null),
              Object(d.a)(Object(h.a)(o), "handleVipClosePopup", function () {
                if (localStorage) {
                  var t = (
                    localStorage.getItem("vipCloseArticleId") || ""
                  ).split(",");
                  (t.length > 10 && (t.length = 10),
                    t.indexOf(String(o.state.newVipArticle.id)) <= -1 &&
                      t.unshift(String(o.state.newVipArticle.id)),
                    localStorage.setItem("vipCloseArticleId", t.join(",")),
                    o.setState({ vipCloseArticleId: t }));
                }
                o.setState({ vipArticlePopup: "off", newVipArticle: "" });
              }),
              (o.state = {
                vipArticlePopup: "off",
                newVipArticle: "",
                vipGlobalArticleId: "",
                vipGlobalArticleIdCtime: "",
                vipCloseArticleId: [],
              }),
              (o.vipGlobalArticleId = 0),
              (o.vipGlobalArticleIdCtime = 0),
              o
            );
          }
          return (
            Object(o.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  var t = this;
                  localStorage &&
                    (clearInterval(this.vipPopupTimer),
                    (this.vipPopupTimer = setInterval(function () {
                      var e = (
                        localStorage.getItem("vipCloseArticleId") || ""
                      ).split(",");
                      t.state.newVipArticle &&
                        e.indexOf(String(t.state.newVipArticle.id)) > -1 &&
                        t.setState({
                          vipArticlePopup: "off",
                          vipCloseArticleId: e,
                        });
                    }, 2e3)));
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (t) {
                  if (t.vipGlobalArticle && t.vipGlobalArticle.length > 0)
                    if (0 === this.vipGlobalArticleId) {
                      var e = t.vipGlobalArticle[0].id,
                        r = t.vipGlobalArticle[0].ctime;
                      if (
                        "number" === typeof e &&
                        ((this.vipGlobalArticleId = e),
                        (this.vipGlobalArticleIdCtime = r),
                        localStorage)
                      ) {
                        if (this.state.vipGlobalArticleId) {
                          var n = this.state.vipGlobalArticleId.split(",");
                          (n.length > 10 && (n.length = 10),
                            n.indexOf(String(this.vipGlobalArticleId)) <= -1 &&
                              n.unshift(String(this.vipGlobalArticleId)),
                            localStorage.setItem(
                              "vipGlobalArticleId",
                              n.join(","),
                            ),
                            this.setState({ vipGlobalArticleId: n.join(",") }));
                        } else
                          (localStorage.setItem(
                            "vipGlobalArticleId",
                            String(e),
                          ),
                            this.setState({ vipGlobalArticleId: String(e) }));
                        (localStorage.setItem(
                          "vipGlobalArticleIdCtime",
                          String(r),
                        ),
                          this.setState({
                            vipGlobalArticleIdCtime: String(r),
                          }));
                      }
                    } else if (this.vipGlobalArticleId > 0) {
                      var o = t.vipGlobalArticle[0].id,
                        a = t.vipGlobalArticle[0].ctime;
                      if ("number" === typeof o && localStorage) {
                        var i = this.state.vipGlobalArticleId,
                          c = this.state.vipGlobalArticleIdCtime;
                        if (i) {
                          var u = this.state.vipGlobalArticleId.split(",");
                          (u.length > 10 && (u.length = 10),
                            u.indexOf(String(o)) <= -1 &&
                              a > c &&
                              (u.unshift(String(o)),
                              this.setState({
                                vipArticlePopup: "on",
                                newVipArticle: t.vipGlobalArticle[0],
                              })),
                            localStorage.setItem(
                              "vipGlobalArticleId",
                              u.join(","),
                            ),
                            localStorage.setItem(
                              "vipGlobalArticleIdCtime",
                              String(a),
                            ),
                            this.setState({
                              vipGlobalArticleId: u.join(","),
                              vipGlobalArticleIdCtime: String(a),
                            }),
                            (this.vipGlobalArticleId = o));
                        } else
                          (this.setState({
                            vipArticlePopup: "on",
                            newVipArticle: t.vipGlobalArticle[0],
                            vipGlobalArticleId: String(o),
                            vipGlobalArticleIdCtime: String(a),
                          }),
                            (this.vipGlobalArticleId = o),
                            (this.vipGlobalArticleIdCtime = a));
                      }
                    }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  clearInterval(this.vipPopupTimer);
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    e =
                      !!this.state.vipArticlePopup &&
                      "on" === this.state.vipArticlePopup &&
                      !!this.state.newVipArticle &&
                      -1 ===
                        this.state.vipCloseArticleId.indexOf(
                          String(this.state.newVipArticle.id),
                        );
                  return null;
                  // return ft(
                  //   "div",
                  //   { className: "vip-telegraph-article-popup-box" },
                  //   e &&
                  //     ft(
                  //       "div",
                  //       { className: "m-auto p-r vip-article-popup" },
                  //       ft("img", {
                  //         className: "vip-article-popup-close",
                  //         src: "https://cdnjs.cls.cn/www/20220401/vip-popup-close-icon.png",
                  //         onClick: function () {
                  //           t.handleVipClosePopup();
                  //         },
                  //       }),
                  //       ft(
                  //         "div",
                  //         {
                  //           className: "f-s-16 line1 vip-article-popup-content",
                  //         },
                  //         ft(
                  //           "span",
                  //           { className: "m-r-10 c-b40000" },
                  //           E()(1e3 * this.state.newVipArticle.ctime).format(
                  //             "HH:mm",
                  //           ),
                  //         ),
                  //         ft(
                  //           "a",
                  //           {
                  //             className: "c-403426",
                  //             href: "/detail/".concat(
                  //               this.state.newVipArticle.id,
                  //             ),
                  //             target: "_blank",
                  //             rel: "noopener noreferrer",
                  //             onClick: function () {
                  //               t.handleVipClosePopup();
                  //             },
                  //           },
                  //           this.state.newVipArticle.title,
                  //         ),
                  //       ),
                  //     ),
                  //   ft(lt, null),
                  // );
                },
              },
            ]),
            r
          );
        })(u.Component),
        dt = Object(l.b)(
          function (t) {
            return { vipGlobalArticle: t.vip.vipGlobalArticle };
          },
          function (t) {
            return {};
          },
        )(ht),
        vt = s.a.createElement;
      function yt(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = Object(c.a)(t);
          if (e) {
            var o = Object(c.a)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return Object(i.a)(this, r);
        };
      }
      var gt = (function (t) {
        Object(a.a)(r, t);
        var e = yt(r);
        function r() {
          return (Object(n.a)(this, r), e.apply(this, arguments));
        }
        return (
          Object(o.a)(r, [
            {
              key: "componentWillReceiveProps",
              value: function (t) {
                t.router.route !== this.props.router.route &&
                  "/telegraph" !== t.router.route &&
                  this.props.handleInitList();
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props.router,
                  e = "";
                return (
                  t &&
                    ("/" === t.pathname && (e = "index-css"),
                    "/detail" === t.pathname &&
                      ((e = "detail-css"),
                      t.query &&
                        t.query.id &&
                        (e = "detail-css-".concat(t.query.id)))),
                  vt(
                    "div",
                    { className: "p-r p-b-100 mi-h-100v ".concat(e) },
                    t.query.needBind &&
                      vt(q, {
                        queryData: t.query.queryData,
                        isShow: t.query.needBind,
                      }),
                    this.props.step && vt(B, null),
                    vt(it.b, null, vt(G, null), this.props.children),
                    vt(nt, null),
                    vt(at, null),
                    vt(dt, null),
                    vt(Y, null),
                    vt(W, null),
                  )
                );
              },
            },
          ]),
          r
        );
      })(u.Component);
      e.a = Object(f.withRouter)(
        Object(l.b)(
          function (t) {
            return { step: t.layout.step };
          },
          function (t) {
            return {
              handleInitList: function () {
                (t(Object(U.w)()), t(Object(U.y)()));
              },
            };
          },
        )(gt),
      );
    },
    "7DA+": function (t, e, r) {
      "use strict";
      var n = r("q1tI"),
        o = r.n(n),
        a = (function () {
          var t = function (e, r) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              })(e, r);
          };
          return function (e, r) {
            function n() {
              this.constructor = e;
            }
            (t(e, r),
              (e.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n())));
          };
        })(),
        i = function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        },
        c = function (t, e, r, n) {
          return new (r || (r = Promise))(function (o, a) {
            function i(t) {
              try {
                u(n.next(t));
              } catch (e) {
                a(e);
              }
            }
            function c(t) {
              try {
                u(n.throw(t));
              } catch (e) {
                a(e);
              }
            }
            function u(t) {
              t.done
                ? o(t.value)
                : new r(function (e) {
                    e(t.value);
                  }).then(i, c);
            }
            u((n = n.apply(t, e || [])).next());
          });
        },
        u = function (t, e) {
          var r,
            n,
            o,
            a,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: c(0), throw: c(1), return: c(2) }),
            "function" === typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function c(a) {
            return function (c) {
              return (function (a) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (o =
                          2 & a[0]
                            ? n.return
                            : a[0]
                              ? n.throw || ((o = n.return) && o.call(n), 0)
                              : n.next) &&
                        !(o = o.call(n, a[1])).done)
                    )
                      return o;
                    switch (((n = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                      case 0:
                      case 1:
                        o = a;
                        break;
                      case 4:
                        return (i.label++, { value: a[1], done: !1 });
                      case 5:
                        (i.label++, (n = a[1]), (a = [0]));
                        continue;
                      case 7:
                        ((a = i.ops.pop()), i.trys.pop());
                        continue;
                      default:
                        if (
                          !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                          (6 === a[0] || 2 === a[0])
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
                          i.label = a[1];
                          break;
                        }
                        if (6 === a[0] && i.label < o[1]) {
                          ((i.label = o[1]), (o = a));
                          break;
                        }
                        if (o && i.label < o[2]) {
                          ((i.label = o[2]), i.ops.push(a));
                          break;
                        }
                        (o[2] && i.ops.pop(), i.trys.pop());
                        continue;
                    }
                    a = e.call(t, i);
                  } catch (c) {
                    ((a = [6, c]), (n = 0));
                  } finally {
                    r = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, c]);
            };
          }
        },
        s = function (t, e) {
          var r = {};
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) &&
              e.indexOf(n) < 0 &&
              (r[n] = t[n]);
          if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(t); o < n.length; o++)
              e.indexOf(n[o]) < 0 && (r[n[o]] = t[n[o]]);
          }
          return r;
        },
        l = {
          storeKey: "__NEXT_REDUX_STORE__",
          debug: !1,
          serializeState: function (t) {
            return t;
          },
          deserializeState: function (t) {
            return t;
          },
        };
      e.a = function (t, e) {
        e = i({}, l, e);
        var r = "undefined" === typeof window,
          f = function (n) {
            var o = n.initialState,
              a = n.ctx,
              c = e.storeKey,
              u = function () {
                return t(e.deserializeState(o), i({}, a, e, { isServer: r }));
              };
            return r
              ? u()
              : (window.hasOwnProperty(c) || (window[c] = u()), window[c]);
          };
        return function (t) {
          var l;
          return (
            ((l = (function (r) {
              function n(t, n) {
                var o = r.call(this, t, n) || this,
                  a = t.initialState;
                return (
                  e.debug &&
                    console.log(
                      "4. WrappedApp.render created new store with initialState",
                      a,
                    ),
                  (o.store = f({ initialState: a })),
                  o
                );
              }
              return (
                a(n, r),
                (n.prototype.render = function () {
                  var e = this.props,
                    r = e.initialProps,
                    n =
                      (e.initialState, s(e, ["initialProps", "initialState"]));
                  return o.a.createElement(
                    t,
                    i({}, n, r, { store: this.store }),
                  );
                }),
                n
              );
            })(n.Component)).displayName =
              "withRedux(" + (t.displayName || t.name || "App") + ")"),
            (l.getInitialProps = function (n) {
              return c(void 0, void 0, void 0, function () {
                var o, a;
                return u(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (!n) throw new Error("No app context");
                      if (!n.ctx) throw new Error("No page context");
                      return (
                        (o = f({ ctx: n.ctx })),
                        e.debug &&
                          console.log(
                            "1. WrappedApp.getInitialProps wrapper got the store with state",
                            o.getState(),
                          ),
                        (n.ctx.store = o),
                        (n.ctx.isServer = r),
                        (a = {}),
                        "getInitialProps" in t
                          ? [4, t.getInitialProps.call(t, n)]
                          : [3, 2]
                      );
                    case 1:
                      ((a = i.sent()), (i.label = 2));
                    case 2:
                      return (
                        e.debug &&
                          console.log(
                            "3. WrappedApp.getInitialProps has store state",
                            o.getState(),
                          ),
                        [
                          2,
                          {
                            isServer: r,
                            initialState: e.serializeState(o.getState()),
                            initialProps: a,
                          },
                        ]
                      );
                  }
                });
              });
            }),
            l
          );
        };
      };
    },
    "7bO/": function (t, e, r) {
      "use strict";
      (r.d(e, "a", function () {
        return o.a;
      }),
        r.d(e, "c", function () {
          return n.j;
        }));
      var n = r("Ev6p"),
        o = r("92lH"),
        a = r("udQi"),
        i = r("tw9P"),
        c = r("mbVZ"),
        u =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          },
        s =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              };
      var l = "proc first argument (Saga function result) must be an iterator",
        f = {
          toString: function () {
            return "@@redux-saga/CHANNEL_END";
          },
        },
        p = {
          toString: function () {
            return "@@redux-saga/TASK_CANCEL";
          },
        },
        h = {
          wildcard: function () {
            return n.o;
          },
          default: function (t) {
            return "symbol" === ("undefined" === typeof t ? "undefined" : s(t))
              ? function (e) {
                  return e.type === t;
                }
              : function (e) {
                  return e.type === String(t);
                };
          },
          array: function (t) {
            return function (e) {
              return t.some(function (t) {
                return d(t)(e);
              });
            };
          },
          predicate: function (t) {
            return function (e) {
              return t(e);
            };
          },
        };
      function d(t) {
        return (
          "*" === t
            ? h.wildcard
            : n.n.array(t)
              ? h.array
              : n.n.stringableFunc(t)
                ? h.default
                : n.n.func(t)
                  ? h.predicate
                  : h.default
        )(t);
      }
      var v = function (t) {
        return { fn: t };
      };
      function y(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function () {
                  return n.r;
                },
          r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : n.r,
          s =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : n.r,
          h =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
          g =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
          m =
            arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          b =
            arguments.length > 7 && void 0 !== arguments[7]
              ? arguments[7]
              : "anonymous",
          w = arguments[8];
        Object(n.g)(t, n.n.iterator, l);
        var x = Object(n.k)(
            M,
            Object(n.w)("[...effects]", "all([...effects])"),
          ),
          O = g.sagaMonitor,
          j = g.logger,
          E = g.onError,
          L = j || n.p,
          _ = function (t) {
            var e = t.sagaStack;
            (!e &&
              t.stack &&
              (e =
                -1 !== t.stack.split("\n")[0].indexOf(t.message)
                  ? t.stack
                  : "Error: " + t.message + "\n" + t.stack),
              L("error", "uncaught at " + b, e || t.message || t));
          },
          k = Object(o.e)(e),
          N = Object.create(h);
        P.cancel = n.r;
        var S = (function (t, e, r, o) {
            var a, i;
            return (
              (r._deferredEnd = null),
              ((a = {})[n.e] = !0),
              (a.id = t),
              (a.name = e),
              "done",
              ((i = {}).done = i.done || {}),
              (i.done.get = function () {
                if (r._deferredEnd) return r._deferredEnd.promise;
                var t = Object(n.i)();
                return (
                  (r._deferredEnd = t),
                  r._isRunning ||
                    (r._error ? t.reject(r._error) : t.resolve(r._result)),
                  t.promise
                );
              }),
              (a.cont = o),
              (a.joiners = []),
              (a.cancel = I),
              (a.isRunning = function () {
                return r._isRunning;
              }),
              (a.isCancelled = function () {
                return r._isCancelled;
              }),
              (a.isAborted = function () {
                return r._isAborted;
              }),
              (a.result = function () {
                return r._result;
              }),
              (a.error = function () {
                return r._error;
              }),
              (a.setContext = function (t) {
                (Object(n.g)(t, n.n.object, Object(n.h)("task", t)),
                  n.s.assign(N, t));
              }),
              (function (t, e) {
                for (var r in e) {
                  var n = e[r];
                  ((n.configurable = n.enumerable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, r, n));
                }
              })(a, i),
              a
            );
          })(m, b, t, w),
          A = {
            name: b,
            cancel: function () {
              A.isRunning && !A.isCancelled && ((A.isCancelled = !0), P(p));
            },
            isRunning: !0,
          },
          T = (function (t, e, r) {
            var o = [],
              a = void 0,
              i = !1;
            function c(t) {
              (s(), r(t, !0));
            }
            function u(t) {
              (o.push(t),
                (t.cont = function (u, s) {
                  i ||
                    (Object(n.t)(o, t),
                    (t.cont = n.r),
                    s
                      ? c(u)
                      : (t === e && (a = u), o.length || ((i = !0), r(a))));
                }));
            }
            function s() {
              i ||
                ((i = !0),
                o.forEach(function (t) {
                  ((t.cont = n.r), t.cancel());
                }),
                (o = []));
            }
            return (
              u(e),
              {
                addTask: u,
                cancelAll: s,
                abort: c,
                getTasks: function () {
                  return o;
                },
                taskNames: function () {
                  return o.map(function (t) {
                    return t.name;
                  });
                },
              }
            );
          })(0, A, C);
        function I() {
          t._isRunning &&
            !t._isCancelled &&
            ((t._isCancelled = !0), T.cancelAll(), C(p));
        }
        return (w && (w.cancel = I), (t._isRunning = !0), P(), S);
        function P(e, r) {
          if (!A.isRunning)
            throw new Error("Trying to resume an already finished generator");
          try {
            var o = void 0;
            (r
              ? (o = t.throw(e))
              : e === p
                ? ((A.isCancelled = !0),
                  P.cancel(),
                  (o = n.n.func(t.return)
                    ? t.return(p)
                    : { done: !0, value: p }))
                : (o =
                    e === f
                      ? n.n.func(t.return)
                        ? t.return()
                        : { done: !0 }
                      : t.next(e)),
              o.done
                ? ((A.isMainRunning = !1), A.cont && A.cont(o.value))
                : G(o.value, m, "", P));
          } catch (a) {
            (A.isCancelled && _(a), (A.isMainRunning = !1), A.cont(a, !0));
          }
        }
        function C(e, r) {
          ((t._isRunning = !1),
            k.close(),
            r
              ? (e instanceof Error &&
                  Object.defineProperty(e, "sagaStack", {
                    value: "at " + b + " \n " + (e.sagaStack || e.stack),
                    configurable: !0,
                  }),
                S.cont || (e instanceof Error && E ? E(e) : _(e)),
                (t._error = e),
                (t._isAborted = !0),
                t._deferredEnd && t._deferredEnd.reject(e))
              : ((t._result = e), t._deferredEnd && t._deferredEnd.resolve(e)),
            S.cont && S.cont(e, r),
            S.joiners.forEach(function (t) {
              return t.cb(e, r);
            }),
            (S.joiners = null));
        }
        function G(t, l) {
          var h =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "",
            y = arguments[3],
            g = Object(n.v)();
          O &&
            O.effectTriggered({
              effectId: g,
              parentEffectId: l,
              label: h,
              effect: t,
            });
          var m = void 0;
          function w(t, e) {
            m ||
              ((m = !0),
              (y.cancel = n.r),
              O && (e ? O.effectRejected(g, t) : O.effectResolved(g, t)),
              y(t, e));
          }
          ((w.cancel = n.r),
            (y.cancel = function () {
              if (!m) {
                m = !0;
                try {
                  w.cancel();
                } catch (t) {
                  _(t);
                }
                ((w.cancel = n.r), O && O.effectCancelled(g));
              }
            }));
          var j = void 0;
          return n.n.promise(t)
            ? R(t, w)
            : n.n.helper(t)
              ? F(v(t), g, w)
              : n.n.iterator(t)
                ? D(t, g, b, w)
                : n.n.array(t)
                  ? x(t, g, w)
                  : (j = i.c.take(t))
                    ? (function (t, e) {
                        var r = t.channel,
                          n = t.pattern,
                          a = t.maybe;
                        r = r || k;
                        var i = function (t) {
                          return t instanceof Error
                            ? e(t, !0)
                            : Object(o.d)(t) && !a
                              ? e(f)
                              : e(t);
                        };
                        try {
                          r.take(i, d(n));
                        } catch (c) {
                          return e(c, !0);
                        }
                        e.cancel = i.cancel;
                      })(j, w)
                    : (j = i.c.put(t))
                      ? (function (t, e) {
                          var o = t.channel,
                            i = t.action,
                            c = t.resolve;
                          Object(a.a)(function () {
                            var t = void 0;
                            try {
                              t = (o ? o.put : r)(i);
                            } catch (a) {
                              if (o || c) return e(a, !0);
                              _(a);
                            }
                            if (!c || !n.n.promise(t)) return e(t);
                            R(t, e);
                          });
                        })(j, w)
                      : (j = i.c.all(t))
                        ? M(j, g, w)
                        : (j = i.c.race(t))
                          ? (function (t, e, r) {
                              var a = void 0,
                                i = Object.keys(t),
                                c = {};
                              (i.forEach(function (e) {
                                var s = function (c, s) {
                                  if (!a)
                                    if (s) (r.cancel(), r(c, !0));
                                    else if (
                                      !Object(o.d)(c) &&
                                      c !== f &&
                                      c !== p
                                    ) {
                                      var l;
                                      (r.cancel(), (a = !0));
                                      var h = (((l = {})[e] = c), l);
                                      r(
                                        n.n.array(t)
                                          ? [].slice.call(
                                              u({}, h, { length: i.length }),
                                            )
                                          : h,
                                      );
                                    }
                                };
                                ((s.cancel = n.r), (c[e] = s));
                              }),
                                (r.cancel = function () {
                                  a ||
                                    ((a = !0),
                                    i.forEach(function (t) {
                                      return c[t].cancel();
                                    }));
                                }),
                                i.forEach(function (r) {
                                  a || G(t[r], e, r, c[r]);
                                }));
                            })(j, g, w)
                          : (j = i.c.call(t))
                            ? (function (t, e, r) {
                                var o = t.context,
                                  a = t.fn,
                                  i = t.args,
                                  c = void 0;
                                try {
                                  c = a.apply(o, i);
                                } catch (u) {
                                  return r(u, !0);
                                }
                                return n.n.promise(c)
                                  ? R(c, r)
                                  : n.n.iterator(c)
                                    ? D(c, e, a.name, r)
                                    : r(c);
                              })(j, g, w)
                            : (j = i.c.cps(t))
                              ? (function (t, e) {
                                  var r = t.context,
                                    o = t.fn,
                                    a = t.args;
                                  try {
                                    var i = function (t, r) {
                                      return n.n.undef(t) ? e(r) : e(t, !0);
                                    };
                                    (o.apply(r, a.concat(i)),
                                      i.cancel &&
                                        (e.cancel = function () {
                                          return i.cancel();
                                        }));
                                  } catch (c) {
                                    return e(c, !0);
                                  }
                                })(j, w)
                              : (j = i.c.fork(t))
                                ? F(j, g, w)
                                : (j = i.c.join(t))
                                  ? (function (t, e) {
                                      if (t.isRunning()) {
                                        var r = { task: S, cb: e };
                                        ((e.cancel = function () {
                                          return Object(n.t)(t.joiners, r);
                                        }),
                                          t.joiners.push(r));
                                      } else
                                        t.isAborted()
                                          ? e(t.error(), !0)
                                          : e(t.result());
                                    })(j, w)
                                  : (j = i.c.cancel(t))
                                    ? (function (t, e) {
                                        t === n.d && (t = S);
                                        t.isRunning() && t.cancel();
                                        e();
                                      })(j, w)
                                    : (j = i.c.select(t))
                                      ? (function (t, e) {
                                          var r = t.selector,
                                            n = t.args;
                                          try {
                                            var o = r.apply(
                                              void 0,
                                              [s()].concat(n),
                                            );
                                            e(o);
                                          } catch (a) {
                                            e(a, !0);
                                          }
                                        })(j, w)
                                      : (j = i.c.actionChannel(t))
                                        ? (function (t, r) {
                                            var n = t.pattern,
                                              a = t.buffer,
                                              i = d(n);
                                            ((i.pattern = n),
                                              r(
                                                Object(o.c)(
                                                  e,
                                                  a || c.a.fixed(),
                                                  i,
                                                ),
                                              ));
                                          })(j, w)
                                        : (j = i.c.flush(t))
                                          ? (function (t, e) {
                                              t.flush(e);
                                            })(j, w)
                                          : (j = i.c.cancelled(t))
                                            ? (function (t, e) {
                                                e(!!A.isCancelled);
                                              })(0, w)
                                            : (j = i.c.getContext(t))
                                              ? (function (t, e) {
                                                  e(N[t]);
                                                })(j, w)
                                              : (j = i.c.setContext(t))
                                                ? (function (t, e) {
                                                    (n.s.assign(N, t), e());
                                                  })(j, w)
                                                : w(t);
        }
        function R(t, e) {
          var r = t[n.a];
          (n.n.func(r)
            ? (e.cancel = r)
            : n.n.func(t.abort) &&
              (e.cancel = function () {
                return t.abort();
              }),
            t.then(e, function (t) {
              return e(t, !0);
            }));
        }
        function D(t, n, o, a) {
          y(t, e, r, s, N, g, n, o, a);
        }
        function F(t, o, i) {
          var c = t.context,
            u = t.fn,
            l = t.args,
            f = t.detached,
            p = (function (t) {
              var e = t.context,
                r = t.fn,
                o = t.args;
              if (n.n.iterator(r)) return r;
              var a = void 0,
                i = void 0;
              try {
                a = r.apply(e, o);
              } catch (c) {
                i = c;
              }
              return n.n.iterator(a)
                ? a
                : i
                  ? Object(n.q)(function () {
                      throw i;
                    })
                  : Object(n.q)(
                      (function () {
                        var t = void 0,
                          e = { done: !1, value: a };
                        return function (r) {
                          return t ? { done: !0, value: r } : ((t = !0), e);
                        };
                      })(),
                    );
            })({ context: c, fn: u, args: l });
          try {
            Object(a.c)();
            var h = y(p, e, r, s, N, g, o, u.name, f ? null : n.r);
            f
              ? i(h)
              : p._isRunning
                ? (T.addTask(h), i(h))
                : p._error
                  ? T.abort(p._error)
                  : i(h);
          } finally {
            Object(a.b)();
          }
        }
        function M(t, e, r) {
          var a = Object.keys(t);
          if (!a.length) return r(n.n.array(t) ? [] : {});
          var i = 0,
            c = void 0,
            s = {},
            l = {};
          (a.forEach(function (e) {
            var h = function (l, h) {
              c ||
                (h || Object(o.d)(l) || l === f || l === p
                  ? (r.cancel(), r(l, h))
                  : ((s[e] = l),
                    ++i === a.length &&
                      ((c = !0),
                      r(
                        n.n.array(t)
                          ? n.f.from(u({}, s, { length: a.length }))
                          : s,
                      ))));
            };
            ((h.cancel = n.r), (l[e] = h));
          }),
            (r.cancel = function () {
              c ||
                ((c = !0),
                a.forEach(function (t) {
                  return l[t].cancel();
                }));
            }),
            a.forEach(function (r) {
              return G(t[r], e, r, l[r]);
            }));
        }
      }
      var g =
        "runSaga(storeInterface, saga, ...args): saga argument must be a Generator function!";
      function m(t, e) {
        for (
          var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), a = 2;
          a < r;
          a++
        )
          o[a - 2] = arguments[a];
        var i = void 0;
        n.n.iterator(t)
          ? ((i = t), (t = e))
          : (Object(n.g)(e, n.n.func, g),
            (i = e.apply(void 0, o)),
            Object(n.g)(i, n.n.iterator, g));
        var c = t,
          u = c.subscribe,
          s = c.dispatch,
          l = c.getState,
          f = c.context,
          p = c.sagaMonitor,
          h = c.logger,
          d = c.onError,
          v = Object(n.v)();
        p &&
          ((p.effectTriggered = p.effectTriggered || n.r),
          (p.effectResolved = p.effectResolved || n.r),
          (p.effectRejected = p.effectRejected || n.r),
          (p.effectCancelled = p.effectCancelled || n.r),
          (p.actionDispatched = p.actionDispatched || n.r),
          p.effectTriggered({
            effectId: v,
            root: !0,
            parentEffectId: 0,
            effect: { root: !0, saga: e, args: o },
          }));
        var m = y(
          i,
          u,
          Object(n.x)(s),
          l,
          f,
          { sagaMonitor: p, logger: h, onError: d },
          v,
          e.name,
        );
        return (p && p.effectResolved(v, m), m);
      }
      (r("q09E"),
        r("oZtI"),
        (e.b = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.context,
            r = void 0 === e ? {} : e,
            a = (function (t, e) {
              var r = {};
              for (var n in t)
                e.indexOf(n) >= 0 ||
                  (Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]));
              return r;
            })(t, ["context"]),
            i = a.sagaMonitor,
            c = a.logger,
            u = a.onError;
          if (n.n.func(a))
            throw new Error(
              "Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead",
            );
          if (c && !n.n.func(c))
            throw new Error(
              "`options.logger` passed to the Saga middleware is not a function!",
            );
          if (u && !n.n.func(u))
            throw new Error(
              "`options.onError` passed to the Saga middleware is not a function!",
            );
          if (a.emitter && !n.n.func(a.emitter))
            throw new Error(
              "`options.emitter` passed to the Saga middleware is not a function!",
            );
          function s(t) {
            var e = t.getState,
              l = t.dispatch,
              f = Object(o.b)();
            return (
              (f.emit = (a.emitter || n.l)(f.emit)),
              (s.run = m.bind(null, {
                context: r,
                subscribe: f.subscribe,
                dispatch: l,
                getState: e,
                sagaMonitor: i,
                logger: c,
                onError: u,
              })),
              function (t) {
                return function (e) {
                  i && i.actionDispatched && i.actionDispatched(e);
                  var r = t(e);
                  return (f.emit(e), r);
                };
              }
            );
          }
          return (
            (s.run = function () {
              throw new Error(
                "Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware",
              );
            }),
            (s.setContext = function (t) {
              (Object(n.g)(t, n.n.object, Object(n.h)("sagaMiddleware", t)),
                n.s.assign(r, t));
            }),
            s
          );
        }));
    },
    "8Bbg": function (t, e, r) {
      t.exports = r("B5Ud");
    },
    "92lH": function (t, e, r) {
      "use strict";
      (r.d(e, "a", function () {
        return c;
      }),
        r.d(e, "d", function () {
          return u;
        }),
        r.d(e, "b", function () {
          return s;
        }),
        r.d(e, "c", function () {
          return p;
        }),
        r.d(e, "e", function () {
          return h;
        }));
      var n = r("Ev6p"),
        o = r("mbVZ"),
        a = r("udQi"),
        i =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          },
        c = { type: "@@redux-saga/CHANNEL_END" },
        u = function (t) {
          return t && "@@redux-saga/CHANNEL_END" === t.type;
        };
      function s() {
        var t = [];
        return {
          subscribe: function (e) {
            return (
              t.push(e),
              function () {
                return Object(n.t)(t, e);
              }
            );
          },
          emit: function (e) {
            for (var r = t.slice(), n = 0, o = r.length; n < o; n++) r[n](e);
          },
        };
      }
      var l = "invalid buffer passed to channel factory function",
        f = "Saga was provided with an undefined action";
      function p(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.a.none(),
          r = arguments[2];
        arguments.length > 2 &&
          Object(n.g)(
            r,
            n.n.func,
            "Invalid match function passed to eventChannel",
          );
        var a = (function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : o.a.fixed(),
              e = !1,
              r = [];
            function a() {
              if (e && r.length)
                throw Object(n.m)(
                  "Cannot have a closed channel with pending takers",
                );
              if (r.length && !t.isEmpty())
                throw Object(n.m)(
                  "Cannot have pending takers with non empty buffer",
                );
            }
            return (
              Object(n.g)(t, n.n.buffer, l),
              {
                take: function (o) {
                  (a(),
                    Object(n.g)(
                      o,
                      n.n.func,
                      "channel.take's callback must be a function",
                    ),
                    e && t.isEmpty()
                      ? o(c)
                      : t.isEmpty()
                        ? (r.push(o),
                          (o.cancel = function () {
                            return Object(n.t)(r, o);
                          }))
                        : o(t.take()));
                },
                put: function (o) {
                  if ((a(), Object(n.g)(o, n.n.notUndef, f), !e)) {
                    if (!r.length) return t.put(o);
                    for (var i = 0; i < r.length; i++) {
                      var c = r[i];
                      if (!c[n.b] || c[n.b](o)) return (r.splice(i, 1), c(o));
                    }
                  }
                },
                flush: function (r) {
                  (a(),
                    Object(n.g)(
                      r,
                      n.n.func,
                      "channel.flush' callback must be a function",
                    ),
                    e && t.isEmpty() ? r(c) : r(t.flush()));
                },
                close: function () {
                  if ((a(), !e && ((e = !0), r.length))) {
                    var t = r;
                    r = [];
                    for (var n = 0, o = t.length; n < o; n++) t[n](c);
                  }
                },
                get __takers__() {
                  return r;
                },
                get __closed__() {
                  return e;
                },
              }
            );
          })(e),
          i = function () {
            a.__closed__ || (s && s(), a.close());
          },
          s = t(function (t) {
            u(t) ? i() : (r && !r(t)) || a.put(t);
          });
        if ((a.__closed__ && s(), !n.n.func(s)))
          throw new Error(
            "in eventChannel: subscribe should return a function to unsubscribe",
          );
        return { take: a.take, flush: a.flush, close: i };
      }
      function h(t) {
        var e = p(function (e) {
          return t(function (t) {
            t[n.c]
              ? e(t)
              : Object(a.a)(function () {
                  return e(t);
                });
          });
        });
        return i({}, e, {
          take: function (t, r) {
            (arguments.length > 1 &&
              (Object(n.g)(
                r,
                n.n.func,
                "channel.take's matcher argument must be a function",
              ),
              (t[n.b] = r)),
              e.take(t));
          },
        });
      }
    },
    B5Ud: function (t, e, r) {
      "use strict";
      var n = r("lwsE"),
        o = r("W8MJ"),
        a = r("7W2i"),
        i = r("a1gu"),
        c = r("Nsbk");
      function u(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = c(t);
          if (e) {
            var o = c(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return i(this, r);
        };
      }
      function s() {
        s = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          i = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, "");
        } catch (S) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function l(t, e, r, o) {
          var a = e && e.prototype instanceof h ? e : h,
            i = Object.create(a.prototype),
            c = new _(o || []);
          return (n(i, "_invoke", { value: O(t, r, c) }), i);
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (S) {
            return { type: "throw", arg: S };
          }
        }
        t.wrap = l;
        var p = {};
        function h() {}
        function d() {}
        function v() {}
        var y = {};
        u(y, a, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          m = g && g(g(k([])));
        m && m !== e && r.call(m, a) && (y = m);
        var b = (v.prototype = h.prototype = Object.create(y));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function x(t, e) {
          var o;
          n(this, "_invoke", {
            value: function (n, a) {
              function i() {
                return new e(function (o, i) {
                  !(function n(o, a, i, c) {
                    var u = f(t[o], t, a);
                    if ("throw" !== u.type) {
                      var s = u.arg,
                        l = s.value;
                      return l && "object" == typeof l && r.call(l, "__await")
                        ? e.resolve(l.__await).then(
                            function (t) {
                              n("next", t, i, c);
                            },
                            function (t) {
                              n("throw", t, i, c);
                            },
                          )
                        : e.resolve(l).then(
                            function (t) {
                              ((s.value = t), i(s));
                            },
                            function (t) {
                              return n("throw", t, i, c);
                            },
                          );
                    }
                    c(u.arg);
                  })(n, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function O(t, e, r) {
          var n = "suspendedStart";
          return function (o, a) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw a;
              return N();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = j(i, r);
                if (c) {
                  if (c === p) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = f(t, e, r);
              if ("normal" === u.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), u.arg === p)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function j(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                j(t, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              p
            );
          var o = f(n, t.iterator, e.arg);
          if ("throw" === o.type)
            return (
              (e.method = "throw"),
              (e.arg = o.arg),
              (e.delegate = null),
              p
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                p)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              p);
        }
        function E(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function L(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function _(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(E, this),
            this.reset(!0));
        }
        function k(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n))
                      return ((e.value = t[n]), (e.done = !1), e);
                  return ((e.value = void 0), (e.done = !0), e);
                };
              return (o.next = o);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = v),
          n(b, "constructor", { value: v, configurable: !0 }),
          n(v, "constructor", { value: d, configurable: !0 }),
          (d.displayName = u(v, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === d || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, v)
                : ((t.__proto__ = v), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(b)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(x.prototype),
          u(x.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = x),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new x(l(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          w(b),
          u(b, c, "Generator"),
          u(b, a, function () {
            return this;
          }),
          u(b, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return ((t.value = n), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (t.values = k),
          (_.prototype = {
            constructor: _,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), p)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                p
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), L(r), p);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    L(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: k(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          t
        );
      }
      var l = r("TqRt");
      ((e.__esModule = !0),
        (e.Container = function (t) {
          0;
          return t.children;
        }),
        (e.createUrl = v),
        (e.default = void 0));
      var f = l(r("q1tI")),
        p = r("g/15");
      function h(t) {
        var e, r, n;
        return s().async(
          function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  return (
                    (e = t.Component),
                    (r = t.ctx),
                    (o.next = 3),
                    s().awrap((0, p.loadGetInitialProps)(e, r))
                  );
                case 3:
                  return ((n = o.sent), o.abrupt("return", { pageProps: n }));
                case 5:
                case "end":
                  return o.stop();
              }
          },
          null,
          null,
          null,
          Promise,
        );
      }
      e.AppInitialProps = p.AppInitialProps;
      var d = (function (t) {
        a(r, t);
        var e = u(r);
        function r() {
          return (n(this, r), e.apply(this, arguments));
        }
        return (
          o(r, [
            {
              key: "componentDidCatch",
              value: function (t, e) {
                throw t;
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.router,
                  r = t.Component,
                  n = t.pageProps,
                  o = t.__N_SSG,
                  a = t.__N_SSP;
                return f.default.createElement(
                  r,
                  Object.assign({}, n, o || a ? {} : { url: v(e) }),
                );
              },
            },
          ]),
          r
        );
      })(f.default.Component);
      function v(t) {
        var e = t.pathname,
          r = t.asPath,
          n = t.query;
        return {
          get query() {
            return n;
          },
          get pathname() {
            return e;
          },
          get asPath() {
            return r;
          },
          back: function () {
            t.back();
          },
          push: function (e, r) {
            return t.push(e, r);
          },
          pushTo: function (e, r) {
            var n = r ? e : "",
              o = r || e;
            return t.push(n, o);
          },
          replace: function (e, r) {
            return t.replace(e, r);
          },
          replaceTo: function (e, r) {
            var n = r ? e : "",
              o = r || e;
            return t.replace(n, o);
          },
        };
      }
      ((e.default = d), (d.origGetInitialProps = h), (d.getInitialProps = h));
    },
    BQsQ: function (t, e, r) {
      "use strict";
      (r.d(e, "b", function () {
        return n;
      }),
        r.d(e, "d", function () {
          return o;
        }),
        r.d(e, "c", function () {
          return a;
        }),
        r.d(e, "l", function () {
          return i;
        }),
        r.d(e, "i", function () {
          return c;
        }),
        r.d(e, "j", function () {
          return u;
        }),
        r.d(e, "h", function () {
          return s;
        }),
        r.d(e, "g", function () {
          return l;
        }),
        r.d(e, "f", function () {
          return f;
        }),
        r.d(e, "e", function () {
          return p;
        }),
        r.d(e, "a", function () {
          return h;
        }),
        r.d(e, "k", function () {
          return d;
        }));
      var n = "GET_SUBSCRIBED_COLUMN",
        o = "GET_SUBSCRIBED_COLUMN_SUCCESS",
        a = "GET_SUBSCRIBED_COLUMN_FAIL",
        i = function () {
          return { type: n };
        },
        c = "SET_NEW_SUBSCRIBED_ARTICLE",
        u = "SET_VIP_GLOBAL_ARTICLE",
        s = "GET_VIP_COLUMN_DETAIL_SUCCESS",
        l = "GET_VIP_COLUMN_DETAIL_FAIL",
        f = "GET_VIP_COLUMN_ARTICLE_DETAIL_SUCCESS",
        p = "GET_VIP_COLUMN_ARTICLE_DETAIL_FAIL",
        h = "CHANGE_VIP_NOTIFICATION_STATE",
        d = function (t) {
          return { type: h, payload: t };
        };
    },
    Ev6p: function (t, e, r) {
      "use strict";
      (r.d(e, "u", function () {
        return a;
      }),
        r.d(e, "e", function () {
          return i;
        }),
        r.d(e, "b", function () {
          return u;
        }),
        r.d(e, "a", function () {
          return s;
        }),
        r.d(e, "c", function () {
          return l;
        }),
        r.d(e, "d", function () {
          return f;
        }),
        r.d(e, "o", function () {
          return h;
        }),
        r.d(e, "r", function () {
          return d;
        }),
        r.d(e, "l", function () {
          return v;
        }),
        r.d(e, "g", function () {
          return y;
        }),
        r.d(e, "n", function () {
          return b;
        }),
        r.d(e, "s", function () {
          return w;
        }),
        r.d(e, "t", function () {
          return x;
        }),
        r.d(e, "f", function () {
          return O;
        }),
        r.d(e, "i", function () {
          return j;
        }),
        r.d(e, "j", function () {
          return E;
        }),
        r.d(e, "v", function () {
          return _;
        }),
        r.d(e, "q", function () {
          return S;
        }),
        r.d(e, "p", function () {
          return A;
        }),
        r.d(e, "k", function () {
          return T;
        }),
        r.d(e, "w", function () {
          return I;
        }),
        r.d(e, "m", function () {
          return P;
        }),
        r.d(e, "h", function () {
          return C;
        }),
        r.d(e, "x", function () {
          return G;
        }));
      var n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          },
        o =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              },
        a = function (t) {
          return "@@redux-saga/" + t;
        },
        i = a("TASK"),
        c = a("HELPER"),
        u = a("MATCH"),
        s = a("CANCEL_PROMISE"),
        l = a("SAGA_ACTION"),
        f = a("SELF_CANCELLATION"),
        p = function (t) {
          return function () {
            return t;
          };
        },
        h = p(!0),
        d = function () {},
        v = function (t) {
          return t;
        };
      function y(t, e, r) {
        if (!e(t)) throw (A("error", "uncaught at check", r), new Error(r));
      }
      var g = Object.prototype.hasOwnProperty;
      function m(t, e) {
        return b.notUndef(t) && g.call(t, e);
      }
      var b = {
          undef: function (t) {
            return null === t || void 0 === t;
          },
          notUndef: function (t) {
            return null !== t && void 0 !== t;
          },
          func: function (t) {
            return "function" === typeof t;
          },
          number: function (t) {
            return "number" === typeof t;
          },
          string: function (t) {
            return "string" === typeof t;
          },
          array: Array.isArray,
          object: function (t) {
            return (
              t &&
              !b.array(t) &&
              "object" === ("undefined" === typeof t ? "undefined" : o(t))
            );
          },
          promise: function (t) {
            return t && b.func(t.then);
          },
          iterator: function (t) {
            return t && b.func(t.next) && b.func(t.throw);
          },
          iterable: function (t) {
            return t && b.func(Symbol)
              ? b.func(t[Symbol.iterator])
              : b.array(t);
          },
          task: function (t) {
            return t && t[i];
          },
          observable: function (t) {
            return t && b.func(t.subscribe);
          },
          buffer: function (t) {
            return t && b.func(t.isEmpty) && b.func(t.take) && b.func(t.put);
          },
          pattern: function (t) {
            return (
              t &&
              (b.string(t) ||
                "symbol" === ("undefined" === typeof t ? "undefined" : o(t)) ||
                b.func(t) ||
                b.array(t))
            );
          },
          channel: function (t) {
            return t && b.func(t.take) && b.func(t.close);
          },
          helper: function (t) {
            return t && t[c];
          },
          stringableFunc: function (t) {
            return b.func(t) && m(t, "toString");
          },
        },
        w = {
          assign: function (t, e) {
            for (var r in e) m(e, r) && (t[r] = e[r]);
          },
        };
      function x(t, e) {
        var r = t.indexOf(e);
        r >= 0 && t.splice(r, 1);
      }
      var O = {
        from: function (t) {
          var e = Array(t.length);
          for (var r in t) m(t, r) && (e[r] = t[r]);
          return e;
        },
      };
      function j() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = n({}, t),
          r = new Promise(function (t, r) {
            ((e.resolve = t), (e.reject = r));
          });
        return ((e.promise = r), e);
      }
      function E(t) {
        var e =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          r = void 0,
          n = new Promise(function (n) {
            r = setTimeout(function () {
              return n(e);
            }, t);
          });
        return (
          (n[s] = function () {
            return clearTimeout(r);
          }),
          n
        );
      }
      function L() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return function () {
          return ++t;
        };
      }
      var _ = L(),
        k = function (t) {
          throw t;
        },
        N = function (t) {
          return { value: t, done: !0 };
        };
      function S(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : k,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
          n = arguments[3],
          o = { name: r, next: t, throw: e, return: N };
        return (
          n && (o[c] = !0),
          "undefined" !== typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return o;
            }),
          o
        );
      }
      function A(t, e) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        "undefined" === typeof window
          ? console.log(
              "redux-saga " + t + ": " + e + "\n" + ((r && r.stack) || r),
            )
          : console[t](e, r);
      }
      function T(t, e) {
        return function () {
          return t.apply(void 0, arguments);
        };
      }
      var I = function (t, e) {
          return (
            t +
            " has been deprecated in favor of " +
            e +
            ", please update your code"
          );
        },
        P = function (t) {
          return new Error(
            "\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " +
              t +
              "\n",
          );
        },
        C = function (t, e) {
          return (
            (t ? t + "." : "") +
            "setContext(props): argument " +
            e +
            " is not a plain object"
          );
        },
        G = function (t) {
          return function (e) {
            return t(Object.defineProperty(e, l, { value: !0 }));
          };
        };
    },
    GL9P: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return l;
      });
      var n = r("q1tI"),
        o = r.n(n),
        a = r("/MKj"),
        i = r("p46w"),
        c = r.n(i),
        u = r("bMwp"),
        s = o.a.createElement,
        l = Object(n.createContext)();
      e.b = Object(a.b)(function (t) {
        return { userInfo: t.user.userInfo };
      })(function (t) {
        var e = t.userInfo || {},
          r = Object(n.useState)([]),
          o = r[0],
          a = r[1];
        return s(
          l.Provider,
          {
            value: {
              reddotData: o,
              getReddotData: function () {
                c.a.remove("reddotTime");
                var t = parseInt(new Date().getTime() / 1e3, 10);
                Object(u.request)({
                  url: "/v2/remind/reddot",
                  method: "GET",
                  params: { uid: e.uid, rollTime: 0, time: t },
                })
                  .then(function (t) {
                    t &&
                      200 === t.status &&
                      t.data &&
                      0 === t.data.errno &&
                      a(t.data.data);
                  })
                  .catch(function () {});
              },
            },
          },
          t.children,
        );
      });
    },
    GcxT: function (t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r("1TCz");
        },
      ]);
    },
    K4CH: function (t, e, r) {
      var n;
      !(function (o, a) {
        "use strict";
        var i = "model",
          c = "name",
          u = "type",
          s = "vendor",
          l = "version",
          f = "mobile",
          p = "tablet",
          h = {
            extend: function (t, e) {
              var r = {};
              for (var n in t)
                e[n] && e[n].length % 2 === 0
                  ? (r[n] = e[n].concat(t[n]))
                  : (r[n] = t[n]);
              return r;
            },
            has: function (t, e) {
              return (
                "string" === typeof t &&
                -1 !== e.toLowerCase().indexOf(t.toLowerCase())
              );
            },
            lowerize: function (t) {
              return t.toLowerCase();
            },
            major: function (t) {
              return "string" === typeof t
                ? t.replace(/[^\d\.]/g, "").split(".")[0]
                : void 0;
            },
            trim: function (t) {
              return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            },
          },
          d = {
            rgx: function (t, e) {
              for (var r, n, o, a, i, c, u = 0; u < e.length && !i; ) {
                var s = e[u],
                  l = e[u + 1];
                for (r = n = 0; r < s.length && !i; )
                  if ((i = s[r++].exec(t)))
                    for (o = 0; o < l.length; o++)
                      ((c = i[++n]),
                        "object" === typeof (a = l[o]) && a.length > 0
                          ? 2 == a.length
                            ? "function" == typeof a[1]
                              ? (this[a[0]] = a[1].call(this, c))
                              : (this[a[0]] = a[1])
                            : 3 == a.length
                              ? "function" !== typeof a[1] ||
                                (a[1].exec && a[1].test)
                                ? (this[a[0]] = c
                                    ? c.replace(a[1], a[2])
                                    : void 0)
                                : (this[a[0]] = c
                                    ? a[1].call(this, c, a[2])
                                    : void 0)
                              : 4 == a.length &&
                                (this[a[0]] = c
                                  ? a[3].call(this, c.replace(a[1], a[2]))
                                  : void 0)
                          : (this[a] = c || void 0));
                u += 2;
              }
            },
            str: function (t, e) {
              for (var r in e)
                if ("object" === typeof e[r] && e[r].length > 0) {
                  for (var n = 0; n < e[r].length; n++)
                    if (h.has(e[r][n], t)) return "?" === r ? void 0 : r;
                } else if (h.has(e[r], t)) return "?" === r ? void 0 : r;
              return t;
            },
          },
          v = {
            browser: {
              oldsafari: {
                version: {
                  "1.0": "/8",
                  1.2: "/1",
                  1.3: "/3",
                  "2.0": "/412",
                  "2.0.2": "/416",
                  "2.0.3": "/417",
                  "2.0.4": "/419",
                  "?": "/",
                },
              },
            },
            device: {
              amazon: { model: { "Fire Phone": ["SD", "KF"] } },
              sprint: {
                model: { "Evo Shift 4G": "7373KT" },
                vendor: { HTC: "APA", Sprint: "Sprint" },
              },
            },
            os: {
              windows: {
                version: {
                  ME: "4.90",
                  "NT 3.11": "NT3.51",
                  "NT 4.0": "NT4.0",
                  2e3: "NT 5.0",
                  XP: ["NT 5.1", "NT 5.2"],
                  Vista: "NT 6.0",
                  7: "NT 6.1",
                  8: "NT 6.2",
                  8.1: "NT 6.3",
                  10: ["NT 6.4", "NT 10.0"],
                  RT: "ARM",
                },
              },
            },
          },
          y = {
            browser: [
              [
                /(opera\smini)\/([\w\.-]+)/i,
                /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
                /(opera).+version\/([\w\.]+)/i,
                /(opera)[\/\s]+([\w\.]+)/i,
              ],
              [c, l],
              [/(opios)[\/\s]+([\w\.]+)/i],
              [[c, "Opera Mini"], l],
              [/\s(opr)\/([\w\.]+)/i],
              [[c, "Opera"], l],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                /(?:ms|\()(ie)\s([\w\.]+)/i,
                /(rekonq)\/([\w\.]*)/i,
                /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i,
              ],
              [c, l],
              [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
              [[c, "IE"], l],
              [/(edge|edgios|edga)\/((\d+)?[\w\.]+)/i],
              [[c, "Edge"], l],
              [/(yabrowser)\/([\w\.]+)/i],
              [[c, "Yandex"], l],
              [/(puffin)\/([\w\.]+)/i],
              [[c, "Puffin"], l],
              [/(focus)\/([\w\.]+)/i],
              [[c, "Firefox Focus"], l],
              [/(opt)\/([\w\.]+)/i],
              [[c, "Opera Touch"], l],
              [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
              [[c, "UCBrowser"], l],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[c, /_/g, " "], l],
              [/(micromessenger)\/([\w\.]+)/i],
              [[c, "WeChat"], l],
              [/(brave)\/([\w\.]+)/i],
              [[c, "Brave"], l],
              [/(qqbrowserlite)\/([\w\.]+)/i],
              [c, l],
              [/(QQ)\/([\d\.]+)/i],
              [c, l],
              [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
              [c, l],
              [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
              [c, l],
              [/(2345Explorer)[\/\s]?([\w\.]+)/i],
              [c, l],
              [/(MetaSr)[\/\s]?([\w\.]+)/i],
              [c],
              [/(LBBROWSER)/i],
              [c],
              [/xiaomi\/miuibrowser\/([\w\.]+)/i],
              [l, [c, "MIUI Browser"]],
              [/;fbav\/([\w\.]+);/i],
              [l, [c, "Facebook"]],
              [
                /safari\s(line)\/([\w\.]+)/i,
                /android.+(line)\/([\w\.]+)\/iab/i,
              ],
              [c, l],
              [/headlesschrome(?:\/([\w\.]+)|\s)/i],
              [l, [c, "Chrome Headless"]],
              [/\swv\).+(chrome)\/([\w\.]+)/i],
              [[c, /(.+)/, "$1 WebView"], l],
              [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
              [[c, /(.+(?:g|us))(.+)/, "$1 $2"], l],
              [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
              [l, [c, "Android Browser"]],
              [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
              [c, l],
              [/(dolfin)\/([\w\.]+)/i],
              [[c, "Dolphin"], l],
              [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
              [[c, "Chrome"], l],
              [/(coast)\/([\w\.]+)/i],
              [[c, "Opera Coast"], l],
              [/fxios\/([\w\.-]+)/i],
              [l, [c, "Firefox"]],
              [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
              [l, [c, "Mobile Safari"]],
              [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
              [l, c],
              [
                /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i,
              ],
              [[c, "GSA"], l],
              [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
              [c, [l, d.str, v.browser.oldsafari.version]],
              [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
              [c, l],
              [/(navigator|netscape)\/([\w\.-]+)/i],
              [[c, "Netscape"], l],
              [
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                /(links)\s\(([\w\.]+)/i,
                /(gobrowser)\/?([\w\.]*)/i,
                /(ice\s?browser)\/v?([\w\._]+)/i,
                /(mosaic)[\/\s]([\w\.]+)/i,
              ],
              [c, l],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
              [["architecture", "amd64"]],
              [/(ia32(?=;))/i],
              [["architecture", h.lowerize]],
              [/((?:i[346]|x)86)[;\)]/i],
              [["architecture", "ia32"]],
              [/windows\s(ce|mobile);\sppc;/i],
              [["architecture", "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
              [["architecture", /ower/, "", h.lowerize]],
              [/(sun4\w)[;\)]/i],
              [["architecture", "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i,
              ],
              [["architecture", h.lowerize]],
            ],
            device: [
              [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
              [i, s, [u, p]],
              [/applecoremedia\/[\w\.]+ \((ipad)/],
              [i, [s, "Apple"], [u, p]],
              [/(apple\s{0,1}tv)/i],
              [
                [i, "Apple TV"],
                [s, "Apple"],
              ],
              [
                /(archos)\s(gamepad2?)/i,
                /(hp).+(touchpad)/i,
                /(hp).+(tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /\s(nook)[\w\s]+build\/(\w+)/i,
                /(dell)\s(strea[kpr\s\d]*[\dko])/i,
              ],
              [s, i, [u, p]],
              [/(kf[A-z]+)\sbuild\/.+silk\//i],
              [i, [s, "Amazon"], [u, p]],
              [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
              [
                [i, d.str, v.device.amazon.model],
                [s, "Amazon"],
                [u, f],
              ],
              [/android.+aft([bms])\sbuild/i],
              [i, [s, "Amazon"], [u, "smarttv"]],
              [/\((ip[honed|\s\w*]+);.+(apple)/i],
              [i, s, [u, f]],
              [/\((ip[honed|\s\w*]+);/i],
              [i, [s, "Apple"], [u, f]],
              [
                /(blackberry)[\s-]?(\w+)/i,
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                /(hp)\s([\w\s]+\w)/i,
                /(asus)-?(\w+)/i,
              ],
              [s, i, [u, f]],
              [/\(bb10;\s(\w+)/i],
              [i, [s, "BlackBerry"], [u, f]],
              [
                /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i,
              ],
              [i, [s, "Asus"], [u, p]],
              [
                /(sony)\s(tablet\s[ps])\sbuild\//i,
                /(sony)?(?:sgp.+)\sbuild\//i,
              ],
              [
                [s, "Sony"],
                [i, "Xperia Tablet"],
                [u, p],
              ],
              [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
              [i, [s, "Sony"], [u, f]],
              [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
              [s, i, [u, "console"]],
              [/android.+;\s(shield)\sbuild/i],
              [i, [s, "Nvidia"], [u, "console"]],
              [/(playstation\s[34portablevi]+)/i],
              [i, [s, "Sony"], [u, "console"]],
              [/(sprint\s(\w+))/i],
              [
                [s, d.str, v.device.sprint.vendor],
                [i, d.str, v.device.sprint.model],
                [u, f],
              ],
              [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
              [s, i, [u, p]],
              [
                /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,
                /(zte)-(\w*)/i,
                /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
              ],
              [s, [i, /_/g, " "], [u, f]],
              [/(nexus\s9)/i],
              [i, [s, "HTC"], [u, p]],
              [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
              [i, [s, "Huawei"], [u, f]],
              [/(microsoft);\s(lumia[\s\w]+)/i],
              [s, i, [u, f]],
              [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
              [i, [s, "Microsoft"], [u, "console"]],
              [/(kin\.[onetw]{3})/i],
              [
                [i, /\./g, " "],
                [s, "Microsoft"],
                [u, f],
              ],
              [
                /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
                /mot[\s-]?(\w*)/i,
                /(XT\d{3,4}) build\//i,
                /(nexus\s6)/i,
              ],
              [i, [s, "Motorola"], [u, f]],
              [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
              [i, [s, "Motorola"], [u, p]],
              [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
              [
                [s, h.trim],
                [i, h.trim],
                [u, "smarttv"],
              ],
              [/hbbtv.+maple;(\d+)/i],
              [
                [i, /^/, "SmartTV"],
                [s, "Samsung"],
                [u, "smarttv"],
              ],
              [/\(dtv[\);].+(aquos)/i],
              [i, [s, "Sharp"], [u, "smarttv"]],
              [
                /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
                /((SM-T\w+))/i,
              ],
              [[s, "Samsung"], i, [u, p]],
              [/smart-tv.+(samsung)/i],
              [s, [u, "smarttv"], i],
              [
                /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
                /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
                /sec-((sgh\w+))/i,
              ],
              [[s, "Samsung"], i, [u, f]],
              [/sie-(\w*)/i],
              [i, [s, "Siemens"], [u, f]],
              [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
              [[s, "Nokia"], i, [u, f]],
              [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
              [i, [s, "Acer"], [u, p]],
              [/android.+([vl]k\-?\d{3})\s+build/i],
              [i, [s, "LG"], [u, p]],
              [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
              [[s, "LG"], i, [u, p]],
              [/(lg) netcast\.tv/i],
              [s, i, [u, "smarttv"]],
              [
                /(nexus\s[45])/i,
                /lg[e;\s\/-]+(\w*)/i,
                /android.+lg(\-?[\d\w]+)\s+build/i,
              ],
              [i, [s, "LG"], [u, f]],
              [/android.+(ideatab[a-z0-9\-\s]+)/i],
              [i, [s, "Lenovo"], [u, p]],
              [/linux;.+((jolla));/i],
              [s, i, [u, f]],
              [/((pebble))app\/[\d\.]+\s/i],
              [s, i, [u, "wearable"]],
              [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
              [s, i, [u, f]],
              [/crkey/i],
              [
                [i, "Chromecast"],
                [s, "Google"],
              ],
              [/android.+;\s(glass)\s\d/i],
              [i, [s, "Google"], [u, "wearable"]],
              [/android.+;\s(pixel c)[\s)]/i],
              [i, [s, "Google"], [u, p]],
              [/android.+;\s(pixel( [23])?( xl)?)\s/i],
              [i, [s, "Google"], [u, f]],
              [
                /android.+;\s(\w+)\s+build\/hm\1/i,
                /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
                /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
                /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i,
              ],
              [
                [i, /_/g, " "],
                [s, "Xiaomi"],
                [u, f],
              ],
              [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
              [
                [i, /_/g, " "],
                [s, "Xiaomi"],
                [u, p],
              ],
              [/android.+;\s(m[1-5]\snote)\sbuild/i],
              [i, [s, "Meizu"], [u, p]],
              [/(mz)-([\w-]{2,})/i],
              [[s, "Meizu"], i, [u, f]],
              [
                /android.+a000(1)\s+build/i,
                /android.+oneplus\s(a\d{4})\s+build/i,
              ],
              [i, [s, "OnePlus"], [u, f]],
              [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
              [i, [s, "RCA"], [u, p]],
              [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
              [i, [s, "Dell"], [u, p]],
              [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
              [i, [s, "Verizon"], [u, p]],
              [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
              [[s, "Barnes & Noble"], i, [u, p]],
              [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
              [i, [s, "NuVision"], [u, p]],
              [/android.+;\s(k88)\sbuild/i],
              [i, [s, "ZTE"], [u, p]],
              [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
              [i, [s, "Swiss"], [u, f]],
              [/android.+[;\/]\s*(zur\d{3})\s+build/i],
              [i, [s, "Swiss"], [u, p]],
              [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
              [i, [s, "Zeki"], [u, p]],
              [
                /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
                /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i,
              ],
              [[s, "Dragon Touch"], i, [u, p]],
              [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
              [i, [s, "Insignia"], [u, p]],
              [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
              [i, [s, "NextBook"], [u, p]],
              [
                /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i,
              ],
              [[s, "Voice"], i, [u, f]],
              [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
              [[s, "LvTel"], i, [u, f]],
              [/android.+;\s(PH-1)\s/i],
              [i, [s, "Essential"], [u, f]],
              [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
              [i, [s, "Envizen"], [u, p]],
              [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
              [s, i, [u, p]],
              [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
              [i, [s, "MachSpeed"], [u, p]],
              [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
              [s, i, [u, p]],
              [/android.+[;\/]\s*TU_(1491)\s+build/i],
              [i, [s, "Rotor"], [u, p]],
              [/android.+(KS(.+))\s+build/i],
              [i, [s, "Amazon"], [u, p]],
              [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
              [s, i, [u, p]],
              [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
              [[u, h.lowerize], s, i],
              [/(android[\w\.\s\-]{0,9});.+build/i],
              [i, [s, "Generic"]],
            ],
            engine: [
              [/windows.+\sedge\/([\w\.]+)/i],
              [l, [c, "EdgeHTML"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                /(icab)[\/\s]([23]\.[\d\.]+)/i,
              ],
              [c, l],
              [/rv\:([\w\.]{1,9}).+(gecko)/i],
              [l, c],
            ],
            os: [
              [/microsoft\s(windows)\s(vista|xp)/i],
              [c, l],
              [
                /(windows)\snt\s6\.2;\s(arm)/i,
                /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
                /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
              ],
              [c, [l, d.str, v.os.windows.version]],
              [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
              [
                [c, "Windows"],
                [l, d.str, v.os.windows.version],
              ],
              [/\((bb)(10);/i],
              [[c, "BlackBerry"], l],
              [
                /(blackberry)\w*\/?([\w\.]*)/i,
                /(tizen)[\/\s]([\w\.]+)/i,
                /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,
                /linux;.+(sailfish);/i,
              ],
              [c, l],
              [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
              [[c, "Symbian"], l],
              [/\((series40);/i],
              [c],
              [/mozilla.+\(mobile;.+gecko.+firefox/i],
              [[c, "Firefox OS"], l],
              [
                /(nintendo|playstation)\s([wids34portablevu]+)/i,
                /(mint)[\/\s\(]?(\w*)/i,
                /(mageia|vectorlinux)[;\s]/i,
                /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                /(hurd|linux)\s?([\w\.]*)/i,
                /(gnu)\s?([\w\.]*)/i,
              ],
              [c, l],
              [/(cros)\s[\w]+\s([\w\.]+\w)/i],
              [[c, "Chromium OS"], l],
              [/(sunos)\s?([\w\.\d]*)/i],
              [[c, "Solaris"], l],
              [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
              [c, l],
              [/(haiku)\s(\w+)/i],
              [c, l],
              [
                /cfnetwork\/.+darwin/i,
                /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
              ],
              [
                [l, /_/g, "."],
                [c, "iOS"],
              ],
              [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
              [
                [c, "Mac OS"],
                [l, /_/g, "."],
              ],
              [
                /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
                /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
                /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                /(unix)\s?([\w\.]*)/i,
              ],
              [c, l],
            ],
          },
          g = function (t, e) {
            if (
              ("object" === typeof t && ((e = t), (t = void 0)),
              !(this instanceof g))
            )
              return new g(t, e).getResult();
            var r =
                t ||
                (o && o.navigator && o.navigator.userAgent
                  ? o.navigator.userAgent
                  : ""),
              n = e ? h.extend(y, e) : y;
            return (
              (this.getBrowser = function () {
                var t = { name: void 0, version: void 0 };
                return (
                  d.rgx.call(t, r, n.browser),
                  (t.major = h.major(t.version)),
                  t
                );
              }),
              (this.getCPU = function () {
                var t = { architecture: void 0 };
                return (d.rgx.call(t, r, n.cpu), t);
              }),
              (this.getDevice = function () {
                var t = { vendor: void 0, model: void 0, type: void 0 };
                return (d.rgx.call(t, r, n.device), t);
              }),
              (this.getEngine = function () {
                var t = { name: void 0, version: void 0 };
                return (d.rgx.call(t, r, n.engine), t);
              }),
              (this.getOS = function () {
                var t = { name: void 0, version: void 0 };
                return (d.rgx.call(t, r, n.os), t);
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return r;
              }),
              (this.setUA = function (t) {
                return ((r = t), this);
              }),
              this
            );
          };
        ((g.VERSION = "0.7.19"),
          (g.BROWSER = { NAME: c, MAJOR: "major", VERSION: l }),
          (g.CPU = { ARCHITECTURE: "architecture" }),
          (g.DEVICE = {
            MODEL: i,
            VENDOR: s,
            TYPE: u,
            CONSOLE: "console",
            MOBILE: f,
            SMARTTV: "smarttv",
            TABLET: p,
            WEARABLE: "wearable",
            EMBEDDED: "embedded",
          }),
          (g.ENGINE = { NAME: c, VERSION: l }),
          (g.OS = { NAME: c, VERSION: l }),
          "undefined" !== typeof e
            ? ("undefined" !== typeof t && t.exports && (e = t.exports = g),
              (e.UAParser = g))
            : r("PDX0")
              ? void 0 ===
                  (n = function () {
                    return g;
                  }.call(e, r, e, t)) || (t.exports = n)
              : o && (o.UAParser = g));
        var m = o && (o.jQuery || o.Zepto);
        if ("undefined" !== typeof m && !m.ua) {
          var b = new g();
          ((m.ua = b.getResult()),
            (m.ua.get = function () {
              return b.getUA();
            }),
            (m.ua.set = function (t) {
              b.setUA(t);
              var e = b.getResult();
              for (var r in e) m.ua[r] = e[r];
            }));
        }
      })("object" === typeof window ? window : this);
    },
    O4cR: function (t, e, r) {
      "use strict";
      (r.d(e, "a", function () {
        return n;
      }),
        r.d(e, "f", function () {
          return o;
        }),
        r.d(e, "b", function () {
          return a;
        }),
        r.d(e, "d", function () {
          return i;
        }),
        r.d(e, "c", function () {
          return c;
        }),
        r.d(e, "g", function () {
          return u;
        }),
        r.d(e, "e", function () {
          return s;
        }));
      var n = "CLEAR_DETAIL_ERROR",
        o = function () {
          return { type: n };
        },
        a = "GET_ARTICLE_DETAIL",
        i = "GET_ARTICLE_DETAIL_SUCCESS",
        c = "GET_ARTICLE_DETAIL_FAIL",
        u = function (t) {
          return { type: a, payload: t };
        },
        s = "SAVE_UPDATE_DETAIL_STOCK_LIST";
    },
    ODnd: function (t, e, r) {
      "use strict";
      (r.d(e, "b", function () {
        return $;
      }),
        r.d(e, "a", function () {
          return tt;
        }));
      var n = r("ANjH"),
        o = r("V/h/"),
        a = r("9ONQ"),
        i = r("hKvw"),
        c = new a.a(),
        u = {
          telegraphList: [],
          telegraphTemp: [],
          newNumber: 0,
          openExplainTelegraph: !1,
          currentExplainTelegraphId: "",
          quote: { quote: {}, rank: {} },
          telegraphListError: { errno: 0, errorMessage: "" },
        },
        s = Object(o.a)(function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : u,
            e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case i.e:
              return ((t.telegraphListError = e.payload), t);
            case i.f:
              var r = t.telegraphList;
              return (
                e.payload.isRollData
                  ? e.payload.rollData.forEach(function (t) {
                      r.forEach(function (e, n) {
                        e.id === t.id && (r[n].collection = t.collection);
                      });
                    })
                  : e.payload.telegraphList.forEach(function (t) {
                      r.findIndex &&
                        -1 ===
                          r.findIndex(function (e) {
                            return e.id === t.id;
                          }) &&
                        r.push(t);
                    }),
                (t.telegraphList = r),
                (t.telegraphListError.errno = e.payload.errno),
                (t.telegraphListError.errorMessage = e.payload.errorMessage),
                t
              );
            case i.b:
              return ((t.telegraphList = []), t);
            case i.n:
              var n = t.telegraphList,
                o = [];
              return (
                e.payload.list.forEach(function (t) {
                  n.findIndex &&
                    n.findIndex(function (e) {
                      return e.id === t.id;
                    }) <= -1 &&
                    (n.unshift(t), o.unshift(t));
                }),
                (t.telegraphList = n),
                (t.telegraphTemp = o),
                t
              );
            case i.o:
              return ((t.newNumber += e.payload), t);
            case i.i:
              var a = e.payload.l || {},
                c = [];
              for (var s in (t.telegraphList.forEach(function (t) {
                t.ctime >= e.payload.i && t.ctime <= e.payload.a
                  ? a[t.id]
                    ? (c.push(Object.assign(t, a[t.id], { recovery: !1 })),
                      (a[t.id].isExistence = !0))
                    : c.push(Object.assign(t, { recovery: !0 }))
                  : c.push(t);
              }),
              a))
                if (!a[s].isExistence)
                  for (var l = 0; l < c.length; l++)
                    if (a[s].ctime > c[l].ctime) {
                      c.splice(l, 0, a[s]);
                      break;
                    }
              return ((t.telegraphList = c), t);
            case i.a:
              return ((t.newNumber = 0), t);
            case i.h:
              return (
                t.currentExplainTelegraphId === e.payload
                  ? (t.openExplainTelegraph = !t.openExplainTelegraph)
                  : (t.openExplainTelegraph = !0),
                (t.currentExplainTelegraphId = e.payload),
                t
              );
            case i.k:
              var f = t.telegraphList;
              return (
                f.forEach(function (t, r) {
                  e.payload[t.id] &&
                    ((f[r].reading_num = e.payload[t.id].readNum),
                    (f[r].comment_num = e.payload[t.id].commentNum),
                    (f[r].share_num = e.payload[t.id].shareNum));
                }),
                t
              );
            default:
              return t;
          }
        }),
        l = u,
        f = Object(o.a)(function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : u,
            e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case i.u:
              return ((t.hasTelegraphSound = e.data.hasTelegraphSound), t);
            case i.t:
              return ((t.hasTelegraphRemind = e.data.hasTelegraphRemind), t);
            case i.p:
              var r = [].concat(e.payload.telegraphList),
                n = Array.isArray(e.payload.newTelegraphList)
                  ? e.payload.newTelegraphList
                  : [e.payload.newTelegraphList];
              n = n.reverse();
              var o = [];
              return (
                n.forEach(function (t) {
                  0 !== t.id &&
                    (r.some(function (e) {
                      return e.id === t.id;
                    }) ||
                      o.push(t));
                }),
                (t.articleList = o),
                (t.articleListTemp = n),
                t
              );
            case i.c:
              return ((t.articleList = []), t);
            case i.q:
              return (
                c.set("hasTelegraphNotification", e.payload.switch),
                (t.hasTelegraphNotification = e.payload.switch),
                t
              );
            case i.s:
              return (
                c.set("hasTelegraphSound", e.payload.switch),
                (t.hasTelegraphSound = e.payload.switch),
                t
              );
            case i.r:
              return (
                c.set("hasTelegraphRemind", e.payload.switch),
                (t.hasTelegraphRemind = e.payload.switch),
                t
              );
            default:
              return t;
          }
        }),
        p = {
          hasTelegraphRemind: "on",
          hasTelegraphSound: "on",
          hasTelegraphNotification: "on",
          articleList: [],
        },
        h = r("kRGu"),
        d = { siteHost: "", step: "", globalMask: !1 },
        v = Object(o.a)(function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : d,
            e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case h.a:
              return ((t.step = ""), t);
            case h.g:
              return ((t.step = e.payload.step), t);
            case h.e:
              return ((t.globalMask = !t.globalMask), t);
            case h.d:
              return ((t.bannerData = e.payload.bannerData), t);
            default:
              return t;
          }
        }),
        y = d,
        g = r("O4cR"),
        m = {
          error: { errno: 0, errorMessage: "" },
          articleDetail: {},
          comment: {},
        },
        b = Object(o.a)(function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : m,
            e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case g.d:
              return ((t.articleDetail = e.payload.articleDetail), t);
            case g.e:
              return (
                t.articleDetail.stocksList &&
                  t.articleDetail.stocksList.length &&
                  t.articleDetail.stocksList.forEach(function (r, n) {
                    e.payload[r.stockid] &&
                      (t.articleDetail.stocksList[n].riserange =
                        e.payload[r.stockid].change);
                  }),
                t
              );
            case g.c:
              return ((t.error = e.payload), t);
            case g.a:
              return ((t.error = { errno: 0, errorMessage: "" }), t);
            default:
              return t;
          }
        }),
        w = m,
        x = r("8ihE"),
        O = {
          error: { errno: 0, errorMessage: "" },
          userInfo: {},
          userAvatar: "",
          prepaidFeaturedColumnData: [],
          prepaidArticleData: [],
          attentionData: [],
          favoriteArticleData: [],
        },
        j = Object(o.a)(function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : O,
            e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case h.f:
              return ((t.userInfo = e.payload.userInfo), t);
            case x.d:
              return ((t.error = e.payload), t);
            case x.e:
              return (
                t.attentionData.map(function (r, n) {
                  r.id === e.payload.id && t.attentionData.splice(n, 1);
                }),
                t
              );
            case x.h:
              return ((t.userInfo = e.payload), t);
            case x.g:
              return ((t.error = e.payload), t);
            case x.k:
              return (
                (t.error = {
                  errno: 600,
                  errorMessage: "\u4fee\u6539\u6210\u529f",
                }),
                t
              );
            case x.j:
              return ((t.error = e.payload), t);
            case x.b:
              return (
                (t.error = {
                  errno: (e.payload && e.payload.errno) || 0,
                  errorMessage: (e.payload && e.payload.errorMessage) || "",
                }),
                t
              );
            case x.a:
              return ((t.userAvatar = e.payload), t);
            default:
              return t;
          }
        }),
        E = O,
        L = r("iSsy"),
        _ = { error: { errno: 0, errorMessage: "" } },
        k = Object(o.a)(function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : _,
            e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case L.a:
              return ((t.error = { errno: 0, errorMessage: "" }), t);
            default:
              return t;
          }
        }),
        N = _,
        S = r("OcsX"),
        A = { chooseNav: "" },
        T = Object(o.a)(function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : A,
            e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case S.a:
              return ((t.chooseNav = e.payload.chooseNav), t);
            default:
              return t;
          }
        }),
        I = A,
        P = r("Sc7i"),
        C = { optionalListData: {} },
        G = Object(o.a)(function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : C,
            e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case P.c:
              return (
                (t.optionalListData = e.payload.data ? e.payload.data : {}),
                t
              );
            default:
              return t;
          }
        }),
        R = C,
        D = r("BQsQ"),
        F = {
          vipNotificationState: "off",
          error: { errno: 0, errorMessage: "" },
          columnDetail: {},
          articleDetail: {},
          subscribedColumn: {},
          newSubscribedArticle: [],
        },
        M = Object(o.a)(function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : F,
            e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case D.d:
              return ((t.subscribedColumn = e.payload), t);
            case D.i:
              return ((t.newSubscribedArticle = e.payload), t);
            case D.j:
              return ((t.vipGlobalArticle = e.payload), t);
            case D.a:
              return ((t.vipNotificationState = e.payload), t);
            case D.h:
              return ((t.columnDetail = e.payload.data), t);
            case D.f:
              return ((t.articleDetail = e.payload.articleDetail), t);
            default:
              return t;
          }
        }),
        B = F,
        V = r("H2OK"),
        q = { depthNavType: [] },
        U = Object(o.a)(function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : q,
            e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case V.b:
              return (
                (t.depthNavType = e.payload.depthNavType.user_column_bar
                  ? e.payload.depthNavType.user_column_bar
                  : []),
                t
              );
            default:
              return t;
          }
        }),
        z = q,
        H = r("Jlt2"),
        Y = { stockList: {}, plateList: {} },
        K = Object(o.a)(function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Y,
            e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case H.a:
              return ((t[e.listType] = e.payload), t);
            default:
              return t;
          }
        }),
        W = Y,
        X = r("kv7x"),
        Q = {
          recommendSubjectData: {},
          hotArticleData: [],
          investKalendarData: [],
          assembleData: {},
          vipColumn: {},
          famousAlbum: [],
          hotSubject: [],
        },
        Z = Object(o.a)(function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Q,
            e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case X.l:
              return ((t.recommendSubjectData = e.payload.data), t);
            case X.f:
              return ((t.hotArticleData = e.payload.data), t);
            case X.j:
              return ((t.investKalendarData = e.payload.data), t);
            case X.b:
              return ((t.assembleData = e.payload.data), t);
            case X.n:
              return ((t.vipColumn = e.payload.data), t);
            case X.d:
              return ((t.famousAlbum = e.payload.data), t);
            case X.h:
              return ((t.hotSubject = e.payload.data), t);
            default:
              return t;
          }
        }),
        J = Q,
        $ = Object(n.c)({
          telegraph: s,
          layout: v,
          detail: b,
          user: j,
          telegraphVoice: f,
          subject: k,
          common: T,
          searchPage: G,
          vip: M,
          depth: U,
          watch: K,
          indexPage: Z,
        }),
        tt = {
          telegraph: l,
          layout: y,
          detail: w,
          user: E,
          telegraphVoice: p,
          subject: N,
          common: I,
          searchPage: R,
          vip: B,
          depth: z,
          watch: W,
          indexPage: J,
        };
    },
    PDX0: function (t, e) {
      (function (e) {
        t.exports = e;
      }).call(this, {});
    },
    QrVo: function (t, e, r) {
      "use strict";
      var n = r("q1tI"),
        o = r.n(n),
        a = r("/MKj"),
        i = r("nOHt"),
        c = r("kRGu"),
        u = o.a.createElement;
      e.a = Object(a.b)("", function (t) {
        return {
          handleLogOut: function (e) {
            return t(Object(c.j)(e));
          },
        };
      })(function (t) {
        var e = Object(i.useRouter)();
        return u(
          "div",
          { className: "p-f l-0 t-0 z-i-9999 w-100p h-100p bg-c-000-78" },
          u(
            "div",
            {
              className:
                "p-a t-50p l-50p z-i-10 w-420 h-200 bg-c-fff b-r-2 t-t--50p",
            },
            u(
              "div",
              {
                className:
                  "p-a t-0 r-0 p-t-10 p-r-20 p-b-10 p-l-20 f-s-20 l-h-1 c-d8d8d8 c-p",
                onClick: function () {
                  return t.handleIsShowLogOutBox({ isShow: !1 });
                },
              },
              "\u2715",
            ),
            u(
              "div",
              { className: "m-t-50 m-l-20 f-s-18 c-222" },
              "\u786e\u5b9a\u8981\u9000\u51fa\u767b\u5f55\u5417\uff1f",
            ),
            u(
              "div",
              { className: "p-a b-20 r-20 m-t-20 m-b-20 t-a-c" },
              u(
                "span",
                {
                  className:
                    "d-i-b m-r-10 p-t-6 p-r-24 p-b-6 p-l-24 f-s-14 c-222 t-a-c b-w-1 b-s-s b-c-979797 b-r-24 c-p log-out-button",
                  onClick: function () {
                    t.handleIsShowLogOutBox({ isShow: !1 });
                  },
                },
                "\u53d6\u6d88",
              ),
              u(
                "span",
                {
                  className:
                    "d-i-b p-t-6 p-r-24 p-b-6 p-l-24 f-s-14 c-222 t-a-c b-w-1 b-s-s b-c-979797 b-r-24 c-p log-out-button",
                  onClick: function () {
                    return (
                      t.handleLogOut({
                        pathname: "/user" === e.pathname ? "user" : "",
                      }),
                      void t.handleIsShowLogOutBox({ isShow: !1 })
                    );
                  },
                },
                "\u786e\u8ba4\u9000\u51fa",
              ),
            ),
          ),
        );
      });
    },
    Sc7i: function (t, e, r) {
      "use strict";
      (r.d(e, "c", function () {
        return n;
      }),
        r.d(e, "b", function () {
          return o;
        }),
        r.d(e, "a", function () {
          return a;
        }),
        r.d(e, "d", function () {
          return i;
        }));
      var n = "GET_OPTIONAL_LIST_SUCCESS",
        o = "GET_OPTIONAL_LIST_FAIL",
        a = "GET_OPTIONAL_LIST",
        i = function () {
          return { type: a };
        };
    },
    "V/h/": function (t, e, r) {
      "use strict";
      (function (t) {
        var n;
        r.d(e, "b", function () {
          return U;
        });
        var o =
            "undefined" !== typeof Symbol
              ? Symbol("immer-nothing")
              : (((n = {})["immer-nothing"] = !0), n),
          a =
            "undefined" !== typeof Symbol && Symbol.for
              ? Symbol.for("immer-draftable")
              : "__$immer_draftable",
          i =
            "undefined" !== typeof Symbol && Symbol.for
              ? Symbol.for("immer-state")
              : "__$immer_state";
        function c(t) {
          return !!t && !!t[i];
        }
        function u(t) {
          if (!t || "object" !== typeof t) return !1;
          if (Array.isArray(t)) return !0;
          var e = Object.getPrototypeOf(t);
          return !e || e === Object.prototype || !!t[a] || !!t.constructor[a];
        }
        var s =
            Object.assign ||
            function (t, e) {
              for (var r in e) d(e, r) && (t[r] = e[r]);
              return t;
            },
          l =
            "undefined" !== typeof Reflect && Reflect.ownKeys
              ? Reflect.ownKeys
              : "undefined" !== typeof Object.getOwnPropertySymbols
                ? function (t) {
                    return Object.getOwnPropertyNames(t).concat(
                      Object.getOwnPropertySymbols(t),
                    );
                  }
                : Object.getOwnPropertyNames;
        function f(t, e) {
          if ((void 0 === e && (e = !1), Array.isArray(t))) return t.slice();
          var r = Object.create(Object.getPrototypeOf(t));
          return (
            l(t).forEach(function (n) {
              if (n !== i) {
                var o = Object.getOwnPropertyDescriptor(t, n),
                  a = o.value;
                if (o.get) {
                  if (!e)
                    throw new Error(
                      "Immer drafts cannot have computed properties",
                    );
                  a = o.get.call(t);
                }
                o.enumerable
                  ? (r[n] = a)
                  : Object.defineProperty(r, n, {
                      value: a,
                      writable: !0,
                      configurable: !0,
                    });
              }
            }),
            r
          );
        }
        function p(t, e) {
          if (Array.isArray(t))
            for (var r = 0; r < t.length; r++) e(r, t[r], t);
          else
            l(t).forEach(function (r) {
              return e(r, t[r], t);
            });
        }
        function h(t, e) {
          var r = Object.getOwnPropertyDescriptor(t, e);
          return !!r && r.enumerable;
        }
        function d(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        function v(t, e) {
          return t === e ? 0 !== t || 1 / t === 1 / e : t !== t && e !== e;
        }
        var y = function (t) {
          ((this.drafts = []),
            (this.parent = t),
            (this.canAutoFreeze = !0),
            (this.patches = null));
        };
        function g(t) {
          t[i].revoke();
        }
        ((y.prototype.usePatches = function (t) {
          t &&
            ((this.patches = []),
            (this.inversePatches = []),
            (this.patchListener = t));
        }),
          (y.prototype.revoke = function () {
            (this.leave(), this.drafts.forEach(g), (this.drafts = null));
          }),
          (y.prototype.leave = function () {
            this === y.current && (y.current = this.parent);
          }),
          (y.current = null),
          (y.enter = function () {
            return (this.current = new y(this.current));
          }));
        var m = {};
        function b(t, e) {
          var r = Array.isArray(t),
            n = L(t);
          p(n, function (e) {
            !(function (t, e, r) {
              var n = m[e];
              n
                ? (n.enumerable = r)
                : (m[e] = n =
                    {
                      configurable: !0,
                      enumerable: r,
                      get: function () {
                        return (function (t, e) {
                          _(t);
                          var r = O(x(t), e);
                          if (t.finalizing) return r;
                          if (r === O(t.base, e) && u(r))
                            return (E(t), (t.copy[e] = b(r, t)));
                          return r;
                        })(this[i], e);
                      },
                      set: function (t) {
                        !(function (t, e, r) {
                          if ((_(t), (t.assigned[e] = !0), !t.modified)) {
                            if (v(r, O(x(t), e))) return;
                            (j(t), E(t));
                          }
                          t.copy[e] = r;
                        })(this[i], e, t);
                      },
                    });
              Object.defineProperty(t, e, n);
            })(n, e, r || h(t, e));
          });
          var o,
            a,
            c,
            s = e ? e.scope : y.current;
          return (
            (o = n),
            (a = i),
            (c = {
              scope: s,
              modified: !1,
              finalizing: !1,
              finalized: !1,
              assigned: {},
              parent: e,
              base: t,
              draft: n,
              copy: null,
              revoke: w,
              revoked: !1,
            }),
            Object.defineProperty(o, a, {
              value: c,
              enumerable: !1,
              writable: !0,
            }),
            s.drafts.push(n),
            n
          );
        }
        function w() {
          this.revoked = !0;
        }
        function x(t) {
          return t.copy || t.base;
        }
        function O(t, e) {
          var r = t[i];
          if (r && !r.finalizing) {
            r.finalizing = !0;
            var n = t[e];
            return ((r.finalizing = !1), n);
          }
          return t[e];
        }
        function j(t) {
          t.modified || ((t.modified = !0), t.parent && j(t.parent));
        }
        function E(t) {
          t.copy || (t.copy = L(t.base));
        }
        function L(t) {
          var e = t && t[i];
          if (e) {
            e.finalizing = !0;
            var r = f(e.draft, !0);
            return ((e.finalizing = !1), r);
          }
          return f(t);
        }
        function _(t) {
          if (!0 === t.revoked)
            throw new Error(
              "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " +
                JSON.stringify(x(t)),
            );
        }
        function k(t) {
          for (var e = t.length - 1; e >= 0; e--) {
            var r = t[e][i];
            r.modified || (Array.isArray(r.base) ? S(r) && j(r) : N(r) && j(r));
          }
        }
        function N(t) {
          for (
            var e = t.base, r = t.draft, n = Object.keys(r), o = n.length - 1;
            o >= 0;
            o--
          ) {
            var a = n[o],
              c = e[a];
            if (void 0 === c && !d(e, a)) return !0;
            var u = r[a],
              s = u && u[i];
            if (s ? s.base !== c : !v(u, c)) return !0;
          }
          return n.length !== Object.keys(e).length;
        }
        function S(t) {
          var e = t.draft;
          if (e.length !== t.base.length) return !0;
          var r = Object.getOwnPropertyDescriptor(e, e.length - 1);
          return !(!r || r.get);
        }
        var A = Object.freeze({
          willFinalize: function (t, e, r) {
            (t.drafts.forEach(function (t) {
              t[i].finalizing = !0;
            }),
              r
                ? c(e) && e[i].scope === t && k(t.drafts)
                : (t.patches &&
                    (function t(e) {
                      if (!e || "object" !== typeof e) return;
                      var r = e[i];
                      if (!r) return;
                      var n = r.base,
                        o = r.draft,
                        a = r.assigned;
                      if (Array.isArray(e)) {
                        if (S(r)) {
                          if ((j(r), (a.length = !0), o.length < n.length))
                            for (var c = o.length; c < n.length; c++) a[c] = !1;
                          else
                            for (var u = n.length; u < o.length; u++) a[u] = !0;
                          for (var s = 0; s < o.length; s++)
                            void 0 === a[s] && t(o[s]);
                        }
                      } else
                        (Object.keys(o).forEach(function (e) {
                          void 0 !== n[e] || d(n, e)
                            ? a[e] || t(o[e])
                            : ((a[e] = !0), j(r));
                        }),
                          Object.keys(n).forEach(function (t) {
                            void 0 !== o[t] || d(o, t) || ((a[t] = !1), j(r));
                          }));
                    })(t.drafts[0]),
                  k(t.drafts)));
          },
          createProxy: b,
        });
        function T(t, e) {
          var r = e ? e.scope : y.current,
            n = {
              scope: r,
              modified: !1,
              finalized: !1,
              assigned: {},
              parent: e,
              base: t,
              draft: null,
              drafts: {},
              copy: null,
              revoke: null,
            },
            o = Array.isArray(t)
              ? Proxy.revocable([n], P)
              : Proxy.revocable(n, I),
            a = o.revoke,
            i = o.proxy;
          return ((n.draft = i), (n.revoke = a), r.drafts.push(i), i);
        }
        var I = {
            get: function (t, e) {
              if (e === i) return t;
              var r = t.drafts;
              if (!t.modified && d(r, e)) return r[e];
              var n = C(t)[e];
              if (t.finalized || !u(n)) return n;
              if (t.modified) {
                if (n !== G(t.base, e)) return n;
                r = t.copy;
              }
              return (r[e] = T(n, t));
            },
            has: function (t, e) {
              return e in C(t);
            },
            ownKeys: function (t) {
              return Reflect.ownKeys(C(t));
            },
            set: function (t, e, r) {
              if (!t.modified) {
                var n = G(t.base, e);
                if (r ? v(n, r) || r === t.drafts[e] : v(n, r) && e in t.base)
                  return !0;
                R(t);
              }
              return ((t.assigned[e] = !0), (t.copy[e] = r), !0);
            },
            deleteProperty: function (t, e) {
              (void 0 !== G(t.base, e) || e in t.base) &&
                ((t.assigned[e] = !1), R(t));
              t.copy && delete t.copy[e];
              return !0;
            },
            getOwnPropertyDescriptor: function (t, e) {
              var r = C(t),
                n = Reflect.getOwnPropertyDescriptor(r, e);
              n &&
                ((n.writable = !0),
                (n.configurable = !Array.isArray(r) || "length" !== e));
              return n;
            },
            defineProperty: function () {
              throw new Error(
                "Object.defineProperty() cannot be used on an Immer draft",
              );
            },
            getPrototypeOf: function (t) {
              return Object.getPrototypeOf(t.base);
            },
            setPrototypeOf: function () {
              throw new Error(
                "Object.setPrototypeOf() cannot be used on an Immer draft",
              );
            },
          },
          P = {};
        function C(t) {
          return t.copy || t.base;
        }
        function G(t, e) {
          var r = t[i],
            n = Reflect.getOwnPropertyDescriptor(r ? C(r) : t, e);
          return n && n.value;
        }
        function R(t) {
          t.modified ||
            ((t.modified = !0),
            (t.copy = s(f(t.base), t.drafts)),
            (t.drafts = null),
            t.parent && R(t.parent));
        }
        (p(I, function (t, e) {
          P[t] = function () {
            return ((arguments[0] = arguments[0][0]), e.apply(this, arguments));
          };
        }),
          (P.deleteProperty = function (t, e) {
            if (isNaN(parseInt(e)))
              throw new Error("Immer only supports deleting array indices");
            return I.deleteProperty.call(this, t[0], e);
          }),
          (P.set = function (t, e, r) {
            if ("length" !== e && isNaN(parseInt(e)))
              throw new Error(
                "Immer only supports setting array indices and the 'length' property",
              );
            return I.set.call(this, t[0], e, r);
          }));
        var D = Object.freeze({ willFinalize: function () {}, createProxy: T });
        function F(t, e, r, n) {
          Array.isArray(t.base)
            ? (function (t, e, r, n) {
                var o,
                  a,
                  i = t.base,
                  c = t.copy,
                  u = t.assigned;
                c.length < i.length &&
                  ((i = (o = [c, i])[0]),
                  (c = o[1]),
                  (r = (a = [n, r])[0]),
                  (n = a[1]));
                var s = c.length - i.length,
                  l = 0;
                for (; i[l] === c[l] && l < i.length; ) ++l;
                var f = i.length;
                for (; f > l && i[f - 1] === c[f + s - 1]; ) --f;
                for (var p = l; p < f; ++p)
                  if (u[p] && c[p] !== i[p]) {
                    var h = e.concat([p]);
                    (r.push({ op: "replace", path: h, value: c[p] }),
                      n.push({ op: "replace", path: h, value: i[p] }));
                  }
                for (
                  var d = f != i.length, v = r.length, y = f + s - 1;
                  y >= f;
                  --y
                ) {
                  var g = e.concat([y]);
                  ((r[v + y - f] = { op: "add", path: g, value: c[y] }),
                    d && n.push({ op: "remove", path: g }));
                }
                d ||
                  n.push({
                    op: "replace",
                    path: e.concat(["length"]),
                    value: i.length,
                  });
              })(t, e, r, n)
            : (function (t, e, r, n) {
                var o = t.base,
                  a = t.copy;
                p(t.assigned, function (t, i) {
                  var c = o[t],
                    u = a[t],
                    s = i ? (t in o ? "replace" : "add") : "remove";
                  if (c !== u || "replace" !== s) {
                    var l = e.concat(t);
                    (r.push(
                      "remove" === s
                        ? { op: s, path: l }
                        : { op: s, path: l, value: u },
                    ),
                      n.push(
                        "add" === s
                          ? { op: "remove", path: l }
                          : "remove" === s
                            ? { op: "add", path: l, value: c }
                            : { op: "replace", path: l, value: c },
                      ));
                  }
                });
              })(t, e, r, n);
        }
        function M(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r],
              o = n.path;
            if (0 === o.length && "replace" === n.op) t = n.value;
            else {
              for (var a = t, i = 0; i < o.length - 1; i++)
                if (!(a = a[o[i]]) || "object" !== typeof a)
                  throw new Error(
                    "Cannot apply patch, path doesn't resolve: " + o.join("/"),
                  );
              var c = o[o.length - 1];
              switch (n.op) {
                case "replace":
                  a[c] = n.value;
                  break;
                case "add":
                  Array.isArray(a) ? a.splice(c, 0, n.value) : (a[c] = n.value);
                  break;
                case "remove":
                  Array.isArray(a) ? a.splice(c, 1) : delete a[c];
                  break;
                default:
                  throw new Error("Unsupported patch operation: " + n.op);
              }
            }
          }
          return t;
        }
        var B = {
            useProxies:
              "undefined" !== typeof Proxy && "undefined" !== typeof Reflect,
            autoFreeze:
              "undefined" === typeof t &&
              "verifyMinified" === function () {}.name,
            onAssign: null,
            onDelete: null,
            onCopy: null,
          },
          V = function (t) {
            (s(this, B, t),
              this.setUseProxies(this.useProxies),
              (this.produce = this.produce.bind(this)));
          };
        ((V.prototype.produce = function (t, e, r) {
          var n,
            a = this;
          if ("function" === typeof t && "function" !== typeof e) {
            var i = e;
            e = t;
            var c = this;
            return function (t) {
              var r = this;
              void 0 === t && (t = i);
              for (var n = [], o = arguments.length - 1; o-- > 0; )
                n[o] = arguments[o + 1];
              return c.produce(t, function (t) {
                return e.call.apply(e, [r, t].concat(n));
              });
            };
          }
          if ("function" !== typeof e)
            throw new Error(
              "The first or second argument to `produce` must be a function",
            );
          if (void 0 !== r && "function" !== typeof r)
            throw new Error(
              "The third argument to `produce` must be a function or undefined",
            );
          if (u(t)) {
            var s = y.enter(),
              l = this.createProxy(t),
              f = !0;
            try {
              ((n = e(l)), (f = !1));
            } finally {
              f ? s.revoke() : s.leave();
            }
            return n instanceof Promise
              ? n.then(
                  function (t) {
                    return (s.usePatches(r), a.processResult(t, s));
                  },
                  function (t) {
                    throw (s.revoke(), t);
                  },
                )
              : (s.usePatches(r), this.processResult(n, s));
          }
          return void 0 === (n = e(t)) ? t : n !== o ? n : void 0;
        }),
          (V.prototype.createDraft = function (t) {
            if (!u(t))
              throw new Error(
                "First argument to `createDraft` must be a plain object, an array, or an immerable object",
              );
            var e = y.enter(),
              r = this.createProxy(t);
            return ((r[i].isManual = !0), e.leave(), r);
          }),
          (V.prototype.finishDraft = function (t, e) {
            var r = t && t[i];
            if (!r || !r.isManual)
              throw new Error(
                "First argument to `finishDraft` must be a draft returned by `createDraft`",
              );
            if (r.finalized)
              throw new Error("The given draft is already finalized");
            var n = r.scope;
            return (n.usePatches(e), this.processResult(void 0, n));
          }),
          (V.prototype.setAutoFreeze = function (t) {
            this.autoFreeze = t;
          }),
          (V.prototype.setUseProxies = function (t) {
            ((this.useProxies = t), s(this, t ? D : A));
          }),
          (V.prototype.applyPatches = function (t, e) {
            return c(t)
              ? M(t, e)
              : this.produce(t, function (t) {
                  return M(t, e);
                });
          }),
          (V.prototype.processResult = function (t, e) {
            var r = e.drafts[0],
              n = void 0 !== t && t !== r;
            if ((this.willFinalize(e, t, n), n)) {
              if (r[i].modified)
                throw (
                  e.revoke(),
                  new Error(
                    "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
                  )
                );
              (u(t) && (t = this.finalize(t, null, e)),
                e.patches &&
                  (e.patches.push({ op: "replace", path: [], value: t }),
                  e.inversePatches.push({
                    op: "replace",
                    path: [],
                    value: r[i].base,
                  })));
            } else t = this.finalize(r, [], e);
            return (
              e.revoke(),
              e.patches && e.patchListener(e.patches, e.inversePatches),
              t !== o ? t : void 0
            );
          }),
          (V.prototype.finalize = function (t, e, r) {
            var n = this,
              o = t[i];
            if (!o)
              return Object.isFrozen(t) ? t : this.finalizeTree(t, null, r);
            if (o.scope !== r) return t;
            if (!o.modified) return o.base;
            if (!o.finalized) {
              if (
                ((o.finalized = !0),
                this.finalizeTree(o.draft, e, r),
                this.onDelete)
              )
                if (this.useProxies) {
                  var a = o.assigned;
                  for (var c in a) a[c] || this.onDelete(o, c);
                } else {
                  var u = o.base,
                    s = o.copy;
                  p(u, function (t) {
                    d(s, t) || n.onDelete(o, t);
                  });
                }
              (this.onCopy && this.onCopy(o),
                this.autoFreeze && r.canAutoFreeze && Object.freeze(o.copy),
                e && r.patches && F(o, e, r.patches, r.inversePatches));
            }
            return o.copy;
          }),
          (V.prototype.finalizeTree = function (t, e, r) {
            var n = this,
              o = t[i];
            o && (this.useProxies || (o.copy = f(o.draft, !0)), (t = o.copy));
            var a = !!e && !!r.patches,
              s = function (i, l, f) {
                if (l === f) throw Error("Immer forbids circular references");
                var d = !!o && f === t;
                if (c(l)) {
                  var y = d && a && !o.assigned[i] ? e.concat(i) : null;
                  if (
                    (c((l = n.finalize(l, y, r))) && (r.canAutoFreeze = !1),
                    Array.isArray(f) || h(f, i)
                      ? (f[i] = l)
                      : Object.defineProperty(f, i, { value: l }),
                    d && l === o.base[i])
                  )
                    return;
                } else {
                  if (d && v(l, o.base[i])) return;
                  u(l) && !Object.isFrozen(l) && p(l, s);
                }
                d && n.onAssign && n.onAssign(o, i, l);
              };
            return (p(t, s), t);
          }));
        var q = new V(),
          U = q.produce;
        (q.setAutoFreeze.bind(q),
          q.setUseProxies.bind(q),
          q.applyPatches.bind(q),
          q.createDraft.bind(q),
          q.finishDraft.bind(q));
        e.a = U;
      }).call(this, r("8oxB"));
    },
    b21l: function (t, e, r) {
      "use strict";
      function n() {
        n = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          c = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function s(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          s({}, "");
        } catch (S) {
          s = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function l(t, e, r, n) {
          var a = e && e.prototype instanceof h ? e : h,
            i = Object.create(a.prototype),
            c = new _(n || []);
          return (o(i, "_invoke", { value: O(t, r, c) }), i);
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (S) {
            return { type: "throw", arg: S };
          }
        }
        t.wrap = l;
        var p = {};
        function h() {}
        function d() {}
        function v() {}
        var y = {};
        s(y, i, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          m = g && g(g(k([])));
        m && m !== e && r.call(m, i) && (y = m);
        var b = (v.prototype = h.prototype = Object.create(y));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function x(t, e) {
          var n;
          o(this, "_invoke", {
            value: function (o, a) {
              function i() {
                return new e(function (n, i) {
                  !(function n(o, a, i, c) {
                    var u = f(t[o], t, a);
                    if ("throw" !== u.type) {
                      var s = u.arg,
                        l = s.value;
                      return l && "object" == typeof l && r.call(l, "__await")
                        ? e.resolve(l.__await).then(
                            function (t) {
                              n("next", t, i, c);
                            },
                            function (t) {
                              n("throw", t, i, c);
                            },
                          )
                        : e.resolve(l).then(
                            function (t) {
                              ((s.value = t), i(s));
                            },
                            function (t) {
                              return n("throw", t, i, c);
                            },
                          );
                    }
                    c(u.arg);
                  })(o, a, n, i);
                });
              }
              return (n = n ? n.then(i, i) : i());
            },
          });
        }
        function O(t, e, r) {
          var n = "suspendedStart";
          return function (o, a) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw a;
              return N();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = j(i, r);
                if (c) {
                  if (c === p) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = f(t, e, r);
              if ("normal" === u.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), u.arg === p)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function j(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                j(t, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              p
            );
          var o = f(n, t.iterator, e.arg);
          if ("throw" === o.type)
            return (
              (e.method = "throw"),
              (e.arg = o.arg),
              (e.delegate = null),
              p
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                p)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              p);
        }
        function E(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function L(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function _(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(E, this),
            this.reset(!0));
        }
        function k(t) {
          if (t) {
            var e = t[i];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n))
                      return ((e.value = t[n]), (e.done = !1), e);
                  return ((e.value = void 0), (e.done = !0), e);
                };
              return (o.next = o);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = v),
          o(b, "constructor", { value: v, configurable: !0 }),
          o(v, "constructor", { value: d, configurable: !0 }),
          (d.displayName = s(v, u, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === d || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, v)
                : ((t.__proto__ = v), s(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(b)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(x.prototype),
          s(x.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = x),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new x(l(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          w(b),
          s(b, u, "Generator"),
          s(b, i, function () {
            return this;
          }),
          s(b, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return ((t.value = n), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (t.values = k),
          (_.prototype = {
            constructor: _,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), p)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                p
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), L(r), p);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    L(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: k(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          t
        );
      }
      (r.d(e, "d", function () {
        return a;
      }),
        r.d(e, "e", function () {
          return i;
        }),
        r.d(e, "f", function () {
          return c;
        }),
        r.d(e, "c", function () {
          return u;
        }),
        r.d(e, "g", function () {
          return s;
        }),
        r.d(e, "a", function () {
          return l;
        }),
        r.d(e, "b", function () {
          return f;
        }));
      var o = r("bMwp").request;
      function a(t) {
        return n().async(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    o({ url: "/articles/v1/detail", params: t.params }),
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          },
          null,
          null,
          null,
          Promise,
        );
      }
      function i(t) {
        return n().async(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    o({ url: "/es/quotes/article/".concat(t.params.id) }),
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          },
          null,
          null,
          null,
          Promise,
        );
      }
      function c(t) {
        return n().async(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    o({ url: "/quote/stock/summaryContent", params: t.params }),
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          },
          null,
          null,
          null,
          Promise,
        );
      }
      function u(t) {
        return n().async(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    o({ url: "/v2/comment/get_list", params: t.params }),
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          },
          null,
          null,
          null,
          Promise,
        );
      }
      function s(t) {
        return n().async(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    o({
                      url: "/v1/comment/create",
                      method: "POST",
                      data: t.data,
                      params: t.params,
                    }),
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          },
          null,
          null,
          null,
          Promise,
        );
      }
      function l(t) {
        return n().async(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    o({
                      url: "/v1/comment/remove",
                      method: "POST",
                      data: t.data,
                      params: t.params,
                    }),
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          },
          null,
          null,
          null,
          Promise,
        );
      }
      function f(t) {
        return n().async(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    o({ url: "/v1/comment/zan", params: t.params }),
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          },
          null,
          null,
          null,
          Promise,
        );
      }
    },
    bVkC: function (t, e, r) {
      "use strict";
      var n = r("o0o1"),
        o = r.n(n),
        a = r("q1tI"),
        i = r.n(a),
        c = r("7bO/");
      function u(t, e, r, n, o, a, i) {
        try {
          var c = t[a](i),
            u = c.value;
        } catch (s) {
          return void r(s);
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o);
      }
      function s(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n));
        }
      }
      function l(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function f(t, e) {
        return (f =
          Object.setPrototypeOf ||
          function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
      }
      function p(t, e) {
        return !e || ("object" !== typeof e && "function" !== typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : e;
      }
      function h(t) {
        return function (e) {
          var r = (function (r) {
            function n() {
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n),
                p(
                  this,
                  (n.__proto__ || Object.getPrototypeOf(n)).apply(
                    this,
                    arguments,
                  ),
                )
              );
            }
            var a, l, h;
            return (
              (function (t, e) {
                if ("function" !== typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function",
                  );
                ((t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  e && f(t, e));
              })(n, r),
              (a = n),
              (l = [
                {
                  key: "render",
                  value: function () {
                    return i.a.createElement(e, this.props);
                  },
                },
              ]),
              (h = [
                {
                  key: "getInitialProps",
                  value: (function () {
                    var r,
                      n =
                        ((r = o.a.mark(function r(n) {
                          var a, i, u, s;
                          return o.a.wrap(
                            function (r) {
                              for (;;)
                                switch ((r.prev = r.next)) {
                                  case 0:
                                    if (
                                      ((a = n.ctx),
                                      (i = a.isServer),
                                      (u = a.store),
                                      (s = {}),
                                      !e.getInitialProps)
                                    ) {
                                      r.next = 6;
                                      break;
                                    }
                                    return ((r.next = 5), e.getInitialProps(n));
                                  case 5:
                                    s = r.sent;
                                  case 6:
                                    if (!t.async || i) {
                                      r.next = 8;
                                      break;
                                    }
                                    return r.abrupt("return", s);
                                  case 8:
                                    return (
                                      u.dispatch(c.a),
                                      (r.next = 11),
                                      u.sagaTask.done
                                    );
                                  case 11:
                                    return (
                                      i || u.runSagaTask(),
                                      r.abrupt("return", s)
                                    );
                                  case 13:
                                  case "end":
                                    return r.stop();
                                }
                            },
                            r,
                            this,
                          );
                        })),
                        function () {
                          var t = this,
                            e = arguments;
                          return new Promise(function (n, o) {
                            var a = r.apply(t, e);
                            function i(t) {
                              u(a, n, o, i, c, "next", t);
                            }
                            function c(t) {
                              u(a, n, o, i, c, "throw", t);
                            }
                            i(void 0);
                          });
                        });
                    return function (t) {
                      return n.apply(this, arguments);
                    };
                  })(),
                },
              ]),
              l && s(a.prototype, l),
              h && s(a, h),
              n
            );
          })(a.Component);
          return (
            Object.defineProperty(r, "displayName", {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value: "withReduxSaga(".concat(
                e.displayName || e.name || "BaseComponent",
                ")",
              ),
            }),
            r
          );
        };
      }
      e.a = function (t) {
        var e = { async: !1 };
        return "function" === typeof t
          ? h(e)(t)
          : h(
              (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(r);
                  ("function" === typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                      Object.getOwnPropertySymbols(r).filter(function (t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable;
                      }),
                    )),
                    n.forEach(function (e) {
                      l(t, e, r[e]);
                    }));
                }
                return t;
              })({}, e, t),
            );
      };
    },
    iSsy: function (t, e, r) {
      "use strict";
      (r.d(e, "a", function () {
        return n;
      }),
        r.d(e, "b", function () {
          return o;
        }));
      var n = "CLEAR_SUBJECT_ERROR",
        o = function () {
          return { type: n };
        };
    },
    kQFM: function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return d;
        });
        var n = r("rePB"),
          o = r("KQm4"),
          a = r("ANjH"),
          i = r("7bO/"),
          c = r("V/h/"),
          u = r("9ONQ"),
          s = r("ODnd"),
          l = r("pAkP");
        function f(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            (e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n));
          }
          return r;
        }
        var p = Object(i.b)(),
          h = function (t) {
            return a.a.apply(void 0, Object(o.a)(t));
          };
        function d() {
          var e,
            r,
            o =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : s.a,
            i = arguments.length > 1 ? arguments[1] : void 0;
          i.isServer
            ? ((r = t.env.SITE_HOST),
              (e =
                i.req && i.req.headers && i.req.headers.cookie
                  ? new u.a(i.req.headers.cookie)
                  : new u.a({})))
            : (e = new u.a());
          e.get("userInfo");
          var d = Object(c.b)(o, function (t) {
              0 === t.layout.siteHost.length && (t.layout.siteHost = r);
            }),
            v = {
              hasTelegraphRemind: "on",
              hasTelegraphSound: "on",
              hasTelegraphNotification: "on",
            };
          try {
            (e.get("hasTelegraphRemind") &&
              "undefined" !== typeof e.get("hasTelegraphRemind") &&
              (v.hasTelegraphRemind = e.get("hasTelegraphRemind")),
              e.get("hasTelegraphSound") &&
                "undefined" !== typeof e.get("hasTelegraphSound") &&
                (v.hasTelegraphSound = e.get("hasTelegraphSound")),
              e.get("hasTelegraphNotification") &&
                "undefined" !== typeof e.get("hasTelegraphNotification") &&
                (v.hasTelegraphNotification = e.get(
                  "hasTelegraphNotification",
                )));
          } catch (m) {
            console.log(
              "\u7535\u62a5\u684c\u9762\u901a\u77e5\u4e09\u4e2a\u72b6\u6001\u53d6cookie\u62a5\u9519",
              m,
            );
          }
          d = Object(c.b)(d, function (t) {
            ((t.telegraphVoice = (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? f(Object(r), !0).forEach(function (e) {
                      Object(n.a)(t, e, r[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(r),
                      )
                    : f(Object(r)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(r, e),
                        );
                      });
              }
              return t;
            })({}, t.telegraphVoice, {}, v)),
              e.set("hasTelegraphNotification", v.hasTelegraphNotification),
              e.set("hasTelegraphRemind", v.hasTelegraphRemind),
              e.set("hasTelegraphSound", v.hasTelegraphSound));
          });
          var y = "on";
          try {
            e.get("vipNotificationState")
              ? (y = e.get("vipNotificationState"))
              : e.set("vipNotificationState", y);
          } catch (m) {
            y = "on";
          }
          d = Object(c.b)(d, function (t) {
            t.vip.vipNotificationState = y;
          });
          var g = Object(a.d)(s.b, d, h([p]));
          return (
            (g.runSagaTask = function () {
              g.sagaTask = p.run(l.a);
            }),
            g.runSagaTask(),
            g
          );
        }
      }).call(this, r("8oxB"));
    },
    kRGu: function (t, e, r) {
      "use strict";
      (r.d(e, "f", function () {
        return n;
      }),
        r.d(e, "a", function () {
          return o;
        }),
        r.d(e, "h", function () {
          return a;
        }),
        r.d(e, "b", function () {
          return i;
        }),
        r.d(e, "i", function () {
          return c;
        }),
        r.d(e, "c", function () {
          return u;
        }),
        r.d(e, "j", function () {
          return s;
        }),
        r.d(e, "m", function () {
          return l;
        }),
        r.d(e, "d", function () {
          return f;
        }),
        r.d(e, "k", function () {
          return p;
        }),
        r.d(e, "g", function () {
          return h;
        }),
        r.d(e, "n", function () {
          return d;
        }),
        r.d(e, "e", function () {
          return v;
        }),
        r.d(e, "l", function () {
          return y;
        }));
      var n = "SET_USER_INFO",
        o = "CLOSE_LOGIN_REGISTER",
        a = function () {
          return { type: o };
        },
        i = "LOGIN",
        c = function (t) {
          return { type: i, payload: t };
        },
        u = "LOGOUT",
        s = function (t) {
          return { type: u, payload: t };
        },
        l = function (t) {
          return { type: n, payload: t };
        },
        f = "SET_BANNER",
        p = function (t) {
          return { type: f, payload: t };
        },
        h = "TOGGLE_STEP",
        d = function (t) {
          return { type: h, payload: t };
        },
        v = "SET_GLOBAL_MASK",
        y = function () {
          return { type: v };
        };
    },
    kv7x: function (t, e, r) {
      "use strict";
      (r.d(e, "l", function () {
        return n;
      }),
        r.d(e, "k", function () {
          return o;
        }),
        r.d(e, "t", function () {
          return a;
        }),
        r.d(e, "f", function () {
          return i;
        }),
        r.d(e, "e", function () {
          return c;
        }),
        r.d(e, "q", function () {
          return u;
        }),
        r.d(e, "j", function () {
          return s;
        }),
        r.d(e, "i", function () {
          return l;
        }),
        r.d(e, "s", function () {
          return f;
        }),
        r.d(e, "b", function () {
          return p;
        }),
        r.d(e, "a", function () {
          return h;
        }),
        r.d(e, "o", function () {
          return d;
        }),
        r.d(e, "n", function () {
          return v;
        }),
        r.d(e, "m", function () {
          return y;
        }),
        r.d(e, "u", function () {
          return g;
        }),
        r.d(e, "d", function () {
          return m;
        }),
        r.d(e, "c", function () {
          return b;
        }),
        r.d(e, "p", function () {
          return w;
        }),
        r.d(e, "h", function () {
          return x;
        }),
        r.d(e, "g", function () {
          return O;
        }),
        r.d(e, "r", function () {
          return j;
        }));
      var n = "GET_RECOMMEND_SUBJECT_SUCCESS_INDEX_PAGE",
        o = "GET_RECOMMEND_SUBJECT_INDEX_PAGE",
        a = function (t) {
          return { type: o, payload: t };
        },
        i = "GET_HOT_ARTICLE_SUCCESS_INDEX_PAGE",
        c = "GET_HOT_ARTICLE_INDEX_PAGE",
        u = function (t) {
          return { type: c, payload: t };
        },
        s = "GET_INVEST_KALENDER_SUCCESS_INDEX_PAGE",
        l = "GET_INVEST_KALENDER_INDEX_PAGE",
        f = function (t) {
          return { type: l, payload: t };
        },
        p = "GET_ASSEMBLE_DATA_SUCCESS_INDEX_PAGE",
        h = "GET_ASSEMBLE_DATA_INDEX_PAGE",
        d = function (t) {
          return { type: h, payload: t };
        },
        v = "GET_VIP_COLUMN_SUCCESS_INDEX_PAGE",
        y = "GET_VIP_COLUMN_INDEX_PAGE",
        g = function (t) {
          return { type: y, payload: t };
        },
        m = "GET_FAMOUS_ALBUM_SUCCESS_INDEX_PAGE",
        b = "GET_FAMOUS_ALBUM_INDEX_PAGE",
        w = function (t) {
          return { type: b, payload: t };
        },
        x = "GET_HOT_SUBJECT_SUCCESS_INDEX_PAGE",
        O = "GET_HOT_SUBJECT_INDEX_PAGE",
        j = function (t) {
          return { type: O, payload: t };
        };
    },
    ls82: function (t, e, r) {
      var n = (function (t) {
        "use strict";
        var e,
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          a = "function" === typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          c = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function s(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          s({}, "");
        } catch (P) {
          s = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function l(t, e, r, n) {
          var a = e && e.prototype instanceof g ? e : g,
            i = Object.create(a.prototype),
            c = new A(n || []);
          return (o(i, "_invoke", { value: _(t, r, c) }), i);
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (P) {
            return { type: "throw", arg: P };
          }
        }
        t.wrap = l;
        var p = "suspendedStart",
          h = "suspendedYield",
          d = "executing",
          v = "completed",
          y = {};
        function g() {}
        function m() {}
        function b() {}
        var w = {};
        s(w, i, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          O = x && x(x(T([])));
        O && O !== r && n.call(O, i) && (w = O);
        var j = (b.prototype = g.prototype = Object.create(w));
        function E(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function L(t, e) {
          var r;
          o(this, "_invoke", {
            value: function (o, a) {
              function i() {
                return new e(function (r, i) {
                  !(function r(o, a, i, c) {
                    var u = f(t[o], t, a);
                    if ("throw" !== u.type) {
                      var s = u.arg,
                        l = s.value;
                      return l && "object" === typeof l && n.call(l, "__await")
                        ? e.resolve(l.__await).then(
                            function (t) {
                              r("next", t, i, c);
                            },
                            function (t) {
                              r("throw", t, i, c);
                            },
                          )
                        : e.resolve(l).then(
                            function (t) {
                              ((s.value = t), i(s));
                            },
                            function (t) {
                              return r("throw", t, i, c);
                            },
                          );
                    }
                    c(u.arg);
                  })(o, a, r, i);
                });
              }
              return (r = r ? r.then(i, i) : i());
            },
          });
        }
        function _(t, e, r) {
          var n = p;
          return function (o, a) {
            if (n === d) throw new Error("Generator is already running");
            if (n === v) {
              if ("throw" === o) throw a;
              return I();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = k(i, r);
                if (c) {
                  if (c === y) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (n === p) throw ((n = v), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = d;
              var u = f(t, e, r);
              if ("normal" === u.type) {
                if (((n = r.done ? v : h), u.arg === y)) continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = v), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function k(t, r) {
          var n = r.method,
            o = t.iterator[n];
          if (o === e)
            return (
              (r.delegate = null),
              "throw" === n &&
              t.iterator.return &&
              ((r.method = "return"),
              (r.arg = e),
              k(t, r),
              "throw" === r.method)
                ? y
                : ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    ))),
                  y)
            );
          var a = f(o, t.iterator, r.arg);
          if ("throw" === a.type)
            return (
              (r.method = "throw"),
              (r.arg = a.arg),
              (r.delegate = null),
              y
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((r[t.resultName] = i.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = e)),
                (r.delegate = null),
                y)
              : i
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              y);
        }
        function N(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function S(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function A(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(N, this),
            this.reset(!0));
        }
        function T(t) {
          if (t) {
            var r = t[i];
            if (r) return r.call(t);
            if ("function" === typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                a = function r() {
                  for (; ++o < t.length; )
                    if (n.call(t, o))
                      return ((r.value = t[o]), (r.done = !1), r);
                  return ((r.value = e), (r.done = !0), r);
                };
              return (a.next = a);
            }
          }
          return { next: I };
        }
        function I() {
          return { value: e, done: !0 };
        }
        return (
          (m.prototype = b),
          o(j, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: m, configurable: !0 }),
          (m.displayName = s(b, u, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" === typeof t && t.constructor;
            return (
              !!e &&
              (e === m || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, b)
                : ((t.__proto__ = b), s(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(j)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          E(L.prototype),
          s(L.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = L),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new L(l(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          E(j),
          s(j, u, "Generator"),
          s(j, i, function () {
            return this;
          }),
          s(j, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return ((t.value = n), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (t.values = T),
          (A.prototype = {
            constructor: A,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(S),
                !t)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = e);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = t),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = e)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  c = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                  var u = n.call(i, "catchLoc"),
                    s = n.call(i, "finallyLoc");
                  if (u && s) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), y)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                y
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), S(r), y);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    S(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, r, n) {
              return (
                (this.delegate = { iterator: T(t), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = e),
                y
              );
            },
          }),
          t
        );
      })(t.exports);
      try {
        regeneratorRuntime = n;
      } catch (o) {
        "object" === typeof globalThis
          ? (globalThis.regeneratorRuntime = n)
          : Function("r", "regeneratorRuntime = r")(n);
      }
    },
    mbVZ: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return l;
      });
      var n = r("Ev6p"),
        o = "Channel's Buffer overflow!",
        a = 1,
        i = 3,
        c = 4,
        u = { isEmpty: n.o, put: n.r, take: n.r };
      function s() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
          e = arguments[1],
          r = new Array(t),
          n = 0,
          u = 0,
          s = 0,
          l = function (e) {
            ((r[u] = e), (u = (u + 1) % t), n++);
          },
          f = function () {
            if (0 != n) {
              var e = r[s];
              return ((r[s] = null), n--, (s = (s + 1) % t), e);
            }
          },
          p = function () {
            for (var t = []; n; ) t.push(f());
            return t;
          };
        return {
          isEmpty: function () {
            return 0 == n;
          },
          put: function (f) {
            if (n < t) l(f);
            else {
              var h = void 0;
              switch (e) {
                case a:
                  throw new Error(o);
                case i:
                  ((r[u] = f), (s = u = (u + 1) % t));
                  break;
                case c:
                  ((h = 2 * t),
                    (r = p()),
                    (n = r.length),
                    (u = r.length),
                    (s = 0),
                    (r.length = h),
                    (t = h),
                    l(f));
              }
            }
          },
          take: f,
          flush: p,
        };
      }
      var l = {
        none: function () {
          return u;
        },
        fixed: function (t) {
          return s(t, a);
        },
        dropping: function (t) {
          return s(t, 2);
        },
        sliding: function (t) {
          return s(t, i);
        },
        expanding: function (t) {
          return s(t, c);
        },
      };
    },
    o0o1: function (t, e, r) {
      t.exports = r("ls82");
    },
    oZtI: function (t, e, r) {
      "use strict";
      (r.d(e, "c", function () {
        return n.g;
      }),
        r.d(e, "a", function () {
          return n.b;
        }),
        r.d(e, "b", function () {
          return n.d;
        }),
        r.d(e, "d", function () {
          return n.h;
        }),
        r.d(e, "e", function () {
          return a;
        }),
        r.d(e, "f", function () {
          return i;
        }));
      var n = r("tw9P"),
        o = r("q09E");
      function a(t, e) {
        for (
          var r = arguments.length, a = Array(r > 2 ? r - 2 : 0), i = 2;
          i < r;
          i++
        )
          a[i - 2] = arguments[i];
        return n.f.apply(void 0, [o.a, t, e].concat(a));
      }
      function i(t, e) {
        for (
          var r = arguments.length, a = Array(r > 2 ? r - 2 : 0), i = 2;
          i < r;
          i++
        )
          a[i - 2] = arguments[i];
        return n.f.apply(void 0, [o.b, t, e].concat(a));
      }
    },
    ozPp: function (t, e, r) {
      "use strict";
      var n = r("q1tI"),
        o = r.n(n).a.createElement;
      e.a = function (t) {
        return o(
          "div",
          { className: t.className ? t.className : "" },
          t.children,
          o("div", {
            className: t.captchaClassName ? t.captchaClassName : "",
            id: "aliyun-captcha",
          }),
          o("div", { id: "aliyun-captcha-button-hide", className: "d-n" }),
        );
      };
    },
    pAkP: function (t, e, r) {
      "use strict";
      var n = r("oZtI"),
        o = r("9ONQ"),
        a = r("7bO/"),
        i = r("hKvw"),
        c = r("BQsQ");
      function u() {
        u = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          i = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function s(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          s({}, "");
        } catch (S) {
          s = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function l(t, e, r, o) {
          var a = e && e.prototype instanceof h ? e : h,
            i = Object.create(a.prototype),
            c = new _(o || []);
          return (n(i, "_invoke", { value: O(t, r, c) }), i);
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (S) {
            return { type: "throw", arg: S };
          }
        }
        t.wrap = l;
        var p = {};
        function h() {}
        function d() {}
        function v() {}
        var y = {};
        s(y, a, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          m = g && g(g(k([])));
        m && m !== e && r.call(m, a) && (y = m);
        var b = (v.prototype = h.prototype = Object.create(y));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function x(t, e) {
          var o;
          n(this, "_invoke", {
            value: function (n, a) {
              function i() {
                return new e(function (o, i) {
                  !(function n(o, a, i, c) {
                    var u = f(t[o], t, a);
                    if ("throw" !== u.type) {
                      var s = u.arg,
                        l = s.value;
                      return l && "object" == typeof l && r.call(l, "__await")
                        ? e.resolve(l.__await).then(
                            function (t) {
                              n("next", t, i, c);
                            },
                            function (t) {
                              n("throw", t, i, c);
                            },
                          )
                        : e.resolve(l).then(
                            function (t) {
                              ((s.value = t), i(s));
                            },
                            function (t) {
                              return n("throw", t, i, c);
                            },
                          );
                    }
                    c(u.arg);
                  })(n, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function O(t, e, r) {
          var n = "suspendedStart";
          return function (o, a) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw a;
              return N();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = j(i, r);
                if (c) {
                  if (c === p) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = f(t, e, r);
              if ("normal" === u.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), u.arg === p)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function j(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                j(t, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              p
            );
          var o = f(n, t.iterator, e.arg);
          if ("throw" === o.type)
            return (
              (e.method = "throw"),
              (e.arg = o.arg),
              (e.delegate = null),
              p
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                p)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              p);
        }
        function E(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function L(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function _(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(E, this),
            this.reset(!0));
        }
        function k(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n))
                      return ((e.value = t[n]), (e.done = !1), e);
                  return ((e.value = void 0), (e.done = !0), e);
                };
              return (o.next = o);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = v),
          n(b, "constructor", { value: v, configurable: !0 }),
          n(v, "constructor", { value: d, configurable: !0 }),
          (d.displayName = s(v, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === d || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, v)
                : ((t.__proto__ = v), s(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(b)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(x.prototype),
          s(x.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = x),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new x(l(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          w(b),
          s(b, c, "Generator"),
          s(b, a, function () {
            return this;
          }),
          s(b, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return ((t.value = n), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (t.values = k),
          (_.prototype = {
            constructor: _,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), p)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                p
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), L(r), p);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    L(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: k(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          t
        );
      }
      var s = r("bMwp").request;
      function l(t) {
        return u().async(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    s({ url: "https://sti.kingright680.workers.dev/nodeapi/telegraphList", params: t.params, headers: { "Content-Type": "application/x-www-form-urlencoded" } }),
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          },
          null,
          null,
          null,
          Promise,
        );
      }
      function f(t) {
        return u().async(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    s({ url: "https://sti.kingright680.workers.dev/v1/roll/get_roll_list", params: t.params, headers: { "Content-Type": "application/x-www-form-urlencoded" } }),
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          },
          null,
          null,
          null,
          Promise,
        );
      }
      function p(t) {
        return u().async(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    s({
                      url: "https://sti.kingright680.workers.dev/nodeapi/updateTelegraphList",
                      params: t.params,
                      headers: { "Content-Type": "application/x-www-form-urlencoded" }
                    }),
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          },
          null,
          null,
          null,
          Promise,
        );
      }
      function h(t) {
        return u().async(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    s({
                      url: "https://sti.kingright680.workers.dev/nodeapi/refreshTelegraphList",
                      params: t.params,
                      headers: { "Content-Type": "application/x-www-form-urlencoded"}
                    }),
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          },
          null,
          null,
          null,
          Promise,
        );
      }
      function d(t) {
        return u().async(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    s({ url: "https://sti.kingright680.workers.dev/v1/roll/info", params: t.params, headers: { "Content-Type": "application/x-www-form-urlencoded" } }),
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          },
          null,
          null,
          null,
          Promise,
        );
      }
      var v = r("00Fj");
      function y() {
        y = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          i = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, "");
        } catch (S) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, o) {
          var a = e && e.prototype instanceof p ? e : p,
            i = Object.create(a.prototype),
            c = new _(o || []);
          return (n(i, "_invoke", { value: O(t, r, c) }), i);
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (S) {
            return { type: "throw", arg: S };
          }
        }
        t.wrap = s;
        var f = {};
        function p() {}
        function h() {}
        function d() {}
        var v = {};
        u(v, a, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          m = g && g(g(k([])));
        m && m !== e && r.call(m, a) && (v = m);
        var b = (d.prototype = p.prototype = Object.create(v));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function x(t, e) {
          var o;
          n(this, "_invoke", {
            value: function (n, a) {
              function i() {
                return new e(function (o, i) {
                  !(function n(o, a, i, c) {
                    var u = l(t[o], t, a);
                    if ("throw" !== u.type) {
                      var s = u.arg,
                        f = s.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? e.resolve(f.__await).then(
                            function (t) {
                              n("next", t, i, c);
                            },
                            function (t) {
                              n("throw", t, i, c);
                            },
                          )
                        : e.resolve(f).then(
                            function (t) {
                              ((s.value = t), i(s));
                            },
                            function (t) {
                              return n("throw", t, i, c);
                            },
                          );
                    }
                    c(u.arg);
                  })(n, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function O(t, e, r) {
          var n = "suspendedStart";
          return function (o, a) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw a;
              return N();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = j(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = l(t, e, r);
              if ("normal" === u.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function j(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                j(t, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var o = l(n, t.iterator, e.arg);
          if ("throw" === o.type)
            return (
              (e.method = "throw"),
              (e.arg = o.arg),
              (e.delegate = null),
              f
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function E(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function L(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function _(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(E, this),
            this.reset(!0));
        }
        function k(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n))
                      return ((e.value = t[n]), (e.done = !1), e);
                  return ((e.value = void 0), (e.done = !0), e);
                };
              return (o.next = o);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = d),
          n(b, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: h, configurable: !0 }),
          (h.displayName = u(d, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === h || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(b)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(x.prototype),
          u(x.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = x),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new x(s(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          w(b),
          u(b, c, "Generator"),
          u(b, a, function () {
            return this;
          }),
          u(b, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return ((t.value = n), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (t.values = k),
          (_.prototype = {
            constructor: _,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), L(r), f);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    L(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: k(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      var g = y().mark(E),
        m = y().mark(L),
        b = y().mark(_),
        w = y().mark(k),
        x = y().mark(N),
        O = y().mark(S),
        j = new o.a();
      function E(t) {
        var e, r, o, a, c, u, s;
        return y().wrap(
          function (p) {
            for (;;)
              switch ((p.prev = p.next)) {
                case 0:
                  return (
                    (p.prev = 0),
                    (p.next = 3),
                    Object(n.d)(function (t) {
                      return t.telegraph.telegraphList;
                    })
                  );
                case 3:
                  return (
                    (e = p.sent),
                    (r =
                      t.payload && t.payload.moreList && e.length
                        ? e[e.length - 1].ctime
                        : parseInt(new Date().getTime() / 1e3, 10)),
                    (o = {
                      refresh_type: 1,
                      rn: 20,
                      lastTime: r,
                      last_time: r,
                    }),
                    (p.next = 8),
                    Object(n.b)(l, { params: o })
                  );
                case 8:
                  if (!(a = p.sent) || 200 !== a.status) {
                    p.next = 54;
                    break;
                  }
                  if (!a.data || (0 !== a.data.error && 0 !== a.data.errno)) {
                    p.next = 50;
                    break;
                  }
                  if (
                    ((c = e),
                    a.data.data &&
                      Array.isArray(a.data.data.roll_data) &&
                      (c = a.data.data.roll_data),
                    !a.data.data ||
                      !a.data.data.roll_data ||
                      20 !== a.data.data.roll_data.length)
                  ) {
                    p.next = 18;
                    break;
                  }
                  return (
                    (p.next = 16),
                    Object(n.c)({
                      type: i.f,
                      payload: {
                        errno: a.status,
                        errorMessage: "",
                        telegraphList: c,
                      },
                    })
                  );
                case 16:
                  p.next = 48;
                  break;
                case 18:
                  return (
                    (o.rn = 20 - a.data.data.roll_data.length),
                    (o.last_time =
                      a.data.data.roll_data.length > 0
                        ? a.data.data.roll_data[
                            a.data.data.roll_data.length - 1
                          ].ctime
                        : r),
                    (p.next = 22),
                    Object(n.b)(f, { params: o })
                  );
                case 22:
                  if (!(u = p.sent) || 200 !== u.status) {
                    p.next = 46;
                    break;
                  }
                  if (!u.data || 0 !== u.data.errno) {
                    p.next = 42;
                    break;
                  }
                  if (
                    ((s = []),
                    u.data.data &&
                      Array.isArray(u.data.data.roll_data) &&
                      (s = u.data.data.roll_data),
                    0 !== s.length)
                  ) {
                    p.next = 37;
                    break;
                  }
                  if (!(c.length > 0)) {
                    p.next = 33;
                    break;
                  }
                  return (
                    (p.next = 31),
                    Object(n.c)({
                      type: i.f,
                      payload: {
                        errno: a.status,
                        errorMessage: "",
                        telegraphList: c,
                      },
                    })
                  );
                case 31:
                  p.next = 35;
                  break;
                case 33:
                  return (
                    (p.next = 35),
                    Object(n.c)({
                      type: i.e,
                      payload: {
                        errno: 600,
                        errorMessage:
                          e.length > 0
                            ? "\u5df2\u7ecf\u52a0\u8f7d\u5230\u6700\u540e\u4e86"
                            : "\u6682\u65e0\u76f8\u5173\u6570\u636e",
                      },
                    })
                  );
                case 35:
                  p.next = 40;
                  break;
                case 37:
                  return (
                    s.forEach(function (t) {
                      c.findIndex &&
                        -1 ===
                          c.findIndex(function (e) {
                            return e.id === t.id;
                          }) &&
                        c.push(t);
                    }),
                    (p.next = 40),
                    Object(n.c)({
                      type: i.f,
                      payload: {
                        errno: u.status,
                        errorMessage: "",
                        telegraphList: c,
                      },
                    })
                  );
                case 40:
                  p.next = 44;
                  break;
                case 42:
                  return (
                    (p.next = 44),
                    Object(n.c)({
                      type: i.e,
                      payload: {
                        errno: a.data.errno,
                        errorMessage: a.data.msg
                          ? a.data.msg
                          : "\u7f51\u7edc\u8d85\u65f6\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01\uff01\uff01",
                      },
                    })
                  );
                case 44:
                  p.next = 48;
                  break;
                case 46:
                  return (
                    (p.next = 48),
                    Object(n.c)({
                      type: i.e,
                      payload: {
                        errorCode: a.status,
                        errorMessage:
                          "\u7f51\u7edc\u8d85\u65f6\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01\uff01\uff01",
                      },
                    })
                  );
                case 48:
                  p.next = 52;
                  break;
                case 50:
                  return (
                    (p.next = 52),
                    Object(n.c)({
                      type: i.e,
                      payload: {
                        errno: a.data.error,
                        errorMessage: a.data.msg
                          ? a.data.msg
                          : "\u7f51\u7edc\u8d85\u65f6\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01\uff01\uff01",
                      },
                    })
                  );
                case 52:
                  p.next = 57;
                  break;
                case 54:
                  return (
                    (p.next = 56),
                    Object(n.c)({
                      type: i.e,
                      payload: {
                        errno: a.status,
                        errorMessage:
                          "\u7f51\u7edc\u8d85\u65f6\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01\uff01\uff01",
                      },
                    })
                  );
                case 56:
                  Object(v.c)({
                    describe: "\u7535\u62a5\u5217\u8868",
                    url: "/nodeapi/telegraphList",
                    code: a.data.code || a.data.errno || a.data.error,
                    msg: a.data.msg,
                  });
                case 57:
                  p.next = 64;
                  break;
                case 59:
                  return (
                    (p.prev = 59),
                    (p.t0 = p.catch(0)),
                    (p.next = 63),
                    Object(n.c)({
                      type: i.e,
                      payload: {
                        errno: 500,
                        errorMessage:
                          "\u7f51\u7edc\u8d85\u65f6\uff0c\u8bf7\u70b9\u51fb\u91cd\u8bd5\uff01\uff01\uff01",
                      },
                    })
                  );
                case 63:
                  console.log("\u7535\u62a5\u5217\u8868", p.t0);
                case 64:
                case "end":
                  return p.stop();
              }
          },
          g,
          null,
          [[0, 59]],
        );
      }
      function L(t) {
        var e, r;
        return y().wrap(
          function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  return (
                    (o.next = 2),
                    Object(n.d)(function (t) {
                      return t.telegraph.telegraphList;
                    })
                  );
                case 2:
                  return (
                    o.sent,
                    (e = {
                      refresh_type: 1,
                      rn: 20,
                      last_time:
                        t && t.payload
                          ? t.payload
                          : parseInt(new Date().getTime() / 1e3, 10),
                    }),
                    (o.next = 6),
                    Object(n.b)(f, { params: e })
                  );
                case 6:
                  if (((r = o.sent), (o.prev = 7), !r || 200 !== r.status)) {
                    o.next = 18;
                    break;
                  }
                  if (!r.data || 0 !== r.data.errno || !r.data.data) {
                    o.next = 14;
                    break;
                  }
                  return (
                    (o.next = 12),
                    Object(n.c)({
                      type: i.f,
                      payload: {
                        errno: r.status,
                        errorMessage: "",
                        rollData: r.data.data.roll_data,
                        isRollData: !0,
                      },
                    })
                  );
                case 12:
                  o.next = 16;
                  break;
                case 14:
                  return (
                    (o.next = 16),
                    Object(n.c)({
                      type: i.e,
                      payload: {
                        errno: r.data.error,
                        errorMessage: r.data.msg
                          ? r.data.msg
                          : "\u7f51\u7edc\u8d85\u65f6\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01\uff01\uff01",
                      },
                    })
                  );
                case 16:
                  o.next = 20;
                  break;
                case 18:
                  return (
                    (o.next = 20),
                    Object(n.c)({
                      type: i.e,
                      payload: {
                        errno: r.status,
                        errorMessage:
                          "\u7f51\u7edc\u8d85\u65f6\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01\uff01\uff01",
                      },
                    })
                  );
                case 20:
                  o.next = 25;
                  break;
                case 22:
                  ((o.prev = 22),
                    (o.t0 = o.catch(7)),
                    console.log("getTelegraphRollList", o.t0));
                case 25:
                case "end":
                  return o.stop();
              }
          },
          m,
          null,
          [[7, 22]],
        );
      }
      function _() {
        var t, e, r, o, u, s, l, f;
        return y().wrap(
          function (h) {
            for (;;)
              switch ((h.prev = h.next)) {
                case 0:
                  return (
                    (h.prev = 0),
                    (h.next = 3),
                    Object(n.d)(function (t) {
                      return t.telegraph.telegraphList;
                    })
                  );
                case 3:
                  return (
                    (t = h.sent),
                    (e = t.length
                      ? t[0].ctime
                      : parseInt(new Date().getTime() / 1e3, 10)),
                    (h.next = 7),
                    Object(n.d)(function (t) {
                      return t.vip.subscribedColumn;
                    })
                  );
                case 7:
                  return (
                    (r = h.sent),
                    (o = []),
                    r &&
                      r.column_list &&
                      r.column_list.forEach(function (t) {
                        1 === t.is_subscribe && o.push(t.id);
                      }),
                    (h.next = 12),
                    Object(n.d)(function (t) {
                      return t.vip.newSubscribedArticle;
                    })
                  );
                case 12:
                  return (
                    (u = h.sent),
                    (s = {
                      rn: 20,
                      lastTime: e,
                      subscribedColumnIds: o.join("-"),
                      hasFirstVipArticle: u.length > 0 ? "1" : "0",
                    }),
                    (h.next = 16),
                    Object(n.b)(p, { params: s })
                  );
                case 16:
                  if (!(l = h.sent).data || 0 !== l.data.error) {
                    h.next = 33;
                    break;
                  }
                  if (!(l.data.data && l.data.data.update_num > 0)) {
                    h.next = 27;
                    break;
                  }
                  return (
                    (f = l.data.data.roll_data || []),
                    (h.next = 22),
                    Object(n.c)({ type: i.n, payload: { list: f } })
                  );
                case 22:
                  return (
                    (h.next = 24),
                    Object(n.c)({ type: i.o, payload: l.data.data.update_num })
                  );
                case 24:
                  if (
                    "on" !== j.get("hasTelegraphRemind") &&
                    "on" !== j.get("hasTelegraphSound")
                  ) {
                    h.next = 27;
                    break;
                  }
                  return (
                    (h.next = 27),
                    Object(n.c)({
                      type: i.p,
                      payload: { newTelegraphList: f, telegraphList: t },
                    })
                  );
                case 27:
                  if (!(l.data.vipData && l.data.vipData.length > 0)) {
                    h.next = 30;
                    break;
                  }
                  return (
                    (h.next = 30),
                    Object(n.c)({ type: c.i, payload: l.data.vipData })
                  );
                case 30:
                  if (!(l.data.vipGlobal && l.data.vipGlobal.length > 0)) {
                    h.next = 33;
                    break;
                  }
                  return (
                    (h.next = 33),
                    Object(n.c)({ type: c.j, payload: l.data.vipGlobal })
                  );
                case 33:
                  return ((h.next = 35), Object(n.b)(a.c, 1e4));
                case 35:
                  return ((h.next = 37), Object(n.c)({ type: i.l }));
                case 37:
                  h.next = 46;
                  break;
                case 39:
                  return (
                    (h.prev = 39),
                    (h.t0 = h.catch(0)),
                    (h.next = 43),
                    Object(n.b)(a.c, 3e4)
                  );
                case 43:
                  return ((h.next = 45), Object(n.c)({ type: i.l }));
                case 45:
                  console.log("tel*", h.t0);
                case 46:
                case "end":
                  return h.stop();
              }
          },
          b,
          null,
          [[0, 39]],
        );
      }
      function k() {
        var t, e, r, o;
        return y().wrap(
          function (c) {
            for (;;)
              switch ((c.prev = c.next)) {
                case 0:
                  return (
                    (c.prev = 0),
                    (c.next = 3),
                    Object(n.d)(function (t) {
                      return t.telegraph.telegraphList;
                    })
                  );
                case 3:
                  return (
                    (t = c.sent),
                    (e = t.length
                      ? t[0].ctime
                      : parseInt(new Date().getTime() / 1e3, 10)),
                    (r = { lastTime: e }),
                    (c.next = 8),
                    Object(n.b)(h, { params: r })
                  );
                case 8:
                  if (!(o = c.sent).data) {
                    c.next = 12;
                    break;
                  }
                  return (
                    (c.next = 12),
                    Object(n.c)({
                      type: i.i,
                      payload: { l: o.data.l, i: o.data.i, a: o.data.a },
                    })
                  );
                case 12:
                  return ((c.next = 14), Object(n.b)(a.c, 2e4));
                case 14:
                  return ((c.next = 16), Object(n.c)({ type: i.m }));
                case 16:
                  c.next = 24;
                  break;
                case 18:
                  return (
                    (c.prev = 18),
                    (c.t0 = c.catch(0)),
                    (c.next = 22),
                    Object(n.b)(a.c, 6e4)
                  );
                case 22:
                  return ((c.next = 24), Object(n.c)({ type: i.m }));
                case 24:
                case "end":
                  return c.stop();
              }
          },
          w,
          null,
          [[0, 18]],
        );
      }
      function N() {
        var t, e, r, o;
        return y().wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.next = 2),
                    Object(n.d)(function (t) {
                      return t.telegraph.telegraphList;
                    })
                  );
                case 2:
                  return (
                    (t = a.sent),
                    (e = []),
                    t.length > 0 &&
                      t.forEach(function (t, r) {
                        -1 === t.type &&
                          e.findIndex &&
                          -1 ===
                            e.findIndex(function (e) {
                              return e === t.id;
                            }) &&
                          e.push(t.id);
                      }),
                    (r = { type: -1, articleIds: e.toString() }),
                    (a.prev = 6),
                    (a.next = 9),
                    Object(n.b)(d, { params: r })
                  );
                case 9:
                  if (!(o = a.sent) || 200 !== o.status) {
                    a.next = 14;
                    break;
                  }
                  if (!o.data || 0 !== o.data.errno) {
                    a.next = 14;
                    break;
                  }
                  return (
                    (a.next = 14),
                    Object(n.c)({ type: i.k, payload: o.data.data })
                  );
                case 14:
                  a.next = 19;
                  break;
                case 16:
                  ((a.prev = 16), (a.t0 = a.catch(6)), console.log(a.t0));
                case 19:
                case "end":
                  return a.stop();
              }
          },
          x,
          null,
          [[6, 16]],
        );
      }
      function S() {
        return y().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (t.next = 2),
                  Object(n.a)([
                    Object(n.e)(i.d, E),
                    Object(n.f)(i.l, _),
                    Object(n.f)(i.m, k),
                    Object(n.e)(i.g, L),
                    Object(n.f)(i.j, N),
                  ])
                );
              case 2:
              case "end":
                return t.stop();
            }
        }, O);
      }
      var A = r("O4cR");
      function T() {
        T = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          i = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, "");
        } catch (N) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, o) {
          var a = e && e.prototype instanceof p ? e : p,
            i = Object.create(a.prototype),
            c = new L(o || []);
          return (n(i, "_invoke", { value: x(t, r, c) }), i);
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        t.wrap = s;
        var f = {};
        function p() {}
        function h() {}
        function d() {}
        var v = {};
        u(v, a, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          g = y && y(y(_([])));
        g && g !== e && r.call(g, a) && (v = g);
        var m = (d.prototype = p.prototype = Object.create(v));
        function b(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var o;
          n(this, "_invoke", {
            value: function (n, a) {
              function i() {
                return new e(function (o, i) {
                  !(function n(o, a, i, c) {
                    var u = l(t[o], t, a);
                    if ("throw" !== u.type) {
                      var s = u.arg,
                        f = s.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? e.resolve(f.__await).then(
                            function (t) {
                              n("next", t, i, c);
                            },
                            function (t) {
                              n("throw", t, i, c);
                            },
                          )
                        : e.resolve(f).then(
                            function (t) {
                              ((s.value = t), i(s));
                            },
                            function (t) {
                              return n("throw", t, i, c);
                            },
                          );
                    }
                    c(u.arg);
                  })(n, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function x(t, e, r) {
          var n = "suspendedStart";
          return function (o, a) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw a;
              return k();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = O(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = l(t, e, r);
              if ("normal" === u.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function O(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                O(t, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var o = l(n, t.iterator, e.arg);
          if ("throw" === o.type)
            return (
              (e.method = "throw"),
              (e.arg = o.arg),
              (e.delegate = null),
              f
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function j(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function E(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function L(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(j, this),
            this.reset(!0));
        }
        function _(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n))
                      return ((e.value = t[n]), (e.done = !1), e);
                  return ((e.value = void 0), (e.done = !0), e);
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = d),
          n(m, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: h, configurable: !0 }),
          (h.displayName = u(d, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === h || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(m)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          u(w.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new w(s(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          b(m),
          u(m, c, "Generator"),
          u(m, a, function () {
            return this;
          }),
          u(m, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return ((t.value = n), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (t.values = _),
          (L.prototype = {
            constructor: L,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), E(r), f);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: _(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      var I = r("bMwp").request;
      function P(t) {
        return T().async(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    I({ url: "/featured/v2/column/detail", params: t.params }),
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          },
          null,
          null,
          null,
          Promise,
        );
      }
      function C(t) {
        return T().async(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    I({ url: "/featured/v1/column/list", params: t.params }),
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          },
          null,
          null,
          null,
          Promise,
        );
      }
      var G = r("b21l");
      function R() {
        R = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          i = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, "");
        } catch (N) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, o) {
          var a = e && e.prototype instanceof p ? e : p,
            i = Object.create(a.prototype),
            c = new L(o || []);
          return (n(i, "_invoke", { value: x(t, r, c) }), i);
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        t.wrap = s;
        var f = {};
        function p() {}
        function h() {}
        function d() {}
        var v = {};
        u(v, a, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          g = y && y(y(_([])));
        g && g !== e && r.call(g, a) && (v = g);
        var m = (d.prototype = p.prototype = Object.create(v));
        function b(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var o;
          n(this, "_invoke", {
            value: function (n, a) {
              function i() {
                return new e(function (o, i) {
                  !(function n(o, a, i, c) {
                    var u = l(t[o], t, a);
                    if ("throw" !== u.type) {
                      var s = u.arg,
                        f = s.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? e.resolve(f.__await).then(
                            function (t) {
                              n("next", t, i, c);
                            },
                            function (t) {
                              n("throw", t, i, c);
                            },
                          )
                        : e.resolve(f).then(
                            function (t) {
                              ((s.value = t), i(s));
                            },
                            function (t) {
                              return n("throw", t, i, c);
                            },
                          );
                    }
                    c(u.arg);
                  })(n, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function x(t, e, r) {
          var n = "suspendedStart";
          return function (o, a) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw a;
              return k();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = O(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = l(t, e, r);
              if ("normal" === u.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function O(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                O(t, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var o = l(n, t.iterator, e.arg);
          if ("throw" === o.type)
            return (
              (e.method = "throw"),
              (e.arg = o.arg),
              (e.delegate = null),
              f
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function j(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function E(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function L(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(j, this),
            this.reset(!0));
        }
        function _(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n))
                      return ((e.value = t[n]), (e.done = !1), e);
                  return ((e.value = void 0), (e.done = !0), e);
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = d),
          n(m, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: h, configurable: !0 }),
          (h.displayName = u(d, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === h || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(m)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          u(w.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new w(s(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          b(m),
          u(m, c, "Generator"),
          u(m, a, function () {
            return this;
          }),
          u(m, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return ((t.value = n), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (t.values = _),
          (L.prototype = {
            constructor: L,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), E(r), f);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: _(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      var D = R().mark(M),
        F = R().mark(B);
      function M(t) {
        var e, r, o, a, i;
        return R().wrap(
          function (u) {
            for (;;)
              switch ((u.prev = u.next)) {
                case 0:
                  return (
                    (u.next = 2),
                    Object(n.d)(function (t) {
                      return t.user.userInfo;
                    })
                  );
                case 2:
                  if (
                    ((e = u.sent),
                    (r =
                      e && e.oauth_info && e.oauth_info.token
                        ? e.oauth_info.token
                        : ""),
                    (o = { id: t.payload.id, app: t.payload.app, token: r }),
                    (u.prev = 5),
                    (a = {}),
                    !t || !t.payload || "xk" !== t.payload.source)
                  ) {
                    u.next = 13;
                    break;
                  }
                  return ((u.next = 10), Object(n.b)(G.e, { params: o }));
                case 10:
                  ((a = u.sent), (u.next = 22));
                  break;
                case 13:
                  if (!t || !t.payload || "summary" !== t.payload.source) {
                    u.next = 19;
                    break;
                  }
                  return (
                    (u.next = 16),
                    Object(n.b)(G.f, {
                      params: {
                        summary_id: t.payload.id,
                        app: t.payload.app,
                        token: r,
                      },
                    })
                  );
                case 16:
                  ((a = u.sent), (u.next = 22));
                  break;
                case 19:
                  return ((u.next = 21), Object(n.b)(G.d, { params: o }));
                case 21:
                  a = u.sent;
                case 22:
                  if (!a || 200 !== a.status) {
                    u.next = 49;
                    break;
                  }
                  if (!a.data) {
                    u.next = 45;
                    break;
                  }
                  if (!t || !t.payload) {
                    u.next = 27;
                    break;
                  }
                  return (
                    (u.next = 27),
                    Object(n.c)({
                      type: "vip" === t.payload.type ? c.f : A.d,
                      payload: {
                        articleDetail:
                          "xk" === t.payload.source
                            ? 0 === a.data.errno
                              ? a.data.data
                              : {}
                            : "summary" === t.payload.source
                              ? 200 === a.data.code
                                ? a.data.data
                                : {}
                              : a.data
                                ? a.data
                                : {},
                      },
                    })
                  );
                case 27:
                  if (
                    !(
                      a.data.column &&
                      a.data.column.type &&
                      a.data.column.type >= 2e4 &&
                      a.data.column.type <= 3e4
                    )
                  ) {
                    u.next = 43;
                    break;
                  }
                  return (
                    (u.next = 30),
                    Object(n.b)(P, { params: { type: a.data.column.type } })
                  );
                case 30:
                  if (!(i = u.sent) || 200 !== i.status) {
                    u.next = 41;
                    break;
                  }
                  if (!i.data || 0 !== i.data.errno) {
                    u.next = 37;
                    break;
                  }
                  return (
                    (u.next = 35),
                    Object(n.c)({ type: c.h, payload: { data: i.data.data } })
                  );
                case 35:
                  u.next = 39;
                  break;
                case 37:
                  return (
                    (u.next = 39),
                    Object(n.c)({
                      type: c.g,
                      payload: {
                        errno: (i.data && i.data.errno) || 500,
                        errorMessage: i.data.msg
                          ? i.data.msg
                          : i.data.data
                            ? i.data.data
                            : "\u8fde\u63a5\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
                      },
                    })
                  );
                case 39:
                  u.next = 43;
                  break;
                case 41:
                  return (
                    (u.next = 43),
                    Object(n.c)({
                      type: c.g,
                      payload: {
                        errno: i.status || 500,
                        errorMessage:
                          "\u8fde\u63a5\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
                      },
                    })
                  );
                case 43:
                  u.next = 47;
                  break;
                case 45:
                  return (
                    (u.next = 47),
                    Object(n.c)({
                      type: "vip" === t.payload.type ? c.e : A.c,
                      payload: {
                        errno: a.data.errno,
                        errorMessage: a.data.msg
                          ? a.data.msg
                          : "\u7f51\u7edc\u8d85\u65f6\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01\uff01\uff01",
                      },
                    })
                  );
                case 47:
                  u.next = 51;
                  break;
                case 49:
                  return (
                    (u.next = 51),
                    Object(n.c)({
                      type: "vip" === t.payload.type ? c.e : A.c,
                      payload: {
                        errno: a.status,
                        errorMessage:
                          "\u7f51\u7edc\u8d85\u65f6\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01\uff01\uff01",
                      },
                    })
                  );
                case 51:
                  u.next = 56;
                  break;
                case 53:
                  ((u.prev = 53),
                    (u.t0 = u.catch(5)),
                    console.log("\u8be6\u60c5", u.t0));
                case 56:
                case "end":
                  return u.stop();
              }
          },
          D,
          null,
          [[5, 53]],
        );
      }
      function B() {
        return R().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), Object(n.a)([Object(n.f)(A.b, M)]));
              case 2:
              case "end":
                return t.stop();
            }
        }, F);
      }
      var V = r("p46w"),
        q = r.n(V),
        U = r("kRGu"),
        z = r("8ihE");
      function H() {
        H = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          i = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, "");
        } catch (N) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, o) {
          var a = e && e.prototype instanceof p ? e : p,
            i = Object.create(a.prototype),
            c = new L(o || []);
          return (n(i, "_invoke", { value: x(t, r, c) }), i);
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        t.wrap = s;
        var f = {};
        function p() {}
        function h() {}
        function d() {}
        var v = {};
        u(v, a, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          g = y && y(y(_([])));
        g && g !== e && r.call(g, a) && (v = g);
        var m = (d.prototype = p.prototype = Object.create(v));
        function b(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var o;
          n(this, "_invoke", {
            value: function (n, a) {
              function i() {
                return new e(function (o, i) {
                  !(function n(o, a, i, c) {
                    var u = l(t[o], t, a);
                    if ("throw" !== u.type) {
                      var s = u.arg,
                        f = s.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? e.resolve(f.__await).then(
                            function (t) {
                              n("next", t, i, c);
                            },
                            function (t) {
                              n("throw", t, i, c);
                            },
                          )
                        : e.resolve(f).then(
                            function (t) {
                              ((s.value = t), i(s));
                            },
                            function (t) {
                              return n("throw", t, i, c);
                            },
                          );
                    }
                    c(u.arg);
                  })(n, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function x(t, e, r) {
          var n = "suspendedStart";
          return function (o, a) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw a;
              return k();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = O(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = l(t, e, r);
              if ("normal" === u.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function O(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                O(t, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var o = l(n, t.iterator, e.arg);
          if ("throw" === o.type)
            return (
              (e.method = "throw"),
              (e.arg = o.arg),
              (e.delegate = null),
              f
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function j(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function E(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function L(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(j, this),
            this.reset(!0));
        }
        function _(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n))
                      return ((e.value = t[n]), (e.done = !1), e);
                  return ((e.value = void 0), (e.done = !0), e);
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = d),
          n(m, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: h, configurable: !0 }),
          (h.displayName = u(d, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === h || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(m)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          u(w.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new w(s(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          b(m),
          u(m, c, "Generator"),
          u(m, a, function () {
            return this;
          }),
          u(m, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return ((t.value = n), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (t.values = _),
          (L.prototype = {
            constructor: L,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), E(r), f);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: _(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      var Y = r("bMwp").request;
      function K(t) {
        return H().async(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    Y({
                      url: "/v1/user/login_out",
                      method: "POST",
                      data: t.data,
                      params: t.params,
                    }),
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          },
          null,
          null,
          null,
          Promise,
        );
      }
      function W() {
        W = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          i = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, "");
        } catch (N) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, o) {
          var a = e && e.prototype instanceof p ? e : p,
            i = Object.create(a.prototype),
            c = new L(o || []);
          return (n(i, "_invoke", { value: x(t, r, c) }), i);
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        t.wrap = s;
        var f = {};
        function p() {}
        function h() {}
        function d() {}
        var v = {};
        u(v, a, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          g = y && y(y(_([])));
        g && g !== e && r.call(g, a) && (v = g);
        var m = (d.prototype = p.prototype = Object.create(v));
        function b(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var o;
          n(this, "_invoke", {
            value: function (n, a) {
              function i() {
                return new e(function (o, i) {
                  !(function n(o, a, i, c) {
                    var u = l(t[o], t, a);
                    if ("throw" !== u.type) {
                      var s = u.arg,
                        f = s.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? e.resolve(f.__await).then(
                            function (t) {
                              n("next", t, i, c);
                            },
                            function (t) {
                              n("throw", t, i, c);
                            },
                          )
                        : e.resolve(f).then(
                            function (t) {
                              ((s.value = t), i(s));
                            },
                            function (t) {
                              return n("throw", t, i, c);
                            },
                          );
                    }
                    c(u.arg);
                  })(n, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function x(t, e, r) {
          var n = "suspendedStart";
          return function (o, a) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw a;
              return k();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = O(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = l(t, e, r);
              if ("normal" === u.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function O(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                O(t, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var o = l(n, t.iterator, e.arg);
          if ("throw" === o.type)
            return (
              (e.method = "throw"),
              (e.arg = o.arg),
              (e.delegate = null),
              f
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function j(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function E(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function L(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(j, this),
            this.reset(!0));
        }
        function _(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n))
                      return ((e.value = t[n]), (e.done = !1), e);
                  return ((e.value = void 0), (e.done = !0), e);
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = d),
          n(m, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: h, configurable: !0 }),
          (h.displayName = u(d, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === h || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(m)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          u(w.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new w(s(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          b(m),
          u(m, c, "Generator"),
          u(m, a, function () {
            return this;
          }),
          u(m, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return ((t.value = n), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (t.values = _),
          (L.prototype = {
            constructor: L,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), E(r), f);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: _(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      var X = W().mark(J),
        Q = W().mark($),
        Z = W().mark(tt);
      function J(t) {
        var e, r;
        return W().wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                if ("object" !== typeof (e = t.payload)) {
                  o.next = 14;
                  break;
                }
                return (
                  q.a.remove("userInfo"),
                  (r = {}),
                  e.oauth_info &&
                    e.oauth_info.token &&
                    ((r = {
                      uid: e.uid || "",
                      uname: e.uname || "",
                      avatar: e.avatar || "",
                      city: e.city || "",
                    }).oauth_info = e.oauth_info),
                  q.a.set("userInfo", r, { expires: 30 }),
                  q.a.remove("CLS_WEB_AVATAR"),
                  q.a.set("CLS_WEB_AVATAR", e.avatar, { expires: 30 }),
                  (o.next = 10),
                  Object(n.c)({ type: U.f, payload: { userInfo: e } })
                );
              case 10:
                return (
                  (o.next = 12),
                  Object(n.c)({ type: z.a, payload: e.avatar })
                );
              case 12:
                return ((o.next = 14), Object(n.c)({ type: U.a }));
              case 14:
              case "end":
                return o.stop();
            }
        }, X);
      }
      function $(t) {
        var e;
        return W().wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return ((r.prev = 0), (r.next = 3), Object(n.b)(K, {}));
                case 3:
                  if (
                    !(e = r.sent) ||
                    200 !== e.status ||
                    !e.data ||
                    0 !== e.data.errno
                  ) {
                    r.next = 10;
                    break;
                  }
                  return (
                    q.a.remove("userInfo"),
                    q.a.remove("CLS_WEB_AVATAR"),
                    (r.next = 9),
                    Object(n.c)({
                      type: U.f,
                      payload: { userInfo: {}, userAvatar: "" },
                    })
                  );
                case 9:
                  t &&
                    t.payload &&
                    "user" === t.payload.pathname &&
                    (window.location.href = "/");
                case 10:
                  r.next = 15;
                  break;
                case 12:
                  ((r.prev = 12), (r.t0 = r.catch(0)), console.log(r.t0));
                case 15:
                case "end":
                  return r.stop();
              }
          },
          Q,
          null,
          [[0, 12]],
        );
      }
      function tt() {
        return W().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (t.next = 2),
                  Object(n.a)([Object(n.f)(U.b, J), Object(n.e)(U.c, $)])
                );
              case 2:
              case "end":
                return t.stop();
            }
        }, Z);
      }
      var et = r("Sc7i"),
        rt = r("uILk");
      function nt() {
        nt = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          i = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, "");
        } catch (N) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, o) {
          var a = e && e.prototype instanceof p ? e : p,
            i = Object.create(a.prototype),
            c = new L(o || []);
          return (n(i, "_invoke", { value: x(t, r, c) }), i);
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        t.wrap = s;
        var f = {};
        function p() {}
        function h() {}
        function d() {}
        var v = {};
        u(v, a, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          g = y && y(y(_([])));
        g && g !== e && r.call(g, a) && (v = g);
        var m = (d.prototype = p.prototype = Object.create(v));
        function b(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var o;
          n(this, "_invoke", {
            value: function (n, a) {
              function i() {
                return new e(function (o, i) {
                  !(function n(o, a, i, c) {
                    var u = l(t[o], t, a);
                    if ("throw" !== u.type) {
                      var s = u.arg,
                        f = s.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? e.resolve(f.__await).then(
                            function (t) {
                              n("next", t, i, c);
                            },
                            function (t) {
                              n("throw", t, i, c);
                            },
                          )
                        : e.resolve(f).then(
                            function (t) {
                              ((s.value = t), i(s));
                            },
                            function (t) {
                              return n("throw", t, i, c);
                            },
                          );
                    }
                    c(u.arg);
                  })(n, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function x(t, e, r) {
          var n = "suspendedStart";
          return function (o, a) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw a;
              return k();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = O(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = l(t, e, r);
              if ("normal" === u.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function O(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                O(t, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var o = l(n, t.iterator, e.arg);
          if ("throw" === o.type)
            return (
              (e.method = "throw"),
              (e.arg = o.arg),
              (e.delegate = null),
              f
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function j(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function E(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function L(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(j, this),
            this.reset(!0));
        }
        function _(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n))
                      return ((e.value = t[n]), (e.done = !1), e);
                  return ((e.value = void 0), (e.done = !0), e);
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = d),
          n(m, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: h, configurable: !0 }),
          (h.displayName = u(d, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === h || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(m)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          u(w.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new w(s(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          b(m),
          u(m, c, "Generator"),
          u(m, a, function () {
            return this;
          }),
          u(m, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return ((t.value = n), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (t.values = _),
          (L.prototype = {
            constructor: L,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), E(r), f);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: _(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      var ot = nt().mark(it),
        at = nt().mark(ct);
      function it() {
        var t, e;
        return nt().wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.next = 2),
                    Object(n.d)(function (t) {
                      return t.user.userInfo;
                    })
                  );
                case 2:
                  return (
                    (t = r.sent),
                    (r.prev = 3),
                    (r.next = 6),
                    Object(n.b)(rt.c, { uid: t.uid })
                  );
                case 6:
                  if (!(e = r.sent) || 200 !== e.status) {
                    r.next = 17;
                    break;
                  }
                  if (!e.data || 0 !== e.data.errno) {
                    r.next = 13;
                    break;
                  }
                  return (
                    (r.next = 11),
                    Object(n.c)({ type: et.c, payload: { data: e.data.data } })
                  );
                case 11:
                  r.next = 15;
                  break;
                case 13:
                  return (
                    (r.next = 15),
                    Object(n.c)({
                      type: et.b,
                      payload: {
                        errno: (e.data && e.data.errno) || 500,
                        errorMessage: e.data.msg
                          ? e.data.msg
                          : e.data.data
                            ? e.data.data
                            : "\u8fde\u63a5\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
                      },
                    })
                  );
                case 15:
                  r.next = 19;
                  break;
                case 17:
                  return (
                    (r.next = 19),
                    Object(n.c)({
                      type: et.b,
                      payload: {
                        errno: e.status,
                        errorMessage:
                          "\u7f51\u7edc\u8d85\u65f6\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01\uff01\uff01",
                      },
                    })
                  );
                case 19:
                  r.next = 24;
                  break;
                case 21:
                  ((r.prev = 21), (r.t0 = r.catch(3)), console.log(r.t0));
                case 24:
                case "end":
                  return r.stop();
              }
          },
          ot,
          null,
          [[3, 21]],
        );
      }
      function ct() {
        return nt().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), Object(n.a)([Object(n.e)(et.a, it)]));
              case 2:
              case "end":
                return t.stop();
            }
        }, at);
      }
      var ut = r("LzO8"),
        st = r("Dqbu");
      function lt() {
        lt = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          i = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, "");
        } catch (N) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, o) {
          var a = e && e.prototype instanceof p ? e : p,
            i = Object.create(a.prototype),
            c = new L(o || []);
          return (n(i, "_invoke", { value: x(t, r, c) }), i);
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        t.wrap = s;
        var f = {};
        function p() {}
        function h() {}
        function d() {}
        var v = {};
        u(v, a, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          g = y && y(y(_([])));
        g && g !== e && r.call(g, a) && (v = g);
        var m = (d.prototype = p.prototype = Object.create(v));
        function b(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var o;
          n(this, "_invoke", {
            value: function (n, a) {
              function i() {
                return new e(function (o, i) {
                  !(function n(o, a, i, c) {
                    var u = l(t[o], t, a);
                    if ("throw" !== u.type) {
                      var s = u.arg,
                        f = s.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? e.resolve(f.__await).then(
                            function (t) {
                              n("next", t, i, c);
                            },
                            function (t) {
                              n("throw", t, i, c);
                            },
                          )
                        : e.resolve(f).then(
                            function (t) {
                              ((s.value = t), i(s));
                            },
                            function (t) {
                              return n("throw", t, i, c);
                            },
                          );
                    }
                    c(u.arg);
                  })(n, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function x(t, e, r) {
          var n = "suspendedStart";
          return function (o, a) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw a;
              return k();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = O(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = l(t, e, r);
              if ("normal" === u.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function O(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                O(t, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var o = l(n, t.iterator, e.arg);
          if ("throw" === o.type)
            return (
              (e.method = "throw"),
              (e.arg = o.arg),
              (e.delegate = null),
              f
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function j(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function E(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function L(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(j, this),
            this.reset(!0));
        }
        function _(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n))
                      return ((e.value = t[n]), (e.done = !1), e);
                  return ((e.value = void 0), (e.done = !0), e);
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = d),
          n(m, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: h, configurable: !0 }),
          (h.displayName = u(d, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === h || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(m)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          u(w.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new w(s(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          b(m),
          u(m, c, "Generator"),
          u(m, a, function () {
            return this;
          }),
          u(m, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return ((t.value = n), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (t.values = _),
          (L.prototype = {
            constructor: L,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), E(r), f);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: _(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      var ft = lt().mark(vt),
        pt = lt().mark(yt),
        ht = lt().mark(gt),
        dt = lt().mark(mt);
      function vt() {
        var t, e, r;
        return lt().wrap(
          function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  return (
                    (o.next = 2),
                    Object(n.d)(function (t) {
                      return t.user.userInfo;
                    })
                  );
                case 2:
                  return (
                    (t = o.sent),
                    (e = t.oauth_info),
                    (o.prev = 4),
                    (o.next = 7),
                    Object(n.b)(ut.e, {})
                  );
                case 7:
                  if (
                    (((r = o.sent).data.data.oauth_info = e),
                    !r || 200 !== r.status)
                  ) {
                    o.next = 25;
                    break;
                  }
                  if (!r.data || 0 !== r.data.errno) {
                    o.next = 21;
                    break;
                  }
                  return (
                    q.a.remove("userInfo"),
                    q.a.set("userInfo", r.data.data),
                    q.a.remove("CLS_WEB_AVATAR"),
                    q.a.set("CLS_WEB_AVATAR", r.data.data.avatar),
                    (o.next = 17),
                    Object(n.c)({ type: z.h, payload: r.data.data })
                  );
                case 17:
                  return (
                    (o.next = 19),
                    Object(n.c)({ type: z.a, payload: r.data.data.avatar })
                  );
                case 19:
                  o.next = 23;
                  break;
                case 21:
                  return (
                    (o.next = 23),
                    Object(n.c)({
                      type: z.g,
                      payload: {
                        errno: (r.data && r.data.errno) || 500,
                        errorMessage: r.data.msg
                          ? r.data.msg
                          : r.data.data
                            ? r.data.data
                            : "\u8fde\u63a5\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
                      },
                    })
                  );
                case 23:
                  o.next = 27;
                  break;
                case 25:
                  return (
                    (o.next = 27),
                    Object(n.c)({
                      type: z.g,
                      payload: {
                        errno: r.status || 500,
                        errorMessage:
                          "\u8fde\u63a5\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
                      },
                    })
                  );
                case 27:
                  o.next = 32;
                  break;
                case 29:
                  ((o.prev = 29), (o.t0 = o.catch(4)), console.log(o.t0));
                case 32:
                case "end":
                  return o.stop();
              }
          },
          ft,
          null,
          [[4, 29]],
        );
      }
      function yt(t) {
        var e;
        return lt().wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  if (((r.prev = 0), (e = null), "follow" !== t.payload.type)) {
                    r.next = 8;
                    break;
                  }
                  return (
                    (r.next = 5),
                    Object(n.b)(st.a, { params: { id: t.payload.id } })
                  );
                case 5:
                  ((e = r.sent), (r.next = 11));
                  break;
                case 8:
                  return (
                    (r.next = 10),
                    Object(n.b)(st.d, { params: { id: t.payload.id } })
                  );
                case 10:
                  e = r.sent;
                case 11:
                  if (!e || 200 !== e.status) {
                    r.next = 21;
                    break;
                  }
                  if (!e.data || 0 !== e.data.errno) {
                    r.next = 17;
                    break;
                  }
                  return (
                    (r.next = 15),
                    Object(n.c)({
                      type: z.e,
                      payload: { type: t.payload.type, id: t.payload.id },
                    })
                  );
                case 15:
                  r.next = 19;
                  break;
                case 17:
                  return (
                    (r.next = 19),
                    Object(n.c)({
                      type: z.d,
                      payload: {
                        errno: (e.data && e.data.errno) || 500,
                        errorMessage: e.data.msg
                          ? e.data.msg
                          : e.data.data
                            ? e.data.data
                            : "unfollow" === t.payload.type
                              ? "\u53d6\u6d88\u5173\u6ce8\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"
                              : "\u8fde\u63a5\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
                      },
                    })
                  );
                case 19:
                  r.next = 23;
                  break;
                case 21:
                  return (
                    (r.next = 23),
                    Object(n.c)({
                      type: z.d,
                      payload: {
                        errno: e.status || 500,
                        errorMessage:
                          "\u8fde\u63a5\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
                      },
                    })
                  );
                case 23:
                  r.next = 28;
                  break;
                case 25:
                  ((r.prev = 25), (r.t0 = r.catch(0)), console.log(r.t0));
                case 28:
                case "end":
                  return r.stop();
              }
          },
          pt,
          null,
          [[0, 25]],
        );
      }
      function gt(t) {
        var e, r, o, a, i;
        return lt().wrap(
          function (c) {
            for (;;)
              switch ((c.prev = c.next)) {
                case 0:
                  return (
                    (c.next = 2),
                    Object(n.d)(function (t) {
                      return t.user.userInfo;
                    })
                  );
                case 2:
                  return (
                    (e = c.sent),
                    (r = e && e.uid ? e.uid : ""),
                    (o = t.payload.userInfo),
                    (a = { uid: r, uname: o.userName, city: o.city }),
                    (c.prev = 6),
                    (c.next = 9),
                    Object(n.b)(ut.d, { data: a })
                  );
                case 9:
                  if (!(i = c.sent) || 200 !== i.status) {
                    c.next = 22;
                    break;
                  }
                  if (!i.data || 0 !== i.data.errno) {
                    c.next = 18;
                    break;
                  }
                  return ((c.next = 14), Object(n.c)({ type: z.k }));
                case 14:
                  return ((c.next = 16), Object(n.c)({ type: z.f }));
                case 16:
                  c.next = 20;
                  break;
                case 18:
                  return (
                    (c.next = 20),
                    Object(n.c)({
                      type: z.j,
                      payload: {
                        errno: i.data.errno,
                        errorMessage: i.data.msg
                          ? i.data.msg
                          : "\u64cd\u4f5c\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff01",
                      },
                    })
                  );
                case 20:
                  c.next = 24;
                  break;
                case 22:
                  return (
                    (c.next = 24),
                    Object(n.c)({
                      type: z.j,
                      payload: {
                        errno: i.status,
                        errorMessage:
                          "\u7f51\u7edc\u8d85\u65f6\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01\uff01\uff01",
                      },
                    })
                  );
                case 24:
                  c.next = 29;
                  break;
                case 26:
                  ((c.prev = 26), (c.t0 = c.catch(6)), console.log(c.t0));
                case 29:
                case "end":
                  return c.stop();
              }
          },
          ht,
          null,
          [[6, 26]],
        );
      }
      function mt() {
        return lt().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (t.next = 2),
                  Object(n.a)([
                    Object(n.e)(z.c, yt),
                    Object(n.e)(z.i, gt),
                    Object(n.e)(z.f, vt),
                  ])
                );
              case 2:
              case "end":
                return t.stop();
            }
        }, dt);
      }
      function bt() {
        bt = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          i = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, "");
        } catch (N) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, o) {
          var a = e && e.prototype instanceof p ? e : p,
            i = Object.create(a.prototype),
            c = new L(o || []);
          return (n(i, "_invoke", { value: x(t, r, c) }), i);
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        t.wrap = s;
        var f = {};
        function p() {}
        function h() {}
        function d() {}
        var v = {};
        u(v, a, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          g = y && y(y(_([])));
        g && g !== e && r.call(g, a) && (v = g);
        var m = (d.prototype = p.prototype = Object.create(v));
        function b(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var o;
          n(this, "_invoke", {
            value: function (n, a) {
              function i() {
                return new e(function (o, i) {
                  !(function n(o, a, i, c) {
                    var u = l(t[o], t, a);
                    if ("throw" !== u.type) {
                      var s = u.arg,
                        f = s.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? e.resolve(f.__await).then(
                            function (t) {
                              n("next", t, i, c);
                            },
                            function (t) {
                              n("throw", t, i, c);
                            },
                          )
                        : e.resolve(f).then(
                            function (t) {
                              ((s.value = t), i(s));
                            },
                            function (t) {
                              return n("throw", t, i, c);
                            },
                          );
                    }
                    c(u.arg);
                  })(n, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function x(t, e, r) {
          var n = "suspendedStart";
          return function (o, a) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw a;
              return k();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = O(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = l(t, e, r);
              if ("normal" === u.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function O(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                O(t, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var o = l(n, t.iterator, e.arg);
          if ("throw" === o.type)
            return (
              (e.method = "throw"),
              (e.arg = o.arg),
              (e.delegate = null),
              f
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function j(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function E(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function L(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(j, this),
            this.reset(!0));
        }
        function _(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n))
                      return ((e.value = t[n]), (e.done = !1), e);
                  return ((e.value = void 0), (e.done = !0), e);
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = d),
          n(m, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: h, configurable: !0 }),
          (h.displayName = u(d, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === h || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(m)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          u(w.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new w(s(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          b(m),
          u(m, c, "Generator"),
          u(m, a, function () {
            return this;
          }),
          u(m, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return ((t.value = n), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (t.values = _),
          (L.prototype = {
            constructor: L,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), E(r), f);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: _(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      var wt = bt().mark(Ot),
        xt = bt().mark(jt);
      function Ot() {
        var t, e, r;
        return bt().wrap(
          function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  return (
                    (o.prev = 0),
                    (o.next = 3),
                    Object(n.d)(function (t) {
                      return t.user.userInfo;
                    })
                  );
                case 3:
                  return (
                    (t = o.sent),
                    (e =
                      t && t.oauth_info && t.oauth_info.token
                        ? t.oauth_info.token
                        : ""),
                    (o.next = 7),
                    Object(n.b)(C, { token: e })
                  );
                case 7:
                  if (!(r = o.sent) || 200 !== r.status) {
                    o.next = 18;
                    break;
                  }
                  if (!r.data || 0 !== r.data.errno) {
                    o.next = 14;
                    break;
                  }
                  return (
                    (o.next = 12),
                    Object(n.c)({ type: c.d, payload: r.data.data })
                  );
                case 12:
                  o.next = 16;
                  break;
                case 14:
                  return (
                    (o.next = 16),
                    Object(n.c)({
                      type: c.c,
                      payload: {
                        errno: (r.data && r.data.errno) || 500,
                        errorMessage: r.data.msg
                          ? r.data.msg
                          : r.data.data
                            ? r.data.data
                            : "\u8fde\u63a5\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
                      },
                    })
                  );
                case 16:
                  o.next = 20;
                  break;
                case 18:
                  return (
                    (o.next = 20),
                    Object(n.c)({
                      type: c.c,
                      payload: {
                        errno: r.status || 500,
                        errorMessage:
                          "\u8fde\u63a5\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
                      },
                    })
                  );
                case 20:
                  o.next = 25;
                  break;
                case 22:
                  ((o.prev = 22), (o.t0 = o.catch(0)), console.log(o.t0));
                case 25:
                case "end":
                  return o.stop();
              }
          },
          wt,
          null,
          [[0, 22]],
        );
      }
      function jt() {
        return bt().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), Object(n.a)([Object(n.e)(c.b, Ot)]));
              case 2:
              case "end":
                return t.stop();
            }
        }, xt);
      }
      var Et = r("H2OK");
      function Lt() {
        Lt = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          i = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, "");
        } catch (N) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, o) {
          var a = e && e.prototype instanceof p ? e : p,
            i = Object.create(a.prototype),
            c = new L(o || []);
          return (n(i, "_invoke", { value: x(t, r, c) }), i);
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        t.wrap = s;
        var f = {};
        function p() {}
        function h() {}
        function d() {}
        var v = {};
        u(v, a, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          g = y && y(y(_([])));
        g && g !== e && r.call(g, a) && (v = g);
        var m = (d.prototype = p.prototype = Object.create(v));
        function b(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var o;
          n(this, "_invoke", {
            value: function (n, a) {
              function i() {
                return new e(function (o, i) {
                  !(function n(o, a, i, c) {
                    var u = l(t[o], t, a);
                    if ("throw" !== u.type) {
                      var s = u.arg,
                        f = s.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? e.resolve(f.__await).then(
                            function (t) {
                              n("next", t, i, c);
                            },
                            function (t) {
                              n("throw", t, i, c);
                            },
                          )
                        : e.resolve(f).then(
                            function (t) {
                              ((s.value = t), i(s));
                            },
                            function (t) {
                              return n("throw", t, i, c);
                            },
                          );
                    }
                    c(u.arg);
                  })(n, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function x(t, e, r) {
          var n = "suspendedStart";
          return function (o, a) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw a;
              return k();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = O(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = l(t, e, r);
              if ("normal" === u.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function O(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                O(t, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var o = l(n, t.iterator, e.arg);
          if ("throw" === o.type)
            return (
              (e.method = "throw"),
              (e.arg = o.arg),
              (e.delegate = null),
              f
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function j(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function E(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function L(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(j, this),
            this.reset(!0));
        }
        function _(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n))
                      return ((e.value = t[n]), (e.done = !1), e);
                  return ((e.value = void 0), (e.done = !0), e);
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = d),
          n(m, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: h, configurable: !0 }),
          (h.displayName = u(d, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === h || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(m)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          u(w.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new w(s(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          b(m),
          u(m, c, "Generator"),
          u(m, a, function () {
            return this;
          }),
          u(m, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return ((t.value = n), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (t.values = _),
          (L.prototype = {
            constructor: L,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), E(r), f);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: _(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      var _t = r("bMwp").request;
      function kt(t) {
        return Lt().async(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    _t({ url: "/v2/base/common_config", params: t.params }),
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          },
          null,
          null,
          null,
          Promise,
        );
      }
      function Nt() {
        Nt = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          i = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, "");
        } catch (N) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, o) {
          var a = e && e.prototype instanceof p ? e : p,
            i = Object.create(a.prototype),
            c = new L(o || []);
          return (n(i, "_invoke", { value: x(t, r, c) }), i);
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        t.wrap = s;
        var f = {};
        function p() {}
        function h() {}
        function d() {}
        var v = {};
        u(v, a, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          g = y && y(y(_([])));
        g && g !== e && r.call(g, a) && (v = g);
        var m = (d.prototype = p.prototype = Object.create(v));
        function b(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var o;
          n(this, "_invoke", {
            value: function (n, a) {
              function i() {
                return new e(function (o, i) {
                  !(function n(o, a, i, c) {
                    var u = l(t[o], t, a);
                    if ("throw" !== u.type) {
                      var s = u.arg,
                        f = s.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? e.resolve(f.__await).then(
                            function (t) {
                              n("next", t, i, c);
                            },
                            function (t) {
                              n("throw", t, i, c);
                            },
                          )
                        : e.resolve(f).then(
                            function (t) {
                              ((s.value = t), i(s));
                            },
                            function (t) {
                              return n("throw", t, i, c);
                            },
                          );
                    }
                    c(u.arg);
                  })(n, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function x(t, e, r) {
          var n = "suspendedStart";
          return function (o, a) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw a;
              return k();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = O(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = l(t, e, r);
              if ("normal" === u.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function O(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                O(t, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var o = l(n, t.iterator, e.arg);
          if ("throw" === o.type)
            return (
              (e.method = "throw"),
              (e.arg = o.arg),
              (e.delegate = null),
              f
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function j(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function E(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function L(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(j, this),
            this.reset(!0));
        }
        function _(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n))
                      return ((e.value = t[n]), (e.done = !1), e);
                  return ((e.value = void 0), (e.done = !0), e);
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = d),
          n(m, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: h, configurable: !0 }),
          (h.displayName = u(d, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === h || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(m)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          u(w.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new w(s(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          b(m),
          u(m, c, "Generator"),
          u(m, a, function () {
            return this;
          }),
          u(m, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return ((t.value = n), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (t.values = _),
          (L.prototype = {
            constructor: L,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), E(r), f);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: _(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      var St = Nt().mark(Tt),
        At = Nt().mark(It);
      function Tt() {
        var t, e, r;
        return Nt().wrap(
          function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  return (
                    (o.prev = 0),
                    (o.next = 3),
                    Object(n.d)(function (t) {
                      return t.user.userInfo;
                    })
                  );
                case 3:
                  return (
                    (t = o.sent),
                    (e =
                      t && t.oauth_info && t.oauth_info.token
                        ? t.oauth_info.token
                        : ""),
                    (o.next = 7),
                    Object(n.b)(kt, { params: { token: e } })
                  );
                case 7:
                  if (!(r = o.sent) || 200 !== r.status) {
                    o.next = 12;
                    break;
                  }
                  if (!r.data || 0 !== r.data.errno) {
                    o.next = 12;
                    break;
                  }
                  return (
                    (o.next = 12),
                    Object(n.c)({
                      type: Et.b,
                      payload: { depthNavType: r.data.data ? r.data.data : {} },
                    })
                  );
                case 12:
                  o.next = 17;
                  break;
                case 14:
                  ((o.prev = 14), (o.t0 = o.catch(0)), console.log(o.t0));
                case 17:
                case "end":
                  return o.stop();
              }
          },
          St,
          null,
          [[0, 14]],
        );
      }
      function It() {
        return Nt().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), Object(n.a)([Object(n.f)(Et.a, Tt)]));
              case 2:
              case "end":
                return t.stop();
            }
        }, At);
      }
      var Pt = r("Jlt2");
      function Ct() {
        Ct = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          i = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, "");
        } catch (N) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, o) {
          var a = e && e.prototype instanceof p ? e : p,
            i = Object.create(a.prototype),
            c = new L(o || []);
          return (n(i, "_invoke", { value: x(t, r, c) }), i);
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        t.wrap = s;
        var f = {};
        function p() {}
        function h() {}
        function d() {}
        var v = {};
        u(v, a, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          g = y && y(y(_([])));
        g && g !== e && r.call(g, a) && (v = g);
        var m = (d.prototype = p.prototype = Object.create(v));
        function b(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var o;
          n(this, "_invoke", {
            value: function (n, a) {
              function i() {
                return new e(function (o, i) {
                  !(function n(o, a, i, c) {
                    var u = l(t[o], t, a);
                    if ("throw" !== u.type) {
                      var s = u.arg,
                        f = s.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? e.resolve(f.__await).then(
                            function (t) {
                              n("next", t, i, c);
                            },
                            function (t) {
                              n("throw", t, i, c);
                            },
                          )
                        : e.resolve(f).then(
                            function (t) {
                              ((s.value = t), i(s));
                            },
                            function (t) {
                              return n("throw", t, i, c);
                            },
                          );
                    }
                    c(u.arg);
                  })(n, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function x(t, e, r) {
          var n = "suspendedStart";
          return function (o, a) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw a;
              return k();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = O(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = l(t, e, r);
              if ("normal" === u.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function O(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                O(t, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var o = l(n, t.iterator, e.arg);
          if ("throw" === o.type)
            return (
              (e.method = "throw"),
              (e.arg = o.arg),
              (e.delegate = null),
              f
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function j(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function E(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function L(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(j, this),
            this.reset(!0));
        }
        function _(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n))
                      return ((e.value = t[n]), (e.done = !1), e);
                  return ((e.value = void 0), (e.done = !0), e);
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = d),
          n(m, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: h, configurable: !0 }),
          (h.displayName = u(d, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === h || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(m)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          u(w.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new w(s(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          b(m),
          u(m, c, "Generator"),
          u(m, a, function () {
            return this;
          }),
          u(m, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return ((t.value = n), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (t.values = _),
          (L.prototype = {
            constructor: L,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), E(r), f);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: _(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      var Gt = Ct().mark(Dt),
        Rt = Ct().mark(Ft);
      function Dt(t) {
        var e;
        return Ct().wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  if (((r.prev = 0), "stockList" !== t.payload.type)) {
                    r.next = 7;
                    break;
                  }
                  return (
                    (r.next = 4),
                    Object(n.b)(rt.i, { params: t.payload.list })
                  );
                case 4:
                  ((e = r.sent), (r.next = 11));
                  break;
                case 7:
                  if ("plateList" !== t.payload.type) {
                    r.next = 11;
                    break;
                  }
                  return (
                    (r.next = 10),
                    Object(n.b)(rt.h, { params: t.payload.list })
                  );
                case 10:
                  e = r.sent;
                case 11:
                  if (!e || 200 !== e.status) {
                    r.next = 15;
                    break;
                  }
                  if (!e.data || 200 !== e.data.code) {
                    r.next = 15;
                    break;
                  }
                  return (
                    (r.next = 15),
                    Object(n.c)({
                      type: Pt.a,
                      payload: e.data.data,
                      listType: t.payload.type,
                    })
                  );
                case 15:
                  r.next = 20;
                  break;
                case 17:
                  ((r.prev = 17), (r.t0 = r.catch(0)), console.log(r.t0));
                case 20:
                case "end":
                  return r.stop();
              }
          },
          Gt,
          null,
          [[0, 17]],
        );
      }
      function Ft() {
        return Ct().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), Object(n.a)([Object(n.e)(Pt.b, Dt)]));
              case 2:
              case "end":
                return t.stop();
            }
        }, Rt);
      }
      var Mt = r("kv7x"),
        Bt = r("xhG6");
      function Vt() {
        Vt = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          i = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, "");
        } catch (N) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, o) {
          var a = e && e.prototype instanceof p ? e : p,
            i = Object.create(a.prototype),
            c = new L(o || []);
          return (n(i, "_invoke", { value: x(t, r, c) }), i);
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        t.wrap = s;
        var f = {};
        function p() {}
        function h() {}
        function d() {}
        var v = {};
        u(v, a, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          g = y && y(y(_([])));
        g && g !== e && r.call(g, a) && (v = g);
        var m = (d.prototype = p.prototype = Object.create(v));
        function b(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var o;
          n(this, "_invoke", {
            value: function (n, a) {
              function i() {
                return new e(function (o, i) {
                  !(function n(o, a, i, c) {
                    var u = l(t[o], t, a);
                    if ("throw" !== u.type) {
                      var s = u.arg,
                        f = s.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? e.resolve(f.__await).then(
                            function (t) {
                              n("next", t, i, c);
                            },
                            function (t) {
                              n("throw", t, i, c);
                            },
                          )
                        : e.resolve(f).then(
                            function (t) {
                              ((s.value = t), i(s));
                            },
                            function (t) {
                              return n("throw", t, i, c);
                            },
                          );
                    }
                    c(u.arg);
                  })(n, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function x(t, e, r) {
          var n = "suspendedStart";
          return function (o, a) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw a;
              return k();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = O(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = l(t, e, r);
              if ("normal" === u.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function O(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                O(t, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var o = l(n, t.iterator, e.arg);
          if ("throw" === o.type)
            return (
              (e.method = "throw"),
              (e.arg = o.arg),
              (e.delegate = null),
              f
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function j(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function E(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function L(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(j, this),
            this.reset(!0));
        }
        function _(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n))
                      return ((e.value = t[n]), (e.done = !1), e);
                  return ((e.value = void 0), (e.done = !0), e);
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = d),
          n(m, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: h, configurable: !0 }),
          (h.displayName = u(d, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === h || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(m)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          u(w.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new w(s(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          b(m),
          u(m, c, "Generator"),
          u(m, a, function () {
            return this;
          }),
          u(m, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return ((t.value = n), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (t.values = _),
          (L.prototype = {
            constructor: L,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), E(r), f);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: _(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      var qt = Vt().mark(Qt),
        Ut = Vt().mark(Zt),
        zt = Vt().mark(Jt),
        Ht = Vt().mark($t),
        Yt = Vt().mark(te),
        Kt = Vt().mark(ee),
        Wt = Vt().mark(re),
        Xt = Vt().mark(ne);
      function Qt() {
        var t;
        return Vt().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return ((e.prev = 0), (e.next = 3), Object(n.b)(st.b, {}));
                case 3:
                  if (!(t = e.sent) || 200 !== t.status) {
                    e.next = 11;
                    break;
                  }
                  if (!t.data || 0 !== t.data.errno) {
                    e.next = 9;
                    break;
                  }
                  if ("object" !== typeof t.data.data) {
                    e.next = 9;
                    break;
                  }
                  return (
                    (e.next = 9),
                    Object(n.c)({ type: Mt.l, payload: { data: t.data.data } })
                  );
                case 9:
                  e.next = 12;
                  break;
                case 11:
                  Object(v.c)({
                    describe: "\u9996\u9875\u9898\u6750\u63a8\u8350",
                    url: "/api/subject/recommend/article",
                    code: t.data.code || t.data.errno || t.data.error,
                    msg: t.data.msg,
                  });
                case 12:
                  e.next = 17;
                  break;
                case 14:
                  ((e.prev = 14),
                    (e.t0 = e.catch(0)),
                    console.log("getRecommendSubject", e.t0));
                case 17:
                case "end":
                  return e.stop();
              }
          },
          qt,
          null,
          [[0, 14]],
        );
      }
      function Zt() {
        var t;
        return Vt().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return ((e.prev = 0), (e.next = 3), Object(n.b)(Bt.c, {}));
                case 3:
                  if (!(t = e.sent) || 200 !== t.status) {
                    e.next = 11;
                    break;
                  }
                  if (!t.data || 0 !== t.data.errno) {
                    e.next = 9;
                    break;
                  }
                  if (!(t.data.data && t.data.data.length > 0)) {
                    e.next = 9;
                    break;
                  }
                  return (
                    (e.next = 9),
                    Object(n.c)({ type: Mt.f, payload: { data: t.data.data } })
                  );
                case 9:
                  e.next = 12;
                  break;
                case 11:
                  Object(v.c)({
                    describe:
                      "\u9996\u9875\u70ed\u95e8\u6587\u7ae0\u6392\u884c\u699c",
                    url: "/v2/article/hot/list",
                    code: t.data.code || t.data.errno || t.data.error,
                    msg: t.data.msg,
                  });
                case 12:
                  e.next = 17;
                  break;
                case 14:
                  ((e.prev = 14),
                    (e.t0 = e.catch(0)),
                    console.log("getHotArticleIndexPage", e.t0));
                case 17:
                case "end":
                  return e.stop();
              }
          },
          Ut,
          null,
          [[0, 14]],
        );
      }
      function Jt(t) {
        var e;
        return Vt().wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.prev = 0),
                    (r.next = 3),
                    Object(n.b)(Bt.d, {
                      params: { type: t.payload.type, flag: t.payload.flag },
                    })
                  );
                case 3:
                  if (!(e = r.sent) || 200 !== e.status) {
                    r.next = 11;
                    break;
                  }
                  if (!e.data || 200 !== e.data.code) {
                    r.next = 9;
                    break;
                  }
                  if (!Array.isArray(e.data.data)) {
                    r.next = 9;
                    break;
                  }
                  return (
                    (r.next = 9),
                    Object(n.c)({ type: Mt.j, payload: { data: e.data.data } })
                  );
                case 9:
                  r.next = 12;
                  break;
                case 11:
                  Object(v.c)({
                    describe: "\u9996\u9875\u6295\u8d44\u65e5\u5386",
                    url: "/api/calendar/web/list",
                    code: e.data.code || e.data.errno || e.data.error,
                    msg: e.data.msg,
                  });
                case 12:
                  r.next = 17;
                  break;
                case 14:
                  ((r.prev = 14),
                    (r.t0 = r.catch(0)),
                    console.log("getInvestKalendarIndexPage", r.t0));
                case 17:
                case "end":
                  return r.stop();
              }
          },
          zt,
          null,
          [[0, 14]],
        );
      }
      function $t(t) {
        var e;
        return Vt().wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.prev = 0),
                    (r.next = 3),
                    Object(n.b)(Bt.b, { params: { id: t.payload.id } })
                  );
                case 3:
                  if (!(e = r.sent) || 200 !== e.status) {
                    r.next = 11;
                    break;
                  }
                  if (!e.data || 0 !== e.data.errno) {
                    r.next = 9;
                    break;
                  }
                  if ("object" !== typeof e.data.data) {
                    r.next = 9;
                    break;
                  }
                  return (
                    (r.next = 9),
                    Object(n.c)({ type: Mt.b, payload: { data: e.data.data } })
                  );
                case 9:
                  r.next = 12;
                  break;
                case 11:
                  Object(v.c)({
                    describe: "\u9996\u9875\u8981\u95fb",
                    url: "/v3/depth/home/assembled",
                    code: e.data.code || e.data.errno || e.data.error,
                    msg: e.data.msg,
                  });
                case 12:
                  r.next = 17;
                  break;
                case 14:
                  ((r.prev = 14),
                    (r.t0 = r.catch(0)),
                    console.log("getAssembleDataIndexPage", r.t0));
                case 17:
                case "end":
                  return r.stop();
              }
          },
          Ht,
          null,
          [[0, 14]],
        );
      }
      function te() {
        var t;
        return Vt().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (e.next = 3),
                    Object(n.b)(Bt.e, { params: {} })
                  );
                case 3:
                  if (!(t = e.sent) || 200 !== t.status) {
                    e.next = 12;
                    break;
                  }
                  if (!t.data || 0 !== t.data.errno) {
                    e.next = 10;
                    break;
                  }
                  if ("object" !== typeof t.data.data) {
                    e.next = 10;
                    break;
                  }
                  return (
                    t.data.data.column_list &&
                      t.data.data.column_list.length > 0 &&
                      t.data.data.column_list.sort(function (t, e) {
                        return e.article_list.ctime - t.article_list.ctime;
                      }),
                    (e.next = 10),
                    Object(n.c)({ type: Mt.n, payload: { data: t.data.data } })
                  );
                case 10:
                  e.next = 13;
                  break;
                case 12:
                  Object(v.c)({
                    describe: "\u9996\u9875VIP\u4e13\u680f\u63a8\u8350",
                    url: "/featured/v1/column/list",
                    code: t.data.code || t.data.errno || t.data.error,
                    msg: t.data.msg,
                  });
                case 13:
                  e.next = 18;
                  break;
                case 15:
                  ((e.prev = 15),
                    (e.t0 = e.catch(0)),
                    console.log("getVipColumnIndexPage", e.t0));
                case 18:
                case "end":
                  return e.stop();
              }
          },
          Yt,
          null,
          [[0, 15]],
        );
      }
      function ee() {
        var t;
        return Vt().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (e.next = 3),
                    Object(n.b)(Bt.a, {
                      params: {
                        lastTime: parseInt(new Date().getTime() / 1e3, 10),
                      },
                    })
                  );
                case 3:
                  if (!(t = e.sent) || 200 !== t.status) {
                    e.next = 11;
                    break;
                  }
                  if (!t.data || 0 !== t.data.errno) {
                    e.next = 9;
                    break;
                  }
                  if (!(t.data.data && t.data.data.length > 0)) {
                    e.next = 9;
                    break;
                  }
                  return (
                    (e.next = 9),
                    Object(n.c)({ type: Mt.d, payload: { data: t.data.data } })
                  );
                case 9:
                  e.next = 12;
                  break;
                case 11:
                  Object(v.c)({
                    describe:
                      "\u9996\u9875\u540d\u5bb6\u4e13\u8f91\u63a8\u8350",
                    url: "/api/vod-admin/albums/list",
                    code: t.data.code || t.data.errno || t.data.error,
                    msg: t.data.msg,
                  });
                case 12:
                  e.next = 17;
                  break;
                case 14:
                  ((e.prev = 14),
                    (e.t0 = e.catch(0)),
                    console.log("getFamousAlbumIndexPage", e.t0));
                case 17:
                case "end":
                  return e.stop();
              }
          },
          Kt,
          null,
          [[0, 14]],
        );
      }
      function re() {
        var t;
        return Vt().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (e.next = 3),
                    Object(n.b)(st.c, { params: {} })
                  );
                case 3:
                  if (!(t = e.sent) || 200 !== t.status) {
                    e.next = 11;
                    break;
                  }
                  if (!t.data || 0 !== t.data.errno) {
                    e.next = 9;
                    break;
                  }
                  if ("object" !== typeof t.data.data) {
                    e.next = 9;
                    break;
                  }
                  return (
                    (e.next = 9),
                    Object(n.c)({
                      type: Mt.h,
                      payload: {
                        data:
                          t.data.data.hot_subjects && t.data.data.hot_subjects
                            ? t.data.data.hot_subjects
                            : [],
                      },
                    })
                  );
                case 9:
                  e.next = 12;
                  break;
                case 11:
                  Object(v.c)({
                    describe:
                      "\u9996\u9875\u70ed\u95e8\u8bdd\u9898\u63a8\u8350",
                    url: "/api/subject/hotAndNewestSubject",
                    code: t.data.code || t.data.errno || t.data.error,
                    msg: t.data.msg,
                  });
                case 12:
                  e.next = 17;
                  break;
                case 14:
                  ((e.prev = 14),
                    (e.t0 = e.catch(0)),
                    console.log("getHotSubjectIndexPage", e.t0));
                case 17:
                case "end":
                  return e.stop();
              }
          },
          Wt,
          null,
          [[0, 14]],
        );
      }
      function ne() {
        return Vt().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (t.next = 2),
                  Object(n.a)([
                    Object(n.f)(Mt.k, Qt),
                    Object(n.f)(Mt.e, Zt),
                    Object(n.f)(Mt.i, Jt),
                    Object(n.f)(Mt.a, $t),
                    Object(n.f)(Mt.m, te),
                    Object(n.f)(Mt.c, ee),
                    Object(n.f)(Mt.g, re),
                  ])
                );
              case 2:
              case "end":
                return t.stop();
            }
        }, Xt);
      }
      function oe() {
        oe = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          i = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, "");
        } catch (N) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, o) {
          var a = e && e.prototype instanceof p ? e : p,
            i = Object.create(a.prototype),
            c = new L(o || []);
          return (n(i, "_invoke", { value: x(t, r, c) }), i);
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        t.wrap = s;
        var f = {};
        function p() {}
        function h() {}
        function d() {}
        var v = {};
        u(v, a, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          g = y && y(y(_([])));
        g && g !== e && r.call(g, a) && (v = g);
        var m = (d.prototype = p.prototype = Object.create(v));
        function b(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var o;
          n(this, "_invoke", {
            value: function (n, a) {
              function i() {
                return new e(function (o, i) {
                  !(function n(o, a, i, c) {
                    var u = l(t[o], t, a);
                    if ("throw" !== u.type) {
                      var s = u.arg,
                        f = s.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? e.resolve(f.__await).then(
                            function (t) {
                              n("next", t, i, c);
                            },
                            function (t) {
                              n("throw", t, i, c);
                            },
                          )
                        : e.resolve(f).then(
                            function (t) {
                              ((s.value = t), i(s));
                            },
                            function (t) {
                              return n("throw", t, i, c);
                            },
                          );
                    }
                    c(u.arg);
                  })(n, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function x(t, e, r) {
          var n = "suspendedStart";
          return function (o, a) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw a;
              return k();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = O(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = l(t, e, r);
              if ("normal" === u.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function O(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                O(t, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var o = l(n, t.iterator, e.arg);
          if ("throw" === o.type)
            return (
              (e.method = "throw"),
              (e.arg = o.arg),
              (e.delegate = null),
              f
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function j(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function E(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function L(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(j, this),
            this.reset(!0));
        }
        function _(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n))
                      return ((e.value = t[n]), (e.done = !1), e);
                  return ((e.value = void 0), (e.done = !0), e);
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = d),
          n(m, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: h, configurable: !0 }),
          (h.displayName = u(d, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === h || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(m)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          u(w.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new w(s(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          b(m),
          u(m, c, "Generator"),
          u(m, a, function () {
            return this;
          }),
          u(m, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return ((t.value = n), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (t.values = _),
          (L.prototype = {
            constructor: L,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), E(r), f);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: _(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      var ae = oe().mark(ie);
      function ie() {
        return oe().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (t.next = 2),
                  Object(n.a)([
                    S(),
                    B(),
                    tt(),
                    ct(),
                    mt(),
                    jt(),
                    It(),
                    Ft(),
                    ne(),
                  ])
                );
              case 2:
              case "end":
                return t.stop();
            }
        }, ae);
      }
      e.a = ie;
    },
    q09E: function (t, e, r) {
      "use strict";
      (r.d(e, "a", function () {
        return l;
      }),
        r.d(e, "b", function () {
          return f;
        }),
        r.d(e, "c", function () {
          return h;
        }));
      var n = r("Ev6p"),
        o = { done: !0, value: void 0 },
        a = {};
      function i(t) {
        return n.n.channel(t)
          ? "channel"
          : Array.isArray(t)
            ? String(
                t.map(function (t) {
                  return String(t);
                }),
              )
            : String(t);
      }
      function c(t, e) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "iterator",
          i = void 0,
          c = e;
        function u(e, r) {
          if (c === a) return o;
          if (r) throw ((c = a), r);
          i && i(e);
          var n = t[c](),
            u = n[0],
            s = n[1],
            l = n[2];
          return ((i = l), (c = u) === a ? o : s);
        }
        return Object(n.q)(
          u,
          function (t) {
            return u(null, t);
          },
          r,
          !0,
        );
      }
      var u = r("tw9P"),
        s = r("92lH");
      function l(t, e) {
        for (
          var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), o = 2;
          o < r;
          o++
        )
          n[o - 2] = arguments[o];
        var l = { done: !1, value: Object(u.i)(t) },
          f = void 0,
          p = function (t) {
            return (f = t);
          };
        return c(
          {
            q1: function () {
              return ["q2", l, p];
            },
            q2: function () {
              return f === s.a
                ? [a]
                : [
                    "q1",
                    ((t = f),
                    { done: !1, value: u.f.apply(void 0, [e].concat(n, [t])) }),
                  ];
              var t;
            },
          },
          "q1",
          "takeEvery(" + i(t) + ", " + e.name + ")",
        );
      }
      function f(t, e) {
        for (
          var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), o = 2;
          o < r;
          o++
        )
          n[o - 2] = arguments[o];
        var l = { done: !1, value: Object(u.i)(t) },
          f = function (t) {
            return { done: !1, value: u.f.apply(void 0, [e].concat(n, [t])) };
          },
          p = function (t) {
            return { done: !1, value: Object(u.e)(t) };
          },
          h = void 0,
          d = void 0,
          v = function (t) {
            return (h = t);
          },
          y = function (t) {
            return (d = t);
          };
        return c(
          {
            q1: function () {
              return ["q2", l, y];
            },
            q2: function () {
              return d === s.a ? [a] : h ? ["q3", p(h)] : ["q1", f(d), v];
            },
            q3: function () {
              return ["q1", f(d), v];
            },
          },
          "q1",
          "takeLatest(" + i(t) + ", " + e.name + ")",
        );
      }
      var p = r("mbVZ");
      function h(t, e, r) {
        for (
          var o = arguments.length, l = Array(o > 3 ? o - 3 : 0), f = 3;
          f < o;
          f++
        )
          l[f - 3] = arguments[f];
        var h = void 0,
          d = void 0,
          v = { done: !1, value: Object(u.a)(e, p.a.sliding(1)) },
          y = { done: !1, value: Object(u.d)(n.j, t) },
          g = function (t) {
            return (h = t);
          },
          m = function (t) {
            return (d = t);
          };
        return c(
          {
            q1: function () {
              return ["q2", v, m];
            },
            q2: function () {
              return ["q3", { done: !1, value: Object(u.i)(d) }, g];
            },
            q3: function () {
              return h === s.a
                ? [a]
                : [
                    "q4",
                    ((t = h),
                    { done: !1, value: u.f.apply(void 0, [r].concat(l, [t])) }),
                  ];
              var t;
            },
            q4: function () {
              return ["q2", y];
            },
          },
          "q1",
          "throttle(" + i(e) + ", " + r.name + ")",
        );
      }
    },
    tw9P: function (t, e, r) {
      "use strict";
      (r.d(e, "i", function () {
        return O;
      }),
        r.d(e, "g", function () {
          return j;
        }),
        r.d(e, "b", function () {
          return E;
        }),
        r.d(e, "d", function () {
          return _;
        }),
        r.d(e, "f", function () {
          return k;
        }),
        r.d(e, "e", function () {
          return N;
        }),
        r.d(e, "h", function () {
          return S;
        }),
        r.d(e, "a", function () {
          return A;
        }),
        r.d(e, "c", function () {
          return I;
        }));
      var n = r("Ev6p"),
        o = Object(n.u)("IO"),
        a = "TAKE",
        i = "PUT",
        c = "ALL",
        u = "RACE",
        s = "CALL",
        l = "CPS",
        f = "FORK",
        p = "JOIN",
        h = "CANCEL",
        d = "SELECT",
        v = "ACTION_CHANNEL",
        y = "CANCELLED",
        g = "FLUSH",
        m = "GET_CONTEXT",
        b = "SET_CONTEXT",
        w =
          "\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)",
        x = function (t, e) {
          var r;
          return (((r = {})[o] = !0), (r[t] = e), r);
        };
      function O() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "*";
        if (
          (arguments.length &&
            Object(n.g)(
              arguments[0],
              n.n.notUndef,
              "take(patternOrChannel): patternOrChannel is undefined",
            ),
          n.n.pattern(t))
        )
          return x(a, { pattern: t });
        if (n.n.channel(t)) return x(a, { channel: t });
        throw new Error(
          "take(patternOrChannel): argument " +
            String(t) +
            " is not valid channel or a valid pattern",
        );
      }
      O.maybe = function () {
        var t = O.apply(void 0, arguments);
        return ((t[a].maybe = !0), t);
      };
      O.maybe;
      function j(t, e) {
        return (
          arguments.length > 1
            ? (Object(n.g)(
                t,
                n.n.notUndef,
                "put(channel, action): argument channel is undefined",
              ),
              Object(n.g)(
                t,
                n.n.channel,
                "put(channel, action): argument " +
                  t +
                  " is not a valid channel",
              ),
              Object(n.g)(
                e,
                n.n.notUndef,
                "put(channel, action): argument action is undefined",
              ))
            : (Object(n.g)(
                t,
                n.n.notUndef,
                "put(action): argument action is undefined",
              ),
              (e = t),
              (t = null)),
          x(i, { channel: t, action: e })
        );
      }
      function E(t) {
        return x(c, t);
      }
      function L(t, e, r) {
        Object(n.g)(e, n.n.notUndef, t + ": argument fn is undefined");
        var o = null;
        if (n.n.array(e)) {
          var a = e;
          ((o = a[0]), (e = a[1]));
        } else if (e.fn) {
          var i = e;
          ((o = i.context), (e = i.fn));
        }
        return (
          o && n.n.string(e) && n.n.func(o[e]) && (e = o[e]),
          Object(n.g)(
            e,
            n.n.func,
            t + ": argument " + e + " is not a function",
          ),
          { context: o, fn: e, args: r }
        );
      }
      function _(t) {
        for (
          var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          r[n - 1] = arguments[n];
        return x(s, L("call", t, r));
      }
      function k(t) {
        for (
          var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          r[n - 1] = arguments[n];
        return x(f, L("fork", t, r));
      }
      function N() {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        if (e.length > 1)
          return E(
            e.map(function (t) {
              return N(t);
            }),
          );
        var o = e[0];
        return (
          1 === e.length &&
            (Object(n.g)(
              o,
              n.n.notUndef,
              "cancel(task): argument task is undefined",
            ),
            Object(n.g)(
              o,
              n.n.task,
              "cancel(task): argument " +
                o +
                " is not a valid Task object " +
                w,
            )),
          x(h, o || n.d)
        );
      }
      function S(t) {
        for (
          var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), o = 1;
          o < e;
          o++
        )
          r[o - 1] = arguments[o];
        return (
          0 === arguments.length
            ? (t = n.l)
            : (Object(n.g)(
                t,
                n.n.notUndef,
                "select(selector,[...]): argument selector is undefined",
              ),
              Object(n.g)(
                t,
                n.n.func,
                "select(selector,[...]): argument " + t + " is not a function",
              )),
          x(d, { selector: t, args: r })
        );
      }
      function A(t, e) {
        return (
          Object(n.g)(
            t,
            n.n.notUndef,
            "actionChannel(pattern,...): argument pattern is undefined",
          ),
          arguments.length > 1 &&
            (Object(n.g)(
              e,
              n.n.notUndef,
              "actionChannel(pattern, buffer): argument buffer is undefined",
            ),
            Object(n.g)(
              e,
              n.n.buffer,
              "actionChannel(pattern, buffer): argument " +
                e +
                " is not a valid buffer",
            )),
          x(v, { pattern: t, buffer: e })
        );
      }
      ((j.resolve = function () {
        var t = j.apply(void 0, arguments);
        return ((t[i].resolve = !0), t);
      }),
        (j.sync = Object(n.k)(
          j.resolve,
          Object(n.w)("put.sync", "put.resolve"),
        )));
      var T = function (t) {
          return function (e) {
            return e && e[o] && e[t];
          };
        },
        I = {
          take: T(a),
          put: T(i),
          all: T(c),
          race: T(u),
          call: T(s),
          cps: T(l),
          fork: T(f),
          join: T(p),
          cancel: T(h),
          select: T(d),
          actionChannel: T(v),
          cancelled: T(y),
          flush: T(g),
          getContext: T(m),
          setContext: T(b),
        };
    },
    udQi: function (t, e, r) {
      "use strict";
      (r.d(e, "a", function () {
        return i;
      }),
        r.d(e, "c", function () {
          return c;
        }),
        r.d(e, "b", function () {
          return s;
        }));
      var n = [],
        o = 0;
      function a(t) {
        try {
          (c(), t());
        } finally {
          u();
        }
      }
      function i(t) {
        (n.push(t), o || (c(), s()));
      }
      function c() {
        o++;
      }
      function u() {
        o--;
      }
      function s() {
        u();
        for (var t = void 0; !o && void 0 !== (t = n.shift()); ) a(t);
      }
    },
  },
  [[0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 20, 21, 23]],
]);
