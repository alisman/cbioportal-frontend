'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [4262],
    {
        17664: (e, c, r) => {
            r.d(c, { Z: () => a });
            var o = r(34663),
                n = r.n(o),
                A = r(7638),
                t = r.n(A)()(n());
            t.push([
                e.id,
                '/*\nICEcoder default theme by Matt Pass, used in code editor available at https://icecoder.net\n*/\n\n.cm-s-icecoder { color: #666; background: #1d1d1b; }\n\n.cm-s-icecoder span.cm-keyword { color: #eee; font-weight:bold; }  /* off-white 1 */\n.cm-s-icecoder span.cm-atom { color: #e1c76e; }                    /* yellow */\n.cm-s-icecoder span.cm-number { color: #6cb5d9; }                  /* blue */\n.cm-s-icecoder span.cm-def { color: #b9ca4a; }                     /* green */\n\n.cm-s-icecoder span.cm-variable { color: #6cb5d9; }                /* blue */\n.cm-s-icecoder span.cm-variable-2 { color: #cc1e5c; }              /* pink */\n.cm-s-icecoder span.cm-variable-3, .cm-s-icecoder span.cm-type { color: #f9602c; } /* orange */\n\n.cm-s-icecoder span.cm-property { color: #eee; }                   /* off-white 1 */\n.cm-s-icecoder span.cm-operator { color: #9179bb; }                /* purple */\n.cm-s-icecoder span.cm-comment { color: #97a3aa; }                 /* grey-blue */\n\n.cm-s-icecoder span.cm-string { color: #b9ca4a; }                  /* green */\n.cm-s-icecoder span.cm-string-2 { color: #6cb5d9; }                /* blue */\n\n.cm-s-icecoder span.cm-meta { color: #555; }                       /* grey */\n\n.cm-s-icecoder span.cm-qualifier { color: #555; }                  /* grey */\n.cm-s-icecoder span.cm-builtin { color: #214e7b; }                 /* bright blue */\n.cm-s-icecoder span.cm-bracket { color: #cc7; }                    /* grey-yellow */\n\n.cm-s-icecoder span.cm-tag { color: #e8e8e8; }                     /* off-white 2 */\n.cm-s-icecoder span.cm-attribute { color: #099; }                  /* teal */\n\n.cm-s-icecoder span.cm-header { color: #6a0d6a; }                  /* purple-pink */\n.cm-s-icecoder span.cm-quote { color: #186718; }                   /* dark green */\n.cm-s-icecoder span.cm-hr { color: #888; }                         /* mid-grey */\n.cm-s-icecoder span.cm-link { color: #e1c76e; }                    /* yellow */\n.cm-s-icecoder span.cm-error { color: #d00; }                      /* red */\n\n.cm-s-icecoder .CodeMirror-cursor { border-left: 1px solid white; }\n.cm-s-icecoder div.CodeMirror-selected { color: #fff; background: #037; }\n.cm-s-icecoder .CodeMirror-gutters { background: #1d1d1b; min-width: 41px; border-right: 0; }\n.cm-s-icecoder .CodeMirror-linenumber { color: #555; cursor: default; }\n.cm-s-icecoder .CodeMirror-matchingbracket { color: #fff !important; background: #555 !important; }\n.cm-s-icecoder .CodeMirror-activeline-background { background: #000; }\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/icecoder.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;CAEC;;AAED,iBAAiB,WAAW,EAAE,mBAAmB,EAAE;;AAEnD,iCAAiC,WAAW,EAAE,gBAAgB,EAAE,GAAG,gBAAgB;AACnF,8BAA8B,cAAc,EAAE,qBAAqB,WAAW;AAC9E,gCAAgC,cAAc,EAAE,mBAAmB,SAAS;AAC5E,6BAA6B,cAAc,EAAE,sBAAsB,UAAU;;AAE7E,kCAAkC,cAAc,EAAE,iBAAiB,SAAS;AAC5E,oCAAoC,cAAc,EAAE,eAAe,SAAS;AAC5E,iEAAiE,cAAc,EAAE,EAAE,WAAW;;AAE9F,kCAAkC,WAAW,EAAE,oBAAoB,gBAAgB;AACnF,kCAAkC,cAAc,EAAE,iBAAiB,WAAW;AAC9E,iCAAiC,cAAc,EAAE,kBAAkB,cAAc;;AAEjF,gCAAgC,cAAc,EAAE,mBAAmB,UAAU;AAC7E,kCAAkC,cAAc,EAAE,iBAAiB,SAAS;;AAE5E,8BAA8B,WAAW,EAAE,wBAAwB,SAAS;;AAE5E,mCAAmC,WAAW,EAAE,mBAAmB,SAAS;AAC5E,iCAAiC,cAAc,EAAE,kBAAkB,gBAAgB;AACnF,iCAAiC,WAAW,EAAE,qBAAqB,gBAAgB;;AAEnF,6BAA6B,cAAc,EAAE,sBAAsB,gBAAgB;AACnF,mCAAmC,WAAW,EAAE,mBAAmB,SAAS;;AAE5E,gCAAgC,cAAc,EAAE,mBAAmB,gBAAgB;AACnF,+BAA+B,cAAc,EAAE,oBAAoB,eAAe;AAClF,4BAA4B,WAAW,EAAE,0BAA0B,aAAa;AAChF,8BAA8B,cAAc,EAAE,qBAAqB,WAAW;AAC9E,+BAA+B,WAAW,EAAE,uBAAuB,QAAQ;;AAE3E,oCAAoC,4BAA4B,EAAE;AAClE,yCAAyC,WAAW,EAAE,gBAAgB,EAAE;AACxE,qCAAqC,mBAAmB,EAAE,eAAe,EAAE,eAAe,EAAE;AAC5F,wCAAwC,WAAW,EAAE,eAAe,EAAE;AACtE,6CAA6C,sBAAsB,EAAE,2BAA2B,EAAE;AAClG,mDAAmD,gBAAgB,EAAE',
                    sourcesContent: [
                        '/*\nICEcoder default theme by Matt Pass, used in code editor available at https://icecoder.net\n*/\n\n.cm-s-icecoder { color: #666; background: #1d1d1b; }\n\n.cm-s-icecoder span.cm-keyword { color: #eee; font-weight:bold; }  /* off-white 1 */\n.cm-s-icecoder span.cm-atom { color: #e1c76e; }                    /* yellow */\n.cm-s-icecoder span.cm-number { color: #6cb5d9; }                  /* blue */\n.cm-s-icecoder span.cm-def { color: #b9ca4a; }                     /* green */\n\n.cm-s-icecoder span.cm-variable { color: #6cb5d9; }                /* blue */\n.cm-s-icecoder span.cm-variable-2 { color: #cc1e5c; }              /* pink */\n.cm-s-icecoder span.cm-variable-3, .cm-s-icecoder span.cm-type { color: #f9602c; } /* orange */\n\n.cm-s-icecoder span.cm-property { color: #eee; }                   /* off-white 1 */\n.cm-s-icecoder span.cm-operator { color: #9179bb; }                /* purple */\n.cm-s-icecoder span.cm-comment { color: #97a3aa; }                 /* grey-blue */\n\n.cm-s-icecoder span.cm-string { color: #b9ca4a; }                  /* green */\n.cm-s-icecoder span.cm-string-2 { color: #6cb5d9; }                /* blue */\n\n.cm-s-icecoder span.cm-meta { color: #555; }                       /* grey */\n\n.cm-s-icecoder span.cm-qualifier { color: #555; }                  /* grey */\n.cm-s-icecoder span.cm-builtin { color: #214e7b; }                 /* bright blue */\n.cm-s-icecoder span.cm-bracket { color: #cc7; }                    /* grey-yellow */\n\n.cm-s-icecoder span.cm-tag { color: #e8e8e8; }                     /* off-white 2 */\n.cm-s-icecoder span.cm-attribute { color: #099; }                  /* teal */\n\n.cm-s-icecoder span.cm-header { color: #6a0d6a; }                  /* purple-pink */\n.cm-s-icecoder span.cm-quote { color: #186718; }                   /* dark green */\n.cm-s-icecoder span.cm-hr { color: #888; }                         /* mid-grey */\n.cm-s-icecoder span.cm-link { color: #e1c76e; }                    /* yellow */\n.cm-s-icecoder span.cm-error { color: #d00; }                      /* red */\n\n.cm-s-icecoder .CodeMirror-cursor { border-left: 1px solid white; }\n.cm-s-icecoder div.CodeMirror-selected { color: #fff; background: #037; }\n.cm-s-icecoder .CodeMirror-gutters { background: #1d1d1b; min-width: 41px; border-right: 0; }\n.cm-s-icecoder .CodeMirror-linenumber { color: #555; cursor: default; }\n.cm-s-icecoder .CodeMirror-matchingbracket { color: #fff !important; background: #555 !important; }\n.cm-s-icecoder .CodeMirror-activeline-background { background: #000; }\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const a = t;
        },
        7638: e => {
            e.exports = function(e) {
                var c = [];
                return (
                    (c.toString = function() {
                        return this.map(function(c) {
                            var r = '',
                                o = void 0 !== c[5];
                            return (
                                c[4] &&
                                    (r += '@supports ('.concat(c[4], ') {')),
                                c[2] && (r += '@media '.concat(c[2], ' {')),
                                o &&
                                    (r += '@layer'.concat(
                                        c[5].length > 0 ? ' '.concat(c[5]) : '',
                                        ' {'
                                    )),
                                (r += e(c)),
                                o && (r += '}'),
                                c[2] && (r += '}'),
                                c[4] && (r += '}'),
                                r
                            );
                        }).join('');
                    }),
                    (c.i = function(e, r, o, n, A) {
                        'string' == typeof e && (e = [[null, e, void 0]]);
                        var t = {};
                        if (o)
                            for (var a = 0; a < this.length; a++) {
                                var i = this[a][0];
                                null != i && (t[i] = !0);
                            }
                        for (var s = 0; s < e.length; s++) {
                            var d = [].concat(e[s]);
                            (o && t[d[0]]) ||
                                (void 0 !== A &&
                                    (void 0 === d[5] ||
                                        (d[1] = '@layer'
                                            .concat(
                                                d[5].length > 0
                                                    ? ' '.concat(d[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(d[1], '}')),
                                    (d[5] = A)),
                                r &&
                                    (d[2]
                                        ? ((d[1] = '@media '
                                              .concat(d[2], ' {')
                                              .concat(d[1], '}')),
                                          (d[2] = r))
                                        : (d[2] = r)),
                                n &&
                                    (d[4]
                                        ? ((d[1] = '@supports ('
                                              .concat(d[4], ') {')
                                              .concat(d[1], '}')),
                                          (d[4] = n))
                                        : (d[4] = ''.concat(n))),
                                c.push(d));
                        }
                    }),
                    c
                );
            };
        },
        34663: e => {
            e.exports = function(e) {
                var c = e[1],
                    r = e[3];
                if (!r) return c;
                if ('function' == typeof btoa) {
                    var o = btoa(
                            unescape(encodeURIComponent(JSON.stringify(r)))
                        ),
                        n = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            o
                        ),
                        A = '/*# '.concat(n, ' */'),
                        t = r.sources.map(function(e) {
                            return '/*# sourceURL='
                                .concat(r.sourceRoot || '')
                                .concat(e, ' */');
                        });
                    return [c]
                        .concat(t)
                        .concat([A])
                        .join('\n');
                }
                return [c].join('\n');
            };
        },
        4262: (e, c, r) => {
            r.r(c), r.d(c, { default: () => b });
            var o = r(1892),
                n = r.n(o),
                A = r(95760),
                t = r.n(A),
                a = r(38311),
                i = r.n(a),
                s = r(58192),
                d = r.n(s),
                m = r(38060),
                l = r.n(m),
                p = r(54865),
                u = r.n(p),
                E = r(17664),
                f = {};
            (f.styleTagTransform = u()),
                (f.setAttributes = d()),
                (f.insert = i().bind(null, 'head')),
                (f.domAPI = t()),
                (f.insertStyleElement = l()),
                n()(E.Z, f);
            const b = E.Z && E.Z.locals ? E.Z.locals : void 0;
        },
        1892: e => {
            var c = [];
            function r(e) {
                for (var r = -1, o = 0; o < c.length; o++)
                    if (c[o].identifier === e) {
                        r = o;
                        break;
                    }
                return r;
            }
            function o(e, o) {
                for (var A = {}, t = [], a = 0; a < e.length; a++) {
                    var i = e[a],
                        s = o.base ? i[0] + o.base : i[0],
                        d = A[s] || 0,
                        m = ''.concat(s, ' ').concat(d);
                    A[s] = d + 1;
                    var l = r(m),
                        p = {
                            css: i[1],
                            media: i[2],
                            sourceMap: i[3],
                            supports: i[4],
                            layer: i[5],
                        };
                    if (-1 !== l) c[l].references++, c[l].updater(p);
                    else {
                        var u = n(p, o);
                        (o.byIndex = a),
                            c.splice(a, 0, {
                                identifier: m,
                                updater: u,
                                references: 1,
                            });
                    }
                    t.push(m);
                }
                return t;
            }
            function n(e, c) {
                var r = c.domAPI(c);
                return (
                    r.update(e),
                    function(c) {
                        if (c) {
                            if (
                                c.css === e.css &&
                                c.media === e.media &&
                                c.sourceMap === e.sourceMap &&
                                c.supports === e.supports &&
                                c.layer === e.layer
                            )
                                return;
                            r.update((e = c));
                        } else r.remove();
                    }
                );
            }
            e.exports = function(e, n) {
                var A = o((e = e || []), (n = n || {}));
                return function(e) {
                    e = e || [];
                    for (var t = 0; t < A.length; t++) {
                        var a = r(A[t]);
                        c[a].references--;
                    }
                    for (var i = o(e, n), s = 0; s < A.length; s++) {
                        var d = r(A[s]);
                        0 === c[d].references &&
                            (c[d].updater(), c.splice(d, 1));
                    }
                    A = i;
                };
            };
        },
        38311: e => {
            var c = {};
            e.exports = function(e, r) {
                var o = (function(e) {
                    if (void 0 === c[e]) {
                        var r = document.querySelector(e);
                        if (
                            window.HTMLIFrameElement &&
                            r instanceof window.HTMLIFrameElement
                        )
                            try {
                                r = r.contentDocument.head;
                            } catch (e) {
                                r = null;
                            }
                        c[e] = r;
                    }
                    return c[e];
                })(e);
                if (!o)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                o.appendChild(r);
            };
        },
        38060: e => {
            e.exports = function(e) {
                var c = document.createElement('style');
                return (
                    e.setAttributes(c, e.attributes), e.insert(c, e.options), c
                );
            };
        },
        58192: (e, c, r) => {
            e.exports = function(e) {
                var c = r.nc;
                c && e.setAttribute('nonce', c);
            };
        },
        95760: e => {
            e.exports = function(e) {
                var c = e.insertStyleElement(e);
                return {
                    update: function(r) {
                        !(function(e, c, r) {
                            var o = '';
                            r.supports &&
                                (o += '@supports ('.concat(r.supports, ') {')),
                                r.media &&
                                    (o += '@media '.concat(r.media, ' {'));
                            var n = void 0 !== r.layer;
                            n &&
                                (o += '@layer'.concat(
                                    r.layer.length > 0
                                        ? ' '.concat(r.layer)
                                        : '',
                                    ' {'
                                )),
                                (o += r.css),
                                n && (o += '}'),
                                r.media && (o += '}'),
                                r.supports && (o += '}');
                            var A = r.sourceMap;
                            A &&
                                'undefined' != typeof btoa &&
                                (o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(A)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                c.styleTagTransform(o, e, c.options);
                        })(c, e, r);
                    },
                    remove: function() {
                        !(function(e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e);
                        })(c);
                    },
                };
            };
        },
        54865: e => {
            e.exports = function(e, c) {
                if (c.styleSheet) c.styleSheet.cssText = e;
                else {
                    for (; c.firstChild; ) c.removeChild(c.firstChild);
                    c.appendChild(document.createTextNode(e));
                }
            };
        },
    },
]);
//# sourceMappingURL=4262.bb73457.js.map
