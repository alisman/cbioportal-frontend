'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [8594],
    {
        18594: (t, e, n) => {
            n.r(e),
                n.d(e, {
                    Debouncer: () => y,
                    Poll: () => f,
                    RateLimiter: () => d,
                    Throttler: () => m,
                });
            var i = n(26169),
                r = n(32798),
                o = function(t, e) {
                    return (
                        (o =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function(t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function(t, e) {
                                for (var n in e)
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        n
                                    ) && (t[n] = e[n]);
                            }),
                        o(t, e)
                    );
                };
            function a(t, e) {
                if ('function' != typeof e && null !== e)
                    throw new TypeError(
                        'Class extends value ' +
                            String(e) +
                            ' is not a constructor or null'
                    );
                function n() {
                    this.constructor = t;
                }
                o(t, e),
                    (t.prototype =
                        null === e
                            ? Object.create(e)
                            : ((n.prototype = e.prototype), new n()));
            }
            var s = function() {
                return (
                    (s =
                        Object.assign ||
                        function(t) {
                            for (var e, n = 1, i = arguments.length; n < i; n++)
                                for (var r in (e = arguments[n]))
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        r
                                    ) && (t[r] = e[r]);
                            return t;
                        }),
                    s.apply(this, arguments)
                );
            };
            function c(t, e, n, i) {
                return new (n || (n = Promise))(function(r, o) {
                    function a(t) {
                        try {
                            c(i.next(t));
                        } catch (t) {
                            o(t);
                        }
                    }
                    function s(t) {
                        try {
                            c(i.throw(t));
                        } catch (t) {
                            o(t);
                        }
                    }
                    function c(t) {
                        var e;
                        t.done
                            ? r(t.value)
                            : ((e = t.value),
                              e instanceof n
                                  ? e
                                  : new n(function(t) {
                                        t(e);
                                    })).then(a, s);
                    }
                    c((i = i.apply(t, e || [])).next());
                });
            }
            function u(t, e) {
                var n,
                    i,
                    r,
                    o,
                    a = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1];
                        },
                        trys: [],
                        ops: [],
                    };
                return (
                    (o = { next: s(0), throw: s(1), return: s(2) }),
                    'function' == typeof Symbol &&
                        (o[Symbol.iterator] = function() {
                            return this;
                        }),
                    o
                );
                function s(o) {
                    return function(s) {
                        return (function(o) {
                            if (n)
                                throw new TypeError(
                                    'Generator is already executing.'
                                );
                            for (; a; )
                                try {
                                    if (
                                        ((n = 1),
                                        i &&
                                            (r =
                                                2 & o[0]
                                                    ? i.return
                                                    : o[0]
                                                    ? i.throw ||
                                                      ((r = i.return) &&
                                                          r.call(i),
                                                      0)
                                                    : i.next) &&
                                            !(r = r.call(i, o[1])).done)
                                    )
                                        return r;
                                    switch (
                                        ((i = 0),
                                        r && (o = [2 & o[0], r.value]),
                                        o[0])
                                    ) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return (
                                                a.label++,
                                                { value: o[1], done: !1 }
                                            );
                                        case 5:
                                            a.label++, (i = o[1]), (o = [0]);
                                            continue;
                                        case 7:
                                            (o = a.ops.pop()), a.trys.pop();
                                            continue;
                                        default:
                                            if (
                                                !(
                                                    (r =
                                                        (r = a.trys).length >
                                                            0 &&
                                                        r[r.length - 1]) ||
                                                    (6 !== o[0] && 2 !== o[0])
                                                )
                                            ) {
                                                a = 0;
                                                continue;
                                            }
                                            if (
                                                3 === o[0] &&
                                                (!r ||
                                                    (o[1] > r[0] &&
                                                        o[1] < r[3]))
                                            ) {
                                                a.label = o[1];
                                                break;
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                (a.label = r[1]), (r = o);
                                                break;
                                            }
                                            if (r && a.label < r[2]) {
                                                (a.label = r[2]), a.ops.push(o);
                                                break;
                                            }
                                            r[2] && a.ops.pop(), a.trys.pop();
                                            continue;
                                    }
                                    o = e.call(t, a);
                                } catch (t) {
                                    (o = [6, t]), (i = 0);
                                } finally {
                                    n = r = 0;
                                }
                            if (5 & o[0]) throw o[1];
                            return { value: o[0] ? o[1] : void 0, done: !0 };
                        })([o, s]);
                    };
                }
            }
            var l,
                p =
                    'function' == typeof requestAnimationFrame
                        ? requestAnimationFrame
                        : setImmediate,
                h =
                    'function' == typeof cancelAnimationFrame
                        ? cancelAnimationFrame
                        : clearImmediate,
                f = (function() {
                    function t(t) {
                        var e = this;
                        (this._disposed = new r.Signal(this)),
                            (this._tick = new i.PromiseDelegate()),
                            (this._ticked = new r.Signal(this)),
                            (this._timeout = -1),
                            (this._factory = t.factory),
                            (this._standby = t.standby || l.DEFAULT_STANDBY),
                            (this._state = s(s({}, l.DEFAULT_STATE), {
                                timestamp: new Date().getTime(),
                            }));
                        var n = t.frequency || {},
                            o = Math.max(
                                n.interval || 0,
                                n.max || 0,
                                l.DEFAULT_FREQUENCY.max
                            );
                        (this.frequency = s(s(s({}, l.DEFAULT_FREQUENCY), n), {
                            max: o,
                        })),
                            (this.name = t.name || l.DEFAULT_NAME),
                            ('auto' in t && !t.auto) ||
                                p(function() {
                                    e.start();
                                });
                    }
                    return (
                        Object.defineProperty(t.prototype, 'disposed', {
                            get: function() {
                                return this._disposed;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'frequency', {
                            get: function() {
                                return this._frequency;
                            },
                            set: function(e) {
                                if (
                                    !this.isDisposed &&
                                    !i.JSONExt.deepEqual(
                                        e,
                                        this.frequency || {}
                                    )
                                ) {
                                    var n = e.backoff,
                                        r = e.interval,
                                        o = e.max;
                                    if (
                                        ((r = Math.round(r)),
                                        (o = Math.round(o)),
                                        'number' == typeof n && n < 1)
                                    )
                                        throw new Error(
                                            'Poll backoff growth factor must be at least 1'
                                        );
                                    if ((r < 0 || r > o) && r !== t.NEVER)
                                        throw new Error(
                                            'Poll interval must be between 0 and max'
                                        );
                                    if (o > t.MAX_INTERVAL && o !== t.NEVER)
                                        throw new Error(
                                            'Max interval must be less than ' +
                                                t.MAX_INTERVAL
                                        );
                                    this._frequency = {
                                        backoff: n,
                                        interval: r,
                                        max: o,
                                    };
                                }
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'isDisposed', {
                            get: function() {
                                return 'disposed' === this.state.phase;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'standby', {
                            get: function() {
                                return this._standby;
                            },
                            set: function(t) {
                                this.isDisposed ||
                                    this.standby === t ||
                                    (this._standby = t);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'state', {
                            get: function() {
                                return this._state;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'tick', {
                            get: function() {
                                return this._tick.promise;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'ticked', {
                            get: function() {
                                return this._ticked;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.dispose = function() {
                            this.isDisposed ||
                                ((this._state = s(s({}, l.DISPOSED_STATE), {
                                    timestamp: new Date().getTime(),
                                })),
                                this._tick.promise.catch(function(t) {}),
                                this._tick.reject(
                                    new Error(
                                        'Poll (' + this.name + ') is disposed.'
                                    )
                                ),
                                this._disposed.emit(void 0),
                                r.Signal.clearData(this));
                        }),
                        (t.prototype.refresh = function() {
                            return this.schedule({
                                cancel: function(t) {
                                    return 'refreshed' === t.phase;
                                },
                                interval: t.IMMEDIATE,
                                phase: 'refreshed',
                            });
                        }),
                        (t.prototype.schedule = function(e) {
                            return (
                                void 0 === e && (e = {}),
                                c(this, void 0, void 0, function() {
                                    var n,
                                        r,
                                        o,
                                        a,
                                        c,
                                        l = this;
                                    return u(this, function(u) {
                                        switch (u.label) {
                                            case 0:
                                                return this.isDisposed ||
                                                    (e.cancel &&
                                                        e.cancel(this.state))
                                                    ? [2]
                                                    : ((n = this.state),
                                                      (r = this._tick),
                                                      (o = new i.PromiseDelegate()),
                                                      (a = s(
                                                          {
                                                              interval: this
                                                                  .frequency
                                                                  .interval,
                                                              payload: null,
                                                              phase: 'standby',
                                                              timestamp: new Date().getTime(),
                                                          },
                                                          e
                                                      )),
                                                      (this._state = a),
                                                      (this._tick = o),
                                                      n.interval === t.IMMEDIATE
                                                          ? h(this._timeout)
                                                          : clearTimeout(
                                                                this._timeout
                                                            ),
                                                      this._ticked.emit(
                                                          this.state
                                                      ),
                                                      r.resolve(this),
                                                      [4, r.promise]);
                                            case 1:
                                                return (
                                                    u.sent(),
                                                    (c = function() {
                                                        l.isDisposed ||
                                                            l.tick !==
                                                                o.promise ||
                                                            l._execute();
                                                    }),
                                                    (this._timeout =
                                                        a.interval ===
                                                        t.IMMEDIATE
                                                            ? p(c)
                                                            : a.interval ===
                                                              t.NEVER
                                                            ? -1
                                                            : setTimeout(
                                                                  c,
                                                                  a.interval
                                                              )),
                                                    [2]
                                                );
                                        }
                                    });
                                })
                            );
                        }),
                        (t.prototype.start = function() {
                            return this.schedule({
                                cancel: function(t) {
                                    var e = t.phase;
                                    return (
                                        'constructed' !== e &&
                                        'standby' !== e &&
                                        'stopped' !== e
                                    );
                                },
                                interval: t.IMMEDIATE,
                                phase: 'started',
                            });
                        }),
                        (t.prototype.stop = function() {
                            return this.schedule({
                                cancel: function(t) {
                                    return 'stopped' === t.phase;
                                },
                                interval: t.NEVER,
                                phase: 'stopped',
                            });
                        }),
                        (t.prototype._execute = function() {
                            var t = this,
                                e =
                                    'function' == typeof this.standby
                                        ? this.standby()
                                        : this.standby;
                            if (
                                (e =
                                    'never' !== e &&
                                    ('when-hidden' === e
                                        ? !(
                                              'undefined' == typeof document ||
                                              !document ||
                                              !document.hidden
                                          )
                                        : e))
                            )
                                this.schedule();
                            else {
                                var n = this.tick;
                                this._factory(this.state)
                                    .then(function(e) {
                                        t.isDisposed ||
                                            t.tick !== n ||
                                            t.schedule({
                                                payload: e,
                                                phase:
                                                    'rejected' === t.state.phase
                                                        ? 'reconnected'
                                                        : 'resolved',
                                            });
                                    })
                                    .catch(function(e) {
                                        t.isDisposed ||
                                            t.tick !== n ||
                                            t.schedule({
                                                interval: l.sleep(
                                                    t.frequency,
                                                    t.state
                                                ),
                                                payload: e,
                                                phase: 'rejected',
                                            });
                                    });
                            }
                        }),
                        t
                    );
                })();
            !(function(t) {
                (t.IMMEDIATE = 0),
                    (t.MAX_INTERVAL = 2147483647),
                    (t.NEVER = 1 / 0);
            })(f || (f = {})),
                (function(t) {
                    (t.DEFAULT_BACKOFF = 3),
                        (t.DEFAULT_FREQUENCY = {
                            backoff: !0,
                            interval: 1e3,
                            max: 3e4,
                        }),
                        (t.DEFAULT_NAME = 'unknown'),
                        (t.DEFAULT_STANDBY = 'when-hidden'),
                        (t.DEFAULT_STATE = {
                            interval: f.NEVER,
                            payload: null,
                            phase: 'constructed',
                            timestamp: new Date(0).getTime(),
                        }),
                        (t.DISPOSED_STATE = {
                            interval: f.NEVER,
                            payload: null,
                            phase: 'disposed',
                            timestamp: new Date(0).getTime(),
                        }),
                        (t.sleep = function(e, n) {
                            var i = e.backoff,
                                r = e.interval,
                                o = e.max;
                            if (r === f.NEVER) return r;
                            var a =
                                    !0 === i
                                        ? t.DEFAULT_BACKOFF
                                        : !1 === i
                                        ? 1
                                        : i,
                                s = (function(t, e) {
                                    return (
                                        (t = Math.ceil(t)),
                                        (e = Math.floor(e)),
                                        Math.floor(
                                            Math.random() * (e - t + 1)
                                        ) + t
                                    );
                                })(r, n.interval * a);
                            return Math.min(o, s);
                        });
                })(l || (l = {}));
            var d = (function() {
                    function t(t, e) {
                        var n = this;
                        void 0 === e && (e = 500),
                            (this.args = void 0),
                            (this.payload = null),
                            (this.limit = e),
                            (this.poll = new f({
                                auto: !1,
                                factory: function() {
                                    return c(n, void 0, void 0, function() {
                                        var e;
                                        return u(this, function(n) {
                                            return (
                                                (e = this.args),
                                                (this.args = void 0),
                                                [2, t.apply(void 0, e)]
                                            );
                                        });
                                    });
                                },
                                frequency: {
                                    backoff: !1,
                                    interval: f.NEVER,
                                    max: f.NEVER,
                                },
                                standby: 'never',
                            })),
                            (this.payload = new i.PromiseDelegate()),
                            this.poll.ticked.connect(function(t, e) {
                                var r = n.payload;
                                return 'resolved' === e.phase
                                    ? ((n.payload = new i.PromiseDelegate()),
                                      void r.resolve(e.payload))
                                    : 'rejected' === e.phase ||
                                      'stopped' === e.phase
                                    ? ((n.payload = new i.PromiseDelegate()),
                                      r.promise.catch(function(t) {}),
                                      void r.reject(e.payload))
                                    : void 0;
                            }, this);
                    }
                    return (
                        Object.defineProperty(t.prototype, 'isDisposed', {
                            get: function() {
                                return null === this.payload;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.dispose = function() {
                            this.isDisposed ||
                                ((this.args = void 0),
                                (this.payload = null),
                                this.poll.dispose());
                        }),
                        (t.prototype.stop = function() {
                            return c(this, void 0, void 0, function() {
                                return u(this, function(t) {
                                    return [2, this.poll.stop()];
                                });
                            });
                        }),
                        t
                    );
                })(),
                y = (function(t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                        a(e, t),
                        (e.prototype.invoke = function() {
                            for (var t = [], e = 0; e < arguments.length; e++)
                                t[e] = arguments[e];
                            return (
                                (this.args = t),
                                this.poll.schedule({
                                    interval: this.limit,
                                    phase: 'invoked',
                                }),
                                this.payload.promise
                            );
                        }),
                        e
                    );
                })(d),
                m = (function(t) {
                    function e(e, n) {
                        var i =
                            t.call(
                                this,
                                e,
                                'number' == typeof n ? n : n && n.limit
                            ) || this;
                        return (
                            (i._trailing = !1),
                            'number' != typeof n &&
                                n &&
                                'trailing' === n.edge &&
                                (i._trailing = !0),
                            (i._interval = i._trailing ? i.limit : f.IMMEDIATE),
                            i
                        );
                    }
                    return (
                        a(e, t),
                        (e.prototype.invoke = function() {
                            for (var t = [], e = 0; e < arguments.length; e++)
                                t[e] = arguments[e];
                            var n = 'invoked' !== this.poll.state.phase;
                            return (
                                (n || this._trailing) && (this.args = t),
                                n &&
                                    this.poll.schedule({
                                        interval: this._interval,
                                        phase: 'invoked',
                                    }),
                                this.payload.promise
                            );
                        }),
                        e
                    );
                })(d);
        },
    },
]);
//# sourceMappingURL=8594.20243de.js.map
