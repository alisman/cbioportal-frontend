'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [5153],
    {
        12091: (s, n, e) => {
            e.d(n, { Z: () => a });
            var r = e(34663),
                o = e.n(r),
                c = e(7638),
                t = e.n(c)()(o());
            t.push([
                s.id,
                '.cm-s-ssms span.cm-keyword { color: blue; }\n.cm-s-ssms span.cm-comment { color: darkgreen; }\n.cm-s-ssms span.cm-string { color: red; }\n.cm-s-ssms span.cm-def { color: black; }\n.cm-s-ssms span.cm-variable { color: black; }\n.cm-s-ssms span.cm-variable-2 { color: black; }\n.cm-s-ssms span.cm-atom { color: darkgray; }\n.cm-s-ssms .CodeMirror-linenumber { color: teal; }\n.cm-s-ssms .CodeMirror-activeline-background { background: #ffffff; }\n.cm-s-ssms span.cm-string-2 { color: #FF00FF; }\n.cm-s-ssms span.cm-operator, \n.cm-s-ssms span.cm-bracket, \n.cm-s-ssms span.cm-punctuation { color: darkgray; }\n.cm-s-ssms .CodeMirror-gutters { border-right: 3px solid #ffee62; background-color: #ffffff; }\n.cm-s-ssms div.CodeMirror-selected { background: #ADD6FF; }\n\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/ssms.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA,6BAA6B,WAAW,EAAE;AAC1C,6BAA6B,gBAAgB,EAAE;AAC/C,4BAA4B,UAAU,EAAE;AACxC,yBAAyB,YAAY,EAAE;AACvC,8BAA8B,YAAY,EAAE;AAC5C,gCAAgC,YAAY,EAAE;AAC9C,0BAA0B,eAAe,EAAE;AAC3C,oCAAoC,WAAW,EAAE;AACjD,+CAA+C,mBAAmB,EAAE;AACpE,8BAA8B,cAAc,EAAE;AAC9C;;iCAEiC,eAAe,EAAE;AAClD,iCAAiC,+BAA+B,EAAE,yBAAyB,EAAE;AAC7F,qCAAqC,mBAAmB,EAAE',
                    sourcesContent: [
                        '.cm-s-ssms span.cm-keyword { color: blue; }\n.cm-s-ssms span.cm-comment { color: darkgreen; }\n.cm-s-ssms span.cm-string { color: red; }\n.cm-s-ssms span.cm-def { color: black; }\n.cm-s-ssms span.cm-variable { color: black; }\n.cm-s-ssms span.cm-variable-2 { color: black; }\n.cm-s-ssms span.cm-atom { color: darkgray; }\n.cm-s-ssms .CodeMirror-linenumber { color: teal; }\n.cm-s-ssms .CodeMirror-activeline-background { background: #ffffff; }\n.cm-s-ssms span.cm-string-2 { color: #FF00FF; }\n.cm-s-ssms span.cm-operator, \n.cm-s-ssms span.cm-bracket, \n.cm-s-ssms span.cm-punctuation { color: darkgray; }\n.cm-s-ssms .CodeMirror-gutters { border-right: 3px solid #ffee62; background-color: #ffffff; }\n.cm-s-ssms div.CodeMirror-selected { background: #ADD6FF; }\n\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const a = t;
        },
        7638: s => {
            s.exports = function(s) {
                var n = [];
                return (
                    (n.toString = function() {
                        return this.map(function(n) {
                            var e = '',
                                r = void 0 !== n[5];
                            return (
                                n[4] &&
                                    (e += '@supports ('.concat(n[4], ') {')),
                                n[2] && (e += '@media '.concat(n[2], ' {')),
                                r &&
                                    (e += '@layer'.concat(
                                        n[5].length > 0 ? ' '.concat(n[5]) : '',
                                        ' {'
                                    )),
                                (e += s(n)),
                                r && (e += '}'),
                                n[2] && (e += '}'),
                                n[4] && (e += '}'),
                                e
                            );
                        }).join('');
                    }),
                    (n.i = function(s, e, r, o, c) {
                        'string' == typeof s && (s = [[null, s, void 0]]);
                        var t = {};
                        if (r)
                            for (var a = 0; a < this.length; a++) {
                                var i = this[a][0];
                                null != i && (t[i] = !0);
                            }
                        for (var m = 0; m < s.length; m++) {
                            var A = [].concat(s[m]);
                            (r && t[A[0]]) ||
                                (void 0 !== c &&
                                    (void 0 === A[5] ||
                                        (A[1] = '@layer'
                                            .concat(
                                                A[5].length > 0
                                                    ? ' '.concat(A[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(A[1], '}')),
                                    (A[5] = c)),
                                e &&
                                    (A[2]
                                        ? ((A[1] = '@media '
                                              .concat(A[2], ' {')
                                              .concat(A[1], '}')),
                                          (A[2] = e))
                                        : (A[2] = e)),
                                o &&
                                    (A[4]
                                        ? ((A[1] = '@supports ('
                                              .concat(A[4], ') {')
                                              .concat(A[1], '}')),
                                          (A[4] = o))
                                        : (A[4] = ''.concat(o))),
                                n.push(A));
                        }
                    }),
                    n
                );
            };
        },
        34663: s => {
            s.exports = function(s) {
                var n = s[1],
                    e = s[3];
                if (!e) return n;
                if ('function' == typeof btoa) {
                    var r = btoa(
                            unescape(encodeURIComponent(JSON.stringify(e)))
                        ),
                        o = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            r
                        ),
                        c = '/*# '.concat(o, ' */'),
                        t = e.sources.map(function(s) {
                            return '/*# sourceURL='
                                .concat(e.sourceRoot || '')
                                .concat(s, ' */');
                        });
                    return [n]
                        .concat(t)
                        .concat([c])
                        .join('\n');
                }
                return [n].join('\n');
            };
        },
        45153: (s, n, e) => {
            e.r(n), e.d(n, { default: () => C });
            var r = e(1892),
                o = e.n(r),
                c = e(95760),
                t = e.n(c),
                a = e(38311),
                i = e.n(a),
                m = e(58192),
                A = e.n(m),
                u = e(38060),
                l = e.n(u),
                p = e(54865),
                d = e.n(p),
                f = e(12091),
                v = {};
            (v.styleTagTransform = d()),
                (v.setAttributes = A()),
                (v.insert = i().bind(null, 'head')),
                (v.domAPI = t()),
                (v.insertStyleElement = l()),
                o()(f.Z, v);
            const C = f.Z && f.Z.locals ? f.Z.locals : void 0;
        },
        1892: s => {
            var n = [];
            function e(s) {
                for (var e = -1, r = 0; r < n.length; r++)
                    if (n[r].identifier === s) {
                        e = r;
                        break;
                    }
                return e;
            }
            function r(s, r) {
                for (var c = {}, t = [], a = 0; a < s.length; a++) {
                    var i = s[a],
                        m = r.base ? i[0] + r.base : i[0],
                        A = c[m] || 0,
                        u = ''.concat(m, ' ').concat(A);
                    c[m] = A + 1;
                    var l = e(u),
                        p = {
                            css: i[1],
                            media: i[2],
                            sourceMap: i[3],
                            supports: i[4],
                            layer: i[5],
                        };
                    if (-1 !== l) n[l].references++, n[l].updater(p);
                    else {
                        var d = o(p, r);
                        (r.byIndex = a),
                            n.splice(a, 0, {
                                identifier: u,
                                updater: d,
                                references: 1,
                            });
                    }
                    t.push(u);
                }
                return t;
            }
            function o(s, n) {
                var e = n.domAPI(n);
                return (
                    e.update(s),
                    function(n) {
                        if (n) {
                            if (
                                n.css === s.css &&
                                n.media === s.media &&
                                n.sourceMap === s.sourceMap &&
                                n.supports === s.supports &&
                                n.layer === s.layer
                            )
                                return;
                            e.update((s = n));
                        } else e.remove();
                    }
                );
            }
            s.exports = function(s, o) {
                var c = r((s = s || []), (o = o || {}));
                return function(s) {
                    s = s || [];
                    for (var t = 0; t < c.length; t++) {
                        var a = e(c[t]);
                        n[a].references--;
                    }
                    for (var i = r(s, o), m = 0; m < c.length; m++) {
                        var A = e(c[m]);
                        0 === n[A].references &&
                            (n[A].updater(), n.splice(A, 1));
                    }
                    c = i;
                };
            };
        },
        38311: s => {
            var n = {};
            s.exports = function(s, e) {
                var r = (function(s) {
                    if (void 0 === n[s]) {
                        var e = document.querySelector(s);
                        if (
                            window.HTMLIFrameElement &&
                            e instanceof window.HTMLIFrameElement
                        )
                            try {
                                e = e.contentDocument.head;
                            } catch (s) {
                                e = null;
                            }
                        n[s] = e;
                    }
                    return n[s];
                })(s);
                if (!r)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                r.appendChild(e);
            };
        },
        38060: s => {
            s.exports = function(s) {
                var n = document.createElement('style');
                return (
                    s.setAttributes(n, s.attributes), s.insert(n, s.options), n
                );
            };
        },
        58192: (s, n, e) => {
            s.exports = function(s) {
                var n = e.nc;
                n && s.setAttribute('nonce', n);
            };
        },
        95760: s => {
            s.exports = function(s) {
                var n = s.insertStyleElement(s);
                return {
                    update: function(e) {
                        !(function(s, n, e) {
                            var r = '';
                            e.supports &&
                                (r += '@supports ('.concat(e.supports, ') {')),
                                e.media &&
                                    (r += '@media '.concat(e.media, ' {'));
                            var o = void 0 !== e.layer;
                            o &&
                                (r += '@layer'.concat(
                                    e.layer.length > 0
                                        ? ' '.concat(e.layer)
                                        : '',
                                    ' {'
                                )),
                                (r += e.css),
                                o && (r += '}'),
                                e.media && (r += '}'),
                                e.supports && (r += '}');
                            var c = e.sourceMap;
                            c &&
                                'undefined' != typeof btoa &&
                                (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(c)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                n.styleTagTransform(r, s, n.options);
                        })(n, s, e);
                    },
                    remove: function() {
                        !(function(s) {
                            if (null === s.parentNode) return !1;
                            s.parentNode.removeChild(s);
                        })(n);
                    },
                };
            };
        },
        54865: s => {
            s.exports = function(s, n) {
                if (n.styleSheet) n.styleSheet.cssText = s;
                else {
                    for (; n.firstChild; ) n.removeChild(n.firstChild);
                    n.appendChild(document.createTextNode(s));
                }
            };
        },
    },
]);
//# sourceMappingURL=5153.763d8fa.js.map
