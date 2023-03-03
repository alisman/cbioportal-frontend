'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [451],
    {
        59916: (n, e, r) => {
            r.d(e, { Z: () => a });
            var c = r(34663),
                o = r.n(c),
                t = r(7638),
                s = r.n(t)()(o());
            s.push([
                n.id,
                '/*\n\n    Name:       Bespin\n    Author:     Mozilla / Jan T. Sott\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-bespin.CodeMirror {background: #28211c; color: #9d9b97;}\n.cm-s-bespin div.CodeMirror-selected {background: #36312e !important;}\n.cm-s-bespin .CodeMirror-gutters {background: #28211c; border-right: 0px;}\n.cm-s-bespin .CodeMirror-linenumber {color: #666666;}\n.cm-s-bespin .CodeMirror-cursor {border-left: 1px solid #797977 !important;}\n\n.cm-s-bespin span.cm-comment {color: #937121;}\n.cm-s-bespin span.cm-atom {color: #9b859d;}\n.cm-s-bespin span.cm-number {color: #9b859d;}\n\n.cm-s-bespin span.cm-property, .cm-s-bespin span.cm-attribute {color: #54be0d;}\n.cm-s-bespin span.cm-keyword {color: #cf6a4c;}\n.cm-s-bespin span.cm-string {color: #f9ee98;}\n\n.cm-s-bespin span.cm-variable {color: #54be0d;}\n.cm-s-bespin span.cm-variable-2 {color: #5ea6ea;}\n.cm-s-bespin span.cm-def {color: #cf7d34;}\n.cm-s-bespin span.cm-error {background: #cf6a4c; color: #797977;}\n.cm-s-bespin span.cm-bracket {color: #9d9b97;}\n.cm-s-bespin span.cm-tag {color: #cf6a4c;}\n.cm-s-bespin span.cm-link {color: #9b859d;}\n\n.cm-s-bespin .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-bespin .CodeMirror-activeline-background { background: #404040; }\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/bespin.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;;;;;;CAQC;;AAED,yBAAyB,mBAAmB,EAAE,cAAc,CAAC;AAC7D,sCAAsC,8BAA8B,CAAC;AACrE,kCAAkC,mBAAmB,EAAE,iBAAiB,CAAC;AACzE,qCAAqC,cAAc,CAAC;AACpD,iCAAiC,yCAAyC,CAAC;;AAE3E,8BAA8B,cAAc,CAAC;AAC7C,2BAA2B,cAAc,CAAC;AAC1C,6BAA6B,cAAc,CAAC;;AAE5C,+DAA+D,cAAc,CAAC;AAC9E,8BAA8B,cAAc,CAAC;AAC7C,6BAA6B,cAAc,CAAC;;AAE5C,+BAA+B,cAAc,CAAC;AAC9C,iCAAiC,cAAc,CAAC;AAChD,0BAA0B,cAAc,CAAC;AACzC,4BAA4B,mBAAmB,EAAE,cAAc,CAAC;AAChE,8BAA8B,cAAc,CAAC;AAC7C,0BAA0B,cAAc,CAAC;AACzC,2BAA2B,cAAc,CAAC;;AAE1C,2CAA2C,0BAA0B,EAAE,uBAAuB,CAAC;AAC/F,iDAAiD,mBAAmB,EAAE',
                    sourcesContent: [
                        '/*\n\n    Name:       Bespin\n    Author:     Mozilla / Jan T. Sott\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-bespin.CodeMirror {background: #28211c; color: #9d9b97;}\n.cm-s-bespin div.CodeMirror-selected {background: #36312e !important;}\n.cm-s-bespin .CodeMirror-gutters {background: #28211c; border-right: 0px;}\n.cm-s-bespin .CodeMirror-linenumber {color: #666666;}\n.cm-s-bespin .CodeMirror-cursor {border-left: 1px solid #797977 !important;}\n\n.cm-s-bespin span.cm-comment {color: #937121;}\n.cm-s-bespin span.cm-atom {color: #9b859d;}\n.cm-s-bespin span.cm-number {color: #9b859d;}\n\n.cm-s-bespin span.cm-property, .cm-s-bespin span.cm-attribute {color: #54be0d;}\n.cm-s-bespin span.cm-keyword {color: #cf6a4c;}\n.cm-s-bespin span.cm-string {color: #f9ee98;}\n\n.cm-s-bespin span.cm-variable {color: #54be0d;}\n.cm-s-bespin span.cm-variable-2 {color: #5ea6ea;}\n.cm-s-bespin span.cm-def {color: #cf7d34;}\n.cm-s-bespin span.cm-error {background: #cf6a4c; color: #797977;}\n.cm-s-bespin span.cm-bracket {color: #9d9b97;}\n.cm-s-bespin span.cm-tag {color: #cf6a4c;}\n.cm-s-bespin span.cm-link {color: #9b859d;}\n\n.cm-s-bespin .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-bespin .CodeMirror-activeline-background { background: #404040; }\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const a = s;
        },
        7638: n => {
            n.exports = function(n) {
                var e = [];
                return (
                    (e.toString = function() {
                        return this.map(function(e) {
                            var r = '',
                                c = void 0 !== e[5];
                            return (
                                e[4] &&
                                    (r += '@supports ('.concat(e[4], ') {')),
                                e[2] && (r += '@media '.concat(e[2], ' {')),
                                c &&
                                    (r += '@layer'.concat(
                                        e[5].length > 0 ? ' '.concat(e[5]) : '',
                                        ' {'
                                    )),
                                (r += n(e)),
                                c && (r += '}'),
                                e[2] && (r += '}'),
                                e[4] && (r += '}'),
                                r
                            );
                        }).join('');
                    }),
                    (e.i = function(n, r, c, o, t) {
                        'string' == typeof n && (n = [[null, n, void 0]]);
                        var s = {};
                        if (c)
                            for (var a = 0; a < this.length; a++) {
                                var i = this[a][0];
                                null != i && (s[i] = !0);
                            }
                        for (var A = 0; A < n.length; A++) {
                            var p = [].concat(n[A]);
                            (c && s[p[0]]) ||
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
                                r &&
                                    (p[2]
                                        ? ((p[1] = '@media '
                                              .concat(p[2], ' {')
                                              .concat(p[1], '}')),
                                          (p[2] = r))
                                        : (p[2] = r)),
                                o &&
                                    (p[4]
                                        ? ((p[1] = '@supports ('
                                              .concat(p[4], ') {')
                                              .concat(p[1], '}')),
                                          (p[4] = o))
                                        : (p[4] = ''.concat(o))),
                                e.push(p));
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
                    var c = btoa(
                            unescape(encodeURIComponent(JSON.stringify(r)))
                        ),
                        o = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            c
                        ),
                        t = '/*# '.concat(o, ' */'),
                        s = r.sources.map(function(n) {
                            return '/*# sourceURL='
                                .concat(r.sourceRoot || '')
                                .concat(n, ' */');
                        });
                    return [e]
                        .concat(s)
                        .concat([t])
                        .join('\n');
                }
                return [e].join('\n');
            };
        },
        60451: (n, e, r) => {
            r.r(e), r.d(e, { default: () => f });
            var c = r(1892),
                o = r.n(c),
                t = r(95760),
                s = r.n(t),
                a = r(38311),
                i = r.n(a),
                A = r(58192),
                p = r.n(A),
                m = r(38060),
                l = r.n(m),
                d = r(54865),
                u = r.n(d),
                b = r(59916),
                C = {};
            (C.styleTagTransform = u()),
                (C.setAttributes = p()),
                (C.insert = i().bind(null, 'head')),
                (C.domAPI = s()),
                (C.insertStyleElement = l()),
                o()(b.Z, C);
            const f = b.Z && b.Z.locals ? b.Z.locals : void 0;
        },
        1892: n => {
            var e = [];
            function r(n) {
                for (var r = -1, c = 0; c < e.length; c++)
                    if (e[c].identifier === n) {
                        r = c;
                        break;
                    }
                return r;
            }
            function c(n, c) {
                for (var t = {}, s = [], a = 0; a < n.length; a++) {
                    var i = n[a],
                        A = c.base ? i[0] + c.base : i[0],
                        p = t[A] || 0,
                        m = ''.concat(A, ' ').concat(p);
                    t[A] = p + 1;
                    var l = r(m),
                        d = {
                            css: i[1],
                            media: i[2],
                            sourceMap: i[3],
                            supports: i[4],
                            layer: i[5],
                        };
                    if (-1 !== l) e[l].references++, e[l].updater(d);
                    else {
                        var u = o(d, c);
                        (c.byIndex = a),
                            e.splice(a, 0, {
                                identifier: m,
                                updater: u,
                                references: 1,
                            });
                    }
                    s.push(m);
                }
                return s;
            }
            function o(n, e) {
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
            n.exports = function(n, o) {
                var t = c((n = n || []), (o = o || {}));
                return function(n) {
                    n = n || [];
                    for (var s = 0; s < t.length; s++) {
                        var a = r(t[s]);
                        e[a].references--;
                    }
                    for (var i = c(n, o), A = 0; A < t.length; A++) {
                        var p = r(t[A]);
                        0 === e[p].references &&
                            (e[p].updater(), e.splice(p, 1));
                    }
                    t = i;
                };
            };
        },
        38311: n => {
            var e = {};
            n.exports = function(n, r) {
                var c = (function(n) {
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
                if (!c)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                c.appendChild(r);
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
                            var c = '';
                            r.supports &&
                                (c += '@supports ('.concat(r.supports, ') {')),
                                r.media &&
                                    (c += '@media '.concat(r.media, ' {'));
                            var o = void 0 !== r.layer;
                            o &&
                                (c += '@layer'.concat(
                                    r.layer.length > 0
                                        ? ' '.concat(r.layer)
                                        : '',
                                    ' {'
                                )),
                                (c += r.css),
                                o && (c += '}'),
                                r.media && (c += '}'),
                                r.supports && (c += '}');
                            var t = r.sourceMap;
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
                                e.styleTagTransform(c, n, e.options);
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
//# sourceMappingURL=451.d9683ad.js.map
