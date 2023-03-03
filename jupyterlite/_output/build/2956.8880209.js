'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [2956],
    {
        21209: (n, r, o) => {
            o.d(r, { Z: () => a });
            var e = o(34663),
                t = o.n(e),
                i = o(7638),
                c = o.n(i)()(t());
            c.push([
                n.id,
                '/* Based on the theme at http://bonsaiden.github.com/JavaScript-Garden */\n\n/*\x3c!--activeline--\x3e*/\n.cm-s-midnight .CodeMirror-activeline-background { background: #253540; }\n\n.cm-s-midnight.CodeMirror {\n    background: #0F192A;\n    color: #D1EDFF;\n}\n\n.cm-s-midnight div.CodeMirror-selected { background: #314D67; }\n.cm-s-midnight .CodeMirror-line::selection, .cm-s-midnight .CodeMirror-line > span::selection, .cm-s-midnight .CodeMirror-line > span > span::selection { background: rgba(49, 77, 103, .99); }\n.cm-s-midnight .CodeMirror-line::-moz-selection, .cm-s-midnight .CodeMirror-line > span::-moz-selection, .cm-s-midnight .CodeMirror-line > span > span::-moz-selection { background: rgba(49, 77, 103, .99); }\n.cm-s-midnight .CodeMirror-gutters { background: #0F192A; border-right: 1px solid; }\n.cm-s-midnight .CodeMirror-guttermarker { color: white; }\n.cm-s-midnight .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-midnight .CodeMirror-linenumber { color: #D0D0D0; }\n.cm-s-midnight .CodeMirror-cursor { border-left: 1px solid #F8F8F0; }\n\n.cm-s-midnight span.cm-comment { color: #428BDD; }\n.cm-s-midnight span.cm-atom { color: #AE81FF; }\n.cm-s-midnight span.cm-number { color: #D1EDFF; }\n\n.cm-s-midnight span.cm-property, .cm-s-midnight span.cm-attribute { color: #A6E22E; }\n.cm-s-midnight span.cm-keyword { color: #E83737; }\n.cm-s-midnight span.cm-string { color: #1DC116; }\n\n.cm-s-midnight span.cm-variable { color: #FFAA3E; }\n.cm-s-midnight span.cm-variable-2 { color: #FFAA3E; }\n.cm-s-midnight span.cm-def { color: #4DD; }\n.cm-s-midnight span.cm-bracket { color: #D1EDFF; }\n.cm-s-midnight span.cm-tag { color: #449; }\n.cm-s-midnight span.cm-link { color: #AE81FF; }\n.cm-s-midnight span.cm-error { background: #F92672; color: #F8F8F0; }\n\n.cm-s-midnight .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/midnight.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA,wEAAwE;;AAExE,oBAAoB;AACpB,mDAAmD,mBAAmB,EAAE;;AAExE;IACI,mBAAmB;IACnB,cAAc;AAClB;;AAEA,yCAAyC,mBAAmB,EAAE;AAC9D,0JAA0J,kCAAkC,EAAE;AAC9L,yKAAyK,kCAAkC,EAAE;AAC7M,qCAAqC,mBAAmB,EAAE,uBAAuB,EAAE;AACnF,0CAA0C,YAAY,EAAE;AACxD,iDAAiD,cAAc,EAAE;AACjE,wCAAwC,cAAc,EAAE;AACxD,oCAAoC,8BAA8B,EAAE;;AAEpE,iCAAiC,cAAc,EAAE;AACjD,8BAA8B,cAAc,EAAE;AAC9C,gCAAgC,cAAc,EAAE;;AAEhD,oEAAoE,cAAc,EAAE;AACpF,iCAAiC,cAAc,EAAE;AACjD,gCAAgC,cAAc,EAAE;;AAEhD,kCAAkC,cAAc,EAAE;AAClD,oCAAoC,cAAc,EAAE;AACpD,6BAA6B,WAAW,EAAE;AAC1C,iCAAiC,cAAc,EAAE;AACjD,6BAA6B,WAAW,EAAE;AAC1C,8BAA8B,cAAc,EAAE;AAC9C,+BAA+B,mBAAmB,EAAE,cAAc,EAAE;;AAEpE;EACE,0BAA0B;EAC1B,uBAAuB;AACzB',
                    sourcesContent: [
                        '/* Based on the theme at http://bonsaiden.github.com/JavaScript-Garden */\n\n/*\x3c!--activeline--\x3e*/\n.cm-s-midnight .CodeMirror-activeline-background { background: #253540; }\n\n.cm-s-midnight.CodeMirror {\n    background: #0F192A;\n    color: #D1EDFF;\n}\n\n.cm-s-midnight div.CodeMirror-selected { background: #314D67; }\n.cm-s-midnight .CodeMirror-line::selection, .cm-s-midnight .CodeMirror-line > span::selection, .cm-s-midnight .CodeMirror-line > span > span::selection { background: rgba(49, 77, 103, .99); }\n.cm-s-midnight .CodeMirror-line::-moz-selection, .cm-s-midnight .CodeMirror-line > span::-moz-selection, .cm-s-midnight .CodeMirror-line > span > span::-moz-selection { background: rgba(49, 77, 103, .99); }\n.cm-s-midnight .CodeMirror-gutters { background: #0F192A; border-right: 1px solid; }\n.cm-s-midnight .CodeMirror-guttermarker { color: white; }\n.cm-s-midnight .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-midnight .CodeMirror-linenumber { color: #D0D0D0; }\n.cm-s-midnight .CodeMirror-cursor { border-left: 1px solid #F8F8F0; }\n\n.cm-s-midnight span.cm-comment { color: #428BDD; }\n.cm-s-midnight span.cm-atom { color: #AE81FF; }\n.cm-s-midnight span.cm-number { color: #D1EDFF; }\n\n.cm-s-midnight span.cm-property, .cm-s-midnight span.cm-attribute { color: #A6E22E; }\n.cm-s-midnight span.cm-keyword { color: #E83737; }\n.cm-s-midnight span.cm-string { color: #1DC116; }\n\n.cm-s-midnight span.cm-variable { color: #FFAA3E; }\n.cm-s-midnight span.cm-variable-2 { color: #FFAA3E; }\n.cm-s-midnight span.cm-def { color: #4DD; }\n.cm-s-midnight span.cm-bracket { color: #D1EDFF; }\n.cm-s-midnight span.cm-tag { color: #449; }\n.cm-s-midnight span.cm-link { color: #AE81FF; }\n.cm-s-midnight span.cm-error { background: #F92672; color: #F8F8F0; }\n\n.cm-s-midnight .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const a = c;
        },
        7638: n => {
            n.exports = function(n) {
                var r = [];
                return (
                    (r.toString = function() {
                        return this.map(function(r) {
                            var o = '',
                                e = void 0 !== r[5];
                            return (
                                r[4] &&
                                    (o += '@supports ('.concat(r[4], ') {')),
                                r[2] && (o += '@media '.concat(r[2], ' {')),
                                e &&
                                    (o += '@layer'.concat(
                                        r[5].length > 0 ? ' '.concat(r[5]) : '',
                                        ' {'
                                    )),
                                (o += n(r)),
                                e && (o += '}'),
                                r[2] && (o += '}'),
                                r[4] && (o += '}'),
                                o
                            );
                        }).join('');
                    }),
                    (r.i = function(n, o, e, t, i) {
                        'string' == typeof n && (n = [[null, n, void 0]]);
                        var c = {};
                        if (e)
                            for (var a = 0; a < this.length; a++) {
                                var s = this[a][0];
                                null != s && (c[s] = !0);
                            }
                        for (var A = 0; A < n.length; A++) {
                            var m = [].concat(n[A]);
                            (e && c[m[0]]) ||
                                (void 0 !== i &&
                                    (void 0 === m[5] ||
                                        (m[1] = '@layer'
                                            .concat(
                                                m[5].length > 0
                                                    ? ' '.concat(m[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(m[1], '}')),
                                    (m[5] = i)),
                                o &&
                                    (m[2]
                                        ? ((m[1] = '@media '
                                              .concat(m[2], ' {')
                                              .concat(m[1], '}')),
                                          (m[2] = o))
                                        : (m[2] = o)),
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
                    o = n[3];
                if (!o) return r;
                if ('function' == typeof btoa) {
                    var e = btoa(
                            unescape(encodeURIComponent(JSON.stringify(o)))
                        ),
                        t = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            e
                        ),
                        i = '/*# '.concat(t, ' */'),
                        c = o.sources.map(function(n) {
                            return '/*# sourceURL='
                                .concat(o.sourceRoot || '')
                                .concat(n, ' */');
                        });
                    return [r]
                        .concat(c)
                        .concat([i])
                        .join('\n');
                }
                return [r].join('\n');
            };
        },
        92956: (n, r, o) => {
            o.r(r), o.d(r, { default: () => C });
            var e = o(1892),
                t = o.n(e),
                i = o(95760),
                c = o.n(i),
                a = o(38311),
                s = o.n(a),
                A = o(58192),
                m = o.n(A),
                d = o(38060),
                l = o.n(d),
                u = o(54865),
                p = o.n(u),
                g = o(21209),
                h = {};
            (h.styleTagTransform = p()),
                (h.setAttributes = m()),
                (h.insert = s().bind(null, 'head')),
                (h.domAPI = c()),
                (h.insertStyleElement = l()),
                t()(g.Z, h);
            const C = g.Z && g.Z.locals ? g.Z.locals : void 0;
        },
        1892: n => {
            var r = [];
            function o(n) {
                for (var o = -1, e = 0; e < r.length; e++)
                    if (r[e].identifier === n) {
                        o = e;
                        break;
                    }
                return o;
            }
            function e(n, e) {
                for (var i = {}, c = [], a = 0; a < n.length; a++) {
                    var s = n[a],
                        A = e.base ? s[0] + e.base : s[0],
                        m = i[A] || 0,
                        d = ''.concat(A, ' ').concat(m);
                    i[A] = m + 1;
                    var l = o(d),
                        u = {
                            css: s[1],
                            media: s[2],
                            sourceMap: s[3],
                            supports: s[4],
                            layer: s[5],
                        };
                    if (-1 !== l) r[l].references++, r[l].updater(u);
                    else {
                        var p = t(u, e);
                        (e.byIndex = a),
                            r.splice(a, 0, {
                                identifier: d,
                                updater: p,
                                references: 1,
                            });
                    }
                    c.push(d);
                }
                return c;
            }
            function t(n, r) {
                var o = r.domAPI(r);
                return (
                    o.update(n),
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
                            o.update((n = r));
                        } else o.remove();
                    }
                );
            }
            n.exports = function(n, t) {
                var i = e((n = n || []), (t = t || {}));
                return function(n) {
                    n = n || [];
                    for (var c = 0; c < i.length; c++) {
                        var a = o(i[c]);
                        r[a].references--;
                    }
                    for (var s = e(n, t), A = 0; A < i.length; A++) {
                        var m = o(i[A]);
                        0 === r[m].references &&
                            (r[m].updater(), r.splice(m, 1));
                    }
                    i = s;
                };
            };
        },
        38311: n => {
            var r = {};
            n.exports = function(n, o) {
                var e = (function(n) {
                    if (void 0 === r[n]) {
                        var o = document.querySelector(n);
                        if (
                            window.HTMLIFrameElement &&
                            o instanceof window.HTMLIFrameElement
                        )
                            try {
                                o = o.contentDocument.head;
                            } catch (n) {
                                o = null;
                            }
                        r[n] = o;
                    }
                    return r[n];
                })(n);
                if (!e)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                e.appendChild(o);
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
        58192: (n, r, o) => {
            n.exports = function(n) {
                var r = o.nc;
                r && n.setAttribute('nonce', r);
            };
        },
        95760: n => {
            n.exports = function(n) {
                var r = n.insertStyleElement(n);
                return {
                    update: function(o) {
                        !(function(n, r, o) {
                            var e = '';
                            o.supports &&
                                (e += '@supports ('.concat(o.supports, ') {')),
                                o.media &&
                                    (e += '@media '.concat(o.media, ' {'));
                            var t = void 0 !== o.layer;
                            t &&
                                (e += '@layer'.concat(
                                    o.layer.length > 0
                                        ? ' '.concat(o.layer)
                                        : '',
                                    ' {'
                                )),
                                (e += o.css),
                                t && (e += '}'),
                                o.media && (e += '}'),
                                o.supports && (e += '}');
                            var i = o.sourceMap;
                            i &&
                                'undefined' != typeof btoa &&
                                (e += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(i)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                r.styleTagTransform(e, n, r.options);
                        })(r, n, o);
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
//# sourceMappingURL=2956.8880209.js.map
