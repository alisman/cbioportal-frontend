'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [528, 4535],
    {
        77608: (t, e, s) => {
            s.d(e, {
                $m: () => l,
                Dp: () => a,
                Z$: () => r,
                kJ: () => o,
                s7: () => n,
            });
            const r = t => t[t.length - 1],
                n = (t, e) => {
                    for (let s = 0; s < e.length; s++) t.push(e[s]);
                },
                a = Array.from,
                l = (t, e) => {
                    return (
                        t.length === e.length &&
                        ((s = (t, s) => t === e[s]), t.every(s))
                    );
                    var s;
                },
                o = Array.isArray;
        },
        12904: (t, e, s) => {
            s.d(e, { Hi: () => o, PP: () => a, UV: () => l, gB: () => c });
            var r = s(77608),
                n = s(41042);
            const a = (t, e, s = 0) => {
                    try {
                        for (; s < t.length; s++) t[s](...e);
                    } finally {
                        s < t.length && a(t, e, s + 1);
                    }
                },
                l = (t, e) =>
                    t === e ||
                    (null != t &&
                        null != e &&
                        t.constructor === e.constructor &&
                        ((t instanceof Array && r.$m(t, e)) ||
                            ('object' == typeof t && n.$m(t, e)))),
                o = (t, e) => {
                    if (null == t || null == e)
                        return ((t, e) => t === e)(t, e);
                    if (t.constructor !== e.constructor) return !1;
                    if (t === e) return !0;
                    switch (t.constructor) {
                        case ArrayBuffer:
                            (t = new Uint8Array(t)), (e = new Uint8Array(e));
                        case Uint8Array:
                            if (t.byteLength !== e.byteLength) return !1;
                            for (let s = 0; s < t.length; s++)
                                if (t[s] !== e[s]) return !1;
                            break;
                        case Set:
                            if (t.size !== e.size) return !1;
                            for (const s of t) if (!e.has(s)) return !1;
                            break;
                        case Map:
                            if (t.size !== e.size) return !1;
                            for (const s of t.keys())
                                if (!e.has(s) || !o(t.get(s), e.get(s)))
                                    return !1;
                            break;
                        case Object:
                            if (n.kE(t) !== n.kE(e)) return !1;
                            for (const s in t)
                                if (!n.l$(t, s) || !o(t[s], e[s])) return !1;
                            break;
                        case Array:
                            if (t.length !== e.length) return !1;
                            for (let s = 0; s < t.length; s++)
                                if (!o(t[s], e[s])) return !1;
                            break;
                        default:
                            return !1;
                    }
                    return !0;
                },
                c = (t, e) => e.includes(t);
        },
        31234: (t, e, s) => {
            s.d(e, {
                JG: () => n,
                UI: () => l,
                Ue: () => r,
                Yj: () => o,
                Yu: () => a,
            });
            const r = () => new Map(),
                n = t => {
                    const e = r();
                    return (
                        t.forEach((t, s) => {
                            e.set(s, t);
                        }),
                        e
                    );
                },
                a = (t, e, s) => {
                    let r = t.get(e);
                    return void 0 === r && t.set(e, (r = s())), r;
                },
                l = (t, e) => {
                    const s = [];
                    for (const [r, n] of t) s.push(e(n, r));
                    return s;
                },
                o = (t, e) => {
                    for (const [s, r] of t) if (e(r, s)) return !0;
                    return !1;
                };
        },
        41865: (t, e, s) => {
            s.d(e, {
                Fp: () => o,
                GR: () => i,
                GW: () => r,
                IH: () => a,
                VV: () => l,
                Wn: () => n,
                sQ: () => c,
            });
            const r = Math.floor,
                n = (Math.ceil, Math.abs),
                a =
                    (Math.imul,
                    Math.round,
                    Math.log10,
                    Math.log2,
                    Math.log,
                    Math.sqrt,
                    (t, e) => t + e),
                l = (t, e) => (t < e ? t : e),
                o = (t, e) => (t > e ? t : e),
                c = (Number.isNaN, Math.pow),
                i = (Math.sign, t => (0 !== t ? t < 0 : 1 / t < 0));
        },
        41042: (t, e, s) => {
            s.d(e, { $m: () => o, UI: () => n, kE: () => a, l$: () => l }),
                Object.assign;
            const r = Object.keys,
                n = (t, e) => {
                    const s = [];
                    for (const r in t) s.push(e(t[r], r));
                    return s;
                },
                a = t => r(t).length,
                l = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
                o = (t, e) =>
                    t === e ||
                    (a(t) === a(e) &&
                        ((t, e) => {
                            for (const s in t) if (!e(t[s], s)) return !1;
                            return !0;
                        })(
                            t,
                            (t, s) => (void 0 !== t || l(e, s)) && e[s] === t
                        ));
        },
        32549: (t, e, s) => {
            s.d(e, { y: () => l });
            var r = s(31234),
                n = s(64064),
                a = s(77608);
            class l {
                constructor() {
                    this._observers = r.Ue();
                }
                on(t, e) {
                    r.Yu(this._observers, t, n.Ue).add(e);
                }
                once(t, e) {
                    const s = (...r) => {
                        this.off(t, s), e(...r);
                    };
                    this.on(t, s);
                }
                off(t, e) {
                    const s = this._observers.get(t);
                    void 0 !== s &&
                        (s.delete(e),
                        0 === s.size && this._observers.delete(t));
                }
                emit(t, e) {
                    return a
                        .Dp((this._observers.get(t) || r.Ue()).values())
                        .forEach(t => t(...e));
                }
                destroy() {
                    this._observers = r.Ue();
                }
            }
        },
        64064: (t, e, s) => {
            s.d(e, { Ue: () => r });
            const r = () => new Set();
        },
        70528: (t, e, s) => {
            s.d(e, { Ag: () => h, GL: () => i, oy: () => d, xq: () => u });
            var r = s(44918),
                n = s(27164),
                a = s(9817),
                l = s(41865),
                o = s(32549),
                c = s(12904);
            s(79915);
            class i extends o.y {
                constructor(t) {
                    super(),
                        (this.doc = t),
                        (this.clientID = t.clientID),
                        (this.states = new Map()),
                        (this.meta = new Map()),
                        (this._checkInterval = setInterval(() => {
                            const t = a.ZG();
                            null !== this.getLocalState() &&
                                15e3 <=
                                    t -
                                        this.meta.get(this.clientID)
                                            .lastUpdated &&
                                this.setLocalState(this.getLocalState());
                            const e = [];
                            this.meta.forEach((s, r) => {
                                r !== this.clientID &&
                                    3e4 <= t - s.lastUpdated &&
                                    this.states.has(r) &&
                                    e.push(r);
                            }),
                                e.length > 0 && h(this, e, 'timeout');
                        }, l.GW(3e3))),
                        t.on('destroy', () => {
                            this.destroy();
                        }),
                        this.setLocalState({});
                }
                destroy() {
                    this.emit('destroy', [this]),
                        this.setLocalState(null),
                        super.destroy(),
                        clearInterval(this._checkInterval);
                }
                getLocalState() {
                    return this.states.get(this.clientID) || null;
                }
                setLocalState(t) {
                    const e = this.clientID,
                        s = this.meta.get(e),
                        r = void 0 === s ? 0 : s.clock + 1,
                        n = this.states.get(e);
                    null === t ? this.states.delete(e) : this.states.set(e, t),
                        this.meta.set(e, { clock: r, lastUpdated: a.ZG() });
                    const l = [],
                        o = [],
                        i = [],
                        h = [];
                    null === t
                        ? h.push(e)
                        : null == n
                        ? null != t && l.push(e)
                        : (o.push(e), c.Hi(n, t) || i.push(e)),
                        (l.length > 0 || i.length > 0 || h.length > 0) &&
                            this.emit('change', [
                                { added: l, updated: i, removed: h },
                                'local',
                            ]),
                        this.emit('update', [
                            { added: l, updated: o, removed: h },
                            'local',
                        ]);
                }
                setLocalStateField(t, e) {
                    const s = this.getLocalState();
                    null !== s && this.setLocalState({ ...s, [t]: e });
                }
                getStates() {
                    return this.states;
                }
            }
            const h = (t, e, s) => {
                    const r = [];
                    for (let s = 0; s < e.length; s++) {
                        const n = e[s];
                        if (t.states.has(n)) {
                            if ((t.states.delete(n), n === t.clientID)) {
                                const e = t.meta.get(n);
                                t.meta.set(n, {
                                    clock: e.clock + 1,
                                    lastUpdated: a.ZG(),
                                });
                            }
                            r.push(n);
                        }
                    }
                    r.length > 0 &&
                        (t.emit('change', [
                            { added: [], updated: [], removed: r },
                            s,
                        ]),
                        t.emit('update', [
                            { added: [], updated: [], removed: r },
                            s,
                        ]));
                },
                u = (t, e, s = t.states) => {
                    const n = e.length,
                        a = r.Mf();
                    r.uE(a, n);
                    for (let l = 0; l < n; l++) {
                        const n = e[l],
                            o = s.get(n) || null,
                            c = t.meta.get(n).clock;
                        r.uE(a, n), r.uE(a, c), r.uw(a, JSON.stringify(o));
                    }
                    return r._f(a);
                },
                d = (t, e, s) => {
                    const r = n.l1(e),
                        l = a.ZG(),
                        o = [],
                        i = [],
                        h = [],
                        u = [],
                        d = n.yg(r);
                    for (let e = 0; e < d; e++) {
                        const e = n.yg(r);
                        let s = n.yg(r);
                        const a = JSON.parse(n.kf(r)),
                            d = t.meta.get(e),
                            g = t.states.get(e),
                            f = void 0 === d ? 0 : d.clock;
                        (f < s || (f === s && null === a && t.states.has(e))) &&
                            (null === a
                                ? e === t.clientID && null != t.getLocalState()
                                    ? s++
                                    : t.states.delete(e)
                                : t.states.set(e, a),
                            t.meta.set(e, { clock: s, lastUpdated: l }),
                            void 0 === d && null !== a
                                ? o.push(e)
                                : void 0 !== d && null === a
                                ? u.push(e)
                                : null !== a &&
                                  (c.Hi(a, g) || h.push(e), i.push(e)));
                    }
                    (o.length > 0 || h.length > 0 || u.length > 0) &&
                        t.emit('change', [
                            { added: o, updated: h, removed: u },
                            s,
                        ]),
                        (o.length > 0 || i.length > 0 || u.length > 0) &&
                            t.emit('update', [
                                { added: o, updated: i, removed: u },
                                s,
                            ]);
                };
        },
    },
]);
//# sourceMappingURL=528.2262cb0.js.map
