'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [3037],
    {
        44800: (n, r, e) => {
            e.d(r, { Z: () => s });
            var o = e(34663),
                t = e.n(o),
                c = e(7638),
                i = e.n(c)()(t());
            i.push([
                n.id,
                '/* Loosely based on the Midnight Textmate theme */\n\n.cm-s-night.CodeMirror { background: #0a001f; color: #f8f8f8; }\n.cm-s-night div.CodeMirror-selected { background: #447; }\n.cm-s-night .CodeMirror-line::selection, .cm-s-night .CodeMirror-line > span::selection, .cm-s-night .CodeMirror-line > span > span::selection { background: rgba(68, 68, 119, .99); }\n.cm-s-night .CodeMirror-line::-moz-selection, .cm-s-night .CodeMirror-line > span::-moz-selection, .cm-s-night .CodeMirror-line > span > span::-moz-selection { background: rgba(68, 68, 119, .99); }\n.cm-s-night .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }\n.cm-s-night .CodeMirror-guttermarker { color: white; }\n.cm-s-night .CodeMirror-guttermarker-subtle { color: #bbb; }\n.cm-s-night .CodeMirror-linenumber { color: #f8f8f8; }\n.cm-s-night .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-night span.cm-comment { color: #8900d1; }\n.cm-s-night span.cm-atom { color: #845dc4; }\n.cm-s-night span.cm-number, .cm-s-night span.cm-attribute { color: #ffd500; }\n.cm-s-night span.cm-keyword { color: #599eff; }\n.cm-s-night span.cm-string { color: #37f14a; }\n.cm-s-night span.cm-meta { color: #7678e2; }\n.cm-s-night span.cm-variable-2, .cm-s-night span.cm-tag { color: #99b2ff; }\n.cm-s-night span.cm-variable-3, .cm-s-night span.cm-def, .cm-s-night span.cm-type { color: white; }\n.cm-s-night span.cm-bracket { color: #8da6ce; }\n.cm-s-night span.cm-builtin, .cm-s-night span.cm-special { color: #ff9e59; }\n.cm-s-night span.cm-link { color: #845dc4; }\n.cm-s-night span.cm-error { color: #9d1e15; }\n\n.cm-s-night .CodeMirror-activeline-background { background: #1C005A; }\n.cm-s-night .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/night.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA,iDAAiD;;AAEjD,yBAAyB,mBAAmB,EAAE,cAAc,EAAE;AAC9D,sCAAsC,gBAAgB,EAAE;AACxD,iJAAiJ,kCAAkC,EAAE;AACrL,gKAAgK,kCAAkC,EAAE;AACpM,kCAAkC,mBAAmB,EAAE,4BAA4B,EAAE;AACrF,uCAAuC,YAAY,EAAE;AACrD,8CAA8C,WAAW,EAAE;AAC3D,qCAAqC,cAAc,EAAE;AACrD,iCAAiC,4BAA4B,EAAE;;AAE/D,8BAA8B,cAAc,EAAE;AAC9C,2BAA2B,cAAc,EAAE;AAC3C,4DAA4D,cAAc,EAAE;AAC5E,8BAA8B,cAAc,EAAE;AAC9C,6BAA6B,cAAc,EAAE;AAC7C,2BAA2B,cAAc,EAAE;AAC3C,0DAA0D,cAAc,EAAE;AAC1E,oFAAoF,YAAY,EAAE;AAClG,8BAA8B,cAAc,EAAE;AAC9C,2DAA2D,cAAc,EAAE;AAC3E,2BAA2B,cAAc,EAAE;AAC3C,4BAA4B,cAAc,EAAE;;AAE5C,gDAAgD,mBAAmB,EAAE;AACrE,0CAA0C,sBAAsB,EAAE,sBAAsB,EAAE',
                    sourcesContent: [
                        '/* Loosely based on the Midnight Textmate theme */\n\n.cm-s-night.CodeMirror { background: #0a001f; color: #f8f8f8; }\n.cm-s-night div.CodeMirror-selected { background: #447; }\n.cm-s-night .CodeMirror-line::selection, .cm-s-night .CodeMirror-line > span::selection, .cm-s-night .CodeMirror-line > span > span::selection { background: rgba(68, 68, 119, .99); }\n.cm-s-night .CodeMirror-line::-moz-selection, .cm-s-night .CodeMirror-line > span::-moz-selection, .cm-s-night .CodeMirror-line > span > span::-moz-selection { background: rgba(68, 68, 119, .99); }\n.cm-s-night .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }\n.cm-s-night .CodeMirror-guttermarker { color: white; }\n.cm-s-night .CodeMirror-guttermarker-subtle { color: #bbb; }\n.cm-s-night .CodeMirror-linenumber { color: #f8f8f8; }\n.cm-s-night .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-night span.cm-comment { color: #8900d1; }\n.cm-s-night span.cm-atom { color: #845dc4; }\n.cm-s-night span.cm-number, .cm-s-night span.cm-attribute { color: #ffd500; }\n.cm-s-night span.cm-keyword { color: #599eff; }\n.cm-s-night span.cm-string { color: #37f14a; }\n.cm-s-night span.cm-meta { color: #7678e2; }\n.cm-s-night span.cm-variable-2, .cm-s-night span.cm-tag { color: #99b2ff; }\n.cm-s-night span.cm-variable-3, .cm-s-night span.cm-def, .cm-s-night span.cm-type { color: white; }\n.cm-s-night span.cm-bracket { color: #8da6ce; }\n.cm-s-night span.cm-builtin, .cm-s-night span.cm-special { color: #ff9e59; }\n.cm-s-night span.cm-link { color: #845dc4; }\n.cm-s-night span.cm-error { color: #9d1e15; }\n\n.cm-s-night .CodeMirror-activeline-background { background: #1C005A; }\n.cm-s-night .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const s = i;
        },
        7638: n => {
            n.exports = function(n) {
                var r = [];
                return (
                    (r.toString = function() {
                        return this.map(function(r) {
                            var e = '',
                                o = void 0 !== r[5];
                            return (
                                r[4] &&
                                    (e += '@supports ('.concat(r[4], ') {')),
                                r[2] && (e += '@media '.concat(r[2], ' {')),
                                o &&
                                    (e += '@layer'.concat(
                                        r[5].length > 0 ? ' '.concat(r[5]) : '',
                                        ' {'
                                    )),
                                (e += n(r)),
                                o && (e += '}'),
                                r[2] && (e += '}'),
                                r[4] && (e += '}'),
                                e
                            );
                        }).join('');
                    }),
                    (r.i = function(n, e, o, t, c) {
                        'string' == typeof n && (n = [[null, n, void 0]]);
                        var i = {};
                        if (o)
                            for (var s = 0; s < this.length; s++) {
                                var a = this[s][0];
                                null != a && (i[a] = !0);
                            }
                        for (var A = 0; A < n.length; A++) {
                            var m = [].concat(n[A]);
                            (o && i[m[0]]) ||
                                (void 0 !== c &&
                                    (void 0 === m[5] ||
                                        (m[1] = '@layer'
                                            .concat(
                                                m[5].length > 0
                                                    ? ' '.concat(m[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(m[1], '}')),
                                    (m[5] = c)),
                                e &&
                                    (m[2]
                                        ? ((m[1] = '@media '
                                              .concat(m[2], ' {')
                                              .concat(m[1], '}')),
                                          (m[2] = e))
                                        : (m[2] = e)),
                                t &&
                                    (m[4]
                                        ? ((m[1] = '@supports ('
                                              .concat(m[4], ') {')
                                              .concat(m[1], '}')),
                                          (m[4] = t))
                                        : (m[4] = ''.concat(t))),
                                r.push(m));
                        }
                    }),
                    r
                );
            };
        },
        34663: n => {
            n.exports = function(n) {
                var r = n[1],
                    e = n[3];
                if (!e) return r;
                if ('function' == typeof btoa) {
                    var o = btoa(
                            unescape(encodeURIComponent(JSON.stringify(e)))
                        ),
                        t = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            o
                        ),
                        c = '/*# '.concat(t, ' */'),
                        i = e.sources.map(function(n) {
                            return '/*# sourceURL='
                                .concat(e.sourceRoot || '')
                                .concat(n, ' */');
                        });
                    return [r]
                        .concat(i)
                        .concat([c])
                        .join('\n');
                }
                return [r].join('\n');
            };
        },
        53037: (n, r, e) => {
            e.r(r), e.d(r, { default: () => f });
            var o = e(1892),
                t = e.n(o),
                c = e(95760),
                i = e.n(c),
                s = e(38311),
                a = e.n(s),
                A = e(58192),
                m = e.n(A),
                l = e(38060),
                d = e.n(l),
                p = e(54865),
                u = e.n(p),
                g = e(44800),
                h = {};
            (h.styleTagTransform = u()),
                (h.setAttributes = m()),
                (h.insert = a().bind(null, 'head')),
                (h.domAPI = i()),
                (h.insertStyleElement = d()),
                t()(g.Z, h);
            const f = g.Z && g.Z.locals ? g.Z.locals : void 0;
        },
        1892: n => {
            var r = [];
            function e(n) {
                for (var e = -1, o = 0; o < r.length; o++)
                    if (r[o].identifier === n) {
                        e = o;
                        break;
                    }
                return e;
            }
            function o(n, o) {
                for (var c = {}, i = [], s = 0; s < n.length; s++) {
                    var a = n[s],
                        A = o.base ? a[0] + o.base : a[0],
                        m = c[A] || 0,
                        l = ''.concat(A, ' ').concat(m);
                    c[A] = m + 1;
                    var d = e(l),
                        p = {
                            css: a[1],
                            media: a[2],
                            sourceMap: a[3],
                            supports: a[4],
                            layer: a[5],
                        };
                    if (-1 !== d) r[d].references++, r[d].updater(p);
                    else {
                        var u = t(p, o);
                        (o.byIndex = s),
                            r.splice(s, 0, {
                                identifier: l,
                                updater: u,
                                references: 1,
                            });
                    }
                    i.push(l);
                }
                return i;
            }
            function t(n, r) {
                var e = r.domAPI(r);
                return (
                    e.update(n),
                    function(r) {
                        if (r) {
                            if (
                                r.css === n.css &&
                                r.media === n.media &&
                                r.sourceMap === n.sourceMap &&
                                r.supports === n.supports &&
                                r.layer === n.layer
                            )
                                return;
                            e.update((n = r));
                        } else e.remove();
                    }
                );
            }
            n.exports = function(n, t) {
                var c = o((n = n || []), (t = t || {}));
                return function(n) {
                    n = n || [];
                    for (var i = 0; i < c.length; i++) {
                        var s = e(c[i]);
                        r[s].references--;
                    }
                    for (var a = o(n, t), A = 0; A < c.length; A++) {
                        var m = e(c[A]);
                        0 === r[m].references &&
                            (r[m].updater(), r.splice(m, 1));
                    }
                    c = a;
                };
            };
        },
        38311: n => {
            var r = {};
            n.exports = function(n, e) {
                var o = (function(n) {
                    if (void 0 === r[n]) {
                        var e = document.querySelector(n);
                        if (
                            window.HTMLIFrameElement &&
                            e instanceof window.HTMLIFrameElement
                        )
                            try {
                                e = e.contentDocument.head;
                            } catch (n) {
                                e = null;
                            }
                        r[n] = e;
                    }
                    return r[n];
                })(n);
                if (!o)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                o.appendChild(e);
            };
        },
        38060: n => {
            n.exports = function(n) {
                var r = document.createElement('style');
                return (
                    n.setAttributes(r, n.attributes), n.insert(r, n.options), r
                );
            };
        },
        58192: (n, r, e) => {
            n.exports = function(n) {
                var r = e.nc;
                r && n.setAttribute('nonce', r);
            };
        },
        95760: n => {
            n.exports = function(n) {
                var r = n.insertStyleElement(n);
                return {
                    update: function(e) {
                        !(function(n, r, e) {
                            var o = '';
                            e.supports &&
                                (o += '@supports ('.concat(e.supports, ') {')),
                                e.media &&
                                    (o += '@media '.concat(e.media, ' {'));
                            var t = void 0 !== e.layer;
                            t &&
                                (o += '@layer'.concat(
                                    e.layer.length > 0
                                        ? ' '.concat(e.layer)
                                        : '',
                                    ' {'
                                )),
                                (o += e.css),
                                t && (o += '}'),
                                e.media && (o += '}'),
                                e.supports && (o += '}');
                            var c = e.sourceMap;
                            c &&
                                'undefined' != typeof btoa &&
                                (o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(c)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                r.styleTagTransform(o, n, r.options);
                        })(r, n, e);
                    },
                    remove: function() {
                        !(function(n) {
                            if (null === n.parentNode) return !1;
                            n.parentNode.removeChild(n);
                        })(r);
                    },
                };
            };
        },
        54865: n => {
            n.exports = function(n, r) {
                if (r.styleSheet) r.styleSheet.cssText = n;
                else {
                    for (; r.firstChild; ) r.removeChild(r.firstChild);
                    r.appendChild(document.createTextNode(n));
                }
            };
        },
    },
]);
//# sourceMappingURL=3037.70ee38d.js.map
