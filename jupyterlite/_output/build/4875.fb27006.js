'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [4875],
    {
        94206: (e, t, o) => {
            o.r(t),
                o.d(t, {
                    commandEditItem: () => L,
                    default: () => q,
                    executionIndicator: () => D,
                    exportPlugin: () => P,
                    notebookTrustItem: () => W,
                });
            var n = o(12867),
                l = o(47343),
                a = o(69873),
                r = o(51972),
                s = o(96801),
                c = o(11123),
                d = o(33663),
                i = o(88983),
                u = o(75150),
                b = o(55101),
                m = o(58099),
                g = o(93889),
                p = o(80814),
                C = o(53979),
                k = o(64176),
                x = o(89934),
                _ = o(61345),
                A = o(99729),
                h = o(43892),
                f = o(26169),
                w = o(21743),
                v = o(14064),
                y = o(86098),
                N = o(13639),
                S = o(55610);
            const E = {
                activate: function(e, t, o) {
                    function n(e) {
                        function t(t, n, l) {
                            if (
                                S.KernelMessage.isDisplayDataMsg(t) ||
                                S.KernelMessage.isStreamMsg(t) ||
                                S.KernelMessage.isErrorMsg(t) ||
                                S.KernelMessage.isExecuteResultMsg(t)
                            ) {
                                const a = o.getLogger(e.context.path);
                                a.rendermime = e.content.rendermime;
                                const r = Object.assign(
                                    Object.assign({}, t.content),
                                    { output_type: t.header.msg_type }
                                );
                                let s = n;
                                (S.KernelMessage.isErrorMsg(t) ||
                                    (S.KernelMessage.isStreamMsg(t) &&
                                        'stderr' === t.content.name)) &&
                                    (s = l),
                                    a.log({
                                        type: 'output',
                                        data: r,
                                        level: s,
                                    });
                            }
                        }
                        e.context.sessionContext.iopubMessage.connect((e, o) =>
                            t(o, 'info', 'info')
                        ),
                            e.context.sessionContext.unhandledMessage.connect(
                                (e, o) => t(o, 'warning', 'error')
                            );
                    }
                    o &&
                        (t.forEach(e => n(e)),
                        t.widgetAdded.connect((e, t) => n(t)));
                },
                id: '@jupyterlab/notebook-extension:log-output',
                requires: [m.INotebookTracker],
                optional: [N.ILoggerRegistry],
                autoStart: !0,
            };
            var I;
            !(function(e) {
                (e.createNew = 'notebook:create-new'),
                    (e.interrupt = 'notebook:interrupt-kernel'),
                    (e.restart = 'notebook:restart-kernel'),
                    (e.restartClear = 'notebook:restart-clear-output'),
                    (e.restartAndRunToSelected =
                        'notebook:restart-and-run-to-selected'),
                    (e.restartRunAll = 'notebook:restart-run-all'),
                    (e.reconnectToKernel = 'notebook:reconnect-to-kernel'),
                    (e.changeKernel = 'notebook:change-kernel'),
                    (e.createConsole = 'notebook:create-console'),
                    (e.createOutputView = 'notebook:create-output-view'),
                    (e.clearAllOutputs = 'notebook:clear-all-cell-outputs'),
                    (e.closeAndShutdown = 'notebook:close-and-shutdown'),
                    (e.trust = 'notebook:trust'),
                    (e.exportToFormat = 'notebook:export-to-format'),
                    (e.run = 'notebook:run-cell'),
                    (e.runAndAdvance = 'notebook:run-cell-and-select-next'),
                    (e.runAndInsert = 'notebook:run-cell-and-insert-below'),
                    (e.runInConsole = 'notebook:run-in-console'),
                    (e.runAll = 'notebook:run-all-cells'),
                    (e.runAllAbove = 'notebook:run-all-above'),
                    (e.runAllBelow = 'notebook:run-all-below'),
                    (e.renderAllMarkdown = 'notebook:render-all-markdown'),
                    (e.toCode = 'notebook:change-cell-to-code'),
                    (e.toMarkdown = 'notebook:change-cell-to-markdown'),
                    (e.toRaw = 'notebook:change-cell-to-raw'),
                    (e.cut = 'notebook:cut-cell'),
                    (e.copy = 'notebook:copy-cell'),
                    (e.pasteAbove = 'notebook:paste-cell-above'),
                    (e.pasteBelow = 'notebook:paste-cell-below'),
                    (e.duplicateBelow = 'notebook:duplicate-below'),
                    (e.pasteAndReplace = 'notebook:paste-and-replace-cell'),
                    (e.moveUp = 'notebook:move-cell-up'),
                    (e.moveDown = 'notebook:move-cell-down'),
                    (e.clearOutputs = 'notebook:clear-cell-output'),
                    (e.deleteCell = 'notebook:delete-cell'),
                    (e.insertAbove = 'notebook:insert-cell-above'),
                    (e.insertBelow = 'notebook:insert-cell-below'),
                    (e.selectAbove = 'notebook:move-cursor-up'),
                    (e.selectBelow = 'notebook:move-cursor-down'),
                    (e.extendAbove = 'notebook:extend-marked-cells-above'),
                    (e.extendTop = 'notebook:extend-marked-cells-top'),
                    (e.extendBelow = 'notebook:extend-marked-cells-below'),
                    (e.extendBottom = 'notebook:extend-marked-cells-bottom'),
                    (e.selectAll = 'notebook:select-all'),
                    (e.deselectAll = 'notebook:deselect-all'),
                    (e.editMode = 'notebook:enter-edit-mode'),
                    (e.merge = 'notebook:merge-cells'),
                    (e.mergeAbove = 'notebook:merge-cell-above'),
                    (e.mergeBelow = 'notebook:merge-cell-below'),
                    (e.split = 'notebook:split-cell-at-cursor'),
                    (e.commandMode = 'notebook:enter-command-mode'),
                    (e.toggleAllLines =
                        'notebook:toggle-all-cell-line-numbers'),
                    (e.undoCellAction = 'notebook:undo-cell-action'),
                    (e.redoCellAction = 'notebook:redo-cell-action'),
                    (e.markdown1 = 'notebook:change-cell-to-heading-1'),
                    (e.markdown2 = 'notebook:change-cell-to-heading-2'),
                    (e.markdown3 = 'notebook:change-cell-to-heading-3'),
                    (e.markdown4 = 'notebook:change-cell-to-heading-4'),
                    (e.markdown5 = 'notebook:change-cell-to-heading-5'),
                    (e.markdown6 = 'notebook:change-cell-to-heading-6'),
                    (e.hideCode = 'notebook:hide-cell-code'),
                    (e.showCode = 'notebook:show-cell-code'),
                    (e.hideAllCode = 'notebook:hide-all-cell-code'),
                    (e.showAllCode = 'notebook:show-all-cell-code'),
                    (e.hideOutput = 'notebook:hide-cell-outputs'),
                    (e.showOutput = 'notebook:show-cell-outputs'),
                    (e.hideAllOutputs = 'notebook:hide-all-cell-outputs'),
                    (e.showAllOutputs = 'notebook:show-all-cell-outputs'),
                    (e.toggleRenderSideBySideCurrentNotebook =
                        'notebook:toggle-render-side-by-side-current'),
                    (e.setSideBySideRatio = 'notebook:set-side-by-side-ratio'),
                    (e.enableOutputScrolling =
                        'notebook:enable-output-scrolling'),
                    (e.disableOutputScrolling =
                        'notebook:disable-output-scrolling'),
                    (e.selectLastRunCell = 'notebook:select-last-run-cell'),
                    (e.replaceSelection = 'notebook:replace-selection'),
                    (e.autoClosingBrackets =
                        'notebook:toggle-autoclosing-brackets'),
                    (e.toggleCollapseCmd =
                        'Collapsible_Headings:Toggle_Collapse'),
                    (e.collapseAllCmd = 'Collapsible_Headings:Collapse_All'),
                    (e.expandAllCmd = 'Collapsible_Headings:Expand_All'),
                    (e.copyToClipboard = 'notebook:copy-to-clipboard');
            })(I || (I = {}));
            const O = 'Notebook',
                T = ['notebook', 'python', 'custom'],
                R = 'jp-NotebookExtension-sideBySideMargins',
                B = {
                    id: '@jupyterlab/notebook-extension:tracker',
                    provides: m.INotebookTracker,
                    requires: [m.INotebookWidgetFactory, _.ITranslator],
                    optional: [
                        l.ICommandPalette,
                        i.IFileBrowserFactory,
                        u.ILauncher,
                        n.ILayoutRestorer,
                        b.IMainMenu,
                        C.ISettingRegistry,
                        l.ISessionContextDialogs,
                    ],
                    activate: function(e, t, o, n, r, s, c, d, i, u) {
                        const b = o.load('jupyterlab'),
                            g = e.serviceManager,
                            { commands: p } = e,
                            C = new m.NotebookTracker({
                                namespace: 'notebook',
                            }),
                            k = e =>
                                document.documentElement.style.setProperty(
                                    '--jp-side-by-side-output-size',
                                    `${e}fr`
                                );
                        (i
                            ? i.load(B.id)
                            : Promise.reject(
                                  new Error(`No setting registry for ${B.id}`)
                              )
                        )
                            .then(e => {
                                N(e),
                                    e.changed.connect(() => {
                                        N(e);
                                    }),
                                    p.addCommand(I.autoClosingBrackets, {
                                        execute: t => {
                                            var o;
                                            const n = e.get('codeCellConfig')
                                                    .composite,
                                                l = e.get('markdownCellConfig')
                                                    .composite,
                                                a = e.get('rawCellConfig')
                                                    .composite,
                                                r =
                                                    n.autoClosingBrackets ||
                                                    l.autoClosingBrackets ||
                                                    a.autoClosingBrackets,
                                                s = !!(null !== (o = t.force) &&
                                                void 0 !== o
                                                    ? o
                                                    : !r);
                                            ([
                                                n.autoClosingBrackets,
                                                l.autoClosingBrackets,
                                                a.autoClosingBrackets,
                                            ] = [s, s, s]),
                                                e.set('codeCellConfig', n),
                                                e.set('markdownCellConfig', l),
                                                e.set('rawCellConfig', a);
                                        },
                                        label: b.__(
                                            'Auto Close Brackets for All Notebook Cell Types'
                                        ),
                                        isToggled: () =>
                                            [
                                                'codeCellConfig',
                                                'markdownCellConfig',
                                                'rawCellConfig',
                                            ].some(
                                                t =>
                                                    e.get(t).composite
                                                        .autoClosingBrackets
                                            ),
                                    }),
                                    p.addCommand(I.setSideBySideRatio, {
                                        label: b.__('Set side-by-side ratio'),
                                        execute: t => {
                                            l.InputDialog.getNumber({
                                                title: b.__(
                                                    'Width of the output in side-by-side mode'
                                                ),
                                                value: e.get(
                                                    'sideBySideOutputRatio'
                                                ).composite,
                                            })
                                                .then(t => {
                                                    k(t.value),
                                                        t.value &&
                                                            e.set(
                                                                'sideBySideOutputRatio',
                                                                t.value
                                                            );
                                                })
                                                .catch(console.error);
                                        },
                                    });
                            })
                            .catch(e => {
                                console.warn(e.message),
                                    y({
                                        editorConfig: t.editorConfig,
                                        notebookConfig: t.notebookConfig,
                                        kernelShutdown: t.shutdownOnClose,
                                    });
                            }),
                            c &&
                                c.restore(C, {
                                    command: 'docmanager:open',
                                    args: e => ({
                                        path: e.context.path,
                                        factory: O,
                                    }),
                                    name: e => e.context.path,
                                    when: g.ready,
                                });
                        const x = e.docRegistry,
                            _ = new m.NotebookModelFactory({
                                disableDocumentWideUndoRedo:
                                    t.notebookConfig
                                        .disableDocumentWideUndoRedo,
                            });
                        x.addModelFactory(_),
                            (function(e, t, o, n) {
                                const r = o.load('jupyterlab'),
                                    { commands: s, shell: c } = e;
                                n = null != n ? n : l.sessionContextDialogs;
                                const d = () => $.isEnabled(c, t),
                                    i = () =>
                                        $.isEnabledAndSingleSelected(c, t);
                                t.currentChanged.connect((e, t) => {
                                    var o, n;
                                    (null ===
                                        (n =
                                            null ===
                                                (o =
                                                    null == t
                                                        ? void 0
                                                        : t.content) ||
                                            void 0 === o
                                                ? void 0
                                                : o.model) || void 0 === n
                                        ? void 0
                                        : n.cells) &&
                                        (t.content.model.cells.changed.connect(
                                            (e, o) => {
                                                (e => {
                                                    var t, o;
                                                    for (const n of e.widgets)
                                                        n instanceof
                                                            a.MarkdownCell &&
                                                            n.headingCollapsed &&
                                                            m.NotebookActions.setHeadingCollapse(
                                                                n,
                                                                !0,
                                                                e
                                                            ),
                                                            n.model.id ===
                                                                (null ===
                                                                    (o =
                                                                        null ===
                                                                            (t =
                                                                                e.activeCell) ||
                                                                        void 0 ===
                                                                            t
                                                                            ? void 0
                                                                            : t.model) ||
                                                                void 0 === o
                                                                    ? void 0
                                                                    : o.id) &&
                                                                m.NotebookActions.expandParent(
                                                                    n,
                                                                    e
                                                                );
                                                })(t.content);
                                            }
                                        ),
                                        t.content.activeCellChanged.connect(
                                            (e, t) => {
                                                m.NotebookActions.expandParent(
                                                    t,
                                                    e
                                                );
                                            }
                                        ));
                                }),
                                    s.addCommand(I.runAndAdvance, {
                                        label: r.__('Run Selected Cells'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o) {
                                                const {
                                                    context: e,
                                                    content: t,
                                                } = o;
                                                return m.NotebookActions.runAndAdvance(
                                                    t,
                                                    e.sessionContext
                                                );
                                            }
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.run, {
                                        label: r.__(
                                            "Run Selected Cells and Don't Advance"
                                        ),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o) {
                                                const {
                                                    context: e,
                                                    content: t,
                                                } = o;
                                                return m.NotebookActions.run(
                                                    t,
                                                    e.sessionContext
                                                );
                                            }
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.runAndInsert, {
                                        label: r.__(
                                            'Run Selected Cells and Insert Below'
                                        ),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o) {
                                                const {
                                                    context: e,
                                                    content: t,
                                                } = o;
                                                return m.NotebookActions.runAndInsert(
                                                    t,
                                                    e.sessionContext
                                                );
                                            }
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.runAll, {
                                        label: r.__('Run All Cells'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o) {
                                                const {
                                                    context: e,
                                                    content: t,
                                                } = o;
                                                return m.NotebookActions.runAll(
                                                    t,
                                                    e.sessionContext
                                                );
                                            }
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.runAllAbove, {
                                        label: r.__(
                                            'Run All Above Selected Cell'
                                        ),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o) {
                                                const {
                                                    context: e,
                                                    content: t,
                                                } = o;
                                                return m.NotebookActions.runAllAbove(
                                                    t,
                                                    e.sessionContext
                                                );
                                            }
                                        },
                                        isEnabled: () =>
                                            i() &&
                                            0 !==
                                                t.currentWidget.content
                                                    .activeCellIndex,
                                    }),
                                    s.addCommand(I.runAllBelow, {
                                        label: r.__(
                                            'Run Selected Cell and All Below'
                                        ),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o) {
                                                const {
                                                    context: e,
                                                    content: t,
                                                } = o;
                                                return m.NotebookActions.runAllBelow(
                                                    t,
                                                    e.sessionContext
                                                );
                                            }
                                        },
                                        isEnabled: () =>
                                            i() &&
                                            t.currentWidget.content
                                                .activeCellIndex !==
                                                t.currentWidget.content.widgets
                                                    .length -
                                                    1,
                                    }),
                                    s.addCommand(I.renderAllMarkdown, {
                                        label: r.__(
                                            'Render All Markdown Cells'
                                        ),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o) {
                                                const {
                                                    context: e,
                                                    content: t,
                                                } = o;
                                                return m.NotebookActions.renderAllMarkdown(
                                                    t,
                                                    e.sessionContext
                                                );
                                            }
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.restart, {
                                        label: r.__('Restart Kernel…'),
                                        execute: e => {
                                            const l = V(t, c, e);
                                            if (l)
                                                return n.restart(
                                                    l.sessionContext,
                                                    o
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.closeAndShutdown, {
                                        label: r.__('Close and Shut Down'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (!o) return;
                                            const n = o.title.label;
                                            return (0, l.showDialog)({
                                                title: r.__(
                                                    'Shut down the notebook?'
                                                ),
                                                body: r.__(
                                                    'Are you sure you want to close "%1"?',
                                                    n
                                                ),
                                                buttons: [
                                                    l.Dialog.cancelButton(),
                                                    l.Dialog.warnButton(),
                                                ],
                                            }).then(e => {
                                                if (e.button.accept)
                                                    return o.context.sessionContext
                                                        .shutdown()
                                                        .then(() => {
                                                            o.dispose();
                                                        });
                                            });
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.trust, {
                                        label: () => r.__('Trust Notebook'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o) {
                                                const {
                                                    context: e,
                                                    content: t,
                                                } = o;
                                                return m.NotebookActions.trust(
                                                    t
                                                ).then(() => e.save());
                                            }
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.restartClear, {
                                        label: r.__(
                                            'Restart Kernel and Clear All Outputs…'
                                        ),
                                        execute: e => {
                                            const l = V(t, c, e);
                                            if (l) {
                                                const {
                                                    content: e,
                                                    sessionContext: t,
                                                } = l;
                                                return n
                                                    .restart(t, o)
                                                    .then(() => {
                                                        m.NotebookActions.clearAllOutputs(
                                                            e
                                                        );
                                                    });
                                            }
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.restartAndRunToSelected, {
                                        label: r.__(
                                            'Restart Kernel and Run up to Selected Cell…'
                                        ),
                                        execute: e => {
                                            const l = V(t, c, e);
                                            if (l) {
                                                const {
                                                    context: e,
                                                    content: t,
                                                } = l;
                                                return n
                                                    .restart(
                                                        l.sessionContext,
                                                        o
                                                    )
                                                    .then(o => {
                                                        o &&
                                                            m.NotebookActions.runAllAbove(
                                                                t,
                                                                e.sessionContext
                                                            ).then(o => {
                                                                (o ||
                                                                    0 ===
                                                                        t.activeCellIndex) &&
                                                                    m.NotebookActions.run(
                                                                        t,
                                                                        e.sessionContext
                                                                    );
                                                            });
                                                    });
                                            }
                                        },
                                        isEnabled: i,
                                    }),
                                    s.addCommand(I.restartRunAll, {
                                        label: r.__(
                                            'Restart Kernel and Run All Cells…'
                                        ),
                                        execute: e => {
                                            const l = V(t, c, e);
                                            if (l) {
                                                const {
                                                    context: e,
                                                    content: t,
                                                    sessionContext: a,
                                                } = l;
                                                return n
                                                    .restart(a, o)
                                                    .then(
                                                        o => (
                                                            o &&
                                                                m.NotebookActions.runAll(
                                                                    t,
                                                                    e.sessionContext
                                                                ),
                                                            o
                                                        )
                                                    );
                                            }
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.clearAllOutputs, {
                                        label: r.__('Clear All Outputs'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.clearAllOutputs(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.clearOutputs, {
                                        label: r.__('Clear Outputs'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.clearOutputs(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.interrupt, {
                                        label: r.__('Interrupt Kernel'),
                                        execute: e => {
                                            var o;
                                            const n = V(t, c, e);
                                            if (!n) return;
                                            const l =
                                                null ===
                                                    (o =
                                                        n.context.sessionContext
                                                            .session) ||
                                                void 0 === o
                                                    ? void 0
                                                    : o.kernel;
                                            return l ? l.interrupt() : void 0;
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.toCode, {
                                        label: r.__('Change to Code Cell Type'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.changeCellType(
                                                    o.content,
                                                    'code'
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.toMarkdown, {
                                        label: r.__(
                                            'Change to Markdown Cell Type'
                                        ),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.changeCellType(
                                                    o.content,
                                                    'markdown'
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.toRaw, {
                                        label: r.__('Change to Raw Cell Type'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.changeCellType(
                                                    o.content,
                                                    'raw'
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.cut, {
                                        label: r.__('Cut Cells'),
                                        caption: r.__('Cut the selected cells'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.cut(
                                                    o.content
                                                );
                                        },
                                        icon: e =>
                                            e.toolbar ? A.cutIcon : void 0,
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.copy, {
                                        label: r.__('Copy Cells'),
                                        caption: r.__(
                                            'Copy the selected cells'
                                        ),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.copy(
                                                    o.content
                                                );
                                        },
                                        icon: e =>
                                            e.toolbar ? A.copyIcon : '',
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.pasteBelow, {
                                        label: r.__('Paste Cells Below'),
                                        caption: r.__(
                                            'Paste cells from the clipboard'
                                        ),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.paste(
                                                    o.content,
                                                    'below'
                                                );
                                        },
                                        icon: e =>
                                            e.toolbar ? A.pasteIcon : void 0,
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.pasteAbove, {
                                        label: r.__('Paste Cells Above'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.paste(
                                                    o.content,
                                                    'above'
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.duplicateBelow, {
                                        label: r.__('Duplicate Cells Below'),
                                        caption: r.__(
                                            'Copy the selected cells and paste them below the selection'
                                        ),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            o &&
                                                m.NotebookActions.duplicate(
                                                    o.content,
                                                    'belowSelected'
                                                );
                                        },
                                        icon: e =>
                                            e.toolbar ? A.duplicateIcon : '',
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.pasteAndReplace, {
                                        label: r.__('Paste Cells and Replace'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.paste(
                                                    o.content,
                                                    'replace'
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.deleteCell, {
                                        label: r.__('Delete Cells'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.deleteCells(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.split, {
                                        label: r.__('Split Cell'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.splitCell(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.merge, {
                                        label: r.__('Merge Selected Cells'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.mergeCells(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.mergeAbove, {
                                        label: r.__('Merge Cell Above'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.mergeCells(
                                                    o.content,
                                                    !0
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.mergeBelow, {
                                        label: r.__('Merge Cell Below'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.mergeCells(
                                                    o.content,
                                                    !1
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.insertAbove, {
                                        label: r.__('Insert Cell Above'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.insertAbove(
                                                    o.content
                                                );
                                        },
                                        icon: e =>
                                            e.toolbar ? A.addAboveIcon : void 0,
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.insertBelow, {
                                        label: r.__('Insert Cell Below'),
                                        caption: r.__('Insert a cell below'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.insertBelow(
                                                    o.content
                                                );
                                        },
                                        icon: e =>
                                            e.toolbar ? A.addBelowIcon : void 0,
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.selectAbove, {
                                        label: r.__('Select Cell Above'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.selectAbove(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.selectBelow, {
                                        label: r.__('Select Cell Below'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.selectBelow(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.extendAbove, {
                                        label: r.__('Extend Selection Above'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.extendSelectionAbove(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.extendTop, {
                                        label: r.__('Extend Selection to Top'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.extendSelectionAbove(
                                                    o.content,
                                                    !0
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.extendBelow, {
                                        label: r.__('Extend Selection Below'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.extendSelectionBelow(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.extendBottom, {
                                        label: r.__(
                                            'Extend Selection to Bottom'
                                        ),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.extendSelectionBelow(
                                                    o.content,
                                                    !0
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.selectAll, {
                                        label: r.__('Select All Cells'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.selectAll(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.deselectAll, {
                                        label: r.__('Deselect All Cells'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.deselectAll(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.moveUp, {
                                        label: r.__('Move Cells Up'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.moveUp(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                        icon: e =>
                                            e.toolbar ? A.moveUpIcon : void 0,
                                    }),
                                    s.addCommand(I.moveDown, {
                                        label: r.__('Move Cells Down'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.moveDown(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                        icon: e =>
                                            e.toolbar ? A.moveDownIcon : void 0,
                                    }),
                                    s.addCommand(I.toggleAllLines, {
                                        label: r.__('Toggle All Line Numbers'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.toggleAllLineNumbers(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.commandMode, {
                                        label: r.__('Enter Command Mode'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            o && (o.content.mode = 'command');
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.editMode, {
                                        label: r.__('Enter Edit Mode'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            o && (o.content.mode = 'edit');
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.undoCellAction, {
                                        label: r.__('Undo Cell Operation'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.undo(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.redoCellAction, {
                                        label: r.__('Redo Cell Operation'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.redo(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.changeKernel, {
                                        label: r.__('Change Kernel…'),
                                        execute: e => {
                                            const l = V(t, c, e);
                                            if (l)
                                                return n.selectKernel(
                                                    l.context.sessionContext,
                                                    o
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.reconnectToKernel, {
                                        label: r.__('Reconnect To Kernel'),
                                        execute: e => {
                                            var o;
                                            const n = V(t, c, e);
                                            if (!n) return;
                                            const l =
                                                null ===
                                                    (o =
                                                        n.context.sessionContext
                                                            .session) ||
                                                void 0 === o
                                                    ? void 0
                                                    : o.kernel;
                                            return l ? l.reconnect() : void 0;
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.markdown1, {
                                        label: r.__('Change to Heading 1'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.setMarkdownHeader(
                                                    o.content,
                                                    1
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.markdown2, {
                                        label: r.__('Change to Heading 2'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.setMarkdownHeader(
                                                    o.content,
                                                    2
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.markdown3, {
                                        label: r.__('Change to Heading 3'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.setMarkdownHeader(
                                                    o.content,
                                                    3
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.markdown4, {
                                        label: r.__('Change to Heading 4'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.setMarkdownHeader(
                                                    o.content,
                                                    4
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.markdown5, {
                                        label: r.__('Change to Heading 5'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.setMarkdownHeader(
                                                    o.content,
                                                    5
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.markdown6, {
                                        label: r.__('Change to Heading 6'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.setMarkdownHeader(
                                                    o.content,
                                                    6
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.hideCode, {
                                        label: r.__('Collapse Selected Code'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.hideCode(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.showCode, {
                                        label: r.__('Expand Selected Code'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.showCode(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.hideAllCode, {
                                        label: r.__('Collapse All Code'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.hideAllCode(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.showAllCode, {
                                        label: r.__('Expand All Code'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.showAllCode(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.hideOutput, {
                                        label: r.__(
                                            'Collapse Selected Outputs'
                                        ),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.hideOutput(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.showOutput, {
                                        label: r.__('Expand Selected Outputs'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.showOutput(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.hideAllOutputs, {
                                        label: r.__('Collapse All Outputs'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.hideAllOutputs(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(
                                        I.toggleRenderSideBySideCurrentNotebook,
                                        {
                                            label: r.__('Render Side-by-Side'),
                                            execute: e => {
                                                const o = V(t, c, e);
                                                if (o)
                                                    return 'side-by-side' ===
                                                        o.content
                                                            .renderingLayout
                                                        ? m.NotebookActions.renderDefault(
                                                              o.content
                                                          )
                                                        : m.NotebookActions.renderSideBySide(
                                                              o.content
                                                          );
                                            },
                                            isEnabled: d,
                                            isToggled: e => {
                                                const o = V(
                                                    t,
                                                    c,
                                                    Object.assign(
                                                        Object.assign({}, e),
                                                        { activate: !1 }
                                                    )
                                                );
                                                return (
                                                    !!o &&
                                                    'side-by-side' ===
                                                        o.content
                                                            .renderingLayout
                                                );
                                            },
                                        }
                                    ),
                                    s.addCommand(I.showAllOutputs, {
                                        label: r.__('Expand All Outputs'),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.showAllOutputs(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.enableOutputScrolling, {
                                        label: r.__(
                                            'Enable Scrolling for Outputs'
                                        ),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.enableOutputScrolling(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.disableOutputScrolling, {
                                        label: r.__(
                                            'Disable Scrolling for Outputs'
                                        ),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.disableOutputScrolling(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.selectLastRunCell, {
                                        label: r.__(
                                            'Select current running or last run cell'
                                        ),
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.selectLastRunCell(
                                                    o.content
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.replaceSelection, {
                                        label: r.__(
                                            'Replace Selection in Notebook Cell'
                                        ),
                                        execute: e => {
                                            const o = V(t, c, e),
                                                n = e.text || '';
                                            if (o)
                                                return m.NotebookActions.replaceSelection(
                                                    o.content,
                                                    n
                                                );
                                        },
                                        isEnabled: d,
                                    }),
                                    s.addCommand(I.toggleCollapseCmd, {
                                        label:
                                            'Toggle Collapse Notebook Heading',
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.toggleCurrentHeadingCollapse(
                                                    o.content
                                                );
                                        },
                                        isEnabled: () =>
                                            $.isEnabledAndHeadingSelected(c, t),
                                    }),
                                    s.addCommand(I.collapseAllCmd, {
                                        label: 'Collapse All Cells',
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.collapseAll(
                                                    o.content
                                                );
                                        },
                                    }),
                                    s.addCommand(I.expandAllCmd, {
                                        label: 'Expand All Headings',
                                        execute: e => {
                                            const o = V(t, c, e);
                                            if (o)
                                                return m.NotebookActions.expandAllHeadings(
                                                    o.content
                                                );
                                        },
                                    });
                            })(e, C, o, u),
                            n &&
                                (function(e, t) {
                                    const o = t.load('jupyterlab');
                                    let n = o.__('Notebook Operations');
                                    [
                                        I.interrupt,
                                        I.restart,
                                        I.restartClear,
                                        I.restartRunAll,
                                        I.runAll,
                                        I.renderAllMarkdown,
                                        I.runAllAbove,
                                        I.runAllBelow,
                                        I.restartAndRunToSelected,
                                        I.selectAll,
                                        I.deselectAll,
                                        I.clearAllOutputs,
                                        I.toggleAllLines,
                                        I.editMode,
                                        I.commandMode,
                                        I.changeKernel,
                                        I.reconnectToKernel,
                                        I.createConsole,
                                        I.closeAndShutdown,
                                        I.trust,
                                        I.toggleCollapseCmd,
                                        I.collapseAllCmd,
                                        I.expandAllCmd,
                                    ].forEach(t => {
                                        e.addItem({ command: t, category: n });
                                    }),
                                        e.addItem({
                                            command: I.createNew,
                                            category: n,
                                            args: { isPalette: !0 },
                                        }),
                                        (n = o.__('Notebook Cell Operations')),
                                        [
                                            I.run,
                                            I.runAndAdvance,
                                            I.runAndInsert,
                                            I.runInConsole,
                                            I.clearOutputs,
                                            I.toCode,
                                            I.toMarkdown,
                                            I.toRaw,
                                            I.cut,
                                            I.copy,
                                            I.pasteBelow,
                                            I.pasteAbove,
                                            I.pasteAndReplace,
                                            I.deleteCell,
                                            I.split,
                                            I.merge,
                                            I.mergeAbove,
                                            I.mergeBelow,
                                            I.insertAbove,
                                            I.insertBelow,
                                            I.selectAbove,
                                            I.selectBelow,
                                            I.extendAbove,
                                            I.extendTop,
                                            I.extendBelow,
                                            I.extendBottom,
                                            I.moveDown,
                                            I.moveUp,
                                            I.undoCellAction,
                                            I.redoCellAction,
                                            I.markdown1,
                                            I.markdown2,
                                            I.markdown3,
                                            I.markdown4,
                                            I.markdown5,
                                            I.markdown6,
                                            I.hideCode,
                                            I.showCode,
                                            I.hideAllCode,
                                            I.showAllCode,
                                            I.hideOutput,
                                            I.showOutput,
                                            I.hideAllOutputs,
                                            I.showAllOutputs,
                                            I.toggleRenderSideBySideCurrentNotebook,
                                            I.setSideBySideRatio,
                                            I.enableOutputScrolling,
                                            I.disableOutputScrolling,
                                        ].forEach(t => {
                                            e.addItem({
                                                command: t,
                                                category: n,
                                            });
                                        });
                                })(n, o);
                        let h = 0;
                        const v = e.docRegistry.getFileType('notebook');
                        function y(e) {
                            C.forEach(t => {
                                t.setConfig(e);
                            });
                        }
                        function N(e) {
                            const o = Object.assign(
                                    Object.assign(
                                        {},
                                        m.StaticNotebook.defaultEditorConfig
                                            .code
                                    ),
                                    e.get('codeCellConfig').composite
                                ),
                                n = Object.assign(
                                    Object.assign(
                                        {},
                                        m.StaticNotebook.defaultEditorConfig
                                            .markdown
                                    ),
                                    e.get('markdownCellConfig').composite
                                ),
                                l = Object.assign(
                                    Object.assign(
                                        {},
                                        m.StaticNotebook.defaultEditorConfig.raw
                                    ),
                                    e.get('rawCellConfig').composite
                                );
                            (t.editorConfig = { code: o, markdown: n, raw: l }),
                                (t.notebookConfig = {
                                    scrollPastEnd: e.get('scrollPastEnd')
                                        .composite,
                                    defaultCell: e.get('defaultCell').composite,
                                    recordTiming: e.get('recordTiming')
                                        .composite,
                                    numberCellsToRenderDirectly: e.get(
                                        'numberCellsToRenderDirectly'
                                    ).composite,
                                    remainingTimeBeforeRescheduling: e.get(
                                        'remainingTimeBeforeRescheduling'
                                    ).composite,
                                    renderCellOnIdle: e.get('renderCellOnIdle')
                                        .composite,
                                    observedTopMargin: e.get(
                                        'observedTopMargin'
                                    ).composite,
                                    observedBottomMargin: e.get(
                                        'observedBottomMargin'
                                    ).composite,
                                    maxNumberOutputs: e.get('maxNumberOutputs')
                                        .composite,
                                    showEditorForReadOnlyMarkdown: e.get(
                                        'showEditorForReadOnlyMarkdown'
                                    ).composite,
                                    disableDocumentWideUndoRedo: e.get(
                                        'experimentalDisableDocumentWideUndoRedo'
                                    ).composite,
                                    renderingLayout: e.get('renderingLayout')
                                        .composite,
                                    sideBySideLeftMarginOverride: e.get(
                                        'sideBySideLeftMarginOverride'
                                    ).composite,
                                    sideBySideRightMarginOverride: e.get(
                                        'sideBySideRightMarginOverride'
                                    ).composite,
                                    sideBySideOutputRatio: e.get(
                                        'sideBySideOutputRatio'
                                    ).composite,
                                }),
                                k(t.notebookConfig.sideBySideOutputRatio);
                            const a = `.jp-mod-sideBySide.jp-Notebook .jp-Notebook-cell { \n      margin-left: ${t.notebookConfig.sideBySideLeftMarginOverride} !important;\n      margin-right: ${t.notebookConfig.sideBySideRightMarginOverride} !important;`,
                                r = document.getElementById(R);
                            r
                                ? (r.innerText = a)
                                : document.head.insertAdjacentHTML(
                                      'beforeend',
                                      `<style id="${R}">${a}}</style>`
                                  ),
                                (t.shutdownOnClose = e.get(
                                    'kernelShutdown'
                                ).composite),
                                (_.disableDocumentWideUndoRedo = e.get(
                                    'experimentalDisableDocumentWideUndoRedo'
                                ).composite),
                                y({
                                    editorConfig: t.editorConfig,
                                    notebookConfig: t.notebookConfig,
                                    kernelShutdown: t.shutdownOnClose,
                                });
                        }
                        return (
                            t.widgetCreated.connect((e, t) => {
                                var o, n;
                                (t.id = t.id || 'notebook-' + ++h),
                                    (t.title.icon =
                                        null == v ? void 0 : v.icon),
                                    (t.title.iconClass =
                                        null !==
                                            (o =
                                                null == v
                                                    ? void 0
                                                    : v.iconClass) &&
                                        void 0 !== o
                                            ? o
                                            : ''),
                                    (t.title.iconLabel =
                                        null !==
                                            (n =
                                                null == v
                                                    ? void 0
                                                    : v.iconLabel) &&
                                        void 0 !== n
                                            ? n
                                            : ''),
                                    t.context.pathChanged.connect(() => {
                                        C.save(t);
                                    }),
                                    C.add(t);
                            }),
                            d &&
                                (function(e, t, o, n, a) {
                                    const r = n.load('jupyterlab'),
                                        { commands: s } = e;
                                    (a = a || l.sessionContextDialogs),
                                        t.editMenu.undoers.add({
                                            tracker: o,
                                            undo: e => {
                                                var t;
                                                null ===
                                                    (t =
                                                        e.content.activeCell) ||
                                                    void 0 === t ||
                                                    t.editor.undo();
                                            },
                                            redo: e => {
                                                var t;
                                                null ===
                                                    (t =
                                                        e.content.activeCell) ||
                                                    void 0 === t ||
                                                    t.editor.redo();
                                            },
                                        }),
                                        t.editMenu.clearers.add({
                                            tracker: o,
                                            clearCurrentLabel: e =>
                                                r.__('Clear Output'),
                                            clearAllLabel: e =>
                                                r.__('Clear All Outputs'),
                                            clearCurrent: e =>
                                                m.NotebookActions.clearOutputs(
                                                    e.content
                                                ),
                                            clearAll: e =>
                                                m.NotebookActions.clearAllOutputs(
                                                    e.content
                                                ),
                                        }),
                                        t.fileMenu.closeAndCleaners.add({
                                            tracker: o,
                                            closeAndCleanupLabel: e =>
                                                r.__(
                                                    'Close and Shutdown Notebook'
                                                ),
                                            closeAndCleanup: e => {
                                                const t = e.title.label;
                                                return (0, l.showDialog)({
                                                    title: r.__(
                                                        'Shut down the Notebook?'
                                                    ),
                                                    body: r.__(
                                                        'Are you sure you want to close "%1"?',
                                                        t
                                                    ),
                                                    buttons: [
                                                        l.Dialog.cancelButton(),
                                                        l.Dialog.warnButton(),
                                                    ],
                                                }).then(t => {
                                                    if (t.button.accept)
                                                        return e.context.sessionContext
                                                            .shutdown()
                                                            .then(() => {
                                                                e.dispose();
                                                            });
                                                });
                                            },
                                        }),
                                        t.kernelMenu.kernelUsers.add({
                                            tracker: o,
                                            interruptKernel: e => {
                                                var t;
                                                const o =
                                                    null ===
                                                        (t =
                                                            e.sessionContext
                                                                .session) ||
                                                    void 0 === t
                                                        ? void 0
                                                        : t.kernel;
                                                return o
                                                    ? o.interrupt()
                                                    : Promise.resolve(void 0);
                                            },
                                            reconnectToKernel: e => {
                                                var t;
                                                const o =
                                                    null ===
                                                        (t =
                                                            e.sessionContext
                                                                .session) ||
                                                    void 0 === t
                                                        ? void 0
                                                        : t.kernel;
                                                return o
                                                    ? o.reconnect()
                                                    : Promise.resolve(void 0);
                                            },
                                            restartKernelAndClearLabel: e =>
                                                r.__(
                                                    'Restart Kernel and Clear All Outputs…'
                                                ),
                                            restartKernel: e =>
                                                a.restart(e.sessionContext, n),
                                            restartKernelAndClear: e =>
                                                a
                                                    .restart(
                                                        e.sessionContext,
                                                        n
                                                    )
                                                    .then(
                                                        t => (
                                                            t &&
                                                                m.NotebookActions.clearAllOutputs(
                                                                    e.content
                                                                ),
                                                            t
                                                        )
                                                    ),
                                            changeKernel: e =>
                                                a.selectKernel(
                                                    e.sessionContext,
                                                    n
                                                ),
                                            shutdownKernel: e =>
                                                e.sessionContext.shutdown(),
                                        }),
                                        t.fileMenu.consoleCreators.add({
                                            tracker: o,
                                            createConsoleLabel: e =>
                                                r.__(
                                                    'New Console for Notebook'
                                                ),
                                            createConsole: e =>
                                                $.createConsole(s, e, !0),
                                        }),
                                        t.viewMenu.editorViewers.add({
                                            tracker: o,
                                            toggleLineNumbers: e => {
                                                m.NotebookActions.toggleAllLineNumbers(
                                                    e.content
                                                );
                                            },
                                            lineNumbersToggled: e => {
                                                const t =
                                                    e.content.editorConfig;
                                                return !!(
                                                    t.code.lineNumbers &&
                                                    t.markdown.lineNumbers &&
                                                    t.raw.lineNumbers
                                                );
                                            },
                                        }),
                                        t.runMenu.codeRunners.add({
                                            tracker: o,
                                            runLabel: e =>
                                                r.__('Run Selected Cells'),
                                            runCaption: e =>
                                                r.__(
                                                    'Run the selected cells and advance'
                                                ),
                                            runAllLabel: e =>
                                                r.__('Run All Cells'),
                                            runAllCaption: e =>
                                                r.__(
                                                    'Run the all notebook cells'
                                                ),
                                            restartAndRunAllLabel: e =>
                                                r.__(
                                                    'Restart Kernel and Run All Cells…'
                                                ),
                                            restartAndRunAllCaption: e =>
                                                r.__(
                                                    'Restart the kernel, then re-run the whole notebook'
                                                ),
                                            run: e => {
                                                const {
                                                    context: t,
                                                    content: o,
                                                } = e;
                                                return m.NotebookActions.runAndAdvance(
                                                    o,
                                                    t.sessionContext
                                                ).then(() => {});
                                            },
                                            runAll: e => {
                                                const {
                                                    context: t,
                                                    content: o,
                                                } = e;
                                                return m.NotebookActions.runAll(
                                                    o,
                                                    t.sessionContext
                                                ).then(() => {});
                                            },
                                            restartAndRunAll: e => {
                                                const {
                                                    context: t,
                                                    content: o,
                                                } = e;
                                                return a
                                                    .restart(
                                                        t.sessionContext,
                                                        n
                                                    )
                                                    .then(
                                                        e => (
                                                            e &&
                                                                m.NotebookActions.runAll(
                                                                    o,
                                                                    t.sessionContext
                                                                ),
                                                            e
                                                        )
                                                    );
                                            },
                                        }),
                                        t.helpMenu.kernelUsers.add({
                                            tracker: o,
                                            getKernel: e => {
                                                var t;
                                                return null ===
                                                    (t =
                                                        e.sessionContext
                                                            .session) ||
                                                    void 0 === t
                                                    ? void 0
                                                    : t.kernel;
                                            },
                                        });
                                })(e, d, C, o, u),
                            p.addCommand(I.createNew, {
                                label: e => {
                                    var t, o, n;
                                    const l = e.kernelName || '';
                                    return e.isLauncher &&
                                        e.kernelName &&
                                        g.kernelspecs
                                        ? null !==
                                              (n =
                                                  null ===
                                                      (o =
                                                          null ===
                                                              (t =
                                                                  g.kernelspecs
                                                                      .specs) ||
                                                          void 0 === t
                                                              ? void 0
                                                              : t.kernelspecs[
                                                                    l
                                                                ]) ||
                                                  void 0 === o
                                                      ? void 0
                                                      : o.display_name) &&
                                          void 0 !== n
                                            ? n
                                            : ''
                                        : e.isPalette || e.isContextMenu
                                        ? b.__('New Notebook')
                                        : b.__('Notebook');
                                },
                                caption: b.__('Create a new notebook'),
                                icon: e =>
                                    e.isPalette ? void 0 : A.notebookIcon,
                                execute: e =>
                                    (async (e, t) => {
                                        const o = await p.execute(
                                            'docmanager:new-untitled',
                                            { path: e, type: 'notebook' }
                                        );
                                        if (null != o) {
                                            const e = await p.execute(
                                                'docmanager:open',
                                                {
                                                    path: o.path,
                                                    factory: O,
                                                    kernel: { name: t },
                                                }
                                            );
                                            return (e.isUntitled = !0), e;
                                        }
                                    })(
                                        e.cwd ||
                                            (r
                                                ? r.defaultBrowser.model.path
                                                : ''),
                                        e.kernelName || ''
                                    ),
                            }),
                            s &&
                                g.ready.then(() => {
                                    let e = null;
                                    const t = () => {
                                        e && (e.dispose(), (e = null));
                                        const t = g.kernelspecs.specs;
                                        if (t) {
                                            e = new w.DisposableSet();
                                            for (const o in t.kernelspecs) {
                                                const n =
                                                        o === t.default
                                                            ? 0
                                                            : 1 / 0,
                                                    l = t.kernelspecs[o],
                                                    a =
                                                        l.resources[
                                                            'logo-svg'
                                                        ] ||
                                                        l.resources[
                                                            'logo-64x64'
                                                        ];
                                                e.add(
                                                    s.add({
                                                        command: I.createNew,
                                                        args: {
                                                            isLauncher: !0,
                                                            kernelName: o,
                                                        },
                                                        category: b.__(
                                                            'Notebook'
                                                        ),
                                                        rank: n,
                                                        kernelIconUrl: a,
                                                        metadata: {
                                                            kernel: f.JSONExt.deepCopy(
                                                                l.metadata || {}
                                                            ),
                                                        },
                                                    })
                                                );
                                            }
                                        }
                                    };
                                    t(), g.kernelspecs.specsChanged.connect(t);
                                }),
                            C
                        );
                    },
                    autoStart: !0,
                },
                M = {
                    id: '@jupyterlab/notebook-extension:factory',
                    provides: m.NotebookPanel.IContentFactory,
                    requires: [r.IEditorServices],
                    autoStart: !0,
                    activate: (e, t) => {
                        const o = t.factoryService.newInlineEditor;
                        return new m.NotebookPanel.ContentFactory({
                            editorFactory: o,
                        });
                    },
                },
                j = {
                    activate: function(e, t, o, n, l, a) {
                        const r = l.load('jupyterlab'),
                            s = 'notebook-tools',
                            c = new m.NotebookTools({
                                tracker: t,
                                translator: l,
                            }),
                            d = new m.NotebookTools.ActiveCellTool(),
                            i = m.NotebookTools.createSlideShowSelector(l),
                            u = o.factoryService.newInlineEditor,
                            b = new m.NotebookTools.CellMetadataEditorTool({
                                editorFactory: u,
                                collapsed: !1,
                                translator: l,
                            }),
                            g = new m.NotebookTools.NotebookMetadataEditorTool({
                                editorFactory: u,
                                translator: l,
                            });
                        return (
                            e.serviceManager.nbconvert
                                .getExportFormats()
                                .then(e => {
                                    if (e) {
                                        const t = [
                                            'pdf',
                                            'slides',
                                            'script',
                                            'notebook',
                                            'custom',
                                        ];
                                        let o = [
                                            [r.__('PDF'), 'pdf'],
                                            [r.__('Slides'), 'slides'],
                                            [r.__('Script'), 'script'],
                                            [r.__('Notebook'), 'notebook'],
                                            [r.__('Custom'), 'custom'],
                                        ];
                                        const n = Object.keys(e),
                                            a = $.getFormatLabels(l);
                                        n.forEach(function(n) {
                                            if (-1 === t.indexOf(n)) {
                                                const t = r.__(
                                                        n[0].toUpperCase() +
                                                            n.substr(1)
                                                    ),
                                                    l = a[n] ? a[n] : t,
                                                    s = e[n].output_mimetype;
                                                o.push([l, s]);
                                            }
                                        });
                                        const s = m.NotebookTools.createNBConvertSelector(
                                            o,
                                            l
                                        );
                                        c.addItem({
                                            tool: s,
                                            section: 'common',
                                            rank: 3,
                                        });
                                    }
                                }),
                            (c.title.icon = A.buildIcon),
                            (c.title.caption = r.__('Notebook Tools')),
                            (c.id = s),
                            c.addItem({ tool: d, section: 'common', rank: 1 }),
                            c.addItem({ tool: i, section: 'common', rank: 2 }),
                            c.addItem({
                                tool: b,
                                section: 'advanced',
                                rank: 1,
                            }),
                            c.addItem({
                                tool: g,
                                section: 'advanced',
                                rank: 2,
                            }),
                            v.MessageLoop.installMessageHook(c, (e, t) => {
                                switch (t.type) {
                                    case 'activate-request':
                                        n.save(s, { open: !0 });
                                        break;
                                    case 'after-hide':
                                    case 'close-request':
                                        n.remove(s);
                                }
                                return !0;
                            }),
                            a &&
                                t.widgetAdded.connect((e, t) => {
                                    a.register(t).render(c);
                                }),
                            c
                        );
                    },
                    provides: m.INotebookTools,
                    id: '@jupyterlab/notebook-extension:tools',
                    autoStart: !0,
                    requires: [
                        m.INotebookTracker,
                        r.IEditorServices,
                        k.IStateDB,
                        _.ITranslator,
                    ],
                    optional: [g.IPropertyInspectorProvider],
                },
                L = {
                    id: '@jupyterlab/notebook-extension:mode-status',
                    autoStart: !0,
                    requires: [m.INotebookTracker, _.ITranslator],
                    optional: [x.IStatusBar],
                    activate: (e, t, o, n) => {
                        if (!n) return;
                        const { shell: l } = e,
                            a = new m.CommandEditStatus(o);
                        t.currentChanged.connect(() => {
                            const e = t.currentWidget;
                            a.model.notebook = e && e.content;
                        }),
                            n.registerStatusItem(
                                '@jupyterlab/notebook-extension:mode-status',
                                {
                                    item: a,
                                    align: 'right',
                                    rank: 4,
                                    isActive: () =>
                                        !!l.currentWidget &&
                                        !!t.currentWidget &&
                                        l.currentWidget === t.currentWidget,
                                }
                            );
                    },
                },
                D = {
                    id: '@jupyterlab/notebook-extension:execution-indicator',
                    autoStart: !0,
                    requires: [m.INotebookTracker, n.ILabShell, _.ITranslator],
                    optional: [x.IStatusBar, C.ISettingRegistry],
                    activate: (e, t, o, n, l, a) => {
                        let r, s, c;
                        const d = e => {
                            var a, d;
                            let { showOnToolBar: i, showProgress: u } = e;
                            if (i)
                                c &&
                                    (o.currentChanged.disconnect(s),
                                    c.dispose());
                            else {
                                if (!l) return;
                                (null == r ? void 0 : r.model) ||
                                    ((r = new m.ExecutionIndicator(n)),
                                    (s = (e, o) => {
                                        const { newValue: n } = o;
                                        if (n && t.has(n)) {
                                            const e = n;
                                            r.model.attachNotebook({
                                                content: e.content,
                                                context: e.sessionContext,
                                            });
                                        }
                                    }),
                                    (c = l.registerStatusItem(
                                        '@jupyterlab/notebook-extension:execution-indicator',
                                        {
                                            item: r,
                                            align: 'left',
                                            rank: 3,
                                            isActive: () => {
                                                const e = o.currentWidget;
                                                return !!e && t.has(e);
                                            },
                                        }
                                    )),
                                    r.model.attachNotebook({
                                        content:
                                            null === (a = t.currentWidget) ||
                                            void 0 === a
                                                ? void 0
                                                : a.content,
                                        context:
                                            null === (d = t.currentWidget) ||
                                            void 0 === d
                                                ? void 0
                                                : d.sessionContext,
                                    }),
                                    o.currentChanged.connect(s),
                                    r.disposed.connect(() => {
                                        o.currentChanged.disconnect(s);
                                    })),
                                    (r.model.displayOption = {
                                        showOnToolBar: i,
                                        showProgress: u,
                                    });
                            }
                        };
                        if (a) {
                            const t = a.load(B.id);
                            Promise.all([t, e.restored])
                                .then(([e]) => {
                                    d(m.ExecutionIndicator.getSettingValue(e)),
                                        e.changed.connect(e =>
                                            d(
                                                m.ExecutionIndicator.getSettingValue(
                                                    e
                                                )
                                            )
                                        );
                                })
                                .catch(e => {
                                    console.error(e.message);
                                });
                        }
                    },
                },
                P = {
                    id: '@jupyterlab/notebook-extension:export',
                    autoStart: !0,
                    requires: [_.ITranslator, m.INotebookTracker],
                    optional: [b.IMainMenu, l.ICommandPalette],
                    activate: (e, t, o, n, l) => {
                        var a;
                        const r = t.load('jupyterlab'),
                            { commands: c, shell: d } = e,
                            i = e.serviceManager;
                        let u;
                        c.addCommand(I.exportToFormat, {
                            label: e => {
                                const t = e.label;
                                return e.isPalette
                                    ? r.__('Save and Export Notebook: %1', t)
                                    : t;
                            },
                            execute: e => {
                                const t = V(o, d, e);
                                if (!t) return;
                                const n = s.PageConfig.getNBConvertURL({
                                        format: e.format,
                                        download: !0,
                                        path: t.context.path,
                                    }),
                                    { context: l } = t;
                                return l.model.dirty && !l.model.readOnly
                                    ? l.save().then(() => {
                                          window.open(n, '_blank', 'noopener');
                                      })
                                    : new Promise(e => {
                                          window.open(n, '_blank', 'noopener'),
                                              e(void 0);
                                      });
                            },
                            isEnabled: () => $.isEnabled(d, o),
                        }),
                            n &&
                                (u =
                                    null ===
                                        (a = n.fileMenu.items.find(e => {
                                            var t;
                                            return (
                                                'submenu' === e.type &&
                                                'jp-mainmenu-file-notebookexport' ===
                                                    (null === (t = e.submenu) ||
                                                    void 0 === t
                                                        ? void 0
                                                        : t.id)
                                            );
                                        })) || void 0 === a
                                        ? void 0
                                        : a.submenu),
                            i.nbconvert.getExportFormats().then(e => {
                                if (e) {
                                    const o = $.getFormatLabels(t);
                                    Object.keys(e).forEach(function(e) {
                                        const t = r.__(
                                                e[0].toUpperCase() + e.substr(1)
                                            ),
                                            n = o[e] ? o[e] : t;
                                        let a = {
                                            format: e,
                                            label: n,
                                            isPalette: !1,
                                        };
                                        if (
                                            -1 === T.indexOf(e) &&
                                            (u &&
                                                u.addItem({
                                                    command: I.exportToFormat,
                                                    args: a,
                                                }),
                                            l)
                                        ) {
                                            a = {
                                                format: e,
                                                label: n,
                                                isPalette: !0,
                                            };
                                            const t = r.__(
                                                'Notebook Operations'
                                            );
                                            l.addItem({
                                                command: I.exportToFormat,
                                                category: t,
                                                args: a,
                                            });
                                        }
                                    });
                                }
                            });
                    },
                },
                W = {
                    id: '@jupyterlab/notebook-extension:trust-status',
                    autoStart: !0,
                    requires: [m.INotebookTracker, _.ITranslator],
                    optional: [x.IStatusBar],
                    activate: (e, t, o, n) => {
                        if (!n) return;
                        const { shell: l } = e,
                            a = new m.NotebookTrustStatus(o);
                        t.currentChanged.connect(() => {
                            const e = t.currentWidget;
                            a.model.notebook = e && e.content;
                        }),
                            n.registerStatusItem(
                                '@jupyterlab/notebook-extension:trust-status',
                                {
                                    item: a,
                                    align: 'right',
                                    rank: 3,
                                    isActive: () =>
                                        !!l.currentWidget &&
                                        !!t.currentWidget &&
                                        l.currentWidget === t.currentWidget,
                                }
                            );
                    },
                },
                F = {
                    id: '@jupyterlab/notebook-extension:widget-factory',
                    provides: m.INotebookWidgetFactory,
                    requires: [
                        m.NotebookPanel.IContentFactory,
                        r.IEditorServices,
                        p.IRenderMimeRegistry,
                        l.ISessionContextDialogs,
                        l.IToolbarWidgetRegistry,
                        _.ITranslator,
                    ],
                    optional: [C.ISettingRegistry],
                    activate: function(e, t, o, n, a, r, c, i) {
                        const u = s.PageConfig.getOption(
                                'notebookStartsKernel'
                            ),
                            b = '' === u || 'true' === u.toLowerCase(),
                            { commands: g } = e;
                        let p;
                        r.registerFactory(O, 'save', e =>
                            d.ToolbarItems.createSaveButton(
                                g,
                                e.context.fileChanged
                            )
                        ),
                            r.registerFactory(O, 'cellType', e =>
                                m.ToolbarItems.createCellTypeItem(e, c)
                            ),
                            r.registerFactory(O, 'kernelName', e =>
                                l.Toolbar.createKernelNameItem(
                                    e.sessionContext,
                                    a,
                                    c
                                )
                            ),
                            r.registerFactory(O, 'executionProgress', e => {
                                const t = null == i ? void 0 : i.load(B.id),
                                    o = m.ExecutionIndicator.createExecutionIndicatorItem(
                                        e,
                                        c,
                                        t
                                    );
                                return (
                                    null == t ||
                                        t.then(t => {
                                            e.disposed.connect(() => {
                                                t.dispose();
                                            });
                                        }),
                                    o
                                );
                            }),
                            i &&
                                (p = (0, l.createToolbarFactory)(
                                    r,
                                    i,
                                    O,
                                    '@jupyterlab/notebook-extension:panel',
                                    c
                                ));
                        const C = new m.NotebookWidgetFactory({
                            name: O,
                            fileTypes: ['notebook'],
                            modelName: 'notebook',
                            defaultFor: ['notebook'],
                            preferKernel: b,
                            canStartKernel: !0,
                            rendermime: n,
                            contentFactory: t,
                            editorConfig: m.StaticNotebook.defaultEditorConfig,
                            notebookConfig:
                                m.StaticNotebook.defaultNotebookConfig,
                            mimeTypeService: o.mimeTypeService,
                            sessionDialogs: a,
                            toolbarFactory: p,
                            translator: c,
                        });
                        return e.docRegistry.addWidgetFactory(C), C;
                    },
                    autoStart: !0,
                },
                K = {
                    id: '@jupyterlab/notebook-extension:cloned-outputs',
                    requires: [
                        c.IDocumentManager,
                        m.INotebookTracker,
                        _.ITranslator,
                    ],
                    optional: [n.ILayoutRestorer],
                    activate: function(e, t, o, n, a) {
                        const r = n.load('jupyterlab'),
                            s = new l.WidgetTracker({
                                namespace: 'cloned-outputs',
                            });
                        a &&
                            a.restore(s, {
                                command: I.createOutputView,
                                args: e => ({
                                    path: e.content.path,
                                    index: e.content.index,
                                }),
                                name: e =>
                                    `${e.content.path}:${e.content.index}`,
                                when: o.restored,
                            });
                        const { commands: c, shell: d } = e;
                        c.addCommand(I.createOutputView, {
                            label: r.__('Create New View for Output'),
                            execute: async e => {
                                var a;
                                let r, c;
                                const d = e.path;
                                let i = e.index;
                                if (d && null != i) {
                                    if (((c = t.findWidget(d, O)), !c)) return;
                                } else {
                                    if (((c = o.currentWidget), !c)) return;
                                    (r = c.content.activeCell),
                                        (i = c.content.activeCellIndex);
                                }
                                const u = new $.ClonedOutputArea({
                                        notebook: c,
                                        cell: r,
                                        index: i,
                                        translator: n,
                                    }),
                                    b = new l.MainAreaWidget({ content: u });
                                c.context.addSibling(b, {
                                    ref: c.id,
                                    mode: 'split-bottom',
                                });
                                const m = () => {
                                    s.save(b);
                                };
                                c.context.pathChanged.connect(m),
                                    null === (a = c.context.model) ||
                                        void 0 === a ||
                                        a.cells.changed.connect(m),
                                    s.add(b),
                                    c.content.disposed.connect(() => {
                                        var e;
                                        c.context.pathChanged.disconnect(m),
                                            null === (e = c.context.model) ||
                                                void 0 === e ||
                                                e.cells.changed.disconnect(m),
                                            b.dispose();
                                    });
                            },
                            isEnabled: () => $.isEnabledAndSingleSelected(d, o),
                        });
                    },
                    autoStart: !0,
                },
                U = {
                    id: '@jupyterlab/notebook-extension:code-console',
                    requires: [m.INotebookTracker, _.ITranslator],
                    activate: function(e, t, o) {
                        const n = o.load('jupyterlab'),
                            { commands: l, shell: a } = e,
                            r = () => $.isEnabled(a, t);
                        l.addCommand(I.createConsole, {
                            label: n.__('New Console for Notebook'),
                            execute: e => {
                                const o = t.currentWidget;
                                if (o) return $.createConsole(l, o, e.activate);
                            },
                            isEnabled: r,
                        }),
                            l.addCommand(I.runInConsole, {
                                label: n.__(
                                    'Run Selected Text or Current Line in Console'
                                ),
                                execute: async e => {
                                    var o, n;
                                    const a = t.currentWidget;
                                    if (!a) return;
                                    const { context: r, content: s } = a,
                                        c = s.activeCell,
                                        d =
                                            null == c
                                                ? void 0
                                                : c.model.metadata.toJSON(),
                                        i = r.path;
                                    if (!c || 'code' !== c.model.type) return;
                                    let u;
                                    const b = c.editor,
                                        m = b.getSelection(),
                                        { start: g, end: p } = m;
                                    if (
                                        g.column !== p.column ||
                                        g.line !== p.line
                                    ) {
                                        const e = b.getOffsetAt(m.start),
                                            t = b.getOffsetAt(m.end);
                                        u = b.model.value.text.substring(e, t);
                                    } else {
                                        const e = b.getCursorPosition(),
                                            t = b.model.value.text.split('\n');
                                        let l = m.start.line;
                                        for (
                                            ;
                                            l < b.lineCount &&
                                            !t[l].replace(/\s/g, '').length;

                                        )
                                            l += 1;
                                        let r = l > 0,
                                            s = 0,
                                            c = s + 1;
                                        for (;;) {
                                            u = t.slice(s, c).join('\n');
                                            const d = await (null ===
                                                (n =
                                                    null ===
                                                        (o =
                                                            a.context
                                                                .sessionContext
                                                                .session) ||
                                                    void 0 === o
                                                        ? void 0
                                                        : o.kernel) ||
                                            void 0 === n
                                                ? void 0
                                                : n.requestIsComplete({
                                                      code: u + '\n\n',
                                                  }));
                                            if (
                                                'complete' ===
                                                (null == d
                                                    ? void 0
                                                    : d.content.status)
                                            ) {
                                                if (l < c) {
                                                    for (
                                                        ;
                                                        c < b.lineCount &&
                                                        !t[c].replace(/\s/g, '')
                                                            .length;

                                                    )
                                                        c += 1;
                                                    b.setCursorPosition({
                                                        line: c,
                                                        column: e.column,
                                                    });
                                                    break;
                                                }
                                                (s = c), (c = s + 1);
                                            } else if (c < b.lineCount) c += 1;
                                            else {
                                                if (!r) {
                                                    for (
                                                        u = t[l];
                                                        l + 1 < b.lineCount &&
                                                        !t[l + 1].replace(
                                                            /\s/g,
                                                            ''
                                                        ).length;

                                                    )
                                                        l += 1;
                                                    b.setCursorPosition({
                                                        line: l + 1,
                                                        column: e.column,
                                                    });
                                                    break;
                                                }
                                                (s = l), (c = l + 1), (r = !1);
                                            }
                                        }
                                    }
                                    u &&
                                        (await l.execute('console:open', {
                                            activate: !1,
                                            insertMode: 'split-bottom',
                                            path: i,
                                        }),
                                        await l.execute('console:inject', {
                                            activate: !1,
                                            code: u,
                                            path: i,
                                            metadata: d,
                                        }));
                                },
                                isEnabled: r,
                            });
                    },
                    autoStart: !0,
                },
                H = {
                    id: '@jupyterlab/notebook-extensions:copy-output',
                    activate: function(e, t, o) {
                        const n = t.load('jupyterlab');
                        e.commands.addCommand(I.copyToClipboard, {
                            label: n.__('Copy Output to Clipboard'),
                            execute: e => {
                                var t;
                                const n =
                                    null === (t = o.currentWidget) ||
                                    void 0 === t
                                        ? void 0
                                        : t.content.activeCell;
                                if (null == n) return;
                                const l =
                                    n.outputArea.outputTracker.currentWidget;
                                if (null == l) return;
                                const a = l.node.getElementsByClassName(
                                    'jp-OutputArea-output'
                                );
                                a.length > 0 &&
                                    (function(e) {
                                        const t = window.getSelection();
                                        if (null == t) return;
                                        const o = [];
                                        for (let e = 0; e < t.rangeCount; ++e)
                                            o[e] = t.getRangeAt(e).cloneRange();
                                        const n = document.createRange();
                                        n.selectNodeContents(e),
                                            t.removeAllRanges(),
                                            t.addRange(n),
                                            document.execCommand('copy'),
                                            t.removeAllRanges(),
                                            o.forEach(e => t.addRange(e));
                                    })(a[0]);
                            },
                        }),
                            e.contextMenu.addItem({
                                command: I.copyToClipboard,
                                selector: '.jp-OutputArea-child',
                                rank: 0,
                            });
                    },
                    requires: [_.ITranslator, m.INotebookTracker],
                    autoStart: !0,
                },
                q = [M, B, D, P, j, L, W, F, E, K, U, H];
            function V(e, t, o) {
                const n = e.currentWidget;
                return !1 !== o.activate && n && t.activateById(n.id), n;
            }
            var $;
            !(function(e) {
                (e.createConsole = function(e, t, o) {
                    const n = {
                        path: t.context.path,
                        preferredLanguage:
                            t.context.model.defaultKernelLanguage,
                        activate: o,
                        ref: t.id,
                        insertMode: 'split-bottom',
                    };
                    return e.execute('console:create', n);
                }),
                    (e.isEnabled = function(e, t) {
                        return (
                            null !== t.currentWidget &&
                            t.currentWidget === e.currentWidget
                        );
                    }),
                    (e.isEnabledAndSingleSelected = function(t, o) {
                        if (!e.isEnabled(t, o)) return !1;
                        const { content: n } = o.currentWidget,
                            l = n.activeCellIndex;
                        for (let e = 0; e < n.widgets.length; ++e)
                            if (n.isSelected(n.widgets[e]) && e !== l)
                                return !1;
                        return !0;
                    }),
                    (e.isEnabledAndHeadingSelected = function(t, o) {
                        if (!e.isEnabled(t, o)) return !1;
                        const { content: n } = o.currentWidget,
                            l = n.activeCellIndex;
                        if (!(n.activeCell instanceof a.MarkdownCell))
                            return !1;
                        for (let e = 0; e < n.widgets.length; ++e)
                            if (n.isSelected(n.widgets[e]) && e !== l)
                                return !1;
                        return !0;
                    }),
                    (e.getFormatLabels = function(e) {
                        const t = (e = e || _.nullTranslator).load(
                            'jupyterlab'
                        );
                        return {
                            html: t.__('HTML'),
                            latex: t.__('LaTeX'),
                            markdown: t.__('Markdown'),
                            pdf: t.__('PDF'),
                            rst: t.__('ReStructured Text'),
                            script: t.__('Executable Script'),
                            slides: t.__('Reveal.js Slides'),
                        };
                    });
                class t extends y.Panel {
                    constructor(e) {
                        super(), (this._cell = null);
                        const t = (e.translator || _.nullTranslator).load(
                            'jupyterlab'
                        );
                        (this._notebook = e.notebook),
                            (this._index = void 0 !== e.index ? e.index : -1),
                            (this._cell = e.cell || null),
                            (this.id = `LinkedOutputView-${f.UUID.uuid4()}`),
                            (this.title.label = 'Output View'),
                            (this.title.icon = A.notebookIcon),
                            (this.title.caption = this._notebook.title.label
                                ? t.__(
                                      'For Notebook: %1',
                                      this._notebook.title.label
                                  )
                                : t.__('For Notebook:')),
                            this.addClass('jp-LinkedOutputView'),
                            this._notebook.context.ready.then(() => {
                                if (
                                    (this._cell ||
                                        (this._cell = this._notebook.content.widgets[
                                            this._index
                                        ]),
                                    !this._cell ||
                                        'code' !== this._cell.model.type)
                                )
                                    return void this.dispose();
                                const e = this._cell.cloneOutputArea();
                                this.addWidget(e);
                            });
                    }
                    get index() {
                        return this._cell
                            ? h.ArrayExt.findFirstIndex(
                                  this._notebook.content.widgets,
                                  e => e === this._cell
                              )
                            : this._index;
                    }
                    get path() {
                        return this._notebook.context.path;
                    }
                }
                e.ClonedOutputArea = t;
            })($ || ($ = {}));
        },
    },
]);
//# sourceMappingURL=4875.fb27006.js.map
