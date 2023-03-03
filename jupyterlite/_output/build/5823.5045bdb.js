'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [5823],
    {
        92608: (r, o, e) => {
            e.d(o, { Z: () => i });
            var n = e(34663),
                a = e.n(n),
                t = e(7638),
                c = e.n(t)()(a());
            c.push([
                r.id,
                '/*\n\n    Name:       Paraíso (Light)\n    Author:     Jan T. Sott\n\n    Color scheme by Jan T. Sott (https://github.com/idleberg/Paraiso-CodeMirror)\n    Inspired by the art of Rubens LP (http://www.rubenslp.com.br)\n\n*/\n\n.cm-s-paraiso-light.CodeMirror { background: #e7e9db; color: #41323f; }\n.cm-s-paraiso-light div.CodeMirror-selected { background: #b9b6b0; }\n.cm-s-paraiso-light .CodeMirror-line::selection, .cm-s-paraiso-light .CodeMirror-line > span::selection, .cm-s-paraiso-light .CodeMirror-line > span > span::selection { background: #b9b6b0; }\n.cm-s-paraiso-light .CodeMirror-line::-moz-selection, .cm-s-paraiso-light .CodeMirror-line > span::-moz-selection, .cm-s-paraiso-light .CodeMirror-line > span > span::-moz-selection { background: #b9b6b0; }\n.cm-s-paraiso-light .CodeMirror-gutters { background: #e7e9db; border-right: 0px; }\n.cm-s-paraiso-light .CodeMirror-guttermarker { color: black; }\n.cm-s-paraiso-light .CodeMirror-guttermarker-subtle { color: #8d8687; }\n.cm-s-paraiso-light .CodeMirror-linenumber { color: #8d8687; }\n.cm-s-paraiso-light .CodeMirror-cursor { border-left: 1px solid #776e71; }\n\n.cm-s-paraiso-light span.cm-comment { color: #e96ba8; }\n.cm-s-paraiso-light span.cm-atom { color: #815ba4; }\n.cm-s-paraiso-light span.cm-number { color: #815ba4; }\n\n.cm-s-paraiso-light span.cm-property, .cm-s-paraiso-light span.cm-attribute { color: #48b685; }\n.cm-s-paraiso-light span.cm-keyword { color: #ef6155; }\n.cm-s-paraiso-light span.cm-string { color: #fec418; }\n\n.cm-s-paraiso-light span.cm-variable { color: #48b685; }\n.cm-s-paraiso-light span.cm-variable-2 { color: #06b6ef; }\n.cm-s-paraiso-light span.cm-def { color: #f99b15; }\n.cm-s-paraiso-light span.cm-bracket { color: #41323f; }\n.cm-s-paraiso-light span.cm-tag { color: #ef6155; }\n.cm-s-paraiso-light span.cm-link { color: #815ba4; }\n.cm-s-paraiso-light span.cm-error { background: #ef6155; color: #776e71; }\n\n.cm-s-paraiso-light .CodeMirror-activeline-background { background: #CFD1C4; }\n.cm-s-paraiso-light .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/paraiso-light.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;;;;;;CAQC;;AAED,iCAAiC,mBAAmB,EAAE,cAAc,EAAE;AACtE,8CAA8C,mBAAmB,EAAE;AACnE,yKAAyK,mBAAmB,EAAE;AAC9L,wLAAwL,mBAAmB,EAAE;AAC7M,0CAA0C,mBAAmB,EAAE,iBAAiB,EAAE;AAClF,+CAA+C,YAAY,EAAE;AAC7D,sDAAsD,cAAc,EAAE;AACtE,6CAA6C,cAAc,EAAE;AAC7D,yCAAyC,8BAA8B,EAAE;;AAEzE,sCAAsC,cAAc,EAAE;AACtD,mCAAmC,cAAc,EAAE;AACnD,qCAAqC,cAAc,EAAE;;AAErD,8EAA8E,cAAc,EAAE;AAC9F,sCAAsC,cAAc,EAAE;AACtD,qCAAqC,cAAc,EAAE;;AAErD,uCAAuC,cAAc,EAAE;AACvD,yCAAyC,cAAc,EAAE;AACzD,kCAAkC,cAAc,EAAE;AAClD,sCAAsC,cAAc,EAAE;AACtD,kCAAkC,cAAc,EAAE;AAClD,mCAAmC,cAAc,EAAE;AACnD,oCAAoC,mBAAmB,EAAE,cAAc,EAAE;;AAEzE,wDAAwD,mBAAmB,EAAE;AAC7E,kDAAkD,0BAA0B,EAAE,uBAAuB,EAAE',
                    sourcesContent: [
                        '/*\n\n    Name:       Paraíso (Light)\n    Author:     Jan T. Sott\n\n    Color scheme by Jan T. Sott (https://github.com/idleberg/Paraiso-CodeMirror)\n    Inspired by the art of Rubens LP (http://www.rubenslp.com.br)\n\n*/\n\n.cm-s-paraiso-light.CodeMirror { background: #e7e9db; color: #41323f; }\n.cm-s-paraiso-light div.CodeMirror-selected { background: #b9b6b0; }\n.cm-s-paraiso-light .CodeMirror-line::selection, .cm-s-paraiso-light .CodeMirror-line > span::selection, .cm-s-paraiso-light .CodeMirror-line > span > span::selection { background: #b9b6b0; }\n.cm-s-paraiso-light .CodeMirror-line::-moz-selection, .cm-s-paraiso-light .CodeMirror-line > span::-moz-selection, .cm-s-paraiso-light .CodeMirror-line > span > span::-moz-selection { background: #b9b6b0; }\n.cm-s-paraiso-light .CodeMirror-gutters { background: #e7e9db; border-right: 0px; }\n.cm-s-paraiso-light .CodeMirror-guttermarker { color: black; }\n.cm-s-paraiso-light .CodeMirror-guttermarker-subtle { color: #8d8687; }\n.cm-s-paraiso-light .CodeMirror-linenumber { color: #8d8687; }\n.cm-s-paraiso-light .CodeMirror-cursor { border-left: 1px solid #776e71; }\n\n.cm-s-paraiso-light span.cm-comment { color: #e96ba8; }\n.cm-s-paraiso-light span.cm-atom { color: #815ba4; }\n.cm-s-paraiso-light span.cm-number { color: #815ba4; }\n\n.cm-s-paraiso-light span.cm-property, .cm-s-paraiso-light span.cm-attribute { color: #48b685; }\n.cm-s-paraiso-light span.cm-keyword { color: #ef6155; }\n.cm-s-paraiso-light span.cm-string { color: #fec418; }\n\n.cm-s-paraiso-light span.cm-variable { color: #48b685; }\n.cm-s-paraiso-light span.cm-variable-2 { color: #06b6ef; }\n.cm-s-paraiso-light span.cm-def { color: #f99b15; }\n.cm-s-paraiso-light span.cm-bracket { color: #41323f; }\n.cm-s-paraiso-light span.cm-tag { color: #ef6155; }\n.cm-s-paraiso-light span.cm-link { color: #815ba4; }\n.cm-s-paraiso-light span.cm-error { background: #ef6155; color: #776e71; }\n\n.cm-s-paraiso-light .CodeMirror-activeline-background { background: #CFD1C4; }\n.cm-s-paraiso-light .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const i = c;
        },
        7638: r => {
            r.exports = function(r) {
                var o = [];
                return (
                    (o.toString = function() {
                        return this.map(function(o) {
                            var e = '',
                                n = void 0 !== o[5];
                            return (
                                o[4] &&
                                    (e += '@supports ('.concat(o[4], ') {')),
                                o[2] && (e += '@media '.concat(o[2], ' {')),
                                n &&
                                    (e += '@layer'.concat(
                                        o[5].length > 0 ? ' '.concat(o[5]) : '',
                                        ' {'
                                    )),
                                (e += r(o)),
                                n && (e += '}'),
                                o[2] && (e += '}'),
                                o[4] && (e += '}'),
                                e
                            );
                        }).join('');
                    }),
                    (o.i = function(r, e, n, a, t) {
                        'string' == typeof r && (r = [[null, r, void 0]]);
                        var c = {};
                        if (n)
                            for (var i = 0; i < this.length; i++) {
                                var s = this[i][0];
                                null != s && (c[s] = !0);
                            }
                        for (var A = 0; A < r.length; A++) {
                            var l = [].concat(r[A]);
                            (n && c[l[0]]) ||
                                (void 0 !== t &&
                                    (void 0 === l[5] ||
                                        (l[1] = '@layer'
                                            .concat(
                                                l[5].length > 0
                                                    ? ' '.concat(l[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(l[1], '}')),
                                    (l[5] = t)),
                                e &&
                                    (l[2]
                                        ? ((l[1] = '@media '
                                              .concat(l[2], ' {')
                                              .concat(l[1], '}')),
                                          (l[2] = e))
                                        : (l[2] = e)),
                                a &&
                                    (l[4]
                                        ? ((l[1] = '@supports ('
                                              .concat(l[4], ') {')
                                              .concat(l[1], '}')),
                                          (l[4] = a))
                                        : (l[4] = ''.concat(a))),
                                o.push(l));
                        }
                    }),
                    o
                );
            };
        },
        34663: r => {
            r.exports = function(r) {
                var o = r[1],
                    e = r[3];
                if (!e) return o;
                if ('function' == typeof btoa) {
                    var n = btoa(
                            unescape(encodeURIComponent(JSON.stringify(e)))
                        ),
                        a = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            n
                        ),
                        t = '/*# '.concat(a, ' */'),
                        c = e.sources.map(function(r) {
                            return '/*# sourceURL='
                                .concat(e.sourceRoot || '')
                                .concat(r, ' */');
                        });
                    return [o]
                        .concat(c)
                        .concat([t])
                        .join('\n');
                }
                return [o].join('\n');
            };
        },
        5823: (r, o, e) => {
            e.r(o), e.d(o, { default: () => b });
            var n = e(1892),
                a = e.n(n),
                t = e(95760),
                c = e.n(t),
                i = e(38311),
                s = e.n(i),
                A = e(58192),
                l = e.n(A),
                p = e(38060),
                m = e.n(p),
                u = e(54865),
                d = e.n(u),
                h = e(92608),
                g = {};
            (g.styleTagTransform = d()),
                (g.setAttributes = l()),
                (g.insert = s().bind(null, 'head')),
                (g.domAPI = c()),
                (g.insertStyleElement = m()),
                a()(h.Z, g);
            const b = h.Z && h.Z.locals ? h.Z.locals : void 0;
        },
        1892: r => {
            var o = [];
            function e(r) {
                for (var e = -1, n = 0; n < o.length; n++)
                    if (o[n].identifier === r) {
                        e = n;
                        break;
                    }
                return e;
            }
            function n(r, n) {
                for (var t = {}, c = [], i = 0; i < r.length; i++) {
                    var s = r[i],
                        A = n.base ? s[0] + n.base : s[0],
                        l = t[A] || 0,
                        p = ''.concat(A, ' ').concat(l);
                    t[A] = l + 1;
                    var m = e(p),
                        u = {
                            css: s[1],
                            media: s[2],
                            sourceMap: s[3],
                            supports: s[4],
                            layer: s[5],
                        };
                    if (-1 !== m) o[m].references++, o[m].updater(u);
                    else {
                        var d = a(u, n);
                        (n.byIndex = i),
                            o.splice(i, 0, {
                                identifier: p,
                                updater: d,
                                references: 1,
                            });
                    }
                    c.push(p);
                }
                return c;
            }
            function a(r, o) {
                var e = o.domAPI(o);
                return (
                    e.update(r),
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
                            e.update((r = o));
                        } else e.remove();
                    }
                );
            }
            r.exports = function(r, a) {
                var t = n((r = r || []), (a = a || {}));
                return function(r) {
                    r = r || [];
                    for (var c = 0; c < t.length; c++) {
                        var i = e(t[c]);
                        o[i].references--;
                    }
                    for (var s = n(r, a), A = 0; A < t.length; A++) {
                        var l = e(t[A]);
                        0 === o[l].references &&
                            (o[l].updater(), o.splice(l, 1));
                    }
                    t = s;
                };
            };
        },
        38311: r => {
            var o = {};
            r.exports = function(r, e) {
                var n = (function(r) {
                    if (void 0 === o[r]) {
                        var e = document.querySelector(r);
                        if (
                            window.HTMLIFrameElement &&
                            e instanceof window.HTMLIFrameElement
                        )
                            try {
                                e = e.contentDocument.head;
                            } catch (r) {
                                e = null;
                            }
                        o[r] = e;
                    }
                    return o[r];
                })(r);
                if (!n)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                n.appendChild(e);
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
        58192: (r, o, e) => {
            r.exports = function(r) {
                var o = e.nc;
                o && r.setAttribute('nonce', o);
            };
        },
        95760: r => {
            r.exports = function(r) {
                var o = r.insertStyleElement(r);
                return {
                    update: function(e) {
                        !(function(r, o, e) {
                            var n = '';
                            e.supports &&
                                (n += '@supports ('.concat(e.supports, ') {')),
                                e.media &&
                                    (n += '@media '.concat(e.media, ' {'));
                            var a = void 0 !== e.layer;
                            a &&
                                (n += '@layer'.concat(
                                    e.layer.length > 0
                                        ? ' '.concat(e.layer)
                                        : '',
                                    ' {'
                                )),
                                (n += e.css),
                                a && (n += '}'),
                                e.media && (n += '}'),
                                e.supports && (n += '}');
                            var t = e.sourceMap;
                            t &&
                                'undefined' != typeof btoa &&
                                (n += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(t)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                o.styleTagTransform(n, r, o.options);
                        })(o, r, e);
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
//# sourceMappingURL=5823.5045bdb.js.map
