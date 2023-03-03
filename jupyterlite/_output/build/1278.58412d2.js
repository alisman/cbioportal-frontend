/*! For license information please see 1278.58412d2.js.LICENSE.txt */
'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [1278],
    {
        61278: (t, e, n) => {
            n.r(e), n.d(e, { Application: () => d });
            var r,
                i = n(90375),
                a = n(26169),
                o = n(86098);
            function u(t, e, n, r) {
                return new (n || (n = Promise))(function(i, a) {
                    function o(t) {
                        try {
                            s(r.next(t));
                        } catch (t) {
                            a(t);
                        }
                    }
                    function u(t) {
                        try {
                            s(r.throw(t));
                        } catch (t) {
                            a(t);
                        }
                    }
                    function s(t) {
                        var e;
                        t.done
                            ? i(t.value)
                            : ((e = t.value),
                              e instanceof n
                                  ? e
                                  : new n(function(t) {
                                        t(e);
                                    })).then(o, u);
                    }
                    s((r = r.apply(t, e || [])).next());
                });
            }
            function s(t, e) {
                var n,
                    r,
                    i,
                    a,
                    o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1];
                        },
                        trys: [],
                        ops: [],
                    };
                return (
                    (a = { next: u(0), throw: u(1), return: u(2) }),
                    'function' == typeof Symbol &&
                        (a[Symbol.iterator] = function() {
                            return this;
                        }),
                    a
                );
                function u(a) {
                    return function(u) {
                        return (function(a) {
                            if (n)
                                throw new TypeError(
                                    'Generator is already executing.'
                                );
                            for (; o; )
                                try {
                                    if (
                                        ((n = 1),
                                        r &&
                                            (i =
                                                2 & a[0]
                                                    ? r.return
                                                    : a[0]
                                                    ? r.throw ||
                                                      ((i = r.return) &&
                                                          i.call(r),
                                                      0)
                                                    : r.next) &&
                                            !(i = i.call(r, a[1])).done)
                                    )
                                        return i;
                                    switch (
                                        ((r = 0),
                                        i && (a = [2 & a[0], i.value]),
                                        a[0])
                                    ) {
                                        case 0:
                                        case 1:
                                            i = a;
                                            break;
                                        case 4:
                                            return (
                                                o.label++,
                                                { value: a[1], done: !1 }
                                            );
                                        case 5:
                                            o.label++, (r = a[1]), (a = [0]);
                                            continue;
                                        case 7:
                                            (a = o.ops.pop()), o.trys.pop();
                                            continue;
                                        default:
                                            if (
                                                !(
                                                    (i =
                                                        (i = o.trys).length >
                                                            0 &&
                                                        i[i.length - 1]) ||
                                                    (6 !== a[0] && 2 !== a[0])
                                                )
                                            ) {
                                                o = 0;
                                                continue;
                                            }
                                            if (
                                                3 === a[0] &&
                                                (!i ||
                                                    (a[1] > i[0] &&
                                                        a[1] < i[3]))
                                            ) {
                                                o.label = a[1];
                                                break;
                                            }
                                            if (6 === a[0] && o.label < i[1]) {
                                                (o.label = i[1]), (i = a);
                                                break;
                                            }
                                            if (i && o.label < i[2]) {
                                                (o.label = i[2]), o.ops.push(a);
                                                break;
                                            }
                                            i[2] && o.ops.pop(), o.trys.pop();
                                            continue;
                                    }
                                    a = e.call(t, o);
                                } catch (t) {
                                    (a = [6, t]), (r = 0);
                                } finally {
                                    n = i = 0;
                                }
                            if (5 & a[0]) throw a[1];
                            return { value: a[0] ? a[1] : void 0, done: !0 };
                        })([a, u]);
                    };
                }
            }
            function c() {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                    t += arguments[e].length;
                var r = Array(t),
                    i = 0;
                for (e = 0; e < n; e++)
                    for (
                        var a = arguments[e], o = 0, u = a.length;
                        o < u;
                        o++, i++
                    )
                        r[i] = a[o];
                return r;
            }
            function l(t) {
                return 'function' == typeof t.iter ? t.iter() : new f(t);
            }
            !(function(t) {
                function e(t, e, n, r) {
                    void 0 === n && (n = 0), void 0 === r && (r = -1);
                    var i,
                        a = t.length;
                    if (0 === a) return -1;
                    (n = n < 0 ? Math.max(0, n + a) : Math.min(n, a - 1)),
                        (i =
                            (r =
                                r < 0
                                    ? Math.max(0, r + a)
                                    : Math.min(r, a - 1)) < n
                                ? r + 1 + (a - n)
                                : r - n + 1);
                    for (var o = 0; o < i; ++o) {
                        var u = (n + o) % a;
                        if (t[u] === e) return u;
                    }
                    return -1;
                }
                function n(t, e, n, r) {
                    void 0 === n && (n = -1), void 0 === r && (r = 0);
                    var i,
                        a = t.length;
                    if (0 === a) return -1;
                    i =
                        (n = n < 0 ? Math.max(0, n + a) : Math.min(n, a - 1)) <
                        (r = r < 0 ? Math.max(0, r + a) : Math.min(r, a - 1))
                            ? n + 1 + (a - r)
                            : n - r + 1;
                    for (var o = 0; o < i; ++o) {
                        var u = (n - o + a) % a;
                        if (t[u] === e) return u;
                    }
                    return -1;
                }
                function r(t, e, n, r) {
                    void 0 === n && (n = 0), void 0 === r && (r = -1);
                    var i,
                        a = t.length;
                    if (0 === a) return -1;
                    (n = n < 0 ? Math.max(0, n + a) : Math.min(n, a - 1)),
                        (i =
                            (r =
                                r < 0
                                    ? Math.max(0, r + a)
                                    : Math.min(r, a - 1)) < n
                                ? r + 1 + (a - n)
                                : r - n + 1);
                    for (var o = 0; o < i; ++o) {
                        var u = (n + o) % a;
                        if (e(t[u], u)) return u;
                    }
                    return -1;
                }
                function i(t, e, n, r) {
                    void 0 === n && (n = -1), void 0 === r && (r = 0);
                    var i,
                        a = t.length;
                    if (0 === a) return -1;
                    i =
                        (n = n < 0 ? Math.max(0, n + a) : Math.min(n, a - 1)) <
                        (r = r < 0 ? Math.max(0, r + a) : Math.min(r, a - 1))
                            ? n + 1 + (a - r)
                            : n - r + 1;
                    for (var o = 0; o < i; ++o) {
                        var u = (n - o + a) % a;
                        if (e(t[u], u)) return u;
                    }
                    return -1;
                }
                function a(t, e, n) {
                    void 0 === e && (e = 0), void 0 === n && (n = -1);
                    var r = t.length;
                    if (!(r <= 1))
                        for (
                            e = e < 0 ? Math.max(0, e + r) : Math.min(e, r - 1),
                                n =
                                    n < 0
                                        ? Math.max(0, n + r)
                                        : Math.min(n, r - 1);
                            e < n;

                        ) {
                            var i = t[e],
                                a = t[n];
                            (t[e++] = a), (t[n--] = i);
                        }
                }
                function o(t, e) {
                    var n = t.length;
                    if ((e < 0 && (e += n), !(e < 0 || e >= n))) {
                        for (var r = t[e], i = e + 1; i < n; ++i)
                            t[i - 1] = t[i];
                        return (t.length = n - 1), r;
                    }
                }
                (t.firstIndexOf = e),
                    (t.lastIndexOf = n),
                    (t.findFirstIndex = r),
                    (t.findLastIndex = i),
                    (t.findFirstValue = function(t, e, n, i) {
                        void 0 === n && (n = 0), void 0 === i && (i = -1);
                        var a = r(t, e, n, i);
                        return -1 !== a ? t[a] : void 0;
                    }),
                    (t.findLastValue = function(t, e, n, r) {
                        void 0 === n && (n = -1), void 0 === r && (r = 0);
                        var a = i(t, e, n, r);
                        return -1 !== a ? t[a] : void 0;
                    }),
                    (t.lowerBound = function(t, e, n, r, i) {
                        void 0 === r && (r = 0), void 0 === i && (i = -1);
                        var a = t.length;
                        if (0 === a) return 0;
                        for (
                            var o = (r =
                                    r < 0
                                        ? Math.max(0, r + a)
                                        : Math.min(r, a - 1)),
                                u =
                                    (i =
                                        i < 0
                                            ? Math.max(0, i + a)
                                            : Math.min(i, a - 1)) -
                                    r +
                                    1;
                            u > 0;

                        ) {
                            var s = u >> 1,
                                c = o + s;
                            n(t[c], e) < 0
                                ? ((o = c + 1), (u -= s + 1))
                                : (u = s);
                        }
                        return o;
                    }),
                    (t.upperBound = function(t, e, n, r, i) {
                        void 0 === r && (r = 0), void 0 === i && (i = -1);
                        var a = t.length;
                        if (0 === a) return 0;
                        for (
                            var o = (r =
                                    r < 0
                                        ? Math.max(0, r + a)
                                        : Math.min(r, a - 1)),
                                u =
                                    (i =
                                        i < 0
                                            ? Math.max(0, i + a)
                                            : Math.min(i, a - 1)) -
                                    r +
                                    1;
                            u > 0;

                        ) {
                            var s = u >> 1,
                                c = o + s;
                            n(t[c], e) > 0
                                ? (u = s)
                                : ((o = c + 1), (u -= s + 1));
                        }
                        return o;
                    }),
                    (t.shallowEqual = function(t, e, n) {
                        if (t === e) return !0;
                        if (t.length !== e.length) return !1;
                        for (var r = 0, i = t.length; r < i; ++r)
                            if (n ? !n(t[r], e[r]) : t[r] !== e[r]) return !1;
                        return !0;
                    }),
                    (t.slice = function(t, e) {
                        void 0 === e && (e = {});
                        var n = e.start,
                            r = e.stop,
                            i = e.step;
                        if ((void 0 === i && (i = 1), 0 === i))
                            throw new Error('Slice `step` cannot be zero.');
                        var a,
                            o = t.length;
                        void 0 === n
                            ? (n = i < 0 ? o - 1 : 0)
                            : n < 0
                            ? (n = Math.max(n + o, i < 0 ? -1 : 0))
                            : n >= o && (n = i < 0 ? o - 1 : o),
                            void 0 === r
                                ? (r = i < 0 ? -1 : o)
                                : r < 0
                                ? (r = Math.max(r + o, i < 0 ? -1 : 0))
                                : r >= o && (r = i < 0 ? o - 1 : o),
                            (a =
                                (i < 0 && r >= n) || (i > 0 && n >= r)
                                    ? 0
                                    : i < 0
                                    ? Math.floor((r - n + 1) / i + 1)
                                    : Math.floor((r - n - 1) / i + 1));
                        for (var u = [], s = 0; s < a; ++s) u[s] = t[n + s * i];
                        return u;
                    }),
                    (t.move = function(t, e, n) {
                        var r = t.length;
                        if (
                            !(r <= 1) &&
                            (e =
                                e < 0
                                    ? Math.max(0, e + r)
                                    : Math.min(e, r - 1)) !==
                                (n =
                                    n < 0
                                        ? Math.max(0, n + r)
                                        : Math.min(n, r - 1))
                        ) {
                            for (
                                var i = t[e], a = e < n ? 1 : -1, o = e;
                                o !== n;
                                o += a
                            )
                                t[o] = t[o + a];
                            t[n] = i;
                        }
                    }),
                    (t.reverse = a),
                    (t.rotate = function(t, e, n, r) {
                        void 0 === n && (n = 0), void 0 === r && (r = -1);
                        var i = t.length;
                        if (
                            !(
                                i <= 1 ||
                                (n =
                                    n < 0
                                        ? Math.max(0, n + i)
                                        : Math.min(n, i - 1)) >=
                                    (r =
                                        r < 0
                                            ? Math.max(0, r + i)
                                            : Math.min(r, i - 1))
                            )
                        ) {
                            var o = r - n + 1;
                            if (
                                (e > 0
                                    ? (e %= o)
                                    : e < 0 && (e = ((e % o) + o) % o),
                                0 !== e)
                            ) {
                                var u = n + e;
                                a(t, n, u - 1), a(t, u, r), a(t, n, r);
                            }
                        }
                    }),
                    (t.fill = function(t, e, n, r) {
                        void 0 === n && (n = 0), void 0 === r && (r = -1);
                        var i = t.length;
                        if (0 !== i) {
                            var a;
                            (n =
                                n < 0
                                    ? Math.max(0, n + i)
                                    : Math.min(n, i - 1)),
                                (a =
                                    (r =
                                        r < 0
                                            ? Math.max(0, r + i)
                                            : Math.min(r, i - 1)) < n
                                        ? r + 1 + (i - n)
                                        : r - n + 1);
                            for (var o = 0; o < a; ++o) t[(n + o) % i] = e;
                        }
                    }),
                    (t.insert = function(t, e, n) {
                        var r = t.length;
                        e = e < 0 ? Math.max(0, e + r) : Math.min(e, r);
                        for (var i = r; i > e; --i) t[i] = t[i - 1];
                        t[e] = n;
                    }),
                    (t.removeAt = o),
                    (t.removeFirstOf = function(t, n, r, i) {
                        void 0 === r && (r = 0), void 0 === i && (i = -1);
                        var a = e(t, n, r, i);
                        return -1 !== a && o(t, a), a;
                    }),
                    (t.removeLastOf = function(t, e, r, i) {
                        void 0 === r && (r = -1), void 0 === i && (i = 0);
                        var a = n(t, e, r, i);
                        return -1 !== a && o(t, a), a;
                    }),
                    (t.removeAllOf = function(t, e, n, r) {
                        void 0 === n && (n = 0), void 0 === r && (r = -1);
                        var i = t.length;
                        if (0 === i) return 0;
                        (n = n < 0 ? Math.max(0, n + i) : Math.min(n, i - 1)),
                            (r =
                                r < 0
                                    ? Math.max(0, r + i)
                                    : Math.min(r, i - 1));
                        for (var a = 0, o = 0; o < i; ++o)
                            (n <= r && o >= n && o <= r && t[o] === e) ||
                            (r < n && (o <= r || o >= n) && t[o] === e)
                                ? a++
                                : a > 0 && (t[o - a] = t[o]);
                        return a > 0 && (t.length = i - a), a;
                    }),
                    (t.removeFirstWhere = function(t, e, n, i) {
                        var a;
                        void 0 === n && (n = 0), void 0 === i && (i = -1);
                        var u = r(t, e, n, i);
                        return (
                            -1 !== u && (a = o(t, u)), { index: u, value: a }
                        );
                    }),
                    (t.removeLastWhere = function(t, e, n, r) {
                        var a;
                        void 0 === n && (n = -1), void 0 === r && (r = 0);
                        var u = i(t, e, n, r);
                        return (
                            -1 !== u && (a = o(t, u)), { index: u, value: a }
                        );
                    }),
                    (t.removeAllWhere = function(t, e, n, r) {
                        void 0 === n && (n = 0), void 0 === r && (r = -1);
                        var i = t.length;
                        if (0 === i) return 0;
                        (n = n < 0 ? Math.max(0, n + i) : Math.min(n, i - 1)),
                            (r =
                                r < 0
                                    ? Math.max(0, r + i)
                                    : Math.min(r, i - 1));
                        for (var a = 0, o = 0; o < i; ++o)
                            (n <= r && o >= n && o <= r && e(t[o], o)) ||
                            (r < n && (o <= r || o >= n) && e(t[o], o))
                                ? a++
                                : a > 0 && (t[o - a] = t[o]);
                        return a > 0 && (t.length = i - a), a;
                    });
            })(r || (r = {}));
            var v,
                h,
                f = (function() {
                    function t(t) {
                        (this._index = 0), (this._source = t);
                    }
                    return (
                        (t.prototype.iter = function() {
                            return this;
                        }),
                        (t.prototype.clone = function() {
                            var e = new t(this._source);
                            return (e._index = this._index), e;
                        }),
                        (t.prototype.next = function() {
                            if (!(this._index >= this._source.length))
                                return this._source[this._index++];
                        }),
                        t
                    );
                })();
            !(function(t) {
                t.rangeLength = function(t, e, n) {
                    return 0 === n
                        ? 1 / 0
                        : (t > e && n > 0) || (t < e && n < 0)
                        ? 0
                        : Math.ceil((e - t) / n);
                };
            })(v || (v = {})),
                (function(t) {
                    function e(t, e, n) {
                        void 0 === n && (n = 0);
                        for (
                            var r = new Array(e.length),
                                i = 0,
                                a = n,
                                o = e.length;
                            i < o;
                            ++i, ++a
                        ) {
                            if (-1 === (a = t.indexOf(e[i], a))) return null;
                            r[i] = a;
                        }
                        return r;
                    }
                    (t.findIndices = e),
                        (t.matchSumOfSquares = function(t, n, r) {
                            void 0 === r && (r = 0);
                            var i = e(t, n, r);
                            if (!i) return null;
                            for (var a = 0, o = 0, u = i.length; o < u; ++o) {
                                var s = i[o] - r;
                                a += s * s;
                            }
                            return { score: a, indices: i };
                        }),
                        (t.matchSumOfDeltas = function(t, n, r) {
                            void 0 === r && (r = 0);
                            var i = e(t, n, r);
                            if (!i) return null;
                            for (
                                var a = 0, o = r - 1, u = 0, s = i.length;
                                u < s;
                                ++u
                            ) {
                                var c = i[u];
                                (a += c - o - 1), (o = c);
                            }
                            return { score: a, indices: i };
                        }),
                        (t.highlight = function(t, e, n) {
                            for (
                                var r = [], i = 0, a = 0, o = e.length;
                                i < o;

                            ) {
                                for (
                                    var u = e[i], s = e[i];
                                    ++i < o && e[i] === s + 1;

                                )
                                    s++;
                                a < u && r.push(t.slice(a, u)),
                                    u < s + 1 && r.push(n(t.slice(u, s + 1))),
                                    (a = s + 1);
                            }
                            return a < t.length && r.push(t.slice(a)), r;
                        }),
                        (t.cmp = function(t, e) {
                            return t < e ? -1 : t > e ? 1 : 0;
                        });
                })(h || (h = {}));
            var p,
                d = (function() {
                    function t(t) {
                        (this._started = !1),
                            (this._pluginMap = p.createPluginMap()),
                            (this._serviceMap = p.createServiceMap()),
                            (this._delegate = new a.PromiseDelegate()),
                            (this.commands = new i.CommandRegistry()),
                            (this.contextMenu = new o.ContextMenu({
                                commands: this.commands,
                                renderer: t.contextMenuRenderer,
                            })),
                            (this.shell = t.shell);
                    }
                    return (
                        Object.defineProperty(t.prototype, 'started', {
                            get: function() {
                                return this._delegate.promise;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.getPluginDescription = function(t) {
                            var e = this._pluginMap[t];
                            return (e && e.description) || '';
                        }),
                        (t.prototype.hasPlugin = function(t) {
                            return t in this._pluginMap;
                        }),
                        (t.prototype.isPluginActivated = function(t) {
                            var e = this._pluginMap[t];
                            return !!e && e.activated;
                        }),
                        (t.prototype.listPlugins = function() {
                            return Object.keys(this._pluginMap);
                        }),
                        (t.prototype.registerPlugin = function(t) {
                            if (t.id in this._pluginMap)
                                throw new Error(
                                    "Plugin '" +
                                        t.id +
                                        "' is already registered."
                                );
                            var e = p.createPluginData(t);
                            p.ensureNoCycle(
                                e,
                                this._pluginMap,
                                this._serviceMap
                            ),
                                e.provides &&
                                    this._serviceMap.set(e.provides, e.id),
                                (this._pluginMap[e.id] = e);
                        }),
                        (t.prototype.registerPlugins = function(t) {
                            for (var e = 0, n = t; e < n.length; e++) {
                                var r = n[e];
                                this.registerPlugin(r);
                            }
                        }),
                        (t.prototype.deregisterPlugin = function(t, e) {
                            var n = this._pluginMap[t];
                            if (n) {
                                if (n.activated && !e)
                                    throw new Error(
                                        "Plugin '" + t + "' is still active."
                                    );
                                delete this._pluginMap[t];
                            }
                        }),
                        (t.prototype.activatePlugin = function(t) {
                            return u(this, void 0, void 0, function() {
                                var e,
                                    n,
                                    r,
                                    i = this;
                                return s(this, function(a) {
                                    return (e = this._pluginMap[t])
                                        ? e.activated
                                            ? [2]
                                            : (e.promise ||
                                                  ((n = e.requires.map(function(
                                                      t
                                                  ) {
                                                      return i.resolveRequiredService(
                                                          t
                                                      );
                                                  })),
                                                  (r = e.optional.map(function(
                                                      t
                                                  ) {
                                                      return i.resolveOptionalService(
                                                          t
                                                      );
                                                  })),
                                                  (e.promise = Promise.all(
                                                      c(n, r)
                                                  )
                                                      .then(function(t) {
                                                          return e.activate.apply(
                                                              void 0,
                                                              c([i], t)
                                                          );
                                                      })
                                                      .then(function(t) {
                                                          (e.service = t),
                                                              (e.activated = !0),
                                                              (e.promise = null);
                                                      })
                                                      .catch(function(t) {
                                                          throw ((e.promise = null),
                                                          t);
                                                      }))),
                                              [2, e.promise])
                                        : [
                                              2,
                                              Promise.reject(
                                                  new Error(
                                                      "Plugin '" +
                                                          t +
                                                          "' is not registered."
                                                  )
                                              ),
                                          ];
                                });
                            });
                        }),
                        (t.prototype.deactivatePlugin = function(t) {
                            return u(this, void 0, void 0, function() {
                                var e,
                                    n,
                                    r,
                                    i,
                                    a,
                                    o,
                                    u,
                                    l,
                                    v,
                                    h,
                                    f = this;
                                return s(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (!(e = this._pluginMap[t]))
                                                throw new ReferenceError(
                                                    "Plugin '" +
                                                        t +
                                                        "' is not registered."
                                                );
                                            if (!e.activated) return [2, []];
                                            if (!e.deactivate)
                                                throw new TypeError(
                                                    "Plugin '" +
                                                        t +
                                                        "'#deactivate() method missing"
                                                );
                                            for (
                                                n = p.findDependents(
                                                    t,
                                                    this._pluginMap,
                                                    this._serviceMap
                                                ),
                                                    r = n.map(function(t) {
                                                        return f._pluginMap[t];
                                                    }),
                                                    i = 0,
                                                    a = r;
                                                i < a.length;
                                                i++
                                            )
                                                if (!(o = a[i]).deactivate)
                                                    throw new TypeError(
                                                        'Plugin ' +
                                                            o.id +
                                                            '#deactivate() method missing (depends on ' +
                                                            t +
                                                            ')'
                                                    );
                                            (u = 0), (l = r), (s.label = 1);
                                        case 1:
                                            return u < l.length
                                                ? ((v = l[u]),
                                                  (h = c(
                                                      v.requires,
                                                      v.optional
                                                  ).map(function(t) {
                                                      var e = f._serviceMap.get(
                                                          t
                                                      );
                                                      return e
                                                          ? f._pluginMap[e]
                                                                .service
                                                          : null;
                                                  })),
                                                  [
                                                      4,
                                                      v.deactivate.apply(
                                                          v,
                                                          c([this], h)
                                                      ),
                                                  ])
                                                : [3, 4];
                                        case 2:
                                            s.sent(),
                                                (v.service = null),
                                                (v.activated = !1),
                                                (s.label = 3);
                                        case 3:
                                            return u++, [3, 1];
                                        case 4:
                                            return n.pop(), [2, n];
                                    }
                                });
                            });
                        }),
                        (t.prototype.resolveRequiredService = function(t) {
                            return u(this, void 0, void 0, function() {
                                var e, n;
                                return s(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return (e = this._serviceMap.get(t))
                                                ? (n = this._pluginMap[e])
                                                      .activated
                                                    ? [3, 2]
                                                    : [
                                                          4,
                                                          this.activatePlugin(
                                                              e
                                                          ),
                                                      ]
                                                : [
                                                      2,
                                                      Promise.reject(
                                                          new Error(
                                                              'No provider for: ' +
                                                                  t.name +
                                                                  '.'
                                                          )
                                                      ),
                                                  ];
                                        case 1:
                                            r.sent(), (r.label = 2);
                                        case 2:
                                            return [2, n.service];
                                    }
                                });
                            });
                        }),
                        (t.prototype.resolveOptionalService = function(t) {
                            return u(this, void 0, void 0, function() {
                                var e, n, r;
                                return s(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (!(e = this._serviceMap.get(t)))
                                                return [2, null];
                                            if (
                                                (n = this._pluginMap[e])
                                                    .activated
                                            )
                                                return [3, 4];
                                            i.label = 1;
                                        case 1:
                                            return (
                                                i.trys.push([1, 3, , 4]),
                                                [4, this.activatePlugin(e)]
                                            );
                                        case 2:
                                            return i.sent(), [3, 4];
                                        case 3:
                                            return (
                                                (r = i.sent()),
                                                console.error(r),
                                                [2, null]
                                            );
                                        case 4:
                                            return [2, n.service];
                                    }
                                });
                            });
                        }),
                        (t.prototype.start = function(t) {
                            var e = this;
                            if ((void 0 === t && (t = {}), this._started))
                                return this._delegate.promise;
                            this._started = !0;
                            var n = t.hostID || '',
                                r = p
                                    .collectStartupPlugins(this._pluginMap, t)
                                    .map(function(t) {
                                        return e
                                            .activatePlugin(t)
                                            .catch(function(e) {
                                                console.error(
                                                    "Plugin '" +
                                                        t +
                                                        "' failed to activate."
                                                ),
                                                    console.error(e);
                                            });
                                    });
                            return (
                                Promise.all(r).then(function() {
                                    e.attachShell(n),
                                        e.addEventListeners(),
                                        e._delegate.resolve(void 0);
                                }),
                                this._delegate.promise
                            );
                        }),
                        (t.prototype.handleEvent = function(t) {
                            switch (t.type) {
                                case 'resize':
                                    this.evtResize(t);
                                    break;
                                case 'keydown':
                                    this.evtKeydown(t);
                                    break;
                                case 'contextmenu':
                                    this.evtContextMenu(t);
                            }
                        }),
                        (t.prototype.attachShell = function(t) {
                            o.Widget.attach(
                                this.shell,
                                (t && document.getElementById(t)) ||
                                    document.body
                            );
                        }),
                        (t.prototype.addEventListeners = function() {
                            document.addEventListener('contextmenu', this),
                                document.addEventListener('keydown', this, !0),
                                window.addEventListener('resize', this);
                        }),
                        (t.prototype.evtKeydown = function(t) {
                            this.commands.processKeydownEvent(t);
                        }),
                        (t.prototype.evtContextMenu = function(t) {
                            t.shiftKey ||
                                (this.contextMenu.open(t) &&
                                    (t.preventDefault(), t.stopPropagation()));
                        }),
                        (t.prototype.evtResize = function(t) {
                            this.shell.update();
                        }),
                        t
                    );
                })();
            !(function(t) {
                (t.createPluginMap = function() {
                    return Object.create(null);
                }),
                    (t.createServiceMap = function() {
                        return new Map();
                    }),
                    (t.createPluginData = function(t) {
                        return {
                            id: t.id,
                            description: t.description || '',
                            service: null,
                            promise: null,
                            activated: !1,
                            activate: t.activate,
                            deactivate: t.deactivate || null,
                            provides: t.provides || null,
                            autoStart: t.autoStart || !1,
                            requires: t.requires ? t.requires.slice() : [],
                            optional: t.optional ? t.optional.slice() : [],
                        };
                    }),
                    (t.ensureNoCycle = function(t, e, n) {
                        var r = c(t.requires, t.optional),
                            i = function(r) {
                                if (r === t.provides) return !0;
                                var o = n.get(r);
                                if (!o) return !1;
                                var u = e[o],
                                    s = c(u.requires, u.optional);
                                return (
                                    0 !== s.length &&
                                    (a.push(o), !!s.some(i) || (a.pop(), !1))
                                );
                            };
                        if (t.provides && 0 !== r.length) {
                            var a = [t.id];
                            if (r.some(i))
                                throw new Error(
                                    'Cycle detected: ' + a.join(' -> ') + '.'
                                );
                        }
                    }),
                    (t.findDependents = function(t, e, n) {
                        var r = new Array(),
                            i = function(t) {
                                var i = e[t],
                                    a = c(i.requires, i.optional);
                                r.push.apply(
                                    r,
                                    a.reduce(function(e, r) {
                                        var i = n.get(r);
                                        return i && e.push([t, i]), e;
                                    }, [])
                                );
                            };
                        for (var a in e) i(a);
                        var o = (function(t) {
                                var e = [],
                                    n = new Set(),
                                    r = new Map();
                                return (
                                    (function(t, e) {
                                        for (
                                            var n, i = l(t);
                                            void 0 !== (n = i.next());

                                        )
                                            if (
                                                !1 ===
                                                ((o = void 0),
                                                (u = void 0),
                                                (s = void 0),
                                                (o = (a = n)[0]),
                                                (u = a[1]),
                                                void ((s = r.get(u))
                                                    ? s.push(o)
                                                    : r.set(u, [o])))
                                            )
                                                return;
                                        var a, o, u, s;
                                    })(t),
                                    r.forEach(function(t, e) {
                                        i(e);
                                    }),
                                    e
                                );
                                function i(t) {
                                    if (!n.has(t)) {
                                        n.add(t);
                                        var a = r.get(t);
                                        a && a.forEach(i), e.push(t);
                                    }
                                }
                            })(r),
                            u = (function(e, n) {
                                for (
                                    var r, i = 0, a = l(e);
                                    void 0 !== (r = a.next());

                                )
                                    if ((i++, r === t)) return i - 1;
                                return -1;
                            })(o);
                        return -1 === u ? [t] : o.slice(0, u + 1);
                    }),
                    (t.collectStartupPlugins = function(t, e) {
                        var n = new Map();
                        for (var r in t) t[r].autoStart && n.set(r, !0);
                        if (e.startPlugins)
                            for (
                                var i = 0, a = e.startPlugins;
                                i < a.length;
                                i++
                            )
                                (r = a[i]), n.set(r, !0);
                        if (e.ignorePlugins)
                            for (
                                var o = 0, u = e.ignorePlugins;
                                o < u.length;
                                o++
                            )
                                (r = u[o]), n.delete(r);
                        return Array.from(n.keys());
                    });
            })(p || (p = {}));
        },
    },
]);
//# sourceMappingURL=1278.58412d2.js.map
