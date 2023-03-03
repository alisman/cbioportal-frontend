'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [6576],
    {
        92138: (n, e, r) => {
            r.d(e, { Z: () => i });
            var o = r(34663),
                a = r.n(o),
                c = r(7638),
                t = r.n(c)()(a());
            t.push([
                n.id,
                '/*\n  Name:       material\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://material-theme.site/\n*/\n\n.cm-s-material-ocean.CodeMirror {\n  background-color: #0F111A;\n  color: #8F93A2;\n}\n\n.cm-s-material-ocean .CodeMirror-gutters {\n  background: #0F111A;\n  color: #464B5D;\n  border: none;\n}\n\n.cm-s-material-ocean .CodeMirror-guttermarker,\n.cm-s-material-ocean .CodeMirror-guttermarker-subtle,\n.cm-s-material-ocean .CodeMirror-linenumber {\n  color: #464B5D;\n}\n\n.cm-s-material-ocean .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-material-ocean div.CodeMirror-selected {\n  background: rgba(113, 124, 180, 0.2);\n}\n\n.cm-s-material-ocean.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(113, 124, 180, 0.2);\n}\n\n.cm-s-material-ocean .CodeMirror-line::selection,\n.cm-s-material-ocean .CodeMirror-line>span::selection,\n.cm-s-material-ocean .CodeMirror-line>span>span::selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-ocean .CodeMirror-line::-moz-selection,\n.cm-s-material-ocean .CodeMirror-line>span::-moz-selection,\n.cm-s-material-ocean .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-ocean .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.cm-s-material-ocean .cm-keyword {\n  color: #C792EA;\n}\n\n.cm-s-material-ocean .cm-operator {\n  color: #89DDFF;\n}\n\n.cm-s-material-ocean .cm-variable-2 {\n  color: #EEFFFF;\n}\n\n.cm-s-material-ocean .cm-variable-3,\n.cm-s-material-ocean .cm-type {\n  color: #f07178;\n}\n\n.cm-s-material-ocean .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-material-ocean .cm-atom {\n  color: #F78C6C;\n}\n\n.cm-s-material-ocean .cm-number {\n  color: #FF5370;\n}\n\n.cm-s-material-ocean .cm-def {\n  color: #82AAFF;\n}\n\n.cm-s-material-ocean .cm-string {\n  color: #C3E88D;\n}\n\n.cm-s-material-ocean .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-material-ocean .cm-comment {\n  color: #464B5D;\n}\n\n.cm-s-material-ocean .cm-variable {\n  color: #f07178;\n}\n\n.cm-s-material-ocean .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-material-ocean .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-material-ocean .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-material-ocean .cm-property {\n  color: #C792EA;\n}\n\n.cm-s-material-ocean .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-material-ocean .cm-variable-3,\n.cm-s-material-ocean .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-material-ocean .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-material-ocean .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/material-ocean.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;;CAIC;;AAED;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,YAAY;AACd;;AAEA;;;EAGE,cAAc;AAChB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;;;EAGE,oCAAoC;AACtC;;AAEA;;;EAGE,oCAAoC;AACtC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;;AAGA;EACE,+BAA+B;EAC/B,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;EAC1B,uBAAuB;AACzB',
                    sourcesContent: [
                        '/*\n  Name:       material\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://material-theme.site/\n*/\n\n.cm-s-material-ocean.CodeMirror {\n  background-color: #0F111A;\n  color: #8F93A2;\n}\n\n.cm-s-material-ocean .CodeMirror-gutters {\n  background: #0F111A;\n  color: #464B5D;\n  border: none;\n}\n\n.cm-s-material-ocean .CodeMirror-guttermarker,\n.cm-s-material-ocean .CodeMirror-guttermarker-subtle,\n.cm-s-material-ocean .CodeMirror-linenumber {\n  color: #464B5D;\n}\n\n.cm-s-material-ocean .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-material-ocean div.CodeMirror-selected {\n  background: rgba(113, 124, 180, 0.2);\n}\n\n.cm-s-material-ocean.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(113, 124, 180, 0.2);\n}\n\n.cm-s-material-ocean .CodeMirror-line::selection,\n.cm-s-material-ocean .CodeMirror-line>span::selection,\n.cm-s-material-ocean .CodeMirror-line>span>span::selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-ocean .CodeMirror-line::-moz-selection,\n.cm-s-material-ocean .CodeMirror-line>span::-moz-selection,\n.cm-s-material-ocean .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-ocean .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.cm-s-material-ocean .cm-keyword {\n  color: #C792EA;\n}\n\n.cm-s-material-ocean .cm-operator {\n  color: #89DDFF;\n}\n\n.cm-s-material-ocean .cm-variable-2 {\n  color: #EEFFFF;\n}\n\n.cm-s-material-ocean .cm-variable-3,\n.cm-s-material-ocean .cm-type {\n  color: #f07178;\n}\n\n.cm-s-material-ocean .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-material-ocean .cm-atom {\n  color: #F78C6C;\n}\n\n.cm-s-material-ocean .cm-number {\n  color: #FF5370;\n}\n\n.cm-s-material-ocean .cm-def {\n  color: #82AAFF;\n}\n\n.cm-s-material-ocean .cm-string {\n  color: #C3E88D;\n}\n\n.cm-s-material-ocean .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-material-ocean .cm-comment {\n  color: #464B5D;\n}\n\n.cm-s-material-ocean .cm-variable {\n  color: #f07178;\n}\n\n.cm-s-material-ocean .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-material-ocean .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-material-ocean .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-material-ocean .cm-property {\n  color: #C792EA;\n}\n\n.cm-s-material-ocean .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-material-ocean .cm-variable-3,\n.cm-s-material-ocean .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-material-ocean .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-material-ocean .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}',
                    ],
                    sourceRoot: '',
                },
            ]);
            const i = t;
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
                    (e.i = function(n, r, o, a, c) {
                        'string' == typeof n && (n = [[null, n, void 0]]);
                        var t = {};
                        if (o)
                            for (var i = 0; i < this.length; i++) {
                                var A = this[i][0];
                                null != A && (t[A] = !0);
                            }
                        for (var m = 0; m < n.length; m++) {
                            var l = [].concat(n[m]);
                            (o && t[l[0]]) ||
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
                                r &&
                                    (l[2]
                                        ? ((l[1] = '@media '
                                              .concat(l[2], ' {')
                                              .concat(l[1], '}')),
                                          (l[2] = r))
                                        : (l[2] = r)),
                                a &&
                                    (l[4]
                                        ? ((l[1] = '@supports ('
                                              .concat(l[4], ') {')
                                              .concat(l[1], '}')),
                                          (l[4] = a))
                                        : (l[4] = ''.concat(a))),
                                e.push(l));
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
                        a = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            o
                        ),
                        c = '/*# '.concat(a, ' */'),
                        t = r.sources.map(function(n) {
                            return '/*# sourceURL='
                                .concat(r.sourceRoot || '')
                                .concat(n, ' */');
                        });
                    return [e]
                        .concat(t)
                        .concat([c])
                        .join('\n');
                }
                return [e].join('\n');
            };
        },
        26576: (n, e, r) => {
            r.r(e), r.d(e, { default: () => f });
            var o = r(1892),
                a = r.n(o),
                c = r(95760),
                t = r.n(c),
                i = r(38311),
                A = r.n(i),
                m = r(58192),
                l = r.n(m),
                s = r(38060),
                u = r.n(s),
                C = r(54865),
                d = r.n(C),
                E = r(92138),
                p = {};
            (p.styleTagTransform = d()),
                (p.setAttributes = l()),
                (p.insert = A().bind(null, 'head')),
                (p.domAPI = t()),
                (p.insertStyleElement = u()),
                a()(E.Z, p);
            const f = E.Z && E.Z.locals ? E.Z.locals : void 0;
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
                for (var c = {}, t = [], i = 0; i < n.length; i++) {
                    var A = n[i],
                        m = o.base ? A[0] + o.base : A[0],
                        l = c[m] || 0,
                        s = ''.concat(m, ' ').concat(l);
                    c[m] = l + 1;
                    var u = r(s),
                        C = {
                            css: A[1],
                            media: A[2],
                            sourceMap: A[3],
                            supports: A[4],
                            layer: A[5],
                        };
                    if (-1 !== u) e[u].references++, e[u].updater(C);
                    else {
                        var d = a(C, o);
                        (o.byIndex = i),
                            e.splice(i, 0, {
                                identifier: s,
                                updater: d,
                                references: 1,
                            });
                    }
                    t.push(s);
                }
                return t;
            }
            function a(n, e) {
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
            n.exports = function(n, a) {
                var c = o((n = n || []), (a = a || {}));
                return function(n) {
                    n = n || [];
                    for (var t = 0; t < c.length; t++) {
                        var i = r(c[t]);
                        e[i].references--;
                    }
                    for (var A = o(n, a), m = 0; m < c.length; m++) {
                        var l = r(c[m]);
                        0 === e[l].references &&
                            (e[l].updater(), e.splice(l, 1));
                    }
                    c = A;
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
                            var a = void 0 !== r.layer;
                            a &&
                                (o += '@layer'.concat(
                                    r.layer.length > 0
                                        ? ' '.concat(r.layer)
                                        : '',
                                    ' {'
                                )),
                                (o += r.css),
                                a && (o += '}'),
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
//# sourceMappingURL=6576.3ea568e.js.map
