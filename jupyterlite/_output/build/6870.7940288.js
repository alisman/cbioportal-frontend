'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [6870],
    {
        78027: (r, o, c) => {
            c.d(o, { Z: () => t });
            var n = c(34663),
                e = c.n(n),
                a = c(7638),
                i = c.n(a)()(e());
            i.push([
                r.id,
                '/*\n  Name:       lucario\n  Author:     Raphael Amorim\n\n  Original Lucario color scheme (https://github.com/raphamorim/lucario)\n*/\n\n.cm-s-lucario.CodeMirror, .cm-s-lucario .CodeMirror-gutters {\n  background-color: #2b3e50 !important;\n  color: #f8f8f2 !important;\n  border: none;\n}\n.cm-s-lucario .CodeMirror-gutters { color: #2b3e50; }\n.cm-s-lucario .CodeMirror-cursor { border-left: solid thin #E6C845; }\n.cm-s-lucario .CodeMirror-linenumber { color: #f8f8f2; }\n.cm-s-lucario .CodeMirror-selected { background: #243443; }\n.cm-s-lucario .CodeMirror-line::selection, .cm-s-lucario .CodeMirror-line > span::selection, .cm-s-lucario .CodeMirror-line > span > span::selection { background: #243443; }\n.cm-s-lucario .CodeMirror-line::-moz-selection, .cm-s-lucario .CodeMirror-line > span::-moz-selection, .cm-s-lucario .CodeMirror-line > span > span::-moz-selection { background: #243443; }\n.cm-s-lucario span.cm-comment { color: #5c98cd; }\n.cm-s-lucario span.cm-string, .cm-s-lucario span.cm-string-2 { color: #E6DB74; }\n.cm-s-lucario span.cm-number { color: #ca94ff; }\n.cm-s-lucario span.cm-variable { color: #f8f8f2; }\n.cm-s-lucario span.cm-variable-2 { color: #f8f8f2; }\n.cm-s-lucario span.cm-def { color: #72C05D; }\n.cm-s-lucario span.cm-operator { color: #66D9EF; }\n.cm-s-lucario span.cm-keyword { color: #ff6541; }\n.cm-s-lucario span.cm-atom { color: #bd93f9; }\n.cm-s-lucario span.cm-meta { color: #f8f8f2; }\n.cm-s-lucario span.cm-tag { color: #ff6541; }\n.cm-s-lucario span.cm-attribute { color: #66D9EF; }\n.cm-s-lucario span.cm-qualifier { color: #72C05D; }\n.cm-s-lucario span.cm-property { color: #f8f8f2; }\n.cm-s-lucario span.cm-builtin { color: #72C05D; }\n.cm-s-lucario span.cm-variable-3, .cm-s-lucario span.cm-type { color: #ffb86c; }\n\n.cm-s-lucario .CodeMirror-activeline-background { background: #243443; }\n.cm-s-lucario .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/lucario.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;;;CAKC;;AAED;EACE,oCAAoC;EACpC,yBAAyB;EACzB,YAAY;AACd;AACA,oCAAoC,cAAc,EAAE;AACpD,mCAAmC,+BAA+B,EAAE;AACpE,uCAAuC,cAAc,EAAE;AACvD,qCAAqC,mBAAmB,EAAE;AAC1D,uJAAuJ,mBAAmB,EAAE;AAC5K,sKAAsK,mBAAmB,EAAE;AAC3L,gCAAgC,cAAc,EAAE;AAChD,+DAA+D,cAAc,EAAE;AAC/E,+BAA+B,cAAc,EAAE;AAC/C,iCAAiC,cAAc,EAAE;AACjD,mCAAmC,cAAc,EAAE;AACnD,4BAA4B,cAAc,EAAE;AAC5C,iCAAiC,cAAc,EAAE;AACjD,gCAAgC,cAAc,EAAE;AAChD,6BAA6B,cAAc,EAAE;AAC7C,6BAA6B,cAAc,EAAE;AAC7C,4BAA4B,cAAc,EAAE;AAC5C,kCAAkC,cAAc,EAAE;AAClD,kCAAkC,cAAc,EAAE;AAClD,iCAAiC,cAAc,EAAE;AACjD,gCAAgC,cAAc,EAAE;AAChD,+DAA+D,cAAc,EAAE;;AAE/E,kDAAkD,mBAAmB,EAAE;AACvE,4CAA4C,0BAA0B,EAAE,uBAAuB,EAAE',
                    sourcesContent: [
                        '/*\n  Name:       lucario\n  Author:     Raphael Amorim\n\n  Original Lucario color scheme (https://github.com/raphamorim/lucario)\n*/\n\n.cm-s-lucario.CodeMirror, .cm-s-lucario .CodeMirror-gutters {\n  background-color: #2b3e50 !important;\n  color: #f8f8f2 !important;\n  border: none;\n}\n.cm-s-lucario .CodeMirror-gutters { color: #2b3e50; }\n.cm-s-lucario .CodeMirror-cursor { border-left: solid thin #E6C845; }\n.cm-s-lucario .CodeMirror-linenumber { color: #f8f8f2; }\n.cm-s-lucario .CodeMirror-selected { background: #243443; }\n.cm-s-lucario .CodeMirror-line::selection, .cm-s-lucario .CodeMirror-line > span::selection, .cm-s-lucario .CodeMirror-line > span > span::selection { background: #243443; }\n.cm-s-lucario .CodeMirror-line::-moz-selection, .cm-s-lucario .CodeMirror-line > span::-moz-selection, .cm-s-lucario .CodeMirror-line > span > span::-moz-selection { background: #243443; }\n.cm-s-lucario span.cm-comment { color: #5c98cd; }\n.cm-s-lucario span.cm-string, .cm-s-lucario span.cm-string-2 { color: #E6DB74; }\n.cm-s-lucario span.cm-number { color: #ca94ff; }\n.cm-s-lucario span.cm-variable { color: #f8f8f2; }\n.cm-s-lucario span.cm-variable-2 { color: #f8f8f2; }\n.cm-s-lucario span.cm-def { color: #72C05D; }\n.cm-s-lucario span.cm-operator { color: #66D9EF; }\n.cm-s-lucario span.cm-keyword { color: #ff6541; }\n.cm-s-lucario span.cm-atom { color: #bd93f9; }\n.cm-s-lucario span.cm-meta { color: #f8f8f2; }\n.cm-s-lucario span.cm-tag { color: #ff6541; }\n.cm-s-lucario span.cm-attribute { color: #66D9EF; }\n.cm-s-lucario span.cm-qualifier { color: #72C05D; }\n.cm-s-lucario span.cm-property { color: #f8f8f2; }\n.cm-s-lucario span.cm-builtin { color: #72C05D; }\n.cm-s-lucario span.cm-variable-3, .cm-s-lucario span.cm-type { color: #ffb86c; }\n\n.cm-s-lucario .CodeMirror-activeline-background { background: #243443; }\n.cm-s-lucario .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const t = i;
        },
        7638: r => {
            r.exports = function(r) {
                var o = [];
                return (
                    (o.toString = function() {
                        return this.map(function(o) {
                            var c = '',
                                n = void 0 !== o[5];
                            return (
                                o[4] &&
                                    (c += '@supports ('.concat(o[4], ') {')),
                                o[2] && (c += '@media '.concat(o[2], ' {')),
                                n &&
                                    (c += '@layer'.concat(
                                        o[5].length > 0 ? ' '.concat(o[5]) : '',
                                        ' {'
                                    )),
                                (c += r(o)),
                                n && (c += '}'),
                                o[2] && (c += '}'),
                                o[4] && (c += '}'),
                                c
                            );
                        }).join('');
                    }),
                    (o.i = function(r, c, n, e, a) {
                        'string' == typeof r && (r = [[null, r, void 0]]);
                        var i = {};
                        if (n)
                            for (var t = 0; t < this.length; t++) {
                                var s = this[t][0];
                                null != s && (i[s] = !0);
                            }
                        for (var l = 0; l < r.length; l++) {
                            var A = [].concat(r[l]);
                            (n && i[A[0]]) ||
                                (void 0 !== a &&
                                    (void 0 === A[5] ||
                                        (A[1] = '@layer'
                                            .concat(
                                                A[5].length > 0
                                                    ? ' '.concat(A[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(A[1], '}')),
                                    (A[5] = a)),
                                c &&
                                    (A[2]
                                        ? ((A[1] = '@media '
                                              .concat(A[2], ' {')
                                              .concat(A[1], '}')),
                                          (A[2] = c))
                                        : (A[2] = c)),
                                e &&
                                    (A[4]
                                        ? ((A[1] = '@supports ('
                                              .concat(A[4], ') {')
                                              .concat(A[1], '}')),
                                          (A[4] = e))
                                        : (A[4] = ''.concat(e))),
                                o.push(A));
                        }
                    }),
                    o
                );
            };
        },
        34663: r => {
            r.exports = function(r) {
                var o = r[1],
                    c = r[3];
                if (!c) return o;
                if ('function' == typeof btoa) {
                    var n = btoa(
                            unescape(encodeURIComponent(JSON.stringify(c)))
                        ),
                        e = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            n
                        ),
                        a = '/*# '.concat(e, ' */'),
                        i = c.sources.map(function(r) {
                            return '/*# sourceURL='
                                .concat(c.sourceRoot || '')
                                .concat(r, ' */');
                        });
                    return [o]
                        .concat(i)
                        .concat([a])
                        .join('\n');
                }
                return [o].join('\n');
            };
        },
        36870: (r, o, c) => {
            c.r(o), c.d(o, { default: () => E });
            var n = c(1892),
                e = c.n(n),
                a = c(95760),
                i = c.n(a),
                t = c(38311),
                s = c.n(t),
                l = c(58192),
                A = c.n(l),
                u = c(38060),
                m = c.n(u),
                p = c(54865),
                f = c.n(p),
                d = c(78027),
                C = {};
            (C.styleTagTransform = f()),
                (C.setAttributes = A()),
                (C.insert = s().bind(null, 'head')),
                (C.domAPI = i()),
                (C.insertStyleElement = m()),
                e()(d.Z, C);
            const E = d.Z && d.Z.locals ? d.Z.locals : void 0;
        },
        1892: r => {
            var o = [];
            function c(r) {
                for (var c = -1, n = 0; n < o.length; n++)
                    if (o[n].identifier === r) {
                        c = n;
                        break;
                    }
                return c;
            }
            function n(r, n) {
                for (var a = {}, i = [], t = 0; t < r.length; t++) {
                    var s = r[t],
                        l = n.base ? s[0] + n.base : s[0],
                        A = a[l] || 0,
                        u = ''.concat(l, ' ').concat(A);
                    a[l] = A + 1;
                    var m = c(u),
                        p = {
                            css: s[1],
                            media: s[2],
                            sourceMap: s[3],
                            supports: s[4],
                            layer: s[5],
                        };
                    if (-1 !== m) o[m].references++, o[m].updater(p);
                    else {
                        var f = e(p, n);
                        (n.byIndex = t),
                            o.splice(t, 0, {
                                identifier: u,
                                updater: f,
                                references: 1,
                            });
                    }
                    i.push(u);
                }
                return i;
            }
            function e(r, o) {
                var c = o.domAPI(o);
                return (
                    c.update(r),
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
                            c.update((r = o));
                        } else c.remove();
                    }
                );
            }
            r.exports = function(r, e) {
                var a = n((r = r || []), (e = e || {}));
                return function(r) {
                    r = r || [];
                    for (var i = 0; i < a.length; i++) {
                        var t = c(a[i]);
                        o[t].references--;
                    }
                    for (var s = n(r, e), l = 0; l < a.length; l++) {
                        var A = c(a[l]);
                        0 === o[A].references &&
                            (o[A].updater(), o.splice(A, 1));
                    }
                    a = s;
                };
            };
        },
        38311: r => {
            var o = {};
            r.exports = function(r, c) {
                var n = (function(r) {
                    if (void 0 === o[r]) {
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
                        o[r] = c;
                    }
                    return o[r];
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
                var o = document.createElement('style');
                return (
                    r.setAttributes(o, r.attributes), r.insert(o, r.options), o
                );
            };
        },
        58192: (r, o, c) => {
            r.exports = function(r) {
                var o = c.nc;
                o && r.setAttribute('nonce', o);
            };
        },
        95760: r => {
            r.exports = function(r) {
                var o = r.insertStyleElement(r);
                return {
                    update: function(c) {
                        !(function(r, o, c) {
                            var n = '';
                            c.supports &&
                                (n += '@supports ('.concat(c.supports, ') {')),
                                c.media &&
                                    (n += '@media '.concat(c.media, ' {'));
                            var e = void 0 !== c.layer;
                            e &&
                                (n += '@layer'.concat(
                                    c.layer.length > 0
                                        ? ' '.concat(c.layer)
                                        : '',
                                    ' {'
                                )),
                                (n += c.css),
                                e && (n += '}'),
                                c.media && (n += '}'),
                                c.supports && (n += '}');
                            var a = c.sourceMap;
                            a &&
                                'undefined' != typeof btoa &&
                                (n += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(a)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                o.styleTagTransform(n, r, o.options);
                        })(o, r, c);
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
//# sourceMappingURL=6870.7940288.js.map
