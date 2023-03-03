'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [8412],
    {
        35030: (n, e, r) => {
            r.d(e, { Z: () => s });
            var o = r(34663),
                t = r.n(o),
                c = r(7638),
                a = r.n(c)()(t());
            a.push([
                n.id,
                '/* neo theme for codemirror */\n\n/* Color scheme */\n\n.cm-s-neo.CodeMirror {\n  background-color:#ffffff;\n  color:#2e383c;\n  line-height:1.4375;\n}\n.cm-s-neo .cm-comment { color:#75787b; }\n.cm-s-neo .cm-keyword, .cm-s-neo .cm-property { color:#1d75b3; }\n.cm-s-neo .cm-atom,.cm-s-neo .cm-number { color:#75438a; }\n.cm-s-neo .cm-node,.cm-s-neo .cm-tag { color:#9c3328; }\n.cm-s-neo .cm-string { color:#b35e14; }\n.cm-s-neo .cm-variable,.cm-s-neo .cm-qualifier { color:#047d65; }\n\n\n/* Editor styling */\n\n.cm-s-neo pre {\n  padding:0;\n}\n\n.cm-s-neo .CodeMirror-gutters {\n  border:none;\n  border-right:10px solid transparent;\n  background-color:transparent;\n}\n\n.cm-s-neo .CodeMirror-linenumber {\n  padding:0;\n  color:#e0e2e5;\n}\n\n.cm-s-neo .CodeMirror-guttermarker { color: #1d75b3; }\n.cm-s-neo .CodeMirror-guttermarker-subtle { color: #e0e2e5; }\n\n.cm-s-neo .CodeMirror-cursor {\n  width: auto;\n  border: 0;\n  background: rgba(155,157,162,0.37);\n  z-index: 1;\n}\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/neo.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA,6BAA6B;;AAE7B,iBAAiB;;AAEjB;EACE,wBAAwB;EACxB,aAAa;EACb,kBAAkB;AACpB;AACA,wBAAwB,aAAa,EAAE;AACvC,gDAAgD,aAAa,EAAE;AAC/D,0CAA0C,aAAa,EAAE;AACzD,uCAAuC,aAAa,EAAE;AACtD,uBAAuB,aAAa,EAAE;AACtC,iDAAiD,aAAa,EAAE;;;AAGhE,mBAAmB;;AAEnB;EACE,SAAS;AACX;;AAEA;EACE,WAAW;EACX,mCAAmC;EACnC,4BAA4B;AAC9B;;AAEA;EACE,SAAS;EACT,aAAa;AACf;;AAEA,qCAAqC,cAAc,EAAE;AACrD,4CAA4C,cAAc,EAAE;;AAE5D;EACE,WAAW;EACX,SAAS;EACT,kCAAkC;EAClC,UAAU;AACZ',
                    sourcesContent: [
                        '/* neo theme for codemirror */\n\n/* Color scheme */\n\n.cm-s-neo.CodeMirror {\n  background-color:#ffffff;\n  color:#2e383c;\n  line-height:1.4375;\n}\n.cm-s-neo .cm-comment { color:#75787b; }\n.cm-s-neo .cm-keyword, .cm-s-neo .cm-property { color:#1d75b3; }\n.cm-s-neo .cm-atom,.cm-s-neo .cm-number { color:#75438a; }\n.cm-s-neo .cm-node,.cm-s-neo .cm-tag { color:#9c3328; }\n.cm-s-neo .cm-string { color:#b35e14; }\n.cm-s-neo .cm-variable,.cm-s-neo .cm-qualifier { color:#047d65; }\n\n\n/* Editor styling */\n\n.cm-s-neo pre {\n  padding:0;\n}\n\n.cm-s-neo .CodeMirror-gutters {\n  border:none;\n  border-right:10px solid transparent;\n  background-color:transparent;\n}\n\n.cm-s-neo .CodeMirror-linenumber {\n  padding:0;\n  color:#e0e2e5;\n}\n\n.cm-s-neo .CodeMirror-guttermarker { color: #1d75b3; }\n.cm-s-neo .CodeMirror-guttermarker-subtle { color: #e0e2e5; }\n\n.cm-s-neo .CodeMirror-cursor {\n  width: auto;\n  border: 0;\n  background: rgba(155,157,162,0.37);\n  z-index: 1;\n}\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const s = a;
        },
        7638: n => {
            n.exports = function(n) {
                var e = [];
                return (
                    (e.toString = function() {
                        return this.map(function(e) {
                            var r = '',
                                o = void 0 !== e[5];
                            return (
                                e[4] &&
                                    (r += '@supports ('.concat(e[4], ') {')),
                                e[2] && (r += '@media '.concat(e[2], ' {')),
                                o &&
                                    (r += '@layer'.concat(
                                        e[5].length > 0 ? ' '.concat(e[5]) : '',
                                        ' {'
                                    )),
                                (r += n(e)),
                                o && (r += '}'),
                                e[2] && (r += '}'),
                                e[4] && (r += '}'),
                                r
                            );
                        }).join('');
                    }),
                    (e.i = function(n, r, o, t, c) {
                        'string' == typeof n && (n = [[null, n, void 0]]);
                        var a = {};
                        if (o)
                            for (var s = 0; s < this.length; s++) {
                                var i = this[s][0];
                                null != i && (a[i] = !0);
                            }
                        for (var A = 0; A < n.length; A++) {
                            var u = [].concat(n[A]);
                            (o && a[u[0]]) ||
                                (void 0 !== c &&
                                    (void 0 === u[5] ||
                                        (u[1] = '@layer'
                                            .concat(
                                                u[5].length > 0
                                                    ? ' '.concat(u[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(u[1], '}')),
                                    (u[5] = c)),
                                r &&
                                    (u[2]
                                        ? ((u[1] = '@media '
                                              .concat(u[2], ' {')
                                              .concat(u[1], '}')),
                                          (u[2] = r))
                                        : (u[2] = r)),
                                t &&
                                    (u[4]
                                        ? ((u[1] = '@supports ('
                                              .concat(u[4], ') {')
                                              .concat(u[1], '}')),
                                          (u[4] = t))
                                        : (u[4] = ''.concat(t))),
                                e.push(u));
                        }
                    }),
                    e
                );
            };
        },
        34663: n => {
            n.exports = function(n) {
                var e = n[1],
                    r = n[3];
                if (!r) return e;
                if ('function' == typeof btoa) {
                    var o = btoa(
                            unescape(encodeURIComponent(JSON.stringify(r)))
                        ),
                        t = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            o
                        ),
                        c = '/*# '.concat(t, ' */'),
                        a = r.sources.map(function(n) {
                            return '/*# sourceURL='
                                .concat(r.sourceRoot || '')
                                .concat(n, ' */');
                        });
                    return [e]
                        .concat(a)
                        .concat([c])
                        .join('\n');
                }
                return [e].join('\n');
            };
        },
        38412: (n, e, r) => {
            r.r(e), r.d(e, { default: () => E });
            var o = r(1892),
                t = r.n(o),
                c = r(95760),
                a = r.n(c),
                s = r(38311),
                i = r.n(s),
                A = r(58192),
                u = r.n(A),
                m = r(38060),
                d = r.n(m),
                l = r(54865),
                p = r.n(l),
                f = r(35030),
                C = {};
            (C.styleTagTransform = p()),
                (C.setAttributes = u()),
                (C.insert = i().bind(null, 'head')),
                (C.domAPI = a()),
                (C.insertStyleElement = d()),
                t()(f.Z, C);
            const E = f.Z && f.Z.locals ? f.Z.locals : void 0;
        },
        1892: n => {
            var e = [];
            function r(n) {
                for (var r = -1, o = 0; o < e.length; o++)
                    if (e[o].identifier === n) {
                        r = o;
                        break;
                    }
                return r;
            }
            function o(n, o) {
                for (var c = {}, a = [], s = 0; s < n.length; s++) {
                    var i = n[s],
                        A = o.base ? i[0] + o.base : i[0],
                        u = c[A] || 0,
                        m = ''.concat(A, ' ').concat(u);
                    c[A] = u + 1;
                    var d = r(m),
                        l = {
                            css: i[1],
                            media: i[2],
                            sourceMap: i[3],
                            supports: i[4],
                            layer: i[5],
                        };
                    if (-1 !== d) e[d].references++, e[d].updater(l);
                    else {
                        var p = t(l, o);
                        (o.byIndex = s),
                            e.splice(s, 0, {
                                identifier: m,
                                updater: p,
                                references: 1,
                            });
                    }
                    a.push(m);
                }
                return a;
            }
            function t(n, e) {
                var r = e.domAPI(e);
                return (
                    r.update(n),
                    function(e) {
                        if (e) {
                            if (
                                e.css === n.css &&
                                e.media === n.media &&
                                e.sourceMap === n.sourceMap &&
                                e.supports === n.supports &&
                                e.layer === n.layer
                            )
                                return;
                            r.update((n = e));
                        } else r.remove();
                    }
                );
            }
            n.exports = function(n, t) {
                var c = o((n = n || []), (t = t || {}));
                return function(n) {
                    n = n || [];
                    for (var a = 0; a < c.length; a++) {
                        var s = r(c[a]);
                        e[s].references--;
                    }
                    for (var i = o(n, t), A = 0; A < c.length; A++) {
                        var u = r(c[A]);
                        0 === e[u].references &&
                            (e[u].updater(), e.splice(u, 1));
                    }
                    c = i;
                };
            };
        },
        38311: n => {
            var e = {};
            n.exports = function(n, r) {
                var o = (function(n) {
                    if (void 0 === e[n]) {
                        var r = document.querySelector(n);
                        if (
                            window.HTMLIFrameElement &&
                            r instanceof window.HTMLIFrameElement
                        )
                            try {
                                r = r.contentDocument.head;
                            } catch (n) {
                                r = null;
                            }
                        e[n] = r;
                    }
                    return e[n];
                })(n);
                if (!o)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                o.appendChild(r);
            };
        },
        38060: n => {
            n.exports = function(n) {
                var e = document.createElement('style');
                return (
                    n.setAttributes(e, n.attributes), n.insert(e, n.options), e
                );
            };
        },
        58192: (n, e, r) => {
            n.exports = function(n) {
                var e = r.nc;
                e && n.setAttribute('nonce', e);
            };
        },
        95760: n => {
            n.exports = function(n) {
                var e = n.insertStyleElement(n);
                return {
                    update: function(r) {
                        !(function(n, e, r) {
                            var o = '';
                            r.supports &&
                                (o += '@supports ('.concat(r.supports, ') {')),
                                r.media &&
                                    (o += '@media '.concat(r.media, ' {'));
                            var t = void 0 !== r.layer;
                            t &&
                                (o += '@layer'.concat(
                                    r.layer.length > 0
                                        ? ' '.concat(r.layer)
                                        : '',
                                    ' {'
                                )),
                                (o += r.css),
                                t && (o += '}'),
                                r.media && (o += '}'),
                                r.supports && (o += '}');
                            var c = r.sourceMap;
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
                                e.styleTagTransform(o, n, e.options);
                        })(e, n, r);
                    },
                    remove: function() {
                        !(function(n) {
                            if (null === n.parentNode) return !1;
                            n.parentNode.removeChild(n);
                        })(e);
                    },
                };
            };
        },
        54865: n => {
            n.exports = function(n, e) {
                if (e.styleSheet) e.styleSheet.cssText = n;
                else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n));
                }
            };
        },
    },
]);
//# sourceMappingURL=8412.1528057.js.map
