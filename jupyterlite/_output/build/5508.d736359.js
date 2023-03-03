'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [5508, 362],
    {
        80362: (e, t, o) => {
            o.r(t),
                o.d(t, {
                    CellBarExtension: () => u,
                    CellToolbarTracker: () => d,
                });
            var l = o(47343),
                n = o(18205),
                i = o(43892),
                a = o(32798);
            const r = [
                    'text/plain',
                    'application/vnd.jupyter.stdout',
                    'application/vnd.jupyter.stderr',
                ],
                s = 'jp-cell-toolbar',
                c = 'jp-toolbar-overlap';
            class d {
                constructor(e, t) {
                    (this._isDisposed = !1),
                        (this._panel = e),
                        (this._previousActiveCell = this._panel.content.activeCell),
                        (this._toolbar = t),
                        this._onToolbarChanged(),
                        this._toolbar.changed.connect(
                            this._onToolbarChanged,
                            this
                        ),
                        e.revealed.then(() =>
                            this._onActiveCellChanged(e.content)
                        ),
                        e.content.renderingLayoutChanged.connect(
                            this._onActiveCellChanged,
                            this
                        ),
                        e.content.activeCellChanged.connect(
                            this._onActiveCellChanged,
                            this
                        );
                }
                _onActiveCellChanged(e) {
                    this._previousActiveCell &&
                        this._removeToolbar(this._previousActiveCell.model);
                    const t = e.activeCell;
                    t &&
                        (this._addToolbar(t.model),
                        (this._previousActiveCell = t),
                        this._updateCellForToolbarOverlap(t));
                }
                get isDisposed() {
                    return this._isDisposed;
                }
                dispose() {
                    var e;
                    if (this.isDisposed) return;
                    (this._isDisposed = !0),
                        this._toolbar.changed.disconnect(
                            this._onToolbarChanged,
                            this
                        );
                    const t =
                        null === (e = this._panel) || void 0 === e
                            ? void 0
                            : e.context.model.cells;
                    t && (0, i.each)(t.iter(), e => this._removeToolbar(e)),
                        (this._panel = null),
                        a.Signal.clearData(this);
                }
                _addToolbar(e) {
                    const t = this._getCell(e);
                    if (t) {
                        const e = new l.Toolbar();
                        e.addClass('jp-cell-menu'),
                            (0, i.toArray)(this._toolbar).forEach(
                                ({ name: t, widget: o }) => {
                                    e.addItem(t, o);
                                }
                            ),
                            e.addClass(s),
                            t.layout.insertWidget(0, e),
                            t.displayChanged.connect(
                                this._resizeEventCallback,
                                this
                            ),
                            t.model.contentChanged.connect(
                                this._changedEventCallback,
                                this
                            );
                    }
                }
                _getCell(e) {
                    var t;
                    return null === (t = this._panel) || void 0 === t
                        ? void 0
                        : t.content.widgets.find(t => t.model === e);
                }
                _findToolbarWidgets(e) {
                    return e.layout.widgets.filter(e => e.hasClass(s)) || [];
                }
                _removeToolbar(e) {
                    const t = this._getCell(e);
                    t &&
                        (this._findToolbarWidgets(t).forEach(e => e.dispose()),
                        t.displayChanged.disconnect(
                            this._resizeEventCallback,
                            this
                        )),
                        e.contentChanged.disconnect(
                            this._changedEventCallback,
                            this
                        );
                }
                _onToolbarChanged() {
                    var e;
                    const t =
                        null === (e = this._panel) || void 0 === e
                            ? void 0
                            : e.content.activeCell;
                    t &&
                        (this._removeToolbar(t.model),
                        this._addToolbar(t.model));
                }
                _changedEventCallback() {
                    var e;
                    const t =
                        null === (e = this._panel) || void 0 === e
                            ? void 0
                            : e.content.activeCell;
                    null != t && this._updateCellForToolbarOverlap(t);
                }
                _resizeEventCallback() {
                    var e;
                    const t =
                        null === (e = this._panel) || void 0 === e
                            ? void 0
                            : e.content.activeCell;
                    null != t && this._updateCellForToolbarOverlap(t);
                }
                _updateCellForToolbarOverlap(e) {
                    const t = e.node;
                    t.classList.remove(c),
                        this._cellToolbarOverlapsContents(e) &&
                            t.classList.add(c);
                }
                _cellToolbarOverlapsContents(e) {
                    var t;
                    const o = e.model.type,
                        l = this._cellEditorWidgetLeft(e),
                        n = this._cellEditorWidgetRight(e),
                        i = this._cellToolbarLeft(e);
                    return (
                        null !== i &&
                        ((l + n) / 2 > i ||
                            ('markdown' === o && e.rendered
                                ? this._markdownOverlapsToolbar(e)
                                : 'default' ===
                                  (null === (t = this._panel) || void 0 === t
                                      ? void 0
                                      : t.content.renderingLayout)
                                ? this._codeOverlapsToolbar(e)
                                : this._outputOverlapsToolbar(e)))
                    );
                }
                _markdownOverlapsToolbar(e) {
                    const t = e.inputArea.renderedInput.node.firstElementChild;
                    if (null === t) return !1;
                    const o = t.style.maxWidth;
                    t.style.maxWidth = 'max-content';
                    const l = t.getBoundingClientRect().right;
                    t.style.maxWidth = o;
                    const n = this._cellToolbarLeft(e);
                    return null !== n && l > n;
                }
                _outputOverlapsToolbar(e) {
                    const t = e.outputArea.node;
                    if (t) {
                        const o = t.querySelectorAll('[data-mime-type]'),
                            l = this._cellToolbarRect(e);
                        if (l) {
                            const { left: e, bottom: t } = l;
                            return Array.from(o).some(o => {
                                const l = o.firstElementChild;
                                if (l) {
                                    const n = new Range();
                                    r.includes(
                                        o.getAttribute('data-mime-type') || ''
                                    )
                                        ? n.selectNodeContents(l)
                                        : n.selectNode(l);
                                    const {
                                        right: i,
                                        top: a,
                                    } = n.getBoundingClientRect();
                                    return i > e && a < t;
                                }
                                return !1;
                            });
                        }
                    }
                    return !1;
                }
                _codeOverlapsToolbar(e) {
                    const t = e.editorWidget;
                    if (e.editor.lineCount < 1) return !1;
                    const o = t.node.getElementsByClassName('CodeMirror-line');
                    if (o.length < 1) return !1;
                    const l = o[0].children[0].getBoundingClientRect().right,
                        n = this._cellToolbarLeft(e);
                    return null !== n && l > n;
                }
                _cellEditorWidgetLeft(e) {
                    return e.editorWidget.node.getBoundingClientRect().left;
                }
                _cellEditorWidgetRight(e) {
                    return e.editorWidget.node.getBoundingClientRect().right;
                }
                _cellToolbarRect(e) {
                    const t = this._findToolbarWidgets(e);
                    return t.length < 1
                        ? null
                        : t[0].node.getBoundingClientRect();
                }
                _cellToolbarLeft(e) {
                    var t;
                    return (
                        (null === (t = this._cellToolbarRect(e)) || void 0 === t
                            ? void 0
                            : t.left) || null
                    );
                }
            }
            const h = [
                { command: 'notebook:duplicate-below', name: 'duplicate-cell' },
                { command: 'notebook:move-cell-up', name: 'move-cell-up' },
                { command: 'notebook:move-cell-down', name: 'move-cell-down' },
                {
                    command: 'notebook:insert-cell-above',
                    name: 'insert-cell-above',
                },
                {
                    command: 'notebook:insert-cell-below',
                    name: 'insert-cell-below',
                },
                { command: 'notebook:delete-cell', name: 'delete-cell' },
            ];
            class u {
                constructor(e, t) {
                    (this._commands = e),
                        (this._toolbarFactory =
                            null != t ? t : this.defaultToolbarFactory);
                }
                get defaultToolbarFactory() {
                    const e = (0, l.createDefaultFactory)(this._commands);
                    return t =>
                        new n.ObservableList({
                            values: h.map(o => ({
                                name: o.name,
                                widget: e(u.FACTORY_NAME, t, o),
                            })),
                        });
                }
                createNew(e) {
                    return new d(e, this._toolbarFactory(e));
                }
            }
            u.FACTORY_NAME = 'Cell';
        },
    },
]);
//# sourceMappingURL=5508.d736359.js.map
