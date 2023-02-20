"use strict";
(() => {
  var w = Object.create;
  var S = Object.defineProperty;
  var D = Object.getOwnPropertyDescriptor;
  var E = Object.getOwnPropertyNames;
  var F = Object.getPrototypeOf,
    R = Object.prototype.hasOwnProperty;
  var c = ((n) =>
    typeof require < "u"
      ? require
      : typeof Proxy < "u"
      ? new Proxy(n, { get: (e, t) => (typeof require < "u" ? require : e)[t] })
      : n)(function (n) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + n + '" is not supported');
  });
  var v = (n, e) => () => (n && (e = n((n = 0))), e);
  var W = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
  var _ = (n, e, t, o) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let i of E(e))
        !R.call(n, i) &&
          i !== t &&
          S(n, i, {
            get: () => e[i],
            enumerable: !(o = D(e, i)) || o.enumerable,
          });
    return n;
  };
  var a = (n, e, t) => (
    (t = n != null ? w(F(n)) : {}),
    _(
      e || !n || !n.__esModule
        ? S(t, "default", { value: n, enumerable: !0 })
        : t,
      n
    )
  );
  var J = (n, e, t) =>
    new Promise((o, i) => {
      var s = (l) => {
          try {
            r(t.next(l));
          } catch (m) {
            i(m);
          }
        },
        p = (l) => {
          try {
            r(t.throw(l));
          } catch (m) {
            i(m);
          }
        },
        r = (l) => (l.done ? o(l.value) : Promise.resolve(l.value).then(s, p));
      r((t = t.apply(n, e)).next());
    });
  var u,
    f,
    N,
    b = v(() => {
      "use strict";
      (u = a(c("fs"))),
        (f = (n) => {
          u.default.readFile("./db/apps.json", "utf-8", (e, t) => {
            e && n(e, null), t ? n(null, JSON.parse(t)) : n(null, null);
          });
        }),
        (N = (n, e) => {
          f((t, o) => {
            t && console.log(t);
            let i = { [n]: e };
            o && o.length
              ? (o.find((s) => s[n]) || o.push(i),
                u.default.writeFile(
                  "./db/apps.json",
                  JSON.stringify(o),
                  null,
                  (s) => {
                    s && console.log(s);
                  }
                ))
              : u.default.writeFile(
                  "./db/apps.json",
                  JSON.stringify([i]),
                  null,
                  (s) => {
                    s && console.log(s);
                  }
                );
          });
        });
    });
  var C = W((j) => {
    b();
    var g = a(c("express")),
      O = a(c("http")),
      x = a(c("morgan")),
      y = a(c("process")),
      d = (0, g.default)(),
      q = y.default.cwd().split("\\"),
      h = q.slice(-1)[0].includes("dist")
        ? q.slice(0, -1).join("\\")
        : __dirname;
    console.log(q);
    console.log(h);
    d.use(g.default.static(h + "/client/dist"));
    d.use((0, x.default)("tiny"));
    d.get("/", (n, e) => {
      e.sendFile(h + "/client/dist/index.html");
    });
    d.get("/api/apps", (n, e) =>
      J(j, null, function* () {
        let { app: t } = n.query;
        t
          ? O.default
              .request(
                `http://ws75.aptoide.com/api/7/apps/search/query=${t}/limit=50`,
                (i) => {
                  let s = "";
                  i.on("data", (p) => {
                    s += p.toString();
                  }),
                    i.on("end", () => {
                      N(t, JSON.parse(s)),
                        f((p, r) => {
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
          : f((o, i) => {
              if (o) return e.status(404).send("Datas not found");
              e.status(200).send(i);
            });
      })
    );
    d.listen(y.default.env.PORT || 3e3);
  });
  C();
})();
