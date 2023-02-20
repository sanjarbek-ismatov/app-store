"use strict";
(() => {
  var D = Object.create;
  var S = Object.defineProperty;
  var E = Object.getOwnPropertyDescriptor;
  var F = Object.getOwnPropertyNames;
  var R = Object.getPrototypeOf,
    v = Object.prototype.hasOwnProperty;
  var a = ((n) =>
    typeof require < "u"
      ? require
      : typeof Proxy < "u"
      ? new Proxy(n, { get: (e, t) => (typeof require < "u" ? require : e)[t] })
      : n)(function (n) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + n + '" is not supported');
  });
  var W = (n, e) => () => (n && (e = n((n = 0))), e);
  var _ = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
  var C = (n, e, t, i) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let o of F(e))
        !v.call(n, o) &&
          o !== t &&
          S(n, o, {
            get: () => e[o],
            enumerable: !(i = E(e, o)) || i.enumerable,
          });
    return n;
  };
  var c = (n, e, t) => (
    (t = n != null ? D(R(n)) : {}),
    C(
      e || !n || !n.__esModule
        ? S(t, "default", { value: n, enumerable: !0 })
        : t,
      n
    )
  );
  var J = (n, e, t) =>
    new Promise((i, o) => {
      var s = (l) => {
          try {
            r(t.next(l));
          } catch (m) {
            o(m);
          }
        },
        p = (l) => {
          try {
            r(t.throw(l));
          } catch (m) {
            o(m);
          }
        },
        r = (l) => (l.done ? i(l.value) : Promise.resolve(l.value).then(s, p));
      r((t = t.apply(n, e)).next());
    });
  var f,
    d,
    N,
    b = W(() => {
      "use strict";
      (f = c(a("fs"))),
        (d = (n) => {
          f.default.readFile("./db/apps.json", "utf-8", (e, t) => {
            e && n(e, null), t ? n(null, JSON.parse(t)) : n(null, null);
          });
        }),
        (N = (n, e) => {
          d((t, i) => {
            t && console.log(t);
            let o = { [n]: e };
            i && i.length
              ? (i.find((s) => s[n]) || i.push(o),
                f.default.writeFile(
                  "./db/apps.json",
                  JSON.stringify(i),
                  null,
                  (s) => {
                    s && console.log(s);
                  }
                ))
              : f.default.writeFile(
                  "./db/apps.json",
                  JSON.stringify([o]),
                  null,
                  (s) => {
                    s && console.log(s);
                  }
                );
          });
        });
    });
  var P = _((w) => {
    b();
    var g = c(a("express")),
      O = c(a("cors")),
      x = c(a("http")),
      j = c(a("morgan")),
      y = c(a("process")),
      u = (0, g.default)();
    u.use((0, O.default)());
    var q = y.default.cwd().split("\\"),
      h = q.console.log(h);
    u.use(g.default.static(h + "/client/dist"));
    u.use((0, j.default)("tiny"));
    u.get("/", (n, e) => {
      e.sendFile(h + "/client/dist/index.html");
    });
    u.get("/api/apps", (n, e) =>
      J(w, null, function* () {
        let { app: t } = n.query;
        t
          ? x.default
              .request(
                `http://ws75.aptoide.com/api/7/apps/search/query=${t}/limit=50`,
                (o) => {
                  let s = "";
                  o.on("data", (p) => {
                    s += p.toString();
                  }),
                    o.on("end", () => {
                      N(t, JSON.parse(s)),
                        d((p, r) => {
                          if ((p && console.log(p), r && r.length))
                            try {
                              return e.send(r.find((l) => l[t])[t]);
                            } catch (l) {
                              console.log(l);
                            }
                          return e.send(JSON.parse(s));
                        });
                    });
                }
              )
              .end()
          : d((i, o) => {
              if (i) return e.status(404).send("Datas not found");
              e.status(200).send(o);
            });
      })
    );
    u.listen(y.default.env.PORT || 3e3);
  });
  P();
})();
