'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [9156],
    {
        90181: (r, c, a) => {
            a.d(c, { Z: () => s });
            var n = a(34663),
                o = a.n(n),
                e = a(7638),
                t = a.n(e)()(o());
            t.push([
                r.id,
                '/*\n\n    Name:       dracula\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original dracula color scheme by Zeno Rocha (https://github.com/zenorocha/dracula-theme)\n\n*/\n\n\n.cm-s-dracula.CodeMirror, .cm-s-dracula .CodeMirror-gutters {\n  background-color: #282a36 !important;\n  color: #f8f8f2 !important;\n  border: none;\n}\n.cm-s-dracula .CodeMirror-gutters { color: #282a36; }\n.cm-s-dracula .CodeMirror-cursor { border-left: solid thin #f8f8f0; }\n.cm-s-dracula .CodeMirror-linenumber { color: #6D8A88; }\n.cm-s-dracula .CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula .CodeMirror-line::selection, .cm-s-dracula .CodeMirror-line > span::selection, .cm-s-dracula .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula .CodeMirror-line::-moz-selection, .cm-s-dracula .CodeMirror-line > span::-moz-selection, .cm-s-dracula .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula span.cm-comment { color: #6272a4; }\n.cm-s-dracula span.cm-string, .cm-s-dracula span.cm-string-2 { color: #f1fa8c; }\n.cm-s-dracula span.cm-number { color: #bd93f9; }\n.cm-s-dracula span.cm-variable { color: #50fa7b; }\n.cm-s-dracula span.cm-variable-2 { color: white; }\n.cm-s-dracula span.cm-def { color: #50fa7b; }\n.cm-s-dracula span.cm-operator { color: #ff79c6; }\n.cm-s-dracula span.cm-keyword { color: #ff79c6; }\n.cm-s-dracula span.cm-atom { color: #bd93f9; }\n.cm-s-dracula span.cm-meta { color: #f8f8f2; }\n.cm-s-dracula span.cm-tag { color: #ff79c6; }\n.cm-s-dracula span.cm-attribute { color: #50fa7b; }\n.cm-s-dracula span.cm-qualifier { color: #50fa7b; }\n.cm-s-dracula span.cm-property { color: #66d9ef; }\n.cm-s-dracula span.cm-builtin { color: #50fa7b; }\n.cm-s-dracula span.cm-variable-3, .cm-s-dracula span.cm-type { color: #ffb86c; }\n\n.cm-s-dracula .CodeMirror-activeline-background { background: rgba(255,255,255,0.1); }\n.cm-s-dracula .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/dracula.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;;;;;CAOC;;;AAGD;EACE,oCAAoC;EACpC,yBAAyB;EACzB,YAAY;AACd;AACA,oCAAoC,cAAc,EAAE;AACpD,mCAAmC,+BAA+B,EAAE;AACpE,uCAAuC,cAAc,EAAE;AACvD,qCAAqC,qCAAqC,EAAE;AAC5E,uJAAuJ,qCAAqC,EAAE;AAC9L,sKAAsK,qCAAqC,EAAE;AAC7M,gCAAgC,cAAc,EAAE;AAChD,+DAA+D,cAAc,EAAE;AAC/E,+BAA+B,cAAc,EAAE;AAC/C,iCAAiC,cAAc,EAAE;AACjD,mCAAmC,YAAY,EAAE;AACjD,4BAA4B,cAAc,EAAE;AAC5C,iCAAiC,cAAc,EAAE;AACjD,gCAAgC,cAAc,EAAE;AAChD,6BAA6B,cAAc,EAAE;AAC7C,6BAA6B,cAAc,EAAE;AAC7C,4BAA4B,cAAc,EAAE;AAC5C,kCAAkC,cAAc,EAAE;AAClD,kCAAkC,cAAc,EAAE;AAClD,iCAAiC,cAAc,EAAE;AACjD,gCAAgC,cAAc,EAAE;AAChD,+DAA+D,cAAc,EAAE;;AAE/E,kDAAkD,iCAAiC,EAAE;AACrF,4CAA4C,0BAA0B,EAAE,uBAAuB,EAAE',
                    sourcesContent: [
                        '/*\n\n    Name:       dracula\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original dracula color scheme by Zeno Rocha (https://github.com/zenorocha/dracula-theme)\n\n*/\n\n\n.cm-s-dracula.CodeMirror, .cm-s-dracula .CodeMirror-gutters {\n  background-color: #282a36 !important;\n  color: #f8f8f2 !important;\n  border: none;\n}\n.cm-s-dracula .CodeMirror-gutters { color: #282a36; }\n.cm-s-dracula .CodeMirror-cursor { border-left: solid thin #f8f8f0; }\n.cm-s-dracula .CodeMirror-linenumber { color: #6D8A88; }\n.cm-s-dracula .CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula .CodeMirror-line::selection, .cm-s-dracula .CodeMirror-line > span::selection, .cm-s-dracula .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula .CodeMirror-line::-moz-selection, .cm-s-dracula .CodeMirror-line > span::-moz-selection, .cm-s-dracula .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula span.cm-comment { color: #6272a4; }\n.cm-s-dracula span.cm-string, .cm-s-dracula span.cm-string-2 { color: #f1fa8c; }\n.cm-s-dracula span.cm-number { color: #bd93f9; }\n.cm-s-dracula span.cm-variable { color: #50fa7b; }\n.cm-s-dracula span.cm-variable-2 { color: white; }\n.cm-s-dracula span.cm-def { color: #50fa7b; }\n.cm-s-dracula span.cm-operator { color: #ff79c6; }\n.cm-s-dracula span.cm-keyword { color: #ff79c6; }\n.cm-s-dracula span.cm-atom { color: #bd93f9; }\n.cm-s-dracula span.cm-meta { color: #f8f8f2; }\n.cm-s-dracula span.cm-tag { color: #ff79c6; }\n.cm-s-dracula span.cm-attribute { color: #50fa7b; }\n.cm-s-dracula span.cm-qualifier { color: #50fa7b; }\n.cm-s-dracula span.cm-property { color: #66d9ef; }\n.cm-s-dracula span.cm-builtin { color: #50fa7b; }\n.cm-s-dracula span.cm-variable-3, .cm-s-dracula span.cm-type { color: #ffb86c; }\n\n.cm-s-dracula .CodeMirror-activeline-background { background: rgba(255,255,255,0.1); }\n.cm-s-dracula .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const s = t;
        },
        7638: r => {
            r.exports = function(r) {
                var c = [];
                return (
                    (c.toString = function() {
                        return this.map(function(c) {
                            var a = '',
                                n = void 0 !== c[5];
                            return (
                                c[4] &&
                                    (a += '@supports ('.concat(c[4], ') {')),
                                c[2] && (a += '@media '.concat(c[2], ' {')),
                                n &&
                                    (a += '@layer'.concat(
                                        c[5].length > 0 ? ' '.concat(c[5]) : '',
                                        ' {'
                                    )),
                                (a += r(c)),
                                n && (a += '}'),
                                c[2] && (a += '}'),
                                c[4] && (a += '}'),
                                a
                            );
                        }).join('');
                    }),
                    (c.i = function(r, a, n, o, e) {
                        'string' == typeof r && (r = [[null, r, void 0]]);
                        var t = {};
                        if (n)
                            for (var s = 0; s < this.length; s++) {
                                var l = this[s][0];
                                null != l && (t[l] = !0);
                            }
                        for (var i = 0; i < r.length; i++) {
                            var A = [].concat(r[i]);
                            (n && t[A[0]]) ||
                                (void 0 !== e &&
                                    (void 0 === A[5] ||
                                        (A[1] = '@layer'
                                            .concat(
                                                A[5].length > 0
                                                    ? ' '.concat(A[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(A[1], '}')),
                                    (A[5] = e)),
                                a &&
                                    (A[2]
                                        ? ((A[1] = '@media '
                                              .concat(A[2], ' {')
                                              .concat(A[1], '}')),
                                          (A[2] = a))
                                        : (A[2] = a)),
                                o &&
                                    (A[4]
                                        ? ((A[1] = '@supports ('
                                              .concat(A[4], ') {')
                                              .concat(A[1], '}')),
                                          (A[4] = o))
                                        : (A[4] = ''.concat(o))),
                                c.push(A));
                        }
                    }),
                    c
                );
            };
        },
        34663: r => {
            r.exports = function(r) {
                var c = r[1],
                    a = r[3];
                if (!a) return c;
                if ('function' == typeof btoa) {
                    var n = btoa(
                            unescape(encodeURIComponent(JSON.stringify(a)))
                        ),
                        o = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            n
                        ),
                        e = '/*# '.concat(o, ' */'),
                        t = a.sources.map(function(r) {
                            return '/*# sourceURL='
                                .concat(a.sourceRoot || '')
                                .concat(r, ' */');
                        });
                    return [c]
                        .concat(t)
                        .concat([e])
                        .join('\n');
                }
                return [c].join('\n');
            };
        },
        9156: (r, c, a) => {
            a.r(c), a.d(c, { default: () => b });
            var n = a(1892),
                o = a.n(n),
                e = a(95760),
                t = a.n(e),
                s = a(38311),
                l = a.n(s),
                i = a(58192),
                A = a.n(i),
                u = a(38060),
                d = a.n(u),
                m = a(54865),
                p = a.n(m),
                f = a(90181),
                C = {};
            (C.styleTagTransform = p()),
                (C.setAttributes = A()),
                (C.insert = l().bind(null, 'head')),
                (C.domAPI = t()),
                (C.insertStyleElement = d()),
                o()(f.Z, C);
            const b = f.Z && f.Z.locals ? f.Z.locals : void 0;
        },
        1892: r => {
            var c = [];
            function a(r) {
                for (var a = -1, n = 0; n < c.length; n++)
                    if (c[n].identifier === r) {
                        a = n;
                        break;
                    }
                return a;
            }
            function n(r, n) {
                for (var e = {}, t = [], s = 0; s < r.length; s++) {
                    var l = r[s],
                        i = n.base ? l[0] + n.base : l[0],
                        A = e[i] || 0,
                        u = ''.concat(i, ' ').concat(A);
                    e[i] = A + 1;
                    var d = a(u),
                        m = {
                            css: l[1],
                            media: l[2],
                            sourceMap: l[3],
                            supports: l[4],
                            layer: l[5],
                        };
                    if (-1 !== d) c[d].references++, c[d].updater(m);
                    else {
                        var p = o(m, n);
                        (n.byIndex = s),
                            c.splice(s, 0, {
                                identifier: u,
                                updater: p,
                                references: 1,
                            });
                    }
                    t.push(u);
                }
                return t;
            }
            function o(r, c) {
                var a = c.domAPI(c);
                return (
                    a.update(r),
                    function(c) {
                        if (c) {
                            if (
                                c.css === r.css &&
                                c.media === r.media &&
                                c.sourceMap === r.sourceMap &&
                                c.supports === r.supports &&
                                c.layer === r.layer
                            )
                                return;
                            a.update((r = c));
                        } else a.remove();
                    }
                );
            }
            r.exports = function(r, o) {
                var e = n((r = r || []), (o = o || {}));
                return function(r) {
                    r = r || [];
                    for (var t = 0; t < e.length; t++) {
                        var s = a(e[t]);
                        c[s].references--;
                    }
                    for (var l = n(r, o), i = 0; i < e.length; i++) {
                        var A = a(e[i]);
                        0 === c[A].references &&
                            (c[A].updater(), c.splice(A, 1));
                    }
                    e = l;
                };
            };
        },
        38311: r => {
            var c = {};
            r.exports = function(r, a) {
                var n = (function(r) {
                    if (void 0 === c[r]) {
                        var a = document.querySelector(r);
                        if (
                            window.HTMLIFrameElement &&
                            a instanceof window.HTMLIFrameElement
                        )
                            try {
                                a = a.contentDocument.head;
                            } catch (r) {
                                a = null;
                            }
                        c[r] = a;
                    }
                    return c[r];
                })(r);
                if (!n)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                n.appendChild(a);
            };
        },
        38060: r => {
            r.exports = function(r) {
                var c = document.createElement('style');
                return (
                    r.setAttributes(c, r.attributes), r.insert(c, r.options), c
                );
            };
        },
        58192: (r, c, a) => {
            r.exports = function(r) {
                var c = a.nc;
                c && r.setAttribute('nonce', c);
            };
        },
        95760: r => {
            r.exports = function(r) {
                var c = r.insertStyleElement(r);
                return {
                    update: function(a) {
                        !(function(r, c, a) {
                            var n = '';
                            a.supports &&
                                (n += '@supports ('.concat(a.supports, ') {')),
                                a.media &&
                                    (n += '@media '.concat(a.media, ' {'));
                            var o = void 0 !== a.layer;
                            o &&
                                (n += '@layer'.concat(
                                    a.layer.length > 0
                                        ? ' '.concat(a.layer)
                                        : '',
                                    ' {'
                                )),
                                (n += a.css),
                                o && (n += '}'),
                                a.media && (n += '}'),
                                a.supports && (n += '}');
                            var e = a.sourceMap;
                            e &&
                                'undefined' != typeof btoa &&
                                (n += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(e)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                c.styleTagTransform(n, r, c.options);
                        })(c, r, a);
                    },
                    remove: function() {
                        !(function(r) {
                            if (null === r.parentNode) return !1;
                            r.parentNode.removeChild(r);
                        })(c);
                    },
                };
            };
        },
        54865: r => {
            r.exports = function(r, c) {
                if (c.styleSheet) c.styleSheet.cssText = r;
                else {
                    for (; c.firstChild; ) c.removeChild(c.firstChild);
                    c.appendChild(document.createTextNode(r));
                }
            };
        },
    },
]);
//# sourceMappingURL=9156.0cefbd3.js.map
