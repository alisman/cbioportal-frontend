'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [812],
    {
        76119: (e, t, r) => {
            r.d(t, { L: () => s, c: () => o });
            var i = r(26169),
                n = r(89116);
            const s = new i.Token('@jupyterlab/application:ILayoutRestorer'),
                a = 'layout-restorer:data';
            class o {
                constructor(e) {
                    (this._firstDone = !1),
                        (this._promisesDone = !1),
                        (this._promises = []),
                        (this._restored = new i.PromiseDelegate()),
                        (this._trackers = new Set()),
                        (this._widgets = new Map()),
                        (this._connector = e.connector),
                        (this._first = e.first),
                        (this._registry = e.registry),
                        this._first
                            .then(() => {
                                this._firstDone = !0;
                            })
                            .then(() => Promise.all(this._promises))
                            .then(() => {
                                (this._promisesDone = !0),
                                    this._trackers.clear();
                            })
                            .then(() => {
                                this._restored.resolve(void 0);
                            });
                }
                get restored() {
                    return this._restored.promise;
                }
                add(e, t) {
                    c.nameProperty.set(e, t),
                        this._widgets.set(t, e),
                        e.disposed.connect(this._onWidgetDisposed, this);
                }
                async fetch() {
                    const e = {
                            fresh: !0,
                            mainArea: null,
                            downArea: null,
                            leftArea: null,
                            rightArea: null,
                            relativeSizes: null,
                        },
                        t = this._connector.fetch(a);
                    try {
                        const [r] = await Promise.all([t, this.restored]);
                        if (!r) return e;
                        const {
                                main: i,
                                down: n,
                                left: s,
                                right: a,
                                relativeSizes: o,
                            } = r,
                            c = !1,
                            d = this._rehydrateMainArea(i),
                            l = this._rehydrateDownArea(n);
                        return {
                            fresh: c,
                            mainArea: d,
                            downArea: l,
                            leftArea: this._rehydrateSideArea(s),
                            rightArea: this._rehydrateSideArea(a),
                            relativeSizes: o || null,
                        };
                    } catch (t) {
                        return e;
                    }
                }
                restore(e, t) {
                    const r =
                        'restore() can only be called before `first` has resolved.';
                    if (this._firstDone)
                        return console.warn(r), Promise.reject(r);
                    const { namespace: n } = e;
                    if (this._trackers.has(n)) {
                        const e = `A tracker namespaced ${n} was already restored.`;
                        return console.warn(e), Promise.reject(e);
                    }
                    const { args: s, command: a, name: o, when: d } = t;
                    this._trackers.add(n),
                        e.widgetAdded.connect((e, t) => {
                            const r = o(t);
                            r && this.add(t, `${n}:${r}`);
                        }, this),
                        e.widgetUpdated.connect((e, t) => {
                            const r = o(t);
                            if (r) {
                                const e = `${n}:${r}`;
                                c.nameProperty.set(t, e),
                                    this._widgets.set(e, t);
                            }
                        });
                    const l = this._first,
                        u = e
                            .restore({
                                args: s || (() => i.JSONExt.emptyObject),
                                command: a,
                                connector: this._connector,
                                name: o,
                                registry: this._registry,
                                when: d ? [l].concat(d) : l,
                            })
                            .catch(e => {
                                console.error(e);
                            });
                    return this._promises.push(u), u;
                }
                save(e) {
                    if (!this._promisesDone) {
                        const e = 'save() was called prematurely.';
                        return console.warn(e), Promise.reject(e);
                    }
                    const t = {};
                    return (
                        (t.main = this._dehydrateMainArea(e.mainArea)),
                        (t.down = this._dehydrateDownArea(e.downArea)),
                        (t.left = this._dehydrateSideArea(e.leftArea)),
                        (t.right = this._dehydrateSideArea(e.rightArea)),
                        (t.relativeSizes = e.relativeSizes),
                        this._connector.save(a, t)
                    );
                }
                _dehydrateMainArea(e) {
                    return e ? c.serializeMain(e) : null;
                }
                _rehydrateMainArea(e) {
                    return e ? c.deserializeMain(e, this._widgets) : null;
                }
                _dehydrateDownArea(e) {
                    if (!e) return null;
                    const t = { size: e.size };
                    if (e.currentWidget) {
                        const r = c.nameProperty.get(e.currentWidget);
                        r && (t.current = r);
                    }
                    return (
                        e.widgets &&
                            (t.widgets = e.widgets
                                .map(e => c.nameProperty.get(e))
                                .filter(e => !!e)),
                        t
                    );
                }
                _rehydrateDownArea(e) {
                    var t;
                    if (!e)
                        return { currentWidget: null, size: 0, widgets: null };
                    const r = this._widgets,
                        i =
                            e.current && r.has(`${e.current}`)
                                ? r.get(`${e.current}`)
                                : null,
                        n = Array.isArray(e.widgets)
                            ? e.widgets
                                  .map(e =>
                                      r.has(`${e}`) ? r.get(`${e}`) : null
                                  )
                                  .filter(e => !!e)
                            : null;
                    return {
                        currentWidget: i,
                        size: null !== (t = e.size) && void 0 !== t ? t : 0,
                        widgets: n,
                    };
                }
                _dehydrateSideArea(e) {
                    if (!e) return null;
                    const t = { collapsed: e.collapsed };
                    if (e.currentWidget) {
                        const r = c.nameProperty.get(e.currentWidget);
                        r && (t.current = r);
                    }
                    return (
                        e.widgets &&
                            (t.widgets = e.widgets
                                .map(e => c.nameProperty.get(e))
                                .filter(e => !!e)),
                        t
                    );
                }
                _rehydrateSideArea(e) {
                    var t;
                    if (!e)
                        return {
                            collapsed: !0,
                            currentWidget: null,
                            widgets: null,
                        };
                    const r = this._widgets;
                    return {
                        collapsed:
                            null !== (t = e.collapsed) && void 0 !== t && t,
                        currentWidget:
                            e.current && r.has(`${e.current}`)
                                ? r.get(`${e.current}`)
                                : null,
                        widgets: Array.isArray(e.widgets)
                            ? e.widgets
                                  .map(e =>
                                      r.has(`${e}`) ? r.get(`${e}`) : null
                                  )
                                  .filter(e => !!e)
                            : null,
                    };
                }
                _onWidgetDisposed(e) {
                    const t = c.nameProperty.get(e);
                    this._widgets.delete(t);
                }
            }
            var c;
            !(function(e) {
                function t(r) {
                    return r && r.type
                        ? 'tab-area' === r.type
                            ? {
                                  type: 'tab-area',
                                  currentIndex: r.currentIndex,
                                  widgets: r.widgets
                                      .map(t => e.nameProperty.get(t))
                                      .filter(e => !!e),
                              }
                            : {
                                  type: 'split-area',
                                  orientation: r.orientation,
                                  sizes: r.sizes,
                                  children: r.children.map(t).filter(e => !!e),
                              }
                        : null;
                }
                function r(e, t) {
                    if (!e) return null;
                    const i = e.type || 'unknown';
                    if (
                        'unknown' === i ||
                        ('tab-area' !== i && 'split-area' !== i)
                    )
                        return (
                            console.warn(
                                `Attempted to deserialize unknown type: ${i}`
                            ),
                            null
                        );
                    if ('tab-area' === i) {
                        const { currentIndex: r, widgets: i } = e,
                            n = {
                                type: 'tab-area',
                                currentIndex: r || 0,
                                widgets:
                                    (i &&
                                        i
                                            .map(e => t.get(e))
                                            .filter(e => !!e)) ||
                                    [],
                            };
                        return (
                            n.currentIndex > n.widgets.length - 1 &&
                                (n.currentIndex = 0),
                            n
                        );
                    }
                    const { orientation: n, sizes: s, children: a } = e;
                    return {
                        type: 'split-area',
                        orientation: n,
                        sizes: s || [],
                        children:
                            (a && a.map(e => r(e, t)).filter(e => !!e)) || [],
                    };
                }
                (e.nameProperty = new n.AttachedProperty({
                    name: 'name',
                    create: e => '',
                })),
                    (e.serializeMain = function(r) {
                        const i = {
                            dock: (r && r.dock && t(r.dock.main)) || null,
                        };
                        if (r && r.currentWidget) {
                            const t = e.nameProperty.get(r.currentWidget);
                            t && (i.current = t);
                        }
                        return i;
                    }),
                    (e.deserializeMain = function(e, t) {
                        if (!e) return null;
                        const i = e.current || null,
                            n = e.dock || null;
                        return {
                            currentWidget: (i && t.has(i) && t.get(i)) || null,
                            dock: n ? { main: r(n, t) } : null,
                        };
                    });
            })(c || (c = {}));
        },
        61280: (e, t, r) => {
            r.d(t, { aX: () => y, as: () => h, w2: () => u });
            var i = r(47343),
                n = r(87442),
                s = r(80814),
                a = r(61345),
                o = r(99729),
                c = r(26169),
                d = r(89116),
                l = r(76119);
            const u = new c.Token(
                '@jupyterlab/application:IMimeDocumentTracker'
            );
            function h(e) {
                const t = [],
                    r = new i.WidgetTracker({
                        namespace: 'application-mimedocuments',
                    });
                return (
                    e.forEach(e => {
                        let i = e.default;
                        e.hasOwnProperty('__esModule') || (i = e),
                            Array.isArray(i) || (i = [i]),
                            i.forEach(e => {
                                t.push(y(r, e));
                            });
                    }),
                    t.push({
                        id: '@jupyterlab/application:mimedocument',
                        optional: [l.L],
                        provides: u,
                        autoStart: !0,
                        activate: (e, t) => (
                            t &&
                                t.restore(r, {
                                    command: 'docmanager:open',
                                    args: e => ({
                                        path: e.context.path,
                                        factory: g.factoryNameProperty.get(e),
                                    }),
                                    name: e =>
                                        `${
                                            e.context.path
                                        }:${g.factoryNameProperty.get(e)}`,
                                }),
                            r
                        ),
                    }),
                    t
                );
            }
            function y(e, t) {
                return {
                    id: t.id,
                    requires: [s.IRenderMimeRegistry, a.ITranslator],
                    autoStart: !0,
                    activate: (r, i, s) => {
                        if (
                            (void 0 !== t.rank
                                ? i.addFactory(t.rendererFactory, t.rank)
                                : i.addFactory(t.rendererFactory),
                            !t.documentWidgetFactoryOptions)
                        )
                            return;
                        const a = r.docRegistry;
                        let c = [];
                        (c = Array.isArray(t.documentWidgetFactoryOptions)
                            ? t.documentWidgetFactoryOptions
                            : [t.documentWidgetFactoryOptions]),
                            t.fileTypes &&
                                t.fileTypes.forEach(e => {
                                    e.icon &&
                                        (e = Object.assign(
                                            Object.assign({}, e),
                                            {
                                                icon: o.LabIcon.resolve({
                                                    icon: e.icon,
                                                }),
                                            }
                                        )),
                                        r.docRegistry.addFileType(e);
                                }),
                            c.forEach(r => {
                                const o = r.toolbarFactory
                                        ? e =>
                                              r.toolbarFactory(
                                                  e.content.renderer
                                              )
                                        : void 0,
                                    c = new n.MimeDocumentFactory({
                                        renderTimeout: t.renderTimeout,
                                        dataType: t.dataType,
                                        rendermime: i,
                                        modelName: r.modelName,
                                        name: r.name,
                                        primaryFileType: a.getFileType(
                                            r.primaryFileType
                                        ),
                                        fileTypes: r.fileTypes,
                                        defaultFor: r.defaultFor,
                                        defaultRendered: r.defaultRendered,
                                        toolbarFactory: o,
                                        translator: s,
                                        factory: t.rendererFactory,
                                    });
                                a.addWidgetFactory(c),
                                    c.widgetCreated.connect((t, r) => {
                                        g.factoryNameProperty.set(r, c.name),
                                            r.context.pathChanged.connect(
                                                () => {
                                                    e.save(r);
                                                }
                                            ),
                                            e.add(r);
                                    });
                            });
                    },
                };
            }
            var g;
            !(function(e) {
                e.factoryNameProperty = new d.AttachedProperty({
                    name: 'factoryName',
                    create: () => {},
                });
            })(g || (g = {}));
        },
        69207: (e, t, r) => {
            r.d(t, { J: () => o, y: () => a });
            var i = r(26169),
                n = r(21743),
                s = r(32798);
            const a = new i.Token('@jupyterlab/application:ILabStatus');
            class o {
                constructor(e) {
                    (this._busyCount = 0),
                        (this._dirtyCount = 0),
                        (this._busySignal = new s.Signal(e)),
                        (this._dirtySignal = new s.Signal(e));
                }
                get busySignal() {
                    return this._busySignal;
                }
                get dirtySignal() {
                    return this._dirtySignal;
                }
                get isBusy() {
                    return this._busyCount > 0;
                }
                get isDirty() {
                    return this._dirtyCount > 0;
                }
                setDirty() {
                    const e = this.isDirty;
                    return (
                        this._dirtyCount++,
                        this.isDirty !== e &&
                            this._dirtySignal.emit(this.isDirty),
                        new n.DisposableDelegate(() => {
                            const e = this.isDirty;
                            (this._dirtyCount = Math.max(
                                0,
                                this._dirtyCount - 1
                            )),
                                this.isDirty !== e &&
                                    this._dirtySignal.emit(this.isDirty);
                        })
                    );
                }
                setBusy() {
                    const e = this.isBusy;
                    return (
                        this._busyCount++,
                        this.isBusy !== e && this._busySignal.emit(this.isBusy),
                        new n.DisposableDelegate(() => {
                            const e = this.isBusy;
                            this._busyCount--,
                                this.isBusy !== e &&
                                    this._busySignal.emit(this.isBusy);
                        })
                    );
                }
            }
        },
    },
]);
//# sourceMappingURL=812.06ca8e7.js.map
