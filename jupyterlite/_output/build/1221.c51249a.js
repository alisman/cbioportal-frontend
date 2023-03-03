'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [1221],
    {
        61221: (t, e, n) => {
            n.r(e),
                n.d(e, {
                    AbsolutePosition: () => Ft,
                    AbstractConnector: () => H,
                    AbstractStruct: () => Gn,
                    AbstractType: () => rn,
                    Array: () => Cn,
                    ContentAny: () => rr,
                    ContentBinary: () => Xn,
                    ContentDeleted: () => qn,
                    ContentEmbed: () => tr,
                    ContentFormat: () => er,
                    ContentJSON: () => nr,
                    ContentString: () => sr,
                    ContentType: () => gr,
                    Doc: () => nt,
                    GC: () => Kn,
                    ID: () => At,
                    Item: () => kr,
                    Map: () => vn,
                    PermanentUserData: () => Lt,
                    RelativePosition: () => Rt,
                    Snapshot: () => $t,
                    Text: () => zn,
                    Transaction: () => fe,
                    UndoManager: () => ve,
                    UpdateEncoderV1: () => ct,
                    XmlElement: () => Yn,
                    XmlFragment: () => Wn,
                    XmlHook: () => $n,
                    XmlText: () => Bn,
                    YArrayEvent: () => Sn,
                    YEvent: () => Ge,
                    YMapEvent: () => Dn,
                    YTextEvent: () => Jn,
                    YXmlEvent: () => jn,
                    applyUpdate: () => pt,
                    applyUpdateV2: () => ft,
                    cleanupYTextFormatting: () => Vn,
                    compareIDs: () => Mt,
                    compareRelativePositions: () => jt,
                    convertUpdateFormatV1ToV2: () => $e,
                    convertUpdateFormatV2ToV1: () => Be,
                    createAbsolutePositionFromRelativePosition: () => Yt,
                    createDeleteSet: () => X,
                    createDeleteSetFromStructStore: () => q,
                    createDocFromSnapshot: () => re,
                    createID: () => xt,
                    createRelativePositionFromJSON: () => Vt,
                    createRelativePositionFromTypeIndex: () => zt,
                    createSnapshot: () => Zt,
                    decodeRelativePosition: () => Wt,
                    decodeSnapshot: () => qt,
                    decodeSnapshotV2: () => Xt,
                    decodeStateVector: () => yt,
                    decodeUpdate: () => Ne,
                    decodeUpdateV2: () => Ue,
                    diffUpdate: () => ze,
                    diffUpdateV2: () => Je,
                    emptySnapshot: () => Qt,
                    encodeRelativePosition: () => Ht,
                    encodeSnapshot: () => Kt,
                    encodeSnapshotV2: () => Gt,
                    encodeStateAsUpdate: () => mt,
                    encodeStateAsUpdateV2: () => wt,
                    encodeStateVector: () => bt,
                    encodeStateVectorFromUpdate: () => Le,
                    encodeStateVectorFromUpdateV2: () => Ie,
                    equalSnapshots: () => Bt,
                    findIndexSS: () => ce,
                    findRootTypeKey: () => Ot,
                    getItem: () => he,
                    getState: () => oe,
                    getTypeChildren: () => en,
                    isDeleted: () => $,
                    isParentOf: () => Tt,
                    iterateDeletedStructs: () => j,
                    logType: () => It,
                    logUpdate: () => Me,
                    logUpdateV2: () => xe,
                    mergeUpdates: () => Te,
                    mergeUpdatesV2: () => Fe,
                    parseUpdateMeta: () => Pe,
                    parseUpdateMetaV2: () => Re,
                    readUpdate: () => gt,
                    readUpdateV2: () => ut,
                    relativePositionToJSON: () => Pt,
                    snapshot: () => te,
                    transact: () => Ee,
                    tryGc: () => _e,
                    typeListToArraySnapshot: () => ln,
                    typeMapGetSnapshot: () => bn,
                });
            var r = n(32549),
                s = n(77608),
                i = n(41865),
                o = n(31234),
                l = n(44918),
                c = n(27164);
            'undefined' == typeof window ||
                (void 0 !== window.performance && window.performance);
            const h = 'undefined' == typeof crypto ? null : crypto,
                a =
                    null !== h
                        ? t => {
                              const e = new ArrayBuffer(t),
                                  n = new Uint8Array(e);
                              return h.getRandomValues(n), e;
                          }
                        : t => {
                              const e = new ArrayBuffer(t),
                                  n = new Uint8Array(e);
                              for (let e = 0; e < t; e++)
                                  n[e] = Math.ceil(
                                      (4294967295 * Math.random()) >>> 0
                                  );
                              return e;
                          },
                d = (Math.random, () => new Uint32Array(a(4))[0]),
                u = [1e7] + -1e3 + -4e3 + -8e3 + -1e11,
                g = () =>
                    u.replace(/[018]/g, t =>
                        (t ^ (d() & (15 >> (t / 4)))).toString(16)
                    );
            var f = n(30996),
                p = n(12280),
                w = n(15593),
                m = n(12904),
                k = n(64064),
                y = n(96571);
            const _ = Symbol;
            class b {
                constructor(t, e) {
                    (this.left = t), (this.right = e);
                }
            }
            const E = (t, e) => new b(t, e),
                S = 'undefined' != typeof document ? document : {};
            'undefined' != typeof DOMParser && new DOMParser(),
                S.ELEMENT_NODE,
                S.TEXT_NODE,
                S.CDATA_SECTION_NODE,
                S.COMMENT_NODE,
                S.DOCUMENT_NODE,
                S.DOCUMENT_TYPE_NODE,
                S.DOCUMENT_FRAGMENT_NODE;
            var C = n(9817);
            const D = _(),
                v = _(),
                A = _(),
                M = _(),
                x = _(),
                N = _(),
                U = _(),
                O = _(),
                T = _(),
                I = {
                    [D]: E('font-weight', 'bold'),
                    [v]: E('font-weight', 'normal'),
                    [A]: E('color', 'blue'),
                    [x]: E('color', 'green'),
                    [M]: E('color', 'grey'),
                    [N]: E('color', 'red'),
                    [U]: E('color', 'purple'),
                    [O]: E('color', 'orange'),
                    [T]: E('color', 'black'),
                },
                L = {
                    [D]: '[1m',
                    [v]: '[2m',
                    [A]: '[34m',
                    [x]: '[32m',
                    [M]: '[37m',
                    [N]: '[31m',
                    [U]: '[35m',
                    [O]: '[38;5;208m',
                    [T]: '[0m',
                },
                R = y.hH
                    ? y.UG
                        ? t => {
                              const e = [],
                                  n = [];
                              let r = 0;
                              for (; r < t.length; r++) {
                                  const n = t[r],
                                      s = L[n];
                                  if (void 0 !== s) e.push(s);
                                  else {
                                      if (
                                          n.constructor !== String &&
                                          n.constructor !== Number
                                      )
                                          break;
                                      e.push(n);
                                  }
                              }
                              for (
                                  r > 0 && (e.push('[0m'), n.push(e.join('')));
                                  r < t.length;
                                  r++
                              ) {
                                  const e = t[r];
                                  e instanceof Symbol || n.push(e);
                              }
                              return n;
                          }
                        : t => {
                              const e = [],
                                  n = [],
                                  r = o.Ue();
                              let s = [],
                                  i = 0;
                              for (; i < t.length; i++) {
                                  const s = t[i],
                                      c = I[s];
                                  if (void 0 !== c) r.set(c.left, c.right);
                                  else {
                                      if (
                                          s.constructor !== String &&
                                          s.constructor !== Number
                                      )
                                          break;
                                      {
                                          const t =
                                              ((l = r),
                                              o
                                                  .UI(l, (t, e) => `${e}:${t};`)
                                                  .join(''));
                                          i > 0 || t.length > 0
                                              ? (e.push('%c' + s), n.push(t))
                                              : e.push(s);
                                      }
                                  }
                              }
                              var l;
                              for (
                                  i > 0 && ((s = n), s.unshift(e.join('')));
                                  i < t.length;
                                  i++
                              ) {
                                  const e = t[i];
                                  e instanceof Symbol || s.push(e);
                              }
                              return s;
                          }
                    : t => {
                          const e = [],
                              n = [];
                          let r = 0;
                          for (; r < t.length; r++) {
                              const n = t[r];
                              if (void 0 === L[n]) {
                                  if (
                                      n.constructor !== String &&
                                      n.constructor !== Number
                                  )
                                      break;
                                  e.push(n);
                              }
                          }
                          for (r > 0 && n.push(e.join('')); r < t.length; r++) {
                              const e = t[r];
                              e instanceof Symbol ||
                                  (e.constructor === Object
                                      ? n.push(JSON.stringify(e))
                                      : n.push(e));
                          }
                          return n;
                      },
                P = (...t) => {
                    console.log(...R(t)), V.forEach(e => e.print(t));
                },
                V = new Set();
            C.ZG();
            const F = t => ({
                    [Symbol.iterator]() {
                        return this;
                    },
                    next: t,
                }),
                J = (t, e) =>
                    F(() => {
                        const { done: n, value: r } = t.next();
                        return { done: n, value: n ? void 0 : e(r) };
                    });
            var z = n(41042);
            class H extends r.y {
                constructor(t, e) {
                    super(), (this.doc = t), (this.awareness = e);
                }
            }
            class W {
                constructor(t, e) {
                    (this.clock = t), (this.len = e);
                }
            }
            class Y {
                constructor() {
                    this.clients = new Map();
                }
            }
            const j = (t, e, n) =>
                    e.clients.forEach((e, r) => {
                        const s = t.doc.store.clients.get(r);
                        for (let r = 0; r < e.length; r++) {
                            const i = e[r];
                            ge(t, s, i.clock, i.len, n);
                        }
                    }),
                $ = (t, e) => {
                    const n = t.clients.get(e.client);
                    return (
                        void 0 !== n &&
                        null !==
                            ((t, e) => {
                                let n = 0,
                                    r = t.length - 1;
                                for (; n <= r; ) {
                                    const s = i.GW((n + r) / 2),
                                        o = t[s],
                                        l = o.clock;
                                    if (l <= e) {
                                        if (e < l + o.len) return s;
                                        n = s + 1;
                                    } else r = s - 1;
                                }
                                return null;
                            })(n, e.clock)
                    );
                },
                B = t => {
                    t.clients.forEach(t => {
                        let e, n;
                        for (
                            t.sort((t, e) => t.clock - e.clock), e = 1, n = 1;
                            e < t.length;
                            e++
                        ) {
                            const r = t[n - 1],
                                s = t[e];
                            r.clock + r.len >= s.clock
                                ? (r.len = i.Fp(
                                      r.len,
                                      s.clock + s.len - r.clock
                                  ))
                                : (n < e && (t[n] = s), n++);
                        }
                        t.length = n;
                    });
                },
                G = t => {
                    const e = new Y();
                    for (let n = 0; n < t.length; n++)
                        t[n].clients.forEach((r, i) => {
                            if (!e.clients.has(i)) {
                                const o = r.slice();
                                for (let e = n + 1; e < t.length; e++)
                                    s.s7(o, t[e].clients.get(i) || []);
                                e.clients.set(i, o);
                            }
                        });
                    return B(e), e;
                },
                K = (t, e, n, r) => {
                    o.Yu(t.clients, e, () => []).push(new W(n, r));
                },
                X = () => new Y(),
                q = t => {
                    const e = X();
                    return (
                        t.clients.forEach((t, n) => {
                            const r = [];
                            for (let e = 0; e < t.length; e++) {
                                const n = t[e];
                                if (n.deleted) {
                                    const s = n.id.clock;
                                    let i = n.length;
                                    if (e + 1 < t.length)
                                        for (
                                            let n = t[e + 1];
                                            e + 1 < t.length && n.deleted;
                                            n = t[1 + ++e]
                                        )
                                            i += n.length;
                                    r.push(new W(s, i));
                                }
                            }
                            r.length > 0 && e.clients.set(n, r);
                        }),
                        e
                    );
                },
                Z = (t, e) => {
                    l.uE(t.restEncoder, e.clients.size),
                        e.clients.forEach((e, n) => {
                            t.resetDsCurVal(), l.uE(t.restEncoder, n);
                            const r = e.length;
                            l.uE(t.restEncoder, r);
                            for (let n = 0; n < r; n++) {
                                const r = e[n];
                                t.writeDsClock(r.clock), t.writeDsLen(r.len);
                            }
                        });
                },
                Q = t => {
                    const e = new Y(),
                        n = c.yg(t.restDecoder);
                    for (let r = 0; r < n; r++) {
                        t.resetDsCurVal();
                        const n = c.yg(t.restDecoder),
                            r = c.yg(t.restDecoder);
                        if (r > 0) {
                            const s = o.Yu(e.clients, n, () => []);
                            for (let e = 0; e < r; e++)
                                s.push(new W(t.readDsClock(), t.readDsLen()));
                        }
                    }
                    return e;
                },
                tt = (t, e, n) => {
                    const r = new Y(),
                        s = c.yg(t.restDecoder);
                    for (let i = 0; i < s; i++) {
                        t.resetDsCurVal();
                        const s = c.yg(t.restDecoder),
                            i = c.yg(t.restDecoder),
                            o = n.clients.get(s) || [],
                            l = oe(n, s);
                        for (let n = 0; n < i; n++) {
                            const n = t.readDsClock(),
                                i = n + t.readDsLen();
                            if (n < l) {
                                l < i && K(r, s, l, i - l);
                                let t = ce(o, n),
                                    c = o[t];
                                for (
                                    !c.deleted &&
                                    c.id.clock < n &&
                                    (o.splice(
                                        t + 1,
                                        0,
                                        wr(e, c, n - c.id.clock)
                                    ),
                                    t++);
                                    t < o.length &&
                                    ((c = o[t++]), c.id.clock < i);

                                )
                                    c.deleted ||
                                        (i < c.id.clock + c.length &&
                                            o.splice(
                                                t,
                                                0,
                                                wr(e, c, i - c.id.clock)
                                            ),
                                        c.delete(e));
                            } else K(r, s, n, i - n);
                        }
                    }
                    if (r.clients.size > 0) {
                        const t = new at();
                        return (
                            l.uE(t.restEncoder, 0), Z(t, r), t.toUint8Array()
                        );
                    }
                    return null;
                },
                et = d;
            class nt extends r.y {
                constructor({
                    guid: t = g(),
                    collectionid: e = null,
                    gc: n = !0,
                    gcFilter: r = () => !0,
                    meta: s = null,
                    autoLoad: i = !1,
                    shouldLoad: o = !0,
                } = {}) {
                    super(),
                        (this.gc = n),
                        (this.gcFilter = r),
                        (this.clientID = et()),
                        (this.guid = t),
                        (this.collectionid = e),
                        (this.share = new Map()),
                        (this.store = new se()),
                        (this._transaction = null),
                        (this._transactionCleanups = []),
                        (this.subdocs = new Set()),
                        (this._item = null),
                        (this.shouldLoad = o),
                        (this.autoLoad = i),
                        (this.meta = s),
                        (this.isLoaded = !1),
                        (this.whenLoaded = new Promise(t => {
                            this.on('load', () => {
                                (this.isLoaded = !0), t(this);
                            });
                        }));
                }
                load() {
                    const t = this._item;
                    null === t ||
                        this.shouldLoad ||
                        Ee(
                            t.parent.doc,
                            t => {
                                t.subdocsLoaded.add(this);
                            },
                            null,
                            !0
                        ),
                        (this.shouldLoad = !0);
                }
                getSubdocs() {
                    return this.subdocs;
                }
                getSubdocGuids() {
                    return new Set(Array.from(this.subdocs).map(t => t.guid));
                }
                transact(t, e = null) {
                    Ee(this, t, e);
                }
                get(t, e = rn) {
                    const n = o.Yu(this.share, t, () => {
                            const t = new e();
                            return t._integrate(this, null), t;
                        }),
                        r = n.constructor;
                    if (e !== rn && r !== e) {
                        if (r === rn) {
                            const r = new e();
                            (r._map = n._map),
                                n._map.forEach(t => {
                                    for (; null !== t; t = t.left) t.parent = r;
                                }),
                                (r._start = n._start);
                            for (let t = r._start; null !== t; t = t.right)
                                t.parent = r;
                            return (
                                (r._length = n._length),
                                this.share.set(t, r),
                                r._integrate(this, null),
                                r
                            );
                        }
                        throw new Error(
                            `Type with the name ${t} has already been defined with a different constructor`
                        );
                    }
                    return n;
                }
                getArray(t = '') {
                    return this.get(t, Cn);
                }
                getText(t = '') {
                    return this.get(t, zn);
                }
                getMap(t = '') {
                    return this.get(t, vn);
                }
                getXmlFragment(t = '') {
                    return this.get(t, Wn);
                }
                toJSON() {
                    const t = {};
                    return (
                        this.share.forEach((e, n) => {
                            t[n] = e.toJSON();
                        }),
                        t
                    );
                }
                destroy() {
                    s.Dp(this.subdocs).forEach(t => t.destroy());
                    const t = this._item;
                    if (null !== t) {
                        this._item = null;
                        const e = t.content;
                        (e.doc = new nt({
                            guid: this.guid,
                            ...e.opts,
                            shouldLoad: !1,
                        })),
                            (e.doc._item = t),
                            Ee(
                                t.parent.doc,
                                n => {
                                    const r = e.doc;
                                    t.deleted || n.subdocsAdded.add(r),
                                        n.subdocsRemoved.add(this);
                                },
                                null,
                                !0
                            );
                    }
                    this.emit('destroyed', [!0]),
                        this.emit('destroy', [this]),
                        super.destroy();
                }
                on(t, e) {
                    super.on(t, e);
                }
                off(t, e) {
                    super.off(t, e);
                }
            }
            class rt {
                constructor(t) {
                    this.restDecoder = t;
                }
                resetDsCurVal() {}
                readDsClock() {
                    return c.yg(this.restDecoder);
                }
                readDsLen() {
                    return c.yg(this.restDecoder);
                }
            }
            class st extends rt {
                readLeftID() {
                    return xt(c.yg(this.restDecoder), c.yg(this.restDecoder));
                }
                readRightID() {
                    return xt(c.yg(this.restDecoder), c.yg(this.restDecoder));
                }
                readClient() {
                    return c.yg(this.restDecoder);
                }
                readInfo() {
                    return c.kj(this.restDecoder);
                }
                readString() {
                    return c.kf(this.restDecoder);
                }
                readParentInfo() {
                    return 1 === c.yg(this.restDecoder);
                }
                readTypeRef() {
                    return c.yg(this.restDecoder);
                }
                readLen() {
                    return c.yg(this.restDecoder);
                }
                readAny() {
                    return c.v_(this.restDecoder);
                }
                readBuf() {
                    return f.f9(c.HN(this.restDecoder));
                }
                readJSON() {
                    return JSON.parse(c.kf(this.restDecoder));
                }
                readKey() {
                    return c.kf(this.restDecoder);
                }
            }
            class it {
                constructor(t) {
                    (this.dsCurrVal = 0), (this.restDecoder = t);
                }
                resetDsCurVal() {
                    this.dsCurrVal = 0;
                }
                readDsClock() {
                    return (
                        (this.dsCurrVal += c.yg(this.restDecoder)),
                        this.dsCurrVal
                    );
                }
                readDsLen() {
                    const t = c.yg(this.restDecoder) + 1;
                    return (this.dsCurrVal += t), t;
                }
            }
            class ot extends it {
                constructor(t) {
                    super(t),
                        (this.keys = []),
                        c.yg(t),
                        (this.keyClockDecoder = new c.dD(c.HN(t))),
                        (this.clientDecoder = new c.UF(c.HN(t))),
                        (this.leftClockDecoder = new c.dD(c.HN(t))),
                        (this.rightClockDecoder = new c.dD(c.HN(t))),
                        (this.infoDecoder = new c.XW(c.HN(t), c.kj)),
                        (this.stringDecoder = new c.sO(c.HN(t))),
                        (this.parentInfoDecoder = new c.XW(c.HN(t), c.kj)),
                        (this.typeRefDecoder = new c.UF(c.HN(t))),
                        (this.lenDecoder = new c.UF(c.HN(t)));
                }
                readLeftID() {
                    return new At(
                        this.clientDecoder.read(),
                        this.leftClockDecoder.read()
                    );
                }
                readRightID() {
                    return new At(
                        this.clientDecoder.read(),
                        this.rightClockDecoder.read()
                    );
                }
                readClient() {
                    return this.clientDecoder.read();
                }
                readInfo() {
                    return this.infoDecoder.read();
                }
                readString() {
                    return this.stringDecoder.read();
                }
                readParentInfo() {
                    return 1 === this.parentInfoDecoder.read();
                }
                readTypeRef() {
                    return this.typeRefDecoder.read();
                }
                readLen() {
                    return this.lenDecoder.read();
                }
                readAny() {
                    return c.v_(this.restDecoder);
                }
                readBuf() {
                    return c.HN(this.restDecoder);
                }
                readJSON() {
                    return c.v_(this.restDecoder);
                }
                readKey() {
                    const t = this.keyClockDecoder.read();
                    if (t < this.keys.length) return this.keys[t];
                    {
                        const t = this.stringDecoder.read();
                        return this.keys.push(t), t;
                    }
                }
            }
            class lt {
                constructor() {
                    this.restEncoder = l.Mf();
                }
                toUint8Array() {
                    return l._f(this.restEncoder);
                }
                resetDsCurVal() {}
                writeDsClock(t) {
                    l.uE(this.restEncoder, t);
                }
                writeDsLen(t) {
                    l.uE(this.restEncoder, t);
                }
            }
            class ct extends lt {
                writeLeftID(t) {
                    l.uE(this.restEncoder, t.client),
                        l.uE(this.restEncoder, t.clock);
                }
                writeRightID(t) {
                    l.uE(this.restEncoder, t.client),
                        l.uE(this.restEncoder, t.clock);
                }
                writeClient(t) {
                    l.uE(this.restEncoder, t);
                }
                writeInfo(t) {
                    l.$F(this.restEncoder, t);
                }
                writeString(t) {
                    l.uw(this.restEncoder, t);
                }
                writeParentInfo(t) {
                    l.uE(this.restEncoder, t ? 1 : 0);
                }
                writeTypeRef(t) {
                    l.uE(this.restEncoder, t);
                }
                writeLen(t) {
                    l.uE(this.restEncoder, t);
                }
                writeAny(t) {
                    l.EM(this.restEncoder, t);
                }
                writeBuf(t) {
                    l.mP(this.restEncoder, t);
                }
                writeJSON(t) {
                    l.uw(this.restEncoder, JSON.stringify(t));
                }
                writeKey(t) {
                    l.uw(this.restEncoder, t);
                }
            }
            class ht {
                constructor() {
                    (this.restEncoder = l.Mf()), (this.dsCurrVal = 0);
                }
                toUint8Array() {
                    return l._f(this.restEncoder);
                }
                resetDsCurVal() {
                    this.dsCurrVal = 0;
                }
                writeDsClock(t) {
                    const e = t - this.dsCurrVal;
                    (this.dsCurrVal = t), l.uE(this.restEncoder, e);
                }
                writeDsLen(t) {
                    0 === t && p.zR(),
                        l.uE(this.restEncoder, t - 1),
                        (this.dsCurrVal += t);
                }
            }
            class at extends ht {
                constructor() {
                    super(),
                        (this.keyMap = new Map()),
                        (this.keyClock = 0),
                        (this.keyClockEncoder = new l.sX()),
                        (this.clientEncoder = new l.HE()),
                        (this.leftClockEncoder = new l.sX()),
                        (this.rightClockEncoder = new l.sX()),
                        (this.infoEncoder = new l.GF(l.$F)),
                        (this.stringEncoder = new l.TS()),
                        (this.parentInfoEncoder = new l.GF(l.$F)),
                        (this.typeRefEncoder = new l.HE()),
                        (this.lenEncoder = new l.HE());
                }
                toUint8Array() {
                    const t = l.Mf();
                    return (
                        l.uE(t, 0),
                        l.mP(t, this.keyClockEncoder.toUint8Array()),
                        l.mP(t, this.clientEncoder.toUint8Array()),
                        l.mP(t, this.leftClockEncoder.toUint8Array()),
                        l.mP(t, this.rightClockEncoder.toUint8Array()),
                        l.mP(t, l._f(this.infoEncoder)),
                        l.mP(t, this.stringEncoder.toUint8Array()),
                        l.mP(t, l._f(this.parentInfoEncoder)),
                        l.mP(t, this.typeRefEncoder.toUint8Array()),
                        l.mP(t, this.lenEncoder.toUint8Array()),
                        l.HK(t, l._f(this.restEncoder)),
                        l._f(t)
                    );
                }
                writeLeftID(t) {
                    this.clientEncoder.write(t.client),
                        this.leftClockEncoder.write(t.clock);
                }
                writeRightID(t) {
                    this.clientEncoder.write(t.client),
                        this.rightClockEncoder.write(t.clock);
                }
                writeClient(t) {
                    this.clientEncoder.write(t);
                }
                writeInfo(t) {
                    this.infoEncoder.write(t);
                }
                writeString(t) {
                    this.stringEncoder.write(t);
                }
                writeParentInfo(t) {
                    this.parentInfoEncoder.write(t ? 1 : 0);
                }
                writeTypeRef(t) {
                    this.typeRefEncoder.write(t);
                }
                writeLen(t) {
                    this.lenEncoder.write(t);
                }
                writeAny(t) {
                    l.EM(this.restEncoder, t);
                }
                writeBuf(t) {
                    l.mP(this.restEncoder, t);
                }
                writeJSON(t) {
                    l.EM(this.restEncoder, t);
                }
                writeKey(t) {
                    const e = this.keyMap.get(t);
                    void 0 === e
                        ? (this.keyClockEncoder.write(this.keyClock++),
                          this.stringEncoder.write(t))
                        : this.keyClockEncoder.write(e);
                }
            }
            const dt = (t, e, n) => {
                    const r = new Map();
                    n.forEach((t, n) => {
                        oe(e, n) > t && r.set(n, t);
                    }),
                        ie(e).forEach((t, e) => {
                            n.has(e) || r.set(e, 0);
                        }),
                        l.uE(t.restEncoder, r.size),
                        Array.from(r.entries())
                            .sort((t, e) => e[0] - t[0])
                            .forEach(([n, r]) => {
                                ((t, e, n, r) => {
                                    r = i.Fp(r, e[0].id.clock);
                                    const s = ce(e, r);
                                    l.uE(t.restEncoder, e.length - s),
                                        t.writeClient(n),
                                        l.uE(t.restEncoder, r);
                                    const o = e[s];
                                    o.write(t, r - o.id.clock);
                                    for (let n = s + 1; n < e.length; n++)
                                        e[n].write(t, 0);
                                })(t, e.clients.get(n), n, r);
                            });
                },
                ut = (t, e, n, r = new ot(t)) =>
                    Ee(
                        e,
                        t => {
                            t.local = !1;
                            let e = !1;
                            const n = t.doc,
                                s = n.store,
                                i = ((t, e) => {
                                    const n = o.Ue(),
                                        r = c.yg(t.restDecoder);
                                    for (let s = 0; s < r; s++) {
                                        const r = c.yg(t.restDecoder),
                                            s = new Array(r),
                                            i = t.readClient();
                                        let o = c.yg(t.restDecoder);
                                        n.set(i, { i: 0, refs: s });
                                        for (let n = 0; n < r; n++) {
                                            const r = t.readInfo();
                                            switch (w.kr & r) {
                                                case 0: {
                                                    const e = t.readLen();
                                                    (s[n] = new Kn(
                                                        xt(i, o),
                                                        e
                                                    )),
                                                        (o += e);
                                                    break;
                                                }
                                                case 10: {
                                                    const e = c.yg(
                                                        t.restDecoder
                                                    );
                                                    (s[n] = new br(
                                                        xt(i, o),
                                                        e
                                                    )),
                                                        (o += e);
                                                    break;
                                                }
                                                default: {
                                                    const l =
                                                            0 ==
                                                            (r & (w.rc | w.x1)),
                                                        c = new kr(
                                                            xt(i, o),
                                                            null,
                                                            (r & w.x1) === w.x1
                                                                ? t.readLeftID()
                                                                : null,
                                                            null,
                                                            (r & w.rc) === w.rc
                                                                ? t.readRightID()
                                                                : null,
                                                            l
                                                                ? t.readParentInfo()
                                                                    ? e.get(
                                                                          t.readString()
                                                                      )
                                                                    : t.readLeftID()
                                                                : null,
                                                            l &&
                                                            (r & w.cq) === w.cq
                                                                ? t.readString()
                                                                : null,
                                                            yr(t, r)
                                                        );
                                                    (s[n] = c), (o += c.length);
                                                }
                                            }
                                        }
                                    }
                                    return n;
                                })(r, n),
                                h = ((t, e, n) => {
                                    const r = [];
                                    let s = Array.from(n.keys()).sort(
                                        (t, e) => t - e
                                    );
                                    if (0 === s.length) return null;
                                    const i = () => {
                                        if (0 === s.length) return null;
                                        let t = n.get(s[s.length - 1]);
                                        for (; t.refs.length === t.i; ) {
                                            if ((s.pop(), !(s.length > 0)))
                                                return null;
                                            t = n.get(s[s.length - 1]);
                                        }
                                        return t;
                                    };
                                    let c = i();
                                    if (null === c && 0 === r.length)
                                        return null;
                                    const h = new se(),
                                        a = new Map(),
                                        d = (t, e) => {
                                            const n = a.get(t);
                                            (null == n || n > e) && a.set(t, e);
                                        };
                                    let u = c.refs[c.i++];
                                    const g = new Map(),
                                        f = () => {
                                            for (const t of r) {
                                                const e = t.id.client,
                                                    r = n.get(e);
                                                r
                                                    ? (r.i--,
                                                      h.clients.set(
                                                          e,
                                                          r.refs.slice(r.i)
                                                      ),
                                                      n.delete(e),
                                                      (r.i = 0),
                                                      (r.refs = []))
                                                    : h.clients.set(e, [t]),
                                                    (s = s.filter(
                                                        t => t !== e
                                                    ));
                                            }
                                            r.length = 0;
                                        };
                                    for (;;) {
                                        if (u.constructor !== br) {
                                            const s =
                                                o.Yu(g, u.id.client, () =>
                                                    oe(e, u.id.client)
                                                ) - u.id.clock;
                                            if (s < 0)
                                                r.push(u),
                                                    d(
                                                        u.id.client,
                                                        u.id.clock - 1
                                                    ),
                                                    f();
                                            else {
                                                const i = u.getMissing(t, e);
                                                if (null !== i) {
                                                    r.push(u);
                                                    const t = n.get(i) || {
                                                        refs: [],
                                                        i: 0,
                                                    };
                                                    if (t.refs.length !== t.i) {
                                                        u = t.refs[t.i++];
                                                        continue;
                                                    }
                                                    d(i, oe(e, i)), f();
                                                } else
                                                    (0 === s || s < u.length) &&
                                                        (u.integrate(t, s),
                                                        g.set(
                                                            u.id.client,
                                                            u.id.clock +
                                                                u.length
                                                        ));
                                            }
                                        }
                                        if (r.length > 0) u = r.pop();
                                        else if (
                                            null !== c &&
                                            c.i < c.refs.length
                                        )
                                            u = c.refs[c.i++];
                                        else {
                                            if (((c = i()), null === c)) break;
                                            u = c.refs[c.i++];
                                        }
                                    }
                                    if (h.clients.size > 0) {
                                        const t = new at();
                                        return (
                                            dt(t, h, new Map()),
                                            l.uE(t.restEncoder, 0),
                                            {
                                                missing: a,
                                                update: t.toUint8Array(),
                                            }
                                        );
                                    }
                                    return null;
                                })(t, s, i),
                                a = s.pendingStructs;
                            if (a) {
                                for (const [t, n] of a.missing)
                                    if (n < oe(s, t)) {
                                        e = !0;
                                        break;
                                    }
                                if (h) {
                                    for (const [t, e] of h.missing) {
                                        const n = a.missing.get(t);
                                        (null == n || n > e) &&
                                            a.missing.set(t, e);
                                    }
                                    a.update = Fe([a.update, h.update]);
                                }
                            } else s.pendingStructs = h;
                            const d = tt(r, t, s);
                            if (s.pendingDs) {
                                const e = new ot(c.l1(s.pendingDs));
                                c.yg(e.restDecoder);
                                const n = tt(e, t, s);
                                s.pendingDs = d && n ? Fe([d, n]) : d || n;
                            } else s.pendingDs = d;
                            if (e) {
                                const e = s.pendingStructs.update;
                                (s.pendingStructs = null), ft(t.doc, e);
                            }
                        },
                        n,
                        !1
                    ),
                gt = (t, e, n) => ut(t, e, n, new st(t)),
                ft = (t, e, n, r = ot) => {
                    const s = c.l1(e);
                    ut(s, t, n, new r(s));
                },
                pt = (t, e, n) => ft(t, e, n, st),
                wt = (t, e = new Uint8Array([0]), n = new at()) => {
                    ((t, e, n = new Map()) => {
                        dt(t, e.store, n), Z(t, q(e.store));
                    })(n, t, yt(e));
                    const r = [n.toUint8Array()];
                    if (
                        (t.store.pendingDs && r.push(t.store.pendingDs),
                        t.store.pendingStructs &&
                            r.push(Je(t.store.pendingStructs.update, e)),
                        r.length > 1)
                    ) {
                        if (n.constructor === ct)
                            return Te(r.map((t, e) => (0 === e ? t : Be(t))));
                        if (n.constructor === at) return Fe(r);
                    }
                    return r[0];
                },
                mt = (t, e) => wt(t, e, new ct()),
                kt = t => {
                    const e = new Map(),
                        n = c.yg(t.restDecoder);
                    for (let r = 0; r < n; r++) {
                        const n = c.yg(t.restDecoder),
                            r = c.yg(t.restDecoder);
                        e.set(n, r);
                    }
                    return e;
                },
                yt = t => kt(new rt(c.l1(t))),
                _t = (t, e) => (
                    l.uE(t.restEncoder, e.size),
                    Array.from(e.entries())
                        .sort((t, e) => e[0] - t[0])
                        .forEach(([e, n]) => {
                            l.uE(t.restEncoder, e), l.uE(t.restEncoder, n);
                        }),
                    t
                ),
                bt = t =>
                    ((t, e = new ht()) => (
                        t instanceof Map
                            ? _t(e, t)
                            : ((t, e) => {
                                  _t(t, ie(e.store));
                              })(e, t),
                        e.toUint8Array()
                    ))(t, new lt());
            class Et {
                constructor() {
                    this.l = [];
                }
            }
            const St = () => new Et(),
                Ct = (t, e) => t.l.push(e),
                Dt = (t, e) => {
                    const n = t.l,
                        r = n.length;
                    (t.l = n.filter(t => e !== t)),
                        r === t.l.length &&
                            console.error(
                                "[yjs] Tried to remove event handler that doesn't exist."
                            );
                },
                vt = (t, e, n) => m.PP(t.l, [e, n]);
            class At {
                constructor(t, e) {
                    (this.client = t), (this.clock = e);
                }
            }
            const Mt = (t, e) =>
                    t === e ||
                    (null !== t &&
                        null !== e &&
                        t.client === e.client &&
                        t.clock === e.clock),
                xt = (t, e) => new At(t, e),
                Nt = (t, e) => {
                    l.uE(t, e.client), l.uE(t, e.clock);
                },
                Ut = t => xt(c.yg(t), c.yg(t)),
                Ot = t => {
                    for (const [e, n] of t.doc.share.entries())
                        if (n === t) return e;
                    throw p.zR();
                },
                Tt = (t, e) => {
                    for (; null !== e; ) {
                        if (e.parent === t) return !0;
                        e = e.parent._item;
                    }
                    return !1;
                },
                It = t => {
                    const e = [];
                    let n = t._start;
                    for (; n; ) e.push(n), (n = n.right);
                    console.log('Children: ', e),
                        console.log(
                            'Children content: ',
                            e.filter(t => !t.deleted).map(t => t.content)
                        );
                };
            class Lt {
                constructor(t, e = t.getMap('users')) {
                    const n = new Map();
                    (this.yusers = e),
                        (this.doc = t),
                        (this.clients = new Map()),
                        (this.dss = n);
                    const r = (t, e) => {
                        const n = t.get('ds'),
                            r = t.get('ids'),
                            s = t => this.clients.set(t, e);
                        n.observe(t => {
                            t.changes.added.forEach(t => {
                                t.content.getContent().forEach(t => {
                                    t instanceof Uint8Array &&
                                        this.dss.set(
                                            e,
                                            G([
                                                this.dss.get(e) || X(),
                                                Q(new rt(c.l1(t))),
                                            ])
                                        );
                                });
                            });
                        }),
                            this.dss.set(e, G(n.map(t => Q(new rt(c.l1(t)))))),
                            r.observe(t =>
                                t.changes.added.forEach(t =>
                                    t.content.getContent().forEach(s)
                                )
                            ),
                            r.forEach(s);
                    };
                    e.observe(t => {
                        t.keysChanged.forEach(t => r(e.get(t), t));
                    }),
                        e.forEach(r);
                }
                setUserMapping(t, e, n, { filter: r = () => !0 } = {}) {
                    const s = this.yusers;
                    let i = s.get(n);
                    i ||
                        ((i = new vn()),
                        i.set('ids', new Cn()),
                        i.set('ds', new Cn()),
                        s.set(n, i)),
                        i.get('ids').push([e]),
                        s.observe(t => {
                            setTimeout(() => {
                                const t = s.get(n);
                                if (t !== i) {
                                    (i = t),
                                        this.clients.forEach((t, e) => {
                                            n === t && i.get('ids').push([e]);
                                        });
                                    const e = new lt(),
                                        r = this.dss.get(n);
                                    r &&
                                        (Z(e, r),
                                        i.get('ds').push([e.toUint8Array()]));
                                }
                            }, 0);
                        }),
                        t.on('afterTransaction', t => {
                            setTimeout(() => {
                                const e = i.get('ds'),
                                    n = t.deleteSet;
                                if (t.local && n.clients.size > 0 && r(t, n)) {
                                    const t = new lt();
                                    Z(t, n), e.push([t.toUint8Array()]);
                                }
                            });
                        });
                }
                getUserByClientId(t) {
                    return this.clients.get(t) || null;
                }
                getUserByDeletedId(t) {
                    for (const [e, n] of this.dss.entries())
                        if ($(n, t)) return e;
                    return null;
                }
            }
            class Rt {
                constructor(t, e, n, r = 0) {
                    (this.type = t),
                        (this.tname = e),
                        (this.item = n),
                        (this.assoc = r);
                }
            }
            const Pt = t => {
                    const e = {};
                    return (
                        t.type && (e.type = t.type),
                        t.tname && (e.tname = t.tname),
                        t.item && (e.item = t.item),
                        null != t.assoc && (e.assoc = t.assoc),
                        e
                    );
                },
                Vt = t =>
                    new Rt(
                        null == t.type ? null : xt(t.type.client, t.type.clock),
                        t.tname || null,
                        null == t.item ? null : xt(t.item.client, t.item.clock),
                        null == t.assoc ? 0 : t.assoc
                    );
            class Ft {
                constructor(t, e, n = 0) {
                    (this.type = t), (this.index = e), (this.assoc = n);
                }
            }
            const Jt = (t, e, n) => {
                    let r = null,
                        s = null;
                    return (
                        null === t._item
                            ? (s = Ot(t))
                            : (r = xt(t._item.id.client, t._item.id.clock)),
                        new Rt(r, s, e, n)
                    );
                },
                zt = (t, e, n = 0) => {
                    let r = t._start;
                    if (n < 0) {
                        if (0 === e) return Jt(t, null, n);
                        e--;
                    }
                    for (; null !== r; ) {
                        if (!r.deleted && r.countable) {
                            if (r.length > e)
                                return Jt(
                                    t,
                                    xt(r.id.client, r.id.clock + e),
                                    n
                                );
                            e -= r.length;
                        }
                        if (null === r.right && n < 0)
                            return Jt(t, r.lastId, n);
                        r = r.right;
                    }
                    return Jt(t, null, n);
                },
                Ht = t => {
                    const e = l.Mf();
                    return (
                        ((t, e) => {
                            const { type: n, tname: r, item: s, assoc: i } = e;
                            if (null !== s) l.uE(t, 0), Nt(t, s);
                            else if (null !== r) l.$F(t, 1), l.uw(t, r);
                            else {
                                if (null === n) throw p.zR();
                                l.$F(t, 2), Nt(t, n);
                            }
                            l.pY(t, i);
                        })(e, t),
                        l._f(e)
                    );
                },
                Wt = t =>
                    (t => {
                        let e = null,
                            n = null,
                            r = null;
                        switch (c.yg(t)) {
                            case 0:
                                r = Ut(t);
                                break;
                            case 1:
                                n = c.kf(t);
                                break;
                            case 2:
                                e = Ut(t);
                        }
                        const s = c.v3(t) ? c.F7(t) : 0;
                        return new Rt(e, n, r, s);
                    })(c.l1(t)),
                Yt = (t, e) => {
                    const n = e.store,
                        r = t.item,
                        s = t.type,
                        i = t.tname,
                        o = t.assoc;
                    let l = null,
                        c = 0;
                    if (null !== r) {
                        if (oe(n, r.client) <= r.clock) return null;
                        const t = fr(n, r),
                            e = t.item;
                        if (!(e instanceof kr)) return null;
                        if (
                            ((l = e.parent),
                            null === l._item || !l._item.deleted)
                        ) {
                            c =
                                e.deleted || !e.countable
                                    ? 0
                                    : t.diff + (o >= 0 ? 0 : 1);
                            let n = e.left;
                            for (; null !== n; )
                                !n.deleted && n.countable && (c += n.length),
                                    (n = n.left);
                        }
                    } else {
                        if (null !== i) l = e.get(i);
                        else {
                            if (null === s) throw p.zR();
                            {
                                if (oe(n, s.client) <= s.clock) return null;
                                const { item: t } = fr(n, s);
                                if (
                                    !(
                                        t instanceof kr &&
                                        t.content instanceof gr
                                    )
                                )
                                    return null;
                                l = t.content.type;
                            }
                        }
                        c = o >= 0 ? l._length : 0;
                    }
                    return ((t, e, n = 0) => new Ft(t, e, n))(l, c, t.assoc);
                },
                jt = (t, e) =>
                    t === e ||
                    (null !== t &&
                        null !== e &&
                        t.tname === e.tname &&
                        Mt(t.item, e.item) &&
                        Mt(t.type, e.type) &&
                        t.assoc === e.assoc);
            class $t {
                constructor(t, e) {
                    (this.ds = t), (this.sv = e);
                }
            }
            const Bt = (t, e) => {
                    const n = t.ds.clients,
                        r = e.ds.clients,
                        s = t.sv,
                        i = e.sv;
                    if (s.size !== i.size || n.size !== r.size) return !1;
                    for (const [t, e] of s.entries())
                        if (i.get(t) !== e) return !1;
                    for (const [t, e] of n.entries()) {
                        const n = r.get(t) || [];
                        if (e.length !== n.length) return !1;
                        for (let t = 0; t < e.length; t++) {
                            const r = e[t],
                                s = n[t];
                            if (r.clock !== s.clock || r.len !== s.len)
                                return !1;
                        }
                    }
                    return !0;
                },
                Gt = (t, e = new ht()) => (
                    Z(e, t.ds), _t(e, t.sv), e.toUint8Array()
                ),
                Kt = t => Gt(t, new lt()),
                Xt = (t, e = new it(c.l1(t))) => new $t(Q(e), kt(e)),
                qt = t => Xt(t, new rt(c.l1(t))),
                Zt = (t, e) => new $t(t, e),
                Qt = Zt(X(), new Map()),
                te = t => Zt(q(t.store), ie(t.store)),
                ee = (t, e) =>
                    void 0 === e
                        ? !t.deleted
                        : e.sv.has(t.id.client) &&
                          (e.sv.get(t.id.client) || 0) > t.id.clock &&
                          !$(e.ds, t.id),
                ne = (t, e) => {
                    const n = o.Yu(t.meta, ne, k.Ue),
                        r = t.doc.store;
                    n.has(e) ||
                        (e.sv.forEach((e, n) => {
                            e < oe(r, n) && de(t, xt(n, e));
                        }),
                        j(t, e.ds, t => {}),
                        n.add(e));
                },
                re = (t, e, n = new nt()) => {
                    if (t.gc)
                        throw new Error(
                            'originDoc must not be garbage collected'
                        );
                    const { sv: r, ds: s } = e,
                        i = new at();
                    return (
                        t.transact(e => {
                            let n = 0;
                            r.forEach(t => {
                                t > 0 && n++;
                            }),
                                l.uE(i.restEncoder, n);
                            for (const [n, s] of r) {
                                if (0 === s) continue;
                                s < oe(t.store, n) && de(e, xt(n, s));
                                const r = t.store.clients.get(n) || [],
                                    o = ce(r, s - 1);
                                l.uE(i.restEncoder, o + 1),
                                    i.writeClient(n),
                                    l.uE(i.restEncoder, 0);
                                for (let t = 0; t <= o; t++) r[t].write(i, 0);
                            }
                            Z(i, s);
                        }),
                        ft(n, i.toUint8Array(), 'snapshot'),
                        n
                    );
                };
            class se {
                constructor() {
                    (this.clients = new Map()),
                        (this.pendingStructs = null),
                        (this.pendingDs = null);
                }
            }
            const ie = t => {
                    const e = new Map();
                    return (
                        t.clients.forEach((t, n) => {
                            const r = t[t.length - 1];
                            e.set(n, r.id.clock + r.length);
                        }),
                        e
                    );
                },
                oe = (t, e) => {
                    const n = t.clients.get(e);
                    if (void 0 === n) return 0;
                    const r = n[n.length - 1];
                    return r.id.clock + r.length;
                },
                le = (t, e) => {
                    let n = t.clients.get(e.id.client);
                    if (void 0 === n) (n = []), t.clients.set(e.id.client, n);
                    else {
                        const t = n[n.length - 1];
                        if (t.id.clock + t.length !== e.id.clock) throw p.zR();
                    }
                    n.push(e);
                },
                ce = (t, e) => {
                    let n = 0,
                        r = t.length - 1,
                        s = t[r],
                        o = s.id.clock;
                    if (o === e) return r;
                    let l = i.GW((e / (o + s.length - 1)) * r);
                    for (; n <= r; ) {
                        if (((s = t[l]), (o = s.id.clock), o <= e)) {
                            if (e < o + s.length) return l;
                            n = l + 1;
                        } else r = l - 1;
                        l = i.GW((n + r) / 2);
                    }
                    throw p.zR();
                },
                he = (t, e) => {
                    const n = t.clients.get(e.client);
                    return n[ce(n, e.clock)];
                },
                ae = (t, e, n) => {
                    const r = ce(e, n),
                        s = e[r];
                    return s.id.clock < n && s instanceof kr
                        ? (e.splice(r + 1, 0, wr(t, s, n - s.id.clock)), r + 1)
                        : r;
                },
                de = (t, e) => {
                    const n = t.doc.store.clients.get(e.client);
                    return n[ae(t, n, e.clock)];
                },
                ue = (t, e, n) => {
                    const r = e.clients.get(n.client),
                        s = ce(r, n.clock),
                        i = r[s];
                    return (
                        n.clock !== i.id.clock + i.length - 1 &&
                            i.constructor !== Kn &&
                            r.splice(
                                s + 1,
                                0,
                                wr(t, i, n.clock - i.id.clock + 1)
                            ),
                        i
                    );
                },
                ge = (t, e, n, r, s) => {
                    if (0 === r) return;
                    const i = n + r;
                    let o,
                        l = ae(t, e, n);
                    do {
                        (o = e[l++]),
                            i < o.id.clock + o.length && ae(t, e, i),
                            s(o);
                    } while (l < e.length && e[l].id.clock < i);
                };
            class fe {
                constructor(t, e, n) {
                    (this.doc = t),
                        (this.deleteSet = new Y()),
                        (this.beforeState = ie(t.store)),
                        (this.afterState = new Map()),
                        (this.changed = new Map()),
                        (this.changedParentTypes = new Map()),
                        (this._mergeStructs = []),
                        (this.origin = e),
                        (this.meta = new Map()),
                        (this.local = n),
                        (this.subdocsAdded = new Set()),
                        (this.subdocsRemoved = new Set()),
                        (this.subdocsLoaded = new Set());
                }
            }
            const pe = (t, e) =>
                    !(
                        (0 === e.deleteSet.clients.size &&
                            !o.Yj(
                                e.afterState,
                                (t, n) => e.beforeState.get(n) !== t
                            )) ||
                        (B(e.deleteSet),
                        ((t, e) => {
                            dt(t, e.doc.store, e.beforeState);
                        })(t, e),
                        Z(t, e.deleteSet),
                        0)
                    ),
                we = (t, e, n) => {
                    const r = e._item;
                    (null === r ||
                        (r.id.clock < (t.beforeState.get(r.id.client) || 0) &&
                            !r.deleted)) &&
                        o.Yu(t.changed, e, k.Ue).add(n);
                },
                me = (t, e) => {
                    const n = t[e - 1],
                        r = t[e];
                    n.deleted === r.deleted &&
                        n.constructor === r.constructor &&
                        n.mergeWith(r) &&
                        (t.splice(e, 1),
                        r instanceof kr &&
                            null !== r.parentSub &&
                            r.parent._map.get(r.parentSub) === r &&
                            r.parent._map.set(r.parentSub, n));
                },
                ke = (t, e, n) => {
                    for (const [r, s] of t.clients.entries()) {
                        const t = e.clients.get(r);
                        for (let r = s.length - 1; r >= 0; r--) {
                            const i = s[r],
                                o = i.clock + i.len;
                            for (
                                let r = ce(t, i.clock), s = t[r];
                                r < t.length && s.id.clock < o;
                                s = t[++r]
                            ) {
                                const s = t[r];
                                if (i.clock + i.len <= s.id.clock) break;
                                s instanceof kr &&
                                    s.deleted &&
                                    !s.keep &&
                                    n(s) &&
                                    s.gc(e, !1);
                            }
                        }
                    }
                },
                ye = (t, e) => {
                    t.clients.forEach((t, n) => {
                        const r = e.clients.get(n);
                        for (let e = t.length - 1; e >= 0; e--) {
                            const n = t[e];
                            for (
                                let t = i.VV(
                                        r.length - 1,
                                        1 + ce(r, n.clock + n.len - 1)
                                    ),
                                    e = r[t];
                                t > 0 && e.id.clock >= n.clock;
                                e = r[--t]
                            )
                                me(r, t);
                        }
                    });
                },
                _e = (t, e, n) => {
                    ke(t, e, n), ye(t, e);
                },
                be = (t, e) => {
                    if (e < t.length) {
                        const n = t[e],
                            r = n.doc,
                            s = r.store,
                            o = n.deleteSet,
                            l = n._mergeStructs;
                        try {
                            B(o),
                                (n.afterState = ie(n.doc.store)),
                                r.emit('beforeObserverCalls', [n, r]);
                            const c = [];
                            n.changed.forEach((t, e) =>
                                c.push(() => {
                                    (null !== e._item && e._item.deleted) ||
                                        e._callObserver(n, t);
                                })
                            ),
                                c.push(() => {
                                    n.changedParentTypes.forEach((t, e) =>
                                        c.push(() => {
                                            (null !== e._item &&
                                                e._item.deleted) ||
                                                ((t = t.filter(
                                                    t =>
                                                        null ===
                                                            t.target._item ||
                                                        !t.target._item.deleted
                                                )).forEach(t => {
                                                    t.currentTarget = e;
                                                }),
                                                t.sort(
                                                    (t, e) =>
                                                        t.path.length -
                                                        e.path.length
                                                ),
                                                vt(e._dEH, t, n));
                                        })
                                    ),
                                        c.push(() =>
                                            r.emit('afterTransaction', [n, r])
                                        );
                                }),
                                (0, m.PP)(c, []);
                        } finally {
                            r.gc && ke(o, s, r.gcFilter),
                                ye(o, s),
                                n.afterState.forEach((t, e) => {
                                    const r = n.beforeState.get(e) || 0;
                                    if (r !== t) {
                                        const t = s.clients.get(e),
                                            n = i.Fp(ce(t, r), 1);
                                        for (let e = t.length - 1; e >= n; e--)
                                            me(t, e);
                                    }
                                });
                            for (let t = 0; t < l.length; t++) {
                                const { client: e, clock: n } = l[t].id,
                                    r = s.clients.get(e),
                                    i = ce(r, n);
                                i + 1 < r.length && me(r, i + 1),
                                    i > 0 && me(r, i);
                            }
                            if (
                                (n.local ||
                                    n.afterState.get(r.clientID) ===
                                        n.beforeState.get(r.clientID) ||
                                    (P(
                                        O,
                                        D,
                                        '[yjs] ',
                                        v,
                                        N,
                                        'Changed the client-id because another client seems to be using it.'
                                    ),
                                    (r.clientID = et())),
                                r.emit('afterTransactionCleanup', [n, r]),
                                r._observers.has('update'))
                            ) {
                                const t = new ct();
                                pe(t, n) &&
                                    r.emit('update', [
                                        t.toUint8Array(),
                                        n.origin,
                                        r,
                                        n,
                                    ]);
                            }
                            if (r._observers.has('updateV2')) {
                                const t = new at();
                                pe(t, n) &&
                                    r.emit('updateV2', [
                                        t.toUint8Array(),
                                        n.origin,
                                        r,
                                        n,
                                    ]);
                            }
                            const {
                                subdocsAdded: c,
                                subdocsLoaded: h,
                                subdocsRemoved: a,
                            } = n;
                            (c.size > 0 || a.size > 0 || h.size > 0) &&
                                (c.forEach(t => {
                                    (t.clientID = r.clientID),
                                        null == t.collectionid &&
                                            (t.collectionid = r.collectionid),
                                        r.subdocs.add(t);
                                }),
                                a.forEach(t => r.subdocs.delete(t)),
                                r.emit('subdocs', [
                                    { loaded: h, added: c, removed: a },
                                    r,
                                    n,
                                ]),
                                a.forEach(t => t.destroy())),
                                t.length <= e + 1
                                    ? ((r._transactionCleanups = []),
                                      r.emit('afterAllTransactions', [r, t]))
                                    : be(t, e + 1);
                        }
                    }
                },
                Ee = (t, e, n = null, r = !0) => {
                    const s = t._transactionCleanups;
                    let i = !1;
                    null === t._transaction &&
                        ((i = !0),
                        (t._transaction = new fe(t, n, r)),
                        s.push(t._transaction),
                        1 === s.length && t.emit('beforeAllTransactions', [t]),
                        t.emit('beforeTransaction', [t._transaction, t]));
                    try {
                        e(t._transaction);
                    } finally {
                        if (i) {
                            const e = t._transaction === s[0];
                            (t._transaction = null), e && be(s, 0);
                        }
                    }
                };
            class Se {
                constructor(t, e) {
                    (this.insertions = e),
                        (this.deletions = t),
                        (this.meta = new Map());
                }
            }
            const Ce = (t, e, n) => {
                    j(t, n.deletions, t => {
                        t instanceof kr &&
                            e.scope.some(e => Tt(e, t)) &&
                            pr(t, !1);
                    });
                },
                De = (t, e, n) => {
                    let r = null,
                        s = null;
                    const i = t.doc,
                        o = t.scope;
                    if (
                        (Ee(
                            i,
                            n => {
                                for (; e.length > 0 && null === r; ) {
                                    const s = i.store,
                                        l = e.pop(),
                                        c = new Set(),
                                        h = [];
                                    let a = !1;
                                    j(n, l.insertions, t => {
                                        if (t instanceof kr) {
                                            if (null !== t.redone) {
                                                let { item: e, diff: r } = fr(
                                                    s,
                                                    t.id
                                                );
                                                r > 0 &&
                                                    (e = de(
                                                        n,
                                                        xt(
                                                            e.id.client,
                                                            e.id.clock + r
                                                        )
                                                    )),
                                                    (t = e);
                                            }
                                            !t.deleted &&
                                                o.some(e => Tt(e, t)) &&
                                                h.push(t);
                                        }
                                    }),
                                        j(n, l.deletions, t => {
                                            t instanceof kr &&
                                                o.some(e => Tt(e, t)) &&
                                                !$(l.insertions, t.id) &&
                                                c.add(t);
                                        }),
                                        c.forEach(e => {
                                            a =
                                                null !==
                                                    mr(
                                                        n,
                                                        e,
                                                        c,
                                                        l.insertions,
                                                        t.ignoreRemoteMapChanges
                                                    ) || a;
                                        });
                                    for (let e = h.length - 1; e >= 0; e--) {
                                        const r = h[e];
                                        t.deleteFilter(r) &&
                                            (r.delete(n), (a = !0));
                                    }
                                    r = a ? l : null;
                                }
                                n.changed.forEach((t, e) => {
                                    t.has(null) &&
                                        e._searchMarker &&
                                        (e._searchMarker.length = 0);
                                }),
                                    (s = n);
                            },
                            t
                        ),
                        null != r)
                    ) {
                        const e = s.changedParentTypes;
                        t.emit('stack-item-popped', [
                            { stackItem: r, type: n, changedParentTypes: e },
                            t,
                        ]);
                    }
                    return r;
                };
            class ve extends r.y {
                constructor(
                    t,
                    {
                        captureTimeout: e = 500,
                        captureTransaction: n = t => !0,
                        deleteFilter: r = () => !0,
                        trackedOrigins: i = new Set([null]),
                        ignoreRemoteMapChanges: o = !1,
                        doc: l = s.kJ(t) ? t[0].doc : t.doc,
                    } = {}
                ) {
                    super(),
                        (this.scope = []),
                        this.addToScope(t),
                        (this.deleteFilter = r),
                        i.add(this),
                        (this.trackedOrigins = i),
                        (this.captureTransaction = n),
                        (this.undoStack = []),
                        (this.redoStack = []),
                        (this.undoing = !1),
                        (this.redoing = !1),
                        (this.doc = l),
                        (this.lastChange = 0),
                        (this.ignoreRemoteMapChanges = o),
                        (this.captureTimeout = e),
                        (this.afterTransactionHandler = t => {
                            if (
                                !(
                                    this.captureTransaction(t) &&
                                    this.scope.some(e =>
                                        t.changedParentTypes.has(e)
                                    ) &&
                                    (this.trackedOrigins.has(t.origin) ||
                                        (t.origin &&
                                            this.trackedOrigins.has(
                                                t.origin.constructor
                                            )))
                                )
                            )
                                return;
                            const e = this.undoing,
                                n = this.redoing,
                                r = e ? this.redoStack : this.undoStack;
                            e ? this.stopCapturing() : n || this.clear(!1, !0);
                            const s = new Y();
                            t.afterState.forEach((e, n) => {
                                const r = t.beforeState.get(n) || 0,
                                    i = e - r;
                                i > 0 && K(s, n, r, i);
                            });
                            const i = C.ZG();
                            let o = !1;
                            if (
                                this.lastChange > 0 &&
                                i - this.lastChange < this.captureTimeout &&
                                r.length > 0 &&
                                !e &&
                                !n
                            ) {
                                const e = r[r.length - 1];
                                (e.deletions = G([e.deletions, t.deleteSet])),
                                    (e.insertions = G([e.insertions, s]));
                            } else r.push(new Se(t.deleteSet, s)), (o = !0);
                            e || n || (this.lastChange = i),
                                j(t, t.deleteSet, t => {
                                    t instanceof kr &&
                                        this.scope.some(e => Tt(e, t)) &&
                                        pr(t, !0);
                                });
                            const l = [
                                {
                                    stackItem: r[r.length - 1],
                                    origin: t.origin,
                                    type: e ? 'redo' : 'undo',
                                    changedParentTypes: t.changedParentTypes,
                                },
                                this,
                            ];
                            o
                                ? this.emit('stack-item-added', l)
                                : this.emit('stack-item-updated', l);
                        }),
                        this.doc.on(
                            'afterTransaction',
                            this.afterTransactionHandler
                        ),
                        this.doc.on('destroy', () => {
                            this.destroy();
                        });
                }
                addToScope(t) {
                    (t = s.kJ(t) ? t : [t]).forEach(t => {
                        this.scope.every(e => e !== t) && this.scope.push(t);
                    });
                }
                addTrackedOrigin(t) {
                    this.trackedOrigins.add(t);
                }
                removeTrackedOrigin(t) {
                    this.trackedOrigins.delete(t);
                }
                clear(t = !0, e = !0) {
                    ((t && this.canUndo()) || (e && this.canRedo())) &&
                        this.doc.transact(n => {
                            t &&
                                (this.undoStack.forEach(t => Ce(n, this, t)),
                                (this.undoStack = [])),
                                e &&
                                    (this.redoStack.forEach(t =>
                                        Ce(n, this, t)
                                    ),
                                    (this.redoStack = [])),
                                this.emit('stack-cleared', [
                                    {
                                        undoStackCleared: t,
                                        redoStackCleared: e,
                                    },
                                ]);
                        });
                }
                stopCapturing() {
                    this.lastChange = 0;
                }
                undo() {
                    let t;
                    this.undoing = !0;
                    try {
                        t = De(this, this.undoStack, 'undo');
                    } finally {
                        this.undoing = !1;
                    }
                    return t;
                }
                redo() {
                    let t;
                    this.redoing = !0;
                    try {
                        t = De(this, this.redoStack, 'redo');
                    } finally {
                        this.redoing = !1;
                    }
                    return t;
                }
                canUndo() {
                    return this.undoStack.length > 0;
                }
                canRedo() {
                    return this.redoStack.length > 0;
                }
                destroy() {
                    this.trackedOrigins.delete(this),
                        this.doc.off(
                            'afterTransaction',
                            this.afterTransactionHandler
                        ),
                        super.destroy();
                }
            }
            class Ae {
                constructor(t, e) {
                    (this.gen = (function*(t) {
                        const e = c.yg(t.restDecoder);
                        for (let n = 0; n < e; n++) {
                            const e = c.yg(t.restDecoder),
                                n = t.readClient();
                            let r = c.yg(t.restDecoder);
                            for (let s = 0; s < e; s++) {
                                const e = t.readInfo();
                                if (10 === e) {
                                    const e = c.yg(t.restDecoder);
                                    yield new br(xt(n, r), e), (r += e);
                                } else if (0 != (w.kr & e)) {
                                    const s = 0 == (e & (w.rc | w.x1)),
                                        i = new kr(
                                            xt(n, r),
                                            null,
                                            (e & w.x1) === w.x1
                                                ? t.readLeftID()
                                                : null,
                                            null,
                                            (e & w.rc) === w.rc
                                                ? t.readRightID()
                                                : null,
                                            s
                                                ? t.readParentInfo()
                                                    ? t.readString()
                                                    : t.readLeftID()
                                                : null,
                                            s && (e & w.cq) === w.cq
                                                ? t.readString()
                                                : null,
                                            yr(t, e)
                                        );
                                    yield i, (r += i.length);
                                } else {
                                    const e = t.readLen();
                                    yield new Kn(xt(n, r), e), (r += e);
                                }
                            }
                        }
                    })(t)),
                        (this.curr = null),
                        (this.done = !1),
                        (this.filterSkips = e),
                        this.next();
                }
                next() {
                    do {
                        this.curr = this.gen.next().value || null;
                    } while (
                        this.filterSkips &&
                        null !== this.curr &&
                        this.curr.constructor === br
                    );
                    return this.curr;
                }
            }
            const Me = t => xe(t, st),
                xe = (t, e = ot) => {
                    const n = [],
                        r = new e(c.l1(t)),
                        s = new Ae(r, !1);
                    for (let t = s.curr; null !== t; t = s.next()) n.push(t);
                    P('Structs: ', n);
                    const i = Q(r);
                    P('DeleteSet: ', i);
                },
                Ne = t => Ue(t, st),
                Ue = (t, e = ot) => {
                    const n = [],
                        r = new e(c.l1(t)),
                        s = new Ae(r, !1);
                    for (let t = s.curr; null !== t; t = s.next()) n.push(t);
                    return { structs: n, ds: Q(r) };
                };
            class Oe {
                constructor(t) {
                    (this.currClient = 0),
                        (this.startClock = 0),
                        (this.written = 0),
                        (this.encoder = t),
                        (this.clientStructs = []);
                }
            }
            const Te = t => Fe(t, st, ct),
                Ie = (t, e = ht, n = ot) => {
                    const r = new e(),
                        s = new Ae(new n(c.l1(t)), !1);
                    let i = s.curr;
                    if (null !== i) {
                        let t = 0,
                            e = i.id.client,
                            n = 0 !== i.id.clock,
                            o = n ? 0 : i.id.clock + i.length;
                        for (; null !== i; i = s.next())
                            e !== i.id.client &&
                                (0 !== o &&
                                    (t++,
                                    l.uE(r.restEncoder, e),
                                    l.uE(r.restEncoder, o)),
                                (e = i.id.client),
                                (o = 0),
                                (n = 0 !== i.id.clock)),
                                i.constructor === br && (n = !0),
                                n || (o = i.id.clock + i.length);
                        0 !== o &&
                            (t++,
                            l.uE(r.restEncoder, e),
                            l.uE(r.restEncoder, o));
                        const c = l.Mf();
                        return (
                            l.uE(c, t),
                            l.mK(c, r.restEncoder),
                            (r.restEncoder = c),
                            r.toUint8Array()
                        );
                    }
                    return l.uE(r.restEncoder, 0), r.toUint8Array();
                },
                Le = t => Ie(t, lt, st),
                Re = (t, e = ot) => {
                    const n = new Map(),
                        r = new Map(),
                        s = new Ae(new e(c.l1(t)), !1);
                    let i = s.curr;
                    if (null !== i) {
                        let t = i.id.client,
                            e = i.id.clock;
                        for (n.set(t, e); null !== i; i = s.next())
                            t !== i.id.client &&
                                (r.set(t, e),
                                n.set(i.id.client, i.id.clock),
                                (t = i.id.client)),
                                (e = i.id.clock + i.length);
                        r.set(t, e);
                    }
                    return { from: n, to: r };
                },
                Pe = t => Re(t, st),
                Ve = (t, e) => {
                    if (t.constructor === Kn) {
                        const { client: n, clock: r } = t.id;
                        return new Kn(xt(n, r + e), t.length - e);
                    }
                    if (t.constructor === br) {
                        const { client: n, clock: r } = t.id;
                        return new br(xt(n, r + e), t.length - e);
                    }
                    {
                        const n = t,
                            { client: r, clock: s } = n.id;
                        return new kr(
                            xt(r, s + e),
                            null,
                            xt(r, s + e - 1),
                            null,
                            n.rightOrigin,
                            n.parent,
                            n.parentSub,
                            n.content.splice(e)
                        );
                    }
                },
                Fe = (t, e = ot, n = at) => {
                    if (1 === t.length) return t[0];
                    const r = t.map(t => new e(c.l1(t)));
                    let s = r.map(t => new Ae(t, !0)),
                        i = null;
                    const o = new n(),
                        l = new Oe(o);
                    for (
                        ;
                        (s = s.filter(t => null !== t.curr)),
                            s.sort((t, e) => {
                                if (t.curr.id.client === e.curr.id.client) {
                                    const n = t.curr.id.clock - e.curr.id.clock;
                                    return 0 === n
                                        ? t.curr.constructor ===
                                          e.curr.constructor
                                            ? 0
                                            : t.curr.constructor === br
                                            ? 1
                                            : -1
                                        : n;
                                }
                                return e.curr.id.client - t.curr.id.client;
                            }),
                            0 !== s.length;

                    ) {
                        const t = s[0],
                            e = t.curr.id.client;
                        if (null !== i) {
                            let n = t.curr,
                                r = !1;
                            for (
                                ;
                                null !== n &&
                                n.id.clock + n.length <=
                                    i.struct.id.clock + i.struct.length &&
                                n.id.client >= i.struct.id.client;

                            )
                                (n = t.next()), (r = !0);
                            if (
                                null === n ||
                                n.id.client !== e ||
                                (r &&
                                    n.id.clock >
                                        i.struct.id.clock + i.struct.length)
                            )
                                continue;
                            if (e !== i.struct.id.client)
                                We(l, i.struct, i.offset),
                                    (i = { struct: n, offset: 0 }),
                                    t.next();
                            else if (
                                i.struct.id.clock + i.struct.length <
                                n.id.clock
                            )
                                if (i.struct.constructor === br)
                                    i.struct.length =
                                        n.id.clock +
                                        n.length -
                                        i.struct.id.clock;
                                else {
                                    We(l, i.struct, i.offset);
                                    const t =
                                        n.id.clock -
                                        i.struct.id.clock -
                                        i.struct.length;
                                    i = {
                                        struct: new br(
                                            xt(
                                                e,
                                                i.struct.id.clock +
                                                    i.struct.length
                                            ),
                                            t
                                        ),
                                        offset: 0,
                                    };
                                }
                            else {
                                const e =
                                    i.struct.id.clock +
                                    i.struct.length -
                                    n.id.clock;
                                e > 0 &&
                                    (i.struct.constructor === br
                                        ? (i.struct.length -= e)
                                        : (n = Ve(n, e))),
                                    i.struct.mergeWith(n) ||
                                        (We(l, i.struct, i.offset),
                                        (i = { struct: n, offset: 0 }),
                                        t.next());
                            }
                        } else (i = { struct: t.curr, offset: 0 }), t.next();
                        for (
                            let n = t.curr;
                            null !== n &&
                            n.id.client === e &&
                            n.id.clock ===
                                i.struct.id.clock + i.struct.length &&
                            n.constructor !== br;
                            n = t.next()
                        )
                            We(l, i.struct, i.offset),
                                (i = { struct: n, offset: 0 });
                    }
                    null !== i && (We(l, i.struct, i.offset), (i = null)),
                        Ye(l);
                    const h = r.map(t => Q(t)),
                        a = G(h);
                    return Z(o, a), o.toUint8Array();
                },
                Je = (t, e, n = ot, r = at) => {
                    const s = yt(e),
                        o = new r(),
                        l = new Oe(o),
                        h = new n(c.l1(t)),
                        a = new Ae(h, !1);
                    for (; a.curr; ) {
                        const t = a.curr,
                            e = t.id.client,
                            n = s.get(e) || 0;
                        if (a.curr.constructor !== br)
                            if (t.id.clock + t.length > n)
                                for (
                                    We(l, t, i.Fp(n - t.id.clock, 0)), a.next();
                                    a.curr && a.curr.id.client === e;

                                )
                                    We(l, a.curr, 0), a.next();
                            else
                                for (
                                    ;
                                    a.curr &&
                                    a.curr.id.client === e &&
                                    a.curr.id.clock + a.curr.length <= n;

                                )
                                    a.next();
                        else a.next();
                    }
                    Ye(l);
                    const d = Q(h);
                    return Z(o, d), o.toUint8Array();
                },
                ze = (t, e) => Je(t, e, st, ct),
                He = t => {
                    t.written > 0 &&
                        (t.clientStructs.push({
                            written: t.written,
                            restEncoder: l._f(t.encoder.restEncoder),
                        }),
                        (t.encoder.restEncoder = l.Mf()),
                        (t.written = 0));
                },
                We = (t, e, n) => {
                    t.written > 0 && t.currClient !== e.id.client && He(t),
                        0 === t.written &&
                            ((t.currClient = e.id.client),
                            t.encoder.writeClient(e.id.client),
                            l.uE(t.encoder.restEncoder, e.id.clock + n)),
                        e.write(t.encoder, n),
                        t.written++;
                },
                Ye = t => {
                    He(t);
                    const e = t.encoder.restEncoder;
                    l.uE(e, t.clientStructs.length);
                    for (let n = 0; n < t.clientStructs.length; n++) {
                        const r = t.clientStructs[n];
                        l.uE(e, r.written), l.HK(e, r.restEncoder);
                    }
                },
                je = (t, e, n) => {
                    const r = new e(c.l1(t)),
                        s = new Ae(r, !1),
                        i = new n(),
                        o = new Oe(i);
                    for (let t = s.curr; null !== t; t = s.next()) We(o, t, 0);
                    Ye(o);
                    const l = Q(r);
                    return Z(i, l), i.toUint8Array();
                },
                $e = t => je(t, st, at),
                Be = t => je(t, ot, ct);
            class Ge {
                constructor(t, e) {
                    (this.target = t),
                        (this.currentTarget = t),
                        (this.transaction = e),
                        (this._changes = null),
                        (this._keys = null),
                        (this._delta = null);
                }
                get path() {
                    return Ke(this.currentTarget, this.target);
                }
                deletes(t) {
                    return $(this.transaction.deleteSet, t.id);
                }
                get keys() {
                    if (null === this._keys) {
                        const t = new Map(),
                            e = this.target;
                        this.transaction.changed.get(e).forEach(n => {
                            if (null !== n) {
                                const r = e._map.get(n);
                                let i, o;
                                if (this.adds(r)) {
                                    let t = r.left;
                                    for (; null !== t && this.adds(t); )
                                        t = t.left;
                                    if (this.deletes(r)) {
                                        if (null === t || !this.deletes(t))
                                            return;
                                        (i = 'delete'),
                                            (o = s.Z$(t.content.getContent()));
                                    } else
                                        null !== t && this.deletes(t)
                                            ? ((i = 'update'),
                                              (o = s.Z$(
                                                  t.content.getContent()
                                              )))
                                            : ((i = 'add'), (o = void 0));
                                } else {
                                    if (!this.deletes(r)) return;
                                    (i = 'delete'),
                                        (o = s.Z$(r.content.getContent()));
                                }
                                t.set(n, { action: i, oldValue: o });
                            }
                        }),
                            (this._keys = t);
                    }
                    return this._keys;
                }
                get delta() {
                    return this.changes.delta;
                }
                adds(t) {
                    return (
                        t.id.clock >=
                        (this.transaction.beforeState.get(t.id.client) || 0)
                    );
                }
                get changes() {
                    let t = this._changes;
                    if (null === t) {
                        const e = this.target,
                            n = k.Ue(),
                            r = k.Ue(),
                            s = [];
                        if (
                            ((t = {
                                added: n,
                                deleted: r,
                                delta: s,
                                keys: this.keys,
                            }),
                            this.transaction.changed.get(e).has(null))
                        ) {
                            let t = null;
                            const i = () => {
                                t && s.push(t);
                            };
                            for (let s = e._start; null !== s; s = s.right)
                                s.deleted
                                    ? this.deletes(s) &&
                                      !this.adds(s) &&
                                      ((null !== t && void 0 !== t.delete) ||
                                          (i(), (t = { delete: 0 })),
                                      (t.delete += s.length),
                                      r.add(s))
                                    : this.adds(s)
                                    ? ((null !== t && void 0 !== t.insert) ||
                                          (i(), (t = { insert: [] })),
                                      (t.insert = t.insert.concat(
                                          s.content.getContent()
                                      )),
                                      n.add(s))
                                    : ((null !== t && void 0 !== t.retain) ||
                                          (i(), (t = { retain: 0 })),
                                      (t.retain += s.length));
                            null !== t && void 0 === t.retain && i();
                        }
                        this._changes = t;
                    }
                    return t;
                }
            }
            const Ke = (t, e) => {
                const n = [];
                for (; null !== e._item && e !== t; ) {
                    if (null !== e._item.parentSub)
                        n.unshift(e._item.parentSub);
                    else {
                        let t = 0,
                            r = e._item.parent._start;
                        for (; r !== e._item && null !== r; )
                            r.deleted || t++, (r = r.right);
                        n.unshift(t);
                    }
                    e = e._item.parent;
                }
                return n;
            };
            let Xe = 0;
            class qe {
                constructor(t, e) {
                    (t.marker = !0),
                        (this.p = t),
                        (this.index = e),
                        (this.timestamp = Xe++);
                }
            }
            const Ze = (t, e, n) => {
                    (t.p.marker = !1),
                        (t.p = e),
                        (e.marker = !0),
                        (t.index = n),
                        (t.timestamp = Xe++);
                },
                Qe = (t, e) => {
                    if (
                        null === t._start ||
                        0 === e ||
                        null === t._searchMarker
                    )
                        return null;
                    const n =
                        0 === t._searchMarker.length
                            ? null
                            : t._searchMarker.reduce((t, n) =>
                                  i.Wn(e - t.index) < i.Wn(e - n.index) ? t : n
                              );
                    let r = t._start,
                        s = 0;
                    for (
                        null !== n &&
                        ((r = n.p),
                        (s = n.index),
                        (t => {
                            t.timestamp = Xe++;
                        })(n));
                        null !== r.right && s < e;

                    ) {
                        if (!r.deleted && r.countable) {
                            if (e < s + r.length) break;
                            s += r.length;
                        }
                        r = r.right;
                    }
                    for (; null !== r.left && s > e; )
                        (r = r.left),
                            !r.deleted && r.countable && (s -= r.length);
                    for (
                        ;
                        null !== r.left &&
                        r.left.id.client === r.id.client &&
                        r.left.id.clock + r.left.length === r.id.clock;

                    )
                        (r = r.left),
                            !r.deleted && r.countable && (s -= r.length);
                    return null !== n &&
                        i.Wn(n.index - s) < r.parent.length / 80
                        ? (Ze(n, r, s), n)
                        : ((t, e, n) => {
                              if (t.length >= 80) {
                                  const r = t.reduce((t, e) =>
                                      t.timestamp < e.timestamp ? t : e
                                  );
                                  return Ze(r, e, n), r;
                              }
                              {
                                  const r = new qe(e, n);
                                  return t.push(r), r;
                              }
                          })(t._searchMarker, r, s);
                },
                tn = (t, e, n) => {
                    for (let r = t.length - 1; r >= 0; r--) {
                        const s = t[r];
                        if (n > 0) {
                            let e = s.p;
                            for (
                                e.marker = !1;
                                e && (e.deleted || !e.countable);

                            )
                                (e = e.left),
                                    e &&
                                        !e.deleted &&
                                        e.countable &&
                                        (s.index -= e.length);
                            if (null === e || !0 === e.marker) {
                                t.splice(r, 1);
                                continue;
                            }
                            (s.p = e), (e.marker = !0);
                        }
                        (e < s.index || (n > 0 && e === s.index)) &&
                            (s.index = i.Fp(e, s.index + n));
                    }
                },
                en = t => {
                    let e = t._start;
                    const n = [];
                    for (; e; ) n.push(e), (e = e.right);
                    return n;
                },
                nn = (t, e, n) => {
                    const r = t,
                        s = e.changedParentTypes;
                    for (; o.Yu(s, t, () => []).push(n), null !== t._item; )
                        t = t._item.parent;
                    vt(r._eH, n, e);
                };
            class rn {
                constructor() {
                    (this._item = null),
                        (this._map = new Map()),
                        (this._start = null),
                        (this.doc = null),
                        (this._length = 0),
                        (this._eH = St()),
                        (this._dEH = St()),
                        (this._searchMarker = null);
                }
                get parent() {
                    return this._item ? this._item.parent : null;
                }
                _integrate(t, e) {
                    (this.doc = t), (this._item = e);
                }
                _copy() {
                    throw p.Nw();
                }
                clone() {
                    throw p.Nw();
                }
                _write(t) {}
                get _first() {
                    let t = this._start;
                    for (; null !== t && t.deleted; ) t = t.right;
                    return t;
                }
                _callObserver(t, e) {
                    !t.local &&
                        this._searchMarker &&
                        (this._searchMarker.length = 0);
                }
                observe(t) {
                    Ct(this._eH, t);
                }
                observeDeep(t) {
                    Ct(this._dEH, t);
                }
                unobserve(t) {
                    Dt(this._eH, t);
                }
                unobserveDeep(t) {
                    Dt(this._dEH, t);
                }
                toJSON() {}
            }
            const sn = (t, e, n) => {
                    e < 0 && (e = t._length + e), n < 0 && (n = t._length + n);
                    let r = n - e;
                    const s = [];
                    let i = t._start;
                    for (; null !== i && r > 0; ) {
                        if (i.countable && !i.deleted) {
                            const t = i.content.getContent();
                            if (t.length <= e) e -= t.length;
                            else {
                                for (let n = e; n < t.length && r > 0; n++)
                                    s.push(t[n]), r--;
                                e = 0;
                            }
                        }
                        i = i.right;
                    }
                    return s;
                },
                on = t => {
                    const e = [];
                    let n = t._start;
                    for (; null !== n; ) {
                        if (n.countable && !n.deleted) {
                            const t = n.content.getContent();
                            for (let n = 0; n < t.length; n++) e.push(t[n]);
                        }
                        n = n.right;
                    }
                    return e;
                },
                ln = (t, e) => {
                    const n = [];
                    let r = t._start;
                    for (; null !== r; ) {
                        if (r.countable && ee(r, e)) {
                            const t = r.content.getContent();
                            for (let e = 0; e < t.length; e++) n.push(t[e]);
                        }
                        r = r.right;
                    }
                    return n;
                },
                cn = (t, e) => {
                    let n = 0,
                        r = t._start;
                    for (; null !== r; ) {
                        if (r.countable && !r.deleted) {
                            const s = r.content.getContent();
                            for (let r = 0; r < s.length; r++) e(s[r], n++, t);
                        }
                        r = r.right;
                    }
                },
                hn = (t, e) => {
                    const n = [];
                    return (
                        cn(t, (r, s) => {
                            n.push(e(r, s, t));
                        }),
                        n
                    );
                },
                an = t => {
                    let e = t._start,
                        n = null,
                        r = 0;
                    return {
                        [Symbol.iterator]() {
                            return this;
                        },
                        next: () => {
                            if (null === n) {
                                for (; null !== e && e.deleted; ) e = e.right;
                                if (null === e)
                                    return { done: !0, value: void 0 };
                                (n = e.content.getContent()),
                                    (r = 0),
                                    (e = e.right);
                            }
                            const t = n[r++];
                            return (
                                n.length <= r && (n = null),
                                { done: !1, value: t }
                            );
                        },
                    };
                },
                dn = (t, e) => {
                    const n = Qe(t, e);
                    let r = t._start;
                    for (
                        null !== n && ((r = n.p), (e -= n.index));
                        null !== r;
                        r = r.right
                    )
                        if (!r.deleted && r.countable) {
                            if (e < r.length) return r.content.getContent()[e];
                            e -= r.length;
                        }
                },
                un = (t, e, n, r) => {
                    let s = n;
                    const i = t.doc,
                        o = i.clientID,
                        l = i.store,
                        c = null === n ? e._start : n.right;
                    let h = [];
                    const a = () => {
                        h.length > 0 &&
                            ((s = new kr(
                                xt(o, oe(l, o)),
                                s,
                                s && s.lastId,
                                c,
                                c && c.id,
                                e,
                                null,
                                new rr(h)
                            )),
                            s.integrate(t, 0),
                            (h = []));
                    };
                    r.forEach(n => {
                        if (null === n) h.push(n);
                        else
                            switch (n.constructor) {
                                case Number:
                                case Object:
                                case Boolean:
                                case Array:
                                case String:
                                    h.push(n);
                                    break;
                                default:
                                    switch ((a(), n.constructor)) {
                                        case Uint8Array:
                                        case ArrayBuffer:
                                            (s = new kr(
                                                xt(o, oe(l, o)),
                                                s,
                                                s && s.lastId,
                                                c,
                                                c && c.id,
                                                e,
                                                null,
                                                new Xn(new Uint8Array(n))
                                            )),
                                                s.integrate(t, 0);
                                            break;
                                        case nt:
                                            (s = new kr(
                                                xt(o, oe(l, o)),
                                                s,
                                                s && s.lastId,
                                                c,
                                                c && c.id,
                                                e,
                                                null,
                                                new Qn(n)
                                            )),
                                                s.integrate(t, 0);
                                            break;
                                        default:
                                            if (!(n instanceof rn))
                                                throw new Error(
                                                    'Unexpected content type in insert operation'
                                                );
                                            (s = new kr(
                                                xt(o, oe(l, o)),
                                                s,
                                                s && s.lastId,
                                                c,
                                                c && c.id,
                                                e,
                                                null,
                                                new gr(n)
                                            )),
                                                s.integrate(t, 0);
                                    }
                            }
                    }),
                        a();
                },
                gn = p.Ue('Length exceeded!'),
                fn = (t, e, n, r) => {
                    if (n > e._length) throw gn;
                    if (0 === n)
                        return (
                            e._searchMarker && tn(e._searchMarker, n, r.length),
                            un(t, e, null, r)
                        );
                    const s = n,
                        i = Qe(e, n);
                    let o = e._start;
                    for (
                        null !== i &&
                        ((o = i.p),
                        0 == (n -= i.index) &&
                            ((o = o.prev),
                            (n +=
                                o && o.countable && !o.deleted
                                    ? o.length
                                    : 0)));
                        null !== o;
                        o = o.right
                    )
                        if (!o.deleted && o.countable) {
                            if (n <= o.length) {
                                n < o.length &&
                                    de(t, xt(o.id.client, o.id.clock + n));
                                break;
                            }
                            n -= o.length;
                        }
                    return (
                        e._searchMarker && tn(e._searchMarker, s, r.length),
                        un(t, e, o, r)
                    );
                },
                pn = (t, e, n, r) => {
                    if (0 === r) return;
                    const s = n,
                        i = r,
                        o = Qe(e, n);
                    let l = e._start;
                    for (
                        null !== o && ((l = o.p), (n -= o.index));
                        null !== l && n > 0;
                        l = l.right
                    )
                        !l.deleted &&
                            l.countable &&
                            (n < l.length &&
                                de(t, xt(l.id.client, l.id.clock + n)),
                            (n -= l.length));
                    for (; r > 0 && null !== l; )
                        l.deleted ||
                            (r < l.length &&
                                de(t, xt(l.id.client, l.id.clock + r)),
                            l.delete(t),
                            (r -= l.length)),
                            (l = l.right);
                    if (r > 0) throw gn;
                    e._searchMarker && tn(e._searchMarker, s, -i + r);
                },
                wn = (t, e, n) => {
                    const r = e._map.get(n);
                    void 0 !== r && r.delete(t);
                },
                mn = (t, e, n, r) => {
                    const s = e._map.get(n) || null,
                        i = t.doc,
                        o = i.clientID;
                    let l;
                    if (null == r) l = new rr([r]);
                    else
                        switch (r.constructor) {
                            case Number:
                            case Object:
                            case Boolean:
                            case Array:
                            case String:
                                l = new rr([r]);
                                break;
                            case Uint8Array:
                                l = new Xn(r);
                                break;
                            case nt:
                                l = new Qn(r);
                                break;
                            default:
                                if (!(r instanceof rn))
                                    throw new Error('Unexpected content type');
                                l = new gr(r);
                        }
                    new kr(
                        xt(o, oe(i.store, o)),
                        s,
                        s && s.lastId,
                        null,
                        null,
                        e,
                        n,
                        l
                    ).integrate(t, 0);
                },
                kn = (t, e) => {
                    const n = t._map.get(e);
                    return void 0 === n || n.deleted
                        ? void 0
                        : n.content.getContent()[n.length - 1];
                },
                yn = t => {
                    const e = {};
                    return (
                        t._map.forEach((t, n) => {
                            t.deleted ||
                                (e[n] = t.content.getContent()[t.length - 1]);
                        }),
                        e
                    );
                },
                _n = (t, e) => {
                    const n = t._map.get(e);
                    return void 0 !== n && !n.deleted;
                },
                bn = (t, e, n) => {
                    let r = t._map.get(e) || null;
                    for (
                        ;
                        null !== r &&
                        (!n.sv.has(r.id.client) ||
                            r.id.clock >= (n.sv.get(r.id.client) || 0));

                    )
                        r = r.left;
                    return null !== r && ee(r, n)
                        ? r.content.getContent()[r.length - 1]
                        : void 0;
                },
                En = t => {
                    return (
                        (e = t.entries()),
                        (n = t => !t[1].deleted),
                        F(() => {
                            let t;
                            do {
                                t = e.next();
                            } while (!t.done && !n(t.value));
                            return t;
                        })
                    );
                    var e, n;
                };
            class Sn extends Ge {
                constructor(t, e) {
                    super(t, e), (this._transaction = e);
                }
            }
            class Cn extends rn {
                constructor() {
                    super(),
                        (this._prelimContent = []),
                        (this._searchMarker = []);
                }
                static from(t) {
                    const e = new Cn();
                    return e.push(t), e;
                }
                _integrate(t, e) {
                    super._integrate(t, e),
                        this.insert(0, this._prelimContent),
                        (this._prelimContent = null);
                }
                _copy() {
                    return new Cn();
                }
                clone() {
                    const t = new Cn();
                    return (
                        t.insert(
                            0,
                            this.toArray().map(t =>
                                t instanceof rn ? t.clone() : t
                            )
                        ),
                        t
                    );
                }
                get length() {
                    return null === this._prelimContent
                        ? this._length
                        : this._prelimContent.length;
                }
                _callObserver(t, e) {
                    super._callObserver(t, e), nn(this, t, new Sn(this, t));
                }
                insert(t, e) {
                    null !== this.doc
                        ? Ee(this.doc, n => {
                              fn(n, this, t, e);
                          })
                        : this._prelimContent.splice(t, 0, ...e);
                }
                push(t) {
                    null !== this.doc
                        ? Ee(this.doc, e => {
                              ((t, e, n) => {
                                  let r = (e._searchMarker || []).reduce(
                                      (t, e) => (e.index > t.index ? e : t),
                                      { index: 0, p: e._start }
                                  ).p;
                                  if (r) for (; r.right; ) r = r.right;
                                  un(t, e, r, n);
                              })(e, this, t);
                          })
                        : this._prelimContent.push(...t);
                }
                unshift(t) {
                    this.insert(0, t);
                }
                delete(t, e = 1) {
                    null !== this.doc
                        ? Ee(this.doc, n => {
                              pn(n, this, t, e);
                          })
                        : this._prelimContent.splice(t, e);
                }
                get(t) {
                    return dn(this, t);
                }
                toArray() {
                    return on(this);
                }
                slice(t = 0, e = this.length) {
                    return sn(this, t, e);
                }
                toJSON() {
                    return this.map(t => (t instanceof rn ? t.toJSON() : t));
                }
                map(t) {
                    return hn(this, t);
                }
                forEach(t) {
                    cn(this, t);
                }
                [Symbol.iterator]() {
                    return an(this);
                }
                _write(t) {
                    t.writeTypeRef(or);
                }
            }
            class Dn extends Ge {
                constructor(t, e, n) {
                    super(t, e), (this.keysChanged = n);
                }
            }
            class vn extends rn {
                constructor(t) {
                    super(),
                        (this._prelimContent = null),
                        (this._prelimContent =
                            void 0 === t ? new Map() : new Map(t));
                }
                _integrate(t, e) {
                    super._integrate(t, e),
                        this._prelimContent.forEach((t, e) => {
                            this.set(e, t);
                        }),
                        (this._prelimContent = null);
                }
                _copy() {
                    return new vn();
                }
                clone() {
                    const t = new vn();
                    return (
                        this.forEach((e, n) => {
                            t.set(n, e instanceof rn ? e.clone() : e);
                        }),
                        t
                    );
                }
                _callObserver(t, e) {
                    nn(this, t, new Dn(this, t, e));
                }
                toJSON() {
                    const t = {};
                    return (
                        this._map.forEach((e, n) => {
                            if (!e.deleted) {
                                const r = e.content.getContent()[e.length - 1];
                                t[n] = r instanceof rn ? r.toJSON() : r;
                            }
                        }),
                        t
                    );
                }
                get size() {
                    return [...En(this._map)].length;
                }
                keys() {
                    return J(En(this._map), t => t[0]);
                }
                values() {
                    return J(
                        En(this._map),
                        t => t[1].content.getContent()[t[1].length - 1]
                    );
                }
                entries() {
                    return J(En(this._map), t => [
                        t[0],
                        t[1].content.getContent()[t[1].length - 1],
                    ]);
                }
                forEach(t) {
                    this._map.forEach((e, n) => {
                        e.deleted ||
                            t(e.content.getContent()[e.length - 1], n, this);
                    });
                }
                [Symbol.iterator]() {
                    return this.entries();
                }
                delete(t) {
                    null !== this.doc
                        ? Ee(this.doc, e => {
                              wn(e, this, t);
                          })
                        : this._prelimContent.delete(t);
                }
                set(t, e) {
                    return (
                        null !== this.doc
                            ? Ee(this.doc, n => {
                                  mn(n, this, t, e);
                              })
                            : this._prelimContent.set(t, e),
                        e
                    );
                }
                get(t) {
                    return kn(this, t);
                }
                has(t) {
                    return _n(this, t);
                }
                clear() {
                    null !== this.doc
                        ? Ee(this.doc, t => {
                              this.forEach(function(e, n, r) {
                                  wn(t, r, n);
                              });
                          })
                        : this._prelimContent.clear();
                }
                _write(t) {
                    t.writeTypeRef(lr);
                }
            }
            const An = (t, e) =>
                t === e ||
                ('object' == typeof t &&
                    'object' == typeof e &&
                    t &&
                    e &&
                    z.$m(t, e));
            class Mn {
                constructor(t, e, n, r) {
                    (this.left = t),
                        (this.right = e),
                        (this.index = n),
                        (this.currentAttributes = r);
                }
                forward() {
                    null === this.right && p.zR(),
                        this.right.content.constructor === er
                            ? this.right.deleted ||
                              On(this.currentAttributes, this.right.content)
                            : this.right.deleted ||
                              (this.index += this.right.length),
                        (this.left = this.right),
                        (this.right = this.right.right);
                }
            }
            const xn = (t, e, n) => {
                    for (; null !== e.right && n > 0; )
                        e.right.content.constructor === er
                            ? e.right.deleted ||
                              On(e.currentAttributes, e.right.content)
                            : e.right.deleted ||
                              (n < e.right.length &&
                                  de(
                                      t,
                                      xt(
                                          e.right.id.client,
                                          e.right.id.clock + n
                                      )
                                  ),
                              (e.index += e.right.length),
                              (n -= e.right.length)),
                            (e.left = e.right),
                            (e.right = e.right.right);
                    return e;
                },
                Nn = (t, e, n) => {
                    const r = new Map(),
                        s = Qe(e, n);
                    if (s) {
                        const e = new Mn(s.p.left, s.p, s.index, r);
                        return xn(t, e, n - s.index);
                    }
                    {
                        const s = new Mn(null, e._start, 0, r);
                        return xn(t, s, n);
                    }
                },
                Un = (t, e, n, r) => {
                    for (
                        ;
                        null !== n.right &&
                        (!0 === n.right.deleted ||
                            (n.right.content.constructor === er &&
                                An(
                                    r.get(n.right.content.key),
                                    n.right.content.value
                                )));

                    )
                        n.right.deleted || r.delete(n.right.content.key),
                            n.forward();
                    const s = t.doc,
                        i = s.clientID;
                    r.forEach((r, o) => {
                        const l = n.left,
                            c = n.right,
                            h = new kr(
                                xt(i, oe(s.store, i)),
                                l,
                                l && l.lastId,
                                c,
                                c && c.id,
                                e,
                                null,
                                new er(o, r)
                            );
                        h.integrate(t, 0), (n.right = h), n.forward();
                    });
                },
                On = (t, e) => {
                    const { key: n, value: r } = e;
                    null === r ? t.delete(n) : t.set(n, r);
                },
                Tn = (t, e) => {
                    for (
                        ;
                        null !== t.right &&
                        (t.right.deleted ||
                            (t.right.content.constructor === er &&
                                An(
                                    e[t.right.content.key] || null,
                                    t.right.content.value
                                )));

                    )
                        t.forward();
                },
                In = (t, e, n, r) => {
                    const s = t.doc,
                        i = s.clientID,
                        o = new Map();
                    for (const l in r) {
                        const c = r[l],
                            h = n.currentAttributes.get(l) || null;
                        if (!An(h, c)) {
                            o.set(l, h);
                            const { left: r, right: a } = n;
                            (n.right = new kr(
                                xt(i, oe(s.store, i)),
                                r,
                                r && r.lastId,
                                a,
                                a && a.id,
                                e,
                                null,
                                new er(l, c)
                            )),
                                n.right.integrate(t, 0),
                                n.forward();
                        }
                    }
                    return o;
                },
                Ln = (t, e, n, r, s) => {
                    n.currentAttributes.forEach((t, e) => {
                        void 0 === s[e] && (s[e] = null);
                    });
                    const i = t.doc,
                        o = i.clientID;
                    Tn(n, s);
                    const l = In(t, e, n, s),
                        c =
                            r.constructor === String
                                ? new sr(r)
                                : r instanceof rn
                                ? new gr(r)
                                : new tr(r);
                    let { left: h, right: a, index: d } = n;
                    e._searchMarker &&
                        tn(e._searchMarker, n.index, c.getLength()),
                        (a = new kr(
                            xt(o, oe(i.store, o)),
                            h,
                            h && h.lastId,
                            a,
                            a && a.id,
                            e,
                            null,
                            c
                        )),
                        a.integrate(t, 0),
                        (n.right = a),
                        (n.index = d),
                        n.forward(),
                        Un(t, e, n, l);
                },
                Rn = (t, e, n, r, s) => {
                    const i = t.doc,
                        o = i.clientID;
                    Tn(n, s);
                    const l = In(t, e, n, s);
                    t: for (
                        ;
                        null !== n.right &&
                        (r > 0 ||
                            (l.size > 0 &&
                                (n.right.deleted ||
                                    n.right.content.constructor === er)));

                    ) {
                        if (!n.right.deleted)
                            switch (n.right.content.constructor) {
                                case er: {
                                    const {
                                            key: e,
                                            value: i,
                                        } = n.right.content,
                                        o = s[e];
                                    if (void 0 !== o) {
                                        if (An(o, i)) l.delete(e);
                                        else {
                                            if (0 === r) break t;
                                            l.set(e, i);
                                        }
                                        n.right.delete(t);
                                    } else n.currentAttributes.set(e, i);
                                    break;
                                }
                                default:
                                    r < n.right.length &&
                                        de(
                                            t,
                                            xt(
                                                n.right.id.client,
                                                n.right.id.clock + r
                                            )
                                        ),
                                        (r -= n.right.length);
                            }
                        n.forward();
                    }
                    if (r > 0) {
                        let s = '';
                        for (; r > 0; r--) s += '\n';
                        (n.right = new kr(
                            xt(o, oe(i.store, o)),
                            n.left,
                            n.left && n.left.lastId,
                            n.right,
                            n.right && n.right.id,
                            e,
                            null,
                            new sr(s)
                        )),
                            n.right.integrate(t, 0),
                            n.forward();
                    }
                    Un(t, e, n, l);
                },
                Pn = (t, e, n, r, s) => {
                    let i = n;
                    const l = o.JG(s);
                    for (; i && (!i.countable || i.deleted); )
                        i.deleted ||
                            i.content.constructor !== er ||
                            On(l, i.content),
                            (i = i.right);
                    let c = 0,
                        h = !1;
                    for (; e !== i; ) {
                        if ((n === e && (h = !0), !e.deleted)) {
                            const n = e.content;
                            switch (n.constructor) {
                                case er: {
                                    const { key: i, value: o } = n;
                                    ((l.get(i) || null) === o &&
                                        (r.get(i) || null) !== o) ||
                                        (e.delete(t),
                                        c++,
                                        h ||
                                            (s.get(i) || null) !== o ||
                                            (r.get(i) || null) === o ||
                                            s.delete(i));
                                    break;
                                }
                            }
                        }
                        e = e.right;
                    }
                    return c;
                },
                Vn = t => {
                    let e = 0;
                    return (
                        Ee(t.doc, n => {
                            let r = t._start,
                                s = t._start,
                                i = o.Ue();
                            const l = o.JG(i);
                            for (; s; )
                                !1 === s.deleted &&
                                    (s.content.constructor === er
                                        ? On(l, s.content)
                                        : ((e += Pn(n, r, s, i, l)),
                                          (i = o.JG(l)),
                                          (r = s))),
                                    (s = s.right);
                        }),
                        e
                    );
                },
                Fn = (t, e, n) => {
                    const r = n,
                        s = o.JG(e.currentAttributes),
                        i = e.right;
                    for (; n > 0 && null !== e.right; ) {
                        if (!1 === e.right.deleted)
                            switch (e.right.content.constructor) {
                                case gr:
                                case tr:
                                case sr:
                                    n < e.right.length &&
                                        de(
                                            t,
                                            xt(
                                                e.right.id.client,
                                                e.right.id.clock + n
                                            )
                                        ),
                                        (n -= e.right.length),
                                        e.right.delete(t);
                            }
                        e.forward();
                    }
                    i && Pn(t, i, e.right, s, e.currentAttributes);
                    const l = (e.left || e.right).parent;
                    return (
                        l._searchMarker && tn(l._searchMarker, e.index, -r + n),
                        e
                    );
                };
            class Jn extends Ge {
                constructor(t, e, n) {
                    super(t, e),
                        (this.childListChanged = !1),
                        (this.keysChanged = new Set()),
                        n.forEach(t => {
                            null === t
                                ? (this.childListChanged = !0)
                                : this.keysChanged.add(t);
                        });
                }
                get changes() {
                    if (null === this._changes) {
                        const t = {
                            keys: this.keys,
                            delta: this.delta,
                            added: new Set(),
                            deleted: new Set(),
                        };
                        this._changes = t;
                    }
                    return this._changes;
                }
                get delta() {
                    if (null === this._delta) {
                        const t = this.target.doc,
                            e = [];
                        Ee(t, t => {
                            const n = new Map(),
                                r = new Map();
                            let s = this.target._start,
                                i = null;
                            const o = {};
                            let l = '',
                                c = 0,
                                h = 0;
                            const a = () => {
                                if (null !== i) {
                                    let t;
                                    switch (i) {
                                        case 'delete':
                                            (t = { delete: h }), (h = 0);
                                            break;
                                        case 'insert':
                                            (t = { insert: l }),
                                                n.size > 0 &&
                                                    ((t.attributes = {}),
                                                    n.forEach((e, n) => {
                                                        null !== e &&
                                                            (t.attributes[
                                                                n
                                                            ] = e);
                                                    })),
                                                (l = '');
                                            break;
                                        case 'retain':
                                            if (
                                                ((t = { retain: c }),
                                                Object.keys(o).length > 0)
                                            ) {
                                                t.attributes = {};
                                                for (const e in o)
                                                    t.attributes[e] = o[e];
                                            }
                                            c = 0;
                                    }
                                    e.push(t), (i = null);
                                }
                            };
                            for (; null !== s; ) {
                                switch (s.content.constructor) {
                                    case gr:
                                    case tr:
                                        this.adds(s)
                                            ? this.deletes(s) ||
                                              (a(),
                                              (i = 'insert'),
                                              (l = s.content.getContent()[0]),
                                              a())
                                            : this.deletes(s)
                                            ? ('delete' !== i &&
                                                  (a(), (i = 'delete')),
                                              (h += 1))
                                            : s.deleted ||
                                              ('retain' !== i &&
                                                  (a(), (i = 'retain')),
                                              (c += 1));
                                        break;
                                    case sr:
                                        this.adds(s)
                                            ? this.deletes(s) ||
                                              ('insert' !== i &&
                                                  (a(), (i = 'insert')),
                                              (l += s.content.str))
                                            : this.deletes(s)
                                            ? ('delete' !== i &&
                                                  (a(), (i = 'delete')),
                                              (h += s.length))
                                            : s.deleted ||
                                              ('retain' !== i &&
                                                  (a(), (i = 'retain')),
                                              (c += s.length));
                                        break;
                                    case er: {
                                        const { key: e, value: l } = s.content;
                                        if (this.adds(s)) {
                                            if (!this.deletes(s)) {
                                                const c = n.get(e) || null;
                                                An(c, l)
                                                    ? null !== l && s.delete(t)
                                                    : ('retain' === i && a(),
                                                      An(l, r.get(e) || null)
                                                          ? delete o[e]
                                                          : (o[e] = l));
                                            }
                                        } else if (this.deletes(s)) {
                                            r.set(e, l);
                                            const t = n.get(e) || null;
                                            An(t, l) ||
                                                ('retain' === i && a(),
                                                (o[e] = t));
                                        } else if (!s.deleted) {
                                            r.set(e, l);
                                            const n = o[e];
                                            void 0 !== n &&
                                                (An(n, l)
                                                    ? null !== n && s.delete(t)
                                                    : ('retain' === i && a(),
                                                      null === l
                                                          ? delete o[e]
                                                          : (o[e] = l)));
                                        }
                                        s.deleted ||
                                            ('insert' === i && a(),
                                            On(n, s.content));
                                        break;
                                    }
                                }
                                s = s.right;
                            }
                            for (a(); e.length > 0; ) {
                                const t = e[e.length - 1];
                                if (
                                    void 0 === t.retain ||
                                    void 0 !== t.attributes
                                )
                                    break;
                                e.pop();
                            }
                        }),
                            (this._delta = e);
                    }
                    return this._delta;
                }
            }
            class zn extends rn {
                constructor(t) {
                    super(),
                        (this._pending =
                            void 0 !== t ? [() => this.insert(0, t)] : []),
                        (this._searchMarker = []);
                }
                get length() {
                    return this._length;
                }
                _integrate(t, e) {
                    super._integrate(t, e);
                    try {
                        this._pending.forEach(t => t());
                    } catch (t) {
                        console.error(t);
                    }
                    this._pending = null;
                }
                _copy() {
                    return new zn();
                }
                clone() {
                    const t = new zn();
                    return t.applyDelta(this.toDelta()), t;
                }
                _callObserver(t, e) {
                    super._callObserver(t, e);
                    const n = new Jn(this, t, e),
                        r = t.doc;
                    if ((nn(this, t, n), !t.local)) {
                        let e = !1;
                        for (const [n, s] of t.afterState.entries()) {
                            const i = t.beforeState.get(n) || 0;
                            if (
                                s !== i &&
                                (ge(t, r.store.clients.get(n), i, s, t => {
                                    t.deleted ||
                                        t.content.constructor !== er ||
                                        (e = !0);
                                }),
                                e)
                            )
                                break;
                        }
                        e ||
                            j(t, t.deleteSet, t => {
                                t instanceof Kn ||
                                    e ||
                                    (t.parent === this &&
                                        t.content.constructor === er &&
                                        (e = !0));
                            }),
                            Ee(r, t => {
                                e
                                    ? Vn(this)
                                    : j(t, t.deleteSet, e => {
                                          e instanceof Kn ||
                                              (e.parent === this &&
                                                  ((t, e) => {
                                                      for (
                                                          ;
                                                          e &&
                                                          e.right &&
                                                          (e.right.deleted ||
                                                              !e.right
                                                                  .countable);

                                                      )
                                                          e = e.right;
                                                      const n = new Set();
                                                      for (
                                                          ;
                                                          e &&
                                                          (e.deleted ||
                                                              !e.countable);

                                                      ) {
                                                          if (
                                                              !e.deleted &&
                                                              e.content
                                                                  .constructor ===
                                                                  er
                                                          ) {
                                                              const r =
                                                                  e.content.key;
                                                              n.has(r)
                                                                  ? e.delete(t)
                                                                  : n.add(r);
                                                          }
                                                          e = e.left;
                                                      }
                                                  })(t, e));
                                      });
                            });
                    }
                }
                toString() {
                    let t = '',
                        e = this._start;
                    for (; null !== e; )
                        !e.deleted &&
                            e.countable &&
                            e.content.constructor === sr &&
                            (t += e.content.str),
                            (e = e.right);
                    return t;
                }
                toJSON() {
                    return this.toString();
                }
                applyDelta(t, { sanitize: e = !0 } = {}) {
                    null !== this.doc
                        ? Ee(this.doc, n => {
                              const r = new Mn(null, this._start, 0, new Map());
                              for (let s = 0; s < t.length; s++) {
                                  const i = t[s];
                                  if (void 0 !== i.insert) {
                                      const o =
                                          e ||
                                          'string' != typeof i.insert ||
                                          s !== t.length - 1 ||
                                          null !== r.right ||
                                          '\n' !== i.insert.slice(-1)
                                              ? i.insert
                                              : i.insert.slice(0, -1);
                                      ('string' != typeof o || o.length > 0) &&
                                          Ln(n, this, r, o, i.attributes || {});
                                  } else
                                      void 0 !== i.retain
                                          ? Rn(
                                                n,
                                                this,
                                                r,
                                                i.retain,
                                                i.attributes || {}
                                            )
                                          : void 0 !== i.delete &&
                                            Fn(n, r, i.delete);
                              }
                          })
                        : this._pending.push(() => this.applyDelta(t));
                }
                toDelta(t, e, n) {
                    const r = [],
                        s = new Map(),
                        i = this.doc;
                    let o = '',
                        l = this._start;
                    function c() {
                        if (o.length > 0) {
                            const t = {};
                            let e = !1;
                            s.forEach((n, r) => {
                                (e = !0), (t[r] = n);
                            });
                            const n = { insert: o };
                            e && (n.attributes = t), r.push(n), (o = '');
                        }
                    }
                    return (
                        Ee(
                            i,
                            i => {
                                for (
                                    t && ne(i, t), e && ne(i, e);
                                    null !== l;

                                ) {
                                    if (ee(l, t) || (void 0 !== e && ee(l, e)))
                                        switch (l.content.constructor) {
                                            case sr: {
                                                const r = s.get('ychange');
                                                void 0 === t || ee(l, t)
                                                    ? void 0 === e || ee(l, e)
                                                        ? void 0 !== r &&
                                                          (c(),
                                                          s.delete('ychange'))
                                                        : (void 0 !== r &&
                                                              r.user ===
                                                                  l.id.client &&
                                                              'added' ===
                                                                  r.type) ||
                                                          (c(),
                                                          s.set(
                                                              'ychange',
                                                              n
                                                                  ? n(
                                                                        'added',
                                                                        l.id
                                                                    )
                                                                  : {
                                                                        type:
                                                                            'added',
                                                                    }
                                                          ))
                                                    : (void 0 !== r &&
                                                          r.user ===
                                                              l.id.client &&
                                                          'removed' ===
                                                              r.type) ||
                                                      (c(),
                                                      s.set(
                                                          'ychange',
                                                          n
                                                              ? n(
                                                                    'removed',
                                                                    l.id
                                                                )
                                                              : {
                                                                    type:
                                                                        'removed',
                                                                }
                                                      )),
                                                    (o += l.content.str);
                                                break;
                                            }
                                            case gr:
                                            case tr: {
                                                c();
                                                const t = {
                                                    insert: l.content.getContent()[0],
                                                };
                                                if (s.size > 0) {
                                                    const e = {};
                                                    (t.attributes = e),
                                                        s.forEach((t, n) => {
                                                            e[n] = t;
                                                        });
                                                }
                                                r.push(t);
                                                break;
                                            }
                                            case er:
                                                ee(l, t) &&
                                                    (c(), On(s, l.content));
                                        }
                                    l = l.right;
                                }
                                c();
                            },
                            'cleanup'
                        ),
                        r
                    );
                }
                insert(t, e, n) {
                    if (e.length <= 0) return;
                    const r = this.doc;
                    null !== r
                        ? Ee(r, r => {
                              const s = Nn(r, this, t);
                              n ||
                                  ((n = {}),
                                  s.currentAttributes.forEach((t, e) => {
                                      n[e] = t;
                                  })),
                                  Ln(r, this, s, e, n);
                          })
                        : this._pending.push(() => this.insert(t, e, n));
                }
                insertEmbed(t, e, n = {}) {
                    const r = this.doc;
                    null !== r
                        ? Ee(r, r => {
                              const s = Nn(r, this, t);
                              Ln(r, this, s, e, n);
                          })
                        : this._pending.push(() => this.insertEmbed(t, e, n));
                }
                delete(t, e) {
                    if (0 === e) return;
                    const n = this.doc;
                    null !== n
                        ? Ee(n, n => {
                              Fn(n, Nn(n, this, t), e);
                          })
                        : this._pending.push(() => this.delete(t, e));
                }
                format(t, e, n) {
                    if (0 === e) return;
                    const r = this.doc;
                    null !== r
                        ? Ee(r, r => {
                              const s = Nn(r, this, t);
                              null !== s.right && Rn(r, this, s, e, n);
                          })
                        : this._pending.push(() => this.format(t, e, n));
                }
                removeAttribute(t) {
                    null !== this.doc
                        ? Ee(this.doc, e => {
                              wn(e, this, t);
                          })
                        : this._pending.push(() => this.removeAttribute(t));
                }
                setAttribute(t, e) {
                    null !== this.doc
                        ? Ee(this.doc, n => {
                              mn(n, this, t, e);
                          })
                        : this._pending.push(() => this.setAttribute(t, e));
                }
                getAttribute(t) {
                    return kn(this, t);
                }
                getAttributes(t) {
                    return yn(this);
                }
                _write(t) {
                    t.writeTypeRef(cr);
                }
            }
            class Hn {
                constructor(t, e = () => !0) {
                    (this._filter = e),
                        (this._root = t),
                        (this._currentNode = t._start),
                        (this._firstCall = !0);
                }
                [Symbol.iterator]() {
                    return this;
                }
                next() {
                    let t = this._currentNode,
                        e = t && t.content && t.content.type;
                    if (
                        null !== t &&
                        (!this._firstCall || t.deleted || !this._filter(e))
                    )
                        do {
                            if (
                                ((e = t.content.type),
                                t.deleted ||
                                    (e.constructor !== Yn &&
                                        e.constructor !== Wn) ||
                                    null === e._start)
                            )
                                for (; null !== t; ) {
                                    if (null !== t.right) {
                                        t = t.right;
                                        break;
                                    }
                                    t =
                                        t.parent === this._root
                                            ? null
                                            : t.parent._item;
                                }
                            else t = e._start;
                        } while (
                            null !== t &&
                            (t.deleted || !this._filter(t.content.type))
                        );
                    return (
                        (this._firstCall = !1),
                        null === t
                            ? { value: void 0, done: !0 }
                            : ((this._currentNode = t),
                              { value: t.content.type, done: !1 })
                    );
                }
            }
            class Wn extends rn {
                constructor() {
                    super(), (this._prelimContent = []);
                }
                get firstChild() {
                    const t = this._first;
                    return t ? t.content.getContent()[0] : null;
                }
                _integrate(t, e) {
                    super._integrate(t, e),
                        this.insert(0, this._prelimContent),
                        (this._prelimContent = null);
                }
                _copy() {
                    return new Wn();
                }
                clone() {
                    const t = new Wn();
                    return (
                        t.insert(
                            0,
                            this.toArray().map(t =>
                                t instanceof rn ? t.clone() : t
                            )
                        ),
                        t
                    );
                }
                get length() {
                    return null === this._prelimContent
                        ? this._length
                        : this._prelimContent.length;
                }
                createTreeWalker(t) {
                    return new Hn(this, t);
                }
                querySelector(t) {
                    t = t.toUpperCase();
                    const e = new Hn(
                        this,
                        e => e.nodeName && e.nodeName.toUpperCase() === t
                    ).next();
                    return e.done ? null : e.value;
                }
                querySelectorAll(t) {
                    return (
                        (t = t.toUpperCase()),
                        Array.from(
                            new Hn(
                                this,
                                e =>
                                    e.nodeName && e.nodeName.toUpperCase() === t
                            )
                        )
                    );
                }
                _callObserver(t, e) {
                    nn(this, t, new jn(this, e, t));
                }
                toString() {
                    return hn(this, t => t.toString()).join('');
                }
                toJSON() {
                    return this.toString();
                }
                toDOM(t = document, e = {}, n) {
                    const r = t.createDocumentFragment();
                    return (
                        void 0 !== n && n._createAssociation(r, this),
                        cn(this, s => {
                            r.insertBefore(s.toDOM(t, e, n), null);
                        }),
                        r
                    );
                }
                insert(t, e) {
                    null !== this.doc
                        ? Ee(this.doc, n => {
                              fn(n, this, t, e);
                          })
                        : this._prelimContent.splice(t, 0, ...e);
                }
                insertAfter(t, e) {
                    if (null !== this.doc)
                        Ee(this.doc, n => {
                            const r = t && t instanceof rn ? t._item : t;
                            un(n, this, r, e);
                        });
                    else {
                        const n = this._prelimContent,
                            r = null === t ? 0 : n.findIndex(e => e === t) + 1;
                        if (0 === r && null !== t)
                            throw p.Ue('Reference item not found');
                        n.splice(r, 0, ...e);
                    }
                }
                delete(t, e = 1) {
                    null !== this.doc
                        ? Ee(this.doc, n => {
                              pn(n, this, t, e);
                          })
                        : this._prelimContent.splice(t, e);
                }
                toArray() {
                    return on(this);
                }
                push(t) {
                    this.insert(this.length, t);
                }
                unshift(t) {
                    this.insert(0, t);
                }
                get(t) {
                    return dn(this, t);
                }
                slice(t = 0, e = this.length) {
                    return sn(this, t, e);
                }
                forEach(t) {
                    cn(this, t);
                }
                _write(t) {
                    t.writeTypeRef(ar);
                }
            }
            class Yn extends Wn {
                constructor(t = 'UNDEFINED') {
                    super(),
                        (this.nodeName = t),
                        (this._prelimAttrs = new Map());
                }
                get nextSibling() {
                    const t = this._item ? this._item.next : null;
                    return t ? t.content.type : null;
                }
                get prevSibling() {
                    const t = this._item ? this._item.prev : null;
                    return t ? t.content.type : null;
                }
                _integrate(t, e) {
                    super._integrate(t, e),
                        this._prelimAttrs.forEach((t, e) => {
                            this.setAttribute(e, t);
                        }),
                        (this._prelimAttrs = null);
                }
                _copy() {
                    return new Yn(this.nodeName);
                }
                clone() {
                    const t = new Yn(this.nodeName),
                        e = this.getAttributes();
                    for (const n in e) t.setAttribute(n, e[n]);
                    return (
                        t.insert(
                            0,
                            this.toArray().map(t =>
                                t instanceof rn ? t.clone() : t
                            )
                        ),
                        t
                    );
                }
                toString() {
                    const t = this.getAttributes(),
                        e = [],
                        n = [];
                    for (const e in t) n.push(e);
                    n.sort();
                    const r = n.length;
                    for (let s = 0; s < r; s++) {
                        const r = n[s];
                        e.push(r + '="' + t[r] + '"');
                    }
                    const s = this.nodeName.toLocaleLowerCase();
                    return `<${s}${
                        e.length > 0 ? ' ' + e.join(' ') : ''
                    }>${super.toString()}</${s}>`;
                }
                removeAttribute(t) {
                    null !== this.doc
                        ? Ee(this.doc, e => {
                              wn(e, this, t);
                          })
                        : this._prelimAttrs.delete(t);
                }
                setAttribute(t, e) {
                    null !== this.doc
                        ? Ee(this.doc, n => {
                              mn(n, this, t, e);
                          })
                        : this._prelimAttrs.set(t, e);
                }
                getAttribute(t) {
                    return kn(this, t);
                }
                hasAttribute(t) {
                    return _n(this, t);
                }
                getAttributes() {
                    return yn(this);
                }
                toDOM(t = document, e = {}, n) {
                    const r = t.createElement(this.nodeName),
                        s = this.getAttributes();
                    for (const t in s) r.setAttribute(t, s[t]);
                    return (
                        cn(this, s => {
                            r.appendChild(s.toDOM(t, e, n));
                        }),
                        void 0 !== n && n._createAssociation(r, this),
                        r
                    );
                }
                _write(t) {
                    t.writeTypeRef(hr), t.writeKey(this.nodeName);
                }
            }
            class jn extends Ge {
                constructor(t, e, n) {
                    super(t, n),
                        (this.childListChanged = !1),
                        (this.attributesChanged = new Set()),
                        e.forEach(t => {
                            null === t
                                ? (this.childListChanged = !0)
                                : this.attributesChanged.add(t);
                        });
                }
            }
            class $n extends vn {
                constructor(t) {
                    super(), (this.hookName = t);
                }
                _copy() {
                    return new $n(this.hookName);
                }
                clone() {
                    const t = new $n(this.hookName);
                    return (
                        this.forEach((e, n) => {
                            t.set(n, e);
                        }),
                        t
                    );
                }
                toDOM(t = document, e = {}, n) {
                    const r = e[this.hookName];
                    let s;
                    return (
                        (s =
                            void 0 !== r
                                ? r.createDom(this)
                                : document.createElement(this.hookName)),
                        s.setAttribute('data-yjs-hook', this.hookName),
                        void 0 !== n && n._createAssociation(s, this),
                        s
                    );
                }
                _write(t) {
                    t.writeTypeRef(dr), t.writeKey(this.hookName);
                }
            }
            class Bn extends zn {
                get nextSibling() {
                    const t = this._item ? this._item.next : null;
                    return t ? t.content.type : null;
                }
                get prevSibling() {
                    const t = this._item ? this._item.prev : null;
                    return t ? t.content.type : null;
                }
                _copy() {
                    return new Bn();
                }
                clone() {
                    const t = new Bn();
                    return t.applyDelta(this.toDelta()), t;
                }
                toDOM(t = document, e, n) {
                    const r = t.createTextNode(this.toString());
                    return void 0 !== n && n._createAssociation(r, this), r;
                }
                toString() {
                    return this.toDelta()
                        .map(t => {
                            const e = [];
                            for (const n in t.attributes) {
                                const r = [];
                                for (const e in t.attributes[n])
                                    r.push({
                                        key: e,
                                        value: t.attributes[n][e],
                                    });
                                r.sort((t, e) => (t.key < e.key ? -1 : 1)),
                                    e.push({ nodeName: n, attrs: r });
                            }
                            e.sort((t, e) =>
                                t.nodeName < e.nodeName ? -1 : 1
                            );
                            let n = '';
                            for (let t = 0; t < e.length; t++) {
                                const r = e[t];
                                n += `<${r.nodeName}`;
                                for (let t = 0; t < r.attrs.length; t++) {
                                    const e = r.attrs[t];
                                    n += ` ${e.key}="${e.value}"`;
                                }
                                n += '>';
                            }
                            n += t.insert;
                            for (let t = e.length - 1; t >= 0; t--)
                                n += `</${e[t].nodeName}>`;
                            return n;
                        })
                        .join('');
                }
                toJSON() {
                    return this.toString();
                }
                _write(t) {
                    t.writeTypeRef(ur);
                }
            }
            class Gn {
                constructor(t, e) {
                    (this.id = t), (this.length = e);
                }
                get deleted() {
                    throw p.Nw();
                }
                mergeWith(t) {
                    return !1;
                }
                write(t, e, n) {
                    throw p.Nw();
                }
                integrate(t, e) {
                    throw p.Nw();
                }
            }
            class Kn extends Gn {
                get deleted() {
                    return !0;
                }
                delete() {}
                mergeWith(t) {
                    return (
                        this.constructor === t.constructor &&
                        ((this.length += t.length), !0)
                    );
                }
                integrate(t, e) {
                    e > 0 && ((this.id.clock += e), (this.length -= e)),
                        le(t.doc.store, this);
                }
                write(t, e) {
                    t.writeInfo(0), t.writeLen(this.length - e);
                }
                getMissing(t, e) {
                    return null;
                }
            }
            class Xn {
                constructor(t) {
                    this.content = t;
                }
                getLength() {
                    return 1;
                }
                getContent() {
                    return [this.content];
                }
                isCountable() {
                    return !0;
                }
                copy() {
                    return new Xn(this.content);
                }
                splice(t) {
                    throw p.Nw();
                }
                mergeWith(t) {
                    return !1;
                }
                integrate(t, e) {}
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    t.writeBuf(this.content);
                }
                getRef() {
                    return 3;
                }
            }
            class qn {
                constructor(t) {
                    this.len = t;
                }
                getLength() {
                    return this.len;
                }
                getContent() {
                    return [];
                }
                isCountable() {
                    return !1;
                }
                copy() {
                    return new qn(this.len);
                }
                splice(t) {
                    const e = new qn(this.len - t);
                    return (this.len = t), e;
                }
                mergeWith(t) {
                    return (this.len += t.len), !0;
                }
                integrate(t, e) {
                    K(t.deleteSet, e.id.client, e.id.clock, this.len),
                        e.markDeleted();
                }
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    t.writeLen(this.len - e);
                }
                getRef() {
                    return 1;
                }
            }
            const Zn = (t, e) =>
                new nt({
                    guid: t,
                    ...e,
                    shouldLoad: e.shouldLoad || e.autoLoad || !1,
                });
            class Qn {
                constructor(t) {
                    t._item &&
                        console.error(
                            'This document was already integrated as a sub-document. You should create a second instance instead with the same guid.'
                        ),
                        (this.doc = t);
                    const e = {};
                    (this.opts = e),
                        t.gc || (e.gc = !1),
                        t.autoLoad && (e.autoLoad = !0),
                        null !== t.meta && (e.meta = t.meta);
                }
                getLength() {
                    return 1;
                }
                getContent() {
                    return [this.doc];
                }
                isCountable() {
                    return !0;
                }
                copy() {
                    return new Qn(Zn(this.doc.guid, this.opts));
                }
                splice(t) {
                    throw p.Nw();
                }
                mergeWith(t) {
                    return !1;
                }
                integrate(t, e) {
                    (this.doc._item = e),
                        t.subdocsAdded.add(this.doc),
                        this.doc.shouldLoad && t.subdocsLoaded.add(this.doc);
                }
                delete(t) {
                    t.subdocsAdded.has(this.doc)
                        ? t.subdocsAdded.delete(this.doc)
                        : t.subdocsRemoved.add(this.doc);
                }
                gc(t) {}
                write(t, e) {
                    t.writeString(this.doc.guid), t.writeAny(this.opts);
                }
                getRef() {
                    return 9;
                }
            }
            class tr {
                constructor(t) {
                    this.embed = t;
                }
                getLength() {
                    return 1;
                }
                getContent() {
                    return [this.embed];
                }
                isCountable() {
                    return !0;
                }
                copy() {
                    return new tr(this.embed);
                }
                splice(t) {
                    throw p.Nw();
                }
                mergeWith(t) {
                    return !1;
                }
                integrate(t, e) {}
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    t.writeJSON(this.embed);
                }
                getRef() {
                    return 5;
                }
            }
            class er {
                constructor(t, e) {
                    (this.key = t), (this.value = e);
                }
                getLength() {
                    return 1;
                }
                getContent() {
                    return [];
                }
                isCountable() {
                    return !1;
                }
                copy() {
                    return new er(this.key, this.value);
                }
                splice(t) {
                    throw p.Nw();
                }
                mergeWith(t) {
                    return !1;
                }
                integrate(t, e) {
                    e.parent._searchMarker = null;
                }
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    t.writeKey(this.key), t.writeJSON(this.value);
                }
                getRef() {
                    return 6;
                }
            }
            class nr {
                constructor(t) {
                    this.arr = t;
                }
                getLength() {
                    return this.arr.length;
                }
                getContent() {
                    return this.arr;
                }
                isCountable() {
                    return !0;
                }
                copy() {
                    return new nr(this.arr);
                }
                splice(t) {
                    const e = new nr(this.arr.slice(t));
                    return (this.arr = this.arr.slice(0, t)), e;
                }
                mergeWith(t) {
                    return (this.arr = this.arr.concat(t.arr)), !0;
                }
                integrate(t, e) {}
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    const n = this.arr.length;
                    t.writeLen(n - e);
                    for (let r = e; r < n; r++) {
                        const e = this.arr[r];
                        t.writeString(
                            void 0 === e ? 'undefined' : JSON.stringify(e)
                        );
                    }
                }
                getRef() {
                    return 2;
                }
            }
            class rr {
                constructor(t) {
                    this.arr = t;
                }
                getLength() {
                    return this.arr.length;
                }
                getContent() {
                    return this.arr;
                }
                isCountable() {
                    return !0;
                }
                copy() {
                    return new rr(this.arr);
                }
                splice(t) {
                    const e = new rr(this.arr.slice(t));
                    return (this.arr = this.arr.slice(0, t)), e;
                }
                mergeWith(t) {
                    return (this.arr = this.arr.concat(t.arr)), !0;
                }
                integrate(t, e) {}
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    const n = this.arr.length;
                    t.writeLen(n - e);
                    for (let r = e; r < n; r++) {
                        const e = this.arr[r];
                        t.writeAny(e);
                    }
                }
                getRef() {
                    return 8;
                }
            }
            class sr {
                constructor(t) {
                    this.str = t;
                }
                getLength() {
                    return this.str.length;
                }
                getContent() {
                    return this.str.split('');
                }
                isCountable() {
                    return !0;
                }
                copy() {
                    return new sr(this.str);
                }
                splice(t) {
                    const e = new sr(this.str.slice(t));
                    this.str = this.str.slice(0, t);
                    const n = this.str.charCodeAt(t - 1);
                    return (
                        n >= 55296 &&
                            n <= 56319 &&
                            ((this.str = this.str.slice(0, t - 1) + '�'),
                            (e.str = '�' + e.str.slice(1))),
                        e
                    );
                }
                mergeWith(t) {
                    return (this.str += t.str), !0;
                }
                integrate(t, e) {}
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    t.writeString(0 === e ? this.str : this.str.slice(e));
                }
                getRef() {
                    return 4;
                }
            }
            const ir = [
                    t => new Cn(),
                    t => new vn(),
                    t => new zn(),
                    t => new Yn(t.readKey()),
                    t => new Wn(),
                    t => new $n(t.readKey()),
                    t => new Bn(),
                ],
                or = 0,
                lr = 1,
                cr = 2,
                hr = 3,
                ar = 4,
                dr = 5,
                ur = 6;
            class gr {
                constructor(t) {
                    this.type = t;
                }
                getLength() {
                    return 1;
                }
                getContent() {
                    return [this.type];
                }
                isCountable() {
                    return !0;
                }
                copy() {
                    return new gr(this.type._copy());
                }
                splice(t) {
                    throw p.Nw();
                }
                mergeWith(t) {
                    return !1;
                }
                integrate(t, e) {
                    this.type._integrate(t.doc, e);
                }
                delete(t) {
                    let e = this.type._start;
                    for (; null !== e; )
                        e.deleted ? t._mergeStructs.push(e) : e.delete(t),
                            (e = e.right);
                    this.type._map.forEach(e => {
                        e.deleted ? t._mergeStructs.push(e) : e.delete(t);
                    }),
                        t.changed.delete(this.type);
                }
                gc(t) {
                    let e = this.type._start;
                    for (; null !== e; ) e.gc(t, !0), (e = e.right);
                    (this.type._start = null),
                        this.type._map.forEach(e => {
                            for (; null !== e; ) e.gc(t, !0), (e = e.left);
                        }),
                        (this.type._map = new Map());
                }
                write(t, e) {
                    this.type._write(t);
                }
                getRef() {
                    return 7;
                }
            }
            const fr = (t, e) => {
                    let n,
                        r = e,
                        s = 0;
                    do {
                        s > 0 && (r = xt(r.client, r.clock + s)),
                            (n = he(t, r)),
                            (s = r.clock - n.id.clock),
                            (r = n.redone);
                    } while (null !== r && n instanceof kr);
                    return { item: n, diff: s };
                },
                pr = (t, e) => {
                    for (; null !== t && t.keep !== e; )
                        (t.keep = e), (t = t.parent._item);
                },
                wr = (t, e, n) => {
                    const { client: r, clock: s } = e.id,
                        i = new kr(
                            xt(r, s + n),
                            e,
                            xt(r, s + n - 1),
                            e.right,
                            e.rightOrigin,
                            e.parent,
                            e.parentSub,
                            e.content.splice(n)
                        );
                    return (
                        e.deleted && i.markDeleted(),
                        e.keep && (i.keep = !0),
                        null !== e.redone &&
                            (i.redone = xt(
                                e.redone.client,
                                e.redone.clock + n
                            )),
                        (e.right = i),
                        null !== i.right && (i.right.left = i),
                        t._mergeStructs.push(i),
                        null !== i.parentSub &&
                            null === i.right &&
                            i.parent._map.set(i.parentSub, i),
                        (e.length = n),
                        i
                    );
                },
                mr = (t, e, n, r, s) => {
                    const i = t.doc,
                        o = i.store,
                        l = i.clientID,
                        c = e.redone;
                    if (null !== c) return de(t, c);
                    let h,
                        a = e.parent._item,
                        d = null;
                    if (null !== a && !0 === a.deleted) {
                        if (
                            null === a.redone &&
                            (!n.has(a) || null === mr(t, a, n, r, s))
                        )
                            return null;
                        for (; null !== a.redone; ) a = de(t, a.redone);
                    }
                    const u = null === a ? e.parent : a.content.type;
                    if (null === e.parentSub) {
                        for (d = e.left, h = e; null !== d; ) {
                            let e = d;
                            for (; null !== e && e.parent._item !== a; )
                                e = null === e.redone ? null : de(t, e.redone);
                            if (null !== e && e.parent._item === a) {
                                d = e;
                                break;
                            }
                            d = d.left;
                        }
                        for (; null !== h; ) {
                            let e = h;
                            for (; null !== e && e.parent._item !== a; )
                                e = null === e.redone ? null : de(t, e.redone);
                            if (null !== e && e.parent._item === a) {
                                h = e;
                                break;
                            }
                            h = h.right;
                        }
                    } else if (((h = null), e.right && !s)) {
                        for (
                            d = e;
                            null !== d && null !== d.right && $(r, d.right.id);

                        )
                            d = d.right;
                        for (; null !== d && null !== d.redone; )
                            d = de(t, d.redone);
                        if (d && null !== d.right) return null;
                    } else d = u._map.get(e.parentSub) || null;
                    const g = oe(o, l),
                        f = xt(l, g),
                        p = new kr(
                            f,
                            d,
                            d && d.lastId,
                            h,
                            h && h.id,
                            u,
                            e.parentSub,
                            e.content.copy()
                        );
                    return (e.redone = f), pr(p, !0), p.integrate(t, 0), p;
                };
            class kr extends Gn {
                constructor(t, e, n, r, s, i, o, l) {
                    super(t, l.getLength()),
                        (this.origin = n),
                        (this.left = e),
                        (this.right = r),
                        (this.rightOrigin = s),
                        (this.parent = i),
                        (this.parentSub = o),
                        (this.redone = null),
                        (this.content = l),
                        (this.info = this.content.isCountable() ? w.Qn : 0);
                }
                set marker(t) {
                    (this.info & w.Ko) > 0 !== t && (this.info ^= w.Ko);
                }
                get marker() {
                    return (this.info & w.Ko) > 0;
                }
                get keep() {
                    return (this.info & w.Vw) > 0;
                }
                set keep(t) {
                    this.keep !== t && (this.info ^= w.Vw);
                }
                get countable() {
                    return (this.info & w.Qn) > 0;
                }
                get deleted() {
                    return (this.info & w.CY) > 0;
                }
                set deleted(t) {
                    this.deleted !== t && (this.info ^= w.CY);
                }
                markDeleted() {
                    this.info |= w.CY;
                }
                getMissing(t, e) {
                    if (
                        this.origin &&
                        this.origin.client !== this.id.client &&
                        this.origin.clock >= oe(e, this.origin.client)
                    )
                        return this.origin.client;
                    if (
                        this.rightOrigin &&
                        this.rightOrigin.client !== this.id.client &&
                        this.rightOrigin.clock >= oe(e, this.rightOrigin.client)
                    )
                        return this.rightOrigin.client;
                    if (
                        this.parent &&
                        this.parent.constructor === At &&
                        this.id.client !== this.parent.client &&
                        this.parent.clock >= oe(e, this.parent.client)
                    )
                        return this.parent.client;
                    if (
                        (this.origin &&
                            ((this.left = ue(t, e, this.origin)),
                            (this.origin = this.left.lastId)),
                        this.rightOrigin &&
                            ((this.right = de(t, this.rightOrigin)),
                            (this.rightOrigin = this.right.id)),
                        ((this.left && this.left.constructor === Kn) ||
                            (this.right && this.right.constructor === Kn)) &&
                            (this.parent = null),
                        this.parent)
                    ) {
                        if (this.parent.constructor === At) {
                            const t = he(e, this.parent);
                            t.constructor === Kn
                                ? (this.parent = null)
                                : (this.parent = t.content.type);
                        }
                    } else
                        this.left &&
                            this.left.constructor === kr &&
                            ((this.parent = this.left.parent),
                            (this.parentSub = this.left.parentSub)),
                            this.right &&
                                this.right.constructor === kr &&
                                ((this.parent = this.right.parent),
                                (this.parentSub = this.right.parentSub));
                    return null;
                }
                integrate(t, e) {
                    if (
                        (e > 0 &&
                            ((this.id.clock += e),
                            (this.left = ue(
                                t,
                                t.doc.store,
                                xt(this.id.client, this.id.clock - 1)
                            )),
                            (this.origin = this.left.lastId),
                            (this.content = this.content.splice(e)),
                            (this.length -= e)),
                        this.parent)
                    ) {
                        if (
                            (!this.left &&
                                (!this.right || null !== this.right.left)) ||
                            (this.left && this.left.right !== this.right)
                        ) {
                            let e,
                                n = this.left;
                            if (null !== n) e = n.right;
                            else if (null !== this.parentSub)
                                for (
                                    e =
                                        this.parent._map.get(this.parentSub) ||
                                        null;
                                    null !== e && null !== e.left;

                                )
                                    e = e.left;
                            else e = this.parent._start;
                            const r = new Set(),
                                s = new Set();
                            for (; null !== e && e !== this.right; ) {
                                if (
                                    (s.add(e),
                                    r.add(e),
                                    Mt(this.origin, e.origin))
                                ) {
                                    if (e.id.client < this.id.client)
                                        (n = e), r.clear();
                                    else if (
                                        Mt(this.rightOrigin, e.rightOrigin)
                                    )
                                        break;
                                } else {
                                    if (
                                        null === e.origin ||
                                        !s.has(he(t.doc.store, e.origin))
                                    )
                                        break;
                                    r.has(he(t.doc.store, e.origin)) ||
                                        ((n = e), r.clear());
                                }
                                e = e.right;
                            }
                            this.left = n;
                        }
                        if (null !== this.left) {
                            const t = this.left.right;
                            (this.right = t), (this.left.right = this);
                        } else {
                            let t;
                            if (null !== this.parentSub)
                                for (
                                    t =
                                        this.parent._map.get(this.parentSub) ||
                                        null;
                                    null !== t && null !== t.left;

                                )
                                    t = t.left;
                            else
                                (t = this.parent._start),
                                    (this.parent._start = this);
                            this.right = t;
                        }
                        null !== this.right
                            ? (this.right.left = this)
                            : null !== this.parentSub &&
                              (this.parent._map.set(this.parentSub, this),
                              null !== this.left && this.left.delete(t)),
                            null === this.parentSub &&
                                this.countable &&
                                !this.deleted &&
                                (this.parent._length += this.length),
                            le(t.doc.store, this),
                            this.content.integrate(t, this),
                            we(t, this.parent, this.parentSub),
                            ((null !== this.parent._item &&
                                this.parent._item.deleted) ||
                                (null !== this.parentSub &&
                                    null !== this.right)) &&
                                this.delete(t);
                    } else new Kn(this.id, this.length).integrate(t, 0);
                }
                get next() {
                    let t = this.right;
                    for (; null !== t && t.deleted; ) t = t.right;
                    return t;
                }
                get prev() {
                    let t = this.left;
                    for (; null !== t && t.deleted; ) t = t.left;
                    return t;
                }
                get lastId() {
                    return 1 === this.length
                        ? this.id
                        : xt(this.id.client, this.id.clock + this.length - 1);
                }
                mergeWith(t) {
                    if (
                        this.constructor === t.constructor &&
                        Mt(t.origin, this.lastId) &&
                        this.right === t &&
                        Mt(this.rightOrigin, t.rightOrigin) &&
                        this.id.client === t.id.client &&
                        this.id.clock + this.length === t.id.clock &&
                        this.deleted === t.deleted &&
                        null === this.redone &&
                        null === t.redone &&
                        this.content.constructor === t.content.constructor &&
                        this.content.mergeWith(t.content)
                    ) {
                        const e = this.parent._searchMarker;
                        return (
                            e &&
                                e.forEach(e => {
                                    e.p === t &&
                                        ((e.p = this),
                                        !this.deleted &&
                                            this.countable &&
                                            (e.index -= this.length));
                                }),
                            t.keep && (this.keep = !0),
                            (this.right = t.right),
                            null !== this.right && (this.right.left = this),
                            (this.length += t.length),
                            !0
                        );
                    }
                    return !1;
                }
                delete(t) {
                    if (!this.deleted) {
                        const e = this.parent;
                        this.countable &&
                            null === this.parentSub &&
                            (e._length -= this.length),
                            this.markDeleted(),
                            K(
                                t.deleteSet,
                                this.id.client,
                                this.id.clock,
                                this.length
                            ),
                            we(t, e, this.parentSub),
                            this.content.delete(t);
                    }
                }
                gc(t, e) {
                    if (!this.deleted) throw p.zR();
                    this.content.gc(t),
                        e
                            ? ((t, e, n) => {
                                  const r = t.clients.get(e.id.client);
                                  r[ce(r, e.id.clock)] = n;
                              })(t, this, new Kn(this.id, this.length))
                            : (this.content = new qn(this.length));
                }
                write(t, e) {
                    const n =
                            e > 0
                                ? xt(this.id.client, this.id.clock + e - 1)
                                : this.origin,
                        r = this.rightOrigin,
                        s = this.parentSub,
                        i =
                            (this.content.getRef() & w.kr) |
                            (null === n ? 0 : w.x1) |
                            (null === r ? 0 : w.rc) |
                            (null === s ? 0 : w.cq);
                    if (
                        (t.writeInfo(i),
                        null !== n && t.writeLeftID(n),
                        null !== r && t.writeRightID(r),
                        null === n && null === r)
                    ) {
                        const e = this.parent;
                        if (void 0 !== e._item) {
                            const n = e._item;
                            if (null === n) {
                                const n = Ot(e);
                                t.writeParentInfo(!0), t.writeString(n);
                            } else t.writeParentInfo(!1), t.writeLeftID(n.id);
                        } else
                            e.constructor === String
                                ? (t.writeParentInfo(!0), t.writeString(e))
                                : e.constructor === At
                                ? (t.writeParentInfo(!1), t.writeLeftID(e))
                                : p.zR();
                        null !== s && t.writeString(s);
                    }
                    this.content.write(t, e);
                }
            }
            const yr = (t, e) => _r[e & w.kr](t),
                _r = [
                    () => {
                        p.zR();
                    },
                    t => new qn(t.readLen()),
                    t => {
                        const e = t.readLen(),
                            n = [];
                        for (let r = 0; r < e; r++) {
                            const e = t.readString();
                            'undefined' === e
                                ? n.push(void 0)
                                : n.push(JSON.parse(e));
                        }
                        return new nr(n);
                    },
                    t => new Xn(t.readBuf()),
                    t => new sr(t.readString()),
                    t => new tr(t.readJSON()),
                    t => new er(t.readKey(), t.readJSON()),
                    t => new gr(ir[t.readTypeRef()](t)),
                    t => {
                        const e = t.readLen(),
                            n = [];
                        for (let r = 0; r < e; r++) n.push(t.readAny());
                        return new rr(n);
                    },
                    t => new Qn(Zn(t.readString(), t.readAny())),
                    () => {
                        p.zR();
                    },
                ];
            class br extends Gn {
                get deleted() {
                    return !0;
                }
                delete() {}
                mergeWith(t) {
                    return (
                        this.constructor === t.constructor &&
                        ((this.length += t.length), !0)
                    );
                }
                integrate(t, e) {
                    p.zR();
                }
                write(t, e) {
                    t.writeInfo(10), l.uE(t.restEncoder, this.length - e);
                }
                getMissing(t, e) {
                    return null;
                }
            }
            const Er =
                    'undefined' != typeof globalThis
                        ? globalThis
                        : 'undefined' != typeof window
                        ? window
                        : void 0 !== n.g
                        ? n.g
                        : {},
                Sr = '__ $YJS$ __';
            !0 === Er[Sr] &&
                console.error(
                    'Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438'
                ),
                (Er[Sr] = !0);
        },
    },
]);
//# sourceMappingURL=1221.c51249a.js.map
