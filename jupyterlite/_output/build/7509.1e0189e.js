'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [7509],
    {
        19425: (o, r, n) => {
            n.d(r, { Z: () => d });
            var e = n(34663),
                a = n.n(e),
                t = n(7638),
                c = n.n(t)()(a());
            c.push([
                o.id,
                "/*\nName:   DuoTone-Dark\nAuthor: by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)\n\nCodeMirror template by Jan T. Sott (https://github.com/idleberg), adapted by Bram de Haan (https://github.com/atelierbram/)\n*/\n\n.cm-s-duotone-dark.CodeMirror { background: #2a2734; color: #6c6783; }\n.cm-s-duotone-dark div.CodeMirror-selected { background: #545167!important; }\n.cm-s-duotone-dark .CodeMirror-gutters { background: #2a2734; border-right: 0px; }\n.cm-s-duotone-dark .CodeMirror-linenumber { color: #545167; }\n\n/* begin cursor */\n.cm-s-duotone-dark .CodeMirror-cursor { border-left: 1px solid #ffad5c; /* border-left: 1px solid #ffad5c80; */ border-right: .5em solid #ffad5c; /* border-right: .5em solid #ffad5c80; */ opacity: .5; }\n.cm-s-duotone-dark .CodeMirror-activeline-background { background: #363342; /* background: #36334280;  */ opacity: .5;}\n.cm-s-duotone-dark .cm-fat-cursor .CodeMirror-cursor { background: #ffad5c; /* background: #ffad5c80; */ opacity: .5;}\n/* end cursor */\n\n.cm-s-duotone-dark span.cm-atom, .cm-s-duotone-dark span.cm-number, .cm-s-duotone-dark span.cm-keyword, .cm-s-duotone-dark span.cm-variable, .cm-s-duotone-dark span.cm-attribute, .cm-s-duotone-dark span.cm-quote, .cm-s-duotone-dark span.cm-hr, .cm-s-duotone-dark span.cm-link { color: #ffcc99; }\n\n.cm-s-duotone-dark span.cm-property { color: #9a86fd; }\n.cm-s-duotone-dark span.cm-punctuation, .cm-s-duotone-dark span.cm-unit, .cm-s-duotone-dark span.cm-negative { color: #e09142; }\n.cm-s-duotone-dark span.cm-string { color: #ffb870; }\n.cm-s-duotone-dark span.cm-operator { color: #ffad5c; }\n.cm-s-duotone-dark span.cm-positive { color: #6a51e6; }\n\n.cm-s-duotone-dark span.cm-variable-2, .cm-s-duotone-dark span.cm-variable-3, .cm-s-duotone-dark span.cm-type, .cm-s-duotone-dark span.cm-string-2, .cm-s-duotone-dark span.cm-url { color: #7a63ee; }\n.cm-s-duotone-dark span.cm-def, .cm-s-duotone-dark span.cm-tag, .cm-s-duotone-dark span.cm-builtin, .cm-s-duotone-dark span.cm-qualifier, .cm-s-duotone-dark span.cm-header, .cm-s-duotone-dark span.cm-em { color: #eeebff; }\n.cm-s-duotone-dark span.cm-bracket, .cm-s-duotone-dark span.cm-comment { color: #6c6783; }\n\n/* using #f00 red for errors, don't think any of the colorscheme variables will stand out enough, ... maybe by giving it a background-color ... */\n.cm-s-duotone-dark span.cm-error, .cm-s-duotone-dark span.cm-invalidchar { color: #f00; }\n\n.cm-s-duotone-dark span.cm-header { font-weight: normal; }\n.cm-s-duotone-dark .CodeMirror-matchingbracket { text-decoration: underline; color: #eeebff !important; } \n",
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/duotone-dark.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;;;CAKC;;AAED,gCAAgC,mBAAmB,EAAE,cAAc,EAAE;AACrE,6CAA6C,6BAA6B,EAAE;AAC5E,yCAAyC,mBAAmB,EAAE,iBAAiB,EAAE;AACjF,4CAA4C,cAAc,EAAE;;AAE5D,iBAAiB;AACjB,wCAAwC,8BAA8B,EAAE,sCAAsC,EAAE,gCAAgC,EAAE,wCAAwC,EAAE,WAAW,EAAE;AACzM,uDAAuD,mBAAmB,EAAE,4BAA4B,EAAE,WAAW,CAAC;AACtH,uDAAuD,mBAAmB,EAAE,2BAA2B,EAAE,WAAW,CAAC;AACrH,eAAe;;AAEf,sRAAsR,cAAc,EAAE;;AAEtS,sCAAsC,cAAc,EAAE;AACtD,+GAA+G,cAAc,EAAE;AAC/H,oCAAoC,cAAc,EAAE;AACpD,sCAAsC,cAAc,EAAE;AACtD,sCAAsC,cAAc,EAAE;;AAEtD,qLAAqL,cAAc,EAAE;AACrM,6MAA6M,cAAc,EAAE;AAC7N,yEAAyE,cAAc,EAAE;;AAEzF,iJAAiJ;AACjJ,2EAA2E,WAAW,EAAE;;AAExF,oCAAoC,mBAAmB,EAAE;AACzD,iDAAiD,0BAA0B,EAAE,yBAAyB,EAAE',
                    sourcesContent: [
                        "/*\nName:   DuoTone-Dark\nAuthor: by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)\n\nCodeMirror template by Jan T. Sott (https://github.com/idleberg), adapted by Bram de Haan (https://github.com/atelierbram/)\n*/\n\n.cm-s-duotone-dark.CodeMirror { background: #2a2734; color: #6c6783; }\n.cm-s-duotone-dark div.CodeMirror-selected { background: #545167!important; }\n.cm-s-duotone-dark .CodeMirror-gutters { background: #2a2734; border-right: 0px; }\n.cm-s-duotone-dark .CodeMirror-linenumber { color: #545167; }\n\n/* begin cursor */\n.cm-s-duotone-dark .CodeMirror-cursor { border-left: 1px solid #ffad5c; /* border-left: 1px solid #ffad5c80; */ border-right: .5em solid #ffad5c; /* border-right: .5em solid #ffad5c80; */ opacity: .5; }\n.cm-s-duotone-dark .CodeMirror-activeline-background { background: #363342; /* background: #36334280;  */ opacity: .5;}\n.cm-s-duotone-dark .cm-fat-cursor .CodeMirror-cursor { background: #ffad5c; /* background: #ffad5c80; */ opacity: .5;}\n/* end cursor */\n\n.cm-s-duotone-dark span.cm-atom, .cm-s-duotone-dark span.cm-number, .cm-s-duotone-dark span.cm-keyword, .cm-s-duotone-dark span.cm-variable, .cm-s-duotone-dark span.cm-attribute, .cm-s-duotone-dark span.cm-quote, .cm-s-duotone-dark span.cm-hr, .cm-s-duotone-dark span.cm-link { color: #ffcc99; }\n\n.cm-s-duotone-dark span.cm-property { color: #9a86fd; }\n.cm-s-duotone-dark span.cm-punctuation, .cm-s-duotone-dark span.cm-unit, .cm-s-duotone-dark span.cm-negative { color: #e09142; }\n.cm-s-duotone-dark span.cm-string { color: #ffb870; }\n.cm-s-duotone-dark span.cm-operator { color: #ffad5c; }\n.cm-s-duotone-dark span.cm-positive { color: #6a51e6; }\n\n.cm-s-duotone-dark span.cm-variable-2, .cm-s-duotone-dark span.cm-variable-3, .cm-s-duotone-dark span.cm-type, .cm-s-duotone-dark span.cm-string-2, .cm-s-duotone-dark span.cm-url { color: #7a63ee; }\n.cm-s-duotone-dark span.cm-def, .cm-s-duotone-dark span.cm-tag, .cm-s-duotone-dark span.cm-builtin, .cm-s-duotone-dark span.cm-qualifier, .cm-s-duotone-dark span.cm-header, .cm-s-duotone-dark span.cm-em { color: #eeebff; }\n.cm-s-duotone-dark span.cm-bracket, .cm-s-duotone-dark span.cm-comment { color: #6c6783; }\n\n/* using #f00 red for errors, don't think any of the colorscheme variables will stand out enough, ... maybe by giving it a background-color ... */\n.cm-s-duotone-dark span.cm-error, .cm-s-duotone-dark span.cm-invalidchar { color: #f00; }\n\n.cm-s-duotone-dark span.cm-header { font-weight: normal; }\n.cm-s-duotone-dark .CodeMirror-matchingbracket { text-decoration: underline; color: #eeebff !important; } \n",
                    ],
                    sourceRoot: '',
                },
            ]);
            const d = c;
        },
        7638: o => {
            o.exports = function(o) {
                var r = [];
                return (
                    (r.toString = function() {
                        return this.map(function(r) {
                            var n = '',
                                e = void 0 !== r[5];
                            return (
                                r[4] &&
                                    (n += '@supports ('.concat(r[4], ') {')),
                                r[2] && (n += '@media '.concat(r[2], ' {')),
                                e &&
                                    (n += '@layer'.concat(
                                        r[5].length > 0 ? ' '.concat(r[5]) : '',
                                        ' {'
                                    )),
                                (n += o(r)),
                                e && (n += '}'),
                                r[2] && (n += '}'),
                                r[4] && (n += '}'),
                                n
                            );
                        }).join('');
                    }),
                    (r.i = function(o, n, e, a, t) {
                        'string' == typeof o && (o = [[null, o, void 0]]);
                        var c = {};
                        if (e)
                            for (var d = 0; d < this.length; d++) {
                                var s = this[d][0];
                                null != s && (c[s] = !0);
                            }
                        for (var u = 0; u < o.length; u++) {
                            var i = [].concat(o[u]);
                            (e && c[i[0]]) ||
                                (void 0 !== t &&
                                    (void 0 === i[5] ||
                                        (i[1] = '@layer'
                                            .concat(
                                                i[5].length > 0
                                                    ? ' '.concat(i[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(i[1], '}')),
                                    (i[5] = t)),
                                n &&
                                    (i[2]
                                        ? ((i[1] = '@media '
                                              .concat(i[2], ' {')
                                              .concat(i[1], '}')),
                                          (i[2] = n))
                                        : (i[2] = n)),
                                a &&
                                    (i[4]
                                        ? ((i[1] = '@supports ('
                                              .concat(i[4], ') {')
                                              .concat(i[1], '}')),
                                          (i[4] = a))
                                        : (i[4] = ''.concat(a))),
                                r.push(i));
                        }
                    }),
                    r
                );
            };
        },
        34663: o => {
            o.exports = function(o) {
                var r = o[1],
                    n = o[3];
                if (!n) return r;
                if ('function' == typeof btoa) {
                    var e = btoa(
                            unescape(encodeURIComponent(JSON.stringify(n)))
                        ),
                        a = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            e
                        ),
                        t = '/*# '.concat(a, ' */'),
                        c = n.sources.map(function(o) {
                            return '/*# sourceURL='
                                .concat(n.sourceRoot || '')
                                .concat(o, ' */');
                        });
                    return [r]
                        .concat(c)
                        .concat([t])
                        .join('\n');
                }
                return [r].join('\n');
            };
        },
        87509: (o, r, n) => {
            n.r(r), n.d(r, { default: () => b });
            var e = n(1892),
                a = n.n(e),
                t = n(95760),
                c = n.n(t),
                d = n(38311),
                s = n.n(d),
                u = n(58192),
                i = n.n(u),
                m = n(38060),
                A = n.n(m),
                p = n(54865),
                l = n.n(p),
                f = n(19425),
                k = {};
            (k.styleTagTransform = l()),
                (k.setAttributes = i()),
                (k.insert = s().bind(null, 'head')),
                (k.domAPI = c()),
                (k.insertStyleElement = A()),
                a()(f.Z, k);
            const b = f.Z && f.Z.locals ? f.Z.locals : void 0;
        },
        1892: o => {
            var r = [];
            function n(o) {
                for (var n = -1, e = 0; e < r.length; e++)
                    if (r[e].identifier === o) {
                        n = e;
                        break;
                    }
                return n;
            }
            function e(o, e) {
                for (var t = {}, c = [], d = 0; d < o.length; d++) {
                    var s = o[d],
                        u = e.base ? s[0] + e.base : s[0],
                        i = t[u] || 0,
                        m = ''.concat(u, ' ').concat(i);
                    t[u] = i + 1;
                    var A = n(m),
                        p = {
                            css: s[1],
                            media: s[2],
                            sourceMap: s[3],
                            supports: s[4],
                            layer: s[5],
                        };
                    if (-1 !== A) r[A].references++, r[A].updater(p);
                    else {
                        var l = a(p, e);
                        (e.byIndex = d),
                            r.splice(d, 0, {
                                identifier: m,
                                updater: l,
                                references: 1,
                            });
                    }
                    c.push(m);
                }
                return c;
            }
            function a(o, r) {
                var n = r.domAPI(r);
                return (
                    n.update(o),
                    function(r) {
                        if (r) {
                            if (
                                r.css === o.css &&
                                r.media === o.media &&
                                r.sourceMap === o.sourceMap &&
                                r.supports === o.supports &&
                                r.layer === o.layer
                            )
                                return;
                            n.update((o = r));
                        } else n.remove();
                    }
                );
            }
            o.exports = function(o, a) {
                var t = e((o = o || []), (a = a || {}));
                return function(o) {
                    o = o || [];
                    for (var c = 0; c < t.length; c++) {
                        var d = n(t[c]);
                        r[d].references--;
                    }
                    for (var s = e(o, a), u = 0; u < t.length; u++) {
                        var i = n(t[u]);
                        0 === r[i].references &&
                            (r[i].updater(), r.splice(i, 1));
                    }
                    t = s;
                };
            };
        },
        38311: o => {
            var r = {};
            o.exports = function(o, n) {
                var e = (function(o) {
                    if (void 0 === r[o]) {
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
                        r[o] = n;
                    }
                    return r[o];
                })(o);
                if (!e)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                e.appendChild(n);
            };
        },
        38060: o => {
            o.exports = function(o) {
                var r = document.createElement('style');
                return (
                    o.setAttributes(r, o.attributes), o.insert(r, o.options), r
                );
            };
        },
        58192: (o, r, n) => {
            o.exports = function(o) {
                var r = n.nc;
                r && o.setAttribute('nonce', r);
            };
        },
        95760: o => {
            o.exports = function(o) {
                var r = o.insertStyleElement(o);
                return {
                    update: function(n) {
                        !(function(o, r, n) {
                            var e = '';
                            n.supports &&
                                (e += '@supports ('.concat(n.supports, ') {')),
                                n.media &&
                                    (e += '@media '.concat(n.media, ' {'));
                            var a = void 0 !== n.layer;
                            a &&
                                (e += '@layer'.concat(
                                    n.layer.length > 0
                                        ? ' '.concat(n.layer)
                                        : '',
                                    ' {'
                                )),
                                (e += n.css),
                                a && (e += '}'),
                                n.media && (e += '}'),
                                n.supports && (e += '}');
                            var t = n.sourceMap;
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
                                r.styleTagTransform(e, o, r.options);
                        })(r, o, n);
                    },
                    remove: function() {
                        !(function(o) {
                            if (null === o.parentNode) return !1;
                            o.parentNode.removeChild(o);
                        })(r);
                    },
                };
            };
        },
        54865: o => {
            o.exports = function(o, r) {
                if (r.styleSheet) r.styleSheet.cssText = o;
                else {
                    for (; r.firstChild; ) r.removeChild(r.firstChild);
                    r.appendChild(document.createTextNode(o));
                }
            };
        },
    },
]);
//# sourceMappingURL=7509.1e0189e.js.map
