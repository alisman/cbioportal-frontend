'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [9035, 5880],
    {
        59035: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var a = r(12867),
                n = r(47343),
                o = r(917),
                c = r(53979),
                d = r(61345);
            const s = 'jp-mod-searchable',
                i = {
                    id: '@jupyterlab/documentsearch:labShellWidgetListener',
                    requires: [a.ILabShell, o.ISearchProviderRegistry],
                    autoStart: !0,
                    activate: (e, t, r) => {
                        const a = e => {
                            if (!e) return;
                            const t = r.getProviderForWidget(e);
                            t && e.addClass(s), t || e.removeClass(s);
                        };
                        r.changed.connect(() => a(t.activeWidget)),
                            t.activeChanged.connect((e, t) => {
                                const r = t.oldValue;
                                r && r.removeClass(s), a(t.newValue);
                            });
                    },
                },
                l = [
                    {
                        id: '@jupyterlab/documentsearch:plugin',
                        provides: o.ISearchProviderRegistry,
                        requires: [d.ITranslator],
                        optional: [n.ICommandPalette, c.ISettingRegistry],
                        autoStart: !0,
                        activate: (e, t, r, a) => {
                            const n = t.load('jupyterlab');
                            let c = 500;
                            const d = new o.SearchProviderRegistry();
                            d.register(
                                'jp-notebookSearchProvider',
                                o.NotebookSearchProvider
                            ),
                                d.register(
                                    'jp-codeMirrorSearchProvider',
                                    o.CodeMirrorSearchProvider
                                );
                            const s = new Map(),
                                i = 'documentsearch:start',
                                l = 'documentsearch:highlightNext',
                                h = 'documentsearch:highlightPrevious';
                            if (a) {
                                const t = a.load(
                                        '@jupyterlab/documentsearch-extension:plugin'
                                    ),
                                    r = e => {
                                        c = e.get('searchDebounceTime')
                                            .composite;
                                    };
                                Promise.all([t, e.restored])
                                    .then(([e]) => {
                                        r(e),
                                            e.changed.connect(e => {
                                                r(e);
                                            });
                                    })
                                    .catch(e => {
                                        console.error(e.message);
                                    });
                            }
                            const u = () => {
                                    const t = e.shell.currentWidget;
                                    return (
                                        !!t &&
                                        void 0 !== d.getProviderForWidget(t)
                                    );
                                },
                                m = () => {
                                    const r = e.shell.currentWidget;
                                    if (!r) return;
                                    const a = r.id;
                                    let n = s.get(a);
                                    if (!n) {
                                        const i = d.getProviderForWidget(r);
                                        if (!i) return;
                                        (n = new o.SearchInstance(r, i, t, c)),
                                            s.set(a, n),
                                            e.commands.notifyCommandChanged(),
                                            n.disposed.connect(() => {
                                                s.delete(a),
                                                    e.commands.notifyCommandChanged();
                                            });
                                    }
                                    return n;
                                };
                            return (
                                e.commands.addCommand(i, {
                                    label: n.__('Find…'),
                                    isEnabled: u,
                                    execute: e => {
                                        const t = m();
                                        if (t) {
                                            const r = e.searchText;
                                            r && t.setSearchText(r),
                                                t.focusInput();
                                        }
                                    },
                                }),
                                e.commands.addCommand(
                                    'documentsearch:startWithReplace',
                                    {
                                        label: n.__('Find and Replace…'),
                                        isEnabled: u,
                                        execute: e => {
                                            const t = m();
                                            if (t) {
                                                const r = e.searchText;
                                                r && t.setSearchText(r);
                                                const a = e.replaceText;
                                                a && t.setReplaceText(a),
                                                    t.showReplace(),
                                                    t.focusInput();
                                            }
                                        },
                                    }
                                ),
                                e.commands.addCommand(l, {
                                    label: n.__('Find Next'),
                                    isEnabled: () => {
                                        const t = e.shell.currentWidget;
                                        return !!t && s.has(t.id);
                                    },
                                    execute: async () => {
                                        const t = e.shell.currentWidget;
                                        if (!t) return;
                                        const r = s.get(t.id);
                                        r &&
                                            (await r.provider.highlightNext(),
                                            r.updateIndices());
                                    },
                                }),
                                e.commands.addCommand(h, {
                                    label: n.__('Find Previous'),
                                    isEnabled: () => {
                                        const t = e.shell.currentWidget;
                                        return !!t && s.has(t.id);
                                    },
                                    execute: async () => {
                                        const t = e.shell.currentWidget;
                                        if (!t) return;
                                        const r = s.get(t.id);
                                        r &&
                                            (await r.provider.highlightPrevious(),
                                            r.updateIndices());
                                    },
                                }),
                                r &&
                                    (r.addItem({
                                        command: i,
                                        category: n.__('Main Area'),
                                    }),
                                    r.addItem({
                                        command: l,
                                        category: n.__('Main Area'),
                                    }),
                                    r.addItem({
                                        command: h,
                                        category: n.__('Main Area'),
                                    })),
                                d
                            );
                        },
                    },
                    i,
                ];
        },
    },
]);
//# sourceMappingURL=9035.2467c10.js.map
