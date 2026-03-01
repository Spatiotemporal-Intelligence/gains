(window.webpackJsonp = window.webpackJsonp || []).push([
  [60],
  {
    "+Za4": function (e, t, a) {
      "use strict";
      var n = a("q1tI"),
        r = a.n(n),
        c = a("YFqc"),
        o = a.n(c),
        s = a("wd/R"),
        i = a.n(s),
        l = a("bMwp"),
        u = r.a.createElement;
      i.a.locale("zh-cn");
      t.a = function (e) {
        var t = Object(n.useState)([
            { type: "", name: "\u5168\u90e8" },
            { type: "red", name: "\u52a0\u7ea2" },
            { type: "announcement", name: "\u516c\u53f8" },
            { type: "watch", name: "\u770b\u76d8" },
            { type: "hk_us", name: "\u6e2f\u7f8e\u80a1" },
            { type: "fund", name: "\u57fa\u91d1" },
            { type: "remind", name: "\u63d0\u9192" },
          ]),
          a = t[0],
          r = t[1];
        Object(n.useEffect)(function () {
          c();
        }, []);
        var c = function () {
            Object(l.request)({ url: "/v1/roll/recommend/conf" })
              .then(function (e) {
                if (
                  e &&
                  200 === e.status &&
                  e.data &&
                  0 === e.data.errno &&
                  e.data.data &&
                  e.data.data.name &&
                  e.data.data.topic
                ) {
                  var t = [].concat(a);
                  (t.splice(2, 0, {
                    type: "dynamic",
                    name: e.data.data.name,
                    topic: e.data.data.topic,
                  }),
                    r(t));
                }
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          s = e.type,
          i = e.handleChangeNavOtherStatus,
          f = e.navTypeOther;
        return u(
          "div",
          {
            className:
              "clearfix p-r w-100p l-h-42p t-a-c bg-c-34304b level-2-nav-box",
          },
          Array.isArray(a) &&
            a.map(function (t, a) {
              return "telegraph" === s
                ? u(
                    "h3",
                    {
                      key: "".concat(t.type, "-").concat(a),
                      className: "f-l f-s-17 level-2-nav",
                      onClick: function () {
                        f.nav !== t.type &&
                          i({ nav: t.type, topic: t.topic || 0 });
                      },
                    },
                    u(
                      "a",
                      {
                        className: "p-r d-b w-94 c-p ".concat(
                          t.type
                            ? f.nav.indexOf(t.type) > -1
                              ? "c-ef9524"
                              : "c-fff"
                            : f.nav
                              ? "c-fff"
                              : "c-ef9524",
                        ),
                      },
                      t.name,
                    ),
                  )
                : u(
                    "h3",
                    {
                      key: "".concat(t.type, "-").concat(a),
                      className: "f-l f-s-17 level-2-nav",
                    },
                    "direct" === e.linkType
                      ? u(
                          "a",
                          {
                            href: t.type
                              ? "/telegraph?type="
                                  .concat(t.type, "&topic=")
                                  .concat(t.topic || 0)
                              : "/telegraph",
                            className: "p-r d-b w-94 ".concat(
                              t.type ? "c-fff" : "c-ef9524",
                            ),
                          },
                          t.name,
                        )
                      : u(
                          o.a,
                          {
                            href: {
                              pathname: "/telegraph",
                              query: t.type
                                ? { type: t.type, topic: t.topic || 0 }
                                : {},
                            },
                            as: "/telegraph",
                            prefetch: !1,
                            scroll: !1,
                          },
                          u(
                            "a",
                            {
                              className: "p-r d-b w-94 ".concat(
                                t.type ? "c-fff" : "c-ef9524",
                              ),
                            },
                            t.name,
                          ),
                        ),
                  );
            }),
        );
      };
    },
    "2T0q": function (e, t, a) {
      "use strict";
      var n = a("1OyB"),
        r = a("vuIU"),
        c = a("JX7q"),
        o = a("Ji7U"),
        s = a("md7G"),
        i = a("foSv"),
        l = a("rePB"),
        u = a("q1tI"),
        f = a.n(u),
        p = a("FaKB"),
        h = a("00Fj"),
        d = a("bMwp"),
        m = f.a.createElement;
      function g(e) {
        var t = (function () {
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
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            n = Object(i.a)(e);
          if (t) {
            var r = Object(i.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(s.a)(this, a);
        };
      }
      var v = (function (e) {
        Object(o.a)(a, e);
        var t = g(a);
        function a(e) {
          var r;
          return (
            Object(n.a)(this, a),
            (r = t.call(this, e)),
            Object(l.a)(Object(c.a)(r), "handleGetQuote", function () {
              Object(d.request)({
                url: "/v2/quote/a/web/stocks/basic",
                params: {
                  secu_codes: "sh000001,sz399001,sh000905,sz399006",
                  fields:
                    "secu_name,secu_code,trade_status,change,change_px,last_px",
                },
              })
                .then(function (e) {
                  e &&
                    e.data &&
                    e.data.data &&
                    r.setState({ quote: e.data.data });
                })
                .catch(function (e) {
                  console.log(e);
                });
            }),
            Object(l.a)(Object(c.a)(r), "handlePlateSelected", function (e) {
              (r.fetchHotPlateList({ type: e, way: "change", rever: 1 }),
                r.setState({
                  plateSelected: e,
                  plateSort: { way: "change", up: !1 },
                }));
            }),
            Object(l.a)(Object(c.a)(r), "handlePlateSort", function (e) {
              var t = {
                type: r.state.plateSelected,
                way: e,
                rever:
                  e === r.state.plateSort.way
                    ? r.state.plateSort.up
                      ? 1
                      : 0
                    : 1,
              };
              (r.fetchHotPlateList(t),
                r.setState({
                  plateSort: {
                    way: e,
                    up: e === r.state.plateSort.way && !r.state.plateSort.up,
                  },
                }));
            }),
            Object(l.a)(Object(c.a)(r), "handleStockSelected", function (e) {
              var t = { types: "change,change_px", way: "change", rever: e };
              (r.fetchStockList(t),
                r.setState({
                  stockSort: { way: "change", up: 1 !== e },
                  stockSelected: e,
                }));
            }),
            Object(l.a)(Object(c.a)(r), "handleStockSort", function (e) {
              var t = {
                types: "change,change_px",
                way: e,
                rever:
                  e === r.state.stockSort.way
                    ? r.state.stockSort.up
                      ? 1
                      : 0
                    : 1,
              };
              (r.fetchStockList(t),
                r.setState({
                  stockSort: {
                    way: e,
                    up: e === r.state.stockSort.way && !r.state.stockSort.up,
                  },
                  stockSelected:
                    "change" === e
                      ? !1 === !r.state.stockSort.up
                        ? 1
                        : 0
                      : r.state.stockSelected,
                }));
            }),
            (r.state = {
              quote: {},
              rankBlockNav: 0,
              rankStockNav: 0,
              rankBlockSort: { type: "change", index: 0, up: !1 },
              rankStockSort: { type: "change", index: 0, up: !1 },
              plateNav: [
                { key: "industry", value: "\u884c\u4e1a\u677f\u5757" },
                { key: "concept", value: "\u6982\u5ff5\u677f\u5757" },
                { key: "area", value: "\u5730\u57df\u677f\u5757" },
              ],
              plateThead: [
                { key: "secu_name", value: "\u80a1\u7968\u540d\u79f0" },
                { key: "change", value: "\u6da8\u8dcc\u5e45", rever: 1 },
                {
                  key: "main_fund_diff",
                  value: "\u8d44\u91d1\u6d41\u5165",
                  rever: 1,
                },
              ],
              plateSelected: "industry",
              plateList: [],
              plateSort: { way: "change", up: !1 },
              stockNav: [
                { key: 1, value: "\u4e2a\u80a1\u6da8\u5e45\u699c" },
                { key: 0, value: "\u4e2a\u80a1\u8dcc\u5e45\u699c" },
              ],
              stockSelected: 1,
              stockList: [],
              stockSort: { way: "change", up: !1 },
            }),
            r
          );
        }
        return (
          Object(r.a)(a, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this;
                (clearInterval(this.quoteTimer),
                  clearInterval(this.quoteTimerSnd),
                  this.props.needQuote &&
                    (this.handleGetQuote(),
                    (this.quoteTimer = setInterval(function () {
                      e.handleGetQuote();
                    }, 3e4))),
                  this.props.rightQuote &&
                    (this.fetchHotPlateList({
                      type: "industry",
                      way: "change",
                      rever: 1,
                    }),
                    this.fetchStockList({
                      types: "change_px,change",
                      way: "change",
                      rever: 1,
                    }),
                    (this.quoteTimerSnd = setInterval(function () {
                      (e.fetchHotPlateList({
                        type: e.state.plateSelected,
                        way: e.state.plateSort.way,
                        rever: e.state.plateSort.up ? 0 : 1,
                      }),
                        e.fetchStockList({
                          types: "change,change_px",
                          way: e.state.stockSort.way,
                          rever: e.state.stockSort.up ? 0 : 1,
                        }));
                    }, 3e4))));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                (clearInterval(this.quoteTimer),
                  clearInterval(this.quoteTimerSnd));
              },
            },
            {
              key: "fetchHotPlateList",
              value: function (e) {
                var t = this;
                Object(d.request)({
                  url: "/web_quote/plate/hot_plate",
                  params: e,
                })
                  .then(function (e) {
                    e &&
                      e.data &&
                      200 === e.data.code &&
                      t.setState({ plateList: e.data.data || [] });
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              },
            },
            {
              key: "fetchStockList",
              value: function (e) {
                var t = this;
                Object(d.request)({
                  url: "/web_quote/web_stock/stock_list",
                  params: e,
                })
                  .then(function (e) {
                    e &&
                      e.data &&
                      200 === e.data.code &&
                      t.setState({
                        stockList: (e.data.data && e.data.data.data) || [],
                      });
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.state.quote,
                  a = [];
                return (
                  p.g.forEach(function (n, r) {
                    if (t[n]) {
                      var c = t[n].change_px
                          ? t[n].change_px >= 0
                            ? " c-de0422"
                            : t[n].change_px < 0
                              ? " c-52c2a3"
                              : " c-222"
                          : " c-222",
                        o = t[n].change_px
                          ? t[n].change_px >= 0
                            ? "quote-diff-up"
                            : t[n].change_px < 0
                              ? "quote-diff-down"
                              : ""
                          : "";
                      a.push(
                        m(
                          "div",
                          {
                            key: "".concat(t[n].secu_name, "-").concat(r),
                            className: ""
                              .concat(
                                e.props.topQuote
                                  ? 3 !== r
                                    ? "f-l m-r-30 f-s-13"
                                    : "f-l f-s-13"
                                  : "",
                                " ",
                              )
                              .concat(
                                e.props.rightQuote
                                  ? "p-l-20 p-r-20 f-s-13"
                                  : "",
                                " ",
                              )
                              .concat(
                                e.props.topQuote || e.props.rightQuote
                                  ? ""
                                  : "f-s-15",
                                " f-w-b b-c-e6e7ea clearfix quote-item",
                              ),
                          },
                          m(
                            "div",
                            {
                              className: "f-l "
                                .concat(
                                  e.props.rightQuote ? "m-r-5" : "m-r-10",
                                  " ",
                                )
                                .concat(
                                  e.props.topQuote || e.props.rightQuote
                                    ? "quote-name"
                                    : "quote-name-large",
                                ),
                            },
                            m(
                              "a",
                              {
                                href: "/ind?code=".concat(n),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "c-222",
                              },
                              t[n].secu_name ? t[n].secu_name : n,
                            ),
                          ),
                          m(
                            "a",
                            {
                              href: "/ind?code=".concat(n),
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                            m(
                              "div",
                              {
                                className: ""
                                  .concat(
                                    e.props.topQuote ? "quote-last-top" : "",
                                    " f-l ",
                                  )
                                  .concat(c, " quote-last"),
                              },
                              "number" === typeof t[n].last_px
                                ? t[n].last_px
                                  ? t[n].last_px.toFixed(2)
                                  : "0.00"
                                : "-.--",
                            ),
                          ),
                          e.props.rightQuote
                            ? null
                            : m(
                                "div",
                                {
                                  className: "f-l "
                                    .concat(
                                      e.props.topQuote ? "quote-last-top" : "",
                                      " ",
                                    )
                                    .concat(c),
                                },
                                t[n].change >= 0 ? "\u25b2" : "\u25bc",
                              ),
                          m(
                            "a",
                            {
                              href: "/ind?code=".concat(n),
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                            m(
                              "div",
                              {
                                className: "f-r t-a-c "
                                  .concat(c, " ")
                                  .concat(o, " bg-c-eff1f5 quote-diff"),
                              },
                              e.props.topQuote
                                ? "number" === typeof t[n].change
                                  ? Object(h.k)(t[n].change)
                                  : "-.--%"
                                : m(
                                    f.a.Fragment,
                                    null,
                                    m(
                                      "span",
                                      { className: "quote-last-top" },
                                      "number" === typeof t[n].change_px
                                        ? (t[n].change_px >= 0 ? "+" : "") +
                                            (t[n].change_px
                                              ? t[n].change_px.toFixed(2)
                                              : "0.00")
                                        : "-.--",
                                    ),
                                    "(",
                                    "number" === typeof t[n].change
                                      ? Object(h.k)(t[n].change)
                                      : "-.--%",
                                    ")",
                                  ),
                            ),
                          ),
                        ),
                      );
                    } else
                      a.push(
                        m(
                          "div",
                          {
                            key: "".concat(p.h[r]),
                            className: ""
                              .concat(
                                e.props.topQuote
                                  ? 3 !== r
                                    ? "f-l m-r-30"
                                    : "f-l"
                                  : "",
                                " ",
                              )
                              .concat(
                                e.props.rightQuote ? "p-l-20 p-r-20" : "",
                                " f-s-13 f-w-b c-222 b-c-e6e7ea clearfix quote-item",
                              ),
                          },
                          m(
                            "div",
                            {
                              className: "f-l "
                                .concat(
                                  e.props.rightQuote ? "m-r-5" : "m-r-10",
                                  " ",
                                )
                                .concat(
                                  e.props.topQuote || e.props.rightQuote
                                    ? "quote-name"
                                    : "quote-name-large",
                                ),
                            },
                            m(
                              "a",
                              {
                                href: "/ind?code=".concat(n),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "c-222",
                              },
                              p.h[r],
                            ),
                          ),
                          m(
                            "div",
                            {
                              className: "".concat(
                                e.props.topQuote ? "quote-last-top" : "",
                                " f-l quote-last",
                              ),
                            },
                            "-.--",
                          ),
                          !e.props.rightQuote &&
                            m(
                              "div",
                              {
                                className: "f-l ".concat(
                                  e.props.topQuote ? "quote-last-top" : "",
                                ),
                              },
                              "\u25b2",
                            ),
                          m(
                            "div",
                            { className: "f-r t-a-c quote-diff" },
                            e.props.topQuote
                              ? "-.--%"
                              : m(
                                  f.a.Fragment,
                                  null,
                                  m(
                                    "span",
                                    { className: "quote-last-top" },
                                    "-.--",
                                  ),
                                  "(-.--%)",
                                ),
                          ),
                        ),
                      );
                  }),
                  m(
                    "div",
                    {
                      className: this.props.className
                        ? this.props.className
                        : "",
                    },
                    !!this.props.needQuote &&
                      m(
                        "div",
                        {
                          className: "".concat(
                            (this.props.rightQuote, ""),
                            " clearfix quote-box",
                          ),
                        },
                        a,
                      ),
                    !!this.props.needPlate &&
                      m(
                        "div",
                        { className: "quote-box" },
                        m(
                          "div",
                          {
                            className:
                              "p-r b-l-w-1 b-l-s-s b-r-w-1 b-r-s-s b-c-e6e7ea right-toggle-nav-3-box",
                          },
                          m(
                            "div",
                            {
                              className:
                                "clearfix m-b-20 w-100p h-40 f-s-14 l-h-38p c-747474",
                            },
                            this.state.plateNav.map(function (t, a) {
                              return m(
                                "div",
                                {
                                  key: t.key,
                                  className: "f-l "
                                    .concat(
                                      0 === a ? "w-92" : "w-93",
                                      " t-a-c b-t-s-s c-p ",
                                    )
                                    .concat(
                                      t.key === e.state.plateSelected
                                        ? "f-w-b c-222 bg-c-fff b-t-w-2 b-t-c-222"
                                        : "bg-c-f9fafc b-b-w-1 b-t-w-1 b-b-s-s b-c-e6e7ea",
                                    ),
                                  onClick: function () {
                                    t.key !== e.state.plateSelected &&
                                      e.handlePlateSelected(t.key);
                                  },
                                },
                                t.value,
                              );
                            }),
                          ),
                        ),
                        m(
                          "div",
                          {
                            className:
                              "clearfix f-s-14 l-h-142857 c-8b8b8b rank-list-box",
                          },
                          m(
                            "span",
                            {
                              key: "secu_name",
                              className: "f-l rank-list-title-name",
                            },
                            "\u677f\u5757\u540d\u79f0",
                          ),
                          m(
                            "span",
                            {
                              key: "change",
                              className: "f-l c-p t-a-c rank-list-title-change",
                              onClick: function () {
                                return e.handlePlateSort("change");
                              },
                            },
                            "\u6da8\u8dcc\u5e45",
                            m("img", {
                              className: "rank-list-sort-icon ".concat(
                                this.state.plateSort.up
                                  ? "rank-list-sort-icon-sort"
                                  : "",
                              ),
                              src: "https://cdnjs.cls.cn/www/20200601/image/".concat(
                                "change" === this.state.plateSort.way
                                  ? "sort.png"
                                  : "sort-default.png",
                              ),
                              alt: "\u6392\u5e8f",
                            }),
                          ),
                          m(
                            "span",
                            {
                              key: "main_fund_diff",
                              className: "f-r c-p rank-list-title-diff",
                              onClick: function () {
                                return e.handlePlateSort("main_fund_diff");
                              },
                            },
                            "\u8d44\u91d1\u6d41\u5165",
                            m("img", {
                              className: "rank-list-sort-icon ".concat(
                                this.state.plateSort.up
                                  ? "rank-list-sort-icon-sort"
                                  : "",
                              ),
                              src: "https://cdnjs.cls.cn/www/20200601/image/".concat(
                                "main_fund_diff" === this.state.plateSort.way
                                  ? "sort.png"
                                  : "sort-default.png",
                              ),
                              alt: "\u6392\u5e8f",
                            }),
                          ),
                        ),
                        this.state.plateList.length > 0
                          ? m(
                              f.a.Fragment,
                              null,
                              this.state.plateList.map(function (e) {
                                return m(
                                  "div",
                                  {
                                    key: e.secu_code,
                                    className:
                                      "clearfix b-c-e6e7ea rank-item-box",
                                  },
                                  m(
                                    "a",
                                    {
                                      className:
                                        "f-l f-s-14 l-h-142858 c-222 rank-name",
                                      href: "/plate?code=".concat(e.secu_code),
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                    },
                                    e.secu_name ? e.secu_name : "--",
                                  ),
                                  m(
                                    "span",
                                    {
                                      className: "f-l f-s-14 f-w-b ".concat(
                                        Object(h.a)(e.change),
                                        " bg-c-eff1f5 rank-change",
                                      ),
                                    },
                                    e.change ? Object(h.k)(e.change) : "--",
                                  ),
                                  m(
                                    "span",
                                    {
                                      className:
                                        "f-r f-s-14 f-w-b l-h-142858 ".concat(
                                          Object(h.a)(e.main_fund_diff),
                                          " t-a-c rank-diff",
                                        ),
                                    },
                                    e.main_fund_diff
                                      ? Object(h.j)(
                                          !1,
                                          !1,
                                          !1,
                                          e.main_fund_diff,
                                        )
                                      : "--",
                                  ),
                                );
                              }),
                            )
                          : m(
                              f.a.Fragment,
                              null,
                              m(
                                "div",
                                {
                                  className:
                                    "clearfix b-c-e6e7ea rank-item-box",
                                },
                                m(
                                  "a",
                                  {
                                    className:
                                      "f-l f-s-14 l-h-142858 c-222 rank-name",
                                  },
                                  "--",
                                ),
                                m(
                                  "span",
                                  {
                                    className:
                                      "f-l f-s-14 f-w-b bg-c-eff1f5 rank-change",
                                  },
                                  "--",
                                ),
                                m(
                                  "span",
                                  {
                                    className:
                                      "f-r f-s-14 f-w-b l-h-142858 c-222 t-a-c rank-diff",
                                  },
                                  "--",
                                ),
                              ),
                            ),
                      ),
                    // !!this.props.needStock &&
                    //   m(
                    //     "div",
                    //     { className: "quote-box" },
                    //     m(
                    //       "div",
                    //       {
                    //         className:
                    //           "p-r b-l-w-1 b-l-s-s b-r-w-1 b-r-s-s b-c-e6e7ea right-toggle-nav-2-box",
                    //       },
                    //       m(
                    //         "div",
                    //         {
                    //           className:
                    //             "clearfix m-b-20 w-100p h-40 f-s-14 l-h-38p c-747474",
                    //         },
                    //         [
                    //           {
                    //             key: 1,
                    //             value: "\u4e2a\u80a1\u6da8\u5e45\u699c",
                    //           },
                    //           {
                    //             key: 0,
                    //             value: "\u4e2a\u80a1\u8dcc\u5e45\u699c",
                    //           },
                    //         ].map(function (t) {
                    //           return m(
                    //             "div",
                    //             {
                    //               key: t.key,
                    //               className:
                    //                 "f-l w-139 t-a-c b-t-s-s c-p ".concat(
                    //                   t.key === e.state.stockSelected
                    //                     ? "f-w-b c-222 bg-c-fff b-t-w-2 b-t-c-222"
                    //                     : "bg-c-f9fafc b-b-w-1 b-t-w-1 b-b-s-s b-c-e6e7ea",
                    //                 ),
                    //               onClick: function () {
                    //                 t.key !== e.state.stockSelected &&
                    //                   e.handleStockSelected(t.key);
                    //               },
                    //             },
                    //             t.value,
                    //           );
                    //         }),
                    //       ),
                    //     ),
                    //     m(
                    //       "div",
                    //       {
                    //         className:
                    //           "clearfix f-s-14 l-h-142857 c-8b8b8b rank-list-box",
                    //       },
                    //       m(
                    //         "span",
                    //         { className: "f-l rank-list-title-name" },
                    //         "\u80a1\u7968\u540d\u79f0",
                    //       ),
                    //       m(
                    //         "span",
                    //         {
                    //           className: "f-l c-p t-a-c rank-list-title-change",
                    //           onClick: function () {
                    //             return e.handleStockSort("change");
                    //           },
                    //         },
                    //         "\u6da8\u8dcc\u5e45",
                    //         m("img", {
                    //           className: "rank-list-sort-icon ".concat(
                    //             this.state.stockSort.up
                    //               ? "rank-list-sort-icon-sort"
                    //               : "",
                    //           ),
                    //           src: "https://cdnjs.cls.cn/www/20200601/image/".concat(
                    //             "change" === this.state.stockSort.way
                    //               ? "sort.png"
                    //               : "sort-default.png",
                    //           ),
                    //           alt: "\u6392\u5e8f",
                    //         }),
                    //       ),
                    //       m(
                    //         "span",
                    //         {
                    //           className: "f-r c-p rank-list-title-diff",
                    //           onClick: function () {
                    //             return e.handleStockSort("change_px");
                    //           },
                    //         },
                    //         "\u6da8\u8dcc\u4ef7",
                    //         m("img", {
                    //           className: "rank-list-sort-icon ".concat(
                    //             this.state.stockSort.up
                    //               ? "rank-list-sort-icon-sort"
                    //               : "",
                    //           ),
                    //           src: "https://cdnjs.cls.cn/www/20200601/image/".concat(
                    //             "change_px" === this.state.stockSort.way
                    //               ? "sort.png"
                    //               : "sort-default.png",
                    //           ),
                    //           alt: "\u6392\u5e8f",
                    //         }),
                    //       ),
                    //     ),
                    //     this.state.stockList.length > 0
                    //       ? m(
                    //           f.a.Fragment,
                    //           null,
                    //           this.state.stockList.map(function (e) {
                    //             return m(
                    //               "div",
                    //               {
                    //                 key: e.secu_code,
                    //                 className:
                    //                   "clearfix b-c-e6e7ea rank-item-box",
                    //               },
                    //               m(
                    //                 "a",
                    //                 {
                    //                   className:
                    //                     "f-l f-s-14 l-h-142858 c-222 rank-name",
                    //                   href: "/stock?code=".concat(e.secu_code),
                    //                   target: "_blank",
                    //                   rel: "noopener noreferrer",
                    //                 },
                    //                 e.secu_name ? e.secu_name : "--",
                    //               ),
                    //               m(
                    //                 "span",
                    //                 {
                    //                   className: "f-l f-s-14 f-w-b ".concat(
                    //                     Object(h.a)(e.change),
                    //                     " bg-c-eff1f5 rank-change",
                    //                   ),
                    //                 },
                    //                 e.change ? Object(h.k)(e.change) : "--",
                    //               ),
                    //               m(
                    //                 "span",
                    //                 {
                    //                   className:
                    //                     "f-r f-s-14 f-w-b l-h-142858 ".concat(
                    //                       Object(h.a)(e.change_px),
                    //                       " t-a-c rank-diff",
                    //                     ),
                    //                 },
                    //                 e.change_px ? e.change_px : "--",
                    //               ),
                    //             );
                    //           }),
                    //         )
                    //       : m(
                    //           f.a.Fragment,
                    //           null,
                    //           m(
                    //             "div",
                    //             {
                    //               className:
                    //                 "clearfix b-c-e6e7ea rank-item-box",
                    //             },
                    //             m(
                    //               "a",
                    //               {
                    //                 className:
                    //                   "f-l f-s-14 l-h-142858 c-222 rank-name",
                    //               },
                    //               "--",
                    //             ),
                    //             m(
                    //               "span",
                    //               {
                    //                 className:
                    //                   "f-l f-s-14 f-w-b bg-c-eff1f5 rank-change",
                    //               },
                    //               "--",
                    //             ),
                    //             m(
                    //               "span",
                    //               {
                    //                 className:
                    //                   "f-r f-s-14 f-w-b l-h-142858 c-222 t-a-c rank-diff",
                    //               },
                    //               "--",
                    //             ),
                    //           ),
                    //         ),
                    //   ),
                  )
                );
              },
            },
          ]),
          a
        );
      })(f.a.PureComponent);
      t.a = v;
    },
    "6ymC": function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/telegraph",
        function () {
          return a("rwbJ");
        },
      ]);
    },
    "CR+d": function (e, t, a) {
      "use strict";
      var n = a("q1tI"),
        r = a.n(n),
        c = a("bMwp"),
        o = r.a.createElement;
      t.a = function (e) {
        var t = Object(n.useState)({}),
          a = t[0],
          r = t[1];
        Object(n.useEffect)(function () {
          s();
        }, []);
        var s = function () {
            Object(c.request)({ url: "/v2/web/ad" })
              .then(function (e) {
                e && e.data && 0 === e.data.errno && r(e.data.data);
              })
              .catch(function (e) {
                console.log("handleGetAdMsg", e);
              });
          },
          i = function (e) {
            Object(c.request)({
              url: "/v1/ad/click/".concat(e),
              method: "POST",
            })
              .then(function () {})
              .catch(function () {});
          },
          l = "";
        if (
          a &&
          ("right_banner" === e.site || "bottom_banner" === e.site) &&
          Array.isArray(a[e.site]) &&
          a[e.site].length
        ) {
          var u = a[e.site][0];
          l = u.url
            ? o(
                "a",
                {
                  className: "d-b p-r w-100p",
                  href:
                    u.url.indexOf("article_id") >= 0 && u.url.split("=")[1]
                      ? "/detail/".concat(u.url.split("=")[1])
                      : u.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  onClick: function () {
                    return i(u.id);
                  },
                },
                o("img", {
                  className: "v-a-t w-100p",
                  src: u.images,
                  alt: u.title,
                }),
                !!u.adTag &&
                  o(
                    "span",
                    {
                      className:
                        "p-a r-5 b-5 z-i-5 p-r-2 p-l-2 c-999 b-w-1 f-s-10 b-s-s b-c-999 b-r-2",
                    },
                    u.adTag,
                  ),
              )
            : o(
                "div",
                {
                  className: "p-r",
                  onClick: function () {
                    return i(u.id);
                  },
                },
                o("img", {
                  className: "v-a-t w-100p",
                  src: u.images,
                  alt: u.title,
                }),
                !!u.adTag &&
                  o(
                    "span",
                    {
                      className:
                        "p-a r-5 b-5 z-i-5 p-r-2 p-l-2 c-999 b-w-1 f-s-10 b-s-s b-c-999 b-r-2",
                    },
                    u.adTag,
                  ),
              );
        }
        return l ? o("div", { className: "m-t-30 m-b-30 o-h" }, l) : null;
      };
    },
    EcDL: function (e, t, a) {
      "use strict";
      var n = a("q1tI"),
        r = a.n(n),
        c = (a("YFqc"), r.a.createElement);
      t.a = function (e) {
        return (
          e.status &&
          c(
            "div",
            { className: "noification-tip-box" },
            c("div", {
              className: "bg-c-000-78 noification-tip-box",
              onClick: e.close,
            }),
            c(
              "div",
              { className: "m-auto noification-tip" },
              c(
                "div",
                { className: "noification-close", onClick: e.close },
                c("img", {
                  src: "https://cdnjs.cls.cn/www/20180929/images/noification-close.png",
                  alt: "close",
                }),
              ),
              c(
                "h1",
                { className: "noification-title-1" },
                "\u684c\u9762\u5f39\u7a97\u901a\u77e5\u7684\u8bbe\u7f6e\u6559\u7a0b",
              ),
              c(
                "div",
                null,
                "\u901a\u8fc7\u6253\u5f00\u684c\u9762\u901a\u77e5\uff0c\u7f51\u7ad9\u53ef\u4ee5\u5728\u684c\u9762\u5f39\u51fa\u901a\u77e5\u7a97\u53e3\uff0c\u65e0\u8bba\u662f\u5426\u6d4f\u89c8\u5f53\u524d\u7f51\u9875\uff0c\u751a\u81f3\u6700\u5c0f\u5316\u4e86\u6d4f\u89c8\u5668\uff0c\u901a\u77e5\u5747\u53ef\u5230\u8fbe\u684c\u9762\u3002",
                c("br", null),
                "\u5982\u679c\u60a8\u5df2\u7ecf\u5f00\u542f\uff0c\u4ecd\u65e0\u6cd5\u63a5\u6536\u5230\u684c\u9762\u901a\u77e5\uff0c\u8bf7\u81ea\u67e5\u4ee5\u4e0b\u8bbe\u7f6e\u3002",
              ),
              c(
                "h2",
                { className: "noification-title-2" },
                "\u4e00\u3001\u6d4f\u89c8\u5668\u9002\u914d",
              ),
              c(
                "div",
                null,
                "1\u3001\u684c\u9762\u5f39\u7a97\u901a\u77e5\u529f\u80fd\uff0c",
                c(
                  "span",
                  { className: "c-de0422" },
                  "\u6682\u4e0d\u652f\u6301IE\u6d4f\u89c8\u5668\u4f7f\u7528\u3002",
                ),
                c("br", null),
                "\u6240\u4ee5\u8bf7\u4f7f\u7528\u652f\u6301HTML5\u6280\u672f\u7684\u6d4f\u89c8\u5668\u63a5\u6536\u684c\u9762\u901a\u77e5\u3002\u5efa\u8bae\u4e0b\u8f7dGoogle Chrome\u3001360\u6781\u901f\u3001\u641c\u72d7\u53cc\u6838\u3001\u9068\u6e38\u53cc\u6838\u7b49\u652f\u6301HTML5\u6280\u672f\u7684\u6d4f\u89c8\u5668\u914d\u5408\u4f7f\u7528\u3002",
                c("br", null),
                c(
                  "span",
                  { className: "c-de0422" },
                  "\u5728\u4f7f\u7528\u56fd\u4ea7\u53cc\u6838\u6d4f\u89c8\u5668\u7684\u65f6\u5019\u9700\u8981\u6ce8\u610f\u662f\u5426\u5df2\u5f00\u542f\u201c\u6781\u901f\u6a21\u5f0f\u201d\uff0c\u624d\u53ef\u542f\u7528\u684c\u9762\u63d0\u9192\u529f\u80fd\u3002",
                ),
              ),
              c(
                "div",
                { className: "noification-note c-999" },
                "\u90e8\u5206\u6d4f\u89c8\u5668\u7684\u65b0\u7248\u53ef\u80fd\u4e0d\u652f\u6301\u684c\u9762\u5f39\u51fa\u529f\u80fd\u3002",
              ),
              c(
                "h2",
                { className: "noification-title-2" },
                "\u4e8c\u3001\u684c\u9762\u901a\u77e5\u6388\u6743",
              ),
              c(
                "div",
                null,
                c(
                  "span",
                  { className: "c-de0422" },
                  "\u5982\u679c\u60a8\u65e0\u6cd5\u6536\u5230\u5f39\u7a97\uff0c\u9700\u8981\u786e\u8ba4\u60a8\u4f7f\u7528\u7684\u6d4f\u89c8\u5668\u8bbe\u7f6e\u662f\u5426\u5df2\u7981\u6b62\u663e\u793a\u684c\u9762\u901a\u77e5\u3002",
                ),
                c("br", null),
                "\u7b2c\u4e00\u6b21\u6253\u5f00\u6d4f\u89c8\u5668\u65f6\uff0c\u6d4f\u89c8\u5668\u4f1a\u63d0\u793a\u201c\u5141\u8bb8www.cls.cn\u663e\u793a\u684c\u9762\u901a\u77e5\u5417\uff1f",
                c("br", null),
                "\u8bf7\u9009\u62e9\u201c\u5141\u8bb8\u201d\uff0c\u5982\u679c\u60a8\u9009\u62e9\u4e86\u201c\u7981\u6b62\u201d\u5219\u65e0\u6cd5\u63a5\u6536\u5230\u684c\u9762\u5f39\u7a97\u901a\u77e5\u3002",
              ),
              c(
                "div",
                { className: "noification-image-box" },
                c("img", {
                  src: "https://cdnjs.cls.cn/www/20180929/images/noification-01.png",
                  alt: "noification",
                }),
              ),
              c(
                "h3",
                { className: "noification-title-3" },
                "\u6d4f\u89c8\u5668\u6388\u6743\u5141\u8bb8\u901a\u77e5\u663e\u793a\u6559\u7a0b\u5982\u4e0b",
              ),
              c(
                "div",
                null,
                "1\u3001\u82f9\u679cmac\u8bbe\u5907\u7684Chrome\u6d4f\u89c8\u5668",
                c("br", null),
                "\u6253\u5f00Chrome\u6d4f\u89c8\u5668 \u504f\u597d\u8bbe\u7f6e--\u9ad8\u7ea7--\u5185\u5bb9\u8bbe\u7f6e--\u901a\u77e5\uff0c\u5728\u901a\u77e5\u8bbe\u7f6e\u4e2d\u67e5\u770b\u662f\u5426\u5df2\u7981\u6b62\u8d22\u8054\u793e\u7f51\u7ad9\u663e\u793a\u901a\u77e5\uff0c\u5982\u679c\u5df2\u7981\u6b62\u8bf7\u5c06\u8d22\u8054\u793ewww.cls.cn\u6539\u4e3a\u5141\u8bb8\uff0c\u5373\u53ef\u5b8c\u6210\u6d4f\u89c8\u5668\u7684\u901a\u77e5\u6388\u6743\u8bbe\u7f6e\u3002",
              ),
              c(
                "div",
                { className: "noification-image-box" },
                c("img", {
                  src: "https://cdnjs.cls.cn/www/20180929/images/noification-02.jpeg",
                  alt: "noification",
                }),
              ),
              c(
                "div",
                { className: "c-999" },
                "\u4e0a\u56fe\u4e3a\u82f9\u679cmac\u8bbe\u7f6e\u7684Chrome\u6d4f\u89c8\u5668 [\u901a\u77e5] \u8bbe\u7f6e\u9875\u9762\u622a\u56fe",
              ),
              c(
                "div",
                null,
                "2\u3001windows7\u8bbe\u5907\u7684\u641c\u72d7\u6d4f\u89c8\u5668",
                c("br", null),
                "\u6253\u5f00\u641c\u72d7\u6d4f\u89c8\u5668 \u8bbe\u7f6e--\u9009\u9879--\u9ad8\u7ea7--\u901a\u77e5\uff0c\u5982\u679c\u5df2\u7981\u6b62\u6240\u6709\u901a\u77e5\u6216\u8005\u672a\u5c06\u8d22\u8054\u793e\u7f51\u5740",
                c("br", null),
                "www.cls.cn\u8bbe\u4e3a\u4f8b\u5916\uff0c\u53ef\u9009\u62e9\u5141\u8bb8\u6240\u6709\u7f51\u5740\u663e\u793a\u901a\u77e5\u3002\u4fee\u6539\u540e\u70b9\u51fb\u5b8c\u6210\uff0c\u5373\u53ef\u5b8c\u6210\u6d4f\u89c8\u5668\u7684\u901a\u77e5\u6388\u6743\u8bbe\u7f6e\u3002",
              ),
              c(
                "div",
                { className: "noification-image-box" },
                c("img", {
                  src: "https://cdnjs.cls.cn/www/20180929/images/noification-03.jpg",
                  alt: "noification",
                }),
              ),
              c(
                "div",
                { className: "c-999" },
                "\u4e0a\u56fe\u4e3awindows7\u8bbe\u7f6e\u7684\u641c\u72d7\u6d4f\u89c8\u5668 [\u5185\u5bb9\u8bbe\u7f6e] \u9875\u9762\u622a\u56fe",
              ),
              c(
                "h2",
                { className: "noification-title-2" },
                "\u4e09\u3001\u684c\u9762\u901a\u77e5\u5185\u5bb9",
              ),
              c(
                "div",
                { className: "m-b-30" },
                "1\u3001\u8d22\u8054\u793e\u7535\u62a5",
                c("br", null),
                "\u8d22\u8054\u793e\u7535\u62a5\u7684\u6bcf\u5929\u6d88\u606f\u91cf\u8f83\u5927\uff0c\u6211\u4eec\u5c06\u6311\u9009\u51fa\u6700\u6709\u5f71\u54cd\u529b\u548c\u91cd\u78c5\u8d44\u8baf\u7684\u7535\u62a5\u4e3a\u60a8\u63a8\u9001\uff1b",
                c("br", null),
                "2\u3001\u8d22\u8054\u793eVIP",
                c("br", null),
                "\u8d22\u8054\u793eVIP\u5185\u5bb9\u4ec5\u63a8\u9001\u7ed9\u5df2\u8d2d\u4e70\u7684\u7528\u6237\uff0c\u5982\u679c\u60a8\u5df2\u6253\u5f00VIP\u9875\u9762\u7684\u684c\u9762\u63a8\u9001\uff0c\u4f46\u65e0\u6cd5\u6536\u5230\u8d22\u8054\u793eVIP\u7684\u6587\u7ae0\uff0c",
                c(
                  "span",
                  { className: "c-de0422" },
                  "\u9996\u5148\u786e\u8ba4\u60a8\u662f\u5426\u5df2\u7ecf\u767b\u5f55\u8d22\u8054\u793e\uff0c\u5e76\u4e14\u662f\u5426\u5df2\u8d2d\u4e70\u8d22\u8054\u793eVIP\u680f\u76ee\u3002",
                ),
              ),
              c(
                "div",
                { className: "noification-download-box" },
                c(
                  "h3",
                  { className: "noification-title-3" },
                  "\u4e0b\u8f7d\u8d22\u8054\u793eAPP",
                ),
                c(
                  "div",
                  null,
                  "\u968f\u65f6\u968f\u5730\u63a5\u6536\u63a8\u9001\uff0c\u60a8\u638c\u4e2d\u7684\u8d22\u7ecf\u4fe1\u606f\u670d\u52a1\u5546\u3002",
                ),
                c(
                  "div",
                  { className: "noification-download-qr" },
                  c("img", {
                    src: "https://cdnjs.cls.cn/www/20180929/images/download-qr.png",
                    alt: "download",
                  }),
                ),
                c(
                  "div",
                  null,
                  "\u626b\u4e00\u626b\u4e0b\u8f7d\u8d22\u8054\u793eapp",
                ),
              ),
            ),
          )
        );
      };
    },
    YFqc: function (e, t, a) {
      e.exports = a("cTJO");
    },
    cTJO: function (e, t, a) {
      "use strict";
      var n = a("lwsE"),
        r = a("W8MJ"),
        c = a("7W2i"),
        o = a("a1gu"),
        s = a("Nsbk");
      function i(e) {
        var t = (function () {
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
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            n = s(e);
          if (t) {
            var r = s(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return o(this, a);
        };
      }
      var l = a("TqRt"),
        u = a("284h");
      ((t.__esModule = !0), (t.default = void 0));
      var f,
        p = u(a("q1tI")),
        h = a("QmWs"),
        d = a("g/15"),
        m = l(a("nOHt"));
      function g(e) {
        return e && "object" === typeof e ? (0, d.formatWithValidation)(e) : e;
      }
      var v = new Map(),
        b = window.IntersectionObserver,
        y = {};
      function w() {
        return (
          f ||
          (b
            ? (f = new b(
                function (e) {
                  e.forEach(function (e) {
                    if (v.has(e.target)) {
                      var t = v.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (f.unobserve(e.target), v.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" },
              ))
            : void 0)
        );
      }
      var k = (function (e) {
        c(a, e);
        var t = i(a);
        function a(e) {
          var r;
          return (
            n(this, a),
            ((r = t.call(this, e)).p = void 0),
            (r.cleanUpListeners = function () {}),
            (r.formatUrls = (function (e) {
              var t = null,
                a = null,
                n = null;
              return function (r, c) {
                if (n && r === t && c === a) return n;
                var o = e(r, c);
                return ((t = r), (a = c), (n = o), o);
              };
            })(function (e, t) {
              return { href: g(e), as: t ? g(t) : t };
            })),
            (r.linkClicked = function (e) {
              var t = e.currentTarget,
                a = t.nodeName,
                n = t.target;
              if (
                "A" !== a ||
                !(
                  (n && "_self" !== n) ||
                  e.metaKey ||
                  e.ctrlKey ||
                  e.shiftKey ||
                  (e.nativeEvent && 2 === e.nativeEvent.which)
                )
              ) {
                var c = r.formatUrls(r.props.href, r.props.as),
                  o = c.href,
                  s = c.as;
                if (
                  (function (e) {
                    var t = (0, h.parse)(e, !1, !0),
                      a = (0, h.parse)((0, d.getLocationOrigin)(), !1, !0);
                    return (
                      !t.host ||
                      (t.protocol === a.protocol && t.host === a.host)
                    );
                  })(o)
                ) {
                  var i = window.location.pathname;
                  ((o = (0, h.resolve)(i, o)),
                    (s = s ? (0, h.resolve)(i, s) : o),
                    e.preventDefault());
                  var l = r.props.scroll;
                  (null == l && (l = s.indexOf("#") < 0),
                    m.default[r.props.replace ? "replace" : "push"](o, s, {
                      shallow: r.props.shallow,
                    }).then(function (e) {
                      e && l && (window.scrollTo(0, 0), document.body.focus());
                    }));
                }
              }
            }),
            (r.p = !1 !== e.prefetch),
            r
          );
        }
        return (
          r(a, [
            {
              key: "componentWillUnmount",
              value: function () {
                this.cleanUpListeners();
              },
            },
            {
              key: "getPaths",
              value: function () {
                var e = window.location.pathname,
                  t = this.formatUrls(this.props.href, this.props.as),
                  a = t.href,
                  n = t.as,
                  r = (0, h.resolve)(e, a);
                return [r, n ? (0, h.resolve)(e, n) : r];
              },
            },
            {
              key: "handleRef",
              value: function (e) {
                var t = this;
                this.p &&
                  b &&
                  e &&
                  e.tagName &&
                  (this.cleanUpListeners(),
                  y[this.getPaths().join("%")] ||
                    (this.cleanUpListeners = (function (e, t) {
                      var a = w();
                      return a
                        ? (a.observe(e),
                          v.set(e, t),
                          function () {
                            try {
                              a.unobserve(e);
                            } catch (t) {
                              console.error(t);
                            }
                            v.delete(e);
                          })
                        : function () {};
                    })(e, function () {
                      t.prefetch();
                    })));
              },
            },
            {
              key: "prefetch",
              value: function (e) {
                if (this.p) {
                  var t = this.getPaths();
                  (m.default.prefetch(t[0], t[1], e).catch(function (e) {
                    0;
                  }),
                    (y[t.join("%")] = !0));
                }
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props.children,
                  a = this.formatUrls(this.props.href, this.props.as),
                  n = a.href,
                  r = a.as;
                "string" === typeof t &&
                  (t = p.default.createElement("a", null, t));
                var c = p.Children.only(t),
                  o = {
                    ref: function (t) {
                      (e.handleRef(t),
                        c &&
                          "object" === typeof c &&
                          c.ref &&
                          ("function" === typeof c.ref
                            ? c.ref(t)
                            : "object" === typeof c.ref &&
                              (c.ref.current = t)));
                    },
                    onMouseEnter: function (t) {
                      (c.props &&
                        "function" === typeof c.props.onMouseEnter &&
                        c.props.onMouseEnter(t),
                        e.prefetch({ priority: !0 }));
                    },
                    onClick: function (t) {
                      (c.props &&
                        "function" === typeof c.props.onClick &&
                        c.props.onClick(t),
                        t.defaultPrevented || e.linkClicked(t));
                    },
                  };
                return (
                  (!this.props.passHref &&
                    ("a" !== c.type || "href" in c.props)) ||
                    (o.href = r || n),
                  p.default.cloneElement(c, o)
                );
              },
            },
          ]),
          a
        );
      })(p.Component);
      t.default = k;
    },
    rwbJ: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        r = a.n(n),
        c = a("/MKj"),
        o = a("8Kt/"),
        s = a.n(o),
        i = a("a6RD"),
        l = a.n(i),
        u = a("wd/R"),
        f = a.n(u),
        p = a("eJyV"),
        h = a("2T0q"),
        d = a("p4N2"),
        m = a("CR+d"),
        g = a("EcDL"),
        v = a("KQm4"),
        b = a("1OyB"),
        y = a("vuIU"),
        w = a("Ji7U"),
        k = a("md7G"),
        N = a("foSv"),
        S = a("EVdn"),
        L = a.n(S),
        j = a("9ONQ"),
        O = a("hKvw"),
        x = r.a.createElement;
      function _(e, t) {
        var a =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!a) {
          if (
            Array.isArray(e) ||
            (a = (function (e, t) {
              if (!e) return;
              if ("string" === typeof e) return T(e, t);
              var a = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === a && e.constructor && (a = e.constructor.name);
              if ("Map" === a || "Set" === a) return Array.from(e);
              if (
                "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              )
                return T(e, t);
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            a && (e = a);
            var n = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var c,
          o = !0,
          s = !1;
        return {
          s: function () {
            a = a.call(e);
          },
          n: function () {
            var e = a.next();
            return ((o = e.done), e);
          },
          e: function (e) {
            ((s = !0), (c = e));
          },
          f: function () {
            try {
              o || null == a.return || a.return();
            } finally {
              if (s) throw c;
            }
          },
        };
      }
      function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      function E(e) {
        var t = (function () {
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
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            n = Object(N.a)(e);
          if (t) {
            var r = Object(N.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(k.a)(this, a);
        };
      }
      var q = new j.a(),
        M = (function (e) {
          Object(w.a)(a, e);
          var t = E(a);
          function a(e) {
            var n;
            return (
              Object(b.a)(this, a),
              ((n = t.call(this, e)).state = {
                audioUrl: [],
                audioSwitch: !0,
                canplay: !0,
                error: !1,
              }),
              n
            );
          }
          return (
            Object(y.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    t = this.audioRef;
                  L()(document).on("click", function () {
                    ((t.volume = 0), t.play());
                    var a = t.duration;
                    (isNaN(a) && (a = 1702.958),
                      L()(t).on("ended", function () {
                        ((t.volume = 0.5),
                          (t.muted = !1),
                          e.setState({ canplay: !0, error: !1 }));
                      }),
                      L()(document).off());
                  });
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  if (this.state.canplay) {
                    var t = q.get("hasTelegraphRemind"),
                      a = q.get("hasTelegraphSound"),
                      n = this.props.hasTelegraphRemind,
                      r = e.hasTelegraphRemind;
                    if ("on" === n && "on" === t && e.articleList.length)
                      if ("on" === r) {
                        var c,
                          o = [],
                          s = _(e.articleList);
                        try {
                          for (s.s(); !(c = s.n()).done; ) {
                            var i = c.value;
                            (Array.isArray(i.audio_url) &&
                              o.push.apply(
                                o,
                                Object(v.a)(i.audio_url.reverse()),
                              ),
                              "on" === a &&
                                i.audio_url &&
                                i.audio_url.length > 0 &&
                                i.audio_url[0] !== this.state.audioUrl[0] &&
                                o.push(
                                  "https://cdnjs.cls.cn/www/20180717/file/remind.mp3",
                                ));
                          }
                        } catch (u) {
                          s.e(u);
                        } finally {
                          s.f();
                        }
                        var l = Object(v.a)(this.state.audioUrl);
                        this.setState({ audioUrl: o.concat(l) });
                      } else this.setState({ audioUrl: [] });
                    ("off" === n &&
                      "on" === a &&
                      e.articleList.length &&
                      this.setState({
                        audioUrl: [
                          "https://cdnjs.cls.cn/www/20180717/file/remind.mp3",
                        ],
                      }),
                      r !== n && "on" === r
                        ? this.setState({ audioSwitch: !0 })
                        : r !== n &&
                          "off" === r &&
                          this.setState({ audioUrl: [] }));
                  } else
                    e.articleList.length &&
                      this.props.handleClearTelegraphVoiceArticlesList();
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function (e, t) {
                  return (
                    !(
                      "on" !== this.props.hasTelegraphRemind ||
                      "off" !== e.hasTelegraphRemind ||
                      !this.state.canplay
                    ) ||
                    !!this.state.error ||
                    (this.props.hasTelegraphRemind === e.hasTelegraphRemind &&
                      e.articleList.length > 0 &&
                      this.state.canplay &&
                      0 === this.state.audioUrl.length &&
                      t.audioUrl.length > 0)
                  );
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var t = this;
                  if (this.state.canplay) {
                    var a, n;
                    if (
                      ((a = q.get("hasTelegraphRemind")),
                      (n = q.get("hasTelegraphSound")),
                      this.state.audioUrl && this.state.audioUrl.length > 0)
                    ) {
                      if (
                        "off" === this.props.hasTelegraphRemind &&
                        "on" === n
                      ) {
                        var r = this.audioRef;
                        ((r.src =
                          "https://cdnjs.cls.cn/www/20180717/file/remind.mp3"),
                          r.play(),
                          L()(r)
                            .off()
                            .on({
                              ended: function () {
                                (t.setState({ audioUrl: [], error: !1 }),
                                  t.props.handleClearTelegraphVoiceArticlesList());
                              },
                              error: function () {
                                (t.setState({ error: !0, audioUrl: [] }),
                                  t.props.handleClearTelegraphVoiceArticlesList());
                              },
                            }));
                      } else if (
                        "on" === this.props.hasTelegraphRemind &&
                        "on" === a
                      ) {
                        var c = this.audioRef;
                        (L()(c).off(),
                          (function e(a) {
                            if (t.state.audioUrl.length > 0) {
                              var n =
                                t.state.audioUrl[t.state.audioUrl.length - 1];
                              (c.src !== n && (c.src = n),
                                (c.muted = !1),
                                c.play(),
                                "first" === a &&
                                  L()(c)
                                    .off()
                                    .on({
                                      ended: function () {
                                        (t.state.audioUrl.pop(),
                                          e(),
                                          t.setState({ error: !1 }));
                                      },
                                      error: function () {
                                        t.state.audioUrl.length > 0
                                          ? (t.state.audioUrl.pop(),
                                            e(),
                                            t.setState({ error: !1 }))
                                          : (t.setState({
                                              error: !0,
                                              audioUrl: [],
                                            }),
                                            t.props.handleClearTelegraphVoiceArticlesList());
                                      },
                                    }),
                                t.state.audioUrl.length ||
                                  (L()(c).off("ended", e),
                                  t.setState({ audioUrl: [] }),
                                  t.props.handleClearTelegraphVoiceArticlesList()));
                            } else
                              (t.setState({ audioUrl: [] }),
                                t.props.handleClearTelegraphVoiceArticlesList());
                          })("first"));
                      }
                    } else if (
                      "off" === this.props.hasTelegraphRemind &&
                      this.state.audioSwitch
                    ) {
                      var o = this.audioRef;
                      (o.pause(),
                        L()(o).off(),
                        this.setState({ audioUrl: [], audioSwitch: !1 }),
                        this.props.handleClearTelegraphVoiceArticlesList());
                    }
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  var e = this.audioRef;
                  (e.pause(),
                    L()(e).off(),
                    this.setState({
                      audioUrl: [],
                      audioSwitch: !0,
                      canplay: !1,
                      error: !1,
                    }),
                    this.props.handleClearTelegraphVoiceArticlesList());
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return x(
                    "div",
                    { style: { width: 0, height: 0, visibility: "hidden" } },
                    x(
                      "audio",
                      {
                        key: "audio",
                        preload: "true",
                        controls: !0,
                        ref: function (t) {
                          return (e.audioRef = t);
                        },
                        src: "https://cdnjs.cls.cn/www/20180717/file/remind.mp3",
                      },
                      x("track", { key: "captions", kind: "captions" }),
                    ),
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        C = Object(c.b)(
          function (e) {
            return {
              hasTelegraphRemind: e.telegraphVoice.hasTelegraphRemind,
              hasTelegraphSound: e.telegraphVoice.hasTelegraphSound,
              articleList: e.telegraphVoice.articleList,
            };
          },
          function (e) {
            return {
              handleClearTelegraphVoiceArticlesList: function () {
                e(Object(O.x)());
              },
            };
          },
        )(M),
        R = a("+Za4"),
        P = a("WHPX"),
        U = a("mR6P"),
        A = a.n(U),
        I = a("FaKB"),
        Q = a("bMwp"),
        F = r.a.createElement,
        G = Object(n.forwardRef)(function (e, t) {
          var a = Object(n.useRef)(
              f()().startOf("day").add(1, "day").valueOf(),
            ),
            c = Object(n.useState)(""),
            o = c[0],
            i = c[1],
            l = Object(n.useState)(!1),
            u = l[0],
            p = l[1],
            h = Object(n.useState)(""),
            d = h[0],
            m = h[1],
            g = Object(n.useState)(!1),
            v = g[0],
            b = g[1],
            y = Object(n.useState)(0),
            w = y[0],
            k = y[1],
            N = Object(n.useState)([]),
            S = N[0],
            L = N[1];
          (Object(n.useEffect)(
            function () {
              (u && 0 === w && (o || d) && j(), !u && 0 === w && d && j());
            },
            [d, u, w],
          ),
            Object(n.useEffect)(
              function () {
                k(0);
              },
              [e.nav],
            ),
            Object(n.useImperativeHandle)(t, function () {
              return { getData: j, resetSearch: x };
            }));
          var j = function () {
              if (o || f.a.isMoment(d)) {
                var t = {
                  lastTime:
                    w ||
                    (f.a.isMoment(d) ? d.endOf("day").unix() : f()().unix()),
                  keyword: o || "",
                  category: e.nav || "",
                };
                Object(Q.request)({ url: "/api/csw", method: "post", data: t })
                  .then(function (t) {
                    if (t && 200 === t.status) {
                      if (t.data && Array.isArray(t.data.list)) {
                        var a = S;
                        ((a = 0 === w ? t.data.list : a.concat(t.data.list)),
                          t.data.list.length >= 10
                            ? (L(a),
                              e.setSearchTelegraphList(
                                !0,
                                a,
                                { errno: 200, errorMessage: "" },
                                t.data.total,
                              ))
                            : e.setSearchTelegraphList(
                                !0,
                                a,
                                {
                                  errno: 600,
                                  errorMessage:
                                    "\u5df2\u7ecf\u52a0\u8f7d\u5230\u6700\u540e\u4e86",
                                },
                                t.data.total,
                              ));
                      } else
                        e.setSearchTelegraphList(!0, 0 === w ? [] : null, {
                          errno: 0 !== t.data.errno ? t.data.errno : 600,
                          errorMessage: t.data.msg
                            ? t.data.msg
                            : "\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01\uff01\uff01",
                        });
                      k(
                        Array.isArray(t.data.list) && t.data.list.length
                          ? t.data.list[t.data.list.length - 1].ctime
                          : parseInt(new Date().getTime() / 1e3),
                      );
                    } else
                      e.setSearchTelegraphList(!0, 0 === w ? [] : null, {
                        errno: t.status,
                        errorMessage:
                          "\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01\uff01\uff01",
                      });
                  })
                  .catch(function (t) {
                    (e.setSearchTelegraphList(!0, 0 === w ? [] : null, {
                      errno: 500,
                      errorMessage:
                        "\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u70b9\u51fb\u91cd\u8bd5\uff01\uff01\uff01",
                    }),
                      console.log(t));
                  });
              } else (L([]), k(0));
            },
            O = function (e) {
              e || o ? (m(e || ""), b(!1), k(0)) : x();
            },
            x = function () {
              (i(""),
                p(!1),
                m(""),
                b(!1),
                k(0),
                L([]),
                e.setSearchTelegraphList(!1, [], {
                  errno: 200,
                  errorMessage: "",
                }));
            };
          return F(
            r.a.Fragment,
            null,
            F(
              s.a,
              null,
              F("link", {
                rel: "stylesheet",
                href: "https://cdnjs.cls.cn/www/20200601/css/rc-calendar.css",
              }),
            ),
            F(
              "div",
              { className: "clearfix f-r" },
              F(
                "div",
                { className: "clearfix f-l p-r m-t-6 m-r-20" },
                F(
                  "div",
                  {
                    className:
                      "clearfix f-l d-f f-s-c f-s-13 l-h-1389 c-222 c-p telegraph-querydate",
                    onClick: function () {
                      b(!v);
                    },
                  },
                  F(
                    "div",
                    { className: "f-l d-f f-c-c m-r-5 w-18" },
                    F(
                      "svg",
                      {
                        width: "14",
                        height: "15",
                        viewBox: "0 0 14 15",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      F("path", {
                        className: "telegraph-querydate-icon",
                        fill: "#222",
                        d: "M1.375,0.8125 L12.625,0.8125 C13.2463203,0.8125 13.75,1.31617966 13.75,1.9375 L13.75,13.1875 C13.75,13.8088203 13.2463203,14.3125 12.625,14.3125 L1.375,14.3125 C0.753679656,14.3125 0.25,13.8088203 0.25,13.1875 L0.25,1.9375 C0.25,1.31617966 0.753679656,0.8125 1.375,0.8125 Z",
                      }),
                      F("path", {
                        fill: "#fff",
                        d: "M1.7125,5.3125 L12.2875,5.3125 C12.4738961,5.3125 12.625,5.4636039 12.625,5.65 L12.625,12.85 C12.625,13.0363961 12.4738961,13.1875 12.2875,13.1875 L1.7125,13.1875 C1.5261039,13.1875 1.375,13.0363961 1.375,12.85 L1.375,5.65 C1.375,5.4636039 1.5261039,5.3125 1.7125,5.3125 Z",
                      }),
                      F("path", {
                        className: "telegraph-querydate-icon",
                        fill: "#222",
                        d: "M2.7888031,6.81762695 L4.4763031,6.81762695 L4.4763031,8.50512695 L2.7888031,8.50512695 L2.7888031,6.81762695 Z M2.7888031,10.1926269 L4.4763031,10.1926269 L4.4763031,11.8801269 L2.7888031,11.8801269 L2.7888031,10.1926269 Z M6.1638031,6.81762695 L7.8513031,6.81762695 L7.8513031,8.50512695 L6.1638031,8.50512695 L6.1638031,6.81762695 Z M6.1638031,10.1926269 L7.8513031,10.1926269 L7.8513031,11.8801269 L6.1638031,11.8801269 L6.1638031,10.1926269 Z M9.5388031,6.81762695 L11.2263031,6.81762695 L11.2263031,8.50512695 L9.5388031,8.50512695 L9.5388031,6.81762695 Z M9.5388031,10.1926269 L11.2263031,10.1926269 L11.2263031,11.8801269 L9.5388031,11.8801269 L9.5388031,10.1926269 Z",
                      }),
                    ),
                  ),
                  F(
                    "div",
                    { className: "f-l telegraph-querydate-text" },
                    f.a.isMoment(d)
                      ? d.format("YYYY\u5e74MM\u6708DD\u65e5")
                      : "\u65e5\u671f",
                  ),
                ),
                f.a.isMoment(d) &&
                  F(
                    "div",
                    {
                      className: "f-l m-l-5 w-18 c-p",
                      onClick: function () {
                        return O();
                      },
                    },
                    F("img", {
                      className: "v-a-t",
                      src: "https://cdnjs.cls.cn/www/20241105/images/telegraph-date-close.png",
                      alt: "\u5173\u95ed",
                    }),
                  ),
                v &&
                  F(P.a, {
                    className: "p-a t-30 r-0 z-i-5",
                    showDateInput: !1,
                    showOk: !1,
                    onSelect: function (e) {
                      return O(e);
                    },
                    locale: A.a,
                    disabledDate: function (e) {
                      return !!f.a.isMoment(e) && !(e.valueOf() < a.current);
                    },
                  }),
              ),
              F(
                "div",
                {
                  className:
                    "clearfix f-l w-191 h-30 bg-c-f5f5f5 b-w-1 b-s-s b-c-dbd9d9 b-r-15",
                },
                F("input", {
                  className:
                    "clearfix f-l m-t-6 m-l-13 p-t-0 p-r-0 p-b-0 p-l-0 w-135 f-s-13 l-h-1389 c-222 bg-c-t",
                  placeholder:
                    "\u8bf7\u8f93\u5165\u8981\u641c\u7d22\u7684\u7535\u62a5",
                  value: o,
                  onKeyDown: function (e) {
                    13 === e.keyCode && (p(!0), k(0));
                  },
                  onChange: function (e) {
                    i(e.target.value);
                  },
                }),
                F("div", {
                  className:
                    "f-r p-r p-t-7 p-r-13 p-b-5 p-l-13 f-s-13 l-h-1389 c-999 c-p iconfont iconsearch",
                  onClick: function () {
                    o && Object(I.k)(o) && (p(!0), k(0));
                  },
                }),
              ),
              u &&
                F(
                  "div",
                  {
                    className: "f-l m-t-7 m-l-10 f-s-13 l-h-1389 c-999 c-p",
                    onClick: function () {
                      d ? (i(""), p(!1), k(0)) : x();
                    },
                  },
                  "\u53d6\u6d88\u641c\u7d22",
                ),
            ),
          );
        }),
        V = a("OcsX"),
        D = a("kRGu"),
        H = r.a.createElement;
      function B() {
        B = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          a = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, a) {
              e[t] = a.value;
            },
          r = "function" == typeof Symbol ? Symbol : {},
          c = r.iterator || "@@iterator",
          o = r.asyncIterator || "@@asyncIterator",
          s = r.toStringTag || "@@toStringTag";
        function i(e, t, a) {
          return (
            Object.defineProperty(e, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          i({}, "");
        } catch (_) {
          i = function (e, t, a) {
            return (e[t] = a);
          };
        }
        function l(e, t, a, r) {
          var c = t && t.prototype instanceof p ? t : p,
            o = Object.create(c.prototype),
            s = new j(r || []);
          return (n(o, "_invoke", { value: k(e, a, s) }), o);
        }
        function u(e, t, a) {
          try {
            return { type: "normal", arg: e.call(t, a) };
          } catch (_) {
            return { type: "throw", arg: _ };
          }
        }
        e.wrap = l;
        var f = {};
        function p() {}
        function h() {}
        function d() {}
        var m = {};
        i(m, c, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          v = g && g(g(O([])));
        v && v !== t && a.call(v, c) && (m = v);
        var b = (d.prototype = p.prototype = Object.create(m));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            i(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          var r;
          n(this, "_invoke", {
            value: function (n, c) {
              function o() {
                return new t(function (r, o) {
                  !(function n(r, c, o, s) {
                    var i = u(e[r], e, c);
                    if ("throw" !== i.type) {
                      var l = i.arg,
                        f = l.value;
                      return f && "object" == typeof f && a.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function (e) {
                              n("next", e, o, s);
                            },
                            function (e) {
                              n("throw", e, o, s);
                            },
                          )
                        : t.resolve(f).then(
                            function (e) {
                              ((l.value = e), o(l));
                            },
                            function (e) {
                              return n("throw", e, o, s);
                            },
                          );
                    }
                    s(i.arg);
                  })(n, c, r, o);
                });
              }
              return (r = r ? r.then(o, o) : o());
            },
          });
        }
        function k(e, t, a) {
          var n = "suspendedStart";
          return function (r, c) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === r) throw c;
              return x();
            }
            for (a.method = r, a.arg = c; ; ) {
              var o = a.delegate;
              if (o) {
                var s = N(o, a);
                if (s) {
                  if (s === f) continue;
                  return s;
                }
              }
              if ("next" === a.method) a.sent = a._sent = a.arg;
              else if ("throw" === a.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), a.arg);
                a.dispatchException(a.arg);
              } else "return" === a.method && a.abrupt("return", a.arg);
              n = "executing";
              var i = u(e, t, a);
              if ("normal" === i.type) {
                if (
                  ((n = a.done ? "completed" : "suspendedYield"), i.arg === f)
                )
                  continue;
                return { value: i.arg, done: a.done };
              }
              "throw" === i.type &&
                ((n = "completed"), (a.method = "throw"), (a.arg = i.arg));
            }
          };
        }
        function N(e, t) {
          var a = t.method,
            n = e.iterator[a];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ("throw" === a &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                N(e, t),
                "throw" === t.method)) ||
                ("return" !== a &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + a + "' method",
                  )))),
              f
            );
          var r = u(n, e.iterator, t.arg);
          if ("throw" === r.type)
            return (
              (t.method = "throw"),
              (t.arg = r.arg),
              (t.delegate = null),
              f
            );
          var c = r.arg;
          return c
            ? c.done
              ? ((t[e.resultName] = c.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : c
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function S(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function L(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function j(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(S, this),
            this.reset(!0));
        }
        function O(e) {
          if (e) {
            var t = e[c];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                r = function t() {
                  for (; ++n < e.length; )
                    if (a.call(e, n))
                      return ((t.value = e[n]), (t.done = !1), t);
                  return ((t.value = void 0), (t.done = !0), t);
                };
              return (r.next = r);
            }
          }
          return { next: x };
        }
        function x() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = d),
          n(b, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: h, configurable: !0 }),
          (h.displayName = i(d, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), i(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(w.prototype),
          i(w.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, a, n, r, c) {
            void 0 === c && (c = Promise);
            var o = new w(l(t, a, n, r), c);
            return e.isGeneratorFunction(a)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          y(b),
          i(b, s, "Generator"),
          i(b, c, function () {
            return this;
          }),
          i(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              a = [];
            for (var n in t) a.push(n);
            return (
              a.reverse(),
              function e() {
                for (; a.length; ) {
                  var n = a.pop();
                  if (n in t) return ((e.value = n), (e.done = !1), e);
                }
                return ((e.done = !0), e);
              }
            );
          }),
          (e.values = O),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    a.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(a, n) {
                return (
                  (o.type = "throw"),
                  (o.arg = e),
                  (t.next = a),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var c = this.tryEntries[r],
                  o = c.completion;
                if ("root" === c.tryLoc) return n("end");
                if (c.tryLoc <= this.prev) {
                  var s = a.call(c, "catchLoc"),
                    i = a.call(c, "finallyLoc");
                  if (s && i) {
                    if (this.prev < c.catchLoc) return n(c.catchLoc, !0);
                    if (this.prev < c.finallyLoc) return n(c.finallyLoc);
                  } else if (s) {
                    if (this.prev < c.catchLoc) return n(c.catchLoc, !0);
                  } else {
                    if (!i)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < c.finallyLoc) return n(c.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  a.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var c = r;
                  break;
                }
              }
              c &&
                ("break" === e || "continue" === e) &&
                c.tryLoc <= t &&
                t <= c.finallyLoc &&
                (c = null);
              var o = c ? c.completion : {};
              return (
                (o.type = e),
                (o.arg = t),
                c
                  ? ((this.method = "next"), (this.next = c.finallyLoc), f)
                  : this.complete(o)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var a = this.tryEntries[t];
                if (a.finallyLoc === e)
                  return (this.complete(a.completion, a.afterLoc), L(a), f);
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var a = this.tryEntries[t];
                if (a.tryLoc === e) {
                  var n = a.completion;
                  if ("throw" === n.type) {
                    var r = n.arg;
                    L(a);
                  }
                  return r;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, a) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: a }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var Y = l()(
          function () {
            return a.e(68).then(a.bind(null, "ijj9"));
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return ["ijj9"];
              },
              modules: ["../components/telegraph/NotificationButton"],
            },
          },
        ),
        J = l()(
          function () {
            return a.e(28).then(a.bind(null, "nvEu"));
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return ["nvEu"];
              },
              modules: ["../components/public/CurrentTime"],
            },
          },
        );
      f.a.locale("zh-cn");
      var K = function (e) {
        var t = Object(n.useRef)(null),
          a = Object(n.useRef)(!0),
          c = Object(n.useState)(!1),
          o = c[0],
          i = c[1],
          l = Object(n.useState)(!0),
          u = l[0],
          v = l[1],
          b = Object(n.useState)("end"),
          y = b[0],
          w = b[1],
          k = Object(n.useState)(
            e.query && e.query.type
              ? { nav: e.query.type, topic: e.query.topic || 0 }
              : { nav: "", topic: 0 },
          ),
          N = k[0],
          S = k[1],
          L = Object(n.useState)([]),
          j = L[0],
          O = L[1],
          x = Object(n.useState)({ errno: 200, errorMessage: "" }),
          _ = x[0],
          T = x[1],
          E = Object(n.useState)(!1),
          q = E[0],
          M = E[1],
          P = Object(n.useState)([]),
          U = P[0],
          A = P[1],
          I = Object(n.useState)({ errno: 200, errorMessage: "" }),
          F = I[0],
          V = I[1],
          D = Object(n.useState)(0),
          B = D[0],
          K = D[1],
          Z = Object(n.useRef)(u),
          W = Object(n.useRef)(y),
          z = Object(n.useRef)(0);
        (Object(n.useEffect)(
          function () {
            (N.nav &&
              (T({ errno: 200, errorMessage: "" }),
              X(),
              (Z.current = !0),
              v(!0)),
              N.nav || (O([]), T({ errno: 200, errorMessage: "" })));
          },
          [N.nav],
        ),
          Object(n.useEffect)(
            function () {
              $("end");
            },
            [e.telegraphList, j],
          ));
        var X = function () {
            var e = parseInt(new Date().getTime() / 1e3, 10),
              t = {
                refresh_type: 1,
                rn: 20,
                last_time: (e = z.current || e),
                category: N.nav,
              };
            ("dynamic" === N.nav && (t.id = N.topic),
              $("loading"),
              Object(Q.request)({ url: "/v1/roll/get_roll_list", params: t })
                .then(function (e) {
                  if (e && 200 === e.status)
                    if (e.data && 0 === e.data.errno && e.data.data) {
                      if (Array.isArray(e.data.data.roll_data)) {
                        if (e.data.data.roll_data.length) {
                          var t = e.data.data.roll_data;
                          ((z.current = t[t.length - 1].ctime),
                            a.current
                              ? (window.scrollTo(
                                  document.documentElement.scrollLeft ||
                                    document.body.scrollLeft,
                                  0,
                                ),
                                O(t),
                                (a.current = !1))
                              : O(function (e) {
                                  return e.concat(t);
                                }));
                        }
                        e.data.data.roll_data.length >=
                        ("dynamic" === N.nav ? 10 : 20)
                          ? T({ errno: 200, errorMessage: "" })
                          : ($("end"),
                            T({
                              errno: 600,
                              errorMessage:
                                "\u5df2\u7ecf\u52a0\u8f7d\u5230\u6700\u540e\u4e86",
                            }));
                      }
                    } else
                      ($("end"),
                        T({
                          errno: e.data && e.data.errno ? e.data.errno : 500,
                          errorMessage:
                            e.data && e.data.msg
                              ? e.data.msg
                              : "\u7f51\u7edc\u8d85\u65f6\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01\uff01\uff01",
                        }));
                  else
                    ($("end"),
                      T({
                        errno: e.status,
                        errorMessage:
                          "\u7f51\u7edc\u8d85\u65f6\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01\uff01\uff01",
                      }));
                })
                .catch(function (e) {
                  (T({
                    errno: 500,
                    errorMessage:
                      "\u7f51\u7edc\u8d85\u65f6\uff0c\u8bf7\u70b9\u51fb\u91cd\u8bd5\uff01\uff01\uff01",
                  }),
                    $("end"),
                    console.log("getOtherTelegraphList", e));
                }));
          },
          $ = function (e) {
            ((W.current = e), w(e));
          },
          ee = function (t) {
            (i(t), e.handleSetGlobalMask());
          },
          te = Object(n.useCallback)(
            function () {
              if (!Z.current && "end" === W.current) {
                var t =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop,
                  a =
                    document.documentElement.scrollHeight ||
                    document.body.scrollHeight;
                t + document.documentElement.clientHeight + 300 >= a &&
                  (N.nav && 600 !== _.errno
                    ? X()
                    : 600 !== e.telegraphListError.errno &&
                      ($("loading"),
                      e.handleGetTelegraphList({ moreList: !0 })));
              }
            },
            [N.nav],
          );
        Object(n.useEffect)(
          function () {
            return (
              window.addEventListener("scroll", te),
              function () {
                window.removeEventListener("scroll", te);
              }
            );
          },
          [te],
        );
        var ae = function () {
            t.current &&
              "function" === typeof t.current.getData &&
              t.current.getData(N.nav);
          },
          ne = e.telegraphList,
          re = e.telegraphListError;
        return H(
          r.a.Fragment,
          null,
          H(
            s.a,
            null,
            H(
              "title",
              null,
              "\u8d22\u8054\u793eA\u80a124\u5c0f\u65f6\u7535\u62a5-\u4e0a\u5e02\u516c\u53f8\u52a8\u6001-\u4eca\u65e5\u80a1\u5e02\u884c\u60c5\u62a5\u9053",
            ),
            H("meta", {
              name: "description",
              content:
                "\u8d22\u8054\u793e\u7535\u62a5\u4e2d\u5fc3\uff0cA\u80a124\u5c0f\u65f6\u7535\u62a5\u3002\u4e3a\u6295\u8d44\u8005\u63d0\u4f9b\u4e13\u4e1a\u7684\u4e0a\u5e02\u516c\u53f8\u52a8\u6001\u3001\u80a1\u5e02\u8d44\u8baf\u3001\u80a1\u7968\u884c\u60c5\u3001\u8d22\u7ecf\u65b0\u95fb\u3001\u4eca\u65e5\u80a1\u5e02\u884c\u60c5\u3001\u521b\u4e1a\u677f\u3001\u65b0\u80fd\u6e90\u6c7d\u8f66\u3001\u677f\u5757\u6295\u8d44\u8d44\u8baf\u3002",
            }),
            H("meta", {
              name: "keywords",
              content:
                "\u8d22\u8054\u793e\u7535\u62a5,\u4e0a\u5e02\u516c\u53f8\u52a8\u6001,\u80a1\u5e02\u8d44\u8baf",
            }),
            H("meta", {
              name: "mobile-agent",
              content: "format=html5;url=https://m.cls.cn/",
            }),
            H("meta", {
              name: "mobile-agent",
              content: "format=xhtml;url=https://m.cls.cn/",
            }),
            H("meta", { href: "https://www.cls.cn/", rel: "canonical" }),
            H("link", {
              rel: "stylesheet",
              type: "text/css",
              charSet: "UTF-8",
              href: "https://cdnjs.cls.cn/www/20250808/css/telegraph-2025082.css",
            }),
          ),
          H(
            "div",
            { className: "m-auto w-1200" },
            // H(R.a, {
            //   type: "telegraph",
            //   handleChangeNavOtherStatus: function (e) {
            //     ((a.current = !0), (z.current = 0), S(e));
            //   },
            //   navTypeOther: N,
            // }),
            H(
              "div",
              { className: "clearfix w-100p p-t-20 p-b-30" },
              H(
                "div",
                { className: "f-l w-894" },
                (600 === re.errno || !re.errorMessage) &&
                  H(
                    "div",
                    { className: "m-b--10" },
                    H(
                      "div",
                      { className: "m-b-15 clearfix" },
                      H(J, { type: "telegraph" }),
                      H(Y, {
                        handleShowTipPopupStatus: function () {
                          return ee(!0);
                        },
                      }),
                    ),
                    H(
                      "div",
                      { className: "clearfix" },
                      H(
                        "div",
                        { className: "f-l l-h-133333" },
                        H(
                          "span",
                          { className: "f-s-12 c-ef9524" },
                          "\u7535\u62a5\u6301\u7eed\u66f4\u65b0\u4e2d",
                        ),
                        H("span", {
                          className:
                            "d-i-b v-a-m bg-c-ef9524 telegraph-animation telegraph-animation-1",
                        }),
                        H("span", {
                          className:
                            "d-i-b v-a-m bg-c-ef9524 telegraph-animation telegraph-animation-2",
                        }),
                        H("span", {
                          className:
                            "d-i-b v-a-m bg-c-ef9524 telegraph-animation telegraph-animation-3",
                        }),
                      ),
                      H(G, {
                        nav: N.nav,
                        ref: t,
                        setSearchTelegraphList: function (e, t, a, n) {
                          (e
                            ? window.removeEventListener("scroll", te)
                            : window.addEventListener("scroll", te),
                            M(e || !1),
                            A(t || U),
                            V(a || F),
                            K(n || 0));
                        },
                        getMoreSearchList: ae,
                      }),
                    ),
                  ),
                q
                  ? H(
                      "div",
                      { className: "m-t-30 m-b-10" },
                      !!B &&
                        H(
                          "div",
                          { className: "f-s-14 c-999" },
                          "\u5171\u67e5\u8be2\u5230",
                          B,
                          "\u76f8\u5173\u7535\u62a5",
                        ),
                      H(
                        "div",
                        null,
                        U.length > 0
                          ? U.map(function (e, t) {
                              return H(
                                "div",
                                {
                                  className:
                                    "clearfix p-t-20 p-b-20 b-b-w-1 b-b-s-s b-c-e6e7ea",
                                  key: "".concat(e.id, "-").concat(t),
                                },
                                H(
                                  "div",
                                  { className: "m-b-10 f-s-12 c-999" },
                                  f.a
                                    .unix(e.ctime)
                                    .format("YYYY-MM-DD HH:mm dddd"),
                                  " ",
                                  !!e.author && "\u6765\u81ea" + e.author,
                                ),
                                H(
                                  "div",
                                  null,
                                  H(
                                    "a",
                                    {
                                      href: "/detail/".concat(e.id),
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                    },
                                    H("div", {
                                      className: "f-s-16 c-222 search-result",
                                      dangerouslySetInnerHTML: {
                                        __html: e.content,
                                      },
                                    }),
                                  ),
                                ),
                              );
                            })
                          : H(
                              "div",
                              { className: "m-t-10 f-s-14 c-666 t-a-c" },
                              "\u6682\u65e0\u76f8\u5173\u6570\u636e",
                            ),
                        U.length > 0 &&
                          H(d.a, {
                            status: F,
                            clickEvent: function () {
                              return ae();
                            },
                          }),
                      ),
                    )
                  : H(
                      r.a.Fragment,
                      null,
                      H(
                        "div",
                        null,
                        H(p.a, {
                          type: "telegraph",
                          list: N.nav && Array.isArray(j) ? j : ne,
                          error: N.nav ? _ : re,
                          errorMessage: N.nav
                            ? _.errorMessage
                            : re.errorMessage,
                        }),
                      ),
                      "loading" === y &&
                        H(
                          "div",
                          { className: "m-t-30 m-b-30 t-a-c c-999" },
                          "\u52a0\u8f7d\u4e2d...",
                        ),
                      (u ||
                        (200 !== _.errno && 600 !== _.errno) ||
                        (200 !== re.errno && 600 !== re.errno)) &&
                        "loading" !== y &&
                        H(d.a, {
                          status: N.nav ? _ : re,
                          clickEvent: function () {
                            ((Z.current = !1),
                              v(!1),
                              N.nav
                                ? X()
                                : ($("loading"),
                                  e.handleGetTelegraphList({ moreList: !0 })));
                          },
                        }),
                    ),
              ),
              H(
                "div",
                { className: "f-r w-280" },
                // H("img", {
                //   className: "m-b-20 w-100p v-a-t h-144",
                //   src: "https://cdnjs.cls.cn/www/20200601/image/app-banner.png",
                //   alt: "\u8d22\u8054\u793eApp",
                // }),
                H(h.a, {
                  className: "b-t-w-2 b-t-s-s b-c-222 quote-right-box",
                  rightQuote: !0,
                  needQuote: !0,
                  needStock: !0,
                  needPlate: !0,
                }),
                H(m.a, { site: "right_banner" }),
              ),
            ),
          ),
          H(C, null),
          H(g.a, {
            status: o,
            close: function () {
              return ee(!1);
            },
          }),
        );
      };
      K.getInitialProps = function (e) {
        var t, a, n;
        return B().async(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (t = e.store),
                    (a = e.query),
                    (n = e.isServer),
                    (r.next = 3),
                    B().awrap(
                      t.dispatch(Object(V.b)({ chooseNav: "telegraph" })),
                    )
                  );
                case 3:
                  if (!n) {
                    r.next = 6;
                    break;
                  }
                  return ((r.next = 6), B().awrap(t.dispatch(Object(O.y)())));
                case 6:
                  return r.abrupt("return", { query: a });
                case 7:
                case "end":
                  return r.stop();
              }
          },
          null,
          null,
          null,
          Promise,
        );
      };
      t.default = Object(c.b)(
        function (e) {
          return {
            telegraphList: e.telegraph.telegraphList,
            telegraphListError: e.telegraph.telegraphListError,
          };
        },
        function (e) {
          return {
            handleGetTelegraphList: function (t) {
              return e(Object(O.y)(t));
            },
            handleSetGlobalMask: function () {
              return e(Object(D.l)());
            },
          };
        },
      )(K);
    },
  },
  [["6ymC", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 10, 12, 13, 14, 21]],
]);
