'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [7808],
    {
        20133: (r, e, s) => {
            s.d(e, { Z: () => A });
            var o = s(34663),
                n = s.n(o),
                c = s(7638),
                a = s.n(c)()(n());
            a.push([
                r.id,
                '/*\nhttp://lesscss.org/ dark theme\nPorted to CodeMirror by Peter Kroon\n*/\n.cm-s-lesser-dark {\n  line-height: 1.3em;\n}\n.cm-s-lesser-dark.CodeMirror { background: #262626; color: #EBEFE7; text-shadow: 0 -1px 1px #262626; }\n.cm-s-lesser-dark div.CodeMirror-selected { background: #45443B; } /* 33322B*/\n.cm-s-lesser-dark .CodeMirror-line::selection, .cm-s-lesser-dark .CodeMirror-line > span::selection, .cm-s-lesser-dark .CodeMirror-line > span > span::selection { background: rgba(69, 68, 59, .99); }\n.cm-s-lesser-dark .CodeMirror-line::-moz-selection, .cm-s-lesser-dark .CodeMirror-line > span::-moz-selection, .cm-s-lesser-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(69, 68, 59, .99); }\n.cm-s-lesser-dark .CodeMirror-cursor { border-left: 1px solid white; }\n.cm-s-lesser-dark pre { padding: 0 8px; }/*editable code holder*/\n\n.cm-s-lesser-dark.CodeMirror span.CodeMirror-matchingbracket { color: #7EFC7E; }/*65FC65*/\n\n.cm-s-lesser-dark .CodeMirror-gutters { background: #262626; border-right:1px solid #aaa; }\n.cm-s-lesser-dark .CodeMirror-guttermarker { color: #599eff; }\n.cm-s-lesser-dark .CodeMirror-guttermarker-subtle { color: #777; }\n.cm-s-lesser-dark .CodeMirror-linenumber { color: #777; }\n\n.cm-s-lesser-dark span.cm-header { color: #a0a; }\n.cm-s-lesser-dark span.cm-quote { color: #090; }\n.cm-s-lesser-dark span.cm-keyword { color: #599eff; }\n.cm-s-lesser-dark span.cm-atom { color: #C2B470; }\n.cm-s-lesser-dark span.cm-number { color: #B35E4D; }\n.cm-s-lesser-dark span.cm-def { color: white; }\n.cm-s-lesser-dark span.cm-variable { color:#D9BF8C; }\n.cm-s-lesser-dark span.cm-variable-2 { color: #669199; }\n.cm-s-lesser-dark span.cm-variable-3, .cm-s-lesser-dark span.cm-type { color: white; }\n.cm-s-lesser-dark span.cm-property { color: #92A75C; }\n.cm-s-lesser-dark span.cm-operator { color: #92A75C; }\n.cm-s-lesser-dark span.cm-comment { color: #666; }\n.cm-s-lesser-dark span.cm-string { color: #BCD279; }\n.cm-s-lesser-dark span.cm-string-2 { color: #f50; }\n.cm-s-lesser-dark span.cm-meta { color: #738C73; }\n.cm-s-lesser-dark span.cm-qualifier { color: #555; }\n.cm-s-lesser-dark span.cm-builtin { color: #ff9e59; }\n.cm-s-lesser-dark span.cm-bracket { color: #EBEFE7; }\n.cm-s-lesser-dark span.cm-tag { color: #669199; }\n.cm-s-lesser-dark span.cm-attribute { color: #81a4d5; }\n.cm-s-lesser-dark span.cm-hr { color: #999; }\n.cm-s-lesser-dark span.cm-link { color: #7070E6; }\n.cm-s-lesser-dark span.cm-error { color: #9d1e15; }\n\n.cm-s-lesser-dark .CodeMirror-activeline-background { background: #3C3A3A; }\n.cm-s-lesser-dark .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/lesser-dark.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;CAGC;AACD;EACE,kBAAkB;AACpB;AACA,+BAA+B,mBAAmB,EAAE,cAAc,EAAE,+BAA+B,EAAE;AACrG,4CAA4C,mBAAmB,EAAE,EAAE,UAAU;AAC7E,mKAAmK,iCAAiC,EAAE;AACtM,kLAAkL,iCAAiC,EAAE;AACrN,uCAAuC,4BAA4B,EAAE;AACrE,wBAAwB,cAAc,EAAE,CAAC,uBAAuB;;AAEhE,+DAA+D,cAAc,EAAE,CAAC,SAAS;;AAEzF,wCAAwC,mBAAmB,EAAE,2BAA2B,EAAE;AAC1F,6CAA6C,cAAc,EAAE;AAC7D,oDAAoD,WAAW,EAAE;AACjE,2CAA2C,WAAW,EAAE;;AAExD,mCAAmC,WAAW,EAAE;AAChD,kCAAkC,WAAW,EAAE;AAC/C,oCAAoC,cAAc,EAAE;AACpD,iCAAiC,cAAc,EAAE;AACjD,mCAAmC,cAAc,EAAE;AACnD,gCAAgC,YAAY,EAAE;AAC9C,qCAAqC,aAAa,EAAE;AACpD,uCAAuC,cAAc,EAAE;AACvD,uEAAuE,YAAY,EAAE;AACrF,qCAAqC,cAAc,EAAE;AACrD,qCAAqC,cAAc,EAAE;AACrD,oCAAoC,WAAW,EAAE;AACjD,mCAAmC,cAAc,EAAE;AACnD,qCAAqC,WAAW,EAAE;AAClD,iCAAiC,cAAc,EAAE;AACjD,sCAAsC,WAAW,EAAE;AACnD,oCAAoC,cAAc,EAAE;AACpD,oCAAoC,cAAc,EAAE;AACpD,gCAAgC,cAAc,EAAE;AAChD,sCAAsC,cAAc,EAAE;AACtD,+BAA+B,WAAW,EAAE;AAC5C,iCAAiC,cAAc,EAAE;AACjD,kCAAkC,cAAc,EAAE;;AAElD,sDAAsD,mBAAmB,EAAE;AAC3E,gDAAgD,sBAAsB,EAAE,sBAAsB,EAAE',
                    sourcesContent: [
                        '/*\nhttp://lesscss.org/ dark theme\nPorted to CodeMirror by Peter Kroon\n*/\n.cm-s-lesser-dark {\n  line-height: 1.3em;\n}\n.cm-s-lesser-dark.CodeMirror { background: #262626; color: #EBEFE7; text-shadow: 0 -1px 1px #262626; }\n.cm-s-lesser-dark div.CodeMirror-selected { background: #45443B; } /* 33322B*/\n.cm-s-lesser-dark .CodeMirror-line::selection, .cm-s-lesser-dark .CodeMirror-line > span::selection, .cm-s-lesser-dark .CodeMirror-line > span > span::selection { background: rgba(69, 68, 59, .99); }\n.cm-s-lesser-dark .CodeMirror-line::-moz-selection, .cm-s-lesser-dark .CodeMirror-line > span::-moz-selection, .cm-s-lesser-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(69, 68, 59, .99); }\n.cm-s-lesser-dark .CodeMirror-cursor { border-left: 1px solid white; }\n.cm-s-lesser-dark pre { padding: 0 8px; }/*editable code holder*/\n\n.cm-s-lesser-dark.CodeMirror span.CodeMirror-matchingbracket { color: #7EFC7E; }/*65FC65*/\n\n.cm-s-lesser-dark .CodeMirror-gutters { background: #262626; border-right:1px solid #aaa; }\n.cm-s-lesser-dark .CodeMirror-guttermarker { color: #599eff; }\n.cm-s-lesser-dark .CodeMirror-guttermarker-subtle { color: #777; }\n.cm-s-lesser-dark .CodeMirror-linenumber { color: #777; }\n\n.cm-s-lesser-dark span.cm-header { color: #a0a; }\n.cm-s-lesser-dark span.cm-quote { color: #090; }\n.cm-s-lesser-dark span.cm-keyword { color: #599eff; }\n.cm-s-lesser-dark span.cm-atom { color: #C2B470; }\n.cm-s-lesser-dark span.cm-number { color: #B35E4D; }\n.cm-s-lesser-dark span.cm-def { color: white; }\n.cm-s-lesser-dark span.cm-variable { color:#D9BF8C; }\n.cm-s-lesser-dark span.cm-variable-2 { color: #669199; }\n.cm-s-lesser-dark span.cm-variable-3, .cm-s-lesser-dark span.cm-type { color: white; }\n.cm-s-lesser-dark span.cm-property { color: #92A75C; }\n.cm-s-lesser-dark span.cm-operator { color: #92A75C; }\n.cm-s-lesser-dark span.cm-comment { color: #666; }\n.cm-s-lesser-dark span.cm-string { color: #BCD279; }\n.cm-s-lesser-dark span.cm-string-2 { color: #f50; }\n.cm-s-lesser-dark span.cm-meta { color: #738C73; }\n.cm-s-lesser-dark span.cm-qualifier { color: #555; }\n.cm-s-lesser-dark span.cm-builtin { color: #ff9e59; }\n.cm-s-lesser-dark span.cm-bracket { color: #EBEFE7; }\n.cm-s-lesser-dark span.cm-tag { color: #669199; }\n.cm-s-lesser-dark span.cm-attribute { color: #81a4d5; }\n.cm-s-lesser-dark span.cm-hr { color: #999; }\n.cm-s-lesser-dark span.cm-link { color: #7070E6; }\n.cm-s-lesser-dark span.cm-error { color: #9d1e15; }\n\n.cm-s-lesser-dark .CodeMirror-activeline-background { background: #3C3A3A; }\n.cm-s-lesser-dark .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const A = a;
        },
        7638: r => {
            r.exports = function(r) {
                var e = [];
                return (
                    (e.toString = function() {
                        return this.map(function(e) {
                            var s = '',
                                o = void 0 !== e[5];
                            return (
                                e[4] &&
                                    (s += '@supports ('.concat(e[4], ') {')),
                                e[2] && (s += '@media '.concat(e[2], ' {')),
                                o &&
                                    (s += '@layer'.concat(
                                        e[5].length > 0 ? ' '.concat(e[5]) : '',
                                        ' {'
                                    )),
                                (s += r(e)),
                                o && (s += '}'),
                                e[2] && (s += '}'),
                                e[4] && (s += '}'),
                                s
                            );
                        }).join('');
                    }),
                    (e.i = function(r, s, o, n, c) {
                        'string' == typeof r && (r = [[null, r, void 0]]);
                        var a = {};
                        if (o)
                            for (var A = 0; A < this.length; A++) {
                                var t = this[A][0];
                                null != t && (a[t] = !0);
                            }
                        for (var l = 0; l < r.length; l++) {
                            var i = [].concat(r[l]);
                            (o && a[i[0]]) ||
                                (void 0 !== c &&
                                    (void 0 === i[5] ||
                                        (i[1] = '@layer'
                                            .concat(
                                                i[5].length > 0
                                                    ? ' '.concat(i[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(i[1], '}')),
                                    (i[5] = c)),
                                s &&
                                    (i[2]
                                        ? ((i[1] = '@media '
                                              .concat(i[2], ' {')
                                              .concat(i[1], '}')),
                                          (i[2] = s))
                                        : (i[2] = s)),
                                n &&
                                    (i[4]
                                        ? ((i[1] = '@supports ('
                                              .concat(i[4], ') {')
                                              .concat(i[1], '}')),
                                          (i[4] = n))
                                        : (i[4] = ''.concat(n))),
                                e.push(i));
                        }
                    }),
                    e
                );
            };
        },
        34663: r => {
            r.exports = function(r) {
                var e = r[1],
                    s = r[3];
                if (!s) return e;
                if ('function' == typeof btoa) {
                    var o = btoa(
                            unescape(encodeURIComponent(JSON.stringify(s)))
                        ),
                        n = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            o
                        ),
                        c = '/*# '.concat(n, ' */'),
                        a = s.sources.map(function(r) {
                            return '/*# sourceURL='
                                .concat(s.sourceRoot || '')
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
        37808: (r, e, s) => {
            s.r(e), s.d(e, { default: () => E });
            var o = s(1892),
                n = s.n(o),
                c = s(95760),
                a = s.n(c),
                A = s(38311),
                t = s.n(A),
                l = s(58192),
                i = s.n(l),
                d = s(38060),
                m = s.n(d),
                p = s(54865),
                C = s.n(p),
                u = s(20133),
                k = {};
            (k.styleTagTransform = C()),
                (k.setAttributes = i()),
                (k.insert = t().bind(null, 'head')),
                (k.domAPI = a()),
                (k.insertStyleElement = m()),
                n()(u.Z, k);
            const E = u.Z && u.Z.locals ? u.Z.locals : void 0;
        },
        1892: r => {
            var e = [];
            function s(r) {
                for (var s = -1, o = 0; o < e.length; o++)
                    if (e[o].identifier === r) {
                        s = o;
                        break;
                    }
                return s;
            }
            function o(r, o) {
                for (var c = {}, a = [], A = 0; A < r.length; A++) {
                    var t = r[A],
                        l = o.base ? t[0] + o.base : t[0],
                        i = c[l] || 0,
                        d = ''.concat(l, ' ').concat(i);
                    c[l] = i + 1;
                    var m = s(d),
                        p = {
                            css: t[1],
                            media: t[2],
                            sourceMap: t[3],
                            supports: t[4],
                            layer: t[5],
                        };
                    if (-1 !== m) e[m].references++, e[m].updater(p);
                    else {
                        var C = n(p, o);
                        (o.byIndex = A),
                            e.splice(A, 0, {
                                identifier: d,
                                updater: C,
                                references: 1,
                            });
                    }
                    a.push(d);
                }
                return a;
            }
            function n(r, e) {
                var s = e.domAPI(e);
                return (
                    s.update(r),
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
                            s.update((r = e));
                        } else s.remove();
                    }
                );
            }
            r.exports = function(r, n) {
                var c = o((r = r || []), (n = n || {}));
                return function(r) {
                    r = r || [];
                    for (var a = 0; a < c.length; a++) {
                        var A = s(c[a]);
                        e[A].references--;
                    }
                    for (var t = o(r, n), l = 0; l < c.length; l++) {
                        var i = s(c[l]);
                        0 === e[i].references &&
                            (e[i].updater(), e.splice(i, 1));
                    }
                    c = t;
                };
            };
        },
        38311: r => {
            var e = {};
            r.exports = function(r, s) {
                var o = (function(r) {
                    if (void 0 === e[r]) {
                        var s = document.querySelector(r);
                        if (
                            window.HTMLIFrameElement &&
                            s instanceof window.HTMLIFrameElement
                        )
                            try {
                                s = s.contentDocument.head;
                            } catch (r) {
                                s = null;
                            }
                        e[r] = s;
                    }
                    return e[r];
                })(r);
                if (!o)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                o.appendChild(s);
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
        58192: (r, e, s) => {
            r.exports = function(r) {
                var e = s.nc;
                e && r.setAttribute('nonce', e);
            };
        },
        95760: r => {
            r.exports = function(r) {
                var e = r.insertStyleElement(r);
                return {
                    update: function(s) {
                        !(function(r, e, s) {
                            var o = '';
                            s.supports &&
                                (o += '@supports ('.concat(s.supports, ') {')),
                                s.media &&
                                    (o += '@media '.concat(s.media, ' {'));
                            var n = void 0 !== s.layer;
                            n &&
                                (o += '@layer'.concat(
                                    s.layer.length > 0
                                        ? ' '.concat(s.layer)
                                        : '',
                                    ' {'
                                )),
                                (o += s.css),
                                n && (o += '}'),
                                s.media && (o += '}'),
                                s.supports && (o += '}');
                            var c = s.sourceMap;
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
                        })(e, r, s);
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
//# sourceMappingURL=7808.1d582a2.js.map
