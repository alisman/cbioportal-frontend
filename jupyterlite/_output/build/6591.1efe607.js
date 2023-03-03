(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [6591],
    {
        5179: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.BaseManager = void 0);
            const n = s(32798),
                i = s(59566);
            t.BaseManager = class {
                constructor(e) {
                    var t;
                    (this._isDisposed = !1),
                        (this._disposed = new n.Signal(this)),
                        (this.serverSettings =
                            null !== (t = e.serverSettings) && void 0 !== t
                                ? t
                                : i.ServerConnection.makeSettings());
                }
                get disposed() {
                    return this._disposed;
                }
                get isDisposed() {
                    return this._isDisposed;
                }
                dispose() {
                    this.isDisposed ||
                        (this._disposed.emit(void 0), n.Signal.clearData(this));
                }
            };
        },
        75334: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.BuildManager = void 0);
            const n = s(96801),
                i = s(59566);
            t.BuildManager = class {
                constructor(e = {}) {
                    var t;
                    (this._url = ''),
                        (this.serverSettings =
                            null !== (t = e.serverSettings) && void 0 !== t
                                ? t
                                : i.ServerConnection.makeSettings());
                    const { baseUrl: s, appUrl: r } = this.serverSettings;
                    this._url = n.URLExt.join(s, r, 'api/build');
                }
                get isAvailable() {
                    return (
                        'true' ===
                        n.PageConfig.getOption('buildAvailable').toLowerCase()
                    );
                }
                get shouldCheck() {
                    return (
                        'true' ===
                        n.PageConfig.getOption('buildCheck').toLowerCase()
                    );
                }
                getStatus() {
                    const { _url: e, serverSettings: t } = this;
                    return i.ServerConnection.makeRequest(e, {}, t)
                        .then(e => {
                            if (200 !== e.status)
                                throw new i.ServerConnection.ResponseError(e);
                            return e.json();
                        })
                        .then(e => {
                            if ('string' != typeof e.status)
                                throw new Error('Invalid data');
                            if ('string' != typeof e.message)
                                throw new Error('Invalid data');
                            return e;
                        });
                }
                build() {
                    const { _url: e, serverSettings: t } = this;
                    return i.ServerConnection.makeRequest(
                        e,
                        { method: 'POST' },
                        t
                    ).then(e => {
                        if (400 === e.status)
                            throw new i.ServerConnection.ResponseError(
                                e,
                                'Build aborted'
                            );
                        if (200 !== e.status) {
                            const t = `Build failed with ${e.status}.\n\n        If you are experiencing the build failure after installing an extension (or trying to include previously installed extension after updating JupyterLab) please check the extension repository for new installation instructions as many extensions migrated to the prebuilt extensions system which no longer requires rebuilding JupyterLab (but uses a different installation procedure, typically involving a package manager such as 'pip' or 'conda').\n\n        If you specifically intended to install a source extension, please run 'jupyter lab build' on the server for full output.`;
                            throw new i.ServerConnection.ResponseError(e, t);
                        }
                    });
                }
                cancel() {
                    const { _url: e, serverSettings: t } = this;
                    return i.ServerConnection.makeRequest(
                        e,
                        { method: 'DELETE' },
                        t
                    ).then(e => {
                        if (204 !== e.status)
                            throw new i.ServerConnection.ResponseError(e);
                    });
                }
            };
        },
        32756: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.ConfigWithDefaults = t.ConfigSection = void 0);
            const n = s(96801),
                i = s(76591);
            (t.ConfigSection || (t.ConfigSection = {})).create = function(e) {
                const t = new r(e);
                return t.load().then(() => t);
            };
            class r {
                constructor(e) {
                    var t;
                    this._url = 'unknown';
                    const s = (this.serverSettings =
                        null !== (t = e.serverSettings) && void 0 !== t
                            ? t
                            : i.ServerConnection.makeSettings());
                    this._url = n.URLExt.join(
                        s.baseUrl,
                        'api/config',
                        encodeURIComponent(e.name)
                    );
                }
                get data() {
                    return this._data;
                }
                async load() {
                    const e = await i.ServerConnection.makeRequest(
                        this._url,
                        {},
                        this.serverSettings
                    );
                    if (200 !== e.status)
                        throw await i.ServerConnection.ResponseError.create(e);
                    this._data = await e.json();
                }
                async update(e) {
                    this._data = Object.assign(
                        Object.assign({}, this._data),
                        e
                    );
                    const t = { method: 'PATCH', body: JSON.stringify(e) },
                        s = await i.ServerConnection.makeRequest(
                            this._url,
                            t,
                            this.serverSettings
                        );
                    if (200 !== s.status)
                        throw await i.ServerConnection.ResponseError.create(s);
                    return (this._data = await s.json()), this._data;
                }
            }
            t.ConfigWithDefaults = class {
                constructor(e) {
                    var t, s;
                    (this._className = ''),
                        (this._section = e.section),
                        (this._defaults =
                            null !== (t = e.defaults) && void 0 !== t ? t : {}),
                        (this._className =
                            null !== (s = e.className) && void 0 !== s
                                ? s
                                : '');
                }
                get(e) {
                    const t = this._classData();
                    return e in t ? t[e] : this._defaults[e];
                }
                set(e, t) {
                    const s = {};
                    if (((s[e] = t), this._className)) {
                        const e = {};
                        return (
                            (e[this._className] = s), this._section.update(e)
                        );
                    }
                    return this._section.update(s);
                }
                _classData() {
                    const e = this._section.data;
                    return this._className && this._className in e
                        ? e[this._className]
                        : e;
                }
            };
        },
        4851: function(e, t, s) {
            'use strict';
            var n =
                    (this && this.__createBinding) ||
                    (Object.create
                        ? function(e, t, s, n) {
                              void 0 === n && (n = s),
                                  Object.defineProperty(e, n, {
                                      enumerable: !0,
                                      get: function() {
                                          return t[s];
                                      },
                                  });
                          }
                        : function(e, t, s, n) {
                              void 0 === n && (n = s), (e[n] = t[s]);
                          }),
                i =
                    (this && this.__setModuleDefault) ||
                    (Object.create
                        ? function(e, t) {
                              Object.defineProperty(e, 'default', {
                                  enumerable: !0,
                                  value: t,
                              });
                          }
                        : function(e, t) {
                              e.default = t;
                          }),
                r =
                    (this && this.__importStar) ||
                    function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var s in e)
                                'default' !== s &&
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        s
                                    ) &&
                                    n(t, e, s);
                        return i(t, e), t;
                    };
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.Drive = t.ContentsManager = t.Contents = void 0);
            const o = s(96801),
                a = s(43892),
                c = s(32798),
                l = s(76591),
                h = r(s(8618));
            var d, u;
            ((u =
                t.Contents ||
                (t.Contents = {})).validateContentsModel = function(e) {
                h.validateContentsModel(e);
            }),
                (u.validateCheckpointModel = function(e) {
                    h.validateCheckpointModel(e);
                }),
                (t.ContentsManager = class {
                    constructor(e = {}) {
                        var t, s;
                        (this._isDisposed = !1),
                            (this._additionalDrives = new Map()),
                            (this._fileChanged = new c.Signal(this));
                        const n = (this.serverSettings =
                            null !== (t = e.serverSettings) && void 0 !== t
                                ? t
                                : l.ServerConnection.makeSettings());
                        (this._defaultDrive =
                            null !== (s = e.defaultDrive) && void 0 !== s
                                ? s
                                : new _({ serverSettings: n })),
                            this._defaultDrive.fileChanged.connect(
                                this._onFileChanged,
                                this
                            );
                    }
                    get fileChanged() {
                        return this._fileChanged;
                    }
                    get isDisposed() {
                        return this._isDisposed;
                    }
                    dispose() {
                        this.isDisposed ||
                            ((this._isDisposed = !0), c.Signal.clearData(this));
                    }
                    addDrive(e) {
                        this._additionalDrives.set(e.name, e),
                            e.fileChanged.connect(this._onFileChanged, this);
                    }
                    getModelDBFactory(e) {
                        var t;
                        const [s] = this._driveForPath(e);
                        return null !==
                            (t = null == s ? void 0 : s.modelDBFactory) &&
                            void 0 !== t
                            ? t
                            : null;
                    }
                    localPath(e) {
                        const t = e.split('/'),
                            s = t[0].split(':');
                        return 1 !== s.length &&
                            this._additionalDrives.has(s[0])
                            ? o.PathExt.join(
                                  s.slice(1).join(':'),
                                  ...t.slice(1)
                              )
                            : o.PathExt.removeSlash(e);
                    }
                    normalize(e) {
                        const t = e.split(':');
                        return 1 === t.length
                            ? o.PathExt.normalize(e)
                            : `${t[0]}:${o.PathExt.normalize(
                                  t.slice(1).join(':')
                              )}`;
                    }
                    resolvePath(e, t) {
                        const s = this.driveName(e),
                            n = this.localPath(e),
                            i = o.PathExt.resolve('/', n, t);
                        return s ? `${s}:${i}` : i;
                    }
                    driveName(e) {
                        const t = e.split('/')[0].split(':');
                        return 1 === t.length
                            ? ''
                            : this._additionalDrives.has(t[0])
                            ? t[0]
                            : '';
                    }
                    get(e, t) {
                        const [s, n] = this._driveForPath(e);
                        return s.get(n, t).then(e => {
                            const t = [];
                            return 'directory' === e.type && e.content
                                ? (a.each(e.content, e => {
                                      t.push(
                                          Object.assign(Object.assign({}, e), {
                                              path: this._toGlobalPath(
                                                  s,
                                                  e.path
                                              ),
                                          })
                                      );
                                  }),
                                  Object.assign(Object.assign({}, e), {
                                      path: this._toGlobalPath(s, n),
                                      content: t,
                                  }))
                                : Object.assign(Object.assign({}, e), {
                                      path: this._toGlobalPath(s, n),
                                  });
                        });
                    }
                    getDownloadUrl(e) {
                        const [t, s] = this._driveForPath(e);
                        return t.getDownloadUrl(s);
                    }
                    newUntitled(e = {}) {
                        if (e.path) {
                            const t = this.normalize(e.path),
                                [s, n] = this._driveForPath(t);
                            return s
                                .newUntitled(
                                    Object.assign(Object.assign({}, e), {
                                        path: n,
                                    })
                                )
                                .then(e =>
                                    Object.assign(Object.assign({}, e), {
                                        path: o.PathExt.join(t, e.name),
                                    })
                                );
                        }
                        return this._defaultDrive.newUntitled(e);
                    }
                    delete(e) {
                        const [t, s] = this._driveForPath(e);
                        return t.delete(s);
                    }
                    rename(e, t) {
                        const [s, n] = this._driveForPath(e),
                            [i, r] = this._driveForPath(t);
                        if (s !== i)
                            throw Error(
                                'ContentsManager: renaming files must occur within a Drive'
                            );
                        return s
                            .rename(n, r)
                            .then(e =>
                                Object.assign(Object.assign({}, e), {
                                    path: this._toGlobalPath(s, r),
                                })
                            );
                    }
                    save(e, t = {}) {
                        const s = this.normalize(e),
                            [n, i] = this._driveForPath(e);
                        return n
                            .save(
                                i,
                                Object.assign(Object.assign({}, t), { path: i })
                            )
                            .then(e =>
                                Object.assign(Object.assign({}, e), { path: s })
                            );
                    }
                    copy(e, t) {
                        const [s, n] = this._driveForPath(e),
                            [i, r] = this._driveForPath(t);
                        if (s === i)
                            return s
                                .copy(n, r)
                                .then(e =>
                                    Object.assign(Object.assign({}, e), {
                                        path: this._toGlobalPath(s, e.path),
                                    })
                                );
                        throw Error(
                            'Copying files between drives is not currently implemented'
                        );
                    }
                    createCheckpoint(e) {
                        const [t, s] = this._driveForPath(e);
                        return t.createCheckpoint(s);
                    }
                    listCheckpoints(e) {
                        const [t, s] = this._driveForPath(e);
                        return t.listCheckpoints(s);
                    }
                    restoreCheckpoint(e, t) {
                        const [s, n] = this._driveForPath(e);
                        return s.restoreCheckpoint(n, t);
                    }
                    deleteCheckpoint(e, t) {
                        const [s, n] = this._driveForPath(e);
                        return s.deleteCheckpoint(n, t);
                    }
                    _toGlobalPath(e, t) {
                        return e === this._defaultDrive
                            ? o.PathExt.removeSlash(t)
                            : `${e.name}:${o.PathExt.removeSlash(t)}`;
                    }
                    _driveForPath(e) {
                        const t = this.driveName(e),
                            s = this.localPath(e);
                        return t
                            ? [this._additionalDrives.get(t), s]
                            : [this._defaultDrive, s];
                    }
                    _onFileChanged(e, t) {
                        var s, n;
                        if (e === this._defaultDrive) this._fileChanged.emit(t);
                        else {
                            let i = null,
                                r = null;
                            (null === (s = t.newValue) || void 0 === s
                                ? void 0
                                : s.path) &&
                                (i = Object.assign(
                                    Object.assign({}, t.newValue),
                                    {
                                        path: this._toGlobalPath(
                                            e,
                                            t.newValue.path
                                        ),
                                    }
                                )),
                                (null === (n = t.oldValue) || void 0 === n
                                    ? void 0
                                    : n.path) &&
                                    (r = Object.assign(
                                        Object.assign({}, t.oldValue),
                                        {
                                            path: this._toGlobalPath(
                                                e,
                                                t.oldValue.path
                                            ),
                                        }
                                    )),
                                this._fileChanged.emit({
                                    type: t.type,
                                    newValue: i,
                                    oldValue: r,
                                });
                        }
                    }
                });
            class _ {
                constructor(e = {}) {
                    var t, s, n;
                    (this._isDisposed = !1),
                        (this._fileChanged = new c.Signal(this)),
                        (this.name =
                            null !== (t = e.name) && void 0 !== t
                                ? t
                                : 'Default'),
                        (this._apiEndpoint =
                            null !== (s = e.apiEndpoint) && void 0 !== s
                                ? s
                                : 'api/contents'),
                        (this.serverSettings =
                            null !== (n = e.serverSettings) && void 0 !== n
                                ? n
                                : l.ServerConnection.makeSettings());
                }
                get fileChanged() {
                    return this._fileChanged;
                }
                get isDisposed() {
                    return this._isDisposed;
                }
                dispose() {
                    this.isDisposed ||
                        ((this._isDisposed = !0), c.Signal.clearData(this));
                }
                async get(e, t) {
                    let s = this._getUrl(e);
                    if (t) {
                        'notebook' === t.type && delete t.format;
                        const e = t.content ? '1' : '0',
                            n = Object.assign(Object.assign({}, t), {
                                content: e,
                            });
                        s += o.URLExt.objectToQueryString(n);
                    }
                    const n = this.serverSettings,
                        i = await l.ServerConnection.makeRequest(s, {}, n);
                    if (200 !== i.status)
                        throw await l.ServerConnection.ResponseError.create(i);
                    const r = await i.json();
                    return h.validateContentsModel(r), r;
                }
                getDownloadUrl(e) {
                    const t = this.serverSettings.baseUrl;
                    let s = o.URLExt.join(t, 'files', o.URLExt.encodeParts(e));
                    const n = document.cookie.match('\\b_xsrf=([^;]*)\\b');
                    if (n) {
                        const e = new URL(s);
                        e.searchParams.append('_xsrf', n[1]),
                            (s = e.toString());
                    }
                    return Promise.resolve(s);
                }
                async newUntitled(e = {}) {
                    var t;
                    let s = '{}';
                    e &&
                        (e.ext && (e.ext = d.normalizeExtension(e.ext)),
                        (s = JSON.stringify(e)));
                    const n = this.serverSettings,
                        i = this._getUrl(
                            null !== (t = e.path) && void 0 !== t ? t : ''
                        ),
                        r = { method: 'POST', body: s },
                        o = await l.ServerConnection.makeRequest(i, r, n);
                    if (201 !== o.status)
                        throw await l.ServerConnection.ResponseError.create(o);
                    const a = await o.json();
                    return (
                        h.validateContentsModel(a),
                        this._fileChanged.emit({
                            type: 'new',
                            oldValue: null,
                            newValue: a,
                        }),
                        a
                    );
                }
                async delete(e) {
                    const t = this._getUrl(e),
                        s = this.serverSettings,
                        n = await l.ServerConnection.makeRequest(
                            t,
                            { method: 'DELETE' },
                            s
                        );
                    if (204 !== n.status)
                        throw await l.ServerConnection.ResponseError.create(n);
                    this._fileChanged.emit({
                        type: 'delete',
                        oldValue: { path: e },
                        newValue: null,
                    });
                }
                async rename(e, t) {
                    const s = this.serverSettings,
                        n = this._getUrl(e),
                        i = {
                            method: 'PATCH',
                            body: JSON.stringify({ path: t }),
                        },
                        r = await l.ServerConnection.makeRequest(n, i, s);
                    if (200 !== r.status)
                        throw await l.ServerConnection.ResponseError.create(r);
                    const o = await r.json();
                    return (
                        h.validateContentsModel(o),
                        this._fileChanged.emit({
                            type: 'rename',
                            oldValue: { path: e },
                            newValue: o,
                        }),
                        o
                    );
                }
                async save(e, t = {}) {
                    const s = this.serverSettings,
                        n = this._getUrl(e),
                        i = { method: 'PUT', body: JSON.stringify(t) },
                        r = await l.ServerConnection.makeRequest(n, i, s);
                    if (200 !== r.status && 201 !== r.status)
                        throw await l.ServerConnection.ResponseError.create(r);
                    const o = await r.json();
                    return (
                        h.validateContentsModel(o),
                        this._fileChanged.emit({
                            type: 'save',
                            oldValue: null,
                            newValue: o,
                        }),
                        o
                    );
                }
                async copy(e, t) {
                    const s = this.serverSettings,
                        n = this._getUrl(t),
                        i = {
                            method: 'POST',
                            body: JSON.stringify({ copy_from: e }),
                        },
                        r = await l.ServerConnection.makeRequest(n, i, s);
                    if (201 !== r.status)
                        throw await l.ServerConnection.ResponseError.create(r);
                    const o = await r.json();
                    return (
                        h.validateContentsModel(o),
                        this._fileChanged.emit({
                            type: 'new',
                            oldValue: null,
                            newValue: o,
                        }),
                        o
                    );
                }
                async createCheckpoint(e) {
                    const t = this._getUrl(e, 'checkpoints'),
                        s = await l.ServerConnection.makeRequest(
                            t,
                            { method: 'POST' },
                            this.serverSettings
                        );
                    if (201 !== s.status)
                        throw await l.ServerConnection.ResponseError.create(s);
                    const n = await s.json();
                    return h.validateCheckpointModel(n), n;
                }
                async listCheckpoints(e) {
                    const t = this._getUrl(e, 'checkpoints'),
                        s = await l.ServerConnection.makeRequest(
                            t,
                            {},
                            this.serverSettings
                        );
                    if (200 !== s.status)
                        throw await l.ServerConnection.ResponseError.create(s);
                    const n = await s.json();
                    if (!Array.isArray(n))
                        throw new Error('Invalid Checkpoint list');
                    for (let e = 0; e < n.length; e++)
                        h.validateCheckpointModel(n[e]);
                    return n;
                }
                async restoreCheckpoint(e, t) {
                    const s = this._getUrl(e, 'checkpoints', t),
                        n = await l.ServerConnection.makeRequest(
                            s,
                            { method: 'POST' },
                            this.serverSettings
                        );
                    if (204 !== n.status)
                        throw await l.ServerConnection.ResponseError.create(n);
                }
                async deleteCheckpoint(e, t) {
                    const s = this._getUrl(e, 'checkpoints', t),
                        n = await l.ServerConnection.makeRequest(
                            s,
                            { method: 'DELETE' },
                            this.serverSettings
                        );
                    if (204 !== n.status)
                        throw await l.ServerConnection.ResponseError.create(n);
                }
                _getUrl(...e) {
                    const t = e.map(e => o.URLExt.encodeParts(e)),
                        s = this.serverSettings.baseUrl;
                    return o.URLExt.join(s, this._apiEndpoint, ...t);
                }
            }
            (t.Drive = _),
                (function(e) {
                    e.normalizeExtension = function(e) {
                        return (
                            e.length > 0 &&
                                0 !== e.indexOf('.') &&
                                (e = `.${e}`),
                            e
                        );
                    };
                })(d || (d = {}));
        },
        8618: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.validateCheckpointModel = t.validateContentsModel = void 0);
            const n = s(74284);
            (t.validateContentsModel = function(e) {
                n.validateProperty(e, 'name', 'string'),
                    n.validateProperty(e, 'path', 'string'),
                    n.validateProperty(e, 'type', 'string'),
                    n.validateProperty(e, 'created', 'string'),
                    n.validateProperty(e, 'last_modified', 'string'),
                    n.validateProperty(e, 'mimetype', 'object'),
                    n.validateProperty(e, 'content', 'object'),
                    n.validateProperty(e, 'format', 'object');
            }),
                (t.validateCheckpointModel = function(e) {
                    n.validateProperty(e, 'id', 'string'),
                        n.validateProperty(e, 'last_modified', 'string');
                });
        },
        76591: function(e, t, s) {
            'use strict';
            var n =
                    (this && this.__createBinding) ||
                    (Object.create
                        ? function(e, t, s, n) {
                              void 0 === n && (n = s),
                                  Object.defineProperty(e, n, {
                                      enumerable: !0,
                                      get: function() {
                                          return t[s];
                                      },
                                  });
                          }
                        : function(e, t, s, n) {
                              void 0 === n && (n = s), (e[n] = t[s]);
                          }),
                i =
                    (this && this.__exportStar) ||
                    function(e, t) {
                        for (var s in e)
                            'default' === s ||
                                Object.prototype.hasOwnProperty.call(t, s) ||
                                n(t, e, s);
                    };
            Object.defineProperty(t, '__esModule', { value: !0 }),
                i(s(32756), t),
                i(s(4851), t),
                i(s(61613), t),
                i(s(21941), t),
                i(s(40944), t),
                i(s(59566), t),
                i(s(38542), t),
                i(s(36090), t),
                i(s(94629), t),
                i(s(3713), t),
                i(s(37017), t);
        },
        59917: function(e, t, s) {
            'use strict';
            var n =
                    (this && this.__createBinding) ||
                    (Object.create
                        ? function(e, t, s, n) {
                              void 0 === n && (n = s),
                                  Object.defineProperty(e, n, {
                                      enumerable: !0,
                                      get: function() {
                                          return t[s];
                                      },
                                  });
                          }
                        : function(e, t, s, n) {
                              void 0 === n && (n = s), (e[n] = t[s]);
                          }),
                i =
                    (this && this.__setModuleDefault) ||
                    (Object.create
                        ? function(e, t) {
                              Object.defineProperty(e, 'default', {
                                  enumerable: !0,
                                  value: t,
                              });
                          }
                        : function(e, t) {
                              e.default = t;
                          }),
                r =
                    (this && this.__importStar) ||
                    function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var s in e)
                                'default' !== s &&
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        s
                                    ) &&
                                    n(t, e, s);
                        return i(t, e), t;
                    };
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.CommHandler = void 0);
            const o = s(21743),
                a = r(s(60433));
            class c extends o.DisposableDelegate {
                constructor(e, t, s, n) {
                    super(n),
                        (this._target = ''),
                        (this._id = ''),
                        (this._id = t),
                        (this._target = e),
                        (this._kernel = s);
                }
                get commId() {
                    return this._id;
                }
                get targetName() {
                    return this._target;
                }
                get onClose() {
                    return this._onClose;
                }
                set onClose(e) {
                    this._onClose = e;
                }
                get onMsg() {
                    return this._onMsg;
                }
                set onMsg(e) {
                    this._onMsg = e;
                }
                open(e, t, s = []) {
                    if (this.isDisposed || this._kernel.isDisposed)
                        throw new Error('Cannot open');
                    const n = a.createMessage({
                        msgType: 'comm_open',
                        channel: 'shell',
                        username: this._kernel.username,
                        session: this._kernel.clientId,
                        content: {
                            comm_id: this._id,
                            target_name: this._target,
                            data: null != e ? e : {},
                        },
                        metadata: t,
                        buffers: s,
                    });
                    return this._kernel.sendShellMessage(n, !1, !0);
                }
                send(e, t, s = [], n = !0) {
                    if (this.isDisposed || this._kernel.isDisposed)
                        throw new Error('Cannot send');
                    const i = a.createMessage({
                        msgType: 'comm_msg',
                        channel: 'shell',
                        username: this._kernel.username,
                        session: this._kernel.clientId,
                        content: { comm_id: this._id, data: e },
                        metadata: t,
                        buffers: s,
                    });
                    return this._kernel.sendShellMessage(i, !1, n);
                }
                close(e, t, s = []) {
                    if (this.isDisposed || this._kernel.isDisposed)
                        throw new Error('Cannot close');
                    const n = a.createMessage({
                            msgType: 'comm_close',
                            channel: 'shell',
                            username: this._kernel.username,
                            session: this._kernel.clientId,
                            content: {
                                comm_id: this._id,
                                data: null != e ? e : {},
                            },
                            metadata: t,
                            buffers: s,
                        }),
                        i = this._kernel.sendShellMessage(n, !1, !0),
                        r = this._onClose;
                    return (
                        r &&
                            r(
                                a.createMessage({
                                    msgType: 'comm_close',
                                    channel: 'iopub',
                                    username: this._kernel.username,
                                    session: this._kernel.clientId,
                                    content: {
                                        comm_id: this._id,
                                        data: null != e ? e : {},
                                    },
                                    metadata: t,
                                    buffers: s,
                                })
                            ),
                        this.dispose(),
                        i
                    );
                }
            }
            t.CommHandler = c;
        },
        87269: function(e, t, s) {
            'use strict';
            var n =
                    (this && this.__createBinding) ||
                    (Object.create
                        ? function(e, t, s, n) {
                              void 0 === n && (n = s),
                                  Object.defineProperty(e, n, {
                                      enumerable: !0,
                                      get: function() {
                                          return t[s];
                                      },
                                  });
                          }
                        : function(e, t, s, n) {
                              void 0 === n && (n = s), (e[n] = t[s]);
                          }),
                i =
                    (this && this.__setModuleDefault) ||
                    (Object.create
                        ? function(e, t) {
                              Object.defineProperty(e, 'default', {
                                  enumerable: !0,
                                  value: t,
                              });
                          }
                        : function(e, t) {
                              e.default = t;
                          }),
                r =
                    (this && this.__importStar) ||
                    function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var s in e)
                                'default' !== s &&
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        s
                                    ) &&
                                    n(t, e, s);
                        return i(t, e), t;
                    };
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.KernelConnection = void 0);
            const o = s(96801),
                a = s(26169),
                c = s(32798),
                l = s(76591),
                h = s(59917),
                d = r(s(60433)),
                u = s(17032),
                _ = r(s(79697)),
                g = r(s(76799)),
                p = s(21941),
                m = r(s(36117)),
                f = '_RESTARTING_';
            class v {
                constructor(e) {
                    var t, s, n, i;
                    (this._createSocket = () => {
                        this._errorIfDisposed(),
                            this._clearSocket(),
                            this._updateConnectionStatus('connecting');
                        const e = this.serverSettings,
                            t = o.URLExt.join(
                                e.wsUrl,
                                m.KERNEL_SERVICE_URL,
                                encodeURIComponent(this._id)
                            ),
                            s = t.replace(/^((?:\w+:)?\/\/)(?:[^@\/]+@)/, '$1');
                        console.debug(`Starting WebSocket: ${s}`);
                        let n = o.URLExt.join(
                            t,
                            'channels?session_id=' +
                                encodeURIComponent(this._clientId)
                        );
                        const i = e.token;
                        e.appendToken &&
                            '' !== i &&
                            (n += `&token=${encodeURIComponent(i)}`),
                            (this._ws = new e.WebSocket(n)),
                            (this._ws.binaryType = 'arraybuffer');
                        let r = !1;
                        const a = async t => {
                                var s, n;
                                if (!this._isDisposed) {
                                    (this._reason = ''), (this._model = void 0);
                                    try {
                                        const s = await m.getKernelModel(
                                            this._id,
                                            e
                                        );
                                        (this._model = s),
                                            'dead' ===
                                            (null == s
                                                ? void 0
                                                : s.execution_state)
                                                ? this._updateStatus('dead')
                                                : this._onWSClose(t);
                                    } catch (e) {
                                        if (
                                            e instanceof
                                                l.ServerConnection
                                                    .NetworkError ||
                                            503 ===
                                                (null === (s = e.response) ||
                                                void 0 === s
                                                    ? void 0
                                                    : s.status) ||
                                            424 ===
                                                (null === (n = e.response) ||
                                                void 0 === n
                                                    ? void 0
                                                    : n.status)
                                        ) {
                                            const e =
                                                1e3 *
                                                w.getRandomIntInclusive(10, 30);
                                            setTimeout(a, e, t);
                                        } else
                                            (this._reason =
                                                'Kernel died unexpectedly'),
                                                this._updateStatus('dead');
                                    }
                                }
                            },
                            c = async e => {
                                r || ((r = !0), await a(e));
                            };
                        (this._ws.onmessage = this._onWSMessage),
                            (this._ws.onopen = this._onWSOpen),
                            (this._ws.onclose = c),
                            (this._ws.onerror = c);
                    }),
                        (this._onWSOpen = e => {
                            (this._ws.onclose = this._onWSClose),
                                (this._ws.onerror = this._onWSClose),
                                this._updateConnectionStatus('connected');
                        }),
                        (this._onWSMessage = e => {
                            let t;
                            try {
                                (t = _.deserialize(e.data)),
                                    g.validateMessage(t);
                            } catch (e) {
                                throw ((e.message = `Kernel message validation error: ${e.message}`),
                                e);
                            }
                            (this._kernelSession = t.header.session),
                                (this._msgChain = this._msgChain
                                    .then(() => this._handleMessage(t))
                                    .catch(e => {
                                        e.message.startsWith(
                                            'Canceled future for '
                                        ) && console.error(e);
                                    })),
                                this._anyMessage.emit({
                                    msg: t,
                                    direction: 'recv',
                                });
                        }),
                        (this._onWSClose = e => {
                            this.isDisposed || this._reconnect();
                        }),
                        (this._id = ''),
                        (this._name = ''),
                        (this._status = 'unknown'),
                        (this._connectionStatus = 'connecting'),
                        (this._kernelSession = ''),
                        (this._isDisposed = !1),
                        (this._ws = null),
                        (this._username = ''),
                        (this._reconnectLimit = 7),
                        (this._reconnectAttempt = 0),
                        (this._reconnectTimeout = null),
                        (this._futures = new Map()),
                        (this._comms = new Map()),
                        (this._targetRegistry = Object.create(null)),
                        (this._info = new a.PromiseDelegate()),
                        (this._pendingMessages = []),
                        (this._statusChanged = new c.Signal(this)),
                        (this._connectionStatusChanged = new c.Signal(this)),
                        (this._disposed = new c.Signal(this)),
                        (this._iopubMessage = new c.Signal(this)),
                        (this._anyMessage = new c.Signal(this)),
                        (this._pendingInput = new c.Signal(this)),
                        (this._unhandledMessage = new c.Signal(this)),
                        (this._displayIdToParentIds = new Map()),
                        (this._msgIdToDisplayIds = new Map()),
                        (this._msgChain = Promise.resolve()),
                        (this._hasPendingInput = !1),
                        (this._reason = ''),
                        (this._noOp = () => {}),
                        (this._name = e.model.name),
                        (this._id = e.model.id),
                        (this.serverSettings =
                            null !== (t = e.serverSettings) && void 0 !== t
                                ? t
                                : l.ServerConnection.makeSettings()),
                        (this._clientId =
                            null !== (s = e.clientId) && void 0 !== s
                                ? s
                                : a.UUID.uuid4()),
                        (this._username =
                            null !== (n = e.username) && void 0 !== n ? n : ''),
                        (this.handleComms =
                            null === (i = e.handleComms) || void 0 === i || i),
                        this._createSocket();
                }
                get disposed() {
                    return this._disposed;
                }
                get statusChanged() {
                    return this._statusChanged;
                }
                get connectionStatusChanged() {
                    return this._connectionStatusChanged;
                }
                get iopubMessage() {
                    return this._iopubMessage;
                }
                get unhandledMessage() {
                    return this._unhandledMessage;
                }
                get model() {
                    return (
                        this._model || {
                            id: this.id,
                            name: this.name,
                            reason: this._reason,
                        }
                    );
                }
                get anyMessage() {
                    return this._anyMessage;
                }
                get pendingInput() {
                    return this._pendingInput;
                }
                get id() {
                    return this._id;
                }
                get name() {
                    return this._name;
                }
                get username() {
                    return this._username;
                }
                get clientId() {
                    return this._clientId;
                }
                get status() {
                    return this._status;
                }
                get connectionStatus() {
                    return this._connectionStatus;
                }
                get isDisposed() {
                    return this._isDisposed;
                }
                get info() {
                    return this._info.promise;
                }
                get spec() {
                    return (
                        this._specPromise ||
                            (this._specPromise = p.KernelSpecAPI.getSpecs(
                                this.serverSettings
                            ).then(e => e.kernelspecs[this._name])),
                        this._specPromise
                    );
                }
                clone(e = {}) {
                    return new v(
                        Object.assign(
                            {
                                model: this.model,
                                username: this.username,
                                serverSettings: this.serverSettings,
                                handleComms: !1,
                            },
                            e
                        )
                    );
                }
                dispose() {
                    this.isDisposed ||
                        ((this._isDisposed = !0),
                        this._disposed.emit(),
                        this._updateConnectionStatus('disconnected'),
                        this._clearKernelState(),
                        (this._pendingMessages = []),
                        this._clearSocket(),
                        c.Signal.clearData(this));
                }
                sendShellMessage(e, t = !1, s = !0) {
                    return this._sendKernelShellControl(
                        u.KernelShellFutureHandler,
                        e,
                        t,
                        s
                    );
                }
                sendControlMessage(e, t = !1, s = !0) {
                    return this._sendKernelShellControl(
                        u.KernelControlFutureHandler,
                        e,
                        t,
                        s
                    );
                }
                _sendKernelShellControl(e, t, s = !1, n = !0) {
                    this._sendMessage(t),
                        this._anyMessage.emit({ msg: t, direction: 'send' });
                    const i = new e(
                        () => {
                            const e = t.header.msg_id;
                            this._futures.delete(e);
                            const s = this._msgIdToDisplayIds.get(e);
                            s &&
                                (s.forEach(t => {
                                    const s = this._displayIdToParentIds.get(t);
                                    if (s) {
                                        const n = s.indexOf(e);
                                        if (-1 === n) return;
                                        1 === s.length
                                            ? this._displayIdToParentIds.delete(
                                                  t
                                              )
                                            : (s.splice(n, 1),
                                              this._displayIdToParentIds.set(
                                                  t,
                                                  s
                                              ));
                                    }
                                }),
                                this._msgIdToDisplayIds.delete(e));
                        },
                        t,
                        s,
                        n,
                        this
                    );
                    return this._futures.set(t.header.msg_id, i), i;
                }
                _sendMessage(e, t = !0) {
                    if ('dead' === this.status)
                        throw new Error('Kernel is dead');
                    if (
                        ('' === this._kernelSession ||
                            this._kernelSession === f) &&
                        d.isInfoRequestMsg(e)
                    ) {
                        if ('connected' === this.connectionStatus)
                            return void this._ws.send(_.serialize(e));
                        throw new Error(
                            'Could not send message: status is not connected'
                        );
                    }
                    if (t && this._pendingMessages.length > 0)
                        this._pendingMessages.push(e);
                    else if (
                        'connected' === this.connectionStatus &&
                        this._kernelSession !== f
                    )
                        this._ws.send(_.serialize(e));
                    else {
                        if (!t) throw new Error('Could not send message');
                        this._pendingMessages.push(e);
                    }
                }
                async interrupt() {
                    if (((this.hasPendingInput = !1), 'dead' === this.status))
                        throw new Error('Kernel is dead');
                    return m.interruptKernel(this.id, this.serverSettings);
                }
                async restart() {
                    if ('dead' === this.status)
                        throw new Error('Kernel is dead');
                    this._updateStatus('restarting'),
                        this._clearKernelState(),
                        (this._kernelSession = f),
                        await m.restartKernel(this.id, this.serverSettings),
                        await this.reconnect(),
                        (this.hasPendingInput = !1);
                }
                reconnect() {
                    this._errorIfDisposed();
                    const e = new a.PromiseDelegate(),
                        t = (s, n) => {
                            'connected' === n
                                ? (e.resolve(),
                                  this.connectionStatusChanged.disconnect(
                                      t,
                                      this
                                  ))
                                : 'disconnected' === n &&
                                  (e.reject(
                                      new Error(
                                          'Kernel connection disconnected'
                                      )
                                  ),
                                  this.connectionStatusChanged.disconnect(
                                      t,
                                      this
                                  ));
                        };
                    return (
                        this.connectionStatusChanged.connect(t, this),
                        (this._reconnectAttempt = 0),
                        this._reconnect(),
                        e.promise
                    );
                }
                async shutdown() {
                    'dead' !== this.status &&
                        (await m.shutdownKernel(this.id, this.serverSettings)),
                        this.handleShutdown();
                }
                handleShutdown() {
                    this._updateStatus('dead'), this.dispose();
                }
                async requestKernelInfo() {
                    const e = d.createMessage({
                        msgType: 'kernel_info_request',
                        channel: 'shell',
                        username: this._username,
                        session: this._clientId,
                        content: {},
                    });
                    let t;
                    try {
                        t = await w.handleShellMessage(this, e);
                    } catch (e) {
                        if (this.isDisposed) return;
                        throw e;
                    }
                    if ((this._errorIfDisposed(), t))
                        return (
                            void 0 === t.content.status &&
                                (t.content.status = 'ok'),
                            'ok' !== t.content.status
                                ? (this._info.reject(
                                      'Kernel info reply errored'
                                  ),
                                  t)
                                : (this._info.resolve(t.content),
                                  (this._kernelSession = t.header.session),
                                  t)
                        );
                }
                requestComplete(e) {
                    const t = d.createMessage({
                        msgType: 'complete_request',
                        channel: 'shell',
                        username: this._username,
                        session: this._clientId,
                        content: e,
                    });
                    return w.handleShellMessage(this, t);
                }
                requestInspect(e) {
                    const t = d.createMessage({
                        msgType: 'inspect_request',
                        channel: 'shell',
                        username: this._username,
                        session: this._clientId,
                        content: e,
                    });
                    return w.handleShellMessage(this, t);
                }
                requestHistory(e) {
                    const t = d.createMessage({
                        msgType: 'history_request',
                        channel: 'shell',
                        username: this._username,
                        session: this._clientId,
                        content: e,
                    });
                    return w.handleShellMessage(this, t);
                }
                requestExecute(e, t = !0, s) {
                    const n = d.createMessage({
                        msgType: 'execute_request',
                        channel: 'shell',
                        username: this._username,
                        session: this._clientId,
                        content: Object.assign(
                            Object.assign(
                                {},
                                {
                                    silent: !1,
                                    store_history: !0,
                                    user_expressions: {},
                                    allow_stdin: !0,
                                    stop_on_error: !1,
                                }
                            ),
                            e
                        ),
                        metadata: s,
                    });
                    return this.sendShellMessage(n, !0, t);
                }
                requestDebug(e, t = !0) {
                    const s = d.createMessage({
                        msgType: 'debug_request',
                        channel: 'control',
                        username: this._username,
                        session: this._clientId,
                        content: e,
                    });
                    return this.sendControlMessage(s, !0, t);
                }
                requestIsComplete(e) {
                    const t = d.createMessage({
                        msgType: 'is_complete_request',
                        channel: 'shell',
                        username: this._username,
                        session: this._clientId,
                        content: e,
                    });
                    return w.handleShellMessage(this, t);
                }
                requestCommInfo(e) {
                    const t = d.createMessage({
                        msgType: 'comm_info_request',
                        channel: 'shell',
                        username: this._username,
                        session: this._clientId,
                        content: e,
                    });
                    return w.handleShellMessage(this, t);
                }
                sendInputReply(e, t) {
                    const s = d.createMessage({
                        msgType: 'input_reply',
                        channel: 'stdin',
                        username: this._username,
                        session: this._clientId,
                        content: e,
                    });
                    t && (s.parent_header = t),
                        this._sendMessage(s),
                        this._anyMessage.emit({ msg: s, direction: 'send' }),
                        (this.hasPendingInput = !1);
                }
                createComm(e, t = a.UUID.uuid4()) {
                    if (!this.handleComms)
                        throw new Error(
                            'Comms are disabled on this kernel connection'
                        );
                    if (this._comms.has(t))
                        throw new Error('Comm is already created');
                    const s = new h.CommHandler(e, t, this, () => {
                        this._unregisterComm(t);
                    });
                    return this._comms.set(t, s), s;
                }
                hasComm(e) {
                    return this._comms.has(e);
                }
                registerCommTarget(e, t) {
                    this.handleComms && (this._targetRegistry[e] = t);
                }
                removeCommTarget(e, t) {
                    this.handleComms &&
                        (this.isDisposed ||
                            this._targetRegistry[e] !== t ||
                            delete this._targetRegistry[e]);
                }
                registerMessageHook(e, t) {
                    var s;
                    const n =
                        null === (s = this._futures) || void 0 === s
                            ? void 0
                            : s.get(e);
                    n && n.registerMessageHook(t);
                }
                removeMessageHook(e, t) {
                    var s;
                    const n =
                        null === (s = this._futures) || void 0 === s
                            ? void 0
                            : s.get(e);
                    n && n.removeMessageHook(t);
                }
                removeInputGuard() {
                    this.hasPendingInput = !1;
                }
                async _handleDisplayId(e, t) {
                    var s, n;
                    const i = t.parent_header.msg_id;
                    let r = this._displayIdToParentIds.get(e);
                    if (r) {
                        const e = {
                            header: a.JSONExt.deepCopy(t.header),
                            parent_header: a.JSONExt.deepCopy(t.parent_header),
                            metadata: a.JSONExt.deepCopy(t.metadata),
                            content: a.JSONExt.deepCopy(t.content),
                            channel: t.channel,
                            buffers: t.buffers ? t.buffers.slice() : [],
                        };
                        (e.header.msg_type = 'update_display_data'),
                            await Promise.all(
                                r.map(async t => {
                                    const s =
                                        this._futures && this._futures.get(t);
                                    s && (await s.handleMsg(e));
                                })
                            );
                    }
                    if ('update_display_data' === t.header.msg_type) return !0;
                    (r =
                        null !== (s = this._displayIdToParentIds.get(e)) &&
                        void 0 !== s
                            ? s
                            : []),
                        -1 === r.indexOf(i) && r.push(i),
                        this._displayIdToParentIds.set(e, r);
                    const o =
                        null !== (n = this._msgIdToDisplayIds.get(i)) &&
                        void 0 !== n
                            ? n
                            : [];
                    return (
                        -1 === o.indexOf(i) && o.push(i),
                        this._msgIdToDisplayIds.set(i, o),
                        !1
                    );
                }
                _clearSocket() {
                    null !== this._ws &&
                        ((this._ws.onopen = this._noOp),
                        (this._ws.onclose = this._noOp),
                        (this._ws.onerror = this._noOp),
                        (this._ws.onmessage = this._noOp),
                        this._ws.close(),
                        (this._ws = null));
                }
                _updateStatus(e) {
                    this._status !== e &&
                        'dead' !== this._status &&
                        ((this._status = e),
                        w.logKernelStatus(this),
                        this._statusChanged.emit(e),
                        'dead' === e && this.dispose());
                }
                _sendPending() {
                    for (
                        ;
                        'connected' === this.connectionStatus &&
                        this._kernelSession !== f &&
                        this._pendingMessages.length > 0;

                    )
                        this._sendMessage(this._pendingMessages[0], !1),
                            this._pendingMessages.shift();
                }
                _clearKernelState() {
                    (this._kernelSession = ''),
                        (this._pendingMessages = []),
                        this._futures.forEach(e => {
                            e.dispose();
                        }),
                        this._comms.forEach(e => {
                            e.dispose();
                        }),
                        (this._msgChain = Promise.resolve()),
                        (this._futures = new Map()),
                        (this._comms = new Map()),
                        this._displayIdToParentIds.clear(),
                        this._msgIdToDisplayIds.clear();
                }
                _assertCurrentMessage(e) {
                    if (
                        (this._errorIfDisposed(),
                        e.header.session !== this._kernelSession)
                    )
                        throw new Error(
                            `Canceling handling of old message: ${e.header.msg_type}`
                        );
                }
                async _handleCommOpen(e) {
                    this._assertCurrentMessage(e);
                    const t = e.content,
                        s = new h.CommHandler(
                            t.target_name,
                            t.comm_id,
                            this,
                            () => {
                                this._unregisterComm(t.comm_id);
                            }
                        );
                    this._comms.set(t.comm_id, s);
                    try {
                        const n = await w.loadObject(
                            t.target_name,
                            t.target_module,
                            this._targetRegistry
                        );
                        await n(s, e);
                    } catch (e) {
                        throw (s.close(),
                        console.error('Exception opening new comm'),
                        e);
                    }
                }
                async _handleCommClose(e) {
                    this._assertCurrentMessage(e);
                    const t = e.content,
                        s = this._comms.get(t.comm_id);
                    if (!s)
                        return void console.error(
                            'Comm not found for comm id ' + t.comm_id
                        );
                    this._unregisterComm(s.commId);
                    const n = s.onClose;
                    n && (await n(e)), s.dispose();
                }
                async _handleCommMsg(e) {
                    this._assertCurrentMessage(e);
                    const t = e.content,
                        s = this._comms.get(t.comm_id);
                    if (!s) return;
                    const n = s.onMsg;
                    n && (await n(e));
                }
                _unregisterComm(e) {
                    this._comms.delete(e);
                }
                _updateConnectionStatus(e) {
                    if (this._connectionStatus !== e) {
                        if (
                            ((this._connectionStatus = e),
                            'connecting' !== e &&
                                ((this._reconnectAttempt = 0),
                                clearTimeout(this._reconnectTimeout)),
                            'dead' !== this.status)
                        )
                            if ('connected' === e) {
                                let e = this._kernelSession === f,
                                    t = this.requestKernelInfo(),
                                    s = !1,
                                    n = () => {
                                        s ||
                                            ((s = !0),
                                            e &&
                                                this._kernelSession === f &&
                                                (this._kernelSession = ''),
                                            clearTimeout(i),
                                            this._pendingMessages.length > 0 &&
                                                this._sendPending());
                                    };
                                t.then(n);
                                let i = setTimeout(n, 3e3);
                            } else this._updateStatus('unknown');
                        this._connectionStatusChanged.emit(e);
                    }
                }
                async _handleMessage(e) {
                    var t, s;
                    let n = !1;
                    if (
                        e.parent_header &&
                        'iopub' === e.channel &&
                        (d.isDisplayDataMsg(e) ||
                            d.isUpdateDisplayDataMsg(e) ||
                            d.isExecuteResultMsg(e))
                    ) {
                        const s = (null !== (t = e.content.transient) &&
                        void 0 !== t
                            ? t
                            : {}
                        ).display_id;
                        s &&
                            ((n = await this._handleDisplayId(s, e)),
                            this._assertCurrentMessage(e));
                    }
                    if (!n && e.parent_header) {
                        const t = e.parent_header,
                            n =
                                null === (s = this._futures) || void 0 === s
                                    ? void 0
                                    : s.get(t.msg_id);
                        if (n)
                            await n.handleMsg(e), this._assertCurrentMessage(e);
                        else {
                            const s = t.session === this.clientId;
                            'iopub' !== e.channel &&
                                s &&
                                this._unhandledMessage.emit(e);
                        }
                    }
                    if ('iopub' === e.channel) {
                        switch (e.header.msg_type) {
                            case 'status': {
                                const t = e.content.execution_state;
                                'restarting' === t &&
                                    Promise.resolve().then(async () => {
                                        this._updateStatus('autorestarting'),
                                            this._clearKernelState(),
                                            await this.reconnect();
                                    }),
                                    this._updateStatus(t);
                                break;
                            }
                            case 'comm_open':
                                this.handleComms &&
                                    (await this._handleCommOpen(e));
                                break;
                            case 'comm_msg':
                                this.handleComms &&
                                    (await this._handleCommMsg(e));
                                break;
                            case 'comm_close':
                                this.handleComms &&
                                    (await this._handleCommClose(e));
                        }
                        this.isDisposed ||
                            (this._assertCurrentMessage(e),
                            this._iopubMessage.emit(e));
                    }
                }
                _reconnect() {
                    if (
                        (this._errorIfDisposed(),
                        clearTimeout(this._reconnectTimeout),
                        this._reconnectAttempt < this._reconnectLimit)
                    ) {
                        this._updateConnectionStatus('connecting');
                        const e = w.getRandomIntInclusive(
                            0,
                            1e3 * (Math.pow(2, this._reconnectAttempt) - 1)
                        );
                        console.warn(
                            `Connection lost, reconnecting in ${Math.floor(
                                e / 1e3
                            )} seconds.`
                        ),
                            (this._reconnectTimeout = setTimeout(
                                this._createSocket,
                                e
                            )),
                            (this._reconnectAttempt += 1);
                    } else this._updateConnectionStatus('disconnected');
                    this._clearSocket();
                }
                _errorIfDisposed() {
                    if (this.isDisposed)
                        throw new Error('Kernel connection is disposed');
                }
                get hasPendingInput() {
                    return this._hasPendingInput;
                }
                set hasPendingInput(e) {
                    (this._hasPendingInput = e), this._pendingInput.emit(e);
                }
            }
            var w;
            (t.KernelConnection = v),
                (function(e) {
                    (e.logKernelStatus = function(e) {
                        switch (e.status) {
                            case 'idle':
                            case 'busy':
                            case 'unknown':
                                return;
                            default:
                                console.debug(`Kernel: ${e.status} (${e.id})`);
                        }
                    }),
                        (e.handleShellMessage = async function(e, t) {
                            return e.sendShellMessage(t, !0).done;
                        }),
                        (e.loadObject = function(e, t, s) {
                            return new Promise((n, i) => {
                                if (t) {
                                    if ('undefined' == typeof requirejs)
                                        throw new Error('requirejs not found');
                                    requirejs(
                                        [t],
                                        s => {
                                            void 0 === s[e]
                                                ? i(
                                                      new Error(
                                                          `Object '${e}' not found in module '${t}'`
                                                      )
                                                  )
                                                : n(s[e]);
                                        },
                                        i
                                    );
                                } else
                                    (null == s
                                      ? void 0
                                      : s[e])
                                        ? n(s[e])
                                        : i(
                                              new Error(
                                                  `Object '${e}' not found in registry`
                                              )
                                          );
                            });
                        }),
                        (e.getRandomIntInclusive = function(e, t) {
                            return (
                                (e = Math.ceil(e)),
                                (t = Math.floor(t)),
                                Math.floor(Math.random() * (t - e + 1)) + e
                            );
                        });
                })(w || (w = {}));
        },
        17032: function(e, t, s) {
            'use strict';
            var n =
                    (this && this.__createBinding) ||
                    (Object.create
                        ? function(e, t, s, n) {
                              void 0 === n && (n = s),
                                  Object.defineProperty(e, n, {
                                      enumerable: !0,
                                      get: function() {
                                          return t[s];
                                      },
                                  });
                          }
                        : function(e, t, s, n) {
                              void 0 === n && (n = s), (e[n] = t[s]);
                          }),
                i =
                    (this && this.__setModuleDefault) ||
                    (Object.create
                        ? function(e, t) {
                              Object.defineProperty(e, 'default', {
                                  enumerable: !0,
                                  value: t,
                              });
                          }
                        : function(e, t) {
                              e.default = t;
                          }),
                r =
                    (this && this.__importStar) ||
                    function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var s in e)
                                'default' !== s &&
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        s
                                    ) &&
                                    n(t, e, s);
                        return i(t, e), t;
                    };
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.KernelShellFutureHandler = t.KernelControlFutureHandler = t.KernelFutureHandler = void 0);
            const o = s(26169),
                a = s(21743),
                c = r(s(60433));
            class l extends a.DisposableDelegate {
                constructor(e, t, s, n, i) {
                    super(e),
                        (this._status = 0),
                        (this._stdin = h.noOp),
                        (this._iopub = h.noOp),
                        (this._reply = h.noOp),
                        (this._done = new o.PromiseDelegate()),
                        (this._hooks = new h.HookList()),
                        (this._disposeOnDone = !0),
                        (this._msg = t),
                        s || this._setFlag(h.KernelFutureFlag.GotReply),
                        (this._disposeOnDone = n),
                        (this._kernel = i);
                }
                get msg() {
                    return this._msg;
                }
                get done() {
                    return this._done.promise;
                }
                get onReply() {
                    return this._reply;
                }
                set onReply(e) {
                    this._reply = e;
                }
                get onIOPub() {
                    return this._iopub;
                }
                set onIOPub(e) {
                    this._iopub = e;
                }
                get onStdin() {
                    return this._stdin;
                }
                set onStdin(e) {
                    this._stdin = e;
                }
                registerMessageHook(e) {
                    if (this.isDisposed)
                        throw new Error('Kernel future is disposed');
                    this._hooks.add(e);
                }
                removeMessageHook(e) {
                    this.isDisposed || this._hooks.remove(e);
                }
                sendInputReply(e, t) {
                    this._kernel.sendInputReply(e, t);
                }
                dispose() {
                    (this._stdin = h.noOp),
                        (this._iopub = h.noOp),
                        (this._reply = h.noOp),
                        (this._hooks = null),
                        this._testFlag(h.KernelFutureFlag.IsDone) ||
                            (this._done.promise.catch(() => {}),
                            this._done.reject(
                                new Error(
                                    `Canceled future for ${this.msg.header.msg_type} message before replies were done`
                                )
                            )),
                        super.dispose();
                }
                async handleMsg(e) {
                    switch (e.channel) {
                        case 'control':
                        case 'shell':
                            e.channel === this.msg.channel &&
                                e.parent_header.msg_id ===
                                    this.msg.header.msg_id &&
                                (await this._handleReply(e));
                            break;
                        case 'stdin':
                            await this._handleStdin(e);
                            break;
                        case 'iopub':
                            await this._handleIOPub(e);
                    }
                }
                async _handleReply(e) {
                    const t = this._reply;
                    t && (await t(e)),
                        (this._replyMsg = e),
                        this._setFlag(h.KernelFutureFlag.GotReply),
                        this._testFlag(h.KernelFutureFlag.GotIdle) &&
                            this._handleDone();
                }
                async _handleStdin(e) {
                    this._kernel.hasPendingInput = !0;
                    const t = this._stdin;
                    t && (await t(e));
                }
                async _handleIOPub(e) {
                    const t = await this._hooks.process(e),
                        s = this._iopub;
                    t && s && (await s(e)),
                        c.isStatusMsg(e) &&
                            'idle' === e.content.execution_state &&
                            (this._setFlag(h.KernelFutureFlag.GotIdle),
                            this._testFlag(h.KernelFutureFlag.GotReply) &&
                                this._handleDone());
                }
                _handleDone() {
                    this._testFlag(h.KernelFutureFlag.IsDone) ||
                        (this._setFlag(h.KernelFutureFlag.IsDone),
                        this._done.resolve(this._replyMsg),
                        this._disposeOnDone && this.dispose());
                }
                _testFlag(e) {
                    return 0 != (this._status & e);
                }
                _setFlag(e) {
                    this._status |= e;
                }
            }
            var h;
            (t.KernelFutureHandler = l),
                (t.KernelControlFutureHandler = class extends l {}),
                (t.KernelShellFutureHandler = class extends l {}),
                (function(e) {
                    e.noOp = () => {};
                    const t =
                        'function' == typeof requestAnimationFrame
                            ? requestAnimationFrame
                            : setImmediate;
                    let s;
                    (e.HookList = class {
                        constructor() {
                            this._hooks = [];
                        }
                        add(e) {
                            this.remove(e), this._hooks.push(e);
                        }
                        remove(e) {
                            const t = this._hooks.indexOf(e);
                            t >= 0 &&
                                ((this._hooks[t] = null),
                                this._scheduleCompact());
                        }
                        async process(e) {
                            await this._processing;
                            const t = new o.PromiseDelegate();
                            let s;
                            this._processing = t.promise;
                            for (let n = this._hooks.length - 1; n >= 0; n--) {
                                const i = this._hooks[n];
                                if (null !== i) {
                                    try {
                                        s = await i(e);
                                    } catch (e) {
                                        (s = !0), console.error(e);
                                    }
                                    if (!1 === s) return t.resolve(void 0), !1;
                                }
                            }
                            return t.resolve(void 0), !0;
                        }
                        _scheduleCompact() {
                            this._compactScheduled ||
                                ((this._compactScheduled = !0),
                                t(() => {
                                    this._processing = this._processing.then(
                                        () => {
                                            (this._compactScheduled = !1),
                                                this._compact();
                                        }
                                    );
                                }));
                        }
                        _compact() {
                            let e = 0;
                            for (
                                let t = 0, s = this._hooks.length;
                                t < s;
                                t++
                            ) {
                                const s = this._hooks[t];
                                null === this._hooks[t]
                                    ? e++
                                    : (this._hooks[t - e] = s);
                            }
                            this._hooks.length -= e;
                        }
                    }),
                        (function(e) {
                            (e[(e.GotReply = 1)] = 'GotReply'),
                                (e[(e.GotIdle = 2)] = 'GotIdle'),
                                (e[(e.IsDone = 4)] = 'IsDone'),
                                (e[(e.DisposeOnDone = 8)] = 'DisposeOnDone');
                        })(
                            (s =
                                e.KernelFutureFlag || (e.KernelFutureFlag = {}))
                        );
                })(h || (h = {}));
        },
        61613: function(e, t, s) {
            'use strict';
            var n =
                    (this && this.__createBinding) ||
                    (Object.create
                        ? function(e, t, s, n) {
                              void 0 === n && (n = s),
                                  Object.defineProperty(e, n, {
                                      enumerable: !0,
                                      get: function() {
                                          return t[s];
                                      },
                                  });
                          }
                        : function(e, t, s, n) {
                              void 0 === n && (n = s), (e[n] = t[s]);
                          }),
                i =
                    (this && this.__setModuleDefault) ||
                    (Object.create
                        ? function(e, t) {
                              Object.defineProperty(e, 'default', {
                                  enumerable: !0,
                                  value: t,
                              });
                          }
                        : function(e, t) {
                              e.default = t;
                          }),
                r =
                    (this && this.__importStar) ||
                    function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var s in e)
                                'default' !== s &&
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        s
                                    ) &&
                                    n(t, e, s);
                        return i(t, e), t;
                    },
                o =
                    (this && this.__exportStar) ||
                    function(e, t) {
                        for (var s in e)
                            'default' === s ||
                                Object.prototype.hasOwnProperty.call(t, s) ||
                                n(t, e, s);
                    };
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.KernelConnection = t.KernelAPI = t.KernelMessage = t.Kernel = void 0);
            const a = r(s(17745));
            t.Kernel = a;
            const c = r(s(60433));
            t.KernelMessage = c;
            const l = r(s(36117));
            t.KernelAPI = l;
            const h = s(87269);
            Object.defineProperty(t, 'KernelConnection', {
                enumerable: !0,
                get: function() {
                    return h.KernelConnection;
                },
            }),
                o(s(55780), t);
        },
        17745: (e, t) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
        },
        55780: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.KernelManager = void 0);
            const n = s(43892),
                i = s(61313),
                r = s(32798),
                o = s(76591),
                a = s(5179),
                c = s(36117),
                l = s(87269);
            class h extends a.BaseManager {
                constructor(e = {}) {
                    var t;
                    super(e),
                        (this._isReady = !1),
                        (this._kernelConnections = new Set()),
                        (this._models = new Map()),
                        (this._runningChanged = new r.Signal(this)),
                        (this._connectionFailure = new r.Signal(this)),
                        (this._pollModels = new i.Poll({
                            auto: !1,
                            factory: () => this.requestRunning(),
                            frequency: { interval: 1e4, backoff: !0, max: 3e5 },
                            name: '@jupyterlab/services:KernelManager#models',
                            standby:
                                null !== (t = e.standby) && void 0 !== t
                                    ? t
                                    : 'when-hidden',
                        })),
                        (this._ready = (async () => {
                            await this._pollModels.start(),
                                await this._pollModels.tick,
                                (this._isReady = !0);
                        })());
                }
                get isReady() {
                    return this._isReady;
                }
                get ready() {
                    return this._ready;
                }
                get runningChanged() {
                    return this._runningChanged;
                }
                get connectionFailure() {
                    return this._connectionFailure;
                }
                dispose() {
                    this.isDisposed ||
                        (this._models.clear(),
                        this._kernelConnections.forEach(e => e.dispose()),
                        this._pollModels.dispose(),
                        super.dispose());
                }
                connectTo(e) {
                    var t;
                    const { id: s } = e.model;
                    let n = null === (t = e.handleComms) || void 0 === t || t;
                    if (void 0 === e.handleComms)
                        for (const e of this._kernelConnections)
                            if (e.id === s && e.handleComms) {
                                n = !1;
                                break;
                            }
                    const i = new l.KernelConnection(
                        Object.assign(Object.assign({ handleComms: n }, e), {
                            serverSettings: this.serverSettings,
                        })
                    );
                    return (
                        this._onStarted(i),
                        this._models.has(s) ||
                            this.refreshRunning().catch(() => {}),
                        i
                    );
                }
                running() {
                    return n.iter([...this._models.values()]);
                }
                async refreshRunning() {
                    await this._pollModels.refresh(),
                        await this._pollModels.tick;
                }
                async startNew(e = {}, t = {}) {
                    const s = await c.startNew(e, this.serverSettings);
                    return this.connectTo(
                        Object.assign(Object.assign({}, t), { model: s })
                    );
                }
                async shutdown(e) {
                    await c.shutdownKernel(e, this.serverSettings),
                        await this.refreshRunning();
                }
                async shutdownAll() {
                    await this.refreshRunning(),
                        await Promise.all(
                            [...this._models.keys()].map(e =>
                                c.shutdownKernel(e, this.serverSettings)
                            )
                        ),
                        await this.refreshRunning();
                }
                async findById(e) {
                    return (
                        this._models.has(e) || (await this.refreshRunning()),
                        this._models.get(e)
                    );
                }
                async requestRunning() {
                    var e, t;
                    let s;
                    try {
                        s = await c.listRunning(this.serverSettings);
                    } catch (s) {
                        throw ((s instanceof o.ServerConnection.NetworkError ||
                            503 ===
                                (null === (e = s.response) || void 0 === e
                                    ? void 0
                                    : e.status) ||
                            424 ===
                                (null === (t = s.response) || void 0 === t
                                    ? void 0
                                    : t.status)) &&
                            this._connectionFailure.emit(s),
                        s);
                    }
                    this.isDisposed ||
                        (this._models.size === s.length &&
                            n.every(s, e => {
                                const t = this._models.get(e.id);
                                return !!t && t.name === e.name;
                            })) ||
                        ((this._models = new Map(s.map(e => [e.id, e]))),
                        this._kernelConnections.forEach(e => {
                            this._models.has(e.id) || e.handleShutdown();
                        }),
                        this._runningChanged.emit(s));
                }
                _onStarted(e) {
                    this._kernelConnections.add(e),
                        e.statusChanged.connect(this._onStatusChanged, this),
                        e.disposed.connect(this._onDisposed, this);
                }
                _onDisposed(e) {
                    this._kernelConnections.delete(e),
                        this.refreshRunning().catch(() => {});
                }
                _onStatusChanged(e, t) {
                    'dead' === t && this.refreshRunning().catch(() => {});
                }
            }
            t.KernelManager = h;
        },
        60433: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.isInputReplyMsg = t.isInputRequestMsg = t.isDebugReplyMsg = t.isDebugRequestMsg = t.isExecuteReplyMsg = t.isInfoRequestMsg = t.isCommMsgMsg = t.isCommCloseMsg = t.isCommOpenMsg = t.isDebugEventMsg = t.isClearOutputMsg = t.isStatusMsg = t.isErrorMsg = t.isExecuteResultMsg = t.isExecuteInputMsg = t.isUpdateDisplayDataMsg = t.isDisplayDataMsg = t.isStreamMsg = t.createMessage = void 0);
            const n = s(26169);
            (t.createMessage = function(e) {
                var t, s, i, r, o;
                return {
                    buffers: null !== (t = e.buffers) && void 0 !== t ? t : [],
                    channel: e.channel,
                    content: e.content,
                    header: {
                        date: new Date().toISOString(),
                        msg_id:
                            null !== (s = e.msgId) && void 0 !== s
                                ? s
                                : n.UUID.uuid4(),
                        msg_type: e.msgType,
                        session: e.session,
                        username:
                            null !== (i = e.username) && void 0 !== i ? i : '',
                        version: '5.2',
                    },
                    metadata:
                        null !== (r = e.metadata) && void 0 !== r ? r : {},
                    parent_header:
                        null !== (o = e.parentHeader) && void 0 !== o ? o : {},
                };
            }),
                (t.isStreamMsg = function(e) {
                    return 'stream' === e.header.msg_type;
                }),
                (t.isDisplayDataMsg = function(e) {
                    return 'display_data' === e.header.msg_type;
                }),
                (t.isUpdateDisplayDataMsg = function(e) {
                    return 'update_display_data' === e.header.msg_type;
                }),
                (t.isExecuteInputMsg = function(e) {
                    return 'execute_input' === e.header.msg_type;
                }),
                (t.isExecuteResultMsg = function(e) {
                    return 'execute_result' === e.header.msg_type;
                }),
                (t.isErrorMsg = function(e) {
                    return 'error' === e.header.msg_type;
                }),
                (t.isStatusMsg = function(e) {
                    return 'status' === e.header.msg_type;
                }),
                (t.isClearOutputMsg = function(e) {
                    return 'clear_output' === e.header.msg_type;
                }),
                (t.isDebugEventMsg = function(e) {
                    return 'debug_event' === e.header.msg_type;
                }),
                (t.isCommOpenMsg = function(e) {
                    return 'comm_open' === e.header.msg_type;
                }),
                (t.isCommCloseMsg = function(e) {
                    return 'comm_close' === e.header.msg_type;
                }),
                (t.isCommMsgMsg = function(e) {
                    return 'comm_msg' === e.header.msg_type;
                }),
                (t.isInfoRequestMsg = function(e) {
                    return 'kernel_info_request' === e.header.msg_type;
                }),
                (t.isExecuteReplyMsg = function(e) {
                    return 'execute_reply' === e.header.msg_type;
                }),
                (t.isDebugRequestMsg = function(e) {
                    return 'debug_request' === e.header.msg_type;
                }),
                (t.isDebugReplyMsg = function(e) {
                    return 'debug_reply' === e.header.msg_type;
                }),
                (t.isInputRequestMsg = function(e) {
                    return 'input_request' === e.header.msg_type;
                }),
                (t.isInputReplyMsg = function(e) {
                    return 'input_reply' === e.header.msg_type;
                });
        },
        36117: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.getKernelModel = t.shutdownKernel = t.interruptKernel = t.restartKernel = t.startNew = t.listRunning = t.KERNEL_SERVICE_URL = void 0);
            const n = s(59566),
                i = s(96801),
                r = s(76799);
            (t.KERNEL_SERVICE_URL = 'api/kernels'),
                (t.listRunning = async function(
                    e = n.ServerConnection.makeSettings()
                ) {
                    const s = i.URLExt.join(e.baseUrl, t.KERNEL_SERVICE_URL),
                        o = await n.ServerConnection.makeRequest(s, {}, e);
                    if (200 !== o.status)
                        throw await n.ServerConnection.ResponseError.create(o);
                    const a = await o.json();
                    return r.validateModels(a), a;
                }),
                (t.startNew = async function(
                    e = {},
                    s = n.ServerConnection.makeSettings()
                ) {
                    const o = i.URLExt.join(s.baseUrl, t.KERNEL_SERVICE_URL),
                        a = { method: 'POST', body: JSON.stringify(e) },
                        c = await n.ServerConnection.makeRequest(o, a, s);
                    if (201 !== c.status)
                        throw await n.ServerConnection.ResponseError.create(c);
                    const l = await c.json();
                    return r.validateModel(l), l;
                }),
                (t.restartKernel = async function(
                    e,
                    s = n.ServerConnection.makeSettings()
                ) {
                    const o = i.URLExt.join(
                            s.baseUrl,
                            t.KERNEL_SERVICE_URL,
                            encodeURIComponent(e),
                            'restart'
                        ),
                        a = await n.ServerConnection.makeRequest(
                            o,
                            { method: 'POST' },
                            s
                        );
                    if (200 !== a.status)
                        throw await n.ServerConnection.ResponseError.create(a);
                    const c = await a.json();
                    r.validateModel(c);
                }),
                (t.interruptKernel = async function(
                    e,
                    s = n.ServerConnection.makeSettings()
                ) {
                    const r = i.URLExt.join(
                            s.baseUrl,
                            t.KERNEL_SERVICE_URL,
                            encodeURIComponent(e),
                            'interrupt'
                        ),
                        o = await n.ServerConnection.makeRequest(
                            r,
                            { method: 'POST' },
                            s
                        );
                    if (204 !== o.status)
                        throw await n.ServerConnection.ResponseError.create(o);
                }),
                (t.shutdownKernel = async function(
                    e,
                    s = n.ServerConnection.makeSettings()
                ) {
                    const r = i.URLExt.join(
                            s.baseUrl,
                            t.KERNEL_SERVICE_URL,
                            encodeURIComponent(e)
                        ),
                        o = await n.ServerConnection.makeRequest(
                            r,
                            { method: 'DELETE' },
                            s
                        );
                    if (404 === o.status) {
                        const t = `The kernel "${e}" does not exist on the server`;
                        console.warn(t);
                    } else if (204 !== o.status)
                        throw await n.ServerConnection.ResponseError.create(o);
                }),
                (t.getKernelModel = async function(
                    e,
                    s = n.ServerConnection.makeSettings()
                ) {
                    const o = i.URLExt.join(
                            s.baseUrl,
                            t.KERNEL_SERVICE_URL,
                            encodeURIComponent(e)
                        ),
                        a = await n.ServerConnection.makeRequest(o, {}, s);
                    if (404 === a.status) return;
                    if (200 !== a.status)
                        throw await n.ServerConnection.ResponseError.create(a);
                    const c = await a.json();
                    return r.validateModel(c), c;
                });
        },
        79697: (e, t) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.serialize = t.deserialize = void 0),
                (t.deserialize = function(e) {
                    let t;
                    return (
                        (t =
                            'string' == typeof e
                                ? JSON.parse(e)
                                : (function(e) {
                                      const t = new DataView(e),
                                          s = t.getUint32(0),
                                          n = [];
                                      if (s < 2)
                                          throw new Error(
                                              'Invalid incoming Kernel Message'
                                          );
                                      for (let e = 1; e <= s; e++)
                                          n.push(t.getUint32(4 * e));
                                      const i = new Uint8Array(
                                              e.slice(n[0], n[1])
                                          ),
                                          r = JSON.parse(
                                              new TextDecoder('utf8').decode(i)
                                          );
                                      r.buffers = [];
                                      for (let t = 1; t < s; t++) {
                                          const s = n[t],
                                              i = n[t + 1] || e.byteLength;
                                          r.buffers.push(
                                              new DataView(e.slice(s, i))
                                          );
                                      }
                                      return r;
                                  })(e)),
                        t
                    );
                }),
                (t.serialize = function(e) {
                    var t;
                    let s;
                    return (
                        (s = (null === (t = e.buffers) || void 0 === t
                          ? void 0
                          : t.length)
                            ? (function(e) {
                                  const t = [],
                                      s = [],
                                      n = new TextEncoder();
                                  let i = [];
                                  void 0 !== e.buffers &&
                                      ((i = e.buffers), delete e.buffers);
                                  const r = n.encode(JSON.stringify(e));
                                  s.push(r.buffer);
                                  for (let e = 0; e < i.length; e++) {
                                      const t = i[e];
                                      s.push(
                                          ArrayBuffer.isView(t) ? t.buffer : t
                                      );
                                  }
                                  const o = s.length;
                                  t.push(4 * (o + 1));
                                  for (let e = 0; e + 1 < s.length; e++)
                                      t.push(t[t.length - 1] + s[e].byteLength);
                                  const a = new Uint8Array(
                                          t[t.length - 1] +
                                              s[s.length - 1].byteLength
                                      ),
                                      c = new DataView(a.buffer);
                                  c.setUint32(0, o);
                                  for (let e = 0; e < t.length; e++)
                                      c.setUint32(4 * (e + 1), t[e]);
                                  for (let e = 0; e < s.length; e++)
                                      a.set(new Uint8Array(s[e]), t[e]);
                                  return a.buffer;
                              })(e)
                            : JSON.stringify(e)),
                        s
                    );
                });
        },
        76799: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.validateModels = t.validateModel = t.validateMessage = void 0);
            const n = s(74284),
                i = ['username', 'version', 'session', 'msg_id', 'msg_type'],
                r = {
                    stream: { name: 'string', text: 'string' },
                    display_data: { data: 'object', metadata: 'object' },
                    execute_input: {
                        code: 'string',
                        execution_count: 'number',
                    },
                    execute_result: {
                        execution_count: 'number',
                        data: 'object',
                        metadata: 'object',
                    },
                    error: {
                        ename: 'string',
                        evalue: 'string',
                        traceback: 'object',
                    },
                    status: {
                        execution_state: [
                            'string',
                            ['starting', 'idle', 'busy', 'restarting', 'dead'],
                        ],
                    },
                    clear_output: { wait: 'boolean' },
                    comm_open: {
                        comm_id: 'string',
                        target_name: 'string',
                        data: 'object',
                    },
                    comm_msg: { comm_id: 'string', data: 'object' },
                    comm_close: { comm_id: 'string' },
                    shutdown_reply: { restart: 'boolean' },
                };
            function o(e) {
                n.validateProperty(e, 'name', 'string'),
                    n.validateProperty(e, 'id', 'string');
            }
            (t.validateMessage = function(e) {
                n.validateProperty(e, 'metadata', 'object'),
                    n.validateProperty(e, 'content', 'object'),
                    n.validateProperty(e, 'channel', 'string'),
                    (function(e) {
                        for (let t = 0; t < i.length; t++)
                            n.validateProperty(e, i[t], 'string');
                    })(e.header),
                    'iopub' === e.channel &&
                        (function(e) {
                            if ('iopub' === e.channel) {
                                const t = r[e.header.msg_type];
                                if (void 0 === t) return;
                                const s = Object.keys(t),
                                    i = e.content;
                                for (let e = 0; e < s.length; e++) {
                                    let r = t[s[e]];
                                    Array.isArray(r) || (r = [r]),
                                        n.validateProperty(i, s[e], ...r);
                                }
                            }
                        })(e);
            }),
                (t.validateModel = o),
                (t.validateModels = function(e) {
                    if (!Array.isArray(e))
                        throw new Error('Invalid kernel list');
                    e.forEach(e => o(e));
                });
        },
        21941: function(e, t, s) {
            'use strict';
            var n =
                    (this && this.__createBinding) ||
                    (Object.create
                        ? function(e, t, s, n) {
                              void 0 === n && (n = s),
                                  Object.defineProperty(e, n, {
                                      enumerable: !0,
                                      get: function() {
                                          return t[s];
                                      },
                                  });
                          }
                        : function(e, t, s, n) {
                              void 0 === n && (n = s), (e[n] = t[s]);
                          }),
                i =
                    (this && this.__setModuleDefault) ||
                    (Object.create
                        ? function(e, t) {
                              Object.defineProperty(e, 'default', {
                                  enumerable: !0,
                                  value: t,
                              });
                          }
                        : function(e, t) {
                              e.default = t;
                          }),
                r =
                    (this && this.__importStar) ||
                    function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var s in e)
                                'default' !== s &&
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        s
                                    ) &&
                                    n(t, e, s);
                        return i(t, e), t;
                    },
                o =
                    (this && this.__exportStar) ||
                    function(e, t) {
                        for (var s in e)
                            'default' === s ||
                                Object.prototype.hasOwnProperty.call(t, s) ||
                                n(t, e, s);
                    };
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.KernelSpecAPI = t.KernelSpec = void 0);
            const a = r(s(65132));
            t.KernelSpec = a;
            const c = r(s(76735));
            (t.KernelSpecAPI = c), o(s(48750), t);
        },
        65132: (e, t) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
        },
        48750: function(e, t, s) {
            'use strict';
            var n =
                    (this && this.__createBinding) ||
                    (Object.create
                        ? function(e, t, s, n) {
                              void 0 === n && (n = s),
                                  Object.defineProperty(e, n, {
                                      enumerable: !0,
                                      get: function() {
                                          return t[s];
                                      },
                                  });
                          }
                        : function(e, t, s, n) {
                              void 0 === n && (n = s), (e[n] = t[s]);
                          }),
                i =
                    (this && this.__setModuleDefault) ||
                    (Object.create
                        ? function(e, t) {
                              Object.defineProperty(e, 'default', {
                                  enumerable: !0,
                                  value: t,
                              });
                          }
                        : function(e, t) {
                              e.default = t;
                          }),
                r =
                    (this && this.__importStar) ||
                    function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var s in e)
                                'default' !== s &&
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        s
                                    ) &&
                                    n(t, e, s);
                        return i(t, e), t;
                    };
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.KernelSpecManager = void 0);
            const o = s(26169),
                a = s(61313),
                c = s(32798),
                l = r(s(76735)),
                h = s(5179);
            class d extends h.BaseManager {
                constructor(e = {}) {
                    var t;
                    super(e),
                        (this._isReady = !1),
                        (this._connectionFailure = new c.Signal(this)),
                        (this._specs = null),
                        (this._specsChanged = new c.Signal(this)),
                        (this._ready = Promise.all([this.requestSpecs()])
                            .then(e => {})
                            .catch(e => {})
                            .then(() => {
                                this.isDisposed || (this._isReady = !0);
                            })),
                        (this._pollSpecs = new a.Poll({
                            auto: !1,
                            factory: () => this.requestSpecs(),
                            frequency: {
                                interval: 61e3,
                                backoff: !0,
                                max: 3e5,
                            },
                            name:
                                '@jupyterlab/services:KernelSpecManager#specs',
                            standby:
                                null !== (t = e.standby) && void 0 !== t
                                    ? t
                                    : 'when-hidden',
                        })),
                        this.ready.then(() => {
                            this._pollSpecs.start();
                        });
                }
                get isReady() {
                    return this._isReady;
                }
                get ready() {
                    return this._ready;
                }
                get specs() {
                    return this._specs;
                }
                get specsChanged() {
                    return this._specsChanged;
                }
                get connectionFailure() {
                    return this._connectionFailure;
                }
                dispose() {
                    this._pollSpecs.dispose(), super.dispose();
                }
                async refreshSpecs() {
                    await this._pollSpecs.refresh(), await this._pollSpecs.tick;
                }
                async requestSpecs() {
                    const e = await l.getSpecs(this.serverSettings);
                    this.isDisposed ||
                        o.JSONExt.deepEqual(e, this._specs) ||
                        ((this._specs = e), this._specsChanged.emit(e));
                }
            }
            t.KernelSpecManager = d;
        },
        76735: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.getSpecs = void 0);
            const n = s(59566),
                i = s(88872),
                r = s(96801);
            t.getSpecs = async function(e = n.ServerConnection.makeSettings()) {
                const t = r.URLExt.join(e.baseUrl, 'api/kernelspecs'),
                    s = await n.ServerConnection.makeRequest(t, {}, e);
                if (200 !== s.status)
                    throw await n.ServerConnection.ResponseError.create(s);
                const o = await s.json();
                return i.validateSpecModels(o);
            };
        },
        88872: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.validateSpecModels = t.validateSpecModel = void 0);
            const n = s(74284);
            function i(e) {
                const t = e.spec;
                if (!t) throw new Error('Invalid kernel spec');
                n.validateProperty(e, 'name', 'string'),
                    n.validateProperty(e, 'resources', 'object'),
                    n.validateProperty(t, 'language', 'string'),
                    n.validateProperty(t, 'display_name', 'string'),
                    n.validateProperty(t, 'argv', 'array');
                let s = null;
                t.hasOwnProperty('metadata') &&
                    (n.validateProperty(t, 'metadata', 'object'),
                    (s = t.metadata));
                let i = null;
                return (
                    t.hasOwnProperty('env') &&
                        (n.validateProperty(t, 'env', 'object'), (i = t.env)),
                    {
                        name: e.name,
                        resources: e.resources,
                        language: t.language,
                        display_name: t.display_name,
                        argv: t.argv,
                        metadata: s,
                        env: i,
                    }
                );
            }
            (t.validateSpecModel = i),
                (t.validateSpecModels = function(e) {
                    if (!e.hasOwnProperty('kernelspecs'))
                        throw new Error('No kernelspecs found');
                    let t = Object.keys(e.kernelspecs);
                    const s = Object.create(null);
                    let n = e.default;
                    for (let n = 0; n < t.length; n++) {
                        const r = e.kernelspecs[t[n]];
                        try {
                            s[t[n]] = i(r);
                        } catch (e) {
                            console.warn(
                                `Removing errant kernel spec: ${t[n]}`
                            );
                        }
                    }
                    if (((t = Object.keys(s)), !t.length))
                        throw new Error('No valid kernelspecs found');
                    return (
                        (n && 'string' == typeof n && n in s) ||
                            ((n = t[0]),
                            console.warn(
                                `Default kernel not found, using '${t[0]}'`
                            )),
                        { default: n, kernelspecs: s }
                    );
                });
        },
        40944: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.ServiceManager = void 0);
            const n = s(32798),
                i = s(75334),
                r = s(37017),
                o = s(4851),
                a = s(21941),
                c = s(38542),
                l = s(36090),
                h = s(94629),
                d = s(59566),
                u = s(3713),
                _ = s(61613);
            t.ServiceManager = class {
                constructor(e = {}) {
                    var t, s;
                    (this._isDisposed = !1),
                        (this._connectionFailure = new n.Signal(this)),
                        (this._isReady = !1);
                    const g = e.defaultDrive,
                        p =
                            null !== (t = e.serverSettings) && void 0 !== t
                                ? t
                                : d.ServerConnection.makeSettings(),
                        m = {
                            defaultDrive: g,
                            serverSettings: p,
                            standby:
                                null !== (s = e.standby) && void 0 !== s
                                    ? s
                                    : 'when-hidden',
                        },
                        f = new _.KernelManager(m);
                    (this.serverSettings = p),
                        (this.contents = new o.ContentsManager(m)),
                        (this.sessions = new c.SessionManager(
                            Object.assign(Object.assign({}, m), {
                                kernelManager: f,
                            })
                        )),
                        (this.settings = new l.SettingManager(m)),
                        (this.terminals = new h.TerminalManager(m)),
                        (this.builder = new i.BuildManager(m)),
                        (this.workspaces = new u.WorkspaceManager(m)),
                        (this.nbconvert = new r.NbConvertManager(m)),
                        (this.kernelspecs = new a.KernelSpecManager(m)),
                        this.kernelspecs.connectionFailure.connect(
                            this._onConnectionFailure,
                            this
                        ),
                        this.sessions.connectionFailure.connect(
                            this._onConnectionFailure,
                            this
                        ),
                        this.terminals.connectionFailure.connect(
                            this._onConnectionFailure,
                            this
                        );
                    const v = [this.sessions.ready, this.kernelspecs.ready];
                    this.terminals.isAvailable() &&
                        v.push(this.terminals.ready),
                        (this._readyPromise = Promise.all(v).then(() => {
                            this._isReady = !0;
                        }));
                }
                get connectionFailure() {
                    return this._connectionFailure;
                }
                get isDisposed() {
                    return this._isDisposed;
                }
                dispose() {
                    this.isDisposed ||
                        ((this._isDisposed = !0),
                        n.Signal.clearData(this),
                        this.contents.dispose(),
                        this.sessions.dispose(),
                        this.terminals.dispose());
                }
                get isReady() {
                    return this._isReady;
                }
                get ready() {
                    return this._readyPromise;
                }
                _onConnectionFailure(e, t) {
                    this._connectionFailure.emit(t);
                }
            };
        },
        37017: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.NbConvertManager = void 0);
            const n = s(96801),
                i = s(59566);
            t.NbConvertManager = class {
                constructor(e = {}) {
                    var t;
                    this.serverSettings =
                        null !== (t = e.serverSettings) && void 0 !== t
                            ? t
                            : i.ServerConnection.makeSettings();
                }
                async getExportFormats() {
                    const e = this.serverSettings.baseUrl,
                        t = n.URLExt.join(e, 'api/nbconvert'),
                        { serverSettings: s } = this,
                        r = await i.ServerConnection.makeRequest(t, {}, s);
                    if (200 !== r.status)
                        throw await i.ServerConnection.ResponseError.create(r);
                    const o = await r.json(),
                        a = {};
                    return (
                        Object.keys(o).forEach(function(e) {
                            const t = o[e].output_mimetype;
                            a[e] = { output_mimetype: t };
                        }),
                        a
                    );
                }
            };
        },
        59566: (e, t, s) => {
            'use strict';
            var n,
                i,
                r,
                o = s(18533);
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.ServerConnection = void 0);
            const a = s(96801);
            let c, l, h, d;
            if ('undefined' == typeof window) {
                const e = s(88741);
                (c = null !== (n = s.g.fetch) && void 0 !== n ? n : e),
                    (h =
                        null !== (i = s.g.Request) && void 0 !== i
                            ? i
                            : e.Request),
                    (l =
                        null !== (r = s.g.Headers) && void 0 !== r
                            ? r
                            : e.Headers),
                    (d = s(80396));
            } else (c = fetch), (h = Request), (l = Headers), (d = WebSocket);
            var u, _;
            !(function(e) {
                (e.makeSettings = function(e) {
                    return _.makeSettings(e);
                }),
                    (e.makeRequest = function(e, t, s) {
                        return _.handleRequest(e, t, s);
                    });
                class t extends Error {
                    constructor(
                        e,
                        t = `Invalid response: ${e.status} ${e.statusText}`,
                        s = ''
                    ) {
                        super(t), (this.response = e), (this.traceback = s);
                    }
                    static async create(e) {
                        try {
                            const s = await e.json();
                            return (
                                s.traceback && console.error(s.traceback),
                                s.message ? new t(e, s.message) : new t(e)
                            );
                        } catch (s) {
                            return console.debug(s), new t(e);
                        }
                    }
                }
                e.ResponseError = t;
                class s extends TypeError {
                    constructor(e) {
                        super(e.message), (this.stack = e.stack);
                    }
                }
                e.NetworkError = s;
            })((u = t.ServerConnection || (t.ServerConnection = {}))),
                (function(e) {
                    (e.makeSettings = function(e = {}) {
                        var t;
                        const s = a.PageConfig.getBaseUrl(),
                            n = a.PageConfig.getWsUrl(),
                            i = a.URLExt.normalize(e.baseUrl) || s;
                        let r = e.wsUrl;
                        return (
                            r || i !== s || (r = n),
                            r ||
                                0 !== i.indexOf('http') ||
                                (r = 'ws' + i.slice(4)),
                            (r = null != r ? r : n),
                            Object.assign(
                                Object.assign(
                                    {
                                        init: {
                                            cache: 'no-store',
                                            credentials: 'same-origin',
                                        },
                                        fetch: c,
                                        Headers: l,
                                        Request: h,
                                        WebSocket: d,
                                        token: a.PageConfig.getToken(),
                                        appUrl: a.PageConfig.getOption(
                                            'appUrl'
                                        ),
                                        appendToken:
                                            'undefined' == typeof window ||
                                            void 0 !==
                                                (null ===
                                                    (t =
                                                        void 0 === o
                                                            ? void 0
                                                            : {}) ||
                                                void 0 === t
                                                    ? void 0
                                                    : t.JEST_WORKER_ID) ||
                                            a.URLExt.getHostName(s) !==
                                                a.URLExt.getHostName(r),
                                    },
                                    e
                                ),
                                { baseUrl: i, wsUrl: r }
                            )
                        );
                    }),
                        (e.handleRequest = function(e, t, s) {
                            var n;
                            if (0 !== e.indexOf(s.baseUrl))
                                throw new Error(
                                    'Can only be used for notebook server requests'
                                );
                            'no-store' ===
                                (null !== (n = t.cache) && void 0 !== n
                                    ? n
                                    : s.init.cache) &&
                                (e +=
                                    (/\?/.test(e) ? '&' : '?') +
                                    new Date().getTime());
                            const i = new s.Request(
                                e,
                                Object.assign(Object.assign({}, s.init), t)
                            );
                            let r = !1;
                            if (
                                (s.token &&
                                    ((r = !0),
                                    i.headers.append(
                                        'Authorization',
                                        `token ${s.token}`
                                    )),
                                'undefined' != typeof document &&
                                    (null === document || void 0 === document
                                        ? void 0
                                        : document.cookie))
                            ) {
                                const e = (function(e) {
                                    const t = document.cookie.match(
                                        '\\b_xsrf=([^;]*)\\b'
                                    );
                                    return null == t ? void 0 : t[1];
                                })();
                                void 0 !== e &&
                                    ((r = !0),
                                    i.headers.append('X-XSRFToken', e));
                            }
                            return (
                                !i.headers.has('Content-Type') &&
                                    r &&
                                    i.headers.set(
                                        'Content-Type',
                                        'application/json'
                                    ),
                                s.fetch.call(null, i).catch(e => {
                                    throw new u.NetworkError(e);
                                })
                            );
                        });
                })(_ || (_ = {}));
        },
        12361: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.SessionConnection = void 0);
            const n = s(32798),
                i = s(76591),
                r = s(967),
                o = s(26169);
            t.SessionConnection = class {
                constructor(e) {
                    var t, s, r, a;
                    (this._id = ''),
                        (this._path = ''),
                        (this._name = ''),
                        (this._type = ''),
                        (this._kernel = null),
                        (this._isDisposed = !1),
                        (this._disposed = new n.Signal(this)),
                        (this._kernelChanged = new n.Signal(this)),
                        (this._statusChanged = new n.Signal(this)),
                        (this._connectionStatusChanged = new n.Signal(this)),
                        (this._pendingInput = new n.Signal(this)),
                        (this._iopubMessage = new n.Signal(this)),
                        (this._unhandledMessage = new n.Signal(this)),
                        (this._anyMessage = new n.Signal(this)),
                        (this._propertyChanged = new n.Signal(this)),
                        (this._id = e.model.id),
                        (this._name = e.model.name),
                        (this._path = e.model.path),
                        (this._type = e.model.type),
                        (this._username =
                            null !== (t = e.username) && void 0 !== t ? t : ''),
                        (this._clientId =
                            null !== (s = e.clientId) && void 0 !== s
                                ? s
                                : o.UUID.uuid4()),
                        (this._connectToKernel = e.connectToKernel),
                        (this._kernelConnectionOptions =
                            null !== (r = e.kernelConnectionOptions) &&
                            void 0 !== r
                                ? r
                                : {}),
                        (this.serverSettings =
                            null !== (a = e.serverSettings) && void 0 !== a
                                ? a
                                : i.ServerConnection.makeSettings()),
                        this.setupKernel(e.model.kernel);
                }
                get disposed() {
                    return this._disposed;
                }
                get kernelChanged() {
                    return this._kernelChanged;
                }
                get statusChanged() {
                    return this._statusChanged;
                }
                get connectionStatusChanged() {
                    return this._connectionStatusChanged;
                }
                get pendingInput() {
                    return this._pendingInput;
                }
                get iopubMessage() {
                    return this._iopubMessage;
                }
                get unhandledMessage() {
                    return this._unhandledMessage;
                }
                get anyMessage() {
                    return this._anyMessage;
                }
                get propertyChanged() {
                    return this._propertyChanged;
                }
                get id() {
                    return this._id;
                }
                get kernel() {
                    return this._kernel;
                }
                get path() {
                    return this._path;
                }
                get type() {
                    return this._type;
                }
                get name() {
                    return this._name;
                }
                get model() {
                    return {
                        id: this.id,
                        kernel: this.kernel && {
                            id: this.kernel.id,
                            name: this.kernel.name,
                        },
                        path: this._path,
                        type: this._type,
                        name: this._name,
                    };
                }
                get isDisposed() {
                    return this._isDisposed;
                }
                update(e) {
                    const t = this.model;
                    if (
                        ((this._path = e.path),
                        (this._name = e.name),
                        (this._type = e.type),
                        (null === this._kernel && null !== e.kernel) ||
                            (null !== this._kernel && null === e.kernel) ||
                            (null !== this._kernel &&
                                null !== e.kernel &&
                                this._kernel.id !== e.kernel.id))
                    ) {
                        null !== this._kernel && this._kernel.dispose();
                        const t = this._kernel || null;
                        this.setupKernel(e.kernel);
                        const s = this._kernel || null;
                        this._kernelChanged.emit({
                            name: 'kernel',
                            oldValue: t,
                            newValue: s,
                        });
                    }
                    this._handleModelChange(t);
                }
                dispose() {
                    if (!this.isDisposed) {
                        if (
                            ((this._isDisposed = !0),
                            this._disposed.emit(),
                            this._kernel)
                        ) {
                            this._kernel.dispose();
                            const e = this._kernel;
                            this._kernel = null;
                            const t = this._kernel;
                            this._kernelChanged.emit({
                                name: 'kernel',
                                oldValue: e,
                                newValue: t,
                            });
                        }
                        n.Signal.clearData(this);
                    }
                }
                async setPath(e) {
                    if (this.isDisposed) throw new Error('Session is disposed');
                    await this._patch({ path: e });
                }
                async setName(e) {
                    if (this.isDisposed) throw new Error('Session is disposed');
                    await this._patch({ name: e });
                }
                async setType(e) {
                    if (this.isDisposed) throw new Error('Session is disposed');
                    await this._patch({ type: e });
                }
                async changeKernel(e) {
                    if (this.isDisposed) throw new Error('Session is disposed');
                    return await this._patch({ kernel: e }), this.kernel;
                }
                async shutdown() {
                    if (this.isDisposed) throw new Error('Session is disposed');
                    await r.shutdownSession(this.id, this.serverSettings),
                        this.dispose();
                }
                setupKernel(e) {
                    if (null === e) return void (this._kernel = null);
                    const t = this._connectToKernel(
                        Object.assign(
                            Object.assign({}, this._kernelConnectionOptions),
                            {
                                model: e,
                                username: this._username,
                                clientId: this._clientId,
                                serverSettings: this.serverSettings,
                            }
                        )
                    );
                    (this._kernel = t),
                        t.statusChanged.connect(this.onKernelStatus, this),
                        t.connectionStatusChanged.connect(
                            this.onKernelConnectionStatus,
                            this
                        ),
                        t.pendingInput.connect(this.onPendingInput, this),
                        t.unhandledMessage.connect(
                            this.onUnhandledMessage,
                            this
                        ),
                        t.iopubMessage.connect(this.onIOPubMessage, this),
                        t.anyMessage.connect(this.onAnyMessage, this);
                }
                onKernelStatus(e, t) {
                    this._statusChanged.emit(t);
                }
                onKernelConnectionStatus(e, t) {
                    this._connectionStatusChanged.emit(t);
                }
                onPendingInput(e, t) {
                    this._pendingInput.emit(t);
                }
                onIOPubMessage(e, t) {
                    this._iopubMessage.emit(t);
                }
                onUnhandledMessage(e, t) {
                    this._unhandledMessage.emit(t);
                }
                onAnyMessage(e, t) {
                    this._anyMessage.emit(t);
                }
                async _patch(e) {
                    const t = await r.updateSession(
                        Object.assign(Object.assign({}, e), { id: this._id }),
                        this.serverSettings
                    );
                    return this.update(t), t;
                }
                _handleModelChange(e) {
                    e.name !== this._name && this._propertyChanged.emit('name'),
                        e.type !== this._type &&
                            this._propertyChanged.emit('type'),
                        e.path !== this._path &&
                            this._propertyChanged.emit('path');
                }
            };
        },
        38542: function(e, t, s) {
            'use strict';
            var n =
                    (this && this.__createBinding) ||
                    (Object.create
                        ? function(e, t, s, n) {
                              void 0 === n && (n = s),
                                  Object.defineProperty(e, n, {
                                      enumerable: !0,
                                      get: function() {
                                          return t[s];
                                      },
                                  });
                          }
                        : function(e, t, s, n) {
                              void 0 === n && (n = s), (e[n] = t[s]);
                          }),
                i =
                    (this && this.__setModuleDefault) ||
                    (Object.create
                        ? function(e, t) {
                              Object.defineProperty(e, 'default', {
                                  enumerable: !0,
                                  value: t,
                              });
                          }
                        : function(e, t) {
                              e.default = t;
                          }),
                r =
                    (this && this.__importStar) ||
                    function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var s in e)
                                'default' !== s &&
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        s
                                    ) &&
                                    n(t, e, s);
                        return i(t, e), t;
                    },
                o =
                    (this && this.__exportStar) ||
                    function(e, t) {
                        for (var s in e)
                            'default' === s ||
                                Object.prototype.hasOwnProperty.call(t, s) ||
                                n(t, e, s);
                    };
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.SessionAPI = t.Session = void 0);
            const a = r(s(34061));
            t.Session = a;
            const c = r(s(967));
            (t.SessionAPI = c), o(s(97953), t);
        },
        97953: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.SessionManager = void 0);
            const n = s(43892),
                i = s(61313),
                r = s(32798),
                o = s(59566),
                a = s(5179),
                c = s(12361),
                l = s(967);
            class h extends a.BaseManager {
                constructor(e) {
                    var t;
                    super(e),
                        (this._isReady = !1),
                        (this._sessionConnections = new Set()),
                        (this._models = new Map()),
                        (this._runningChanged = new r.Signal(this)),
                        (this._connectionFailure = new r.Signal(this)),
                        (this._connectToKernel = e =>
                            this._kernelManager.connectTo(e)),
                        (this._kernelManager = e.kernelManager),
                        (this._pollModels = new i.Poll({
                            auto: !1,
                            factory: () => this.requestRunning(),
                            frequency: { interval: 1e4, backoff: !0, max: 3e5 },
                            name: '@jupyterlab/services:SessionManager#models',
                            standby:
                                null !== (t = e.standby) && void 0 !== t
                                    ? t
                                    : 'when-hidden',
                        })),
                        (this._ready = (async () => {
                            await this._pollModels.start(),
                                await this._pollModels.tick,
                                await this._kernelManager.ready,
                                (this._isReady = !0);
                        })());
                }
                get isReady() {
                    return this._isReady;
                }
                get ready() {
                    return this._ready;
                }
                get runningChanged() {
                    return this._runningChanged;
                }
                get connectionFailure() {
                    return this._connectionFailure;
                }
                dispose() {
                    this.isDisposed ||
                        (this._models.clear(),
                        this._sessionConnections.forEach(e => e.dispose()),
                        this._pollModels.dispose(),
                        super.dispose());
                }
                connectTo(e) {
                    const t = new c.SessionConnection(
                        Object.assign(Object.assign({}, e), {
                            connectToKernel: this._connectToKernel,
                            serverSettings: this.serverSettings,
                        })
                    );
                    return (
                        this._onStarted(t),
                        this._models.has(e.model.id) ||
                            this.refreshRunning().catch(() => {}),
                        t
                    );
                }
                running() {
                    return n.iter([...this._models.values()]);
                }
                async refreshRunning() {
                    await this._pollModels.refresh(),
                        await this._pollModels.tick;
                }
                async startNew(e, t = {}) {
                    const s = await l.startSession(e, this.serverSettings);
                    return (
                        await this.refreshRunning(),
                        this.connectTo(
                            Object.assign(Object.assign({}, t), { model: s })
                        )
                    );
                }
                async shutdown(e) {
                    await l.shutdownSession(e, this.serverSettings),
                        await this.refreshRunning();
                }
                async shutdownAll() {
                    await this.refreshRunning(),
                        await Promise.all(
                            [...this._models.keys()].map(e =>
                                l.shutdownSession(e, this.serverSettings)
                            )
                        ),
                        await this.refreshRunning();
                }
                async stopIfNeeded(e) {
                    try {
                        const t = (
                            await l.listRunning(this.serverSettings)
                        ).filter(t => t.path === e);
                        if (1 === t.length) {
                            const e = t[0].id;
                            await this.shutdown(e);
                        }
                    } catch (e) {}
                }
                async findById(e) {
                    return (
                        this._models.has(e) || (await this.refreshRunning()),
                        this._models.get(e)
                    );
                }
                async findByPath(e) {
                    for (const t of this._models.values())
                        if (t.path === e) return t;
                    await this.refreshRunning();
                    for (const t of this._models.values())
                        if (t.path === e) return t;
                }
                async requestRunning() {
                    var e, t;
                    let s;
                    try {
                        s = await l.listRunning(this.serverSettings);
                    } catch (s) {
                        throw ((s instanceof o.ServerConnection.NetworkError ||
                            503 ===
                                (null === (e = s.response) || void 0 === e
                                    ? void 0
                                    : e.status) ||
                            424 ===
                                (null === (t = s.response) || void 0 === t
                                    ? void 0
                                    : t.status)) &&
                            this._connectionFailure.emit(s),
                        s);
                    }
                    this.isDisposed ||
                        (this._models.size === s.length &&
                            n.every(s, e => {
                                var t, s, n, i;
                                const r = this._models.get(e.id);
                                return (
                                    !!r &&
                                    (null === (t = r.kernel) || void 0 === t
                                        ? void 0
                                        : t.id) ===
                                        (null === (s = e.kernel) || void 0 === s
                                            ? void 0
                                            : s.id) &&
                                    (null === (n = r.kernel) || void 0 === n
                                        ? void 0
                                        : n.name) ===
                                        (null === (i = e.kernel) || void 0 === i
                                            ? void 0
                                            : i.name) &&
                                    r.name === e.name &&
                                    r.path === e.path &&
                                    r.type === e.type
                                );
                            })) ||
                        ((this._models = new Map(s.map(e => [e.id, e]))),
                        this._sessionConnections.forEach(e => {
                            this._models.has(e.id)
                                ? e.update(this._models.get(e.id))
                                : e.dispose();
                        }),
                        this._runningChanged.emit(s));
                }
                _onStarted(e) {
                    this._sessionConnections.add(e),
                        e.disposed.connect(this._onDisposed, this),
                        e.propertyChanged.connect(this._onChanged, this),
                        e.kernelChanged.connect(this._onChanged, this);
                }
                _onDisposed(e) {
                    this._sessionConnections.delete(e),
                        this.refreshRunning().catch(() => {});
                }
                _onChanged() {
                    this.refreshRunning().catch(() => {});
                }
            }
            t.SessionManager = h;
        },
        967: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.updateSession = t.startSession = t.getSessionModel = t.shutdownSession = t.getSessionUrl = t.listRunning = t.SESSION_SERVICE_URL = void 0);
            const n = s(59566),
                i = s(96801),
                r = s(85833);
            function o(e, s) {
                return i.URLExt.join(e, t.SESSION_SERVICE_URL, s);
            }
            (t.SESSION_SERVICE_URL = 'api/sessions'),
                (t.listRunning = async function(
                    e = n.ServerConnection.makeSettings()
                ) {
                    const s = i.URLExt.join(e.baseUrl, t.SESSION_SERVICE_URL),
                        o = await n.ServerConnection.makeRequest(s, {}, e);
                    if (200 !== o.status)
                        throw await n.ServerConnection.ResponseError.create(o);
                    const a = await o.json();
                    if (!Array.isArray(a))
                        throw new Error('Invalid Session list');
                    return (
                        a.forEach(e => {
                            r.updateLegacySessionModel(e), r.validateModel(e);
                        }),
                        a
                    );
                }),
                (t.getSessionUrl = o),
                (t.shutdownSession = async function(
                    e,
                    t = n.ServerConnection.makeSettings()
                ) {
                    var s;
                    const i = o(t.baseUrl, e),
                        r = await n.ServerConnection.makeRequest(
                            i,
                            { method: 'DELETE' },
                            t
                        );
                    if (404 === r.status) {
                        const t =
                            null !== (s = (await r.json()).message) &&
                            void 0 !== s
                                ? s
                                : `The session "${e}"" does not exist on the server`;
                        console.warn(t);
                    } else {
                        if (410 === r.status)
                            throw new n.ServerConnection.ResponseError(
                                r,
                                'The kernel was deleted but the session was not'
                            );
                        if (204 !== r.status)
                            throw await n.ServerConnection.ResponseError.create(
                                r
                            );
                    }
                }),
                (t.getSessionModel = async function(
                    e,
                    t = n.ServerConnection.makeSettings()
                ) {
                    const s = o(t.baseUrl, e),
                        i = await n.ServerConnection.makeRequest(s, {}, t);
                    if (200 !== i.status)
                        throw await n.ServerConnection.ResponseError.create(i);
                    const a = await i.json();
                    return r.updateLegacySessionModel(a), r.validateModel(a), a;
                }),
                (t.startSession = async function(
                    e,
                    s = n.ServerConnection.makeSettings()
                ) {
                    const o = i.URLExt.join(s.baseUrl, t.SESSION_SERVICE_URL),
                        a = { method: 'POST', body: JSON.stringify(e) },
                        c = await n.ServerConnection.makeRequest(o, a, s);
                    if (201 !== c.status)
                        throw await n.ServerConnection.ResponseError.create(c);
                    const l = await c.json();
                    return r.updateLegacySessionModel(l), r.validateModel(l), l;
                }),
                (t.updateSession = async function(
                    e,
                    t = n.ServerConnection.makeSettings()
                ) {
                    const s = o(t.baseUrl, e.id),
                        i = { method: 'PATCH', body: JSON.stringify(e) },
                        a = await n.ServerConnection.makeRequest(s, i, t);
                    if (200 !== a.status)
                        throw await n.ServerConnection.ResponseError.create(a);
                    const c = await a.json();
                    return r.updateLegacySessionModel(c), r.validateModel(c), c;
                });
        },
        34061: (e, t) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
        },
        85833: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.validateModels = t.updateLegacySessionModel = t.validateModel = void 0);
            const n = s(76799),
                i = s(74284);
            function r(e) {
                i.validateProperty(e, 'id', 'string'),
                    i.validateProperty(e, 'type', 'string'),
                    i.validateProperty(e, 'name', 'string'),
                    i.validateProperty(e, 'path', 'string'),
                    i.validateProperty(e, 'kernel', 'object'),
                    n.validateModel(e.kernel);
            }
            (t.validateModel = r),
                (t.updateLegacySessionModel = function(e) {
                    void 0 === e.path &&
                        void 0 !== e.notebook &&
                        ((e.path = e.notebook.path),
                        (e.type = 'notebook'),
                        (e.name = ''));
                }),
                (t.validateModels = function(e) {
                    if (!Array.isArray(e))
                        throw new Error('Invalid session list');
                    e.forEach(e => r(e));
                });
        },
        36090: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.SettingManager = void 0);
            const n = s(96801),
                i = s(64176),
                r = s(59566);
            class o extends i.DataConnector {
                constructor(e = {}) {
                    var t;
                    super(),
                        (this.serverSettings =
                            null !== (t = e.serverSettings) && void 0 !== t
                                ? t
                                : r.ServerConnection.makeSettings());
                }
                async fetch(e) {
                    if (!e)
                        throw new Error(
                            'Plugin `id` parameter is required for settings fetch.'
                        );
                    const { serverSettings: t } = this,
                        { baseUrl: s, appUrl: n } = t,
                        {
                            makeRequest: i,
                            ResponseError: o,
                        } = r.ServerConnection,
                        c = s + n,
                        l = a.url(c, e),
                        h = await i(l, {}, t);
                    if (200 !== h.status) throw await o.create(h);
                    return h.json();
                }
                async list() {
                    var e, t;
                    const { serverSettings: s } = this,
                        { baseUrl: n, appUrl: i } = s,
                        {
                            makeRequest: o,
                            ResponseError: c,
                        } = r.ServerConnection,
                        l = n + i,
                        h = a.url(l, ''),
                        d = await o(h, {}, s);
                    if (200 !== d.status) throw new c(d);
                    const u = await d.json(),
                        _ =
                            null !==
                                (t =
                                    null ===
                                        (e = null == u ? void 0 : u.settings) ||
                                    void 0 === e
                                        ? void 0
                                        : e.map(
                                              e => (
                                                  (e.data = {
                                                      composite: {},
                                                      user: {},
                                                  }),
                                                  e
                                              )
                                          )) && void 0 !== t
                                ? t
                                : [];
                    return { ids: _.map(e => e.id), values: _ };
                }
                async save(e, t) {
                    const { serverSettings: s } = this,
                        { baseUrl: n, appUrl: i } = s,
                        {
                            makeRequest: o,
                            ResponseError: c,
                        } = r.ServerConnection,
                        l = n + i,
                        h = a.url(l, e),
                        d = { body: JSON.stringify({ raw: t }), method: 'PUT' },
                        u = await o(h, d, s);
                    if (204 !== u.status) throw new c(u);
                }
            }
            var a;
            (t.SettingManager = o),
                (function(e) {
                    e.url = function(e, t) {
                        return n.URLExt.join(e, 'api/settings', t);
                    };
                })(a || (a = {}));
        },
        80396: (e, t) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = WebSocket);
        },
        17964: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.TerminalConnection = void 0);
            const n = s(96801),
                i = s(26169),
                r = s(32798),
                o = s(76591),
                a = s(43396);
            class c {
                constructor(e) {
                    var t;
                    (this._createSocket = () => {
                        this._errorIfDisposed(),
                            this._clearSocket(),
                            this._updateConnectionStatus('connecting');
                        const e = this._name,
                            t = this.serverSettings;
                        let s = n.URLExt.join(
                            t.wsUrl,
                            'terminals',
                            'websocket',
                            encodeURIComponent(e)
                        );
                        const i = t.token;
                        t.appendToken &&
                            '' !== i &&
                            (s += `?token=${encodeURIComponent(i)}`),
                            (this._ws = new t.WebSocket(s)),
                            (this._ws.onmessage = this._onWSMessage),
                            (this._ws.onclose = this._onWSClose),
                            (this._ws.onerror = this._onWSClose);
                    }),
                        (this._onWSMessage = e => {
                            if (this._isDisposed) return;
                            const t = JSON.parse(e.data);
                            'disconnect' === t[0] && this.dispose(),
                                'connecting' !== this._connectionStatus
                                    ? this._messageReceived.emit({
                                          type: t[0],
                                          content: t.slice(1),
                                      })
                                    : 'setup' === t[0] &&
                                      this._updateConnectionStatus('connected');
                        }),
                        (this._onWSClose = e => {
                            console.warn(
                                `Terminal websocket closed: ${e.code}`
                            ),
                                this.isDisposed || this._reconnect();
                        }),
                        (this._connectionStatus = 'connecting'),
                        (this._connectionStatusChanged = new r.Signal(this)),
                        (this._isDisposed = !1),
                        (this._disposed = new r.Signal(this)),
                        (this._messageReceived = new r.Signal(this)),
                        (this._reconnectTimeout = null),
                        (this._ws = null),
                        (this._noOp = () => {}),
                        (this._reconnectLimit = 7),
                        (this._reconnectAttempt = 0),
                        (this._pendingMessages = []),
                        (this._name = e.model.name),
                        (this.serverSettings =
                            null !== (t = e.serverSettings) && void 0 !== t
                                ? t
                                : o.ServerConnection.makeSettings()),
                        this._createSocket();
                }
                get disposed() {
                    return this._disposed;
                }
                get messageReceived() {
                    return this._messageReceived;
                }
                get name() {
                    return this._name;
                }
                get model() {
                    return { name: this._name };
                }
                get isDisposed() {
                    return this._isDisposed;
                }
                dispose() {
                    this._isDisposed ||
                        ((this._isDisposed = !0),
                        this._disposed.emit(),
                        this._updateConnectionStatus('disconnected'),
                        this._clearSocket(),
                        r.Signal.clearData(this));
                }
                send(e) {
                    this._sendMessage(e);
                }
                _sendMessage(e, t = !0) {
                    if (!this._isDisposed && e.content)
                        if ('connected' === this.connectionStatus && this._ws) {
                            const t = [e.type, ...e.content];
                            this._ws.send(JSON.stringify(t));
                        } else {
                            if (!t)
                                throw new Error(
                                    `Could not send message: ${JSON.stringify(
                                        e
                                    )}`
                                );
                            this._pendingMessages.push(e);
                        }
                }
                _sendPending() {
                    for (
                        ;
                        'connected' === this.connectionStatus &&
                        this._pendingMessages.length > 0;

                    )
                        this._sendMessage(this._pendingMessages[0], !1),
                            this._pendingMessages.shift();
                }
                reconnect() {
                    this._errorIfDisposed();
                    const e = new i.PromiseDelegate(),
                        t = (s, n) => {
                            'connected' === n
                                ? (e.resolve(),
                                  this.connectionStatusChanged.disconnect(
                                      t,
                                      this
                                  ))
                                : 'disconnected' === n &&
                                  (e.reject(
                                      new Error(
                                          'Terminal connection disconnected'
                                      )
                                  ),
                                  this.connectionStatusChanged.disconnect(
                                      t,
                                      this
                                  ));
                        };
                    return (
                        this.connectionStatusChanged.connect(t, this),
                        (this._reconnectAttempt = 0),
                        this._reconnect(),
                        e.promise
                    );
                }
                _reconnect() {
                    if (
                        (this._errorIfDisposed(),
                        clearTimeout(this._reconnectTimeout),
                        this._reconnectAttempt < this._reconnectLimit)
                    ) {
                        this._updateConnectionStatus('connecting');
                        const e = l.getRandomIntInclusive(
                            0,
                            1e3 * (Math.pow(2, this._reconnectAttempt) - 1)
                        );
                        console.error(
                            `Connection lost, reconnecting in ${Math.floor(
                                e / 1e3
                            )} seconds.`
                        ),
                            (this._reconnectTimeout = setTimeout(
                                this._createSocket,
                                e
                            )),
                            (this._reconnectAttempt += 1);
                    } else this._updateConnectionStatus('disconnected');
                    this._clearSocket();
                }
                _clearSocket() {
                    null !== this._ws &&
                        ((this._ws.onopen = this._noOp),
                        (this._ws.onclose = this._noOp),
                        (this._ws.onerror = this._noOp),
                        (this._ws.onmessage = this._noOp),
                        this._ws.close(),
                        (this._ws = null));
                }
                async shutdown() {
                    await a.shutdownTerminal(this.name, this.serverSettings),
                        this.dispose();
                }
                clone() {
                    return new c(this);
                }
                _updateConnectionStatus(e) {
                    this._connectionStatus !== e &&
                        ((this._connectionStatus = e),
                        'connecting' !== e &&
                            ((this._reconnectAttempt = 0),
                            clearTimeout(this._reconnectTimeout)),
                        'connected' === e && this._sendPending(),
                        this._connectionStatusChanged.emit(e));
                }
                _errorIfDisposed() {
                    if (this.isDisposed)
                        throw new Error('Terminal connection is disposed');
                }
                get connectionStatusChanged() {
                    return this._connectionStatusChanged;
                }
                get connectionStatus() {
                    return this._connectionStatus;
                }
            }
            var l;
            (t.TerminalConnection = c),
                (function(e) {
                    (e.getTermUrl = function(e, t) {
                        return n.URLExt.join(
                            e,
                            a.TERMINAL_SERVICE_URL,
                            encodeURIComponent(t)
                        );
                    }),
                        (e.getRandomIntInclusive = function(e, t) {
                            return (
                                (e = Math.ceil(e)),
                                (t = Math.floor(t)),
                                Math.floor(Math.random() * (t - e + 1)) + e
                            );
                        });
                })(l || (l = {}));
        },
        94629: function(e, t, s) {
            'use strict';
            var n =
                    (this && this.__createBinding) ||
                    (Object.create
                        ? function(e, t, s, n) {
                              void 0 === n && (n = s),
                                  Object.defineProperty(e, n, {
                                      enumerable: !0,
                                      get: function() {
                                          return t[s];
                                      },
                                  });
                          }
                        : function(e, t, s, n) {
                              void 0 === n && (n = s), (e[n] = t[s]);
                          }),
                i =
                    (this && this.__setModuleDefault) ||
                    (Object.create
                        ? function(e, t) {
                              Object.defineProperty(e, 'default', {
                                  enumerable: !0,
                                  value: t,
                              });
                          }
                        : function(e, t) {
                              e.default = t;
                          }),
                r =
                    (this && this.__importStar) ||
                    function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var s in e)
                                'default' !== s &&
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        s
                                    ) &&
                                    n(t, e, s);
                        return i(t, e), t;
                    },
                o =
                    (this && this.__exportStar) ||
                    function(e, t) {
                        for (var s in e)
                            'default' === s ||
                                Object.prototype.hasOwnProperty.call(t, s) ||
                                n(t, e, s);
                    };
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.TerminalAPI = t.Terminal = void 0);
            const a = r(s(83522));
            t.Terminal = a;
            const c = r(s(43396));
            (t.TerminalAPI = c), o(s(50230), t);
        },
        50230: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.TerminalManager = void 0);
            const n = s(43892),
                i = s(61313),
                r = s(32798),
                o = s(76591),
                a = s(5179),
                c = s(43396),
                l = s(17964);
            class h extends a.BaseManager {
                constructor(e = {}) {
                    var t;
                    if (
                        (super(e),
                        (this._isReady = !1),
                        (this._names = []),
                        (this._terminalConnections = new Set()),
                        (this._runningChanged = new r.Signal(this)),
                        (this._connectionFailure = new r.Signal(this)),
                        !this.isAvailable())
                    )
                        return (
                            (this._ready = Promise.reject(
                                'Terminals unavailable'
                            )),
                            void this._ready.catch(e => {})
                        );
                    (this._pollModels = new i.Poll({
                        auto: !1,
                        factory: () => this.requestRunning(),
                        frequency: { interval: 1e4, backoff: !0, max: 3e5 },
                        name: '@jupyterlab/services:TerminalManager#models',
                        standby:
                            null !== (t = e.standby) && void 0 !== t
                                ? t
                                : 'when-hidden',
                    })),
                        (this._ready = (async () => {
                            await this._pollModels.start(),
                                await this._pollModels.tick,
                                (this._isReady = !0);
                        })());
                }
                get isReady() {
                    return this._isReady;
                }
                get ready() {
                    return this._ready;
                }
                get runningChanged() {
                    return this._runningChanged;
                }
                get connectionFailure() {
                    return this._connectionFailure;
                }
                dispose() {
                    this.isDisposed ||
                        ((this._names.length = 0),
                        this._terminalConnections.forEach(e => e.dispose()),
                        this._pollModels.dispose(),
                        super.dispose());
                }
                isAvailable() {
                    return c.isAvailable();
                }
                connectTo(e) {
                    const t = new l.TerminalConnection(
                        Object.assign(Object.assign({}, e), {
                            serverSettings: this.serverSettings,
                        })
                    );
                    return (
                        this._onStarted(t),
                        this._names.includes(e.model.name) ||
                            this.refreshRunning().catch(() => {}),
                        t
                    );
                }
                running() {
                    return n.iter(this._models);
                }
                async refreshRunning() {
                    await this._pollModels.refresh(),
                        await this._pollModels.tick;
                }
                async startNew(e) {
                    const t = await c.startNew(
                        this.serverSettings,
                        null == e ? void 0 : e.name,
                        null == e ? void 0 : e.cwd
                    );
                    return (
                        await this.refreshRunning(),
                        this.connectTo({ model: t })
                    );
                }
                async shutdown(e) {
                    await c.shutdownTerminal(e, this.serverSettings),
                        await this.refreshRunning();
                }
                async shutdownAll() {
                    await this.refreshRunning(),
                        await Promise.all(
                            this._names.map(e =>
                                c.shutdownTerminal(e, this.serverSettings)
                            )
                        ),
                        await this.refreshRunning();
                }
                async requestRunning() {
                    var e, t;
                    let s;
                    try {
                        s = await c.listRunning(this.serverSettings);
                    } catch (s) {
                        throw ((s instanceof o.ServerConnection.NetworkError ||
                            503 ===
                                (null === (e = s.response) || void 0 === e
                                    ? void 0
                                    : e.status) ||
                            424 ===
                                (null === (t = s.response) || void 0 === t
                                    ? void 0
                                    : t.status)) &&
                            this._connectionFailure.emit(s),
                        s);
                    }
                    if (this.isDisposed) return;
                    const n = s.map(({ name: e }) => e).sort();
                    n !== this._names &&
                        ((this._names = n),
                        this._terminalConnections.forEach(e => {
                            n.includes(e.name) || e.dispose();
                        }),
                        this._runningChanged.emit(this._models));
                }
                _onStarted(e) {
                    this._terminalConnections.add(e),
                        e.disposed.connect(this._onDisposed, this);
                }
                _onDisposed(e) {
                    this._terminalConnections.delete(e),
                        this.refreshRunning().catch(() => {});
                }
                get _models() {
                    return this._names.map(e => ({ name: e }));
                }
            }
            t.TerminalManager = h;
        },
        43396: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.shutdownTerminal = t.listRunning = t.startNew = t.isAvailable = t.TERMINAL_SERVICE_URL = void 0);
            const n = s(96801),
                i = s(59566);
            function r() {
                return (
                    'true' ===
                    String(
                        n.PageConfig.getOption('terminalsAvailable')
                    ).toLowerCase()
                );
            }
            var o;
            (t.TERMINAL_SERVICE_URL = 'api/terminals'),
                (t.isAvailable = r),
                (t.startNew = async function(
                    e = i.ServerConnection.makeSettings(),
                    s,
                    r
                ) {
                    o.errorIfNotAvailable();
                    const a = n.URLExt.join(e.baseUrl, t.TERMINAL_SERVICE_URL),
                        c = {
                            method: 'POST',
                            body: JSON.stringify({ name: s, cwd: r }),
                        },
                        l = await i.ServerConnection.makeRequest(a, c, e);
                    if (200 !== l.status)
                        throw await i.ServerConnection.ResponseError.create(l);
                    return await l.json();
                }),
                (t.listRunning = async function(
                    e = i.ServerConnection.makeSettings()
                ) {
                    o.errorIfNotAvailable();
                    const s = n.URLExt.join(e.baseUrl, t.TERMINAL_SERVICE_URL),
                        r = await i.ServerConnection.makeRequest(s, {}, e);
                    if (200 !== r.status)
                        throw await i.ServerConnection.ResponseError.create(r);
                    const a = await r.json();
                    if (!Array.isArray(a))
                        throw new Error('Invalid terminal list');
                    return a;
                }),
                (t.shutdownTerminal = async function(
                    e,
                    s = i.ServerConnection.makeSettings()
                ) {
                    var r;
                    o.errorIfNotAvailable();
                    const a = n.URLExt.join(
                            s.baseUrl,
                            t.TERMINAL_SERVICE_URL,
                            e
                        ),
                        c = await i.ServerConnection.makeRequest(
                            a,
                            { method: 'DELETE' },
                            s
                        );
                    if (404 === c.status) {
                        const t =
                            null !== (r = (await c.json()).message) &&
                            void 0 !== r
                                ? r
                                : `The terminal session "${e}"" does not exist on the server`;
                        console.warn(t);
                    } else if (204 !== c.status)
                        throw await i.ServerConnection.ResponseError.create(c);
                }),
                (function(e) {
                    e.errorIfNotAvailable = function() {
                        if (!r()) throw new Error('Terminals Unavailable');
                    };
                })(o || (o = {}));
        },
        83522: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.isAvailable = void 0);
            const n = s(43396);
            Object.defineProperty(t, 'isAvailable', {
                enumerable: !0,
                get: function() {
                    return n.isAvailable;
                },
            });
        },
        74284: (e, t) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.validateProperty = void 0),
                (t.validateProperty = function(e, t, s, n = []) {
                    if (!e.hasOwnProperty(t))
                        throw Error(`Missing property '${t}'`);
                    const i = e[t];
                    if (void 0 !== s) {
                        let e = !0;
                        switch (s) {
                            case 'array':
                                e = Array.isArray(i);
                                break;
                            case 'object':
                                e = void 0 !== i;
                                break;
                            default:
                                e = typeof i === s;
                        }
                        if (!e)
                            throw new Error(
                                `Property '${t}' is not of type '${s}'`
                            );
                        if (n.length > 0) {
                            let e = !0;
                            switch (s) {
                                case 'string':
                                case 'number':
                                case 'boolean':
                                    e = n.includes(i);
                                    break;
                                default:
                                    e = n.findIndex(e => e === i) >= 0;
                            }
                            if (!e)
                                throw new Error(
                                    `Property '${t}' is not one of the valid values ${JSON.stringify(
                                        n
                                    )}`
                                );
                        }
                    }
                });
        },
        3713: (e, t, s) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.WorkspaceManager = void 0);
            const n = s(96801),
                i = s(64176),
                r = s(59566);
            class o extends i.DataConnector {
                constructor(e = {}) {
                    var t;
                    super(),
                        (this.serverSettings =
                            null !== (t = e.serverSettings) && void 0 !== t
                                ? t
                                : r.ServerConnection.makeSettings());
                }
                async fetch(e) {
                    const { serverSettings: t } = this,
                        { baseUrl: s, appUrl: n } = t,
                        {
                            makeRequest: i,
                            ResponseError: o,
                        } = r.ServerConnection,
                        c = s + n,
                        l = a.url(c, e),
                        h = await i(l, {}, t);
                    if (200 !== h.status) throw await o.create(h);
                    return h.json();
                }
                async list() {
                    const { serverSettings: e } = this,
                        { baseUrl: t, appUrl: s } = e,
                        {
                            makeRequest: n,
                            ResponseError: i,
                        } = r.ServerConnection,
                        o = t + s,
                        c = a.url(o, ''),
                        l = await n(c, {}, e);
                    if (200 !== l.status) throw await i.create(l);
                    return (await l.json()).workspaces;
                }
                async remove(e) {
                    const { serverSettings: t } = this,
                        { baseUrl: s, appUrl: n } = t,
                        {
                            makeRequest: i,
                            ResponseError: o,
                        } = r.ServerConnection,
                        c = s + n,
                        l = a.url(c, e),
                        h = await i(l, { method: 'DELETE' }, t);
                    if (204 !== h.status) throw await o.create(h);
                }
                async save(e, t) {
                    const { serverSettings: s } = this,
                        { baseUrl: n, appUrl: i } = s,
                        {
                            makeRequest: o,
                            ResponseError: c,
                        } = r.ServerConnection,
                        l = n + i,
                        h = a.url(l, e),
                        d = { body: JSON.stringify(t), method: 'PUT' },
                        u = await o(h, d, s);
                    if (204 !== u.status) throw await c.create(u);
                }
            }
            var a;
            (t.WorkspaceManager = o),
                (function(e) {
                    e.url = function(e, t) {
                        return n.URLExt.join(e, 'api/workspaces', t);
                    };
                })(a || (a = {}));
        },
        18533: e => {
            var t,
                s,
                n = (e.exports = {});
            function i() {
                throw new Error('setTimeout has not been defined');
            }
            function r() {
                throw new Error('clearTimeout has not been defined');
            }
            function o(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === i || !t) && setTimeout)
                    return (t = setTimeout), setTimeout(e, 0);
                try {
                    return t(e, 0);
                } catch (s) {
                    try {
                        return t.call(null, e, 0);
                    } catch (s) {
                        return t.call(this, e, 0);
                    }
                }
            }
            !(function() {
                try {
                    t = 'function' == typeof setTimeout ? setTimeout : i;
                } catch (e) {
                    t = i;
                }
                try {
                    s = 'function' == typeof clearTimeout ? clearTimeout : r;
                } catch (e) {
                    s = r;
                }
            })();
            var a,
                c = [],
                l = !1,
                h = -1;
            function d() {
                l &&
                    a &&
                    ((l = !1),
                    a.length ? (c = a.concat(c)) : (h = -1),
                    c.length && u());
            }
            function u() {
                if (!l) {
                    var e = o(d);
                    l = !0;
                    for (var t = c.length; t; ) {
                        for (a = c, c = []; ++h < t; ) a && a[h].run();
                        (h = -1), (t = c.length);
                    }
                    (a = null),
                        (l = !1),
                        (function(e) {
                            if (s === clearTimeout) return clearTimeout(e);
                            if ((s === r || !s) && clearTimeout)
                                return (s = clearTimeout), clearTimeout(e);
                            try {
                                s(e);
                            } catch (t) {
                                try {
                                    return s.call(null, e);
                                } catch (t) {
                                    return s.call(this, e);
                                }
                            }
                        })(e);
                }
            }
            function _(e, t) {
                (this.fun = e), (this.array = t);
            }
            function g() {}
            (n.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var s = 1; s < arguments.length; s++)
                        t[s - 1] = arguments[s];
                c.push(new _(e, t)), 1 !== c.length || l || o(u);
            }),
                (_.prototype.run = function() {
                    this.fun.apply(null, this.array);
                }),
                (n.title = 'browser'),
                (n.browser = !0),
                (n.env = {}),
                (n.argv = []),
                (n.version = ''),
                (n.versions = {}),
                (n.on = g),
                (n.addListener = g),
                (n.once = g),
                (n.off = g),
                (n.removeListener = g),
                (n.removeAllListeners = g),
                (n.emit = g),
                (n.prependListener = g),
                (n.prependOnceListener = g),
                (n.listeners = function(e) {
                    return [];
                }),
                (n.binding = function(e) {
                    throw new Error('process.binding is not supported');
                }),
                (n.cwd = function() {
                    return '/';
                }),
                (n.chdir = function(e) {
                    throw new Error('process.chdir is not supported');
                }),
                (n.umask = function() {
                    return 0;
                });
        },
    },
]);
//# sourceMappingURL=6591.1efe607.js.map
