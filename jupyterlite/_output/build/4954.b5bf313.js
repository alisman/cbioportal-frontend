'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [4954],
    {
        14954: (e, t, s) => {
            s.r(t),
                s.d(t, {
                    AttachmentsCell: () => de,
                    AttachmentsCellModel: () => H,
                    Cell: () => ie,
                    CellDragUtils: () => h,
                    CellFooter: () => v,
                    CellHeader: () => y,
                    CellModel: () => W,
                    CodeCell: () => oe,
                    CodeCellModel: () => R,
                    Collapser: () => m,
                    InputArea: () => O,
                    InputCollapser: () => g,
                    InputPlaceholder: () => $,
                    InputPrompt: () => x,
                    MARKDOWN_HEADING_COLLAPSED: () => Z,
                    MarkdownCell: () => re,
                    MarkdownCellModel: () => B,
                    OutputCollapser: () => _,
                    OutputPlaceholder: () => T,
                    Placeholder: () => J,
                    RawCell: () => le,
                    RawCellModel: () => V,
                    isCodeCellModel: () => A,
                    isMarkdownCellModel: () => I,
                    isRawCellModel: () => P,
                });
            var a = s(43892),
                n = s(93383);
            const i = 'jp-dragImage',
                o = 'jp-dragImage-singlePrompt',
                d = 'jp-dragImage-content',
                r = 'jp-dragImage-prompt',
                l = 'jp-dragImage-multipleBack';
            var h;
            !(function(e) {
                (e.findCell = function(e, t, s) {
                    let n = -1;
                    for (; e && e.parentElement; ) {
                        if (s(e)) {
                            (0, a.each)(t, (t, s) => {
                                if (t.node === e) return (n = s), !1;
                            });
                            break;
                        }
                        e = e.parentElement;
                    }
                    return n;
                }),
                    (e.detectTargetArea = function(e, t) {
                        let s;
                        return (
                            (s = e
                                ? e.editorWidget.node.contains(t)
                                    ? 'input'
                                    : e.promptNode.contains(t)
                                    ? 'prompt'
                                    : 'cell'
                                : 'unknown'),
                            s
                        );
                    }),
                    (e.shouldStartDrag = function(e, t, s, a) {
                        const n = Math.abs(s - e),
                            i = Math.abs(a - t);
                        return n >= 5 || i >= 5;
                    }),
                    (e.createCellDragImage = function(e, t) {
                        const s = t.length;
                        let a;
                        if ('code' === e.model.type) {
                            const t = e.model.executionCount;
                            (a = ' '), t && (a = t.toString());
                        } else a = '';
                        const h = e.model.value.text
                            .split('\n')[0]
                            .slice(0, 26);
                        return s > 1
                            ? '' !== a
                                ? n.VirtualDOM.realize(
                                      n.h.div(
                                          n.h.div(
                                              { className: i },
                                              n.h.span(
                                                  { className: r },
                                                  '[' + a + ']:'
                                              ),
                                              n.h.span({ className: d }, h)
                                          ),
                                          n.h.div({ className: l }, '')
                                      )
                                  )
                                : n.VirtualDOM.realize(
                                      n.h.div(
                                          n.h.div(
                                              { className: i },
                                              n.h.span({ className: r }),
                                              n.h.span({ className: d }, h)
                                          ),
                                          n.h.div({ className: l }, '')
                                      )
                                  )
                            : '' !== a
                            ? n.VirtualDOM.realize(
                                  n.h.div(
                                      n.h.div(
                                          { className: `${i} ${o}` },
                                          n.h.span(
                                              { className: r },
                                              '[' + a + ']:'
                                          ),
                                          n.h.span({ className: d }, h)
                                      )
                                  )
                              )
                            : n.VirtualDOM.realize(
                                  n.h.div(
                                      n.h.div(
                                          { className: `${i} ${o}` },
                                          n.h.span({ className: r }),
                                          n.h.span({ className: d }, h)
                                      )
                                  )
                              );
                    });
            })(h || (h = {}));
            var u = s(47343),
                c = s(33349),
                p = s(62471);
            class m extends u.ReactWidget {
                constructor() {
                    super(), this.addClass('jp-Collapser');
                }
                get collapsed() {
                    return !1;
                }
                render() {
                    return p.createElement('div', {
                        className: 'jp-Collapser-child',
                        onClick: e => this.handleClick(e),
                    });
                }
            }
            class g extends m {
                constructor() {
                    super(), this.addClass('jp-InputCollapser');
                }
                get collapsed() {
                    var e;
                    const t =
                        null === (e = this.parent) || void 0 === e
                            ? void 0
                            : e.parent;
                    return !!t && t.inputHidden;
                }
                handleClick(e) {
                    var t;
                    const s =
                        null === (t = this.parent) || void 0 === t
                            ? void 0
                            : t.parent;
                    s && (s.inputHidden = !s.inputHidden), this.update();
                }
            }
            class _ extends m {
                constructor() {
                    super(), this.addClass('jp-OutputCollapser');
                }
                get collapsed() {
                    var e;
                    const t =
                        null === (e = this.parent) || void 0 === e
                            ? void 0
                            : e.parent;
                    return !!t && t.outputHidden;
                }
                handleClick(e) {
                    var t, s;
                    const a =
                        null === (t = this.parent) || void 0 === t
                            ? void 0
                            : t.parent;
                    if (
                        a &&
                        ((a.outputHidden = !a.outputHidden), a.outputHidden)
                    ) {
                        let e =
                            null === (s = a.parent) || void 0 === s
                                ? void 0
                                : s.node;
                        e && c.ElementExt.scrollIntoViewIfNeeded(e, a.node);
                    }
                    this.update();
                }
            }
            var C = s(86098);
            class y extends C.Widget {
                constructor() {
                    super(), this.addClass('jp-CellHeader');
                }
            }
            class v extends C.Widget {
                constructor() {
                    super(), this.addClass('jp-CellFooter');
                }
            }
            var w = s(51972),
                f = s(97951);
            class O extends C.Widget {
                constructor(e) {
                    super(), this.addClass('jp-InputArea');
                    const t = (this.model = e.model),
                        s = (this.contentFactory =
                            e.contentFactory || O.defaultContentFactory),
                        a = (this._prompt = s.createInputPrompt());
                    a.addClass('jp-InputArea-prompt');
                    const n = {
                            model: t,
                            factory: s.editorFactory,
                            updateOnShow: e.updateOnShow,
                        },
                        i = (this._editor = new w.CodeEditorWrapper(n));
                    i.addClass('jp-InputArea-editor');
                    const o = (this.layout = new C.PanelLayout());
                    o.addWidget(a), e.placeholder || o.addWidget(i);
                }
                get editorWidget() {
                    return this._editor;
                }
                get editor() {
                    return this._editor.editor;
                }
                get promptNode() {
                    return this._prompt.node;
                }
                get renderedInput() {
                    return this._rendered;
                }
                renderInput(e) {
                    const t = this.layout;
                    this._rendered && (this._rendered.parent = null),
                        this._editor.hide(),
                        (this._rendered = e),
                        t.addWidget(e);
                }
                showEditor() {
                    this._rendered && (this._rendered.parent = null),
                        this._editor.show();
                }
                setPrompt(e) {
                    this._prompt.executionCount = e;
                }
                dispose() {
                    this.isDisposed ||
                        ((this._prompt = null),
                        (this._editor = null),
                        (this._rendered = null),
                        super.dispose());
                }
            }
            !(function(e) {
                class t {
                    constructor(t = {}) {
                        this._editor =
                            t.editorFactory || e.defaultEditorFactory;
                    }
                    get editorFactory() {
                        return this._editor;
                    }
                    createInputPrompt() {
                        return new x();
                    }
                }
                (e.ContentFactory = t),
                    (e.defaultEditorFactory = new f.CodeMirrorEditorFactory().newInlineEditor),
                    (e.defaultContentFactory = new t({}));
            })(O || (O = {}));
            class x extends C.Widget {
                constructor() {
                    super(),
                        (this._executionCount = null),
                        this.addClass('jp-InputPrompt');
                }
                get executionCount() {
                    return this._executionCount;
                }
                set executionCount(e) {
                    (this._executionCount = e),
                        (this.node.textContent =
                            null === e ? ' ' : `[${e || ' '}]:`);
                }
            }
            var S = s(26169),
                b = s(32798),
                D = s(18205),
                E = s(80814);
            class k {
                constructor(e = {}) {
                    if (
                        ((this._map = new D.ObservableMap()),
                        (this._isDisposed = !1),
                        (this._stateChanged = new b.Signal(this)),
                        (this._changed = new b.Signal(this)),
                        (this._modelDB = null),
                        (this._serialized = null),
                        (this._changeGuard = !1),
                        (this.contentFactory =
                            e.contentFactory || k.defaultContentFactory),
                        e.values)
                    )
                        for (const t of Object.keys(e.values))
                            void 0 !== e.values[t] && this.set(t, e.values[t]);
                    this._map.changed.connect(this._onMapChanged, this),
                        e.modelDB &&
                            ((this._modelDB = e.modelDB),
                            (this._serialized = this._modelDB.createValue(
                                'attachments'
                            )),
                            this._serialized.get()
                                ? this.fromJSON(this._serialized.get())
                                : this._serialized.set(this.toJSON()),
                            this._serialized.changed.connect(
                                this._onSerializedChanged,
                                this
                            ));
                }
                get stateChanged() {
                    return this._stateChanged;
                }
                get changed() {
                    return this._changed;
                }
                get keys() {
                    return this._map.keys();
                }
                get length() {
                    return this._map.keys().length;
                }
                get isDisposed() {
                    return this._isDisposed;
                }
                dispose() {
                    this.isDisposed ||
                        ((this._isDisposed = !0),
                        this._map.dispose(),
                        b.Signal.clearData(this));
                }
                has(e) {
                    return this._map.has(e);
                }
                get(e) {
                    return this._map.get(e);
                }
                set(e, t) {
                    const s = this._createItem({ value: t });
                    this._map.set(e, s);
                }
                remove(e) {
                    this._map.delete(e);
                }
                clear() {
                    this._map.values().forEach(e => {
                        e.dispose();
                    }),
                        this._map.clear();
                }
                fromJSON(e) {
                    this.clear(),
                        Object.keys(e).forEach(t => {
                            void 0 !== e[t] && this.set(t, e[t]);
                        });
                }
                toJSON() {
                    const e = {};
                    for (const t of this._map.keys())
                        e[t] = this._map.get(t).toJSON();
                    return e;
                }
                _createItem(e) {
                    const t = this.contentFactory.createAttachmentModel(e);
                    return t.changed.connect(this._onGenericChange, this), t;
                }
                _onMapChanged(e, t) {
                    this._serialized &&
                        !this._changeGuard &&
                        ((this._changeGuard = !0),
                        this._serialized.set(this.toJSON()),
                        (this._changeGuard = !1)),
                        this._changed.emit(t),
                        this._stateChanged.emit(void 0);
                }
                _onSerializedChanged(e, t) {
                    this._changeGuard ||
                        ((this._changeGuard = !0),
                        this.fromJSON(t.newValue),
                        (this._changeGuard = !1));
                }
                _onGenericChange() {
                    this._stateChanged.emit(void 0);
                }
            }
            !(function(e) {
                class t {
                    createAttachmentModel(e) {
                        return new E.AttachmentModel(e);
                    }
                }
                (e.ContentFactory = t), (e.defaultContentFactory = new t());
            })(k || (k = {}));
            class j {
                constructor(e) {
                    (this._parent = e.parent || null), (this._model = e.model);
                }
                async resolveUrl(e) {
                    return this._parent && !e.startsWith('attachment:')
                        ? this._parent.resolveUrl(e)
                        : e;
                }
                async getDownloadUrl(e) {
                    if (this._parent && !e.startsWith('attachment:'))
                        return this._parent.getDownloadUrl(e);
                    const t = e.slice('attachment:'.length),
                        s = this._model.get(t);
                    if (void 0 === s) return e;
                    const { data: a } = s,
                        n = Object.keys(a)[0];
                    if (
                        void 0 === n ||
                        -1 === E.imageRendererFactory.mimeTypes.indexOf(n)
                    )
                        throw new Error(
                            `Cannot render unknown image mime type "${n}".`
                        );
                    return `data:${n};base64,${a[n]}`;
                }
                isLocal(e) {
                    var t, s, a;
                    return (
                        !(this._parent && !e.startsWith('attachment:')) ||
                        null ===
                            (a =
                                null === (s = (t = this._parent).isLocal) ||
                                void 0 === s
                                    ? void 0
                                    : s.call(t, e)) ||
                        void 0 === a ||
                        a
                    );
                }
            }
            var M = s(88262),
                N = s(9073);
            const F = M.createMutex();
            function A(e) {
                return 'code' === e.type;
            }
            function I(e) {
                return 'markdown' === e.type;
            }
            function P(e) {
                return 'raw' === e.type;
            }
            class W extends w.CodeEditor.Model {
                constructor(e) {
                    var t;
                    super({
                        modelDB: e.modelDB,
                        id:
                            e.id ||
                            (null === (t = e.cell) || void 0 === t
                                ? void 0
                                : t.id) ||
                            S.UUID.uuid4(),
                    }),
                        (this.contentChanged = new b.Signal(this)),
                        (this.stateChanged = new b.Signal(this)),
                        this.value.changed.connect(this.onGenericChange, this),
                        this.modelDB.createValue('type').set(this.type);
                    const s = this.modelDB.createMap('metadata');
                    s.changed.connect(this.onModelDBMetadataChange, this),
                        s.changed.connect(this.onGenericChange, this);
                    const a = e.cell,
                        n = this.modelDB.createValue('trusted');
                    if ((n.changed.connect(this.onTrustedChanged, this), !a))
                        return void n.set(!1);
                    n.set(!!a.metadata.trusted),
                        delete a.metadata.trusted,
                        Array.isArray(a.source)
                            ? (this.value.text = a.source
                                  .map(e =>
                                      e
                                          .replace(/\r\n/g, '\n')
                                          .replace(/\r/g, '\n')
                                  )
                                  .join(''))
                            : (this.value.text = a.source
                                  .replace(/\r\n/g, '\n')
                                  .replace(/\r/g, '\n'));
                    const i = S.JSONExt.deepCopy(a.metadata);
                    'raw' !== this.type && delete i.format,
                        'code' !== this.type &&
                            (delete i.collapsed, delete i.scrolled);
                    for (const e in i) s.set(e, i[e]);
                }
                get type() {
                    return 'raw';
                }
                get id() {
                    return this.sharedModel.getId();
                }
                get metadata() {
                    return this.modelDB.get('metadata');
                }
                get trusted() {
                    return this.modelDB.getValue('trusted');
                }
                set trusted(e) {
                    this.trusted !== e && this.modelDB.setValue('trusted', e);
                }
                toJSON() {
                    const e = Object.create(null);
                    for (const t of this.metadata.keys()) {
                        const s = JSON.parse(
                            JSON.stringify(this.metadata.get(t))
                        );
                        e[t] = s;
                    }
                    return (
                        this.trusted && (e.trusted = !0),
                        {
                            cell_type: this.type,
                            source: this.value.text,
                            metadata: e,
                        }
                    );
                }
                onTrustedChanged(e, t) {}
                switchSharedModel(e, t) {
                    if (t) {
                        const t = e.getMetadata();
                        t && this._updateModelDBMetadata(t);
                    }
                    super.switchSharedModel(e, t);
                }
                onModelDBMetadataChange(e, t) {
                    const s = this.sharedModel.getMetadata();
                    F(() => {
                        switch (t.type) {
                            case 'add':
                            case 'change':
                                this._changeCellMetadata(s, t);
                                break;
                            case 'remove':
                                delete s[t.key];
                                break;
                            default:
                                throw new Error(
                                    `Invalid event type: ${t.type}`
                                );
                        }
                        this.sharedModel.setMetadata(s);
                    });
                }
                _changeCellMetadata(e, t) {
                    switch (t.key) {
                        case 'jupyter':
                            e.jupyter = t.newValue;
                            break;
                        case 'collapsed':
                            e.collapsed = t.newValue;
                            break;
                        case 'name':
                            e.name = t.newValue;
                            break;
                        case 'scrolled':
                            e.scrolled = t.newValue;
                            break;
                        case 'tags':
                            e.tags = t.newValue;
                            break;
                        case 'trusted':
                            e.trusted = t.newValue;
                            break;
                        default:
                            e[t.key] = t.newValue;
                    }
                }
                _onSharedModelChanged(e, t) {
                    super._onSharedModelChanged(e, t),
                        F(() => {
                            var e;
                            if (t.metadataChange) {
                                const s =
                                    null === (e = t.metadataChange) ||
                                    void 0 === e
                                        ? void 0
                                        : e.newValue;
                                s && this._updateModelDBMetadata(s);
                            }
                        });
                }
                _updateModelDBMetadata(e) {
                    Object.keys(e).map(t => {
                        switch (t) {
                            case 'collapsed':
                                this.metadata.set('collapsed', e.jupyter);
                                break;
                            case 'jupyter':
                                this.metadata.set('jupyter', e.jupyter);
                                break;
                            case 'name':
                                this.metadata.set('name', e.name);
                                break;
                            case 'scrolled':
                                this.metadata.set('scrolled', e.scrolled);
                                break;
                            case 'tags':
                                this.metadata.set('tags', e.tags);
                                break;
                            case 'trusted':
                                this.metadata.set('trusted', e.trusted);
                                break;
                            default:
                                this.metadata.set(t, e[t]);
                        }
                    });
                }
                onGenericChange() {
                    this.contentChanged.emit(void 0);
                }
            }
            class H extends W {
                constructor(e) {
                    super(e);
                    const t = e.contentFactory || H.defaultContentFactory;
                    let s;
                    const a = e.cell;
                    !a ||
                        ('raw' !== a.cell_type && 'markdown' !== a.cell_type) ||
                        (s = a.attachments),
                        (this._attachments = t.createAttachmentsModel({
                            values: s,
                            modelDB: this.modelDB,
                        })),
                        this._attachments.stateChanged.connect(
                            this.onGenericChange,
                            this
                        );
                }
                get attachments() {
                    return this._attachments;
                }
                toJSON() {
                    const e = super.toJSON();
                    return (
                        this.attachments.length &&
                            (e.attachments = this.attachments.toJSON()),
                        e
                    );
                }
            }
            !(function(e) {
                class t {
                    createAttachmentsModel(e) {
                        return new k(e);
                    }
                }
                (e.ContentFactory = t), (e.defaultContentFactory = new t());
            })(H || (H = {}));
            class V extends H {
                get type() {
                    return 'raw';
                }
                toJSON() {
                    const e = super.toJSON();
                    return (e.id = this.id), e;
                }
            }
            class B extends H {
                constructor(e) {
                    super(e), (this.mimeType = 'text/x-ipythongfm');
                }
                get type() {
                    return 'markdown';
                }
                toJSON() {
                    const e = super.toJSON();
                    return (e.id = this.id), e;
                }
            }
            class R extends W {
                constructor(e) {
                    var t;
                    super(e), (this._executedCode = ''), (this._isDirty = !1);
                    const s = e.contentFactory || R.defaultContentFactory,
                        a = this.trusted,
                        n = e.cell;
                    let i = [];
                    const o = this.modelDB.createValue('executionCount');
                    if (
                        (o.get() ||
                            (n && 'code' === n.cell_type
                                ? (o.set(n.execution_count || null),
                                  (i =
                                      null !== (t = n.outputs) && void 0 !== t
                                          ? t
                                          : []),
                                  null != n.execution_count &&
                                      (this._executedCode = this.value.text.trim()))
                                : o.set(null)),
                        this.value.changed.connect(this._onValueChanged, this),
                        o.changed.connect(this._onExecutionCountChanged, this),
                        F(() => {
                            this.sharedModel.setOutputs(i);
                        }),
                        (this._outputs = s.createOutputArea({
                            trusted: a,
                            values: i,
                        })),
                        this._outputs.changed.connect(
                            this.onGenericChange,
                            this
                        ),
                        this._outputs.changed.connect(
                            this.onModelDBOutputsChange,
                            this
                        ),
                        this.metadata.changed.connect(L.collapseChanged, this),
                        this.metadata.has('collapsed'))
                    ) {
                        const e = this.metadata.get('collapsed');
                        L.collapseChanged(this.metadata, {
                            type: 'change',
                            key: 'collapsed',
                            oldValue: e,
                            newValue: e,
                        });
                    } else if (this.metadata.has('jupyter')) {
                        const e = this.metadata.get('jupyter');
                        e.hasOwnProperty('outputs_hidden') &&
                            L.collapseChanged(this.metadata, {
                                type: 'change',
                                key: 'jupyter',
                                oldValue: e,
                                newValue: e,
                            });
                    }
                }
                switchSharedModel(e, t) {
                    t &&
                        (this.clearExecution(),
                        e.getOutputs().forEach(e => this._outputs.add(e))),
                        super.switchSharedModel(e, t);
                }
                get type() {
                    return 'code';
                }
                get executionCount() {
                    return this.modelDB.has('executionCount')
                        ? this.modelDB.getValue('executionCount')
                        : null;
                }
                set executionCount(e) {
                    e !== this.executionCount &&
                        this.modelDB.setValue('executionCount', e || null);
                }
                get isDirty() {
                    return this._isDirty;
                }
                _setDirty(e) {
                    e !== this._isDirty &&
                        (e || (this._executedCode = this.value.text.trim()),
                        (this._isDirty = e),
                        this.stateChanged.emit({
                            name: 'isDirty',
                            oldValue: !e,
                            newValue: e,
                        }));
                }
                clearExecution() {
                    this.outputs.clear(),
                        (this.executionCount = null),
                        this._setDirty(!1),
                        this.metadata.delete('execution');
                }
                get outputs() {
                    return this._outputs;
                }
                dispose() {
                    this.isDisposed ||
                        (this._outputs.dispose(),
                        (this._outputs = null),
                        super.dispose());
                }
                toJSON() {
                    const e = super.toJSON();
                    return (
                        (e.execution_count = this.executionCount || null),
                        (e.outputs = this.outputs.toJSON()),
                        (e.id = this.id),
                        e
                    );
                }
                onTrustedChanged(e, t) {
                    this._outputs && (this._outputs.trusted = t.newValue),
                        this.stateChanged.emit({
                            name: 'trusted',
                            oldValue: t.oldValue,
                            newValue: t.newValue,
                        });
                }
                onModelDBOutputsChange(e, t) {
                    const s = this.sharedModel;
                    F(() => {
                        switch (t.type) {
                            case 'add': {
                                const e = t.newValues.map(e => e.toJSON());
                                s.updateOutputs(
                                    t.newIndex,
                                    t.newIndex + e.length,
                                    e
                                );
                                break;
                            }
                            case 'set': {
                                const e = t.newValues.map(e => e.toJSON());
                                s.updateOutputs(
                                    t.oldIndex,
                                    t.oldIndex + e.length,
                                    e
                                );
                                break;
                            }
                            case 'remove':
                                s.updateOutputs(t.oldIndex, t.oldValues.length);
                                break;
                            default:
                                throw new Error(
                                    `Invalid event type: ${t.type}`
                                );
                        }
                    });
                }
                _onValueChanged() {
                    null !== this.executionCount &&
                        this._setDirty(
                            this._executedCode !== this.value.text.trim()
                        );
                }
                _onSharedModelChanged(e, t) {
                    super._onSharedModelChanged(e, t),
                        F(() => {
                            t.outputsChange &&
                                (this.clearExecution(),
                                e
                                    .getOutputs()
                                    .forEach(e => this._outputs.add(e))),
                                t.executionCountChange &&
                                    (this.executionCount = t
                                        .executionCountChange.newValue
                                        ? t.executionCountChange.newValue
                                        : null);
                        });
                }
                _onExecutionCountChanged(e, t) {
                    const s = this.sharedModel;
                    F(() => {
                        s.execution_count = t.newValue ? t.newValue : null;
                    }),
                        this.contentChanged.emit(void 0),
                        this.stateChanged.emit({
                            name: 'executionCount',
                            oldValue: t.oldValue,
                            newValue: t.newValue,
                        }),
                        t.newValue && this.isDirty && this._setDirty(!1);
                }
            }
            var L;
            !(function(e) {
                class t {
                    createOutputArea(e) {
                        return new N.OutputAreaModel(e);
                    }
                }
                (e.ContentFactory = t), (e.defaultContentFactory = new t());
            })(R || (R = {})),
                (function(e) {
                    e.collapseChanged = function(e, t) {
                        if ('collapsed' === t.key) {
                            const s = e.get('jupyter') || {},
                                { outputs_hidden: a } = s,
                                n = (function(e, t) {
                                    var s = {};
                                    for (var a in e)
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            a
                                        ) &&
                                            t.indexOf(a) < 0 &&
                                            (s[a] = e[a]);
                                    if (
                                        null != e &&
                                        'function' ==
                                            typeof Object.getOwnPropertySymbols
                                    ) {
                                        var n = 0;
                                        for (
                                            a = Object.getOwnPropertySymbols(e);
                                            n < a.length;
                                            n++
                                        )
                                            t.indexOf(a[n]) < 0 &&
                                                Object.prototype.propertyIsEnumerable.call(
                                                    e,
                                                    a[n]
                                                ) &&
                                                (s[a[n]] = e[a[n]]);
                                    }
                                    return s;
                                })(s, ['outputs_hidden']);
                            a !== t.newValue &&
                                (void 0 !== t.newValue &&
                                    (n.outputs_hidden = t.newValue),
                                0 === Object.keys(n).length
                                    ? e.delete('jupyter')
                                    : e.set('jupyter', n));
                        } else if ('jupyter' === t.key) {
                            const s = t.newValue || {};
                            s.hasOwnProperty('outputs_hidden')
                                ? e.set('collapsed', s.outputs_hidden)
                                : e.delete('collapsed');
                        }
                    };
                })(L || (L = {}));
            var U = s(99729);
            const z = 'jp-Placeholder-content';
            class J extends u.ReactWidget {
                constructor(e) {
                    super(),
                        this.addClass('jp-Placeholder'),
                        (this._callback = e);
                }
                handleClick(e) {
                    (0, this._callback)(e);
                }
            }
            class $ extends J {
                constructor(e) {
                    super(e), this.addClass('jp-InputPlaceholder');
                }
                render() {
                    return [
                        p.createElement('div', {
                            className: 'jp-Placeholder-prompt jp-InputPrompt',
                            key: 'input',
                        }),
                        p.createElement(
                            'div',
                            {
                                className: z,
                                onClick: e => this.handleClick(e),
                                key: 'content',
                            },
                            p.createElement(U.ellipsesIcon.react, {
                                className: 'jp-MoreHorizIcon',
                                elementPosition: 'center',
                                height: 'auto',
                                width: '32px',
                            })
                        ),
                    ];
                }
            }
            class T extends J {
                constructor(e) {
                    super(e), this.addClass('jp-OutputPlaceholder');
                }
                render() {
                    return [
                        p.createElement('div', {
                            className: 'jp-Placeholder-prompt jp-OutputPrompt',
                            key: 'output',
                        }),
                        p.createElement(
                            'div',
                            {
                                className: z,
                                onClick: e => this.handleClick(e),
                                key: 'content',
                            },
                            p.createElement(U.ellipsesIcon.react, {
                                className: 'jp-MoreHorizIcon',
                                elementPosition: 'center',
                                height: 'auto',
                                width: '32px',
                            })
                        ),
                    ];
                }
            }
            var G = s(21520),
                q = s(96801),
                X = s(61313);
            const Y = 'jp-mod-resizedCell';
            class K extends C.Widget {
                constructor(e) {
                    super(),
                        (this.targetNode = e),
                        (this._isActive = !1),
                        (this._isDragging = !1),
                        (this._protectedWidth = 10),
                        this.addClass('jp-CellResizeHandle');
                }
                onAfterAttach(e) {
                    super.onAfterAttach(e),
                        this.node.addEventListener('dblclick', this),
                        this.node.addEventListener('mousedown', this);
                }
                onAfterDetach(e) {
                    super.onAfterAttach(e),
                        this.node.removeEventListener('dblclick', this),
                        this.node.removeEventListener('mousedown', this);
                }
                handleEvent(e) {
                    var t, s;
                    switch (e.type) {
                        case 'dblclick':
                            null === (t = this.targetNode.parentNode) ||
                                void 0 === t ||
                                t.childNodes.forEach(e => {
                                    e.classList.remove(Y);
                                }),
                                document.documentElement.style.setProperty(
                                    '--jp-side-by-side-output-size',
                                    '1fr'
                                ),
                                (this._isActive = !1);
                            break;
                        case 'mousedown':
                            (this._isDragging = !0),
                                this._isActive ||
                                    (null ===
                                        (s = this.targetNode.parentNode) ||
                                        void 0 === s ||
                                        s.childNodes.forEach(e => {
                                            e.classList.add(Y);
                                        }),
                                    (this._isActive = !0)),
                                window.addEventListener('mousemove', this),
                                window.addEventListener('mouseup', this);
                            break;
                        case 'mousemove': {
                            if (!this._isActive || !this._isDragging) return;
                            const t = this.targetNode.getBoundingClientRect(),
                                s =
                                    (t.width - 2 * this._protectedWidth) /
                                        (e.clientX -
                                            t.x -
                                            this._protectedWidth) -
                                    1;
                            document.documentElement.style.setProperty(
                                '--jp-side-by-side-output-size',
                                `${s}fr`
                            );
                            break;
                        }
                        case 'mouseup':
                            (this._isDragging = !1),
                                window.removeEventListener('mousemove', this),
                                window.removeEventListener('mouseup', this);
                    }
                }
            }
            const Q = 'jp-mod-dirty',
                Z = 'jp-MarkdownHeadingCollapsed',
                ee = 'jp-collapseHeadingButton',
                te = 'jp-showHiddenCellsButton',
                se = 'jp-mod-rendered',
                ae = 'jp-mod-noOutputs',
                ne = 'application/x-jupyter-icontentsrich';
            class ie extends C.Widget {
                constructor(e) {
                    super(),
                        (this._displayChanged = new b.Signal(this)),
                        (this._readOnly = !1),
                        (this._inputHidden = !1),
                        (this._syncCollapse = !1),
                        (this._syncEditable = !1),
                        (this._resizeDebouncer = new X.Debouncer(() => {
                            this._displayChanged.emit();
                        }, 0)),
                        this.addClass('jp-Cell');
                    const t = (this._model = e.model),
                        s = (this.contentFactory =
                            e.contentFactory || ie.defaultContentFactory);
                    this.layout = new C.PanelLayout();
                    const a = s.createCellHeader();
                    a.addClass('jp-Cell-header'), this.layout.addWidget(a);
                    const n = (this._inputWrapper = new C.Panel());
                    n.addClass('jp-Cell-inputWrapper');
                    const i = new g();
                    i.addClass('jp-Cell-inputCollapser');
                    const o = (this._input = new O({
                        model: t,
                        contentFactory: s,
                        updateOnShow: e.updateEditorOnShow,
                        placeholder: e.placeholder,
                    }));
                    o.addClass('jp-Cell-inputArea'),
                        n.addWidget(i),
                        n.addWidget(o),
                        this.layout.addWidget(n),
                        (this._inputPlaceholder = new $(() => {
                            this.inputHidden = !this.inputHidden;
                        }));
                    const d = this.contentFactory.createCellFooter();
                    d.addClass('jp-Cell-footer'),
                        this.layout.addWidget(d),
                        e.editorConfig &&
                            this.editor.setOptions(
                                Object.assign({}, e.editorConfig)
                            ),
                        t.metadata.changed.connect(
                            this.onMetadataChanged,
                            this
                        );
                }
                initializeState() {
                    return (
                        this.loadCollapseState(), this.loadEditableState(), this
                    );
                }
                get displayChanged() {
                    return this._displayChanged;
                }
                get promptNode() {
                    return this._inputHidden
                        ? this._inputPlaceholder.node.firstElementChild
                        : this._input.promptNode;
                }
                get editorWidget() {
                    return this._input.editorWidget;
                }
                get editor() {
                    return this._input.editor;
                }
                get model() {
                    return this._model;
                }
                get inputArea() {
                    return this._input;
                }
                get readOnly() {
                    return this._readOnly;
                }
                set readOnly(e) {
                    e !== this._readOnly &&
                        ((this._readOnly = e),
                        this.syncEditable && this.saveEditableState(),
                        this.update());
                }
                saveEditableState() {
                    const { metadata: e } = this.model,
                        t = e.get('editable');
                    (this.readOnly && !1 === t) ||
                        (!this.readOnly && void 0 === t) ||
                        (this.readOnly
                            ? this.model.metadata.set('editable', !1)
                            : this.model.metadata.delete('editable'));
                }
                loadEditableState() {
                    this.readOnly = !1 === this.model.metadata.get('editable');
                }
                get ready() {
                    return Promise.resolve(void 0);
                }
                setPrompt(e) {
                    this._input.setPrompt(e);
                }
                get inputHidden() {
                    return this._inputHidden;
                }
                set inputHidden(e) {
                    if (this._inputHidden === e) return;
                    const t = this._inputWrapper.layout;
                    e
                        ? ((this._input.parent = null),
                          t.addWidget(this._inputPlaceholder))
                        : ((this._inputPlaceholder.parent = null),
                          t.addWidget(this._input)),
                        (this._inputHidden = e),
                        this.syncCollapse && this.saveCollapseState(),
                        this.handleInputHidden(e);
                }
                saveCollapseState() {
                    const e = Object.assign(
                        {},
                        this.model.metadata.get('jupyter')
                    );
                    (this.inputHidden && !0 === e.source_hidden) ||
                        (!this.inputHidden && void 0 === e.source_hidden) ||
                        (this.inputHidden
                            ? (e.source_hidden = !0)
                            : delete e.source_hidden,
                        0 === Object.keys(e).length
                            ? this.model.metadata.delete('jupyter')
                            : this.model.metadata.set('jupyter', e));
                }
                loadCollapseState() {
                    const e = this.model.metadata.get('jupyter') || {};
                    this.inputHidden = !!e.source_hidden;
                }
                handleInputHidden(e) {}
                get syncCollapse() {
                    return this._syncCollapse;
                }
                set syncCollapse(e) {
                    this._syncCollapse !== e &&
                        ((this._syncCollapse = e),
                        e && this.loadCollapseState());
                }
                get syncEditable() {
                    return this._syncEditable;
                }
                set syncEditable(e) {
                    this._syncEditable !== e &&
                        ((this._syncEditable = e),
                        e && this.loadEditableState());
                }
                clone() {
                    return new (0, this.constructor)({
                        model: this.model,
                        contentFactory: this.contentFactory,
                        placeholder: !1,
                    });
                }
                dispose() {
                    this.isDisposed ||
                        (this._resizeDebouncer.dispose(),
                        (this._input = null),
                        (this._model = null),
                        (this._inputWrapper = null),
                        (this._inputPlaceholder = null),
                        super.dispose());
                }
                onAfterAttach(e) {
                    this.update();
                }
                onActivateRequest(e) {
                    this.editor.focus();
                }
                onFitRequest(e) {
                    this.editor.refresh();
                }
                onResize(e) {
                    this._resizeDebouncer.invoke();
                }
                onUpdateRequest(e) {
                    this._model &&
                        this.editor.getOption('readOnly') !== this._readOnly &&
                        (this.editor.setOption('readOnly', this._readOnly),
                        this.toggleClass('jp-mod-readOnly', this._readOnly));
                }
                onMetadataChanged(e, t) {
                    switch (t.key) {
                        case 'jupyter':
                            this.syncCollapse && this.loadCollapseState();
                            break;
                        case 'editable':
                            this.syncEditable && this.loadEditableState();
                    }
                }
            }
            !(function(e) {
                class t {
                    constructor(e = {}) {
                        this._editorFactory =
                            e.editorFactory || O.defaultEditorFactory;
                    }
                    get editorFactory() {
                        return this._editorFactory;
                    }
                    createCellHeader() {
                        return new y();
                    }
                    createCellFooter() {
                        return new v();
                    }
                    createInputPrompt() {
                        return new x();
                    }
                    createOutputPrompt() {
                        return new N.OutputPrompt();
                    }
                    createStdin(e) {
                        return new N.Stdin(e);
                    }
                }
                (e.ContentFactory = t), (e.defaultContentFactory = new t());
            })(ie || (ie = {}));
            class oe extends ie {
                constructor(e) {
                    super(e),
                        (this._outputHidden = !1),
                        (this._syncScrolled = !1),
                        (this._savingMetadata = !1),
                        this.addClass('jp-CodeCell');
                    const t = (this._rendermime = e.rendermime),
                        s = this.contentFactory,
                        a = this.model;
                    if (!e.placeholder) {
                        const n = (this._outputWrapper = new C.Panel());
                        n.addClass('jp-Cell-outputWrapper');
                        const i = new _();
                        i.addClass('jp-Cell-outputCollapser');
                        const o = (this._output = new N.OutputArea({
                            model: a.outputs,
                            rendermime: t,
                            contentFactory: s,
                            maxNumberOutputs: e.maxNumberOutputs,
                        }));
                        o.addClass('jp-Cell-outputArea'),
                            0 === a.outputs.length && this.addClass(ae),
                            o.outputLengthChanged.connect(
                                this._outputLengthHandler,
                                this
                            ),
                            n.addWidget(i),
                            n.addWidget(o),
                            this.layout.insertWidget(2, new K(this.node)),
                            this.layout.insertWidget(3, n),
                            a.isDirty && this.addClass(Q),
                            (this._outputPlaceholder = new T(() => {
                                this.outputHidden = !this.outputHidden;
                            }));
                    }
                    a.stateChanged.connect(this.onStateChanged, this);
                }
                initializeState() {
                    return (
                        super.initializeState(),
                        this.loadScrolledState(),
                        this.setPrompt(`${this.model.executionCount || ''}`),
                        this
                    );
                }
                get outputArea() {
                    return this._output;
                }
                get outputHidden() {
                    return this._outputHidden;
                }
                set outputHidden(e) {
                    if (this._outputHidden === e) return;
                    const t = this._outputWrapper.layout;
                    e
                        ? (t.removeWidget(this._output),
                          t.addWidget(this._outputPlaceholder),
                          this.inputHidden &&
                              !this._outputWrapper.isHidden &&
                              this._outputWrapper.hide())
                        : (this._outputWrapper.isHidden &&
                              this._outputWrapper.show(),
                          t.removeWidget(this._outputPlaceholder),
                          t.addWidget(this._output)),
                        (this._outputHidden = e),
                        this.syncCollapse && this.saveCollapseState();
                }
                saveCollapseState() {
                    this._savingMetadata = !0;
                    try {
                        super.saveCollapseState();
                        const e = this.model.metadata,
                            t = this.model.metadata.get('collapsed');
                        if (
                            (this.outputHidden && !0 === t) ||
                            (!this.outputHidden && void 0 === t)
                        )
                            return;
                        this.outputHidden
                            ? e.set('collapsed', !0)
                            : e.delete('collapsed');
                    } finally {
                        this._savingMetadata = !1;
                    }
                }
                loadCollapseState() {
                    super.loadCollapseState(),
                        (this.outputHidden = !!this.model.metadata.get(
                            'collapsed'
                        ));
                }
                get outputsScrolled() {
                    return this._outputsScrolled;
                }
                set outputsScrolled(e) {
                    this.toggleClass('jp-mod-outputsScrolled', e),
                        (this._outputsScrolled = e),
                        this.syncScrolled && this.saveScrolledState();
                }
                saveScrolledState() {
                    const { metadata: e } = this.model,
                        t = e.get('scrolled');
                    (this.outputsScrolled && !0 === t) ||
                        (!this.outputsScrolled && void 0 === t) ||
                        (this.outputsScrolled
                            ? e.set('scrolled', !0)
                            : e.delete('scrolled'));
                }
                loadScrolledState() {
                    const e = this.model.metadata;
                    'auto' === e.get('scrolled')
                        ? (this.outputsScrolled = !1)
                        : (this.outputsScrolled = !!e.get('scrolled'));
                }
                get syncScrolled() {
                    return this._syncScrolled;
                }
                set syncScrolled(e) {
                    this._syncScrolled !== e &&
                        ((this._syncScrolled = e),
                        e && this.loadScrolledState());
                }
                handleInputHidden(e) {
                    !e && this._outputWrapper.isHidden
                        ? this._outputWrapper.show()
                        : e &&
                          !this._outputWrapper.isHidden &&
                          this._outputHidden &&
                          this._outputWrapper.hide();
                }
                clone() {
                    return new (0, this.constructor)({
                        model: this.model,
                        contentFactory: this.contentFactory,
                        rendermime: this._rendermime,
                        placeholder: !1,
                    });
                }
                cloneOutputArea() {
                    return new N.SimplifiedOutputArea({
                        model: this.model.outputs,
                        contentFactory: this.contentFactory,
                        rendermime: this._rendermime,
                    });
                }
                dispose() {
                    this.isDisposed ||
                        (this._output.outputLengthChanged.disconnect(
                            this._outputLengthHandler,
                            this
                        ),
                        (this._rendermime = null),
                        (this._output = null),
                        (this._outputWrapper = null),
                        (this._outputPlaceholder = null),
                        super.dispose());
                }
                onStateChanged(e, t) {
                    switch (t.name) {
                        case 'executionCount':
                            this.setPrompt(`${e.executionCount || ''}`);
                            break;
                        case 'isDirty':
                            e.isDirty ? this.addClass(Q) : this.removeClass(Q);
                    }
                }
                onMetadataChanged(e, t) {
                    if (!this._savingMetadata) {
                        switch (t.key) {
                            case 'scrolled':
                                this.syncScrolled && this.loadScrolledState();
                                break;
                            case 'collapsed':
                                this.syncCollapse && this.loadCollapseState();
                        }
                        super.onMetadataChanged(e, t);
                    }
                }
                _outputLengthHandler(e, t) {
                    const s = 0 === t;
                    this.toggleClass(ae, s);
                }
            }
            !(function(e) {
                e.execute = async function(e, t, s) {
                    var a;
                    const n = e.model,
                        i = n.value.text;
                    if (
                        !i.trim() ||
                        !(null === (a = t.session) || void 0 === a
                            ? void 0
                            : a.kernel)
                    )
                        return void n.clearExecution();
                    const o = { cellId: n.id };
                    s = Object.assign(
                        Object.assign(
                            Object.assign({}, n.metadata.toJSON()),
                            s
                        ),
                        o
                    );
                    const { recordTiming: d } = s;
                    let r;
                    n.clearExecution(),
                        (e.outputHidden = !1),
                        e.setPrompt('*'),
                        (n.trusted = !0);
                    try {
                        const a = N.OutputArea.execute(i, e.outputArea, t, s);
                        if (d) {
                            const t = e => {
                                let t;
                                switch (e.header.msg_type) {
                                    case 'status':
                                        t = `status.${e.content.execution_state}`;
                                        break;
                                    case 'execute_input':
                                        t = 'execute_input';
                                        break;
                                    default:
                                        return !0;
                                }
                                const s =
                                        e.header.date ||
                                        new Date().toISOString(),
                                    a = Object.assign(
                                        {},
                                        n.metadata.get('execution')
                                    );
                                return (
                                    (a[`iopub.${t}`] = s),
                                    n.metadata.set('execution', a),
                                    !0
                                );
                            };
                            e.outputArea.future.registerMessageHook(t);
                        } else n.metadata.delete('execution');
                        r = e.outputArea.future;
                        const o = await a;
                        if (
                            ((n.executionCount = o.content.execution_count), d)
                        ) {
                            const e = Object.assign(
                                    {},
                                    n.metadata.get('execution')
                                ),
                                t = o.metadata.started;
                            t && (e['shell.execute_reply.started'] = t);
                            const s = o.header.date;
                            (e['shell.execute_reply'] =
                                s || new Date().toISOString()),
                                n.metadata.set('execution', e);
                        }
                        return o;
                    } catch (t) {
                        throw (r &&
                            !e.isDisposed &&
                            e.outputArea.future === r &&
                            e.setPrompt(''),
                        t);
                    }
                };
            })(oe || (oe = {}));
            class de extends ie {
                handleEvent(e) {
                    switch (e.type) {
                        case 'paste':
                            this._evtPaste(e);
                            break;
                        case 'dragenter':
                        case 'dragover':
                            e.preventDefault();
                            break;
                        case 'drop':
                            this._evtNativeDrop(e);
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
                    t.addEventListener('lm-dragover', this),
                        t.addEventListener('lm-drop', this),
                        t.addEventListener('dragenter', this),
                        t.addEventListener('dragover', this),
                        t.addEventListener('drop', this),
                        t.addEventListener('paste', this);
                }
                onBeforeDetach(e) {
                    const t = this.node;
                    t.removeEventListener('drop', this),
                        t.removeEventListener('dragover', this),
                        t.removeEventListener('dragenter', this),
                        t.removeEventListener('paste', this),
                        t.removeEventListener('lm-dragover', this),
                        t.removeEventListener('lm-drop', this);
                }
                _evtDragOver(e) {
                    (0, a.some)(
                        E.imageRendererFactory.mimeTypes,
                        t =>
                            !!e.mimeData.hasData(ne) &&
                            e.mimeData.getData(ne).model.mimetype === t
                    ) &&
                        (e.preventDefault(),
                        e.stopPropagation(),
                        (e.dropAction = e.proposedAction));
                }
                _evtPaste(e) {
                    if (e.clipboardData) {
                        const t = e.clipboardData.items;
                        for (let s = 0; s < t.length; s++) {
                            if ('text/plain' === t[s].type) {
                                if (
                                    s < t.length - 1 &&
                                    'file' === t[s + 1].kind
                                )
                                    continue;
                                t[s].getAsString(e => {
                                    var t, s;
                                    null ===
                                        (s = (t = this.editor)
                                            .replaceSelection) ||
                                        void 0 === s ||
                                        s.call(t, e);
                                });
                            }
                            this._attachFiles(e.clipboardData.items);
                        }
                    }
                    e.preventDefault();
                }
                _evtNativeDrop(e) {
                    e.dataTransfer && this._attachFiles(e.dataTransfer.items),
                        e.preventDefault();
                }
                _evtDrop(e) {
                    const t = (0, a.toArray)(
                        (0, a.filter)(e.mimeData.types(), t => {
                            if (t === ne) {
                                const t = e.mimeData.getData(ne);
                                return (
                                    -1 !==
                                    E.imageRendererFactory.mimeTypes.indexOf(
                                        t.model.mimetype
                                    )
                                );
                            }
                            return (
                                -1 !==
                                E.imageRendererFactory.mimeTypes.indexOf(t)
                            );
                        })
                    );
                    if (0 !== t.length)
                        if (
                            (e.preventDefault(),
                            e.stopPropagation(),
                            'none' !== e.proposedAction)
                        ) {
                            e.dropAction = 'copy';
                            for (const s of t)
                                if (s === ne) {
                                    const {
                                        model: t,
                                        withContent: s,
                                    } = e.mimeData.getData(ne);
                                    if ('file' === t.type) {
                                        const e = this._generateURI(t.name);
                                        this.updateCellSourceWithAttachment(
                                            t.name,
                                            e
                                        ),
                                            s().then(t => {
                                                this.model.attachments.set(e, {
                                                    [t.mimetype]: t.content,
                                                });
                                            });
                                    }
                                } else {
                                    const t = this._generateURI();
                                    this.model.attachments.set(t, {
                                        [s]: e.mimeData.getData(s),
                                    }),
                                        this.updateCellSourceWithAttachment(
                                            t,
                                            t
                                        );
                                }
                        } else e.dropAction = 'none';
                }
                _attachFiles(e) {
                    for (let t = 0; t < e.length; t++) {
                        const s = e[t];
                        if ('file' === s.kind) {
                            const e = s.getAsFile();
                            e && this._attachFile(e);
                        }
                    }
                }
                _attachFile(e) {
                    const t = new FileReader();
                    (t.onload = s => {
                        const { href: a, protocol: n } = q.URLExt.parse(
                            t.result
                        );
                        if ('data:' !== n) return;
                        const i = /([\w+\/\+]+)?(?:;(charset=[\w\d-]*|base64))?,(.*)/.exec(
                            a
                        );
                        if (!i || 4 !== i.length) return;
                        const o = i[1],
                            d = { [o]: i[3] },
                            r = this._generateURI(e.name);
                        o.startsWith('image/') &&
                            (this.model.attachments.set(r, d),
                            this.updateCellSourceWithAttachment(e.name, r));
                    }),
                        (t.onerror = t => {
                            console.error(`Failed to attach ${e.name}` + t);
                        }),
                        t.readAsDataURL(e);
                }
                _generateURI(e = '') {
                    const t = e.lastIndexOf('.');
                    return -1 !== t
                        ? S.UUID.uuid4().concat(e.substring(t))
                        : S.UUID.uuid4();
                }
            }
            class re extends de {
                constructor(e) {
                    var t, s, a;
                    super(e),
                        (this._toggleCollapsedSignal = new b.Signal(this)),
                        (this._renderer = null),
                        (this._rendered = !0),
                        (this._prevText = ''),
                        (this._ready = new S.PromiseDelegate()),
                        (this._showEditorForReadOnlyMarkdown = !0),
                        this.addClass('jp-MarkdownCell'),
                        (this._rendermime = e.rendermime.clone({
                            resolver: new j({
                                parent:
                                    null !== (t = e.rendermime.resolver) &&
                                    void 0 !== t
                                        ? t
                                        : void 0,
                                model: this.model.attachments,
                            }),
                        })),
                        this.editor.setOption('handlePaste', !1),
                        (this._headingCollapsed =
                            null !== (s = this.model.metadata.get(Z)) &&
                            void 0 !== s &&
                            s),
                        (this._monitor = new q.ActivityMonitor({
                            signal: this.model.contentChanged,
                            timeout: 1e3,
                        })),
                        this._monitor.activityStopped.connect(() => {
                            this._rendered && this.update();
                        }, this),
                        this._updateRenderedInput().then(() => {
                            this._ready.resolve(void 0);
                        }),
                        this.renderCollapseButtons(this._renderer),
                        this.renderInput(this._renderer),
                        (this._showEditorForReadOnlyMarkdown =
                            null !== (a = e.showEditorForReadOnlyMarkdown) &&
                            void 0 !== a
                                ? a
                                : re.defaultShowEditorForReadOnlyMarkdown);
                }
                get ready() {
                    return this._ready.promise;
                }
                get headingInfo() {
                    let e = this.model.value.text;
                    const t = G.TU.lexer(e);
                    let s;
                    for (s of t) {
                        if ('heading' === s.type)
                            return { text: s.text, level: s.depth };
                        if ('html' === s.type) {
                            let e = s.raw.match(/<h([1-6])(.*?)>(.*?)<\/h\1>/);
                            return (null == e
                              ? void 0
                              : e[3])
                                ? { text: e[3], level: parseInt(e[1]) }
                                : { text: '', level: -1 };
                        }
                    }
                    return { text: '', level: -1 };
                }
                get headingCollapsed() {
                    return this._headingCollapsed;
                }
                set headingCollapsed(e) {
                    (this._headingCollapsed = e),
                        e
                            ? this.model.metadata.set(Z, e)
                            : this.model.metadata.has(Z) &&
                              this.model.metadata.delete(Z);
                    const t = this.inputArea.promptNode.getElementsByClassName(
                        ee
                    )[0];
                    t &&
                        (e
                            ? t.classList.add('jp-mod-collapsed')
                            : t.classList.remove('jp-mod-collapsed')),
                        this.renderCollapseButtons(this._renderer);
                }
                get numberChildNodes() {
                    return this._numberChildNodes;
                }
                set numberChildNodes(e) {
                    (this._numberChildNodes = e),
                        this.renderCollapseButtons(this._renderer);
                }
                get toggleCollapsedSignal() {
                    return this._toggleCollapsedSignal;
                }
                get rendered() {
                    return this._rendered;
                }
                set rendered(e) {
                    this.readOnly &&
                        !1 === this._showEditorForReadOnlyMarkdown &&
                        (e = !0),
                        e !== this._rendered &&
                            ((this._rendered = e),
                            this._handleRendered(),
                            this._rendered || this.editor.refresh(),
                            this._displayChanged.emit());
                }
                get showEditorForReadOnly() {
                    return this._showEditorForReadOnlyMarkdown;
                }
                set showEditorForReadOnly(e) {
                    (this._showEditorForReadOnlyMarkdown = e),
                        !1 === e && (this.rendered = !0);
                }
                dispose() {
                    this.isDisposed ||
                        (this._monitor.dispose(), super.dispose());
                }
                maybeCreateCollapseButton() {
                    if (
                        this.headingInfo.level > 0 &&
                        0 ==
                            this.inputArea.promptNode.getElementsByClassName(ee)
                                .length
                    ) {
                        let e = this.inputArea.promptNode.appendChild(
                            document.createElement('button')
                        );
                        (e.className = `jp-Button ${ee}`),
                            e.setAttribute(
                                'data-heading-level',
                                this.headingInfo.level.toString()
                            ),
                            this._headingCollapsed
                                ? e.classList.add('jp-mod-collapsed')
                                : e.classList.remove('jp-mod-collapsed'),
                            (e.onclick = e => {
                                (this.headingCollapsed = !this
                                    .headingCollapsed),
                                    this._toggleCollapsedSignal.emit(
                                        this._headingCollapsed
                                    );
                            });
                    }
                }
                maybeCreateOrUpdateExpandButton() {
                    var e, t;
                    const s = this.node.getElementsByClassName(te);
                    if (
                        this.headingCollapsed &&
                        0 === s.length &&
                        this._numberChildNodes > 0
                    ) {
                        const e = document.createElement('button');
                        (e.className = `bp3-button bp3-minimal jp-Button ${te}`),
                            U.addIcon.render(e);
                        const t = document.createElement('div');
                        (t.nodeValue = `${this._numberChildNodes} cell${
                            this._numberChildNodes > 1 ? 's' : ''
                        } hidden`),
                            e.appendChild(t),
                            (e.onclick = () => {
                                (this.headingCollapsed = !1),
                                    this._toggleCollapsedSignal.emit(
                                        this._headingCollapsed
                                    );
                            }),
                            this.node.appendChild(e);
                    } else if (
                        (null ===
                            (t =
                                null === (e = null == s ? void 0 : s[0]) ||
                                void 0 === e
                                    ? void 0
                                    : e.childNodes) || void 0 === t
                            ? void 0
                            : t.length) > 1
                    )
                        if (this._headingCollapsed)
                            s[0].childNodes[1].textContent = `${
                                this._numberChildNodes
                            } cell${
                                this._numberChildNodes > 1 ? 's' : ''
                            } hidden`;
                        else for (const e of s) this.node.removeChild(e);
                }
                renderCollapseButtons(e) {
                    this.node.classList.toggle(Z, this._headingCollapsed),
                        this.maybeCreateCollapseButton(),
                        this.maybeCreateOrUpdateExpandButton();
                }
                renderInput(e) {
                    this.addClass(se),
                        this.renderCollapseButtons(e),
                        this.inputArea.renderInput(e);
                }
                showEditor() {
                    this.removeClass(se), this.inputArea.showEditor();
                }
                onUpdateRequest(e) {
                    this._handleRendered(), super.onUpdateRequest(e);
                }
                updateCellSourceWithAttachment(e, t) {
                    var s, a;
                    const n = `![${e}](attachment:${null != t ? t : e})`;
                    null === (a = (s = this.editor).replaceSelection) ||
                        void 0 === a ||
                        a.call(s, n);
                }
                _handleRendered() {
                    this._rendered
                        ? (this._updateRenderedInput(),
                          this.renderInput(this._renderer))
                        : this.showEditor();
                }
                _updateRenderedInput() {
                    const e = this.model,
                        t =
                            (e && e.value.text) ||
                            'Type Markdown and LaTeX: $ α^2 $';
                    if (t !== this._prevText) {
                        const e = new E.MimeModel({
                            data: { 'text/markdown': t },
                        });
                        return (
                            this._renderer ||
                                ((this._renderer = this._rendermime.createRenderer(
                                    'text/markdown'
                                )),
                                this._renderer.addClass('jp-MarkdownOutput')),
                            (this._prevText = t),
                            this._renderer.renderModel(e)
                        );
                    }
                    return Promise.resolve(void 0);
                }
                clone() {
                    return new (0, this.constructor)({
                        model: this.model,
                        contentFactory: this.contentFactory,
                        rendermime: this._rendermime,
                        placeholder: !1,
                    });
                }
            }
            !(function(e) {
                e.defaultShowEditorForReadOnlyMarkdown = !0;
            })(re || (re = {}));
            class le extends ie {
                constructor(e) {
                    super(e), this.addClass('jp-RawCell');
                }
                clone() {
                    return new (0, this.constructor)({
                        model: this.model,
                        contentFactory: this.contentFactory,
                        placeholder: !1,
                    });
                }
            }
        },
    },
]);
//# sourceMappingURL=4954.b5bf313.js.map
