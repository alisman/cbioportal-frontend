'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [8427],
    {
        44263: (r, e, a) => {
            a.d(e, { Z: () => t });
            var o = a(34663),
                n = a.n(o),
                c = a(7638),
                s = a.n(c)()(n());
            s.push([
                r.id,
                '/*\n\n    Name:       Base16 Default Dark\n    Author:     Chris Kempson (http://chriskempson.com)\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-base16-dark.CodeMirror { background: #151515; color: #e0e0e0; }\n.cm-s-base16-dark div.CodeMirror-selected { background: #303030; }\n.cm-s-base16-dark .CodeMirror-line::selection, .cm-s-base16-dark .CodeMirror-line > span::selection, .cm-s-base16-dark .CodeMirror-line > span > span::selection { background: rgba(48, 48, 48, .99); }\n.cm-s-base16-dark .CodeMirror-line::-moz-selection, .cm-s-base16-dark .CodeMirror-line > span::-moz-selection, .cm-s-base16-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(48, 48, 48, .99); }\n.cm-s-base16-dark .CodeMirror-gutters { background: #151515; border-right: 0px; }\n.cm-s-base16-dark .CodeMirror-guttermarker { color: #ac4142; }\n.cm-s-base16-dark .CodeMirror-guttermarker-subtle { color: #505050; }\n.cm-s-base16-dark .CodeMirror-linenumber { color: #505050; }\n.cm-s-base16-dark .CodeMirror-cursor { border-left: 1px solid #b0b0b0; }\n\n.cm-s-base16-dark span.cm-comment { color: #8f5536; }\n.cm-s-base16-dark span.cm-atom { color: #aa759f; }\n.cm-s-base16-dark span.cm-number { color: #aa759f; }\n\n.cm-s-base16-dark span.cm-property, .cm-s-base16-dark span.cm-attribute { color: #90a959; }\n.cm-s-base16-dark span.cm-keyword { color: #ac4142; }\n.cm-s-base16-dark span.cm-string { color: #f4bf75; }\n\n.cm-s-base16-dark span.cm-variable { color: #90a959; }\n.cm-s-base16-dark span.cm-variable-2 { color: #6a9fb5; }\n.cm-s-base16-dark span.cm-def { color: #d28445; }\n.cm-s-base16-dark span.cm-bracket { color: #e0e0e0; }\n.cm-s-base16-dark span.cm-tag { color: #ac4142; }\n.cm-s-base16-dark span.cm-link { color: #aa759f; }\n.cm-s-base16-dark span.cm-error { background: #ac4142; color: #b0b0b0; }\n\n.cm-s-base16-dark .CodeMirror-activeline-background { background: #202020; }\n.cm-s-base16-dark .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/base16-dark.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;;;;;;CAQC;;AAED,+BAA+B,mBAAmB,EAAE,cAAc,EAAE;AACpE,4CAA4C,mBAAmB,EAAE;AACjE,mKAAmK,iCAAiC,EAAE;AACtM,kLAAkL,iCAAiC,EAAE;AACrN,wCAAwC,mBAAmB,EAAE,iBAAiB,EAAE;AAChF,6CAA6C,cAAc,EAAE;AAC7D,oDAAoD,cAAc,EAAE;AACpE,2CAA2C,cAAc,EAAE;AAC3D,uCAAuC,8BAA8B,EAAE;;AAEvE,oCAAoC,cAAc,EAAE;AACpD,iCAAiC,cAAc,EAAE;AACjD,mCAAmC,cAAc,EAAE;;AAEnD,0EAA0E,cAAc,EAAE;AAC1F,oCAAoC,cAAc,EAAE;AACpD,mCAAmC,cAAc,EAAE;;AAEnD,qCAAqC,cAAc,EAAE;AACrD,uCAAuC,cAAc,EAAE;AACvD,gCAAgC,cAAc,EAAE;AAChD,oCAAoC,cAAc,EAAE;AACpD,gCAAgC,cAAc,EAAE;AAChD,iCAAiC,cAAc,EAAE;AACjD,kCAAkC,mBAAmB,EAAE,cAAc,EAAE;;AAEvE,sDAAsD,mBAAmB,EAAE;AAC3E,gDAAgD,0BAA0B,EAAE,uBAAuB,EAAE',
                    sourcesContent: [
                        '/*\n\n    Name:       Base16 Default Dark\n    Author:     Chris Kempson (http://chriskempson.com)\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-base16-dark.CodeMirror { background: #151515; color: #e0e0e0; }\n.cm-s-base16-dark div.CodeMirror-selected { background: #303030; }\n.cm-s-base16-dark .CodeMirror-line::selection, .cm-s-base16-dark .CodeMirror-line > span::selection, .cm-s-base16-dark .CodeMirror-line > span > span::selection { background: rgba(48, 48, 48, .99); }\n.cm-s-base16-dark .CodeMirror-line::-moz-selection, .cm-s-base16-dark .CodeMirror-line > span::-moz-selection, .cm-s-base16-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(48, 48, 48, .99); }\n.cm-s-base16-dark .CodeMirror-gutters { background: #151515; border-right: 0px; }\n.cm-s-base16-dark .CodeMirror-guttermarker { color: #ac4142; }\n.cm-s-base16-dark .CodeMirror-guttermarker-subtle { color: #505050; }\n.cm-s-base16-dark .CodeMirror-linenumber { color: #505050; }\n.cm-s-base16-dark .CodeMirror-cursor { border-left: 1px solid #b0b0b0; }\n\n.cm-s-base16-dark span.cm-comment { color: #8f5536; }\n.cm-s-base16-dark span.cm-atom { color: #aa759f; }\n.cm-s-base16-dark span.cm-number { color: #aa759f; }\n\n.cm-s-base16-dark span.cm-property, .cm-s-base16-dark span.cm-attribute { color: #90a959; }\n.cm-s-base16-dark span.cm-keyword { color: #ac4142; }\n.cm-s-base16-dark span.cm-string { color: #f4bf75; }\n\n.cm-s-base16-dark span.cm-variable { color: #90a959; }\n.cm-s-base16-dark span.cm-variable-2 { color: #6a9fb5; }\n.cm-s-base16-dark span.cm-def { color: #d28445; }\n.cm-s-base16-dark span.cm-bracket { color: #e0e0e0; }\n.cm-s-base16-dark span.cm-tag { color: #ac4142; }\n.cm-s-base16-dark span.cm-link { color: #aa759f; }\n.cm-s-base16-dark span.cm-error { background: #ac4142; color: #b0b0b0; }\n\n.cm-s-base16-dark .CodeMirror-activeline-background { background: #202020; }\n.cm-s-base16-dark .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const t = s;
        },
        7638: r => {
            r.exports = function(r) {
                var e = [];
                return (
                    (e.toString = function() {
                        return this.map(function(e) {
                            var a = '',
                                o = void 0 !== e[5];
                            return (
                                e[4] &&
                                    (a += '@supports ('.concat(e[4], ') {')),
                                e[2] && (a += '@media '.concat(e[2], ' {')),
                                o &&
                                    (a += '@layer'.concat(
                                        e[5].length > 0 ? ' '.concat(e[5]) : '',
                                        ' {'
                                    )),
                                (a += r(e)),
                                o && (a += '}'),
                                e[2] && (a += '}'),
                                e[4] && (a += '}'),
                                a
                            );
                        }).join('');
                    }),
                    (e.i = function(r, a, o, n, c) {
                        'string' == typeof r && (r = [[null, r, void 0]]);
                        var s = {};
                        if (o)
                            for (var t = 0; t < this.length; t++) {
                                var i = this[t][0];
                                null != i && (s[i] = !0);
                            }
                        for (var A = 0; A < r.length; A++) {
                            var d = [].concat(r[A]);
                            (o && s[d[0]]) ||
                                (void 0 !== c &&
                                    (void 0 === d[5] ||
                                        (d[1] = '@layer'
                                            .concat(
                                                d[5].length > 0
                                                    ? ' '.concat(d[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(d[1], '}')),
                                    (d[5] = c)),
                                a &&
                                    (d[2]
                                        ? ((d[1] = '@media '
                                              .concat(d[2], ' {')
                                              .concat(d[1], '}')),
                                          (d[2] = a))
                                        : (d[2] = a)),
                                n &&
                                    (d[4]
                                        ? ((d[1] = '@supports ('
                                              .concat(d[4], ') {')
                                              .concat(d[1], '}')),
                                          (d[4] = n))
                                        : (d[4] = ''.concat(n))),
                                e.push(d));
                        }
                    }),
                    e
                );
            };
        },
        34663: r => {
            r.exports = function(r) {
                var e = r[1],
                    a = r[3];
                if (!a) return e;
                if ('function' == typeof btoa) {
                    var o = btoa(
                            unescape(encodeURIComponent(JSON.stringify(a)))
                        ),
                        n = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            o
                        ),
                        c = '/*# '.concat(n, ' */'),
                        s = a.sources.map(function(r) {
                            return '/*# sourceURL='
                                .concat(a.sourceRoot || '')
                                .concat(r, ' */');
                        });
                    return [e]
                        .concat(s)
                        .concat([c])
                        .join('\n');
                }
                return [e].join('\n');
            };
        },
        28427: (r, e, a) => {
            a.r(e), a.d(e, { default: () => k });
            var o = a(1892),
                n = a.n(o),
                c = a(95760),
                s = a.n(c),
                t = a(38311),
                i = a.n(t),
                A = a(58192),
                d = a.n(A),
                m = a(38060),
                l = a.n(m),
                b = a(54865),
                p = a.n(b),
                u = a(44263),
                C = {};
            (C.styleTagTransform = p()),
                (C.setAttributes = d()),
                (C.insert = i().bind(null, 'head')),
                (C.domAPI = s()),
                (C.insertStyleElement = l()),
                n()(u.Z, C);
            const k = u.Z && u.Z.locals ? u.Z.locals : void 0;
        },
        1892: r => {
            var e = [];
            function a(r) {
                for (var a = -1, o = 0; o < e.length; o++)
                    if (e[o].identifier === r) {
                        a = o;
                        break;
                    }
                return a;
            }
            function o(r, o) {
                for (var c = {}, s = [], t = 0; t < r.length; t++) {
                    var i = r[t],
                        A = o.base ? i[0] + o.base : i[0],
                        d = c[A] || 0,
                        m = ''.concat(A, ' ').concat(d);
                    c[A] = d + 1;
                    var l = a(m),
                        b = {
                            css: i[1],
                            media: i[2],
                            sourceMap: i[3],
                            supports: i[4],
                            layer: i[5],
                        };
                    if (-1 !== l) e[l].references++, e[l].updater(b);
                    else {
                        var p = n(b, o);
                        (o.byIndex = t),
                            e.splice(t, 0, {
                                identifier: m,
                                updater: p,
                                references: 1,
                            });
                    }
                    s.push(m);
                }
                return s;
            }
            function n(r, e) {
                var a = e.domAPI(e);
                return (
                    a.update(r),
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
                            a.update((r = e));
                        } else a.remove();
                    }
                );
            }
            r.exports = function(r, n) {
                var c = o((r = r || []), (n = n || {}));
                return function(r) {
                    r = r || [];
                    for (var s = 0; s < c.length; s++) {
                        var t = a(c[s]);
                        e[t].references--;
                    }
                    for (var i = o(r, n), A = 0; A < c.length; A++) {
                        var d = a(c[A]);
                        0 === e[d].references &&
                            (e[d].updater(), e.splice(d, 1));
                    }
                    c = i;
                };
            };
        },
        38311: r => {
            var e = {};
            r.exports = function(r, a) {
                var o = (function(r) {
                    if (void 0 === e[r]) {
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
                        e[r] = a;
                    }
                    return e[r];
                })(r);
                if (!o)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                o.appendChild(a);
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
        58192: (r, e, a) => {
            r.exports = function(r) {
                var e = a.nc;
                e && r.setAttribute('nonce', e);
            };
        },
        95760: r => {
            r.exports = function(r) {
                var e = r.insertStyleElement(r);
                return {
                    update: function(a) {
                        !(function(r, e, a) {
                            var o = '';
                            a.supports &&
                                (o += '@supports ('.concat(a.supports, ') {')),
                                a.media &&
                                    (o += '@media '.concat(a.media, ' {'));
                            var n = void 0 !== a.layer;
                            n &&
                                (o += '@layer'.concat(
                                    a.layer.length > 0
                                        ? ' '.concat(a.layer)
                                        : '',
                                    ' {'
                                )),
                                (o += a.css),
                                n && (o += '}'),
                                a.media && (o += '}'),
                                a.supports && (o += '}');
                            var c = a.sourceMap;
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
                        })(e, r, a);
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
//# sourceMappingURL=8427.4923f43.js.map
