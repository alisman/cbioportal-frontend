'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [3392],
    {
        90509: (e, t, n) => {
            n.r(t),
                n.d(t, {
                    ToolbarItems: () => D,
                    default: () => x,
                    downloadPlugin: () => y,
                    openBrowserTabPlugin: () => C,
                    pathStatusPlugin: () => f,
                    savingStatusPlugin: () => b,
                });
            var o,
                a = n(12867),
                r = n(47343),
                i = n(96801),
                l = n(11123),
                d = n(78073),
                c = n(53979),
                s = n(89934),
                u = n(61345),
                m = n(99729),
                g = n(43892),
                p = n(26169),
                h = n(86098),
                v = n(62471);
            !(function(e) {
                (e.clone = 'docmanager:clone'),
                    (e.deleteFile = 'docmanager:delete-file'),
                    (e.newUntitled = 'docmanager:new-untitled'),
                    (e.open = 'docmanager:open'),
                    (e.openBrowserTab = 'docmanager:open-browser-tab'),
                    (e.reload = 'docmanager:reload'),
                    (e.rename = 'docmanager:rename'),
                    (e.del = 'docmanager:delete'),
                    (e.restoreCheckpoint = 'docmanager:restore-checkpoint'),
                    (e.save = 'docmanager:save'),
                    (e.saveAll = 'docmanager:save-all'),
                    (e.saveAs = 'docmanager:save-as'),
                    (e.download = 'docmanager:download'),
                    (e.toggleAutosave = 'docmanager:toggle-autosave'),
                    (e.showInFileBrowser = 'docmanager:show-in-file-browser');
            })(o || (o = {}));
            const _ = '@jupyterlab/docmanager-extension:plugin',
                w = {
                    id: _,
                    provides: l.IDocumentManager,
                    requires: [c.ISettingRegistry, u.ITranslator],
                    optional: [
                        a.ILabStatus,
                        r.ICommandPalette,
                        a.ILabShell,
                        r.ISessionContextDialogs,
                        d.IDocumentProviderFactory,
                    ],
                    activate: (e, t, n, a, d, c, s, u) => {
                        var h;
                        const v = n.load('jupyterlab'),
                            w = e.serviceManager,
                            b = new WeakSet(),
                            f = {
                                open: (t, n) => {
                                    t.id ||
                                        (t.id = 'document-manager-' + ++k.id),
                                        (t.title.dataset = Object.assign(
                                            { type: 'document-title' },
                                            t.title.dataset
                                        )),
                                        t.isAttached ||
                                            e.shell.add(t, 'main', n || {}),
                                        e.shell.activateById(t.id);
                                    const o = x.contextForWidget(t);
                                    o &&
                                        !b.has(o) &&
                                        (a &&
                                            (function(e, t) {
                                                let n = null;
                                                const o = (t, o) => {
                                                    'dirty' === o.name &&
                                                        (!0 === o.newValue
                                                            ? n ||
                                                              (n = e.setDirty())
                                                            : n &&
                                                              (n.dispose(),
                                                              (n = null)));
                                                };
                                                t.ready.then(() => {
                                                    t.model.stateChanged.connect(
                                                        o
                                                    ),
                                                        t.model.dirty &&
                                                            (n = e.setDirty());
                                                }),
                                                    t.disposed.connect(() => {
                                                        n && n.dispose();
                                                    });
                                            })(a, o),
                                        b.add(o));
                                },
                            },
                            y = e.docRegistry,
                            C = e.restored.then(() => {}),
                            x = new l.DocumentManager({
                                registry: y,
                                manager: w,
                                opener: f,
                                when: C,
                                setBusy:
                                    null !== (h = a && (() => a.setBusy())) &&
                                    void 0 !== h
                                        ? h
                                        : void 0,
                                sessionDialogs: s || void 0,
                                translator: n,
                                collaborative: !0,
                                docProviderFactory: null != u ? u : void 0,
                            });
                        !(function(e, t, n, a, d, c, s) {
                            const u = d.load('jupyterlab'),
                                { commands: p, shell: h } = e,
                                v = u.__('File Operations'),
                                w = () => {
                                    const { currentWidget: e } = h;
                                    return !(!e || !t.contextForWidget(e));
                                };
                            c &&
                                (function(e, t, n, a, i) {
                                    const d = i.load('jupyterlab'),
                                        { commands: c } = e,
                                        s = () => {
                                            var o;
                                            const a = /[Pp]ath:\s?(.*)\n?/,
                                                r = e.contextMenuHitTest(e => {
                                                    var t;
                                                    return !!(null ===
                                                        (t = e.title) ||
                                                    void 0 === t
                                                        ? void 0
                                                        : t.match(a));
                                                }),
                                                i =
                                                    null == r
                                                        ? void 0
                                                        : r.title.match(a);
                                            return null !==
                                                (o =
                                                    i &&
                                                    t.findWidget(i[1], null)) &&
                                                void 0 !== o
                                                ? o
                                                : n.currentWidget;
                                        },
                                        u = () => {
                                            const { currentWidget: e } = n;
                                            return !(
                                                !e || !t.contextForWidget(e)
                                            );
                                        };
                                    c.addCommand(o.clone, {
                                        label: () =>
                                            d.__('New View for %1', W(s(), t)),
                                        isEnabled: u,
                                        execute: e => {
                                            const n = s(),
                                                o = e.options || {
                                                    mode: 'split-right',
                                                };
                                            if (!n) return;
                                            const r = t.cloneWidget(n);
                                            r && a.open(r, o);
                                        },
                                    }),
                                        c.addCommand(o.rename, {
                                            label: () => {
                                                let e = W(s(), t);
                                                return (
                                                    e && (e = ' ' + e),
                                                    d.__('Rename%1…', e)
                                                );
                                            },
                                            isEnabled: u,
                                            execute: () => {
                                                if (u()) {
                                                    const e = t.contextForWidget(
                                                        s()
                                                    );
                                                    return (0, l.renameDialog)(
                                                        t,
                                                        e.path
                                                    );
                                                }
                                            },
                                        }),
                                        c.addCommand(o.del, {
                                            label: () =>
                                                d.__('Delete %1', W(s(), t)),
                                            isEnabled: u,
                                            execute: async () => {
                                                if (u()) {
                                                    const n = t.contextForWidget(
                                                        s()
                                                    );
                                                    if (!n) return;
                                                    (
                                                        await (0,
                                                        r.showDialog)({
                                                            title: d.__(
                                                                'Delete'
                                                            ),
                                                            body: d.__(
                                                                'Are you sure you want to delete %1',
                                                                n.path
                                                            ),
                                                            buttons: [
                                                                r.Dialog.cancelButton(
                                                                    {
                                                                        label: d.__(
                                                                            'Cancel'
                                                                        ),
                                                                    }
                                                                ),
                                                                r.Dialog.warnButton(
                                                                    {
                                                                        label: d.__(
                                                                            'Delete'
                                                                        ),
                                                                    }
                                                                ),
                                                            ],
                                                        })
                                                    ).button.accept &&
                                                        (await e.commands.execute(
                                                            'docmanager:delete-file',
                                                            { path: n.path }
                                                        ));
                                                }
                                            },
                                        }),
                                        c.addCommand(o.showInFileBrowser, {
                                            label: () =>
                                                d.__('Show in File Browser'),
                                            isEnabled: u,
                                            execute: async () => {
                                                const e = s(),
                                                    n =
                                                        e &&
                                                        t.contextForWidget(e);
                                                n &&
                                                    (await c.execute(
                                                        'filebrowser:activate',
                                                        { path: n.path }
                                                    ),
                                                    await c.execute(
                                                        'filebrowser:go-to-path',
                                                        { path: n.path }
                                                    ));
                                            },
                                        });
                                })(e, t, c, n, d),
                                p.addCommand(o.deleteFile, {
                                    label: () =>
                                        `Delete ${W(h.currentWidget, t)}`,
                                    execute: e => {
                                        const n =
                                            void 0 === e.path ? '' : e.path;
                                        if (!n) {
                                            const e = o.deleteFile;
                                            throw new Error(
                                                `A non-empty path is required for ${e}.`
                                            );
                                        }
                                        return t.deleteFile(n);
                                    },
                                }),
                                p.addCommand(o.newUntitled, {
                                    execute: e => {
                                        const n = e.error || u.__('Error'),
                                            o = void 0 === e.path ? '' : e.path,
                                            a = { type: e.type, path: o };
                                        return (
                                            'file' === e.type &&
                                                (a.ext = e.ext || '.txt'),
                                            t.services.contents
                                                .newUntitled(a)
                                                .catch(e =>
                                                    (0, r.showErrorMessage)(
                                                        n,
                                                        e
                                                    )
                                                )
                                        );
                                    },
                                    label: e => e.label || `New ${e.type}`,
                                }),
                                p.addCommand(o.open, {
                                    execute: e => {
                                        const n =
                                                void 0 === e.path ? '' : e.path,
                                            o = e.factory || void 0,
                                            a = null == e ? void 0 : e.kernel,
                                            r = e.options || void 0;
                                        return t.services.contents
                                            .get(n, { content: !1 })
                                            .then(() =>
                                                t.openOrReveal(n, o, a, r)
                                            );
                                    },
                                    icon: e => e.icon || '',
                                    label: e => e.label || e.factory,
                                    mnemonic: e => e.mnemonic || -1,
                                }),
                                p.addCommand(o.reload, {
                                    label: () =>
                                        u.__(
                                            'Reload %1 from Disk',
                                            W(h.currentWidget, t)
                                        ),
                                    caption: u.__('Reload contents from disk'),
                                    isEnabled: w,
                                    execute: () => {
                                        if (!w()) return;
                                        const e = t.contextForWidget(
                                                h.currentWidget
                                            ),
                                            n = W(h.currentWidget, t);
                                        return e
                                            ? e.model.dirty
                                                ? (0, r.showDialog)({
                                                      title: u.__(
                                                          'Reload %1 from Disk',
                                                          n
                                                      ),
                                                      body: u.__(
                                                          'Are you sure you want to reload the %1 from the disk?',
                                                          n
                                                      ),
                                                      buttons: [
                                                          r.Dialog.cancelButton(
                                                              {
                                                                  label: u.__(
                                                                      'Cancel'
                                                                  ),
                                                              }
                                                          ),
                                                          r.Dialog.warnButton({
                                                              label: u.__(
                                                                  'Reload'
                                                              ),
                                                          }),
                                                      ],
                                                  }).then(t => {
                                                      if (
                                                          t.button.accept &&
                                                          !e.isDisposed
                                                      )
                                                          return e.revert();
                                                  })
                                                : e.isDisposed
                                                ? void 0
                                                : e.revert()
                                            : (0, r.showDialog)({
                                                  title: u.__('Cannot Reload'),
                                                  body: u.__(
                                                      'No context found for current widget!'
                                                  ),
                                                  buttons: [
                                                      r.Dialog.okButton({
                                                          label: u.__('Ok'),
                                                      }),
                                                  ],
                                              });
                                    },
                                }),
                                p.addCommand(o.restoreCheckpoint, {
                                    label: () =>
                                        u.__(
                                            'Revert %1 to Checkpoint',
                                            W(h.currentWidget, t)
                                        ),
                                    caption: u.__(
                                        'Revert contents to previous checkpoint'
                                    ),
                                    isEnabled: w,
                                    execute: () => {
                                        if (!w()) return;
                                        const e = t.contextForWidget(
                                            h.currentWidget
                                        );
                                        return e
                                            ? e.listCheckpoints().then(n => {
                                                  if (n.length < 1) return;
                                                  const o = n[n.length - 1];
                                                  if (!o) return;
                                                  const a = W(
                                                      h.currentWidget,
                                                      t
                                                  );
                                                  return (0, r.showDialog)({
                                                      title: u.__(
                                                          'Revert %1 to checkpoint',
                                                          a
                                                      ),
                                                      body: new F(o, u, a),
                                                      buttons: [
                                                          r.Dialog.cancelButton(
                                                              {
                                                                  label: u.__(
                                                                      'Cancel'
                                                                  ),
                                                              }
                                                          ),
                                                          r.Dialog.warnButton({
                                                              label: u.__(
                                                                  'Revert'
                                                              ),
                                                          }),
                                                      ],
                                                  }).then(t => {
                                                      if (!e.isDisposed)
                                                          return t.button.accept
                                                              ? e.model.readOnly
                                                                  ? e.revert()
                                                                  : e
                                                                        .restoreCheckpoint()
                                                                        .then(
                                                                            () =>
                                                                                e.revert()
                                                                        )
                                                              : void 0;
                                                  });
                                              })
                                            : (0, r.showDialog)({
                                                  title: u.__('Cannot Revert'),
                                                  body: u.__(
                                                      'No context found for current widget!'
                                                  ),
                                                  buttons: [
                                                      r.Dialog.okButton({
                                                          label: u.__('Ok'),
                                                      }),
                                                  ],
                                              });
                                    },
                                });
                            const b = new WeakSet();
                            p.addCommand(o.save, {
                                label: () =>
                                    u.__('Save %1', W(h.currentWidget, t)),
                                caption: u.__('Save and create checkpoint'),
                                icon: e => (e.toolbar ? m.saveIcon : ''),
                                isEnabled: () => {
                                    const { currentWidget: e } = h;
                                    if (!e) return !1;
                                    const n = t.contextForWidget(e);
                                    return !!(
                                        n &&
                                        n.contentsModel &&
                                        n.contentsModel.writable
                                    );
                                },
                                execute: async () => {
                                    var e, n, o;
                                    if (w()) {
                                        const l = h.currentWidget,
                                            d = t.contextForWidget(l);
                                        if (!d)
                                            return (0, r.showDialog)({
                                                title: u.__('Cannot Save'),
                                                body: u.__(
                                                    'No context found for current widget!'
                                                ),
                                                buttons: [
                                                    r.Dialog.okButton({
                                                        label: u.__('Ok'),
                                                    }),
                                                ],
                                            });
                                        {
                                            if (b.has(d)) return;
                                            if (d.model.readOnly)
                                                return (0, r.showDialog)({
                                                    title: u.__('Cannot Save'),
                                                    body: u.__(
                                                        'Document is read-only'
                                                    ),
                                                    buttons: [
                                                        r.Dialog.okButton({
                                                            label: u.__('Ok'),
                                                        }),
                                                    ],
                                                });
                                            b.add(d);
                                            const c = i.PathExt.basename(
                                                null !==
                                                    (n =
                                                        null ===
                                                            (e =
                                                                d.contentsModel) ||
                                                        void 0 === e
                                                            ? void 0
                                                            : e.path) &&
                                                    void 0 !== n
                                                    ? n
                                                    : ''
                                            );
                                            let s = c;
                                            if (
                                                t.renameUntitledFileOnSave &&
                                                !0 === l.isUntitled
                                            ) {
                                                const e = await r.InputDialog.getText(
                                                    {
                                                        title: u.__(
                                                            'Rename file'
                                                        ),
                                                        okLabel: u.__('Rename'),
                                                        placeholder: u.__(
                                                            'File name'
                                                        ),
                                                        text: c,
                                                        selectionRange:
                                                            c.length -
                                                            i.PathExt.extname(c)
                                                                .length,
                                                        checkbox: {
                                                            label: u.__(
                                                                "Don't ask me again."
                                                            ),
                                                            caption: u.__(
                                                                'If checked, you will not be asked to rename future untitled files when saving them.'
                                                            ),
                                                        },
                                                    }
                                                );
                                                if (
                                                    e.button.accept &&
                                                    ((s =
                                                        null !==
                                                            (o = e.value) &&
                                                        void 0 !== o
                                                            ? o
                                                            : c),
                                                    (l.isUntitled = !1),
                                                    'boolean' ==
                                                        typeof e.isChecked)
                                                ) {
                                                    const t = (
                                                        await a.get(
                                                            _,
                                                            'renameUntitledFileOnSave'
                                                        )
                                                    ).composite;
                                                    e.isChecked === t &&
                                                        a
                                                            .set(
                                                                _,
                                                                'renameUntitledFileOnSave',
                                                                !e.isChecked
                                                            )
                                                            .catch(e => {
                                                                console.error(
                                                                    `Fail to set 'renameUntitledFileOnSave:\n${e}`
                                                                );
                                                            });
                                                }
                                            }
                                            try {
                                                if (
                                                    (await d.save(),
                                                    !(null == l
                                                        ? void 0
                                                        : l.isDisposed))
                                                )
                                                    return d.createCheckpoint();
                                            } catch (e) {
                                                if (
                                                    'ModalCancelError' ===
                                                    e.name
                                                )
                                                    return;
                                                throw e;
                                            } finally {
                                                b.delete(d),
                                                    s !== c &&
                                                        (await d.rename(s));
                                            }
                                        }
                                    }
                                },
                            }),
                                p.addCommand(o.saveAll, {
                                    label: () => u.__('Save All'),
                                    caption: u.__('Save all open documents'),
                                    isEnabled: () =>
                                        (0, g.some)(
                                            (0, g.map)(h.widgets('main'), e =>
                                                t.contextForWidget(e)
                                            ),
                                            e => {
                                                var t, n;
                                                return (
                                                    null !==
                                                        (n =
                                                            null ===
                                                                (t =
                                                                    null == e
                                                                        ? void 0
                                                                        : e.contentsModel) ||
                                                            void 0 === t
                                                                ? void 0
                                                                : t.writable) &&
                                                    void 0 !== n &&
                                                    n
                                                );
                                            }
                                        ),
                                    execute: () => {
                                        const e = [],
                                            n = new Set();
                                        return (
                                            (0, g.each)(
                                                h.widgets('main'),
                                                o => {
                                                    const a = t.contextForWidget(
                                                        o
                                                    );
                                                    !a ||
                                                        a.model.readOnly ||
                                                        n.has(a.path) ||
                                                        (n.add(a.path),
                                                        e.push(a.save()));
                                                }
                                            ),
                                            Promise.all(e)
                                        );
                                    },
                                }),
                                p.addCommand(o.saveAs, {
                                    label: () =>
                                        u.__(
                                            'Save %1 As…',
                                            W(h.currentWidget, t)
                                        ),
                                    caption: u.__('Save with new path'),
                                    isEnabled: w,
                                    execute: () => {
                                        if (w()) {
                                            const e = t.contextForWidget(
                                                h.currentWidget
                                            );
                                            return e
                                                ? e.saveAs()
                                                : (0, r.showDialog)({
                                                      title: u.__(
                                                          'Cannot Save'
                                                      ),
                                                      body: u.__(
                                                          'No context found for current widget!'
                                                      ),
                                                      buttons: [
                                                          r.Dialog.okButton({
                                                              label: u.__('Ok'),
                                                          }),
                                                      ],
                                                  });
                                        }
                                    },
                                }),
                                p.addCommand(o.toggleAutosave, {
                                    label: u.__('Autosave Documents'),
                                    isToggled: () => t.autosave,
                                    execute: () => {
                                        const e = !t.autosave,
                                            n = 'autosave';
                                        return a.set(_, n, e).catch(e => {
                                            console.error(
                                                `Failed to set ${_}:${n} - ${e.message}`
                                            );
                                        });
                                    },
                                }),
                                s &&
                                    [
                                        o.reload,
                                        o.restoreCheckpoint,
                                        o.save,
                                        o.saveAs,
                                        o.toggleAutosave,
                                    ].forEach(e => {
                                        s.addItem({ command: e, category: v });
                                    });
                        })(e, x, f, t, n, c, d);
                        const D = t => {
                            const n = t.get('autosave').composite;
                            (x.autosave = (!0 !== n && !1 !== n) || n),
                                e.commands.notifyCommandChanged(
                                    o.toggleAutosave
                                );
                            const a = t.get('autosaveInterval').composite;
                            x.autosaveInterval = a || 120;
                            const r = t.get('lastModifiedCheckMargin')
                                .composite;
                            x.lastModifiedCheckMargin = r || 500;
                            const i = t.get('renameUntitledFileOnSave')
                                .composite;
                            x.renameUntitledFileOnSave = null == i || i;
                            const l = t.get('defaultViewers').composite,
                                d = {};
                            Object.keys(l).forEach(e => {
                                y.getFileType(e)
                                    ? (y.getWidgetFactory(l[e]) ||
                                          console.warn(
                                              `Document viewer ${l[e]} not found`
                                          ),
                                      (d[e] = l[e]))
                                    : console.warn(`File Type ${e} not found`);
                            }),
                                (0, g.each)(y.fileTypes(), e => {
                                    try {
                                        y.setDefaultWidgetFactory(
                                            e.name,
                                            d[e.name]
                                        );
                                    } catch (t) {
                                        console.warn(
                                            `Failed to set default viewer ${
                                                d[e.name]
                                            } for file type ${e.name}`
                                        );
                                    }
                                });
                        };
                        return (
                            Promise.all([t.load(_), e.restored])
                                .then(([e]) => {
                                    e.changed.connect(D), D(e);
                                })
                                .catch(e => {
                                    console.error(e.message);
                                }),
                            t.transform(_, {
                                fetch: e => {
                                    const t = (0, g.toArray)(y.fileTypes())
                                            .map(e => e.name)
                                            .join('    \n'),
                                        n = (0, g.toArray)(y.widgetFactories())
                                            .map(e => e.name)
                                            .join('    \n'),
                                        o = v.__(
                                            'Overrides for the default viewers for file types.\nSpecify a mapping from file type name to document viewer name, for example:\n\ndefaultViewers: {\n  markdown: "Markdown Preview"\n}\n\nIf you specify non-existent file types or viewers, or if a viewer cannot\nopen a given file type, the override will not function.\n\nAvailable viewers:\n%1\n\nAvailable file types:\n%2',
                                            n,
                                            t
                                        ),
                                        a = p.JSONExt.deepCopy(e.schema);
                                    return (
                                        (a.properties.defaultViewers.description = o),
                                        Object.assign(Object.assign({}, e), {
                                            schema: a,
                                        })
                                    );
                                },
                            }),
                            y.changed.connect(() => t.reload(_)),
                            x
                        );
                    },
                },
                b = {
                    id: '@jupyterlab/docmanager-extension:saving-status',
                    autoStart: !0,
                    requires: [l.IDocumentManager, a.ILabShell, u.ITranslator],
                    optional: [s.IStatusBar],
                    activate: (e, t, n, o, a) => {
                        if (!a) return;
                        const r = new l.SavingStatus({
                            docManager: t,
                            translator: o,
                        });
                        (r.model.widget = n.currentWidget),
                            n.currentChanged.connect(() => {
                                r.model.widget = n.currentWidget;
                            }),
                            a.registerStatusItem(b.id, {
                                item: r,
                                align: 'middle',
                                isActive: () =>
                                    null !== r.model && null !== r.model.status,
                                activeStateChanged: r.model.stateChanged,
                            });
                    },
                },
                f = {
                    id: '@jupyterlab/docmanager-extension:path-status',
                    autoStart: !0,
                    requires: [l.IDocumentManager, a.ILabShell],
                    optional: [s.IStatusBar],
                    activate: (e, t, n, o) => {
                        if (!o) return;
                        const a = new l.PathStatus({ docManager: t });
                        (a.model.widget = n.currentWidget),
                            n.currentChanged.connect(() => {
                                a.model.widget = n.currentWidget;
                            }),
                            o.registerStatusItem(f.id, {
                                item: a,
                                align: 'right',
                                rank: 0,
                            });
                    },
                },
                y = {
                    id: '@jupyterlab/docmanager-extension:download',
                    autoStart: !0,
                    requires: [u.ITranslator, l.IDocumentManager],
                    optional: [r.ICommandPalette],
                    activate: (e, t, n, a) => {
                        const i = t.load('jupyterlab'),
                            { commands: l, shell: d } = e,
                            c = () => {
                                const { currentWidget: e } = d;
                                return !(!e || !n.contextForWidget(e));
                            };
                        l.addCommand(o.download, {
                            label: i.__('Download'),
                            caption: i.__('Download the file to your computer'),
                            isEnabled: c,
                            execute: () => {
                                if (c()) {
                                    const e = n.contextForWidget(
                                        d.currentWidget
                                    );
                                    return e
                                        ? e.download()
                                        : (0, r.showDialog)({
                                              title: i.__('Cannot Download'),
                                              body: i.__(
                                                  'No context found for current widget!'
                                              ),
                                              buttons: [
                                                  r.Dialog.okButton({
                                                      label: i.__('OK'),
                                                  }),
                                              ],
                                          });
                                }
                            },
                        });
                        const s = i.__('File Operations');
                        a && a.addItem({ command: o.download, category: s });
                    },
                },
                C = {
                    id: '@jupyterlab/docmanager-extension:open-browser-tab',
                    autoStart: !0,
                    requires: [u.ITranslator, l.IDocumentManager],
                    activate: (e, t, n) => {
                        const a = t.load('jupyterlab'),
                            { commands: r } = e;
                        r.addCommand(o.openBrowserTab, {
                            execute: e => {
                                const t = void 0 === e.path ? '' : e.path;
                                if (t)
                                    return n.services.contents
                                        .getDownloadUrl(t)
                                        .then(e => {
                                            const t = window.open();
                                            if (!t)
                                                throw new Error(
                                                    'Failed to open new browser tab.'
                                                );
                                            (t.opener = null),
                                                (t.location.href = e);
                                        });
                            },
                            icon: e => e.icon || '',
                            label: () => a.__('Open in New Browser Tab'),
                        });
                    },
                },
                x = [w, f, b, y, C];
            var D, k;
            !(function(e) {
                e.createSaveButton = function(e, t) {
                    return (0, r.addCommandToolbarButtonClass)(
                        r.ReactWidget.create(
                            v.createElement(r.UseSignal, { signal: t }, () =>
                                v.createElement(
                                    r.CommandToolbarButtonComponent,
                                    {
                                        commands: e,
                                        id: o.save,
                                        label: '',
                                        args: { toolbar: !0 },
                                    }
                                )
                            )
                        )
                    );
                };
            })(D || (D = {}));
            class F extends h.Widget {
                constructor(e, t, n = 'notebook') {
                    super({ node: k.createRevertConfirmNode(e, n, t) });
                }
            }
            function W(e, t) {
                if (!e) return 'File';
                const n = t.contextForWidget(e);
                if (!n) return '';
                const o = t.registry.getFileTypesForPath(n.path);
                return o.length && o[0].displayName ? o[0].displayName : 'File';
            }
            !(function(e) {
                (e.id = 0),
                    (e.createRevertConfirmNode = function(e, t, n) {
                        const o = document.createElement('div'),
                            a = document.createElement('p'),
                            r = document.createTextNode(
                                n.__(
                                    'Are you sure you want to revert the %1 to the latest checkpoint? ',
                                    t
                                )
                            ),
                            l = document.createElement('strong');
                        (l.textContent = n.__('This cannot be undone.')),
                            a.appendChild(r),
                            a.appendChild(l);
                        const d = document.createElement('p'),
                            c = document.createTextNode(
                                n.__('The checkpoint was last updated at: ')
                            ),
                            s = document.createElement('p'),
                            u = new Date(e.last_modified);
                        return (
                            (s.style.textAlign = 'center'),
                            (s.textContent =
                                i.Time.format(
                                    u,
                                    'dddd, MMMM Do YYYY, h:mm:ss a'
                                ) +
                                ' (' +
                                i.Time.formatHuman(u) +
                                ')'),
                            d.appendChild(c),
                            d.appendChild(s),
                            o.appendChild(a),
                            o.appendChild(d),
                            o
                        );
                    });
            })(k || (k = {}));
        },
    },
]);
//# sourceMappingURL=3392.ec04e47.js.map
