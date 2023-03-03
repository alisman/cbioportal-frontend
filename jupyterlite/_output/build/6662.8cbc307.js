var _JUPYTERLAB;
(() => {
    'use strict';
    var e,
        t,
        r,
        a,
        i,
        n,
        s,
        o,
        l,
        p,
        u,
        c,
        h,
        d,
        m = {
            56662: (e, t, r) => {
                const a = Symbol('Comlink.proxy'),
                    i = Symbol('Comlink.endpoint'),
                    n = Symbol('Comlink.releaseProxy'),
                    s = Symbol('Comlink.thrown'),
                    o = e =>
                        ('object' == typeof e && null !== e) ||
                        'function' == typeof e,
                    l = new Map([
                        [
                            'proxy',
                            {
                                canHandle: e => o(e) && e[a],
                                serialize(e) {
                                    const {
                                        port1: t,
                                        port2: r,
                                    } = new MessageChannel();
                                    return p(e, t), [r, [r]];
                                },
                                deserialize: e => (
                                    e.start(), h(e, [], undefined)
                                ),
                            },
                        ],
                        [
                            'throw',
                            {
                                canHandle: e => o(e) && s in e,
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
                function p(e, t = self) {
                    t.addEventListener('message', function r(i) {
                        if (!i || !i.data) return;
                        const { id: n, type: o, path: l } = Object.assign(
                                { path: [] },
                                i.data
                            ),
                            c = (i.data.argumentList || []).map(_);
                        let h;
                        try {
                            const t = l.slice(0, -1).reduce((e, t) => e[t], e),
                                r = l.reduce((e, t) => e[t], e);
                            switch (o) {
                                case 'GET':
                                    h = r;
                                    break;
                                case 'SET':
                                    (t[l.slice(-1)[0]] = _(i.data.value)),
                                        (h = !0);
                                    break;
                                case 'APPLY':
                                    h = r.apply(t, c);
                                    break;
                                case 'CONSTRUCT':
                                    h = (function(e) {
                                        return Object.assign(e, { [a]: !0 });
                                    })(new r(...c));
                                    break;
                                case 'ENDPOINT':
                                    {
                                        const {
                                            port1: t,
                                            port2: r,
                                        } = new MessageChannel();
                                        p(e, r),
                                            (h = (function(e, t) {
                                                return m.set(e, t), e;
                                            })(t, [t]));
                                    }
                                    break;
                                case 'RELEASE':
                                    h = void 0;
                                    break;
                                default:
                                    return;
                            }
                        } catch (e) {
                            h = { value: e, [s]: 0 };
                        }
                        Promise.resolve(h)
                            .catch(e => ({ value: e, [s]: 0 }))
                            .then(e => {
                                const [a, i] = f(e);
                                t.postMessage(
                                    Object.assign(Object.assign({}, a), {
                                        id: n,
                                    }),
                                    i
                                ),
                                    'RELEASE' === o &&
                                        (t.removeEventListener('message', r),
                                        u(t));
                            });
                    }),
                        t.start && t.start();
                }
                function u(e) {
                    (function(e) {
                        return 'MessagePort' === e.constructor.name;
                    })(e) && e.close();
                }
                function c(e) {
                    if (e)
                        throw new Error(
                            'Proxy has been released and is not useable'
                        );
                }
                function h(e, t = [], r = function() {}) {
                    let a = !1;
                    const s = new Proxy(r, {
                        get(r, i) {
                            if ((c(a), i === n))
                                return () =>
                                    y(e, {
                                        type: 'RELEASE',
                                        path: t.map(e => e.toString()),
                                    }).then(() => {
                                        u(e), (a = !0);
                                    });
                            if ('then' === i) {
                                if (0 === t.length) return { then: () => s };
                                const r = y(e, {
                                    type: 'GET',
                                    path: t.map(e => e.toString()),
                                }).then(_);
                                return r.then.bind(r);
                            }
                            return h(e, [...t, i]);
                        },
                        set(r, i, n) {
                            c(a);
                            const [s, o] = f(n);
                            return y(
                                e,
                                {
                                    type: 'SET',
                                    path: [...t, i].map(e => e.toString()),
                                    value: s,
                                },
                                o
                            ).then(_);
                        },
                        apply(r, n, s) {
                            c(a);
                            const o = t[t.length - 1];
                            if (o === i)
                                return y(e, { type: 'ENDPOINT' }).then(_);
                            if ('bind' === o) return h(e, t.slice(0, -1));
                            const [l, p] = d(s);
                            return y(
                                e,
                                {
                                    type: 'APPLY',
                                    path: t.map(e => e.toString()),
                                    argumentList: l,
                                },
                                p
                            ).then(_);
                        },
                        construct(r, i) {
                            c(a);
                            const [n, s] = d(i);
                            return y(
                                e,
                                {
                                    type: 'CONSTRUCT',
                                    path: t.map(e => e.toString()),
                                    argumentList: n,
                                },
                                s
                            ).then(_);
                        },
                    });
                    return s;
                }
                function d(e) {
                    const t = e.map(f);
                    return [
                        t.map(e => e[0]),
                        ((r = t.map(e => e[1])),
                        Array.prototype.concat.apply([], r)),
                    ];
                    var r;
                }
                const m = new WeakMap();
                function f(e) {
                    for (const [t, r] of l)
                        if (r.canHandle(e)) {
                            const [a, i] = r.serialize(e);
                            return [{ type: 'HANDLER', name: t, value: a }, i];
                        }
                    return [{ type: 'RAW', value: e }, m.get(e) || []];
                }
                function _(e) {
                    switch (e.type) {
                        case 'HANDLER':
                            return l.get(e.name).deserialize(e.value);
                        case 'RAW':
                            return e.value;
                    }
                }
                function y(e, t, r) {
                    return new Promise(a => {
                        const i = new Array(4)
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
                                r.data.id === i &&
                                (e.removeEventListener('message', t),
                                a(r.data));
                        }),
                            e.start && e.start(),
                            e.postMessage(Object.assign({ id: i }, t), r);
                    });
                }
                p(
                    new (class {
                        constructor() {
                            (this._options = null),
                                (this._initializer = null),
                                (this._pyodide = null),
                                (this._localPath = ''),
                                (this._driveName = ''),
                                (this._driveFS = null),
                                (this._initialized = new Promise((e, t) => {
                                    this._initializer = {
                                        resolve: e,
                                        reject: t,
                                    };
                                }));
                        }
                        async initialize(e) {
                            var t;
                            if (
                                ((this._options = e), e.location.includes(':'))
                            ) {
                                const t = e.location.split(':');
                                (this._driveName = t[0]),
                                    (this._localPath = t[1]);
                            } else
                                (this._driveName = ''),
                                    (this._localPath = e.location);
                            await this.initRuntime(e),
                                await this.initFilesystem(e),
                                await this.initPackageManager(e),
                                await this.initKernel(e),
                                await this.initGlobals(e),
                                null === (t = this._initializer) ||
                                    void 0 === t ||
                                    t.resolve();
                        }
                        async initRuntime(e) {
                            const { pyodideUrl: t, indexUrl: r } = e;
                            let a;
                            t.endsWith('.mjs')
                                ? (a = (await import(t)).loadPyodide)
                                : (importScripts(t), (a = self.loadPyodide)),
                                (this._pyodide = await a({ indexURL: r }));
                        }
                        async initPackageManager(e) {
                            if (!this._options)
                                throw new Error('Uninitialized');
                            const {
                                pipliteWheelUrl: t,
                                disablePyPIFallback: r,
                                pipliteUrls: a,
                            } = this._options;
                            await this._pyodide.loadPackage(['micropip']),
                                await this._pyodide.runPythonAsync(
                                    `\n      import micropip\n      await micropip.install('${t}', keep_going=True)\n      import piplite.piplite\n      piplite.piplite._PIPLITE_DISABLE_PYPI = ${
                                        r ? 'True' : 'False'
                                    }\n      piplite.piplite._PIPLITE_URLS = ${JSON.stringify(
                                        a
                                    )}\n    `
                                );
                        }
                        async initKernel(e) {
                            await this._pyodide.runPythonAsync(
                                "\n      await piplite.install(['sqlite3'], keep_going=True);\n      await piplite.install(['ipykernel'], keep_going=True);\n      await piplite.install(['pyolite'], keep_going=True);\n      await piplite.install(['ipython'], keep_going=True);\n      import pyolite\n    "
                            ),
                                e.mountDrive &&
                                    this._localPath &&
                                    (await this._pyodide.runPythonAsync(
                                        `\n        import os;\n        os.chdir("${this._localPath}");\n      `
                                    ));
                        }
                        async initGlobals(e) {
                            const { globals: t } = this._pyodide;
                            (this._kernel = t
                                .get('pyolite')
                                .kernel_instance.copy()),
                                (this._stdout_stream = t
                                    .get('pyolite')
                                    .stdout_stream.copy()),
                                (this._stderr_stream = t
                                    .get('pyolite')
                                    .stderr_stream.copy()),
                                (this._interpreter = this._kernel.interpreter.copy()),
                                (this._interpreter.send_comm = this.sendComm.bind(
                                    this
                                ));
                        }
                        async initFilesystem(e) {
                            if (e.mountDrive) {
                                const t = '/drive',
                                    {
                                        FS: a,
                                        PATH: i,
                                        ERRNO_CODES: n,
                                    } = this._pyodide,
                                    { baseUrl: s } = e,
                                    { DriveFS: o } = await r
                                        .e(4281)
                                        .then(r.t.bind(r, 54281, 23)),
                                    l = new o({
                                        FS: a,
                                        PATH: i,
                                        ERRNO_CODES: n,
                                        baseUrl: s,
                                        driveName: this._driveName,
                                        mountpoint: t,
                                    });
                                a.mkdir(t),
                                    a.mount(l, {}, t),
                                    a.chdir(t),
                                    (this._driveFS = l);
                            }
                        }
                        mapToObject(e) {
                            const t = e instanceof Array ? [] : {};
                            return (
                                e.forEach((e, r) => {
                                    t[r] =
                                        e instanceof Map || e instanceof Array
                                            ? this.mapToObject(e)
                                            : e;
                                }),
                                t
                            );
                        }
                        formatResult(e) {
                            if (!this._pyodide.isPyProxy(e)) return e;
                            const t = e.toJs();
                            return this.mapToObject(t);
                        }
                        async setup(e) {
                            await this._initialized,
                                (this._kernel._parent_header = this._pyodide.toPy(
                                    e
                                ));
                        }
                        async execute(e, t) {
                            await this.setup(t);
                            const r = (e, t) => {
                                const r = {
                                    name: this.formatResult(e),
                                    text: this.formatResult(t),
                                };
                                postMessage({
                                    parentHeader: this.formatResult(
                                        this._kernel._parent_header
                                    ).header,
                                    bundle: r,
                                    type: 'stream',
                                });
                            };
                            (this._stdout_stream.publish_stream_callback = r),
                                (this._stderr_stream.publish_stream_callback = r),
                                (this._interpreter.display_pub.clear_output_callback = e => {
                                    const t = { wait: this.formatResult(e) };
                                    postMessage({
                                        parentHeader: this.formatResult(
                                            this._kernel._parent_header
                                        ).header,
                                        bundle: t,
                                        type: 'clear_output',
                                    });
                                }),
                                (this._interpreter.display_pub.display_data_callback = (
                                    e,
                                    t,
                                    r
                                ) => {
                                    const a = {
                                        data: this.formatResult(e),
                                        metadata: this.formatResult(t),
                                        transient: this.formatResult(r),
                                    };
                                    postMessage({
                                        parentHeader: this.formatResult(
                                            this._kernel._parent_header
                                        ).header,
                                        bundle: a,
                                        type: 'display_data',
                                    });
                                }),
                                (this._interpreter.display_pub.update_display_data_callback = (
                                    e,
                                    t,
                                    r
                                ) => {
                                    const a = {
                                        data: this.formatResult(e),
                                        metadata: this.formatResult(t),
                                        transient: this.formatResult(r),
                                    };
                                    postMessage({
                                        parentHeader: this.formatResult(
                                            this._kernel._parent_header
                                        ).header,
                                        bundle: a,
                                        type: 'update_display_data',
                                    });
                                }),
                                (this._interpreter.displayhook.publish_execution_result = (
                                    e,
                                    t,
                                    r
                                ) => {
                                    const a = {
                                        execution_count: e,
                                        data: this.formatResult(t),
                                        metadata: this.formatResult(r),
                                    };
                                    postMessage({
                                        parentHeader: this.formatResult(
                                            this._kernel._parent_header
                                        ).header,
                                        bundle: a,
                                        type: 'execute_result',
                                    });
                                }),
                                (this._interpreter.input = this.input.bind(
                                    this
                                )),
                                (this._interpreter.getpass = this.getpass.bind(
                                    this
                                ));
                            const a = await this._kernel.run(e.code),
                                i = this.formatResult(a);
                            return (
                                'error' === i.status &&
                                    ((e, t, r) => {
                                        const a = {
                                            ename: e,
                                            evalue: t,
                                            traceback: r,
                                        };
                                        postMessage({
                                            parentHeader: this.formatResult(
                                                this._kernel._parent_header
                                            ).header,
                                            bundle: a,
                                            type: 'execute_error',
                                        });
                                    })(i.ename, i.evalue, i.traceback),
                                i
                            );
                        }
                        async complete(e, t) {
                            await this.setup(t);
                            const r = this._kernel.complete(
                                e.code,
                                e.cursor_pos
                            );
                            return this.formatResult(r);
                        }
                        async inspect(e, t) {
                            await this.setup(t);
                            const r = this._kernel.inspect(
                                e.code,
                                e.cursor_pos,
                                e.detail_level
                            );
                            return this.formatResult(r);
                        }
                        async isComplete(e, t) {
                            await this.setup(t);
                            const r = this._kernel.is_complete(e.code);
                            return this.formatResult(r);
                        }
                        async commInfo(e, t) {
                            await this.setup(t);
                            const r = this._kernel.comm_info(e.target_name);
                            return this.formatResult(r);
                        }
                        async commOpen(e, t) {
                            await this.setup(t);
                            const r = this._kernel.comm_manager.comm_open(
                                this._pyodide.toPy(e)
                            );
                            return this.formatResult(r);
                        }
                        async commMsg(e, t) {
                            await this.setup(t);
                            const r = this._kernel.comm_manager.comm_msg(
                                this._pyodide.toPy(e)
                            );
                            return this.formatResult(r);
                        }
                        async commClose(e, t) {
                            await this.setup(t);
                            const r = this._kernel.comm_manager.comm_close(
                                this._pyodide.toPy(e)
                            );
                            return this.formatResult(r);
                        }
                        async inputReply(e, t) {
                            await this.setup(t), this._resolveInputReply(e);
                        }
                        async sendInputRequest(e, t) {
                            const r = { prompt: e, password: t };
                            postMessage({
                                type: 'input_request',
                                parentHeader: this.formatResult(
                                    this._kernel._parent_header
                                ).header,
                                content: r,
                            });
                        }
                        async getpass(e) {
                            (e = void 0 === e ? '' : e),
                                await this.sendInputRequest(e, !0);
                            const t = new Promise(e => {
                                this._resolveInputReply = e;
                            });
                            return (await t).value;
                        }
                        async input(e) {
                            (e = void 0 === e ? '' : e),
                                await this.sendInputRequest(e, !1);
                            const t = new Promise(e => {
                                this._resolveInputReply = e;
                            });
                            return (await t).value;
                        }
                        async sendComm(e, t, r, a, i) {
                            postMessage({
                                type: e,
                                content: this.formatResult(t),
                                metadata: this.formatResult(r),
                                ident: this.formatResult(a),
                                buffers: this.formatResult(i),
                                parentHeader: this.formatResult(
                                    this._kernel._parent_header
                                ).header,
                            });
                        }
                    })()
                );
            },
        },
        f = {};
    function _(e) {
        var t = f[e];
        if (void 0 !== t) return t.exports;
        var r = (f[e] = { id: e, loaded: !1, exports: {} });
        return (
            m[e].call(r.exports, r, r.exports, _), (r.loaded = !0), r.exports
        );
    }
    (_.m = m),
        (_.c = f),
        (_.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return _.d(t, { a: t }), t;
        }),
        (t = Object.getPrototypeOf
            ? e => Object.getPrototypeOf(e)
            : e => e.__proto__),
        (_.t = function(r, a) {
            if ((1 & a && (r = this(r)), 8 & a)) return r;
            if ('object' == typeof r && r) {
                if (4 & a && r.__esModule) return r;
                if (16 & a && 'function' == typeof r.then) return r;
            }
            var i = Object.create(null);
            _.r(i);
            var n = {};
            e = e || [null, t({}), t([]), t(t)];
            for (
                var s = 2 & a && r;
                'object' == typeof s && !~e.indexOf(s);
                s = t(s)
            )
                Object.getOwnPropertyNames(s).forEach(e => (n[e] = () => r[e]));
            return (n.default = () => r), _.d(i, n), i;
        }),
        (_.d = (e, t) => {
            for (var r in t)
                _.o(t, r) &&
                    !_.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (_.f = {}),
        (_.e = e =>
            Promise.all(
                Object.keys(_.f).reduce((t, r) => (_.f[r](e, t), t), [])
            )),
        (_.u = e =>
            e +
            '.' +
            {
                302: '27d2f0b',
                1555: 'e188f3f',
                2798: '8adabb3',
                3892: '2416867',
                4281: '80534d8',
                5126: 'b8f88c1',
                6169: 'ac54f5b',
                6801: '19a4c60',
                8101: '8ebbb2f',
                8389: 'ffe031f',
                8883: '80c7b63',
                9116: 'cb05c94',
                9737: '7dc8f98',
                9943: 'f3f35c7',
            }[e] +
            '.js'),
        (_.g = (function() {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (_.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (_.r = e => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (_.nmd = e => ((e.paths = []), e.children || (e.children = []), e)),
        (() => {
            _.S = {};
            var e = {},
                t = {};
            _.I = (r, a) => {
                a || (a = []);
                var i = t[r];
                if ((i || (i = t[r] = {}), !(a.indexOf(i) >= 0))) {
                    if ((a.push(i), e[r])) return e[r];
                    _.o(_.S, r) || (_.S[r] = {}), _.S[r];
                    var n = [];
                    return (e[r] = n.length
                        ? Promise.all(n).then(() => (e[r] = 1))
                        : 1);
                }
            };
        })(),
        (() => {
            var e;
            _.g.importScripts && (e = _.g.location + '');
            var t = _.g.document;
            if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
                var r = t.getElementsByTagName('script');
                r.length && (e = r[r.length - 1].src);
            }
            if (!e)
                throw new Error(
                    'Automatic publicPath is not supported in this browser'
                );
            (e = e
                .replace(/#.*$/, '')
                .replace(/\?.*$/, '')
                .replace(/\/[^\/]+$/, '/')),
                (_.p = e);
        })(),
        (r = e => {
            var t = e => e.split('.').map(e => (+e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = r[1] ? t(r[1]) : [];
            return (
                r[2] && (a.length++, a.push.apply(a, t(r[2]))),
                r[3] && (a.push([]), a.push.apply(a, t(r[3]))),
                a
            );
        }),
        (a = (e, t) => {
            (e = r(e)), (t = r(t));
            for (var a = 0; ; ) {
                if (a >= e.length)
                    return a < t.length && 'u' != (typeof t[a])[0];
                var i = e[a],
                    n = (typeof i)[0];
                if (a >= t.length) return 'u' == n;
                var s = t[a],
                    o = (typeof s)[0];
                if (n != o)
                    return ('o' == n && 'n' == o) || 's' == o || 'u' == n;
                if ('o' != n && 'u' != n && i != s) return i < s;
                a++;
            }
        }),
        (i = e => {
            var t = e[0],
                r = '';
            if (1 === e.length) return '*';
            if (t + 0.5) {
                r +=
                    0 == t
                        ? '>='
                        : -1 == t
                        ? '<'
                        : 1 == t
                        ? '^'
                        : 2 == t
                        ? '~'
                        : t > 0
                        ? '='
                        : '!=';
                for (var a = 1, n = 1; n < e.length; n++)
                    a--,
                        (r +=
                            'u' == (typeof (o = e[n]))[0]
                                ? '-'
                                : (a > 0 ? '.' : '') + ((a = 2), o));
                return r;
            }
            var s = [];
            for (n = 1; n < e.length; n++) {
                var o = e[n];
                s.push(
                    0 === o
                        ? 'not(' + l() + ')'
                        : 1 === o
                        ? '(' + l() + ' || ' + l() + ')'
                        : 2 === o
                        ? s.pop() + ' ' + s.pop()
                        : i(o)
                );
            }
            return l();
            function l() {
                return s.pop().replace(/^\((.+)\)$/, '$1');
            }
        }),
        (n = (e, t) => {
            if (0 in e) {
                t = r(t);
                var a = e[0],
                    i = a < 0;
                i && (a = -a - 1);
                for (var s = 0, o = 1, l = !0; ; o++, s++) {
                    var p,
                        u,
                        c = o < e.length ? (typeof e[o])[0] : '';
                    if (s >= t.length || 'o' == (u = (typeof (p = t[s]))[0]))
                        return !l || ('u' == c ? o > a && !i : ('' == c) != i);
                    if ('u' == u) {
                        if (!l || 'u' != c) return !1;
                    } else if (l)
                        if (c == u)
                            if (o <= a) {
                                if (p != e[o]) return !1;
                            } else {
                                if (i ? p > e[o] : p < e[o]) return !1;
                                p != e[o] && (l = !1);
                            }
                        else if ('s' != c && 'n' != c) {
                            if (i || o <= a) return !1;
                            (l = !1), o--;
                        } else {
                            if (o <= a || u < c != i) return !1;
                            l = !1;
                        }
                    else 's' != c && 'n' != c && ((l = !1), o--);
                }
            }
            var h = [],
                d = h.pop.bind(h);
            for (s = 1; s < e.length; s++) {
                var m = e[s];
                h.push(
                    1 == m ? d() | d() : 2 == m ? d() & d() : m ? n(m, t) : !d()
                );
            }
            return !!d();
        }),
        (s = (e, t) => {
            var r = e[t];
            return Object.keys(r).reduce(
                (e, t) => (!e || (!r[e].loaded && a(e, t)) ? t : e),
                0
            );
        }),
        (o = (e, t, r, a) =>
            'Unsatisfied version ' +
            r +
            ' from ' +
            (r && e[t][r].from) +
            ' of shared singleton module ' +
            t +
            ' (required ' +
            i(a) +
            ')'),
        (l = (e, t, r, a) => {
            var i = s(e, r);
            return (
                n(a, i) ||
                    ('undefined' != typeof console &&
                        console.warn &&
                        console.warn(o(e, r, i, a))),
                p(e[r][i])
            );
        }),
        (p = e => ((e.loaded = 1), e.get())),
        (u = (e =>
            function(t, r, a, i) {
                var n = _.I(t);
                return n && n.then
                    ? n.then(e.bind(e, t, _.S[t], r, a, i))
                    : e(0, _.S[t], r, a, i);
            })((e, t, r, a, i) => (t && _.o(t, r) ? l(t, 0, r, a) : i()))),
        (c = {}),
        (h = {
            54281: () =>
                u(
                    'default',
                    '@jupyterlite/contents',
                    [2, 0, 1, 0, , 'beta', 18],
                    () =>
                        Promise.all([
                            _.e(9737),
                            _.e(6169),
                            _.e(6801),
                            _.e(302),
                        ]).then(() => () => _(40302))
                ),
            26169: () =>
                u('default', '@lumino/coreutils', [2, 1, 12, 1], () =>
                    _.e(8883).then(() => () => _(28883))
                ),
            96801: () =>
                u('default', '@jupyterlab/coreutils', [2, 5, 5, 2], () =>
                    Promise.all([
                        _.e(8101),
                        _.e(6169),
                        _.e(2798),
                        _.e(5126),
                    ]).then(() => () => _(54705))
                ),
            32798: () =>
                u('default', '@lumino/signaling', [2, 1, 11, 0], () =>
                    Promise.all([
                        _.e(3892),
                        _.e(9116),
                        _.e(8389),
                    ]).then(() => () => _(38389))
                ),
            43892: () =>
                u('default', '@lumino/algorithm', [2, 1, 9, 2], () =>
                    _.e(9943).then(() => () => _(99943))
                ),
            89116: () =>
                u('default', '@lumino/properties', [2, 1, 8, 2], () =>
                    _.e(1555).then(() => () => _(21555))
                ),
        }),
        (d = {
            2798: [32798],
            3892: [43892],
            4281: [54281],
            6169: [26169],
            6801: [96801],
            9116: [89116],
        }),
        (_.f.consumes = (e, t) => {
            _.o(d, e) &&
                d[e].forEach(e => {
                    if (_.o(c, e)) return t.push(c[e]);
                    var r = t => {
                            (c[e] = 0),
                                (_.m[e] = r => {
                                    delete _.c[e], (r.exports = t());
                                });
                        },
                        a = t => {
                            delete c[e],
                                (_.m[e] = r => {
                                    throw (delete _.c[e], t);
                                });
                        };
                    try {
                        var i = h[e]();
                        i.then ? t.push((c[e] = i.then(r).catch(a))) : r(i);
                    } catch (e) {
                        a(e);
                    }
                });
        }),
        (() => {
            var e = { 6662: 1 };
            _.f.i = (t, r) => {
                e[t] ||
                    /^(2798|3892|4281|6169|6801|9116)$/.test(t) ||
                    importScripts(_.p + _.u(t));
            };
            var t = (self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
                    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []),
                r = t.push.bind(t);
            t.push = t => {
                var [a, i, n] = t;
                for (var s in i) _.o(i, s) && (_.m[s] = i[s]);
                for (n && n(_); a.length; ) e[a.pop()] = 1;
                r(t);
            };
        })();
    var y = _(56662);
    (_JUPYTERLAB = void 0 === _JUPYTERLAB ? {} : _JUPYTERLAB).CORE_OUTPUT = y;
})();
//# sourceMappingURL=6662.8cbc307.js.map
