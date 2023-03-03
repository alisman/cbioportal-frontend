'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [316],
    {
        30316: (e, t, a) => {
            a.r(t),
                a.d(t, {
                    DEFAULT_CONTEXT_ITEM_RANK: () => v,
                    default: () => B,
                });
            var o = a(12867),
                n = a(47343),
                i = a(96801),
                r = a(93889),
                s = a(53979),
                l = a(64176),
                c = a(61345),
                d = a(99729),
                u = a(43892),
                p = a(26169),
                g = a(21743),
                b = a(86098),
                m = a(62471);
            const v = 100;
            var h;
            !(function(e) {
                (e.activateNextTab = 'application:activate-next-tab'),
                    (e.activatePreviousTab =
                        'application:activate-previous-tab'),
                    (e.activateNextTabBar =
                        'application:activate-next-tab-bar'),
                    (e.activatePreviousTabBar =
                        'application:activate-previous-tab-bar'),
                    (e.close = 'application:close'),
                    (e.closeOtherTabs = 'application:close-other-tabs'),
                    (e.closeRightTabs = 'application:close-right-tabs'),
                    (e.closeAll = 'application:close-all'),
                    (e.setMode = 'application:set-mode'),
                    (e.toggleMode = 'application:toggle-mode'),
                    (e.toggleLeftArea = 'application:toggle-left-area'),
                    (e.toggleRightArea = 'application:toggle-right-area'),
                    (e.togglePresentationMode =
                        'application:toggle-presentation-mode'),
                    (e.tree = 'router:tree'),
                    (e.switchSidebar = 'sidebar:switch');
            })(h || (h = {}));
            const y = {
                    id: '@jupyterlab/application-extension:commands',
                    autoStart: !0,
                    requires: [c.ITranslator],
                    optional: [o.ILabShell, n.ICommandPalette],
                    activate: (e, t, a, n) => {
                        const { commands: r, shell: s } = e,
                            l = t.load('jupyterlab'),
                            c = l.__('Main Area');
                        r.addCommand(o.JupyterFrontEndContextMenu.contextMenu, {
                            label: l.__('Shift+Right Click for Browser Menu'),
                            isEnabled: () => !1,
                            execute: () => {},
                        });
                        const d = () => {
                                const t = e.contextMenuHitTest(
                                    e => !!e.dataset.id
                                );
                                if (!t) return s.currentWidget;
                                const a = (0, u.toArray)(
                                    s.widgets('main')
                                ).filter(e => e.id === t.dataset.id);
                                return a.length < 1 ? s.currentWidget : a[0];
                            },
                            p = e => {
                                e.forEach(e => e.close());
                            },
                            g = (e, t) => {
                                switch (e.type) {
                                    case 'split-area': {
                                        const a = (0, u.iter)(e.children);
                                        let o,
                                            n = null;
                                        do {
                                            (o = a.next()), o && (n = g(o, t));
                                        } while (!n && o);
                                        return n;
                                    }
                                    case 'tab-area': {
                                        const { id: a } = t;
                                        return e.widgets.some(e => e.id === a)
                                            ? e
                                            : null;
                                    }
                                    default:
                                        return null;
                                }
                            },
                            b = e => {
                                const { id: t } = e,
                                    o = (e => {
                                        var t;
                                        const o =
                                                null == a
                                                    ? void 0
                                                    : a.saveLayout(),
                                            n = null == o ? void 0 : o.mainArea;
                                        if (
                                            !n ||
                                            'multiple-document' !==
                                                i.PageConfig.getOption('mode')
                                        )
                                            return null;
                                        const r =
                                            null === (t = n.dock) ||
                                            void 0 === t
                                                ? void 0
                                                : t.main;
                                        return r ? g(r, e) : null;
                                    })(e),
                                    n = (o && o.widgets) || [],
                                    r = n.findIndex(e => e.id === t);
                                return r < 0 ? [] : n.slice(r + 1);
                            };
                        r.addCommand(h.close, {
                            label: () => l.__('Close Tab'),
                            isEnabled: () => {
                                const e = d();
                                return !!e && e.title.closable;
                            },
                            execute: () => {
                                const e = d();
                                e && e.close();
                            },
                        }),
                            r.addCommand(h.closeOtherTabs, {
                                label: () => l.__('Close All Other Tabs'),
                                isEnabled: () => {
                                    const e = s.widgets('main');
                                    return !!e.next() && !!e.next();
                                },
                                execute: () => {
                                    const e = d();
                                    if (!e) return;
                                    const { id: t } = e,
                                        a = (0, u.toArray)(
                                            s.widgets('main')
                                        ).filter(e => e.id !== t);
                                    p(a);
                                },
                            }),
                            r.addCommand(h.closeRightTabs, {
                                label: () => l.__('Close Tabs to Right'),
                                isEnabled: () => !!d() && b(d()).length > 0,
                                execute: () => {
                                    const e = d();
                                    e && p(b(e));
                                },
                            }),
                            a &&
                                (r.addCommand(h.activateNextTab, {
                                    label: l.__('Activate Next Tab'),
                                    execute: () => {
                                        a.activateNextTab();
                                    },
                                }),
                                r.addCommand(h.activatePreviousTab, {
                                    label: l.__('Activate Previous Tab'),
                                    execute: () => {
                                        a.activatePreviousTab();
                                    },
                                }),
                                r.addCommand(h.activateNextTabBar, {
                                    label: l.__('Activate Next Tab Bar'),
                                    execute: () => {
                                        a.activateNextTabBar();
                                    },
                                }),
                                r.addCommand(h.activatePreviousTabBar, {
                                    label: l.__('Activate Previous Tab Bar'),
                                    execute: () => {
                                        a.activatePreviousTabBar();
                                    },
                                }),
                                r.addCommand(h.closeAll, {
                                    label: l.__('Close All Tabs'),
                                    execute: () => {
                                        a.closeAll();
                                    },
                                }),
                                r.addCommand(h.toggleLeftArea, {
                                    label: () => l.__('Show Left Sidebar'),
                                    execute: () => {
                                        a.leftCollapsed
                                            ? a.expandLeft()
                                            : (a.collapseLeft(),
                                              a.currentWidget &&
                                                  a.activateById(
                                                      a.currentWidget.id
                                                  ));
                                    },
                                    isToggled: () => !a.leftCollapsed,
                                    isVisible: () => !a.isEmpty('left'),
                                }),
                                r.addCommand(h.toggleRightArea, {
                                    label: () => l.__('Show Right Sidebar'),
                                    execute: () => {
                                        a.rightCollapsed
                                            ? a.expandRight()
                                            : (a.collapseRight(),
                                              a.currentWidget &&
                                                  a.activateById(
                                                      a.currentWidget.id
                                                  ));
                                    },
                                    isToggled: () => !a.rightCollapsed,
                                    isVisible: () => !a.isEmpty('right'),
                                }),
                                r.addCommand(h.togglePresentationMode, {
                                    label: () => l.__('Presentation Mode'),
                                    execute: () => {
                                        a.presentationMode = !a.presentationMode;
                                    },
                                    isToggled: () => a.presentationMode,
                                    isVisible: () => !0,
                                }),
                                r.addCommand(h.setMode, {
                                    isVisible: e => {
                                        const t = e.mode;
                                        return (
                                            'single-document' === t ||
                                            'multiple-document' === t
                                        );
                                    },
                                    execute: e => {
                                        const t = e.mode;
                                        if (
                                            'single-document' !== t &&
                                            'multiple-document' !== t
                                        )
                                            throw new Error(
                                                `Unsupported application shell mode: ${t}`
                                            );
                                        a.mode = t;
                                    },
                                }),
                                r.addCommand(h.toggleMode, {
                                    label: l.__('Simple Interface'),
                                    isToggled: () =>
                                        'single-document' === a.mode,
                                    execute: () => {
                                        const e =
                                            'multiple-document' === a.mode
                                                ? { mode: 'single-document' }
                                                : { mode: 'multiple-document' };
                                        return r.execute(h.setMode, e);
                                    },
                                })),
                            n &&
                                [
                                    h.activateNextTab,
                                    h.activatePreviousTab,
                                    h.activateNextTabBar,
                                    h.activatePreviousTabBar,
                                    h.close,
                                    h.closeAll,
                                    h.closeOtherTabs,
                                    h.closeRightTabs,
                                    h.toggleLeftArea,
                                    h.toggleRightArea,
                                    h.togglePresentationMode,
                                    h.toggleMode,
                                ].forEach(e =>
                                    n.addItem({ command: e, category: c })
                                );
                    },
                },
                f = {
                    id: '@jupyterlab/application-extension:main',
                    requires: [
                        o.IRouter,
                        n.IWindowResolver,
                        c.ITranslator,
                        o.JupyterFrontEnd.ITreeResolver,
                    ],
                    optional: [o.IConnectionLost],
                    provides: o.ITreePathUpdater,
                    activate: (e, t, a, r, s, l) => {
                        const c = r.load('jupyterlab');
                        if (!(e instanceof o.JupyterLab))
                            throw new Error(
                                `${f.id} must be activated in JupyterLab.`
                            );
                        let d = '',
                            u = '';
                        const p = a.name;
                        if (
                            (console.debug(
                                `Starting application in workspace: "${p}"`
                            ),
                            0 !== e.registerPluginErrors.length)
                        ) {
                            const t = m.createElement(
                                'pre',
                                null,
                                e.registerPluginErrors
                                    .map(e => e.message)
                                    .join('\n')
                            );
                            (0, n.showErrorMessage)(
                                c.__('Error Registering Plugins'),
                                { message: t }
                            );
                        }
                        e.shell.layoutModified.connect(() => {
                            e.commands.notifyCommandChanged();
                        }),
                            e.shell.modeChanged.connect((e, a) => {
                                const o = i.PageConfig.getUrl({ mode: a }),
                                    n = i.URLExt.parse(o).pathname;
                                t.navigate(n, { skipRouting: !0 }),
                                    i.PageConfig.setOption('mode', a);
                            }),
                            s.paths.then(() => {
                                e.shell.currentPathChanged.connect((e, a) => {
                                    const o = a.newValue,
                                        n = o || u,
                                        r = i.PageConfig.getUrl({
                                            treePath: n,
                                        }),
                                        s = i.URLExt.parse(r).pathname;
                                    t.navigate(s, { skipRouting: !0 }),
                                        i.PageConfig.setOption('treePath', n),
                                        (d = o);
                                });
                            }),
                            (l = l || o.ConnectionLost),
                            e.serviceManager.connectionFailure.connect((e, t) =>
                                l(e, t, r)
                            );
                        const g = e.serviceManager.builder,
                            b = () =>
                                g
                                    .build()
                                    .then(() =>
                                        (0, n.showDialog)({
                                            title: c.__('Build Complete'),
                                            body: m.createElement(
                                                'div',
                                                null,
                                                c.__(
                                                    'Build successfully completed, reload page?'
                                                ),
                                                m.createElement('br', null),
                                                c.__(
                                                    'You will lose any unsaved changes.'
                                                )
                                            ),
                                            buttons: [
                                                n.Dialog.cancelButton({
                                                    label: c.__(
                                                        'Reload Without Saving'
                                                    ),
                                                    actions: ['reload'],
                                                }),
                                                n.Dialog.okButton({
                                                    label: c.__(
                                                        'Save and Reload'
                                                    ),
                                                }),
                                            ],
                                            hasClose: !0,
                                        })
                                    )
                                    .then(
                                        ({
                                            button: { accept: a, actions: o },
                                        }) => {
                                            a
                                                ? e.commands
                                                      .execute(
                                                          'docmanager:save'
                                                      )
                                                      .then(() => {
                                                          t.reload();
                                                      })
                                                      .catch(e => {
                                                          (0,
                                                          n.showErrorMessage)(
                                                              c.__(
                                                                  'Save Failed'
                                                              ),
                                                              {
                                                                  message: m.createElement(
                                                                      'pre',
                                                                      null,
                                                                      e.message
                                                                  ),
                                                              }
                                                          );
                                                      })
                                                : o.includes('reload') &&
                                                  t.reload();
                                        }
                                    )
                                    .catch(e => {
                                        (0, n.showErrorMessage)(
                                            c.__('Build Failed'),
                                            {
                                                message: m.createElement(
                                                    'pre',
                                                    null,
                                                    e.message
                                                ),
                                            }
                                        );
                                    });
                        return (
                            g.isAvailable &&
                                g.shouldCheck &&
                                g.getStatus().then(e => {
                                    if ('building' === e.status) return b();
                                    if ('needed' !== e.status) return;
                                    const t = m.createElement(
                                        'div',
                                        null,
                                        c.__('JupyterLab build is suggested:'),
                                        m.createElement('br', null),
                                        m.createElement('pre', null, e.message)
                                    );
                                    (0, n.showDialog)({
                                        title: c.__('Build Recommended'),
                                        body: t,
                                        buttons: [
                                            n.Dialog.cancelButton(),
                                            n.Dialog.okButton({
                                                label: c.__('Build'),
                                            }),
                                        ],
                                    }).then(e =>
                                        e.button.accept ? b() : void 0
                                    );
                                }),
                            function(e) {
                                s.paths.then(() => {
                                    if (((u = e), !d)) {
                                        const a = i.PageConfig.getUrl({
                                                treePath: e,
                                            }),
                                            o = i.URLExt.parse(a).pathname;
                                        t.navigate(o, { skipRouting: !0 }),
                                            i.PageConfig.setOption(
                                                'treePath',
                                                e
                                            );
                                    }
                                });
                            }
                        );
                    },
                    autoStart: !0,
                },
                x = {
                    id: '@jupyterlab/application-extension:context-menu',
                    autoStart: !0,
                    requires: [s.ISettingRegistry, c.ITranslator],
                    activate: (e, t, a) => {
                        const o = a.load('jupyterlab');
                        function n(t) {
                            const a = new d.RankedMenu(
                                Object.assign(Object.assign({}, t), {
                                    commands: e.commands,
                                })
                            );
                            return (
                                t.label && (a.title.label = o.__(t.label)), a
                            );
                        }
                        e.started
                            .then(() =>
                                O.loadSettingsContextMenu(
                                    e.contextMenu,
                                    t,
                                    n,
                                    a
                                )
                            )
                            .catch(e => {
                                console.error(
                                    'Failed to load context menu items from settings registry.',
                                    e
                                );
                            });
                    },
                },
                _ = {
                    id: '@jupyterlab/application-extension:dirty',
                    autoStart: !0,
                    requires: [c.ITranslator],
                    activate: (e, t) => {
                        if (!(e instanceof o.JupyterLab))
                            throw new Error(
                                `${_.id} must be activated in JupyterLab.`
                            );
                        const a = t
                            .load('jupyterlab')
                            .__(
                                'Are you sure you want to exit JupyterLab?\n\nAny unsaved changes will be lost.'
                            );
                        window.addEventListener('beforeunload', t => {
                            if (e.status.isDirty) return (t.returnValue = a);
                        });
                    },
                },
                w = {
                    id: '@jupyterlab/application-extension:layout',
                    requires: [
                        l.IStateDB,
                        o.ILabShell,
                        s.ISettingRegistry,
                        c.ITranslator,
                    ],
                    activate: (e, t, a, n, r) => {
                        const s = e.started,
                            l = e.commands,
                            c = new o.LayoutRestorer({
                                connector: t,
                                first: s,
                                registry: l,
                            });
                        return (
                            c.fetch().then(t => {
                                a.restoreLayout(
                                    i.PageConfig.getOption('mode'),
                                    t
                                ),
                                    a.layoutModified.connect(() => {
                                        c.save(a.saveLayout());
                                    }),
                                    O.activateSidebarSwitcher(e, a, n, r, t);
                            }),
                            c
                        );
                    },
                    autoStart: !0,
                    provides: o.ILayoutRestorer,
                },
                S = {
                    id: '@jupyterlab/application-extension:router',
                    requires: [o.JupyterFrontEnd.IPaths],
                    activate: (e, t) => {
                        const { commands: a } = e,
                            n = t.urls.base,
                            i = new o.Router({ base: n, commands: a });
                        return (
                            e.started.then(() => {
                                i.route(),
                                    window.addEventListener('popstate', () => {
                                        i.route();
                                    });
                            }),
                            i
                        );
                    },
                    autoStart: !0,
                    provides: o.IRouter,
                },
                C = {
                    id: '@jupyterlab/application-extension:tree-resolver',
                    autoStart: !0,
                    requires: [o.IRouter],
                    provides: o.JupyterFrontEnd.ITreeResolver,
                    activate: (e, t) => {
                        const { commands: a } = e,
                            o = new g.DisposableSet(),
                            n = new p.PromiseDelegate(),
                            r = new RegExp(
                                '/(lab|doc)(/workspaces/[a-zA-Z0-9-_]+)?(/tree/.*)?'
                            );
                        o.add(
                            a.addCommand(h.tree, {
                                execute: async e => {
                                    var t;
                                    if (o.isDisposed) return;
                                    const a = i.URLExt.queryStringToObject(
                                            null !== (t = e.search) &&
                                                void 0 !== t
                                                ? t
                                                : ''
                                        ),
                                        r = a['file-browser-path'] || '';
                                    delete a['file-browser-path'],
                                        o.dispose(),
                                        n.resolve({
                                            browser: r,
                                            file: i.PageConfig.getOption(
                                                'treePath'
                                            ),
                                        });
                                },
                            })
                        ),
                            o.add(t.register({ command: h.tree, pattern: r }));
                        const s = () => {
                            o.isDisposed || (o.dispose(), n.resolve(null));
                        };
                        return (
                            t.routed.connect(s),
                            o.add(
                                new g.DisposableDelegate(() => {
                                    t.routed.disconnect(s);
                                })
                            ),
                            { paths: n.promise }
                        );
                    },
                },
                E = {
                    id: '@jupyterlab/application-extension:notfound',
                    requires: [
                        o.JupyterFrontEnd.IPaths,
                        o.IRouter,
                        c.ITranslator,
                    ],
                    activate: (e, t, a, o) => {
                        const i = o.load('jupyterlab'),
                            r = t.urls.notFound;
                        if (!r) return;
                        const s = a.base,
                            l = i.__(
                                'The path: %1 was not found. JupyterLab redirected to: %2',
                                r,
                                s
                            );
                        a.navigate(''),
                            (0, n.showErrorMessage)(i.__('Path Not Found'), {
                                message: l,
                            });
                    },
                    autoStart: !0,
                },
                I = {
                    id: '@jupyterlab/application-extension:faviconbusy',
                    requires: [o.ILabStatus],
                    activate: async (e, t) => {
                        t.busySignal.connect((e, t) => {
                            const a = document.querySelector(
                                'link[rel="icon"]' +
                                    (t ? '.idle.favicon' : '.busy.favicon')
                            );
                            if (!a) return;
                            const o = document.querySelector(
                                'link' + (t ? '.busy.favicon' : '.idle.favicon')
                            );
                            o &&
                                a !== o &&
                                ((a.rel = ''),
                                (o.rel = 'icon'),
                                o.parentNode.replaceChild(o, o));
                        });
                    },
                    autoStart: !0,
                },
                T = {
                    id: '@jupyterlab/application-extension:shell',
                    optional: [s.ISettingRegistry],
                    activate: (e, t) => {
                        if (!(e.shell instanceof o.LabShell))
                            throw new Error(
                                `${T.id} did not find a LabShell instance.`
                            );
                        return (
                            t &&
                                t
                                    .load(T.id)
                                    .then(t => {
                                        e.shell.updateConfig(t.composite),
                                            t.changed.connect(() => {
                                                e.shell.updateConfig(
                                                    t.composite
                                                );
                                            });
                                    })
                                    .catch(e => {
                                        console.error(
                                            'Failed to load shell settings.',
                                            e
                                        );
                                    }),
                            e.shell
                        );
                    },
                    autoStart: !0,
                    provides: o.ILabShell,
                },
                R = {
                    id: '@jupyterlab/application-extension:status',
                    activate: e => {
                        if (!(e instanceof o.JupyterLab))
                            throw new Error(
                                `${R.id} must be activated in JupyterLab.`
                            );
                        return e.status;
                    },
                    autoStart: !0,
                    provides: o.ILabStatus,
                },
                P = {
                    id: '@jupyterlab/application-extension:info',
                    activate: e => {
                        if (!(e instanceof o.JupyterLab))
                            throw new Error(
                                `${P.id} must be activated in JupyterLab.`
                            );
                        return e.info;
                    },
                    autoStart: !0,
                    provides: o.JupyterLab.IInfo,
                },
                L = {
                    id: '@jupyterlab/apputils-extension:paths',
                    activate: e => {
                        if (!(e instanceof o.JupyterLab))
                            throw new Error(
                                `${L.id} must be activated in JupyterLab.`
                            );
                        return e.paths;
                    },
                    autoStart: !0,
                    provides: o.JupyterFrontEnd.IPaths,
                },
                j = {
                    id: '@jupyterlab/application-extension:property-inspector',
                    autoStart: !0,
                    requires: [o.ILabShell, c.ITranslator],
                    optional: [o.ILayoutRestorer],
                    provides: r.IPropertyInspectorProvider,
                    activate: (e, t, a, o) => {
                        const n = a.load('jupyterlab'),
                            i = new r.SideBarPropertyInspectorProvider(
                                t,
                                void 0,
                                a
                            );
                        return (
                            (i.title.icon = d.buildIcon),
                            (i.title.caption = n.__('Property Inspector')),
                            (i.id = 'jp-property-inspector'),
                            t.add(i, 'right', { rank: 100 }),
                            o && o.add(i, 'jp-property-inspector'),
                            i
                        );
                    },
                },
                M = {
                    id: '@jupyterlab/application-extension:logo',
                    autoStart: !0,
                    requires: [o.ILabShell],
                    activate: (e, t) => {
                        const a = new b.Widget();
                        d.jupyterIcon.element({
                            container: a.node,
                            elementPosition: 'center',
                            margin: '2px 2px 2px 8px',
                            height: 'auto',
                            width: '16px',
                        }),
                            (a.id = 'jp-MainLogo'),
                            t.add(a, 'top', { rank: 0 });
                    },
                },
                B = [x, _, f, y, w, S, C, E, I, T, R, P, L, j, M];
            var O;
            !(function(e) {
                async function t(e) {
                    (
                        await (0, n.showDialog)({
                            title: e.__('Information'),
                            body: e.__(
                                'Context menu customization has changed. You will need to reload JupyterLab to see the changes.'
                            ),
                            buttons: [
                                n.Dialog.cancelButton(),
                                n.Dialog.okButton({ label: e.__('Reload') }),
                            ],
                        })
                    ).button.accept && location.reload();
                }
                (e.loadSettingsContextMenu = async function(e, a, o, i) {
                    var r;
                    const l = i.load('jupyterlab'),
                        c = x.id;
                    let d = null,
                        u = {};
                    function g(e) {
                        var t, o;
                        u = {};
                        const n = Object.keys(a.plugins)
                            .map(e => {
                                var t, o;
                                const n =
                                    null !==
                                        (o =
                                            null ===
                                                (t =
                                                    a.plugins[e].schema[
                                                        'jupyter.lab.menus'
                                                    ]) || void 0 === t
                                                ? void 0
                                                : t.context) && void 0 !== o
                                        ? o
                                        : [];
                                return (u[e] = n), n;
                            })
                            .concat([
                                null !==
                                    (o =
                                        null === (t = e['jupyter.lab.menus']) ||
                                        void 0 === t
                                            ? void 0
                                            : t.context) && void 0 !== o
                                    ? o
                                    : [],
                            ])
                            .reduceRight(
                                (e, t) =>
                                    s.SettingRegistry.reconcileItems(e, t, !0),
                                []
                            );
                        e.properties.contextMenu.default = s.SettingRegistry.reconcileItems(
                            n,
                            e.properties.contextMenu.default,
                            !0
                        ).sort((e, t) => {
                            var a, o;
                            return (
                                (null !== (a = e.rank) && void 0 !== a
                                    ? a
                                    : 1 / 0) -
                                (null !== (o = t.rank) && void 0 !== o
                                    ? o
                                    : 1 / 0)
                            );
                        });
                    }
                    a.transform(c, {
                        compose: e => {
                            var t, a, o, n;
                            d || ((d = p.JSONExt.deepCopy(e.schema)), g(d));
                            const i =
                                    null !==
                                        (o =
                                            null ===
                                                (a =
                                                    null ===
                                                        (t = d.properties) ||
                                                    void 0 === t
                                                        ? void 0
                                                        : t.contextMenu) ||
                                            void 0 === a
                                                ? void 0
                                                : a.default) && void 0 !== o
                                        ? o
                                        : [],
                                r = Object.assign(
                                    Object.assign({}, e.data.user),
                                    {
                                        contextMenu:
                                            null !==
                                                (n = e.data.user.contextMenu) &&
                                            void 0 !== n
                                                ? n
                                                : [],
                                    }
                                ),
                                l = Object.assign(
                                    Object.assign({}, e.data.composite),
                                    {
                                        contextMenu: s.SettingRegistry.reconcileItems(
                                            i,
                                            r.contextMenu,
                                            !1
                                        ),
                                    }
                                );
                            return (e.data = { composite: l, user: r }), e;
                        },
                        fetch: e => (
                            d || ((d = p.JSONExt.deepCopy(e.schema)), g(d)),
                            {
                                data: e.data,
                                id: e.id,
                                raw: e.raw,
                                schema: d,
                                version: e.version,
                            }
                        ),
                    });
                    const b = await a.load(c),
                        m =
                            null !== (r = b.composite.contextMenu) &&
                            void 0 !== r
                                ? r
                                : [];
                    s.SettingRegistry.filterDisabledItems(m).forEach(t => {
                        n.MenuFactory.addContextItem(
                            Object.assign({ rank: v }, t),
                            e,
                            o
                        );
                    }),
                        b.changed.connect(() => {
                            var e;
                            const a =
                                null !== (e = b.composite.contextMenu) &&
                                void 0 !== e
                                    ? e
                                    : [];
                            p.JSONExt.deepEqual(m, a) || t(l);
                        }),
                        a.pluginChanged.connect(async (i, r) => {
                            var d, g, b, h;
                            if (r !== c) {
                                const i =
                                        null !== (d = u[r]) && void 0 !== d
                                            ? d
                                            : [],
                                    c =
                                        null !==
                                            (b =
                                                null ===
                                                    (g =
                                                        a.plugins[r].schema[
                                                            'jupyter.lab.menus'
                                                        ]) || void 0 === g
                                                    ? void 0
                                                    : g.context) && void 0 !== b
                                            ? b
                                            : [];
                                if (!p.JSONExt.deepEqual(i, c))
                                    if (u[r]) await t(l);
                                    else {
                                        u[r] = p.JSONExt.deepCopy(c);
                                        const t =
                                            null !==
                                                (h = s.SettingRegistry.reconcileItems(
                                                    c,
                                                    m,
                                                    !1,
                                                    !1
                                                )) && void 0 !== h
                                                ? h
                                                : [];
                                        s.SettingRegistry.filterDisabledItems(
                                            t
                                        ).forEach(t => {
                                            n.MenuFactory.addContextItem(
                                                Object.assign({ rank: v }, t),
                                                e,
                                                o
                                            );
                                        });
                                    }
                            }
                        });
                }),
                    (e.activateSidebarSwitcher = function(e, t, a, o, n) {
                        const i = '@jupyterlab/application-extension:sidebar',
                            r = o.load('jupyterlab');
                        let s = {};
                        const l = (e, a) => {
                            (0, u.each)(t.widgets('left'), e => {
                                var o;
                                s[e.id] &&
                                    'right' === s[e.id] &&
                                    (t.add(e, 'right'),
                                    a &&
                                        (null === (o = a.rightArea) ||
                                        void 0 === o
                                            ? void 0
                                            : o.currentWidget) === e &&
                                        t.activateById(e.id));
                            }),
                                (0, u.each)(t.widgets('right'), e => {
                                    var o;
                                    s[e.id] &&
                                        'left' === s[e.id] &&
                                        (t.add(e, 'left'),
                                        a &&
                                            (null === (o = a.leftArea) ||
                                            void 0 === o
                                                ? void 0
                                                : o.currentWidget) === e &&
                                            t.activateById(e.id));
                                });
                        };
                        Promise.all([a.load(i), e.restored]).then(([e]) => {
                            (s = e.get('overrides').composite || {}),
                                e.changed.connect(e => {
                                    (s = e.get('overrides').composite || {}),
                                        l();
                                }),
                                t.layoutModified.connect(l),
                                l(0, n);
                        }),
                            e.commands.addCommand(h.switchSidebar, {
                                label: r.__('Switch Sidebar Side'),
                                execute: () => {
                                    const t = e.contextMenuHitTest(
                                        e => !!e.dataset.id
                                    );
                                    if (!t) return;
                                    const o = t.dataset.id,
                                        n = document.getElementById(
                                            'jp-left-stack'
                                        ),
                                        r = document.getElementById(o);
                                    let l;
                                    return (
                                        (l =
                                            n && r && n.contains(r)
                                                ? 'right'
                                                : 'left'),
                                        a.set(
                                            i,
                                            'overrides',
                                            Object.assign(
                                                Object.assign({}, s),
                                                { [o]: l }
                                            )
                                        )
                                    );
                                },
                            });
                    });
            })(O || (O = {}));
        },
    },
]);
//# sourceMappingURL=316.d93407d.js.map
