(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [8373],
    {
        36804: (t, e, n) => {
            !(function(t) {
                function e(e, n, r) {
                    var i,
                        o = e.getWrapperElement();
                    return (
                        ((i = o.appendChild(
                            document.createElement('div')
                        )).className = r
                            ? 'CodeMirror-dialog CodeMirror-dialog-bottom'
                            : 'CodeMirror-dialog CodeMirror-dialog-top'),
                        'string' == typeof n
                            ? (i.innerHTML = n)
                            : i.appendChild(n),
                        t.addClass(o, 'dialog-opened'),
                        i
                    );
                }
                function n(t, e) {
                    t.state.currentNotificationClose &&
                        t.state.currentNotificationClose(),
                        (t.state.currentNotificationClose = e);
                }
                t.defineExtension('openDialog', function(r, i, o) {
                    o || (o = {}), n(this, null);
                    var l = e(this, r, o.bottom),
                        c = !1,
                        a = this;
                    function s(e) {
                        if ('string' == typeof e) u.value = e;
                        else {
                            if (c) return;
                            (c = !0),
                                t.rmClass(l.parentNode, 'dialog-opened'),
                                l.parentNode.removeChild(l),
                                a.focus(),
                                o.onClose && o.onClose(l);
                        }
                    }
                    var h,
                        u = l.getElementsByTagName('input')[0];
                    return (
                        u
                            ? (u.focus(),
                              o.value &&
                                  ((u.value = o.value),
                                  !1 !== o.selectValueOnOpen && u.select()),
                              o.onInput &&
                                  t.on(u, 'input', function(t) {
                                      o.onInput(t, u.value, s);
                                  }),
                              o.onKeyUp &&
                                  t.on(u, 'keyup', function(t) {
                                      o.onKeyUp(t, u.value, s);
                                  }),
                              t.on(u, 'keydown', function(e) {
                                  (o &&
                                      o.onKeyDown &&
                                      o.onKeyDown(e, u.value, s)) ||
                                      ((27 == e.keyCode ||
                                          (!1 !== o.closeOnEnter &&
                                              13 == e.keyCode)) &&
                                          (u.blur(), t.e_stop(e), s()),
                                      13 == e.keyCode && i(u.value, e));
                              }),
                              !1 !== o.closeOnBlur &&
                                  t.on(l, 'focusout', function(t) {
                                      null !== t.relatedTarget && s();
                                  }))
                            : (h = l.getElementsByTagName('button')[0]) &&
                              (t.on(h, 'click', function() {
                                  s(), a.focus();
                              }),
                              !1 !== o.closeOnBlur && t.on(h, 'blur', s),
                              h.focus()),
                        s
                    );
                }),
                    t.defineExtension('openConfirm', function(r, i, o) {
                        n(this, null);
                        var l = e(this, r, o && o.bottom),
                            c = l.getElementsByTagName('button'),
                            a = !1,
                            s = this,
                            h = 1;
                        function u() {
                            a ||
                                ((a = !0),
                                t.rmClass(l.parentNode, 'dialog-opened'),
                                l.parentNode.removeChild(l),
                                s.focus());
                        }
                        c[0].focus();
                        for (var f = 0; f < c.length; ++f) {
                            var g = c[f];
                            !(function(e) {
                                t.on(g, 'click', function(n) {
                                    t.e_preventDefault(n), u(), e && e(s);
                                });
                            })(i[f]),
                                t.on(g, 'blur', function() {
                                    --h,
                                        setTimeout(function() {
                                            h <= 0 && u();
                                        }, 200);
                                }),
                                t.on(g, 'focus', function() {
                                    ++h;
                                });
                        }
                    }),
                    t.defineExtension('openNotification', function(r, i) {
                        n(this, s);
                        var o,
                            l = e(this, r, i && i.bottom),
                            c = !1,
                            a = i && void 0 !== i.duration ? i.duration : 5e3;
                        function s() {
                            c ||
                                ((c = !0),
                                clearTimeout(o),
                                t.rmClass(l.parentNode, 'dialog-opened'),
                                l.parentNode.removeChild(l));
                        }
                        return (
                            t.on(l, 'click', function(e) {
                                t.e_preventDefault(e), s();
                            }),
                            a && (o = setTimeout(s, a)),
                            s
                        );
                    });
            })(n(25747));
        },
        52971: (t, e, n) => {
            !(function(t) {
                var e =
                        /MSIE \d/.test(navigator.userAgent) &&
                        (null == document.documentMode ||
                            document.documentMode < 8),
                    n = t.Pos,
                    r = {
                        '(': ')>',
                        ')': '(<',
                        '[': ']>',
                        ']': '[<',
                        '{': '}>',
                        '}': '{<',
                        '<': '>>',
                        '>': '<<',
                    };
                function i(t) {
                    return (t && t.bracketRegex) || /[(){}[\]]/;
                }
                function o(t, e, o) {
                    var c = t.getLineHandle(e.line),
                        a = e.ch - 1,
                        s = o && o.afterCursor;
                    null == s &&
                        (s = /(^| )cm-fat-cursor($| )/.test(
                            t.getWrapperElement().className
                        ));
                    var h = i(o),
                        u =
                            (!s &&
                                a >= 0 &&
                                h.test(c.text.charAt(a)) &&
                                r[c.text.charAt(a)]) ||
                            (h.test(c.text.charAt(a + 1)) &&
                                r[c.text.charAt(++a)]);
                    if (!u) return null;
                    var f = '>' == u.charAt(1) ? 1 : -1;
                    if (o && o.strict && f > 0 != (a == e.ch)) return null;
                    var g = t.getTokenTypeAt(n(e.line, a + 1)),
                        m = l(t, n(e.line, a + (f > 0 ? 1 : 0)), f, g, o);
                    return null == m
                        ? null
                        : {
                              from: n(e.line, a),
                              to: m && m.pos,
                              match: m && m.ch == u.charAt(0),
                              forward: f > 0,
                          };
                }
                function l(t, e, o, l, c) {
                    for (
                        var a = (c && c.maxScanLineLength) || 1e4,
                            s = (c && c.maxScanLines) || 1e3,
                            h = [],
                            u = i(c),
                            f =
                                o > 0
                                    ? Math.min(e.line + s, t.lastLine() + 1)
                                    : Math.max(t.firstLine() - 1, e.line - s),
                            g = e.line;
                        g != f;
                        g += o
                    ) {
                        var m = t.getLine(g);
                        if (m) {
                            var d = o > 0 ? 0 : m.length - 1,
                                p = o > 0 ? m.length : -1;
                            if (!(m.length > a))
                                for (
                                    g == e.line && (d = e.ch - (o < 0 ? 1 : 0));
                                    d != p;
                                    d += o
                                ) {
                                    var v = m.charAt(d);
                                    if (
                                        u.test(v) &&
                                        (void 0 === l ||
                                            (t.getTokenTypeAt(n(g, d + 1)) ||
                                                '') == (l || ''))
                                    ) {
                                        var x = r[v];
                                        if (x && ('>' == x.charAt(1)) == o > 0)
                                            h.push(v);
                                        else {
                                            if (!h.length)
                                                return { pos: n(g, d), ch: v };
                                            h.pop();
                                        }
                                    }
                                }
                        }
                    }
                    return (
                        g - o != (o > 0 ? t.lastLine() : t.firstLine()) && null
                    );
                }
                function c(t, r, i) {
                    for (
                        var l =
                                t.state.matchBrackets.maxHighlightLineLength ||
                                1e3,
                            c = i && i.highlightNonMatching,
                            a = [],
                            s = t.listSelections(),
                            h = 0;
                        h < s.length;
                        h++
                    ) {
                        var u = s[h].empty() && o(t, s[h].head, i);
                        if (
                            u &&
                            (u.match || !1 !== c) &&
                            t.getLine(u.from.line).length <= l
                        ) {
                            var f = u.match
                                ? 'CodeMirror-matchingbracket'
                                : 'CodeMirror-nonmatchingbracket';
                            a.push(
                                t.markText(
                                    u.from,
                                    n(u.from.line, u.from.ch + 1),
                                    { className: f }
                                )
                            ),
                                u.to &&
                                    t.getLine(u.to.line).length <= l &&
                                    a.push(
                                        t.markText(
                                            u.to,
                                            n(u.to.line, u.to.ch + 1),
                                            { className: f }
                                        )
                                    );
                        }
                    }
                    if (a.length) {
                        e && t.state.focused && t.focus();
                        var g = function() {
                            t.operation(function() {
                                for (var t = 0; t < a.length; t++) a[t].clear();
                            });
                        };
                        if (!r) return g;
                        setTimeout(g, 800);
                    }
                }
                function a(t) {
                    t.operation(function() {
                        t.state.matchBrackets.currentlyHighlighted &&
                            (t.state.matchBrackets.currentlyHighlighted(),
                            (t.state.matchBrackets.currentlyHighlighted = null)),
                            (t.state.matchBrackets.currentlyHighlighted = c(
                                t,
                                !1,
                                t.state.matchBrackets
                            ));
                    });
                }
                function s(t) {
                    t.state.matchBrackets &&
                        t.state.matchBrackets.currentlyHighlighted &&
                        (t.state.matchBrackets.currentlyHighlighted(),
                        (t.state.matchBrackets.currentlyHighlighted = null));
                }
                t.defineOption('matchBrackets', !1, function(e, n, r) {
                    r &&
                        r != t.Init &&
                        (e.off('cursorActivity', a),
                        e.off('focus', a),
                        e.off('blur', s),
                        s(e)),
                        n &&
                            ((e.state.matchBrackets =
                                'object' == typeof n ? n : {}),
                            e.on('cursorActivity', a),
                            e.on('focus', a),
                            e.on('blur', s));
                }),
                    t.defineExtension('matchBrackets', function() {
                        c(this, !0);
                    }),
                    t.defineExtension('findMatchingBracket', function(t, e, n) {
                        return (
                            (n || 'boolean' == typeof e) &&
                                (n
                                    ? ((n.strict = e), (e = n))
                                    : (e = e ? { strict: !0 } : null)),
                            o(this, t, e)
                        );
                    }),
                    t.defineExtension('scanForBracket', function(t, e, n, r) {
                        return l(this, t, e, n, r);
                    });
            })(n(25747));
        },
        41859: (t, e, n) => {
            !(function(t) {
                'use strict';
                var e,
                    n,
                    r = t.Pos;
                function i(t, e) {
                    for (
                        var n = (function(t) {
                                var e = t.flags;
                                return null != e
                                    ? e
                                    : (t.ignoreCase ? 'i' : '') +
                                          (t.global ? 'g' : '') +
                                          (t.multiline ? 'm' : '');
                            })(t),
                            r = n,
                            i = 0;
                        i < e.length;
                        i++
                    )
                        -1 == r.indexOf(e.charAt(i)) && (r += e.charAt(i));
                    return n == r ? t : new RegExp(t.source, r);
                }
                function o(t) {
                    return /\\s|\\n|\n|\\W|\\D|\[\^/.test(t.source);
                }
                function l(t, e, n) {
                    e = i(e, 'g');
                    for (
                        var o = n.line, l = n.ch, c = t.lastLine();
                        o <= c;
                        o++, l = 0
                    ) {
                        e.lastIndex = l;
                        var a = t.getLine(o),
                            s = e.exec(a);
                        if (s)
                            return {
                                from: r(o, s.index),
                                to: r(o, s.index + s[0].length),
                                match: s,
                            };
                    }
                }
                function c(t, e, n) {
                    if (!o(e)) return l(t, e, n);
                    e = i(e, 'gm');
                    for (var c, a = 1, s = n.line, h = t.lastLine(); s <= h; ) {
                        for (var u = 0; u < a && !(s > h); u++) {
                            var f = t.getLine(s++);
                            c = null == c ? f : c + '\n' + f;
                        }
                        (a *= 2), (e.lastIndex = n.ch);
                        var g = e.exec(c);
                        if (g) {
                            var m = c.slice(0, g.index).split('\n'),
                                d = g[0].split('\n'),
                                p = n.line + m.length - 1,
                                v = m[m.length - 1].length;
                            return {
                                from: r(p, v),
                                to: r(
                                    p + d.length - 1,
                                    1 == d.length
                                        ? v + d[0].length
                                        : d[d.length - 1].length
                                ),
                                match: g,
                            };
                        }
                    }
                }
                function a(t, e, n) {
                    for (var r, i = 0; i <= t.length; ) {
                        e.lastIndex = i;
                        var o = e.exec(t);
                        if (!o) break;
                        var l = o.index + o[0].length;
                        if (l > t.length - n) break;
                        (!r || l > r.index + r[0].length) && (r = o),
                            (i = o.index + 1);
                    }
                    return r;
                }
                function s(t, e, n) {
                    e = i(e, 'g');
                    for (
                        var o = n.line, l = n.ch, c = t.firstLine();
                        o >= c;
                        o--, l = -1
                    ) {
                        var s = t.getLine(o),
                            h = a(s, e, l < 0 ? 0 : s.length - l);
                        if (h)
                            return {
                                from: r(o, h.index),
                                to: r(o, h.index + h[0].length),
                                match: h,
                            };
                    }
                }
                function h(t, e, n) {
                    if (!o(e)) return s(t, e, n);
                    e = i(e, 'gm');
                    for (
                        var l,
                            c = 1,
                            h = t.getLine(n.line).length - n.ch,
                            u = n.line,
                            f = t.firstLine();
                        u >= f;

                    ) {
                        for (var g = 0; g < c && u >= f; g++) {
                            var m = t.getLine(u--);
                            l = null == l ? m : m + '\n' + l;
                        }
                        c *= 2;
                        var d = a(l, e, h);
                        if (d) {
                            var p = l.slice(0, d.index).split('\n'),
                                v = d[0].split('\n'),
                                x = u + p.length,
                                L = p[p.length - 1].length;
                            return {
                                from: r(x, L),
                                to: r(
                                    x + v.length - 1,
                                    1 == v.length
                                        ? L + v[0].length
                                        : v[v.length - 1].length
                                ),
                                match: d,
                            };
                        }
                    }
                }
                function u(t, e, n, r) {
                    if (t.length == e.length) return n;
                    for (
                        var i = 0, o = n + Math.max(0, t.length - e.length);
                        ;

                    ) {
                        if (i == o) return i;
                        var l = (i + o) >> 1,
                            c = r(t.slice(0, l)).length;
                        if (c == n) return l;
                        c > n ? (o = l) : (i = l + 1);
                    }
                }
                function f(t, i, o, l) {
                    if (!i.length) return null;
                    var c = l ? e : n,
                        a = c(i).split(/\r|\n\r?/);
                    t: for (
                        var s = o.line,
                            h = o.ch,
                            f = t.lastLine() + 1 - a.length;
                        s <= f;
                        s++, h = 0
                    ) {
                        var g = t.getLine(s).slice(h),
                            m = c(g);
                        if (1 == a.length) {
                            var d = m.indexOf(a[0]);
                            if (-1 == d) continue t;
                            return (
                                (o = u(g, m, d, c) + h),
                                {
                                    from: r(s, u(g, m, d, c) + h),
                                    to: r(s, u(g, m, d + a[0].length, c) + h),
                                }
                            );
                        }
                        var p = m.length - a[0].length;
                        if (m.slice(p) == a[0]) {
                            for (var v = 1; v < a.length - 1; v++)
                                if (c(t.getLine(s + v)) != a[v]) continue t;
                            var x = t.getLine(s + a.length - 1),
                                L = c(x),
                                C = a[a.length - 1];
                            if (L.slice(0, C.length) == C)
                                return {
                                    from: r(s, u(g, m, p, c) + h),
                                    to: r(
                                        s + a.length - 1,
                                        u(x, L, C.length, c)
                                    ),
                                };
                        }
                    }
                }
                function g(t, i, o, l) {
                    if (!i.length) return null;
                    var c = l ? e : n,
                        a = c(i).split(/\r|\n\r?/);
                    t: for (
                        var s = o.line,
                            h = o.ch,
                            f = t.firstLine() - 1 + a.length;
                        s >= f;
                        s--, h = -1
                    ) {
                        var g = t.getLine(s);
                        h > -1 && (g = g.slice(0, h));
                        var m = c(g);
                        if (1 == a.length) {
                            var d = m.lastIndexOf(a[0]);
                            if (-1 == d) continue t;
                            return {
                                from: r(s, u(g, m, d, c)),
                                to: r(s, u(g, m, d + a[0].length, c)),
                            };
                        }
                        var p = a[a.length - 1];
                        if (m.slice(0, p.length) == p) {
                            var v = 1;
                            for (o = s - a.length + 1; v < a.length - 1; v++)
                                if (c(t.getLine(o + v)) != a[v]) continue t;
                            var x = t.getLine(s + 1 - a.length),
                                L = c(x);
                            if (L.slice(L.length - a[0].length) == a[0])
                                return {
                                    from: r(
                                        s + 1 - a.length,
                                        u(x, L, x.length - a[0].length, c)
                                    ),
                                    to: r(s, u(g, m, p.length, c)),
                                };
                        }
                    }
                }
                function m(t, e, n, o) {
                    var a;
                    (this.atOccurrence = !1),
                        (this.doc = t),
                        (n = n ? t.clipPos(n) : r(0, 0)),
                        (this.pos = { from: n, to: n }),
                        'object' == typeof o
                            ? (a = o.caseFold)
                            : ((a = o), (o = null)),
                        'string' == typeof e
                            ? (null == a && (a = !1),
                              (this.matches = function(n, r) {
                                  return (n ? g : f)(t, e, r, a);
                              }))
                            : ((e = i(e, 'gm')),
                              o && !1 === o.multiline
                                  ? (this.matches = function(n, r) {
                                        return (n ? s : l)(t, e, r);
                                    })
                                  : (this.matches = function(n, r) {
                                        return (n ? h : c)(t, e, r);
                                    }));
                }
                String.prototype.normalize
                    ? ((e = function(t) {
                          return t.normalize('NFD').toLowerCase();
                      }),
                      (n = function(t) {
                          return t.normalize('NFD');
                      }))
                    : ((e = function(t) {
                          return t.toLowerCase();
                      }),
                      (n = function(t) {
                          return t;
                      })),
                    (m.prototype = {
                        findNext: function() {
                            return this.find(!1);
                        },
                        findPrevious: function() {
                            return this.find(!0);
                        },
                        find: function(e) {
                            for (
                                var n = this.matches(
                                    e,
                                    this.doc.clipPos(
                                        e ? this.pos.from : this.pos.to
                                    )
                                );
                                n && 0 == t.cmpPos(n.from, n.to);

                            )
                                e
                                    ? n.from.ch
                                        ? (n.from = r(
                                              n.from.line,
                                              n.from.ch - 1
                                          ))
                                        : (n =
                                              n.from.line ==
                                              this.doc.firstLine()
                                                  ? null
                                                  : this.matches(
                                                        e,
                                                        this.doc.clipPos(
                                                            r(n.from.line - 1)
                                                        )
                                                    ))
                                    : n.to.ch <
                                      this.doc.getLine(n.to.line).length
                                    ? (n.to = r(n.to.line, n.to.ch + 1))
                                    : (n =
                                          n.to.line == this.doc.lastLine()
                                              ? null
                                              : this.matches(
                                                    e,
                                                    r(n.to.line + 1, 0)
                                                ));
                            if (n)
                                return (
                                    (this.pos = n),
                                    (this.atOccurrence = !0),
                                    this.pos.match || !0
                                );
                            var i = r(
                                e
                                    ? this.doc.firstLine()
                                    : this.doc.lastLine() + 1,
                                0
                            );
                            return (
                                (this.pos = { from: i, to: i }),
                                (this.atOccurrence = !1)
                            );
                        },
                        from: function() {
                            if (this.atOccurrence) return this.pos.from;
                        },
                        to: function() {
                            if (this.atOccurrence) return this.pos.to;
                        },
                        replace: function(e, n) {
                            if (this.atOccurrence) {
                                var i = t.splitLines(e);
                                this.doc.replaceRange(
                                    i,
                                    this.pos.from,
                                    this.pos.to,
                                    n
                                ),
                                    (this.pos.to = r(
                                        this.pos.from.line + i.length - 1,
                                        i[i.length - 1].length +
                                            (1 == i.length
                                                ? this.pos.from.ch
                                                : 0)
                                    ));
                            }
                        },
                    }),
                    t.defineExtension('getSearchCursor', function(t, e, n) {
                        return new m(this.doc, t, e, n);
                    }),
                    t.defineDocExtension('getSearchCursor', function(t, e, n) {
                        return new m(this, t, e, n);
                    }),
                    t.defineExtension('selectMatches', function(e, n) {
                        for (
                            var r = [],
                                i = this.getSearchCursor(
                                    e,
                                    this.getCursor('from'),
                                    n
                                );
                            i.findNext() &&
                            !(t.cmpPos(i.to(), this.getCursor('to')) > 0);

                        )
                            r.push({ anchor: i.from(), head: i.to() });
                        r.length && this.setSelections(r, 0);
                    });
            })(n(25747));
        },
    },
]);
//# sourceMappingURL=8373.96b0b3a.js.map
