(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [8883],
    {
        28883: function(t, e) {
            !(function(t) {
                'use strict';
                (t.JSONExt = void 0),
                    (function(t) {
                        function e(t) {
                            return (
                                null === t ||
                                'boolean' == typeof t ||
                                'number' == typeof t ||
                                'string' == typeof t
                            );
                        }
                        function n(t) {
                            return Array.isArray(t);
                        }
                        function r(t, i) {
                            if (t === i) return !0;
                            if (e(t) || e(i)) return !1;
                            var o = n(t),
                                u = n(i);
                            return (
                                o === u &&
                                (o && u
                                    ? (function(t, e) {
                                          if (t === e) return !0;
                                          if (t.length !== e.length) return !1;
                                          for (
                                              var n = 0, i = t.length;
                                              n < i;
                                              ++n
                                          )
                                              if (!r(t[n], e[n])) return !1;
                                          return !0;
                                      })(t, i)
                                    : (function(t, e) {
                                          if (t === e) return !0;
                                          for (var n in t)
                                              if (void 0 !== t[n] && !(n in e))
                                                  return !1;
                                          for (var n in e)
                                              if (void 0 !== e[n] && !(n in t))
                                                  return !1;
                                          for (var n in t) {
                                              var i = t[n],
                                                  o = e[n];
                                              if (
                                                  void 0 !== i ||
                                                  void 0 !== o
                                              ) {
                                                  if (
                                                      void 0 === i ||
                                                      void 0 === o
                                                  )
                                                      return !1;
                                                  if (!r(i, o)) return !1;
                                              }
                                          }
                                          return !0;
                                      })(t, i))
                            );
                        }
                        function i(t) {
                            return e(t)
                                ? t
                                : n(t)
                                ? (function(t) {
                                      for (
                                          var e = new Array(t.length),
                                              n = 0,
                                              r = t.length;
                                          n < r;
                                          ++n
                                      )
                                          e[n] = i(t[n]);
                                      return e;
                                  })(t)
                                : (function(t) {
                                      var e = {};
                                      for (var n in t) {
                                          var r = t[n];
                                          void 0 !== r && (e[n] = i(r));
                                      }
                                      return e;
                                  })(t);
                        }
                        (t.emptyObject = Object.freeze({})),
                            (t.emptyArray = Object.freeze([])),
                            (t.isPrimitive = e),
                            (t.isArray = n),
                            (t.isObject = function(t) {
                                return !e(t) && !n(t);
                            }),
                            (t.deepEqual = r),
                            (t.deepCopy = i);
                    })(t.JSONExt || (t.JSONExt = {}));
                var e,
                    n = (function() {
                        function t() {
                            (this._types = []), (this._values = []);
                        }
                        return (
                            (t.prototype.types = function() {
                                return this._types.slice();
                            }),
                            (t.prototype.hasData = function(t) {
                                return -1 !== this._types.indexOf(t);
                            }),
                            (t.prototype.getData = function(t) {
                                var e = this._types.indexOf(t);
                                return -1 !== e ? this._values[e] : void 0;
                            }),
                            (t.prototype.setData = function(t, e) {
                                this.clearData(t),
                                    this._types.push(t),
                                    this._values.push(e);
                            }),
                            (t.prototype.clearData = function(t) {
                                var e = this._types.indexOf(t);
                                -1 !== e &&
                                    (this._types.splice(e, 1),
                                    this._values.splice(e, 1));
                            }),
                            (t.prototype.clear = function() {
                                (this._types.length = 0),
                                    (this._values.length = 0);
                            }),
                            t
                        );
                    })(),
                    r = (function() {
                        function t() {
                            var t = this;
                            this.promise = new Promise(function(e, n) {
                                (t._resolve = e), (t._reject = n);
                            });
                        }
                        return (
                            (t.prototype.resolve = function(t) {
                                (0, this._resolve)(t);
                            }),
                            (t.prototype.reject = function(t) {
                                (0, this._reject)(t);
                            }),
                            t
                        );
                    })(),
                    i = function(t) {
                        (this.name = t),
                            (this._tokenStructuralPropertyT = null);
                    };
                (t.Random = void 0),
                    ((t.Random || (t.Random = {})).getRandomValues =
                        (e =
                            ('undefined' != typeof window &&
                                (window.crypto || window.msCrypto)) ||
                            null) && 'function' == typeof e.getRandomValues
                            ? function(t) {
                                  return e.getRandomValues(t);
                              }
                            : function(t) {
                                  for (
                                      var e = 0, n = 0, r = t.length;
                                      n < r;
                                      ++n
                                  )
                                      n % 4 == 0 &&
                                          (e =
                                              (4294967295 * Math.random()) >>>
                                              0),
                                          (t[n] = 255 & e),
                                          (e >>>= 8);
                              }),
                    (t.UUID = void 0),
                    ((t.UUID || (t.UUID = {})).uuid4 = (function(t) {
                        for (
                            var e = new Uint8Array(16),
                                n = new Array(256),
                                r = 0;
                            r < 16;
                            ++r
                        )
                            n[r] = '0' + r.toString(16);
                        for (r = 16; r < 256; ++r) n[r] = r.toString(16);
                        return function() {
                            return (
                                t(e),
                                (e[6] = 64 | (15 & e[6])),
                                (e[8] = 128 | (63 & e[8])),
                                n[e[0]] +
                                    n[e[1]] +
                                    n[e[2]] +
                                    n[e[3]] +
                                    '-' +
                                    n[e[4]] +
                                    n[e[5]] +
                                    '-' +
                                    n[e[6]] +
                                    n[e[7]] +
                                    '-' +
                                    n[e[8]] +
                                    n[e[9]] +
                                    '-' +
                                    n[e[10]] +
                                    n[e[11]] +
                                    n[e[12]] +
                                    n[e[13]] +
                                    n[e[14]] +
                                    n[e[15]]
                            );
                        };
                    })(t.Random.getRandomValues)),
                    (t.MimeData = n),
                    (t.PromiseDelegate = r),
                    (t.Token = i),
                    Object.defineProperty(t, '__esModule', { value: !0 });
            })(e);
        },
    },
]);
//# sourceMappingURL=8883.80c7b63.js.map
