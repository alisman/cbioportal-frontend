'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [160],
    {
        45618: (r, e, t) => {
            t.d(e, { Z: () => i });
            var o = t(34663),
                n = t.n(o),
                c = t(7638),
                a = t.n(c)()(n());
            a.push([
                r.id,
                '.cm-s-the-matrix.CodeMirror { background: #000000; color: #00FF00; }\n.cm-s-the-matrix div.CodeMirror-selected { background: #2D2D2D; }\n.cm-s-the-matrix .CodeMirror-line::selection, .cm-s-the-matrix .CodeMirror-line > span::selection, .cm-s-the-matrix .CodeMirror-line > span > span::selection { background: rgba(45, 45, 45, 0.99); }\n.cm-s-the-matrix .CodeMirror-line::-moz-selection, .cm-s-the-matrix .CodeMirror-line > span::-moz-selection, .cm-s-the-matrix .CodeMirror-line > span > span::-moz-selection { background: rgba(45, 45, 45, 0.99); }\n.cm-s-the-matrix .CodeMirror-gutters { background: #060; border-right: 2px solid #00FF00; }\n.cm-s-the-matrix .CodeMirror-guttermarker { color: #0f0; }\n.cm-s-the-matrix .CodeMirror-guttermarker-subtle { color: white; }\n.cm-s-the-matrix .CodeMirror-linenumber { color: #FFFFFF; }\n.cm-s-the-matrix .CodeMirror-cursor { border-left: 1px solid #00FF00; }\n\n.cm-s-the-matrix span.cm-keyword { color: #008803; font-weight: bold; }\n.cm-s-the-matrix span.cm-atom { color: #3FF; }\n.cm-s-the-matrix span.cm-number { color: #FFB94F; }\n.cm-s-the-matrix span.cm-def { color: #99C; }\n.cm-s-the-matrix span.cm-variable { color: #F6C; }\n.cm-s-the-matrix span.cm-variable-2 { color: #C6F; }\n.cm-s-the-matrix span.cm-variable-3, .cm-s-the-matrix span.cm-type { color: #96F; }\n.cm-s-the-matrix span.cm-property { color: #62FFA0; }\n.cm-s-the-matrix span.cm-operator { color: #999; }\n.cm-s-the-matrix span.cm-comment { color: #CCCCCC; }\n.cm-s-the-matrix span.cm-string { color: #39C; }\n.cm-s-the-matrix span.cm-meta { color: #C9F; }\n.cm-s-the-matrix span.cm-qualifier { color: #FFF700; }\n.cm-s-the-matrix span.cm-builtin { color: #30a; }\n.cm-s-the-matrix span.cm-bracket { color: #cc7; }\n.cm-s-the-matrix span.cm-tag { color: #FFBD40; }\n.cm-s-the-matrix span.cm-attribute { color: #FFF700; }\n.cm-s-the-matrix span.cm-error { color: #FF0000; }\n\n.cm-s-the-matrix .CodeMirror-activeline-background { background: #040; }\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/the-matrix.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA,8BAA8B,mBAAmB,EAAE,cAAc,EAAE;AACnE,2CAA2C,mBAAmB,EAAE;AAChE,gKAAgK,kCAAkC,EAAE;AACpM,+KAA+K,kCAAkC,EAAE;AACnN,uCAAuC,gBAAgB,EAAE,+BAA+B,EAAE;AAC1F,4CAA4C,WAAW,EAAE;AACzD,mDAAmD,YAAY,EAAE;AACjE,0CAA0C,cAAc,EAAE;AAC1D,sCAAsC,8BAA8B,EAAE;;AAEtE,mCAAmC,cAAc,EAAE,iBAAiB,EAAE;AACtE,gCAAgC,WAAW,EAAE;AAC7C,kCAAkC,cAAc,EAAE;AAClD,+BAA+B,WAAW,EAAE;AAC5C,oCAAoC,WAAW,EAAE;AACjD,sCAAsC,WAAW,EAAE;AACnD,qEAAqE,WAAW,EAAE;AAClF,oCAAoC,cAAc,EAAE;AACpD,oCAAoC,WAAW,EAAE;AACjD,mCAAmC,cAAc,EAAE;AACnD,kCAAkC,WAAW,EAAE;AAC/C,gCAAgC,WAAW,EAAE;AAC7C,qCAAqC,cAAc,EAAE;AACrD,mCAAmC,WAAW,EAAE;AAChD,mCAAmC,WAAW,EAAE;AAChD,+BAA+B,cAAc,EAAE;AAC/C,qCAAqC,cAAc,EAAE;AACrD,iCAAiC,cAAc,EAAE;;AAEjD,qDAAqD,gBAAgB,EAAE',
                    sourcesContent: [
                        '.cm-s-the-matrix.CodeMirror { background: #000000; color: #00FF00; }\n.cm-s-the-matrix div.CodeMirror-selected { background: #2D2D2D; }\n.cm-s-the-matrix .CodeMirror-line::selection, .cm-s-the-matrix .CodeMirror-line > span::selection, .cm-s-the-matrix .CodeMirror-line > span > span::selection { background: rgba(45, 45, 45, 0.99); }\n.cm-s-the-matrix .CodeMirror-line::-moz-selection, .cm-s-the-matrix .CodeMirror-line > span::-moz-selection, .cm-s-the-matrix .CodeMirror-line > span > span::-moz-selection { background: rgba(45, 45, 45, 0.99); }\n.cm-s-the-matrix .CodeMirror-gutters { background: #060; border-right: 2px solid #00FF00; }\n.cm-s-the-matrix .CodeMirror-guttermarker { color: #0f0; }\n.cm-s-the-matrix .CodeMirror-guttermarker-subtle { color: white; }\n.cm-s-the-matrix .CodeMirror-linenumber { color: #FFFFFF; }\n.cm-s-the-matrix .CodeMirror-cursor { border-left: 1px solid #00FF00; }\n\n.cm-s-the-matrix span.cm-keyword { color: #008803; font-weight: bold; }\n.cm-s-the-matrix span.cm-atom { color: #3FF; }\n.cm-s-the-matrix span.cm-number { color: #FFB94F; }\n.cm-s-the-matrix span.cm-def { color: #99C; }\n.cm-s-the-matrix span.cm-variable { color: #F6C; }\n.cm-s-the-matrix span.cm-variable-2 { color: #C6F; }\n.cm-s-the-matrix span.cm-variable-3, .cm-s-the-matrix span.cm-type { color: #96F; }\n.cm-s-the-matrix span.cm-property { color: #62FFA0; }\n.cm-s-the-matrix span.cm-operator { color: #999; }\n.cm-s-the-matrix span.cm-comment { color: #CCCCCC; }\n.cm-s-the-matrix span.cm-string { color: #39C; }\n.cm-s-the-matrix span.cm-meta { color: #C9F; }\n.cm-s-the-matrix span.cm-qualifier { color: #FFF700; }\n.cm-s-the-matrix span.cm-builtin { color: #30a; }\n.cm-s-the-matrix span.cm-bracket { color: #cc7; }\n.cm-s-the-matrix span.cm-tag { color: #FFBD40; }\n.cm-s-the-matrix span.cm-attribute { color: #FFF700; }\n.cm-s-the-matrix span.cm-error { color: #FF0000; }\n\n.cm-s-the-matrix .CodeMirror-activeline-background { background: #040; }\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const i = a;
        },
        7638: r => {
            r.exports = function(r) {
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
                                (t += r(e)),
                                o && (t += '}'),
                                e[2] && (t += '}'),
                                e[4] && (t += '}'),
                                t
                            );
                        }).join('');
                    }),
                    (e.i = function(r, t, o, n, c) {
                        'string' == typeof r && (r = [[null, r, void 0]]);
                        var a = {};
                        if (o)
                            for (var i = 0; i < this.length; i++) {
                                var s = this[i][0];
                                null != s && (a[s] = !0);
                            }
                        for (var A = 0; A < r.length; A++) {
                            var m = [].concat(r[A]);
                            (o && a[m[0]]) ||
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
                                t &&
                                    (m[2]
                                        ? ((m[1] = '@media '
                                              .concat(m[2], ' {')
                                              .concat(m[1], '}')),
                                          (m[2] = t))
                                        : (m[2] = t)),
                                n &&
                                    (m[4]
                                        ? ((m[1] = '@supports ('
                                              .concat(m[4], ') {')
                                              .concat(m[1], '}')),
                                          (m[4] = n))
                                        : (m[4] = ''.concat(n))),
                                e.push(m));
                        }
                    }),
                    e
                );
            };
        },
        34663: r => {
            r.exports = function(r) {
                var e = r[1],
                    t = r[3];
                if (!t) return e;
                if ('function' == typeof btoa) {
                    var o = btoa(
                            unescape(encodeURIComponent(JSON.stringify(t)))
                        ),
                        n = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            o
                        ),
                        c = '/*# '.concat(n, ' */'),
                        a = t.sources.map(function(r) {
                            return '/*# sourceURL='
                                .concat(t.sourceRoot || '')
                                .concat(r, ' */');
                        });
                    return [e]
                        .concat(a)
                        .concat([c])
                        .join('\n');
                }
                return [e].join('\n');
            };
        },
        20160: (r, e, t) => {
            t.r(e), t.d(e, { default: () => x });
            var o = t(1892),
                n = t.n(o),
                c = t(95760),
                a = t.n(c),
                i = t(38311),
                s = t.n(i),
                A = t(58192),
                m = t.n(A),
                l = t(38060),
                p = t.n(l),
                C = t(54865),
                u = t.n(C),
                d = t(45618),
                h = {};
            (h.styleTagTransform = u()),
                (h.setAttributes = m()),
                (h.insert = s().bind(null, 'head')),
                (h.domAPI = a()),
                (h.insertStyleElement = p()),
                n()(d.Z, h);
            const x = d.Z && d.Z.locals ? d.Z.locals : void 0;
        },
        1892: r => {
            var e = [];
            function t(r) {
                for (var t = -1, o = 0; o < e.length; o++)
                    if (e[o].identifier === r) {
                        t = o;
                        break;
                    }
                return t;
            }
            function o(r, o) {
                for (var c = {}, a = [], i = 0; i < r.length; i++) {
                    var s = r[i],
                        A = o.base ? s[0] + o.base : s[0],
                        m = c[A] || 0,
                        l = ''.concat(A, ' ').concat(m);
                    c[A] = m + 1;
                    var p = t(l),
                        C = {
                            css: s[1],
                            media: s[2],
                            sourceMap: s[3],
                            supports: s[4],
                            layer: s[5],
                        };
                    if (-1 !== p) e[p].references++, e[p].updater(C);
                    else {
                        var u = n(C, o);
                        (o.byIndex = i),
                            e.splice(i, 0, {
                                identifier: l,
                                updater: u,
                                references: 1,
                            });
                    }
                    a.push(l);
                }
                return a;
            }
            function n(r, e) {
                var t = e.domAPI(e);
                return (
                    t.update(r),
                    function(e) {
                        if (e) {
                            if (
                                e.css === r.css &&
                                e.media === r.media &&
                                e.sourceMap === r.sourceMap &&
                                e.supports === r.supports &&
                                e.layer === r.layer
                            )
                                return;
                            t.update((r = e));
                        } else t.remove();
                    }
                );
            }
            r.exports = function(r, n) {
                var c = o((r = r || []), (n = n || {}));
                return function(r) {
                    r = r || [];
                    for (var a = 0; a < c.length; a++) {
                        var i = t(c[a]);
                        e[i].references--;
                    }
                    for (var s = o(r, n), A = 0; A < c.length; A++) {
                        var m = t(c[A]);
                        0 === e[m].references &&
                            (e[m].updater(), e.splice(m, 1));
                    }
                    c = s;
                };
            };
        },
        38311: r => {
            var e = {};
            r.exports = function(r, t) {
                var o = (function(r) {
                    if (void 0 === e[r]) {
                        var t = document.querySelector(r);
                        if (
                            window.HTMLIFrameElement &&
                            t instanceof window.HTMLIFrameElement
                        )
                            try {
                                t = t.contentDocument.head;
                            } catch (r) {
                                t = null;
                            }
                        e[r] = t;
                    }
                    return e[r];
                })(r);
                if (!o)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                o.appendChild(t);
            };
        },
        38060: r => {
            r.exports = function(r) {
                var e = document.createElement('style');
                return (
                    r.setAttributes(e, r.attributes), r.insert(e, r.options), e
                );
            };
        },
        58192: (r, e, t) => {
            r.exports = function(r) {
                var e = t.nc;
                e && r.setAttribute('nonce', e);
            };
        },
        95760: r => {
            r.exports = function(r) {
                var e = r.insertStyleElement(r);
                return {
                    update: function(t) {
                        !(function(r, e, t) {
                            var o = '';
                            t.supports &&
                                (o += '@supports ('.concat(t.supports, ') {')),
                                t.media &&
                                    (o += '@media '.concat(t.media, ' {'));
                            var n = void 0 !== t.layer;
                            n &&
                                (o += '@layer'.concat(
                                    t.layer.length > 0
                                        ? ' '.concat(t.layer)
                                        : '',
                                    ' {'
                                )),
                                (o += t.css),
                                n && (o += '}'),
                                t.media && (o += '}'),
                                t.supports && (o += '}');
                            var c = t.sourceMap;
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
                                e.styleTagTransform(o, r, e.options);
                        })(e, r, t);
                    },
                    remove: function() {
                        !(function(r) {
                            if (null === r.parentNode) return !1;
                            r.parentNode.removeChild(r);
                        })(e);
                    },
                };
            };
        },
        54865: r => {
            r.exports = function(r, e) {
                if (e.styleSheet) e.styleSheet.cssText = r;
                else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(r));
                }
            };
        },
    },
]);
//# sourceMappingURL=160.5f28731.js.map
