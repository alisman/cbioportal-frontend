'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [3970],
    {
        29464: (n, r, o) => {
            o.d(r, { Z: () => m });
            var e = o(34663),
                c = o.n(e),
                t = o(7638),
                A = o.n(t)()(c());
            A.push([
                n.id,
                '/*\n  Name:       Moxer Theme\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://github.com/moxer-theme/moxer-code\n*/\n\n.cm-s-moxer.CodeMirror {\n  background-color: #090A0F;\n  color: #8E95B4;\n  line-height: 1.8;\n}\n\n.cm-s-moxer .CodeMirror-gutters {\n  background: #090A0F;\n  color: #35394B;\n  border: none;\n}\n\n.cm-s-moxer .CodeMirror-guttermarker,\n.cm-s-moxer .CodeMirror-guttermarker-subtle,\n.cm-s-moxer .CodeMirror-linenumber {\n  color: #35394B;\n}\n\n\n.cm-s-moxer .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-moxer div.CodeMirror-selected {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-moxer.CodeMirror-focused div.CodeMirror-selected {\n  background: #212431;\n}\n\n.cm-s-moxer .CodeMirror-line::selection,\n.cm-s-moxer .CodeMirror-line>span::selection,\n.cm-s-moxer .CodeMirror-line>span>span::selection {\n  background: #212431;\n}\n\n.cm-s-moxer .CodeMirror-line::-moz-selection,\n.cm-s-moxer .CodeMirror-line>span::-moz-selection,\n.cm-s-moxer .CodeMirror-line>span>span::-moz-selection {\n  background: #212431;\n}\n\n.cm-s-moxer .CodeMirror-activeline-background,\n.cm-s-moxer .CodeMirror-activeline-gutter .CodeMirror-linenumber {\n  background: rgba(33, 36, 49, 0.5);\n}\n\n.cm-s-moxer .cm-keyword {\n  color: #D46C6C;\n}\n\n.cm-s-moxer .cm-operator {\n  color: #D46C6C;\n}\n\n.cm-s-moxer .cm-variable-2 {\n  color: #81C5DA;\n}\n\n\n.cm-s-moxer .cm-variable-3,\n.cm-s-moxer .cm-type {\n  color: #f07178;\n}\n\n.cm-s-moxer .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-moxer .cm-atom {\n  color: #A99BE2;\n}\n\n.cm-s-moxer .cm-number {\n  color: #7CA4C0;\n}\n\n.cm-s-moxer .cm-def {\n  color: #F5DFA5;\n}\n\n.cm-s-moxer .CodeMirror-line .cm-def ~ .cm-def {\n  color: #81C5DA;\n}\n\n.cm-s-moxer .cm-string {\n  color: #B2E4AE;\n}\n\n.cm-s-moxer .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-moxer .cm-comment {\n  color: #3F445A;\n}\n\n.cm-s-moxer .cm-variable {\n  color: #8E95B4;\n}\n\n.cm-s-moxer .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-moxer .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-moxer .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-moxer .cm-property {\n  color: #81C5DA;\n}\n\n.cm-s-moxer .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-moxer .cm-variable-3,\n.cm-s-moxer .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-moxer .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-moxer .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/moxer.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;;CAIC;;AAED;EACE,yBAAyB;EACzB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,YAAY;AACd;;AAEA;;;EAGE,cAAc;AAChB;;;AAGA;EACE,8BAA8B;AAChC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA;;EAEE,iCAAiC;AACnC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;;AAGA;;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;;AAGA;EACE,+BAA+B;EAC/B,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;EAC1B,uBAAuB;AACzB',
                    sourcesContent: [
                        '/*\n  Name:       Moxer Theme\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://github.com/moxer-theme/moxer-code\n*/\n\n.cm-s-moxer.CodeMirror {\n  background-color: #090A0F;\n  color: #8E95B4;\n  line-height: 1.8;\n}\n\n.cm-s-moxer .CodeMirror-gutters {\n  background: #090A0F;\n  color: #35394B;\n  border: none;\n}\n\n.cm-s-moxer .CodeMirror-guttermarker,\n.cm-s-moxer .CodeMirror-guttermarker-subtle,\n.cm-s-moxer .CodeMirror-linenumber {\n  color: #35394B;\n}\n\n\n.cm-s-moxer .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-moxer div.CodeMirror-selected {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-moxer.CodeMirror-focused div.CodeMirror-selected {\n  background: #212431;\n}\n\n.cm-s-moxer .CodeMirror-line::selection,\n.cm-s-moxer .CodeMirror-line>span::selection,\n.cm-s-moxer .CodeMirror-line>span>span::selection {\n  background: #212431;\n}\n\n.cm-s-moxer .CodeMirror-line::-moz-selection,\n.cm-s-moxer .CodeMirror-line>span::-moz-selection,\n.cm-s-moxer .CodeMirror-line>span>span::-moz-selection {\n  background: #212431;\n}\n\n.cm-s-moxer .CodeMirror-activeline-background,\n.cm-s-moxer .CodeMirror-activeline-gutter .CodeMirror-linenumber {\n  background: rgba(33, 36, 49, 0.5);\n}\n\n.cm-s-moxer .cm-keyword {\n  color: #D46C6C;\n}\n\n.cm-s-moxer .cm-operator {\n  color: #D46C6C;\n}\n\n.cm-s-moxer .cm-variable-2 {\n  color: #81C5DA;\n}\n\n\n.cm-s-moxer .cm-variable-3,\n.cm-s-moxer .cm-type {\n  color: #f07178;\n}\n\n.cm-s-moxer .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-moxer .cm-atom {\n  color: #A99BE2;\n}\n\n.cm-s-moxer .cm-number {\n  color: #7CA4C0;\n}\n\n.cm-s-moxer .cm-def {\n  color: #F5DFA5;\n}\n\n.cm-s-moxer .CodeMirror-line .cm-def ~ .cm-def {\n  color: #81C5DA;\n}\n\n.cm-s-moxer .cm-string {\n  color: #B2E4AE;\n}\n\n.cm-s-moxer .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-moxer .cm-comment {\n  color: #3F445A;\n}\n\n.cm-s-moxer .cm-variable {\n  color: #8E95B4;\n}\n\n.cm-s-moxer .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-moxer .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-moxer .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-moxer .cm-property {\n  color: #81C5DA;\n}\n\n.cm-s-moxer .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-moxer .cm-variable-3,\n.cm-s-moxer .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-moxer .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-moxer .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}',
                    ],
                    sourceRoot: '',
                },
            ]);
            const m = A;
        },
        7638: n => {
            n.exports = function(n) {
                var r = [];
                return (
                    (r.toString = function() {
                        return this.map(function(r) {
                            var o = '',
                                e = void 0 !== r[5];
                            return (
                                r[4] &&
                                    (o += '@supports ('.concat(r[4], ') {')),
                                r[2] && (o += '@media '.concat(r[2], ' {')),
                                e &&
                                    (o += '@layer'.concat(
                                        r[5].length > 0 ? ' '.concat(r[5]) : '',
                                        ' {'
                                    )),
                                (o += n(r)),
                                e && (o += '}'),
                                r[2] && (o += '}'),
                                r[4] && (o += '}'),
                                o
                            );
                        }).join('');
                    }),
                    (r.i = function(n, o, e, c, t) {
                        'string' == typeof n && (n = [[null, n, void 0]]);
                        var A = {};
                        if (e)
                            for (var m = 0; m < this.length; m++) {
                                var i = this[m][0];
                                null != i && (A[i] = !0);
                            }
                        for (var s = 0; s < n.length; s++) {
                            var a = [].concat(n[s]);
                            (e && A[a[0]]) ||
                                (void 0 !== t &&
                                    (void 0 === a[5] ||
                                        (a[1] = '@layer'
                                            .concat(
                                                a[5].length > 0
                                                    ? ' '.concat(a[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(a[1], '}')),
                                    (a[5] = t)),
                                o &&
                                    (a[2]
                                        ? ((a[1] = '@media '
                                              .concat(a[2], ' {')
                                              .concat(a[1], '}')),
                                          (a[2] = o))
                                        : (a[2] = o)),
                                c &&
                                    (a[4]
                                        ? ((a[1] = '@supports ('
                                              .concat(a[4], ') {')
                                              .concat(a[1], '}')),
                                          (a[4] = c))
                                        : (a[4] = ''.concat(c))),
                                r.push(a));
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
                    var e = btoa(
                            unescape(encodeURIComponent(JSON.stringify(o)))
                        ),
                        c = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            e
                        ),
                        t = '/*# '.concat(c, ' */'),
                        A = o.sources.map(function(n) {
                            return '/*# sourceURL='
                                .concat(o.sourceRoot || '')
                                .concat(n, ' */');
                        });
                    return [r]
                        .concat(A)
                        .concat([t])
                        .join('\n');
                }
                return [r].join('\n');
            };
        },
        63970: (n, r, o) => {
            o.r(r), o.d(r, { default: () => x });
            var e = o(1892),
                c = o.n(e),
                t = o(95760),
                A = o.n(t),
                m = o(38311),
                i = o.n(m),
                s = o(58192),
                a = o.n(s),
                l = o(38060),
                C = o.n(l),
                d = o(54865),
                u = o.n(d),
                E = o(29464),
                p = {};
            (p.styleTagTransform = u()),
                (p.setAttributes = a()),
                (p.insert = i().bind(null, 'head')),
                (p.domAPI = A()),
                (p.insertStyleElement = C()),
                c()(E.Z, p);
            const x = E.Z && E.Z.locals ? E.Z.locals : void 0;
        },
        1892: n => {
            var r = [];
            function o(n) {
                for (var o = -1, e = 0; e < r.length; e++)
                    if (r[e].identifier === n) {
                        o = e;
                        break;
                    }
                return o;
            }
            function e(n, e) {
                for (var t = {}, A = [], m = 0; m < n.length; m++) {
                    var i = n[m],
                        s = e.base ? i[0] + e.base : i[0],
                        a = t[s] || 0,
                        l = ''.concat(s, ' ').concat(a);
                    t[s] = a + 1;
                    var C = o(l),
                        d = {
                            css: i[1],
                            media: i[2],
                            sourceMap: i[3],
                            supports: i[4],
                            layer: i[5],
                        };
                    if (-1 !== C) r[C].references++, r[C].updater(d);
                    else {
                        var u = c(d, e);
                        (e.byIndex = m),
                            r.splice(m, 0, {
                                identifier: l,
                                updater: u,
                                references: 1,
                            });
                    }
                    A.push(l);
                }
                return A;
            }
            function c(n, r) {
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
            n.exports = function(n, c) {
                var t = e((n = n || []), (c = c || {}));
                return function(n) {
                    n = n || [];
                    for (var A = 0; A < t.length; A++) {
                        var m = o(t[A]);
                        r[m].references--;
                    }
                    for (var i = e(n, c), s = 0; s < t.length; s++) {
                        var a = o(t[s]);
                        0 === r[a].references &&
                            (r[a].updater(), r.splice(a, 1));
                    }
                    t = i;
                };
            };
        },
        38311: n => {
            var r = {};
            n.exports = function(n, o) {
                var e = (function(n) {
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
                if (!e)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                e.appendChild(o);
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
                            var e = '';
                            o.supports &&
                                (e += '@supports ('.concat(o.supports, ') {')),
                                o.media &&
                                    (e += '@media '.concat(o.media, ' {'));
                            var c = void 0 !== o.layer;
                            c &&
                                (e += '@layer'.concat(
                                    o.layer.length > 0
                                        ? ' '.concat(o.layer)
                                        : '',
                                    ' {'
                                )),
                                (e += o.css),
                                c && (e += '}'),
                                o.media && (e += '}'),
                                o.supports && (e += '}');
                            var t = o.sourceMap;
                            t &&
                                'undefined' != typeof btoa &&
                                (e += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(t)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                r.styleTagTransform(e, n, r.options);
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
//# sourceMappingURL=3970.236586f.js.map
