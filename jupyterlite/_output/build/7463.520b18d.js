'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [7463],
    {
        97463: (e, n, t) => {
            t.r(n),
                t.d(n, {
                    CommandIDs: () => p,
                    createEditMenu: () => _,
                    createFileMenu: () => h,
                    createKernelMenu: () => E,
                    createRunMenu: () => v,
                    createTabsMenu: () => w,
                    createViewMenu: () => C,
                    default: () => A,
                });
            var l = t(12867),
                a = t(47343),
                r = t(96801),
                o = t(55101),
                d = t(55610),
                s = t(53979),
                u = t(61345),
                i = t(99729),
                c = t(43892),
                m = t(26169),
                g = t(86098);
            const b = '@jupyterlab/mainmenu-extension:plugin';
            var p;
            function _(e, n, t) {
                const l = e.commands;
                l.addCommand(p.undo, {
                    label: t.__('Undo'),
                    isEnabled: x.delegateEnabled(e, n.undoers, 'undo'),
                    execute: x.delegateExecute(e, n.undoers, 'undo'),
                }),
                    l.addCommand(p.redo, {
                        label: t.__('Redo'),
                        isEnabled: x.delegateEnabled(e, n.undoers, 'redo'),
                        execute: x.delegateExecute(e, n.undoers, 'redo'),
                    }),
                    l.addCommand(p.clearCurrent, {
                        label: () => {
                            const l = x.delegateEnabled(
                                e,
                                n.clearers,
                                'clearCurrent'
                            )();
                            let a = t.__('Clear');
                            return (
                                l &&
                                    (a = x.delegateLabel(
                                        e,
                                        n.clearers,
                                        'clearCurrentLabel'
                                    )),
                                a
                            );
                        },
                        isEnabled: x.delegateEnabled(
                            e,
                            n.clearers,
                            'clearCurrent'
                        ),
                        execute: x.delegateExecute(
                            e,
                            n.clearers,
                            'clearCurrent'
                        ),
                    }),
                    l.addCommand(p.clearAll, {
                        label: () => {
                            const l = x.delegateEnabled(
                                e,
                                n.clearers,
                                'clearAll'
                            )();
                            let a = t.__('Clear All');
                            return (
                                l &&
                                    (a = x.delegateLabel(
                                        e,
                                        n.clearers,
                                        'clearAllLabel'
                                    )),
                                a
                            );
                        },
                        isEnabled: x.delegateEnabled(e, n.clearers, 'clearAll'),
                        execute: x.delegateExecute(e, n.clearers, 'clearAll'),
                    }),
                    l.addCommand(p.goToLine, {
                        label: t.__('Go to Line…'),
                        isEnabled: x.delegateEnabled(
                            e,
                            n.goToLiners,
                            'goToLine'
                        ),
                        execute: x.delegateExecute(e, n.goToLiners, 'goToLine'),
                    });
            }
            function h(e, n, t, l) {
                const o = e.commands;
                o.addCommand(p.closeAndCleanup, {
                    label: () =>
                        x.delegateLabel(
                            e,
                            n.closeAndCleaners,
                            'closeAndCleanupLabel'
                        ) || l.__('Close and Shutdown'),
                    isEnabled: () =>
                        !!e.shell.currentWidget &&
                        !!e.shell.currentWidget.title.closable,
                    execute: () =>
                        x.delegateEnabled(
                            e,
                            n.closeAndCleaners,
                            'closeAndCleanup'
                        )()
                            ? x.delegateExecute(
                                  e,
                                  n.closeAndCleaners,
                                  'closeAndCleanup'
                              )()
                            : e.commands.execute('application:close'),
                }),
                    o.addCommand(p.createConsole, {
                        label: () =>
                            x.delegateLabel(
                                e,
                                n.consoleCreators,
                                'createConsoleLabel'
                            ) || l.__('New Console for Activity'),
                        isEnabled: x.delegateEnabled(
                            e,
                            n.consoleCreators,
                            'createConsole'
                        ),
                        execute: x.delegateExecute(
                            e,
                            n.consoleCreators,
                            'createConsole'
                        ),
                    }),
                    o.addCommand(p.shutdown, {
                        label: l.__('Shut Down'),
                        caption: l.__('Shut down JupyterLab'),
                        isVisible: () => n.quitEntry,
                        isEnabled: () => n.quitEntry,
                        execute: () =>
                            (0, a.showDialog)({
                                title: l.__('Shutdown confirmation'),
                                body: l.__(
                                    'Please confirm you want to shut down JupyterLab.'
                                ),
                                buttons: [
                                    a.Dialog.cancelButton(),
                                    a.Dialog.warnButton({
                                        label: l.__('Shut Down'),
                                    }),
                                ],
                            }).then(async n => {
                                if (n.button.accept) {
                                    const n = d.ServerConnection.makeSettings(),
                                        t = r.URLExt.join(
                                            n.baseUrl,
                                            'api/shutdown'
                                        );
                                    try {
                                        await Promise.all([
                                            e.serviceManager.sessions.shutdownAll(),
                                            e.serviceManager.terminals.shutdownAll(),
                                        ]);
                                    } catch (e) {
                                        console.log(
                                            `Failed to shutdown sessions and terminals: ${e}`
                                        );
                                    }
                                    return d.ServerConnection.makeRequest(
                                        t,
                                        { method: 'POST' },
                                        n
                                    )
                                        .then(e => {
                                            if (!e.ok)
                                                throw new d.ServerConnection.ResponseError(
                                                    e
                                                );
                                            {
                                                const e = document.createElement(
                                                        'div'
                                                    ),
                                                    n = document.createElement(
                                                        'p'
                                                    );
                                                n.textContent = l.__(
                                                    'You have shut down the Jupyter server. You can now close this tab.'
                                                );
                                                const t = document.createElement(
                                                    'p'
                                                );
                                                (t.textContent = l.__(
                                                    'To use JupyterLab again, you will need to relaunch it.'
                                                )),
                                                    e.appendChild(n),
                                                    e.appendChild(t),
                                                    (0, a.showDialog)({
                                                        title: l.__(
                                                            'Server stopped'
                                                        ),
                                                        body: new g.Widget({
                                                            node: e,
                                                        }),
                                                        buttons: [],
                                                    }),
                                                    window.close();
                                            }
                                        })
                                        .catch(e => {
                                            throw new d.ServerConnection.NetworkError(
                                                e
                                            );
                                        });
                                }
                            }),
                    }),
                    o.addCommand(p.logout, {
                        label: l.__('Log Out'),
                        caption: l.__('Log out of JupyterLab'),
                        isVisible: () => n.quitEntry,
                        isEnabled: () => n.quitEntry,
                        execute: () => {
                            t.navigate('/logout', { hard: !0 });
                        },
                    });
            }
            function E(e, n, t) {
                const l = e.commands;
                l.addCommand(p.interruptKernel, {
                    label: t.__('Interrupt Kernel'),
                    caption: t.__('Interrupt the kernel'),
                    icon: e => (e.toolbar ? i.stopIcon : void 0),
                    isEnabled: x.delegateEnabled(
                        e,
                        n.kernelUsers,
                        'interruptKernel'
                    ),
                    execute: x.delegateExecute(
                        e,
                        n.kernelUsers,
                        'interruptKernel'
                    ),
                }),
                    l.addCommand(p.reconnectToKernel, {
                        label: t.__('Reconnect to Kernel'),
                        isEnabled: x.delegateEnabled(
                            e,
                            n.kernelUsers,
                            'reconnectToKernel'
                        ),
                        execute: x.delegateExecute(
                            e,
                            n.kernelUsers,
                            'reconnectToKernel'
                        ),
                    }),
                    l.addCommand(p.restartKernel, {
                        label: t.__('Restart Kernel…'),
                        caption: t.__('Restart the kernel'),
                        icon: e => (e.toolbar ? i.refreshIcon : void 0),
                        isEnabled: x.delegateEnabled(
                            e,
                            n.kernelUsers,
                            'restartKernel'
                        ),
                        execute: x.delegateExecute(
                            e,
                            n.kernelUsers,
                            'restartKernel'
                        ),
                    }),
                    l.addCommand(p.restartKernelAndClear, {
                        label: () => {
                            const l = x.delegateEnabled(
                                e,
                                n.kernelUsers,
                                'restartKernelAndClear'
                            )();
                            let a = t.__('Restart Kernel and Clear…');
                            return (
                                l &&
                                    (a = x.delegateLabel(
                                        e,
                                        n.kernelUsers,
                                        'restartKernelAndClearLabel'
                                    )),
                                a
                            );
                        },
                        isEnabled: x.delegateEnabled(
                            e,
                            n.kernelUsers,
                            'restartKernelAndClear'
                        ),
                        execute: x.delegateExecute(
                            e,
                            n.kernelUsers,
                            'restartKernelAndClear'
                        ),
                    }),
                    l.addCommand(p.changeKernel, {
                        label: t.__('Change Kernel…'),
                        isEnabled: x.delegateEnabled(
                            e,
                            n.kernelUsers,
                            'changeKernel'
                        ),
                        execute: x.delegateExecute(
                            e,
                            n.kernelUsers,
                            'changeKernel'
                        ),
                    }),
                    l.addCommand(p.shutdownKernel, {
                        label: t.__('Shut Down Kernel'),
                        isEnabled: x.delegateEnabled(
                            e,
                            n.kernelUsers,
                            'shutdownKernel'
                        ),
                        execute: x.delegateExecute(
                            e,
                            n.kernelUsers,
                            'shutdownKernel'
                        ),
                    }),
                    l.addCommand(p.shutdownAllKernels, {
                        label: t.__('Shut Down All Kernels…'),
                        isEnabled: () =>
                            void 0 !==
                            e.serviceManager.sessions.running().next(),
                        execute: () =>
                            (0, a.showDialog)({
                                title: t.__('Shut Down All?'),
                                body: t.__('Shut down all kernels?'),
                                buttons: [
                                    a.Dialog.cancelButton({
                                        label: t.__('Dismiss'),
                                    }),
                                    a.Dialog.warnButton({
                                        label: t.__('Shut Down All'),
                                    }),
                                ],
                            }).then(n => {
                                if (n.button.accept)
                                    return e.serviceManager.sessions.shutdownAll();
                            }),
                    });
            }
            function C(e, n, t) {
                const l = e.commands;
                l.addCommand(p.lineNumbering, {
                    label: t.__('Show Line Numbers'),
                    isEnabled: x.delegateEnabled(
                        e,
                        n.editorViewers,
                        'toggleLineNumbers'
                    ),
                    isToggled: x.delegateToggled(
                        e,
                        n.editorViewers,
                        'lineNumbersToggled'
                    ),
                    execute: x.delegateExecute(
                        e,
                        n.editorViewers,
                        'toggleLineNumbers'
                    ),
                }),
                    l.addCommand(p.matchBrackets, {
                        label: t.__('Match Brackets'),
                        isEnabled: x.delegateEnabled(
                            e,
                            n.editorViewers,
                            'toggleMatchBrackets'
                        ),
                        isToggled: x.delegateToggled(
                            e,
                            n.editorViewers,
                            'matchBracketsToggled'
                        ),
                        execute: x.delegateExecute(
                            e,
                            n.editorViewers,
                            'toggleMatchBrackets'
                        ),
                    }),
                    l.addCommand(p.wordWrap, {
                        label: t.__('Wrap Words'),
                        isEnabled: x.delegateEnabled(
                            e,
                            n.editorViewers,
                            'toggleWordWrap'
                        ),
                        isToggled: x.delegateToggled(
                            e,
                            n.editorViewers,
                            'wordWrapToggled'
                        ),
                        execute: x.delegateExecute(
                            e,
                            n.editorViewers,
                            'toggleWordWrap'
                        ),
                    });
            }
            function v(e, n, t) {
                const l = e.commands;
                l.addCommand(p.run, {
                    label: () => {
                        const l = x.delegateLabel(e, n.codeRunners, 'runLabel');
                        return x.delegateEnabled(e, n.codeRunners, 'run')()
                            ? l
                            : t.__('Run Selected');
                    },
                    caption: () => {
                        const l = x.delegateLabel(
                            e,
                            n.codeRunners,
                            'runCaption'
                        );
                        return x.delegateEnabled(e, n.codeRunners, 'run')()
                            ? l
                            : t.__('Run Selected');
                    },
                    icon: e => (e.toolbar ? i.runIcon : void 0),
                    isEnabled: x.delegateEnabled(e, n.codeRunners, 'run'),
                    execute: x.delegateExecute(e, n.codeRunners, 'run'),
                }),
                    l.addCommand(p.runAll, {
                        label: () => {
                            let l = t.__('Run All');
                            return (
                                x.delegateEnabled(
                                    e,
                                    n.codeRunners,
                                    'runAll'
                                )() &&
                                    (l = x.delegateLabel(
                                        e,
                                        n.codeRunners,
                                        'runAllLabel'
                                    )),
                                l
                            );
                        },
                        caption: () => {
                            let l = t.__('Run All');
                            return (
                                x.delegateEnabled(
                                    e,
                                    n.codeRunners,
                                    'runAll'
                                )() &&
                                    (l = x.delegateLabel(
                                        e,
                                        n.codeRunners,
                                        'runAllCaption'
                                    )),
                                l
                            );
                        },
                        isEnabled: x.delegateEnabled(
                            e,
                            n.codeRunners,
                            'runAll'
                        ),
                        execute: x.delegateExecute(e, n.codeRunners, 'runAll'),
                    }),
                    l.addCommand(p.restartAndRunAll, {
                        label: () => {
                            let l = t.__('Restart Kernel and Run All');
                            return (
                                x.delegateEnabled(
                                    e,
                                    n.codeRunners,
                                    'restartAndRunAll'
                                )() &&
                                    (l = x.delegateLabel(
                                        e,
                                        n.codeRunners,
                                        'restartAndRunAllLabel'
                                    )),
                                l
                            );
                        },
                        caption: () => {
                            let l = t.__('Restart Kernel and Run All');
                            return (
                                x.delegateEnabled(
                                    e,
                                    n.codeRunners,
                                    'restartAndRunAll'
                                )() &&
                                    (l = x.delegateLabel(
                                        e,
                                        n.codeRunners,
                                        'restartAndRunAllLabel'
                                    )),
                                l
                            );
                        },
                        icon: e => (e.toolbar ? i.fastForwardIcon : void 0),
                        isEnabled: x.delegateEnabled(
                            e,
                            n.codeRunners,
                            'restartAndRunAll'
                        ),
                        execute: x.delegateExecute(
                            e,
                            n.codeRunners,
                            'restartAndRunAll'
                        ),
                    });
            }
            function w(e, n, t, l) {
                const a = e.commands,
                    r = [];
                let o;
                a.addCommand(p.activateById, {
                    label: n => {
                        const t = n.id || '',
                            l = (0, c.find)(
                                e.shell.widgets('main'),
                                e => e.id === t
                            );
                        return (l && l.title.label) || '';
                    },
                    isToggled: n => {
                        const t = n.id || '';
                        return (
                            !!e.shell.currentWidget &&
                            e.shell.currentWidget.id === t
                        );
                    },
                    execute: n => e.shell.activateById(n.id || ''),
                });
                let d = '';
                a.addCommand(p.activatePreviouslyUsedTab, {
                    label: l.__('Activate Previously Used Tab'),
                    isEnabled: () => !!d,
                    execute: () => a.execute(p.activateById, { id: d }),
                }),
                    t &&
                        e.restored.then(() => {
                            const l = () => {
                                o && !o.isDisposed && o.dispose(),
                                    (r.length = 0);
                                let t = !1;
                                (0, c.each)(e.shell.widgets('main'), e => {
                                    e.id === d && (t = !0),
                                        r.push({
                                            command: p.activateById,
                                            args: { id: e.id },
                                        });
                                }),
                                    (o = n.addGroup(r, 1)),
                                    (d = t ? d : '');
                            };
                            l(),
                                t.layoutModified.connect(() => {
                                    l();
                                }),
                                t.currentChanged.connect((e, n) => {
                                    const t = n.oldValue;
                                    t && (d = t.id);
                                });
                        });
            }
            !(function(e) {
                (e.openEdit = 'editmenu:open'),
                    (e.undo = 'editmenu:undo'),
                    (e.redo = 'editmenu:redo'),
                    (e.clearCurrent = 'editmenu:clear-current'),
                    (e.clearAll = 'editmenu:clear-all'),
                    (e.find = 'editmenu:find'),
                    (e.goToLine = 'editmenu:go-to-line'),
                    (e.openFile = 'filemenu:open'),
                    (e.closeAndCleanup = 'filemenu:close-and-cleanup'),
                    (e.createConsole = 'filemenu:create-console'),
                    (e.shutdown = 'filemenu:shutdown'),
                    (e.logout = 'filemenu:logout'),
                    (e.openKernel = 'kernelmenu:open'),
                    (e.interruptKernel = 'kernelmenu:interrupt'),
                    (e.reconnectToKernel = 'kernelmenu:reconnect-to-kernel'),
                    (e.restartKernel = 'kernelmenu:restart'),
                    (e.restartKernelAndClear = 'kernelmenu:restart-and-clear'),
                    (e.changeKernel = 'kernelmenu:change'),
                    (e.shutdownKernel = 'kernelmenu:shutdown'),
                    (e.shutdownAllKernels = 'kernelmenu:shutdownAll'),
                    (e.openView = 'viewmenu:open'),
                    (e.wordWrap = 'viewmenu:word-wrap'),
                    (e.lineNumbering = 'viewmenu:line-numbering'),
                    (e.matchBrackets = 'viewmenu:match-brackets'),
                    (e.openRun = 'runmenu:open'),
                    (e.run = 'runmenu:run'),
                    (e.runAll = 'runmenu:run-all'),
                    (e.restartAndRunAll = 'runmenu:restart-and-run-all'),
                    (e.runAbove = 'runmenu:run-above'),
                    (e.runBelow = 'runmenu:run-below'),
                    (e.openTabs = 'tabsmenu:open'),
                    (e.activateById = 'tabsmenu:activate-by-id'),
                    (e.activatePreviouslyUsedTab =
                        'tabsmenu:activate-previously-used-tab'),
                    (e.openSettings = 'settingsmenu:open'),
                    (e.openHelp = 'helpmenu:open'),
                    (e.openFirst = 'mainmenu:open-first');
            })(p || (p = {}));
            const A = {
                id: b,
                requires: [l.IRouter, u.ITranslator],
                optional: [a.ICommandPalette, l.ILabShell, s.ISettingRegistry],
                provides: o.IMainMenu,
                activate: async (e, n, t, l, a, d) => {
                    const { commands: s } = e,
                        u = t.load('jupyterlab'),
                        i = new o.MainMenu(s);
                    (i.id = 'jp-MainMenu'),
                        i.addClass('jp-scrollbar-tiny'),
                        d &&
                            (await x.loadSettingsMenu(
                                d,
                                e => {
                                    i.addMenu(e, { rank: e.rank });
                                },
                                e => o.MainMenu.generateMenu(s, e, u),
                                t
                            ));
                    const c = r.PageConfig.getOption(
                        'quitButton'
                    ).toLowerCase();
                    (i.fileMenu.quitEntry = 'true' === c),
                        _(e, i.editMenu, u),
                        h(e, i.fileMenu, n, u),
                        E(e, i.kernelMenu, u),
                        v(e, i.runMenu, u),
                        C(e, i.viewMenu, u),
                        a && w(e, i.tabsMenu, a, u);
                    const m = e => {
                        (i.activeMenu = e), i.openActiveMenu();
                    };
                    return (
                        s.addCommand(p.openEdit, {
                            label: u.__('Open Edit Menu'),
                            execute: () => m(i.editMenu),
                        }),
                        s.addCommand(p.openFile, {
                            label: u.__('Open File Menu'),
                            execute: () => m(i.fileMenu),
                        }),
                        s.addCommand(p.openKernel, {
                            label: u.__('Open Kernel Menu'),
                            execute: () => m(i.kernelMenu),
                        }),
                        s.addCommand(p.openRun, {
                            label: u.__('Open Run Menu'),
                            execute: () => m(i.runMenu),
                        }),
                        s.addCommand(p.openView, {
                            label: u.__('Open View Menu'),
                            execute: () => m(i.viewMenu),
                        }),
                        s.addCommand(p.openSettings, {
                            label: u.__('Open Settings Menu'),
                            execute: () => m(i.settingsMenu),
                        }),
                        s.addCommand(p.openTabs, {
                            label: u.__('Open Tabs Menu'),
                            execute: () => m(i.tabsMenu),
                        }),
                        s.addCommand(p.openHelp, {
                            label: u.__('Open Help Menu'),
                            execute: () => m(i.helpMenu),
                        }),
                        s.addCommand(p.openFirst, {
                            label: u.__('Open First Menu'),
                            execute: () => {
                                (i.activeIndex = 0), i.openActiveMenu();
                            },
                        }),
                        l &&
                            (l.addItem({
                                command: p.shutdown,
                                category: u.__('Main Area'),
                            }),
                            l.addItem({
                                command: p.logout,
                                category: u.__('Main Area'),
                            }),
                            l.addItem({
                                command: p.shutdownAllKernels,
                                category: u.__('Kernel Operations'),
                            }),
                            l.addItem({
                                command: p.activatePreviouslyUsedTab,
                                category: u.__('Main Area'),
                            })),
                        e.shell.add(i, 'menu', { rank: 100 }),
                        i
                    );
                },
            };
            var x;
            !(function(e) {
                function n(e, n) {
                    for (const t of e) if (n(t)) return t;
                }
                async function t(e) {
                    (
                        await (0, a.showDialog)({
                            title: e.__('Information'),
                            body: e.__(
                                'Menu customization has changed. You will need to reload JupyterLab to see the changes.'
                            ),
                            buttons: [
                                a.Dialog.cancelButton(),
                                a.Dialog.okButton({ label: e.__('Reload') }),
                            ],
                        })
                    ).button.accept && location.reload();
                }
                (e.delegateLabel = function(e, t, l) {
                    const a = e.shell.currentWidget,
                        r = a ? n(t, e => e.tracker.has(a)) : void 0;
                    if (r && r[l]) {
                        const e = r.tracker.size;
                        return r[l](e);
                    }
                    return '';
                }),
                    (e.delegateExecute = function(e, t, l) {
                        return () => {
                            const a = e.shell.currentWidget,
                                r = a ? n(t, e => e.tracker.has(a)) : void 0;
                            return r ? (0, r[l])(a) : Promise.resolve(void 0);
                        };
                    }),
                    (e.delegateEnabled = function(e, t, l) {
                        return () => {
                            const a = e.shell.currentWidget,
                                r = a ? n(t, e => e.tracker.has(a)) : void 0;
                            return (
                                !!r &&
                                !!r[l] &&
                                (!r.isEnabled || !a || r.isEnabled(a))
                            );
                        };
                    }),
                    (e.delegateToggled = function(e, t, l) {
                        return () => {
                            const a = e.shell.currentWidget,
                                r = a ? n(t, e => e.tracker.has(a)) : void 0;
                            return !!(r && r[l] && a && r[l](a));
                        };
                    }),
                    (e.loadSettingsMenu = async function(e, n, l, r) {
                        var o;
                        const d = r.load('jupyterlab');
                        let u = null,
                            i = {};
                        function c(n) {
                            var t, l;
                            i = {};
                            const a = Object.keys(e.plugins)
                                .map(n => {
                                    var t, l;
                                    const a =
                                        null !==
                                            (l =
                                                null ===
                                                    (t =
                                                        e.plugins[n].schema[
                                                            'jupyter.lab.menus'
                                                        ]) || void 0 === t
                                                    ? void 0
                                                    : t.main) && void 0 !== l
                                            ? l
                                            : [];
                                    return (i[n] = a), a;
                                })
                                .concat([
                                    null !==
                                        (l =
                                            null ===
                                                (t = n['jupyter.lab.menus']) ||
                                            void 0 === t
                                                ? void 0
                                                : t.main) && void 0 !== l
                                        ? l
                                        : [],
                                ])
                                .reduceRight(
                                    (e, n) =>
                                        s.SettingRegistry.reconcileMenus(
                                            e,
                                            n,
                                            !0
                                        ),
                                    n.properties.menus.default
                                );
                            n.properties.menus.default = s.SettingRegistry.reconcileMenus(
                                a,
                                n.properties.menus.default,
                                !0
                            ).sort((e, n) => {
                                var t, l;
                                return (
                                    (null !== (t = e.rank) && void 0 !== t
                                        ? t
                                        : 1 / 0) -
                                    (null !== (l = n.rank) && void 0 !== l
                                        ? l
                                        : 1 / 0)
                                );
                            });
                        }
                        e.transform(b, {
                            compose: e => {
                                var n, t, l, a;
                                u || ((u = m.JSONExt.deepCopy(e.schema)), c(u));
                                const r =
                                        null !==
                                            (l =
                                                null ===
                                                    (t =
                                                        null ===
                                                            (n =
                                                                u.properties) ||
                                                        void 0 === n
                                                            ? void 0
                                                            : n.menus) ||
                                                void 0 === t
                                                    ? void 0
                                                    : t.default) && void 0 !== l
                                            ? l
                                            : [],
                                    o = Object.assign(
                                        Object.assign({}, e.data.user),
                                        {
                                            menus:
                                                null !==
                                                    (a = e.data.user.menus) &&
                                                void 0 !== a
                                                    ? a
                                                    : [],
                                        }
                                    ),
                                    d = Object.assign(
                                        Object.assign({}, e.data.composite),
                                        {
                                            menus: s.SettingRegistry.reconcileMenus(
                                                r,
                                                o.menus
                                            ),
                                        }
                                    );
                                return (e.data = { composite: d, user: o }), e;
                            },
                            fetch: e => (
                                u || ((u = m.JSONExt.deepCopy(e.schema)), c(u)),
                                {
                                    data: e.data,
                                    id: e.id,
                                    raw: e.raw,
                                    schema: u,
                                    version: e.version,
                                }
                            ),
                        });
                        const g = await e.load(b),
                            p =
                                null !==
                                    (o = m.JSONExt.deepCopy(
                                        g.composite.menus
                                    )) && void 0 !== o
                                    ? o
                                    : [],
                            _ = new Array();
                        a.MenuFactory.createMenus(
                            p
                                .filter(e => !e.disabled)
                                .map(e => {
                                    var n;
                                    return Object.assign(Object.assign({}, e), {
                                        items: s.SettingRegistry.filterDisabledItems(
                                            null !== (n = e.items) &&
                                                void 0 !== n
                                                ? n
                                                : []
                                        ),
                                    });
                                }),
                            l
                        ).forEach(e => {
                            _.push(e), n(e);
                        }),
                            g.changed.connect(() => {
                                var e;
                                const n =
                                    null !== (e = g.composite.menus) &&
                                    void 0 !== e
                                        ? e
                                        : [];
                                m.JSONExt.deepEqual(p, n) || t(d);
                            }),
                            e.pluginChanged.connect(async (r, o) => {
                                var u, c, g;
                                if (o !== b) {
                                    const r =
                                            null !== (u = i[o]) && void 0 !== u
                                                ? u
                                                : [],
                                        b =
                                            null !==
                                                (g =
                                                    null ===
                                                        (c =
                                                            e.plugins[o].schema[
                                                                'jupyter.lab.menus'
                                                            ]) || void 0 === c
                                                        ? void 0
                                                        : c.main) &&
                                            void 0 !== g
                                                ? g
                                                : [];
                                    if (!m.JSONExt.deepEqual(r, b))
                                        if (i[o]) await t(d);
                                        else {
                                            i[o] = m.JSONExt.deepCopy(b);
                                            const e = s.SettingRegistry.reconcileMenus(
                                                b,
                                                p,
                                                !1,
                                                !1
                                            )
                                                .filter(e => !e.disabled)
                                                .map(e => {
                                                    var n;
                                                    return Object.assign(
                                                        Object.assign({}, e),
                                                        {
                                                            items: s.SettingRegistry.filterDisabledItems(
                                                                null !==
                                                                    (n =
                                                                        e.items) &&
                                                                    void 0 !== n
                                                                    ? n
                                                                    : []
                                                            ),
                                                        }
                                                    );
                                                });
                                            a.MenuFactory.updateMenus(
                                                _,
                                                e,
                                                l
                                            ).forEach(e => {
                                                n(e);
                                            });
                                        }
                                }
                            });
                    });
            })(x || (x = {}));
        },
    },
]);
//# sourceMappingURL=7463.520b18d.js.map
