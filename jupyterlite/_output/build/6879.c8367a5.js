(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [6879],
    {
        15593: (t, e, s) => {
            'use strict';
            s.d(e, {
                $2: () => l,
                CY: () => o,
                Ko: () => i,
                Qn: () => n,
                RP: () => d,
                Vw: () => r,
                cq: () => c,
                jS: () => f,
                kr: () => a,
                rc: () => u,
                x: () => p,
                x1: () => h,
            });
            const r = 1,
                n = 2,
                o = 4,
                i = 8,
                c = 32,
                u = 64,
                h = 128,
                a = 31,
                l = 63,
                f = 127,
                p = 255,
                d = 2147483647;
        },
        30996: (t, e, s) => {
            'use strict';
            s.d(e, {
                Gh: () => h,
                Te: () => i,
                eh: () => c,
                f9: () => a,
                s3: () => u,
            });
            var r = s(1011),
                n = s(96571);
            const o = t => new Uint8Array(t),
                i = (t, e, s) => new Uint8Array(t, e, s),
                c = t => new Uint8Array(t),
                u = n.jU
                    ? t => {
                          let e = '';
                          for (let s = 0; s < t.byteLength; s++)
                              e += r.IK(t[s]);
                          return btoa(e);
                      }
                    : t =>
                          Buffer.from(
                              t.buffer,
                              t.byteOffset,
                              t.byteLength
                          ).toString('base64'),
                h = n.jU
                    ? t => {
                          const e = atob(t),
                              s = o(e.length);
                          for (let t = 0; t < e.length; t++)
                              s[t] = e.charCodeAt(t);
                          return s;
                      }
                    : t => {
                          const e = Buffer.from(t, 'base64');
                          return new Uint8Array(
                              e.buffer,
                              e.byteOffset,
                              e.byteLength
                          );
                      },
                a = t => {
                    const e = o(t.byteLength);
                    return e.set(t), e;
                };
        },
        27164: (t, e, s) => {
            'use strict';
            s.d(e, {
                F7: () => U,
                HN: () => g,
                Jl: () => y,
                UF: () => x,
                XW: () => C,
                dD: () => R,
                iU: () => b,
                kf: () => T,
                kj: () => w,
                l1: () => f,
                sO: () => O,
                v3: () => p,
                v_: () => v,
                yg: () => m,
            });
            var r = s(30996),
                n = s(15593),
                o = s(41865),
                i = s(69102),
                c = s(1011),
                u = s(12280);
            const h = u.Ue('Unexpected end of array'),
                a = u.Ue('Integer out of Range');
            class l {
                constructor(t) {
                    (this.arr = t), (this.pos = 0);
                }
            }
            const f = t => new l(t),
                p = t => t.pos !== t.arr.length,
                d = (t, e) => {
                    const s = r.Te(t.arr.buffer, t.pos + t.arr.byteOffset, e);
                    return (t.pos += e), s;
                },
                g = t => d(t, m(t)),
                b = t => d(t, t.arr.length - t.pos),
                w = t => t.arr[t.pos++],
                y = t => {
                    const e =
                        (t.arr[t.pos] +
                            (t.arr[t.pos + 1] << 8) +
                            (t.arr[t.pos + 2] << 16) +
                            (t.arr[t.pos + 3] << 24)) >>>
                        0;
                    return (t.pos += 4), e;
                },
                m = t => {
                    let e = 0,
                        s = 1;
                    const r = t.arr.length;
                    for (; t.pos < r; ) {
                        const r = t.arr[t.pos++];
                        if (((e += (r & n.jS) * s), (s *= 128), r < n.x1))
                            return e;
                        if (e > i.YM) throw a;
                    }
                    throw h;
                },
                U = t => {
                    let e = t.arr[t.pos++],
                        s = e & n.$2,
                        r = 64;
                    const o = (e & n.rc) > 0 ? -1 : 1;
                    if (0 == (e & n.x1)) return o * s;
                    const c = t.arr.length;
                    for (; t.pos < c; ) {
                        if (
                            ((e = t.arr[t.pos++]),
                            (s += (e & n.jS) * r),
                            (r *= 128),
                            e < n.x1)
                        )
                            return o * s;
                        if (s > i.YM) throw a;
                    }
                    throw h;
                },
                T = c.CO
                    ? t => c.CO.decode(g(t))
                    : t => {
                          let e = m(t);
                          if (0 === e) return '';
                          {
                              let s = String.fromCodePoint(w(t));
                              if (--e < 100)
                                  for (; e--; ) s += String.fromCodePoint(w(t));
                              else
                                  for (; e > 0; ) {
                                      const r = e < 1e4 ? e : 1e4,
                                          n = t.arr.subarray(t.pos, t.pos + r);
                                      (t.pos += r),
                                          (s += String.fromCodePoint.apply(
                                              null,
                                              n
                                          )),
                                          (e -= r);
                                  }
                              return decodeURIComponent(escape(s));
                          }
                      },
                A = (t, e) => {
                    const s = new DataView(
                        t.arr.buffer,
                        t.arr.byteOffset + t.pos,
                        e
                    );
                    return (t.pos += e), s;
                },
                E = [
                    t => {},
                    t => null,
                    U,
                    t => A(t, 4).getFloat32(0, !1),
                    t => A(t, 8).getFloat64(0, !1),
                    t => A(t, 8).getBigInt64(0, !1),
                    t => !1,
                    t => !0,
                    T,
                    t => {
                        const e = m(t),
                            s = {};
                        for (let r = 0; r < e; r++) s[T(t)] = v(t);
                        return s;
                    },
                    t => {
                        const e = m(t),
                            s = [];
                        for (let r = 0; r < e; r++) s.push(v(t));
                        return s;
                    },
                    g,
                ],
                v = t => E[127 - w(t)](t);
            class C extends l {
                constructor(t, e) {
                    super(t),
                        (this.reader = e),
                        (this.s = null),
                        (this.count = 0);
                }
                read() {
                    return (
                        0 === this.count &&
                            ((this.s = this.reader(this)),
                            p(this)
                                ? (this.count = m(this) + 1)
                                : (this.count = -1)),
                        this.count--,
                        this.s
                    );
                }
            }
            class x extends l {
                constructor(t) {
                    super(t), (this.s = 0), (this.count = 0);
                }
                read() {
                    if (0 === this.count) {
                        this.s = U(this);
                        const t = o.GR(this.s);
                        (this.count = 1),
                            t &&
                                ((this.s = -this.s),
                                (this.count = m(this) + 2));
                    }
                    return this.count--, this.s;
                }
            }
            class R extends l {
                constructor(t) {
                    super(t), (this.s = 0), (this.count = 0), (this.diff = 0);
                }
                read() {
                    if (0 === this.count) {
                        const t = U(this),
                            e = 1 & t;
                        (this.diff = o.GW(t / 2)),
                            (this.count = 1),
                            e && (this.count = m(this) + 2);
                    }
                    return (this.s += this.diff), this.count--, this.s;
                }
            }
            class O {
                constructor(t) {
                    (this.decoder = new x(t)),
                        (this.str = T(this.decoder)),
                        (this.spos = 0);
                }
                read() {
                    const t = this.spos + this.decoder.read(),
                        e = this.str.slice(this.spos, t);
                    return (this.spos = t), e;
                }
            }
        },
        44918: (t, e, s) => {
            'use strict';
            s.d(e, {
                $F: () => p,
                EM: () => C,
                Ep: () => d,
                GF: () => x,
                HE: () => O,
                HK: () => T,
                Mf: () => h,
                TS: () => j,
                _f: () => l,
                cW: () => f,
                kE: () => a,
                mK: () => U,
                mP: () => A,
                pY: () => b,
                sX: () => F,
                uE: () => g,
                uw: () => m,
            });
            var r = s(30996),
                n = s(41865),
                o = s(69102),
                i = s(15593),
                c = s(1011);
            class u {
                constructor() {
                    (this.cpos = 0),
                        (this.cbuf = new Uint8Array(100)),
                        (this.bufs = []);
                }
            }
            const h = () => new u(),
                a = t => {
                    let e = t.cpos;
                    for (let s = 0; s < t.bufs.length; s++)
                        e += t.bufs[s].length;
                    return e;
                },
                l = t => {
                    const e = new Uint8Array(a(t));
                    let s = 0;
                    for (let r = 0; r < t.bufs.length; r++) {
                        const n = t.bufs[r];
                        e.set(n, s), (s += n.length);
                    }
                    return e.set(r.Te(t.cbuf.buffer, 0, t.cpos), s), e;
                },
                f = (t, e) => {
                    const s = t.cbuf.length;
                    t.cpos === s &&
                        (t.bufs.push(t.cbuf),
                        (t.cbuf = new Uint8Array(2 * s)),
                        (t.cpos = 0)),
                        (t.cbuf[t.cpos++] = e);
                },
                p = f,
                d = (t, e) => {
                    for (let s = 0; s < 4; s++) f(t, e & i.x), (e >>>= 8);
                },
                g = (t, e) => {
                    for (; e > i.jS; )
                        f(t, i.x1 | (i.jS & e)), (e = n.GW(e / 128));
                    f(t, i.jS & e);
                },
                b = (t, e) => {
                    const s = n.GR(e);
                    for (
                        s && (e = -e),
                            f(
                                t,
                                (e > i.$2 ? i.x1 : 0) |
                                    (s ? i.rc : 0) |
                                    (i.$2 & e)
                            ),
                            e = n.GW(e / 64);
                        e > 0;

                    )
                        f(t, (e > i.jS ? i.x1 : 0) | (i.jS & e)),
                            (e = n.GW(e / 128));
                },
                w = new Uint8Array(3e4),
                y = w.length / 3,
                m =
                    c.YZ && c.YZ.encodeInto
                        ? (t, e) => {
                              if (e.length < y) {
                                  const s = c.YZ.encodeInto(e, w).written || 0;
                                  g(t, s);
                                  for (let e = 0; e < s; e++) f(t, w[e]);
                              } else A(t, c.lz(e));
                          }
                        : (t, e) => {
                              const s = unescape(encodeURIComponent(e)),
                                  r = s.length;
                              g(t, r);
                              for (let e = 0; e < r; e++)
                                  f(t, s.codePointAt(e));
                          },
                U = (t, e) => T(t, l(e)),
                T = (t, e) => {
                    const s = t.cbuf.length,
                        r = t.cpos,
                        o = n.VV(s - r, e.length),
                        i = e.length - o;
                    t.cbuf.set(e.subarray(0, o), r),
                        (t.cpos += o),
                        i > 0 &&
                            (t.bufs.push(t.cbuf),
                            (t.cbuf = new Uint8Array(n.Fp(2 * s, i))),
                            t.cbuf.set(e.subarray(o)),
                            (t.cpos = i));
                },
                A = (t, e) => {
                    g(t, e.byteLength), T(t, e);
                },
                E = (t, e) => {
                    ((t, e) => {
                        const s = t.cbuf.length;
                        s - t.cpos < e &&
                            (t.bufs.push(r.Te(t.cbuf.buffer, 0, t.cpos)),
                            (t.cbuf = new Uint8Array(2 * n.Fp(s, e))),
                            (t.cpos = 0));
                    })(t, e);
                    const s = new DataView(t.cbuf.buffer, t.cpos, e);
                    return (t.cpos += e), s;
                },
                v = new DataView(new ArrayBuffer(4)),
                C = (t, e) => {
                    switch (typeof e) {
                        case 'string':
                            f(t, 119), m(t, e);
                            break;
                        case 'number':
                            o.U(e) && n.Wn(e) <= i.RP
                                ? (f(t, 125), b(t, e))
                                : ((s = e),
                                  v.setFloat32(0, s),
                                  v.getFloat32(0) === s
                                      ? (f(t, 124),
                                        ((t, e) => {
                                            E(t, 4).setFloat32(0, e, !1);
                                        })(t, e))
                                      : (f(t, 123),
                                        ((t, e) => {
                                            E(t, 8).setFloat64(0, e, !1);
                                        })(t, e)));
                            break;
                        case 'bigint':
                            f(t, 122),
                                ((t, e) => {
                                    E(t, 8).setBigInt64(0, e, !1);
                                })(t, e);
                            break;
                        case 'object':
                            if (null === e) f(t, 126);
                            else if (e instanceof Array) {
                                f(t, 117), g(t, e.length);
                                for (let s = 0; s < e.length; s++) C(t, e[s]);
                            } else if (e instanceof Uint8Array)
                                f(t, 116), A(t, e);
                            else {
                                f(t, 118);
                                const s = Object.keys(e);
                                g(t, s.length);
                                for (let r = 0; r < s.length; r++) {
                                    const n = s[r];
                                    m(t, n), C(t, e[n]);
                                }
                            }
                            break;
                        case 'boolean':
                            f(t, e ? 120 : 121);
                            break;
                        default:
                            f(t, 127);
                    }
                    var s;
                };
            class x extends u {
                constructor(t) {
                    super(), (this.w = t), (this.s = null), (this.count = 0);
                }
                write(t) {
                    this.s === t
                        ? this.count++
                        : (this.count > 0 && g(this, this.count - 1),
                          (this.count = 1),
                          this.w(this, t),
                          (this.s = t));
                }
            }
            const R = t => {
                t.count > 0 &&
                    (b(t.encoder, 1 === t.count ? t.s : -t.s),
                    t.count > 1 && g(t.encoder, t.count - 2));
            };
            class O {
                constructor() {
                    (this.encoder = new u()), (this.s = 0), (this.count = 0);
                }
                write(t) {
                    this.s === t
                        ? this.count++
                        : (R(this), (this.count = 1), (this.s = t));
                }
                toUint8Array() {
                    return R(this), l(this.encoder);
                }
            }
            const S = t => {
                if (t.count > 0) {
                    const e = 2 * t.diff + (1 === t.count ? 0 : 1);
                    b(t.encoder, e), t.count > 1 && g(t.encoder, t.count - 2);
                }
            };
            class F {
                constructor() {
                    (this.encoder = new u()),
                        (this.s = 0),
                        (this.count = 0),
                        (this.diff = 0);
                }
                write(t) {
                    this.diff === t - this.s
                        ? ((this.s = t), this.count++)
                        : (S(this),
                          (this.count = 1),
                          (this.diff = t - this.s),
                          (this.s = t));
                }
                toUint8Array() {
                    return S(this), l(this.encoder);
                }
            }
            class j {
                constructor() {
                    (this.sarr = []), (this.s = ''), (this.lensE = new O());
                }
                write(t) {
                    (this.s += t),
                        this.s.length > 19 &&
                            (this.sarr.push(this.s), (this.s = '')),
                        this.lensE.write(t.length);
                }
                toUint8Array() {
                    const t = new u();
                    return (
                        this.sarr.push(this.s),
                        (this.s = ''),
                        m(t, this.sarr.join('')),
                        T(t, this.lensE.toUint8Array()),
                        l(t)
                    );
                }
            }
        },
        96571: (t, e, s) => {
            'use strict';
            s.d(e, { jS: () => d, jU: () => h, UG: () => u, hH: () => w });
            var r = s(31234),
                n = s(1011);
            var o = s(99622),
                i = s(12904),
                c = s(18533);
            const u = c.release && /node|io\.js/.test(c.release.name),
                h = 'undefined' != typeof window && !u;
            let a;
            'undefined' != typeof navigator && /Mac/.test(navigator.platform);
            const l = [],
                f = () => {
                    if (void 0 === a)
                        if (u) {
                            a = r.Ue();
                            const t = c.argv;
                            let e = null;
                            for (let s = 0; s < t.length; s++) {
                                const r = t[s];
                                '-' === r[0]
                                    ? (null !== e && a.set(e, ''), (e = r))
                                    : null !== e
                                    ? (a.set(e, r), (e = null))
                                    : l.push(r);
                            }
                            null !== e && a.set(e, '');
                        } else
                            'object' == typeof location
                                ? ((a = r.Ue()),
                                  (location.search || '?')
                                      .slice(1)
                                      .split('&')
                                      .forEach(t => {
                                          if (0 !== t.length) {
                                              const [e, s] = t.split('=');
                                              a.set(`--${n.NF(e, '-')}`, s),
                                                  a.set(`-${n.NF(e, '-')}`, s);
                                          }
                                      }))
                                : (a = r.Ue());
                    return a;
                },
                p = t => f().has(t),
                d = (t, e) => f().get(t) || e,
                g = t => {
                    return void 0 ===
                        (e = u ? {}[t.toUpperCase()] : o.X.getItem(t))
                        ? null
                        : e;
                    var e;
                };
            p('--' + 'production') || g('production');
            const b = u && i.gB({}.FORCE_COLOR, ['true', '1', '2']),
                w =
                    !p('no-colors') &&
                    (!u || c.stdout.isTTY || b) &&
                    (!u ||
                        p('color') ||
                        b ||
                        null !== g('COLORTERM') ||
                        (g('TERM') || '').includes('color'));
        },
        12280: (t, e, s) => {
            'use strict';
            s.d(e, { Nw: () => n, Ue: () => r, zR: () => o });
            const r = t => new Error(t),
                n = () => {
                    throw r('Method unimplemented');
                },
                o = () => {
                    throw r('Unexpected case');
                };
        },
        69102: (t, e, s) => {
            'use strict';
            s.d(e, { U: () => i, YM: () => o });
            var r = s(41865),
                n = s(15593);
            const o = Number.MAX_SAFE_INTEGER,
                i =
                    (Number.MIN_SAFE_INTEGER,
                    n.RP,
                    Number.isInteger ||
                        (t =>
                            'number' == typeof t &&
                            isFinite(t) &&
                            r.GW(t) === t));
            Number.isNaN, Number.parseInt;
        },
        99622: (t, e, s) => {
            'use strict';
            s.d(e, { X: () => o, z: () => i });
            let r = new (class {
                    constructor() {
                        this.map = new Map();
                    }
                    setItem(t, e) {
                        this.map.set(t, e);
                    }
                    getItem(t) {
                        return this.map.get(t);
                    }
                })(),
                n = !0;
            try {
                'undefined' != typeof localStorage &&
                    ((r = localStorage), (n = !1));
            } catch (t) {}
            const o = r,
                i = t => n || addEventListener('storage', t);
        },
        1011: (t, e, s) => {
            'use strict';
            s.d(e, {
                CO: () => h,
                IK: () => r,
                NF: () => i,
                YZ: () => c,
                lz: () => u,
            });
            const r = String.fromCharCode,
                n = (String.fromCodePoint, /^\s*/g),
                o = /([A-Z])/g,
                i = (t, e) =>
                    (t => t.replace(n, ''))(
                        t.replace(o, t => `${e}${(t => t.toLowerCase())(t)}`)
                    ),
                c =
                    'undefined' != typeof TextEncoder
                        ? new TextEncoder()
                        : null,
                u = c
                    ? t => c.encode(t)
                    : t => {
                          const e = unescape(encodeURIComponent(t)),
                              s = e.length,
                              r = new Uint8Array(s);
                          for (let t = 0; t < s; t++) r[t] = e.codePointAt(t);
                          return r;
                      };
            let h =
                'undefined' == typeof TextDecoder
                    ? null
                    : new TextDecoder('utf-8', { fatal: !0, ignoreBOM: !0 });
            h && 1 === h.decode(new Uint8Array()).length && (h = null);
        },
        9817: (t, e, s) => {
            'use strict';
            s.d(e, { ZG: () => r });
            const r = Date.now;
        },
        18533: t => {
            var e,
                s,
                r = (t.exports = {});
            function n() {
                throw new Error('setTimeout has not been defined');
            }
            function o() {
                throw new Error('clearTimeout has not been defined');
            }
            function i(t) {
                if (e === setTimeout) return setTimeout(t, 0);
                if ((e === n || !e) && setTimeout)
                    return (e = setTimeout), setTimeout(t, 0);
                try {
                    return e(t, 0);
                } catch (s) {
                    try {
                        return e.call(null, t, 0);
                    } catch (s) {
                        return e.call(this, t, 0);
                    }
                }
            }
            !(function() {
                try {
                    e = 'function' == typeof setTimeout ? setTimeout : n;
                } catch (t) {
                    e = n;
                }
                try {
                    s = 'function' == typeof clearTimeout ? clearTimeout : o;
                } catch (t) {
                    s = o;
                }
            })();
            var c,
                u = [],
                h = !1,
                a = -1;
            function l() {
                h &&
                    c &&
                    ((h = !1),
                    c.length ? (u = c.concat(u)) : (a = -1),
                    u.length && f());
            }
            function f() {
                if (!h) {
                    var t = i(l);
                    h = !0;
                    for (var e = u.length; e; ) {
                        for (c = u, u = []; ++a < e; ) c && c[a].run();
                        (a = -1), (e = u.length);
                    }
                    (c = null),
                        (h = !1),
                        (function(t) {
                            if (s === clearTimeout) return clearTimeout(t);
                            if ((s === o || !s) && clearTimeout)
                                return (s = clearTimeout), clearTimeout(t);
                            try {
                                s(t);
                            } catch (e) {
                                try {
                                    return s.call(null, t);
                                } catch (e) {
                                    return s.call(this, t);
                                }
                            }
                        })(t);
                }
            }
            function p(t, e) {
                (this.fun = t), (this.array = e);
            }
            function d() {}
            (r.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var s = 1; s < arguments.length; s++)
                        e[s - 1] = arguments[s];
                u.push(new p(t, e)), 1 !== u.length || h || i(f);
            }),
                (p.prototype.run = function() {
                    this.fun.apply(null, this.array);
                }),
                (r.title = 'browser'),
                (r.browser = !0),
                (r.env = {}),
                (r.argv = []),
                (r.version = ''),
                (r.versions = {}),
                (r.on = d),
                (r.addListener = d),
                (r.once = d),
                (r.off = d),
                (r.removeListener = d),
                (r.removeAllListeners = d),
                (r.emit = d),
                (r.prependListener = d),
                (r.prependOnceListener = d),
                (r.listeners = function(t) {
                    return [];
                }),
                (r.binding = function(t) {
                    throw new Error('process.binding is not supported');
                }),
                (r.cwd = function() {
                    return '/';
                }),
                (r.chdir = function(t) {
                    throw new Error('process.chdir is not supported');
                }),
                (r.umask = function() {
                    return 0;
                });
        },
    },
]);
//# sourceMappingURL=6879.c8367a5.js.map
