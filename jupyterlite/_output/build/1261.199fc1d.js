'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [1261],
    {
        39982: (n, r, o) => {
            o.d(r, { Z: () => a });
            var i = o(34663),
                e = o.n(i),
                t = o(7638),
                c = o.n(t)()(e());
            c.push([
                n.id,
                '/* Taken from the popular Visual Studio Vibrant Ink Schema */\n\n.cm-s-vibrant-ink.CodeMirror { background: black; color: white; }\n.cm-s-vibrant-ink div.CodeMirror-selected { background: #35493c; }\n.cm-s-vibrant-ink .CodeMirror-line::selection, .cm-s-vibrant-ink .CodeMirror-line > span::selection, .cm-s-vibrant-ink .CodeMirror-line > span > span::selection { background: rgba(53, 73, 60, 0.99); }\n.cm-s-vibrant-ink .CodeMirror-line::-moz-selection, .cm-s-vibrant-ink .CodeMirror-line > span::-moz-selection, .cm-s-vibrant-ink .CodeMirror-line > span > span::-moz-selection { background: rgba(53, 73, 60, 0.99); }\n\n.cm-s-vibrant-ink .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }\n.cm-s-vibrant-ink .CodeMirror-guttermarker { color: white; }\n.cm-s-vibrant-ink .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-vibrant-ink .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-vibrant-ink .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-vibrant-ink .cm-keyword { color: #CC7832; }\n.cm-s-vibrant-ink .cm-atom { color: #FC0; }\n.cm-s-vibrant-ink .cm-number { color:  #FFEE98; }\n.cm-s-vibrant-ink .cm-def { color: #8DA6CE; }\n.cm-s-vibrant-ink span.cm-variable-2, .cm-s-vibrant span.cm-tag { color: #FFC66D; }\n.cm-s-vibrant-ink span.cm-variable-3, .cm-s-vibrant span.cm-def, .cm-s-vibrant span.cm-type { color: #FFC66D; }\n.cm-s-vibrant-ink .cm-operator { color: #888; }\n.cm-s-vibrant-ink .cm-comment { color: gray; font-weight: bold; }\n.cm-s-vibrant-ink .cm-string { color:  #A5C25C; }\n.cm-s-vibrant-ink .cm-string-2 { color: red; }\n.cm-s-vibrant-ink .cm-meta { color: #D8FA3C; }\n.cm-s-vibrant-ink .cm-builtin { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-tag { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-attribute { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-header { color: #FF6400; }\n.cm-s-vibrant-ink .cm-hr { color: #AEAEAE; }\n.cm-s-vibrant-ink .cm-link { color: #5656F3; }\n.cm-s-vibrant-ink .cm-error { border-bottom: 1px solid red; }\n\n.cm-s-vibrant-ink .CodeMirror-activeline-background { background: #27282E; }\n.cm-s-vibrant-ink .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/vibrant-ink.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA,4DAA4D;;AAE5D,+BAA+B,iBAAiB,EAAE,YAAY,EAAE;AAChE,4CAA4C,mBAAmB,EAAE;AACjE,mKAAmK,kCAAkC,EAAE;AACvM,kLAAkL,kCAAkC,EAAE;;AAEtN,wCAAwC,mBAAmB,EAAE,4BAA4B,EAAE;AAC3F,6CAA6C,YAAY,EAAE;AAC3D,oDAAoD,cAAc,EAAE;AACpE,2CAA2C,cAAc,EAAE;AAC3D,uCAAuC,4BAA4B,EAAE;;AAErE,gCAAgC,cAAc,EAAE;AAChD,6BAA6B,WAAW,EAAE;AAC1C,+BAA+B,eAAe,EAAE;AAChD,4BAA4B,cAAc,EAAE;AAC5C,kEAAkE,cAAc,EAAE;AAClF,8FAA8F,cAAc,EAAE;AAC9G,iCAAiC,WAAW,EAAE;AAC9C,gCAAgC,WAAW,EAAE,iBAAiB,EAAE;AAChE,+BAA+B,eAAe,EAAE;AAChD,iCAAiC,UAAU,EAAE;AAC7C,6BAA6B,cAAc,EAAE;AAC7C,gCAAgC,cAAc,EAAE;AAChD,4BAA4B,cAAc,EAAE;AAC5C,kCAAkC,cAAc,EAAE;AAClD,+BAA+B,cAAc,EAAE;AAC/C,2BAA2B,cAAc,EAAE;AAC3C,6BAA6B,cAAc,EAAE;AAC7C,8BAA8B,4BAA4B,EAAE;;AAE5D,sDAAsD,mBAAmB,EAAE;AAC3E,gDAAgD,sBAAsB,EAAE,sBAAsB,EAAE',
                    sourcesContent: [
                        '/* Taken from the popular Visual Studio Vibrant Ink Schema */\n\n.cm-s-vibrant-ink.CodeMirror { background: black; color: white; }\n.cm-s-vibrant-ink div.CodeMirror-selected { background: #35493c; }\n.cm-s-vibrant-ink .CodeMirror-line::selection, .cm-s-vibrant-ink .CodeMirror-line > span::selection, .cm-s-vibrant-ink .CodeMirror-line > span > span::selection { background: rgba(53, 73, 60, 0.99); }\n.cm-s-vibrant-ink .CodeMirror-line::-moz-selection, .cm-s-vibrant-ink .CodeMirror-line > span::-moz-selection, .cm-s-vibrant-ink .CodeMirror-line > span > span::-moz-selection { background: rgba(53, 73, 60, 0.99); }\n\n.cm-s-vibrant-ink .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }\n.cm-s-vibrant-ink .CodeMirror-guttermarker { color: white; }\n.cm-s-vibrant-ink .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-vibrant-ink .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-vibrant-ink .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-vibrant-ink .cm-keyword { color: #CC7832; }\n.cm-s-vibrant-ink .cm-atom { color: #FC0; }\n.cm-s-vibrant-ink .cm-number { color:  #FFEE98; }\n.cm-s-vibrant-ink .cm-def { color: #8DA6CE; }\n.cm-s-vibrant-ink span.cm-variable-2, .cm-s-vibrant span.cm-tag { color: #FFC66D; }\n.cm-s-vibrant-ink span.cm-variable-3, .cm-s-vibrant span.cm-def, .cm-s-vibrant span.cm-type { color: #FFC66D; }\n.cm-s-vibrant-ink .cm-operator { color: #888; }\n.cm-s-vibrant-ink .cm-comment { color: gray; font-weight: bold; }\n.cm-s-vibrant-ink .cm-string { color:  #A5C25C; }\n.cm-s-vibrant-ink .cm-string-2 { color: red; }\n.cm-s-vibrant-ink .cm-meta { color: #D8FA3C; }\n.cm-s-vibrant-ink .cm-builtin { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-tag { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-attribute { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-header { color: #FF6400; }\n.cm-s-vibrant-ink .cm-hr { color: #AEAEAE; }\n.cm-s-vibrant-ink .cm-link { color: #5656F3; }\n.cm-s-vibrant-ink .cm-error { border-bottom: 1px solid red; }\n\n.cm-s-vibrant-ink .CodeMirror-activeline-background { background: #27282E; }\n.cm-s-vibrant-ink .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n',
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
                                i = void 0 !== r[5];
                            return (
                                r[4] &&
                                    (o += '@supports ('.concat(r[4], ') {')),
                                r[2] && (o += '@media '.concat(r[2], ' {')),
                                i &&
                                    (o += '@layer'.concat(
                                        r[5].length > 0 ? ' '.concat(r[5]) : '',
                                        ' {'
                                    )),
                                (o += n(r)),
                                i && (o += '}'),
                                r[2] && (o += '}'),
                                r[4] && (o += '}'),
                                o
                            );
                        }).join('');
                    }),
                    (r.i = function(n, o, i, e, t) {
                        'string' == typeof n && (n = [[null, n, void 0]]);
                        var c = {};
                        if (i)
                            for (var a = 0; a < this.length; a++) {
                                var A = this[a][0];
                                null != A && (c[A] = !0);
                            }
                        for (var s = 0; s < n.length; s++) {
                            var m = [].concat(n[s]);
                            (i && c[m[0]]) ||
                                (void 0 !== t &&
                                    (void 0 === m[5] ||
                                        (m[1] = '@layer'
                                            .concat(
                                                m[5].length > 0
                                                    ? ' '.concat(m[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(m[1], '}')),
                                    (m[5] = t)),
                                o &&
                                    (m[2]
                                        ? ((m[1] = '@media '
                                              .concat(m[2], ' {')
                                              .concat(m[1], '}')),
                                          (m[2] = o))
                                        : (m[2] = o)),
                                e &&
                                    (m[4]
                                        ? ((m[1] = '@supports ('
                                              .concat(m[4], ') {')
                                              .concat(m[1], '}')),
                                          (m[4] = e))
                                        : (m[4] = ''.concat(e))),
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
                    var i = btoa(
                            unescape(encodeURIComponent(JSON.stringify(o)))
                        ),
                        e = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            i
                        ),
                        t = '/*# '.concat(e, ' */'),
                        c = o.sources.map(function(n) {
                            return '/*# sourceURL='
                                .concat(o.sourceRoot || '')
                                .concat(n, ' */');
                        });
                    return [r]
                        .concat(c)
                        .concat([t])
                        .join('\n');
                }
                return [r].join('\n');
            };
        },
        51261: (n, r, o) => {
            o.r(r), o.d(r, { default: () => p });
            var i = o(1892),
                e = o.n(i),
                t = o(95760),
                c = o.n(t),
                a = o(38311),
                A = o.n(a),
                s = o(58192),
                m = o.n(s),
                l = o(38060),
                d = o.n(l),
                b = o(54865),
                u = o.n(b),
                v = o(39982),
                C = {};
            (C.styleTagTransform = u()),
                (C.setAttributes = m()),
                (C.insert = A().bind(null, 'head')),
                (C.domAPI = c()),
                (C.insertStyleElement = d()),
                e()(v.Z, C);
            const p = v.Z && v.Z.locals ? v.Z.locals : void 0;
        },
        1892: n => {
            var r = [];
            function o(n) {
                for (var o = -1, i = 0; i < r.length; i++)
                    if (r[i].identifier === n) {
                        o = i;
                        break;
                    }
                return o;
            }
            function i(n, i) {
                for (var t = {}, c = [], a = 0; a < n.length; a++) {
                    var A = n[a],
                        s = i.base ? A[0] + i.base : A[0],
                        m = t[s] || 0,
                        l = ''.concat(s, ' ').concat(m);
                    t[s] = m + 1;
                    var d = o(l),
                        b = {
                            css: A[1],
                            media: A[2],
                            sourceMap: A[3],
                            supports: A[4],
                            layer: A[5],
                        };
                    if (-1 !== d) r[d].references++, r[d].updater(b);
                    else {
                        var u = e(b, i);
                        (i.byIndex = a),
                            r.splice(a, 0, {
                                identifier: l,
                                updater: u,
                                references: 1,
                            });
                    }
                    c.push(l);
                }
                return c;
            }
            function e(n, r) {
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
            n.exports = function(n, e) {
                var t = i((n = n || []), (e = e || {}));
                return function(n) {
                    n = n || [];
                    for (var c = 0; c < t.length; c++) {
                        var a = o(t[c]);
                        r[a].references--;
                    }
                    for (var A = i(n, e), s = 0; s < t.length; s++) {
                        var m = o(t[s]);
                        0 === r[m].references &&
                            (r[m].updater(), r.splice(m, 1));
                    }
                    t = A;
                };
            };
        },
        38311: n => {
            var r = {};
            n.exports = function(n, o) {
                var i = (function(n) {
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
                if (!i)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                i.appendChild(o);
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
                            var i = '';
                            o.supports &&
                                (i += '@supports ('.concat(o.supports, ') {')),
                                o.media &&
                                    (i += '@media '.concat(o.media, ' {'));
                            var e = void 0 !== o.layer;
                            e &&
                                (i += '@layer'.concat(
                                    o.layer.length > 0
                                        ? ' '.concat(o.layer)
                                        : '',
                                    ' {'
                                )),
                                (i += o.css),
                                e && (i += '}'),
                                o.media && (i += '}'),
                                o.supports && (i += '}');
                            var t = o.sourceMap;
                            t &&
                                'undefined' != typeof btoa &&
                                (i += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(t)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                r.styleTagTransform(i, n, r.options);
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
//# sourceMappingURL=1261.199fc1d.js.map
