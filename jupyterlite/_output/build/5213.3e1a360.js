'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [5213],
    {
        50725: (r, a, c) => {
            c.d(a, { Z: () => A });
            var n = c(34663),
                o = c.n(n),
                e = c(7638),
                t = c.n(e)()(o());
            t.push([
                r.id,
                '/* Based on https://github.com/dempfi/ayu */\n\n.cm-s-ayu-dark.CodeMirror { background: #0a0e14; color: #b3b1ad; }\n.cm-s-ayu-dark div.CodeMirror-selected { background: #273747; }\n.cm-s-ayu-dark .CodeMirror-line::selection, .cm-s-ayu-dark .CodeMirror-line > span::selection, .cm-s-ayu-dark .CodeMirror-line > span > span::selection { background: rgba(39, 55, 71, 99); }\n.cm-s-ayu-dark .CodeMirror-line::-moz-selection, .cm-s-ayu-dark .CodeMirror-line > span::-moz-selection, .cm-s-ayu-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(39, 55, 71, 99); }\n.cm-s-ayu-dark .CodeMirror-gutters { background: #0a0e14; border-right: 0px; }\n.cm-s-ayu-dark .CodeMirror-guttermarker { color: white; }\n.cm-s-ayu-dark .CodeMirror-guttermarker-subtle { color: #3d424d; }\n.cm-s-ayu-dark .CodeMirror-linenumber { color: #3d424d; }\n.cm-s-ayu-dark .CodeMirror-cursor { border-left: 1px solid #e6b450; }\n\n.cm-s-ayu-dark span.cm-comment { color: #626a73; }\n.cm-s-ayu-dark span.cm-atom { color: #ae81ff; }\n.cm-s-ayu-dark span.cm-number { color: #e6b450; }\n\n.cm-s-ayu-dark span.cm-comment.cm-attribute { color: #ffb454; }\n.cm-s-ayu-dark span.cm-comment.cm-def { color: rgba(57, 186, 230, 80); }\n.cm-s-ayu-dark span.cm-comment.cm-tag { color: #39bae6; }\n.cm-s-ayu-dark span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-ayu-dark span.cm-property, .cm-s-ayu-dark span.cm-attribute { color: #ffb454; }  \n.cm-s-ayu-dark span.cm-keyword { color: #ff8f40; } \n.cm-s-ayu-dark span.cm-builtin { color: #e6b450; }\n.cm-s-ayu-dark span.cm-string { color: #c2d94c; }\n\n.cm-s-ayu-dark span.cm-variable { color: #b3b1ad; }\n.cm-s-ayu-dark span.cm-variable-2 { color: #f07178; }\n.cm-s-ayu-dark span.cm-variable-3 { color: #39bae6; }\n.cm-s-ayu-dark span.cm-type { color: #ff8f40; }\n.cm-s-ayu-dark span.cm-def { color: #ffee99; }\n.cm-s-ayu-dark span.cm-bracket { color: #f8f8f2; }\n.cm-s-ayu-dark span.cm-tag { color: rgba(57, 186, 230, 80); }\n.cm-s-ayu-dark span.cm-header { color: #c2d94c; }\n.cm-s-ayu-dark span.cm-link { color: #39bae6; }\n.cm-s-ayu-dark span.cm-error { color: #ff3333; } \n\n.cm-s-ayu-dark .CodeMirror-activeline-background { background: #01060e; }\n.cm-s-ayu-dark .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/ayu-dark.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA,2CAA2C;;AAE3C,4BAA4B,mBAAmB,EAAE,cAAc,EAAE;AACjE,yCAAyC,mBAAmB,EAAE;AAC9D,0JAA0J,gCAAgC,EAAE;AAC5L,yKAAyK,gCAAgC,EAAE;AAC3M,qCAAqC,mBAAmB,EAAE,iBAAiB,EAAE;AAC7E,0CAA0C,YAAY,EAAE;AACxD,iDAAiD,cAAc,EAAE;AACjE,wCAAwC,cAAc,EAAE;AACxD,oCAAoC,8BAA8B,EAAE;;AAEpE,iCAAiC,cAAc,EAAE;AACjD,8BAA8B,cAAc,EAAE;AAC9C,gCAAgC,cAAc,EAAE;;AAEhD,8CAA8C,cAAc,EAAE;AAC9D,wCAAwC,6BAA6B,EAAE;AACvE,wCAAwC,cAAc,EAAE;AACxD,yCAAyC,cAAc,EAAE;;AAEzD,oEAAoE,cAAc,EAAE;AACpF,iCAAiC,cAAc,EAAE;AACjD,iCAAiC,cAAc,EAAE;AACjD,gCAAgC,cAAc,EAAE;;AAEhD,kCAAkC,cAAc,EAAE;AAClD,oCAAoC,cAAc,EAAE;AACpD,oCAAoC,cAAc,EAAE;AACpD,8BAA8B,cAAc,EAAE;AAC9C,6BAA6B,cAAc,EAAE;AAC7C,iCAAiC,cAAc,EAAE;AACjD,6BAA6B,6BAA6B,EAAE;AAC5D,gCAAgC,cAAc,EAAE;AAChD,8BAA8B,cAAc,EAAE;AAC9C,+BAA+B,cAAc,EAAE;;AAE/C,mDAAmD,mBAAmB,EAAE;AACxE;EACE,0BAA0B;EAC1B,uBAAuB;AACzB',
                    sourcesContent: [
                        '/* Based on https://github.com/dempfi/ayu */\n\n.cm-s-ayu-dark.CodeMirror { background: #0a0e14; color: #b3b1ad; }\n.cm-s-ayu-dark div.CodeMirror-selected { background: #273747; }\n.cm-s-ayu-dark .CodeMirror-line::selection, .cm-s-ayu-dark .CodeMirror-line > span::selection, .cm-s-ayu-dark .CodeMirror-line > span > span::selection { background: rgba(39, 55, 71, 99); }\n.cm-s-ayu-dark .CodeMirror-line::-moz-selection, .cm-s-ayu-dark .CodeMirror-line > span::-moz-selection, .cm-s-ayu-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(39, 55, 71, 99); }\n.cm-s-ayu-dark .CodeMirror-gutters { background: #0a0e14; border-right: 0px; }\n.cm-s-ayu-dark .CodeMirror-guttermarker { color: white; }\n.cm-s-ayu-dark .CodeMirror-guttermarker-subtle { color: #3d424d; }\n.cm-s-ayu-dark .CodeMirror-linenumber { color: #3d424d; }\n.cm-s-ayu-dark .CodeMirror-cursor { border-left: 1px solid #e6b450; }\n\n.cm-s-ayu-dark span.cm-comment { color: #626a73; }\n.cm-s-ayu-dark span.cm-atom { color: #ae81ff; }\n.cm-s-ayu-dark span.cm-number { color: #e6b450; }\n\n.cm-s-ayu-dark span.cm-comment.cm-attribute { color: #ffb454; }\n.cm-s-ayu-dark span.cm-comment.cm-def { color: rgba(57, 186, 230, 80); }\n.cm-s-ayu-dark span.cm-comment.cm-tag { color: #39bae6; }\n.cm-s-ayu-dark span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-ayu-dark span.cm-property, .cm-s-ayu-dark span.cm-attribute { color: #ffb454; }  \n.cm-s-ayu-dark span.cm-keyword { color: #ff8f40; } \n.cm-s-ayu-dark span.cm-builtin { color: #e6b450; }\n.cm-s-ayu-dark span.cm-string { color: #c2d94c; }\n\n.cm-s-ayu-dark span.cm-variable { color: #b3b1ad; }\n.cm-s-ayu-dark span.cm-variable-2 { color: #f07178; }\n.cm-s-ayu-dark span.cm-variable-3 { color: #39bae6; }\n.cm-s-ayu-dark span.cm-type { color: #ff8f40; }\n.cm-s-ayu-dark span.cm-def { color: #ffee99; }\n.cm-s-ayu-dark span.cm-bracket { color: #f8f8f2; }\n.cm-s-ayu-dark span.cm-tag { color: rgba(57, 186, 230, 80); }\n.cm-s-ayu-dark span.cm-header { color: #c2d94c; }\n.cm-s-ayu-dark span.cm-link { color: #39bae6; }\n.cm-s-ayu-dark span.cm-error { color: #ff3333; } \n\n.cm-s-ayu-dark .CodeMirror-activeline-background { background: #01060e; }\n.cm-s-ayu-dark .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const A = t;
        },
        7638: r => {
            r.exports = function(r) {
                var a = [];
                return (
                    (a.toString = function() {
                        return this.map(function(a) {
                            var c = '',
                                n = void 0 !== a[5];
                            return (
                                a[4] &&
                                    (c += '@supports ('.concat(a[4], ') {')),
                                a[2] && (c += '@media '.concat(a[2], ' {')),
                                n &&
                                    (c += '@layer'.concat(
                                        a[5].length > 0 ? ' '.concat(a[5]) : '',
                                        ' {'
                                    )),
                                (c += r(a)),
                                n && (c += '}'),
                                a[2] && (c += '}'),
                                a[4] && (c += '}'),
                                c
                            );
                        }).join('');
                    }),
                    (a.i = function(r, c, n, o, e) {
                        'string' == typeof r && (r = [[null, r, void 0]]);
                        var t = {};
                        if (n)
                            for (var A = 0; A < this.length; A++) {
                                var s = this[A][0];
                                null != s && (t[s] = !0);
                            }
                        for (var i = 0; i < r.length; i++) {
                            var d = [].concat(r[i]);
                            (n && t[d[0]]) ||
                                (void 0 !== e &&
                                    (void 0 === d[5] ||
                                        (d[1] = '@layer'
                                            .concat(
                                                d[5].length > 0
                                                    ? ' '.concat(d[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(d[1], '}')),
                                    (d[5] = e)),
                                c &&
                                    (d[2]
                                        ? ((d[1] = '@media '
                                              .concat(d[2], ' {')
                                              .concat(d[1], '}')),
                                          (d[2] = c))
                                        : (d[2] = c)),
                                o &&
                                    (d[4]
                                        ? ((d[1] = '@supports ('
                                              .concat(d[4], ') {')
                                              .concat(d[1], '}')),
                                          (d[4] = o))
                                        : (d[4] = ''.concat(o))),
                                a.push(d));
                        }
                    }),
                    a
                );
            };
        },
        34663: r => {
            r.exports = function(r) {
                var a = r[1],
                    c = r[3];
                if (!c) return a;
                if ('function' == typeof btoa) {
                    var n = btoa(
                            unescape(encodeURIComponent(JSON.stringify(c)))
                        ),
                        o = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            n
                        ),
                        e = '/*# '.concat(o, ' */'),
                        t = c.sources.map(function(r) {
                            return '/*# sourceURL='
                                .concat(c.sourceRoot || '')
                                .concat(r, ' */');
                        });
                    return [a]
                        .concat(t)
                        .concat([e])
                        .join('\n');
                }
                return [a].join('\n');
            };
        },
        5213: (r, a, c) => {
            c.r(a), c.d(a, { default: () => f });
            var n = c(1892),
                o = c.n(n),
                e = c(95760),
                t = c.n(e),
                A = c(38311),
                s = c.n(A),
                i = c(58192),
                d = c.n(i),
                m = c(38060),
                u = c.n(m),
                l = c(54865),
                p = c.n(l),
                C = c(50725),
                y = {};
            (y.styleTagTransform = p()),
                (y.setAttributes = d()),
                (y.insert = s().bind(null, 'head')),
                (y.domAPI = t()),
                (y.insertStyleElement = u()),
                o()(C.Z, y);
            const f = C.Z && C.Z.locals ? C.Z.locals : void 0;
        },
        1892: r => {
            var a = [];
            function c(r) {
                for (var c = -1, n = 0; n < a.length; n++)
                    if (a[n].identifier === r) {
                        c = n;
                        break;
                    }
                return c;
            }
            function n(r, n) {
                for (var e = {}, t = [], A = 0; A < r.length; A++) {
                    var s = r[A],
                        i = n.base ? s[0] + n.base : s[0],
                        d = e[i] || 0,
                        m = ''.concat(i, ' ').concat(d);
                    e[i] = d + 1;
                    var u = c(m),
                        l = {
                            css: s[1],
                            media: s[2],
                            sourceMap: s[3],
                            supports: s[4],
                            layer: s[5],
                        };
                    if (-1 !== u) a[u].references++, a[u].updater(l);
                    else {
                        var p = o(l, n);
                        (n.byIndex = A),
                            a.splice(A, 0, {
                                identifier: m,
                                updater: p,
                                references: 1,
                            });
                    }
                    t.push(m);
                }
                return t;
            }
            function o(r, a) {
                var c = a.domAPI(a);
                return (
                    c.update(r),
                    function(a) {
                        if (a) {
                            if (
                                a.css === r.css &&
                                a.media === r.media &&
                                a.sourceMap === r.sourceMap &&
                                a.supports === r.supports &&
                                a.layer === r.layer
                            )
                                return;
                            c.update((r = a));
                        } else c.remove();
                    }
                );
            }
            r.exports = function(r, o) {
                var e = n((r = r || []), (o = o || {}));
                return function(r) {
                    r = r || [];
                    for (var t = 0; t < e.length; t++) {
                        var A = c(e[t]);
                        a[A].references--;
                    }
                    for (var s = n(r, o), i = 0; i < e.length; i++) {
                        var d = c(e[i]);
                        0 === a[d].references &&
                            (a[d].updater(), a.splice(d, 1));
                    }
                    e = s;
                };
            };
        },
        38311: r => {
            var a = {};
            r.exports = function(r, c) {
                var n = (function(r) {
                    if (void 0 === a[r]) {
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
                        a[r] = c;
                    }
                    return a[r];
                })(r);
                if (!n)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                n.appendChild(c);
            };
        },
        38060: r => {
            r.exports = function(r) {
                var a = document.createElement('style');
                return (
                    r.setAttributes(a, r.attributes), r.insert(a, r.options), a
                );
            };
        },
        58192: (r, a, c) => {
            r.exports = function(r) {
                var a = c.nc;
                a && r.setAttribute('nonce', a);
            };
        },
        95760: r => {
            r.exports = function(r) {
                var a = r.insertStyleElement(r);
                return {
                    update: function(c) {
                        !(function(r, a, c) {
                            var n = '';
                            c.supports &&
                                (n += '@supports ('.concat(c.supports, ') {')),
                                c.media &&
                                    (n += '@media '.concat(c.media, ' {'));
                            var o = void 0 !== c.layer;
                            o &&
                                (n += '@layer'.concat(
                                    c.layer.length > 0
                                        ? ' '.concat(c.layer)
                                        : '',
                                    ' {'
                                )),
                                (n += c.css),
                                o && (n += '}'),
                                c.media && (n += '}'),
                                c.supports && (n += '}');
                            var e = c.sourceMap;
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
                                a.styleTagTransform(n, r, a.options);
                        })(a, r, c);
                    },
                    remove: function() {
                        !(function(r) {
                            if (null === r.parentNode) return !1;
                            r.parentNode.removeChild(r);
                        })(a);
                    },
                };
            };
        },
        54865: r => {
            r.exports = function(r, a) {
                if (a.styleSheet) a.styleSheet.cssText = r;
                else {
                    for (; a.firstChild; ) a.removeChild(a.firstChild);
                    a.appendChild(document.createTextNode(r));
                }
            };
        },
    },
]);
//# sourceMappingURL=5213.3e1a360.js.map
