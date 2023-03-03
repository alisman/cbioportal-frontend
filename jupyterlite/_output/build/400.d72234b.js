'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [400],
    {
        1684: (r, o, n) => {
            n.d(o, { Z: () => s });
            var e = n(34663),
                a = n.n(e),
                t = n(7638),
                c = n.n(t)()(a());
            c.push([
                r.id,
                '/*\nCopyright (C) 2011 by MarkLogic Corporation\nAuthor: Mike Brevoort <mike@brevoort.com>\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n*/\n.cm-s-xq-dark.CodeMirror { background: #0a001f; color: #f8f8f8; }\n.cm-s-xq-dark div.CodeMirror-selected { background: #27007A; }\n.cm-s-xq-dark .CodeMirror-line::selection, .cm-s-xq-dark .CodeMirror-line > span::selection, .cm-s-xq-dark .CodeMirror-line > span > span::selection { background: rgba(39, 0, 122, 0.99); }\n.cm-s-xq-dark .CodeMirror-line::-moz-selection, .cm-s-xq-dark .CodeMirror-line > span::-moz-selection, .cm-s-xq-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(39, 0, 122, 0.99); }\n.cm-s-xq-dark .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }\n.cm-s-xq-dark .CodeMirror-guttermarker { color: #FFBD40; }\n.cm-s-xq-dark .CodeMirror-guttermarker-subtle { color: #f8f8f8; }\n.cm-s-xq-dark .CodeMirror-linenumber { color: #f8f8f8; }\n.cm-s-xq-dark .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-xq-dark span.cm-keyword { color: #FFBD40; }\n.cm-s-xq-dark span.cm-atom { color: #6C8CD5; }\n.cm-s-xq-dark span.cm-number { color: #164; }\n.cm-s-xq-dark span.cm-def { color: #FFF; text-decoration:underline; }\n.cm-s-xq-dark span.cm-variable { color: #FFF; }\n.cm-s-xq-dark span.cm-variable-2 { color: #EEE; }\n.cm-s-xq-dark span.cm-variable-3, .cm-s-xq-dark span.cm-type { color: #DDD; }\n.cm-s-xq-dark span.cm-property {}\n.cm-s-xq-dark span.cm-operator {}\n.cm-s-xq-dark span.cm-comment { color: gray; }\n.cm-s-xq-dark span.cm-string { color: #9FEE00; }\n.cm-s-xq-dark span.cm-meta { color: yellow; }\n.cm-s-xq-dark span.cm-qualifier { color: #FFF700; }\n.cm-s-xq-dark span.cm-builtin { color: #30a; }\n.cm-s-xq-dark span.cm-bracket { color: #cc7; }\n.cm-s-xq-dark span.cm-tag { color: #FFBD40; }\n.cm-s-xq-dark span.cm-attribute { color: #FFF700; }\n.cm-s-xq-dark span.cm-error { color: #f00; }\n\n.cm-s-xq-dark .CodeMirror-activeline-background { background: #27282E; }\n.cm-s-xq-dark .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/xq-dark.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;;;;;;;;;;;;;;;;;;;CAqBC;AACD,2BAA2B,mBAAmB,EAAE,cAAc,EAAE;AAChE,wCAAwC,mBAAmB,EAAE;AAC7D,uJAAuJ,kCAAkC,EAAE;AAC3L,sKAAsK,kCAAkC,EAAE;AAC1M,oCAAoC,mBAAmB,EAAE,4BAA4B,EAAE;AACvF,yCAAyC,cAAc,EAAE;AACzD,gDAAgD,cAAc,EAAE;AAChE,uCAAuC,cAAc,EAAE;AACvD,mCAAmC,4BAA4B,EAAE;;AAEjE,gCAAgC,cAAc,EAAE;AAChD,6BAA6B,cAAc,EAAE;AAC7C,+BAA+B,WAAW,EAAE;AAC5C,4BAA4B,WAAW,EAAE,yBAAyB,EAAE;AACpE,iCAAiC,WAAW,EAAE;AAC9C,mCAAmC,WAAW,EAAE;AAChD,+DAA+D,WAAW,EAAE;AAC5E,gCAAgC;AAChC,gCAAgC;AAChC,gCAAgC,WAAW,EAAE;AAC7C,+BAA+B,cAAc,EAAE;AAC/C,6BAA6B,aAAa,EAAE;AAC5C,kCAAkC,cAAc,EAAE;AAClD,gCAAgC,WAAW,EAAE;AAC7C,gCAAgC,WAAW,EAAE;AAC7C,4BAA4B,cAAc,EAAE;AAC5C,kCAAkC,cAAc,EAAE;AAClD,8BAA8B,WAAW,EAAE;;AAE3C,kDAAkD,mBAAmB,EAAE;AACvE,4CAA4C,sBAAsB,EAAE,sBAAsB,EAAE',
                    sourcesContent: [
                        '/*\nCopyright (C) 2011 by MarkLogic Corporation\nAuthor: Mike Brevoort <mike@brevoort.com>\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n*/\n.cm-s-xq-dark.CodeMirror { background: #0a001f; color: #f8f8f8; }\n.cm-s-xq-dark div.CodeMirror-selected { background: #27007A; }\n.cm-s-xq-dark .CodeMirror-line::selection, .cm-s-xq-dark .CodeMirror-line > span::selection, .cm-s-xq-dark .CodeMirror-line > span > span::selection { background: rgba(39, 0, 122, 0.99); }\n.cm-s-xq-dark .CodeMirror-line::-moz-selection, .cm-s-xq-dark .CodeMirror-line > span::-moz-selection, .cm-s-xq-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(39, 0, 122, 0.99); }\n.cm-s-xq-dark .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }\n.cm-s-xq-dark .CodeMirror-guttermarker { color: #FFBD40; }\n.cm-s-xq-dark .CodeMirror-guttermarker-subtle { color: #f8f8f8; }\n.cm-s-xq-dark .CodeMirror-linenumber { color: #f8f8f8; }\n.cm-s-xq-dark .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-xq-dark span.cm-keyword { color: #FFBD40; }\n.cm-s-xq-dark span.cm-atom { color: #6C8CD5; }\n.cm-s-xq-dark span.cm-number { color: #164; }\n.cm-s-xq-dark span.cm-def { color: #FFF; text-decoration:underline; }\n.cm-s-xq-dark span.cm-variable { color: #FFF; }\n.cm-s-xq-dark span.cm-variable-2 { color: #EEE; }\n.cm-s-xq-dark span.cm-variable-3, .cm-s-xq-dark span.cm-type { color: #DDD; }\n.cm-s-xq-dark span.cm-property {}\n.cm-s-xq-dark span.cm-operator {}\n.cm-s-xq-dark span.cm-comment { color: gray; }\n.cm-s-xq-dark span.cm-string { color: #9FEE00; }\n.cm-s-xq-dark span.cm-meta { color: yellow; }\n.cm-s-xq-dark span.cm-qualifier { color: #FFF700; }\n.cm-s-xq-dark span.cm-builtin { color: #30a; }\n.cm-s-xq-dark span.cm-bracket { color: #cc7; }\n.cm-s-xq-dark span.cm-tag { color: #FFBD40; }\n.cm-s-xq-dark span.cm-attribute { color: #FFF700; }\n.cm-s-xq-dark span.cm-error { color: #f00; }\n\n.cm-s-xq-dark .CodeMirror-activeline-background { background: #27282E; }\n.cm-s-xq-dark .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const s = c;
        },
        7638: r => {
            r.exports = function(r) {
                var o = [];
                return (
                    (o.toString = function() {
                        return this.map(function(o) {
                            var n = '',
                                e = void 0 !== o[5];
                            return (
                                o[4] &&
                                    (n += '@supports ('.concat(o[4], ') {')),
                                o[2] && (n += '@media '.concat(o[2], ' {')),
                                e &&
                                    (n += '@layer'.concat(
                                        o[5].length > 0 ? ' '.concat(o[5]) : '',
                                        ' {'
                                    )),
                                (n += r(o)),
                                e && (n += '}'),
                                o[2] && (n += '}'),
                                o[4] && (n += '}'),
                                n
                            );
                        }).join('');
                    }),
                    (o.i = function(r, n, e, a, t) {
                        'string' == typeof r && (r = [[null, r, void 0]]);
                        var c = {};
                        if (e)
                            for (var s = 0; s < this.length; s++) {
                                var i = this[s][0];
                                null != i && (c[i] = !0);
                            }
                        for (var A = 0; A < r.length; A++) {
                            var d = [].concat(r[A]);
                            (e && c[d[0]]) ||
                                (void 0 !== t &&
                                    (void 0 === d[5] ||
                                        (d[1] = '@layer'
                                            .concat(
                                                d[5].length > 0
                                                    ? ' '.concat(d[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(d[1], '}')),
                                    (d[5] = t)),
                                n &&
                                    (d[2]
                                        ? ((d[1] = '@media '
                                              .concat(d[2], ' {')
                                              .concat(d[1], '}')),
                                          (d[2] = n))
                                        : (d[2] = n)),
                                a &&
                                    (d[4]
                                        ? ((d[1] = '@supports ('
                                              .concat(d[4], ') {')
                                              .concat(d[1], '}')),
                                          (d[4] = a))
                                        : (d[4] = ''.concat(a))),
                                o.push(d));
                        }
                    }),
                    o
                );
            };
        },
        34663: r => {
            r.exports = function(r) {
                var o = r[1],
                    n = r[3];
                if (!n) return o;
                if ('function' == typeof btoa) {
                    var e = btoa(
                            unescape(encodeURIComponent(JSON.stringify(n)))
                        ),
                        a = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            e
                        ),
                        t = '/*# '.concat(a, ' */'),
                        c = n.sources.map(function(r) {
                            return '/*# sourceURL='
                                .concat(n.sourceRoot || '')
                                .concat(r, ' */');
                        });
                    return [o]
                        .concat(c)
                        .concat([t])
                        .join('\n');
                }
                return [o].join('\n');
            };
        },
        40400: (r, o, n) => {
            n.r(o), n.d(o, { default: () => f });
            var e = n(1892),
                a = n.n(e),
                t = n(95760),
                c = n.n(t),
                s = n(38311),
                i = n.n(s),
                A = n(58192),
                d = n.n(A),
                m = n(38060),
                l = n.n(m),
                p = n(54865),
                u = n.n(p),
                E = n(1684),
                C = {};
            (C.styleTagTransform = u()),
                (C.setAttributes = d()),
                (C.insert = i().bind(null, 'head')),
                (C.domAPI = c()),
                (C.insertStyleElement = l()),
                a()(E.Z, C);
            const f = E.Z && E.Z.locals ? E.Z.locals : void 0;
        },
        1892: r => {
            var o = [];
            function n(r) {
                for (var n = -1, e = 0; e < o.length; e++)
                    if (o[e].identifier === r) {
                        n = e;
                        break;
                    }
                return n;
            }
            function e(r, e) {
                for (var t = {}, c = [], s = 0; s < r.length; s++) {
                    var i = r[s],
                        A = e.base ? i[0] + e.base : i[0],
                        d = t[A] || 0,
                        m = ''.concat(A, ' ').concat(d);
                    t[A] = d + 1;
                    var l = n(m),
                        p = {
                            css: i[1],
                            media: i[2],
                            sourceMap: i[3],
                            supports: i[4],
                            layer: i[5],
                        };
                    if (-1 !== l) o[l].references++, o[l].updater(p);
                    else {
                        var u = a(p, e);
                        (e.byIndex = s),
                            o.splice(s, 0, {
                                identifier: m,
                                updater: u,
                                references: 1,
                            });
                    }
                    c.push(m);
                }
                return c;
            }
            function a(r, o) {
                var n = o.domAPI(o);
                return (
                    n.update(r),
                    function(o) {
                        if (o) {
                            if (
                                o.css === r.css &&
                                o.media === r.media &&
                                o.sourceMap === r.sourceMap &&
                                o.supports === r.supports &&
                                o.layer === r.layer
                            )
                                return;
                            n.update((r = o));
                        } else n.remove();
                    }
                );
            }
            r.exports = function(r, a) {
                var t = e((r = r || []), (a = a || {}));
                return function(r) {
                    r = r || [];
                    for (var c = 0; c < t.length; c++) {
                        var s = n(t[c]);
                        o[s].references--;
                    }
                    for (var i = e(r, a), A = 0; A < t.length; A++) {
                        var d = n(t[A]);
                        0 === o[d].references &&
                            (o[d].updater(), o.splice(d, 1));
                    }
                    t = i;
                };
            };
        },
        38311: r => {
            var o = {};
            r.exports = function(r, n) {
                var e = (function(r) {
                    if (void 0 === o[r]) {
                        var n = document.querySelector(r);
                        if (
                            window.HTMLIFrameElement &&
                            n instanceof window.HTMLIFrameElement
                        )
                            try {
                                n = n.contentDocument.head;
                            } catch (r) {
                                n = null;
                            }
                        o[r] = n;
                    }
                    return o[r];
                })(r);
                if (!e)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                e.appendChild(n);
            };
        },
        38060: r => {
            r.exports = function(r) {
                var o = document.createElement('style');
                return (
                    r.setAttributes(o, r.attributes), r.insert(o, r.options), o
                );
            };
        },
        58192: (r, o, n) => {
            r.exports = function(r) {
                var o = n.nc;
                o && r.setAttribute('nonce', o);
            };
        },
        95760: r => {
            r.exports = function(r) {
                var o = r.insertStyleElement(r);
                return {
                    update: function(n) {
                        !(function(r, o, n) {
                            var e = '';
                            n.supports &&
                                (e += '@supports ('.concat(n.supports, ') {')),
                                n.media &&
                                    (e += '@media '.concat(n.media, ' {'));
                            var a = void 0 !== n.layer;
                            a &&
                                (e += '@layer'.concat(
                                    n.layer.length > 0
                                        ? ' '.concat(n.layer)
                                        : '',
                                    ' {'
                                )),
                                (e += n.css),
                                a && (e += '}'),
                                n.media && (e += '}'),
                                n.supports && (e += '}');
                            var t = n.sourceMap;
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
                                o.styleTagTransform(e, r, o.options);
                        })(o, r, n);
                    },
                    remove: function() {
                        !(function(r) {
                            if (null === r.parentNode) return !1;
                            r.parentNode.removeChild(r);
                        })(o);
                    },
                };
            };
        },
        54865: r => {
            r.exports = function(r, o) {
                if (o.styleSheet) o.styleSheet.cssText = r;
                else {
                    for (; o.firstChild; ) o.removeChild(o.firstChild);
                    o.appendChild(document.createTextNode(r));
                }
            };
        },
    },
]);
//# sourceMappingURL=400.d72234b.js.map
