'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [6747],
    {
        66747: (e, t, i) => {
            i.r(t),
                i.d(t, {
                    CodeEditor: () => a,
                    CodeEditorWrapper: () => D,
                    IEditorMimeTypeService: () => f,
                    IEditorServices: () => C,
                    JSONEditor: () => m,
                });
            var s = i(18205),
                o = i(88262),
                n = i(32798);
            const d = o.createMutex();
            var a;
            !(function(e) {
                (e.defaultSelectionStyle = {
                    className: '',
                    displayName: '',
                    color: 'black',
                }),
                    (e.Model = class {
                        constructor(e) {
                            (this._isDisposed = !1),
                                (this._mimeTypeChanged = new n.Signal(this)),
                                (this._sharedModelSwitched = new n.Signal(
                                    this
                                )),
                                (e = e || {}).modelDB
                                    ? (this.modelDB = e.modelDB)
                                    : (this.modelDB = new s.ModelDB()),
                                (this.sharedModel = o.createStandaloneCell(
                                    this.type,
                                    e.id
                                )),
                                this.sharedModel.changed.connect(
                                    this._onSharedModelChanged,
                                    this
                                );
                            const t = this.modelDB.createString('value');
                            t.changed.connect(
                                this._onModelDBValueChanged,
                                this
                            ),
                                (t.text = t.text || e.value || '');
                            const i = this.modelDB.createValue('mimeType');
                            i.changed.connect(
                                this._onModelDBMimeTypeChanged,
                                this
                            ),
                                i.set(e.mimeType || 'text/plain'),
                                this.modelDB.createMap('selections');
                        }
                        switchSharedModel(e, t) {
                            t && (this.value.text = e.getSource()),
                                this.sharedModel.changed.disconnect(
                                    this._onSharedModelChanged,
                                    this
                                ),
                                this.sharedModel.dispose(),
                                (this.sharedModel = e),
                                this.sharedModel.changed.connect(
                                    this._onSharedModelChanged,
                                    this
                                ),
                                this._sharedModelSwitched.emit(!0);
                        }
                        _onSharedModelChanged(e, t) {
                            d(() => {
                                if (t.sourceChange) {
                                    const e = this.modelDB.get('value');
                                    let i = 0;
                                    t.sourceChange.forEach(t => {
                                        null != t.insert
                                            ? (e.insert(i, t.insert),
                                              (i += t.insert.length))
                                            : null != t.delete
                                            ? e.remove(i, i + t.delete)
                                            : null != t.retain &&
                                              (i += t.retain);
                                    });
                                }
                            });
                        }
                        _onModelDBValueChanged(e, t) {
                            d(() => {
                                this.sharedModel.transact(() => {
                                    switch (t.type) {
                                        case 'insert':
                                            this.sharedModel.updateSource(
                                                t.start,
                                                t.start,
                                                t.value
                                            );
                                            break;
                                        case 'remove':
                                            this.sharedModel.updateSource(
                                                t.start,
                                                t.end
                                            );
                                            break;
                                        default:
                                            this.sharedModel.setSource(e.text);
                                    }
                                });
                            });
                        }
                        get type() {
                            return 'code';
                        }
                        get mimeTypeChanged() {
                            return this._mimeTypeChanged;
                        }
                        get sharedModelSwitched() {
                            return this._sharedModelSwitched;
                        }
                        get value() {
                            return this.modelDB.get('value');
                        }
                        get selections() {
                            return this.modelDB.get('selections');
                        }
                        get mimeType() {
                            return this.modelDB.getValue('mimeType');
                        }
                        set mimeType(e) {
                            this.mimeType !== e &&
                                this.modelDB.setValue('mimeType', e);
                        }
                        get isDisposed() {
                            return this._isDisposed;
                        }
                        dispose() {
                            this._isDisposed ||
                                ((this._isDisposed = !0),
                                this.modelDB.dispose(),
                                n.Signal.clearData(this));
                        }
                        _onModelDBMimeTypeChanged(e, t) {
                            this._mimeTypeChanged.emit({
                                name: 'mimeType',
                                oldValue: t.oldValue,
                                newValue: t.newValue,
                            });
                        }
                    }),
                    (e.defaultConfig = {
                        autoClosingBrackets: !1,
                        codeFolding: !1,
                        cursorBlinkRate: 530,
                        fontFamily: null,
                        fontSize: null,
                        handlePaste: !0,
                        insertSpaces: !0,
                        lineHeight: null,
                        lineNumbers: !1,
                        lineWrap: 'on',
                        matchBrackets: !0,
                        readOnly: !1,
                        tabSize: 4,
                        rulers: [],
                        showTrailingSpace: !1,
                        wordWrapColumn: 80,
                    });
            })(a || (a = {}));
            var r = i(61345),
                h = i(99729),
                l = i(26169),
                c = i(86098);
            const u = 'jp-mod-error';
            class m extends c.Widget {
                constructor(e) {
                    super(),
                        (this._dataDirty = !1),
                        (this._inputDirty = !1),
                        (this._source = null),
                        (this._originalValue = l.JSONExt.emptyObject),
                        (this._changeGuard = !1),
                        (this.translator = e.translator || r.nullTranslator),
                        (this._trans = this.translator.load('jupyterlab')),
                        this.addClass('jp-JSONEditor'),
                        (this.headerNode = document.createElement('div')),
                        (this.headerNode.className = 'jp-JSONEditor-header'),
                        (this.revertButtonNode = h.undoIcon.element({
                            tag: 'span',
                            title: this._trans.__('Revert changes to data'),
                        })),
                        (this.commitButtonNode = h.checkIcon.element({
                            tag: 'span',
                            title: this._trans.__('Commit changes to data'),
                            marginLeft: '8px',
                        })),
                        (this.editorHostNode = document.createElement('div')),
                        (this.editorHostNode.className = 'jp-JSONEditor-host'),
                        this.headerNode.appendChild(this.revertButtonNode),
                        this.headerNode.appendChild(this.commitButtonNode),
                        this.node.appendChild(this.headerNode),
                        this.node.appendChild(this.editorHostNode);
                    const t = new a.Model();
                    (t.value.text = this._trans.__('No data!')),
                        (t.mimeType = 'application/json'),
                        t.value.changed.connect(this._onValueChanged, this),
                        (this.model = t),
                        (this.editor = e.editorFactory({
                            host: this.editorHostNode,
                            model: t,
                        })),
                        this.editor.setOption('readOnly', !0);
                }
                get source() {
                    return this._source;
                }
                set source(e) {
                    this._source !== e &&
                        (this._source &&
                            this._source.changed.disconnect(
                                this._onSourceChanged,
                                this
                            ),
                        (this._source = e),
                        this.editor.setOption('readOnly', null === e),
                        e && e.changed.connect(this._onSourceChanged, this),
                        this._setValue());
                }
                get isDirty() {
                    return this._dataDirty || this._inputDirty;
                }
                dispose() {
                    this.isDisposed ||
                        (this.model.sharedModel.dispose(),
                        this.model.dispose(),
                        this.editor.dispose(),
                        super.dispose());
                }
                handleEvent(e) {
                    switch (e.type) {
                        case 'blur':
                            this._evtBlur(e);
                            break;
                        case 'click':
                            this._evtClick(e);
                    }
                }
                onAfterAttach(e) {
                    const t = this.editorHostNode;
                    t.addEventListener('blur', this, !0),
                        t.addEventListener('click', this, !0),
                        (this.revertButtonNode.hidden = !0),
                        (this.commitButtonNode.hidden = !0),
                        this.headerNode.addEventListener('click', this),
                        this.isVisible && this.update();
                }
                onAfterShow(e) {
                    this.update();
                }
                onUpdateRequest(e) {
                    this.editor.refresh();
                }
                onBeforeDetach(e) {
                    const t = this.editorHostNode;
                    t.removeEventListener('blur', this, !0),
                        t.removeEventListener('click', this, !0),
                        this.headerNode.removeEventListener('click', this);
                }
                _onSourceChanged(e, t) {
                    this._changeGuard ||
                        (this._inputDirty || this.editor.hasFocus()
                            ? (this._dataDirty = !0)
                            : this._setValue());
                }
                _onValueChanged() {
                    let e = !0;
                    try {
                        const e = JSON.parse(this.editor.model.value.text);
                        this.removeClass(u),
                            (this._inputDirty =
                                !this._changeGuard &&
                                !l.JSONExt.deepEqual(e, this._originalValue));
                    } catch (t) {
                        this.addClass(u), (this._inputDirty = !0), (e = !1);
                    }
                    (this.revertButtonNode.hidden = !this._inputDirty),
                        (this.commitButtonNode.hidden =
                            !e || !this._inputDirty);
                }
                _evtBlur(e) {
                    !this._inputDirty && this._dataDirty && this._setValue();
                }
                _evtClick(e) {
                    const t = e.target;
                    this.revertButtonNode.contains(t)
                        ? this._setValue()
                        : this.commitButtonNode.contains(t)
                        ? this.commitButtonNode.hidden ||
                          this.hasClass(u) ||
                          ((this._changeGuard = !0),
                          this._mergeContent(),
                          (this._changeGuard = !1),
                          this._setValue())
                        : this.editorHostNode.contains(t) &&
                          this.editor.focus();
                }
                _mergeContent() {
                    const e = this.editor.model,
                        t = this._originalValue,
                        i = JSON.parse(e.value.text),
                        s = this.source;
                    if (s) {
                        for (const e in i)
                            l.JSONExt.deepEqual(i[e], t[e] || null) ||
                                s.set(e, i[e]);
                        for (const e in t) e in i || s.delete(e);
                    }
                }
                _setValue() {
                    (this._dataDirty = !1),
                        (this._inputDirty = !1),
                        (this.revertButtonNode.hidden = !0),
                        (this.commitButtonNode.hidden = !0),
                        this.removeClass(u);
                    const e = this.editor.model,
                        t = this._source ? this._source.toJSON() : {};
                    if (((this._changeGuard = !0), void 0 === t))
                        (e.value.text = this._trans.__('No data!')),
                            (this._originalValue = l.JSONExt.emptyObject);
                    else {
                        const i = JSON.stringify(t, null, 4);
                        (e.value.text = i),
                            (this._originalValue = t),
                            i.length > 1 &&
                                '{' === i[0] &&
                                this.editor.setCursorPosition({
                                    line: 0,
                                    column: 1,
                                });
                    }
                    this.editor.refresh(),
                        (this._changeGuard = !1),
                        (this.commitButtonNode.hidden = !0),
                        (this.revertButtonNode.hidden = !0);
                }
            }
            const p = 'jp-mod-has-primary-selection',
                g = 'jp-mod-in-leading-whitespace',
                _ = 'jp-mod-dropTarget',
                v = /^\s+$/;
            class D extends c.Widget {
                constructor(e) {
                    super(),
                        (this._hasRefreshedSinceAttach = !1),
                        (this.editor = e.factory({
                            host: this.node,
                            model: e.model,
                            uuid: e.uuid,
                            config: e.config,
                            selectionStyle: e.selectionStyle,
                        })).model.selections.changed.connect(
                            this._onSelectionsChanged,
                            this
                        ),
                        (this._updateOnShow = !1 !== e.updateOnShow);
                }
                get model() {
                    return this.editor.model;
                }
                dispose() {
                    this.isDisposed || (super.dispose(), this.editor.dispose());
                }
                handleEvent(e) {
                    switch (e.type) {
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
                onActivateRequest(e) {
                    this.editor.focus();
                }
                onAfterAttach(e) {
                    super.onAfterAttach(e);
                    const t = this.node;
                    t.addEventListener('lm-dragenter', this),
                        t.addEventListener('lm-dragleave', this),
                        t.addEventListener('lm-dragover', this),
                        t.addEventListener('lm-drop', this),
                        (this._hasRefreshedSinceAttach = !1),
                        this.isVisible && this.update();
                }
                onBeforeDetach(e) {
                    const t = this.node;
                    t.removeEventListener('lm-dragenter', this),
                        t.removeEventListener('lm-dragleave', this),
                        t.removeEventListener('lm-dragover', this),
                        t.removeEventListener('lm-drop', this);
                }
                onAfterShow(e) {
                    (!this._updateOnShow && this._hasRefreshedSinceAttach) ||
                        this.update();
                }
                onResize(e) {
                    e.width >= 0 && e.height >= 0
                        ? this.editor.setSize(e)
                        : this.isVisible && this.editor.resizeToFit();
                }
                onUpdateRequest(e) {
                    this.isVisible &&
                        ((this._hasRefreshedSinceAttach = !0),
                        this.editor.refresh());
                }
                _onSelectionsChanged() {
                    const { start: e, end: t } = this.editor.getSelection();
                    e.column !== t.column || e.line !== t.line
                        ? (this.addClass(p), this.removeClass(g))
                        : (this.removeClass(p),
                          this.editor
                              .getLine(t.line)
                              .slice(0, t.column)
                              .match(v)
                              ? this.addClass(g)
                              : this.removeClass(g));
                }
                _evtDragEnter(e) {
                    !0 !== this.editor.getOption('readOnly') &&
                        void 0 !== y.findTextData(e.mimeData) &&
                        (e.preventDefault(),
                        e.stopPropagation(),
                        this.addClass('jp-mod-dropTarget'));
                }
                _evtDragLeave(e) {
                    this.removeClass(_),
                        !0 !== this.editor.getOption('readOnly') &&
                            void 0 !== y.findTextData(e.mimeData) &&
                            (e.preventDefault(), e.stopPropagation());
                }
                _evtDragOver(e) {
                    this.removeClass(_),
                        !0 !== this.editor.getOption('readOnly') &&
                            void 0 !== y.findTextData(e.mimeData) &&
                            (e.preventDefault(),
                            e.stopPropagation(),
                            (e.dropAction = 'copy'),
                            this.addClass(_));
                }
                _evtDrop(e) {
                    if (!0 === this.editor.getOption('readOnly')) return;
                    const t = y.findTextData(e.mimeData);
                    if (void 0 === t) return;
                    const i = {
                            top: e.y,
                            bottom: e.y,
                            left: e.x,
                            right: e.x,
                            x: e.x,
                            y: e.y,
                            width: 0,
                            height: 0,
                        },
                        s = this.editor.getPositionForCoordinate(i);
                    if (null === s) return;
                    if (
                        (this.removeClass(_),
                        e.preventDefault(),
                        e.stopPropagation(),
                        'none' === e.proposedAction)
                    )
                        return void (e.dropAction = 'none');
                    const o = this.editor.getOffsetAt(s);
                    this.model.value.insert(o, t);
                }
            }
            var y, f;
            !(function(e) {
                e.findTextData = function(e) {
                    const t = e.types().find(e => 0 === e.indexOf('text'));
                    if (void 0 !== t) return e.getData(t);
                };
            })(y || (y = {})),
                (function(e) {
                    e.defaultMimeType = 'text/plain';
                })(f || (f = {}));
            const C = new l.Token('@jupyterlab/codeeditor:IEditorServices');
        },
    },
]);
//# sourceMappingURL=6747.df23b73.js.map
