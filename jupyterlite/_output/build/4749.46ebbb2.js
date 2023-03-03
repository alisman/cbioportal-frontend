'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [4749],
    {
        63867: (o, c, n) => {
            n.d(c, { Z: () => A });
            var r = n(34663),
                s = n.n(r),
                a = n(7638),
                e = n.n(a)()(s());
            e.push([
                o.id,
                '/*\n\n    Name:       shadowfox\n    Author:     overdodactyl (http://github.com/overdodactyl)\n\n    Original shadowfox color scheme by Firefox\n\n*/\n\n.cm-s-shadowfox.CodeMirror { background: #2a2a2e; color: #b1b1b3; }\n.cm-s-shadowfox div.CodeMirror-selected { background: #353B48; }\n.cm-s-shadowfox .CodeMirror-line::selection, .cm-s-shadowfox .CodeMirror-line > span::selection, .cm-s-shadowfox .CodeMirror-line > span > span::selection { background: #353B48; }\n.cm-s-shadowfox .CodeMirror-line::-moz-selection, .cm-s-shadowfox .CodeMirror-line > span::-moz-selection, .cm-s-shadowfox .CodeMirror-line > span > span::-moz-selection { background: #353B48; }\n.cm-s-shadowfox .CodeMirror-gutters { background: #0c0c0d ; border-right: 1px solid #0c0c0d; }\n.cm-s-shadowfox .CodeMirror-guttermarker { color: #555; }\n.cm-s-shadowfox .CodeMirror-linenumber { color: #939393; }\n.cm-s-shadowfox .CodeMirror-cursor { border-left: 1px solid #fff; }\n\n.cm-s-shadowfox span.cm-comment { color: #939393; }\n.cm-s-shadowfox span.cm-atom { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-quote { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-builtin { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-attribute { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-keyword { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-error { color: #FF7DE9; }\n\n.cm-s-shadowfox span.cm-number { color: #6B89FF; }\n.cm-s-shadowfox span.cm-string { color: #6B89FF; }\n.cm-s-shadowfox span.cm-string-2 { color: #6B89FF; }\n\n.cm-s-shadowfox span.cm-meta { color: #939393; }\n.cm-s-shadowfox span.cm-hr { color: #939393; }\n\n.cm-s-shadowfox span.cm-header { color: #75BFFF; }\n.cm-s-shadowfox span.cm-qualifier { color: #75BFFF; }\n.cm-s-shadowfox span.cm-variable-2 { color: #75BFFF; }\n\n.cm-s-shadowfox span.cm-property { color: #86DE74; }\n\n.cm-s-shadowfox span.cm-def { color: #75BFFF; }\n.cm-s-shadowfox span.cm-bracket { color: #75BFFF; }\n.cm-s-shadowfox span.cm-tag { color: #75BFFF; }\n.cm-s-shadowfox span.cm-link:visited { color: #75BFFF; }\n\n.cm-s-shadowfox span.cm-variable { color: #B98EFF; }\n.cm-s-shadowfox span.cm-variable-3 { color: #d7d7db; }\n.cm-s-shadowfox span.cm-link { color: #737373; }\n.cm-s-shadowfox span.cm-operator { color: #b1b1b3; }\n.cm-s-shadowfox span.cm-special { color: #d7d7db; }\n\n.cm-s-shadowfox .CodeMirror-activeline-background { background: rgba(185, 215, 253, .15) }\n.cm-s-shadowfox .CodeMirror-matchingbracket { outline: solid 1px rgba(255, 255, 255, .25); color: white !important; }\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/shadowfox.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;;;;;CAOC;;AAED,6BAA6B,mBAAmB,EAAE,cAAc,EAAE;AAClE,0CAA0C,mBAAmB,EAAE;AAC/D,6JAA6J,mBAAmB,EAAE;AAClL,4KAA4K,mBAAmB,EAAE;AACjM,sCAAsC,oBAAoB,EAAE,+BAA+B,EAAE;AAC7F,2CAA2C,WAAW,EAAE;AACxD,yCAAyC,cAAc,EAAE;AACzD,qCAAqC,2BAA2B,EAAE;;AAElE,kCAAkC,cAAc,EAAE;AAClD,+BAA+B,cAAc,EAAE;AAC/C,gCAAgC,cAAc,EAAE;AAChD,kCAAkC,cAAc,EAAE;AAClD,oCAAoC,cAAc,EAAE;AACpD,kCAAkC,cAAc,EAAE;AAClD,gCAAgC,cAAc,EAAE;;AAEhD,iCAAiC,cAAc,EAAE;AACjD,iCAAiC,cAAc,EAAE;AACjD,mCAAmC,cAAc,EAAE;;AAEnD,+BAA+B,cAAc,EAAE;AAC/C,6BAA6B,cAAc,EAAE;;AAE7C,iCAAiC,cAAc,EAAE;AACjD,oCAAoC,cAAc,EAAE;AACpD,qCAAqC,cAAc,EAAE;;AAErD,mCAAmC,cAAc,EAAE;;AAEnD,8BAA8B,cAAc,EAAE;AAC9C,kCAAkC,cAAc,EAAE;AAClD,8BAA8B,cAAc,EAAE;AAC9C,uCAAuC,cAAc,EAAE;;AAEvD,mCAAmC,cAAc,EAAE;AACnD,qCAAqC,cAAc,EAAE;AACrD,+BAA+B,cAAc,EAAE;AAC/C,mCAAmC,cAAc,EAAE;AACnD,kCAAkC,cAAc,EAAE;;AAElD,oDAAoD,qCAAqC;AACzF,8CAA8C,2CAA2C,EAAE,uBAAuB,EAAE',
                    sourcesContent: [
                        '/*\n\n    Name:       shadowfox\n    Author:     overdodactyl (http://github.com/overdodactyl)\n\n    Original shadowfox color scheme by Firefox\n\n*/\n\n.cm-s-shadowfox.CodeMirror { background: #2a2a2e; color: #b1b1b3; }\n.cm-s-shadowfox div.CodeMirror-selected { background: #353B48; }\n.cm-s-shadowfox .CodeMirror-line::selection, .cm-s-shadowfox .CodeMirror-line > span::selection, .cm-s-shadowfox .CodeMirror-line > span > span::selection { background: #353B48; }\n.cm-s-shadowfox .CodeMirror-line::-moz-selection, .cm-s-shadowfox .CodeMirror-line > span::-moz-selection, .cm-s-shadowfox .CodeMirror-line > span > span::-moz-selection { background: #353B48; }\n.cm-s-shadowfox .CodeMirror-gutters { background: #0c0c0d ; border-right: 1px solid #0c0c0d; }\n.cm-s-shadowfox .CodeMirror-guttermarker { color: #555; }\n.cm-s-shadowfox .CodeMirror-linenumber { color: #939393; }\n.cm-s-shadowfox .CodeMirror-cursor { border-left: 1px solid #fff; }\n\n.cm-s-shadowfox span.cm-comment { color: #939393; }\n.cm-s-shadowfox span.cm-atom { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-quote { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-builtin { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-attribute { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-keyword { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-error { color: #FF7DE9; }\n\n.cm-s-shadowfox span.cm-number { color: #6B89FF; }\n.cm-s-shadowfox span.cm-string { color: #6B89FF; }\n.cm-s-shadowfox span.cm-string-2 { color: #6B89FF; }\n\n.cm-s-shadowfox span.cm-meta { color: #939393; }\n.cm-s-shadowfox span.cm-hr { color: #939393; }\n\n.cm-s-shadowfox span.cm-header { color: #75BFFF; }\n.cm-s-shadowfox span.cm-qualifier { color: #75BFFF; }\n.cm-s-shadowfox span.cm-variable-2 { color: #75BFFF; }\n\n.cm-s-shadowfox span.cm-property { color: #86DE74; }\n\n.cm-s-shadowfox span.cm-def { color: #75BFFF; }\n.cm-s-shadowfox span.cm-bracket { color: #75BFFF; }\n.cm-s-shadowfox span.cm-tag { color: #75BFFF; }\n.cm-s-shadowfox span.cm-link:visited { color: #75BFFF; }\n\n.cm-s-shadowfox span.cm-variable { color: #B98EFF; }\n.cm-s-shadowfox span.cm-variable-3 { color: #d7d7db; }\n.cm-s-shadowfox span.cm-link { color: #737373; }\n.cm-s-shadowfox span.cm-operator { color: #b1b1b3; }\n.cm-s-shadowfox span.cm-special { color: #d7d7db; }\n\n.cm-s-shadowfox .CodeMirror-activeline-background { background: rgba(185, 215, 253, .15) }\n.cm-s-shadowfox .CodeMirror-matchingbracket { outline: solid 1px rgba(255, 255, 255, .25); color: white !important; }\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const A = e;
        },
        7638: o => {
            o.exports = function(o) {
                var c = [];
                return (
                    (c.toString = function() {
                        return this.map(function(c) {
                            var n = '',
                                r = void 0 !== c[5];
                            return (
                                c[4] &&
                                    (n += '@supports ('.concat(c[4], ') {')),
                                c[2] && (n += '@media '.concat(c[2], ' {')),
                                r &&
                                    (n += '@layer'.concat(
                                        c[5].length > 0 ? ' '.concat(c[5]) : '',
                                        ' {'
                                    )),
                                (n += o(c)),
                                r && (n += '}'),
                                c[2] && (n += '}'),
                                c[4] && (n += '}'),
                                n
                            );
                        }).join('');
                    }),
                    (c.i = function(o, n, r, s, a) {
                        'string' == typeof o && (o = [[null, o, void 0]]);
                        var e = {};
                        if (r)
                            for (var A = 0; A < this.length; A++) {
                                var t = this[A][0];
                                null != t && (e[t] = !0);
                            }
                        for (var d = 0; d < o.length; d++) {
                            var i = [].concat(o[d]);
                            (r && e[i[0]]) ||
                                (void 0 !== a &&
                                    (void 0 === i[5] ||
                                        (i[1] = '@layer'
                                            .concat(
                                                i[5].length > 0
                                                    ? ' '.concat(i[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(i[1], '}')),
                                    (i[5] = a)),
                                n &&
                                    (i[2]
                                        ? ((i[1] = '@media '
                                              .concat(i[2], ' {')
                                              .concat(i[1], '}')),
                                          (i[2] = n))
                                        : (i[2] = n)),
                                s &&
                                    (i[4]
                                        ? ((i[1] = '@supports ('
                                              .concat(i[4], ') {')
                                              .concat(i[1], '}')),
                                          (i[4] = s))
                                        : (i[4] = ''.concat(s))),
                                c.push(i));
                        }
                    }),
                    c
                );
            };
        },
        34663: o => {
            o.exports = function(o) {
                var c = o[1],
                    n = o[3];
                if (!n) return c;
                if ('function' == typeof btoa) {
                    var r = btoa(
                            unescape(encodeURIComponent(JSON.stringify(n)))
                        ),
                        s = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            r
                        ),
                        a = '/*# '.concat(s, ' */'),
                        e = n.sources.map(function(o) {
                            return '/*# sourceURL='
                                .concat(n.sourceRoot || '')
                                .concat(o, ' */');
                        });
                    return [c]
                        .concat(e)
                        .concat([a])
                        .join('\n');
                }
                return [c].join('\n');
            };
        },
        44749: (o, c, n) => {
            n.r(c), n.d(c, { default: () => C });
            var r = n(1892),
                s = n.n(r),
                a = n(95760),
                e = n.n(a),
                A = n(38311),
                t = n.n(A),
                d = n(58192),
                i = n.n(d),
                m = n(38060),
                l = n.n(m),
                f = n(54865),
                p = n.n(f),
                h = n(63867),
                u = {};
            (u.styleTagTransform = p()),
                (u.setAttributes = i()),
                (u.insert = t().bind(null, 'head')),
                (u.domAPI = e()),
                (u.insertStyleElement = l()),
                s()(h.Z, u);
            const C = h.Z && h.Z.locals ? h.Z.locals : void 0;
        },
        1892: o => {
            var c = [];
            function n(o) {
                for (var n = -1, r = 0; r < c.length; r++)
                    if (c[r].identifier === o) {
                        n = r;
                        break;
                    }
                return n;
            }
            function r(o, r) {
                for (var a = {}, e = [], A = 0; A < o.length; A++) {
                    var t = o[A],
                        d = r.base ? t[0] + r.base : t[0],
                        i = a[d] || 0,
                        m = ''.concat(d, ' ').concat(i);
                    a[d] = i + 1;
                    var l = n(m),
                        f = {
                            css: t[1],
                            media: t[2],
                            sourceMap: t[3],
                            supports: t[4],
                            layer: t[5],
                        };
                    if (-1 !== l) c[l].references++, c[l].updater(f);
                    else {
                        var p = s(f, r);
                        (r.byIndex = A),
                            c.splice(A, 0, {
                                identifier: m,
                                updater: p,
                                references: 1,
                            });
                    }
                    e.push(m);
                }
                return e;
            }
            function s(o, c) {
                var n = c.domAPI(c);
                return (
                    n.update(o),
                    function(c) {
                        if (c) {
                            if (
                                c.css === o.css &&
                                c.media === o.media &&
                                c.sourceMap === o.sourceMap &&
                                c.supports === o.supports &&
                                c.layer === o.layer
                            )
                                return;
                            n.update((o = c));
                        } else n.remove();
                    }
                );
            }
            o.exports = function(o, s) {
                var a = r((o = o || []), (s = s || {}));
                return function(o) {
                    o = o || [];
                    for (var e = 0; e < a.length; e++) {
                        var A = n(a[e]);
                        c[A].references--;
                    }
                    for (var t = r(o, s), d = 0; d < a.length; d++) {
                        var i = n(a[d]);
                        0 === c[i].references &&
                            (c[i].updater(), c.splice(i, 1));
                    }
                    a = t;
                };
            };
        },
        38311: o => {
            var c = {};
            o.exports = function(o, n) {
                var r = (function(o) {
                    if (void 0 === c[o]) {
                        var n = document.querySelector(o);
                        if (
                            window.HTMLIFrameElement &&
                            n instanceof window.HTMLIFrameElement
                        )
                            try {
                                n = n.contentDocument.head;
                            } catch (o) {
                                n = null;
                            }
                        c[o] = n;
                    }
                    return c[o];
                })(o);
                if (!r)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                r.appendChild(n);
            };
        },
        38060: o => {
            o.exports = function(o) {
                var c = document.createElement('style');
                return (
                    o.setAttributes(c, o.attributes), o.insert(c, o.options), c
                );
            };
        },
        58192: (o, c, n) => {
            o.exports = function(o) {
                var c = n.nc;
                c && o.setAttribute('nonce', c);
            };
        },
        95760: o => {
            o.exports = function(o) {
                var c = o.insertStyleElement(o);
                return {
                    update: function(n) {
                        !(function(o, c, n) {
                            var r = '';
                            n.supports &&
                                (r += '@supports ('.concat(n.supports, ') {')),
                                n.media &&
                                    (r += '@media '.concat(n.media, ' {'));
                            var s = void 0 !== n.layer;
                            s &&
                                (r += '@layer'.concat(
                                    n.layer.length > 0
                                        ? ' '.concat(n.layer)
                                        : '',
                                    ' {'
                                )),
                                (r += n.css),
                                s && (r += '}'),
                                n.media && (r += '}'),
                                n.supports && (r += '}');
                            var a = n.sourceMap;
                            a &&
                                'undefined' != typeof btoa &&
                                (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(a)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                c.styleTagTransform(r, o, c.options);
                        })(c, o, n);
                    },
                    remove: function() {
                        !(function(o) {
                            if (null === o.parentNode) return !1;
                            o.parentNode.removeChild(o);
                        })(c);
                    },
                };
            };
        },
        54865: o => {
            o.exports = function(o, c) {
                if (c.styleSheet) c.styleSheet.cssText = o;
                else {
                    for (; c.firstChild; ) c.removeChild(c.firstChild);
                    c.appendChild(document.createTextNode(o));
                }
            };
        },
    },
]);
//# sourceMappingURL=4749.46ebbb2.js.map
