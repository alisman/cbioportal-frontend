'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [7359],
    {
        89891: (o, r, c) => {
            c.d(r, { Z: () => s });
            var n = c(34663),
                t = c.n(n),
                e = c(7638),
                a = c.n(e)()(t());
            a.push([
                o.id,
                '.cm-s-colorforth.CodeMirror { background: #000000; color: #f8f8f8; }\n.cm-s-colorforth .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }\n.cm-s-colorforth .CodeMirror-guttermarker { color: #FFBD40; }\n.cm-s-colorforth .CodeMirror-guttermarker-subtle { color: #78846f; }\n.cm-s-colorforth .CodeMirror-linenumber { color: #bababa; }\n.cm-s-colorforth .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-colorforth span.cm-comment     { color: #ededed; }\n.cm-s-colorforth span.cm-def         { color: #ff1c1c; font-weight:bold; }\n.cm-s-colorforth span.cm-keyword     { color: #ffd900; }\n.cm-s-colorforth span.cm-builtin     { color: #00d95a; }\n.cm-s-colorforth span.cm-variable    { color: #73ff00; }\n.cm-s-colorforth span.cm-string      { color: #007bff; }\n.cm-s-colorforth span.cm-number      { color: #00c4ff; }\n.cm-s-colorforth span.cm-atom        { color: #606060; }\n\n.cm-s-colorforth span.cm-variable-2  { color: #EEE; }\n.cm-s-colorforth span.cm-variable-3, .cm-s-colorforth span.cm-type { color: #DDD; }\n.cm-s-colorforth span.cm-property    {}\n.cm-s-colorforth span.cm-operator    {}\n\n.cm-s-colorforth span.cm-meta        { color: yellow; }\n.cm-s-colorforth span.cm-qualifier   { color: #FFF700; }\n.cm-s-colorforth span.cm-bracket     { color: #cc7; }\n.cm-s-colorforth span.cm-tag         { color: #FFBD40; }\n.cm-s-colorforth span.cm-attribute   { color: #FFF700; }\n.cm-s-colorforth span.cm-error       { color: #f00; }\n\n.cm-s-colorforth div.CodeMirror-selected { background: #333d53; }\n\n.cm-s-colorforth span.cm-compilation { background: rgba(255, 255, 255, 0.12); }\n\n.cm-s-colorforth .CodeMirror-activeline-background { background: #253540; }\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/colorforth.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA,8BAA8B,mBAAmB,EAAE,cAAc,EAAE;AACnE,uCAAuC,mBAAmB,EAAE,4BAA4B,EAAE;AAC1F,4CAA4C,cAAc,EAAE;AAC5D,mDAAmD,cAAc,EAAE;AACnE,0CAA0C,cAAc,EAAE;AAC1D,sCAAsC,4BAA4B,EAAE;;AAEpE,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE,gBAAgB,EAAE;AACzE,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;;AAEvD,uCAAuC,WAAW,EAAE;AACpD,qEAAqE,WAAW,EAAE;AAClF,sCAAsC;AACtC,sCAAsC;;AAEtC,uCAAuC,aAAa,EAAE;AACtD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,WAAW,EAAE;AACpD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,WAAW,EAAE;;AAEpD,2CAA2C,mBAAmB,EAAE;;AAEhE,uCAAuC,qCAAqC,EAAE;;AAE9E,qDAAqD,mBAAmB,EAAE',
                    sourcesContent: [
                        '.cm-s-colorforth.CodeMirror { background: #000000; color: #f8f8f8; }\n.cm-s-colorforth .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }\n.cm-s-colorforth .CodeMirror-guttermarker { color: #FFBD40; }\n.cm-s-colorforth .CodeMirror-guttermarker-subtle { color: #78846f; }\n.cm-s-colorforth .CodeMirror-linenumber { color: #bababa; }\n.cm-s-colorforth .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-colorforth span.cm-comment     { color: #ededed; }\n.cm-s-colorforth span.cm-def         { color: #ff1c1c; font-weight:bold; }\n.cm-s-colorforth span.cm-keyword     { color: #ffd900; }\n.cm-s-colorforth span.cm-builtin     { color: #00d95a; }\n.cm-s-colorforth span.cm-variable    { color: #73ff00; }\n.cm-s-colorforth span.cm-string      { color: #007bff; }\n.cm-s-colorforth span.cm-number      { color: #00c4ff; }\n.cm-s-colorforth span.cm-atom        { color: #606060; }\n\n.cm-s-colorforth span.cm-variable-2  { color: #EEE; }\n.cm-s-colorforth span.cm-variable-3, .cm-s-colorforth span.cm-type { color: #DDD; }\n.cm-s-colorforth span.cm-property    {}\n.cm-s-colorforth span.cm-operator    {}\n\n.cm-s-colorforth span.cm-meta        { color: yellow; }\n.cm-s-colorforth span.cm-qualifier   { color: #FFF700; }\n.cm-s-colorforth span.cm-bracket     { color: #cc7; }\n.cm-s-colorforth span.cm-tag         { color: #FFBD40; }\n.cm-s-colorforth span.cm-attribute   { color: #FFF700; }\n.cm-s-colorforth span.cm-error       { color: #f00; }\n\n.cm-s-colorforth div.CodeMirror-selected { background: #333d53; }\n\n.cm-s-colorforth span.cm-compilation { background: rgba(255, 255, 255, 0.12); }\n\n.cm-s-colorforth .CodeMirror-activeline-background { background: #253540; }\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const s = a;
        },
        7638: o => {
            o.exports = function(o) {
                var r = [];
                return (
                    (r.toString = function() {
                        return this.map(function(r) {
                            var c = '',
                                n = void 0 !== r[5];
                            return (
                                r[4] &&
                                    (c += '@supports ('.concat(r[4], ') {')),
                                r[2] && (c += '@media '.concat(r[2], ' {')),
                                n &&
                                    (c += '@layer'.concat(
                                        r[5].length > 0 ? ' '.concat(r[5]) : '',
                                        ' {'
                                    )),
                                (c += o(r)),
                                n && (c += '}'),
                                r[2] && (c += '}'),
                                r[4] && (c += '}'),
                                c
                            );
                        }).join('');
                    }),
                    (r.i = function(o, c, n, t, e) {
                        'string' == typeof o && (o = [[null, o, void 0]]);
                        var a = {};
                        if (n)
                            for (var s = 0; s < this.length; s++) {
                                var A = this[s][0];
                                null != A && (a[A] = !0);
                            }
                        for (var l = 0; l < o.length; l++) {
                            var i = [].concat(o[l]);
                            (n && a[i[0]]) ||
                                (void 0 !== e &&
                                    (void 0 === i[5] ||
                                        (i[1] = '@layer'
                                            .concat(
                                                i[5].length > 0
                                                    ? ' '.concat(i[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(i[1], '}')),
                                    (i[5] = e)),
                                c &&
                                    (i[2]
                                        ? ((i[1] = '@media '
                                              .concat(i[2], ' {')
                                              .concat(i[1], '}')),
                                          (i[2] = c))
                                        : (i[2] = c)),
                                t &&
                                    (i[4]
                                        ? ((i[1] = '@supports ('
                                              .concat(i[4], ') {')
                                              .concat(i[1], '}')),
                                          (i[4] = t))
                                        : (i[4] = ''.concat(t))),
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
                    c = o[3];
                if (!c) return r;
                if ('function' == typeof btoa) {
                    var n = btoa(
                            unescape(encodeURIComponent(JSON.stringify(c)))
                        ),
                        t = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            n
                        ),
                        e = '/*# '.concat(t, ' */'),
                        a = c.sources.map(function(o) {
                            return '/*# sourceURL='
                                .concat(c.sourceRoot || '')
                                .concat(o, ' */');
                        });
                    return [r]
                        .concat(a)
                        .concat([e])
                        .join('\n');
                }
                return [r].join('\n');
            };
        },
        87359: (o, r, c) => {
            c.r(r), c.d(r, { default: () => C });
            var n = c(1892),
                t = c.n(n),
                e = c(95760),
                a = c.n(e),
                s = c(38311),
                A = c.n(s),
                l = c(58192),
                i = c.n(l),
                m = c(38060),
                f = c.n(m),
                u = c(54865),
                p = c.n(u),
                d = c(89891),
                h = {};
            (h.styleTagTransform = p()),
                (h.setAttributes = i()),
                (h.insert = A().bind(null, 'head')),
                (h.domAPI = a()),
                (h.insertStyleElement = f()),
                t()(d.Z, h);
            const C = d.Z && d.Z.locals ? d.Z.locals : void 0;
        },
        1892: o => {
            var r = [];
            function c(o) {
                for (var c = -1, n = 0; n < r.length; n++)
                    if (r[n].identifier === o) {
                        c = n;
                        break;
                    }
                return c;
            }
            function n(o, n) {
                for (var e = {}, a = [], s = 0; s < o.length; s++) {
                    var A = o[s],
                        l = n.base ? A[0] + n.base : A[0],
                        i = e[l] || 0,
                        m = ''.concat(l, ' ').concat(i);
                    e[l] = i + 1;
                    var f = c(m),
                        u = {
                            css: A[1],
                            media: A[2],
                            sourceMap: A[3],
                            supports: A[4],
                            layer: A[5],
                        };
                    if (-1 !== f) r[f].references++, r[f].updater(u);
                    else {
                        var p = t(u, n);
                        (n.byIndex = s),
                            r.splice(s, 0, {
                                identifier: m,
                                updater: p,
                                references: 1,
                            });
                    }
                    a.push(m);
                }
                return a;
            }
            function t(o, r) {
                var c = r.domAPI(r);
                return (
                    c.update(o),
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
                            c.update((o = r));
                        } else c.remove();
                    }
                );
            }
            o.exports = function(o, t) {
                var e = n((o = o || []), (t = t || {}));
                return function(o) {
                    o = o || [];
                    for (var a = 0; a < e.length; a++) {
                        var s = c(e[a]);
                        r[s].references--;
                    }
                    for (var A = n(o, t), l = 0; l < e.length; l++) {
                        var i = c(e[l]);
                        0 === r[i].references &&
                            (r[i].updater(), r.splice(i, 1));
                    }
                    e = A;
                };
            };
        },
        38311: o => {
            var r = {};
            o.exports = function(o, c) {
                var n = (function(o) {
                    if (void 0 === r[o]) {
                        var c = document.querySelector(o);
                        if (
                            window.HTMLIFrameElement &&
                            c instanceof window.HTMLIFrameElement
                        )
                            try {
                                c = c.contentDocument.head;
                            } catch (o) {
                                c = null;
                            }
                        r[o] = c;
                    }
                    return r[o];
                })(o);
                if (!n)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                n.appendChild(c);
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
        58192: (o, r, c) => {
            o.exports = function(o) {
                var r = c.nc;
                r && o.setAttribute('nonce', r);
            };
        },
        95760: o => {
            o.exports = function(o) {
                var r = o.insertStyleElement(o);
                return {
                    update: function(c) {
                        !(function(o, r, c) {
                            var n = '';
                            c.supports &&
                                (n += '@supports ('.concat(c.supports, ') {')),
                                c.media &&
                                    (n += '@media '.concat(c.media, ' {'));
                            var t = void 0 !== c.layer;
                            t &&
                                (n += '@layer'.concat(
                                    c.layer.length > 0
                                        ? ' '.concat(c.layer)
                                        : '',
                                    ' {'
                                )),
                                (n += c.css),
                                t && (n += '}'),
                                c.media && (n += '}'),
                                c.supports && (n += '}');
                            var e = c.sourceMap;
                            e &&
                                'undefined' != typeof btoa &&
                                (n += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(e)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                r.styleTagTransform(n, o, r.options);
                        })(r, o, c);
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
//# sourceMappingURL=7359.6ee65ec.js.map
