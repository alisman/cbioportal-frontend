'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [5227],
    {
        11213: (o, c, r) => {
            r.d(c, { Z: () => s });
            var e = r(34663),
                n = r.n(e),
                t = r(7638),
                a = r.n(t)()(n());
            a.push([
                o.id,
                '.cm-s-cobalt.CodeMirror { background: #002240; color: white; }\n.cm-s-cobalt div.CodeMirror-selected { background: #b36539; }\n.cm-s-cobalt .CodeMirror-line::selection, .cm-s-cobalt .CodeMirror-line > span::selection, .cm-s-cobalt .CodeMirror-line > span > span::selection { background: rgba(179, 101, 57, .99); }\n.cm-s-cobalt .CodeMirror-line::-moz-selection, .cm-s-cobalt .CodeMirror-line > span::-moz-selection, .cm-s-cobalt .CodeMirror-line > span > span::-moz-selection { background: rgba(179, 101, 57, .99); }\n.cm-s-cobalt .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }\n.cm-s-cobalt .CodeMirror-guttermarker { color: #ffee80; }\n.cm-s-cobalt .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-cobalt .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-cobalt .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-cobalt span.cm-comment { color: #08f; }\n.cm-s-cobalt span.cm-atom { color: #845dc4; }\n.cm-s-cobalt span.cm-number, .cm-s-cobalt span.cm-attribute { color: #ff80e1; }\n.cm-s-cobalt span.cm-keyword { color: #ffee80; }\n.cm-s-cobalt span.cm-string { color: #3ad900; }\n.cm-s-cobalt span.cm-meta { color: #ff9d00; }\n.cm-s-cobalt span.cm-variable-2, .cm-s-cobalt span.cm-tag { color: #9effff; }\n.cm-s-cobalt span.cm-variable-3, .cm-s-cobalt span.cm-def, .cm-s-cobalt .cm-type { color: white; }\n.cm-s-cobalt span.cm-bracket { color: #d8d8d8; }\n.cm-s-cobalt span.cm-builtin, .cm-s-cobalt span.cm-special { color: #ff9e59; }\n.cm-s-cobalt span.cm-link { color: #845dc4; }\n.cm-s-cobalt span.cm-error { color: #9d1e15; }\n\n.cm-s-cobalt .CodeMirror-activeline-background { background: #002D57; }\n.cm-s-cobalt .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/cobalt.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA,0BAA0B,mBAAmB,EAAE,YAAY,EAAE;AAC7D,uCAAuC,mBAAmB,EAAE;AAC5D,oJAAoJ,mCAAmC,EAAE;AACzL,mKAAmK,mCAAmC,EAAE;AACxM,mCAAmC,mBAAmB,EAAE,4BAA4B,EAAE;AACtF,wCAAwC,cAAc,EAAE;AACxD,+CAA+C,cAAc,EAAE;AAC/D,sCAAsC,cAAc,EAAE;AACtD,kCAAkC,4BAA4B,EAAE;;AAEhE,+BAA+B,WAAW,EAAE;AAC5C,4BAA4B,cAAc,EAAE;AAC5C,8DAA8D,cAAc,EAAE;AAC9E,+BAA+B,cAAc,EAAE;AAC/C,8BAA8B,cAAc,EAAE;AAC9C,4BAA4B,cAAc,EAAE;AAC5C,4DAA4D,cAAc,EAAE;AAC5E,mFAAmF,YAAY,EAAE;AACjG,+BAA+B,cAAc,EAAE;AAC/C,6DAA6D,cAAc,EAAE;AAC7E,4BAA4B,cAAc,EAAE;AAC5C,6BAA6B,cAAc,EAAE;;AAE7C,iDAAiD,mBAAmB,EAAE;AACtE,2CAA2C,sBAAsB,CAAC,sBAAsB,EAAE',
                    sourcesContent: [
                        '.cm-s-cobalt.CodeMirror { background: #002240; color: white; }\n.cm-s-cobalt div.CodeMirror-selected { background: #b36539; }\n.cm-s-cobalt .CodeMirror-line::selection, .cm-s-cobalt .CodeMirror-line > span::selection, .cm-s-cobalt .CodeMirror-line > span > span::selection { background: rgba(179, 101, 57, .99); }\n.cm-s-cobalt .CodeMirror-line::-moz-selection, .cm-s-cobalt .CodeMirror-line > span::-moz-selection, .cm-s-cobalt .CodeMirror-line > span > span::-moz-selection { background: rgba(179, 101, 57, .99); }\n.cm-s-cobalt .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }\n.cm-s-cobalt .CodeMirror-guttermarker { color: #ffee80; }\n.cm-s-cobalt .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-cobalt .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-cobalt .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-cobalt span.cm-comment { color: #08f; }\n.cm-s-cobalt span.cm-atom { color: #845dc4; }\n.cm-s-cobalt span.cm-number, .cm-s-cobalt span.cm-attribute { color: #ff80e1; }\n.cm-s-cobalt span.cm-keyword { color: #ffee80; }\n.cm-s-cobalt span.cm-string { color: #3ad900; }\n.cm-s-cobalt span.cm-meta { color: #ff9d00; }\n.cm-s-cobalt span.cm-variable-2, .cm-s-cobalt span.cm-tag { color: #9effff; }\n.cm-s-cobalt span.cm-variable-3, .cm-s-cobalt span.cm-def, .cm-s-cobalt .cm-type { color: white; }\n.cm-s-cobalt span.cm-bracket { color: #d8d8d8; }\n.cm-s-cobalt span.cm-builtin, .cm-s-cobalt span.cm-special { color: #ff9e59; }\n.cm-s-cobalt span.cm-link { color: #845dc4; }\n.cm-s-cobalt span.cm-error { color: #9d1e15; }\n\n.cm-s-cobalt .CodeMirror-activeline-background { background: #002D57; }\n.cm-s-cobalt .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const s = a;
        },
        7638: o => {
            o.exports = function(o) {
                var c = [];
                return (
                    (c.toString = function() {
                        return this.map(function(c) {
                            var r = '',
                                e = void 0 !== c[5];
                            return (
                                c[4] &&
                                    (r += '@supports ('.concat(c[4], ') {')),
                                c[2] && (r += '@media '.concat(c[2], ' {')),
                                e &&
                                    (r += '@layer'.concat(
                                        c[5].length > 0 ? ' '.concat(c[5]) : '',
                                        ' {'
                                    )),
                                (r += o(c)),
                                e && (r += '}'),
                                c[2] && (r += '}'),
                                c[4] && (r += '}'),
                                r
                            );
                        }).join('');
                    }),
                    (c.i = function(o, r, e, n, t) {
                        'string' == typeof o && (o = [[null, o, void 0]]);
                        var a = {};
                        if (e)
                            for (var s = 0; s < this.length; s++) {
                                var l = this[s][0];
                                null != l && (a[l] = !0);
                            }
                        for (var i = 0; i < o.length; i++) {
                            var A = [].concat(o[i]);
                            (e && a[A[0]]) ||
                                (void 0 !== t &&
                                    (void 0 === A[5] ||
                                        (A[1] = '@layer'
                                            .concat(
                                                A[5].length > 0
                                                    ? ' '.concat(A[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(A[1], '}')),
                                    (A[5] = t)),
                                r &&
                                    (A[2]
                                        ? ((A[1] = '@media '
                                              .concat(A[2], ' {')
                                              .concat(A[1], '}')),
                                          (A[2] = r))
                                        : (A[2] = r)),
                                n &&
                                    (A[4]
                                        ? ((A[1] = '@supports ('
                                              .concat(A[4], ') {')
                                              .concat(A[1], '}')),
                                          (A[4] = n))
                                        : (A[4] = ''.concat(n))),
                                c.push(A));
                        }
                    }),
                    c
                );
            };
        },
        34663: o => {
            o.exports = function(o) {
                var c = o[1],
                    r = o[3];
                if (!r) return c;
                if ('function' == typeof btoa) {
                    var e = btoa(
                            unescape(encodeURIComponent(JSON.stringify(r)))
                        ),
                        n = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            e
                        ),
                        t = '/*# '.concat(n, ' */'),
                        a = r.sources.map(function(o) {
                            return '/*# sourceURL='
                                .concat(r.sourceRoot || '')
                                .concat(o, ' */');
                        });
                    return [c]
                        .concat(a)
                        .concat([t])
                        .join('\n');
                }
                return [c].join('\n');
            };
        },
        15227: (o, c, r) => {
            r.r(c), r.d(c, { default: () => C });
            var e = r(1892),
                n = r.n(e),
                t = r(95760),
                a = r.n(t),
                s = r(38311),
                l = r.n(s),
                i = r(58192),
                A = r.n(i),
                m = r(38060),
                d = r.n(m),
                u = r(54865),
                p = r.n(u),
                b = r(11213),
                f = {};
            (f.styleTagTransform = p()),
                (f.setAttributes = A()),
                (f.insert = l().bind(null, 'head')),
                (f.domAPI = a()),
                (f.insertStyleElement = d()),
                n()(b.Z, f);
            const C = b.Z && b.Z.locals ? b.Z.locals : void 0;
        },
        1892: o => {
            var c = [];
            function r(o) {
                for (var r = -1, e = 0; e < c.length; e++)
                    if (c[e].identifier === o) {
                        r = e;
                        break;
                    }
                return r;
            }
            function e(o, e) {
                for (var t = {}, a = [], s = 0; s < o.length; s++) {
                    var l = o[s],
                        i = e.base ? l[0] + e.base : l[0],
                        A = t[i] || 0,
                        m = ''.concat(i, ' ').concat(A);
                    t[i] = A + 1;
                    var d = r(m),
                        u = {
                            css: l[1],
                            media: l[2],
                            sourceMap: l[3],
                            supports: l[4],
                            layer: l[5],
                        };
                    if (-1 !== d) c[d].references++, c[d].updater(u);
                    else {
                        var p = n(u, e);
                        (e.byIndex = s),
                            c.splice(s, 0, {
                                identifier: m,
                                updater: p,
                                references: 1,
                            });
                    }
                    a.push(m);
                }
                return a;
            }
            function n(o, c) {
                var r = c.domAPI(c);
                return (
                    r.update(o),
                    function(c) {
                        if (c) {
                            if (
                                c.css === o.css &&
                                c.media === o.media &&
                                c.sourceMap === o.sourceMap &&
                                c.supports === o.supports &&
                                c.layer === o.layer
                            )
                                return;
                            r.update((o = c));
                        } else r.remove();
                    }
                );
            }
            o.exports = function(o, n) {
                var t = e((o = o || []), (n = n || {}));
                return function(o) {
                    o = o || [];
                    for (var a = 0; a < t.length; a++) {
                        var s = r(t[a]);
                        c[s].references--;
                    }
                    for (var l = e(o, n), i = 0; i < t.length; i++) {
                        var A = r(t[i]);
                        0 === c[A].references &&
                            (c[A].updater(), c.splice(A, 1));
                    }
                    t = l;
                };
            };
        },
        38311: o => {
            var c = {};
            o.exports = function(o, r) {
                var e = (function(o) {
                    if (void 0 === c[o]) {
                        var r = document.querySelector(o);
                        if (
                            window.HTMLIFrameElement &&
                            r instanceof window.HTMLIFrameElement
                        )
                            try {
                                r = r.contentDocument.head;
                            } catch (o) {
                                r = null;
                            }
                        c[o] = r;
                    }
                    return c[o];
                })(o);
                if (!e)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                e.appendChild(r);
            };
        },
        38060: o => {
            o.exports = function(o) {
                var c = document.createElement('style');
                return (
                    o.setAttributes(c, o.attributes), o.insert(c, o.options), c
                );
            };
        },
        58192: (o, c, r) => {
            o.exports = function(o) {
                var c = r.nc;
                c && o.setAttribute('nonce', c);
            };
        },
        95760: o => {
            o.exports = function(o) {
                var c = o.insertStyleElement(o);
                return {
                    update: function(r) {
                        !(function(o, c, r) {
                            var e = '';
                            r.supports &&
                                (e += '@supports ('.concat(r.supports, ') {')),
                                r.media &&
                                    (e += '@media '.concat(r.media, ' {'));
                            var n = void 0 !== r.layer;
                            n &&
                                (e += '@layer'.concat(
                                    r.layer.length > 0
                                        ? ' '.concat(r.layer)
                                        : '',
                                    ' {'
                                )),
                                (e += r.css),
                                n && (e += '}'),
                                r.media && (e += '}'),
                                r.supports && (e += '}');
                            var t = r.sourceMap;
                            t &&
                                'undefined' != typeof btoa &&
                                (e += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(t)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                c.styleTagTransform(e, o, c.options);
                        })(c, o, r);
                    },
                    remove: function() {
                        !(function(o) {
                            if (null === o.parentNode) return !1;
                            o.parentNode.removeChild(o);
                        })(c);
                    },
                };
            };
        },
        54865: o => {
            o.exports = function(o, c) {
                if (c.styleSheet) c.styleSheet.cssText = o;
                else {
                    for (; c.firstChild; ) c.removeChild(c.firstChild);
                    c.appendChild(document.createTextNode(o));
                }
            };
        },
    },
]);
//# sourceMappingURL=5227.8c8acd8.js.map
