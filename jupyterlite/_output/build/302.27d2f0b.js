'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [302],
    {
        40302: (t, e, a) => {
            a.r(e),
                a.d(e, {
                    BLOCK_SIZE: () => E,
                    BroadcastChannelWrapper: () => k,
                    Contents: () => m,
                    ContentsAPI: () => b,
                    DIR_MODE: () => p,
                    DRIVE_API_PATH: () => y,
                    DRIVE_SEPARATOR: () => _,
                    DriveFS: () => I,
                    DriveFSEmscriptenNodeOps: () => O,
                    DriveFSEmscriptenStreamOps: () => C,
                    FILE: () => c,
                    FILE_MODE: () => u,
                    IBroadcastChannelWrapper: () => l,
                    IContents: () => o,
                    MIME: () => h,
                    SEEK_CUR: () => g,
                    SEEK_END: () => w,
                });
            var n = a(96801),
                s = a(9737),
                i = a.n(s),
                r = a(26169);
            const o = new r.Token('@jupyterlite/contents:IContents');
            var h, c;
            !(function(t) {
                (t.JSON = 'application/json'),
                    (t.PLAIN_TEXT = 'text/plain'),
                    (t.OCTET_STREAM = 'octet/stream');
            })(h || (h = {})),
                (function(t) {
                    const e = JSON.parse(
                        n.PageConfig.getOption('fileTypes') || '{}'
                    );
                    (t.getType = function(t, a = null) {
                        t = t.toLowerCase();
                        for (const a of Object.values(e))
                            for (const e of a.extensions || [])
                                if (
                                    e === t &&
                                    a.mimeTypes &&
                                    a.mimeTypes.length
                                )
                                    return a.mimeTypes[0];
                        return i().getType(t) || a || h.OCTET_STREAM;
                    }),
                        (t.hasFormat = function(t, a) {
                            t = t.toLowerCase();
                            for (const n of Object.values(e))
                                if (n.fileFormat === a)
                                    for (const e of n.extensions || [])
                                        if (e === t) return !0;
                            return !1;
                        });
                })(c || (c = {}));
            const l = new r.Token(
                    '@jupyterlite/contents:IBroadcastChannelWrapper'
                ),
                d = 'JupyterLite Storage';
            class m {
                constructor(t) {
                    (this.reduceBytesToString = (t, e) =>
                        t + String.fromCharCode(e)),
                        (this._serverContents = new Map()),
                        (this._storageName = d),
                        (this._storageDrivers = null),
                        (this._localforage = t.localforage),
                        (this._storageName = t.storageName || d),
                        (this._storageDrivers = t.storageDrivers || null),
                        (this._ready = new r.PromiseDelegate());
                }
                async initialize() {
                    await this.initStorage(), this._ready.resolve(void 0);
                }
                async initStorage() {
                    (this._storage = this.createDefaultStorage()),
                        (this._counters = this.createDefaultCounters()),
                        (this._checkpoints = this.createDefaultCheckpoints());
                }
                get ready() {
                    return this._ready.promise;
                }
                get storage() {
                    return this.ready.then(() => this._storage);
                }
                get counters() {
                    return this.ready.then(() => this._counters);
                }
                get checkpoints() {
                    return this.ready.then(() => this._checkpoints);
                }
                get defaultStorageOptions() {
                    const t =
                        this._storageDrivers && this._storageDrivers.length
                            ? this._storageDrivers
                            : null;
                    return {
                        version: 1,
                        name: this._storageName,
                        ...(t ? { driver: t } : {}),
                    };
                }
                createDefaultStorage() {
                    return this._localforage.createInstance({
                        description: 'Offline Storage for Notebooks and Files',
                        storeName: 'files',
                        ...this.defaultStorageOptions,
                    });
                }
                createDefaultCounters() {
                    return this._localforage.createInstance({
                        description: 'Store the current file suffix counters',
                        storeName: 'counters',
                        ...this.defaultStorageOptions,
                    });
                }
                createDefaultCheckpoints() {
                    return this._localforage.createInstance({
                        description: 'Offline Storage for Checkpoints',
                        storeName: 'checkpoints',
                        ...this.defaultStorageOptions,
                    });
                }
                async newUntitled(t) {
                    var e, a, s;
                    const i =
                            null !== (e = null == t ? void 0 : t.path) &&
                            void 0 !== e
                                ? e
                                : '',
                        r =
                            null !== (a = null == t ? void 0 : t.type) &&
                            void 0 !== a
                                ? a
                                : 'notebook',
                        o = new Date().toISOString();
                    let l = n.PathExt.dirname(i);
                    const d = n.PathExt.basename(i),
                        m = n.PathExt.extname(i),
                        p = await this.get(l);
                    let u,
                        g = '';
                    switch (
                        (i && !m && p
                            ? ((l = `${i}/`), (g = ''))
                            : l && d
                            ? ((l = `${l}/`), (g = d))
                            : ((l = ''), (g = i)),
                        r)
                    ) {
                        case 'directory':
                            (g = `Untitled Folder${(await this._incrementCounter(
                                'directory'
                            )) || ''}`),
                                (u = {
                                    name: g,
                                    path: `${l}${g}`,
                                    last_modified: o,
                                    created: o,
                                    format: 'json',
                                    mimetype: '',
                                    content: null,
                                    size: 0,
                                    writable: !0,
                                    type: 'directory',
                                });
                            break;
                        case 'notebook': {
                            const t = await this._incrementCounter('notebook');
                            (g = g || `Untitled${t || ''}.ipynb`),
                                (u = {
                                    name: g,
                                    path: `${l}${g}`,
                                    last_modified: o,
                                    created: o,
                                    format: 'json',
                                    mimetype: h.JSON,
                                    content: f.EMPTY_NB,
                                    size: JSON.stringify(f.EMPTY_NB).length,
                                    writable: !0,
                                    type: 'notebook',
                                });
                            break;
                        }
                        default: {
                            const e =
                                    null !== (s = null == t ? void 0 : t.ext) &&
                                    void 0 !== s
                                        ? s
                                        : '.txt',
                                a = await this._incrementCounter('file'),
                                n = c.getType(e) || h.OCTET_STREAM;
                            let i;
                            (i =
                                c.hasFormat(e, 'text') ||
                                -1 !== n.indexOf('text')
                                    ? 'text'
                                    : -1 !== e.indexOf('json') ||
                                      -1 !== e.indexOf('ipynb')
                                    ? 'json'
                                    : 'base64'),
                                (g = g || `untitled${a || ''}${e}`),
                                (u = {
                                    name: g,
                                    path: `${l}${g}`,
                                    last_modified: o,
                                    created: o,
                                    format: i,
                                    mimetype: n,
                                    content: '',
                                    size: 0,
                                    writable: !0,
                                    type: 'file',
                                });
                            break;
                        }
                    }
                    const w = u.path;
                    return await (await this.storage).setItem(w, u), u;
                }
                async copy(t, e) {
                    let a = n.PathExt.basename(t);
                    for (
                        e = '' === e ? '' : `${e.slice(1)}/`;
                        await this.get(`${e}${a}`, { content: !0 });

                    ) {
                        const t = n.PathExt.extname(a),
                            e = a.replace(t, '');
                        a = `${e} (copy)${t}`;
                    }
                    const s = `${e}${a}`;
                    let i = await this.get(t, { content: !0 });
                    if (!i) throw Error(`Could not find file with path ${t}`);
                    return (
                        (i = { ...i, name: a, path: s }),
                        await (await this.storage).setItem(s, i),
                        i
                    );
                }
                async get(t, e) {
                    if ('' === (t = decodeURIComponent(t.replace(/^\//, ''))))
                        return await this._getFolder(t);
                    const a = await this.storage,
                        s = await a.getItem(t),
                        i = await this._getServerContents(t, e),
                        r = s || i;
                    if (!r) return null;
                    if (!(null == e ? void 0 : e.content))
                        return { size: 0, ...r, content: null };
                    if ('directory' === r.type) {
                        const e = new Map();
                        await a.iterate((a, n) => {
                            n === `${t}/${a.name}` && e.set(a.name, a);
                        });
                        const s = i
                            ? i.content
                            : Array.from(
                                  (await this._getServerDirectory(t)).values()
                              );
                        for (const t of s) e.has(t.name) || e.set(t.name, t);
                        const o = [...e.values()];
                        return {
                            name: n.PathExt.basename(t),
                            path: t,
                            last_modified: r.last_modified,
                            created: r.created,
                            format: 'json',
                            mimetype: h.JSON,
                            content: o,
                            size: 0,
                            writable: !0,
                            type: 'directory',
                        };
                    }
                    return r;
                }
                async rename(t, e) {
                    const a = decodeURIComponent(t),
                        s = await this.get(a, { content: !0 });
                    if (!s) throw Error(`Could not find file with path ${a}`);
                    const i = new Date().toISOString(),
                        r = n.PathExt.basename(e),
                        o = { ...s, name: r, path: e, last_modified: i },
                        h = await this.storage;
                    if (
                        (await h.setItem(e, o),
                        await h.removeItem(a),
                        await (await this.checkpoints).removeItem(a),
                        'directory' === s.type)
                    ) {
                        let a;
                        for (a of s.content)
                            await this.rename(
                                n.URLExt.join(t, a.name),
                                n.URLExt.join(e, a.name)
                            );
                    }
                    return o;
                }
                async save(t, e = {}) {
                    var a;
                    t = decodeURIComponent(t);
                    const s = n.PathExt.extname(
                        null !== (a = e.name) && void 0 !== a ? a : ''
                    );
                    let i = await this.get(t);
                    if (
                        (i ||
                            (i = await this.newUntitled({
                                path: t,
                                ext: s,
                                type: 'file',
                            })),
                        !i)
                    )
                        return null;
                    const r = new Date().toISOString();
                    if (
                        ((i = { ...i, ...e, last_modified: r }),
                        e.content && 'base64' === e.format)
                    )
                        if ('.ipynb' === s) {
                            const t = this.unescapeContent(e.content),
                                a = t.length;
                            i = {
                                ...i,
                                content: JSON.parse(t),
                                format: 'json',
                                type: 'notebook',
                                size: a,
                            };
                        } else if (c.hasFormat(s, 'json')) {
                            const t = this.unescapeContent(e.content),
                                a = t.length;
                            i = {
                                ...i,
                                content: JSON.parse(t),
                                format: 'json',
                                type: 'file',
                                size: a,
                            };
                        } else if (c.hasFormat(s, 'text')) {
                            const t = this.unescapeContent(e.content),
                                a = t.length;
                            i = {
                                ...i,
                                content: t,
                                format: 'text',
                                type: 'file',
                                size: a,
                            };
                        } else i = { ...i, size: atob(e.content).length };
                    return await (await this.storage).setItem(t, i), i;
                }
                unescapeContent(t) {
                    return decodeURIComponent(escape(atob(t)));
                }
                async delete(t) {
                    const e = `${(t = decodeURIComponent(t))}/`,
                        a = (await (await this.storage).keys()).filter(
                            a => a === t || a.startsWith(e)
                        );
                    await Promise.all(a.map(this.forgetPath, this));
                }
                async forgetPath(t) {
                    await Promise.all([
                        (await this.storage).removeItem(t),
                        (await this.checkpoints).removeItem(t),
                    ]);
                }
                async createCheckpoint(t) {
                    var e;
                    const a = await this.checkpoints;
                    t = decodeURIComponent(t);
                    const n = await this.get(t, { content: !0 });
                    if (!n) throw Error(`Could not find file with path ${t}`);
                    const s = (null !== (e = await a.getItem(t)) && void 0 !== e
                        ? e
                        : []
                    ).filter(Boolean);
                    return (
                        s.push(n),
                        s.length > 5 && s.splice(0, s.length - 5),
                        await a.setItem(t, s),
                        {
                            id: '' + (s.length - 1),
                            last_modified: n.last_modified,
                        }
                    );
                }
                async listCheckpoints(t) {
                    return ((await (await this.checkpoints).getItem(t)) || [])
                        .filter(Boolean)
                        .map(this.normalizeCheckpoint, this);
                }
                normalizeCheckpoint(t, e) {
                    return { id: e.toString(), last_modified: t.last_modified };
                }
                async restoreCheckpoint(t, e) {
                    t = decodeURIComponent(t);
                    const a = ((await (await this.checkpoints).getItem(t)) ||
                        [])[parseInt(e)];
                    await (await this.storage).setItem(t, a);
                }
                async deleteCheckpoint(t, e) {
                    t = decodeURIComponent(t);
                    const a = (await (await this.checkpoints).getItem(t)) || [],
                        n = parseInt(e);
                    a.splice(n, 1),
                        await (await this.checkpoints).setItem(t, a);
                }
                async _getFolder(t) {
                    const e = new Map(),
                        a = await this.storage;
                    await a.iterate((t, a) => {
                        a.includes('/') || e.set(t.path, t);
                    });
                    for (const a of (
                        await this._getServerDirectory(t)
                    ).values())
                        e.has(a.path) || e.set(a.path, a);
                    return t && 0 === e.size
                        ? null
                        : {
                              name: '',
                              path: t,
                              last_modified: new Date(0).toISOString(),
                              created: new Date(0).toISOString(),
                              format: 'json',
                              mimetype: h.JSON,
                              content: Array.from(e.values()),
                              size: 0,
                              writable: !0,
                              type: 'directory',
                          };
                }
                async _getServerContents(t, e) {
                    const a = n.PathExt.basename(t);
                    let s = (
                        await this._getServerDirectory(n.URLExt.join(t, '..'))
                    ).get(a);
                    if (!s) return null;
                    if (
                        ((s = s || {
                            name: a,
                            path: t,
                            last_modified: new Date(0).toISOString(),
                            created: new Date(0).toISOString(),
                            format: 'text',
                            mimetype: h.PLAIN_TEXT,
                            type: 'file',
                            writable: !0,
                            size: 0,
                            content: '',
                        }),
                        null == e ? void 0 : e.content)
                    )
                        if ('directory' === s.type) {
                            const e = await this._getServerDirectory(t);
                            s = { ...s, content: Array.from(e.values()) };
                        } else {
                            const e = n.URLExt.join(
                                    n.PageConfig.getBaseUrl(),
                                    'files',
                                    t
                                ),
                                i = await fetch(e);
                            if (!i.ok) return null;
                            const r =
                                    s.mimetype || i.headers.get('Content-Type'),
                                o = n.PathExt.extname(a);
                            if (
                                'notebook' === s.type ||
                                c.hasFormat(o, 'json') ||
                                -1 !==
                                    (null == r ? void 0 : r.indexOf('json')) ||
                                t.match(/\.(ipynb|[^/]*json[^/]*)$/)
                            ) {
                                const t = await i.text();
                                s = {
                                    ...s,
                                    content: JSON.parse(t),
                                    format: 'json',
                                    mimetype: s.mimetype || h.JSON,
                                    size: t.length,
                                };
                            } else if (
                                c.hasFormat(o, 'text') ||
                                -1 !== r.indexOf('text')
                            ) {
                                const t = await i.text();
                                s = {
                                    ...s,
                                    content: t,
                                    format: 'text',
                                    mimetype: r || h.PLAIN_TEXT,
                                    size: t.length,
                                };
                            } else {
                                const t = await i.arrayBuffer(),
                                    e = new Uint8Array(t);
                                s = {
                                    ...s,
                                    content: btoa(
                                        e.reduce(this.reduceBytesToString, '')
                                    ),
                                    format: 'base64',
                                    mimetype: r || h.OCTET_STREAM,
                                    size: e.length,
                                };
                            }
                        }
                    return s;
                }
                async _getServerDirectory(t) {
                    const e = this._serverContents.get(t) || new Map();
                    if (!this._serverContents.has(t)) {
                        const a = n.URLExt.join(
                            n.PageConfig.getBaseUrl(),
                            'api/contents',
                            t,
                            'all.json'
                        );
                        try {
                            const t = await fetch(a),
                                n = JSON.parse(await t.text());
                            for (const t of n.content) e.set(t.name, t);
                        } catch (t) {
                            console.warn(
                                `don't worry, about ${t}... nothing's broken. If there had been a\n          file at ${a}, you might see some more files.`
                            );
                        }
                        this._serverContents.set(t, e);
                    }
                    return e;
                }
                async _incrementCounter(t) {
                    var e;
                    const a = await this.counters,
                        n =
                            (null !== (e = await a.getItem(t)) && void 0 !== e
                                ? e
                                : -1) + 1;
                    return await a.setItem(t, n), n;
                }
            }
            var f;
            !(function(t) {
                t.EMPTY_NB = {
                    metadata: { orig_nbformat: 4 },
                    nbformat_minor: 4,
                    nbformat: 4,
                    cells: [],
                };
            })(f || (f = {}));
            const p = 16895,
                u = 33206,
                g = 1,
                w = 2,
                _ = ':',
                y = '/api/drive.v1',
                E = 4096,
                S = new TextEncoder(),
                P = new TextDecoder('utf-8'),
                v = {
                    0: !1,
                    1: !0,
                    2: !0,
                    64: !0,
                    65: !0,
                    66: !0,
                    129: !0,
                    193: !0,
                    514: !0,
                    577: !0,
                    578: !0,
                    705: !0,
                    706: !0,
                    1024: !0,
                    1025: !0,
                    1026: !0,
                    1089: !0,
                    1090: !0,
                    1153: !0,
                    1154: !0,
                    1217: !0,
                    1218: !0,
                    4096: !0,
                    4098: !0,
                };
            class C {
                constructor(t) {
                    this.fs = t;
                }
                open(t) {
                    const e = this.fs.realPath(t.node);
                    this.fs.FS.isFile(t.node.mode) &&
                        (t.file = this.fs.API.get(e));
                }
                close(t) {
                    if (!this.fs.FS.isFile(t.node.mode) || !t.file) return;
                    const e = this.fs.realPath(t.node),
                        a = t.flags;
                    let n = 'string' == typeof a ? parseInt(a, 10) : a;
                    n &= 8191;
                    let s = !0;
                    n in v && (s = v[n]),
                        s && this.fs.API.put(e, t.file),
                        (t.file = void 0);
                }
                read(t, e, a, n, s) {
                    if (
                        n <= 0 ||
                        void 0 === t.file ||
                        s >= (t.file.data.length || 0)
                    )
                        return 0;
                    const i = Math.min(t.file.data.length - s, n);
                    return e.set(t.file.data.subarray(s, s + i), a), i;
                }
                write(t, e, a, n, s) {
                    var i;
                    if (n <= 0 || void 0 === t.file) return 0;
                    if (
                        ((t.node.timestamp = Date.now()),
                        s + n >
                            ((null === (i = t.file) || void 0 === i
                                ? void 0
                                : i.data.length) || 0))
                    ) {
                        const e = t.file.data ? t.file.data : new Uint8Array();
                        (t.file.data = new Uint8Array(s + n)),
                            t.file.data.set(e);
                    }
                    return t.file.data.set(e.subarray(a, a + n), s), n;
                }
                llseek(t, e, a) {
                    let n = e;
                    if (a === g) n += t.position;
                    else if (a === w && this.fs.FS.isFile(t.node.mode)) {
                        if (void 0 === t.file)
                            throw new this.fs.FS.ErrnoError(
                                this.fs.ERRNO_CODES.EPERM
                            );
                        n += t.file.data.length;
                    }
                    if (n < 0)
                        throw new this.fs.FS.ErrnoError(
                            this.fs.ERRNO_CODES.EINVAL
                        );
                    return n;
                }
            }
            class O {
                constructor(t) {
                    this.fs = t;
                }
                getattr(t) {
                    return {
                        ...this.fs.API.getattr(this.fs.realPath(t)),
                        mode: t.mode,
                        ino: t.id,
                    };
                }
                setattr(t, e) {
                    for (const [a, n] of Object.entries(e))
                        switch (a) {
                            case 'mode':
                                t.mode = n;
                                break;
                            case 'timestamp':
                                t.timestamp = n;
                                break;
                            default:
                                console.warn(
                                    'setattr',
                                    a,
                                    'of',
                                    n,
                                    'on',
                                    t,
                                    'not yet implemented'
                                );
                        }
                }
                lookup(t, e) {
                    const a = this.fs.PATH.join2(this.fs.realPath(t), e),
                        n = this.fs.API.lookup(a);
                    if (!n.ok)
                        throw this.fs.FS.genericErrors[
                            this.fs.ERRNO_CODES.ENOENT
                        ];
                    return this.fs.createNode(t, e, n.mode, 0);
                }
                mknod(t, e, a, n) {
                    const s = this.fs.PATH.join2(this.fs.realPath(t), e);
                    return (
                        this.fs.API.mknod(s, a), this.fs.createNode(t, e, a, n)
                    );
                }
                rename(t, e, a) {
                    this.fs.API.rename(
                        t.parent
                            ? this.fs.PATH.join2(
                                  this.fs.realPath(t.parent),
                                  t.name
                              )
                            : t.name,
                        this.fs.PATH.join2(this.fs.realPath(e), a)
                    ),
                        (t.name = a),
                        (t.parent = e);
                }
                unlink(t, e) {
                    this.fs.API.rmdir(
                        this.fs.PATH.join2(this.fs.realPath(t), e)
                    );
                }
                rmdir(t, e) {
                    this.fs.API.rmdir(
                        this.fs.PATH.join2(this.fs.realPath(t), e)
                    );
                }
                readdir(t) {
                    return this.fs.API.readdir(this.fs.realPath(t));
                }
                symlink(t, e, a) {
                    throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM);
                }
                readlink(t) {
                    throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM);
                }
            }
            class b {
                constructor(t, e, a, n, s) {
                    (this._baseUrl = t),
                        (this._driveName = e),
                        (this._mountpoint = a),
                        (this.FS = n),
                        (this.ERRNO_CODES = s);
                }
                request(t) {
                    const e = new XMLHttpRequest();
                    e.open('POST', encodeURI(this.endpoint), !1);
                    try {
                        e.send(JSON.stringify(t));
                    } catch (t) {
                        console.error(t);
                    }
                    if (e.status >= 400)
                        throw new this.FS.ErrnoError(this.ERRNO_CODES.EINVAL);
                    return JSON.parse(e.responseText);
                }
                lookup(t) {
                    return this.request({
                        method: 'lookup',
                        path: this.normalizePath(t),
                    });
                }
                getmode(t) {
                    return Number.parseInt(
                        this.request({
                            method: 'getmode',
                            path: this.normalizePath(t),
                        })
                    );
                }
                mknod(t, e) {
                    return this.request({
                        method: 'mknod',
                        path: this.normalizePath(t),
                        data: { mode: e },
                    });
                }
                rename(t, e) {
                    return this.request({
                        method: 'rename',
                        path: this.normalizePath(t),
                        data: { newPath: this.normalizePath(e) },
                    });
                }
                readdir(t) {
                    const e = this.request({
                        method: 'readdir',
                        path: this.normalizePath(t),
                    });
                    return e.push('.'), e.push('..'), e;
                }
                rmdir(t) {
                    return this.request({
                        method: 'rmdir',
                        path: this.normalizePath(t),
                    });
                }
                get(t) {
                    const e = this.request({
                            method: 'get',
                            path: this.normalizePath(t),
                        }),
                        a = e.content,
                        n = e.format;
                    switch (n) {
                        case 'json':
                        case 'text':
                            return { data: S.encode(a), format: n };
                        case 'base64': {
                            const t = atob(a),
                                e = t.length,
                                s = new Uint8Array(e);
                            for (let a = 0; a < e; a++) s[a] = t.charCodeAt(a);
                            return { data: s, format: n };
                        }
                        default:
                            throw new this.FS.ErrnoError(
                                this.ERRNO_CODES.ENOENT
                            );
                    }
                }
                put(t, e) {
                    switch (e.format) {
                        case 'json':
                        case 'text':
                            return this.request({
                                method: 'put',
                                path: this.normalizePath(t),
                                data: {
                                    format: e.format,
                                    data: P.decode(e.data),
                                },
                            });
                        case 'base64': {
                            let a = '';
                            for (let t = 0; t < e.data.byteLength; t++)
                                a += String.fromCharCode(e.data[t]);
                            return this.request({
                                method: 'put',
                                path: this.normalizePath(t),
                                data: { format: e.format, data: btoa(a) },
                            });
                        }
                    }
                }
                getattr(t) {
                    const e = this.request({
                        method: 'getattr',
                        path: this.normalizePath(t),
                    });
                    return (
                        (e.atime = new Date(e.atime)),
                        (e.mtime = new Date(e.mtime)),
                        (e.ctime = new Date(e.ctime)),
                        (e.size = e.size || 0),
                        e
                    );
                }
                normalizePath(t) {
                    return (
                        t.startsWith(this._mountpoint) &&
                            (t = t.slice(this._mountpoint.length)),
                        this._driveName && (t = `${this._driveName}${_}${t}`),
                        t
                    );
                }
                get endpoint() {
                    return `${this._baseUrl}api/drive`;
                }
            }
            class I {
                constructor(t) {
                    (this.FS = t.FS),
                        (this.PATH = t.PATH),
                        (this.ERRNO_CODES = t.ERRNO_CODES),
                        (this.API = new b(
                            t.baseUrl,
                            t.driveName,
                            t.mountpoint,
                            this.FS,
                            this.ERRNO_CODES
                        )),
                        (this.driveName = t.driveName),
                        (this.node_ops = new O(this)),
                        (this.stream_ops = new C(this));
                }
                mount(t) {
                    return this.createNode(null, t.mountpoint, 511 | p, 0);
                }
                createNode(t, e, a, n) {
                    const s = this.FS;
                    if (!s.isDir(a) && !s.isFile(a))
                        throw new s.ErrnoError(this.ERRNO_CODES.EINVAL);
                    const i = s.createNode(t, e, a, n);
                    return (
                        (i.node_ops = this.node_ops),
                        (i.stream_ops = this.stream_ops),
                        i
                    );
                }
                getMode(t) {
                    return this.API.getmode(t);
                }
                realPath(t) {
                    const e = [];
                    let a = t;
                    for (e.push(a.name); a.parent !== a; )
                        (a = a.parent), e.push(a.name);
                    return e.reverse(), this.PATH.join.apply(null, e);
                }
            }
            class k {
                constructor(t) {
                    (this.isDisposed = !1),
                        (this._onMessage = async t => {
                            if (!this._channel) return;
                            const { _contents: e } = this,
                                a = t.data,
                                { path: s } = a;
                            let i,
                                r = null;
                            switch (a.method) {
                                case 'readdir':
                                    (i = await e.get(s, { content: !0 })),
                                        (r = []),
                                        'directory' === i.type &&
                                            i.content &&
                                            (r = i.content.map(t => t.name));
                                    break;
                                case 'rmdir':
                                    await e.delete(s);
                                    break;
                                case 'rename':
                                    await e.rename(s, a.data.newPath);
                                    break;
                                case 'getmode':
                                    (i = await e.get(s)),
                                        (r = 'directory' === i.type ? p : u);
                                    break;
                                case 'lookup':
                                    try {
                                        (i = await e.get(s)),
                                            (r = {
                                                ok: !0,
                                                mode:
                                                    'directory' === i.type
                                                        ? p
                                                        : u,
                                            });
                                    } catch (t) {
                                        r = { ok: !1 };
                                    }
                                    break;
                                case 'mknod':
                                    (i = await e.newUntitled({
                                        path: n.PathExt.dirname(s),
                                        type:
                                            Number.parseInt(a.data.mode) === p
                                                ? 'directory'
                                                : 'file',
                                        ext: n.PathExt.extname(s),
                                    })),
                                        await e.rename(i.path, s);
                                    break;
                                case 'getattr':
                                    (i = await e.get(s)),
                                        (r = {
                                            dev: 1,
                                            nlink: 1,
                                            uid: 0,
                                            gid: 0,
                                            rdev: 0,
                                            size: i.size || 0,
                                            blksize: E,
                                            blocks: Math.ceil(i.size || 0 / E),
                                            atime: i.last_modified,
                                            mtime: i.last_modified,
                                            ctime: i.created,
                                            timestamp: 0,
                                        });
                                    break;
                                case 'get':
                                    if (
                                        ((i = await e.get(s, { content: !0 })),
                                        'directory' === i.type)
                                    )
                                        break;
                                    r = {
                                        content:
                                            'json' === i.format
                                                ? JSON.stringify(i.content)
                                                : i.content,
                                        format: i.format,
                                    };
                                    break;
                                case 'put':
                                    await e.save(s, {
                                        content:
                                            'json' === a.data.format
                                                ? JSON.parse(a.data.data)
                                                : a.data.data,
                                        type: 'file',
                                        format: a.data.format,
                                    });
                                    break;
                                default:
                                    r = null;
                            }
                            this._channel.postMessage(r);
                        }),
                        (this._channel = null),
                        (this._enabled = !1),
                        (this._contents = t.contents);
                }
                get enabled() {
                    return this._enabled;
                }
                enable() {
                    this._channel
                        ? console.warn(
                              'BroadcastChannel already created and enabled'
                          )
                        : ((this._channel = new BroadcastChannel(y)),
                          this._channel.addEventListener(
                              'message',
                              this._onMessage
                          ),
                          (this._enabled = !0));
                }
                disable() {
                    this._channel &&
                        (this._channel.removeEventListener(
                            'message',
                            this._onMessage
                        ),
                        (this._channel = null)),
                        (this._enabled = !1);
                }
                dispose() {
                    this.isDisposed || (this.disable(), (this.isDisposed = !0));
                }
            }
        },
    },
]);
//# sourceMappingURL=302.27d2f0b.js.map
