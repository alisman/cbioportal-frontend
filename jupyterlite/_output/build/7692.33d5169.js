'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [7692],
    {
        29986: (r, e, c) => {
            c.d(e, { Z: () => t });
            var a = c(34663),
                n = c.n(a),
                o = c(7638),
                m = c.n(o)()(n());
            m.push([
                r.id,
                '/* Based on https://github.com/dempfi/ayu */\n\n.cm-s-ayu-mirage.CodeMirror { background: #1f2430; color: #cbccc6; }\n.cm-s-ayu-mirage div.CodeMirror-selected { background: #34455a; }\n.cm-s-ayu-mirage .CodeMirror-line::selection, .cm-s-ayu-mirage .CodeMirror-line > span::selection, .cm-s-ayu-mirage .CodeMirror-line > span > span::selection { background: #34455a; }\n.cm-s-ayu-mirage .CodeMirror-line::-moz-selection, .cm-s-ayu-mirage .CodeMirror-line > span::-moz-selection, .cm-s-ayu-mirage .CodeMirror-line > span > span::-moz-selection { background: rgba(25, 30, 42, 99); }\n.cm-s-ayu-mirage .CodeMirror-gutters { background: #1f2430; border-right: 0px; }\n.cm-s-ayu-mirage .CodeMirror-guttermarker { color: white; }\n.cm-s-ayu-mirage .CodeMirror-guttermarker-subtle { color:  rgba(112, 122, 140, 66); }\n.cm-s-ayu-mirage .CodeMirror-linenumber { color: rgba(61, 66, 77, 99); }\n.cm-s-ayu-mirage .CodeMirror-cursor { border-left: 1px solid #ffcc66; }\n\n.cm-s-ayu-mirage span.cm-comment { color: #5c6773; font-style:italic; }\n.cm-s-ayu-mirage span.cm-atom { color: #ae81ff; }\n.cm-s-ayu-mirage span.cm-number { color: #ffcc66; }\n\n.cm-s-ayu-mirage span.cm-comment.cm-attribute { color: #ffd580; }\n.cm-s-ayu-mirage span.cm-comment.cm-def { color: #d4bfff; }\n.cm-s-ayu-mirage span.cm-comment.cm-tag { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-ayu-mirage span.cm-property { color: #f29e74; }\n.cm-s-ayu-mirage span.cm-attribute { color: #ffd580; }  \n.cm-s-ayu-mirage span.cm-keyword { color: #ffa759; } \n.cm-s-ayu-mirage span.cm-builtin { color: #ffcc66; }\n.cm-s-ayu-mirage span.cm-string { color: #bae67e; }\n\n.cm-s-ayu-mirage span.cm-variable { color: #cbccc6; }\n.cm-s-ayu-mirage span.cm-variable-2 { color: #f28779; }\n.cm-s-ayu-mirage span.cm-variable-3 { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-type { color: #ffa759; }\n.cm-s-ayu-mirage span.cm-def { color: #ffd580; }\n.cm-s-ayu-mirage span.cm-bracket { color: rgba(92, 207, 230, 80); }\n.cm-s-ayu-mirage span.cm-tag { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-header { color: #bae67e; }\n.cm-s-ayu-mirage span.cm-link { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-error { color: #ff3333; } \n\n.cm-s-ayu-mirage .CodeMirror-activeline-background { background: #191e2a; }\n.cm-s-ayu-mirage .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/ayu-mirage.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA,2CAA2C;;AAE3C,8BAA8B,mBAAmB,EAAE,cAAc,EAAE;AACnE,2CAA2C,mBAAmB,EAAE;AAChE,gKAAgK,mBAAmB,EAAE;AACrL,+KAA+K,gCAAgC,EAAE;AACjN,uCAAuC,mBAAmB,EAAE,iBAAiB,EAAE;AAC/E,4CAA4C,YAAY,EAAE;AAC1D,mDAAmD,+BAA+B,EAAE;AACpF,0CAA0C,2BAA2B,EAAE;AACvE,sCAAsC,8BAA8B,EAAE;;AAEtE,mCAAmC,cAAc,EAAE,iBAAiB,EAAE;AACtE,gCAAgC,cAAc,EAAE;AAChD,kCAAkC,cAAc,EAAE;;AAElD,gDAAgD,cAAc,EAAE;AAChE,0CAA0C,cAAc,EAAE;AAC1D,0CAA0C,cAAc,EAAE;AAC1D,2CAA2C,cAAc,EAAE;;AAE3D,oCAAoC,cAAc,EAAE;AACpD,qCAAqC,cAAc,EAAE;AACrD,mCAAmC,cAAc,EAAE;AACnD,mCAAmC,cAAc,EAAE;AACnD,kCAAkC,cAAc,EAAE;;AAElD,oCAAoC,cAAc,EAAE;AACpD,sCAAsC,cAAc,EAAE;AACtD,sCAAsC,cAAc,EAAE;AACtD,gCAAgC,cAAc,EAAE;AAChD,+BAA+B,cAAc,EAAE;AAC/C,mCAAmC,6BAA6B,EAAE;AAClE,+BAA+B,cAAc,EAAE;AAC/C,kCAAkC,cAAc,EAAE;AAClD,gCAAgC,cAAc,EAAE;AAChD,iCAAiC,cAAc,EAAE;;AAEjD,qDAAqD,mBAAmB,EAAE;AAC1E;EACE,0BAA0B;EAC1B,uBAAuB;AACzB',
                    sourcesContent: [
                        '/* Based on https://github.com/dempfi/ayu */\n\n.cm-s-ayu-mirage.CodeMirror { background: #1f2430; color: #cbccc6; }\n.cm-s-ayu-mirage div.CodeMirror-selected { background: #34455a; }\n.cm-s-ayu-mirage .CodeMirror-line::selection, .cm-s-ayu-mirage .CodeMirror-line > span::selection, .cm-s-ayu-mirage .CodeMirror-line > span > span::selection { background: #34455a; }\n.cm-s-ayu-mirage .CodeMirror-line::-moz-selection, .cm-s-ayu-mirage .CodeMirror-line > span::-moz-selection, .cm-s-ayu-mirage .CodeMirror-line > span > span::-moz-selection { background: rgba(25, 30, 42, 99); }\n.cm-s-ayu-mirage .CodeMirror-gutters { background: #1f2430; border-right: 0px; }\n.cm-s-ayu-mirage .CodeMirror-guttermarker { color: white; }\n.cm-s-ayu-mirage .CodeMirror-guttermarker-subtle { color:  rgba(112, 122, 140, 66); }\n.cm-s-ayu-mirage .CodeMirror-linenumber { color: rgba(61, 66, 77, 99); }\n.cm-s-ayu-mirage .CodeMirror-cursor { border-left: 1px solid #ffcc66; }\n\n.cm-s-ayu-mirage span.cm-comment { color: #5c6773; font-style:italic; }\n.cm-s-ayu-mirage span.cm-atom { color: #ae81ff; }\n.cm-s-ayu-mirage span.cm-number { color: #ffcc66; }\n\n.cm-s-ayu-mirage span.cm-comment.cm-attribute { color: #ffd580; }\n.cm-s-ayu-mirage span.cm-comment.cm-def { color: #d4bfff; }\n.cm-s-ayu-mirage span.cm-comment.cm-tag { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-ayu-mirage span.cm-property { color: #f29e74; }\n.cm-s-ayu-mirage span.cm-attribute { color: #ffd580; }  \n.cm-s-ayu-mirage span.cm-keyword { color: #ffa759; } \n.cm-s-ayu-mirage span.cm-builtin { color: #ffcc66; }\n.cm-s-ayu-mirage span.cm-string { color: #bae67e; }\n\n.cm-s-ayu-mirage span.cm-variable { color: #cbccc6; }\n.cm-s-ayu-mirage span.cm-variable-2 { color: #f28779; }\n.cm-s-ayu-mirage span.cm-variable-3 { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-type { color: #ffa759; }\n.cm-s-ayu-mirage span.cm-def { color: #ffd580; }\n.cm-s-ayu-mirage span.cm-bracket { color: rgba(92, 207, 230, 80); }\n.cm-s-ayu-mirage span.cm-tag { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-header { color: #bae67e; }\n.cm-s-ayu-mirage span.cm-link { color: #5ccfe6; }\n.cm-s-ayu-mirage span.cm-error { color: #ff3333; } \n\n.cm-s-ayu-mirage .CodeMirror-activeline-background { background: #191e2a; }\n.cm-s-ayu-mirage .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const t = m;
        },
        7638: r => {
            r.exports = function(r) {
                var e = [];
                return (
                    (e.toString = function() {
                        return this.map(function(e) {
                            var c = '',
                                a = void 0 !== e[5];
                            return (
                                e[4] &&
                                    (c += '@supports ('.concat(e[4], ') {')),
                                e[2] && (c += '@media '.concat(e[2], ' {')),
                                a &&
                                    (c += '@layer'.concat(
                                        e[5].length > 0 ? ' '.concat(e[5]) : '',
                                        ' {'
                                    )),
                                (c += r(e)),
                                a && (c += '}'),
                                e[2] && (c += '}'),
                                e[4] && (c += '}'),
                                c
                            );
                        }).join('');
                    }),
                    (e.i = function(r, c, a, n, o) {
                        'string' == typeof r && (r = [[null, r, void 0]]);
                        var m = {};
                        if (a)
                            for (var t = 0; t < this.length; t++) {
                                var i = this[t][0];
                                null != i && (m[i] = !0);
                            }
                        for (var A = 0; A < r.length; A++) {
                            var s = [].concat(r[A]);
                            (a && m[s[0]]) ||
                                (void 0 !== o &&
                                    (void 0 === s[5] ||
                                        (s[1] = '@layer'
                                            .concat(
                                                s[5].length > 0
                                                    ? ' '.concat(s[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(s[1], '}')),
                                    (s[5] = o)),
                                c &&
                                    (s[2]
                                        ? ((s[1] = '@media '
                                              .concat(s[2], ' {')
                                              .concat(s[1], '}')),
                                          (s[2] = c))
                                        : (s[2] = c)),
                                n &&
                                    (s[4]
                                        ? ((s[1] = '@supports ('
                                              .concat(s[4], ') {')
                                              .concat(s[1], '}')),
                                          (s[4] = n))
                                        : (s[4] = ''.concat(n))),
                                e.push(s));
                        }
                    }),
                    e
                );
            };
        },
        34663: r => {
            r.exports = function(r) {
                var e = r[1],
                    c = r[3];
                if (!c) return e;
                if ('function' == typeof btoa) {
                    var a = btoa(
                            unescape(encodeURIComponent(JSON.stringify(c)))
                        ),
                        n = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            a
                        ),
                        o = '/*# '.concat(n, ' */'),
                        m = c.sources.map(function(r) {
                            return '/*# sourceURL='
                                .concat(c.sourceRoot || '')
                                .concat(r, ' */');
                        });
                    return [e]
                        .concat(m)
                        .concat([o])
                        .join('\n');
                }
                return [e].join('\n');
            };
        },
        27692: (r, e, c) => {
            c.r(e), c.d(e, { default: () => C });
            var a = c(1892),
                n = c.n(a),
                o = c(95760),
                m = c.n(o),
                t = c(38311),
                i = c.n(t),
                A = c(58192),
                s = c.n(A),
                u = c(38060),
                l = c.n(u),
                p = c(54865),
                g = c.n(p),
                d = c(29986),
                f = {};
            (f.styleTagTransform = g()),
                (f.setAttributes = s()),
                (f.insert = i().bind(null, 'head')),
                (f.domAPI = m()),
                (f.insertStyleElement = l()),
                n()(d.Z, f);
            const C = d.Z && d.Z.locals ? d.Z.locals : void 0;
        },
        1892: r => {
            var e = [];
            function c(r) {
                for (var c = -1, a = 0; a < e.length; a++)
                    if (e[a].identifier === r) {
                        c = a;
                        break;
                    }
                return c;
            }
            function a(r, a) {
                for (var o = {}, m = [], t = 0; t < r.length; t++) {
                    var i = r[t],
                        A = a.base ? i[0] + a.base : i[0],
                        s = o[A] || 0,
                        u = ''.concat(A, ' ').concat(s);
                    o[A] = s + 1;
                    var l = c(u),
                        p = {
                            css: i[1],
                            media: i[2],
                            sourceMap: i[3],
                            supports: i[4],
                            layer: i[5],
                        };
                    if (-1 !== l) e[l].references++, e[l].updater(p);
                    else {
                        var g = n(p, a);
                        (a.byIndex = t),
                            e.splice(t, 0, {
                                identifier: u,
                                updater: g,
                                references: 1,
                            });
                    }
                    m.push(u);
                }
                return m;
            }
            function n(r, e) {
                var c = e.domAPI(e);
                return (
                    c.update(r),
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
                            c.update((r = e));
                        } else c.remove();
                    }
                );
            }
            r.exports = function(r, n) {
                var o = a((r = r || []), (n = n || {}));
                return function(r) {
                    r = r || [];
                    for (var m = 0; m < o.length; m++) {
                        var t = c(o[m]);
                        e[t].references--;
                    }
                    for (var i = a(r, n), A = 0; A < o.length; A++) {
                        var s = c(o[A]);
                        0 === e[s].references &&
                            (e[s].updater(), e.splice(s, 1));
                    }
                    o = i;
                };
            };
        },
        38311: r => {
            var e = {};
            r.exports = function(r, c) {
                var a = (function(r) {
                    if (void 0 === e[r]) {
                        var c = document.querySelector(r);
                        if (
                            window.HTMLIFrameElement &&
                            c instanceof window.HTMLIFrameElement
                        )
                            try {
                                c = c.contentDocument.head;
                            } catch (r) {
                                c = null;
                            }
                        e[r] = c;
                    }
                    return e[r];
                })(r);
                if (!a)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                a.appendChild(c);
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
        58192: (r, e, c) => {
            r.exports = function(r) {
                var e = c.nc;
                e && r.setAttribute('nonce', e);
            };
        },
        95760: r => {
            r.exports = function(r) {
                var e = r.insertStyleElement(r);
                return {
                    update: function(c) {
                        !(function(r, e, c) {
                            var a = '';
                            c.supports &&
                                (a += '@supports ('.concat(c.supports, ') {')),
                                c.media &&
                                    (a += '@media '.concat(c.media, ' {'));
                            var n = void 0 !== c.layer;
                            n &&
                                (a += '@layer'.concat(
                                    c.layer.length > 0
                                        ? ' '.concat(c.layer)
                                        : '',
                                    ' {'
                                )),
                                (a += c.css),
                                n && (a += '}'),
                                c.media && (a += '}'),
                                c.supports && (a += '}');
                            var o = c.sourceMap;
                            o &&
                                'undefined' != typeof btoa &&
                                (a += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(o)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                e.styleTagTransform(a, r, e.options);
                        })(e, r, c);
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
//# sourceMappingURL=7692.33d5169.js.map
