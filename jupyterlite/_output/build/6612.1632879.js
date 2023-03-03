'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [6612],
    {
        11452: (e, c, n) => {
            n.d(c, { Z: () => a });
            var o = n(34663),
                r = n.n(o),
                s = n(7638),
                t = n.n(s)()(r());
            t.push([
                e.id,
                '.cm-s-eclipse span.cm-meta { color: #FF1717; }\n.cm-s-eclipse span.cm-keyword { line-height: 1em; font-weight: bold; color: #7F0055; }\n.cm-s-eclipse span.cm-atom { color: #219; }\n.cm-s-eclipse span.cm-number { color: #164; }\n.cm-s-eclipse span.cm-def { color: #00f; }\n.cm-s-eclipse span.cm-variable { color: black; }\n.cm-s-eclipse span.cm-variable-2 { color: #0000C0; }\n.cm-s-eclipse span.cm-variable-3, .cm-s-eclipse span.cm-type { color: #0000C0; }\n.cm-s-eclipse span.cm-property { color: black; }\n.cm-s-eclipse span.cm-operator { color: black; }\n.cm-s-eclipse span.cm-comment { color: #3F7F5F; }\n.cm-s-eclipse span.cm-string { color: #2A00FF; }\n.cm-s-eclipse span.cm-string-2 { color: #f50; }\n.cm-s-eclipse span.cm-qualifier { color: #555; }\n.cm-s-eclipse span.cm-builtin { color: #30a; }\n.cm-s-eclipse span.cm-bracket { color: #cc7; }\n.cm-s-eclipse span.cm-tag { color: #170; }\n.cm-s-eclipse span.cm-attribute { color: #00c; }\n.cm-s-eclipse span.cm-link { color: #219; }\n.cm-s-eclipse span.cm-error { color: #f00; }\n\n.cm-s-eclipse .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-eclipse .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/eclipse.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA,6BAA6B,cAAc,EAAE;AAC7C,gCAAgC,gBAAgB,EAAE,iBAAiB,EAAE,cAAc,EAAE;AACrF,6BAA6B,WAAW,EAAE;AAC1C,+BAA+B,WAAW,EAAE;AAC5C,4BAA4B,WAAW,EAAE;AACzC,iCAAiC,YAAY,EAAE;AAC/C,mCAAmC,cAAc,EAAE;AACnD,+DAA+D,cAAc,EAAE;AAC/E,iCAAiC,YAAY,EAAE;AAC/C,iCAAiC,YAAY,EAAE;AAC/C,gCAAgC,cAAc,EAAE;AAChD,+BAA+B,cAAc,EAAE;AAC/C,iCAAiC,WAAW,EAAE;AAC9C,kCAAkC,WAAW,EAAE;AAC/C,gCAAgC,WAAW,EAAE;AAC7C,gCAAgC,WAAW,EAAE;AAC7C,4BAA4B,WAAW,EAAE;AACzC,kCAAkC,WAAW,EAAE;AAC/C,6BAA6B,WAAW,EAAE;AAC1C,8BAA8B,WAAW,EAAE;;AAE3C,kDAAkD,mBAAmB,EAAE;AACvE,4CAA4C,sBAAsB,EAAE,sBAAsB,EAAE',
                    sourcesContent: [
                        '.cm-s-eclipse span.cm-meta { color: #FF1717; }\n.cm-s-eclipse span.cm-keyword { line-height: 1em; font-weight: bold; color: #7F0055; }\n.cm-s-eclipse span.cm-atom { color: #219; }\n.cm-s-eclipse span.cm-number { color: #164; }\n.cm-s-eclipse span.cm-def { color: #00f; }\n.cm-s-eclipse span.cm-variable { color: black; }\n.cm-s-eclipse span.cm-variable-2 { color: #0000C0; }\n.cm-s-eclipse span.cm-variable-3, .cm-s-eclipse span.cm-type { color: #0000C0; }\n.cm-s-eclipse span.cm-property { color: black; }\n.cm-s-eclipse span.cm-operator { color: black; }\n.cm-s-eclipse span.cm-comment { color: #3F7F5F; }\n.cm-s-eclipse span.cm-string { color: #2A00FF; }\n.cm-s-eclipse span.cm-string-2 { color: #f50; }\n.cm-s-eclipse span.cm-qualifier { color: #555; }\n.cm-s-eclipse span.cm-builtin { color: #30a; }\n.cm-s-eclipse span.cm-bracket { color: #cc7; }\n.cm-s-eclipse span.cm-tag { color: #170; }\n.cm-s-eclipse span.cm-attribute { color: #00c; }\n.cm-s-eclipse span.cm-link { color: #219; }\n.cm-s-eclipse span.cm-error { color: #f00; }\n\n.cm-s-eclipse .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-eclipse .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const a = t;
        },
        7638: e => {
            e.exports = function(e) {
                var c = [];
                return (
                    (c.toString = function() {
                        return this.map(function(c) {
                            var n = '',
                                o = void 0 !== c[5];
                            return (
                                c[4] &&
                                    (n += '@supports ('.concat(c[4], ') {')),
                                c[2] && (n += '@media '.concat(c[2], ' {')),
                                o &&
                                    (n += '@layer'.concat(
                                        c[5].length > 0 ? ' '.concat(c[5]) : '',
                                        ' {'
                                    )),
                                (n += e(c)),
                                o && (n += '}'),
                                c[2] && (n += '}'),
                                c[4] && (n += '}'),
                                n
                            );
                        }).join('');
                    }),
                    (c.i = function(e, n, o, r, s) {
                        'string' == typeof e && (e = [[null, e, void 0]]);
                        var t = {};
                        if (o)
                            for (var a = 0; a < this.length; a++) {
                                var i = this[a][0];
                                null != i && (t[i] = !0);
                            }
                        for (var A = 0; A < e.length; A++) {
                            var l = [].concat(e[A]);
                            (o && t[l[0]]) ||
                                (void 0 !== s &&
                                    (void 0 === l[5] ||
                                        (l[1] = '@layer'
                                            .concat(
                                                l[5].length > 0
                                                    ? ' '.concat(l[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(l[1], '}')),
                                    (l[5] = s)),
                                n &&
                                    (l[2]
                                        ? ((l[1] = '@media '
                                              .concat(l[2], ' {')
                                              .concat(l[1], '}')),
                                          (l[2] = n))
                                        : (l[2] = n)),
                                r &&
                                    (l[4]
                                        ? ((l[1] = '@supports ('
                                              .concat(l[4], ') {')
                                              .concat(l[1], '}')),
                                          (l[4] = r))
                                        : (l[4] = ''.concat(r))),
                                c.push(l));
                        }
                    }),
                    c
                );
            };
        },
        34663: e => {
            e.exports = function(e) {
                var c = e[1],
                    n = e[3];
                if (!n) return c;
                if ('function' == typeof btoa) {
                    var o = btoa(
                            unescape(encodeURIComponent(JSON.stringify(n)))
                        ),
                        r = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            o
                        ),
                        s = '/*# '.concat(r, ' */'),
                        t = n.sources.map(function(e) {
                            return '/*# sourceURL='
                                .concat(n.sourceRoot || '')
                                .concat(e, ' */');
                        });
                    return [c]
                        .concat(t)
                        .concat([s])
                        .join('\n');
                }
                return [c].join('\n');
            };
        },
        16612: (e, c, n) => {
            n.r(c), n.d(c, { default: () => E });
            var o = n(1892),
                r = n.n(o),
                s = n(95760),
                t = n.n(s),
                a = n(38311),
                i = n.n(a),
                A = n(58192),
                l = n.n(A),
                p = n(38060),
                m = n.n(p),
                u = n(54865),
                f = n.n(u),
                C = n(11452),
                d = {};
            (d.styleTagTransform = f()),
                (d.setAttributes = l()),
                (d.insert = i().bind(null, 'head')),
                (d.domAPI = t()),
                (d.insertStyleElement = m()),
                r()(C.Z, d);
            const E = C.Z && C.Z.locals ? C.Z.locals : void 0;
        },
        1892: e => {
            var c = [];
            function n(e) {
                for (var n = -1, o = 0; o < c.length; o++)
                    if (c[o].identifier === e) {
                        n = o;
                        break;
                    }
                return n;
            }
            function o(e, o) {
                for (var s = {}, t = [], a = 0; a < e.length; a++) {
                    var i = e[a],
                        A = o.base ? i[0] + o.base : i[0],
                        l = s[A] || 0,
                        p = ''.concat(A, ' ').concat(l);
                    s[A] = l + 1;
                    var m = n(p),
                        u = {
                            css: i[1],
                            media: i[2],
                            sourceMap: i[3],
                            supports: i[4],
                            layer: i[5],
                        };
                    if (-1 !== m) c[m].references++, c[m].updater(u);
                    else {
                        var f = r(u, o);
                        (o.byIndex = a),
                            c.splice(a, 0, {
                                identifier: p,
                                updater: f,
                                references: 1,
                            });
                    }
                    t.push(p);
                }
                return t;
            }
            function r(e, c) {
                var n = c.domAPI(c);
                return (
                    n.update(e),
                    function(c) {
                        if (c) {
                            if (
                                c.css === e.css &&
                                c.media === e.media &&
                                c.sourceMap === e.sourceMap &&
                                c.supports === e.supports &&
                                c.layer === e.layer
                            )
                                return;
                            n.update((e = c));
                        } else n.remove();
                    }
                );
            }
            e.exports = function(e, r) {
                var s = o((e = e || []), (r = r || {}));
                return function(e) {
                    e = e || [];
                    for (var t = 0; t < s.length; t++) {
                        var a = n(s[t]);
                        c[a].references--;
                    }
                    for (var i = o(e, r), A = 0; A < s.length; A++) {
                        var l = n(s[A]);
                        0 === c[l].references &&
                            (c[l].updater(), c.splice(l, 1));
                    }
                    s = i;
                };
            };
        },
        38311: e => {
            var c = {};
            e.exports = function(e, n) {
                var o = (function(e) {
                    if (void 0 === c[e]) {
                        var n = document.querySelector(e);
                        if (
                            window.HTMLIFrameElement &&
                            n instanceof window.HTMLIFrameElement
                        )
                            try {
                                n = n.contentDocument.head;
                            } catch (e) {
                                n = null;
                            }
                        c[e] = n;
                    }
                    return c[e];
                })(e);
                if (!o)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                o.appendChild(n);
            };
        },
        38060: e => {
            e.exports = function(e) {
                var c = document.createElement('style');
                return (
                    e.setAttributes(c, e.attributes), e.insert(c, e.options), c
                );
            };
        },
        58192: (e, c, n) => {
            e.exports = function(e) {
                var c = n.nc;
                c && e.setAttribute('nonce', c);
            };
        },
        95760: e => {
            e.exports = function(e) {
                var c = e.insertStyleElement(e);
                return {
                    update: function(n) {
                        !(function(e, c, n) {
                            var o = '';
                            n.supports &&
                                (o += '@supports ('.concat(n.supports, ') {')),
                                n.media &&
                                    (o += '@media '.concat(n.media, ' {'));
                            var r = void 0 !== n.layer;
                            r &&
                                (o += '@layer'.concat(
                                    n.layer.length > 0
                                        ? ' '.concat(n.layer)
                                        : '',
                                    ' {'
                                )),
                                (o += n.css),
                                r && (o += '}'),
                                n.media && (o += '}'),
                                n.supports && (o += '}');
                            var s = n.sourceMap;
                            s &&
                                'undefined' != typeof btoa &&
                                (o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(s)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                c.styleTagTransform(o, e, c.options);
                        })(c, e, n);
                    },
                    remove: function() {
                        !(function(e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e);
                        })(c);
                    },
                };
            };
        },
        54865: e => {
            e.exports = function(e, c) {
                if (c.styleSheet) c.styleSheet.cssText = e;
                else {
                    for (; c.firstChild; ) c.removeChild(c.firstChild);
                    c.appendChild(document.createTextNode(e));
                }
            };
        },
    },
]);
//# sourceMappingURL=6612.1632879.js.map
