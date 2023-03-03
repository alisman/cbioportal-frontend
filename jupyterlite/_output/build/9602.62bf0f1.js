'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [9602],
    {
        13493: (e, n, o) => {
            o.d(n, { Z: () => i });
            var c = o(34663),
                r = o.n(c),
                t = o(7638),
                s = o.n(t)()(r());
            s.push([
                e.id,
                '/*\n\n    Name:       seti\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original seti color scheme by Jesse Weed (https://github.com/jesseweed/seti-syntax)\n\n*/\n\n\n.cm-s-seti.CodeMirror {\n  background-color: #151718 !important;\n  color: #CFD2D1 !important;\n  border: none;\n}\n.cm-s-seti .CodeMirror-gutters {\n  color: #404b53;\n  background-color: #0E1112;\n  border: none;\n}\n.cm-s-seti .CodeMirror-cursor { border-left: solid thin #f8f8f0; }\n.cm-s-seti .CodeMirror-linenumber { color: #6D8A88; }\n.cm-s-seti.CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-seti .CodeMirror-line::selection, .cm-s-seti .CodeMirror-line > span::selection, .cm-s-seti .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-seti .CodeMirror-line::-moz-selection, .cm-s-seti .CodeMirror-line > span::-moz-selection, .cm-s-seti .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-seti span.cm-comment { color: #41535b; }\n.cm-s-seti span.cm-string, .cm-s-seti span.cm-string-2 { color: #55b5db; }\n.cm-s-seti span.cm-number { color: #cd3f45; }\n.cm-s-seti span.cm-variable { color: #55b5db; }\n.cm-s-seti span.cm-variable-2 { color: #a074c4; }\n.cm-s-seti span.cm-def { color: #55b5db; }\n.cm-s-seti span.cm-keyword { color: #ff79c6; }\n.cm-s-seti span.cm-operator { color: #9fca56; }\n.cm-s-seti span.cm-keyword { color: #e6cd69; }\n.cm-s-seti span.cm-atom { color: #cd3f45; }\n.cm-s-seti span.cm-meta { color: #55b5db; }\n.cm-s-seti span.cm-tag { color: #55b5db; }\n.cm-s-seti span.cm-attribute { color: #9fca56; }\n.cm-s-seti span.cm-qualifier { color: #9fca56; }\n.cm-s-seti span.cm-property { color: #a074c4; }\n.cm-s-seti span.cm-variable-3, .cm-s-seti span.cm-type { color: #9fca56; }\n.cm-s-seti span.cm-builtin { color: #9fca56; }\n.cm-s-seti .CodeMirror-activeline-background { background: #101213; }\n.cm-s-seti .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/seti.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;;;;;CAOC;;;AAGD;EACE,oCAAoC;EACpC,yBAAyB;EACzB,YAAY;AACd;AACA;EACE,cAAc;EACd,yBAAyB;EACzB,YAAY;AACd;AACA,gCAAgC,+BAA+B,EAAE;AACjE,oCAAoC,cAAc,EAAE;AACpD,wDAAwD,qCAAqC,EAAE;AAC/F,8IAA8I,qCAAqC,EAAE;AACrL,6JAA6J,qCAAqC,EAAE;AACpM,6BAA6B,cAAc,EAAE;AAC7C,yDAAyD,cAAc,EAAE;AACzE,4BAA4B,cAAc,EAAE;AAC5C,8BAA8B,cAAc,EAAE;AAC9C,gCAAgC,cAAc,EAAE;AAChD,yBAAyB,cAAc,EAAE;AACzC,6BAA6B,cAAc,EAAE;AAC7C,8BAA8B,cAAc,EAAE;AAC9C,6BAA6B,cAAc,EAAE;AAC7C,0BAA0B,cAAc,EAAE;AAC1C,0BAA0B,cAAc,EAAE;AAC1C,yBAAyB,cAAc,EAAE;AACzC,+BAA+B,cAAc,EAAE;AAC/C,+BAA+B,cAAc,EAAE;AAC/C,8BAA8B,cAAc,EAAE;AAC9C,yDAAyD,cAAc,EAAE;AACzE,6BAA6B,cAAc,EAAE;AAC7C,+CAA+C,mBAAmB,EAAE;AACpE,yCAAyC,0BAA0B,EAAE,uBAAuB,EAAE',
                    sourcesContent: [
                        '/*\n\n    Name:       seti\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original seti color scheme by Jesse Weed (https://github.com/jesseweed/seti-syntax)\n\n*/\n\n\n.cm-s-seti.CodeMirror {\n  background-color: #151718 !important;\n  color: #CFD2D1 !important;\n  border: none;\n}\n.cm-s-seti .CodeMirror-gutters {\n  color: #404b53;\n  background-color: #0E1112;\n  border: none;\n}\n.cm-s-seti .CodeMirror-cursor { border-left: solid thin #f8f8f0; }\n.cm-s-seti .CodeMirror-linenumber { color: #6D8A88; }\n.cm-s-seti.CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-seti .CodeMirror-line::selection, .cm-s-seti .CodeMirror-line > span::selection, .cm-s-seti .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-seti .CodeMirror-line::-moz-selection, .cm-s-seti .CodeMirror-line > span::-moz-selection, .cm-s-seti .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-seti span.cm-comment { color: #41535b; }\n.cm-s-seti span.cm-string, .cm-s-seti span.cm-string-2 { color: #55b5db; }\n.cm-s-seti span.cm-number { color: #cd3f45; }\n.cm-s-seti span.cm-variable { color: #55b5db; }\n.cm-s-seti span.cm-variable-2 { color: #a074c4; }\n.cm-s-seti span.cm-def { color: #55b5db; }\n.cm-s-seti span.cm-keyword { color: #ff79c6; }\n.cm-s-seti span.cm-operator { color: #9fca56; }\n.cm-s-seti span.cm-keyword { color: #e6cd69; }\n.cm-s-seti span.cm-atom { color: #cd3f45; }\n.cm-s-seti span.cm-meta { color: #55b5db; }\n.cm-s-seti span.cm-tag { color: #55b5db; }\n.cm-s-seti span.cm-attribute { color: #9fca56; }\n.cm-s-seti span.cm-qualifier { color: #9fca56; }\n.cm-s-seti span.cm-property { color: #a074c4; }\n.cm-s-seti span.cm-variable-3, .cm-s-seti span.cm-type { color: #9fca56; }\n.cm-s-seti span.cm-builtin { color: #9fca56; }\n.cm-s-seti .CodeMirror-activeline-background { background: #101213; }\n.cm-s-seti .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const i = s;
        },
        7638: e => {
            e.exports = function(e) {
                var n = [];
                return (
                    (n.toString = function() {
                        return this.map(function(n) {
                            var o = '',
                                c = void 0 !== n[5];
                            return (
                                n[4] &&
                                    (o += '@supports ('.concat(n[4], ') {')),
                                n[2] && (o += '@media '.concat(n[2], ' {')),
                                c &&
                                    (o += '@layer'.concat(
                                        n[5].length > 0 ? ' '.concat(n[5]) : '',
                                        ' {'
                                    )),
                                (o += e(n)),
                                c && (o += '}'),
                                n[2] && (o += '}'),
                                n[4] && (o += '}'),
                                o
                            );
                        }).join('');
                    }),
                    (n.i = function(e, o, c, r, t) {
                        'string' == typeof e && (e = [[null, e, void 0]]);
                        var s = {};
                        if (c)
                            for (var i = 0; i < this.length; i++) {
                                var a = this[i][0];
                                null != a && (s[a] = !0);
                            }
                        for (var A = 0; A < e.length; A++) {
                            var m = [].concat(e[A]);
                            (c && s[m[0]]) ||
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
                                r &&
                                    (m[4]
                                        ? ((m[1] = '@supports ('
                                              .concat(m[4], ') {')
                                              .concat(m[1], '}')),
                                          (m[4] = r))
                                        : (m[4] = ''.concat(r))),
                                n.push(m));
                        }
                    }),
                    n
                );
            };
        },
        34663: e => {
            e.exports = function(e) {
                var n = e[1],
                    o = e[3];
                if (!o) return n;
                if ('function' == typeof btoa) {
                    var c = btoa(
                            unescape(encodeURIComponent(JSON.stringify(o)))
                        ),
                        r = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            c
                        ),
                        t = '/*# '.concat(r, ' */'),
                        s = o.sources.map(function(e) {
                            return '/*# sourceURL='
                                .concat(o.sourceRoot || '')
                                .concat(e, ' */');
                        });
                    return [n]
                        .concat(s)
                        .concat([t])
                        .join('\n');
                }
                return [n].join('\n');
            };
        },
        9602: (e, n, o) => {
            o.r(n), o.d(n, { default: () => b });
            var c = o(1892),
                r = o.n(c),
                t = o(95760),
                s = o.n(t),
                i = o(38311),
                a = o.n(i),
                A = o(58192),
                m = o.n(A),
                l = o(38060),
                d = o.n(l),
                p = o(54865),
                u = o.n(p),
                C = o(13493),
                f = {};
            (f.styleTagTransform = u()),
                (f.setAttributes = m()),
                (f.insert = a().bind(null, 'head')),
                (f.domAPI = s()),
                (f.insertStyleElement = d()),
                r()(C.Z, f);
            const b = C.Z && C.Z.locals ? C.Z.locals : void 0;
        },
        1892: e => {
            var n = [];
            function o(e) {
                for (var o = -1, c = 0; c < n.length; c++)
                    if (n[c].identifier === e) {
                        o = c;
                        break;
                    }
                return o;
            }
            function c(e, c) {
                for (var t = {}, s = [], i = 0; i < e.length; i++) {
                    var a = e[i],
                        A = c.base ? a[0] + c.base : a[0],
                        m = t[A] || 0,
                        l = ''.concat(A, ' ').concat(m);
                    t[A] = m + 1;
                    var d = o(l),
                        p = {
                            css: a[1],
                            media: a[2],
                            sourceMap: a[3],
                            supports: a[4],
                            layer: a[5],
                        };
                    if (-1 !== d) n[d].references++, n[d].updater(p);
                    else {
                        var u = r(p, c);
                        (c.byIndex = i),
                            n.splice(i, 0, {
                                identifier: l,
                                updater: u,
                                references: 1,
                            });
                    }
                    s.push(l);
                }
                return s;
            }
            function r(e, n) {
                var o = n.domAPI(n);
                return (
                    o.update(e),
                    function(n) {
                        if (n) {
                            if (
                                n.css === e.css &&
                                n.media === e.media &&
                                n.sourceMap === e.sourceMap &&
                                n.supports === e.supports &&
                                n.layer === e.layer
                            )
                                return;
                            o.update((e = n));
                        } else o.remove();
                    }
                );
            }
            e.exports = function(e, r) {
                var t = c((e = e || []), (r = r || {}));
                return function(e) {
                    e = e || [];
                    for (var s = 0; s < t.length; s++) {
                        var i = o(t[s]);
                        n[i].references--;
                    }
                    for (var a = c(e, r), A = 0; A < t.length; A++) {
                        var m = o(t[A]);
                        0 === n[m].references &&
                            (n[m].updater(), n.splice(m, 1));
                    }
                    t = a;
                };
            };
        },
        38311: e => {
            var n = {};
            e.exports = function(e, o) {
                var c = (function(e) {
                    if (void 0 === n[e]) {
                        var o = document.querySelector(e);
                        if (
                            window.HTMLIFrameElement &&
                            o instanceof window.HTMLIFrameElement
                        )
                            try {
                                o = o.contentDocument.head;
                            } catch (e) {
                                o = null;
                            }
                        n[e] = o;
                    }
                    return n[e];
                })(e);
                if (!c)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                c.appendChild(o);
            };
        },
        38060: e => {
            e.exports = function(e) {
                var n = document.createElement('style');
                return (
                    e.setAttributes(n, e.attributes), e.insert(n, e.options), n
                );
            };
        },
        58192: (e, n, o) => {
            e.exports = function(e) {
                var n = o.nc;
                n && e.setAttribute('nonce', n);
            };
        },
        95760: e => {
            e.exports = function(e) {
                var n = e.insertStyleElement(e);
                return {
                    update: function(o) {
                        !(function(e, n, o) {
                            var c = '';
                            o.supports &&
                                (c += '@supports ('.concat(o.supports, ') {')),
                                o.media &&
                                    (c += '@media '.concat(o.media, ' {'));
                            var r = void 0 !== o.layer;
                            r &&
                                (c += '@layer'.concat(
                                    o.layer.length > 0
                                        ? ' '.concat(o.layer)
                                        : '',
                                    ' {'
                                )),
                                (c += o.css),
                                r && (c += '}'),
                                o.media && (c += '}'),
                                o.supports && (c += '}');
                            var t = o.sourceMap;
                            t &&
                                'undefined' != typeof btoa &&
                                (c += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(t)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                n.styleTagTransform(c, e, n.options);
                        })(n, e, o);
                    },
                    remove: function() {
                        !(function(e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e);
                        })(n);
                    },
                };
            };
        },
        54865: e => {
            e.exports = function(e, n) {
                if (n.styleSheet) n.styleSheet.cssText = e;
                else {
                    for (; n.firstChild; ) n.removeChild(n.firstChild);
                    n.appendChild(document.createTextNode(e));
                }
            };
        },
    },
]);
//# sourceMappingURL=9602.62bf0f1.js.map
