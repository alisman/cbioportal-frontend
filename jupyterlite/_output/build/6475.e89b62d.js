'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [6475, 8370],
    {
        8370: (e, t, o) => {
            o.r(t), o.d(t, { default: () => g });
            var r = o(12867),
                n = o(47343),
                a = o(12527),
                i = o(61345),
                s = o(99729),
                c = o(8089),
                d = o(89201),
                l = o(86098);
            const u = 'jupyterlite',
                p = {
                    id: '@jupyterlite/console-application:buttons',
                    autoStart: !0,
                    requires: [i.ITranslator],
                    optional: [a.IConsoleTracker],
                    activate: (e, t, o) => {
                        if (!o) return;
                        const { commands: r } = e,
                            a = t.load(u),
                            i = 'repl:run';
                        r.addCommand(i, {
                            caption: a.__('Run'),
                            icon: s.runIcon,
                            execute: () => r.execute('console:run-forced'),
                        });
                        const c = new n.CommandToolbarButton({
                                commands: r,
                                id: i,
                            }),
                            p = 'repl:restart';
                        r.addCommand(p, {
                            caption: a.__('Restart'),
                            icon: s.refreshIcon,
                            execute: () => r.execute('console:restart-kernel'),
                        });
                        const m = new n.CommandToolbarButton({
                                commands: r,
                                id: p,
                            }),
                            h = 'repl:clear';
                        r.addCommand(h, {
                            caption: a.__('Clear'),
                            icon: s.clearIcon,
                            execute: () => r.execute('console:clear'),
                        });
                        const w = new n.CommandToolbarButton({
                            commands: r,
                            id: h,
                        });
                        o.widgetAdded.connect((e, t) => {
                            const { toolbar: o } = t;
                            t.toolbar.addItem('run', c),
                                t.toolbar.addItem('restart', m),
                                t.toolbar.addItem('clear', w),
                                o.addItem(
                                    'spacer',
                                    n.Toolbar.createSpacerItem()
                                );
                            const r = document.createElement('a');
                            (r.title = a.__('Powered by JupyterLite')),
                                (r.href =
                                    'https://github.com/jupyterlite/jupyterlite'),
                                (r.target = '_blank'),
                                (r.rel = 'noopener noreferrer');
                            const i = new l.Widget({ node: r });
                            d.liteIcon.element({
                                container: r,
                                elementPosition: 'center',
                                margin: '2px 2px 2px 8px',
                                height: 'auto',
                                width: '16px',
                            }),
                                i.addClass('jp-PoweredBy'),
                                o.insertAfter('spacer', 'powered-by', i);
                        });
                    },
                },
                m = {
                    id: '@jupyterlite/repl-extension:console',
                    autoStart: !0,
                    optional: [a.IConsoleTracker, n.IThemeManager],
                    activate: (e, t, o) => {
                        var r;
                        if (!t) return;
                        const {
                                commands: n,
                                serviceManager: a,
                                started: i,
                            } = e,
                            s = window.location.search,
                            c = new URLSearchParams(s),
                            d = c.getAll('code'),
                            l = c.get('kernel') || void 0,
                            u =
                                null === (r = c.get('theme')) || void 0 === r
                                    ? void 0
                                    : r.trim(),
                            p = c.get('toolbar');
                        if (
                            (Promise.all([i, a.ready]).then(async () => {
                                n.execute('console:create', {
                                    kernelPreference: { name: l },
                                });
                            }),
                            u && o)
                        ) {
                            const e = decodeURIComponent(u);
                            o.setTheme(e);
                        }
                        t.widgetAdded.connect(async (e, t) => {
                            const { console: o } = t;
                            p || t.toolbar.dispose(),
                                d &&
                                    (await o.sessionContext.ready,
                                    d.forEach(e => o.inject(e)));
                        });
                    },
                },
                h = {
                    id: '@jupyterlite/repl-extension:status',
                    autoStart: !0,
                    provides: r.ILabStatus,
                    requires: [i.ITranslator],
                    activate: (e, t) => {
                        if (!(e instanceof c.SingleWidgetApp)) {
                            const e = t.load(u);
                            throw new Error(
                                e.__(
                                    '%1 must be activated in SingleWidgetApp.',
                                    h.id
                                )
                            );
                        }
                        return e.status;
                    },
                },
                w = {
                    id: '@jupyterlite/repl-extension:paths',
                    autoStart: !0,
                    provides: r.JupyterFrontEnd.IPaths,
                    activate: e => {
                        if (!(e instanceof c.SingleWidgetApp))
                            throw new Error(
                                `${w.id} must be activated in SingleWidgetApp.`
                            );
                        return e.paths;
                    },
                },
                b = {
                    id: '@jupyterlite/repl-extension:router',
                    autoStart: !0,
                    provides: r.IRouter,
                    requires: [r.JupyterFrontEnd.IPaths],
                    activate: (e, t) => {
                        const { commands: o } = e,
                            n = t.urls.base,
                            a = new r.Router({ base: n, commands: o });
                        return (
                            e.started.then(() => {
                                a.route(),
                                    window.addEventListener('popstate', () => {
                                        a.route();
                                    });
                            }),
                            a
                        );
                    },
                },
                g = [p, m, w, b, h];
        },
    },
]);
//# sourceMappingURL=6475.e89b62d.js.map
