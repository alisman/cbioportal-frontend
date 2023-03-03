'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [554],
    {
        51289: (r, o, c) => {
            c.d(o, { Z: () => t });
            var e = c(34663),
                a = c.n(e),
                n = c(7638),
                A = c.n(n)()(a());
            A.push([
                r.id,
                "/* Port of TextMate's Blackboard theme */\n\n.cm-s-blackboard.CodeMirror { background: #0C1021; color: #F8F8F8; }\n.cm-s-blackboard div.CodeMirror-selected { background: #253B76; }\n.cm-s-blackboard .CodeMirror-line::selection, .cm-s-blackboard .CodeMirror-line > span::selection, .cm-s-blackboard .CodeMirror-line > span > span::selection { background: rgba(37, 59, 118, .99); }\n.cm-s-blackboard .CodeMirror-line::-moz-selection, .cm-s-blackboard .CodeMirror-line > span::-moz-selection, .cm-s-blackboard .CodeMirror-line > span > span::-moz-selection { background: rgba(37, 59, 118, .99); }\n.cm-s-blackboard .CodeMirror-gutters { background: #0C1021; border-right: 0; }\n.cm-s-blackboard .CodeMirror-guttermarker { color: #FBDE2D; }\n.cm-s-blackboard .CodeMirror-guttermarker-subtle { color: #888; }\n.cm-s-blackboard .CodeMirror-linenumber { color: #888; }\n.cm-s-blackboard .CodeMirror-cursor { border-left: 1px solid #A7A7A7; }\n\n.cm-s-blackboard .cm-keyword { color: #FBDE2D; }\n.cm-s-blackboard .cm-atom { color: #D8FA3C; }\n.cm-s-blackboard .cm-number { color: #D8FA3C; }\n.cm-s-blackboard .cm-def { color: #8DA6CE; }\n.cm-s-blackboard .cm-variable { color: #FF6400; }\n.cm-s-blackboard .cm-operator { color: #FBDE2D; }\n.cm-s-blackboard .cm-comment { color: #AEAEAE; }\n.cm-s-blackboard .cm-string { color: #61CE3C; }\n.cm-s-blackboard .cm-string-2 { color: #61CE3C; }\n.cm-s-blackboard .cm-meta { color: #D8FA3C; }\n.cm-s-blackboard .cm-builtin { color: #8DA6CE; }\n.cm-s-blackboard .cm-tag { color: #8DA6CE; }\n.cm-s-blackboard .cm-attribute { color: #8DA6CE; }\n.cm-s-blackboard .cm-header { color: #FF6400; }\n.cm-s-blackboard .cm-hr { color: #AEAEAE; }\n.cm-s-blackboard .cm-link { color: #8DA6CE; }\n.cm-s-blackboard .cm-error { background: #9D1E15; color: #F8F8F8; }\n\n.cm-s-blackboard .CodeMirror-activeline-background { background: #3C3636; }\n.cm-s-blackboard .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }\n",
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/blackboard.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA,wCAAwC;;AAExC,8BAA8B,mBAAmB,EAAE,cAAc,EAAE;AACnE,2CAA2C,mBAAmB,EAAE;AAChE,gKAAgK,kCAAkC,EAAE;AACpM,+KAA+K,kCAAkC,EAAE;AACnN,uCAAuC,mBAAmB,EAAE,eAAe,EAAE;AAC7E,4CAA4C,cAAc,EAAE;AAC5D,mDAAmD,WAAW,EAAE;AAChE,0CAA0C,WAAW,EAAE;AACvD,sCAAsC,8BAA8B,EAAE;;AAEtE,+BAA+B,cAAc,EAAE;AAC/C,4BAA4B,cAAc,EAAE;AAC5C,8BAA8B,cAAc,EAAE;AAC9C,2BAA2B,cAAc,EAAE;AAC3C,gCAAgC,cAAc,EAAE;AAChD,gCAAgC,cAAc,EAAE;AAChD,+BAA+B,cAAc,EAAE;AAC/C,8BAA8B,cAAc,EAAE;AAC9C,gCAAgC,cAAc,EAAE;AAChD,4BAA4B,cAAc,EAAE;AAC5C,+BAA+B,cAAc,EAAE;AAC/C,2BAA2B,cAAc,EAAE;AAC3C,iCAAiC,cAAc,EAAE;AACjD,8BAA8B,cAAc,EAAE;AAC9C,0BAA0B,cAAc,EAAE;AAC1C,4BAA4B,cAAc,EAAE;AAC5C,6BAA6B,mBAAmB,EAAE,cAAc,EAAE;;AAElE,qDAAqD,mBAAmB,EAAE;AAC1E,+CAA+C,sBAAsB,CAAC,sBAAsB,EAAE',
                    sourcesContent: [
                        "/* Port of TextMate's Blackboard theme */\n\n.cm-s-blackboard.CodeMirror { background: #0C1021; color: #F8F8F8; }\n.cm-s-blackboard div.CodeMirror-selected { background: #253B76; }\n.cm-s-blackboard .CodeMirror-line::selection, .cm-s-blackboard .CodeMirror-line > span::selection, .cm-s-blackboard .CodeMirror-line > span > span::selection { background: rgba(37, 59, 118, .99); }\n.cm-s-blackboard .CodeMirror-line::-moz-selection, .cm-s-blackboard .CodeMirror-line > span::-moz-selection, .cm-s-blackboard .CodeMirror-line > span > span::-moz-selection { background: rgba(37, 59, 118, .99); }\n.cm-s-blackboard .CodeMirror-gutters { background: #0C1021; border-right: 0; }\n.cm-s-blackboard .CodeMirror-guttermarker { color: #FBDE2D; }\n.cm-s-blackboard .CodeMirror-guttermarker-subtle { color: #888; }\n.cm-s-blackboard .CodeMirror-linenumber { color: #888; }\n.cm-s-blackboard .CodeMirror-cursor { border-left: 1px solid #A7A7A7; }\n\n.cm-s-blackboard .cm-keyword { color: #FBDE2D; }\n.cm-s-blackboard .cm-atom { color: #D8FA3C; }\n.cm-s-blackboard .cm-number { color: #D8FA3C; }\n.cm-s-blackboard .cm-def { color: #8DA6CE; }\n.cm-s-blackboard .cm-variable { color: #FF6400; }\n.cm-s-blackboard .cm-operator { color: #FBDE2D; }\n.cm-s-blackboard .cm-comment { color: #AEAEAE; }\n.cm-s-blackboard .cm-string { color: #61CE3C; }\n.cm-s-blackboard .cm-string-2 { color: #61CE3C; }\n.cm-s-blackboard .cm-meta { color: #D8FA3C; }\n.cm-s-blackboard .cm-builtin { color: #8DA6CE; }\n.cm-s-blackboard .cm-tag { color: #8DA6CE; }\n.cm-s-blackboard .cm-attribute { color: #8DA6CE; }\n.cm-s-blackboard .cm-header { color: #FF6400; }\n.cm-s-blackboard .cm-hr { color: #AEAEAE; }\n.cm-s-blackboard .cm-link { color: #8DA6CE; }\n.cm-s-blackboard .cm-error { background: #9D1E15; color: #F8F8F8; }\n\n.cm-s-blackboard .CodeMirror-activeline-background { background: #3C3636; }\n.cm-s-blackboard .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }\n",
                    ],
                    sourceRoot: '',
                },
            ]);
            const t = A;
        },
        7638: r => {
            r.exports = function(r) {
                var o = [];
                return (
                    (o.toString = function() {
                        return this.map(function(o) {
                            var c = '',
                                e = void 0 !== o[5];
                            return (
                                o[4] &&
                                    (c += '@supports ('.concat(o[4], ') {')),
                                o[2] && (c += '@media '.concat(o[2], ' {')),
                                e &&
                                    (c += '@layer'.concat(
                                        o[5].length > 0 ? ' '.concat(o[5]) : '',
                                        ' {'
                                    )),
                                (c += r(o)),
                                e && (c += '}'),
                                o[2] && (c += '}'),
                                o[4] && (c += '}'),
                                c
                            );
                        }).join('');
                    }),
                    (o.i = function(r, c, e, a, n) {
                        'string' == typeof r && (r = [[null, r, void 0]]);
                        var A = {};
                        if (e)
                            for (var t = 0; t < this.length; t++) {
                                var s = this[t][0];
                                null != s && (A[s] = !0);
                            }
                        for (var l = 0; l < r.length; l++) {
                            var i = [].concat(r[l]);
                            (e && A[i[0]]) ||
                                (void 0 !== n &&
                                    (void 0 === i[5] ||
                                        (i[1] = '@layer'
                                            .concat(
                                                i[5].length > 0
                                                    ? ' '.concat(i[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(i[1], '}')),
                                    (i[5] = n)),
                                c &&
                                    (i[2]
                                        ? ((i[1] = '@media '
                                              .concat(i[2], ' {')
                                              .concat(i[1], '}')),
                                          (i[2] = c))
                                        : (i[2] = c)),
                                a &&
                                    (i[4]
                                        ? ((i[1] = '@supports ('
                                              .concat(i[4], ') {')
                                              .concat(i[1], '}')),
                                          (i[4] = a))
                                        : (i[4] = ''.concat(a))),
                                o.push(i));
                        }
                    }),
                    o
                );
            };
        },
        34663: r => {
            r.exports = function(r) {
                var o = r[1],
                    c = r[3];
                if (!c) return o;
                if ('function' == typeof btoa) {
                    var e = btoa(
                            unescape(encodeURIComponent(JSON.stringify(c)))
                        ),
                        a = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            e
                        ),
                        n = '/*# '.concat(a, ' */'),
                        A = c.sources.map(function(r) {
                            return '/*# sourceURL='
                                .concat(c.sourceRoot || '')
                                .concat(r, ' */');
                        });
                    return [o]
                        .concat(A)
                        .concat([n])
                        .join('\n');
                }
                return [o].join('\n');
            };
        },
        20554: (r, o, c) => {
            c.r(o), c.d(o, { default: () => k });
            var e = c(1892),
                a = c.n(e),
                n = c(95760),
                A = c.n(n),
                t = c(38311),
                s = c.n(t),
                l = c(58192),
                i = c.n(l),
                d = c(38060),
                b = c.n(d),
                m = c(54865),
                C = c.n(m),
                u = c(51289),
                E = {};
            (E.styleTagTransform = C()),
                (E.setAttributes = i()),
                (E.insert = s().bind(null, 'head')),
                (E.domAPI = A()),
                (E.insertStyleElement = b()),
                a()(u.Z, E);
            const k = u.Z && u.Z.locals ? u.Z.locals : void 0;
        },
        1892: r => {
            var o = [];
            function c(r) {
                for (var c = -1, e = 0; e < o.length; e++)
                    if (o[e].identifier === r) {
                        c = e;
                        break;
                    }
                return c;
            }
            function e(r, e) {
                for (var n = {}, A = [], t = 0; t < r.length; t++) {
                    var s = r[t],
                        l = e.base ? s[0] + e.base : s[0],
                        i = n[l] || 0,
                        d = ''.concat(l, ' ').concat(i);
                    n[l] = i + 1;
                    var b = c(d),
                        m = {
                            css: s[1],
                            media: s[2],
                            sourceMap: s[3],
                            supports: s[4],
                            layer: s[5],
                        };
                    if (-1 !== b) o[b].references++, o[b].updater(m);
                    else {
                        var C = a(m, e);
                        (e.byIndex = t),
                            o.splice(t, 0, {
                                identifier: d,
                                updater: C,
                                references: 1,
                            });
                    }
                    A.push(d);
                }
                return A;
            }
            function a(r, o) {
                var c = o.domAPI(o);
                return (
                    c.update(r),
                    function(o) {
                        if (o) {
                            if (
                                o.css === r.css &&
                                o.media === r.media &&
                                o.sourceMap === r.sourceMap &&
                                o.supports === r.supports &&
                                o.layer === r.layer
                            )
                                return;
                            c.update((r = o));
                        } else c.remove();
                    }
                );
            }
            r.exports = function(r, a) {
                var n = e((r = r || []), (a = a || {}));
                return function(r) {
                    r = r || [];
                    for (var A = 0; A < n.length; A++) {
                        var t = c(n[A]);
                        o[t].references--;
                    }
                    for (var s = e(r, a), l = 0; l < n.length; l++) {
                        var i = c(n[l]);
                        0 === o[i].references &&
                            (o[i].updater(), o.splice(i, 1));
                    }
                    n = s;
                };
            };
        },
        38311: r => {
            var o = {};
            r.exports = function(r, c) {
                var e = (function(r) {
                    if (void 0 === o[r]) {
                        var c = document.querySelector(r);
                        if (
                            window.HTMLIFrameElement &&
                            c instanceof window.HTMLIFrameElement
                        )
                            try {
                                c = c.contentDocument.head;
                            } catch (r) {
                                c = null;
                            }
                        o[r] = c;
                    }
                    return o[r];
                })(r);
                if (!e)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                e.appendChild(c);
            };
        },
        38060: r => {
            r.exports = function(r) {
                var o = document.createElement('style');
                return (
                    r.setAttributes(o, r.attributes), r.insert(o, r.options), o
                );
            };
        },
        58192: (r, o, c) => {
            r.exports = function(r) {
                var o = c.nc;
                o && r.setAttribute('nonce', o);
            };
        },
        95760: r => {
            r.exports = function(r) {
                var o = r.insertStyleElement(r);
                return {
                    update: function(c) {
                        !(function(r, o, c) {
                            var e = '';
                            c.supports &&
                                (e += '@supports ('.concat(c.supports, ') {')),
                                c.media &&
                                    (e += '@media '.concat(c.media, ' {'));
                            var a = void 0 !== c.layer;
                            a &&
                                (e += '@layer'.concat(
                                    c.layer.length > 0
                                        ? ' '.concat(c.layer)
                                        : '',
                                    ' {'
                                )),
                                (e += c.css),
                                a && (e += '}'),
                                c.media && (e += '}'),
                                c.supports && (e += '}');
                            var n = c.sourceMap;
                            n &&
                                'undefined' != typeof btoa &&
                                (e += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(n)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                o.styleTagTransform(e, r, o.options);
                        })(o, r, c);
                    },
                    remove: function() {
                        !(function(r) {
                            if (null === r.parentNode) return !1;
                            r.parentNode.removeChild(r);
                        })(o);
                    },
                };
            };
        },
        54865: r => {
            r.exports = function(r, o) {
                if (o.styleSheet) o.styleSheet.cssText = r;
                else {
                    for (; o.firstChild; ) o.removeChild(o.firstChild);
                    o.appendChild(document.createTextNode(r));
                }
            };
        },
    },
]);
//# sourceMappingURL=554.ac98303.js.map
