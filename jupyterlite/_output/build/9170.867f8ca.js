'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [9170],
    {
        19170: (e, t, o) => {
            o.r(t), o.d(t, { default: () => d });
            var a = o(47343),
                r = o(88983),
                n = o(63029),
                l = o(61345),
                s = o(99729),
                i = o(86098);
            const d = [
                {
                    id: '@retrolab/tree-extension:buttons',
                    requires: [r.IFileBrowserFactory, l.ITranslator],
                    autoStart: !0,
                    activate: (e, t, o) => {
                        const { commands: r } = e,
                            n = t.defaultBrowser,
                            l = o.load('retrolab'),
                            i = 'tree:new-notebook';
                        r.addCommand(i, {
                            label: l.__('New Notebook'),
                            icon: s.notebookIcon,
                            execute: () => r.execute('notebook:create-new'),
                        });
                        const d = new a.CommandToolbarButton({
                                commands: r,
                                id: i,
                            }),
                            c = new a.CommandToolbarButton({
                                commands: r,
                                id: 'filebrowser:create-new-file',
                            });
                        n.toolbar.insertItem(0, 'new-notebook', d),
                            n.toolbar.insertItem(1, 'new-file', c);
                    },
                },
                {
                    id: '@retrolab/tree-extension:new-console',
                    requires: [r.IFileBrowserFactory, l.ITranslator],
                    autoStart: !0,
                    activate: (e, t, o) => {
                        const { commands: r } = e,
                            n = t.defaultBrowser,
                            l = o.load('retrolab'),
                            i = 'tree:new-console';
                        r.addCommand(i, {
                            label: l.__('New Console'),
                            icon: s.consoleIcon,
                            execute: () => r.execute('console:create'),
                        });
                        const d = new a.CommandToolbarButton({
                            commands: r,
                            id: i,
                        });
                        n.toolbar.insertItem(2, 'new-console', d);
                    },
                },
                {
                    id: '@retrolab/tree-extension:new-terminal',
                    requires: [r.IFileBrowserFactory, l.ITranslator],
                    autoStart: !0,
                    activate: (e, t, o) => {
                        const { commands: r } = e,
                            n = t.defaultBrowser,
                            l = o.load('retrolab'),
                            i = 'tree:new-terminal';
                        r.addCommand(i, {
                            label: l.__('New Terminal'),
                            icon: s.terminalIcon,
                            execute: () => r.execute('terminal:create-new'),
                        });
                        const d = new a.CommandToolbarButton({
                            commands: r,
                            id: i,
                        });
                        n.toolbar.insertItem(3, 'new-terminal', d);
                    },
                },
                {
                    id: '@retrolab/tree-extension:default-buttons',
                    autoStart: !0,
                    requires: [r.IFileBrowserFactory, l.ITranslator],
                    activate: (e, t, o) => {
                        const { commands: n } = e,
                            l = t.defaultBrowser,
                            s = l.model;
                        l.toolbar.insertItem(
                            4,
                            'new-directory',
                            new a.CommandToolbarButton({
                                commands: n,
                                label: '',
                                id: 'filebrowser:create-new-directory',
                            })
                        ),
                            l.toolbar.insertItem(
                                5,
                                'uploader',
                                new r.Uploader({ model: s, translator: o })
                            ),
                            l.toolbar.insertItem(
                                6,
                                'refresh',
                                new a.CommandToolbarButton({
                                    commands: n,
                                    label: '',
                                    id: 'filebrowser:refresh',
                                })
                            );
                    },
                },
                {
                    id: '@retrolab/tree-extension:widget',
                    requires: [r.IFileBrowserFactory, l.ITranslator],
                    optional: [n.IRunningSessionManagers],
                    autoStart: !0,
                    activate: (e, t, o, a) => {
                        const r = new i.TabPanel({
                            tabPlacement: 'top',
                            tabsMovable: !0,
                        });
                        r.addClass('jp-TreePanel');
                        const l = o.load('retrolab'),
                            { defaultBrowser: d } = t;
                        if (
                            ((d.title.label = l.__('Files')),
                            d.node.setAttribute('role', 'region'),
                            d.node.setAttribute(
                                'aria-label',
                                l.__('File Browser Section')
                            ),
                            (d.title.icon = s.folderIcon),
                            r.addWidget(d),
                            r.tabBar.addTab(d.title),
                            a)
                        ) {
                            const e = new n.RunningSessions(a, o);
                            (e.id = 'jp-running-sessions'),
                                (e.title.label = l.__('Running')),
                                (e.title.icon = s.runningIcon),
                                r.addWidget(e),
                                r.tabBar.addTab(e.title);
                        }
                        e.shell.add(r, 'main', { rank: 100 });
                    },
                },
            ];
        },
    },
]);
//# sourceMappingURL=9170.867f8ca.js.map
