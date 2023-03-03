/*! For license information please see 44.4f8f136.js.LICENSE.txt */
'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [44, 8542, 4191],
    {
        54459: e => {
            var t = /("(?:[^\\"]|\\.)*")|[:,]/g;
            e.exports = function(e, n) {
                var r, o, i;
                return (
                    (n = n || {}),
                    (r = JSON.stringify(
                        [1],
                        void 0,
                        void 0 === n.indent ? 2 : n.indent
                    ).slice(2, -3)),
                    (o =
                        '' === r
                            ? 1 / 0
                            : void 0 === n.maxLength
                            ? 80
                            : n.maxLength),
                    (i = n.replacer),
                    (function e(n, a, s) {
                        var l, c, u, h, f, p, d, v, g, m, y, E;
                        if (
                            (n &&
                                'function' == typeof n.toJSON &&
                                (n = n.toJSON()),
                            void 0 === (y = JSON.stringify(n, i)))
                        )
                            return y;
                        if (
                            ((d = o - a.length - s),
                            y.length <= d &&
                                (g = y.replace(t, function(e, t) {
                                    return t || e + ' ';
                                })).length <= d)
                        )
                            return g;
                        if (
                            (null != i && ((n = JSON.parse(y)), (i = void 0)),
                            'object' == typeof n && null !== n)
                        ) {
                            if (
                                ((v = a + r),
                                (u = []),
                                (c = 0),
                                Array.isArray(n))
                            )
                                for (m = '[', l = ']', d = n.length; c < d; c++)
                                    u.push(
                                        e(n[c], v, c === d - 1 ? 0 : 1) ||
                                            'null'
                                    );
                            else
                                for (
                                    m = '{',
                                        l = '}',
                                        d = (p = Object.keys(n)).length;
                                    c < d;
                                    c++
                                )
                                    (h = p[c]),
                                        (f = JSON.stringify(h) + ': '),
                                        void 0 !==
                                            (E = e(
                                                n[h],
                                                v,
                                                f.length + (c === d - 1 ? 0 : 1)
                                            )) && u.push(f + E);
                            if (u.length > 0)
                                return [m, r + u.join(',\n' + v), l].join(
                                    '\n' + a
                                );
                        }
                        return y;
                    })(e, '', 0)
                );
            };
        },
        30044: (e, t, n) => {
            n.r(t),
                n.d(t, {
                    DEFAULT_ACTIONS: () => Vn,
                    default: () => or,
                    guessMode: () => tr,
                    vega: () => Xn,
                    vegaLite: () => Wn,
                    version: () => Gn,
                });
            var r = {};
            n.r(r),
                n.d(r, {
                    JsonPatchError: () => y,
                    _areEquals: () => S,
                    applyOperation: () => O,
                    applyPatch: () => A,
                    applyReducer: () => I,
                    deepClone: () => E,
                    getValueByPointer: () => x,
                    validate: () => L,
                    validator: () => N,
                });
            var o = {};
            n.r(o),
                n.d(o, {
                    compare: () => _,
                    generate: () => F,
                    observe: () => k,
                    unobserve: () => C,
                });
            var i = {};
            n.r(i),
                n.d(i, {
                    dark: () => Z,
                    excel: () => te,
                    fivethirtyeight: () => ae,
                    ggplot2: () => le,
                    googlecharts: () => Te,
                    latimes: () => de,
                    powerbi: () => Ge,
                    quartz: () => me,
                    urbaninstitute: () => Ie,
                    version: () => Xe,
                    vox: () => Ee,
                });
            var a,
                s =
                    ((a = function(e, t) {
                        return (
                            (a =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function(e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function(e, t) {
                                    for (var n in t)
                                        t.hasOwnProperty(n) && (e[n] = t[n]);
                                }),
                            a(e, t)
                        );
                    }),
                    function(e, t) {
                        function n() {
                            this.constructor = e;
                        }
                        a(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((n.prototype = t.prototype), new n()));
                    }),
                l = Object.prototype.hasOwnProperty;
            function c(e, t) {
                return l.call(e, t);
            }
            function u(e) {
                if (Array.isArray(e)) {
                    for (var t = new Array(e.length), n = 0; n < t.length; n++)
                        t[n] = '' + n;
                    return t;
                }
                if (Object.keys) return Object.keys(e);
                var r = [];
                for (var o in e) c(e, o) && r.push(o);
                return r;
            }
            function h(e) {
                switch (typeof e) {
                    case 'object':
                        return JSON.parse(JSON.stringify(e));
                    case 'undefined':
                        return null;
                    default:
                        return e;
                }
            }
            function f(e) {
                for (var t, n = 0, r = e.length; n < r; ) {
                    if (!((t = e.charCodeAt(n)) >= 48 && t <= 57)) return !1;
                    n++;
                }
                return !0;
            }
            function p(e) {
                return -1 === e.indexOf('/') && -1 === e.indexOf('~')
                    ? e
                    : e.replace(/~/g, '~0').replace(/\//g, '~1');
            }
            function d(e) {
                return e.replace(/~1/g, '/').replace(/~0/g, '~');
            }
            function v(e) {
                if (void 0 === e) return !0;
                if (e)
                    if (Array.isArray(e)) {
                        for (var t = 0, n = e.length; t < n; t++)
                            if (v(e[t])) return !0;
                    } else if ('object' == typeof e)
                        for (var r = u(e), o = r.length, i = 0; i < o; i++)
                            if (v(e[r[i]])) return !0;
                return !1;
            }
            function g(e, t) {
                var n = [e];
                for (var r in t) {
                    var o =
                        'object' == typeof t[r]
                            ? JSON.stringify(t[r], null, 2)
                            : t[r];
                    void 0 !== o && n.push(r + ': ' + o);
                }
                return n.join('\n');
            }
            var m = (function(e) {
                    function t(t, n, r, o, i) {
                        var a = this.constructor,
                            s =
                                e.call(
                                    this,
                                    g(t, {
                                        name: n,
                                        index: r,
                                        operation: o,
                                        tree: i,
                                    })
                                ) || this;
                        return (
                            (s.name = n),
                            (s.index = r),
                            (s.operation = o),
                            (s.tree = i),
                            Object.setPrototypeOf(s, a.prototype),
                            (s.message = g(t, {
                                name: n,
                                index: r,
                                operation: o,
                                tree: i,
                            })),
                            s
                        );
                    }
                    return s(t, e), t;
                })(Error),
                y = m,
                E = h,
                b = {
                    add: function(e, t, n) {
                        return (e[t] = this.value), { newDocument: n };
                    },
                    remove: function(e, t, n) {
                        var r = e[t];
                        return delete e[t], { newDocument: n, removed: r };
                    },
                    replace: function(e, t, n) {
                        var r = e[t];
                        return (
                            (e[t] = this.value), { newDocument: n, removed: r }
                        );
                    },
                    move: function(e, t, n) {
                        var r = x(n, this.path);
                        r && (r = h(r));
                        var o = O(n, { op: 'remove', path: this.from }).removed;
                        return (
                            O(n, { op: 'add', path: this.path, value: o }),
                            { newDocument: n, removed: r }
                        );
                    },
                    copy: function(e, t, n) {
                        var r = x(n, this.from);
                        return (
                            O(n, { op: 'add', path: this.path, value: h(r) }),
                            { newDocument: n }
                        );
                    },
                    test: function(e, t, n) {
                        return { newDocument: n, test: S(e[t], this.value) };
                    },
                    _get: function(e, t, n) {
                        return (this.value = e[t]), { newDocument: n };
                    },
                },
                w = {
                    add: function(e, t, n) {
                        return (
                            f(t)
                                ? e.splice(t, 0, this.value)
                                : (e[t] = this.value),
                            { newDocument: n, index: t }
                        );
                    },
                    remove: function(e, t, n) {
                        return { newDocument: n, removed: e.splice(t, 1)[0] };
                    },
                    replace: function(e, t, n) {
                        var r = e[t];
                        return (
                            (e[t] = this.value), { newDocument: n, removed: r }
                        );
                    },
                    move: b.move,
                    copy: b.copy,
                    test: b.test,
                    _get: b._get,
                };
            function x(e, t) {
                if ('' == t) return e;
                var n = { op: '_get', path: t };
                return O(e, n), n.value;
            }
            function O(e, t, n, r, o, i) {
                if (
                    (void 0 === n && (n = !1),
                    void 0 === r && (r = !0),
                    void 0 === o && (o = !0),
                    void 0 === i && (i = 0),
                    n &&
                        ('function' == typeof n ? n(t, 0, e, t.path) : N(t, 0)),
                    '' === t.path)
                ) {
                    var a = { newDocument: e };
                    if ('add' === t.op) return (a.newDocument = t.value), a;
                    if ('replace' === t.op)
                        return (a.newDocument = t.value), (a.removed = e), a;
                    if ('move' === t.op || 'copy' === t.op)
                        return (
                            (a.newDocument = x(e, t.from)),
                            'move' === t.op && (a.removed = e),
                            a
                        );
                    if ('test' === t.op) {
                        if (((a.test = S(e, t.value)), !1 === a.test))
                            throw new y(
                                'Test operation failed',
                                'TEST_OPERATION_FAILED',
                                i,
                                t,
                                e
                            );
                        return (a.newDocument = e), a;
                    }
                    if ('remove' === t.op)
                        return (a.removed = e), (a.newDocument = null), a;
                    if ('_get' === t.op) return (t.value = e), a;
                    if (n)
                        throw new y(
                            'Operation `op` property is not one of operations defined in RFC-6902',
                            'OPERATION_OP_INVALID',
                            i,
                            t,
                            e
                        );
                    return a;
                }
                r || (e = h(e));
                var s = (t.path || '').split('/'),
                    l = e,
                    c = 1,
                    u = s.length,
                    p = void 0,
                    v = void 0,
                    g = void 0;
                for (g = 'function' == typeof n ? n : N; ; ) {
                    if (
                        ((v = s[c]) && -1 != v.indexOf('~') && (v = d(v)),
                        o &&
                            ('__proto__' == v ||
                                ('prototype' == v &&
                                    c > 0 &&
                                    'constructor' == s[c - 1])))
                    )
                        throw new TypeError(
                            'JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README'
                        );
                    if (
                        (n &&
                            void 0 === p &&
                            (void 0 === l[v]
                                ? (p = s.slice(0, c).join('/'))
                                : c == u - 1 && (p = t.path),
                            void 0 !== p && g(t, 0, e, p)),
                        c++,
                        Array.isArray(l))
                    ) {
                        if ('-' === v) v = l.length;
                        else {
                            if (n && !f(v))
                                throw new y(
                                    'Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index',
                                    'OPERATION_PATH_ILLEGAL_ARRAY_INDEX',
                                    i,
                                    t,
                                    e
                                );
                            f(v) && (v = ~~v);
                        }
                        if (c >= u) {
                            if (n && 'add' === t.op && v > l.length)
                                throw new y(
                                    'The specified index MUST NOT be greater than the number of elements in the array',
                                    'OPERATION_VALUE_OUT_OF_BOUNDS',
                                    i,
                                    t,
                                    e
                                );
                            if (!1 === (a = w[t.op].call(t, l, v, e)).test)
                                throw new y(
                                    'Test operation failed',
                                    'TEST_OPERATION_FAILED',
                                    i,
                                    t,
                                    e
                                );
                            return a;
                        }
                    } else if (c >= u) {
                        if (!1 === (a = b[t.op].call(t, l, v, e)).test)
                            throw new y(
                                'Test operation failed',
                                'TEST_OPERATION_FAILED',
                                i,
                                t,
                                e
                            );
                        return a;
                    }
                    if (
                        ((l = l[v]), n && c < u && (!l || 'object' != typeof l))
                    )
                        throw new y(
                            'Cannot perform operation at the desired path',
                            'OPERATION_PATH_UNRESOLVABLE',
                            i,
                            t,
                            e
                        );
                }
            }
            function A(e, t, n, r, o) {
                if (
                    (void 0 === r && (r = !0),
                    void 0 === o && (o = !0),
                    n && !Array.isArray(t))
                )
                    throw new y(
                        'Patch sequence must be an array',
                        'SEQUENCE_NOT_AN_ARRAY'
                    );
                r || (e = h(e));
                for (
                    var i = new Array(t.length), a = 0, s = t.length;
                    a < s;
                    a++
                )
                    (i[a] = O(e, t[a], n, !0, o, a)), (e = i[a].newDocument);
                return (i.newDocument = e), i;
            }
            function I(e, t, n) {
                var r = O(e, t);
                if (!1 === r.test)
                    throw new y(
                        'Test operation failed',
                        'TEST_OPERATION_FAILED',
                        n,
                        t,
                        e
                    );
                return r.newDocument;
            }
            function N(e, t, n, r) {
                if ('object' != typeof e || null === e || Array.isArray(e))
                    throw new y(
                        'Operation is not an object',
                        'OPERATION_NOT_AN_OBJECT',
                        t,
                        e,
                        n
                    );
                if (!b[e.op])
                    throw new y(
                        'Operation `op` property is not one of operations defined in RFC-6902',
                        'OPERATION_OP_INVALID',
                        t,
                        e,
                        n
                    );
                if ('string' != typeof e.path)
                    throw new y(
                        'Operation `path` property is not a string',
                        'OPERATION_PATH_INVALID',
                        t,
                        e,
                        n
                    );
                if (0 !== e.path.indexOf('/') && e.path.length > 0)
                    throw new y(
                        'Operation `path` property must start with "/"',
                        'OPERATION_PATH_INVALID',
                        t,
                        e,
                        n
                    );
                if (
                    ('move' === e.op || 'copy' === e.op) &&
                    'string' != typeof e.from
                )
                    throw new y(
                        'Operation `from` property is not present (applicable in `move` and `copy` operations)',
                        'OPERATION_FROM_REQUIRED',
                        t,
                        e,
                        n
                    );
                if (
                    ('add' === e.op || 'replace' === e.op || 'test' === e.op) &&
                    void 0 === e.value
                )
                    throw new y(
                        'Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)',
                        'OPERATION_VALUE_REQUIRED',
                        t,
                        e,
                        n
                    );
                if (
                    ('add' === e.op || 'replace' === e.op || 'test' === e.op) &&
                    v(e.value)
                )
                    throw new y(
                        'Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)',
                        'OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED',
                        t,
                        e,
                        n
                    );
                if (n)
                    if ('add' == e.op) {
                        var o = e.path.split('/').length,
                            i = r.split('/').length;
                        if (o !== i + 1 && o !== i)
                            throw new y(
                                'Cannot perform an `add` operation at the desired path',
                                'OPERATION_PATH_CANNOT_ADD',
                                t,
                                e,
                                n
                            );
                    } else if (
                        'replace' === e.op ||
                        'remove' === e.op ||
                        '_get' === e.op
                    ) {
                        if (e.path !== r)
                            throw new y(
                                'Cannot perform the operation at a path that does not exist',
                                'OPERATION_PATH_UNRESOLVABLE',
                                t,
                                e,
                                n
                            );
                    } else if ('move' === e.op || 'copy' === e.op) {
                        var a = L(
                            [{ op: '_get', path: e.from, value: void 0 }],
                            n
                        );
                        if (a && 'OPERATION_PATH_UNRESOLVABLE' === a.name)
                            throw new y(
                                'Cannot perform the operation from a path that does not exist',
                                'OPERATION_FROM_UNRESOLVABLE',
                                t,
                                e,
                                n
                            );
                    }
            }
            function L(e, t, n) {
                try {
                    if (!Array.isArray(e))
                        throw new y(
                            'Patch sequence must be an array',
                            'SEQUENCE_NOT_AN_ARRAY'
                        );
                    if (t) A(h(t), h(e), n || !0);
                    else {
                        n = n || N;
                        for (var r = 0; r < e.length; r++)
                            n(e[r], r, t, void 0);
                    }
                } catch (e) {
                    if (e instanceof y) return e;
                    throw e;
                }
            }
            function S(e, t) {
                if (e === t) return !0;
                if (e && t && 'object' == typeof e && 'object' == typeof t) {
                    var n,
                        r,
                        o,
                        i = Array.isArray(e),
                        a = Array.isArray(t);
                    if (i && a) {
                        if ((r = e.length) != t.length) return !1;
                        for (n = r; 0 != n--; ) if (!S(e[n], t[n])) return !1;
                        return !0;
                    }
                    if (i != a) return !1;
                    var s = Object.keys(e);
                    if ((r = s.length) !== Object.keys(t).length) return !1;
                    for (n = r; 0 != n--; )
                        if (!t.hasOwnProperty(s[n])) return !1;
                    for (n = r; 0 != n--; )
                        if (!S(e[(o = s[n])], t[o])) return !1;
                    return !0;
                }
                return e != e && t != t;
            }
            var T = new WeakMap(),
                R = function(e) {
                    (this.observers = new Map()), (this.obj = e);
                },
                D = function(e, t) {
                    (this.callback = e), (this.observer = t);
                };
            function C(e, t) {
                t.unobserve();
            }
            function k(e, t) {
                var n,
                    r = (function(e) {
                        return T.get(e);
                    })(e);
                if (r) {
                    var o = (function(e, t) {
                        return e.observers.get(t);
                    })(r, t);
                    n = o && o.observer;
                } else (r = new R(e)), T.set(e, r);
                if (n) return n;
                if (((n = {}), (r.value = h(e)), t)) {
                    (n.callback = t), (n.next = null);
                    var i = function() {
                            F(n);
                        },
                        a = function() {
                            clearTimeout(n.next), (n.next = setTimeout(i));
                        };
                    'undefined' != typeof window &&
                        (window.addEventListener('mouseup', a),
                        window.addEventListener('keyup', a),
                        window.addEventListener('mousedown', a),
                        window.addEventListener('keydown', a),
                        window.addEventListener('change', a));
                }
                return (
                    (n.patches = []),
                    (n.object = e),
                    (n.unobserve = function() {
                        F(n),
                            clearTimeout(n.next),
                            (function(e, t) {
                                e.observers.delete(t.callback);
                            })(r, n),
                            'undefined' != typeof window &&
                                (window.removeEventListener('mouseup', a),
                                window.removeEventListener('keyup', a),
                                window.removeEventListener('mousedown', a),
                                window.removeEventListener('keydown', a),
                                window.removeEventListener('change', a));
                    }),
                    r.observers.set(t, new D(t, n)),
                    n
                );
            }
            function F(e, t) {
                void 0 === t && (t = !1);
                var n = T.get(e.object);
                P(n.value, e.object, e.patches, '', t),
                    e.patches.length && A(n.value, e.patches);
                var r = e.patches;
                return (
                    r.length > 0 &&
                        ((e.patches = []), e.callback && e.callback(r)),
                    r
                );
            }
            function P(e, t, n, r, o) {
                if (t !== e) {
                    'function' == typeof t.toJSON && (t = t.toJSON());
                    for (
                        var i = u(t), a = u(e), s = !1, l = a.length - 1;
                        l >= 0;
                        l--
                    ) {
                        var f = e[(v = a[l])];
                        if (
                            !c(t, v) ||
                            (void 0 === t[v] &&
                                void 0 !== f &&
                                !1 === Array.isArray(t))
                        )
                            Array.isArray(e) === Array.isArray(t)
                                ? (o &&
                                      n.push({
                                          op: 'test',
                                          path: r + '/' + p(v),
                                          value: h(f),
                                      }),
                                  n.push({
                                      op: 'remove',
                                      path: r + '/' + p(v),
                                  }),
                                  (s = !0))
                                : (o &&
                                      n.push({ op: 'test', path: r, value: e }),
                                  n.push({ op: 'replace', path: r, value: t }));
                        else {
                            var d = t[v];
                            'object' == typeof f &&
                            null != f &&
                            'object' == typeof d &&
                            null != d &&
                            Array.isArray(f) === Array.isArray(d)
                                ? P(f, d, n, r + '/' + p(v), o)
                                : f !== d &&
                                  (o &&
                                      n.push({
                                          op: 'test',
                                          path: r + '/' + p(v),
                                          value: h(f),
                                      }),
                                  n.push({
                                      op: 'replace',
                                      path: r + '/' + p(v),
                                      value: h(d),
                                  }));
                        }
                    }
                    if (s || i.length != a.length)
                        for (l = 0; l < i.length; l++) {
                            var v;
                            c(e, (v = i[l])) ||
                                void 0 === t[v] ||
                                n.push({
                                    op: 'add',
                                    path: r + '/' + p(v),
                                    value: h(t[v]),
                                });
                        }
                }
            }
            function _(e, t, n) {
                void 0 === n && (n = !1);
                var r = [];
                return P(e, t, r, '', n), r;
            }
            Object.assign({}, r, o, {
                JsonPatchError: m,
                deepClone: h,
                escapePathComponent: p,
                unescapePathComponent: d,
            });
            var M = n(54459),
                j = n.n(M),
                z = n(11214),
                U = {
                    NaN: NaN,
                    E: Math.E,
                    LN2: Math.LN2,
                    LN10: Math.LN10,
                    LOG2E: Math.LOG2E,
                    LOG10E: Math.LOG10E,
                    PI: Math.PI,
                    SQRT1_2: Math.SQRT1_2,
                    SQRT2: Math.SQRT2,
                    MIN_VALUE: Number.MIN_VALUE,
                    MAX_VALUE: Number.MAX_VALUE,
                },
                B = {
                    '*': (e, t) => e * t,
                    '+': (e, t) => e + t,
                    '-': (e, t) => e - t,
                    '/': (e, t) => e / t,
                    '%': (e, t) => e % t,
                    '>': (e, t) => e > t,
                    '<': (e, t) => e < t,
                    '<=': (e, t) => e <= t,
                    '>=': (e, t) => e >= t,
                    '==': (e, t) => e == t,
                    '!=': (e, t) => e != t,
                    '===': (e, t) => e === t,
                    '!==': (e, t) => e !== t,
                    '&': (e, t) => e & t,
                    '|': (e, t) => e | t,
                    '^': (e, t) => e ^ t,
                    '<<': (e, t) => e << t,
                    '>>': (e, t) => e >> t,
                    '>>>': (e, t) => e >>> t,
                },
                G = { '+': e => +e, '-': e => -e, '~': e => ~e, '!': e => !e };
            const X = Array.prototype.slice,
                W = (e, t, n) => {
                    const r = n ? n(t[0]) : t[0];
                    return r[e].apply(r, X.call(t, 1));
                };
            var $ = {
                isNaN: Number.isNaN,
                isFinite: Number.isFinite,
                abs: Math.abs,
                acos: Math.acos,
                asin: Math.asin,
                atan: Math.atan,
                atan2: Math.atan2,
                ceil: Math.ceil,
                cos: Math.cos,
                exp: Math.exp,
                floor: Math.floor,
                log: Math.log,
                max: Math.max,
                min: Math.min,
                pow: Math.pow,
                random: Math.random,
                round: Math.round,
                sin: Math.sin,
                sqrt: Math.sqrt,
                tan: Math.tan,
                clamp: (e, t, n) => Math.max(t, Math.min(n, e)),
                now: Date.now,
                utc: Date.UTC,
                datetime: (e, t, n, r, o, i, a) =>
                    new Date(
                        e,
                        t || 0,
                        null != n ? n : 1,
                        r || 0,
                        o || 0,
                        i || 0,
                        a || 0
                    ),
                date: e => new Date(e).getDate(),
                day: e => new Date(e).getDay(),
                year: e => new Date(e).getFullYear(),
                month: e => new Date(e).getMonth(),
                hours: e => new Date(e).getHours(),
                minutes: e => new Date(e).getMinutes(),
                seconds: e => new Date(e).getSeconds(),
                milliseconds: e => new Date(e).getMilliseconds(),
                time: e => new Date(e).getTime(),
                timezoneoffset: e => new Date(e).getTimezoneOffset(),
                utcdate: e => new Date(e).getUTCDate(),
                utcday: e => new Date(e).getUTCDay(),
                utcyear: e => new Date(e).getUTCFullYear(),
                utcmonth: e => new Date(e).getUTCMonth(),
                utchours: e => new Date(e).getUTCHours(),
                utcminutes: e => new Date(e).getUTCMinutes(),
                utcseconds: e => new Date(e).getUTCSeconds(),
                utcmilliseconds: e => new Date(e).getUTCMilliseconds(),
                length: e => e.length,
                join: function() {
                    return W('join', arguments);
                },
                indexof: function() {
                    return W('indexOf', arguments);
                },
                lastindexof: function() {
                    return W('lastIndexOf', arguments);
                },
                slice: function() {
                    return W('slice', arguments);
                },
                reverse: e => e.slice().reverse(),
                parseFloat,
                parseInt,
                upper: e => String(e).toUpperCase(),
                lower: e => String(e).toLowerCase(),
                substring: function() {
                    return W('substring', arguments, String);
                },
                split: function() {
                    return W('split', arguments, String);
                },
                replace: function() {
                    return W('replace', arguments, String);
                },
                trim: e => String(e).trim(),
                regexp: RegExp,
                test: (e, t) => RegExp(e).test(t),
            };
            const V = ['view', 'item', 'group', 'xy', 'x', 'y'],
                H = {
                    Literal: (e, t) => t.value,
                    Identifier: (e, t) => {
                        const n = t.name;
                        return e.memberDepth > 0
                            ? n
                            : 'datum' === n
                            ? e.datum
                            : 'event' === n
                            ? e.event
                            : 'item' === n
                            ? e.item
                            : U[n] || e.params['$' + n];
                    },
                    MemberExpression: (e, t) => {
                        const n = !t.computed,
                            r = e(t.object);
                        n && (e.memberDepth += 1);
                        const o = e(t.property);
                        return n && (e.memberDepth -= 1), r[o];
                    },
                    CallExpression: (e, t) => {
                        const n = t.arguments;
                        let r = t.callee.name;
                        return (
                            r.startsWith('_') && (r = r.slice(1)),
                            'if' === r
                                ? e(n[0])
                                    ? e(n[1])
                                    : e(n[2])
                                : (e.fn[r] || $[r]).apply(e.fn, n.map(e))
                        );
                    },
                    ArrayExpression: (e, t) => t.elements.map(e),
                    BinaryExpression: (e, t) =>
                        B[t.operator](e(t.left), e(t.right)),
                    UnaryExpression: (e, t) => G[t.operator](e(t.argument)),
                    ConditionalExpression: (e, t) =>
                        e(t.test) ? e(t.consequent) : e(t.alternate),
                    LogicalExpression: (e, t) =>
                        '&&' === t.operator
                            ? e(t.left) && e(t.right)
                            : e(t.left) || e(t.right),
                    ObjectExpression: (e, t) =>
                        t.properties.reduce((t, n) => {
                            e.memberDepth += 1;
                            const r = e(n.key);
                            return (e.memberDepth -= 1), (t[r] = e(n.value)), t;
                        }, {}),
                };
            function J(e, t, n, r, o, i) {
                const a = e => H[e.type](a, e);
                return (
                    (a.memberDepth = 0),
                    (a.fn = Object.create(t)),
                    (a.params = n),
                    (a.datum = r),
                    (a.event = o),
                    (a.item = i),
                    V.forEach(e => (a.fn[e] = (...t) => o.vega[e](...t))),
                    a(e)
                );
            }
            var Y = {
                    operator(e, t) {
                        const n = t.ast,
                            r = e.functions;
                        return e => J(n, r, e);
                    },
                    parameter(e, t) {
                        const n = t.ast,
                            r = e.functions;
                        return (e, t) => J(n, r, t, e);
                    },
                    event(e, t) {
                        const n = t.ast,
                            r = e.functions;
                        return e => J(n, r, void 0, void 0, e);
                    },
                    handler(e, t) {
                        const n = t.ast,
                            r = e.functions;
                        return (e, t) => {
                            const o = t.item && t.item.datum;
                            return J(n, r, e, o, t);
                        };
                    },
                    encode(e, t) {
                        const { marktype: n, channels: r } = t,
                            o = e.functions,
                            i = 'group' === n || 'image' === n || 'rect' === n;
                        return (e, t) => {
                            const a = e.datum;
                            let s,
                                l = 0;
                            for (const n in r)
                                (s = J(r[n].ast, o, t, a, void 0, e)),
                                    e[n] !== s && ((e[n] = s), (l = 1));
                            return (
                                'rule' !== n &&
                                    (function(e, t, n) {
                                        let r;
                                        t.x2 &&
                                            (t.x
                                                ? (n &&
                                                      e.x > e.x2 &&
                                                      ((r = e.x),
                                                      (e.x = e.x2),
                                                      (e.x2 = r)),
                                                  (e.width = e.x2 - e.x))
                                                : (e.x =
                                                      e.x2 - (e.width || 0))),
                                            t.xc &&
                                                (e.x =
                                                    e.xc - (e.width || 0) / 2),
                                            t.y2 &&
                                                (t.y
                                                    ? (n &&
                                                          e.y > e.y2 &&
                                                          ((r = e.y),
                                                          (e.y = e.y2),
                                                          (e.y2 = r)),
                                                      (e.height = e.y2 - e.y))
                                                    : (e.y =
                                                          e.y2 -
                                                          (e.height || 0))),
                                            t.yc &&
                                                (e.y =
                                                    e.yc - (e.height || 0) / 2);
                                    })(e, r, i),
                                l
                            );
                        };
                    },
                },
                q = n(40123);
            const Q = function(e) {
                const [t, n] = /schema\/([\w-]+)\/([\w\.\-]+)\.json$/g
                    .exec(e)
                    .slice(1, 3);
                return { library: t, version: n };
            };
            const K = '#fff',
                Z = {
                    background: '#333',
                    title: { color: K, subtitleColor: K },
                    style: {
                        'guide-label': { fill: K },
                        'guide-title': { fill: K },
                    },
                    axis: { domainColor: K, gridColor: '#888', tickColor: K },
                },
                ee = '#4572a7',
                te = {
                    background: '#fff',
                    arc: { fill: ee },
                    area: { fill: ee },
                    line: { stroke: ee, strokeWidth: 2 },
                    path: { stroke: ee },
                    rect: { fill: ee },
                    shape: { stroke: ee },
                    symbol: { fill: ee, strokeWidth: 1.5, size: 50 },
                    axis: {
                        bandPosition: 0.5,
                        grid: !0,
                        gridColor: '#000000',
                        gridOpacity: 1,
                        gridWidth: 0.5,
                        labelPadding: 10,
                        tickSize: 5,
                        tickWidth: 0.5,
                    },
                    axisBand: { grid: !1, tickExtra: !0 },
                    legend: {
                        labelBaseline: 'middle',
                        labelFontSize: 11,
                        symbolSize: 50,
                        symbolType: 'square',
                    },
                    range: {
                        category: [
                            '#4572a7',
                            '#aa4643',
                            '#8aa453',
                            '#71598e',
                            '#4598ae',
                            '#d98445',
                            '#94aace',
                            '#d09393',
                            '#b9cc98',
                            '#a99cbc',
                        ],
                    },
                },
                ne = '#30a2da',
                re = '#cbcbcb',
                oe = '#f0f0f0',
                ie = '#333',
                ae = {
                    arc: { fill: ne },
                    area: { fill: ne },
                    axis: {
                        domainColor: re,
                        grid: !0,
                        gridColor: re,
                        gridWidth: 1,
                        labelColor: '#999',
                        labelFontSize: 10,
                        titleColor: '#333',
                        tickColor: re,
                        tickSize: 10,
                        titleFontSize: 14,
                        titlePadding: 10,
                        labelPadding: 4,
                    },
                    axisBand: { grid: !1 },
                    background: oe,
                    group: { fill: oe },
                    legend: {
                        labelColor: ie,
                        labelFontSize: 11,
                        padding: 1,
                        symbolSize: 30,
                        symbolType: 'square',
                        titleColor: ie,
                        titleFontSize: 14,
                        titlePadding: 10,
                    },
                    line: { stroke: ne, strokeWidth: 2 },
                    path: { stroke: ne, strokeWidth: 0.5 },
                    rect: { fill: ne },
                    range: {
                        category: [
                            '#30a2da',
                            '#fc4f30',
                            '#e5ae38',
                            '#6d904f',
                            '#8b8b8b',
                            '#b96db8',
                            '#ff9e27',
                            '#56cc60',
                            '#52d2ca',
                            '#52689e',
                            '#545454',
                            '#9fe4f8',
                        ],
                        diverging: [
                            '#cc0020',
                            '#e77866',
                            '#f6e7e1',
                            '#d6e8ed',
                            '#91bfd9',
                            '#1d78b5',
                        ],
                        heatmap: [
                            '#d6e8ed',
                            '#cee0e5',
                            '#91bfd9',
                            '#549cc6',
                            '#1d78b5',
                        ],
                    },
                    point: { filled: !0, shape: 'circle' },
                    shape: { stroke: ne },
                    bar: { binSpacing: 2, fill: ne, stroke: null },
                    title: {
                        anchor: 'start',
                        fontSize: 24,
                        fontWeight: 600,
                        offset: 20,
                    },
                },
                se = '#000',
                le = {
                    group: { fill: '#e5e5e5' },
                    arc: { fill: se },
                    area: { fill: se },
                    line: { stroke: se },
                    path: { stroke: se },
                    rect: { fill: se },
                    shape: { stroke: se },
                    symbol: { fill: se, size: 40 },
                    axis: {
                        domain: !1,
                        grid: !0,
                        gridColor: '#FFFFFF',
                        gridOpacity: 1,
                        labelColor: '#7F7F7F',
                        labelPadding: 4,
                        tickColor: '#7F7F7F',
                        tickSize: 5.67,
                        titleFontSize: 16,
                        titleFontWeight: 'normal',
                    },
                    legend: {
                        labelBaseline: 'middle',
                        labelFontSize: 11,
                        symbolSize: 40,
                    },
                    range: {
                        category: [
                            '#000000',
                            '#7F7F7F',
                            '#1A1A1A',
                            '#999999',
                            '#333333',
                            '#B0B0B0',
                            '#4D4D4D',
                            '#C9C9C9',
                            '#666666',
                            '#DCDCDC',
                        ],
                    },
                },
                ce = 'Benton Gothic, sans-serif',
                ue = '#82c6df',
                he = 'Benton Gothic Bold, sans-serif',
                fe = 'normal',
                pe = {
                    'category-6': [
                        '#ec8431',
                        '#829eb1',
                        '#c89d29',
                        '#3580b1',
                        '#adc839',
                        '#ab7fb4',
                    ],
                    'fire-7': [
                        '#fbf2c7',
                        '#f9e39c',
                        '#f8d36e',
                        '#f4bb6a',
                        '#e68a4f',
                        '#d15a40',
                        '#ab4232',
                    ],
                    'fireandice-6': [
                        '#e68a4f',
                        '#f4bb6a',
                        '#f9e39c',
                        '#dadfe2',
                        '#a6b7c6',
                        '#849eae',
                    ],
                    'ice-7': [
                        '#edefee',
                        '#dadfe2',
                        '#c4ccd2',
                        '#a6b7c6',
                        '#849eae',
                        '#607785',
                        '#47525d',
                    ],
                },
                de = {
                    background: '#ffffff',
                    title: {
                        anchor: 'start',
                        color: '#000000',
                        font: he,
                        fontSize: 22,
                        fontWeight: 'normal',
                    },
                    arc: { fill: ue },
                    area: { fill: ue },
                    line: { stroke: ue, strokeWidth: 2 },
                    path: { stroke: ue },
                    rect: { fill: ue },
                    shape: { stroke: ue },
                    symbol: { fill: ue, size: 30 },
                    axis: {
                        labelFont: ce,
                        labelFontSize: 11.5,
                        labelFontWeight: 'normal',
                        titleFont: he,
                        titleFontSize: 13,
                        titleFontWeight: fe,
                    },
                    axisX: { labelAngle: 0, labelPadding: 4, tickSize: 3 },
                    axisY: {
                        labelBaseline: 'middle',
                        maxExtent: 45,
                        minExtent: 45,
                        tickSize: 2,
                        titleAlign: 'left',
                        titleAngle: 0,
                        titleX: -45,
                        titleY: -11,
                    },
                    legend: {
                        labelFont: ce,
                        labelFontSize: 11.5,
                        symbolType: 'square',
                        titleFont: he,
                        titleFontSize: 13,
                        titleFontWeight: fe,
                    },
                    range: {
                        category: pe['category-6'],
                        diverging: pe['fireandice-6'],
                        heatmap: pe['fire-7'],
                        ordinal: pe['fire-7'],
                        ramp: pe['fire-7'],
                    },
                },
                ve = '#ab5787',
                ge = '#979797',
                me = {
                    background: '#f9f9f9',
                    arc: { fill: ve },
                    area: { fill: ve },
                    line: { stroke: ve },
                    path: { stroke: ve },
                    rect: { fill: ve },
                    shape: { stroke: ve },
                    symbol: { fill: ve, size: 30 },
                    axis: {
                        domainColor: ge,
                        domainWidth: 0.5,
                        gridWidth: 0.2,
                        labelColor: ge,
                        tickColor: ge,
                        tickWidth: 0.2,
                        titleColor: ge,
                    },
                    axisBand: { grid: !1 },
                    axisX: { grid: !0, tickSize: 10 },
                    axisY: { domain: !1, grid: !0, tickSize: 0 },
                    legend: {
                        labelFontSize: 11,
                        padding: 1,
                        symbolSize: 30,
                        symbolType: 'square',
                    },
                    range: {
                        category: [
                            '#ab5787',
                            '#51b2e5',
                            '#703c5c',
                            '#168dd9',
                            '#d190b6',
                            '#00609f',
                            '#d365ba',
                            '#154866',
                            '#666666',
                            '#c4c4c4',
                        ],
                    },
                },
                ye = '#3e5c69',
                Ee = {
                    background: '#fff',
                    arc: { fill: ye },
                    area: { fill: ye },
                    line: { stroke: ye },
                    path: { stroke: ye },
                    rect: { fill: ye },
                    shape: { stroke: ye },
                    symbol: { fill: ye },
                    axis: {
                        domainWidth: 0.5,
                        grid: !0,
                        labelPadding: 2,
                        tickSize: 5,
                        tickWidth: 0.5,
                        titleFontWeight: 'normal',
                    },
                    axisBand: { grid: !1 },
                    axisX: { gridWidth: 0.2 },
                    axisY: { gridDash: [3], gridWidth: 0.4 },
                    legend: {
                        labelFontSize: 11,
                        padding: 1,
                        symbolType: 'square',
                    },
                    range: {
                        category: [
                            '#3e5c69',
                            '#6793a6',
                            '#182429',
                            '#0570b0',
                            '#3690c0',
                            '#74a9cf',
                            '#a6bddb',
                            '#e2ddf2',
                        ],
                    },
                },
                be = '#1696d2',
                we = '#000000',
                xe = 'Lato',
                Oe = 'Lato',
                Ae = {
                    'main-colors': [
                        '#1696d2',
                        '#d2d2d2',
                        '#000000',
                        '#fdbf11',
                        '#ec008b',
                        '#55b748',
                        '#5c5859',
                        '#db2b27',
                    ],
                    'shades-blue': [
                        '#CFE8F3',
                        '#A2D4EC',
                        '#73BFE2',
                        '#46ABDB',
                        '#1696D2',
                        '#12719E',
                        '#0A4C6A',
                        '#062635',
                    ],
                    'shades-gray': [
                        '#F5F5F5',
                        '#ECECEC',
                        '#E3E3E3',
                        '#DCDBDB',
                        '#D2D2D2',
                        '#9D9D9D',
                        '#696969',
                        '#353535',
                    ],
                    'shades-yellow': [
                        '#FFF2CF',
                        '#FCE39E',
                        '#FDD870',
                        '#FCCB41',
                        '#FDBF11',
                        '#E88E2D',
                        '#CA5800',
                        '#843215',
                    ],
                    'shades-magenta': [
                        '#F5CBDF',
                        '#EB99C2',
                        '#E46AA7',
                        '#E54096',
                        '#EC008B',
                        '#AF1F6B',
                        '#761548',
                        '#351123',
                    ],
                    'shades-green': [
                        '#DCEDD9',
                        '#BCDEB4',
                        '#98CF90',
                        '#78C26D',
                        '#55B748',
                        '#408941',
                        '#2C5C2D',
                        '#1A2E19',
                    ],
                    'shades-black': [
                        '#D5D5D4',
                        '#ADABAC',
                        '#848081',
                        '#5C5859',
                        '#332D2F',
                        '#262223',
                        '#1A1717',
                        '#0E0C0D',
                    ],
                    'shades-red': [
                        '#F8D5D4',
                        '#F1AAA9',
                        '#E9807D',
                        '#E25552',
                        '#DB2B27',
                        '#A4201D',
                        '#6E1614',
                        '#370B0A',
                    ],
                    'one-group': ['#1696d2', '#000000'],
                    'two-groups-cat-1': ['#1696d2', '#000000'],
                    'two-groups-cat-2': ['#1696d2', '#fdbf11'],
                    'two-groups-cat-3': ['#1696d2', '#db2b27'],
                    'two-groups-seq': ['#a2d4ec', '#1696d2'],
                    'three-groups-cat': ['#1696d2', '#fdbf11', '#000000'],
                    'three-groups-seq': ['#a2d4ec', '#1696d2', '#0a4c6a'],
                    'four-groups-cat-1': [
                        '#000000',
                        '#d2d2d2',
                        '#fdbf11',
                        '#1696d2',
                    ],
                    'four-groups-cat-2': [
                        '#1696d2',
                        '#ec0008b',
                        '#fdbf11',
                        '#5c5859',
                    ],
                    'four-groups-seq': [
                        '#cfe8f3',
                        '#73bf42',
                        '#1696d2',
                        '#0a4c6a',
                    ],
                    'five-groups-cat-1': [
                        '#1696d2',
                        '#fdbf11',
                        '#d2d2d2',
                        '#ec008b',
                        '#000000',
                    ],
                    'five-groups-cat-2': [
                        '#1696d2',
                        '#0a4c6a',
                        '#d2d2d2',
                        '#fdbf11',
                        '#332d2f',
                    ],
                    'five-groups-seq': [
                        '#cfe8f3',
                        '#73bf42',
                        '#1696d2',
                        '#0a4c6a',
                        '#000000',
                    ],
                    'six-groups-cat-1': [
                        '#1696d2',
                        '#ec008b',
                        '#fdbf11',
                        '#000000',
                        '#d2d2d2',
                        '#55b748',
                    ],
                    'six-groups-cat-2': [
                        '#1696d2',
                        '#d2d2d2',
                        '#ec008b',
                        '#fdbf11',
                        '#332d2f',
                        '#0a4c6a',
                    ],
                    'six-groups-seq': [
                        '#cfe8f3',
                        '#a2d4ec',
                        '#73bfe2',
                        '#46abdb',
                        '#1696d2',
                        '#12719e',
                    ],
                    'diverging-colors': [
                        '#ca5800',
                        '#fdbf11',
                        '#fdd870',
                        '#fff2cf',
                        '#cfe8f3',
                        '#73bfe2',
                        '#1696d2',
                        '#0a4c6a',
                    ],
                },
                Ie = {
                    background: '#FFFFFF',
                    title: { anchor: 'start', fontSize: 18, font: xe },
                    axisX: {
                        domain: !0,
                        domainColor: we,
                        domainWidth: 1,
                        grid: !1,
                        labelFontSize: 12,
                        labelFont: Oe,
                        labelAngle: 0,
                        tickColor: we,
                        tickSize: 5,
                        titleFontSize: 12,
                        titlePadding: 10,
                        titleFont: xe,
                    },
                    axisY: {
                        domain: !1,
                        domainWidth: 1,
                        grid: !0,
                        gridColor: '#DEDDDD',
                        gridWidth: 1,
                        labelFontSize: 12,
                        labelFont: Oe,
                        labelPadding: 8,
                        ticks: !1,
                        titleFontSize: 12,
                        titlePadding: 10,
                        titleFont: xe,
                        titleAngle: 0,
                        titleY: -10,
                        titleX: 18,
                    },
                    legend: {
                        labelFontSize: 12,
                        labelFont: Oe,
                        symbolSize: 100,
                        titleFontSize: 12,
                        titlePadding: 10,
                        titleFont: xe,
                        orient: 'right',
                        offset: 10,
                    },
                    view: { stroke: 'transparent' },
                    range: {
                        category: Ae['six-groups-cat-1'],
                        diverging: Ae['diverging-colors'],
                        heatmap: Ae['diverging-colors'],
                        ordinal: Ae['six-groups-seq'],
                        ramp: Ae['shades-blue'],
                    },
                    area: { fill: be },
                    rect: { fill: be },
                    line: { color: be, stroke: be, strokeWidth: 5 },
                    trail: { color: be, stroke: be, strokeWidth: 0, size: 1 },
                    path: { stroke: be, strokeWidth: 0.5 },
                    point: { filled: !0 },
                    text: {
                        font: 'Lato',
                        color: be,
                        fontSize: 11,
                        align: 'center',
                        fontWeight: 400,
                        size: 11,
                    },
                    style: { bar: { fill: be, stroke: null } },
                    arc: { fill: be },
                    shape: { stroke: be },
                    symbol: { fill: be, size: 30 },
                },
                Ne = '#3366CC',
                Le = '#ccc',
                Se = 'Arial, sans-serif',
                Te = {
                    arc: { fill: Ne },
                    area: { fill: Ne },
                    path: { stroke: Ne },
                    rect: { fill: Ne },
                    shape: { stroke: Ne },
                    symbol: { stroke: Ne },
                    circle: { fill: Ne },
                    background: '#fff',
                    padding: { top: 10, right: 10, bottom: 10, left: 10 },
                    style: {
                        'guide-label': { font: Se, fontSize: 12 },
                        'guide-title': { font: Se, fontSize: 12 },
                        'group-title': { font: Se, fontSize: 12 },
                    },
                    title: {
                        font: Se,
                        fontSize: 14,
                        fontWeight: 'bold',
                        dy: -3,
                        anchor: 'start',
                    },
                    axis: {
                        gridColor: Le,
                        tickColor: Le,
                        domain: !1,
                        grid: !0,
                    },
                    range: {
                        category: [
                            '#4285F4',
                            '#DB4437',
                            '#F4B400',
                            '#0F9D58',
                            '#AB47BC',
                            '#00ACC1',
                            '#FF7043',
                            '#9E9D24',
                            '#5C6BC0',
                            '#F06292',
                            '#00796B',
                            '#C2185B',
                        ],
                        heatmap: ['#c6dafc', '#5e97f6', '#2a56c6'],
                    },
                },
                Re = e => e * (1 / 3 + 1),
                De = Re(9),
                Ce = Re(10),
                ke = Re(12),
                Fe = 'Segoe UI',
                Pe = 'wf_standard-font, helvetica, arial, sans-serif',
                _e = '#252423',
                Me = '#605E5C',
                je = 'transparent',
                ze = '#118DFF',
                Ue = '#DEEFFF',
                Be = [Ue, ze],
                Ge = {
                    view: { stroke: je },
                    background: je,
                    font: Fe,
                    header: {
                        titleFont: Pe,
                        titleFontSize: ke,
                        titleColor: _e,
                        labelFont: Fe,
                        labelFontSize: Ce,
                        labelColor: Me,
                    },
                    axis: {
                        ticks: !1,
                        grid: !1,
                        domain: !1,
                        labelColor: Me,
                        labelFontSize: De,
                        titleFont: Pe,
                        titleColor: _e,
                        titleFontSize: ke,
                        titleFontWeight: 'normal',
                    },
                    axisQuantitative: {
                        tickCount: 3,
                        grid: !0,
                        gridColor: '#C8C6C4',
                        gridDash: [1, 5],
                        labelFlush: !1,
                    },
                    axisBand: { tickExtra: !0 },
                    axisX: { labelPadding: 5 },
                    axisY: { labelPadding: 10 },
                    bar: { fill: ze },
                    line: {
                        stroke: ze,
                        strokeWidth: 3,
                        strokeCap: 'round',
                        strokeJoin: 'round',
                    },
                    text: { font: Fe, fontSize: De, fill: Me },
                    arc: { fill: ze },
                    area: { fill: ze, line: !0, opacity: 0.6 },
                    path: { stroke: ze },
                    rect: { fill: ze },
                    point: { fill: ze, filled: !0, size: 75 },
                    shape: { stroke: ze },
                    symbol: { fill: ze, strokeWidth: 1.5, size: 50 },
                    legend: {
                        titleFont: Fe,
                        titleFontWeight: 'bold',
                        titleColor: Me,
                        labelFont: Fe,
                        labelFontSize: Ce,
                        labelColor: Me,
                        symbolType: 'circle',
                        symbolSize: 75,
                    },
                    range: {
                        category: [
                            ze,
                            '#12239E',
                            '#E66C37',
                            '#6B007B',
                            '#E044A7',
                            '#744EC2',
                            '#D9B300',
                            '#D64550',
                        ],
                        diverging: Be,
                        heatmap: Be,
                        ordinal: [
                            Ue,
                            '#c7e4ff',
                            '#b0d9ff',
                            '#9aceff',
                            '#83c3ff',
                            '#6cb9ff',
                            '#55aeff',
                            '#3fa3ff',
                            '#2898ff',
                            ze,
                        ],
                    },
                },
                Xe = '2.10.0';
            var We = n(68542);
            function $e(e, t) {
                return JSON.stringify(
                    e,
                    (function(e) {
                        const t = [];
                        return function(n, r) {
                            if ('object' != typeof r || null === r) return r;
                            const o = t.indexOf(this) + 1;
                            return (
                                (t.length = o),
                                t.length > e
                                    ? '[Object]'
                                    : t.indexOf(r) >= 0
                                    ? '[Circular]'
                                    : (t.push(r), r)
                            );
                        };
                    })(t)
                );
            }
            const Ve = 'vg-tooltip-element',
                He = {
                    offsetX: 10,
                    offsetY: 10,
                    id: Ve,
                    styleId: 'vega-tooltip-style',
                    theme: 'light',
                    disableDefaultStyle: !1,
                    sanitize: function(e) {
                        return String(e)
                            .replace(/&/g, '&amp;')
                            .replace(/</g, '&lt;');
                    },
                    maxDepth: 2,
                    formatTooltip: function(e, t, n) {
                        if ((0, We.kJ)(e))
                            return `[${e
                                .map(e => t((0, We.HD)(e) ? e : $e(e, n)))
                                .join(', ')}]`;
                        if ((0, We.Kn)(e)) {
                            let r = '';
                            const o = e,
                                { title: i, image: a } = o,
                                s = (function(e, t) {
                                    var n = {};
                                    for (var r in e)
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            r
                                        ) &&
                                            t.indexOf(r) < 0 &&
                                            (n[r] = e[r]);
                                    if (
                                        null != e &&
                                        'function' ==
                                            typeof Object.getOwnPropertySymbols
                                    ) {
                                        var o = 0;
                                        for (
                                            r = Object.getOwnPropertySymbols(e);
                                            o < r.length;
                                            o++
                                        )
                                            t.indexOf(r[o]) < 0 &&
                                                Object.prototype.propertyIsEnumerable.call(
                                                    e,
                                                    r[o]
                                                ) &&
                                                (n[r[o]] = e[r[o]]);
                                    }
                                    return n;
                                })(o, ['title', 'image']);
                            i && (r += `<h2>${t(i)}</h2>`),
                                a && (r += `<img src="${t(a)}">`);
                            const l = Object.keys(s);
                            if (l.length > 0) {
                                r += '<table>';
                                for (const e of l) {
                                    let o = s[e];
                                    void 0 !== o &&
                                        ((0, We.Kn)(o) && (o = $e(o, n)),
                                        (r += `<tr><td class="key">${t(
                                            e
                                        )}:</td><td class="value">${t(
                                            o
                                        )}</td></tr>`));
                                }
                                r += '</table>';
                            }
                            return r || '{}';
                        }
                        return t(e);
                    },
                };
            class Je {
                constructor(e) {
                    this.options = Object.assign(Object.assign({}, He), e);
                    const t = this.options.id;
                    if (
                        ((this.el = null),
                        (this.call = this.tooltipHandler.bind(this)),
                        !this.options.disableDefaultStyle &&
                            !document.getElementById(this.options.styleId))
                    ) {
                        const e = document.createElement('style');
                        e.setAttribute('id', this.options.styleId),
                            (e.innerHTML = (function(e) {
                                if (!/^[A-Za-z]+[-:.\w]*$/.test(e))
                                    throw new Error('Invalid HTML ID');
                                return '#vg-tooltip-element {\n  visibility: hidden;\n  padding: 8px;\n  position: fixed;\n  z-index: 1000;\n  font-family: sans-serif;\n  font-size: 11px;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n  /* The default theme is the light theme. */\n  background-color: rgba(255, 255, 255, 0.95);\n  border: 1px solid #d9d9d9;\n  color: black;\n}\n#vg-tooltip-element.visible {\n  visibility: visible;\n}\n#vg-tooltip-element h2 {\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 13px;\n}\n#vg-tooltip-element img {\n  max-width: 200px;\n  max-height: 200px;\n}\n#vg-tooltip-element table {\n  border-spacing: 0;\n}\n#vg-tooltip-element table tr {\n  border: none;\n}\n#vg-tooltip-element table tr td {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n#vg-tooltip-element table tr td.key {\n  color: #808080;\n  max-width: 150px;\n  text-align: right;\n  padding-right: 4px;\n}\n#vg-tooltip-element table tr td.value {\n  display: block;\n  max-width: 300px;\n  max-height: 7em;\n  text-align: left;\n}\n#vg-tooltip-element.dark-theme {\n  background-color: rgba(32, 32, 32, 0.9);\n  border: 1px solid #f5f5f5;\n  color: white;\n}\n#vg-tooltip-element.dark-theme td.key {\n  color: #bfbfbf;\n}\n'
                                    .toString()
                                    .replace(Ve, e);
                            })(t));
                        const n = document.head;
                        n.childNodes.length > 0
                            ? n.insertBefore(e, n.childNodes[0])
                            : n.appendChild(e);
                    }
                }
                tooltipHandler(e, t, n, r) {
                    var o;
                    if (
                        ((this.el = document.getElementById(this.options.id)),
                        this.el ||
                            ((this.el = document.createElement('div')),
                            this.el.setAttribute('id', this.options.id),
                            this.el.classList.add('vg-tooltip'),
                            (null !== (o = document.fullscreenElement) &&
                            void 0 !== o
                                ? o
                                : document.body
                            ).appendChild(this.el)),
                        null == r || '' === r)
                    )
                        return void this.el.classList.remove(
                            'visible',
                            `${this.options.theme}-theme`
                        );
                    (this.el.innerHTML = this.options.formatTooltip(
                        r,
                        this.options.sanitize,
                        this.options.maxDepth
                    )),
                        this.el.classList.add(
                            'visible',
                            `${this.options.theme}-theme`
                        );
                    const { x: i, y: a } = (function(e, t, n, r) {
                        let o = e.clientX + n;
                        o + t.width > window.innerWidth &&
                            (o = +e.clientX - n - t.width);
                        let i = e.clientY + r;
                        return (
                            i + t.height > window.innerHeight &&
                                (i = +e.clientY - r - t.height),
                            { x: o, y: i }
                        );
                    })(
                        t,
                        this.el.getBoundingClientRect(),
                        this.options.offsetX,
                        this.options.offsetY
                    );
                    this.el.setAttribute('style', `top: ${a}px; left: ${i}px`);
                }
            }
            function Ye(e, t, n) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n),
                    e
                );
            }
            function qe(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        l = s.value;
                } catch (e) {
                    return void n(e);
                }
                s.done ? t(l) : Promise.resolve(l).then(r, o);
            }
            function Qe(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = e.apply(t, n);
                        function a(e) {
                            qe(i, r, o, a, s, 'next', e);
                        }
                        function s(e) {
                            qe(i, r, o, a, s, 'throw', e);
                        }
                        a(void 0);
                    });
                };
            }
            var Ke,
                Ze = Object.prototype,
                et = Ze.hasOwnProperty,
                tt = 'function' == typeof Symbol ? Symbol : {},
                nt = tt.iterator || '@@iterator',
                rt = tt.asyncIterator || '@@asyncIterator',
                ot = tt.toStringTag || '@@toStringTag';
            function it(e, t, n, r) {
                var o = t && t.prototype instanceof ft ? t : ft,
                    i = Object.create(o.prototype),
                    a = new It(r || []);
                return (
                    (i._invoke = (function(e, t, n) {
                        var r = st;
                        return function(o, i) {
                            if (r === ct)
                                throw new Error('Generator is already running');
                            if (r === ut) {
                                if ('throw' === o) throw i;
                                return Lt();
                            }
                            for (n.method = o, n.arg = i; ; ) {
                                var a = n.delegate;
                                if (a) {
                                    var s = xt(a, n);
                                    if (s) {
                                        if (s === ht) continue;
                                        return s;
                                    }
                                }
                                if ('next' === n.method)
                                    n.sent = n._sent = n.arg;
                                else if ('throw' === n.method) {
                                    if (r === st) throw ((r = ut), n.arg);
                                    n.dispatchException(n.arg);
                                } else
                                    'return' === n.method &&
                                        n.abrupt('return', n.arg);
                                r = ct;
                                var l = at(e, t, n);
                                if ('normal' === l.type) {
                                    if (((r = n.done ? ut : lt), l.arg === ht))
                                        continue;
                                    return { value: l.arg, done: n.done };
                                }
                                'throw' === l.type &&
                                    ((r = ut),
                                    (n.method = 'throw'),
                                    (n.arg = l.arg));
                            }
                        };
                    })(e, n, a)),
                    i
                );
            }
            function at(e, t, n) {
                try {
                    return { type: 'normal', arg: e.call(t, n) };
                } catch (e) {
                    return { type: 'throw', arg: e };
                }
            }
            var st = 'suspendedStart',
                lt = 'suspendedYield',
                ct = 'executing',
                ut = 'completed',
                ht = {};
            function ft() {}
            function pt() {}
            function dt() {}
            var vt = {};
            vt[nt] = function() {
                return this;
            };
            var gt = Object.getPrototypeOf,
                mt = gt && gt(gt(Nt([])));
            mt && mt !== Ze && et.call(mt, nt) && (vt = mt);
            var yt = (dt.prototype = ft.prototype = Object.create(vt));
            function Et(e) {
                ['next', 'throw', 'return'].forEach(function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e);
                    };
                });
            }
            function bt(e) {
                var t = 'function' == typeof e && e.constructor;
                return (
                    !!t &&
                    (t === pt ||
                        'GeneratorFunction' === (t.displayName || t.name))
                );
            }
            function wt(e, t) {
                function n(r, o, i, a) {
                    var s = at(e[r], e, o);
                    if ('throw' !== s.type) {
                        var l = s.arg,
                            c = l.value;
                        return c &&
                            'object' == typeof c &&
                            et.call(c, '__await')
                            ? t.resolve(c.__await).then(
                                  function(e) {
                                      n('next', e, i, a);
                                  },
                                  function(e) {
                                      n('throw', e, i, a);
                                  }
                              )
                            : t.resolve(c).then(
                                  function(e) {
                                      (l.value = e), i(l);
                                  },
                                  function(e) {
                                      return n('throw', e, i, a);
                                  }
                              );
                    }
                    a(s.arg);
                }
                var r;
                this._invoke = function(e, o) {
                    function i() {
                        return new t(function(t, r) {
                            n(e, o, t, r);
                        });
                    }
                    return (r = r ? r.then(i, i) : i());
                };
            }
            function xt(e, t) {
                var n = e.iterator[t.method];
                if (n === Ke) {
                    if (((t.delegate = null), 'throw' === t.method)) {
                        if (
                            e.iterator.return &&
                            ((t.method = 'return'),
                            (t.arg = Ke),
                            xt(e, t),
                            'throw' === t.method)
                        )
                            return ht;
                        (t.method = 'throw'),
                            (t.arg = new TypeError(
                                "The iterator does not provide a 'throw' method"
                            ));
                    }
                    return ht;
                }
                var r = at(n, e.iterator, t.arg);
                if ('throw' === r.type)
                    return (
                        (t.method = 'throw'),
                        (t.arg = r.arg),
                        (t.delegate = null),
                        ht
                    );
                var o = r.arg;
                return o
                    ? o.done
                        ? ((t[e.resultName] = o.value),
                          (t.next = e.nextLoc),
                          'return' !== t.method &&
                              ((t.method = 'next'), (t.arg = Ke)),
                          (t.delegate = null),
                          ht)
                        : o
                    : ((t.method = 'throw'),
                      (t.arg = new TypeError(
                          'iterator result is not an object'
                      )),
                      (t.delegate = null),
                      ht);
            }
            function Ot(e) {
                var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]),
                    2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                    this.tryEntries.push(t);
            }
            function At(e) {
                var t = e.completion || {};
                (t.type = 'normal'), delete t.arg, (e.completion = t);
            }
            function It(e) {
                (this.tryEntries = [{ tryLoc: 'root' }]),
                    e.forEach(Ot, this),
                    this.reset(!0);
            }
            function Nt(e) {
                if (e) {
                    var t = e[nt];
                    if (t) return t.call(e);
                    if ('function' == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n = -1,
                            r = function t() {
                                for (; ++n < e.length; )
                                    if (et.call(e, n))
                                        return (
                                            (t.value = e[n]), (t.done = !1), t
                                        );
                                return (t.value = Ke), (t.done = !0), t;
                            };
                        return (r.next = r);
                    }
                }
                return { next: Lt };
            }
            function Lt() {
                return { value: Ke, done: !0 };
            }
            (pt.prototype = yt.constructor = dt),
                (dt.constructor = pt),
                (dt[ot] = pt.displayName = 'GeneratorFunction'),
                Et(wt.prototype),
                (wt.prototype[rt] = function() {
                    return this;
                }),
                Et(yt),
                (yt[ot] = 'Generator'),
                (yt[nt] = function() {
                    return this;
                }),
                (yt.toString = function() {
                    return '[object Generator]';
                }),
                (It.prototype = {
                    constructor: It,
                    reset: function(e) {
                        if (
                            ((this.prev = 0),
                            (this.next = 0),
                            (this.sent = this._sent = Ke),
                            (this.done = !1),
                            (this.delegate = null),
                            (this.method = 'next'),
                            (this.arg = Ke),
                            this.tryEntries.forEach(At),
                            !e)
                        )
                            for (var t in this)
                                't' === t.charAt(0) &&
                                    et.call(this, t) &&
                                    !isNaN(+t.slice(1)) &&
                                    (this[t] = Ke);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ('throw' === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;
                        function n(n, r) {
                            return (
                                (i.type = 'throw'),
                                (i.arg = e),
                                (t.next = n),
                                r && ((t.method = 'next'), (t.arg = Ke)),
                                !!r
                            );
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ('root' === o.tryLoc) return n('end');
                            if (o.tryLoc <= this.prev) {
                                var a = et.call(o, 'catchLoc'),
                                    s = et.call(o, 'finallyLoc');
                                if (a && s) {
                                    if (this.prev < o.catchLoc)
                                        return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc)
                                        return n(o.finallyLoc);
                                } else if (a) {
                                    if (this.prev < o.catchLoc)
                                        return n(o.catchLoc, !0);
                                } else {
                                    if (!s)
                                        throw new Error(
                                            'try statement without catch or finally'
                                        );
                                    if (this.prev < o.finallyLoc)
                                        return n(o.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (
                                r.tryLoc <= this.prev &&
                                et.call(r, 'finallyLoc') &&
                                this.prev < r.finallyLoc
                            ) {
                                var o = r;
                                break;
                            }
                        }
                        o &&
                            ('break' === e || 'continue' === e) &&
                            o.tryLoc <= t &&
                            t <= o.finallyLoc &&
                            (o = null);
                        var i = o ? o.completion : {};
                        return (
                            (i.type = e),
                            (i.arg = t),
                            o
                                ? ((this.method = 'next'),
                                  (this.next = o.finallyLoc),
                                  ht)
                                : this.complete(i)
                        );
                    },
                    complete: function(e, t) {
                        if ('throw' === e.type) throw e.arg;
                        return (
                            'break' === e.type || 'continue' === e.type
                                ? (this.next = e.arg)
                                : 'return' === e.type
                                ? ((this.rval = this.arg = e.arg),
                                  (this.method = 'return'),
                                  (this.next = 'end'))
                                : 'normal' === e.type && t && (this.next = t),
                            ht
                        );
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e)
                                return (
                                    this.complete(n.completion, n.afterLoc),
                                    At(n),
                                    ht
                                );
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ('throw' === r.type) {
                                    var o = r.arg;
                                    At(n);
                                }
                                return o;
                            }
                        }
                        throw new Error('illegal catch attempt');
                    },
                    delegateYield: function(e, t, n) {
                        return (
                            (this.delegate = {
                                iterator: Nt(e),
                                resultName: t,
                                nextLoc: n,
                            }),
                            'next' === this.method && (this.arg = Ke),
                            ht
                        );
                    },
                });
            var St = {
                    wrap: it,
                    isGeneratorFunction: bt,
                    AsyncIterator: wt,
                    mark: function(e) {
                        return (
                            Object.setPrototypeOf
                                ? Object.setPrototypeOf(e, dt)
                                : ((e.__proto__ = dt),
                                  ot in e || (e[ot] = 'GeneratorFunction')),
                            (e.prototype = Object.create(yt)),
                            e
                        );
                    },
                    awrap: function(e) {
                        return { __await: e };
                    },
                    async: function(e, t, n, r, o) {
                        void 0 === o && (o = Promise);
                        var i = new wt(it(e, t, n, r), o);
                        return bt(t)
                            ? i
                            : i.next().then(function(e) {
                                  return e.done ? e.value : i.next();
                              });
                    },
                    keys: function(e) {
                        var t = [];
                        for (var n in e) t.push(n);
                        return (
                            t.reverse(),
                            function n() {
                                for (; t.length; ) {
                                    var r = t.pop();
                                    if (r in e)
                                        return (n.value = r), (n.done = !1), n;
                                }
                                return (n.done = !0), n;
                            }
                        );
                    },
                    values: Nt,
                },
                Tt = Rt;
            function Rt(e) {
                var t = this;
                if (
                    (t instanceof Rt || (t = new Rt()),
                    (t.tail = null),
                    (t.head = null),
                    (t.length = 0),
                    e && 'function' == typeof e.forEach)
                )
                    e.forEach(function(e) {
                        t.push(e);
                    });
                else if (arguments.length > 0)
                    for (var n = 0, r = arguments.length; n < r; n++)
                        t.push(arguments[n]);
                return t;
            }
            function Dt(e, t, n) {
                var r =
                    t === e.head
                        ? new Ft(n, null, t, e)
                        : new Ft(n, t, t.next, e);
                return (
                    null === r.next && (e.tail = r),
                    null === r.prev && (e.head = r),
                    e.length++,
                    r
                );
            }
            function Ct(e, t) {
                (e.tail = new Ft(t, e.tail, null, e)),
                    e.head || (e.head = e.tail),
                    e.length++;
            }
            function kt(e, t) {
                (e.head = new Ft(t, null, e.head, e)),
                    e.tail || (e.tail = e.head),
                    e.length++;
            }
            function Ft(e, t, n, r) {
                if (!(this instanceof Ft)) return new Ft(e, t, n, r);
                (this.list = r),
                    (this.value = e),
                    t ? ((t.next = this), (this.prev = t)) : (this.prev = null),
                    n ? ((n.prev = this), (this.next = n)) : (this.next = null);
            }
            (Rt.Node = Ft),
                (Rt.create = Rt),
                (Rt.prototype.removeNode = function(e) {
                    if (e.list !== this)
                        throw new Error(
                            'removing node which does not belong to this list'
                        );
                    var t = e.next,
                        n = e.prev;
                    return (
                        t && (t.prev = n),
                        n && (n.next = t),
                        e === this.head && (this.head = t),
                        e === this.tail && (this.tail = n),
                        e.list.length--,
                        (e.next = null),
                        (e.prev = null),
                        (e.list = null),
                        t
                    );
                }),
                (Rt.prototype.unshiftNode = function(e) {
                    if (e !== this.head) {
                        e.list && e.list.removeNode(e);
                        var t = this.head;
                        (e.list = this),
                            (e.next = t),
                            t && (t.prev = e),
                            (this.head = e),
                            this.tail || (this.tail = e),
                            this.length++;
                    }
                }),
                (Rt.prototype.pushNode = function(e) {
                    if (e !== this.tail) {
                        e.list && e.list.removeNode(e);
                        var t = this.tail;
                        (e.list = this),
                            (e.prev = t),
                            t && (t.next = e),
                            (this.tail = e),
                            this.head || (this.head = e),
                            this.length++;
                    }
                }),
                (Rt.prototype.push = function() {
                    for (var e = 0, t = arguments.length; e < t; e++)
                        Ct(this, arguments[e]);
                    return this.length;
                }),
                (Rt.prototype.unshift = function() {
                    for (var e = 0, t = arguments.length; e < t; e++)
                        kt(this, arguments[e]);
                    return this.length;
                }),
                (Rt.prototype.pop = function() {
                    if (this.tail) {
                        var e = this.tail.value;
                        return (
                            (this.tail = this.tail.prev),
                            this.tail
                                ? (this.tail.next = null)
                                : (this.head = null),
                            this.length--,
                            e
                        );
                    }
                }),
                (Rt.prototype.shift = function() {
                    if (this.head) {
                        var e = this.head.value;
                        return (
                            (this.head = this.head.next),
                            this.head
                                ? (this.head.prev = null)
                                : (this.tail = null),
                            this.length--,
                            e
                        );
                    }
                }),
                (Rt.prototype.forEach = function(e, t) {
                    t = t || this;
                    for (var n = this.head, r = 0; null !== n; r++)
                        e.call(t, n.value, r, this), (n = n.next);
                }),
                (Rt.prototype.forEachReverse = function(e, t) {
                    t = t || this;
                    for (
                        var n = this.tail, r = this.length - 1;
                        null !== n;
                        r--
                    )
                        e.call(t, n.value, r, this), (n = n.prev);
                }),
                (Rt.prototype.get = function(e) {
                    for (var t = 0, n = this.head; null !== n && t < e; t++)
                        n = n.next;
                    if (t === e && null !== n) return n.value;
                }),
                (Rt.prototype.getReverse = function(e) {
                    for (var t = 0, n = this.tail; null !== n && t < e; t++)
                        n = n.prev;
                    if (t === e && null !== n) return n.value;
                }),
                (Rt.prototype.map = function(e, t) {
                    t = t || this;
                    for (var n = new Rt(), r = this.head; null !== r; )
                        n.push(e.call(t, r.value, this)), (r = r.next);
                    return n;
                }),
                (Rt.prototype.mapReverse = function(e, t) {
                    t = t || this;
                    for (var n = new Rt(), r = this.tail; null !== r; )
                        n.push(e.call(t, r.value, this)), (r = r.prev);
                    return n;
                }),
                (Rt.prototype.reduce = function(e, t) {
                    var n,
                        r = this.head;
                    if (arguments.length > 1) n = t;
                    else {
                        if (!this.head)
                            throw new TypeError(
                                'Reduce of empty list with no initial value'
                            );
                        (r = this.head.next), (n = this.head.value);
                    }
                    for (var o = 0; null !== r; o++)
                        (n = e(n, r.value, o)), (r = r.next);
                    return n;
                }),
                (Rt.prototype.reduceReverse = function(e, t) {
                    var n,
                        r = this.tail;
                    if (arguments.length > 1) n = t;
                    else {
                        if (!this.tail)
                            throw new TypeError(
                                'Reduce of empty list with no initial value'
                            );
                        (r = this.tail.prev), (n = this.tail.value);
                    }
                    for (var o = this.length - 1; null !== r; o--)
                        (n = e(n, r.value, o)), (r = r.prev);
                    return n;
                }),
                (Rt.prototype.toArray = function() {
                    for (
                        var e = new Array(this.length), t = 0, n = this.head;
                        null !== n;
                        t++
                    )
                        (e[t] = n.value), (n = n.next);
                    return e;
                }),
                (Rt.prototype.toArrayReverse = function() {
                    for (
                        var e = new Array(this.length), t = 0, n = this.tail;
                        null !== n;
                        t++
                    )
                        (e[t] = n.value), (n = n.prev);
                    return e;
                }),
                (Rt.prototype.slice = function(e, t) {
                    (t = t || this.length) < 0 && (t += this.length),
                        (e = e || 0) < 0 && (e += this.length);
                    var n = new Rt();
                    if (t < e || t < 0) return n;
                    e < 0 && (e = 0), t > this.length && (t = this.length);
                    for (var r = 0, o = this.head; null !== o && r < e; r++)
                        o = o.next;
                    for (; null !== o && r < t; r++, o = o.next)
                        n.push(o.value);
                    return n;
                }),
                (Rt.prototype.sliceReverse = function(e, t) {
                    (t = t || this.length) < 0 && (t += this.length),
                        (e = e || 0) < 0 && (e += this.length);
                    var n = new Rt();
                    if (t < e || t < 0) return n;
                    e < 0 && (e = 0), t > this.length && (t = this.length);
                    for (
                        var r = this.length, o = this.tail;
                        null !== o && r > t;
                        r--
                    )
                        o = o.prev;
                    for (; null !== o && r > e; r--, o = o.prev)
                        n.push(o.value);
                    return n;
                }),
                (Rt.prototype.splice = function(e, t) {
                    e > this.length && (e = this.length - 1),
                        e < 0 && (e = this.length + e);
                    for (var n = 0, r = this.head; null !== r && n < e; n++)
                        r = r.next;
                    var o = [];
                    for (n = 0; r && n < t; n++)
                        o.push(r.value), (r = this.removeNode(r));
                    for (
                        null === r && (r = this.tail),
                            r !== this.head && r !== this.tail && (r = r.prev),
                            n = 0;
                        n < (arguments.length <= 2 ? 0 : arguments.length - 2);
                        n++
                    )
                        r = Dt(
                            this,
                            r,
                            n + 2 < 2 || arguments.length <= n + 2
                                ? void 0
                                : arguments[n + 2]
                        );
                    return o;
                }),
                (Rt.prototype.reverse = function() {
                    for (
                        var e = this.head, t = this.tail, n = e;
                        null !== n;
                        n = n.prev
                    ) {
                        var r = n.prev;
                        (n.prev = n.next), (n.next = r);
                    }
                    return (this.head = t), (this.tail = e), this;
                });
            try {
                Rt.prototype[Symbol.iterator] = St.mark(function e() {
                    var t;
                    return St.wrap(
                        function(e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        t = this.head;
                                    case 1:
                                        if (!t) {
                                            e.next = 7;
                                            break;
                                        }
                                        return (e.next = 4), t.value;
                                    case 4:
                                        (t = t.next), (e.next = 1);
                                        break;
                                    case 7:
                                    case 'end':
                                        return e.stop();
                                }
                        },
                        e,
                        this
                    );
                });
            } catch (e) {}
            var Pt = Tt,
                _t = Symbol('max'),
                Mt = Symbol('length'),
                jt = Symbol('lengthCalculator'),
                zt = Symbol('allowStale'),
                Ut = Symbol('maxAge'),
                Bt = Symbol('dispose'),
                Gt = Symbol('noDisposeOnSet'),
                Xt = Symbol('lruList'),
                Wt = Symbol('cache'),
                $t = Symbol('updateAgeOnGet'),
                Vt = () => 1,
                Ht = (e, t, n) => {
                    var r = e[Wt].get(t);
                    if (r) {
                        var o = r.value;
                        if (Jt(e, o)) {
                            if ((qt(e, r), !e[zt])) return;
                        } else
                            n &&
                                (e[$t] && (r.value.now = Date.now()),
                                e[Xt].unshiftNode(r));
                        return o.value;
                    }
                },
                Jt = (e, t) => {
                    if (!t || (!t.maxAge && !e[Ut])) return !1;
                    var n = Date.now() - t.now;
                    return t.maxAge ? n > t.maxAge : e[Ut] && n > e[Ut];
                },
                Yt = e => {
                    if (e[Mt] > e[_t])
                        for (
                            var t = e[Xt].tail;
                            e[Mt] > e[_t] && null !== t;

                        ) {
                            var n = t.prev;
                            qt(e, t), (t = n);
                        }
                },
                qt = (e, t) => {
                    if (t) {
                        var n = t.value;
                        e[Bt] && e[Bt](n.key, n.value),
                            (e[Mt] -= n.length),
                            e[Wt].delete(n.key),
                            e[Xt].removeNode(t);
                    }
                };
            class Qt {
                constructor(e, t, n, r, o) {
                    (this.key = e),
                        (this.value = t),
                        (this.length = n),
                        (this.now = r),
                        (this.maxAge = o || 0);
                }
            }
            var Kt = (e, t, n, r) => {
                    var o = n.value;
                    Jt(e, o) && (qt(e, n), e[zt] || (o = void 0)),
                        o && t.call(r, o.value, o.key, e);
                },
                Zt = ['includePrerelease', 'loose', 'rtl'],
                en = e =>
                    e
                        ? 'object' != typeof e
                            ? { loose: !0 }
                            : Zt.filter(t => e[t]).reduce(
                                  (e, t) => ((e[t] = !0), e),
                                  {}
                              )
                        : {},
                tn = { exports: {} },
                nn = {
                    SEMVER_SPEC_VERSION: '2.0.0',
                    MAX_LENGTH: 256,
                    MAX_SAFE_INTEGER:
                        Number.MAX_SAFE_INTEGER || 9007199254740991,
                    MAX_SAFE_COMPONENT_LENGTH: 16,
                },
                rn =
                    {}.NODE_DEBUG && /\bsemver\b/i.test({}.NODE_DEBUG)
                        ? function() {
                              for (
                                  var e = arguments.length,
                                      t = new Array(e),
                                      n = 0;
                                  n < e;
                                  n++
                              )
                                  t[n] = arguments[n];
                              return console.error('SEMVER', ...t);
                          }
                        : () => {};
            !(function(e, t) {
                var n = nn.MAX_SAFE_COMPONENT_LENGTH,
                    r = rn,
                    o = ((t = e.exports = {}).re = []),
                    i = (t.src = []),
                    a = (t.t = {}),
                    s = 0,
                    l = (e, t, n) => {
                        var l = s++;
                        r(e, l, t),
                            (a[e] = l),
                            (i[l] = t),
                            (o[l] = new RegExp(t, n ? 'g' : void 0));
                    };
                l('NUMERICIDENTIFIER', '0|[1-9]\\d*'),
                    l('NUMERICIDENTIFIERLOOSE', '[0-9]+'),
                    l('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*'),
                    l(
                        'MAINVERSION',
                        '('.concat(i[a.NUMERICIDENTIFIER], ')\\.') +
                            '('.concat(i[a.NUMERICIDENTIFIER], ')\\.') +
                            '('.concat(i[a.NUMERICIDENTIFIER], ')')
                    ),
                    l(
                        'MAINVERSIONLOOSE',
                        '('.concat(i[a.NUMERICIDENTIFIERLOOSE], ')\\.') +
                            '('.concat(i[a.NUMERICIDENTIFIERLOOSE], ')\\.') +
                            '('.concat(i[a.NUMERICIDENTIFIERLOOSE], ')')
                    ),
                    l(
                        'PRERELEASEIDENTIFIER',
                        '(?:'
                            .concat(i[a.NUMERICIDENTIFIER], '|')
                            .concat(i[a.NONNUMERICIDENTIFIER], ')')
                    ),
                    l(
                        'PRERELEASEIDENTIFIERLOOSE',
                        '(?:'
                            .concat(i[a.NUMERICIDENTIFIERLOOSE], '|')
                            .concat(i[a.NONNUMERICIDENTIFIER], ')')
                    ),
                    l(
                        'PRERELEASE',
                        '(?:-('
                            .concat(i[a.PRERELEASEIDENTIFIER], '(?:\\.')
                            .concat(i[a.PRERELEASEIDENTIFIER], ')*))')
                    ),
                    l(
                        'PRERELEASELOOSE',
                        '(?:-?('
                            .concat(i[a.PRERELEASEIDENTIFIERLOOSE], '(?:\\.')
                            .concat(i[a.PRERELEASEIDENTIFIERLOOSE], ')*))')
                    ),
                    l('BUILDIDENTIFIER', '[0-9A-Za-z-]+'),
                    l(
                        'BUILD',
                        '(?:\\+('
                            .concat(i[a.BUILDIDENTIFIER], '(?:\\.')
                            .concat(i[a.BUILDIDENTIFIER], ')*))')
                    ),
                    l(
                        'FULLPLAIN',
                        'v?'
                            .concat(i[a.MAINVERSION])
                            .concat(i[a.PRERELEASE], '?')
                            .concat(i[a.BUILD], '?')
                    ),
                    l('FULL', '^'.concat(i[a.FULLPLAIN], '$')),
                    l(
                        'LOOSEPLAIN',
                        '[v=\\s]*'
                            .concat(i[a.MAINVERSIONLOOSE])
                            .concat(i[a.PRERELEASELOOSE], '?')
                            .concat(i[a.BUILD], '?')
                    ),
                    l('LOOSE', '^'.concat(i[a.LOOSEPLAIN], '$')),
                    l('GTLT', '((?:<|>)?=?)'),
                    l(
                        'XRANGEIDENTIFIERLOOSE',
                        ''.concat(i[a.NUMERICIDENTIFIERLOOSE], '|x|X|\\*')
                    ),
                    l(
                        'XRANGEIDENTIFIER',
                        ''.concat(i[a.NUMERICIDENTIFIER], '|x|X|\\*')
                    ),
                    l(
                        'XRANGEPLAIN',
                        '[v=\\s]*('.concat(i[a.XRANGEIDENTIFIER], ')') +
                            '(?:\\.('.concat(i[a.XRANGEIDENTIFIER], ')') +
                            '(?:\\.('.concat(i[a.XRANGEIDENTIFIER], ')') +
                            '(?:'
                                .concat(i[a.PRERELEASE], ')?')
                                .concat(i[a.BUILD], '?') +
                            ')?)?'
                    ),
                    l(
                        'XRANGEPLAINLOOSE',
                        '[v=\\s]*('.concat(i[a.XRANGEIDENTIFIERLOOSE], ')') +
                            '(?:\\.('.concat(i[a.XRANGEIDENTIFIERLOOSE], ')') +
                            '(?:\\.('.concat(i[a.XRANGEIDENTIFIERLOOSE], ')') +
                            '(?:'
                                .concat(i[a.PRERELEASELOOSE], ')?')
                                .concat(i[a.BUILD], '?') +
                            ')?)?'
                    ),
                    l(
                        'XRANGE',
                        '^'
                            .concat(i[a.GTLT], '\\s*')
                            .concat(i[a.XRANGEPLAIN], '$')
                    ),
                    l(
                        'XRANGELOOSE',
                        '^'
                            .concat(i[a.GTLT], '\\s*')
                            .concat(i[a.XRANGEPLAINLOOSE], '$')
                    ),
                    l(
                        'COERCE',
                        ''.concat('(^|[^\\d])(\\d{1,').concat(n, '})') +
                            '(?:\\.(\\d{1,'.concat(n, '}))?') +
                            '(?:\\.(\\d{1,'.concat(n, '}))?') +
                            '(?:$|[^\\d])'
                    ),
                    l('COERCERTL', i[a.COERCE], !0),
                    l('LONETILDE', '(?:~>?)'),
                    l('TILDETRIM', '(\\s*)'.concat(i[a.LONETILDE], '\\s+'), !0),
                    (t.tildeTrimReplace = '$1~'),
                    l(
                        'TILDE',
                        '^'.concat(i[a.LONETILDE]).concat(i[a.XRANGEPLAIN], '$')
                    ),
                    l(
                        'TILDELOOSE',
                        '^'
                            .concat(i[a.LONETILDE])
                            .concat(i[a.XRANGEPLAINLOOSE], '$')
                    ),
                    l('LONECARET', '(?:\\^)'),
                    l('CARETTRIM', '(\\s*)'.concat(i[a.LONECARET], '\\s+'), !0),
                    (t.caretTrimReplace = '$1^'),
                    l(
                        'CARET',
                        '^'.concat(i[a.LONECARET]).concat(i[a.XRANGEPLAIN], '$')
                    ),
                    l(
                        'CARETLOOSE',
                        '^'
                            .concat(i[a.LONECARET])
                            .concat(i[a.XRANGEPLAINLOOSE], '$')
                    ),
                    l(
                        'COMPARATORLOOSE',
                        '^'
                            .concat(i[a.GTLT], '\\s*(')
                            .concat(i[a.LOOSEPLAIN], ')$|^$')
                    ),
                    l(
                        'COMPARATOR',
                        '^'
                            .concat(i[a.GTLT], '\\s*(')
                            .concat(i[a.FULLPLAIN], ')$|^$')
                    ),
                    l(
                        'COMPARATORTRIM',
                        '(\\s*)'
                            .concat(i[a.GTLT], '\\s*(')
                            .concat(i[a.LOOSEPLAIN], '|')
                            .concat(i[a.XRANGEPLAIN], ')'),
                        !0
                    ),
                    (t.comparatorTrimReplace = '$1$2$3'),
                    l(
                        'HYPHENRANGE',
                        '^\\s*('.concat(i[a.XRANGEPLAIN], ')') +
                            '\\s+-\\s+' +
                            '('.concat(i[a.XRANGEPLAIN], ')') +
                            '\\s*$'
                    ),
                    l(
                        'HYPHENRANGELOOSE',
                        '^\\s*('.concat(i[a.XRANGEPLAINLOOSE], ')') +
                            '\\s+-\\s+' +
                            '('.concat(i[a.XRANGEPLAINLOOSE], ')') +
                            '\\s*$'
                    ),
                    l('STAR', '(<|>)?=?\\s*\\*'),
                    l('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$'),
                    l('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');
            })(tn, tn.exports);
            var on = /^[0-9]+$/,
                an = (e, t) => {
                    var n = on.test(e),
                        r = on.test(t);
                    return (
                        n && r && ((e = +e), (t = +t)),
                        e === t
                            ? 0
                            : n && !r
                            ? -1
                            : r && !n
                            ? 1
                            : e < t
                            ? -1
                            : 1
                    );
                },
                sn = rn,
                ln = nn.MAX_LENGTH,
                cn = nn.MAX_SAFE_INTEGER,
                un = tn.exports.re,
                hn = tn.exports.t,
                fn = en,
                pn = an;
            class dn {
                constructor(e, t) {
                    if (((t = fn(t)), e instanceof dn)) {
                        if (
                            e.loose === !!t.loose &&
                            e.includePrerelease === !!t.includePrerelease
                        )
                            return e;
                        e = e.version;
                    } else if ('string' != typeof e)
                        throw new TypeError('Invalid Version: '.concat(e));
                    if (e.length > ln)
                        throw new TypeError(
                            'version is longer than '.concat(ln, ' characters')
                        );
                    sn('SemVer', e, t),
                        (this.options = t),
                        (this.loose = !!t.loose),
                        (this.includePrerelease = !!t.includePrerelease);
                    var n = e
                        .trim()
                        .match(t.loose ? un[hn.LOOSE] : un[hn.FULL]);
                    if (!n) throw new TypeError('Invalid Version: '.concat(e));
                    if (
                        ((this.raw = e),
                        (this.major = +n[1]),
                        (this.minor = +n[2]),
                        (this.patch = +n[3]),
                        this.major > cn || this.major < 0)
                    )
                        throw new TypeError('Invalid major version');
                    if (this.minor > cn || this.minor < 0)
                        throw new TypeError('Invalid minor version');
                    if (this.patch > cn || this.patch < 0)
                        throw new TypeError('Invalid patch version');
                    n[4]
                        ? (this.prerelease = n[4].split('.').map(e => {
                              if (/^[0-9]+$/.test(e)) {
                                  var t = +e;
                                  if (t >= 0 && t < cn) return t;
                              }
                              return e;
                          }))
                        : (this.prerelease = []),
                        (this.build = n[5] ? n[5].split('.') : []),
                        this.format();
                }
                format() {
                    return (
                        (this.version = ''
                            .concat(this.major, '.')
                            .concat(this.minor, '.')
                            .concat(this.patch)),
                        this.prerelease.length &&
                            (this.version += '-'.concat(
                                this.prerelease.join('.')
                            )),
                        this.version
                    );
                }
                toString() {
                    return this.version;
                }
                compare(e) {
                    if (
                        (sn('SemVer.compare', this.version, this.options, e),
                        !(e instanceof dn))
                    ) {
                        if ('string' == typeof e && e === this.version)
                            return 0;
                        e = new dn(e, this.options);
                    }
                    return e.version === this.version
                        ? 0
                        : this.compareMain(e) || this.comparePre(e);
                }
                compareMain(e) {
                    return (
                        e instanceof dn || (e = new dn(e, this.options)),
                        pn(this.major, e.major) ||
                            pn(this.minor, e.minor) ||
                            pn(this.patch, e.patch)
                    );
                }
                comparePre(e) {
                    if (
                        (e instanceof dn || (e = new dn(e, this.options)),
                        this.prerelease.length && !e.prerelease.length)
                    )
                        return -1;
                    if (!this.prerelease.length && e.prerelease.length)
                        return 1;
                    if (!this.prerelease.length && !e.prerelease.length)
                        return 0;
                    var t = 0;
                    do {
                        var n = this.prerelease[t],
                            r = e.prerelease[t];
                        if (
                            (sn('prerelease compare', t, n, r),
                            void 0 === n && void 0 === r)
                        )
                            return 0;
                        if (void 0 === r) return 1;
                        if (void 0 === n) return -1;
                        if (n !== r) return pn(n, r);
                    } while (++t);
                }
                compareBuild(e) {
                    e instanceof dn || (e = new dn(e, this.options));
                    var t = 0;
                    do {
                        var n = this.build[t],
                            r = e.build[t];
                        if (
                            (sn('prerelease compare', t, n, r),
                            void 0 === n && void 0 === r)
                        )
                            return 0;
                        if (void 0 === r) return 1;
                        if (void 0 === n) return -1;
                        if (n !== r) return pn(n, r);
                    } while (++t);
                }
                inc(e, t) {
                    switch (e) {
                        case 'premajor':
                            (this.prerelease.length = 0),
                                (this.patch = 0),
                                (this.minor = 0),
                                this.major++,
                                this.inc('pre', t);
                            break;
                        case 'preminor':
                            (this.prerelease.length = 0),
                                (this.patch = 0),
                                this.minor++,
                                this.inc('pre', t);
                            break;
                        case 'prepatch':
                            (this.prerelease.length = 0),
                                this.inc('patch', t),
                                this.inc('pre', t);
                            break;
                        case 'prerelease':
                            0 === this.prerelease.length &&
                                this.inc('patch', t),
                                this.inc('pre', t);
                            break;
                        case 'major':
                            (0 === this.minor &&
                                0 === this.patch &&
                                0 !== this.prerelease.length) ||
                                this.major++,
                                (this.minor = 0),
                                (this.patch = 0),
                                (this.prerelease = []);
                            break;
                        case 'minor':
                            (0 === this.patch &&
                                0 !== this.prerelease.length) ||
                                this.minor++,
                                (this.patch = 0),
                                (this.prerelease = []);
                            break;
                        case 'patch':
                            0 === this.prerelease.length && this.patch++,
                                (this.prerelease = []);
                            break;
                        case 'pre':
                            if (0 === this.prerelease.length)
                                this.prerelease = [0];
                            else {
                                for (var n = this.prerelease.length; --n >= 0; )
                                    'number' == typeof this.prerelease[n] &&
                                        (this.prerelease[n]++, (n = -2));
                                -1 === n && this.prerelease.push(0);
                            }
                            t &&
                                (0 === pn(this.prerelease[0], t)
                                    ? isNaN(this.prerelease[1]) &&
                                      (this.prerelease = [t, 0])
                                    : (this.prerelease = [t, 0]));
                            break;
                        default:
                            throw new Error(
                                'invalid increment argument: '.concat(e)
                            );
                    }
                    return this.format(), (this.raw = this.version), this;
                }
            }
            var vn,
                gn,
                mn,
                yn,
                En = dn,
                bn = En,
                wn = (e, t, n) => new bn(e, n).compare(new bn(t, n)),
                xn = wn,
                On = wn,
                An = wn,
                In = wn,
                Nn = wn,
                Ln = wn,
                Sn = (e, t, n, r) => {
                    switch (t) {
                        case '===':
                            return (
                                'object' == typeof e && (e = e.version),
                                'object' == typeof n && (n = n.version),
                                e === n
                            );
                        case '!==':
                            return (
                                'object' == typeof e && (e = e.version),
                                'object' == typeof n && (n = n.version),
                                e !== n
                            );
                        case '':
                        case '=':
                        case '==':
                            return ((e, t, n) => 0 === xn(e, t, n))(e, n, r);
                        case '!=':
                            return ((e, t, n) => 0 !== On(e, t, n))(e, n, r);
                        case '>':
                            return ((e, t, n) => An(e, t, n) > 0)(e, n, r);
                        case '>=':
                            return ((e, t, n) => In(e, t, n) >= 0)(e, n, r);
                        case '<':
                            return ((e, t, n) => Nn(e, t, n) < 0)(e, n, r);
                        case '<=':
                            return ((e, t, n) => Ln(e, t, n) <= 0)(e, n, r);
                        default:
                            throw new TypeError('Invalid operator: '.concat(t));
                    }
                };
            function Tn(e, t) {
                var n =
                    ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator'];
                if (!n) {
                    if (
                        Array.isArray(e) ||
                        (n = (function(e, t) {
                            if (e) {
                                if ('string' == typeof e) return Rn(e, t);
                                var n = Object.prototype.toString
                                    .call(e)
                                    .slice(8, -1);
                                return (
                                    'Object' === n &&
                                        e.constructor &&
                                        (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n ||
                                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                              n
                                          )
                                        ? Rn(e, t)
                                        : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length
                                    ? { done: !0 }
                                    : { done: !1, value: e[r++] };
                            },
                            e: function(e) {
                                throw e;
                            },
                            f: o,
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                }
                var i,
                    a = !0,
                    s = !1;
                return {
                    s: function() {
                        n = n.call(e);
                    },
                    n: function() {
                        var e = n.next();
                        return (a = e.done), e;
                    },
                    e: function(e) {
                        (s = !0), (i = e);
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return();
                        } finally {
                            if (s) throw i;
                        }
                    },
                };
            }
            function Rn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            var Dn = (function e() {
                    if (yn) return mn;
                    yn = 1;
                    class t {
                        constructor(e, n) {
                            if (((n = r(n)), e instanceof t))
                                return e.loose === !!n.loose &&
                                    e.includePrerelease ===
                                        !!n.includePrerelease
                                    ? e
                                    : new t(e.raw, n);
                            if (e instanceof o)
                                return (
                                    (this.raw = e.value),
                                    (this.set = [[e]]),
                                    this.format(),
                                    this
                                );
                            if (
                                ((this.options = n),
                                (this.loose = !!n.loose),
                                (this.includePrerelease = !!n.includePrerelease),
                                (this.raw = e),
                                (this.set = e
                                    .split('||')
                                    .map(e => this.parseRange(e.trim()))
                                    .filter(e => e.length)),
                                !this.set.length)
                            )
                                throw new TypeError(
                                    'Invalid SemVer Range: '.concat(e)
                                );
                            if (this.set.length > 1) {
                                var i = this.set[0];
                                if (
                                    ((this.set = this.set.filter(
                                        e => !f(e[0])
                                    )),
                                    0 === this.set.length)
                                )
                                    this.set = [i];
                                else if (this.set.length > 1) {
                                    var a,
                                        s = Tn(this.set);
                                    try {
                                        for (s.s(); !(a = s.n()).done; ) {
                                            var l = a.value;
                                            if (1 === l.length && p(l[0])) {
                                                this.set = [l];
                                                break;
                                            }
                                        }
                                    } catch (e) {
                                        s.e(e);
                                    } finally {
                                        s.f();
                                    }
                                }
                            }
                            this.format();
                        }
                        format() {
                            return (
                                (this.range = this.set
                                    .map(e => e.join(' ').trim())
                                    .join('||')
                                    .trim()),
                                this.range
                            );
                        }
                        toString() {
                            return this.range;
                        }
                        parseRange(e) {
                            e = e.trim();
                            var t = Object.keys(this.options).join(','),
                                r = 'parseRange:'.concat(t, ':').concat(e),
                                a = n.get(r);
                            if (a) return a;
                            var p = this.options.loose,
                                d = p
                                    ? s[l.HYPHENRANGELOOSE]
                                    : s[l.HYPHENRANGE];
                            (e = e.replace(
                                d,
                                I(this.options.includePrerelease)
                            )),
                                i('hyphen replace', e),
                                (e = e.replace(s[l.COMPARATORTRIM], c)),
                                i('comparator trim', e);
                            var g = (e = (e = (e = e.replace(
                                s[l.TILDETRIM],
                                u
                            )).replace(s[l.CARETTRIM], h))
                                .split(/\s+/)
                                .join(' '))
                                .split(' ')
                                .map(e => v(e, this.options))
                                .join(' ')
                                .split(/\s+/)
                                .map(e => A(e, this.options));
                            p &&
                                (g = g.filter(
                                    e => (
                                        i(
                                            'loose invalid filter',
                                            e,
                                            this.options
                                        ),
                                        !!e.match(s[l.COMPARATORLOOSE])
                                    )
                                )),
                                i('range list', g);
                            var m,
                                y = new Map(),
                                E = g.map(e => new o(e, this.options)),
                                b = Tn(E);
                            try {
                                for (b.s(); !(m = b.n()).done; ) {
                                    var w = m.value;
                                    if (f(w)) return [w];
                                    y.set(w.value, w);
                                }
                            } catch (e) {
                                b.e(e);
                            } finally {
                                b.f();
                            }
                            y.size > 1 && y.has('') && y.delete('');
                            var x = [...y.values()];
                            return n.set(r, x), x;
                        }
                        intersects(e, n) {
                            if (!(e instanceof t))
                                throw new TypeError('a Range is required');
                            return this.set.some(
                                t =>
                                    d(t, n) &&
                                    e.set.some(
                                        e =>
                                            d(e, n) &&
                                            t.every(t =>
                                                e.every(e => t.intersects(e, n))
                                            )
                                    )
                            );
                        }
                        test(e) {
                            if (!e) return !1;
                            if ('string' == typeof e)
                                try {
                                    e = new a(e, this.options);
                                } catch (e) {
                                    return !1;
                                }
                            for (var t = 0; t < this.set.length; t++)
                                if (N(this.set[t], e, this.options)) return !0;
                            return !1;
                        }
                    }
                    mn = t;
                    var n = new (class {
                            constructor(e) {
                                if (
                                    ('number' == typeof e && (e = { max: e }),
                                    e || (e = {}),
                                    e.max &&
                                        ('number' != typeof e.max || e.max < 0))
                                )
                                    throw new TypeError(
                                        'max must be a non-negative number'
                                    );
                                this[_t] = e.max || 1 / 0;
                                var t = e.length || Vt;
                                if (
                                    ((this[jt] =
                                        'function' != typeof t ? Vt : t),
                                    (this[zt] = e.stale || !1),
                                    e.maxAge && 'number' != typeof e.maxAge)
                                )
                                    throw new TypeError(
                                        'maxAge must be a number'
                                    );
                                (this[Ut] = e.maxAge || 0),
                                    (this[Bt] = e.dispose),
                                    (this[Gt] = e.noDisposeOnSet || !1),
                                    (this[$t] = e.updateAgeOnGet || !1),
                                    this.reset();
                            }
                            set max(e) {
                                if ('number' != typeof e || e < 0)
                                    throw new TypeError(
                                        'max must be a non-negative number'
                                    );
                                (this[_t] = e || 1 / 0), Yt(this);
                            }
                            get max() {
                                return this[_t];
                            }
                            set allowStale(e) {
                                this[zt] = !!e;
                            }
                            get allowStale() {
                                return this[zt];
                            }
                            set maxAge(e) {
                                if ('number' != typeof e)
                                    throw new TypeError(
                                        'maxAge must be a non-negative number'
                                    );
                                (this[Ut] = e), Yt(this);
                            }
                            get maxAge() {
                                return this[Ut];
                            }
                            set lengthCalculator(e) {
                                'function' != typeof e && (e = Vt),
                                    e !== this[jt] &&
                                        ((this[jt] = e),
                                        (this[Mt] = 0),
                                        this[Xt].forEach(e => {
                                            (e.length = this[jt](
                                                e.value,
                                                e.key
                                            )),
                                                (this[Mt] += e.length);
                                        })),
                                    Yt(this);
                            }
                            get lengthCalculator() {
                                return this[jt];
                            }
                            get length() {
                                return this[Mt];
                            }
                            get itemCount() {
                                return this[Xt].length;
                            }
                            rforEach(e, t) {
                                t = t || this;
                                for (var n = this[Xt].tail; null !== n; ) {
                                    var r = n.prev;
                                    Kt(this, e, n, t), (n = r);
                                }
                            }
                            forEach(e, t) {
                                t = t || this;
                                for (var n = this[Xt].head; null !== n; ) {
                                    var r = n.next;
                                    Kt(this, e, n, t), (n = r);
                                }
                            }
                            keys() {
                                return this[Xt].toArray().map(e => e.key);
                            }
                            values() {
                                return this[Xt].toArray().map(e => e.value);
                            }
                            reset() {
                                this[Bt] &&
                                    this[Xt] &&
                                    this[Xt].length &&
                                    this[Xt].forEach(e =>
                                        this[Bt](e.key, e.value)
                                    ),
                                    (this[Wt] = new Map()),
                                    (this[Xt] = new Pt()),
                                    (this[Mt] = 0);
                            }
                            dump() {
                                return this[Xt].map(
                                    e =>
                                        !Jt(this, e) && {
                                            k: e.key,
                                            v: e.value,
                                            e: e.now + (e.maxAge || 0),
                                        }
                                )
                                    .toArray()
                                    .filter(e => e);
                            }
                            dumpLru() {
                                return this[Xt];
                            }
                            set(e, t, n) {
                                if ((n = n || this[Ut]) && 'number' != typeof n)
                                    throw new TypeError(
                                        'maxAge must be a number'
                                    );
                                var r = n ? Date.now() : 0,
                                    o = this[jt](t, e);
                                if (this[Wt].has(e)) {
                                    if (o > this[_t])
                                        return qt(this, this[Wt].get(e)), !1;
                                    var i = this[Wt].get(e).value;
                                    return (
                                        this[Bt] &&
                                            (this[Gt] || this[Bt](e, i.value)),
                                        (i.now = r),
                                        (i.maxAge = n),
                                        (i.value = t),
                                        (this[Mt] += o - i.length),
                                        (i.length = o),
                                        this.get(e),
                                        Yt(this),
                                        !0
                                    );
                                }
                                var a = new Qt(e, t, o, r, n);
                                return a.length > this[_t]
                                    ? (this[Bt] && this[Bt](e, t), !1)
                                    : ((this[Mt] += a.length),
                                      this[Xt].unshift(a),
                                      this[Wt].set(e, this[Xt].head),
                                      Yt(this),
                                      !0);
                            }
                            has(e) {
                                if (!this[Wt].has(e)) return !1;
                                var t = this[Wt].get(e).value;
                                return !Jt(this, t);
                            }
                            get(e) {
                                return Ht(this, e, !0);
                            }
                            peek(e) {
                                return Ht(this, e, !1);
                            }
                            pop() {
                                var e = this[Xt].tail;
                                return e ? (qt(this, e), e.value) : null;
                            }
                            del(e) {
                                qt(this, this[Wt].get(e));
                            }
                            load(e) {
                                this.reset();
                                for (
                                    var t = Date.now(), n = e.length - 1;
                                    n >= 0;
                                    n--
                                ) {
                                    var r = e[n],
                                        o = r.e || 0;
                                    if (0 === o) this.set(r.k, r.v);
                                    else {
                                        var i = o - t;
                                        i > 0 && this.set(r.k, r.v, i);
                                    }
                                }
                            }
                            prune() {
                                this[Wt].forEach((e, t) => Ht(this, t, !1));
                            }
                        })({ max: 1e3 }),
                        r = en,
                        o = (function() {
                            if (gn) return vn;
                            gn = 1;
                            var t = Symbol('SemVer ANY');
                            class n {
                                static get ANY() {
                                    return t;
                                }
                                constructor(e, o) {
                                    if (((o = r(o)), e instanceof n)) {
                                        if (e.loose === !!o.loose) return e;
                                        e = e.value;
                                    }
                                    s('comparator', e, o),
                                        (this.options = o),
                                        (this.loose = !!o.loose),
                                        this.parse(e),
                                        this.semver === t
                                            ? (this.value = '')
                                            : (this.value =
                                                  this.operator +
                                                  this.semver.version),
                                        s('comp', this);
                                }
                                parse(e) {
                                    var n = this.options.loose
                                            ? o[i.COMPARATORLOOSE]
                                            : o[i.COMPARATOR],
                                        r = e.match(n);
                                    if (!r)
                                        throw new TypeError(
                                            'Invalid comparator: '.concat(e)
                                        );
                                    (this.operator =
                                        void 0 !== r[1] ? r[1] : ''),
                                        '=' === this.operator &&
                                            (this.operator = ''),
                                        r[2]
                                            ? (this.semver = new l(
                                                  r[2],
                                                  this.options.loose
                                              ))
                                            : (this.semver = t);
                                }
                                toString() {
                                    return this.value;
                                }
                                test(e) {
                                    if (
                                        (s(
                                            'Comparator.test',
                                            e,
                                            this.options.loose
                                        ),
                                        this.semver === t || e === t)
                                    )
                                        return !0;
                                    if ('string' == typeof e)
                                        try {
                                            e = new l(e, this.options);
                                        } catch (e) {
                                            return !1;
                                        }
                                    return a(
                                        e,
                                        this.operator,
                                        this.semver,
                                        this.options
                                    );
                                }
                                intersects(e, t) {
                                    if (!(e instanceof n))
                                        throw new TypeError(
                                            'a Comparator is required'
                                        );
                                    if (
                                        ((t && 'object' == typeof t) ||
                                            (t = {
                                                loose: !!t,
                                                includePrerelease: !1,
                                            }),
                                        '' === this.operator)
                                    )
                                        return (
                                            '' === this.value ||
                                            new c(e.value, t).test(this.value)
                                        );
                                    if ('' === e.operator)
                                        return (
                                            '' === e.value ||
                                            new c(this.value, t).test(e.semver)
                                        );
                                    var r = !(
                                            ('>=' !== this.operator &&
                                                '>' !== this.operator) ||
                                            ('>=' !== e.operator &&
                                                '>' !== e.operator)
                                        ),
                                        o = !(
                                            ('<=' !== this.operator &&
                                                '<' !== this.operator) ||
                                            ('<=' !== e.operator &&
                                                '<' !== e.operator)
                                        ),
                                        i =
                                            this.semver.version ===
                                            e.semver.version,
                                        s = !(
                                            ('>=' !== this.operator &&
                                                '<=' !== this.operator) ||
                                            ('>=' !== e.operator &&
                                                '<=' !== e.operator)
                                        ),
                                        l =
                                            a(this.semver, '<', e.semver, t) &&
                                            ('>=' === this.operator ||
                                                '>' === this.operator) &&
                                            ('<=' === e.operator ||
                                                '<' === e.operator),
                                        u =
                                            a(this.semver, '>', e.semver, t) &&
                                            ('<=' === this.operator ||
                                                '<' === this.operator) &&
                                            ('>=' === e.operator ||
                                                '>' === e.operator);
                                    return r || o || (i && s) || l || u;
                                }
                            }
                            vn = n;
                            var r = en,
                                o = tn.exports.re,
                                i = tn.exports.t,
                                a = Sn,
                                s = rn,
                                l = En,
                                c = e();
                            return vn;
                        })(),
                        i = rn,
                        a = En,
                        s = tn.exports.re,
                        l = tn.exports.t,
                        c = tn.exports.comparatorTrimReplace,
                        u = tn.exports.tildeTrimReplace,
                        h = tn.exports.caretTrimReplace,
                        f = e => '<0.0.0-0' === e.value,
                        p = e => '' === e.value,
                        d = (e, t) => {
                            for (
                                var n = !0, r = e.slice(), o = r.pop();
                                n && r.length;

                            )
                                (n = r.every(e => o.intersects(e, t))),
                                    (o = r.pop());
                            return n;
                        },
                        v = (e, t) => (
                            i('comp', e, t),
                            (e = E(e, t)),
                            i('caret', e),
                            (e = m(e, t)),
                            i('tildes', e),
                            (e = w(e, t)),
                            i('xrange', e),
                            (e = O(e, t)),
                            i('stars', e),
                            e
                        ),
                        g = e => !e || 'x' === e.toLowerCase() || '*' === e,
                        m = (e, t) =>
                            e
                                .trim()
                                .split(/\s+/)
                                .map(e => y(e, t))
                                .join(' '),
                        y = (e, t) => {
                            var n = t.loose ? s[l.TILDELOOSE] : s[l.TILDE];
                            return e.replace(n, (t, n, r, o, a) => {
                                var s;
                                return (
                                    i('tilde', e, t, n, r, o, a),
                                    g(n)
                                        ? (s = '')
                                        : g(r)
                                        ? (s = '>='
                                              .concat(n, '.0.0 <')
                                              .concat(+n + 1, '.0.0-0'))
                                        : g(o)
                                        ? (s = '>='
                                              .concat(n, '.')
                                              .concat(r, '.0 <')
                                              .concat(n, '.')
                                              .concat(+r + 1, '.0-0'))
                                        : a
                                        ? (i('replaceTilde pr', a),
                                          (s = '>='
                                              .concat(n, '.')
                                              .concat(r, '.')
                                              .concat(o, '-')
                                              .concat(a, ' <')
                                              .concat(n, '.')
                                              .concat(+r + 1, '.0-0')))
                                        : (s = '>='
                                              .concat(n, '.')
                                              .concat(r, '.')
                                              .concat(o, ' <')
                                              .concat(n, '.')
                                              .concat(+r + 1, '.0-0')),
                                    i('tilde return', s),
                                    s
                                );
                            });
                        },
                        E = (e, t) =>
                            e
                                .trim()
                                .split(/\s+/)
                                .map(e => b(e, t))
                                .join(' '),
                        b = (e, t) => {
                            i('caret', e, t);
                            var n = t.loose ? s[l.CARETLOOSE] : s[l.CARET],
                                r = t.includePrerelease ? '-0' : '';
                            return e.replace(n, (t, n, o, a, s) => {
                                var l;
                                return (
                                    i('caret', e, t, n, o, a, s),
                                    g(n)
                                        ? (l = '')
                                        : g(o)
                                        ? (l = '>='
                                              .concat(n, '.0.0')
                                              .concat(r, ' <')
                                              .concat(+n + 1, '.0.0-0'))
                                        : g(a)
                                        ? (l =
                                              '0' === n
                                                  ? '>='
                                                        .concat(n, '.')
                                                        .concat(o, '.0')
                                                        .concat(r, ' <')
                                                        .concat(n, '.')
                                                        .concat(+o + 1, '.0-0')
                                                  : '>='
                                                        .concat(n, '.')
                                                        .concat(o, '.0')
                                                        .concat(r, ' <')
                                                        .concat(
                                                            +n + 1,
                                                            '.0.0-0'
                                                        ))
                                        : s
                                        ? (i('replaceCaret pr', s),
                                          (l =
                                              '0' === n
                                                  ? '0' === o
                                                      ? '>='
                                                            .concat(n, '.')
                                                            .concat(o, '.')
                                                            .concat(a, '-')
                                                            .concat(s, ' <')
                                                            .concat(n, '.')
                                                            .concat(o, '.')
                                                            .concat(
                                                                +a + 1,
                                                                '-0'
                                                            )
                                                      : '>='
                                                            .concat(n, '.')
                                                            .concat(o, '.')
                                                            .concat(a, '-')
                                                            .concat(s, ' <')
                                                            .concat(n, '.')
                                                            .concat(
                                                                +o + 1,
                                                                '.0-0'
                                                            )
                                                  : '>='
                                                        .concat(n, '.')
                                                        .concat(o, '.')
                                                        .concat(a, '-')
                                                        .concat(s, ' <')
                                                        .concat(
                                                            +n + 1,
                                                            '.0.0-0'
                                                        )))
                                        : (i('no pr'),
                                          (l =
                                              '0' === n
                                                  ? '0' === o
                                                      ? '>='
                                                            .concat(n, '.')
                                                            .concat(o, '.')
                                                            .concat(a)
                                                            .concat(r, ' <')
                                                            .concat(n, '.')
                                                            .concat(o, '.')
                                                            .concat(
                                                                +a + 1,
                                                                '-0'
                                                            )
                                                      : '>='
                                                            .concat(n, '.')
                                                            .concat(o, '.')
                                                            .concat(a)
                                                            .concat(r, ' <')
                                                            .concat(n, '.')
                                                            .concat(
                                                                +o + 1,
                                                                '.0-0'
                                                            )
                                                  : '>='
                                                        .concat(n, '.')
                                                        .concat(o, '.')
                                                        .concat(a, ' <')
                                                        .concat(
                                                            +n + 1,
                                                            '.0.0-0'
                                                        ))),
                                    i('caret return', l),
                                    l
                                );
                            });
                        },
                        w = (e, t) => (
                            i('replaceXRanges', e, t),
                            e
                                .split(/\s+/)
                                .map(e => x(e, t))
                                .join(' ')
                        ),
                        x = (e, t) => {
                            e = e.trim();
                            var n = t.loose ? s[l.XRANGELOOSE] : s[l.XRANGE];
                            return e.replace(n, (n, r, o, a, s, l) => {
                                i('xRange', e, n, r, o, a, s, l);
                                var c = g(o),
                                    u = c || g(a),
                                    h = u || g(s),
                                    f = h;
                                return (
                                    '=' === r && f && (r = ''),
                                    (l = t.includePrerelease ? '-0' : ''),
                                    c
                                        ? (n =
                                              '>' === r || '<' === r
                                                  ? '<0.0.0-0'
                                                  : '*')
                                        : r && f
                                        ? (u && (a = 0),
                                          (s = 0),
                                          '>' === r
                                              ? ((r = '>='),
                                                u
                                                    ? ((o = +o + 1),
                                                      (a = 0),
                                                      (s = 0))
                                                    : ((a = +a + 1), (s = 0)))
                                              : '<=' === r &&
                                                ((r = '<'),
                                                u
                                                    ? (o = +o + 1)
                                                    : (a = +a + 1)),
                                          '<' === r && (l = '-0'),
                                          (n = ''
                                              .concat(r + o, '.')
                                              .concat(a, '.')
                                              .concat(s)
                                              .concat(l)))
                                        : u
                                        ? (n = '>='
                                              .concat(o, '.0.0')
                                              .concat(l, ' <')
                                              .concat(+o + 1, '.0.0-0'))
                                        : h &&
                                          (n = '>='
                                              .concat(o, '.')
                                              .concat(a, '.0')
                                              .concat(l, ' <')
                                              .concat(o, '.')
                                              .concat(+a + 1, '.0-0')),
                                    i('xRange return', n),
                                    n
                                );
                            });
                        },
                        O = (e, t) => (
                            i('replaceStars', e, t),
                            e.trim().replace(s[l.STAR], '')
                        ),
                        A = (e, t) => (
                            i('replaceGTE0', e, t),
                            e
                                .trim()
                                .replace(
                                    s[t.includePrerelease ? l.GTE0PRE : l.GTE0],
                                    ''
                                )
                        ),
                        I = e => (t, n, r, o, i, a, s, l, c, u, h, f, p) => (
                            (n = g(r)
                                ? ''
                                : g(o)
                                ? '>='.concat(r, '.0.0').concat(e ? '-0' : '')
                                : g(i)
                                ? '>='
                                      .concat(r, '.')
                                      .concat(o, '.0')
                                      .concat(e ? '-0' : '')
                                : a
                                ? '>='.concat(n)
                                : '>='.concat(n).concat(e ? '-0' : '')),
                            (l = g(c)
                                ? ''
                                : g(u)
                                ? '<'.concat(+c + 1, '.0.0-0')
                                : g(h)
                                ? '<'.concat(c, '.').concat(+u + 1, '.0-0')
                                : f
                                ? '<='
                                      .concat(c, '.')
                                      .concat(u, '.')
                                      .concat(h, '-')
                                      .concat(f)
                                : e
                                ? '<'
                                      .concat(c, '.')
                                      .concat(u, '.')
                                      .concat(+h + 1, '-0')
                                : '<='.concat(l)),
                            ''
                                .concat(n, ' ')
                                .concat(l)
                                .trim()
                        ),
                        N = (e, t, n) => {
                            for (var r = 0; r < e.length; r++)
                                if (!e[r].test(t)) return !1;
                            if (t.prerelease.length && !n.includePrerelease) {
                                for (var a = 0; a < e.length; a++)
                                    if (
                                        (i(e[a].semver),
                                        e[a].semver !== o.ANY &&
                                            e[a].semver.prerelease.length > 0)
                                    ) {
                                        var s = e[a].semver;
                                        if (
                                            s.major === t.major &&
                                            s.minor === t.minor &&
                                            s.patch === t.patch
                                        )
                                            return !0;
                                    }
                                return !1;
                            }
                            return !0;
                        };
                    return mn;
                })(),
                Cn = (e, t, n) => {
                    try {
                        t = new Dn(t, n);
                    } catch (e) {
                        return !1;
                    }
                    return t.test(e);
                };
            function kn(e, t, n) {
                var r = e.open(t),
                    o = new URL(t).origin,
                    i = 40;
                e.addEventListener(
                    'message',
                    function t(n) {
                        n.source === r &&
                            ((i = 0), e.removeEventListener('message', t, !1));
                    },
                    !1
                ),
                    setTimeout(function e() {
                        i <= 0 ||
                            (r.postMessage(n, o), setTimeout(e, 250), (i -= 1));
                    }, 250);
            }
            var Fn,
                Pn =
                    '.vega-embed {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n}\n.vega-embed.has-actions {\n  padding-right: 38px;\n}\n.vega-embed details:not([open]) > :not(summary) {\n  display: none !important;\n}\n.vega-embed summary {\n  list-style: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 6px;\n  z-index: 1000;\n  background: white;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n  color: #1b1e23;\n  border: 1px solid #aaa;\n  border-radius: 999px;\n  opacity: 0.2;\n  transition: opacity 0.4s ease-in;\n  cursor: pointer;\n  line-height: 0px;\n}\n.vega-embed summary::-webkit-details-marker {\n  display: none;\n}\n.vega-embed summary:active {\n  box-shadow: #aaa 0px 0px 0px 1px inset;\n}\n.vega-embed summary svg {\n  width: 14px;\n  height: 14px;\n}\n.vega-embed details[open] summary {\n  opacity: 0.7;\n}\n.vega-embed:hover summary, .vega-embed:focus-within summary {\n  opacity: 1 !important;\n  transition: opacity 0.2s ease;\n}\n.vega-embed .vega-actions {\n  position: absolute;\n  z-index: 1001;\n  top: 35px;\n  right: -9px;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 8px;\n  padding-top: 8px;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);\n  border: 1px solid #d9d9d9;\n  background: white;\n  animation-duration: 0.15s;\n  animation-name: scale-in;\n  animation-timing-function: cubic-bezier(0.2, 0, 0.13, 1.5);\n  text-align: left;\n}\n.vega-embed .vega-actions a {\n  padding: 8px 16px;\n  font-family: sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  white-space: nowrap;\n  color: #434a56;\n  text-decoration: none;\n}\n.vega-embed .vega-actions a:hover, .vega-embed .vega-actions a:focus {\n  background-color: #f7f7f9;\n  color: black;\n}\n.vega-embed .vega-actions::before, .vega-embed .vega-actions::after {\n  content: "";\n  display: inline-block;\n  position: absolute;\n}\n.vega-embed .vega-actions::before {\n  left: auto;\n  right: 14px;\n  top: -16px;\n  border: 8px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #d9d9d9;\n}\n.vega-embed .vega-actions::after {\n  left: auto;\n  right: 15px;\n  top: -14px;\n  border: 7px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #fff;\n}\n.vega-embed .chart-wrapper.fit-x {\n  width: 100%;\n}\n.vega-embed .chart-wrapper.fit-y {\n  height: 100%;\n}\n\n.vega-embed-wrapper {\n  max-width: 100%;\n  overflow: auto;\n  padding-right: 14px;\n}\n\n@keyframes scale-in {\n  from {\n    opacity: 0;\n    transform: scale(0.6);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n';
            function _n(e) {
                for (
                    var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        r = 1;
                    r < t;
                    r++
                )
                    n[r - 1] = arguments[r];
                for (var o = 0, i = n; o < i.length; o++) {
                    var a = i[o];
                    Mn(e, a);
                }
                return e;
            }
            function Mn(e, t) {
                for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                    var o = r[n];
                    (0, z.writeConfig)(e, o, t[o], !0);
                }
            }
            function jn(e, t) {
                var n =
                    ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator'];
                if (!n) {
                    if (
                        Array.isArray(e) ||
                        (n = (function(e, t) {
                            if (e) {
                                if ('string' == typeof e) return zn(e, t);
                                var n = Object.prototype.toString
                                    .call(e)
                                    .slice(8, -1);
                                return (
                                    'Object' === n &&
                                        e.constructor &&
                                        (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n ||
                                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                              n
                                          )
                                        ? zn(e, t)
                                        : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length
                                    ? { done: !0 }
                                    : { done: !1, value: e[r++] };
                            },
                            e: function(e) {
                                throw e;
                            },
                            f: o,
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                }
                var i,
                    a = !0,
                    s = !1;
                return {
                    s: function() {
                        n = n.call(e);
                    },
                    n: function() {
                        var e = n.next();
                        return (a = e.done), e;
                    },
                    e: function(e) {
                        (s = !0), (i = e);
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return();
                        } finally {
                            if (s) throw i;
                        }
                    },
                };
            }
            function zn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function Un(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t
                            ).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function Bn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? Un(Object(n), !0).forEach(function(t) {
                              Ye(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n)
                          )
                        : Un(Object(n)).forEach(function(t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                              );
                          });
                }
                return e;
            }
            String.prototype.startsWith ||
                (String.prototype.startsWith = function(e, t) {
                    return this.substr(!t || t < 0 ? 0 : +t, e.length) === e;
                });
            var Gn = '6.21.0',
                Xn = z,
                Wn = q,
                $n = 'undefined' != typeof window ? window : void 0;
            void 0 === Wn &&
                null != $n &&
                null !== (Fn = $n.vl) &&
                void 0 !== Fn &&
                Fn.compile &&
                (Wn = $n.vl);
            var Vn = {
                    export: { svg: !0, png: !0 },
                    source: !0,
                    compiled: !0,
                    editor: !0,
                },
                Hn = {
                    CLICK_TO_VIEW_ACTIONS: 'Click to view actions',
                    COMPILED_ACTION: 'View Compiled Vega',
                    EDITOR_ACTION: 'Open in Vega Editor',
                    PNG_ACTION: 'Save as PNG',
                    SOURCE_ACTION: 'View Source',
                    SVG_ACTION: 'Save as SVG',
                },
                Jn = { vega: 'Vega', 'vega-lite': 'Vega-Lite' },
                Yn = {
                    vega: Xn.version,
                    'vega-lite': Wn ? Wn.version : 'not available',
                },
                qn = {
                    vega: e => e,
                    'vega-lite': (e, t) => Wn.compile(e, { config: t }).spec,
                },
                Qn =
                    '\n<svg viewBox="0 0 16 16" fill="currentColor" stroke="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">\n  <circle r="2" cy="8" cx="2"></circle>\n  <circle r="2" cy="8" cx="8"></circle>\n  <circle r="2" cy="8" cx="14"></circle>\n</svg>',
                Kn = 'chart-wrapper';
            function Zn(e) {
                return 'function' == typeof e;
            }
            function er(e, t, n, r) {
                var o = '<html><head>'.concat(
                        t,
                        '</head><body><pre><code class="json">'
                    ),
                    i = '</code></pre>'.concat(n, '</body></html>'),
                    a = window.open('');
                a.document.write(o + e + i),
                    (a.document.title = ''.concat(Jn[r], ' JSON Source'));
            }
            function tr(e, t) {
                if (e.$schema) {
                    var n,
                        r = Q(e.$schema);
                    t &&
                        t !== r.library &&
                        console.warn(
                            'The given visualization spec is written in '
                                .concat(
                                    Jn[r.library],
                                    ', but mode argument sets '
                                )
                                .concat(
                                    null !== (n = Jn[t]) && void 0 !== n
                                        ? n
                                        : t,
                                    '.'
                                )
                        );
                    var o = r.library;
                    return (
                        Cn(Yn[o], '^'.concat(r.version.slice(1))) ||
                            console.warn(
                                'The input spec uses '
                                    .concat(Jn[o], ' ')
                                    .concat(
                                        r.version,
                                        ', but the current version of '
                                    )
                                    .concat(Jn[o], ' is v')
                                    .concat(Yn[o], '.')
                            ),
                        o
                    );
                }
                return 'mark' in e ||
                    'encoding' in e ||
                    'layer' in e ||
                    'hconcat' in e ||
                    'vconcat' in e ||
                    'facet' in e ||
                    'repeat' in e
                    ? 'vega-lite'
                    : 'marks' in e ||
                      'signals' in e ||
                      'scales' in e ||
                      'axes' in e
                    ? 'vega'
                    : null != t
                    ? t
                    : 'vega';
            }
            function nr(e) {
                return (t = e) && 'load' in t ? e : Xn.loader(e);
                var t;
            }
            function rr(e) {
                var t,
                    n,
                    r =
                        null !==
                            (t =
                                null === (n = e.usermeta) || void 0 === n
                                    ? void 0
                                    : n.embedOptions) && void 0 !== t
                            ? t
                            : {};
                return (
                    (0, z.isString)(r.defaultStyle) && (r.defaultStyle = !1), r
                );
            }
            function or(e, t) {
                return ir.apply(this, arguments);
            }
            function ir() {
                return (
                    (ir = Qe(
                        St.mark(function e(t, n) {
                            var r,
                                o,
                                i,
                                a,
                                s,
                                l,
                                c,
                                u,
                                h,
                                f,
                                p,
                                d = arguments;
                            return St.wrap(function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (
                                                ((i =
                                                    d.length > 2 &&
                                                    void 0 !== d[2]
                                                        ? d[2]
                                                        : {}),
                                                !(0, z.isString)(n))
                                            ) {
                                                e.next = 10;
                                                break;
                                            }
                                            return (
                                                (s = nr(i.loader)),
                                                (e.t0 = JSON),
                                                (e.next = 6),
                                                s.load(n)
                                            );
                                        case 6:
                                            (e.t1 = e.sent),
                                                (a = e.t0.parse.call(
                                                    e.t0,
                                                    e.t1
                                                )),
                                                (e.next = 11);
                                            break;
                                        case 10:
                                            a = n;
                                        case 11:
                                            return (
                                                (l = rr(a)),
                                                (c = l.loader),
                                                (s && !c) ||
                                                    (s = nr(
                                                        null !==
                                                            (u = i.loader) &&
                                                            void 0 !== u
                                                            ? u
                                                            : c
                                                    )),
                                                (e.next = 16),
                                                ar(l, s)
                                            );
                                        case 16:
                                            return (
                                                (h = e.sent),
                                                (e.next = 19),
                                                ar(i, s)
                                            );
                                        case 19:
                                            return (
                                                (f = e.sent),
                                                (p = Bn(
                                                    Bn({}, _n(f, h)),
                                                    {},
                                                    {
                                                        config: (0,
                                                        z.mergeConfig)(
                                                            null !==
                                                                (r =
                                                                    f.config) &&
                                                                void 0 !== r
                                                                ? r
                                                                : {},
                                                            null !==
                                                                (o =
                                                                    h.config) &&
                                                                void 0 !== o
                                                                ? o
                                                                : {}
                                                        ),
                                                    }
                                                )),
                                                (e.next = 23),
                                                cr(t, a, p, s)
                                            );
                                        case 23:
                                            return e.abrupt('return', e.sent);
                                        case 24:
                                        case 'end':
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )),
                    ir.apply(this, arguments)
                );
            }
            function ar(e, t) {
                return sr.apply(this, arguments);
            }
            function sr() {
                return (sr = Qe(
                    St.mark(function e(t, n) {
                        var r, o, i;
                        return St.wrap(function(e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        if (!(0, z.isString)(t.config)) {
                                            e.next = 8;
                                            break;
                                        }
                                        return (
                                            (e.t1 = JSON),
                                            (e.next = 4),
                                            n.load(t.config)
                                        );
                                    case 4:
                                        (e.t2 = e.sent),
                                            (e.t0 = e.t1.parse.call(
                                                e.t1,
                                                e.t2
                                            )),
                                            (e.next = 9);
                                        break;
                                    case 8:
                                        e.t0 =
                                            null !== (r = t.config) &&
                                            void 0 !== r
                                                ? r
                                                : {};
                                    case 9:
                                        if (
                                            ((o = e.t0),
                                            !(0, z.isString)(t.patch))
                                        ) {
                                            e.next = 18;
                                            break;
                                        }
                                        return (
                                            (e.t4 = JSON),
                                            (e.next = 14),
                                            n.load(t.patch)
                                        );
                                    case 14:
                                        (e.t5 = e.sent),
                                            (e.t3 = e.t4.parse.call(
                                                e.t4,
                                                e.t5
                                            )),
                                            (e.next = 19);
                                        break;
                                    case 18:
                                        e.t3 = t.patch;
                                    case 19:
                                        return (
                                            (i = e.t3),
                                            e.abrupt(
                                                'return',
                                                Bn(
                                                    Bn(
                                                        Bn({}, t),
                                                        i ? { patch: i } : {}
                                                    ),
                                                    o ? { config: o } : {}
                                                )
                                            )
                                        );
                                    case 21:
                                    case 'end':
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            function lr(e) {
                var t,
                    n = e.getRootNode ? e.getRootNode() : document;
                return n instanceof ShadowRoot
                    ? { root: n, rootContainer: n }
                    : {
                          root: document,
                          rootContainer:
                              null !== (t = document.head) && void 0 !== t
                                  ? t
                                  : document.body,
                      };
            }
            function cr(e, t) {
                return ur.apply(this, arguments);
            }
            function ur() {
                return (
                    (ur = Qe(
                        St.mark(function e(t, n) {
                            var r,
                                o,
                                a,
                                s,
                                l,
                                c,
                                u,
                                h,
                                f,
                                p,
                                d,
                                v,
                                g,
                                m,
                                y,
                                E,
                                b,
                                w,
                                x,
                                O,
                                I,
                                N,
                                L,
                                S,
                                T,
                                R,
                                D,
                                C,
                                k,
                                F,
                                P,
                                _,
                                M,
                                U,
                                B,
                                G,
                                X,
                                W,
                                $,
                                V,
                                H,
                                J,
                                q,
                                K,
                                Z,
                                ee,
                                te,
                                ne,
                                re,
                                oe,
                                ie,
                                ae = arguments;
                            return St.wrap(function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (
                                                ((ie = function() {
                                                    W &&
                                                        document.removeEventListener(
                                                            'click',
                                                            W
                                                        ),
                                                        _.finalize();
                                                }),
                                                (h =
                                                    ae.length > 2 &&
                                                    void 0 !== ae[2]
                                                        ? ae[2]
                                                        : {}),
                                                (f =
                                                    ae.length > 3
                                                        ? ae[3]
                                                        : void 0),
                                                (p = h.theme
                                                    ? (0, z.mergeConfig)(
                                                          i[h.theme],
                                                          null !==
                                                              (r = h.config) &&
                                                              void 0 !== r
                                                              ? r
                                                              : {}
                                                      )
                                                    : h.config),
                                                (d = (0, z.isBoolean)(h.actions)
                                                    ? h.actions
                                                    : _n(
                                                          {},
                                                          Vn,
                                                          null !==
                                                              (o = h.actions) &&
                                                              void 0 !== o
                                                              ? o
                                                              : {}
                                                      )),
                                                (v = Bn(Bn({}, Hn), h.i18n)),
                                                (g =
                                                    null !== (a = h.renderer) &&
                                                    void 0 !== a
                                                        ? a
                                                        : 'canvas'),
                                                (m =
                                                    null !== (s = h.logLevel) &&
                                                    void 0 !== s
                                                        ? s
                                                        : Xn.Warn),
                                                (y =
                                                    null !==
                                                        (l =
                                                            h.downloadFileName) &&
                                                    void 0 !== l
                                                        ? l
                                                        : 'visualization'),
                                                (E =
                                                    'string' == typeof t
                                                        ? document.querySelector(
                                                              t
                                                          )
                                                        : t))
                                            ) {
                                                e.next = 12;
                                                break;
                                            }
                                            throw new Error(
                                                ''.concat(t, ' does not exist')
                                            );
                                        case 12:
                                            if (
                                                (!1 !== h.defaultStyle &&
                                                    ((b = 'vega-embed-style'),
                                                    (w = lr(E)),
                                                    (x = w.root),
                                                    (O = w.rootContainer),
                                                    x.getElementById(b) ||
                                                        (((I = document.createElement(
                                                            'style'
                                                        )).id = b),
                                                        (I.innerHTML =
                                                            void 0 ===
                                                                h.defaultStyle ||
                                                            !0 ===
                                                                h.defaultStyle
                                                                ? Pn.toString()
                                                                : h.defaultStyle),
                                                        O.appendChild(I))),
                                                (N = tr(n, h.mode)),
                                                (L = qn[N](n, p)),
                                                'vega-lite' === N &&
                                                    L.$schema &&
                                                    ((S = Q(L.$schema)),
                                                    Cn(
                                                        Yn.vega,
                                                        '^'.concat(
                                                            S.version.slice(1)
                                                        )
                                                    ) ||
                                                        console.warn(
                                                            'The compiled spec uses Vega '
                                                                .concat(
                                                                    S.version,
                                                                    ', but current version is v'
                                                                )
                                                                .concat(
                                                                    Yn.vega,
                                                                    '.'
                                                                )
                                                        )),
                                                E.classList.add('vega-embed'),
                                                d &&
                                                    E.classList.add(
                                                        'has-actions'
                                                    ),
                                                (E.innerHTML = ''),
                                                (T = E),
                                                d &&
                                                    ((R = document.createElement(
                                                        'div'
                                                    )).classList.add(Kn),
                                                    E.appendChild(R),
                                                    (T = R)),
                                                (D = h.patch) &&
                                                    (L =
                                                        D instanceof Function
                                                            ? D(L)
                                                            : A(L, D, !0, !1)
                                                                  .newDocument),
                                                h.formatLocale &&
                                                    Xn.formatLocale(
                                                        h.formatLocale
                                                    ),
                                                h.timeFormatLocale &&
                                                    Xn.timeFormatLocale(
                                                        h.timeFormatLocale
                                                    ),
                                                h.expressionFunctions)
                                            )
                                                for (C in h.expressionFunctions)
                                                    'fn' in
                                                    (k =
                                                        h.expressionFunctions[
                                                            C
                                                        ])
                                                        ? Xn.expressionFunction(
                                                              C,
                                                              k.fn,
                                                              k.visitor
                                                          )
                                                        : k instanceof
                                                              Function &&
                                                          Xn.expressionFunction(
                                                              C,
                                                              k
                                                          );
                                            return (
                                                (F = h.ast),
                                                (P = Xn.parse(
                                                    L,
                                                    'vega-lite' === N ? {} : p,
                                                    { ast: F }
                                                )),
                                                (_ = new (h.viewClass ||
                                                    Xn.View)(
                                                    P,
                                                    Bn(
                                                        {
                                                            loader: f,
                                                            logLevel: m,
                                                            renderer: g,
                                                        },
                                                        F
                                                            ? {
                                                                  expr:
                                                                      null !==
                                                                          (c =
                                                                              null !==
                                                                                  (u =
                                                                                      Xn.expressionInterpreter) &&
                                                                              void 0 !==
                                                                                  u
                                                                                  ? u
                                                                                  : h.expr) &&
                                                                      void 0 !==
                                                                          c
                                                                          ? c
                                                                          : Y,
                                                              }
                                                            : {}
                                                    )
                                                )).addSignalListener(
                                                    'autosize',
                                                    (e, t) => {
                                                        var n = t.type;
                                                        'fit-x' == n
                                                            ? (T.classList.add(
                                                                  'fit-x'
                                                              ),
                                                              T.classList.remove(
                                                                  'fit-y'
                                                              ))
                                                            : 'fit-y' == n
                                                            ? (T.classList.remove(
                                                                  'fit-x'
                                                              ),
                                                              T.classList.add(
                                                                  'fit-y'
                                                              ))
                                                            : 'fit' == n
                                                            ? T.classList.add(
                                                                  'fit-x',
                                                                  'fit-y'
                                                              )
                                                            : T.classList.remove(
                                                                  'fit-x',
                                                                  'fit-y'
                                                              );
                                                    }
                                                ),
                                                !1 !== h.tooltip &&
                                                    ((M = Zn(h.tooltip)
                                                        ? h.tooltip
                                                        : new Je(
                                                              !0 === h.tooltip
                                                                  ? {}
                                                                  : h.tooltip
                                                          ).call),
                                                    _.tooltip(M)),
                                                void 0 === (U = h.hover) &&
                                                    (U = 'vega' === N),
                                                U &&
                                                    ((G = (B =
                                                        'boolean' == typeof U
                                                            ? {}
                                                            : U).hoverSet),
                                                    (X = B.updateSet),
                                                    _.hover(G, X)),
                                                h &&
                                                    (null != h.width &&
                                                        _.width(h.width),
                                                    null != h.height &&
                                                        _.height(h.height),
                                                    null != h.padding &&
                                                        _.padding(h.padding)),
                                                (e.next = 37),
                                                _.initialize(
                                                    T,
                                                    h.bind
                                                ).runAsync()
                                            );
                                        case 37:
                                            if (!1 !== d) {
                                                if (
                                                    (($ = E),
                                                    !1 !== h.defaultStyle &&
                                                        (((V = document.createElement(
                                                            'details'
                                                        )).title =
                                                            v.CLICK_TO_VIEW_ACTIONS),
                                                        E.append(V),
                                                        ($ = V),
                                                        ((H = document.createElement(
                                                            'summary'
                                                        )).innerHTML = Qn),
                                                        V.append(H),
                                                        (W = e => {
                                                            V.contains(
                                                                e.target
                                                            ) ||
                                                                V.removeAttribute(
                                                                    'open'
                                                                );
                                                        }),
                                                        document.addEventListener(
                                                            'click',
                                                            W
                                                        )),
                                                    (J = document.createElement(
                                                        'div'
                                                    )),
                                                    $.append(J),
                                                    J.classList.add(
                                                        'vega-actions'
                                                    ),
                                                    !0 === d || !1 !== d.export)
                                                ) {
                                                    q = jn(['svg', 'png']);
                                                    try {
                                                        for (
                                                            Z = function() {
                                                                var e = K.value;
                                                                if (
                                                                    !0 === d ||
                                                                    !0 ===
                                                                        d.export ||
                                                                    d.export[e]
                                                                ) {
                                                                    var t =
                                                                            v[
                                                                                ''.concat(
                                                                                    e.toUpperCase(),
                                                                                    '_ACTION'
                                                                                )
                                                                            ],
                                                                        n = document.createElement(
                                                                            'a'
                                                                        );
                                                                    (n.text = t),
                                                                        (n.href =
                                                                            '#'),
                                                                        (n.target =
                                                                            '_blank'),
                                                                        (n.download = ''
                                                                            .concat(
                                                                                y,
                                                                                '.'
                                                                            )
                                                                            .concat(
                                                                                e
                                                                            )),
                                                                        n.addEventListener(
                                                                            'mousedown',
                                                                            (function() {
                                                                                var t = Qe(
                                                                                    St.mark(
                                                                                        function t(
                                                                                            n
                                                                                        ) {
                                                                                            var r;
                                                                                            return St.wrap(
                                                                                                function(
                                                                                                    t
                                                                                                ) {
                                                                                                    for (;;)
                                                                                                        switch (
                                                                                                            (t.prev =
                                                                                                                t.next)
                                                                                                        ) {
                                                                                                            case 0:
                                                                                                                return (
                                                                                                                    n.preventDefault(),
                                                                                                                    (t.next = 3),
                                                                                                                    _.toImageURL(
                                                                                                                        e,
                                                                                                                        h.scaleFactor
                                                                                                                    )
                                                                                                                );
                                                                                                            case 3:
                                                                                                                (r =
                                                                                                                    t.sent),
                                                                                                                    (this.href = r);
                                                                                                            case 5:
                                                                                                            case 'end':
                                                                                                                return t.stop();
                                                                                                        }
                                                                                                },
                                                                                                t,
                                                                                                this
                                                                                            );
                                                                                        }
                                                                                    )
                                                                                );
                                                                                return function(
                                                                                    e
                                                                                ) {
                                                                                    return t.apply(
                                                                                        this,
                                                                                        arguments
                                                                                    );
                                                                                };
                                                                            })()
                                                                        ),
                                                                        J.append(
                                                                            n
                                                                        );
                                                                }
                                                            },
                                                                q.s();
                                                            !(K = q.n()).done;

                                                        )
                                                            Z();
                                                    } catch (e) {
                                                        q.e(e);
                                                    } finally {
                                                        q.f();
                                                    }
                                                }
                                                (!0 !== d && !1 === d.source) ||
                                                    (((ee = document.createElement(
                                                        'a'
                                                    )).text = v.SOURCE_ACTION),
                                                    (ee.href = '#'),
                                                    ee.addEventListener(
                                                        'click',
                                                        function(e) {
                                                            var t, r;
                                                            er(
                                                                j()(n),
                                                                null !==
                                                                    (t =
                                                                        h.sourceHeader) &&
                                                                    void 0 !== t
                                                                    ? t
                                                                    : '',
                                                                null !==
                                                                    (r =
                                                                        h.sourceFooter) &&
                                                                    void 0 !== r
                                                                    ? r
                                                                    : '',
                                                                N
                                                            ),
                                                                e.preventDefault();
                                                        }
                                                    ),
                                                    J.append(ee)),
                                                    'vega-lite' !== N ||
                                                        (!0 !== d &&
                                                            !1 ===
                                                                d.compiled) ||
                                                        (((te = document.createElement(
                                                            'a'
                                                        )).text =
                                                            v.COMPILED_ACTION),
                                                        (te.href = '#'),
                                                        te.addEventListener(
                                                            'click',
                                                            function(e) {
                                                                var t, n;
                                                                er(
                                                                    j()(L),
                                                                    null !==
                                                                        (t =
                                                                            h.sourceHeader) &&
                                                                        void 0 !==
                                                                            t
                                                                        ? t
                                                                        : '',
                                                                    null !==
                                                                        (n =
                                                                            h.sourceFooter) &&
                                                                        void 0 !==
                                                                            n
                                                                        ? n
                                                                        : '',
                                                                    'vega'
                                                                ),
                                                                    e.preventDefault();
                                                            }
                                                        ),
                                                        J.append(te)),
                                                    (!0 !== d &&
                                                        !1 === d.editor) ||
                                                        ((re =
                                                            null !==
                                                                (ne =
                                                                    h.editorUrl) &&
                                                            void 0 !== ne
                                                                ? ne
                                                                : 'https://vega.github.io/editor/'),
                                                        ((oe = document.createElement(
                                                            'a'
                                                        )).text =
                                                            v.EDITOR_ACTION),
                                                        (oe.href = '#'),
                                                        oe.addEventListener(
                                                            'click',
                                                            function(e) {
                                                                kn(window, re, {
                                                                    config: p,
                                                                    mode: N,
                                                                    renderer: g,
                                                                    spec: j()(
                                                                        n
                                                                    ),
                                                                }),
                                                                    e.preventDefault();
                                                            }
                                                        ),
                                                        J.append(oe));
                                            }
                                            return e.abrupt('return', {
                                                view: _,
                                                spec: n,
                                                vgSpec: L,
                                                finalize: ie,
                                                embedOptions: h,
                                            });
                                        case 39:
                                        case 'end':
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )),
                    ur.apply(this, arguments)
                );
            }
        },
        68542: (e, t, n) => {
            function r(e, t, n) {
                return (e.fields = t || []), (e.fname = n), e;
            }
            function o(e) {
                return null == e ? null : e.fname;
            }
            function i(e) {
                return null == e ? null : e.fields;
            }
            function a(e) {
                return 1 === e.length ? s(e[0]) : l(e);
            }
            n.d(t, {
                $G: () => Pe,
                $m: () => Ae,
                BB: () => ke,
                Ds: () => ie,
                Dw: () => z,
                EP: () => h,
                FP: () => _e,
                HD: () => we,
                He: () => C,
                Hq: () => E,
                IX: () => q,
                J_: () => me,
                Jy: () => xe,
                Kj: () => be,
                Kn: () => N,
                N3: () => Y,
                Oj: () => i,
                QA: () => B,
                Rg: () => Fe,
                TS: () => Ie,
                TW: () => ye,
                We: () => se,
                XW: () => de,
                Xr: () => fe,
                ZE: () => r,
                ZU: () => Ce,
                Zw: () => G,
                _k: () => u,
                a9: () => oe,
                ay: () => W,
                bM: () => d,
                bV: () => H,
                cG: () => O,
                dH: () => $,
                dI: () => le,
                el: () => o,
                fE: () => S,
                fj: () => D,
                hj: () => Ee,
                iL: () => T,
                id: () => f,
                j2: () => ee,
                jj: () => b,
                jn: () => ge,
                k: () => m,
                kI: () => x,
                kJ: () => I,
                kX: () => v,
                kg: () => A,
                l$: () => Q,
                l7: () => ae,
                m8: () => Te,
                mJ: () => U,
                mK: () => V,
                mS: () => J,
                mf: () => K,
                nr: () => ue,
                qu: () => Z,
                rx: () => Ne,
                sw: () => Re,
                t7: () => Oe,
                u5: () => ve,
                uU: () => w,
                vU: () => c,
                vk: () => Le,
                yP: () => Se,
                yR: () => p,
                yb: () => g,
                yl: () => pe,
            });
            const s = e =>
                    function(t) {
                        return t[e];
                    },
                l = e => {
                    const t = e.length;
                    return function(n) {
                        for (let r = 0; r < t; ++r) n = n[e[r]];
                        return n;
                    };
                };
            function c(e) {
                throw Error(e);
            }
            function u(e) {
                const t = [],
                    n = e.length;
                let r,
                    o,
                    i,
                    a = null,
                    s = 0,
                    l = '';
                function u() {
                    t.push(l + e.substring(r, o)), (l = ''), (r = o + 1);
                }
                for (e += '', r = o = 0; o < n; ++o)
                    if (((i = e[o]), '\\' === i))
                        (l += e.substring(r, o)),
                            (l += e.substring(++o, ++o)),
                            (r = o);
                    else if (i === a) u(), (a = null), (s = -1);
                    else {
                        if (a) continue;
                        (r === s && '"' === i) || (r === s && "'" === i)
                            ? ((r = o + 1), (a = i))
                            : '.' !== i || s
                            ? '[' === i
                                ? (o > r && u(), (s = r = o + 1))
                                : ']' === i &&
                                  (s ||
                                      c(
                                          'Access path missing open bracket: ' +
                                              e
                                      ),
                                  s > 0 && u(),
                                  (s = 0),
                                  (r = o + 1))
                            : o > r
                            ? u()
                            : (r = o + 1);
                    }
                return (
                    s && c('Access path missing closing bracket: ' + e),
                    a && c('Access path missing closing quote: ' + e),
                    o > r && (o++, u()),
                    t
                );
            }
            function h(e, t, n) {
                const o = u(e);
                return (
                    (e = 1 === o.length ? o[0] : e),
                    r(((n && n.get) || a)(o), [e], t || e)
                );
            }
            const f = h('id'),
                p = r(e => e, [], 'identity'),
                d = r(() => 0, [], 'zero'),
                v = r(() => 1, [], 'one'),
                g = r(() => !0, [], 'true'),
                m = r(() => !1, [], 'false');
            function y(e, t, n) {
                const r = [t].concat([].slice.call(n));
                console[e].apply(console, r);
            }
            const E = 0,
                b = 1,
                w = 2,
                x = 3,
                O = 4;
            function A(e, t, n = y) {
                let r = e || E;
                return {
                    level(e) {
                        return arguments.length ? ((r = +e), this) : r;
                    },
                    error() {
                        return (
                            r >= b && n(t || 'error', 'ERROR', arguments), this
                        );
                    },
                    warn() {
                        return (
                            r >= w && n(t || 'warn', 'WARN', arguments), this
                        );
                    },
                    info() {
                        return r >= x && n(t || 'log', 'INFO', arguments), this;
                    },
                    debug() {
                        return (
                            r >= O && n(t || 'log', 'DEBUG', arguments), this
                        );
                    },
                };
            }
            var I = Array.isArray;
            function N(e) {
                return e === Object(e);
            }
            const L = e => '__proto__' !== e;
            function S(...e) {
                return e.reduce((e, t) => {
                    for (const n in t)
                        if ('signals' === n)
                            e.signals = R(e.signals, t.signals);
                        else {
                            const r =
                                'legend' === n
                                    ? { layout: 1 }
                                    : 'style' === n || null;
                            T(e, n, t[n], r);
                        }
                    return e;
                }, {});
            }
            function T(e, t, n, r) {
                if (!L(t)) return;
                let o, i;
                if (N(n) && !I(n))
                    for (o in ((i = N(e[t]) ? e[t] : (e[t] = {})), n))
                        r && (!0 === r || r[o])
                            ? T(i, o, n[o])
                            : L(o) && (i[o] = n[o]);
                else e[t] = n;
            }
            function R(e, t) {
                if (null == e) return t;
                const n = {},
                    r = [];
                function o(e) {
                    n[e.name] || ((n[e.name] = 1), r.push(e));
                }
                return t.forEach(o), e.forEach(o), r;
            }
            function D(e) {
                return e[e.length - 1];
            }
            function C(e) {
                return null == e || '' === e ? null : +e;
            }
            const k = e => t => e * Math.exp(t),
                F = e => t => Math.log(e * t),
                P = e => t => Math.sign(t) * Math.log1p(Math.abs(t / e)),
                _ = e => t => Math.sign(t) * Math.expm1(Math.abs(t)) * e,
                M = e => t => (t < 0 ? -Math.pow(-t, e) : Math.pow(t, e));
            function j(e, t, n, r) {
                const o = n(e[0]),
                    i = n(D(e)),
                    a = (i - o) * t;
                return [r(o - a), r(i - a)];
            }
            function z(e, t) {
                return j(e, t, C, p);
            }
            function U(e, t) {
                var n = Math.sign(e[0]);
                return j(e, t, F(n), k(n));
            }
            function B(e, t, n) {
                return j(e, t, M(n), M(1 / n));
            }
            function G(e, t, n) {
                return j(e, t, P(n), _(n));
            }
            function X(e, t, n, r, o) {
                const i = r(e[0]),
                    a = r(D(e)),
                    s = null != t ? r(t) : (i + a) / 2;
                return [o(s + (i - s) * n), o(s + (a - s) * n)];
            }
            function W(e, t, n) {
                return X(e, t, n, C, p);
            }
            function $(e, t, n) {
                const r = Math.sign(e[0]);
                return X(e, t, n, F(r), k(r));
            }
            function V(e, t, n, r) {
                return X(e, t, n, M(r), M(1 / r));
            }
            function H(e, t, n, r) {
                return X(e, t, n, P(r), _(r));
            }
            function J(e) {
                return 1 + ~~(new Date(e).getMonth() / 3);
            }
            function Y(e) {
                return 1 + ~~(new Date(e).getUTCMonth() / 3);
            }
            function q(e) {
                return null != e ? (I(e) ? e : [e]) : [];
            }
            function Q(e, t, n) {
                let r,
                    o = e[0],
                    i = e[1];
                return (
                    i < o && ((r = i), (i = o), (o = r)),
                    (r = i - o),
                    r >= n - t
                        ? [t, n]
                        : [(o = Math.min(Math.max(o, t), n - r)), o + r]
                );
            }
            function K(e) {
                return 'function' == typeof e;
            }
            function Z(e, t, n) {
                (n = n || {}), (t = q(t) || []);
                const o = [],
                    a = [],
                    s = {},
                    l = n.comparator || te;
                return (
                    q(e).forEach((e, r) => {
                        null != e &&
                            (o.push('descending' === t[r] ? -1 : 1),
                            a.push((e = K(e) ? e : h(e, null, n))),
                            (i(e) || []).forEach(e => (s[e] = 1)));
                    }),
                    0 === a.length ? null : r(l(a, o), Object.keys(s))
                );
            }
            const ee = (e, t) =>
                    (e < t || null == e) && null != t
                        ? -1
                        : (e > t || null == t) && null != e
                        ? 1
                        : ((t = t instanceof Date ? +t : t),
                          (e = e instanceof Date ? +e : e) !== e && t == t
                              ? -1
                              : t != t && e == e
                              ? 1
                              : 0),
                te = (e, t) =>
                    1 === e.length ? ne(e[0], t[0]) : re(e, t, e.length),
                ne = (e, t) =>
                    function(n, r) {
                        return ee(e(n), e(r)) * t;
                    },
                re = (e, t, n) => (
                    t.push(0),
                    function(r, o) {
                        let i,
                            a = 0,
                            s = -1;
                        for (; 0 === a && ++s < n; )
                            (i = e[s]), (a = ee(i(r), i(o)));
                        return a * t[s];
                    }
                );
            function oe(e) {
                return K(e) ? e : () => e;
            }
            function ie(e, t) {
                let n;
                return r => {
                    n && clearTimeout(n),
                        (n = setTimeout(() => (t(r), (n = null)), e));
                };
            }
            function ae(e) {
                for (let t, n, r = 1, o = arguments.length; r < o; ++r)
                    for (n in ((t = arguments[r]), t)) e[n] = t[n];
                return e;
            }
            function se(e, t) {
                let n,
                    r,
                    o,
                    i,
                    a = 0;
                if (e && (n = e.length))
                    if (null == t) {
                        for (
                            r = e[a];
                            a < n && (null == r || r != r);
                            r = e[++a]
                        );
                        for (o = i = r; a < n; ++a)
                            (r = e[a]),
                                null != r &&
                                    (r < o && (o = r), r > i && (i = r));
                    } else {
                        for (
                            r = t(e[a]);
                            a < n && (null == r || r != r);
                            r = t(e[++a])
                        );
                        for (o = i = r; a < n; ++a)
                            (r = t(e[a])),
                                null != r &&
                                    (r < o && (o = r), r > i && (i = r));
                    }
                return [o, i];
            }
            function le(e, t) {
                const n = e.length;
                let r,
                    o,
                    i,
                    a,
                    s,
                    l = -1;
                if (null == t) {
                    for (; ++l < n; )
                        if (((o = e[l]), null != o && o >= o)) {
                            r = i = o;
                            break;
                        }
                    if (l === n) return [-1, -1];
                    for (a = s = l; ++l < n; )
                        (o = e[l]),
                            null != o &&
                                (r > o && ((r = o), (a = l)),
                                i < o && ((i = o), (s = l)));
                } else {
                    for (; ++l < n; )
                        if (((o = t(e[l], l, e)), null != o && o >= o)) {
                            r = i = o;
                            break;
                        }
                    if (l === n) return [-1, -1];
                    for (a = s = l; ++l < n; )
                        (o = t(e[l], l, e)),
                            null != o &&
                                (r > o && ((r = o), (a = l)),
                                i < o && ((i = o), (s = l)));
                }
                return [a, s];
            }
            const ce = Object.prototype.hasOwnProperty;
            function ue(e, t) {
                return ce.call(e, t);
            }
            const he = {};
            function fe(e) {
                let t,
                    n = {};
                function r(e) {
                    return ue(n, e) && n[e] !== he;
                }
                const o = {
                    size: 0,
                    empty: 0,
                    object: n,
                    has: r,
                    get: e => (r(e) ? n[e] : void 0),
                    set(e, t) {
                        return (
                            r(e) || (++o.size, n[e] === he && --o.empty),
                            (n[e] = t),
                            this
                        );
                    },
                    delete(e) {
                        return r(e) && (--o.size, ++o.empty, (n[e] = he)), this;
                    },
                    clear() {
                        (o.size = o.empty = 0), (o.object = n = {});
                    },
                    test(e) {
                        return arguments.length ? ((t = e), o) : t;
                    },
                    clean() {
                        const e = {};
                        let r = 0;
                        for (const o in n) {
                            const i = n[o];
                            i === he || (t && t(i)) || ((e[o] = i), ++r);
                        }
                        (o.size = r), (o.empty = 0), (o.object = n = e);
                    },
                };
                return (
                    e &&
                        Object.keys(e).forEach(t => {
                            o.set(t, e[t]);
                        }),
                    o
                );
            }
            function pe(e, t, n, r, o, i) {
                if (!n && 0 !== n) return i;
                const a = +n;
                let s,
                    l = e[0],
                    c = D(e);
                c < l && ((s = l), (l = c), (c = s)), (s = Math.abs(t - l));
                const u = Math.abs(c - t);
                return s < u && s <= a ? r : u <= a ? o : i;
            }
            function de(e, t, n) {
                const r = (e.prototype = Object.create(t.prototype));
                return (
                    Object.defineProperty(r, 'constructor', {
                        value: e,
                        writable: !0,
                        enumerable: !0,
                        configurable: !0,
                    }),
                    ae(r, n)
                );
            }
            function ve(e, t, n, r) {
                let o,
                    i = t[0],
                    a = t[t.length - 1];
                return (
                    i > a && ((o = i), (i = a), (a = o)),
                    (r = void 0 === r || r),
                    ((n = void 0 === n || n) ? i <= e : i < e) &&
                        (r ? e <= a : e < a)
                );
            }
            function ge(e) {
                return 'boolean' == typeof e;
            }
            function me(e) {
                return '[object Date]' === Object.prototype.toString.call(e);
            }
            function ye(e) {
                return e && K(e[Symbol.iterator]);
            }
            function Ee(e) {
                return 'number' == typeof e;
            }
            function be(e) {
                return '[object RegExp]' === Object.prototype.toString.call(e);
            }
            function we(e) {
                return 'string' == typeof e;
            }
            function xe(e, t, n) {
                e && (e = t ? q(e).map(e => e.replace(/\\(.)/g, '$1')) : q(e));
                const o = e && e.length,
                    i = (n && n.get) || a,
                    s = e => i(t ? [e] : u(e));
                let l;
                if (o)
                    if (1 === o) {
                        const t = s(e[0]);
                        l = function(e) {
                            return '' + t(e);
                        };
                    } else {
                        const t = e.map(s);
                        l = function(e) {
                            let n = '' + t[0](e),
                                r = 0;
                            for (; ++r < o; ) n += '|' + t[r](e);
                            return n;
                        };
                    }
                else
                    l = function() {
                        return '';
                    };
                return r(l, e, 'key');
            }
            function Oe(e, t) {
                const n = e[0],
                    r = D(e),
                    o = +t;
                return o ? (1 === o ? r : n + o * (r - n)) : n;
            }
            function Ae(e) {
                let t, n, r;
                e = +e || 1e4;
                const o = () => {
                        (t = {}), (n = {}), (r = 0);
                    },
                    i = (o, i) => (
                        ++r > e && ((n = t), (t = {}), (r = 1)), (t[o] = i)
                    );
                return (
                    o(),
                    {
                        clear: o,
                        has: e => ue(t, e) || ue(n, e),
                        get: e =>
                            ue(t, e) ? t[e] : ue(n, e) ? i(e, n[e]) : void 0,
                        set: (e, n) => (ue(t, e) ? (t[e] = n) : i(e, n)),
                    }
                );
            }
            function Ie(e, t, n, r) {
                const o = t.length,
                    i = n.length;
                if (!i) return t;
                if (!o) return n;
                const a = r || new t.constructor(o + i);
                let s = 0,
                    l = 0,
                    c = 0;
                for (; s < o && l < i; ++c)
                    a[c] = e(t[s], n[l]) > 0 ? n[l++] : t[s++];
                for (; s < o; ++s, ++c) a[c] = t[s];
                for (; l < i; ++l, ++c) a[c] = n[l];
                return a;
            }
            function Ne(e, t) {
                let n = '';
                for (; --t >= 0; ) n += e;
                return n;
            }
            function Le(e, t, n, r) {
                const o = n || ' ',
                    i = e + '',
                    a = t - i.length;
                return a <= 0
                    ? i
                    : 'left' === r
                    ? Ne(o, a) + i
                    : 'center' === r
                    ? Ne(o, ~~(a / 2)) + i + Ne(o, Math.ceil(a / 2))
                    : i + Ne(o, a);
            }
            function Se(e) {
                return (e && D(e) - e[0]) || 0;
            }
            function Te(e) {
                return I(e)
                    ? '[' + e.map(Te) + ']'
                    : N(e) || we(e)
                    ? JSON.stringify(e)
                          .replace('\u2028', '\\u2028')
                          .replace('\u2029', '\\u2029')
                    : e;
            }
            function Re(e) {
                return null == e || '' === e
                    ? null
                    : !(!e || 'false' === e || '0' === e || !e);
            }
            const De = e => (Ee(e) || me(e) ? e : Date.parse(e));
            function Ce(e, t) {
                return (t = t || De), null == e || '' === e ? null : t(e);
            }
            function ke(e) {
                return null == e || '' === e ? null : e + '';
            }
            function Fe(e) {
                const t = {},
                    n = e.length;
                for (let r = 0; r < n; ++r) t[e[r]] = !0;
                return t;
            }
            function Pe(e, t, n, r) {
                const o = null != r ? r : '…',
                    i = e + '',
                    a = i.length,
                    s = Math.max(0, t - o.length);
                return a <= t
                    ? i
                    : 'left' === n
                    ? o + i.slice(a - s)
                    : 'center' === n
                    ? i.slice(0, Math.ceil(s / 2)) + o + i.slice(a - ~~(s / 2))
                    : i.slice(0, s) + o;
            }
            function _e(e, t, n) {
                if (e)
                    if (t) {
                        const r = e.length;
                        for (let o = 0; o < r; ++o) {
                            const r = t(e[o]);
                            r && n(r, o, e);
                        }
                    } else e.forEach(n);
            }
        },
    },
]);
//# sourceMappingURL=44.4f8f136.js.map
