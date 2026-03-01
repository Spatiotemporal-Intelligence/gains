(window.webpackJsonp = window.webpackJsonp || []).push([
  [68],
  {
    ijj9: function (e, t, o) {
      "use strict";
      o.r(t);
      var c = o("1OyB"),
        n = o("vuIU"),
        a = o("Ji7U"),
        i = o("md7G"),
        r = o("foSv"),
        p = o("q1tI"),
        s = o.n(p),
        l = o("/MKj"),
        h = o("hKvw"),
        f = s.a.createElement;
      function u(e) {
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
          var o,
            c = Object(r.a)(e);
          if (t) {
            var n = Object(r.a)(this).constructor;
            o = Reflect.construct(c, arguments, n);
          } else o = c.apply(this, arguments);
          return Object(i.a)(this, o);
        };
      }
      var g = (function (e) {
        Object(a.a)(o, e);
        var t = u(o);
        function o() {
          return (Object(c.a)(this, o), t.apply(this, arguments));
        }
        return (
          Object(n.a)(o, [
            {
              key: "render",
              value: function () {
                var e = this;
                return f(
                  "div",
                  { className: "f-r clearfix telegraph-top-switch-box" },
                  f(
                    "div",
                    { className: "f-l clearfix" },
                    f(
                      "div",
                      {
                        className: "f-l",
                        onClick: function () {
                          return e.props.handleToggleNotification({
                            switch:
                              "on" ===
                              e.props.telegraphVoice.hasTelegraphNotification
                                ? "off"
                                : "on",
                          });
                        },
                      },
                      f("div", {
                        className: "f-l "
                          .concat(
                            "on" ===
                              this.props.telegraphVoice.hasTelegraphNotification
                              ? "b-c-222"
                              : "b-c-e6e7ea",
                            " telegraph-top-switch ",
                          )
                          .concat(
                            "on" ===
                              this.props.telegraphVoice.hasTelegraphNotification
                              ? "telegraph-top-switch-open"
                              : "telegraph-top-switch-close",
                          ),
                      }),
                      f(
                        "div",
                        {
                          className: "f-s-13 c-222 telegraph-notification-tip",
                        },
                        "\u684c\u9762\u901a\u77e5",
                      ),
                    ),
                    // f("img", {
                    //   className: "f-l c-p telegraph-notification-question",
                    //   src: "https://cdnjs.cls.cn/www/stib/images/notification-tip.png",
                    //   alt: "\u684c\u9762\u901a\u77e5",
                    //   onClick: function () {
                    //     return e.props.handleShowTipPopupStatus();
                    //   },
                    // }),
                  ),
                  f(
                    "div",
                    {
                      className: "f-l clearfix",
                      onClick: function () {
                        return e.props.handleToggleSound({
                          switch:
                            "on" === e.props.telegraphVoice.hasTelegraphSound
                              ? "off"
                              : "on",
                        });
                      },
                    },
                    f("div", {
                      className: "f-l "
                        .concat(
                          "on" === this.props.telegraphVoice.hasTelegraphSound
                            ? "b-c-222"
                            : "b-c-e6e7ea",
                          " telegraph-top-switch ",
                        )
                        .concat(
                          "on" === this.props.telegraphVoice.hasTelegraphSound
                            ? "telegraph-top-switch-open"
                            : "telegraph-top-switch-close",
                        ),
                    }),
                    f(
                      "div",
                      { className: "f-s-13 c-222 telegraph-notification-tip" },
                      "\u58f0\u97f3\u63d0\u9192",
                    ),
                  ),
                  f(
                    "div",
                    {
                      className: "f-l clearfix",
                      onClick: function () {
                        return e.props.handleToggleRemind({
                          switch:
                            "on" === e.props.telegraphVoice.hasTelegraphRemind
                              ? "off"
                              : "on",
                        });
                      },
                    },
                    f("div", {
                      className: "f-l "
                        .concat(
                          "on" === this.props.telegraphVoice.hasTelegraphRemind
                            ? "b-c-222"
                            : "b-c-e6e7ea",
                          " telegraph-top-switch ",
                        )
                        .concat(
                          "on" === this.props.telegraphVoice.hasTelegraphRemind
                            ? "telegraph-top-switch-open"
                            : "telegraph-top-switch-close",
                        ),
                    }),
                    f(
                      "div",
                      { className: "f-s-13 c-222 telegraph-notification-tip" },
                      "\u8bed\u97f3\u7535\u62a5",
                    ),
                  ),
                );
              },
            },
          ]),
          o
        );
      })(s.a.PureComponent);
      t.default = Object(l.b)(
        function (e) {
          return { telegraphVoice: e.telegraphVoice };
        },
        function (e) {
          return {
            handleToggleNotification: function (t) {
              e(Object(h.B)(t));
            },
            handleToggleSound: function (t) {
              (e(Object(h.D)(t)), e(Object(h.x)()));
            },
            handleToggleRemind: function (t) {
              (e(Object(h.C)(t)), e(Object(h.x)()));
            },
          };
        },
      )(g);
    },
  },
]);
