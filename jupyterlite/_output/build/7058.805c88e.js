/*! For license information please see 7058.805c88e.js.LICENSE.txt */
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [7058],
    {
        57093: t => {
            t.exports = function(t) {
                var e = {},
                    r = arguments[1];
                if ('string' == typeof r) {
                    r = {};
                    for (var n = 1; n < arguments.length; n++)
                        r[arguments[n]] = !0;
                }
                for (var i in t) r[i] || (e[i] = t[i]);
                return e;
            };
        },
        7756: (t, e, r) => {
            'use strict';
            var n = r(59647),
                i = {};
            function o(t, e, r, n, i, o, s, a) {
                if (!t) {
                    var c;
                    if (void 0 === e)
                        c = new Error(
                            'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
                        );
                    else {
                        var p = [r, n, i, o, s, a],
                            u = 0;
                        (c = new Error(
                            e.replace(/%s/g, function() {
                                return p[u++];
                            })
                        )).name = 'Invariant Violation';
                    }
                    throw ((c.framesToPop = 1), c);
                }
            }
            var s = 'mixins';
            t.exports = function(t, e, r) {
                var a = [],
                    c = {
                        mixins: 'DEFINE_MANY',
                        statics: 'DEFINE_MANY',
                        propTypes: 'DEFINE_MANY',
                        contextTypes: 'DEFINE_MANY',
                        childContextTypes: 'DEFINE_MANY',
                        getDefaultProps: 'DEFINE_MANY_MERGED',
                        getInitialState: 'DEFINE_MANY_MERGED',
                        getChildContext: 'DEFINE_MANY_MERGED',
                        render: 'DEFINE_ONCE',
                        componentWillMount: 'DEFINE_MANY',
                        componentDidMount: 'DEFINE_MANY',
                        componentWillReceiveProps: 'DEFINE_MANY',
                        shouldComponentUpdate: 'DEFINE_ONCE',
                        componentWillUpdate: 'DEFINE_MANY',
                        componentDidUpdate: 'DEFINE_MANY',
                        componentWillUnmount: 'DEFINE_MANY',
                        UNSAFE_componentWillMount: 'DEFINE_MANY',
                        UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',
                        UNSAFE_componentWillUpdate: 'DEFINE_MANY',
                        updateComponent: 'OVERRIDE_BASE',
                    },
                    p = { getDerivedStateFromProps: 'DEFINE_MANY_MERGED' },
                    u = {
                        displayName: function(t, e) {
                            t.displayName = e;
                        },
                        mixins: function(t, e) {
                            if (e)
                                for (var r = 0; r < e.length; r++) h(t, e[r]);
                        },
                        childContextTypes: function(t, e) {
                            t.childContextTypes = n({}, t.childContextTypes, e);
                        },
                        contextTypes: function(t, e) {
                            t.contextTypes = n({}, t.contextTypes, e);
                        },
                        getDefaultProps: function(t, e) {
                            t.getDefaultProps
                                ? (t.getDefaultProps = m(t.getDefaultProps, e))
                                : (t.getDefaultProps = e);
                        },
                        propTypes: function(t, e) {
                            t.propTypes = n({}, t.propTypes, e);
                        },
                        statics: function(t, e) {
                            !(function(t, e) {
                                if (e)
                                    for (var r in e) {
                                        var n = e[r];
                                        if (e.hasOwnProperty(r)) {
                                            if (
                                                (o(
                                                    !(r in u),
                                                    'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',
                                                    r
                                                ),
                                                r in t)
                                            )
                                                return (
                                                    o(
                                                        'DEFINE_MANY_MERGED' ===
                                                            (p.hasOwnProperty(r)
                                                                ? p[r]
                                                                : null),
                                                        'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',
                                                        r
                                                    ),
                                                    void (t[r] = m(t[r], n))
                                                );
                                            t[r] = n;
                                        }
                                    }
                            })(t, e);
                        },
                        autobind: function() {},
                    };
                function l(t, e) {
                    var r = c.hasOwnProperty(e) ? c[e] : null;
                    v.hasOwnProperty(e) &&
                        o(
                            'OVERRIDE_BASE' === r,
                            'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.',
                            e
                        ),
                        t &&
                            o(
                                'DEFINE_MANY' === r ||
                                    'DEFINE_MANY_MERGED' === r,
                                'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',
                                e
                            );
                }
                function h(t, r) {
                    if (r) {
                        o(
                            'function' != typeof r,
                            "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."
                        ),
                            o(
                                !e(r),
                                "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object."
                            );
                        var n = t.prototype,
                            i = n.__reactAutoBindPairs;
                        for (var a in (r.hasOwnProperty(s) &&
                            u.mixins(t, r.mixins),
                        r))
                            if (r.hasOwnProperty(a) && a !== s) {
                                var p = r[a],
                                    h = n.hasOwnProperty(a);
                                if ((l(h, a), u.hasOwnProperty(a))) u[a](t, p);
                                else {
                                    var f = c.hasOwnProperty(a);
                                    if (
                                        'function' != typeof p ||
                                        f ||
                                        h ||
                                        !1 === r.autobind
                                    )
                                        if (h) {
                                            var E = c[a];
                                            o(
                                                f &&
                                                    ('DEFINE_MANY_MERGED' ===
                                                        E ||
                                                        'DEFINE_MANY' === E),
                                                'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.',
                                                E,
                                                a
                                            ),
                                                'DEFINE_MANY_MERGED' === E
                                                    ? (n[a] = m(n[a], p))
                                                    : 'DEFINE_MANY' === E &&
                                                      (n[a] = d(n[a], p));
                                        } else n[a] = p;
                                    else i.push(a, p), (n[a] = p);
                                }
                            }
                    }
                }
                function f(t, e) {
                    for (var r in (o(
                        t && e && 'object' == typeof t && 'object' == typeof e,
                        'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
                    ),
                    e))
                        e.hasOwnProperty(r) &&
                            (o(
                                void 0 === t[r],
                                'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.',
                                r
                            ),
                            (t[r] = e[r]));
                    return t;
                }
                function m(t, e) {
                    return function() {
                        var r = t.apply(this, arguments),
                            n = e.apply(this, arguments);
                        if (null == r) return n;
                        if (null == n) return r;
                        var i = {};
                        return f(i, r), f(i, n), i;
                    };
                }
                function d(t, e) {
                    return function() {
                        t.apply(this, arguments), e.apply(this, arguments);
                    };
                }
                function E(t, e) {
                    return e.bind(t);
                }
                var y = {
                        componentDidMount: function() {
                            this.__isMounted = !0;
                        },
                    },
                    g = {
                        componentWillUnmount: function() {
                            this.__isMounted = !1;
                        },
                    },
                    v = {
                        replaceState: function(t, e) {
                            this.updater.enqueueReplaceState(this, t, e);
                        },
                        isMounted: function() {
                            return !!this.__isMounted;
                        },
                    },
                    _ = function() {};
                return (
                    n(_.prototype, t.prototype, v),
                    function(t) {
                        var e = function(t, n, s) {
                            this.__reactAutoBindPairs.length &&
                                (function(t) {
                                    for (
                                        var e = t.__reactAutoBindPairs, r = 0;
                                        r < e.length;
                                        r += 2
                                    ) {
                                        var n = e[r],
                                            i = e[r + 1];
                                        t[n] = E(t, i);
                                    }
                                })(this),
                                (this.props = t),
                                (this.context = n),
                                (this.refs = i),
                                (this.updater = s || r),
                                (this.state = null);
                            var a = this.getInitialState
                                ? this.getInitialState()
                                : null;
                            o(
                                'object' == typeof a && !Array.isArray(a),
                                '%s.getInitialState(): must return an object or null',
                                e.displayName || 'ReactCompositeComponent'
                            ),
                                (this.state = a);
                        };
                        for (var n in ((e.prototype = new _()),
                        (e.prototype.constructor = e),
                        (e.prototype.__reactAutoBindPairs = []),
                        a.forEach(h.bind(null, e)),
                        h(e, y),
                        h(e, t),
                        h(e, g),
                        e.getDefaultProps &&
                            (e.defaultProps = e.getDefaultProps()),
                        o(
                            e.prototype.render,
                            'createClass(...): Class specification must implement a `render` method.'
                        ),
                        c))
                            e.prototype[n] || (e.prototype[n] = null);
                        return e;
                    }
                );
            };
        },
        6628: (t, e, r) => {
            'use strict';
            var n = r(62471),
                i = r(7756);
            if (void 0 === n)
                throw Error(
                    'create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.'
                );
            var o = new n.Component().updater;
            t.exports = i(n.Component, n.isValidElement, o);
        },
        36641: t => {
            'use strict';
            var e = /[|\\{}()[\]^$+*?.]/g;
            t.exports = function(t) {
                if ('string' != typeof t)
                    throw new TypeError('Expected a string');
                return t.replace(e, '\\$&');
            };
        },
        59647: t => {
            'use strict';
            var e = Object.getOwnPropertySymbols,
                r = Object.prototype.hasOwnProperty,
                n = Object.prototype.propertyIsEnumerable;
            function i(t) {
                if (null == t)
                    throw new TypeError(
                        'Object.assign cannot be called with null or undefined'
                    );
                return Object(t);
            }
            t.exports = (function() {
                try {
                    if (!Object.assign) return !1;
                    var t = new String('abc');
                    if (
                        ((t[5] = 'de'),
                        '5' === Object.getOwnPropertyNames(t)[0])
                    )
                        return !1;
                    for (var e = {}, r = 0; r < 10; r++)
                        e['_' + String.fromCharCode(r)] = r;
                    if (
                        '0123456789' !==
                        Object.getOwnPropertyNames(e)
                            .map(function(t) {
                                return e[t];
                            })
                            .join('')
                    )
                        return !1;
                    var n = {};
                    return (
                        'abcdefghijklmnopqrst'.split('').forEach(function(t) {
                            n[t] = t;
                        }),
                        'abcdefghijklmnopqrst' ===
                            Object.keys(Object.assign({}, n)).join('')
                    );
                } catch (t) {
                    return !1;
                }
            })()
                ? Object.assign
                : function(t, o) {
                      for (
                          var s, a, c = i(t), p = 1;
                          p < arguments.length;
                          p++
                      ) {
                          for (var u in (s = Object(arguments[p])))
                              r.call(s, u) && (c[u] = s[u]);
                          if (e) {
                              a = e(s);
                              for (var l = 0; l < a.length; l++)
                                  n.call(s, a[l]) && (c[a[l]] = s[a[l]]);
                          }
                      }
                      return c;
                  };
        },
        10749: (t, e, r) => {
            'use strict';
            var n = r(77080);
            function i() {}
            function o() {}
            (o.resetWarningCache = i),
                (t.exports = function() {
                    function t(t, e, r, i, o, s) {
                        if (s !== n) {
                            var a = new Error(
                                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                            );
                            throw ((a.name = 'Invariant Violation'), a);
                        }
                    }
                    function e() {
                        return t;
                    }
                    t.isRequired = t;
                    var r = {
                        array: t,
                        bigint: t,
                        bool: t,
                        func: t,
                        number: t,
                        object: t,
                        string: t,
                        symbol: t,
                        any: t,
                        arrayOf: e,
                        element: t,
                        elementType: t,
                        instanceOf: e,
                        node: t,
                        objectOf: e,
                        oneOf: e,
                        oneOfType: e,
                        shape: e,
                        exact: e,
                        checkPropTypes: o,
                        resetWarningCache: i,
                    };
                    return (r.PropTypes = r), r;
                });
        },
        25816: (t, e, r) => {
            t.exports = r(10749)();
        },
        77080: t => {
            'use strict';
            t.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
        },
        87058: (t, e, r) => {
            var n = r(62471),
                i = r(3289),
                o = r(36641),
                s = r(57093),
                a = r(6628),
                c = r(25816);
            function p(t, e) {
                if (!String.prototype.normalize) return t;
                if (e) {
                    var r = e.split('');
                    return t
                        .normalize('NFD')
                        .replace(/.[\u0300-\u036f]+/g, function(t) {
                            return r.indexOf(t.normalize()) > -1
                                ? t.normalize()
                                : t[0];
                        });
                }
                return t.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            }
            var u = a({
                displayName: 'Highlighter',
                count: 0,
                propTypes: {
                    search: c.oneOfType([c.string, c.number, c.bool, i])
                        .isRequired,
                    caseSensitive: c.bool,
                    ignoreDiacritics: c.bool,
                    diacriticsBlacklist: c.string,
                    matchElement: c.oneOfType([c.string, c.func]),
                    matchClass: c.string,
                    matchStyle: c.object,
                },
                render: function() {
                    var t = s(
                        this.props,
                        'search',
                        'caseSensitive',
                        'ignoreDiacritics',
                        'diacriticsBlacklist',
                        'matchElement',
                        'matchClass',
                        'matchStyle'
                    );
                    return n.createElement(
                        'span',
                        t,
                        this.renderElement(this.props.children)
                    );
                },
                renderElement: function(t) {
                    if (this.isScalar() && this.hasSearch()) {
                        var e = this.getSearch();
                        return this.highlightChildren(t, e);
                    }
                    return this.props.children;
                },
                isScalar: function() {
                    return /string|number|boolean/.test(
                        typeof this.props.children
                    );
                },
                hasSearch: function() {
                    return void 0 !== this.props.search && this.props.search;
                },
                getSearch: function() {
                    if (this.props.search instanceof RegExp)
                        return this.props.search;
                    var t = '';
                    this.props.caseSensitive || (t += 'i');
                    var e = this.props.search;
                    return (
                        'string' == typeof this.props.search && (e = o(e)),
                        this.props.ignoreDiacritics &&
                            (e = p(e, this.props.diacriticsBlacklist)),
                        new RegExp(e, t)
                    );
                },
                getMatchBoundaries: function(t, e) {
                    var r = e.exec(t);
                    if (r)
                        return { first: r.index, last: r.index + r[0].length };
                },
                highlightChildren: function(t, e) {
                    for (var r = [], n = t; n; ) {
                        var i = this.props.ignoreDiacritics
                            ? p(n, this.props.diacriticsBlacklist)
                            : n;
                        if (!e.test(i)) return r.push(this.renderPlain(n)), r;
                        var o = this.getMatchBoundaries(i, e);
                        if (0 === o.first && 0 === o.last) return r;
                        var s = n.slice(0, o.first);
                        s && r.push(this.renderPlain(s));
                        var a = n.slice(o.first, o.last);
                        a && r.push(this.renderHighlight(a)),
                            (n = n.slice(o.last));
                    }
                    return r;
                },
                renderPlain: function(t) {
                    return (
                        this.count++,
                        n.createElement('span', {
                            key: this.count,
                            children: t,
                        })
                    );
                },
                renderHighlight: function(t) {
                    return (
                        this.count++,
                        n.createElement(this.props.matchElement, {
                            key: this.count,
                            className: this.props.matchClass,
                            style: this.props.matchStyle,
                            children: t,
                        })
                    );
                },
            });
            (u.defaultProps = {
                caseSensitive: !1,
                ignoreDiacritics: !1,
                diacriticsBlacklist: '',
                matchElement: 'mark',
                matchClass: 'highlight',
                matchStyle: {},
            }),
                (t.exports = u);
        },
        3289: t => {
            t.exports = function(t, e, r, n) {
                if (!(t[e] instanceof RegExp)) {
                    var i = typeof t[e];
                    return new Error(
                        'Invalid ' +
                            n +
                            ' `' +
                            e +
                            '` of type `' +
                            i +
                            '` supplied to `' +
                            r +
                            '`, expected `RegExp`.'
                    );
                }
            };
        },
    },
]);
//# sourceMappingURL=7058.805c88e.js.map
