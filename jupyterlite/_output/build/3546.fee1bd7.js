'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [3546],
    {
        5541: (n, t, o) => {
            o.d(t, { Z: () => a });
            var e = o(34663),
                r = o.n(e),
                c = o(7638),
                i = o.n(c)()(r());
            i.push([
                n.id,
                '/*\nCopyright (C) 2011 by MarkLogic Corporation\nAuthor: Mike Brevoort <mike@brevoort.com>\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n*/\n.cm-s-xq-light span.cm-keyword { line-height: 1em; font-weight: bold; color: #5A5CAD; }\n.cm-s-xq-light span.cm-atom { color: #6C8CD5; }\n.cm-s-xq-light span.cm-number { color: #164; }\n.cm-s-xq-light span.cm-def { text-decoration:underline; }\n.cm-s-xq-light span.cm-variable { color: black; }\n.cm-s-xq-light span.cm-variable-2 { color:black; }\n.cm-s-xq-light span.cm-variable-3, .cm-s-xq-light span.cm-type { color: black; }\n.cm-s-xq-light span.cm-property {}\n.cm-s-xq-light span.cm-operator {}\n.cm-s-xq-light span.cm-comment { color: #0080FF; font-style: italic; }\n.cm-s-xq-light span.cm-string { color: red; }\n.cm-s-xq-light span.cm-meta { color: yellow; }\n.cm-s-xq-light span.cm-qualifier { color: grey; }\n.cm-s-xq-light span.cm-builtin { color: #7EA656; }\n.cm-s-xq-light span.cm-bracket { color: #cc7; }\n.cm-s-xq-light span.cm-tag { color: #3F7F7F; }\n.cm-s-xq-light span.cm-attribute { color: #7F007F; }\n.cm-s-xq-light span.cm-error { color: #f00; }\n\n.cm-s-xq-light .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-xq-light .CodeMirror-matchingbracket { outline:1px solid grey;color:black !important;background:yellow; }\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/xq-light.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;;;;;;;;;;;;;;;;;;;CAqBC;AACD,iCAAiC,gBAAgB,EAAE,iBAAiB,EAAE,cAAc,EAAE;AACtF,8BAA8B,cAAc,EAAE;AAC9C,gCAAgC,WAAW,EAAE;AAC7C,6BAA6B,yBAAyB,EAAE;AACxD,kCAAkC,YAAY,EAAE;AAChD,oCAAoC,WAAW,EAAE;AACjD,iEAAiE,YAAY,EAAE;AAC/E,iCAAiC;AACjC,iCAAiC;AACjC,iCAAiC,cAAc,EAAE,kBAAkB,EAAE;AACrE,gCAAgC,UAAU,EAAE;AAC5C,8BAA8B,aAAa,EAAE;AAC7C,mCAAmC,WAAW,EAAE;AAChD,iCAAiC,cAAc,EAAE;AACjD,iCAAiC,WAAW,EAAE;AAC9C,6BAA6B,cAAc,EAAE;AAC7C,mCAAmC,cAAc,EAAE;AACnD,+BAA+B,WAAW,EAAE;;AAE5C,mDAAmD,mBAAmB,EAAE;AACxE,6CAA6C,sBAAsB,CAAC,sBAAsB,CAAC,iBAAiB,EAAE',
                    sourcesContent: [
                        '/*\nCopyright (C) 2011 by MarkLogic Corporation\nAuthor: Mike Brevoort <mike@brevoort.com>\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n*/\n.cm-s-xq-light span.cm-keyword { line-height: 1em; font-weight: bold; color: #5A5CAD; }\n.cm-s-xq-light span.cm-atom { color: #6C8CD5; }\n.cm-s-xq-light span.cm-number { color: #164; }\n.cm-s-xq-light span.cm-def { text-decoration:underline; }\n.cm-s-xq-light span.cm-variable { color: black; }\n.cm-s-xq-light span.cm-variable-2 { color:black; }\n.cm-s-xq-light span.cm-variable-3, .cm-s-xq-light span.cm-type { color: black; }\n.cm-s-xq-light span.cm-property {}\n.cm-s-xq-light span.cm-operator {}\n.cm-s-xq-light span.cm-comment { color: #0080FF; font-style: italic; }\n.cm-s-xq-light span.cm-string { color: red; }\n.cm-s-xq-light span.cm-meta { color: yellow; }\n.cm-s-xq-light span.cm-qualifier { color: grey; }\n.cm-s-xq-light span.cm-builtin { color: #7EA656; }\n.cm-s-xq-light span.cm-bracket { color: #cc7; }\n.cm-s-xq-light span.cm-tag { color: #3F7F7F; }\n.cm-s-xq-light span.cm-attribute { color: #7F007F; }\n.cm-s-xq-light span.cm-error { color: #f00; }\n\n.cm-s-xq-light .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-xq-light .CodeMirror-matchingbracket { outline:1px solid grey;color:black !important;background:yellow; }\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const a = i;
        },
        7638: n => {
            n.exports = function(n) {
                var t = [];
                return (
                    (t.toString = function() {
                        return this.map(function(t) {
                            var o = '',
                                e = void 0 !== t[5];
                            return (
                                t[4] &&
                                    (o += '@supports ('.concat(t[4], ') {')),
                                t[2] && (o += '@media '.concat(t[2], ' {')),
                                e &&
                                    (o += '@layer'.concat(
                                        t[5].length > 0 ? ' '.concat(t[5]) : '',
                                        ' {'
                                    )),
                                (o += n(t)),
                                e && (o += '}'),
                                t[2] && (o += '}'),
                                t[4] && (o += '}'),
                                o
                            );
                        }).join('');
                    }),
                    (t.i = function(n, o, e, r, c) {
                        'string' == typeof n && (n = [[null, n, void 0]]);
                        var i = {};
                        if (e)
                            for (var a = 0; a < this.length; a++) {
                                var s = this[a][0];
                                null != s && (i[s] = !0);
                            }
                        for (var A = 0; A < n.length; A++) {
                            var l = [].concat(n[A]);
                            (e && i[l[0]]) ||
                                (void 0 !== c &&
                                    (void 0 === l[5] ||
                                        (l[1] = '@layer'
                                            .concat(
                                                l[5].length > 0
                                                    ? ' '.concat(l[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(l[1], '}')),
                                    (l[5] = c)),
                                o &&
                                    (l[2]
                                        ? ((l[1] = '@media '
                                              .concat(l[2], ' {')
                                              .concat(l[1], '}')),
                                          (l[2] = o))
                                        : (l[2] = o)),
                                r &&
                                    (l[4]
                                        ? ((l[1] = '@supports ('
                                              .concat(l[4], ') {')
                                              .concat(l[1], '}')),
                                          (l[4] = r))
                                        : (l[4] = ''.concat(r))),
                                t.push(l));
                        }
                    }),
                    t
                );
            };
        },
        34663: n => {
            n.exports = function(n) {
                var t = n[1],
                    o = n[3];
                if (!o) return t;
                if ('function' == typeof btoa) {
                    var e = btoa(
                            unescape(encodeURIComponent(JSON.stringify(o)))
                        ),
                        r = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            e
                        ),
                        c = '/*# '.concat(r, ' */'),
                        i = o.sources.map(function(n) {
                            return '/*# sourceURL='
                                .concat(o.sourceRoot || '')
                                .concat(n, ' */');
                        });
                    return [t]
                        .concat(i)
                        .concat([c])
                        .join('\n');
                }
                return [t].join('\n');
            };
        },
        53546: (n, t, o) => {
            o.r(t), o.d(t, { default: () => f });
            var e = o(1892),
                r = o.n(e),
                c = o(95760),
                i = o.n(c),
                a = o(38311),
                s = o.n(a),
                A = o(58192),
                l = o.n(A),
                m = o(38060),
                p = o.n(m),
                u = o(54865),
                h = o.n(u),
                E = o(5541),
                d = {};
            (d.styleTagTransform = h()),
                (d.setAttributes = l()),
                (d.insert = s().bind(null, 'head')),
                (d.domAPI = i()),
                (d.insertStyleElement = p()),
                r()(E.Z, d);
            const f = E.Z && E.Z.locals ? E.Z.locals : void 0;
        },
        1892: n => {
            var t = [];
            function o(n) {
                for (var o = -1, e = 0; e < t.length; e++)
                    if (t[e].identifier === n) {
                        o = e;
                        break;
                    }
                return o;
            }
            function e(n, e) {
                for (var c = {}, i = [], a = 0; a < n.length; a++) {
                    var s = n[a],
                        A = e.base ? s[0] + e.base : s[0],
                        l = c[A] || 0,
                        m = ''.concat(A, ' ').concat(l);
                    c[A] = l + 1;
                    var p = o(m),
                        u = {
                            css: s[1],
                            media: s[2],
                            sourceMap: s[3],
                            supports: s[4],
                            layer: s[5],
                        };
                    if (-1 !== p) t[p].references++, t[p].updater(u);
                    else {
                        var h = r(u, e);
                        (e.byIndex = a),
                            t.splice(a, 0, {
                                identifier: m,
                                updater: h,
                                references: 1,
                            });
                    }
                    i.push(m);
                }
                return i;
            }
            function r(n, t) {
                var o = t.domAPI(t);
                return (
                    o.update(n),
                    function(t) {
                        if (t) {
                            if (
                                t.css === n.css &&
                                t.media === n.media &&
                                t.sourceMap === n.sourceMap &&
                                t.supports === n.supports &&
                                t.layer === n.layer
                            )
                                return;
                            o.update((n = t));
                        } else o.remove();
                    }
                );
            }
            n.exports = function(n, r) {
                var c = e((n = n || []), (r = r || {}));
                return function(n) {
                    n = n || [];
                    for (var i = 0; i < c.length; i++) {
                        var a = o(c[i]);
                        t[a].references--;
                    }
                    for (var s = e(n, r), A = 0; A < c.length; A++) {
                        var l = o(c[A]);
                        0 === t[l].references &&
                            (t[l].updater(), t.splice(l, 1));
                    }
                    c = s;
                };
            };
        },
        38311: n => {
            var t = {};
            n.exports = function(n, o) {
                var e = (function(n) {
                    if (void 0 === t[n]) {
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
                        t[n] = o;
                    }
                    return t[n];
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
                var t = document.createElement('style');
                return (
                    n.setAttributes(t, n.attributes), n.insert(t, n.options), t
                );
            };
        },
        58192: (n, t, o) => {
            n.exports = function(n) {
                var t = o.nc;
                t && n.setAttribute('nonce', t);
            };
        },
        95760: n => {
            n.exports = function(n) {
                var t = n.insertStyleElement(n);
                return {
                    update: function(o) {
                        !(function(n, t, o) {
                            var e = '';
                            o.supports &&
                                (e += '@supports ('.concat(o.supports, ') {')),
                                o.media &&
                                    (e += '@media '.concat(o.media, ' {'));
                            var r = void 0 !== o.layer;
                            r &&
                                (e += '@layer'.concat(
                                    o.layer.length > 0
                                        ? ' '.concat(o.layer)
                                        : '',
                                    ' {'
                                )),
                                (e += o.css),
                                r && (e += '}'),
                                o.media && (e += '}'),
                                o.supports && (e += '}');
                            var c = o.sourceMap;
                            c &&
                                'undefined' != typeof btoa &&
                                (e += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(c)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                t.styleTagTransform(e, n, t.options);
                        })(t, n, o);
                    },
                    remove: function() {
                        !(function(n) {
                            if (null === n.parentNode) return !1;
                            n.parentNode.removeChild(n);
                        })(t);
                    },
                };
            };
        },
        54865: n => {
            n.exports = function(n, t) {
                if (t.styleSheet) t.styleSheet.cssText = n;
                else {
                    for (; t.firstChild; ) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n));
                }
            };
        },
    },
]);
//# sourceMappingURL=3546.fee1bd7.js.map
