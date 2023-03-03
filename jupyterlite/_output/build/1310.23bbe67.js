'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [1310],
    {
        71310: (t, e, o) => {
            var i, a, r, n, c;
            o.r(e),
                o.d(e, {
                    ClipboardExt: () => i,
                    ElementExt: () => a,
                    Platform: () => r,
                    Selector: () => n,
                }),
                (function(t) {
                    t.copyText = function(t) {
                        var e = document.body,
                            o = function(i) {
                                i.preventDefault(),
                                    i.stopPropagation(),
                                    i.clipboardData.setData('text', t),
                                    e.removeEventListener('copy', o, !0);
                            };
                        e.addEventListener('copy', o, !0),
                            document.execCommand('copy');
                    };
                })(i || (i = {})),
                (function(t) {
                    (t.boxSizing = function(t) {
                        var e = window.getComputedStyle(t),
                            o = parseFloat(e.borderTopWidth) || 0,
                            i = parseFloat(e.borderLeftWidth) || 0,
                            a = parseFloat(e.borderRightWidth) || 0,
                            r = parseFloat(e.borderBottomWidth) || 0,
                            n = parseFloat(e.paddingTop) || 0,
                            c = parseFloat(e.paddingLeft) || 0,
                            l = parseFloat(e.paddingRight) || 0,
                            h = parseFloat(e.paddingBottom) || 0;
                        return {
                            borderTop: o,
                            borderLeft: i,
                            borderRight: a,
                            borderBottom: r,
                            paddingTop: n,
                            paddingLeft: c,
                            paddingRight: l,
                            paddingBottom: h,
                            horizontalSum: i + c + l + a,
                            verticalSum: o + n + h + r,
                        };
                    }),
                        (t.sizeLimits = function(t) {
                            var e = window.getComputedStyle(t),
                                o = parseFloat(e.minWidth) || 0,
                                i = parseFloat(e.minHeight) || 0,
                                a = parseFloat(e.maxWidth) || 1 / 0,
                                r = parseFloat(e.maxHeight) || 1 / 0;
                            return {
                                minWidth: o,
                                minHeight: i,
                                maxWidth: (a = Math.max(o, a)),
                                maxHeight: (r = Math.max(i, r)),
                            };
                        }),
                        (t.hitTest = function(t, e, o) {
                            var i = t.getBoundingClientRect();
                            return (
                                e >= i.left &&
                                e < i.right &&
                                o >= i.top &&
                                o < i.bottom
                            );
                        }),
                        (t.scrollIntoViewIfNeeded = function(t, e) {
                            var o = t.getBoundingClientRect(),
                                i = e.getBoundingClientRect();
                            (i.top <= o.top && i.bottom >= o.bottom) ||
                                ((i.top < o.top && i.height <= o.height) ||
                                (i.bottom > o.bottom && i.height >= o.height)
                                    ? (t.scrollTop -= o.top - i.top)
                                    : ((i.top < o.top && i.height > o.height) ||
                                          (i.bottom > o.bottom &&
                                              i.height < o.height)) &&
                                      (t.scrollTop -= o.bottom - i.bottom));
                        });
                })(a || (a = {})),
                (function(t) {
                    (t.IS_MAC = !!navigator.platform.match(/Mac/i)),
                        (t.IS_WIN = !!navigator.platform.match(/Win/i)),
                        (t.IS_IE = /Trident/.test(navigator.userAgent)),
                        (t.IS_EDGE = /Edge/.test(navigator.userAgent)),
                        (t.accelKey = function(e) {
                            return t.IS_MAC ? e.metaKey : e.ctrlKey;
                        });
                })(r || (r = {})),
                (function(t) {
                    (t.calculateSpecificity = function(t) {
                        if (t in c.specificityCache)
                            return c.specificityCache[t];
                        var e = c.calculateSingle(t);
                        return (c.specificityCache[t] = e);
                    }),
                        (t.isValid = function(t) {
                            if (t in c.validityCache) return c.validityCache[t];
                            var e = !0;
                            try {
                                c.testElem.querySelector(t);
                            } catch (t) {
                                e = !1;
                            }
                            return (c.validityCache[t] = e);
                        }),
                        (t.matches = function(t, e) {
                            return c.protoMatchFunc.call(t, e);
                        });
                })(n || (n = {})),
                (function(t) {
                    var e;
                    (t.specificityCache = Object.create(null)),
                        (t.validityCache = Object.create(null)),
                        (t.testElem = document.createElement('div')),
                        (t.protoMatchFunc =
                            (e = Element.prototype).matches ||
                            e.matchesSelector ||
                            e.mozMatchesSelector ||
                            e.msMatchesSelector ||
                            e.oMatchesSelector ||
                            e.webkitMatchesSelector ||
                            function(t) {
                                var e = this,
                                    o = e.ownerDocument
                                        ? e.ownerDocument.querySelectorAll(t)
                                        : [];
                                return (
                                    -1 !== Array.prototype.indexOf.call(o, e)
                                );
                            }),
                        (t.calculateSingle = function(t) {
                            var e = 0,
                                p = 0,
                                s = 0;
                            function d(e) {
                                var o = t.match(e);
                                return (
                                    null !== o &&
                                    ((t = t.slice(o[0].length)), !0)
                                );
                            }
                            for (
                                t = (t = t.split(',', 1)[0]).replace(h, ' $1 ');
                                t.length > 0;

                            )
                                if (d(o)) e++;
                                else if (d(i)) p++;
                                else if (d(a)) p++;
                                else if (d(n)) s++;
                                else if (d(c)) p++;
                                else if (d(r)) s++;
                                else if (!d(l)) return 0;
                            return (
                                ((e = Math.min(e, 255)) << 16) |
                                ((p = Math.min(p, 255)) << 8) |
                                Math.min(s, 255)
                            );
                        });
                    var o = /^#[^\s\+>~#\.\[:]+/,
                        i = /^\.[^\s\+>~#\.\[:]+/,
                        a = /^\[[^\]]+\]/,
                        r = /^[^\s\+>~#\.\[:]+/,
                        n = /^(::[^\s\+>~#\.\[:]+|:first-line|:first-letter|:before|:after)/,
                        c = /^:[^\s\+>~#\.\[:]+/,
                        l = /^[\s\+>~\*]+/,
                        h = /:not\(([^\)]+)\)/g;
                })(c || (c = {}));
        },
    },
]);
//# sourceMappingURL=1310.23bbe67.js.map
