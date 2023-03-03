'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [9196],
    {
        47681: (r, n, e) => {
            e.d(n, { Z: () => i });
            var a = e(34663),
                o = e.n(a),
                c = e(7638),
                t = e.n(c)()(o());
            t.push([
                r.id,
                '/*\n  Name:       material\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://material-theme.site/\n*/\n\n.cm-s-material-darker.CodeMirror {\n  background-color: #212121;\n  color: #EEFFFF;\n}\n\n.cm-s-material-darker .CodeMirror-gutters {\n  background: #212121;\n  color: #545454;\n  border: none;\n}\n\n.cm-s-material-darker .CodeMirror-guttermarker,\n.cm-s-material-darker .CodeMirror-guttermarker-subtle,\n.cm-s-material-darker .CodeMirror-linenumber {\n  color: #545454;\n}\n\n.cm-s-material-darker .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-material-darker div.CodeMirror-selected {\n  background: rgba(97, 97, 97, 0.2);\n}\n\n.cm-s-material-darker.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(97, 97, 97, 0.2);\n}\n\n.cm-s-material-darker .CodeMirror-line::selection,\n.cm-s-material-darker .CodeMirror-line>span::selection,\n.cm-s-material-darker .CodeMirror-line>span>span::selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-darker .CodeMirror-line::-moz-selection,\n.cm-s-material-darker .CodeMirror-line>span::-moz-selection,\n.cm-s-material-darker .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-darker .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.cm-s-material-darker .cm-keyword {\n  color: #C792EA;\n}\n\n.cm-s-material-darker .cm-operator {\n  color: #89DDFF;\n}\n\n.cm-s-material-darker .cm-variable-2 {\n  color: #EEFFFF;\n}\n\n.cm-s-material-darker .cm-variable-3,\n.cm-s-material-darker .cm-type {\n  color: #f07178;\n}\n\n.cm-s-material-darker .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-material-darker .cm-atom {\n  color: #F78C6C;\n}\n\n.cm-s-material-darker .cm-number {\n  color: #FF5370;\n}\n\n.cm-s-material-darker .cm-def {\n  color: #82AAFF;\n}\n\n.cm-s-material-darker .cm-string {\n  color: #C3E88D;\n}\n\n.cm-s-material-darker .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-material-darker .cm-comment {\n  color: #545454;\n}\n\n.cm-s-material-darker .cm-variable {\n  color: #f07178;\n}\n\n.cm-s-material-darker .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-material-darker .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-material-darker .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-material-darker .cm-property {\n  color: #C792EA;\n}\n\n.cm-s-material-darker .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-material-darker .cm-variable-3,\n.cm-s-material-darker .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-material-darker .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-material-darker .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/material-darker.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;;CAIC;;AAED;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,YAAY;AACd;;AAEA;;;EAGE,cAAc;AAChB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;;;EAGE,oCAAoC;AACtC;;AAEA;;;EAGE,oCAAoC;AACtC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;;AAGA;EACE,+BAA+B;EAC/B,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;EAC1B,uBAAuB;AACzB',
                    sourcesContent: [
                        '/*\n  Name:       material\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://material-theme.site/\n*/\n\n.cm-s-material-darker.CodeMirror {\n  background-color: #212121;\n  color: #EEFFFF;\n}\n\n.cm-s-material-darker .CodeMirror-gutters {\n  background: #212121;\n  color: #545454;\n  border: none;\n}\n\n.cm-s-material-darker .CodeMirror-guttermarker,\n.cm-s-material-darker .CodeMirror-guttermarker-subtle,\n.cm-s-material-darker .CodeMirror-linenumber {\n  color: #545454;\n}\n\n.cm-s-material-darker .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-material-darker div.CodeMirror-selected {\n  background: rgba(97, 97, 97, 0.2);\n}\n\n.cm-s-material-darker.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(97, 97, 97, 0.2);\n}\n\n.cm-s-material-darker .CodeMirror-line::selection,\n.cm-s-material-darker .CodeMirror-line>span::selection,\n.cm-s-material-darker .CodeMirror-line>span>span::selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-darker .CodeMirror-line::-moz-selection,\n.cm-s-material-darker .CodeMirror-line>span::-moz-selection,\n.cm-s-material-darker .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-darker .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.cm-s-material-darker .cm-keyword {\n  color: #C792EA;\n}\n\n.cm-s-material-darker .cm-operator {\n  color: #89DDFF;\n}\n\n.cm-s-material-darker .cm-variable-2 {\n  color: #EEFFFF;\n}\n\n.cm-s-material-darker .cm-variable-3,\n.cm-s-material-darker .cm-type {\n  color: #f07178;\n}\n\n.cm-s-material-darker .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-material-darker .cm-atom {\n  color: #F78C6C;\n}\n\n.cm-s-material-darker .cm-number {\n  color: #FF5370;\n}\n\n.cm-s-material-darker .cm-def {\n  color: #82AAFF;\n}\n\n.cm-s-material-darker .cm-string {\n  color: #C3E88D;\n}\n\n.cm-s-material-darker .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-material-darker .cm-comment {\n  color: #545454;\n}\n\n.cm-s-material-darker .cm-variable {\n  color: #f07178;\n}\n\n.cm-s-material-darker .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-material-darker .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-material-darker .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-material-darker .cm-property {\n  color: #C792EA;\n}\n\n.cm-s-material-darker .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-material-darker .cm-variable-3,\n.cm-s-material-darker .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-material-darker .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-material-darker .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}',
                    ],
                    sourceRoot: '',
                },
            ]);
            const i = t;
        },
        7638: r => {
            r.exports = function(r) {
                var n = [];
                return (
                    (n.toString = function() {
                        return this.map(function(n) {
                            var e = '',
                                a = void 0 !== n[5];
                            return (
                                n[4] &&
                                    (e += '@supports ('.concat(n[4], ') {')),
                                n[2] && (e += '@media '.concat(n[2], ' {')),
                                a &&
                                    (e += '@layer'.concat(
                                        n[5].length > 0 ? ' '.concat(n[5]) : '',
                                        ' {'
                                    )),
                                (e += r(n)),
                                a && (e += '}'),
                                n[2] && (e += '}'),
                                n[4] && (e += '}'),
                                e
                            );
                        }).join('');
                    }),
                    (n.i = function(r, e, a, o, c) {
                        'string' == typeof r && (r = [[null, r, void 0]]);
                        var t = {};
                        if (a)
                            for (var i = 0; i < this.length; i++) {
                                var A = this[i][0];
                                null != A && (t[A] = !0);
                            }
                        for (var m = 0; m < r.length; m++) {
                            var l = [].concat(r[m]);
                            (a && t[l[0]]) ||
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
                                o &&
                                    (l[4]
                                        ? ((l[1] = '@supports ('
                                              .concat(l[4], ') {')
                                              .concat(l[1], '}')),
                                          (l[4] = o))
                                        : (l[4] = ''.concat(o))),
                                n.push(l));
                        }
                    }),
                    n
                );
            };
        },
        34663: r => {
            r.exports = function(r) {
                var n = r[1],
                    e = r[3];
                if (!e) return n;
                if ('function' == typeof btoa) {
                    var a = btoa(
                            unescape(encodeURIComponent(JSON.stringify(e)))
                        ),
                        o = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            a
                        ),
                        c = '/*# '.concat(o, ' */'),
                        t = e.sources.map(function(r) {
                            return '/*# sourceURL='
                                .concat(e.sourceRoot || '')
                                .concat(r, ' */');
                        });
                    return [n]
                        .concat(t)
                        .concat([c])
                        .join('\n');
                }
                return [n].join('\n');
            };
        },
        89196: (r, n, e) => {
            e.r(n), e.d(n, { default: () => p });
            var a = e(1892),
                o = e.n(a),
                c = e(95760),
                t = e.n(c),
                i = e(38311),
                A = e.n(i),
                m = e(58192),
                l = e.n(m),
                s = e(38060),
                d = e.n(s),
                u = e(54865),
                C = e.n(u),
                E = e(47681),
                k = {};
            (k.styleTagTransform = C()),
                (k.setAttributes = l()),
                (k.insert = A().bind(null, 'head')),
                (k.domAPI = t()),
                (k.insertStyleElement = d()),
                o()(E.Z, k);
            const p = E.Z && E.Z.locals ? E.Z.locals : void 0;
        },
        1892: r => {
            var n = [];
            function e(r) {
                for (var e = -1, a = 0; a < n.length; a++)
                    if (n[a].identifier === r) {
                        e = a;
                        break;
                    }
                return e;
            }
            function a(r, a) {
                for (var c = {}, t = [], i = 0; i < r.length; i++) {
                    var A = r[i],
                        m = a.base ? A[0] + a.base : A[0],
                        l = c[m] || 0,
                        s = ''.concat(m, ' ').concat(l);
                    c[m] = l + 1;
                    var d = e(s),
                        u = {
                            css: A[1],
                            media: A[2],
                            sourceMap: A[3],
                            supports: A[4],
                            layer: A[5],
                        };
                    if (-1 !== d) n[d].references++, n[d].updater(u);
                    else {
                        var C = o(u, a);
                        (a.byIndex = i),
                            n.splice(i, 0, {
                                identifier: s,
                                updater: C,
                                references: 1,
                            });
                    }
                    t.push(s);
                }
                return t;
            }
            function o(r, n) {
                var e = n.domAPI(n);
                return (
                    e.update(r),
                    function(n) {
                        if (n) {
                            if (
                                n.css === r.css &&
                                n.media === r.media &&
                                n.sourceMap === r.sourceMap &&
                                n.supports === r.supports &&
                                n.layer === r.layer
                            )
                                return;
                            e.update((r = n));
                        } else e.remove();
                    }
                );
            }
            r.exports = function(r, o) {
                var c = a((r = r || []), (o = o || {}));
                return function(r) {
                    r = r || [];
                    for (var t = 0; t < c.length; t++) {
                        var i = e(c[t]);
                        n[i].references--;
                    }
                    for (var A = a(r, o), m = 0; m < c.length; m++) {
                        var l = e(c[m]);
                        0 === n[l].references &&
                            (n[l].updater(), n.splice(l, 1));
                    }
                    c = A;
                };
            };
        },
        38311: r => {
            var n = {};
            r.exports = function(r, e) {
                var a = (function(r) {
                    if (void 0 === n[r]) {
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
                        n[r] = e;
                    }
                    return n[r];
                })(r);
                if (!a)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                a.appendChild(e);
            };
        },
        38060: r => {
            r.exports = function(r) {
                var n = document.createElement('style');
                return (
                    r.setAttributes(n, r.attributes), r.insert(n, r.options), n
                );
            };
        },
        58192: (r, n, e) => {
            r.exports = function(r) {
                var n = e.nc;
                n && r.setAttribute('nonce', n);
            };
        },
        95760: r => {
            r.exports = function(r) {
                var n = r.insertStyleElement(r);
                return {
                    update: function(e) {
                        !(function(r, n, e) {
                            var a = '';
                            e.supports &&
                                (a += '@supports ('.concat(e.supports, ') {')),
                                e.media &&
                                    (a += '@media '.concat(e.media, ' {'));
                            var o = void 0 !== e.layer;
                            o &&
                                (a += '@layer'.concat(
                                    e.layer.length > 0
                                        ? ' '.concat(e.layer)
                                        : '',
                                    ' {'
                                )),
                                (a += e.css),
                                o && (a += '}'),
                                e.media && (a += '}'),
                                e.supports && (a += '}');
                            var c = e.sourceMap;
                            c &&
                                'undefined' != typeof btoa &&
                                (a += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(c)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                n.styleTagTransform(a, r, n.options);
                        })(n, r, e);
                    },
                    remove: function() {
                        !(function(r) {
                            if (null === r.parentNode) return !1;
                            r.parentNode.removeChild(r);
                        })(n);
                    },
                };
            };
        },
        54865: r => {
            r.exports = function(r, n) {
                if (n.styleSheet) n.styleSheet.cssText = r;
                else {
                    for (; n.firstChild; ) n.removeChild(n.firstChild);
                    n.appendChild(document.createTextNode(r));
                }
            };
        },
    },
]);
//# sourceMappingURL=9196.315f9f9.js.map
