'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [2030],
    {
        92030: (e, t, o) => {
            o.r(t),
                o.d(t, {
                    CellTypeSwitcher: () => v,
                    CommandEditStatus: () => I,
                    ExecutionIndicator: () => Ce,
                    ExecutionIndicatorComponent: () => me,
                    INotebookTools: () => ae,
                    INotebookTracker: () => de,
                    INotebookWidgetFactory: () => ie,
                    KernelError: () => g,
                    Notebook: () => oe,
                    NotebookActions: () => m,
                    NotebookModel: () => S,
                    NotebookModelFactory: () => x,
                    NotebookPanel: () => le,
                    NotebookTools: () => P,
                    NotebookTracker: () => re,
                    NotebookTrustStatus: () => he,
                    NotebookWidgetFactory: () => ue,
                    StaticNotebook: () => te,
                    ToolbarItems: () => p,
                });
            var n = o(47343),
                s = o(69873),
                l = o(61345),
                i = o(43892),
                a = o(26169),
                d = o(33349),
                r = o(32798),
                c = o(62471),
                h = o.n(c);
            const u = 'application/vnd.jupyter.cells';
            class g extends Error {
                constructor(e) {
                    const t = e,
                        o = t.ename,
                        n = t.evalue;
                    super(`KernelReplyNotOK: ${o} ${n}`),
                        (this.errorName = o),
                        (this.errorValue = n),
                        (this.traceback = t.traceback),
                        Object.setPrototypeOf(this, g.prototype);
                }
            }
            class m {
                static get executed() {
                    return C.executed;
                }
                static get executionScheduled() {
                    return C.executionScheduled;
                }
                static get selectionExecuted() {
                    return C.selectionExecuted;
                }
                constructor() {}
            }
            var C;
            !(function(e) {
                function t(e, t = 'below', o, n = !1) {
                    if (!e.model || !e.activeCell) return;
                    const s = C.getState(e),
                        l = e.model;
                    e.mode = 'command';
                    const i = o.map(t => {
                            switch (t.cell_type) {
                                case 'code':
                                    if (
                                        'cut' === e.lastClipboardInteraction &&
                                        'string' == typeof t.id
                                    ) {
                                        let e = t.id;
                                        return l.contentFactory.createCodeCell({
                                            id: e,
                                            cell: t,
                                        });
                                    }
                                    return l.contentFactory.createCodeCell({
                                        cell: t,
                                    });
                                case 'markdown':
                                    return l.contentFactory.createMarkdownCell({
                                        cell: t,
                                    });
                                default:
                                    return l.contentFactory.createRawCell({
                                        cell: t,
                                    });
                            }
                        }),
                        a = e.model.cells;
                    let d;
                    switch ((a.beginCompoundOperation(), t)) {
                        case 'below':
                            d = e.activeCellIndex;
                            break;
                        case 'belowSelected':
                            e.widgets.forEach((t, o) => {
                                e.isSelectedOrActive(t) && (d = o);
                            });
                            break;
                        case 'above':
                            d = e.activeCellIndex - 1;
                            break;
                        case 'replace': {
                            const t = [];
                            e.widgets.forEach((o, n) => {
                                const s =
                                    !1 !== o.model.metadata.get('deletable');
                                e.isSelectedOrActive(o) && s && t.push(n);
                            }),
                                t.length > 0 &&
                                    t.reverse().forEach(e => {
                                        a.remove(e);
                                    }),
                                (d = t[0]);
                            break;
                        }
                    }
                    i.forEach(e => {
                        a.insert(++d, e);
                    }),
                        a.endCompoundOperation(),
                        (e.activeCellIndex += i.length),
                        e.deselectAll(),
                        n && (e.lastClipboardInteraction = 'paste'),
                        C.handleState(e, s);
                }
                function o(t, o, n) {
                    const l = (0, i.findIndex)(
                        n.widgets,
                        (e, o) => t.model.id === e.model.id
                    );
                    if (-1 === l) return -1;
                    if (!n.widgets.length) return l + 1;
                    let a = e.getHeadingInfo(t);
                    if (
                        t.isHidden ||
                        !(t instanceof s.MarkdownCell) ||
                        !a.isHeading
                    )
                        return l + 1;
                    let d,
                        r = !1,
                        c = 0;
                    for (d = l + 1; d < n.widgets.length; d++) {
                        let t = n.widgets[d],
                            s = e.getHeadingInfo(t);
                        if (s.isHeading && s.headingLevel <= a.headingLevel) {
                            d -= 1;
                            break;
                        }
                        r && s.isHeading && s.headingLevel <= c && (r = !1),
                            o || r
                                ? t.setHidden(!0)
                                : (s.collapsed &&
                                      s.isHeading &&
                                      ((r = !0), (c = s.headingLevel)),
                                  t.setHidden(!1));
                    }
                    return (
                        d === n.widgets.length
                            ? (t.numberChildNodes = d - l - 1)
                            : (t.numberChildNodes = d - l),
                        e.setCellCollapse(t, o),
                        d + 1
                    );
                }
                function r(e) {
                    if (!(e instanceof s.MarkdownCell))
                        return { isHeading: !1, headingLevel: 7 };
                    let t = e.headingInfo.level;
                    return {
                        isHeading: t > 0,
                        headingLevel: t,
                        collapsed: e.headingCollapsed,
                    };
                }
                (e.splitCell = function(e) {
                    if (!e.model || !e.activeCell) return;
                    if (!C.isNotebookRendered(e)) return;
                    const t = C.getState(e);
                    e.deselectAll();
                    const o = e.model,
                        n = e.activeCellIndex,
                        s = e.widgets[n],
                        l = s.editor,
                        i = l.getSelections(),
                        a = s.model.value.text,
                        d = [0];
                    let r = -1,
                        c = -1;
                    for (let e = 0; e < i.length; e++)
                        (r = l.getOffsetAt(i[e].start)),
                            (c = l.getOffsetAt(i[e].end)),
                            r < c
                                ? (d.push(r), d.push(c))
                                : c < r
                                ? (d.push(c), d.push(r))
                                : d.push(r);
                    d.push(a.length);
                    const h = [];
                    for (let e = 0; e + 1 < d.length; e++) {
                        const e = C.cloneCell(o, s.model);
                        h.push(e);
                    }
                    for (let e = 0; e < h.length; e++)
                        e !== h.length - 1 &&
                            'code' === h[e].type &&
                            h[e].outputs.clear(),
                            (h[e].value.text = a
                                .slice(d[e], d[e + 1])
                                .replace(/^\n+/, '')
                                .replace(/\n+$/, ''));
                    const u = o.cells;
                    u.beginCompoundOperation();
                    for (let e = 0; e < h.length; e++)
                        0 === e ? u.set(n, h[e]) : u.insert(n + e, h[e]);
                    u.endCompoundOperation();
                    const g = r !== c ? 2 : 1;
                    (e.activeCellIndex = n + h.length - g),
                        e.activeCell.editor.focus(),
                        C.handleState(e, t);
                }),
                    (e.mergeCells = function(e, t = !1) {
                        if (!e.model || !e.activeCell) return;
                        if (!C.isNotebookRendered(e)) return;
                        const o = C.getState(e),
                            n = [],
                            l = [],
                            i = e.model,
                            a = i.cells,
                            d = e.activeCell,
                            r = e.activeCellIndex,
                            c = {};
                        if (
                            (e.widgets.forEach((t, o) => {
                                if (e.isSelectedOrActive(t)) {
                                    n.push(t.model.value.text),
                                        o !== r && l.push(t.model);
                                    const e = t.model;
                                    if (
                                        (0, s.isRawCellModel)(e) ||
                                        (0, s.isMarkdownCellModel)(e)
                                    )
                                        for (const t of e.attachments.keys)
                                            c[t] = e.attachments
                                                .get(t)
                                                .toJSON();
                                }
                            }),
                            1 === n.length)
                        )
                            if (!0 === t) {
                                if (0 === r) return;
                                const e = a.get(r - 1);
                                n.unshift(e.value.text), l.push(e);
                            } else if (!1 === t) {
                                if (r === a.length - 1) return;
                                const e = a.get(r + 1);
                                n.push(e.value.text), l.push(e);
                            }
                        e.deselectAll();
                        const h = C.cloneCell(i, d.model);
                        (h.value.text = n.join('\n\n')),
                            (0, s.isCodeCellModel)(h)
                                ? h.outputs.clear()
                                : ((0, s.isMarkdownCellModel)(h) ||
                                      (0, s.isRawCellModel)(h)) &&
                                  h.attachments.fromJSON(c),
                            a.beginCompoundOperation(),
                            a.set(r, h),
                            l.forEach(e => {
                                a.removeValue(e);
                            }),
                            a.endCompoundOperation(),
                            d instanceof s.MarkdownCell &&
                                (e.activeCell.rendered = !1),
                            C.handleState(e, o);
                    }),
                    (e.deleteCells = function(e) {
                        if (!e.model || !e.activeCell) return;
                        if (!C.isNotebookRendered(e)) return;
                        const t = C.getState(e);
                        C.deleteCells(e), C.handleState(e, t, !0);
                    }),
                    (e.insertAbove = function(e) {
                        if (!e.model || !e.activeCell) return;
                        if (!C.isNotebookRendered(e)) return;
                        const t = C.getState(e),
                            o = e.model,
                            n = o.contentFactory.createCell(
                                e.notebookConfig.defaultCell,
                                {}
                            ),
                            s = e.activeCellIndex;
                        o.cells.insert(s, n),
                            (e.activeCellIndex = s),
                            e.deselectAll(),
                            C.handleState(e, t, !0);
                    }),
                    (e.insertBelow = function(e) {
                        if (!e.model || !e.activeCell) return;
                        if (!C.isNotebookRendered(e)) return;
                        const t = C.getState(e),
                            o = e.model,
                            n = o.contentFactory.createCell(
                                e.notebookConfig.defaultCell,
                                {}
                            );
                        o.cells.insert(e.activeCellIndex + 1, n),
                            e.activeCellIndex++,
                            e.deselectAll(),
                            C.handleState(e, t, !0);
                    }),
                    (e.moveDown = function(e) {
                        if (!e.model || !e.activeCell) return;
                        if (!C.isNotebookRendered(e)) return;
                        const t = C.getState(e),
                            o = e.model.cells,
                            n = e.widgets;
                        o.beginCompoundOperation();
                        for (let t = o.length - 2; t > -1; t--)
                            e.isSelectedOrActive(n[t]) &&
                                (e.isSelectedOrActive(n[t + 1]) ||
                                    (o.move(t, t + 1),
                                    e.activeCellIndex === t &&
                                        e.activeCellIndex++,
                                    e.select(n[t + 1]),
                                    e.deselect(n[t])));
                        o.endCompoundOperation(), C.handleState(e, t, !0);
                    }),
                    (e.moveUp = function(e) {
                        if (!e.model || !e.activeCell) return;
                        if (!C.isNotebookRendered(e)) return;
                        const t = C.getState(e),
                            o = e.model.cells,
                            n = e.widgets;
                        o.beginCompoundOperation();
                        for (let t = 1; t < o.length; t++)
                            e.isSelectedOrActive(n[t]) &&
                                (e.isSelectedOrActive(n[t - 1]) ||
                                    (o.move(t, t - 1),
                                    e.activeCellIndex === t &&
                                        e.activeCellIndex--,
                                    e.select(n[t - 1]),
                                    e.deselect(n[t])));
                        o.endCompoundOperation(), C.handleState(e, t, !0);
                    }),
                    (e.changeCellType = function(e, t) {
                        if (!e.model || !e.activeCell) return;
                        const o = C.getState(e);
                        C.changeCellType(e, t), C.handleState(e, o);
                    }),
                    (e.run = function(e, t) {
                        if (!e.model || !e.activeCell)
                            return Promise.resolve(!1);
                        const o = C.getState(e),
                            n = C.runSelected(e, t);
                        return C.handleRunState(e, o, !1), n;
                    }),
                    (e.runAndAdvance = function(e, t) {
                        if (!e.model || !e.activeCell)
                            return Promise.resolve(!1);
                        const o = C.getState(e),
                            n = C.runSelected(e, t),
                            s = e.model;
                        if (e.activeCellIndex === e.widgets.length - 1) {
                            const t = s.contentFactory.createCell(
                                e.notebookConfig.defaultCell,
                                {}
                            );
                            s.cells.insert(e.widgets.length, t),
                                e.activeCellIndex++,
                                (e.mode = 'edit');
                        } else e.activeCellIndex++;
                        return C.handleRunState(e, o, !0), n;
                    }),
                    (e.runAndInsert = function(e, t) {
                        if (!e.model || !e.activeCell)
                            return Promise.resolve(!1);
                        if (!C.isNotebookRendered(e))
                            return Promise.resolve(!1);
                        const o = C.getState(e),
                            n = C.runSelected(e, t),
                            s = e.model,
                            l = s.contentFactory.createCell(
                                e.notebookConfig.defaultCell,
                                {}
                            );
                        return (
                            s.cells.insert(e.activeCellIndex + 1, l),
                            e.activeCellIndex++,
                            (e.mode = 'edit'),
                            C.handleRunState(e, o, !0),
                            n
                        );
                    }),
                    (e.runAll = function(e, t) {
                        if (!e.model || !e.activeCell)
                            return Promise.resolve(!1);
                        const o = C.getState(e);
                        e.widgets.forEach(t => {
                            e.select(t);
                        });
                        const n = C.runSelected(e, t);
                        return C.handleRunState(e, o, !0), n;
                    }),
                    (e.renderAllMarkdown = function(e, t) {
                        if (!e.model || !e.activeCell)
                            return Promise.resolve(!1);
                        const o = e.activeCellIndex,
                            n = C.getState(e);
                        if (
                            (e.widgets.forEach((t, o) => {
                                'markdown' === t.model.type &&
                                    (e.select(t), (e.activeCellIndex = o));
                            }),
                            'markdown' !== e.activeCell.model.type)
                        )
                            return Promise.resolve(!0);
                        const s = C.runSelected(e, t);
                        return (
                            (e.activeCellIndex = o),
                            C.handleRunState(e, n, !0),
                            s
                        );
                    }),
                    (e.runAllAbove = function(e, t) {
                        const {
                            activeCell: o,
                            activeCellIndex: n,
                            model: s,
                        } = e;
                        if (!s || !o || n < 1) return Promise.resolve(!1);
                        const l = C.getState(e);
                        e.activeCellIndex--, e.deselectAll();
                        for (let t = 0; t < e.activeCellIndex; ++t)
                            e.select(e.widgets[t]);
                        const i = C.runSelected(e, t);
                        return (
                            e.activeCellIndex++, C.handleRunState(e, l, !0), i
                        );
                    }),
                    (e.runAllBelow = function(e, t) {
                        if (!e.model || !e.activeCell)
                            return Promise.resolve(!1);
                        const o = C.getState(e);
                        e.deselectAll();
                        for (
                            let t = e.activeCellIndex;
                            t < e.widgets.length;
                            ++t
                        )
                            e.select(e.widgets[t]);
                        const n = C.runSelected(e, t);
                        return C.handleRunState(e, o, !0), n;
                    }),
                    (e.replaceSelection = function(e, t) {
                        var o, n;
                        e.model &&
                            e.activeCell &&
                            (null ===
                                (n = (o = e.activeCell.editor)
                                    .replaceSelection) ||
                                void 0 === n ||
                                n.call(o, t));
                    }),
                    (e.selectAbove = function(e) {
                        if (!e.model || !e.activeCell) return;
                        if (0 === e.activeCellIndex) return;
                        let t = e.activeCellIndex - 1;
                        for (; t >= 0; ) {
                            const o = e.widgets[t];
                            if (!o.inputHidden && !o.isHidden) break;
                            t -= 1;
                        }
                        const o = C.getState(e);
                        (e.activeCellIndex = t),
                            e.deselectAll(),
                            C.handleState(e, o, !0);
                    }),
                    (e.selectBelow = function(e) {
                        if (!e.model || !e.activeCell) return;
                        let t = e.widgets.length - 1;
                        for (
                            ;
                            e.widgets[t].isHidden || e.widgets[t].inputHidden;

                        )
                            t -= 1;
                        if (e.activeCellIndex === t) return;
                        let o = e.activeCellIndex + 1;
                        for (; o < t; ) {
                            let t = e.widgets[o];
                            if (!t.inputHidden && !t.isHidden) break;
                            o += 1;
                        }
                        const n = C.getState(e);
                        (e.activeCellIndex = o),
                            e.deselectAll(),
                            C.handleState(e, n, !0);
                    }),
                    (e.extendSelectionAbove = function(e, t = !1) {
                        if (!e.model || !e.activeCell) return;
                        if (0 === e.activeCellIndex) return;
                        const o = C.getState(e);
                        (e.mode = 'command'),
                            t
                                ? e.extendContiguousSelectionTo(0)
                                : e.extendContiguousSelectionTo(
                                      e.activeCellIndex - 1
                                  ),
                            C.handleState(e, o, !0);
                    }),
                    (e.extendSelectionBelow = function(e, t = !1) {
                        if (!e.model || !e.activeCell) return;
                        if (e.activeCellIndex === e.widgets.length - 1) return;
                        const o = C.getState(e);
                        (e.mode = 'command'),
                            t
                                ? e.extendContiguousSelectionTo(
                                      e.widgets.length - 1
                                  )
                                : e.extendContiguousSelectionTo(
                                      e.activeCellIndex + 1
                                  ),
                            C.handleState(e, o, !0);
                    }),
                    (e.selectAll = function(e) {
                        e.model &&
                            e.activeCell &&
                            e.widgets.forEach(t => {
                                e.select(t);
                            });
                    }),
                    (e.deselectAll = function(e) {
                        e.model && e.activeCell && e.deselectAll();
                    }),
                    (e.copy = function(e) {
                        C.copyOrCut(e, !1);
                    }),
                    (e.cut = function(e) {
                        C.isNotebookRendered(e) && C.copyOrCut(e, !0);
                    }),
                    (e.paste = function(e, o = 'below') {
                        if (!C.isNotebookRendered(e)) return;
                        const s = n.Clipboard.getInstance();
                        s.hasData(u) && t(e, o, s.getData(u), !0);
                    }),
                    (e.duplicate = function(e, o = 'below') {
                        const n = C.selectedCells(e);
                        n && 0 !== n.length && t(e, o, n, !1);
                    }),
                    (e.undo = function(e) {
                        if (!e.model || !e.activeCell) return;
                        if (!C.isNotebookRendered(e)) return;
                        const t = C.getState(e);
                        (e.mode = 'command'),
                            e.model.sharedModel.undo(),
                            e.deselectAll(),
                            C.handleState(e, t);
                    }),
                    (e.redo = function(e) {
                        if (!e.model || !e.activeCell) return;
                        const t = C.getState(e);
                        (e.mode = 'command'),
                            e.model.sharedModel.redo(),
                            e.deselectAll(),
                            C.handleState(e, t);
                    }),
                    (e.toggleAllLineNumbers = function(e) {
                        if (!e.model || !e.activeCell) return;
                        const t = C.getState(e),
                            o = e.editorConfig,
                            n = !(
                                o.code.lineNumbers &&
                                o.markdown.lineNumbers &&
                                o.raw.lineNumbers
                            ),
                            s = {
                                code: Object.assign(Object.assign({}, o.code), {
                                    lineNumbers: n,
                                }),
                                markdown: Object.assign(
                                    Object.assign({}, o.markdown),
                                    { lineNumbers: n }
                                ),
                                raw: Object.assign(Object.assign({}, o.raw), {
                                    lineNumbers: n,
                                }),
                            };
                        (e.editorConfig = s), C.handleState(e, t);
                    }),
                    (e.clearOutputs = function(e) {
                        if (!e.model || !e.activeCell) return;
                        const t = C.getState(e);
                        (0, i.each)(e.model.cells, (t, o) => {
                            const n = e.widgets[o];
                            e.isSelectedOrActive(n) &&
                                'code' === t.type &&
                                (t.clearExecution(), (n.outputHidden = !1));
                        }),
                            C.handleState(e, t, !0);
                    }),
                    (e.clearAllOutputs = function(e) {
                        if (!e.model || !e.activeCell) return;
                        const t = C.getState(e);
                        (0, i.each)(e.model.cells, (t, o) => {
                            const n = e.widgets[o];
                            'code' === t.type &&
                                (t.clearExecution(), (n.outputHidden = !1));
                        }),
                            C.handleState(e, t, !0);
                    }),
                    (e.hideCode = function(e) {
                        if (!e.model || !e.activeCell) return;
                        const t = C.getState(e);
                        e.widgets.forEach(t => {
                            e.isSelectedOrActive(t) &&
                                'code' === t.model.type &&
                                (t.inputHidden = !0);
                        }),
                            C.handleState(e, t);
                    }),
                    (e.showCode = function(e) {
                        if (!e.model || !e.activeCell) return;
                        const t = C.getState(e);
                        e.widgets.forEach(t => {
                            e.isSelectedOrActive(t) &&
                                'code' === t.model.type &&
                                (t.inputHidden = !1);
                        }),
                            C.handleState(e, t);
                    }),
                    (e.hideAllCode = function(e) {
                        if (!e.model || !e.activeCell) return;
                        const t = C.getState(e);
                        e.widgets.forEach(e => {
                            'code' === e.model.type && (e.inputHidden = !0);
                        }),
                            C.handleState(e, t);
                    }),
                    (e.showAllCode = function(e) {
                        if (!e.model || !e.activeCell) return;
                        const t = C.getState(e);
                        e.widgets.forEach(e => {
                            'code' === e.model.type && (e.inputHidden = !1);
                        }),
                            C.handleState(e, t);
                    }),
                    (e.hideOutput = function(e) {
                        if (!e.model || !e.activeCell) return;
                        const t = C.getState(e);
                        e.widgets.forEach(t => {
                            e.isSelectedOrActive(t) &&
                                'code' === t.model.type &&
                                (t.outputHidden = !0);
                        }),
                            C.handleState(e, t, !0);
                    }),
                    (e.showOutput = function(e) {
                        if (!e.model || !e.activeCell) return;
                        const t = C.getState(e);
                        e.widgets.forEach(t => {
                            e.isSelectedOrActive(t) &&
                                'code' === t.model.type &&
                                (t.outputHidden = !1);
                        }),
                            C.handleState(e, t);
                    }),
                    (e.hideAllOutputs = function(e) {
                        if (!e.model || !e.activeCell) return;
                        const t = C.getState(e);
                        e.widgets.forEach(e => {
                            'code' === e.model.type && (e.outputHidden = !0);
                        }),
                            C.handleState(e, t, !0);
                    }),
                    (e.renderSideBySide = function(e) {
                        e.renderingLayout = 'side-by-side';
                    }),
                    (e.renderDefault = function(e) {
                        e.renderingLayout = 'default';
                    }),
                    (e.showAllOutputs = function(e) {
                        if (!e.model || !e.activeCell) return;
                        const t = C.getState(e);
                        e.widgets.forEach(e => {
                            'code' === e.model.type && (e.outputHidden = !1);
                        }),
                            C.handleState(e, t);
                    }),
                    (e.enableOutputScrolling = function(e) {
                        if (!e.model || !e.activeCell) return;
                        const t = C.getState(e);
                        e.widgets.forEach(t => {
                            e.isSelectedOrActive(t) &&
                                'code' === t.model.type &&
                                (t.outputsScrolled = !0);
                        }),
                            C.handleState(e, t, !0);
                    }),
                    (e.disableOutputScrolling = function(e) {
                        if (!e.model || !e.activeCell) return;
                        const t = C.getState(e);
                        e.widgets.forEach(t => {
                            e.isSelectedOrActive(t) &&
                                'code' === t.model.type &&
                                (t.outputsScrolled = !1);
                        }),
                            C.handleState(e, t);
                    }),
                    (e.selectLastRunCell = function(e) {
                        let t = null,
                            o = null;
                        e.widgets.forEach((e, n) => {
                            if ('code' === e.model.type) {
                                const s = e.model.metadata.get('execution');
                                if (
                                    s &&
                                    a.JSONExt.isObject(s) &&
                                    void 0 !== s['iopub.status.busy']
                                ) {
                                    const e = s['iopub.status.busy'].toString();
                                    if (e) {
                                        const s = new Date(e);
                                        (!t || s >= t) && ((t = s), (o = n));
                                    }
                                }
                            }
                        }),
                            null !== o && (e.activeCellIndex = o);
                    }),
                    (e.setMarkdownHeader = function(e, t) {
                        if (!e.model || !e.activeCell) return;
                        const o = C.getState(e),
                            n = e.model.cells;
                        (t = Math.min(Math.max(t, 1), 6)),
                            e.widgets.forEach((o, s) => {
                                e.isSelectedOrActive(o) &&
                                    C.setMarkdownHeader(n.get(s), t);
                            }),
                            C.changeCellType(e, 'markdown'),
                            C.handleState(e, o);
                    }),
                    (e.collapseAll = function(t) {
                        for (const o of t.widgets)
                            e.getHeadingInfo(o).isHeading &&
                                (e.setHeadingCollapse(o, !0, t),
                                e.setCellCollapse(o, !0));
                    }),
                    (e.expandAllHeadings = function(t) {
                        for (const o of t.widgets)
                            e.getHeadingInfo(o).isHeading &&
                                (e.setHeadingCollapse(o, !1, t),
                                e.setCellCollapse(o, !1));
                    }),
                    (e.expandParent = function e(t, n) {
                        let s = (function(e, t) {
                            const o = (0, i.findIndex)(
                                t.widgets,
                                (t, o) => e.model.id === t.model.id
                            );
                            if (-1 === o) return;
                            if (o >= t.widgets.length) return;
                            let n = r(t.widgets[o]);
                            for (let e = o - 1; e >= 0; e--)
                                if (e < t.widgets.length) {
                                    let o = r(t.widgets[e]);
                                    if (
                                        o.isHeading &&
                                        o.headingLevel < n.headingLevel
                                    )
                                        return t.widgets[e];
                                }
                        })(t, n);
                        s &&
                            (r(s).collapsed || s.isHidden) &&
                            (s.isHidden && e(s, n),
                            r(s).collapsed && o(s, !1, n));
                    }),
                    (e.findNextParentHeading = function(e, t) {
                        let o = (0, i.findIndex)(
                            t.widgets,
                            (t, o) => e.model.id === t.model.id
                        );
                        if (-1 === o) return -1;
                        let n = r(e);
                        for (o += 1; o < t.widgets.length; o++) {
                            let e = r(t.widgets[o]);
                            if (e.isHeading && e.headingLevel <= n.headingLevel)
                                return o;
                        }
                        return t.widgets.length;
                    }),
                    (e.setHeadingCollapse = o),
                    (e.toggleCurrentHeadingCollapse = function(t) {
                        if (!t.activeCell || void 0 === t.activeCellIndex)
                            return;
                        let o = e.getHeadingInfo(t.activeCell);
                        o.isHeading &&
                            e.setHeadingCollapse(t.activeCell, !o.collapsed, t),
                            d.ElementExt.scrollIntoViewIfNeeded(
                                t.node,
                                t.activeCell.node
                            );
                    }),
                    (e.setCellCollapse = function(e, t) {
                        e instanceof s.MarkdownCell
                            ? (e.headingCollapsed = t)
                            : e.setHidden(t);
                    }),
                    (e.getHeadingInfo = r),
                    (e.trust = function(e, t) {
                        const o = (t = t || l.nullTranslator).load(
                            'jupyterlab'
                        );
                        if (!e.model) return Promise.resolve();
                        const s = (0, i.toArray)(e.model.cells),
                            a = s.every(e => e.trusted),
                            d = c.createElement(
                                'p',
                                null,
                                o.__(
                                    'A trusted Jupyter notebook may execute hidden malicious code when you open it.'
                                ),
                                c.createElement('br', null),
                                o.__(
                                    'Selecting trust will re-render this notebook in a trusted state.'
                                ),
                                c.createElement('br', null),
                                o.__('For more information, see'),
                                ' ',
                                c.createElement(
                                    'a',
                                    {
                                        href:
                                            'https://jupyter-server.readthedocs.io/en/stable/operators/security.html',
                                        target: '_blank',
                                        rel: 'noopener noreferrer',
                                    },
                                    o.__('the Jupyter security documentation')
                                )
                            );
                        return a
                            ? (0, n.showDialog)({
                                  body: o.__('Notebook is already trusted'),
                                  buttons: [
                                      n.Dialog.okButton({ label: o.__('Ok') }),
                                  ],
                              }).then(() => {})
                            : (0, n.showDialog)({
                                  body: d,
                                  title: o.__('Trust this notebook?'),
                                  buttons: [
                                      n.Dialog.cancelButton({
                                          label: o.__('Cancel'),
                                      }),
                                      n.Dialog.warnButton({
                                          label: o.__('Ok'),
                                      }),
                                  ],
                              }).then(e => {
                                  e.button.accept &&
                                      s.forEach(e => {
                                          e.trusted = !0;
                                      });
                              });
                    });
            })(m || (m = {})),
                (function(e) {
                    function t(e) {
                        return {
                            wasFocused: e.node.contains(document.activeElement),
                            activeCell: e.activeCell,
                        };
                    }
                    function o(e, t, o = !1) {
                        const { activeCell: n, node: s } = e;
                        (t.wasFocused || 'edit' === e.mode) && e.activate(),
                            o &&
                                n &&
                                d.ElementExt.scrollIntoViewIfNeeded(s, n.node);
                    }
                    function a(e) {
                        const t = e.model,
                            o = t.cells,
                            n = [];
                        (e.mode = 'command'),
                            e.widgets.forEach((o, s) => {
                                const l =
                                    !1 !== o.model.metadata.get('deletable');
                                e.isSelectedOrActive(o) &&
                                    l &&
                                    (n.push(s),
                                    t.deletedCells.push(o.model.id));
                            }),
                            n.length > 0 &&
                                (o.beginCompoundOperation(),
                                n.reverse().forEach(e => {
                                    o.remove(e);
                                }),
                                o.length ||
                                    o.push(
                                        t.contentFactory.createCell(
                                            e.notebookConfig.defaultCell,
                                            {}
                                        )
                                    ),
                                o.endCompoundOperation(),
                                (e.activeCellIndex = n[0] - n.length + 1)),
                            e.deselectAll();
                    }
                    (e.executed = new r.Signal({})),
                        (e.executionScheduled = new r.Signal({})),
                        (e.selectionExecuted = new r.Signal({})),
                        (e.isNotebookRendered = function(e) {
                            const t = e.translator.load('jupyterlab');
                            return (
                                0 === e.remainingCellToRenderCount ||
                                ((0, n.showDialog)({
                                    body: t.__(
                                        'Notebook is still rendering and has for now (%1) remaining cells to render.\n\nPlease wait for the complete rendering before invoking that action.',
                                        e.remainingCellToRenderCount
                                    ),
                                    buttons: [
                                        n.Dialog.okButton({
                                            label: t.__('Ok'),
                                        }),
                                    ],
                                }).catch(e => {
                                    console.error(
                                        'An error occurred when displaying notebook rendering warning',
                                        e
                                    );
                                }),
                                !1)
                            );
                        }),
                        (e.getState = t),
                        (e.handleState = o),
                        (e.handleRunState = function(e, t, o = !1) {
                            if (
                                ((t.wasFocused || 'edit' === e.mode) &&
                                    e.activate(),
                                o && t.activeCell)
                            ) {
                                const o = t.activeCell.inputArea.node.getBoundingClientRect();
                                e.scrollToPosition(o.bottom, 45);
                            }
                        }),
                        (e.cloneCell = function(e, t) {
                            switch (t.type) {
                                case 'code':
                                    return e.contentFactory.createCodeCell({
                                        cell: t.toJSON(),
                                    });
                                case 'markdown':
                                    return e.contentFactory.createMarkdownCell({
                                        cell: t.toJSON(),
                                    });
                                default:
                                    return e.contentFactory.createRawCell({
                                        cell: t.toJSON(),
                                    });
                            }
                        }),
                        (e.runSelected = function(t, o) {
                            t.mode = 'command';
                            let a = t.activeCellIndex;
                            const d = t.widgets.filter((e, o) => {
                                const n = t.isSelectedOrActive(e);
                                return n && (a = o), n;
                            });
                            return (
                                (t.activeCellIndex = a),
                                t.deselectAll(),
                                Promise.all(
                                    d.map(a =>
                                        (function(t, o, a, d) {
                                            var r, c, h;
                                            const u = (d =
                                                d || l.nullTranslator).load(
                                                'jupyterlab'
                                            );
                                            switch (o.model.type) {
                                                case 'markdown':
                                                    (o.rendered = !0),
                                                        (o.inputHidden = !1),
                                                        e.executed.emit({
                                                            notebook: t,
                                                            cell: o,
                                                            success: !0,
                                                        });
                                                    break;
                                                case 'code':
                                                    if (a) {
                                                        if (a.isTerminating) {
                                                            (0, n.showDialog)({
                                                                title: u.__(
                                                                    'Kernel Terminating'
                                                                ),
                                                                body: u.__(
                                                                    'The kernel for %1 appears to be terminating. You can not run any cell for now.',
                                                                    null ===
                                                                        (r =
                                                                            a.session) ||
                                                                        void 0 ===
                                                                            r
                                                                        ? void 0
                                                                        : r.path
                                                                ),
                                                                buttons: [
                                                                    n.Dialog.okButton(
                                                                        {
                                                                            label: u.__(
                                                                                'Ok'
                                                                            ),
                                                                        }
                                                                    ),
                                                                ],
                                                            });
                                                            break;
                                                        }
                                                        if (a.pendingInput)
                                                            return (
                                                                (0,
                                                                n.showDialog)({
                                                                    title: u.__(
                                                                        'Cell not executed due to pending input'
                                                                    ),
                                                                    body: u.__(
                                                                        'The cell has not been executed to avoid kernel deadlock as there is another pending input! Submit your pending input and try again.'
                                                                    ),
                                                                    buttons: [
                                                                        n.Dialog.okButton(
                                                                            {
                                                                                label: u.__(
                                                                                    'Ok'
                                                                                ),
                                                                            }
                                                                        ),
                                                                    ],
                                                                }),
                                                                Promise.resolve(
                                                                    !1
                                                                )
                                                            );
                                                        if (a.hasNoKernel)
                                                            return (
                                                                n.sessionContextDialogs.selectKernel(
                                                                    a
                                                                ),
                                                                Promise.resolve(
                                                                    !1
                                                                )
                                                            );
                                                        const l =
                                                            null !==
                                                                (h =
                                                                    null ===
                                                                        (c =
                                                                            t.model) ||
                                                                    void 0 === c
                                                                        ? void 0
                                                                        : c.deletedCells) &&
                                                            void 0 !== h
                                                                ? h
                                                                : [];
                                                        return (
                                                            e.executionScheduled.emit(
                                                                {
                                                                    notebook: t,
                                                                    cell: o,
                                                                }
                                                            ),
                                                            s.CodeCell.execute(
                                                                o,
                                                                a,
                                                                {
                                                                    deletedCells: l,
                                                                    recordTiming:
                                                                        t
                                                                            .notebookConfig
                                                                            .recordTiming,
                                                                }
                                                            )
                                                                .then(e => {
                                                                    if (
                                                                        (l.splice(
                                                                            0,
                                                                            l.length
                                                                        ),
                                                                        o.isDisposed)
                                                                    )
                                                                        return !1;
                                                                    if (!e)
                                                                        return !0;
                                                                    if (
                                                                        'ok' ===
                                                                        e
                                                                            .content
                                                                            .status
                                                                    ) {
                                                                        const n =
                                                                            e.content;
                                                                        return (
                                                                            n.payload &&
                                                                                n
                                                                                    .payload
                                                                                    .length &&
                                                                                (function(
                                                                                    e,
                                                                                    t,
                                                                                    o
                                                                                ) {
                                                                                    var n;
                                                                                    const s =
                                                                                        null ===
                                                                                            (n =
                                                                                                e.payload) ||
                                                                                        void 0 ===
                                                                                            n
                                                                                            ? void 0
                                                                                            : n.filter(
                                                                                                  e =>
                                                                                                      'set_next_input' ===
                                                                                                      e.source
                                                                                              )[0];
                                                                                    if (
                                                                                        !s
                                                                                    )
                                                                                        return;
                                                                                    const l =
                                                                                        s.text;
                                                                                    if (
                                                                                        s.replace
                                                                                    )
                                                                                        return void (o.model.value.text = l);
                                                                                    const a = t.model.contentFactory.createCodeCell(
                                                                                            {}
                                                                                        ),
                                                                                        d =
                                                                                            t
                                                                                                .model
                                                                                                .cells,
                                                                                        r = i.ArrayExt.firstIndexOf(
                                                                                            (0,
                                                                                            i.toArray)(
                                                                                                d
                                                                                            ),
                                                                                            o.model
                                                                                        );
                                                                                    (a.value.text = l),
                                                                                        -1 ===
                                                                                        r
                                                                                            ? d.push(
                                                                                                  a
                                                                                              )
                                                                                            : d.insert(
                                                                                                  r +
                                                                                                      1,
                                                                                                  a
                                                                                              );
                                                                                })(
                                                                                    n,
                                                                                    t,
                                                                                    o
                                                                                ),
                                                                            !0
                                                                        );
                                                                    }
                                                                    throw new g(
                                                                        e.content
                                                                    );
                                                                })
                                                                .catch(n => {
                                                                    if (
                                                                        o.isDisposed ||
                                                                        n.message.startsWith(
                                                                            'Canceled'
                                                                        )
                                                                    )
                                                                        return !1;
                                                                    throw (e.executed.emit(
                                                                        {
                                                                            notebook: t,
                                                                            cell: o,
                                                                            success: !1,
                                                                            error: n,
                                                                        }
                                                                    ),
                                                                    n);
                                                                })
                                                                .then(
                                                                    n => (
                                                                        n &&
                                                                            e.executed.emit(
                                                                                {
                                                                                    notebook: t,
                                                                                    cell: o,
                                                                                    success: !0,
                                                                                }
                                                                            ),
                                                                        n
                                                                    )
                                                                )
                                                        );
                                                    }
                                                    o.model.clearExecution();
                                            }
                                            return Promise.resolve(!0);
                                        })(t, a, o)
                                    )
                                )
                                    .then(
                                        o =>
                                            !t.isDisposed &&
                                            (e.selectionExecuted.emit({
                                                notebook: t,
                                                lastCell: t.widgets[a],
                                            }),
                                            t.update(),
                                            o.every(e => e))
                                    )
                                    .catch(o => {
                                        if (
                                            !o.message.startsWith(
                                                'KernelReplyNotOK'
                                            )
                                        )
                                            throw o;
                                        return (
                                            d.map(e => {
                                                'code' === e.model.type &&
                                                    null ==
                                                        e.model
                                                            .executionCount &&
                                                    e.setPrompt('');
                                            }),
                                            e.selectionExecuted.emit({
                                                notebook: t,
                                                lastCell: t.widgets[a],
                                            }),
                                            t.update(),
                                            !1
                                        );
                                    })
                            );
                        }),
                        (e.selectedCells = function(e) {
                            return e.widgets
                                .filter(t => e.isSelectedOrActive(t))
                                .map(e => e.model.toJSON())
                                .map(
                                    e => (
                                        void 0 !== e.metadata.deletable &&
                                            delete e.metadata.deletable,
                                        e
                                    )
                                );
                        }),
                        (e.copyOrCut = function(s, l) {
                            if (!s.model || !s.activeCell) return;
                            const i = t(s),
                                d = n.Clipboard.getInstance();
                            (s.mode = 'command'), d.clear();
                            const r = e.selectedCells(s);
                            d.setData(u, r),
                                l ? a(s) : s.deselectAll(),
                                (s.lastClipboardInteraction = l
                                    ? 'cut'
                                    : 'copy'),
                                o(s, i);
                        }),
                        (e.changeCellType = function(e, t) {
                            const o = e.model,
                                n = o.cells;
                            n.beginCompoundOperation(),
                                e.widgets.forEach((s, l) => {
                                    if (e.isSelectedOrActive(s)) {
                                        if (s.model.type !== t) {
                                            const e = s.model.toJSON();
                                            let i;
                                            switch (t) {
                                                case 'code':
                                                    i = o.contentFactory.createCodeCell(
                                                        { cell: e }
                                                    );
                                                    break;
                                                case 'markdown':
                                                    (i = o.contentFactory.createMarkdownCell(
                                                        { cell: e }
                                                    )),
                                                        'code' ===
                                                            s.model.type &&
                                                            (i.trusted = !1);
                                                    break;
                                                default:
                                                    (i = o.contentFactory.createRawCell(
                                                        { cell: e }
                                                    )),
                                                        'code' ===
                                                            s.model.type &&
                                                            (i.trusted = !1);
                                            }
                                            n.set(l, i);
                                        }
                                        'markdown' === t &&
                                            ((s = e.widgets[l]).rendered = !1);
                                    }
                                }),
                                n.endCompoundOperation(),
                                e.deselectAll();
                        }),
                        (e.deleteCells = a),
                        (e.setMarkdownHeader = function(e, t) {
                            let o = e.value.text;
                            const n = Array(t + 1).join('#') + ' ',
                                s = /^(#+\s*)|^(\s*)/.exec(o);
                            s && (o = o.slice(s[0].length)),
                                (e.value.text = n + o);
                        });
                })(C || (C = {}));
            var p,
                _ = o(99729);
            !(function(e) {
                function t(e, t) {
                    const o = (t || l.nullTranslator).load('jupyterlab');
                    function s() {
                        if (e.context.model.readOnly)
                            return (0, n.showDialog)({
                                title: o.__('Cannot Save'),
                                body: o.__('Document is read-only'),
                                buttons: [
                                    n.Dialog.okButton({ label: o.__('Ok') }),
                                ],
                            });
                        e.context.save().then(() => {
                            if (!e.isDisposed)
                                return e.context.createCheckpoint();
                        });
                    }
                    return (0, n.addToolbarButtonClass)(
                        n.ReactWidget.create(
                            c.createElement(
                                n.UseSignal,
                                { signal: e.context.fileChanged },
                                () =>
                                    c.createElement(n.ToolbarButtonComponent, {
                                        icon: _.saveIcon,
                                        onClick: s,
                                        tooltip: o.__(
                                            'Save the notebook contents and create checkpoint'
                                        ),
                                        enabled: !!(
                                            e &&
                                            e.context &&
                                            e.context.contentsModel &&
                                            e.context.contentsModel.writable
                                        ),
                                    })
                            )
                        )
                    );
                }
                function o(e, t) {
                    const o = (t || l.nullTranslator).load('jupyterlab');
                    return new n.ToolbarButton({
                        icon: _.addIcon,
                        onClick: () => {
                            m.insertBelow(e.content);
                        },
                        tooltip: o.__('Insert a cell below'),
                    });
                }
                function s(e, t) {
                    const o = (t || l.nullTranslator).load('jupyterlab');
                    return new n.ToolbarButton({
                        icon: _.cutIcon,
                        onClick: () => {
                            m.cut(e.content);
                        },
                        tooltip: o.__('Cut the selected cells'),
                    });
                }
                function i(e, t) {
                    const o = (t || l.nullTranslator).load('jupyterlab');
                    return new n.ToolbarButton({
                        icon: _.copyIcon,
                        onClick: () => {
                            m.copy(e.content);
                        },
                        tooltip: o.__('Copy the selected cells'),
                    });
                }
                function a(e, t) {
                    const o = (t || l.nullTranslator).load('jupyterlab');
                    return new n.ToolbarButton({
                        icon: _.pasteIcon,
                        onClick: () => {
                            m.paste(e.content);
                        },
                        tooltip: o.__('Paste cells from the clipboard'),
                    });
                }
                function d(e, t) {
                    const o = (t || l.nullTranslator).load('jupyterlab');
                    return new n.ToolbarButton({
                        icon: _.runIcon,
                        onClick: () => {
                            m.runAndAdvance(e.content, e.sessionContext);
                        },
                        tooltip: o.__('Run the selected cells and advance'),
                    });
                }
                function r(e, t, o) {
                    const s = (o || l.nullTranslator).load('jupyterlab');
                    return new n.ToolbarButton({
                        icon: _.fastForwardIcon,
                        onClick: () => {
                            (null != t ? t : n.sessionContextDialogs)
                                .restart(e.sessionContext, o)
                                .then(
                                    t => (
                                        t &&
                                            m.runAll(
                                                e.content,
                                                e.sessionContext
                                            ),
                                        t
                                    )
                                );
                        },
                        tooltip: s.__(
                            'Restart the kernel, then re-run the whole notebook'
                        ),
                    });
                }
                function h(e, t) {
                    return new v(e.content, t);
                }
                (e.createSaveButton = t),
                    (e.createInsertButton = o),
                    (e.createCutButton = s),
                    (e.createCopyButton = i),
                    (e.createPasteButton = a),
                    (e.createRunButton = d),
                    (e.createRestartRunAllButton = r),
                    (e.createCellTypeItem = h),
                    (e.getDefaultItems = function(e, l, c) {
                        return [
                            { name: 'save', widget: t(e, c) },
                            { name: 'insert', widget: o(e, c) },
                            { name: 'cut', widget: s(e, c) },
                            { name: 'copy', widget: i(e, c) },
                            { name: 'paste', widget: a(e, c) },
                            { name: 'run', widget: d(e, c) },
                            {
                                name: 'interrupt',
                                widget: n.Toolbar.createInterruptButton(
                                    e.sessionContext,
                                    c
                                ),
                            },
                            {
                                name: 'restart',
                                widget: n.Toolbar.createRestartButton(
                                    e.sessionContext,
                                    l,
                                    c
                                ),
                            },
                            { name: 'restart-and-run', widget: r(e, l, c) },
                            { name: 'cellType', widget: h(e, c) },
                            {
                                name: 'spacer',
                                widget: n.Toolbar.createSpacerItem(),
                            },
                            {
                                name: 'kernelName',
                                widget: n.Toolbar.createKernelNameItem(
                                    e.sessionContext,
                                    l,
                                    c
                                ),
                            },
                        ];
                    });
            })(p || (p = {}));
            class v extends n.ReactWidget {
                constructor(e, t) {
                    super(),
                        (this.handleChange = e => {
                            '-' !== e.target.value &&
                                (m.changeCellType(
                                    this._notebook,
                                    e.target.value
                                ),
                                this._notebook.activate());
                        }),
                        (this.handleKeyDown = e => {
                            13 === e.keyCode && this._notebook.activate();
                        }),
                        (this._trans = (t || l.nullTranslator).load(
                            'jupyterlab'
                        )),
                        this.addClass('jp-Notebook-toolbarCellType'),
                        (this._notebook = e),
                        e.model && this.update(),
                        e.activeCellChanged.connect(this.update, this),
                        e.selectionChanged.connect(this.update, this);
                }
                render() {
                    let e = '-';
                    this._notebook.activeCell &&
                        (e = this._notebook.activeCell.model.type);
                    for (const t of this._notebook.widgets)
                        if (
                            this._notebook.isSelectedOrActive(t) &&
                            t.model.type !== e
                        ) {
                            e = '-';
                            break;
                        }
                    return c.createElement(
                        _.HTMLSelect,
                        {
                            className: 'jp-Notebook-toolbarCellTypeDropdown',
                            onChange: this.handleChange,
                            onKeyDown: this.handleKeyDown,
                            value: e,
                            'aria-label': this._trans.__('Cell type'),
                            title: this._trans.__('Select the cell type'),
                        },
                        c.createElement('option', { value: '-' }, '-'),
                        c.createElement(
                            'option',
                            { value: 'code' },
                            this._trans.__('Code')
                        ),
                        c.createElement(
                            'option',
                            { value: 'markdown' },
                            this._trans.__('Markdown')
                        ),
                        c.createElement(
                            'option',
                            { value: 'raw' },
                            this._trans.__('Raw')
                        )
                    );
                }
            }
            var f = o(44670),
                b = o(18205),
                y = o(88262);
            class k {
                constructor(e, t, o) {
                    (this._mutex = y.createMutex()),
                        (this._isDisposed = !1),
                        (this._changed = new r.Signal(this)),
                        (this._factory = t),
                        (this._cellOrder = e.createList('cellOrder')),
                        (this._cellMap = new b.ObservableMap()),
                        this._cellOrder.changed.connect(
                            this._onOrderChanged,
                            this
                        ),
                        (this.nbmodel = o),
                        this.nbmodel.changed.connect(
                            this.onSharedModelChanged,
                            this
                        ),
                        this.changed.connect(this.onModelDBChanged, this);
                }
                onModelDBChanged(e, t) {
                    this._mutex(() => {
                        const e = this.nbmodel;
                        e.transact(() => {
                            if (
                                (('set' !== t.type && 'remove' !== t.type) ||
                                    e.deleteCellRange(
                                        t.oldIndex,
                                        t.oldIndex + t.oldValues.length
                                    ),
                                'set' === t.type ||
                                    'add' === t.type ||
                                    'move' === t.type)
                            ) {
                                const o = t.newValues.map(e =>
                                    e.sharedModel.clone()
                                );
                                let n = t.newIndex;
                                'move' === t.type &&
                                    n > t.oldIndex &&
                                    (n += t.oldValues.length),
                                    e.insertCells(n, o),
                                    t.newValues.forEach((e, t) => {
                                        e.switchSharedModel(o[t], !1);
                                    });
                            }
                            if ('move' === t.type) {
                                let o = t.oldIndex;
                                o >= t.newIndex && (o += t.oldValues.length),
                                    e.deleteCellRange(
                                        o,
                                        o + t.oldValues.length
                                    );
                            }
                        });
                    });
                }
                onSharedModelChanged(e, t) {
                    this._mutex(() => {
                        var e;
                        let o = 0;
                        null === (e = t.cellsChange) ||
                            void 0 === e ||
                            e.forEach(e => {
                                if (null != e.insert) {
                                    const t = e.insert.map(e => {
                                        const t = this._factory.createCell(
                                            e.cell_type,
                                            {}
                                        );
                                        return t.switchSharedModel(e, !0), t;
                                    });
                                    this.insertAll(o, t),
                                        (o += e.insert.length);
                                } else
                                    null != e.delete
                                        ? this.removeRange(o, o + e.delete)
                                        : null != e.retain && (o += e.retain);
                            });
                    });
                }
                get changed() {
                    return this._changed;
                }
                get isDisposed() {
                    return this._isDisposed;
                }
                get isEmpty() {
                    return 0 === this._cellOrder.length;
                }
                get length() {
                    return this._cellOrder.length;
                }
                iter() {
                    const e = [];
                    for (const t of (0, i.toArray)(this._cellOrder))
                        e.push(this._cellMap.get(t));
                    return new i.ArrayIterator(e);
                }
                dispose() {
                    if (!this._isDisposed) {
                        (this._isDisposed = !0), r.Signal.clearData(this);
                        for (const e of this._cellMap.values()) e.dispose();
                        this._cellMap.dispose(), this._cellOrder.dispose();
                    }
                }
                get(e) {
                    return this._cellMap.get(this._cellOrder.get(e));
                }
                set(e, t) {
                    this._cellMap.set(t.id, t), this._cellOrder.set(e, t.id);
                }
                push(e) {
                    return (
                        this._cellMap.set(e.id, e), this._cellOrder.push(e.id)
                    );
                }
                insert(e, t) {
                    this._cellMap.set(t.id, t), this._cellOrder.insert(e, t.id);
                }
                removeValue(e) {
                    const t = i.ArrayExt.findFirstIndex(
                        (0, i.toArray)(this._cellOrder),
                        t => this._cellMap.get(t) === e
                    );
                    return this.remove(t), t;
                }
                remove(e) {
                    const t = this._cellOrder.get(e);
                    return this._cellOrder.remove(e), this._cellMap.get(t);
                }
                clear() {
                    this._cellOrder.clear();
                }
                move(e, t) {
                    this._cellOrder.move(e, t);
                }
                pushAll(e) {
                    const t = (0, i.toArray)(e);
                    return (
                        (0, i.each)(t, e => {
                            this._cellMap.set(e.id, e),
                                this._cellOrder.push(e.id);
                        }),
                        this.length
                    );
                }
                insertAll(e, t) {
                    const o = (0, i.toArray)(t);
                    return (
                        (0, i.each)(o, t => {
                            this._cellMap.set(t.id, t),
                                this._cellOrder.beginCompoundOperation(),
                                this._cellOrder.insert(e++, t.id),
                                this._cellOrder.endCompoundOperation();
                        }),
                        this.length
                    );
                }
                removeRange(e, t) {
                    return this._cellOrder.removeRange(e, t), this.length;
                }
                get canRedo() {
                    return this.nbmodel.canRedo();
                }
                get canUndo() {
                    return this.nbmodel.canUndo();
                }
                beginCompoundOperation(e) {
                    this._cellOrder.beginCompoundOperation(e);
                }
                endCompoundOperation() {
                    this._cellOrder.endCompoundOperation();
                }
                undo() {
                    this.nbmodel.undo();
                }
                redo() {
                    this.nbmodel.redo();
                }
                clearUndo() {
                    this.nbmodel.clearUndoHistory();
                }
                _onOrderChanged(e, t) {
                    ('add' !== t.type && 'set' !== t.type) ||
                        (0, i.each)(t.newValues, e => {
                            const t = this._cellMap.get(e);
                            if (null == t) {
                                let t;
                                switch (
                                    this._factory.modelDB
                                        .createValue(e + '.type')
                                        .get()
                                ) {
                                    case 'code':
                                        t = this._factory.createCodeCell({
                                            id: e,
                                        });
                                        break;
                                    case 'markdown':
                                        t = this._factory.createMarkdownCell({
                                            id: e,
                                        });
                                        break;
                                    default:
                                        t = this._factory.createRawCell({
                                            id: e,
                                        });
                                }
                                this._cellMap.set(e, t);
                            } else
                                t.sharedModel.isStandalone ||
                                    this._mutex(() => {
                                        const o = t.toJSON();
                                        let n = null;
                                        switch (o.cell_type) {
                                            case 'code':
                                                n = this._factory.createCodeCell(
                                                    { cell: o }
                                                );
                                                break;
                                            case 'markdown':
                                                n = this._factory.createMarkdownCell(
                                                    { cell: o }
                                                );
                                                break;
                                            default:
                                                n = this._factory.createRawCell(
                                                    { cell: o }
                                                );
                                        }
                                        this._cellMap.set(e, n);
                                    });
                        });
                    const o = [],
                        n = [];
                    (0, i.each)(t.newValues, e => {
                        o.push(this._cellMap.get(e));
                    }),
                        (0, i.each)(t.oldValues, e => {
                            n.push(this._cellMap.get(e));
                        }),
                        this._changed.emit({
                            type: t.type,
                            oldIndex: t.oldIndex,
                            newIndex: t.newIndex,
                            oldValues: n,
                            newValues: o,
                        });
                }
            }
            const w = ['kernelspec', 'language_info'];
            class S {
                constructor(e = {}) {
                    (this._modelDBMutex = y.createMutex()),
                        (this._readOnly = !1),
                        (this._contentChanged = new r.Signal(this)),
                        (this._stateChanged = new r.Signal(this)),
                        (this._nbformat = f.MAJOR_VERSION),
                        (this._nbformatMinor = f.MINOR_VERSION),
                        (this._isDisposed = !1),
                        e.modelDB
                            ? (this.modelDB = e.modelDB)
                            : (this.modelDB = new b.ModelDB()),
                        (this.sharedModel = y.YNotebook.create(
                            e.disableDocumentWideUndoRedo || !1
                        )),
                        (this._isInitialized = !1 !== e.isInitialized);
                    const t = e.contentFactory || S.defaultContentFactory;
                    (this.contentFactory = t.clone(this.modelDB.view('cells'))),
                        (this._cells = new k(
                            this.modelDB,
                            this.contentFactory,
                            this.sharedModel
                        )),
                        (this._trans = (e.translator || l.nullTranslator).load(
                            'jupyterlab'
                        )),
                        this._cells.changed.connect(this._onCellsChanged, this);
                    const o = this.modelDB.createMap('metadata');
                    if (!o.has('language_info')) {
                        const t = e.languagePreference || '';
                        o.set('language_info', { name: t });
                    }
                    this._ensureMetadata(),
                        o.changed.connect(this._onMetadataChanged, this),
                        (this._deletedCells = []),
                        (this.sharedModel.dirty = !1),
                        this.sharedModel.changed.connect(
                            this._onStateChanged,
                            this
                        );
                }
                get contentChanged() {
                    return this._contentChanged;
                }
                get stateChanged() {
                    return this._stateChanged;
                }
                get dirty() {
                    return this.sharedModel.dirty;
                }
                set dirty(e) {
                    e !== this.dirty && (this.sharedModel.dirty = e);
                }
                get readOnly() {
                    return this._readOnly;
                }
                set readOnly(e) {
                    if (e === this._readOnly) return;
                    const t = this._readOnly;
                    (this._readOnly = e),
                        this.triggerStateChange({
                            name: 'readOnly',
                            oldValue: t,
                            newValue: e,
                        });
                }
                get metadata() {
                    return this.modelDB.get('metadata');
                }
                get cells() {
                    return this._cells;
                }
                get nbformat() {
                    return this._nbformat;
                }
                get nbformatMinor() {
                    return this._nbformatMinor;
                }
                get defaultKernelName() {
                    const e = this.metadata.get('kernelspec');
                    return e ? e.name : '';
                }
                get deletedCells() {
                    return this._deletedCells;
                }
                get isInitialized() {
                    return this._isInitialized;
                }
                get defaultKernelLanguage() {
                    const e = this.metadata.get('language_info');
                    return e ? e.name : '';
                }
                dispose() {
                    if (this.isDisposed) return;
                    const e = this.cells;
                    (this._cells = null),
                        e.dispose(),
                        (this._isDisposed = !0),
                        this.modelDB.dispose(),
                        r.Signal.clearData(this);
                }
                toString() {
                    return JSON.stringify(this.toJSON());
                }
                fromString(e) {
                    this.fromJSON(JSON.parse(e));
                }
                toJSON() {
                    var e, t;
                    const o = [];
                    for (
                        let n = 0;
                        n <
                        (null !==
                            (t =
                                null === (e = this.cells) || void 0 === e
                                    ? void 0
                                    : e.length) && void 0 !== t
                            ? t
                            : 0);
                        n++
                    ) {
                        const e = this.cells.get(n).toJSON();
                        4 === this._nbformat &&
                            this._nbformatMinor <= 4 &&
                            delete e.id,
                            o.push(e);
                    }
                    this._ensureMetadata();
                    const n = this.sharedModel.getMetadata();
                    for (const e of this.metadata.keys())
                        n[e] = JSON.parse(JSON.stringify(this.metadata.get(e)));
                    return {
                        metadata: n,
                        nbformat_minor: this._nbformatMinor,
                        nbformat: this._nbformat,
                        cells: o,
                    };
                }
                fromJSON(e) {
                    const t = [],
                        o = this.contentFactory,
                        s = 4 === e.nbformat && e.nbformat_minor >= 5;
                    for (const n of e.cells) {
                        const e = { cell: n };
                        switch ((s && (e.id = n.id), n.cell_type)) {
                            case 'code':
                                t.push(o.createCodeCell(e));
                                break;
                            case 'markdown':
                                t.push(o.createMarkdownCell(e));
                                break;
                            case 'raw':
                                t.push(o.createRawCell(e));
                                break;
                            default:
                                continue;
                        }
                    }
                    this.cells.beginCompoundOperation(),
                        this.cells.clear(),
                        this.cells.pushAll(t),
                        this.cells.endCompoundOperation(),
                        (this.sharedModel.nbformat_minor = f.MINOR_VERSION),
                        (this.sharedModel.nbformat = f.MAJOR_VERSION);
                    const l = e.metadata.orig_nbformat;
                    if (
                        (e.nbformat !== this._nbformat &&
                            (this.sharedModel.nbformat = e.nbformat),
                        e.nbformat_minor > this._nbformatMinor &&
                            (this.sharedModel.nbformat_minor =
                                e.nbformat_minor),
                        void 0 !== l && this._nbformat !== l)
                    ) {
                        let e;
                        (e =
                            this._nbformat > l
                                ? this._trans.__(
                                      "This notebook has been converted from an older notebook format (v%1)\nto the current notebook format (v%2).\nThe next time you save this notebook, the current notebook format (v%2) will be used.\n'Older versions of Jupyter may not be able to read the new format.' To preserve the original format version,\nclose the notebook without saving it.",
                                      l,
                                      this._nbformat
                                  )
                                : this._trans.__(
                                      "This notebook has been converted from an newer notebook format (v%1)\nto the current notebook format (v%2).\nThe next time you save this notebook, the current notebook format (v%2) will be used.\nSome features of the original notebook may not be available.' To preserve the original format version,\nclose the notebook without saving it.",
                                      l,
                                      this._nbformat
                                  )),
                            (0, n.showDialog)({
                                title: this._trans.__('Notebook converted'),
                                body: e,
                                buttons: [
                                    n.Dialog.okButton({
                                        label: this._trans.__('Ok'),
                                    }),
                                ],
                            });
                    }
                    this.metadata.clear();
                    const i = e.metadata;
                    for (const e in i)
                        'orig_nbformat' !== e && this.metadata.set(e, i[e]);
                    this._ensureMetadata(), (this.dirty = !0);
                }
                initialize() {
                    if (!this.cells.length) {
                        const e = this.contentFactory;
                        this.cells.push(e.createCodeCell({}));
                    }
                    (this._isInitialized = !0), this.cells.clearUndo();
                }
                _onCellsChanged(e, t) {
                    switch (t.type) {
                        case 'add':
                        case 'set':
                            t.newValues.forEach(e => {
                                e.contentChanged.connect(
                                    this.triggerContentChange,
                                    this
                                );
                            });
                    }
                    this.triggerContentChange();
                }
                _onStateChanged(e, t) {
                    if (
                        (t.stateChange &&
                            t.stateChange.forEach(e => {
                                'nbformat' === e.name &&
                                    (this._nbformat = e.newValue),
                                    'nbformatMinor' === e.name &&
                                        (this._nbformatMinor = e.newValue),
                                    ('dirty' === e.name &&
                                        e.oldValue === e.newValue) ||
                                        this.triggerStateChange(e);
                            }),
                        t.metadataChange)
                    ) {
                        const e = t.metadataChange.newValue;
                        this._modelDBMutex(() => {
                            w.forEach(t => {
                                const o = this.metadata.get(t);
                                o && (e[t] = o);
                            }),
                                this.metadata.clear(),
                                Object.entries(e).forEach(([e, t]) => {
                                    this.metadata.set(e, t);
                                });
                        });
                    }
                }
                _onMetadataChanged(e, t) {
                    this._modelDBMutex(() => {
                        const t = e.toJSON();
                        w.forEach(e => delete t[e]),
                            this.sharedModel.setMetadata(t);
                    }),
                        this.triggerContentChange();
                }
                _ensureMetadata() {
                    const e = this.metadata;
                    e.has('language_info') ||
                        e.set('language_info', { name: '' }),
                        e.has('kernelspec') ||
                            e.set('kernelspec', { name: '', display_name: '' });
                }
                triggerStateChange(e) {
                    this._stateChanged.emit(e);
                }
                triggerContentChange() {
                    this._contentChanged.emit(void 0), (this.dirty = !0);
                }
                get isDisposed() {
                    return this._isDisposed;
                }
            }
            !(function(e) {
                class t {
                    constructor(e) {
                        (this.codeCellContentFactory =
                            e.codeCellContentFactory ||
                            s.CodeCellModel.defaultContentFactory),
                            (this.modelDB = e.modelDB);
                    }
                    createCell(e, t) {
                        switch (e) {
                            case 'code':
                                return this.createCodeCell(t);
                            case 'markdown':
                                return this.createMarkdownCell(t);
                            default:
                                return this.createRawCell(t);
                        }
                    }
                    createCodeCell(e) {
                        return (
                            e.contentFactory &&
                                (e.contentFactory = this.codeCellContentFactory),
                            this.modelDB &&
                                (e.id || (e.id = a.UUID.uuid4()),
                                (e.modelDB = this.modelDB.view(e.id))),
                            new s.CodeCellModel(e)
                        );
                    }
                    createMarkdownCell(e) {
                        return (
                            this.modelDB &&
                                (e.id || (e.id = a.UUID.uuid4()),
                                (e.modelDB = this.modelDB.view(e.id))),
                            new s.MarkdownCellModel(e)
                        );
                    }
                    createRawCell(e) {
                        return (
                            this.modelDB &&
                                (e.id || (e.id = a.UUID.uuid4()),
                                (e.modelDB = this.modelDB.view(e.id))),
                            new s.RawCellModel(e)
                        );
                    }
                    clone(e) {
                        return new t({
                            modelDB: e,
                            codeCellContentFactory: this.codeCellContentFactory,
                        });
                    }
                }
                (e.ContentFactory = t), (e.defaultContentFactory = new t({}));
            })(S || (S = {}));
            class x {
                constructor(e) {
                    (this._disposed = !1),
                        (this._disableDocumentWideUndoRedo =
                            e.disableDocumentWideUndoRedo || !1);
                    const t = e.codeCellContentFactory;
                    this.contentFactory =
                        e.contentFactory ||
                        new S.ContentFactory({ codeCellContentFactory: t });
                }
                set disableDocumentWideUndoRedo(e) {
                    this._disableDocumentWideUndoRedo = e;
                }
                get name() {
                    return 'notebook';
                }
                get contentType() {
                    return 'notebook';
                }
                get fileFormat() {
                    return 'json';
                }
                get isDisposed() {
                    return this._disposed;
                }
                dispose() {
                    this._disposed = !0;
                }
                createNew(e, t, o) {
                    const n = this.contentFactory;
                    return new S({
                        languagePreference: e,
                        contentFactory: n,
                        modelDB: t,
                        isInitialized: o,
                        disableDocumentWideUndoRedo: this
                            ._disableDocumentWideUndoRedo,
                    });
                }
                preferredLanguage(e) {
                    return '';
                }
            }
            var M = o(89934);
            function O(e) {
                const t = (e.translator || l.nullTranslator).load('jupyterlab');
                return c.createElement(M.TextItem, {
                    source: t.__('Mode: %1', e.modeNames[e.notebookMode]),
                });
            }
            class I extends n.VDomRenderer {
                constructor(e) {
                    super(new I.Model()),
                        (this.translator = e || l.nullTranslator),
                        (this._trans = this.translator.load('jupyterlab')),
                        (this._modeNames = {
                            command: this._trans.__('Command'),
                            edit: this._trans.__('Edit'),
                        });
                }
                render() {
                    return this.model
                        ? ((this.node.title = this._trans.__(
                              'Notebook is in %1 mode',
                              this._modeNames[this.model.notebookMode]
                          )),
                          c.createElement(O, {
                              notebookMode: this.model.notebookMode,
                              translator: this.translator,
                              modeNames: this._modeNames,
                          }))
                        : null;
                }
            }
            !(function(e) {
                class t extends n.VDomModel {
                    constructor() {
                        super(...arguments),
                            (this._onChanged = e => {
                                const t = this._notebookMode;
                                this._notebook
                                    ? (this._notebookMode = e.mode)
                                    : (this._notebookMode = 'command'),
                                    this._triggerChange(t, this._notebookMode);
                            }),
                            (this._notebookMode = 'command'),
                            (this._notebook = null);
                    }
                    get notebookMode() {
                        return this._notebookMode;
                    }
                    set notebook(e) {
                        const t = this._notebook;
                        null !== t &&
                            (t.stateChanged.disconnect(this._onChanged, this),
                            t.activeCellChanged.disconnect(
                                this._onChanged,
                                this
                            ),
                            t.modelContentChanged.disconnect(
                                this._onChanged,
                                this
                            ));
                        const o = this._notebookMode;
                        (this._notebook = e),
                            null === this._notebook
                                ? (this._notebookMode = 'command')
                                : ((this._notebookMode = this._notebook.mode),
                                  this._notebook.stateChanged.connect(
                                      this._onChanged,
                                      this
                                  ),
                                  this._notebook.activeCellChanged.connect(
                                      this._onChanged,
                                      this
                                  ),
                                  this._notebook.modelContentChanged.connect(
                                      this._onChanged,
                                      this
                                  )),
                            this._triggerChange(o, this._notebookMode);
                    }
                    _triggerChange(e, t) {
                        e !== t && this.stateChanged.emit(void 0);
                    }
                }
                e.Model = t;
            })(I || (I = {}));
            var E,
                T = o(51972),
                A = o(14064),
                N = o(93383),
                D = o(86098);
            class R extends D.Widget {
                constructor() {
                    super(),
                        (this._items = []),
                        (this.layout = new D.PanelLayout()),
                        this.addClass('jp-RankedPanel');
                }
                addWidget(e, t) {
                    const o = { widget: e, rank: t },
                        n = i.ArrayExt.upperBound(this._items, o, E.itemCmp);
                    i.ArrayExt.insert(this._items, n, o),
                        this.layout.insertWidget(n, e);
                }
                onChildRemoved(e) {
                    const t = i.ArrayExt.findFirstIndex(
                        this._items,
                        t => t.widget === e.child
                    );
                    -1 !== t && i.ArrayExt.removeAt(this._items, t);
                }
            }
            class P extends D.Widget {
                constructor(e) {
                    super(),
                        this.addClass('jp-NotebookTools'),
                        (this.translator = e.translator || l.nullTranslator),
                        (this._trans = this.translator.load('jupyterlab')),
                        (this._commonTools = new R()),
                        (this._advancedTools = new R()),
                        (this._advancedTools.title.label = this._trans.__(
                            'Advanced Tools'
                        ));
                    const t = (this.layout = new D.PanelLayout());
                    t.addWidget(this._commonTools),
                        t.addWidget(
                            new n.Collapse({ widget: this._advancedTools })
                        ),
                        (this._tracker = e.tracker),
                        this._tracker.currentChanged.connect(
                            this._onActiveNotebookPanelChanged,
                            this
                        ),
                        this._tracker.activeCellChanged.connect(
                            this._onActiveCellChanged,
                            this
                        ),
                        this._tracker.selectionChanged.connect(
                            this._onSelectionChanged,
                            this
                        ),
                        this._onActiveNotebookPanelChanged(),
                        this._onActiveCellChanged(),
                        this._onSelectionChanged();
                }
                get activeCell() {
                    return this._tracker.activeCell;
                }
                get selectedCells() {
                    const e = this._tracker.currentWidget;
                    if (!e) return [];
                    const t = e.content;
                    return t.widgets.filter(e => t.isSelectedOrActive(e));
                }
                get activeNotebookPanel() {
                    return this._tracker.currentWidget;
                }
                addItem(e) {
                    var t;
                    const o = e.tool,
                        n = null !== (t = e.rank) && void 0 !== t ? t : 100;
                    let s;
                    (s =
                        'advanced' === e.section
                            ? this._advancedTools
                            : this._commonTools),
                        o.addClass('jp-NotebookTools-tool'),
                        s.addWidget(o, n),
                        (o.notebookTools = this),
                        A.MessageLoop.sendMessage(
                            o,
                            P.ActiveNotebookPanelMessage
                        ),
                        A.MessageLoop.sendMessage(o, P.ActiveCellMessage);
                }
                _onActiveNotebookPanelChanged() {
                    this._prevActiveNotebookModel &&
                        !this._prevActiveNotebookModel.isDisposed &&
                        this._prevActiveNotebookModel.metadata.changed.disconnect(
                            this._onActiveNotebookPanelMetadataChanged,
                            this
                        );
                    const e =
                        this.activeNotebookPanel &&
                        this.activeNotebookPanel.content
                            ? this.activeNotebookPanel.content.model
                            : null;
                    (this._prevActiveNotebookModel = e),
                        e &&
                            e.metadata.changed.connect(
                                this._onActiveNotebookPanelMetadataChanged,
                                this
                            ),
                        (0, i.each)(this._toolChildren(), e => {
                            A.MessageLoop.sendMessage(
                                e,
                                P.ActiveNotebookPanelMessage
                            );
                        });
                }
                _onActiveCellChanged() {
                    this._prevActiveCell &&
                        !this._prevActiveCell.isDisposed &&
                        this._prevActiveCell.metadata.changed.disconnect(
                            this._onActiveCellMetadataChanged,
                            this
                        );
                    const e = this.activeCell ? this.activeCell.model : null;
                    (this._prevActiveCell = e),
                        e &&
                            e.metadata.changed.connect(
                                this._onActiveCellMetadataChanged,
                                this
                            ),
                        (0, i.each)(this._toolChildren(), e => {
                            A.MessageLoop.sendMessage(e, P.ActiveCellMessage);
                        });
                }
                _onSelectionChanged() {
                    (0, i.each)(this._toolChildren(), e => {
                        A.MessageLoop.sendMessage(e, P.SelectionMessage);
                    });
                }
                _onActiveNotebookPanelMetadataChanged(e, t) {
                    const o = new b.ObservableJSON.ChangeMessage(
                        'activenotebookpanel-metadata-changed',
                        t
                    );
                    (0, i.each)(this._toolChildren(), e => {
                        A.MessageLoop.sendMessage(e, o);
                    });
                }
                _onActiveCellMetadataChanged(e, t) {
                    const o = new b.ObservableJSON.ChangeMessage(
                        'activecell-metadata-changed',
                        t
                    );
                    (0, i.each)(this._toolChildren(), e => {
                        A.MessageLoop.sendMessage(e, o);
                    });
                }
                _toolChildren() {
                    return (0, i.chain)(
                        this._commonTools.children(),
                        this._advancedTools.children()
                    );
                }
            }
            !(function(e) {
                (e.ActiveNotebookPanelMessage = new A.ConflatableMessage(
                    'activenotebookpanel-changed'
                )),
                    (e.ActiveCellMessage = new A.ConflatableMessage(
                        'activecell-changed'
                    )),
                    (e.SelectionMessage = new A.ConflatableMessage(
                        'selection-changed'
                    ));
                class t extends D.Widget {
                    dispose() {
                        super.dispose(),
                            this.notebookTools && (this.notebookTools = null);
                    }
                    processMessage(e) {
                        switch ((super.processMessage(e), e.type)) {
                            case 'activenotebookpanel-changed':
                                this.onActiveNotebookPanelChanged(e);
                                break;
                            case 'activecell-changed':
                                this.onActiveCellChanged(e);
                                break;
                            case 'selection-changed':
                                this.onSelectionChanged(e);
                                break;
                            case 'activecell-metadata-changed':
                                this.onActiveCellMetadataChanged(e);
                                break;
                            case 'activenotebookpanel-metadata-changed':
                                this.onActiveNotebookPanelMetadataChanged(e);
                        }
                    }
                    onActiveNotebookPanelChanged(e) {}
                    onActiveCellChanged(e) {}
                    onSelectionChanged(e) {}
                    onActiveCellMetadataChanged(e) {}
                    onActiveNotebookPanelMetadataChanged(e) {}
                }
                (e.Tool = t),
                    (e.ActiveCellTool = class extends t {
                        constructor() {
                            super(),
                                (this._model = new T.CodeEditor.Model()),
                                this.addClass('jp-ActiveCellTool'),
                                this.addClass('jp-InputArea'),
                                (this.layout = new D.PanelLayout());
                        }
                        dispose() {
                            null !== this._model &&
                                (this._model.dispose(),
                                (this._model = null),
                                super.dispose());
                        }
                        onActiveCellChanged() {
                            const e = this.notebookTools.activeCell,
                                t = this.layout,
                                o = t.widgets.length;
                            for (let e = 0; e < o; e++) t.widgets[0].dispose();
                            if (
                                (this._cellModel &&
                                    !this._cellModel.isDisposed &&
                                    (this._cellModel.value.changed.disconnect(
                                        this._onValueChanged,
                                        this
                                    ),
                                    this._cellModel.mimeTypeChanged.disconnect(
                                        this._onMimeTypeChanged,
                                        this
                                    )),
                                !e)
                            ) {
                                const e = new D.Widget();
                                return (
                                    e.addClass('jp-InputArea-editor'),
                                    e.addClass('jp-InputArea-editor'),
                                    t.addWidget(e),
                                    void (this._cellModel = null)
                                );
                            }
                            const n = e.promptNode
                                    ? e.promptNode.cloneNode(!0)
                                    : void 0,
                                s = new D.Widget({ node: n }),
                                l = e.contentFactory.editorFactory,
                                i = (this._cellModel = e.model);
                            i.value.changed.connect(this._onValueChanged, this),
                                i.mimeTypeChanged.connect(
                                    this._onMimeTypeChanged,
                                    this
                                ),
                                (this._model.value.text = i.value.text.split(
                                    '\n'
                                )[0]),
                                (this._model.mimeType = i.mimeType);
                            const a = this._model,
                                d = new T.CodeEditorWrapper({
                                    model: a,
                                    factory: l,
                                });
                            d.addClass('jp-InputArea-editor'),
                                d.addClass('jp-InputArea-editor'),
                                d.editor.setOption('readOnly', !0),
                                t.addWidget(s),
                                t.addWidget(d);
                        }
                        onActiveNotebookPanelChanged(e) {
                            this.notebookTools.activeNotebookPanel ||
                                this.onActiveCellChanged();
                        }
                        _onValueChanged() {
                            this._model.value.text = this._cellModel.value.text.split(
                                '\n'
                            )[0];
                        }
                        _onMimeTypeChanged() {
                            this._model.mimeType = this._cellModel.mimeType;
                        }
                    });
                class o extends t {
                    constructor(e) {
                        super();
                        const { editorFactory: t } = e;
                        this.addClass('jp-MetadataEditorTool');
                        const o = (this.layout = new D.PanelLayout());
                        (this._editorFactory = t),
                            (this._editorLabel = e.label || 'Edit Metadata'),
                            this.createEditor();
                        const n = new D.Widget({
                            node: document.createElement('label'),
                        });
                        (n.node.textContent = e.label || 'Edit Metadata'),
                            o.addWidget(n),
                            o.addWidget(this.editor);
                    }
                    get editor() {
                        return this._editor;
                    }
                    onActiveNotebookPanelChanged(e) {
                        this.editor.dispose(),
                            this.notebookTools.activeNotebookPanel &&
                                this.createEditor();
                    }
                    createEditor() {
                        (this._editor = new T.JSONEditor({
                            editorFactory: this._editorFactory,
                        })),
                            (this.editor.title.label = this._editorLabel),
                            this.layout.addWidget(this.editor);
                    }
                }
                (e.MetadataEditorTool = o),
                    (e.NotebookMetadataEditorTool = class extends o {
                        constructor(e) {
                            const t = (e.translator || l.nullTranslator).load(
                                'jupyterlab'
                            );
                            (e.label = e.label || t.__('Notebook Metadata')),
                                super(e);
                        }
                        onActiveNotebookPanelChanged(e) {
                            super.onActiveNotebookPanelChanged(e),
                                this._update();
                        }
                        onActiveNotebookPanelMetadataChanged(e) {
                            this._update();
                        }
                        _update() {
                            var e, t;
                            const o =
                                this.notebookTools.activeNotebookPanel &&
                                this.notebookTools.activeNotebookPanel.content;
                            this.editor.source =
                                null !==
                                    (t =
                                        null ===
                                            (e =
                                                null == o ? void 0 : o.model) ||
                                        void 0 === e
                                            ? void 0
                                            : e.metadata) && void 0 !== t
                                    ? t
                                    : null;
                        }
                    }),
                    (e.CellMetadataEditorTool = class extends o {
                        constructor(e) {
                            const t = (e.translator || l.nullTranslator).load(
                                'jupyterlab'
                            );
                            (e.label = e.label || t.__('Cell Metadata')),
                                super(e);
                        }
                        onActiveCellChanged(e) {
                            this.editor.dispose(),
                                this.notebookTools.activeCell &&
                                    this.createEditor(),
                                this._update();
                        }
                        onActiveCellMetadataChanged(e) {
                            this._update();
                        }
                        _update() {
                            const e = this.notebookTools.activeCell;
                            this.editor.source = e ? e.model.metadata : null;
                        }
                    });
                class n extends t {
                    constructor(e) {
                        super({ node: E.createSelectorNode(e) }),
                            (this._getValue = e => {
                                let t = e.model.metadata.get(this.key);
                                return void 0 === t && (t = this._default), t;
                            }),
                            (this._setValue = (e, t) => {
                                t === this._default
                                    ? e.model.metadata.delete(this.key)
                                    : e.model.metadata.set(this.key, t);
                            }),
                            (this._changeGuard = !1),
                            this.addClass('jp-KeySelector'),
                            (this.key = e.key),
                            (this._default = e.default),
                            (this._validCellTypes = e.validCellTypes || []),
                            (this._getter = e.getter || this._getValue),
                            (this._setter = e.setter || this._setValue);
                    }
                    get selectNode() {
                        return this.node.getElementsByTagName('select')[0];
                    }
                    handleEvent(e) {
                        'change' === e.type && this.onValueChanged();
                    }
                    onAfterAttach(e) {
                        this.selectNode.addEventListener('change', this);
                    }
                    onBeforeDetach(e) {
                        this.selectNode.removeEventListener('change', this);
                    }
                    onActiveCellChanged(e) {
                        const t = this.selectNode,
                            o = this.notebookTools.activeCell;
                        if (!o) return (t.disabled = !0), void (t.value = '');
                        const n = o.model.type;
                        if (
                            this._validCellTypes.length &&
                            -1 === this._validCellTypes.indexOf(n)
                        )
                            return (t.value = ''), void (t.disabled = !0);
                        (t.disabled = !1), (this._changeGuard = !0);
                        const s = this._getter;
                        (t.value = JSON.stringify(s(o))),
                            (this._changeGuard = !1);
                    }
                    onActiveCellMetadataChanged(e) {
                        if (this._changeGuard) return;
                        const t = this.selectNode,
                            o = this.notebookTools.activeCell;
                        if (e.args.key === this.key && o) {
                            this._changeGuard = !0;
                            const e = this._getter;
                            (t.value = JSON.stringify(e(o))),
                                (this._changeGuard = !1);
                        }
                    }
                    onValueChanged() {
                        const e = this.notebookTools.activeCell;
                        if (!e || this._changeGuard) return;
                        this._changeGuard = !0;
                        const t = this.selectNode;
                        (0, this._setter)(e, JSON.parse(t.value)),
                            (this._changeGuard = !1);
                    }
                }
                (e.KeySelector = n),
                    (e.createSlideShowSelector = function(e) {
                        const t = (e = e || l.nullTranslator).load(
                            'jupyterlab'
                        );
                        t.__('');
                        const o = {
                            key: 'slideshow',
                            title: t.__('Slide Type'),
                            optionValueArray: [
                                ['-', null],
                                [t.__('Slide'), 'slide'],
                                [t.__('Sub-Slide'), 'subslide'],
                                [t.__('Fragment'), 'fragment'],
                                [t.__('Skip'), 'skip'],
                                [t.__('Notes'), 'notes'],
                            ],
                            getter: e => {
                                const t = e.model.metadata.get('slideshow');
                                return t && t.slide_type;
                            },
                            setter: (e, t) => {
                                let o =
                                    e.model.metadata.get('slideshow') ||
                                    Object.create(null);
                                null === t
                                    ? ((o = Object.assign({}, o)),
                                      delete o.slide_type)
                                    : (o = Object.assign(Object.assign({}, o), {
                                          slide_type: t,
                                      })),
                                    Object.keys(o).length > 0
                                        ? e.model.metadata.set('slideshow', o)
                                        : e.model.metadata.delete('slideshow');
                            },
                        };
                        return new n(o);
                    }),
                    (e.createNBConvertSelector = function(e, t) {
                        const o = (t = t || l.nullTranslator).load(
                            'jupyterlab'
                        );
                        return new n({
                            key: 'raw_mimetype',
                            title: o.__('Raw NBConvert Format'),
                            optionValueArray: e,
                            validCellTypes: ['raw'],
                        });
                    });
            })(P || (P = {})),
                (function(e) {
                    (e.itemCmp = function(e, t) {
                        return e.rank - t.rank;
                    }),
                        (e.createSelectorNode = function(e) {
                            const t = e.key,
                                o =
                                    e.title ||
                                    t[0].toLocaleUpperCase() + t.slice(1),
                                s = [];
                            let l, a;
                            (0, i.each)(e.optionValueArray, e => {
                                (a = e[0]),
                                    (l = JSON.stringify(e[1])),
                                    s.push(N.h.option({ value: l }, a));
                            });
                            const d = N.VirtualDOM.realize(
                                N.h.div({}, N.h.label(o, N.h.select({}, s)))
                            );
                            return n.Styling.styleNode(d), d;
                        });
                })(E || (E = {}));
            var F = o(96801),
                B = o(87442),
                L = o(18418),
                j = o(89116);
            const V = 'jp-Notebook-cell',
                W = 'jp-mod-editMode',
                H = 'jp-mod-commandMode',
                U = 'jp-mod-active',
                J = 'jp-mod-selected',
                z = 'jp-mod-multiSelected',
                K = 'jp-mod-dropTarget',
                $ = 'jp-mod-dropSource',
                q = 'jp-dragImage',
                G = 'jp-dragImage-singlePrompt',
                Y = 'jp-dragImage-content',
                X = 'jp-dragImage-prompt',
                Q = 'jp-dragImage-multipleBack',
                Z = 'application/vnd.jupyter.cells',
                ee = 'jp-mod-sideBySide';
            void 0 === window.requestIdleCallback &&
                ((window.requestIdleCallback = function(e) {
                    let t = Date.now();
                    return setTimeout(function() {
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - t));
                            },
                        });
                    }, 1);
                }),
                (window.cancelIdleCallback = function(e) {
                    clearTimeout(e);
                }));
            class te extends D.Widget {
                constructor(e) {
                    var t, o;
                    super(),
                        (this._editorConfig = te.defaultEditorConfig),
                        (this._notebookConfig = te.defaultNotebookConfig),
                        (this._mimetype = 'text/plain'),
                        (this._model = null),
                        (this._modelChanged = new r.Signal(this)),
                        (this._modelContentChanged = new r.Signal(this)),
                        (this._fullyRendered = new r.Signal(this)),
                        (this._placeholderCellRendered = new r.Signal(this)),
                        (this._renderedCellsCount = 0),
                        (this._renderingLayoutChanged = new r.Signal(this)),
                        this.addClass('jp-Notebook'),
                        (this.node.dataset.jpKernelUser = 'true'),
                        (this.node.dataset.jpUndoer = 'true'),
                        (this.node.dataset.jpCodeRunner = 'true'),
                        (this.rendermime = e.rendermime),
                        (this.translator =
                            null !== (t = e.translator) && void 0 !== t
                                ? t
                                : l.nullTranslator),
                        (this.layout = new ne.NotebookPanelLayout()),
                        (this.contentFactory =
                            e.contentFactory || te.defaultContentFactory),
                        (this.editorConfig =
                            e.editorConfig || te.defaultEditorConfig),
                        (this.notebookConfig =
                            e.notebookConfig || te.defaultNotebookConfig),
                        (this._mimetypeService = e.mimeTypeService),
                        (this.renderingLayout =
                            null === (o = e.notebookConfig) || void 0 === o
                                ? void 0
                                : o.renderingLayout),
                        (this._idleCallBack = null),
                        (this._toRenderMap = new Map()),
                        'IntersectionObserver' in window &&
                            (this._observer = new IntersectionObserver(
                                (e, t) => {
                                    e.forEach(e => {
                                        if (e.isIntersecting) {
                                            t.unobserve(e.target);
                                            const o = this._toRenderMap.get(
                                                e.target.id
                                            );
                                            if (o) {
                                                const { cell: e, index: t } = o;
                                                this._renderPlaceholderCell(
                                                    e,
                                                    t
                                                );
                                            }
                                        }
                                    });
                                },
                                {
                                    root: this.node,
                                    threshold: 1,
                                    rootMargin: `${this.notebookConfig.observedTopMargin} 0px ${this.notebookConfig.observedBottomMargin} 0px`,
                                }
                            ));
                }
                get fullyRendered() {
                    return this._fullyRendered;
                }
                get placeholderCellRendered() {
                    return this._placeholderCellRendered;
                }
                get modelChanged() {
                    return this._modelChanged;
                }
                get modelContentChanged() {
                    return this._modelContentChanged;
                }
                get renderingLayoutChanged() {
                    return this._renderingLayoutChanged;
                }
                get model() {
                    return this._model;
                }
                set model(e) {
                    if (((e = e || null), this._model === e)) return;
                    const t = this._model;
                    (this._model = e),
                        t &&
                            t.modelDB.isCollaborative &&
                            t.modelDB.connected.then(() => {
                                t.modelDB.collaborators.changed.disconnect(
                                    this._onCollaboratorsChanged,
                                    this
                                );
                            }),
                        e &&
                            e.modelDB.isCollaborative &&
                            e.modelDB.connected.then(() => {
                                e.modelDB.collaborators.changed.connect(
                                    this._onCollaboratorsChanged,
                                    this
                                );
                            }),
                        this._onModelChanged(t, e),
                        this.onModelChanged(t, e),
                        this._modelChanged.emit(void 0);
                }
                get codeMimetype() {
                    return this._mimetype;
                }
                get widgets() {
                    return this.layout.widgets;
                }
                get editorConfig() {
                    return this._editorConfig;
                }
                set editorConfig(e) {
                    (this._editorConfig = e), this._updateEditorConfig();
                }
                get notebookConfig() {
                    return this._notebookConfig;
                }
                set notebookConfig(e) {
                    (this._notebookConfig = e), this._updateNotebookConfig();
                }
                get renderingLayout() {
                    return this._renderingLayout;
                }
                set renderingLayout(e) {
                    var t;
                    (this._renderingLayout = e),
                        'side-by-side' === this._renderingLayout
                            ? this.node.classList.add(ee)
                            : this.node.classList.remove(ee),
                        this._renderingLayoutChanged.emit(
                            null !== (t = this._renderingLayout) && void 0 !== t
                                ? t
                                : 'default'
                        );
                }
                dispose() {
                    this.isDisposed || ((this._model = null), super.dispose());
                }
                onModelChanged(e, t) {}
                onModelContentChanged(e, t) {
                    this._modelContentChanged.emit(void 0);
                }
                onMetadataChanged(e, t) {
                    'language_info' === t.key && this._updateMimetype();
                }
                onCellInserted(e, t) {}
                onCellMoved(e, t) {}
                onCellRemoved(e, t) {}
                _onModelChanged(e, t) {
                    const o = this.layout;
                    if (e)
                        for (
                            e.cells.changed.disconnect(
                                this._onCellsChanged,
                                this
                            ),
                                e.metadata.changed.disconnect(
                                    this.onMetadataChanged,
                                    this
                                ),
                                e.contentChanged.disconnect(
                                    this.onModelContentChanged,
                                    this
                                );
                            o.widgets.length;

                        )
                            this._removeCell(0);
                    if (!t) return void (this._mimetype = 'text/plain');
                    this._updateMimetype();
                    const n = t.cells;
                    !n.length &&
                        t.isInitialized &&
                        n.push(
                            t.contentFactory.createCell(
                                this.notebookConfig.defaultCell,
                                {}
                            )
                        ),
                        (0, i.each)(n, (e, t) => {
                            this._insertCell(t, e, 'set');
                        }),
                        n.changed.connect(this._onCellsChanged, this),
                        t.contentChanged.connect(
                            this.onModelContentChanged,
                            this
                        ),
                        t.metadata.changed.connect(
                            this.onMetadataChanged,
                            this
                        );
                }
                _onCellsChanged(e, t) {
                    let o = 0;
                    switch (t.type) {
                        case 'add':
                            o = t.newIndex;
                            const n = -1 == t.oldIndex ? 'push' : 'insert';
                            (0, i.each)(t.newValues, e => {
                                this._insertCell(o++, e, n);
                            });
                            break;
                        case 'move':
                            this._moveCell(t.oldIndex, t.newIndex);
                            break;
                        case 'remove':
                            if (
                                ((0, i.each)(t.oldValues, e => {
                                    this._removeCell(t.oldIndex);
                                }),
                                !e.length)
                            ) {
                                const e = this.model;
                                requestAnimationFrame(() => {
                                    !e ||
                                        e.isDisposed ||
                                        e.cells.length ||
                                        e.cells.push(
                                            e.contentFactory.createCell(
                                                this.notebookConfig.defaultCell,
                                                {}
                                            )
                                        );
                                });
                            }
                            break;
                        case 'set':
                            (o = t.newIndex),
                                (0, i.each)(t.newValues, e => {
                                    this._insertCell(o, e, 'set'),
                                        this._removeCell(o + 1),
                                        o++;
                                });
                            break;
                        default:
                            return;
                    }
                }
                _insertCell(e, t, o) {
                    let n;
                    switch (t.type) {
                        case 'code':
                            (n = this._createCodeCell(t)),
                                (n.model.mimeType = this._mimetype);
                            break;
                        case 'markdown':
                            (n = this._createMarkdownCell(t)),
                                '' === t.value.text && (n.rendered = !1);
                            break;
                        default:
                            n = this._createRawCell(t);
                    }
                    n.addClass(V);
                    const s = this.layout;
                    if (
                        this._observer &&
                        'push' === o &&
                        this._renderedCellsCount >=
                            this.notebookConfig.numberCellsToRenderDirectly &&
                        'markdown' !== t.type
                    ) {
                        this._toRenderMap.set(n.model.id, {
                            index: e,
                            cell: n,
                        });
                        const o = this._createPlaceholderCell(t, e);
                        (o.node.id = n.model.id),
                            s.insertWidget(e, o),
                            this.onCellInserted(e, o),
                            this._fullyRendered.emit(!1),
                            this._observer.observe(o.node);
                    } else
                        s.insertWidget(e, n),
                            this.onCellInserted(e, n),
                            this._incrementRenderedCount();
                    this._scheduleCellRenderOnIdle();
                }
                _scheduleCellRenderOnIdle() {
                    if (
                        this._observer &&
                        this.notebookConfig.renderCellOnIdle &&
                        !this.isDisposed &&
                        !this._idleCallBack
                    ) {
                        const e = this._renderPlaceholderCells.bind(this);
                        this._idleCallBack = window.requestIdleCallback(e, {
                            timeout: 3e3,
                        });
                    }
                }
                _renderPlaceholderCells(e) {
                    var t, o;
                    if (
                        this.notebookConfig.remainingTimeBeforeRescheduling > 0
                    ) {
                        const t = e.timeRemaining();
                        (e.didTimeout ||
                            t <
                                this.notebookConfig
                                    .remainingTimeBeforeRescheduling) &&
                            (this._idleCallBack &&
                                (window.cancelIdleCallback(this._idleCallBack),
                                (this._idleCallBack = null)),
                            this._scheduleCellRenderOnIdle());
                    }
                    if (
                        this._renderedCellsCount <
                            (null !==
                                (o =
                                    null === (t = this.model) || void 0 === t
                                        ? void 0
                                        : t.cells.length) && void 0 !== o
                                ? o
                                : 0) &&
                        this._renderedCellsCount >=
                            this.notebookConfig.numberCellsToRenderDirectly
                    ) {
                        const e = this._toRenderMap.entries().next();
                        this._renderPlaceholderCell(
                            e.value[1].cell,
                            e.value[1].index
                        );
                    }
                }
                _renderPlaceholderCell(e, t) {
                    if (!this.layout) return;
                    const o = this.layout;
                    o.removeWidgetAt(t),
                        o.insertWidget(t, e),
                        this._toRenderMap.delete(e.model.id),
                        this._incrementRenderedCount(),
                        this.onCellInserted(t, e),
                        this._placeholderCellRendered.emit(e);
                }
                _createCodeCell(e) {
                    const t = this.rendermime,
                        o = this.contentFactory,
                        n = {
                            editorConfig: this.editorConfig.code,
                            model: e,
                            rendermime: t,
                            contentFactory: o,
                            updateEditorOnShow: !1,
                            placeholder: !1,
                            maxNumberOutputs: this.notebookConfig
                                .maxNumberOutputs,
                        },
                        s = this.contentFactory.createCodeCell(n, this);
                    return (
                        (s.syncCollapse = !0),
                        (s.syncEditable = !0),
                        (s.syncScrolled = !0),
                        s
                    );
                }
                _createMarkdownCell(e) {
                    const t = this.rendermime,
                        o = this.contentFactory,
                        n = {
                            editorConfig: this.editorConfig.markdown,
                            model: e,
                            rendermime: t,
                            contentFactory: o,
                            updateEditorOnShow: !1,
                            placeholder: !1,
                            showEditorForReadOnlyMarkdown: this._notebookConfig
                                .showEditorForReadOnlyMarkdown,
                        },
                        s = this.contentFactory.createMarkdownCell(n, this);
                    return (
                        (s.syncCollapse = !0),
                        (s.syncEditable = !0),
                        s.toggleCollapsedSignal.connect((e, t) => {
                            m.setHeadingCollapse(e, t, this);
                        }),
                        s
                    );
                }
                _createPlaceholderCell(e, t) {
                    const o = this.contentFactory,
                        n = {
                            editorConfig: this.editorConfig.raw,
                            model: e,
                            contentFactory: o,
                            updateEditorOnShow: !1,
                            placeholder: !0,
                        },
                        s = this.contentFactory.createRawCell(n, this);
                    return (
                        (s.node.innerHTML =
                            '\n      <div class="jp-Cell-Placeholder">\n        <div class="jp-Cell-Placeholder-wrapper">\n        </div>\n      </div>'),
                        (s.inputHidden = !0),
                        (s.syncCollapse = !0),
                        (s.syncEditable = !0),
                        s
                    );
                }
                _createRawCell(e) {
                    const t = this.contentFactory,
                        o = {
                            editorConfig: this.editorConfig.raw,
                            model: e,
                            contentFactory: t,
                            updateEditorOnShow: !1,
                            placeholder: !1,
                        },
                        n = this.contentFactory.createRawCell(o, this);
                    return (n.syncCollapse = !0), (n.syncEditable = !0), n;
                }
                _moveCell(e, t) {
                    const o = this.layout;
                    o.insertWidget(t, o.widgets[e]), this.onCellMoved(e, t);
                }
                _removeCell(e) {
                    const t = this.layout.widgets[e];
                    (t.parent = null), this.onCellRemoved(e, t), t.dispose();
                }
                _updateMimetype() {
                    var e;
                    const t =
                        null === (e = this._model) || void 0 === e
                            ? void 0
                            : e.metadata.get('language_info');
                    t &&
                        ((this._mimetype = this._mimetypeService.getMimeTypeByLanguage(
                            t
                        )),
                        (0, i.each)(this.widgets, e => {
                            'code' === e.model.type &&
                                (e.model.mimeType = this._mimetype);
                        }));
                }
                _onCollaboratorsChanged() {
                    var e, t, o;
                    for (let n = 0; n < this.widgets.length; n++) {
                        const s = this.widgets[n];
                        for (const n of s.model.selections.keys())
                            !1 ===
                                (null ===
                                    (o =
                                        null ===
                                            (t =
                                                null === (e = this._model) ||
                                                void 0 === e
                                                    ? void 0
                                                    : e.modelDB) || void 0 === t
                                            ? void 0
                                            : t.collaborators) || void 0 === o
                                    ? void 0
                                    : o.has(n)) && s.model.selections.delete(n);
                    }
                }
                _updateEditorConfig() {
                    for (let e = 0; e < this.widgets.length; e++) {
                        const t = this.widgets[e];
                        let o = {};
                        switch (t.model.type) {
                            case 'code':
                                o = this._editorConfig.code;
                                break;
                            case 'markdown':
                                o = this._editorConfig.markdown;
                                break;
                            default:
                                o = this._editorConfig.raw;
                        }
                        t.editor.setOptions(Object.assign({}, o)),
                            t.editor.refresh();
                    }
                }
                _updateNotebookConfig() {
                    this.toggleClass(
                        'jp-mod-scrollPastEnd',
                        this._notebookConfig.scrollPastEnd
                    );
                    const e = this._notebookConfig
                        .showEditorForReadOnlyMarkdown;
                    if (void 0 !== e)
                        for (const t of this.widgets)
                            'markdown' === t.model.type &&
                                (t.showEditorForReadOnly = e);
                }
                _incrementRenderedCount() {
                    0 === this._toRenderMap.size &&
                        this._fullyRendered.emit(!0),
                        this._renderedCellsCount++;
                }
                get remainingCellToRenderCount() {
                    return this._toRenderMap.size;
                }
            }
            !(function(e) {
                (e.defaultEditorConfig = {
                    code: Object.assign(
                        Object.assign({}, T.CodeEditor.defaultConfig),
                        {
                            lineWrap: 'off',
                            matchBrackets: !0,
                            autoClosingBrackets: !1,
                        }
                    ),
                    markdown: Object.assign(
                        Object.assign({}, T.CodeEditor.defaultConfig),
                        {
                            lineWrap: 'on',
                            matchBrackets: !1,
                            autoClosingBrackets: !1,
                        }
                    ),
                    raw: Object.assign(
                        Object.assign({}, T.CodeEditor.defaultConfig),
                        {
                            lineWrap: 'on',
                            matchBrackets: !1,
                            autoClosingBrackets: !1,
                        }
                    ),
                }),
                    (e.defaultNotebookConfig = {
                        scrollPastEnd: !0,
                        defaultCell: 'code',
                        recordTiming: !1,
                        numberCellsToRenderDirectly: 99999,
                        remainingTimeBeforeRescheduling: 50,
                        renderCellOnIdle: !0,
                        observedTopMargin: '1000px',
                        observedBottomMargin: '1000px',
                        maxNumberOutputs: 50,
                        showEditorForReadOnlyMarkdown: !0,
                        disableDocumentWideUndoRedo: !1,
                        renderingLayout: 'default',
                        sideBySideLeftMarginOverride: '10px',
                        sideBySideRightMarginOverride: '10px',
                        sideBySideOutputRatio: 1,
                    });
                class t extends s.Cell.ContentFactory {
                    createCodeCell(e, t) {
                        return (
                            e.contentFactory || (e.contentFactory = this),
                            new s.CodeCell(e).initializeState()
                        );
                    }
                    createMarkdownCell(e, t) {
                        return (
                            e.contentFactory || (e.contentFactory = this),
                            new s.MarkdownCell(e).initializeState()
                        );
                    }
                    createRawCell(e, t) {
                        return (
                            e.contentFactory || (e.contentFactory = this),
                            new s.RawCell(e).initializeState()
                        );
                    }
                }
                (e.ContentFactory = t), (e.defaultContentFactory = new t());
            })(te || (te = {}));
            class oe extends te {
                constructor(e) {
                    super(ne.processNotebookOptions(e)),
                        (this._activeCellIndex = -1),
                        (this._activeCell = null),
                        (this._mode = 'command'),
                        (this._drag = null),
                        (this._fragment = ''),
                        (this._dragData = null),
                        (this._mouseMode = null),
                        (this._activeCellChanged = new r.Signal(this)),
                        (this._stateChanged = new r.Signal(this)),
                        (this._selectionChanged = new r.Signal(this)),
                        (this._checkCacheOnNextResize = !1),
                        (this._lastClipboardInteraction = null),
                        (this.node.tabIndex = 0),
                        this.node.setAttribute('data-lm-dragscroll', 'true');
                }
                get activeCellChanged() {
                    return this._activeCellChanged;
                }
                get stateChanged() {
                    return this._stateChanged;
                }
                get selectionChanged() {
                    return this._selectionChanged;
                }
                get mode() {
                    return this._mode;
                }
                set mode(e) {
                    const t = this.activeCell;
                    if ((t || (e = 'command'), e === this._mode))
                        return void this._ensureFocus();
                    this.update();
                    const o = this._mode;
                    (this._mode = e),
                        'edit' === e
                            ? ((0, i.each)(this.widgets, e => {
                                  this.deselect(e);
                              }),
                              t instanceof s.MarkdownCell && (t.rendered = !1),
                              (t.inputHidden = !1))
                            : this.node.focus(),
                        this._stateChanged.emit({
                            name: 'mode',
                            oldValue: o,
                            newValue: e,
                        }),
                        this._ensureFocus();
                }
                get activeCellIndex() {
                    return this.model && this.model.cells.length
                        ? this._activeCellIndex
                        : -1;
                }
                set activeCellIndex(e) {
                    const t = this._activeCellIndex;
                    this.model && this.model.cells.length
                        ? ((e = Math.max(e, 0)),
                          (e = Math.min(e, this.model.cells.length - 1)))
                        : (e = -1),
                        (this._activeCellIndex = e);
                    const o = this.widgets[e];
                    o !== this._activeCell &&
                        (this.update(),
                        (this._activeCell = o),
                        this._activeCellChanged.emit(o)),
                        'edit' === this.mode &&
                            o instanceof s.MarkdownCell &&
                            (o.rendered = !1),
                        this._ensureFocus(),
                        e !== t &&
                            (this._trimSelections(),
                            this._stateChanged.emit({
                                name: 'activeCellIndex',
                                oldValue: t,
                                newValue: e,
                            }));
                }
                get activeCell() {
                    return this._activeCell;
                }
                get lastClipboardInteraction() {
                    return this._lastClipboardInteraction;
                }
                set lastClipboardInteraction(e) {
                    this._lastClipboardInteraction = e;
                }
                dispose() {
                    this.isDisposed ||
                        ((this._activeCell = null), super.dispose());
                }
                select(e) {
                    ne.selectedProperty.get(e) ||
                        (ne.selectedProperty.set(e, !0),
                        this._selectionChanged.emit(void 0),
                        this.update());
                }
                deselect(e) {
                    ne.selectedProperty.get(e) &&
                        (ne.selectedProperty.set(e, !1),
                        this._selectionChanged.emit(void 0),
                        this.update());
                }
                isSelected(e) {
                    return ne.selectedProperty.get(e);
                }
                isSelectedOrActive(e) {
                    return e === this._activeCell || ne.selectedProperty.get(e);
                }
                deselectAll() {
                    let e = !1;
                    (0, i.each)(this.widgets, t => {
                        ne.selectedProperty.get(t) && (e = !0),
                            ne.selectedProperty.set(t, !1);
                    }),
                        e && this._selectionChanged.emit(void 0),
                        (this.activeCellIndex = this.activeCellIndex),
                        this.update();
                }
                extendContiguousSelectionTo(e) {
                    let t,
                        { head: o, anchor: n } = this.getContiguousSelection();
                    if (null === n || null === o) {
                        if (e === this.activeCellIndex) return;
                        (o = this.activeCellIndex), (n = this.activeCellIndex);
                    }
                    if (
                        ((this.activeCellIndex = e),
                        (e = this.activeCellIndex) === n)
                    )
                        return void this.deselectAll();
                    let s = !1;
                    if (o < e)
                        for (
                            o < n &&
                                (ne.selectedProperty.set(this.widgets[o], !1),
                                (s = !0)),
                                t = o + 1;
                            t < e;
                            t++
                        )
                            t !== n &&
                                (ne.selectedProperty.set(
                                    this.widgets[t],
                                    !ne.selectedProperty.get(this.widgets[t])
                                ),
                                (s = !0));
                    else if (e < o)
                        for (
                            n < o &&
                                (ne.selectedProperty.set(this.widgets[o], !1),
                                (s = !0)),
                                t = e + 1;
                            t < o;
                            t++
                        )
                            t !== n &&
                                (ne.selectedProperty.set(
                                    this.widgets[t],
                                    !ne.selectedProperty.get(this.widgets[t])
                                ),
                                (s = !0));
                    ne.selectedProperty.get(this.widgets[n]) || (s = !0),
                        ne.selectedProperty.set(this.widgets[n], !0),
                        ne.selectedProperty.get(this.widgets[e]) || (s = !0),
                        ne.selectedProperty.set(this.widgets[e], !0),
                        s && this._selectionChanged.emit(void 0);
                }
                getContiguousSelection() {
                    const e = this.widgets,
                        t = i.ArrayExt.findFirstIndex(e, e =>
                            this.isSelected(e)
                        );
                    if (-1 === t) return { head: null, anchor: null };
                    const o = i.ArrayExt.findLastIndex(
                        e,
                        e => this.isSelected(e),
                        -1,
                        t
                    );
                    for (let n = t; n <= o; n++)
                        if (!this.isSelected(e[n]))
                            throw new Error('Selection not contiguous');
                    const n = this.activeCellIndex;
                    if (t !== n && o !== n)
                        throw new Error(
                            'Active cell not at endpoint of selection'
                        );
                    return t === n
                        ? { head: t, anchor: o }
                        : { head: o, anchor: t };
                }
                scrollToPosition(e, t = 25) {
                    const o = this.node,
                        n = o.getBoundingClientRect(),
                        s = e - n.top - n.height / 2;
                    Math.abs(s) > (n.height * t) / 100 && (o.scrollTop += s);
                }
                scrollToCell(e) {
                    d.ElementExt.scrollIntoViewIfNeeded(this.node, e.node),
                        this.deselectAll(),
                        this.select(e),
                        e.activate();
                }
                setFragment(e) {
                    Promise.all(this.widgets.map(e => e.ready)).then(() => {
                        (this._fragment = e), this.update();
                    });
                }
                handleEvent(e) {
                    if (this.model)
                        switch (e.type) {
                            case 'contextmenu':
                                e.eventPhase === Event.CAPTURING_PHASE &&
                                    this._evtContextMenuCapture(e);
                                break;
                            case 'mousedown':
                                e.eventPhase === Event.CAPTURING_PHASE
                                    ? this._evtMouseDownCapture(e)
                                    : this._evtMouseDown(e);
                                break;
                            case 'mouseup':
                                e.currentTarget === document &&
                                    this._evtDocumentMouseup(e);
                                break;
                            case 'mousemove':
                                e.currentTarget === document &&
                                    this._evtDocumentMousemove(e);
                                break;
                            case 'keydown':
                                this._ensureFocus(!0);
                                break;
                            case 'dblclick':
                                this._evtDblClick(e);
                                break;
                            case 'focusin':
                                this._evtFocusIn(e);
                                break;
                            case 'focusout':
                                this._evtFocusOut(e);
                                break;
                            case 'lm-dragenter':
                                this._evtDragEnter(e);
                                break;
                            case 'lm-dragleave':
                                this._evtDragLeave(e);
                                break;
                            case 'lm-dragover':
                                this._evtDragOver(e);
                                break;
                            case 'lm-drop':
                                this._evtDrop(e);
                        }
                }
                onAfterAttach(e) {
                    super.onAfterAttach(e);
                    const t = this.node;
                    t.addEventListener('contextmenu', this, !0),
                        t.addEventListener('mousedown', this, !0),
                        t.addEventListener('mousedown', this),
                        t.addEventListener('keydown', this),
                        t.addEventListener('dblclick', this),
                        t.addEventListener('focusin', this),
                        t.addEventListener('focusout', this),
                        t.addEventListener('lm-dragenter', this, !0),
                        t.addEventListener('lm-dragleave', this, !0),
                        t.addEventListener('lm-dragover', this, !0),
                        t.addEventListener('lm-drop', this, !0);
                }
                onBeforeDetach(e) {
                    const t = this.node;
                    t.removeEventListener('contextmenu', this, !0),
                        t.removeEventListener('mousedown', this, !0),
                        t.removeEventListener('mousedown', this),
                        t.removeEventListener('keydown', this),
                        t.removeEventListener('dblclick', this),
                        t.removeEventListener('focusin', this),
                        t.removeEventListener('focusout', this),
                        t.removeEventListener('lm-dragenter', this, !0),
                        t.removeEventListener('lm-dragleave', this, !0),
                        t.removeEventListener('lm-dragover', this, !0),
                        t.removeEventListener('lm-drop', this, !0),
                        document.removeEventListener('mousemove', this, !0),
                        document.removeEventListener('mouseup', this, !0);
                }
                onAfterShow(e) {
                    this._checkCacheOnNextResize = !0;
                }
                onResize(e) {
                    if (!this._checkCacheOnNextResize) return super.onResize(e);
                    this._checkCacheOnNextResize = !1;
                    const t = this._cellLayoutStateCache,
                        o = parseInt(this.node.style.width, 10);
                    if (!t || o !== t.width) {
                        this._cellLayoutStateCache = { width: o };
                        for (const e of this.widgets)
                            e instanceof s.Cell && e.editorWidget.update();
                    }
                }
                onBeforeHide(e) {
                    const t = parseInt(this.node.style.width, 10);
                    this._cellLayoutStateCache = { width: t };
                }
                onActivateRequest(e) {
                    this._ensureFocus(!0);
                }
                onUpdateRequest(e) {
                    const t = this.activeCell;
                    'edit' === this.mode
                        ? (this.addClass(W), this.removeClass(H))
                        : (this.addClass(H), this.removeClass(W)),
                        t && t.addClass(U);
                    let o = 0;
                    if (
                        ((0, i.each)(this.widgets, e => {
                            e !== t && e.removeClass(U),
                                e.removeClass(z),
                                this.isSelectedOrActive(e)
                                    ? (e.addClass(J), o++)
                                    : e.removeClass(J);
                        }),
                        o > 1 && (null == t || t.addClass(z)),
                        this._fragment)
                    ) {
                        let e;
                        try {
                            e = this.node.querySelector(
                                this._fragment.startsWith('#')
                                    ? `#${CSS.escape(this._fragment.slice(1))}`
                                    : this._fragment
                            );
                        } catch (e) {
                            console.warn(
                                'Unable to set URI fragment identifier',
                                e
                            );
                        }
                        e && e.scrollIntoView(), (this._fragment = '');
                    }
                }
                onCellInserted(e, t) {
                    if (this.model && this.model.modelDB.isCollaborative) {
                        const e = this.model.modelDB;
                        e.connected.then(() => {
                            if (!t.isDisposed) {
                                const o = e.collaborators.localCollaborator;
                                (t.editor.uuid = o.sessionId),
                                    (t.editor.selectionStyle = Object.assign(
                                        Object.assign(
                                            {},
                                            T.CodeEditor.defaultSelectionStyle
                                        ),
                                        { color: o.color }
                                    ));
                            }
                        });
                    }
                    t.editor.edgeRequested.connect(this._onEdgeRequest, this),
                        (this.activeCellIndex =
                            e <= this.activeCellIndex
                                ? this.activeCellIndex + 1
                                : this.activeCellIndex);
                }
                onCellMoved(e, t) {
                    const o = this.activeCellIndex;
                    e === o
                        ? (this.activeCellIndex = t)
                        : e < o && o <= t
                        ? this.activeCellIndex--
                        : t <= o && o < e && this.activeCellIndex++;
                }
                onCellRemoved(e, t) {
                    (this.activeCellIndex =
                        e <= this.activeCellIndex
                            ? this.activeCellIndex - 1
                            : this.activeCellIndex),
                        this.isSelected(t) &&
                            this._selectionChanged.emit(void 0);
                }
                onModelChanged(e, t) {
                    super.onModelChanged(e, t), (this.activeCellIndex = 0);
                }
                _onEdgeRequest(e, t) {
                    const o = this.activeCellIndex;
                    if ('top' === t) {
                        if (
                            (this.activeCellIndex--, this.activeCellIndex < o)
                        ) {
                            const e = this.activeCell.editor,
                                t = e.lineCount - 1;
                            e.setCursorPosition({ line: t, column: 0 });
                        }
                    } else
                        'bottom' === t &&
                            (this.activeCellIndex++,
                            this.activeCellIndex > o) &&
                            this.activeCell.editor.setCursorPosition({
                                line: 0,
                                column: 0,
                            });
                    this.mode = 'edit';
                }
                _ensureFocus(e = !1) {
                    const t = this.activeCell;
                    'edit' === this.mode &&
                        t &&
                        (t.editor.hasFocus() || t.editor.focus()),
                        e &&
                            !this.node.contains(document.activeElement) &&
                            this.node.focus();
                }
                _findCell(e) {
                    let t = e;
                    for (; t && t !== this.node; ) {
                        if (t.classList.contains(V)) {
                            const e = i.ArrayExt.findFirstIndex(
                                this.widgets,
                                e => e.node === t
                            );
                            if (-1 !== e) return e;
                            break;
                        }
                        t = t.parentElement;
                    }
                    return -1;
                }
                _findEventTargetAndCell(e) {
                    let t = e.target,
                        o = this._findCell(t);
                    return (
                        -1 === o &&
                            ((t = document.elementFromPoint(
                                e.clientX,
                                e.clientY
                            )),
                            (o = this._findCell(t))),
                        [t, o]
                    );
                }
                _evtContextMenuCapture(e) {
                    if (e.shiftKey) return;
                    const [t, o] = this._findEventTargetAndCell(e),
                        n = this.widgets[o];
                    n && n.editorWidget.node.contains(t) && e.preventDefault();
                }
                _evtMouseDownCapture(e) {
                    const { button: t, shiftKey: o } = e,
                        [n, s] = this._findEventTargetAndCell(e),
                        l = this.widgets[s];
                    2 === t &&
                        !o &&
                        l &&
                        l.editorWidget.node.contains(n) &&
                        ((this.mode = 'command'), e.preventDefault());
                }
                _evtMouseDown(e) {
                    var t;
                    const { button: o, shiftKey: n } = e;
                    if (0 !== o && 2 !== o) return;
                    if (n && 2 === o) return;
                    const [s, l] = this._findEventTargetAndCell(e),
                        i = this.widgets[l];
                    let a;
                    if (
                        ((a = i
                            ? i.editorWidget.node.contains(s)
                                ? 'input'
                                : i.promptNode.contains(s)
                                ? 'prompt'
                                : 'cell'
                            : 'notebook'),
                        'input' !== a && (this.mode = 'command'),
                        'notebook' === a)
                    )
                        this.deselectAll();
                    else if ('prompt' === a || 'cell' === a) {
                        const s =
                            '' !==
                            (null !== (t = window.getSelection()) &&
                            void 0 !== t
                                ? t
                                : ''
                            ).toString();
                        if (0 === o && n && !s) {
                            e.preventDefault();
                            try {
                                this.extendContiguousSelectionTo(l);
                            } catch (e) {
                                return (
                                    console.error(e), void this.deselectAll()
                                );
                            }
                            (this._mouseMode = 'select'),
                                document.addEventListener('mouseup', this, !0),
                                document.addEventListener(
                                    'mousemove',
                                    this,
                                    !0
                                );
                        } else
                            0 !== o || n
                                ? 2 === o &&
                                  (this.isSelectedOrActive(i) ||
                                      (this.deselectAll(),
                                      (this.activeCellIndex = l)),
                                  e.preventDefault())
                                : ('prompt' === a &&
                                      ((this._dragData = {
                                          pressX: e.clientX,
                                          pressY: e.clientY,
                                          index: l,
                                      }),
                                      (this._mouseMode = 'couldDrag'),
                                      document.addEventListener(
                                          'mouseup',
                                          this,
                                          !0
                                      ),
                                      document.addEventListener(
                                          'mousemove',
                                          this,
                                          !0
                                      ),
                                      e.preventDefault()),
                                  this.isSelectedOrActive(i) ||
                                      (this.deselectAll(),
                                      (this.activeCellIndex = l)));
                    } else
                        'input' === a &&
                            (2 !== o ||
                                this.isSelectedOrActive(i) ||
                                (this.deselectAll(),
                                (this.activeCellIndex = l)));
                    this._ensureFocus(!0);
                }
                _evtDocumentMouseup(e) {
                    if (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        document.removeEventListener('mousemove', this, !0),
                        document.removeEventListener('mouseup', this, !0),
                        'couldDrag' === this._mouseMode)
                    ) {
                        const [, t] = this._findEventTargetAndCell(e);
                        this.deselectAll(),
                            (this.activeCellIndex = t),
                            this.activeCell.node.contains(
                                document.activeElement
                            ) || this.node.focus();
                    }
                    this._mouseMode = null;
                }
                _evtDocumentMousemove(e) {
                    switch (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        this._mouseMode)
                    ) {
                        case 'select': {
                            const t = e.target,
                                o = this._findCell(t);
                            -1 !== o && this.extendContiguousSelectionTo(o);
                            break;
                        }
                        case 'couldDrag': {
                            const t = this._dragData,
                                o = Math.abs(e.clientX - t.pressX),
                                n = Math.abs(e.clientY - t.pressY);
                            (o >= 5 || n >= 5) &&
                                ((this._mouseMode = null),
                                this._startDrag(t.index, e.clientX, e.clientY));
                            break;
                        }
                    }
                }
                _evtDragEnter(e) {
                    if (!e.mimeData.hasData(Z)) return;
                    e.preventDefault(), e.stopPropagation();
                    const t = e.target,
                        o = this._findCell(t);
                    -1 !== o && this.layout.widgets[o].node.classList.add(K);
                }
                _evtDragLeave(e) {
                    if (!e.mimeData.hasData(Z)) return;
                    e.preventDefault(), e.stopPropagation();
                    const t = this.node.getElementsByClassName(K);
                    t.length && t[0].classList.remove(K);
                }
                _evtDragOver(e) {
                    if (!e.mimeData.hasData(Z)) return;
                    e.preventDefault(),
                        e.stopPropagation(),
                        (e.dropAction = e.proposedAction);
                    const t = this.node.getElementsByClassName(K);
                    t.length && t[0].classList.remove(K);
                    const o = e.target,
                        n = this._findCell(o);
                    -1 !== n && this.layout.widgets[n].node.classList.add(K);
                }
                _evtDrop(e) {
                    if (!e.mimeData.hasData(Z)) return;
                    if (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        'none' === e.proposedAction)
                    )
                        return void (e.dropAction = 'none');
                    let t = e.target;
                    for (; t && t.parentElement; ) {
                        if (t.classList.contains(K)) {
                            t.classList.remove(K);
                            break;
                        }
                        t = t.parentElement;
                    }
                    const o = this.model,
                        n = e.source;
                    if (n === this) {
                        e.dropAction = 'move';
                        const l = e.mimeData.getData('internal:cells'),
                            a = l[l.length - 1];
                        if (a instanceof s.MarkdownCell && a.headingCollapsed) {
                            const e = m.findNextParentHeading(a, n);
                            if (e > 0) {
                                const t = (0, i.findIndex)(
                                    n.widgets,
                                    e => a.model.id === e.model.id
                                );
                                l.push(...n.widgets.slice(t + 1, e));
                            }
                        }
                        let d = i.ArrayExt.firstIndexOf(this.widgets, l[0]),
                            r = this._findCell(t);
                        if (
                            (-1 !== r && r > d
                                ? (r -= 1)
                                : -1 === r && (r = this.widgets.length - 1),
                            r >= d && r < d + l.length)
                        )
                            return;
                        o.cells.beginCompoundOperation(),
                            d < r
                                ? (0, i.each)(l, e => {
                                      o.cells.move(d, r);
                                  })
                                : d > r &&
                                  (0, i.each)(l, e => {
                                      o.cells.move(d++, r++);
                                  }),
                            o.cells.endCompoundOperation();
                    } else {
                        e.dropAction = 'copy';
                        let n = this._findCell(t);
                        -1 === n && (n = this.widgets.length);
                        const s = n,
                            l = e.mimeData.getData(Z),
                            a = o.contentFactory;
                        o.cells.beginCompoundOperation(),
                            (0, i.each)(l, e => {
                                let t;
                                switch (e.cell_type) {
                                    case 'code':
                                        t = a.createCodeCell({ cell: e });
                                        break;
                                    case 'markdown':
                                        t = a.createMarkdownCell({ cell: e });
                                        break;
                                    default:
                                        t = a.createRawCell({ cell: e });
                                }
                                o.cells.insert(n++, t);
                            }),
                            o.cells.endCompoundOperation(),
                            this.deselectAll(),
                            (this.activeCellIndex = s),
                            this.extendContiguousSelectionTo(n - 1);
                    }
                }
                _startDrag(e, t, o) {
                    var n;
                    const s = this.model.cells,
                        l = [],
                        d = [];
                    (0, i.each)(this.widgets, (e, t) => {
                        const o = s.get(t);
                        this.isSelectedOrActive(e) &&
                            (e.addClass($), l.push(o.toJSON()), d.push(e));
                    });
                    const r = this.activeCell;
                    let c,
                        h = null;
                    if ('code' === (null == r ? void 0 : r.model.type)) {
                        const e = r.model.executionCount;
                        (c = ' '), e && (c = e.toString());
                    } else c = '';
                    (h = ne.createDragImage(
                        l.length,
                        c,
                        null !==
                            (n =
                                null == r
                                    ? void 0
                                    : r.model.value.text
                                          .split('\n')[0]
                                          .slice(0, 26)) && void 0 !== n
                            ? n
                            : ''
                    )),
                        (this._drag = new L.Drag({
                            mimeData: new a.MimeData(),
                            dragImage: h,
                            supportedActions: 'copy-move',
                            proposedAction: 'copy',
                            source: this,
                        })),
                        this._drag.mimeData.setData(Z, l),
                        this._drag.mimeData.setData('internal:cells', d);
                    const u = d.map(e => e.model.value.text).join('\n');
                    this._drag.mimeData.setData('text/plain', u),
                        document.removeEventListener('mousemove', this, !0),
                        document.removeEventListener('mouseup', this, !0),
                        (this._mouseMode = null),
                        this._drag.start(t, o).then(e => {
                            this.isDisposed ||
                                ((this._drag = null),
                                (0, i.each)(d, e => {
                                    e.removeClass($);
                                }));
                        });
                }
                _evtFocusIn(e) {
                    const t = e.target,
                        o = this._findCell(t);
                    if (-1 !== o) {
                        const e = this.widgets[o];
                        e.editorWidget.node.contains(t) ||
                            (this.mode = 'command'),
                            (this.activeCellIndex = o),
                            e.editorWidget.node.contains(t) &&
                                (this.mode = 'edit'),
                            (this.activeCellIndex = o);
                    } else this.mode = 'command';
                }
                _evtFocusOut(e) {
                    const t = e.relatedTarget;
                    if (!t) return;
                    const o = this._findCell(t);
                    (-1 !== o &&
                        this.widgets[o].editorWidget.node.contains(t)) ||
                        ('command' !== this.mode &&
                            ((this.mode = 'command'), t && t.focus()));
                }
                _evtDblClick(e) {
                    const t = this.model;
                    if (!t) return;
                    this.deselectAll();
                    const [o, n] = this._findEventTargetAndCell(e);
                    e.target.classList.contains('jp-collapseHeadingButton') ||
                        -1 === n ||
                        ((this.activeCellIndex = n),
                        'markdown' === t.cells.get(n).type
                            ? (this.widgets[n].rendered = !1)
                            : 'img' === o.localName &&
                              o.classList.toggle('jp-mod-unconfined'));
                }
                _trimSelections() {
                    for (let e = 0; e < this.widgets.length; e++)
                        if (e !== this._activeCellIndex) {
                            const t = this.widgets[e];
                            t.model.selections.delete(t.editor.uuid);
                        }
                }
            }
            var ne;
            !(function(e) {
                class t extends te.ContentFactory {}
                (e.ContentFactory = t), (e.defaultContentFactory = new t());
            })(oe || (oe = {})),
                (function(e) {
                    e.selectedProperty = new j.AttachedProperty({
                        name: 'selected',
                        create: () => !1,
                    });
                    class t extends D.PanelLayout {
                        onUpdateRequest(e) {}
                    }
                    (e.NotebookPanelLayout = t),
                        (e.createDragImage = function(e, t, o) {
                            return e > 1
                                ? '' !== t
                                    ? N.VirtualDOM.realize(
                                          N.h.div(
                                              N.h.div(
                                                  { className: q },
                                                  N.h.span(
                                                      { className: X },
                                                      '[' + t + ']:'
                                                  ),
                                                  N.h.span({ className: Y }, o)
                                              ),
                                              N.h.div({ className: Q }, '')
                                          )
                                      )
                                    : N.VirtualDOM.realize(
                                          N.h.div(
                                              N.h.div(
                                                  { className: q },
                                                  N.h.span({ className: X }),
                                                  N.h.span({ className: Y }, o)
                                              ),
                                              N.h.div({ className: Q }, '')
                                          )
                                      )
                                : '' !== t
                                ? N.VirtualDOM.realize(
                                      N.h.div(
                                          N.h.div(
                                              { className: `${q} ${G}` },
                                              N.h.span(
                                                  { className: X },
                                                  '[' + t + ']:'
                                              ),
                                              N.h.span({ className: Y }, o)
                                          )
                                      )
                                  )
                                : N.VirtualDOM.realize(
                                      N.h.div(
                                          N.h.div(
                                              { className: `${q} ${G}` },
                                              N.h.span({ className: X }),
                                              N.h.span({ className: Y }, o)
                                          )
                                      )
                                  );
                        }),
                        (e.processNotebookOptions = function(e) {
                            return e.contentFactory
                                ? e
                                : {
                                      rendermime: e.rendermime,
                                      languagePreference: e.languagePreference,
                                      contentFactory: oe.defaultContentFactory,
                                      mimeTypeService: e.mimeTypeService,
                                  };
                        });
                })(ne || (ne = {}));
            const se = 'jp-DocumentSearch-document-loaded';
            class le extends B.DocumentWidget {
                constructor(e) {
                    super(e),
                        (this._autorestarting = !1),
                        (this.translator = e.translator || l.nullTranslator),
                        (this._trans = this.translator.load('jupyterlab')),
                        this.addClass('jp-NotebookPanel'),
                        this.toolbar.addClass('jp-NotebookPanel-toolbar'),
                        this.content.addClass('jp-NotebookPanel-notebook'),
                        (this.content.model = this.context.model),
                        this.context.sessionContext.kernelChanged.connect(
                            this._onKernelChanged,
                            this
                        ),
                        this.context.sessionContext.statusChanged.connect(
                            this._onSessionStatusChanged,
                            this
                        ),
                        this.content.fullyRendered.connect(
                            this._onFullyRendered,
                            this
                        ),
                        this.context.saveState.connect(this._onSave, this),
                        this.revealed.then(() => {
                            if (
                                !this.isDisposed &&
                                1 === this.content.widgets.length
                            ) {
                                const e = this.content.widgets[0].model;
                                'code' === e.type &&
                                    '' === e.value.text &&
                                    (this.content.mode = 'edit');
                            }
                        });
                }
                _onSave(e, t) {
                    if ('started' === t && this.model) {
                        const { cells: e } = this.model;
                        (0, i.each)(e, e => {
                            if ((0, s.isMarkdownCellModel)(e))
                                for (const t of e.attachments.keys)
                                    e.value.text.includes(t) ||
                                        e.attachments.remove(t);
                        });
                    }
                }
                get sessionContext() {
                    return this.context.sessionContext;
                }
                get model() {
                    return this.content.model;
                }
                setConfig(e) {
                    (this.content.editorConfig = e.editorConfig),
                        (this.content.notebookConfig = e.notebookConfig);
                    const t = this.context.sessionContext.kernelPreference;
                    this.context.sessionContext.kernelPreference = Object.assign(
                        Object.assign({}, t),
                        { shutdownOnDispose: e.kernelShutdown }
                    );
                }
                setFragment(e) {
                    this.context.ready.then(() => {
                        this.content.setFragment(e);
                    });
                }
                dispose() {
                    this.content.dispose(), super.dispose();
                }
                [n.Printing.symbol]() {
                    return async () => {
                        this.context.model.dirty &&
                            !this.context.model.readOnly &&
                            (await this.context.save()),
                            await n.Printing.printURL(
                                F.PageConfig.getNBConvertURL({
                                    format: 'html',
                                    download: !1,
                                    path: this.context.path,
                                })
                            );
                    };
                }
                _onFullyRendered(e, t) {
                    t ? this.removeClass(se) : this.addClass(se);
                }
                _onKernelChanged(e, t) {
                    if (!this.model || !t.newValue) return;
                    const { newValue: o } = t;
                    o.info.then(e => {
                        var t;
                        this.model &&
                            (null ===
                                (t = this.context.sessionContext.session) ||
                            void 0 === t
                                ? void 0
                                : t.kernel) === o &&
                            this._updateLanguage(e.language_info);
                    }),
                        this._updateSpec(o);
                }
                _onSessionStatusChanged(e, t) {
                    var o;
                    'autorestarting' !== t || this._autorestarting
                        ? 'restarting' === t || (this._autorestarting = !1)
                        : ((0, n.showDialog)({
                              title: this._trans.__('Kernel Restarting'),
                              body: this._trans.__(
                                  'The kernel for %1 appears to have died. It will restart automatically.',
                                  null === (o = this.sessionContext.session) ||
                                      void 0 === o
                                      ? void 0
                                      : o.path
                              ),
                              buttons: [
                                  n.Dialog.okButton({
                                      label: this._trans.__('Ok'),
                                  }),
                              ],
                          }),
                          (this._autorestarting = !0));
                }
                _updateLanguage(e) {
                    this.model.metadata.set('language_info', e);
                }
                async _updateSpec(e) {
                    const t = await e.spec;
                    this.isDisposed ||
                        this.model.metadata.set('kernelspec', {
                            name: e.name,
                            display_name: null == t ? void 0 : t.display_name,
                            language: null == t ? void 0 : t.language,
                        });
                }
            }
            !(function(e) {
                class t extends oe.ContentFactory {
                    createNotebook(e) {
                        return new oe(e);
                    }
                }
                (e.ContentFactory = t),
                    (e.defaultContentFactory = new t()),
                    (e.IContentFactory = new a.Token(
                        '@jupyterlab/notebook:IContentFactory'
                    ));
            })(le || (le = {}));
            const ie = new a.Token(
                    '@jupyterlab/notebook:INotebookWidgetFactory'
                ),
                ae = new a.Token('@jupyterlab/notebook:INotebookTools'),
                de = new a.Token('@jupyterlab/notebook:INotebookTracker');
            class re extends n.WidgetTracker {
                constructor() {
                    super(...arguments),
                        (this._activeCell = null),
                        (this._activeCellChanged = new r.Signal(this)),
                        (this._selectionChanged = new r.Signal(this));
                }
                get activeCell() {
                    const e = this.currentWidget;
                    return (e && e.content.activeCell) || null;
                }
                get activeCellChanged() {
                    return this._activeCellChanged;
                }
                get selectionChanged() {
                    return this._selectionChanged;
                }
                add(e) {
                    const t = super.add(e);
                    return (
                        e.content.activeCellChanged.connect(
                            this._onActiveCellChanged,
                            this
                        ),
                        e.content.selectionChanged.connect(
                            this._onSelectionChanged,
                            this
                        ),
                        t
                    );
                }
                dispose() {
                    (this._activeCell = null), super.dispose();
                }
                onCurrentChanged(e) {
                    const t = this.activeCell;
                    (t && t === this._activeCell) ||
                        ((this._activeCell = t),
                        e &&
                            this._activeCellChanged.emit(
                                e.content.activeCell || null
                            ));
                }
                _onActiveCellChanged(e, t) {
                    this.currentWidget &&
                        this.currentWidget.content === e &&
                        ((this._activeCell = t || null),
                        this._activeCellChanged.emit(this._activeCell));
                }
                _onSelectionChanged(e) {
                    this.currentWidget &&
                        this.currentWidget.content === e &&
                        this._selectionChanged.emit(void 0);
                }
            }
            function ce(e) {
                return e.allCellsTrusted
                    ? h().createElement(_.trustedIcon.react, {
                          top: '2px',
                          stylesheet: 'statusBar',
                      })
                    : h().createElement(_.notTrustedIcon.react, {
                          top: '2px',
                          stylesheet: 'statusBar',
                      });
            }
            class he extends n.VDomRenderer {
                constructor(e) {
                    super(new he.Model()),
                        (this.translator = e || l.nullTranslator);
                }
                render() {
                    return this.model
                        ? ((this.node.title = (function(e, t) {
                              const o = (t = t || l.nullTranslator).load(
                                  'jupyterlab'
                              );
                              return e.trustedCells === e.totalCells
                                  ? [
                                        o.__(
                                            'Notebook trusted: %1 of %2 cells trusted.',
                                            e.trustedCells,
                                            e.totalCells
                                        ),
                                        'jp-StatusItem-trusted',
                                    ]
                                  : e.activeCellTrusted
                                  ? [
                                        o.__(
                                            'Active cell trusted: %1 of %2 cells trusted.',
                                            e.trustedCells,
                                            e.totalCells
                                        ),
                                        'jp-StatusItem-trusted',
                                    ]
                                  : [
                                        o.__(
                                            'Notebook not trusted: %1 of %2 cells trusted.',
                                            e.trustedCells,
                                            e.totalCells
                                        ),
                                        'jp-StatusItem-untrusted',
                                    ];
                          })(this.model, this.translator)[0]),
                          h().createElement(
                              'div',
                              null,
                              h().createElement(ce, {
                                  allCellsTrusted:
                                      this.model.trustedCells ===
                                      this.model.totalCells,
                                  activeCellTrusted: this.model
                                      .activeCellTrusted,
                                  totalCells: this.model.totalCells,
                                  trustedCells: this.model.trustedCells,
                              })
                          ))
                        : null;
                }
            }
            !(function(e) {
                class t extends n.VDomModel {
                    constructor() {
                        super(...arguments),
                            (this._trustedCells = 0),
                            (this._totalCells = 0),
                            (this._activeCellTrusted = !1),
                            (this._notebook = null);
                    }
                    get trustedCells() {
                        return this._trustedCells;
                    }
                    get totalCells() {
                        return this._totalCells;
                    }
                    get activeCellTrusted() {
                        return this._activeCellTrusted;
                    }
                    get notebook() {
                        return this._notebook;
                    }
                    set notebook(e) {
                        const t = this._notebook;
                        null !== t &&
                            (t.activeCellChanged.disconnect(
                                this._onActiveCellChanged,
                                this
                            ),
                            t.modelContentChanged.disconnect(
                                this._onModelChanged,
                                this
                            ));
                        const o = this._getAllState();
                        if (((this._notebook = e), null === this._notebook))
                            (this._trustedCells = 0),
                                (this._totalCells = 0),
                                (this._activeCellTrusted = !1);
                        else {
                            this._notebook.activeCellChanged.connect(
                                this._onActiveCellChanged,
                                this
                            ),
                                this._notebook.modelContentChanged.connect(
                                    this._onModelChanged,
                                    this
                                ),
                                void 0 !== this._notebook.activeCell
                                    ? (this._activeCellTrusted = this._notebook.activeCell.model.trusted)
                                    : (this._activeCellTrusted = !1);
                            const {
                                total: e,
                                trusted: t,
                            } = this._deriveCellTrustState(
                                this._notebook.model
                            );
                            (this._totalCells = e), (this._trustedCells = t);
                        }
                        this._triggerChange(o, this._getAllState());
                    }
                    _onModelChanged(e) {
                        const t = this._getAllState(),
                            {
                                total: o,
                                trusted: n,
                            } = this._deriveCellTrustState(e.model);
                        (this._totalCells = o),
                            (this._trustedCells = n),
                            this._triggerChange(t, this._getAllState());
                    }
                    _onActiveCellChanged(e, t) {
                        const o = this._getAllState();
                        (this._activeCellTrusted = !!t && t.model.trusted),
                            this._triggerChange(o, this._getAllState());
                    }
                    _deriveCellTrustState(e) {
                        if (null === e) return { total: 0, trusted: 0 };
                        const t = (0, i.toArray)(e.cells),
                            o = t.reduce((e, t) => (t.trusted ? e + 1 : e), 0);
                        return { total: t.length, trusted: o };
                    }
                    _getAllState() {
                        return [
                            this._trustedCells,
                            this._totalCells,
                            this.activeCellTrusted,
                        ];
                    }
                    _triggerChange(e, t) {
                        (e[0] === t[0] && e[1] === t[1] && e[2] === t[2]) ||
                            this.stateChanged.emit(void 0);
                    }
                }
                e.Model = t;
            })(he || (he = {}));
            class ue extends B.ABCWidgetFactory {
                constructor(e) {
                    super(e),
                        (this.rendermime = e.rendermime),
                        (this.contentFactory =
                            e.contentFactory || le.defaultContentFactory),
                        (this.mimeTypeService = e.mimeTypeService),
                        (this._editorConfig =
                            e.editorConfig || te.defaultEditorConfig),
                        (this._notebookConfig =
                            e.notebookConfig || te.defaultNotebookConfig),
                        (this._sessionDialogs =
                            e.sessionDialogs || n.sessionContextDialogs);
                }
                get editorConfig() {
                    return this._editorConfig;
                }
                set editorConfig(e) {
                    this._editorConfig = e;
                }
                get notebookConfig() {
                    return this._notebookConfig;
                }
                set notebookConfig(e) {
                    this._notebookConfig = e;
                }
                createNewWidget(e, t) {
                    const o = {
                            rendermime: t
                                ? t.content.rendermime
                                : this.rendermime.clone({
                                      resolver: e.urlResolver,
                                  }),
                            contentFactory: this.contentFactory,
                            mimeTypeService: this.mimeTypeService,
                            editorConfig: t
                                ? t.content.editorConfig
                                : this._editorConfig,
                            notebookConfig: t
                                ? t.content.notebookConfig
                                : this._notebookConfig,
                            translator: this.translator,
                        },
                        n = this.contentFactory.createNotebook(o);
                    return new le({ context: e, content: n });
                }
                defaultToolbarFactory(e) {
                    return p.getDefaultItems(
                        e,
                        this._sessionDialogs,
                        this.translator
                    );
                }
            }
            var ge = o(55610);
            function me(e) {
                const t = e.translator || l.nullTranslator,
                    o = (0, n.translateKernelStatuses)(t),
                    s = t.load('jupyterlab'),
                    i = e.state,
                    a = e.displayOption.showOnToolBar,
                    d = e.displayOption.showProgress,
                    r = a ? 'down' : 'up',
                    c = h().createElement('div', null);
                if (!i) return c;
                const u = i.kernelStatus,
                    g = { alignSelf: 'normal', height: '24px' },
                    m = i.totalTime,
                    C = i.scheduledCellNumber || 0,
                    p = C - (i.scheduledCell.size || 0);
                let v = (100 * p) / C,
                    f = d ? '' : 'hidden';
                !d && v < 100 && (v = 0);
                const b = e =>
                        h().createElement(M.ProgressCircle, {
                            progress: e,
                            width: 16,
                            height: 24,
                        }),
                    y = e => s.__('Kernel status: %1', e),
                    k = (e, t, n) =>
                        h().createElement(
                            'div',
                            {
                                className: 'jp-Notebook-ExecutionIndicator',
                                title: d ? '' : y(o[e]),
                                'data-status': e,
                            },
                            t,
                            h().createElement(
                                'div',
                                {
                                    className: `jp-Notebook-ExecutionIndicator-tooltip ${r} ${f}`,
                                },
                                h().createElement(
                                    'span',
                                    null,
                                    ' ',
                                    y(o[e]),
                                    ' '
                                ),
                                n
                            )
                        );
                if (
                    'connecting' === i.kernelStatus ||
                    'disconnected' === i.kernelStatus ||
                    'unknown' === i.kernelStatus
                )
                    return k(
                        u,
                        h().createElement(
                            _.offlineBoltIcon.react,
                            Object.assign({}, g)
                        ),
                        []
                    );
                if (
                    'starting' === i.kernelStatus ||
                    'terminating' === i.kernelStatus ||
                    'restarting' === i.kernelStatus ||
                    'initializing' === i.kernelStatus
                )
                    return k(
                        u,
                        h().createElement(
                            _.circleIcon.react,
                            Object.assign({}, g)
                        ),
                        []
                    );
                if ('busy' === i.executionStatus)
                    return k('busy', b(v), [
                        h().createElement(
                            'span',
                            { key: 0 },
                            s.__(`Executed ${p}/${C} cells`)
                        ),
                        h().createElement(
                            'span',
                            { key: 1 },
                            s._n(
                                'Elapsed time: %1 second',
                                'Elapsed time: %1 seconds',
                                m
                            )
                        ),
                    ]);
                {
                    const e = 'busy' === i.kernelStatus ? 0 : 100,
                        t =
                            'busy' === i.kernelStatus || 0 === m
                                ? []
                                : [
                                      h().createElement(
                                          'span',
                                          { key: 0 },
                                          s._n(
                                              'Executed %1 cell',
                                              'Executed %1 cells',
                                              C
                                          )
                                      ),
                                      h().createElement(
                                          'span',
                                          { key: 1 },
                                          s._n(
                                              'Elapsed time: %1 second',
                                              'Elapsed time: %1 seconds',
                                              m
                                          )
                                      ),
                                  ];
                    return k(i.kernelStatus, b(e), t);
                }
            }
            class Ce extends n.VDomRenderer {
                constructor(e, t = !0) {
                    super(new Ce.Model()),
                        (this.translator = e || l.nullTranslator),
                        this.addClass(M.interactiveItem);
                }
                render() {
                    if (null !== this.model && this.model.renderFlag) {
                        const e = this.model.currentNotebook;
                        return e
                            ? h().createElement(me, {
                                  displayOption: this.model.displayOption,
                                  state: this.model.executionState(e),
                                  translator: this.translator,
                              })
                            : h().createElement(me, {
                                  displayOption: this.model.displayOption,
                                  state: void 0,
                                  translator: this.translator,
                              });
                    }
                    return h().createElement('div', null);
                }
            }
            !(function(e) {
                class t extends n.VDomModel {
                    constructor() {
                        super(),
                            (this._notebookExecutionProgress = new WeakMap()),
                            (this._displayOption = {
                                showOnToolBar: !0,
                                showProgress: !0,
                            }),
                            (this._renderFlag = !0);
                    }
                    attachNotebook(e) {
                        var t, o, n, s;
                        if (e && e.content && e.context) {
                            const l = e.content,
                                i = e.context;
                            if (
                                ((this._currentNotebook = l),
                                !this._notebookExecutionProgress.has(l))
                            ) {
                                this._notebookExecutionProgress.set(l, {
                                    executionStatus: 'idle',
                                    kernelStatus: 'idle',
                                    totalTime: 0,
                                    interval: 0,
                                    timeout: 0,
                                    scheduledCell: new Set(),
                                    scheduledCellNumber: 0,
                                    needReset: !0,
                                });
                                const e = this._notebookExecutionProgress.get(
                                        l
                                    ),
                                    a = t => {
                                        e &&
                                            (e.kernelStatus =
                                                t.kernelDisplayStatus),
                                            this.stateChanged.emit(void 0);
                                    };
                                i.statusChanged.connect(a, this);
                                const d = t => {
                                    e &&
                                        (e.kernelStatus =
                                            t.kernelDisplayStatus),
                                        this.stateChanged.emit(void 0);
                                };
                                i.connectionStatusChanged.connect(d, this),
                                    i.disposed.connect(e => {
                                        e.connectionStatusChanged.disconnect(
                                            d,
                                            this
                                        ),
                                            e.statusChanged.disconnect(a, this);
                                    });
                                const r = (e, t) => {
                                    const o = t.msg,
                                        n = o.header.msg_id;
                                    if ('execute_request' === o.header.msg_type)
                                        this._cellScheduledCallback(l, n);
                                    else if (
                                        ge.KernelMessage.isStatusMsg(o) &&
                                        'idle' === o.content.execution_state
                                    ) {
                                        const e = o.parent_header.msg_id;
                                        this._cellExecutedCallback(l, e);
                                    } else
                                        'execute_input' === o.header.msg_type &&
                                            this._startTimer(l);
                                };
                                null ===
                                    (o =
                                        null === (t = i.session) || void 0 === t
                                            ? void 0
                                            : t.kernel) ||
                                    void 0 === o ||
                                    o.anyMessage.connect(r),
                                    null ===
                                        (s =
                                            null === (n = i.session) ||
                                            void 0 === n
                                                ? void 0
                                                : n.kernel) ||
                                        void 0 === s ||
                                        s.disposed.connect(e =>
                                            e.anyMessage.disconnect(r)
                                        );
                                const c = (t, o) => {
                                    e &&
                                        (this._resetTime(e),
                                        this.stateChanged.emit(void 0),
                                        o.newValue &&
                                            o.newValue.anyMessage.connect(r));
                                };
                                i.kernelChanged.connect(c),
                                    i.disposed.connect(e =>
                                        e.kernelChanged.disconnect(c)
                                    );
                            }
                        }
                    }
                    get currentNotebook() {
                        return this._currentNotebook;
                    }
                    get displayOption() {
                        return this._displayOption;
                    }
                    set displayOption(e) {
                        this._displayOption = e;
                    }
                    executionState(e) {
                        return this._notebookExecutionProgress.get(e);
                    }
                    _cellExecutedCallback(e, t) {
                        const o = this._notebookExecutionProgress.get(e);
                        o &&
                            o.scheduledCell.has(t) &&
                            (o.scheduledCell.delete(t),
                            0 === o.scheduledCell.size &&
                                (window.setTimeout(() => {
                                    (o.executionStatus = 'idle'),
                                        clearInterval(o.interval),
                                        this.stateChanged.emit(void 0);
                                }, 150),
                                (o.timeout = window.setTimeout(() => {
                                    o.needReset = !0;
                                }, 1e3))));
                    }
                    _startTimer(e) {
                        const t = this._notebookExecutionProgress.get(e);
                        t &&
                            'busy' !== t.executionStatus &&
                            ((t.executionStatus = 'busy'),
                            clearTimeout(t.timeout),
                            this.stateChanged.emit(void 0),
                            (t.interval = window.setInterval(() => {
                                this._tick(t);
                            }, 1e3)));
                    }
                    _cellScheduledCallback(e, t) {
                        const o = this._notebookExecutionProgress.get(e);
                        o &&
                            !o.scheduledCell.has(t) &&
                            (o.needReset && this._resetTime(o),
                            o.scheduledCell.add(t),
                            (o.scheduledCellNumber += 1));
                    }
                    _tick(e) {
                        (e.totalTime += 1), this.stateChanged.emit(void 0);
                    }
                    _resetTime(e) {
                        (e.totalTime = 0),
                            (e.scheduledCellNumber = 0),
                            (e.executionStatus = 'idle'),
                            (e.scheduledCell = new Set()),
                            clearTimeout(e.timeout),
                            clearInterval(e.interval),
                            (e.needReset = !1);
                    }
                    get renderFlag() {
                        return this._renderFlag;
                    }
                    updateRenderOption(e) {
                        this.displayOption.showOnToolBar &&
                            (e.showOnToolBar
                                ? (this._renderFlag = !0)
                                : (this._renderFlag = !1)),
                            (this.displayOption.showProgress = e.showProgress),
                            this.stateChanged.emit(void 0);
                    }
                }
                function o(e) {
                    let t = !0,
                        o = !0;
                    const n = e.get('kernelStatus').composite;
                    return (
                        n && ((t = !n.showOnStatusBar), (o = n.showProgress)),
                        { showOnToolBar: t, showProgress: o }
                    );
                }
                (e.Model = t),
                    (e.createExecutionIndicatorItem = function(t, n, s) {
                        const l = new e(n);
                        return (
                            (l.model.displayOption = {
                                showOnToolBar: !0,
                                showProgress: !0,
                            }),
                            l.model.attachNotebook({
                                content: t.content,
                                context: t.sessionContext,
                            }),
                            s &&
                                s
                                    .then(e => {
                                        const t = e => {
                                            l.model.updateRenderOption(o(e));
                                        };
                                        e.changed.connect(t),
                                            t(e),
                                            l.disposed.connect(() => {
                                                e.changed.disconnect(t);
                                            });
                                    })
                                    .catch(e => {
                                        console.error(e.message);
                                    }),
                            l
                        );
                    }),
                    (e.getSettingValue = o);
            })(Ce || (Ce = {}));
        },
    },
]);
//# sourceMappingURL=2030.7d275ac.js.map
