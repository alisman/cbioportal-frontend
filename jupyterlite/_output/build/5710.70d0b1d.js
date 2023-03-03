'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [5710],
    {
        85073: (r, o, t) => {
            t.d(o, { Z: () => a });
            var n = t(34663),
                e = t.n(n),
                c = t(7638),
                i = t.n(c)()(e());
            i.push([
                r.id,
                '/*\n\n    Name:       Tomorrow Night - Bright\n    Author:     Chris Kempson\n\n    Port done by Gerard Braad <me@gbraad.nl>\n\n*/\n\n.cm-s-tomorrow-night-bright.CodeMirror { background: #000000; color: #eaeaea; }\n.cm-s-tomorrow-night-bright div.CodeMirror-selected { background: #424242; }\n.cm-s-tomorrow-night-bright .CodeMirror-gutters { background: #000000; border-right: 0px; }\n.cm-s-tomorrow-night-bright .CodeMirror-guttermarker { color: #e78c45; }\n.cm-s-tomorrow-night-bright .CodeMirror-guttermarker-subtle { color: #777; }\n.cm-s-tomorrow-night-bright .CodeMirror-linenumber { color: #424242; }\n.cm-s-tomorrow-night-bright .CodeMirror-cursor { border-left: 1px solid #6A6A6A; }\n\n.cm-s-tomorrow-night-bright span.cm-comment { color: #d27b53; }\n.cm-s-tomorrow-night-bright span.cm-atom { color: #a16a94; }\n.cm-s-tomorrow-night-bright span.cm-number { color: #a16a94; }\n\n.cm-s-tomorrow-night-bright span.cm-property, .cm-s-tomorrow-night-bright span.cm-attribute { color: #99cc99; }\n.cm-s-tomorrow-night-bright span.cm-keyword { color: #d54e53; }\n.cm-s-tomorrow-night-bright span.cm-string { color: #e7c547; }\n\n.cm-s-tomorrow-night-bright span.cm-variable { color: #b9ca4a; }\n.cm-s-tomorrow-night-bright span.cm-variable-2 { color: #7aa6da; }\n.cm-s-tomorrow-night-bright span.cm-def { color: #e78c45; }\n.cm-s-tomorrow-night-bright span.cm-bracket { color: #eaeaea; }\n.cm-s-tomorrow-night-bright span.cm-tag { color: #d54e53; }\n.cm-s-tomorrow-night-bright span.cm-link { color: #a16a94; }\n.cm-s-tomorrow-night-bright span.cm-error { background: #d54e53; color: #6A6A6A; }\n\n.cm-s-tomorrow-night-bright .CodeMirror-activeline-background { background: #2a2a2a; }\n.cm-s-tomorrow-night-bright .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/tomorrow-night-bright.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;;;;;CAOC;;AAED,yCAAyC,mBAAmB,EAAE,cAAc,EAAE;AAC9E,sDAAsD,mBAAmB,EAAE;AAC3E,kDAAkD,mBAAmB,EAAE,iBAAiB,EAAE;AAC1F,uDAAuD,cAAc,EAAE;AACvE,8DAA8D,WAAW,EAAE;AAC3E,qDAAqD,cAAc,EAAE;AACrE,iDAAiD,8BAA8B,EAAE;;AAEjF,8CAA8C,cAAc,EAAE;AAC9D,2CAA2C,cAAc,EAAE;AAC3D,6CAA6C,cAAc,EAAE;;AAE7D,8FAA8F,cAAc,EAAE;AAC9G,8CAA8C,cAAc,EAAE;AAC9D,6CAA6C,cAAc,EAAE;;AAE7D,+CAA+C,cAAc,EAAE;AAC/D,iDAAiD,cAAc,EAAE;AACjE,0CAA0C,cAAc,EAAE;AAC1D,8CAA8C,cAAc,EAAE;AAC9D,0CAA0C,cAAc,EAAE;AAC1D,2CAA2C,cAAc,EAAE;AAC3D,4CAA4C,mBAAmB,EAAE,cAAc,EAAE;;AAEjF,gEAAgE,mBAAmB,EAAE;AACrF,0DAA0D,0BAA0B,EAAE,uBAAuB,EAAE',
                    sourcesContent: [
                        '/*\n\n    Name:       Tomorrow Night - Bright\n    Author:     Chris Kempson\n\n    Port done by Gerard Braad <me@gbraad.nl>\n\n*/\n\n.cm-s-tomorrow-night-bright.CodeMirror { background: #000000; color: #eaeaea; }\n.cm-s-tomorrow-night-bright div.CodeMirror-selected { background: #424242; }\n.cm-s-tomorrow-night-bright .CodeMirror-gutters { background: #000000; border-right: 0px; }\n.cm-s-tomorrow-night-bright .CodeMirror-guttermarker { color: #e78c45; }\n.cm-s-tomorrow-night-bright .CodeMirror-guttermarker-subtle { color: #777; }\n.cm-s-tomorrow-night-bright .CodeMirror-linenumber { color: #424242; }\n.cm-s-tomorrow-night-bright .CodeMirror-cursor { border-left: 1px solid #6A6A6A; }\n\n.cm-s-tomorrow-night-bright span.cm-comment { color: #d27b53; }\n.cm-s-tomorrow-night-bright span.cm-atom { color: #a16a94; }\n.cm-s-tomorrow-night-bright span.cm-number { color: #a16a94; }\n\n.cm-s-tomorrow-night-bright span.cm-property, .cm-s-tomorrow-night-bright span.cm-attribute { color: #99cc99; }\n.cm-s-tomorrow-night-bright span.cm-keyword { color: #d54e53; }\n.cm-s-tomorrow-night-bright span.cm-string { color: #e7c547; }\n\n.cm-s-tomorrow-night-bright span.cm-variable { color: #b9ca4a; }\n.cm-s-tomorrow-night-bright span.cm-variable-2 { color: #7aa6da; }\n.cm-s-tomorrow-night-bright span.cm-def { color: #e78c45; }\n.cm-s-tomorrow-night-bright span.cm-bracket { color: #eaeaea; }\n.cm-s-tomorrow-night-bright span.cm-tag { color: #d54e53; }\n.cm-s-tomorrow-night-bright span.cm-link { color: #a16a94; }\n.cm-s-tomorrow-night-bright span.cm-error { background: #d54e53; color: #6A6A6A; }\n\n.cm-s-tomorrow-night-bright .CodeMirror-activeline-background { background: #2a2a2a; }\n.cm-s-tomorrow-night-bright .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const a = i;
        },
        7638: r => {
            r.exports = function(r) {
                var o = [];
                return (
                    (o.toString = function() {
                        return this.map(function(o) {
                            var t = '',
                                n = void 0 !== o[5];
                            return (
                                o[4] &&
                                    (t += '@supports ('.concat(o[4], ') {')),
                                o[2] && (t += '@media '.concat(o[2], ' {')),
                                n &&
                                    (t += '@layer'.concat(
                                        o[5].length > 0 ? ' '.concat(o[5]) : '',
                                        ' {'
                                    )),
                                (t += r(o)),
                                n && (t += '}'),
                                o[2] && (t += '}'),
                                o[4] && (t += '}'),
                                t
                            );
                        }).join('');
                    }),
                    (o.i = function(r, t, n, e, c) {
                        'string' == typeof r && (r = [[null, r, void 0]]);
                        var i = {};
                        if (n)
                            for (var a = 0; a < this.length; a++) {
                                var A = this[a][0];
                                null != A && (i[A] = !0);
                            }
                        for (var s = 0; s < r.length; s++) {
                            var m = [].concat(r[s]);
                            (n && i[m[0]]) ||
                                (void 0 !== c &&
                                    (void 0 === m[5] ||
                                        (m[1] = '@layer'
                                            .concat(
                                                m[5].length > 0
                                                    ? ' '.concat(m[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(m[1], '}')),
                                    (m[5] = c)),
                                t &&
                                    (m[2]
                                        ? ((m[1] = '@media '
                                              .concat(m[2], ' {')
                                              .concat(m[1], '}')),
                                          (m[2] = t))
                                        : (m[2] = t)),
                                e &&
                                    (m[4]
                                        ? ((m[1] = '@supports ('
                                              .concat(m[4], ') {')
                                              .concat(m[1], '}')),
                                          (m[4] = e))
                                        : (m[4] = ''.concat(e))),
                                o.push(m));
                        }
                    }),
                    o
                );
            };
        },
        34663: r => {
            r.exports = function(r) {
                var o = r[1],
                    t = r[3];
                if (!t) return o;
                if ('function' == typeof btoa) {
                    var n = btoa(
                            unescape(encodeURIComponent(JSON.stringify(t)))
                        ),
                        e = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            n
                        ),
                        c = '/*# '.concat(e, ' */'),
                        i = t.sources.map(function(r) {
                            return '/*# sourceURL='
                                .concat(t.sourceRoot || '')
                                .concat(r, ' */');
                        });
                    return [o]
                        .concat(i)
                        .concat([c])
                        .join('\n');
                }
                return [o].join('\n');
            };
        },
        45710: (r, o, t) => {
            t.r(o), t.d(o, { default: () => b });
            var n = t(1892),
                e = t.n(n),
                c = t(95760),
                i = t.n(c),
                a = t(38311),
                A = t.n(a),
                s = t(58192),
                m = t.n(s),
                g = t(38060),
                h = t.n(g),
                u = t(54865),
                d = t.n(u),
                l = t(85073),
                p = {};
            (p.styleTagTransform = d()),
                (p.setAttributes = m()),
                (p.insert = A().bind(null, 'head')),
                (p.domAPI = i()),
                (p.insertStyleElement = h()),
                e()(l.Z, p);
            const b = l.Z && l.Z.locals ? l.Z.locals : void 0;
        },
        1892: r => {
            var o = [];
            function t(r) {
                for (var t = -1, n = 0; n < o.length; n++)
                    if (o[n].identifier === r) {
                        t = n;
                        break;
                    }
                return t;
            }
            function n(r, n) {
                for (var c = {}, i = [], a = 0; a < r.length; a++) {
                    var A = r[a],
                        s = n.base ? A[0] + n.base : A[0],
                        m = c[s] || 0,
                        g = ''.concat(s, ' ').concat(m);
                    c[s] = m + 1;
                    var h = t(g),
                        u = {
                            css: A[1],
                            media: A[2],
                            sourceMap: A[3],
                            supports: A[4],
                            layer: A[5],
                        };
                    if (-1 !== h) o[h].references++, o[h].updater(u);
                    else {
                        var d = e(u, n);
                        (n.byIndex = a),
                            o.splice(a, 0, {
                                identifier: g,
                                updater: d,
                                references: 1,
                            });
                    }
                    i.push(g);
                }
                return i;
            }
            function e(r, o) {
                var t = o.domAPI(o);
                return (
                    t.update(r),
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
                            t.update((r = o));
                        } else t.remove();
                    }
                );
            }
            r.exports = function(r, e) {
                var c = n((r = r || []), (e = e || {}));
                return function(r) {
                    r = r || [];
                    for (var i = 0; i < c.length; i++) {
                        var a = t(c[i]);
                        o[a].references--;
                    }
                    for (var A = n(r, e), s = 0; s < c.length; s++) {
                        var m = t(c[s]);
                        0 === o[m].references &&
                            (o[m].updater(), o.splice(m, 1));
                    }
                    c = A;
                };
            };
        },
        38311: r => {
            var o = {};
            r.exports = function(r, t) {
                var n = (function(r) {
                    if (void 0 === o[r]) {
                        var t = document.querySelector(r);
                        if (
                            window.HTMLIFrameElement &&
                            t instanceof window.HTMLIFrameElement
                        )
                            try {
                                t = t.contentDocument.head;
                            } catch (r) {
                                t = null;
                            }
                        o[r] = t;
                    }
                    return o[r];
                })(r);
                if (!n)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                n.appendChild(t);
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
        58192: (r, o, t) => {
            r.exports = function(r) {
                var o = t.nc;
                o && r.setAttribute('nonce', o);
            };
        },
        95760: r => {
            r.exports = function(r) {
                var o = r.insertStyleElement(r);
                return {
                    update: function(t) {
                        !(function(r, o, t) {
                            var n = '';
                            t.supports &&
                                (n += '@supports ('.concat(t.supports, ') {')),
                                t.media &&
                                    (n += '@media '.concat(t.media, ' {'));
                            var e = void 0 !== t.layer;
                            e &&
                                (n += '@layer'.concat(
                                    t.layer.length > 0
                                        ? ' '.concat(t.layer)
                                        : '',
                                    ' {'
                                )),
                                (n += t.css),
                                e && (n += '}'),
                                t.media && (n += '}'),
                                t.supports && (n += '}');
                            var c = t.sourceMap;
                            c &&
                                'undefined' != typeof btoa &&
                                (n += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(c)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                o.styleTagTransform(n, r, o.options);
                        })(o, r, t);
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
//# sourceMappingURL=5710.70d0b1d.js.map
