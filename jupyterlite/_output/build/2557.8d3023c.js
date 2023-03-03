'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [2557, 9960],
    {
        2557: (e, t, o) => {
            o.r(t), o.d(t, { default: () => v });
            var a = o(12867),
                n = o(47343),
                r = o(96801),
                i = o(11123),
                c = o(78073),
                l = o(88983),
                s = o(55101),
                d = o(61345),
                p = o(99729),
                u = o(89201),
                m = o(43892),
                b = o(86098),
                h = o(96571),
                f = o(62471),
                g = o.n(f);
            const y = new RegExp('/(lab|notebooks|edit|consoles)\\/?');
            var w;
            !(function(e) {
                (e.about = 'application:about'),
                    (e.docmanagerDownload = 'docmanager:download'),
                    (e.filebrowserDownload = 'filebrowser:download'),
                    (e.copyShareableLink = 'filebrowser:share-main');
            })(w || (w = {}));
            const _ = 'jupyterlite',
                v = [
                    {
                        id: '@jupyterlite/application-extension:about',
                        autoStart: !0,
                        requires: [d.ITranslator],
                        optional: [n.ICommandPalette, s.IMainMenu],
                        activate: (e, t, o, a) => {
                            const { commands: r } = e,
                                i = t.load(_),
                                c = i.__('Help');
                            r.addCommand(w.about, {
                                label: i.__('About %1', e.name),
                                execute: () => {
                                    const t = i.__('Version %1', e.version),
                                        o = g().createElement(
                                            'span',
                                            {
                                                className:
                                                    'jp-About-version-info',
                                            },
                                            g().createElement(
                                                'span',
                                                {
                                                    className:
                                                        'jp-About-version',
                                                },
                                                t
                                            )
                                        ),
                                        a = g().createElement(
                                            'span',
                                            { className: 'jp-About-header' },
                                            g().createElement(
                                                'div',
                                                {
                                                    className:
                                                        'jp-About-header-info',
                                                },
                                                g().createElement(
                                                    u.liteWordmark.react,
                                                    {
                                                        height: 'auto',
                                                        width: '196px',
                                                    }
                                                ),
                                                o
                                            )
                                        ),
                                        r = g().createElement(
                                            'span',
                                            {
                                                className:
                                                    'jp-About-externalLinks',
                                            },
                                            g().createElement(
                                                'a',
                                                {
                                                    href:
                                                        'https://github.com/jupyterlite/jupyterlite/graphs/contributors',
                                                    target: '_blank',
                                                    rel: 'noopener noreferrer',
                                                    className: 'jp-Button-flat',
                                                },
                                                i.__('CONTRIBUTOR LIST')
                                            ),
                                            g().createElement(
                                                'a',
                                                {
                                                    href:
                                                        'https://github.com/jupyterlite/jupyterlite',
                                                    target: '_blank',
                                                    rel: 'noopener noreferrer',
                                                    className: 'jp-Button-flat',
                                                },
                                                i.__('JUPYTERLITE ON GITHUB')
                                            )
                                        ),
                                        c = g().createElement(
                                            'span',
                                            { className: 'jp-About-copyright' },
                                            i.__(
                                                '© 2021-2022 JupyterLite Contributors'
                                            )
                                        ),
                                        l = g().createElement(
                                            'div',
                                            { className: 'jp-About-body' },
                                            r,
                                            c
                                        );
                                    return (0, n.showDialog)({
                                        title: a,
                                        body: l,
                                        buttons: [
                                            n.Dialog.createButton({
                                                label: i.__('Dismiss'),
                                                className:
                                                    'jp-About-button jp-mod-reject jp-mod-styled',
                                            }),
                                        ],
                                    });
                                },
                            }),
                                o &&
                                    o.addItem({
                                        command: w.about,
                                        category: c,
                                    }),
                                a &&
                                    a.helpMenu.addGroup(
                                        [{ command: w.about }],
                                        0
                                    );
                        },
                    },
                    {
                        id: '@jupyterlite/application-extension:docprovider',
                        provides: c.IDocumentProviderFactory,
                        requires: [d.ITranslator],
                        activate: (e, t) => {
                            const o =
                                'true' ===
                                r.PageConfig.getOption('collaborative');
                            return e => {
                                if (o) {
                                    const e = t.load(_);
                                    console.warn(
                                        e.__(
                                            'The `collaborative` feature was enabled, but no docprovider is available.'
                                        )
                                    ),
                                        console.info(
                                            e.__(
                                                'Install `jupyterlab-webrtc-docprovider` to enable WebRTC-based collaboration.'
                                            )
                                        );
                                }
                                return new c.ProviderMock();
                            };
                        },
                    },
                    {
                        id: '@jupyterlite/application-extension:download',
                        autoStart: !0,
                        requires: [d.ITranslator, i.IDocumentManager],
                        optional: [n.ICommandPalette, l.IFileBrowserFactory],
                        activate: (e, t, o, a, r) => {
                            const i = t.load(_),
                                {
                                    commands: c,
                                    serviceManager: l,
                                    shell: s,
                                } = e,
                                { contents: d } = l,
                                u = () => {
                                    const { currentWidget: e } = s;
                                    return !(!e || !o.contextForWidget(e));
                                },
                                b = async (e, t) => {
                                    var o, a, n;
                                    const r = await d.get(e, { content: !0 }),
                                        i = document.createElement('a');
                                    if (
                                        'notebook' === r.type ||
                                        'json' === r.format
                                    ) {
                                        const e =
                                                null !== (o = r.mimetype) &&
                                                void 0 !== o
                                                    ? o
                                                    : 'text/json',
                                            t = JSON.stringify(
                                                r.content,
                                                null,
                                                2
                                            );
                                        i.href = `data:${e};charset=utf-8,${encodeURIComponent(
                                            t
                                        )}`;
                                    } else {
                                        if ('file' !== r.type)
                                            throw new Error(
                                                `Content whose type is "${r.type}" cannot be downloaded`
                                            );
                                        if ('base64' === r.format) {
                                            const e =
                                                null !== (a = r.mimetype) &&
                                                void 0 !== a
                                                    ? a
                                                    : 'application/octet-stream';
                                            i.href = `data:${e};base64,${r.content}`;
                                        } else {
                                            const e =
                                                null !== (n = r.mimetype) &&
                                                void 0 !== n
                                                    ? n
                                                    : 'text/plain';
                                            i.href = `data:${e};charset=utf-8,${encodeURIComponent(
                                                r.content
                                            )}`;
                                        }
                                    }
                                    (i.download = t),
                                        document.body.appendChild(i),
                                        i.click(),
                                        document.body.removeChild(i);
                                };
                            c.addCommand(w.docmanagerDownload, {
                                label: i.__('Download'),
                                caption: i.__(
                                    'Download the file to your computer'
                                ),
                                isEnabled: u,
                                execute: async () => {
                                    const e = s.currentWidget;
                                    if (!u() || !e) return;
                                    const t = o.contextForWidget(e);
                                    if (!t)
                                        return (0, n.showDialog)({
                                            title: i.__('Cannot Download'),
                                            body: i.__(
                                                'No context found for current widget!'
                                            ),
                                            buttons: [
                                                n.Dialog.okButton({
                                                    label: i.__('OK'),
                                                }),
                                            ],
                                        });
                                    await t.save(), await b(t.path, t.path);
                                },
                            });
                            const h = i.__('File Operations');
                            if (
                                (a &&
                                    a.addItem({
                                        command: w.docmanagerDownload,
                                        category: h,
                                    }),
                                r)
                            ) {
                                const { tracker: e } = r;
                                c.addCommand(w.filebrowserDownload, {
                                    execute: async () => {
                                        const t = e.currentWidget;
                                        t &&
                                            (0, m.toArray)(
                                                t.selectedItems()
                                            ).forEach(async e => {
                                                'directory' !== e.type &&
                                                    (await b(e.path, e.name));
                                            });
                                    },
                                    icon: p.downloadIcon.bindprops({
                                        stylesheet: 'menuItem',
                                    }),
                                    label: i.__('Download'),
                                });
                            }
                        },
                    },
                    {
                        id: '@jupyterlite/application-extension:logo',
                        optional: [a.ILabShell],
                        autoStart: !0,
                        activate: (e, t) => {
                            if (!t) return;
                            const o = new b.Widget();
                            u.liteIcon.element({
                                container: o.node,
                                elementPosition: 'center',
                                margin: '2px 2px 2px 8px',
                                height: 'auto',
                                width: '16px',
                            }),
                                (o.id = 'jp-MainLogo'),
                                t.add(o, 'top', { rank: 0 });
                        },
                    },
                    {
                        id:
                            '@jupyterlite/application-extension:notify-commands',
                        autoStart: !0,
                        optional: [a.ILabShell],
                        activate: (e, t) => {
                            t &&
                                t.layoutModified.connect(() => {
                                    e.commands.notifyCommandChanged();
                                });
                        },
                    },
                    {
                        id: '@jupyterlite/application-extension:opener',
                        autoStart: !0,
                        requires: [a.IRouter, i.IDocumentManager],
                        optional: [a.ILabShell],
                        activate: (e, t, o, a) => {
                            const { commands: n } = e,
                                i = 'router:tree';
                            n.addCommand(i, {
                                execute: i => {
                                    var c;
                                    const l = i,
                                        { request: s, search: d } = l;
                                    if (
                                        null !== (c = s.match(y)) &&
                                        void 0 !== c &&
                                        !c
                                    )
                                        return;
                                    const p = new URLSearchParams(d).getAll(
                                        'path'
                                    );
                                    if (!p) return;
                                    const u = p.map(e => decodeURIComponent(e));
                                    e.restored.then(() => {
                                        const e = r.PageConfig.getOption(
                                                'retroPage'
                                            ),
                                            [i] = u;
                                        switch (e) {
                                            case 'consoles':
                                                return void n.execute(
                                                    'console:create',
                                                    { path: i }
                                                );
                                            case 'notebooks':
                                                return void o.open(
                                                    i,
                                                    'Notebook',
                                                    void 0,
                                                    { ref: '_noref' }
                                                );
                                            case 'edit':
                                                return void o.open(
                                                    i,
                                                    'Editor',
                                                    void 0,
                                                    { ref: '_noref' }
                                                );
                                            default: {
                                                u.forEach(e => o.open(e));
                                                const e = new URL(
                                                    r.URLExt.join(
                                                        r.PageConfig.getBaseUrl(),
                                                        s
                                                    )
                                                );
                                                e.searchParams.delete('path');
                                                const {
                                                    pathname: i,
                                                    search: c,
                                                } = e;
                                                if (
                                                    (t.navigate(`${i}${c}`, {
                                                        skipRouting: !0,
                                                    }),
                                                    a)
                                                ) {
                                                    const e = () => {
                                                        n.execute(
                                                            'docmanager:show-in-file-browser'
                                                        ),
                                                            a.currentChanged.disconnect(
                                                                e
                                                            );
                                                    };
                                                    a.currentChanged.connect(e);
                                                }
                                                break;
                                            }
                                        }
                                    });
                                },
                            }),
                                t.register({ command: i, pattern: y });
                        },
                    },
                    {
                        id: '@jupyterlite/application-extension:share-file',
                        requires: [l.IFileBrowserFactory, d.ITranslator],
                        autoStart: !0,
                        activate: (e, t, o) => {
                            const a = o.load(_),
                                { commands: i } = e,
                                { tracker: c } = t,
                                l = (0, h.jS)('--room', '').trim(),
                                s =
                                    'true' ===
                                        r.PageConfig.getOption(
                                            'collaborative'
                                        ) && l;
                            i.addCommand(w.copyShareableLink, {
                                execute: () => {
                                    const e = c.currentWidget;
                                    if (!e) return;
                                    const t = new URL(
                                        r.URLExt.join(
                                            r.PageConfig.getBaseUrl(),
                                            'lab'
                                        )
                                    );
                                    (0, m.toArray)(
                                        (0, m.filter)(
                                            e.selectedItems(),
                                            e => 'directory' !== e.type
                                        )
                                    ).forEach(e => {
                                        t.searchParams.append('path', e.path);
                                    }),
                                        s && t.searchParams.append('room', l),
                                        n.Clipboard.copyToSystem(t.href);
                                },
                                isVisible: () =>
                                    !!c.currentWidget &&
                                    (0, m.toArray)(
                                        c.currentWidget.selectedItems()
                                    ).length >= 1,
                                icon: p.linkIcon.bindprops({
                                    stylesheet: 'menuItem',
                                }),
                                label: a.__('Copy Shareable Link'),
                            });
                        },
                    },
                ];
        },
    },
]);
//# sourceMappingURL=2557.8d3023c.js.map
