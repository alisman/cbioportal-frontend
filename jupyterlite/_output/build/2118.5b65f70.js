'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [2118],
    {
        54567: (n, e, t) => {
            t.d(e, { Z: () => s });
            var o = t(34663),
                a = t.n(o),
                r = t(7638),
                c = t.n(r)()(a());
            c.push([
                n.id,
                '.cm-s-neat span.cm-comment { color: #a86; }\n.cm-s-neat span.cm-keyword { line-height: 1em; font-weight: bold; color: blue; }\n.cm-s-neat span.cm-string { color: #a22; }\n.cm-s-neat span.cm-builtin { line-height: 1em; font-weight: bold; color: #077; }\n.cm-s-neat span.cm-special { line-height: 1em; font-weight: bold; color: #0aa; }\n.cm-s-neat span.cm-variable { color: black; }\n.cm-s-neat span.cm-number, .cm-s-neat span.cm-atom { color: #3a3; }\n.cm-s-neat span.cm-meta { color: #555; }\n.cm-s-neat span.cm-link { color: #3a3; }\n\n.cm-s-neat .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-neat .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/neat.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA,6BAA6B,WAAW,EAAE;AAC1C,6BAA6B,gBAAgB,EAAE,iBAAiB,EAAE,WAAW,EAAE;AAC/E,4BAA4B,WAAW,EAAE;AACzC,6BAA6B,gBAAgB,EAAE,iBAAiB,EAAE,WAAW,EAAE;AAC/E,6BAA6B,gBAAgB,EAAE,iBAAiB,EAAE,WAAW,EAAE;AAC/E,8BAA8B,YAAY,EAAE;AAC5C,qDAAqD,WAAW,EAAE;AAClE,0BAA0B,WAAW,EAAE;AACvC,0BAA0B,WAAW,EAAE;;AAEvC,+CAA+C,mBAAmB,EAAE;AACpE,yCAAyC,sBAAsB,EAAE,sBAAsB,EAAE',
                    sourcesContent: [
                        '.cm-s-neat span.cm-comment { color: #a86; }\n.cm-s-neat span.cm-keyword { line-height: 1em; font-weight: bold; color: blue; }\n.cm-s-neat span.cm-string { color: #a22; }\n.cm-s-neat span.cm-builtin { line-height: 1em; font-weight: bold; color: #077; }\n.cm-s-neat span.cm-special { line-height: 1em; font-weight: bold; color: #0aa; }\n.cm-s-neat span.cm-variable { color: black; }\n.cm-s-neat span.cm-number, .cm-s-neat span.cm-atom { color: #3a3; }\n.cm-s-neat span.cm-meta { color: #555; }\n.cm-s-neat span.cm-link { color: #3a3; }\n\n.cm-s-neat .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-neat .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const s = c;
        },
        7638: n => {
            n.exports = function(n) {
                var e = [];
                return (
                    (e.toString = function() {
                        return this.map(function(e) {
                            var t = '',
                                o = void 0 !== e[5];
                            return (
                                e[4] &&
                                    (t += '@supports ('.concat(e[4], ') {')),
                                e[2] && (t += '@media '.concat(e[2], ' {')),
                                o &&
                                    (t += '@layer'.concat(
                                        e[5].length > 0 ? ' '.concat(e[5]) : '',
                                        ' {'
                                    )),
                                (t += n(e)),
                                o && (t += '}'),
                                e[2] && (t += '}'),
                                e[4] && (t += '}'),
                                t
                            );
                        }).join('');
                    }),
                    (e.i = function(n, t, o, a, r) {
                        'string' == typeof n && (n = [[null, n, void 0]]);
                        var c = {};
                        if (o)
                            for (var s = 0; s < this.length; s++) {
                                var i = this[s][0];
                                null != i && (c[i] = !0);
                            }
                        for (var A = 0; A < n.length; A++) {
                            var l = [].concat(n[A]);
                            (o && c[l[0]]) ||
                                (void 0 !== r &&
                                    (void 0 === l[5] ||
                                        (l[1] = '@layer'
                                            .concat(
                                                l[5].length > 0
                                                    ? ' '.concat(l[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(l[1], '}')),
                                    (l[5] = r)),
                                t &&
                                    (l[2]
                                        ? ((l[1] = '@media '
                                              .concat(l[2], ' {')
                                              .concat(l[1], '}')),
                                          (l[2] = t))
                                        : (l[2] = t)),
                                a &&
                                    (l[4]
                                        ? ((l[1] = '@supports ('
                                              .concat(l[4], ') {')
                                              .concat(l[1], '}')),
                                          (l[4] = a))
                                        : (l[4] = ''.concat(a))),
                                e.push(l));
                        }
                    }),
                    e
                );
            };
        },
        34663: n => {
            n.exports = function(n) {
                var e = n[1],
                    t = n[3];
                if (!t) return e;
                if ('function' == typeof btoa) {
                    var o = btoa(
                            unescape(encodeURIComponent(JSON.stringify(t)))
                        ),
                        a = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            o
                        ),
                        r = '/*# '.concat(a, ' */'),
                        c = t.sources.map(function(n) {
                            return '/*# sourceURL='
                                .concat(t.sourceRoot || '')
                                .concat(n, ' */');
                        });
                    return [e]
                        .concat(c)
                        .concat([r])
                        .join('\n');
                }
                return [e].join('\n');
            };
        },
        52118: (n, e, t) => {
            t.r(e), t.d(e, { default: () => v });
            var o = t(1892),
                a = t.n(o),
                r = t(95760),
                c = t.n(r),
                s = t(38311),
                i = t.n(s),
                A = t(58192),
                l = t.n(A),
                u = t(38060),
                m = t.n(u),
                p = t(54865),
                d = t.n(p),
                f = t(54567),
                h = {};
            (h.styleTagTransform = d()),
                (h.setAttributes = l()),
                (h.insert = i().bind(null, 'head')),
                (h.domAPI = c()),
                (h.insertStyleElement = m()),
                a()(f.Z, h);
            const v = f.Z && f.Z.locals ? f.Z.locals : void 0;
        },
        1892: n => {
            var e = [];
            function t(n) {
                for (var t = -1, o = 0; o < e.length; o++)
                    if (e[o].identifier === n) {
                        t = o;
                        break;
                    }
                return t;
            }
            function o(n, o) {
                for (var r = {}, c = [], s = 0; s < n.length; s++) {
                    var i = n[s],
                        A = o.base ? i[0] + o.base : i[0],
                        l = r[A] || 0,
                        u = ''.concat(A, ' ').concat(l);
                    r[A] = l + 1;
                    var m = t(u),
                        p = {
                            css: i[1],
                            media: i[2],
                            sourceMap: i[3],
                            supports: i[4],
                            layer: i[5],
                        };
                    if (-1 !== m) e[m].references++, e[m].updater(p);
                    else {
                        var d = a(p, o);
                        (o.byIndex = s),
                            e.splice(s, 0, {
                                identifier: u,
                                updater: d,
                                references: 1,
                            });
                    }
                    c.push(u);
                }
                return c;
            }
            function a(n, e) {
                var t = e.domAPI(e);
                return (
                    t.update(n),
                    function(e) {
                        if (e) {
                            if (
                                e.css === n.css &&
                                e.media === n.media &&
                                e.sourceMap === n.sourceMap &&
                                e.supports === n.supports &&
                                e.layer === n.layer
                            )
                                return;
                            t.update((n = e));
                        } else t.remove();
                    }
                );
            }
            n.exports = function(n, a) {
                var r = o((n = n || []), (a = a || {}));
                return function(n) {
                    n = n || [];
                    for (var c = 0; c < r.length; c++) {
                        var s = t(r[c]);
                        e[s].references--;
                    }
                    for (var i = o(n, a), A = 0; A < r.length; A++) {
                        var l = t(r[A]);
                        0 === e[l].references &&
                            (e[l].updater(), e.splice(l, 1));
                    }
                    r = i;
                };
            };
        },
        38311: n => {
            var e = {};
            n.exports = function(n, t) {
                var o = (function(n) {
                    if (void 0 === e[n]) {
                        var t = document.querySelector(n);
                        if (
                            window.HTMLIFrameElement &&
                            t instanceof window.HTMLIFrameElement
                        )
                            try {
                                t = t.contentDocument.head;
                            } catch (n) {
                                t = null;
                            }
                        e[n] = t;
                    }
                    return e[n];
                })(n);
                if (!o)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                o.appendChild(t);
            };
        },
        38060: n => {
            n.exports = function(n) {
                var e = document.createElement('style');
                return (
                    n.setAttributes(e, n.attributes), n.insert(e, n.options), e
                );
            };
        },
        58192: (n, e, t) => {
            n.exports = function(n) {
                var e = t.nc;
                e && n.setAttribute('nonce', e);
            };
        },
        95760: n => {
            n.exports = function(n) {
                var e = n.insertStyleElement(n);
                return {
                    update: function(t) {
                        !(function(n, e, t) {
                            var o = '';
                            t.supports &&
                                (o += '@supports ('.concat(t.supports, ') {')),
                                t.media &&
                                    (o += '@media '.concat(t.media, ' {'));
                            var a = void 0 !== t.layer;
                            a &&
                                (o += '@layer'.concat(
                                    t.layer.length > 0
                                        ? ' '.concat(t.layer)
                                        : '',
                                    ' {'
                                )),
                                (o += t.css),
                                a && (o += '}'),
                                t.media && (o += '}'),
                                t.supports && (o += '}');
                            var r = t.sourceMap;
                            r &&
                                'undefined' != typeof btoa &&
                                (o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(r)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                e.styleTagTransform(o, n, e.options);
                        })(e, n, t);
                    },
                    remove: function() {
                        !(function(n) {
                            if (null === n.parentNode) return !1;
                            n.parentNode.removeChild(n);
                        })(e);
                    },
                };
            };
        },
        54865: n => {
            n.exports = function(n, e) {
                if (e.styleSheet) e.styleSheet.cssText = n;
                else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n));
                }
            };
        },
    },
]);
//# sourceMappingURL=2118.5b65f70.js.map
