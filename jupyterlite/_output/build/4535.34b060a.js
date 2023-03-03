'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [4535],
    {
        77608: (r, t, e) => {
            e.d(t, {
                $m: () => a,
                Dp: () => o,
                Z$: () => n,
                kJ: () => c,
                s7: () => s,
            });
            const n = r => r[r.length - 1],
                s = (r, t) => {
                    for (let e = 0; e < t.length; e++) r.push(t[e]);
                },
                o = Array.from,
                a = (r, t) => {
                    return (
                        r.length === t.length &&
                        ((e = (r, e) => r === t[e]), r.every(e))
                    );
                    var e;
                },
                c = Array.isArray;
        },
        12904: (r, t, e) => {
            e.d(t, { Hi: () => c, PP: () => o, UV: () => a, gB: () => u });
            var n = e(77608),
                s = e(41042);
            const o = (r, t, e = 0) => {
                    try {
                        for (; e < r.length; e++) r[e](...t);
                    } finally {
                        e < r.length && o(r, t, e + 1);
                    }
                },
                a = (r, t) =>
                    r === t ||
                    (null != r &&
                        null != t &&
                        r.constructor === t.constructor &&
                        ((r instanceof Array && n.$m(r, t)) ||
                            ('object' == typeof r && s.$m(r, t)))),
                c = (r, t) => {
                    if (null == r || null == t)
                        return ((r, t) => r === t)(r, t);
                    if (r.constructor !== t.constructor) return !1;
                    if (r === t) return !0;
                    switch (r.constructor) {
                        case ArrayBuffer:
                            (r = new Uint8Array(r)), (t = new Uint8Array(t));
                        case Uint8Array:
                            if (r.byteLength !== t.byteLength) return !1;
                            for (let e = 0; e < r.length; e++)
                                if (r[e] !== t[e]) return !1;
                            break;
                        case Set:
                            if (r.size !== t.size) return !1;
                            for (const e of r) if (!t.has(e)) return !1;
                            break;
                        case Map:
                            if (r.size !== t.size) return !1;
                            for (const e of r.keys())
                                if (!t.has(e) || !c(r.get(e), t.get(e)))
                                    return !1;
                            break;
                        case Object:
                            if (s.kE(r) !== s.kE(t)) return !1;
                            for (const e in r)
                                if (!s.l$(r, e) || !c(r[e], t[e])) return !1;
                            break;
                        case Array:
                            if (r.length !== t.length) return !1;
                            for (let e = 0; e < r.length; e++)
                                if (!c(r[e], t[e])) return !1;
                            break;
                        default:
                            return !1;
                    }
                    return !0;
                },
                u = (r, t) => t.includes(r);
        },
        31234: (r, t, e) => {
            e.d(t, {
                JG: () => s,
                UI: () => a,
                Ue: () => n,
                Yj: () => c,
                Yu: () => o,
            });
            const n = () => new Map(),
                s = r => {
                    const t = n();
                    return (
                        r.forEach((r, e) => {
                            t.set(e, r);
                        }),
                        t
                    );
                },
                o = (r, t, e) => {
                    let n = r.get(t);
                    return void 0 === n && r.set(t, (n = e())), n;
                },
                a = (r, t) => {
                    const e = [];
                    for (const [n, s] of r) e.push(t(s, n));
                    return e;
                },
                c = (r, t) => {
                    for (const [e, n] of r) if (t(n, e)) return !0;
                    return !1;
                };
        },
        41865: (r, t, e) => {
            e.d(t, {
                Fp: () => c,
                GR: () => i,
                GW: () => n,
                IH: () => o,
                VV: () => a,
                Wn: () => s,
                sQ: () => u,
            });
            const n = Math.floor,
                s = (Math.ceil, Math.abs),
                o =
                    (Math.imul,
                    Math.round,
                    Math.log10,
                    Math.log2,
                    Math.log,
                    Math.sqrt,
                    (r, t) => r + t),
                a = (r, t) => (r < t ? r : t),
                c = (r, t) => (r > t ? r : t),
                u = (Number.isNaN, Math.pow),
                i = (Math.sign, r => (0 !== r ? r < 0 : 1 / r < 0));
        },
        41042: (r, t, e) => {
            e.d(t, { $m: () => c, UI: () => s, kE: () => o, l$: () => a }),
                Object.assign;
            const n = Object.keys,
                s = (r, t) => {
                    const e = [];
                    for (const n in r) e.push(t(r[n], n));
                    return e;
                },
                o = r => n(r).length,
                a = (r, t) => Object.prototype.hasOwnProperty.call(r, t),
                c = (r, t) =>
                    r === t ||
                    (o(r) === o(t) &&
                        ((r, t) => {
                            for (const e in r) if (!t(r[e], e)) return !1;
                            return !0;
                        })(
                            r,
                            (r, e) => (void 0 !== r || a(t, e)) && t[e] === r
                        ));
        },
        32549: (r, t, e) => {
            e.d(t, { y: () => a });
            var n = e(31234),
                s = e(64064),
                o = e(77608);
            class a {
                constructor() {
                    this._observers = n.Ue();
                }
                on(r, t) {
                    n.Yu(this._observers, r, s.Ue).add(t);
                }
                once(r, t) {
                    const e = (...n) => {
                        this.off(r, e), t(...n);
                    };
                    this.on(r, e);
                }
                off(r, t) {
                    const e = this._observers.get(r);
                    void 0 !== e &&
                        (e.delete(t),
                        0 === e.size && this._observers.delete(r));
                }
                emit(r, t) {
                    return o
                        .Dp((this._observers.get(r) || n.Ue()).values())
                        .forEach(r => r(...t));
                }
                destroy() {
                    this._observers = n.Ue();
                }
            }
        },
        64064: (r, t, e) => {
            e.d(t, { Ue: () => n });
            const n = () => new Set();
        },
    },
]);
//# sourceMappingURL=4535.34b060a.js.map
