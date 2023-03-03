'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [2359],
    {
        91854: (o, e, n) => {
            n.d(e, { Z: () => a });
            var r = n(34663),
                c = n.n(r),
                t = n(7638),
                s = n.n(t)()(c());
            s.push([
                o.id,
                '/*\n\n    Name:       Isotope\n    Author:     David Desandro / Jan T. Sott\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-isotope.CodeMirror {background: #000000; color: #e0e0e0;}\n.cm-s-isotope div.CodeMirror-selected {background: #404040 !important;}\n.cm-s-isotope .CodeMirror-gutters {background: #000000; border-right: 0px;}\n.cm-s-isotope .CodeMirror-linenumber {color: #808080;}\n.cm-s-isotope .CodeMirror-cursor {border-left: 1px solid #c0c0c0 !important;}\n\n.cm-s-isotope span.cm-comment {color: #3300ff;}\n.cm-s-isotope span.cm-atom {color: #cc00ff;}\n.cm-s-isotope span.cm-number {color: #cc00ff;}\n\n.cm-s-isotope span.cm-property, .cm-s-isotope span.cm-attribute {color: #33ff00;}\n.cm-s-isotope span.cm-keyword {color: #ff0000;}\n.cm-s-isotope span.cm-string {color: #ff0099;}\n\n.cm-s-isotope span.cm-variable {color: #33ff00;}\n.cm-s-isotope span.cm-variable-2 {color: #0066ff;}\n.cm-s-isotope span.cm-def {color: #ff9900;}\n.cm-s-isotope span.cm-error {background: #ff0000; color: #c0c0c0;}\n.cm-s-isotope span.cm-bracket {color: #e0e0e0;}\n.cm-s-isotope span.cm-tag {color: #ff0000;}\n.cm-s-isotope span.cm-link {color: #cc00ff;}\n\n.cm-s-isotope .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-isotope .CodeMirror-activeline-background { background: #202020; }\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/isotope.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;;;;;;CAQC;;AAED,0BAA0B,mBAAmB,EAAE,cAAc,CAAC;AAC9D,uCAAuC,8BAA8B,CAAC;AACtE,mCAAmC,mBAAmB,EAAE,iBAAiB,CAAC;AAC1E,sCAAsC,cAAc,CAAC;AACrD,kCAAkC,yCAAyC,CAAC;;AAE5E,+BAA+B,cAAc,CAAC;AAC9C,4BAA4B,cAAc,CAAC;AAC3C,8BAA8B,cAAc,CAAC;;AAE7C,iEAAiE,cAAc,CAAC;AAChF,+BAA+B,cAAc,CAAC;AAC9C,8BAA8B,cAAc,CAAC;;AAE7C,gCAAgC,cAAc,CAAC;AAC/C,kCAAkC,cAAc,CAAC;AACjD,2BAA2B,cAAc,CAAC;AAC1C,6BAA6B,mBAAmB,EAAE,cAAc,CAAC;AACjE,+BAA+B,cAAc,CAAC;AAC9C,2BAA2B,cAAc,CAAC;AAC1C,4BAA4B,cAAc,CAAC;;AAE3C,4CAA4C,0BAA0B,EAAE,uBAAuB,CAAC;AAChG,kDAAkD,mBAAmB,EAAE',
                    sourcesContent: [
                        '/*\n\n    Name:       Isotope\n    Author:     David Desandro / Jan T. Sott\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-isotope.CodeMirror {background: #000000; color: #e0e0e0;}\n.cm-s-isotope div.CodeMirror-selected {background: #404040 !important;}\n.cm-s-isotope .CodeMirror-gutters {background: #000000; border-right: 0px;}\n.cm-s-isotope .CodeMirror-linenumber {color: #808080;}\n.cm-s-isotope .CodeMirror-cursor {border-left: 1px solid #c0c0c0 !important;}\n\n.cm-s-isotope span.cm-comment {color: #3300ff;}\n.cm-s-isotope span.cm-atom {color: #cc00ff;}\n.cm-s-isotope span.cm-number {color: #cc00ff;}\n\n.cm-s-isotope span.cm-property, .cm-s-isotope span.cm-attribute {color: #33ff00;}\n.cm-s-isotope span.cm-keyword {color: #ff0000;}\n.cm-s-isotope span.cm-string {color: #ff0099;}\n\n.cm-s-isotope span.cm-variable {color: #33ff00;}\n.cm-s-isotope span.cm-variable-2 {color: #0066ff;}\n.cm-s-isotope span.cm-def {color: #ff9900;}\n.cm-s-isotope span.cm-error {background: #ff0000; color: #c0c0c0;}\n.cm-s-isotope span.cm-bracket {color: #e0e0e0;}\n.cm-s-isotope span.cm-tag {color: #ff0000;}\n.cm-s-isotope span.cm-link {color: #cc00ff;}\n\n.cm-s-isotope .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-isotope .CodeMirror-activeline-background { background: #202020; }\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const a = s;
        },
        7638: o => {
            o.exports = function(o) {
                var e = [];
                return (
                    (e.toString = function() {
                        return this.map(function(e) {
                            var n = '',
                                r = void 0 !== e[5];
                            return (
                                e[4] &&
                                    (n += '@supports ('.concat(e[4], ') {')),
                                e[2] && (n += '@media '.concat(e[2], ' {')),
                                r &&
                                    (n += '@layer'.concat(
                                        e[5].length > 0 ? ' '.concat(e[5]) : '',
                                        ' {'
                                    )),
                                (n += o(e)),
                                r && (n += '}'),
                                e[2] && (n += '}'),
                                e[4] && (n += '}'),
                                n
                            );
                        }).join('');
                    }),
                    (e.i = function(o, n, r, c, t) {
                        'string' == typeof o && (o = [[null, o, void 0]]);
                        var s = {};
                        if (r)
                            for (var a = 0; a < this.length; a++) {
                                var i = this[a][0];
                                null != i && (s[i] = !0);
                            }
                        for (var A = 0; A < o.length; A++) {
                            var p = [].concat(o[A]);
                            (r && s[p[0]]) ||
                                (void 0 !== t &&
                                    (void 0 === p[5] ||
                                        (p[1] = '@layer'
                                            .concat(
                                                p[5].length > 0
                                                    ? ' '.concat(p[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(p[1], '}')),
                                    (p[5] = t)),
                                n &&
                                    (p[2]
                                        ? ((p[1] = '@media '
                                              .concat(p[2], ' {')
                                              .concat(p[1], '}')),
                                          (p[2] = n))
                                        : (p[2] = n)),
                                c &&
                                    (p[4]
                                        ? ((p[1] = '@supports ('
                                              .concat(p[4], ') {')
                                              .concat(p[1], '}')),
                                          (p[4] = c))
                                        : (p[4] = ''.concat(c))),
                                e.push(p));
                        }
                    }),
                    e
                );
            };
        },
        34663: o => {
            o.exports = function(o) {
                var e = o[1],
                    n = o[3];
                if (!n) return e;
                if ('function' == typeof btoa) {
                    var r = btoa(
                            unescape(encodeURIComponent(JSON.stringify(n)))
                        ),
                        c = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            r
                        ),
                        t = '/*# '.concat(c, ' */'),
                        s = n.sources.map(function(o) {
                            return '/*# sourceURL='
                                .concat(n.sourceRoot || '')
                                .concat(o, ' */');
                        });
                    return [e]
                        .concat(s)
                        .concat([t])
                        .join('\n');
                }
                return [e].join('\n');
            };
        },
        82359: (o, e, n) => {
            n.r(e), n.d(e, { default: () => b });
            var r = n(1892),
                c = n.n(r),
                t = n(95760),
                s = n.n(t),
                a = n(38311),
                i = n.n(a),
                A = n(58192),
                p = n.n(A),
                m = n(38060),
                u = n.n(m),
                l = n(54865),
                f = n.n(l),
                d = n(91854),
                C = {};
            (C.styleTagTransform = f()),
                (C.setAttributes = p()),
                (C.insert = i().bind(null, 'head')),
                (C.domAPI = s()),
                (C.insertStyleElement = u()),
                c()(d.Z, C);
            const b = d.Z && d.Z.locals ? d.Z.locals : void 0;
        },
        1892: o => {
            var e = [];
            function n(o) {
                for (var n = -1, r = 0; r < e.length; r++)
                    if (e[r].identifier === o) {
                        n = r;
                        break;
                    }
                return n;
            }
            function r(o, r) {
                for (var t = {}, s = [], a = 0; a < o.length; a++) {
                    var i = o[a],
                        A = r.base ? i[0] + r.base : i[0],
                        p = t[A] || 0,
                        m = ''.concat(A, ' ').concat(p);
                    t[A] = p + 1;
                    var u = n(m),
                        l = {
                            css: i[1],
                            media: i[2],
                            sourceMap: i[3],
                            supports: i[4],
                            layer: i[5],
                        };
                    if (-1 !== u) e[u].references++, e[u].updater(l);
                    else {
                        var f = c(l, r);
                        (r.byIndex = a),
                            e.splice(a, 0, {
                                identifier: m,
                                updater: f,
                                references: 1,
                            });
                    }
                    s.push(m);
                }
                return s;
            }
            function c(o, e) {
                var n = e.domAPI(e);
                return (
                    n.update(o),
                    function(e) {
                        if (e) {
                            if (
                                e.css === o.css &&
                                e.media === o.media &&
                                e.sourceMap === o.sourceMap &&
                                e.supports === o.supports &&
                                e.layer === o.layer
                            )
                                return;
                            n.update((o = e));
                        } else n.remove();
                    }
                );
            }
            o.exports = function(o, c) {
                var t = r((o = o || []), (c = c || {}));
                return function(o) {
                    o = o || [];
                    for (var s = 0; s < t.length; s++) {
                        var a = n(t[s]);
                        e[a].references--;
                    }
                    for (var i = r(o, c), A = 0; A < t.length; A++) {
                        var p = n(t[A]);
                        0 === e[p].references &&
                            (e[p].updater(), e.splice(p, 1));
                    }
                    t = i;
                };
            };
        },
        38311: o => {
            var e = {};
            o.exports = function(o, n) {
                var r = (function(o) {
                    if (void 0 === e[o]) {
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
                        e[o] = n;
                    }
                    return e[o];
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
                var e = document.createElement('style');
                return (
                    o.setAttributes(e, o.attributes), o.insert(e, o.options), e
                );
            };
        },
        58192: (o, e, n) => {
            o.exports = function(o) {
                var e = n.nc;
                e && o.setAttribute('nonce', e);
            };
        },
        95760: o => {
            o.exports = function(o) {
                var e = o.insertStyleElement(o);
                return {
                    update: function(n) {
                        !(function(o, e, n) {
                            var r = '';
                            n.supports &&
                                (r += '@supports ('.concat(n.supports, ') {')),
                                n.media &&
                                    (r += '@media '.concat(n.media, ' {'));
                            var c = void 0 !== n.layer;
                            c &&
                                (r += '@layer'.concat(
                                    n.layer.length > 0
                                        ? ' '.concat(n.layer)
                                        : '',
                                    ' {'
                                )),
                                (r += n.css),
                                c && (r += '}'),
                                n.media && (r += '}'),
                                n.supports && (r += '}');
                            var t = n.sourceMap;
                            t &&
                                'undefined' != typeof btoa &&
                                (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(t)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                e.styleTagTransform(r, o, e.options);
                        })(e, o, n);
                    },
                    remove: function() {
                        !(function(o) {
                            if (null === o.parentNode) return !1;
                            o.parentNode.removeChild(o);
                        })(e);
                    },
                };
            };
        },
        54865: o => {
            o.exports = function(o, e) {
                if (e.styleSheet) e.styleSheet.cssText = o;
                else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(o));
                }
            };
        },
    },
]);
//# sourceMappingURL=2359.6451c3e.js.map
