'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [3051],
    {
        66259: (n, r, e) => {
            e.d(r, { Z: () => i });
            var o = e(34663),
                a = e.n(o),
                c = e(7638),
                t = e.n(c)()(a());
            t.push([
                n.id,
                '/*\n  Name:       material\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://material-theme.site/\n*/\n\n.cm-s-material.CodeMirror {\n  background-color: #263238;\n  color: #EEFFFF;\n}\n\n.cm-s-material .CodeMirror-gutters {\n  background: #263238;\n  color: #546E7A;\n  border: none;\n}\n\n.cm-s-material .CodeMirror-guttermarker,\n.cm-s-material .CodeMirror-guttermarker-subtle,\n.cm-s-material .CodeMirror-linenumber {\n  color: #546E7A;\n}\n\n.cm-s-material .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-material div.CodeMirror-selected {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material .CodeMirror-line::selection,\n.cm-s-material .CodeMirror-line>span::selection,\n.cm-s-material .CodeMirror-line>span>span::selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material .CodeMirror-line::-moz-selection,\n.cm-s-material .CodeMirror-line>span::-moz-selection,\n.cm-s-material .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.cm-s-material .cm-keyword {\n  color: #C792EA;\n}\n\n.cm-s-material .cm-operator {\n  color: #89DDFF;\n}\n\n.cm-s-material .cm-variable-2 {\n  color: #EEFFFF;\n}\n\n.cm-s-material .cm-variable-3,\n.cm-s-material .cm-type {\n  color: #f07178;\n}\n\n.cm-s-material .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-material .cm-atom {\n  color: #F78C6C;\n}\n\n.cm-s-material .cm-number {\n  color: #FF5370;\n}\n\n.cm-s-material .cm-def {\n  color: #82AAFF;\n}\n\n.cm-s-material .cm-string {\n  color: #C3E88D;\n}\n\n.cm-s-material .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-material .cm-comment {\n  color: #546E7A;\n}\n\n.cm-s-material .cm-variable {\n  color: #f07178;\n}\n\n.cm-s-material .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-material .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-material .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-material .cm-property {\n  color: #C792EA;\n}\n\n.cm-s-material .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-material .cm-variable-3,\n.cm-s-material .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-material .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-material .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/material.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;;CAIC;;AAED;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,YAAY;AACd;;AAEA;;;EAGE,cAAc;AAChB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;;;EAGE,oCAAoC;AACtC;;AAEA;;;EAGE,oCAAoC;AACtC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;;AAGA;EACE,+BAA+B;EAC/B,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;EAC1B,uBAAuB;AACzB',
                    sourcesContent: [
                        '/*\n  Name:       material\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://material-theme.site/\n*/\n\n.cm-s-material.CodeMirror {\n  background-color: #263238;\n  color: #EEFFFF;\n}\n\n.cm-s-material .CodeMirror-gutters {\n  background: #263238;\n  color: #546E7A;\n  border: none;\n}\n\n.cm-s-material .CodeMirror-guttermarker,\n.cm-s-material .CodeMirror-guttermarker-subtle,\n.cm-s-material .CodeMirror-linenumber {\n  color: #546E7A;\n}\n\n.cm-s-material .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-material div.CodeMirror-selected {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material .CodeMirror-line::selection,\n.cm-s-material .CodeMirror-line>span::selection,\n.cm-s-material .CodeMirror-line>span>span::selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material .CodeMirror-line::-moz-selection,\n.cm-s-material .CodeMirror-line>span::-moz-selection,\n.cm-s-material .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.cm-s-material .cm-keyword {\n  color: #C792EA;\n}\n\n.cm-s-material .cm-operator {\n  color: #89DDFF;\n}\n\n.cm-s-material .cm-variable-2 {\n  color: #EEFFFF;\n}\n\n.cm-s-material .cm-variable-3,\n.cm-s-material .cm-type {\n  color: #f07178;\n}\n\n.cm-s-material .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-material .cm-atom {\n  color: #F78C6C;\n}\n\n.cm-s-material .cm-number {\n  color: #FF5370;\n}\n\n.cm-s-material .cm-def {\n  color: #82AAFF;\n}\n\n.cm-s-material .cm-string {\n  color: #C3E88D;\n}\n\n.cm-s-material .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-material .cm-comment {\n  color: #546E7A;\n}\n\n.cm-s-material .cm-variable {\n  color: #f07178;\n}\n\n.cm-s-material .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-material .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-material .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-material .cm-property {\n  color: #C792EA;\n}\n\n.cm-s-material .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-material .cm-variable-3,\n.cm-s-material .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-material .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-material .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}',
                    ],
                    sourceRoot: '',
                },
            ]);
            const i = t;
        },
        7638: n => {
            n.exports = function(n) {
                var r = [];
                return (
                    (r.toString = function() {
                        return this.map(function(r) {
                            var e = '',
                                o = void 0 !== r[5];
                            return (
                                r[4] &&
                                    (e += '@supports ('.concat(r[4], ') {')),
                                r[2] && (e += '@media '.concat(r[2], ' {')),
                                o &&
                                    (e += '@layer'.concat(
                                        r[5].length > 0 ? ' '.concat(r[5]) : '',
                                        ' {'
                                    )),
                                (e += n(r)),
                                o && (e += '}'),
                                r[2] && (e += '}'),
                                r[4] && (e += '}'),
                                e
                            );
                        }).join('');
                    }),
                    (r.i = function(n, e, o, a, c) {
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
                                r.push(l));
                        }
                    }),
                    r
                );
            };
        },
        34663: n => {
            n.exports = function(n) {
                var r = n[1],
                    e = n[3];
                if (!e) return r;
                if ('function' == typeof btoa) {
                    var o = btoa(
                            unescape(encodeURIComponent(JSON.stringify(e)))
                        ),
                        a = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            o
                        ),
                        c = '/*# '.concat(a, ' */'),
                        t = e.sources.map(function(n) {
                            return '/*# sourceURL='
                                .concat(e.sourceRoot || '')
                                .concat(n, ' */');
                        });
                    return [r]
                        .concat(t)
                        .concat([c])
                        .join('\n');
                }
                return [r].join('\n');
            };
        },
        83051: (n, r, e) => {
            e.r(r), e.d(r, { default: () => f });
            var o = e(1892),
                a = e.n(o),
                c = e(95760),
                t = e.n(c),
                i = e(38311),
                A = e.n(i),
                m = e(58192),
                l = e.n(m),
                s = e(38060),
                u = e.n(s),
                C = e(54865),
                d = e.n(C),
                E = e(66259),
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
            var r = [];
            function e(n) {
                for (var e = -1, o = 0; o < r.length; o++)
                    if (r[o].identifier === n) {
                        e = o;
                        break;
                    }
                return e;
            }
            function o(n, o) {
                for (var c = {}, t = [], i = 0; i < n.length; i++) {
                    var A = n[i],
                        m = o.base ? A[0] + o.base : A[0],
                        l = c[m] || 0,
                        s = ''.concat(m, ' ').concat(l);
                    c[m] = l + 1;
                    var u = e(s),
                        C = {
                            css: A[1],
                            media: A[2],
                            sourceMap: A[3],
                            supports: A[4],
                            layer: A[5],
                        };
                    if (-1 !== u) r[u].references++, r[u].updater(C);
                    else {
                        var d = a(C, o);
                        (o.byIndex = i),
                            r.splice(i, 0, {
                                identifier: s,
                                updater: d,
                                references: 1,
                            });
                    }
                    t.push(s);
                }
                return t;
            }
            function a(n, r) {
                var e = r.domAPI(r);
                return (
                    e.update(n),
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
                            e.update((n = r));
                        } else e.remove();
                    }
                );
            }
            n.exports = function(n, a) {
                var c = o((n = n || []), (a = a || {}));
                return function(n) {
                    n = n || [];
                    for (var t = 0; t < c.length; t++) {
                        var i = e(c[t]);
                        r[i].references--;
                    }
                    for (var A = o(n, a), m = 0; m < c.length; m++) {
                        var l = e(c[m]);
                        0 === r[l].references &&
                            (r[l].updater(), r.splice(l, 1));
                    }
                    c = A;
                };
            };
        },
        38311: n => {
            var r = {};
            n.exports = function(n, e) {
                var o = (function(n) {
                    if (void 0 === r[n]) {
                        var e = document.querySelector(n);
                        if (
                            window.HTMLIFrameElement &&
                            e instanceof window.HTMLIFrameElement
                        )
                            try {
                                e = e.contentDocument.head;
                            } catch (n) {
                                e = null;
                            }
                        r[n] = e;
                    }
                    return r[n];
                })(n);
                if (!o)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                o.appendChild(e);
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
        58192: (n, r, e) => {
            n.exports = function(n) {
                var r = e.nc;
                r && n.setAttribute('nonce', r);
            };
        },
        95760: n => {
            n.exports = function(n) {
                var r = n.insertStyleElement(n);
                return {
                    update: function(e) {
                        !(function(n, r, e) {
                            var o = '';
                            e.supports &&
                                (o += '@supports ('.concat(e.supports, ') {')),
                                e.media &&
                                    (o += '@media '.concat(e.media, ' {'));
                            var a = void 0 !== e.layer;
                            a &&
                                (o += '@layer'.concat(
                                    e.layer.length > 0
                                        ? ' '.concat(e.layer)
                                        : '',
                                    ' {'
                                )),
                                (o += e.css),
                                a && (o += '}'),
                                e.media && (o += '}'),
                                e.supports && (o += '}');
                            var c = e.sourceMap;
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
                                r.styleTagTransform(o, n, r.options);
                        })(r, n, e);
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
//# sourceMappingURL=3051.34fac68.js.map
