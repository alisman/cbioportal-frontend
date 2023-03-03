(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [2329],
    {
        96558: function(r) {
            r.exports = (function() {
                'use strict';
                function r(n) {
                    return (
                        r.result ||
                            ((n && 'function' == typeof n.getSerializer) ||
                                Promise.reject(
                                    new Error(
                                        'localforage.getSerializer() was not available! localforage v1.4+ is required!'
                                    )
                                ),
                            (r.result = n.getSerializer())),
                        r.result
                    );
                }
                function n(r, n) {
                    n &&
                        r.then(
                            function(r) {
                                n(null, r);
                            },
                            function(r) {
                                n(r);
                            }
                        );
                }
                var e = {};
                return {
                    _driver: 'memoryStorageDriver',
                    _initStorage: function(n) {
                        var t = {};
                        if (n) for (var i in n) t[i] = n[i];
                        var o = (e[t.name] = e[t.name] || {}),
                            a = (o[t.storeName] = o[t.storeName] || {});
                        return (
                            (t.db = a),
                            (this._dbInfo = t),
                            r(this).then(function(r) {
                                t.serializer = r;
                            })
                        );
                    },
                    iterate: function(r, e) {
                        var t = this,
                            i = t.ready().then(function() {
                                var n = t._dbInfo.db,
                                    e = 1;
                                for (var i in n)
                                    if (n.hasOwnProperty(i)) {
                                        var o = n[i];
                                        if (
                                            (o &&
                                                (o = t._dbInfo.serializer.deserialize(
                                                    o
                                                )),
                                            void 0 !== (o = r(o, i, e++)))
                                        )
                                            return o;
                                    }
                            });
                        return n(i, e), i;
                    },
                    getItem: function(r, e) {
                        var t = this;
                        'string' != typeof r &&
                            (console.warn(
                                r + ' used as a key, but it is not a string.'
                            ),
                            (r = String(r)));
                        var i = t.ready().then(function() {
                            var n = t._dbInfo.db[r];
                            return (
                                n && (n = t._dbInfo.serializer.deserialize(n)),
                                n
                            );
                        });
                        return n(i, e), i;
                    },
                    setItem: function(r, e, t) {
                        var i = this;
                        'string' != typeof r &&
                            (console.warn(
                                r + ' used as a key, but it is not a string.'
                            ),
                            (r = String(r)));
                        var o = i.ready().then(function() {
                            void 0 === e && (e = null);
                            var n = e;
                            return (function(r) {
                                return new Promise(function(n, e) {
                                    i._dbInfo.serializer.serialize(r, function(
                                        r,
                                        t
                                    ) {
                                        t ? e(t) : n(r);
                                    });
                                });
                            })(e).then(function(e) {
                                return (i._dbInfo.db[r] = e), n;
                            });
                        });
                        return n(o, t), o;
                    },
                    removeItem: function(r, e) {
                        var t = this;
                        'string' != typeof r &&
                            (console.warn(
                                r + ' used as a key, but it is not a string.'
                            ),
                            (r = String(r)));
                        var i = t.ready().then(function() {
                            var n = t._dbInfo.db;
                            n.hasOwnProperty(r) && delete n[r];
                        });
                        return n(i, e), i;
                    },
                    clear: function(r) {
                        var e = this,
                            t = e.ready().then(function() {
                                var r = e._dbInfo.db;
                                for (var n in r)
                                    r.hasOwnProperty(n) && delete r[n];
                            });
                        return n(t, r), t;
                    },
                    length: function(r) {
                        var e = this.keys().then(function(r) {
                            return r.length;
                        });
                        return n(e, r), e;
                    },
                    key: function(r, e) {
                        var t = this,
                            i = t.ready().then(function() {
                                var n = t._dbInfo.db,
                                    e = null,
                                    i = 0;
                                for (var o in n)
                                    if (n.hasOwnProperty(o)) {
                                        if (r === i) {
                                            e = o;
                                            break;
                                        }
                                        i++;
                                    }
                                return e;
                            });
                        return n(i, e), i;
                    },
                    keys: function(r) {
                        var e = this,
                            t = e.ready().then(function() {
                                var r = e._dbInfo.db,
                                    n = [];
                                for (var t in r)
                                    r.hasOwnProperty(t) && n.push(t);
                                return n;
                            });
                        return n(t, r), t;
                    },
                };
            })();
        },
        2329: (r, n, e) => {
            'use strict';
            e.r(n),
                e.d(n, { ILocalForage: () => t, ensureMemoryStorage: () => a });
            const t = new (e(26169).Token)(
                '@jupyterlite/localforge:ILocalForage'
            );
            var i = e(96558),
                o = e.n(i);
            async function a(r) {
                return await r.defineDriver(o());
            }
        },
    },
]);
//# sourceMappingURL=2329.4c5ca6d.js.map
