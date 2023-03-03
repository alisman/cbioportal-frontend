'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [4298, 2887],
    {
        14298: (s, n, e) => {
            e.r(n), e.d(n, { ISessions: () => t, Sessions: () => a });
            var i = e(26169);
            const t = new i.Token('@jupyterlite/session:ISessions');
            var o = e(96801),
                r = e(43892);
            class a {
                constructor(s) {
                    (this._sessions = []), (this._kernels = s.kernels);
                }
                async get(s) {
                    const n = this._sessions.find(n => n.id === s);
                    if (!n) throw Error(`Session ${s} not found`);
                    return n;
                }
                async list() {
                    return this._sessions;
                }
                async patch(s) {
                    const { id: n, path: e, name: t, kernel: r } = s,
                        a = this._sessions.findIndex(s => s.id === n),
                        d = this._sessions[a];
                    if (!d) throw Error(`Session ${n} not found`);
                    const l = {
                        ...d,
                        path: null != e ? e : d.path,
                        name: null != t ? t : d.name,
                    };
                    if (r)
                        if (r.id) {
                            const s = this._sessions.find(s => {
                                var n;
                                return (
                                    (null === (n = s.kernel) || void 0 === n
                                        ? void 0
                                        : n.id) === (null == r ? void 0 : r.id)
                                );
                            });
                            s && (l.kernel = s.kernel);
                        } else if (r.name) {
                            const s = await this._kernels.startNew({
                                id: i.UUID.uuid4(),
                                name: r.name,
                                location: o.PathExt.dirname(l.path),
                            });
                            s && (l.kernel = s);
                        }
                    return (this._sessions[a] = l), l;
                }
                async startNew(s) {
                    var n, e, t;
                    const { path: r, name: a } = s,
                        d = this._sessions.find(s => s.name === a);
                    if (d) return d;
                    const l =
                            null !==
                                (e =
                                    null === (n = s.kernel) || void 0 === n
                                        ? void 0
                                        : n.name) && void 0 !== e
                                ? e
                                : '',
                        h =
                            null !== (t = s.id) && void 0 !== t
                                ? t
                                : i.UUID.uuid4(),
                        u = await this._kernels.startNew({
                            id: h,
                            name: l,
                            location: o.PathExt.dirname(s.path),
                        }),
                        c = {
                            id: h,
                            path: r,
                            name: null != a ? a : r,
                            type: 'notebook',
                            kernel: { id: u.id, name: u.name },
                        };
                    return this._sessions.push(c), c;
                }
                async shutdown(s) {
                    var n;
                    const e = this._sessions.find(n => n.id === s);
                    if (!e) throw Error(`Session ${s} not found`);
                    const i =
                        null === (n = e.kernel) || void 0 === n ? void 0 : n.id;
                    i && (await this._kernels.shutdown(i)),
                        r.ArrayExt.removeFirstOf(this._sessions, e);
                }
            }
        },
    },
]);
//# sourceMappingURL=4298.0438686.js.map
