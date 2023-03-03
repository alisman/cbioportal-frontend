var _JUPYTERLAB;
(() => {
    'use strict';
    var e = {
            34275: () => {
                const e = Symbol('Comlink.proxy'),
                    t = Symbol('Comlink.endpoint'),
                    n = Symbol('Comlink.releaseProxy'),
                    r = Symbol('Comlink.thrown'),
                    a = e =>
                        ('object' == typeof e && null !== e) ||
                        'function' == typeof e,
                    s = new Map([
                        [
                            'proxy',
                            {
                                canHandle: t => a(t) && t[e],
                                serialize(e) {
                                    const {
                                        port1: t,
                                        port2: n,
                                    } = new MessageChannel();
                                    return o(e, t), [n, [n]];
                                },
                                deserialize: e => (
                                    e.start(), u(e, [], undefined)
                                ),
                            },
                        ],
                        [
                            'throw',
                            {
                                canHandle: e => a(e) && r in e,
                                serialize({ value: e }) {
                                    let t;
                                    return (
                                        (t =
                                            e instanceof Error
                                                ? {
                                                      isError: !0,
                                                      value: {
                                                          message: e.message,
                                                          name: e.name,
                                                          stack: e.stack,
                                                      },
                                                  }
                                                : { isError: !1, value: e }),
                                        [t, []]
                                    );
                                },
                                deserialize(e) {
                                    if (e.isError)
                                        throw Object.assign(
                                            new Error(e.value.message),
                                            e.value
                                        );
                                    throw e.value;
                                },
                            },
                        ],
                    ]);
                function o(t, n = self) {
                    n.addEventListener('message', function a(s) {
                        if (!s || !s.data) return;
                        const { id: i, type: u, path: l } = Object.assign(
                                { path: [] },
                                s.data
                            ),
                            f = (s.data.argumentList || []).map(d);
                        let h;
                        try {
                            const n = l.slice(0, -1).reduce((e, t) => e[t], t),
                                r = l.reduce((e, t) => e[t], t);
                            switch (u) {
                                case 'GET':
                                    h = r;
                                    break;
                                case 'SET':
                                    (n[l.slice(-1)[0]] = d(s.data.value)),
                                        (h = !0);
                                    break;
                                case 'APPLY':
                                    h = r.apply(n, f);
                                    break;
                                case 'CONSTRUCT':
                                    h = (function(t) {
                                        return Object.assign(t, { [e]: !0 });
                                    })(new r(...f));
                                    break;
                                case 'ENDPOINT':
                                    {
                                        const {
                                            port1: e,
                                            port2: n,
                                        } = new MessageChannel();
                                        o(t, n),
                                            (h = (function(e, t) {
                                                return p.set(e, t), e;
                                            })(e, [e]));
                                    }
                                    break;
                                case 'RELEASE':
                                    h = void 0;
                                    break;
                                default:
                                    return;
                            }
                        } catch (e) {
                            h = { value: e, [r]: 0 };
                        }
                        Promise.resolve(h)
                            .catch(e => ({ value: e, [r]: 0 }))
                            .then(e => {
                                const [t, r] = m(e);
                                n.postMessage(
                                    Object.assign(Object.assign({}, t), {
                                        id: i,
                                    }),
                                    r
                                ),
                                    'RELEASE' === u &&
                                        (n.removeEventListener('message', a),
                                        c(n));
                            });
                    }),
                        n.start && n.start();
                }
                function c(e) {
                    (function(e) {
                        return 'MessagePort' === e.constructor.name;
                    })(e) && e.close();
                }
                function i(e) {
                    if (e)
                        throw new Error(
                            'Proxy has been released and is not useable'
                        );
                }
                function u(e, r = [], a = function() {}) {
                    let s = !1;
                    const o = new Proxy(a, {
                        get(t, a) {
                            if ((i(s), a === n))
                                return () =>
                                    f(e, {
                                        type: 'RELEASE',
                                        path: r.map(e => e.toString()),
                                    }).then(() => {
                                        c(e), (s = !0);
                                    });
                            if ('then' === a) {
                                if (0 === r.length) return { then: () => o };
                                const t = f(e, {
                                    type: 'GET',
                                    path: r.map(e => e.toString()),
                                }).then(d);
                                return t.then.bind(t);
                            }
                            return u(e, [...r, a]);
                        },
                        set(t, n, a) {
                            i(s);
                            const [o, c] = m(a);
                            return f(
                                e,
                                {
                                    type: 'SET',
                                    path: [...r, n].map(e => e.toString()),
                                    value: o,
                                },
                                c
                            ).then(d);
                        },
                        apply(n, a, o) {
                            i(s);
                            const c = r[r.length - 1];
                            if (c === t)
                                return f(e, { type: 'ENDPOINT' }).then(d);
                            if ('bind' === c) return u(e, r.slice(0, -1));
                            const [p, m] = l(o);
                            return f(
                                e,
                                {
                                    type: 'APPLY',
                                    path: r.map(e => e.toString()),
                                    argumentList: p,
                                },
                                m
                            ).then(d);
                        },
                        construct(t, n) {
                            i(s);
                            const [a, o] = l(n);
                            return f(
                                e,
                                {
                                    type: 'CONSTRUCT',
                                    path: r.map(e => e.toString()),
                                    argumentList: a,
                                },
                                o
                            ).then(d);
                        },
                    });
                    return o;
                }
                function l(e) {
                    const t = e.map(m);
                    return [
                        t.map(e => e[0]),
                        ((n = t.map(e => e[1])),
                        Array.prototype.concat.apply([], n)),
                    ];
                    var n;
                }
                const p = new WeakMap();
                function m(e) {
                    for (const [t, n] of s)
                        if (n.canHandle(e)) {
                            const [r, a] = n.serialize(e);
                            return [{ type: 'HANDLER', name: t, value: r }, a];
                        }
                    return [{ type: 'RAW', value: e }, p.get(e) || []];
                }
                function d(e) {
                    switch (e.type) {
                        case 'HANDLER':
                            return s.get(e.name).deserialize(e.value);
                        case 'RAW':
                            return e.value;
                    }
                }
                function f(e, t, n) {
                    return new Promise(r => {
                        const a = new Array(4)
                            .fill(0)
                            .map(() =>
                                Math.floor(
                                    Math.random() * Number.MAX_SAFE_INTEGER
                                ).toString(16)
                            )
                            .join('-');
                        e.addEventListener('message', function t(n) {
                            n.data &&
                                n.data.id &&
                                n.data.id === a &&
                                (e.removeEventListener('message', t),
                                r(n.data));
                        }),
                            e.start && e.start(),
                            e.postMessage(Object.assign({ id: a }, t), n);
                    });
                }
                o(
                    new (class {
                        constructor() {
                            this._executionCount = 0;
                        }
                        async initialize(e) {
                            (console.log = function(...e) {
                                const t = {
                                    name: 'stdout',
                                    text: e.join(' ') + '\n',
                                };
                                postMessage({ type: 'stream', bundle: t });
                            }),
                                (console.info = console.log),
                                (console.error = function(...e) {
                                    const t = {
                                        name: 'stderr',
                                        text: e.join(' ') + '\n',
                                    };
                                    postMessage({ type: 'stream', bundle: t });
                                }),
                                (console.warn = console.error),
                                (self.onerror = function(e, t, n, r, a) {
                                    console.error(e);
                                });
                        }
                        async execute(e, t) {
                            const { code: n } = e;
                            try {
                                const e = self.eval(n);
                                this._executionCount++;
                                const t = {
                                    data: { 'text/plain': e },
                                    metadata: {},
                                    execution_count: this._executionCount,
                                };
                                return (
                                    postMessage({
                                        bundle: t,
                                        type: 'execute_result',
                                    }),
                                    { status: 'ok', user_expressions: {} }
                                );
                            } catch (e) {
                                const { name: t, stack: n, message: r } = e;
                                return (
                                    postMessage({
                                        bundle: {
                                            ename: t,
                                            evalue: r,
                                            traceback: [`${n}`],
                                        },
                                        type: 'execute_error',
                                    }),
                                    {
                                        status: 'error',
                                        ename: t,
                                        evalue: r,
                                        traceback: [`${n}`],
                                    }
                                );
                            }
                        }
                        async complete(e, t) {
                            var n, r;
                            const a = Object.getOwnPropertyNames(self),
                                { code: s, cursor_pos: o } = e,
                                c =
                                    null !==
                                        (r = (null !==
                                            (n = s
                                                .slice(0, o)
                                                .match(/(\w+)$/)) &&
                                        void 0 !== n
                                            ? n
                                            : [])[0]) && void 0 !== r
                                        ? r
                                        : '';
                            return {
                                matches: a.filter(e => e.startsWith(c)),
                                cursor_start: o - c.length,
                                cursor_end: o,
                                metadata: {},
                                status: 'ok',
                            };
                        }
                    })()
                );
            },
        },
        t = {};
    function n(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var s = (t[r] = { exports: {} });
        return e[r](s, s.exports, n), s.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (() => {
            n.S = {};
            var e = {},
                t = {};
            n.I = (r, a) => {
                a || (a = []);
                var s = t[r];
                if ((s || (s = t[r] = {}), !(a.indexOf(s) >= 0))) {
                    if ((a.push(s), e[r])) return e[r];
                    n.o(n.S, r) || (n.S[r] = {}), n.S[r];
                    var o = [];
                    return (e[r] = o.length
                        ? Promise.all(o).then(() => (e[r] = 1))
                        : 1);
                }
            };
        })();
    var r = n(34275);
    (_JUPYTERLAB = void 0 === _JUPYTERLAB ? {} : _JUPYTERLAB).CORE_OUTPUT = r;
})();
//# sourceMappingURL=4275.929bc2f.js.map
