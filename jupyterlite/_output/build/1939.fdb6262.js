'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [1939, 4226],
    {
        84288: (e, t, r) => {
            r.d(t, { Ud: () => p });
            const n = Symbol('Comlink.proxy'),
                a = Symbol('Comlink.endpoint'),
                s = Symbol('Comlink.releaseProxy'),
                o = Symbol('Comlink.thrown'),
                i = e =>
                    ('object' == typeof e && null !== e) ||
                    'function' == typeof e,
                c = new Map([
                    [
                        'proxy',
                        {
                            canHandle: e => i(e) && e[n],
                            serialize(e) {
                                const {
                                    port1: t,
                                    port2: r,
                                } = new MessageChannel();
                                return u(e, t), [r, [r]];
                            },
                            deserialize: e => (e.start(), p(e)),
                        },
                    ],
                    [
                        'throw',
                        {
                            canHandle: e => i(e) && o in e,
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
            function u(e, t = self) {
                t.addEventListener('message', function r(a) {
                    if (!a || !a.data) return;
                    const { id: s, type: i, path: c } = Object.assign(
                            { path: [] },
                            a.data
                        ),
                        p = (a.data.argumentList || []).map(b);
                    let m;
                    try {
                        const t = c.slice(0, -1).reduce((e, t) => e[t], e),
                            r = c.reduce((e, t) => e[t], e);
                        switch (i) {
                            case 'GET':
                                m = r;
                                break;
                            case 'SET':
                                (t[c.slice(-1)[0]] = b(a.data.value)), (m = !0);
                                break;
                            case 'APPLY':
                                m = r.apply(t, p);
                                break;
                            case 'CONSTRUCT':
                                m = (function(e) {
                                    return Object.assign(e, { [n]: !0 });
                                })(new r(...p));
                                break;
                            case 'ENDPOINT':
                                {
                                    const {
                                        port1: t,
                                        port2: r,
                                    } = new MessageChannel();
                                    u(e, r),
                                        (m = (function(e, t) {
                                            return y.set(e, t), e;
                                        })(t, [t]));
                                }
                                break;
                            case 'RELEASE':
                                m = void 0;
                                break;
                            default:
                                return;
                        }
                    } catch (e) {
                        m = { value: e, [o]: 0 };
                    }
                    Promise.resolve(m)
                        .catch(e => ({ value: e, [o]: 0 }))
                        .then(e => {
                            const [n, a] = v(e);
                            t.postMessage(
                                Object.assign(Object.assign({}, n), { id: s }),
                                a
                            ),
                                'RELEASE' === i &&
                                    (t.removeEventListener('message', r), l(t));
                        });
                }),
                    t.start && t.start();
            }
            function l(e) {
                (function(e) {
                    return 'MessagePort' === e.constructor.name;
                })(e) && e.close();
            }
            function p(e, t) {
                return d(e, [], t);
            }
            function m(e) {
                if (e)
                    throw new Error(
                        'Proxy has been released and is not useable'
                    );
            }
            function d(e, t = [], r = function() {}) {
                let n = !1;
                const o = new Proxy(r, {
                    get(r, a) {
                        if ((m(n), a === s))
                            return () =>
                                g(e, {
                                    type: 'RELEASE',
                                    path: t.map(e => e.toString()),
                                }).then(() => {
                                    l(e), (n = !0);
                                });
                        if ('then' === a) {
                            if (0 === t.length) return { then: () => o };
                            const r = g(e, {
                                type: 'GET',
                                path: t.map(e => e.toString()),
                            }).then(b);
                            return r.then.bind(r);
                        }
                        return d(e, [...t, a]);
                    },
                    set(r, a, s) {
                        m(n);
                        const [o, i] = v(s);
                        return g(
                            e,
                            {
                                type: 'SET',
                                path: [...t, a].map(e => e.toString()),
                                value: o,
                            },
                            i
                        ).then(b);
                    },
                    apply(r, s, o) {
                        m(n);
                        const i = t[t.length - 1];
                        if (i === a) return g(e, { type: 'ENDPOINT' }).then(b);
                        if ('bind' === i) return d(e, t.slice(0, -1));
                        const [c, u] = h(o);
                        return g(
                            e,
                            {
                                type: 'APPLY',
                                path: t.map(e => e.toString()),
                                argumentList: c,
                            },
                            u
                        ).then(b);
                    },
                    construct(r, a) {
                        m(n);
                        const [s, o] = h(a);
                        return g(
                            e,
                            {
                                type: 'CONSTRUCT',
                                path: t.map(e => e.toString()),
                                argumentList: s,
                            },
                            o
                        ).then(b);
                    },
                });
                return o;
            }
            function h(e) {
                const t = e.map(v);
                return [
                    t.map(e => e[0]),
                    ((r = t.map(e => e[1])),
                    Array.prototype.concat.apply([], r)),
                ];
                var r;
            }
            const y = new WeakMap();
            function v(e) {
                for (const [t, r] of c)
                    if (r.canHandle(e)) {
                        const [n, a] = r.serialize(e);
                        return [{ type: 'HANDLER', name: t, value: n }, a];
                    }
                return [{ type: 'RAW', value: e }, y.get(e) || []];
            }
            function b(e) {
                switch (e.type) {
                    case 'HANDLER':
                        return c.get(e.name).deserialize(e.value);
                    case 'RAW':
                        return e.value;
                }
            }
            function g(e, t, r) {
                return new Promise(n => {
                    const a = new Array(4)
                        .fill(0)
                        .map(() =>
                            Math.floor(
                                Math.random() * Number.MAX_SAFE_INTEGER
                            ).toString(16)
                        )
                        .join('-');
                    e.addEventListener('message', function t(r) {
                        r.data &&
                            r.data.id &&
                            r.data.id === a &&
                            (e.removeEventListener('message', t), n(r.data));
                    }),
                        e.start && e.start(),
                        e.postMessage(Object.assign({ id: a }, t), r);
                });
            }
        },
        11939: (e, t, r) => {
            r.r(t), r.d(t, { JavaScriptKernel: () => i });
            var n = r(96801),
                a = r(56255),
                s = r(26169),
                o = r(84288);
            class i extends a.BaseKernel {
                constructor(e) {
                    super(e),
                        (this._ready = new s.PromiseDelegate()),
                        (this._worker = this.initWorker(e)),
                        (this._worker.onmessage = e =>
                            this._processWorkerMessage(e.data)),
                        (this.remoteKernel = this.initRemote(e)),
                        this._ready.resolve();
                }
                dispose() {
                    this.isDisposed ||
                        (this._worker.terminate(),
                        (this._worker = null),
                        super.dispose());
                }
                get ready() {
                    return this._ready.promise;
                }
                async kernelInfoRequest() {
                    return {
                        implementation: 'JavaScript',
                        implementation_version: '0.1.0',
                        language_info: {
                            codemirror_mode: { name: 'javascript' },
                            file_extension: '.js',
                            mimetype: 'text/javascript',
                            name: 'javascript',
                            nbconvert_exporter: 'javascript',
                            pygments_lexer: 'javascript',
                            version: 'es2017',
                        },
                        protocol_version: '5.3',
                        status: 'ok',
                        banner: 'A JavaScript kernel running in the browser',
                        help_links: [
                            {
                                text: 'JavaScript Kernel',
                                url:
                                    'https://github.com/jupyterlite/jupyterlite',
                            },
                        ],
                    };
                }
                async executeRequest(e) {
                    const t = await this.remoteKernel.execute(e, this.parent);
                    return (t.execution_count = this.executionCount), t;
                }
                async completeRequest(e) {
                    return await this.remoteKernel.complete(e, this.parent);
                }
                async inspectRequest(e) {
                    throw new Error('Not implemented');
                }
                async isCompleteRequest(e) {
                    throw new Error('Not implemented');
                }
                async commInfoRequest(e) {
                    throw new Error('Not implemented');
                }
                inputReply(e) {
                    throw new Error('Not implemented');
                }
                async commOpen(e) {
                    throw new Error('Not implemented');
                }
                async commMsg(e) {
                    throw new Error('Not implemented');
                }
                async commClose(e) {
                    throw new Error('Not implemented');
                }
                initWorker(e) {
                    return new Worker(new URL(r.p + r.u(4275), r.b), {
                        type: void 0,
                    });
                }
                initRemote(e) {
                    const t = (0, o.Ud)(this._worker);
                    return (
                        t.initialize({ baseUrl: n.PageConfig.getBaseUrl() }), t
                    );
                }
                _processWorkerMessage(e) {
                    var t, r, n, a, s, o, i;
                    if (!e.type) return;
                    const c = e.parentHeader || this.parentHeader;
                    switch (e.type) {
                        case 'stream': {
                            const r =
                                null !== (t = e.bundle) && void 0 !== t
                                    ? t
                                    : { name: 'stdout', text: '' };
                            this.stream(r, c);
                            break;
                        }
                        case 'input_request': {
                            const t =
                                null !== (r = e.content) && void 0 !== r
                                    ? r
                                    : { prompt: '', password: !1 };
                            this.inputRequest(t, c);
                            break;
                        }
                        case 'display_data': {
                            const t =
                                null !== (n = e.bundle) && void 0 !== n
                                    ? n
                                    : { data: {}, metadata: {}, transient: {} };
                            this.displayData(t, c);
                            break;
                        }
                        case 'update_display_data': {
                            const t =
                                null !== (a = e.bundle) && void 0 !== a
                                    ? a
                                    : { data: {}, metadata: {}, transient: {} };
                            this.updateDisplayData(t, c);
                            break;
                        }
                        case 'clear_output': {
                            const t =
                                null !== (s = e.bundle) && void 0 !== s
                                    ? s
                                    : { wait: !1 };
                            this.clearOutput(t, c);
                            break;
                        }
                        case 'execute_result': {
                            const t =
                                null !== (o = e.bundle) && void 0 !== o
                                    ? o
                                    : {
                                          execution_count: 0,
                                          data: {},
                                          metadata: {},
                                      };
                            this.publishExecuteResult(t, c);
                            break;
                        }
                        case 'execute_error': {
                            const t =
                                null !== (i = e.bundle) && void 0 !== i
                                    ? i
                                    : { ename: '', evalue: '', traceback: [] };
                            this.publishExecuteError(t, c);
                            break;
                        }
                        case 'comm_msg':
                        case 'comm_open':
                        case 'comm_close':
                            this.handleComm(
                                e.type,
                                e.content,
                                e.metadata,
                                e.buffers,
                                e.parentHeader
                            );
                    }
                }
            }
        },
    },
]);
//# sourceMappingURL=1939.fdb6262.js.map
