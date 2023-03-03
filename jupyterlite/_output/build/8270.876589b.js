(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [8270],
    {
        51905: e => {
            e.exports = {
                $schema: 'http://json-schema.org/draft-07/schema',
                title: 'JupyterLab Plugin Settings/Preferences Schema',
                description: 'JupyterLab plugin settings/preferences schema',
                version: '1.0.0',
                type: 'object',
                additionalProperties: !0,
                properties: {
                    'jupyter.lab.internationalization': {
                        type: 'object',
                        properties: {
                            selectors: {
                                type: 'array',
                                items: { type: 'string', minLength: 1 },
                            },
                            domain: { type: 'string', minLength: 1 },
                        },
                    },
                    'jupyter.lab.menus': {
                        type: 'object',
                        properties: {
                            main: {
                                title: 'Main menu entries',
                                description:
                                    'List of menu items to add to the main menubar.',
                                items: { $ref: '#/definitions/menu' },
                                type: 'array',
                                default: [],
                            },
                            context: {
                                title: 'The application context menu.',
                                description: 'List of context menu items.',
                                items: {
                                    allOf: [
                                        { $ref: '#/definitions/menuItem' },
                                        {
                                            properties: {
                                                selector: {
                                                    description:
                                                        'The CSS selector for the context menu item.',
                                                    type: 'string',
                                                },
                                            },
                                        },
                                    ],
                                },
                                type: 'array',
                                default: [],
                            },
                        },
                        additionalProperties: !1,
                    },
                    'jupyter.lab.setting-deprecated': {
                        type: 'boolean',
                        default: !1,
                    },
                    'jupyter.lab.setting-icon': { type: 'string', default: '' },
                    'jupyter.lab.setting-icon-class': {
                        type: 'string',
                        default: '',
                    },
                    'jupyter.lab.setting-icon-label': {
                        type: 'string',
                        default: 'Plugin',
                    },
                    'jupyter.lab.shortcuts': {
                        items: { $ref: '#/definitions/shortcut' },
                        type: 'array',
                        default: [],
                    },
                    'jupyter.lab.toolbars': {
                        properties: {
                            '^\\w[\\w-\\.]*$': {
                                items: { $ref: '#/definitions/toolbarItem' },
                                type: 'array',
                                default: [],
                            },
                        },
                        type: 'object',
                        default: {},
                    },
                    'jupyter.lab.transform': { type: 'boolean', default: !1 },
                },
                definitions: {
                    menu: {
                        properties: {
                            disabled: {
                                description:
                                    'Whether the menu is disabled or not',
                                type: 'boolean',
                                default: !1,
                            },
                            icon: {
                                description: 'Menu icon id',
                                type: 'string',
                            },
                            id: {
                                description: 'Menu unique id',
                                oneOf: [
                                    {
                                        type: 'string',
                                        enum: [
                                            'jp-menu-file',
                                            'jp-menu-file-new',
                                            'jp-menu-edit',
                                            'jp-menu-help',
                                            'jp-menu-kernel',
                                            'jp-menu-run',
                                            'jp-menu-settings',
                                            'jp-menu-view',
                                            'jp-menu-tabs',
                                        ],
                                    },
                                    {
                                        type: 'string',
                                        pattern: '[a-z][a-z0-9\\-_]+',
                                    },
                                ],
                            },
                            items: {
                                description: 'Menu items',
                                type: 'array',
                                items: { $ref: '#/definitions/menuItem' },
                            },
                            label: {
                                description: 'Menu label',
                                type: 'string',
                            },
                            mnemonic: {
                                description: 'Mnemonic index for the label',
                                type: 'number',
                                minimum: -1,
                                default: -1,
                            },
                            rank: {
                                description: 'Menu rank',
                                type: 'number',
                                minimum: 0,
                            },
                        },
                        required: ['id'],
                        type: 'object',
                    },
                    menuItem: {
                        properties: {
                            args: {
                                description: 'Command arguments',
                                type: 'object',
                            },
                            command: {
                                description: 'Command id',
                                type: 'string',
                            },
                            disabled: {
                                description:
                                    'Whether the item is disabled or not',
                                type: 'boolean',
                                default: !1,
                            },
                            type: {
                                description: 'Item type',
                                type: 'string',
                                enum: ['command', 'submenu', 'separator'],
                                default: 'command',
                            },
                            rank: {
                                description: 'Item rank',
                                type: 'number',
                                minimum: 0,
                            },
                            submenu: {
                                oneOf: [
                                    { $ref: '#/definitions/menu' },
                                    { type: 'null' },
                                ],
                            },
                        },
                        type: 'object',
                    },
                    shortcut: {
                        properties: {
                            args: {
                                title: 'The arguments for the command',
                                type: 'object',
                            },
                            command: {
                                title: 'The command id',
                                description:
                                    'The command executed when the binding is matched.',
                                type: 'string',
                            },
                            disabled: {
                                description:
                                    'Whether this shortcut is disabled or not.',
                                type: 'boolean',
                                default: !1,
                            },
                            keys: {
                                title: 'The key sequence for the binding',
                                description:
                                    'The key shortcut like `Accel A` or the sequence of shortcuts to press like [`Accel A`, `B`]',
                                items: { type: 'string' },
                                type: 'array',
                            },
                            macKeys: {
                                title:
                                    'The key sequence for the binding on macOS',
                                description:
                                    'The key shortcut like `Cmd A` or the sequence of shortcuts to press like [`Cmd A`, `B`]',
                                items: { type: 'string' },
                                type: 'array',
                            },
                            winKeys: {
                                title:
                                    'The key sequence for the binding on Windows',
                                description:
                                    'The key shortcut like `Ctrl A` or the sequence of shortcuts to press like [`Ctrl A`, `B`]',
                                items: { type: 'string' },
                                type: 'array',
                            },
                            linuxKeys: {
                                title:
                                    'The key sequence for the binding on Linux',
                                description:
                                    'The key shortcut like `Ctrl A` or the sequence of shortcuts to press like [`Ctrl A`, `B`]',
                                items: { type: 'string' },
                                type: 'array',
                            },
                            selector: { title: 'CSS selector', type: 'string' },
                        },
                        required: ['command', 'keys', 'selector'],
                        type: 'object',
                    },
                    toolbarItem: {
                        properties: {
                            name: { title: 'Unique name', type: 'string' },
                            args: {
                                title: 'Command arguments',
                                type: 'object',
                            },
                            command: {
                                title: 'Command id',
                                type: 'string',
                                default: '',
                            },
                            disabled: {
                                title: 'Whether the item is ignored or not',
                                type: 'boolean',
                                default: !1,
                            },
                            icon: {
                                title: 'Item icon id',
                                description:
                                    'If defined, it will override the command icon',
                                type: 'string',
                            },
                            label: {
                                title: 'Item label',
                                description:
                                    'If defined, it will override the command label',
                                type: 'string',
                            },
                            type: {
                                title: 'Item type',
                                type: 'string',
                                enum: ['command', 'spacer'],
                            },
                            rank: {
                                title: 'Item rank',
                                type: 'number',
                                minimum: 0,
                                default: 50,
                            },
                        },
                        required: ['name'],
                        additionalProperties: !1,
                        type: 'object',
                    },
                },
            };
        },
        98270: (e, t, i) => {
            'use strict';
            i.r(t),
                i.d(t, {
                    DefaultSchemaValidator: () => m,
                    ISettingRegistry: () => b,
                    SettingRegistry: () => g,
                    Settings: () => y,
                });
            var n = i(90375),
                s = i(26169),
                r = i(21743),
                a = i(32798),
                o = i(84658),
                c = i.n(o),
                d = i(7537),
                l = i(51905),
                u = i.n(l);
            const h = s.JSONExt.deepCopy,
                p = String.fromCharCode(30);
            class m {
                constructor() {
                    (this._composer = new (c())({ useDefaults: !0 })),
                        (this._validator = new (c())()),
                        this._composer.addSchema(
                            u(),
                            'jupyterlab-plugin-schema'
                        ),
                        this._validator.addSchema(
                            u(),
                            'jupyterlab-plugin-schema'
                        );
                }
                validateData(e, t = !0) {
                    const i = this._validator.getSchema(e.id),
                        n = this._composer.getSchema(e.id);
                    if (!i || !n)
                        return 'object' !== e.schema.type
                            ? [
                                  {
                                      dataPath: 'type',
                                      keyword: 'schema',
                                      schemaPath: '',
                                      message: `Setting registry schemas' root-level type must be 'object', rejecting type: ${e.schema.type}`,
                                  },
                              ]
                            : this._addSchema(e.id, e.schema) ||
                                  this.validateData(e);
                    let s;
                    try {
                        s = d.parse(e.raw);
                    } catch (e) {
                        if (e instanceof SyntaxError)
                            return [
                                {
                                    dataPath: '',
                                    keyword: 'syntax',
                                    schemaPath: '',
                                    message: e.message,
                                },
                            ];
                        const { column: t, description: i } = e;
                        return [
                            {
                                dataPath: '',
                                keyword: 'parse',
                                schemaPath: '',
                                message: `${i} (line ${e.lineNumber} column ${t})`,
                            },
                        ];
                    }
                    if (!i(s)) return i.errors;
                    const r = h(s);
                    return n(r)
                        ? (t && (e.data = { composite: r, user: s }), null)
                        : n.errors;
                }
                _addSchema(e, t) {
                    const i = this._composer,
                        n = this._validator,
                        s = n.getSchema('jupyterlab-plugin-schema');
                    return s(t)
                        ? n.validateSchema(t)
                            ? (i.removeSchema(e),
                              n.removeSchema(e),
                              i.addSchema(t, e),
                              n.addSchema(t, e),
                              null)
                            : n.errors
                        : s.errors;
                }
            }
            class g {
                constructor(e) {
                    (this.schema = u()),
                        (this.plugins = Object.create(null)),
                        (this._pluginChanged = new a.Signal(this)),
                        (this._ready = Promise.resolve()),
                        (this._transformers = Object.create(null)),
                        (this.connector = e.connector),
                        (this.validator = e.validator || new m()),
                        (this._timeout = e.timeout || 1e3),
                        e.plugins && (this._ready = this._preload(e.plugins));
                }
                get pluginChanged() {
                    return this._pluginChanged;
                }
                async get(e, t) {
                    await this._ready;
                    const i = this.plugins;
                    if (e in i) {
                        const { composite: n, user: s } = i[e].data;
                        return {
                            composite: void 0 !== n[t] ? h(n[t]) : void 0,
                            user: void 0 !== s[t] ? h(s[t]) : void 0,
                        };
                    }
                    return this.load(e).then(() => this.get(e, t));
                }
                async load(e) {
                    await this._ready;
                    const t = this.plugins;
                    return e in t
                        ? new y({ plugin: t[e], registry: this })
                        : this.reload(e);
                }
                async reload(e) {
                    await this._ready;
                    const t = await this.connector.fetch(e),
                        i = this.plugins;
                    if (void 0 === t)
                        throw [
                            {
                                dataPath: '',
                                keyword: 'id',
                                message: `Could not fetch settings for ${e}.`,
                                schemaPath: '',
                            },
                        ];
                    return (
                        await this._load(await this._transform('fetch', t)),
                        this._pluginChanged.emit(e),
                        new y({ plugin: i[e], registry: this })
                    );
                }
                async remove(e, t) {
                    await this._ready;
                    const i = this.plugins;
                    if (!(e in i)) return;
                    const n = d.parse(i[e].raw);
                    return (
                        delete n[t],
                        delete n[`// ${t}`],
                        (i[e].raw = f.annotatedPlugin(i[e], n)),
                        this._save(e)
                    );
                }
                async set(e, t, i) {
                    await this._ready;
                    const n = this.plugins;
                    if (!(e in n))
                        return this.load(e).then(() => this.set(e, t, i));
                    const s = d.parse(n[e].raw);
                    return (
                        (n[e].raw = f.annotatedPlugin(
                            n[e],
                            Object.assign(Object.assign({}, s), { [t]: i })
                        )),
                        this._save(e)
                    );
                }
                transform(e, t) {
                    const i = this._transformers;
                    if (e in i) {
                        const t = new Error(`${e} already has a transformer.`);
                        throw ((t.name = 'TransformError'), t);
                    }
                    return (
                        (i[e] = {
                            fetch: t.fetch || (e => e),
                            compose: t.compose || (e => e),
                        }),
                        new r.DisposableDelegate(() => {
                            delete i[e];
                        })
                    );
                }
                async upload(e, t) {
                    await this._ready;
                    const i = this.plugins;
                    return e in i
                        ? ((i[e].raw = t), this._save(e))
                        : this.load(e).then(() => this.upload(e, t));
                }
                async _load(e) {
                    const t = e.id;
                    try {
                        await this._validate(e);
                    } catch (e) {
                        const i = [`Validating ${t} failed:`];
                        throw (e.forEach((e, t) => {
                            const {
                                dataPath: n,
                                schemaPath: s,
                                keyword: r,
                                message: a,
                            } = e;
                            (n || s) &&
                                i.push(`${t} - schema @ ${s}, data @ ${n}`),
                                i.push(`{${r}} ${a}`);
                        }),
                        console.warn(i.join('\n')),
                        e);
                    }
                }
                async _preload(e) {
                    await Promise.all(
                        e.map(async e => {
                            var t;
                            try {
                                await this._load(
                                    await this._transform('fetch', e)
                                );
                            } catch (e) {
                                'timeout' !==
                                    (null === (t = e[0]) || void 0 === t
                                        ? void 0
                                        : t.keyword) &&
                                    console.warn(
                                        'Ignored setting registry preload errors.',
                                        e
                                    );
                            }
                        })
                    );
                }
                async _save(e) {
                    const t = this.plugins;
                    if (!(e in t))
                        throw new Error(
                            `${e} does not exist in setting registry.`
                        );
                    try {
                        await this._validate(t[e]);
                    } catch (t) {
                        throw (console.warn(`${e} validation errors:`, t),
                        new Error(`${e} failed to validate; check console.`));
                    }
                    await this.connector.save(e, t[e].raw);
                    const i = await this.connector.fetch(e);
                    if (void 0 === i)
                        throw [
                            {
                                dataPath: '',
                                keyword: 'id',
                                message: `Could not fetch settings for ${e}.`,
                                schemaPath: '',
                            },
                        ];
                    await this._load(await this._transform('fetch', i)),
                        this._pluginChanged.emit(e);
                }
                async _transform(e, t, i = new Date().getTime()) {
                    const n = new Date().getTime() - i,
                        s = t.id,
                        r = this._transformers,
                        a = this._timeout;
                    if (!t.schema['jupyter.lab.transform']) return t;
                    if (s in r) {
                        const i = r[s][e].call(null, t);
                        if (i.id !== s)
                            throw [
                                {
                                    dataPath: '',
                                    keyword: 'id',
                                    message:
                                        'Plugin transformations cannot change plugin IDs.',
                                    schemaPath: '',
                                },
                            ];
                        return i;
                    }
                    if (n < a)
                        return (
                            await new Promise(e => {
                                setTimeout(() => {
                                    e();
                                }, 250);
                            }),
                            this._transform(e, t, i)
                        );
                    throw [
                        {
                            dataPath: '',
                            keyword: 'timeout',
                            message: `Transforming ${t.id} timed out.`,
                            schemaPath: '',
                        },
                    ];
                }
                async _validate(e) {
                    const t = this.validator.validateData(e);
                    if (t) throw t;
                    this.plugins[e.id] = await this._transform('compose', e);
                }
            }
            class y {
                constructor(e) {
                    (this._changed = new a.Signal(this)),
                        (this._isDisposed = !1),
                        (this.id = e.plugin.id),
                        (this.registry = e.registry),
                        this.registry.pluginChanged.connect(
                            this._onPluginChanged,
                            this
                        );
                }
                get changed() {
                    return this._changed;
                }
                get composite() {
                    return this.plugin.data.composite;
                }
                get isDisposed() {
                    return this._isDisposed;
                }
                get plugin() {
                    return this.registry.plugins[this.id];
                }
                get schema() {
                    return this.plugin.schema;
                }
                get raw() {
                    return this.plugin.raw;
                }
                isDefault(e) {
                    for (const t in this.schema.properties) {
                        const i = e[t],
                            n = this.default(t);
                        if (
                            void 0 !== i &&
                            void 0 !== n &&
                            !s.JSONExt.deepEqual(i, s.JSONExt.emptyObject) &&
                            !s.JSONExt.deepEqual(i, s.JSONExt.emptyArray) &&
                            !s.JSONExt.deepEqual(i, n)
                        )
                            return !1;
                    }
                    return !0;
                }
                get isModified() {
                    return !this.isDefault(this.user);
                }
                get user() {
                    return this.plugin.data.user;
                }
                get version() {
                    return this.plugin.version;
                }
                annotatedDefaults() {
                    return f.annotatedDefaults(this.schema, this.id);
                }
                default(e) {
                    return f.reifyDefault(this.schema, e);
                }
                dispose() {
                    this._isDisposed ||
                        ((this._isDisposed = !0), a.Signal.clearData(this));
                }
                get(e) {
                    const { composite: t, user: i } = this;
                    return {
                        composite: void 0 !== t[e] ? h(t[e]) : void 0,
                        user: void 0 !== i[e] ? h(i[e]) : void 0,
                    };
                }
                remove(e) {
                    return this.registry.remove(this.plugin.id, e);
                }
                save(e) {
                    return this.registry.upload(this.plugin.id, e);
                }
                set(e, t) {
                    return this.registry.set(this.plugin.id, e, t);
                }
                validate(e) {
                    const { id: t, schema: i } = this.plugin,
                        n = this.registry.validator,
                        s = this.version;
                    return n.validateData(
                        {
                            data: { composite: {}, user: {} },
                            id: t,
                            raw: e,
                            schema: i,
                            version: s,
                        },
                        !1
                    );
                }
                _onPluginChanged(e, t) {
                    t === this.plugin.id && this._changed.emit(void 0);
                }
            }
            var f;
            !(function(e) {
                function t(e, t, n = !1, r = !0) {
                    if (!e) return t && r ? s.JSONExt.deepCopy(t) : [];
                    if (!t) return s.JSONExt.deepCopy(e);
                    const a = s.JSONExt.deepCopy(e);
                    return (
                        t.forEach(e => {
                            const t = a.findIndex(t => t.id === e.id);
                            t >= 0
                                ? (a[t] = Object.assign(
                                      Object.assign(Object.assign({}, a[t]), e),
                                      { items: i(a[t].items, e.items, n, r) }
                                  ))
                                : r && a.push(e);
                        }),
                        a
                    );
                }
                function i(e, i, n = !1, r = !0) {
                    if (!e) return i ? s.JSONExt.deepCopy(i) : void 0;
                    if (!i) return s.JSONExt.deepCopy(e);
                    const a = s.JSONExt.deepCopy(e);
                    return (
                        i.forEach(e => {
                            var i;
                            switch (
                                null !== (i = e.type) && void 0 !== i
                                    ? i
                                    : 'command'
                            ) {
                                case 'separator':
                                    r && a.push(Object.assign({}, e));
                                    break;
                                case 'submenu':
                                    if (e.submenu) {
                                        const i = a.findIndex(t => {
                                            var i, n;
                                            return (
                                                'submenu' === t.type &&
                                                (null === (i = t.submenu) ||
                                                void 0 === i
                                                    ? void 0
                                                    : i.id) ===
                                                    (null === (n = e.submenu) ||
                                                    void 0 === n
                                                        ? void 0
                                                        : n.id)
                                            );
                                        });
                                        i < 0
                                            ? r && a.push(s.JSONExt.deepCopy(e))
                                            : (a[
                                                  i
                                              ] = Object.assign(
                                                  Object.assign(
                                                      Object.assign({}, a[i]),
                                                      e
                                                  ),
                                                  {
                                                      submenu: t(
                                                          a[i].submenu
                                                              ? [a[i].submenu]
                                                              : null,
                                                          [e.submenu],
                                                          n,
                                                          r
                                                      )[0],
                                                  }
                                              ));
                                    }
                                    break;
                                case 'command':
                                    if (e.command) {
                                        const t = a.findIndex(t => {
                                            var i, n;
                                            return (
                                                t.command === e.command &&
                                                t.selector === e.selector &&
                                                s.JSONExt.deepEqual(
                                                    null !== (i = t.args) &&
                                                        void 0 !== i
                                                        ? i
                                                        : {},
                                                    null !== (n = e.args) &&
                                                        void 0 !== n
                                                        ? n
                                                        : {}
                                                )
                                            );
                                        });
                                        t < 0
                                            ? r && a.push(Object.assign({}, e))
                                            : (n &&
                                                  console.warn(
                                                      `Menu entry for command '${e.command}' is duplicated.`
                                                  ),
                                              (a[t] = Object.assign(
                                                  Object.assign({}, a[t]),
                                                  e
                                              )));
                                    }
                            }
                        }),
                        a
                    );
                }
                (e.reconcileMenus = t),
                    (e.reconcileItems = i),
                    (e.filterDisabledItems = function e(t) {
                        return t.reduce((t, i) => {
                            var n;
                            const s = Object.assign({}, i);
                            if (!s.disabled) {
                                if ('submenu' === s.type) {
                                    const { submenu: t } = s;
                                    t &&
                                        !t.disabled &&
                                        (s.submenu = Object.assign(
                                            Object.assign({}, t),
                                            {
                                                items: e(
                                                    null !== (n = t.items) &&
                                                        void 0 !== n
                                                        ? n
                                                        : []
                                                ),
                                            }
                                        ));
                                }
                                t.push(s);
                            }
                            return t;
                        }, []);
                    }),
                    (e.reconcileShortcuts = function(e, t) {
                        const i = {};
                        return (
                            (t = t.filter(e => {
                                const t = n.CommandRegistry.normalizeKeys(
                                    e
                                ).join(p);
                                if (!t)
                                    return (
                                        console.warn(
                                            'Skipping this shortcut because there are no actionable keys on this platform',
                                            e
                                        ),
                                        !1
                                    );
                                t in i || (i[t] = {});
                                const { selector: s } = e;
                                return s in i[t]
                                    ? (console.warn(
                                          'Skipping this shortcut because it collides with another shortcut.',
                                          e
                                      ),
                                      !1)
                                    : ((i[t][s] = !1), !0);
                            })),
                            (e = [
                                ...e.filter(e => !!e.disabled),
                                ...e.filter(e => !e.disabled),
                            ].filter(e => {
                                const t = n.CommandRegistry.normalizeKeys(
                                    e
                                ).join(p);
                                if (!t) return !1;
                                t in i || (i[t] = {});
                                const { disabled: s, selector: r } = e;
                                return r in i[t]
                                    ? (i[t][r] &&
                                          console.warn(
                                              'Skipping this default shortcut because it collides with another default shortcut.',
                                              e
                                          ),
                                      !1)
                                    : ((i[t][r] = !s), !0);
                            })),
                            t
                                .concat(e)
                                .filter(e => !e.disabled)
                                .map(e => Object.assign({ args: {} }, e))
                        );
                    }),
                    (e.reconcileToolbarItems = function(e, t, i = !1) {
                        if (!e) return t ? s.JSONExt.deepCopy(t) : void 0;
                        if (!t) return s.JSONExt.deepCopy(e);
                        const n = s.JSONExt.deepCopy(e);
                        return (
                            t.forEach(e => {
                                const t = n.findIndex(t => t.name === e.name);
                                t < 0
                                    ? n.push(Object.assign({}, e))
                                    : (i &&
                                          s.JSONExt.deepEqual(
                                              Object.keys(e),
                                              Object.keys(n[t])
                                          ) &&
                                          console.warn(
                                              `Toolbar item '${e.name}' is duplicated.`
                                          ),
                                      (n[t] = Object.assign(
                                          Object.assign({}, n[t]),
                                          e
                                      )));
                            }),
                            n
                        );
                    });
            })(g || (g = {})),
                (function(e) {
                    const t = '    ',
                        i = '[missing schema description]',
                        n = '[missing schema title]';
                    function r(e) {
                        return e.reduce((t, i, n) => {
                            const s = i.split('\n');
                            return (
                                t +
                                i +
                                (0 === s[s.length - 1].trim().indexOf('//') ||
                                n === e.length - 1
                                    ? ''
                                    : ',') +
                                (n === e.length - 1 ? '' : '\n\n')
                            );
                        }, '');
                    }
                    function a(e, i = `${t}// `) {
                        return i + e.split('\n').join(`\n${i}`);
                    }
                    function o(e, t) {
                        var i, n, r;
                        const a = e.definitions;
                        if (
                            'object' ===
                            (e =
                                (t
                                    ? null === (i = e.properties) ||
                                      void 0 === i
                                        ? void 0
                                        : i[t]
                                    : e) || {}).type
                        ) {
                            const t = s.JSONExt.deepCopy(e.default),
                                i = e.properties || {};
                            for (const e in i) t[e] = o(i[e]);
                            return t;
                        }
                        if ('array' === e.type) {
                            const t = s.JSONExt.deepCopy(e.default);
                            let i = e.items || {};
                            if (i.$ref && a) {
                                const e = i.$ref.replace('#/definitions/', '');
                                i =
                                    null !== (n = a[e]) && void 0 !== n
                                        ? n
                                        : {};
                            }
                            for (const e in t) {
                                const n = o(i) || {};
                                for (const i in n)
                                    (null === (r = t[e]) || void 0 === r
                                        ? void 0
                                        : r[i]) && (n[i] = t[e][i]);
                                t[e] = n;
                            }
                            return t;
                        }
                        return e.default;
                    }
                    (e.annotatedDefaults = function(e, s) {
                        const { description: c, properties: d, title: l } = e,
                            u = d
                                ? Object.keys(d).sort((e, t) =>
                                      e.localeCompare(t)
                                  )
                                : [],
                            h = Math.max((c || i).length, s.length);
                        return [
                            '{',
                            a(`${l || n}`),
                            a(s),
                            a(c || i),
                            a('*'.repeat(h)),
                            '',
                            r(
                                u.map(n =>
                                    (function(e, n) {
                                        const s =
                                                (e.properties &&
                                                    e.properties[n]) ||
                                                {},
                                            r = s.type,
                                            c = s.description || i,
                                            d = s.title || '',
                                            l = o(e, n),
                                            u = t.length,
                                            h =
                                                void 0 !== l
                                                    ? a(
                                                          `"${n}": ${JSON.stringify(
                                                              l,
                                                              null,
                                                              u
                                                          )}`,
                                                          t
                                                      )
                                                    : a(`"${n}": ${r}`);
                                        return [a(d), a(c), h]
                                            .filter(e => e.length)
                                            .join('\n');
                                    })(e, n)
                                )
                            ),
                            '}',
                        ].join('\n');
                    }),
                        (e.annotatedPlugin = function(e, s) {
                            const { description: o, title: c } = e.schema,
                                d = Object.keys(s).sort((e, t) =>
                                    e.localeCompare(t)
                                ),
                                l = Math.max((o || i).length, e.id.length);
                            return [
                                '{',
                                a(`${c || n}`),
                                a(e.id),
                                a(o || i),
                                a('*'.repeat(l)),
                                '',
                                r(
                                    d.map(r =>
                                        (function(e, s, r) {
                                            const o =
                                                    e.properties &&
                                                    e.properties[s],
                                                c = (o && o.description) || i,
                                                d = (o && o.title) || n,
                                                l = t.length,
                                                u = a(
                                                    `"${s}": ${JSON.stringify(
                                                        r,
                                                        null,
                                                        l
                                                    )}`,
                                                    t
                                                );
                                            return [a(d), a(c), u].join('\n');
                                        })(e.schema, r, s[r])
                                    )
                                ),
                                '}',
                            ].join('\n');
                        }),
                        (e.reifyDefault = o);
                })(f || (f = {}));
            const b = new s.Token('@jupyterlab/coreutils:ISettingRegistry');
        },
    },
]);
//# sourceMappingURL=8270.876589b.js.map
