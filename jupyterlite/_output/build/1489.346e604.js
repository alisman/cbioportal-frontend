'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [1489],
    {
        21489: (e, t, s) => {
            s.r(t),
                s.d(t, {
                    BreadCrumbs: () => v,
                    CHUNK_SIZE: () => G,
                    DirListing: () => z,
                    FileBrowser: () => Y,
                    FileBrowserModel: () => J,
                    FileDialog: () => Q,
                    FileUploadStatus: () => he,
                    FilterFileBrowserModel: () => $,
                    IFileBrowserCommands: () => ie,
                    IFileBrowserFactory: () => se,
                    LARGE_FILE_SIZE: () => q,
                    TogglableHiddenFileBrowserModel: () => Z,
                    Uploader: () => re,
                });
            var i = s(47343),
                r = s(55610),
                n = s(61345),
                a = s(86098),
                o = s(96801),
                l = s(11123),
                d = s(99729),
                h = s(43892),
                c = s(33349);
            const m = 'jp-BreadCrumbs-home',
                p = 'jp-BreadCrumbs-preferred',
                u = 'jp-BreadCrumbs-item',
                _ = ['/', '../../', '../', ''],
                g = 'application/x-jupyter-icontents',
                f = 'jp-mod-dropTarget';
            class v extends a.Widget {
                constructor(e) {
                    super(),
                        (this.translator = e.translator || n.nullTranslator),
                        (this._trans = this.translator.load('jupyterlab')),
                        (this._model = e.model),
                        this.addClass('jp-BreadCrumbs'),
                        (this._crumbs = y.createCrumbs()),
                        (this._crumbSeps = y.createCrumbSeparators());
                    const t = o.PageConfig.getOption('preferredPath');
                    (this._hasPreferred = !(!t || '/' === t)),
                        this._hasPreferred &&
                            this.node.appendChild(
                                this._crumbs[y.Crumb.Preferred]
                            ),
                        this.node.appendChild(this._crumbs[y.Crumb.Home]),
                        this._model.refreshed.connect(this.update, this);
                }
                handleEvent(e) {
                    switch (e.type) {
                        case 'click':
                            this._evtClick(e);
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
                            break;
                        default:
                            return;
                    }
                }
                onAfterAttach(e) {
                    super.onAfterAttach(e), this.update();
                    const t = this.node;
                    t.addEventListener('click', this),
                        t.addEventListener('lm-dragenter', this),
                        t.addEventListener('lm-dragleave', this),
                        t.addEventListener('lm-dragover', this),
                        t.addEventListener('lm-drop', this);
                }
                onBeforeDetach(e) {
                    super.onBeforeDetach(e);
                    const t = this.node;
                    t.removeEventListener('click', this),
                        t.removeEventListener('lm-dragenter', this),
                        t.removeEventListener('lm-dragleave', this),
                        t.removeEventListener('lm-dragover', this),
                        t.removeEventListener('lm-drop', this);
                }
                onUpdateRequest(e) {
                    const t = this._model.manager.services.contents.localPath(
                        this._model.path
                    );
                    y.updateCrumbs(
                        this._crumbs,
                        this._crumbSeps,
                        t,
                        this._hasPreferred
                    );
                }
                _evtClick(e) {
                    if (0 !== e.button) return;
                    let t = e.target;
                    for (; t && t !== this.node; ) {
                        if (t.classList.contains(p))
                            return (
                                this._model
                                    .cd(o.PageConfig.getOption('preferredPath'))
                                    .catch(e =>
                                        (0, i.showErrorMessage)(
                                            this._trans.__('Open Error'),
                                            e
                                        )
                                    ),
                                e.preventDefault(),
                                void e.stopPropagation()
                            );
                        if (
                            t.classList.contains(u) ||
                            t.classList.contains(m)
                        ) {
                            const s = h.ArrayExt.findFirstIndex(
                                this._crumbs,
                                e => e === t
                            );
                            return (
                                this._model
                                    .cd(_[s])
                                    .catch(e =>
                                        (0, i.showErrorMessage)(
                                            this._trans.__('Open Error'),
                                            e
                                        )
                                    ),
                                e.preventDefault(),
                                void e.stopPropagation()
                            );
                        }
                        t = t.parentElement;
                    }
                }
                _evtDragEnter(e) {
                    if (e.mimeData.hasData(g)) {
                        const t = h.ArrayExt.findFirstIndex(this._crumbs, t =>
                            c.ElementExt.hitTest(t, e.clientX, e.clientY)
                        );
                        -1 !== t &&
                            t !== y.Crumb.Current &&
                            (this._crumbs[t].classList.add(f),
                            e.preventDefault(),
                            e.stopPropagation());
                    }
                }
                _evtDragLeave(e) {
                    e.preventDefault(), e.stopPropagation();
                    const t = i.DOMUtils.findElement(this.node, f);
                    t && t.classList.remove(f);
                }
                _evtDragOver(e) {
                    e.preventDefault(),
                        e.stopPropagation(),
                        (e.dropAction = e.proposedAction);
                    const t = i.DOMUtils.findElement(this.node, f);
                    t && t.classList.remove(f);
                    const s = h.ArrayExt.findFirstIndex(this._crumbs, t =>
                        c.ElementExt.hitTest(t, e.clientX, e.clientY)
                    );
                    -1 !== s && this._crumbs[s].classList.add(f);
                }
                _evtDrop(e) {
                    if (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        'none' === e.proposedAction)
                    )
                        return void (e.dropAction = 'none');
                    if (!e.mimeData.hasData(g)) return;
                    e.dropAction = e.proposedAction;
                    let t = e.target;
                    for (; t && t.parentElement; ) {
                        if (t.classList.contains(f)) {
                            t.classList.remove(f);
                            break;
                        }
                        t = t.parentElement;
                    }
                    const s = h.ArrayExt.findFirstIndex(
                        this._crumbs,
                        e => e === t
                    );
                    if (-1 === s) return;
                    const r = this._model,
                        n = o.PathExt.resolve(r.path, _[s]),
                        a = r.manager,
                        d = [],
                        c = e.mimeData.getData(g);
                    for (const e of c) {
                        const t = a.services.contents.localPath(e),
                            s = o.PathExt.basename(t),
                            i = o.PathExt.join(n, s);
                        d.push((0, l.renameFile)(a, e, i));
                    }
                    Promise.all(d).catch(e =>
                        (0, i.showErrorMessage)(this._trans.__('Move Error'), e)
                    );
                }
            }
            var y;
            !(function(e) {
                let t;
                !(function(e) {
                    (e[(e.Home = 0)] = 'Home'),
                        (e[(e.Ellipsis = 1)] = 'Ellipsis'),
                        (e[(e.Parent = 2)] = 'Parent'),
                        (e[(e.Current = 3)] = 'Current'),
                        (e[(e.Preferred = 4)] = 'Preferred');
                })((t = e.Crumb || (e.Crumb = {}))),
                    (e.updateCrumbs = function(e, s, i, r) {
                        const n = e[0].parentNode,
                            a = n.firstChild;
                        for (; a && a.nextSibling; )
                            n.removeChild(a.nextSibling);
                        r
                            ? (n.appendChild(e[t.Home]), n.appendChild(s[0]))
                            : n.appendChild(s[0]);
                        const o = i.split('/');
                        if (o.length > 2) {
                            n.appendChild(e[t.Ellipsis]);
                            const i = o.slice(0, o.length - 2).join('/');
                            (e[t.Ellipsis].title = i), n.appendChild(s[1]);
                        }
                        if (i) {
                            if (o.length >= 2) {
                                (e[t.Parent].textContent = o[o.length - 2]),
                                    n.appendChild(e[t.Parent]);
                                const i = o.slice(0, o.length - 1).join('/');
                                (e[t.Parent].title = i), n.appendChild(s[2]);
                            }
                            (e[t.Current].textContent = o[o.length - 1]),
                                n.appendChild(e[t.Current]),
                                (e[t.Current].title = i),
                                n.appendChild(s[3]);
                        }
                    }),
                    (e.createCrumbs = function() {
                        const e = d.folderIcon.element({
                                className: m,
                                tag: 'span',
                                title:
                                    o.PageConfig.getOption('serverRoot') ||
                                    'Jupyter Server Root',
                                stylesheet: 'breadCrumb',
                            }),
                            t = d.ellipsesIcon.element({
                                className: u,
                                tag: 'span',
                                stylesheet: 'breadCrumb',
                            }),
                            s = document.createElement('span');
                        s.className = u;
                        const i = document.createElement('span');
                        return (
                            (i.className = u),
                            [
                                e,
                                t,
                                s,
                                i,
                                d.homeIcon.element({
                                    className: p,
                                    tag: 'span',
                                    title:
                                        o.PageConfig.getOption(
                                            'preferredPath'
                                        ) || 'Jupyter Preferred Path',
                                    stylesheet: 'breadCrumb',
                                }),
                            ]
                        );
                    }),
                    (e.createCrumbSeparators = function() {
                        const e = [];
                        for (let t = 0; t < 4; t++) {
                            const t = document.createElement('span');
                            (t.textContent = '/'), e.push(t);
                        }
                        return e;
                    });
            })(y || (y = {}));
            var w = s(87442),
                E = s(26169),
                b = s(18418),
                C = s(14064),
                D = s(32798),
                L = s(93383);
            const I = 'jp-DirListing-header',
                F = 'jp-DirListing-headerItemIcon',
                x = 'jp-DirListing-content',
                P = 'jp-DirListing-itemText',
                k = 'jp-DirListing-itemIcon',
                M = 'jp-DirListing-itemModified',
                N = 'jp-id-name',
                T = 'jp-id-modified',
                j = 'jp-LastModified-hidden',
                S = 'application/x-jupyter-icontents',
                A = 'jp-mod-dropTarget',
                O = 'jp-mod-selected',
                B = 'jp-mod-cut',
                R = 'jp-mod-multiSelected',
                U = 'jp-mod-running',
                V = 'jp-mod-descending',
                H = !!navigator.platform.match(/Mac/i);
            class z extends a.Widget {
                constructor(e) {
                    super({
                        node: (e.renderer || z.defaultRenderer).createNode(),
                    }),
                        (this._items = []),
                        (this._sortedItems = []),
                        (this._sortState = {
                            direction: 'ascending',
                            key: 'name',
                        }),
                        (this._onItemOpened = new D.Signal(this)),
                        (this._drag = null),
                        (this._dragData = null),
                        (this._selectTimer = -1),
                        (this._isCut = !1),
                        (this._prevPath = ''),
                        (this._clipboard = []),
                        (this._softSelection = ''),
                        (this.selection = Object.create(null)),
                        (this._searchPrefix = ''),
                        (this._searchPrefixTimer = -1),
                        (this._inRename = !1),
                        (this._isDirty = !1),
                        (this._hiddenColumns = new Set()),
                        this.addClass('jp-DirListing'),
                        (this.translator = e.translator || n.nullTranslator),
                        (this._trans = this.translator.load('jupyterlab')),
                        (this._model = e.model),
                        this._model.fileChanged.connect(
                            this._onFileChanged,
                            this
                        ),
                        this._model.refreshed.connect(
                            this._onModelRefreshed,
                            this
                        ),
                        this._model.pathChanged.connect(
                            this._onPathChanged,
                            this
                        ),
                        (this._editNode = document.createElement('input')),
                        (this._editNode.className = 'jp-DirListing-editor'),
                        (this._manager = this._model.manager),
                        (this._renderer = e.renderer || z.defaultRenderer);
                    const t = i.DOMUtils.findElement(this.node, I);
                    this._renderer.populateHeaderNode(
                        t,
                        this.translator,
                        this._hiddenColumns
                    ),
                        this._manager.activateRequested.connect(
                            this._onActivateRequested,
                            this
                        );
                }
                dispose() {
                    (this._items.length = 0),
                        (this._sortedItems.length = 0),
                        (this._clipboard.length = 0),
                        super.dispose();
                }
                get model() {
                    return this._model;
                }
                get headerNode() {
                    return i.DOMUtils.findElement(this.node, I);
                }
                get contentNode() {
                    return i.DOMUtils.findElement(this.node, x);
                }
                get renderer() {
                    return this._renderer;
                }
                get sortState() {
                    return this._sortState;
                }
                get onItemOpened() {
                    return this._onItemOpened;
                }
                selectedItems() {
                    const e = this._sortedItems;
                    return (0, h.filter)(e, e => this.selection[e.path]);
                }
                sortedItems() {
                    return new h.ArrayIterator(this._sortedItems);
                }
                sort(e) {
                    (this._sortedItems = K.sort(this.model.items(), e)),
                        (this._sortState = e),
                        this.update();
                }
                rename() {
                    return this._doRename();
                }
                cut() {
                    (this._isCut = !0), this._copy(), this.update();
                }
                copy() {
                    this._copy();
                }
                paste() {
                    if (!this._clipboard.length)
                        return (this._isCut = !1), Promise.resolve(void 0);
                    const e = this._model.path,
                        t = [];
                    return (
                        (0, h.each)(this._clipboard, s => {
                            if (this._isCut) {
                                const i = this._manager.services.contents
                                        .localPath(s)
                                        .split('/'),
                                    r = i[i.length - 1],
                                    n = o.PathExt.join(e, r);
                                t.push(this._model.manager.rename(s, n));
                            } else t.push(this._model.manager.copy(s, e));
                        }),
                        (0, h.each)(this._items, e => {
                            e.classList.remove(B);
                        }),
                        (this._clipboard.length = 0),
                        (this._isCut = !1),
                        this.removeClass('jp-mod-clipboard'),
                        Promise.all(t)
                            .then(() => {})
                            .catch(e => {
                                (0, i.showErrorMessage)(
                                    this._trans._p(
                                        'showErrorMessage',
                                        'Paste Error'
                                    ),
                                    e
                                );
                            })
                    );
                }
                async delete() {
                    const e = this._sortedItems.filter(
                        e => this.selection[e.path]
                    );
                    if (!e.length) return;
                    const t =
                            1 === e.length
                                ? this._trans.__(
                                      'Are you sure you want to permanently delete: %1?',
                                      e[0].name
                                  )
                                : this._trans._n(
                                      'Are you sure you want to permanently delete the %1 selected item?',
                                      'Are you sure you want to permanently delete the %1 selected items?',
                                      e.length
                                  ),
                        s = await (0, i.showDialog)({
                            title: this._trans.__('Delete'),
                            body: t,
                            buttons: [
                                i.Dialog.cancelButton({
                                    label: this._trans.__('Cancel'),
                                }),
                                i.Dialog.warnButton({
                                    label: this._trans.__('Delete'),
                                }),
                            ],
                            defaultButton: 0,
                        });
                    !this.isDisposed &&
                        s.button.accept &&
                        (await this._delete(e.map(e => e.path)));
                }
                duplicate() {
                    const e = this._model.path,
                        t = [];
                    return (
                        (0, h.each)(this.selectedItems(), s => {
                            'directory' !== s.type &&
                                t.push(this._model.manager.copy(s.path, e));
                        }),
                        Promise.all(t)
                            .then(() => {})
                            .catch(e => {
                                (0, i.showErrorMessage)(
                                    this._trans._p(
                                        'showErrorMessage',
                                        'Duplicate file'
                                    ),
                                    e
                                );
                            })
                    );
                }
                async download() {
                    await Promise.all(
                        (0, h.toArray)(this.selectedItems())
                            .filter(e => 'directory' !== e.type)
                            .map(e => this._model.download(e.path))
                    );
                }
                shutdownKernels() {
                    const e = this._model,
                        t = this._sortedItems,
                        s = t.map(e => e.path),
                        r = (0, h.toArray)(this._model.sessions())
                            .filter(e => {
                                const i = h.ArrayExt.firstIndexOf(s, e.path);
                                return this.selection[t[i].path];
                            })
                            .map(t =>
                                e.manager.services.sessions.shutdown(t.id)
                            );
                    return Promise.all(r)
                        .then(() => {})
                        .catch(e => {
                            (0, i.showErrorMessage)(
                                this._trans._p(
                                    'showErrorMessage',
                                    'Shut down kernel'
                                ),
                                e
                            );
                        });
                }
                selectNext(e = !1) {
                    let t = -1;
                    const s = Object.keys(this.selection),
                        i = this._sortedItems;
                    if (1 === s.length || e) {
                        const e = s[s.length - 1];
                        (t = h.ArrayExt.findFirstIndex(i, t => t.path === e)),
                            (t += 1),
                            t === this._items.length && (t = 0);
                    } else if (0 === s.length) t = 0;
                    else {
                        const e = s[s.length - 1];
                        t = h.ArrayExt.findFirstIndex(i, t => t.path === e);
                    }
                    -1 !== t &&
                        (this._selectItem(t, e),
                        c.ElementExt.scrollIntoViewIfNeeded(
                            this.contentNode,
                            this._items[t]
                        ));
                }
                selectPrevious(e = !1) {
                    let t = -1;
                    const s = Object.keys(this.selection),
                        i = this._sortedItems;
                    if (1 === s.length || e) {
                        const e = s[0];
                        (t = h.ArrayExt.findFirstIndex(i, t => t.path === e)),
                            (t -= 1),
                            -1 === t && (t = this._items.length - 1);
                    } else if (0 === s.length) t = this._items.length - 1;
                    else {
                        const e = s[0];
                        t = h.ArrayExt.findFirstIndex(i, t => t.path === e);
                    }
                    -1 !== t &&
                        (this._selectItem(t, e),
                        c.ElementExt.scrollIntoViewIfNeeded(
                            this.contentNode,
                            this._items[t]
                        ));
                }
                selectByPrefix() {
                    const e = this._searchPrefix.toLowerCase(),
                        t = this._sortedItems,
                        s = h.ArrayExt.findFirstIndex(
                            t,
                            t => t.name.toLowerCase().substr(0, e.length) === e
                        );
                    -1 !== s &&
                        (this._selectItem(s, !1),
                        c.ElementExt.scrollIntoViewIfNeeded(
                            this.contentNode,
                            this._items[s]
                        ));
                }
                isSelected(e) {
                    const t = this._sortedItems;
                    return (
                        0 !==
                        (0, h.toArray)(
                            (0, h.filter)(
                                t,
                                t => t.name === e && this.selection[t.path]
                            )
                        ).length
                    );
                }
                modelForClick(e) {
                    const t = this._sortedItems,
                        s = K.hitTestNodes(this._items, e);
                    if (-1 !== s) return t[s];
                }
                clearSelectedItems() {
                    this.selection = Object.create(null);
                }
                async selectItemByName(e, t = !1) {
                    if ((await this.model.refresh(), this.isDisposed))
                        throw new Error('File browser is disposed.');
                    const s = this._sortedItems,
                        i = h.ArrayExt.findFirstIndex(s, t => t.name === e);
                    if (-1 === i) throw new Error('Item does not exist.');
                    this._selectItem(i, !1, t),
                        C.MessageLoop.sendMessage(
                            this,
                            a.Widget.Msg.UpdateRequest
                        ),
                        c.ElementExt.scrollIntoViewIfNeeded(
                            this.contentNode,
                            this._items[i]
                        );
                }
                handleEvent(e) {
                    switch (e.type) {
                        case 'mousedown':
                            this._evtMousedown(e);
                            break;
                        case 'mouseup':
                            this._evtMouseup(e);
                            break;
                        case 'mousemove':
                            this._evtMousemove(e);
                            break;
                        case 'keydown':
                            this.evtKeydown(e);
                            break;
                        case 'click':
                            this._evtClick(e);
                            break;
                        case 'dblclick':
                            this.evtDblClick(e);
                            break;
                        case 'dragenter':
                        case 'dragover':
                            this.addClass('jp-mod-native-drop'),
                                e.preventDefault();
                            break;
                        case 'dragleave':
                        case 'dragend':
                            this.removeClass('jp-mod-native-drop');
                            break;
                        case 'drop':
                            this.removeClass('jp-mod-native-drop'),
                                this.evtNativeDrop(e);
                            break;
                        case 'scroll':
                            this._evtScroll(e);
                            break;
                        case 'lm-dragenter':
                            this.evtDragEnter(e);
                            break;
                        case 'lm-dragleave':
                            this.evtDragLeave(e);
                            break;
                        case 'lm-dragover':
                            this.evtDragOver(e);
                            break;
                        case 'lm-drop':
                            this.evtDrop(e);
                    }
                }
                onAfterAttach(e) {
                    super.onAfterAttach(e);
                    const t = this.node,
                        s = i.DOMUtils.findElement(t, x);
                    t.addEventListener('mousedown', this),
                        t.addEventListener('keydown', this),
                        t.addEventListener('click', this),
                        t.addEventListener('dblclick', this),
                        s.addEventListener('dragenter', this),
                        s.addEventListener('dragover', this),
                        s.addEventListener('dragleave', this),
                        s.addEventListener('dragend', this),
                        s.addEventListener('drop', this),
                        s.addEventListener('scroll', this),
                        s.addEventListener('lm-dragenter', this),
                        s.addEventListener('lm-dragleave', this),
                        s.addEventListener('lm-dragover', this),
                        s.addEventListener('lm-drop', this);
                }
                onBeforeDetach(e) {
                    super.onBeforeDetach(e);
                    const t = this.node,
                        s = i.DOMUtils.findElement(t, x);
                    t.removeEventListener('mousedown', this),
                        t.removeEventListener('keydown', this),
                        t.removeEventListener('click', this),
                        t.removeEventListener('dblclick', this),
                        s.removeEventListener('scroll', this),
                        s.removeEventListener('dragover', this),
                        s.removeEventListener('dragover', this),
                        s.removeEventListener('dragleave', this),
                        s.removeEventListener('dragend', this),
                        s.removeEventListener('drop', this),
                        s.removeEventListener('lm-dragenter', this),
                        s.removeEventListener('lm-dragleave', this),
                        s.removeEventListener('lm-dragover', this),
                        s.removeEventListener('lm-drop', this),
                        document.removeEventListener('mousemove', this, !0),
                        document.removeEventListener('mouseup', this, !0);
                }
                onAfterShow(e) {
                    this._isDirty && (this.sort(this.sortState), this.update());
                }
                onUpdateRequest(e) {
                    this._isDirty = !1;
                    const t = this._sortedItems,
                        s = this._items,
                        r = i.DOMUtils.findElement(this.node, x),
                        n = this._renderer;
                    for (
                        this.removeClass(R), this.removeClass(O);
                        s.length > t.length;

                    )
                        r.removeChild(s.pop());
                    for (; s.length < t.length; ) {
                        const e = n.createItemNode(this._hiddenColumns);
                        e.classList.add('jp-DirListing-item'),
                            s.push(e),
                            r.appendChild(e);
                    }
                    s.forEach(e => {
                        e.classList.remove(O),
                            e.classList.remove(U),
                            e.classList.remove(B);
                    }),
                        t.forEach((e, t) => {
                            const i = s[t],
                                r = this._manager.registry.getFileTypeForModel(
                                    e
                                );
                            n.updateItemNode(
                                i,
                                e,
                                r,
                                this.translator,
                                this._hiddenColumns
                            ),
                                this.selection[e.path] &&
                                    (i.classList.add(O),
                                    this._isCut &&
                                        this._model.path === this._prevPath &&
                                        i.classList.add(B)),
                                i.setAttribute(
                                    'data-isdir',
                                    'directory' === e.type ? 'true' : 'false'
                                );
                        });
                    const a = Object.keys(this.selection).length;
                    a && (this.addClass(O), a > 1 && this.addClass(R));
                    const o = t.map(e => e.path);
                    (0, h.each)(this._model.sessions(), e => {
                        var t;
                        const i = h.ArrayExt.firstIndexOf(o, e.path),
                            r = s[i];
                        if (r) {
                            let s =
                                null === (t = e.kernel) || void 0 === t
                                    ? void 0
                                    : t.name;
                            const i = this._model.specs;
                            if ((r.classList.add(U), i && s)) {
                                const e = i.kernelspecs[s];
                                s = e ? e.display_name : 'unknown';
                            }
                            r.title = this._trans.__(
                                '%1\nKernel: %2',
                                r.title,
                                s
                            );
                        }
                    }),
                        (this._prevPath = this._model.path);
                }
                onResize(e) {
                    const { width: t } =
                        -1 === e.width ? this.node.getBoundingClientRect() : e;
                    this.toggleClass('jp-DirListing-narrow', t < 250);
                }
                setColumnVisibility(e, t) {
                    t
                        ? this._hiddenColumns.delete(e)
                        : this._hiddenColumns.add(e),
                        (this.headerNode.innerHTML = ''),
                        this._renderer.populateHeaderNode(
                            this.headerNode,
                            this.translator,
                            this._hiddenColumns
                        );
                }
                _evtClick(e) {
                    const t = e.target,
                        s = this.headerNode;
                    if (s.contains(t)) {
                        const t = this.renderer.handleHeaderClick(s, e);
                        t && this.sort(t);
                    }
                }
                _evtScroll(e) {
                    this.headerNode.scrollLeft = this.contentNode.scrollLeft;
                }
                _evtMousedown(e) {
                    if (e.target === this._editNode) return;
                    if (this._editNode.parentNode) {
                        if (this._editNode === e.target) return;
                        this._editNode.focus(),
                            this._editNode.blur(),
                            clearTimeout(this._selectTimer);
                    }
                    let t = K.hitTestNodes(this._items, e);
                    -1 !== t &&
                        (this.handleFileSelect(e),
                        0 !== e.button && clearTimeout(this._selectTimer),
                        (H && e.ctrlKey) ||
                            2 === e.button ||
                            (0 === e.button &&
                                ((this._dragData = {
                                    pressX: e.clientX,
                                    pressY: e.clientY,
                                    index: t,
                                }),
                                document.addEventListener('mouseup', this, !0),
                                document.addEventListener(
                                    'mousemove',
                                    this,
                                    !0
                                ))));
                }
                _evtMouseup(e) {
                    if (
                        (this._softSelection &&
                            (e.metaKey ||
                                e.shiftKey ||
                                e.ctrlKey ||
                                0 !== e.button ||
                                (this.clearSelectedItems(),
                                (this.selection[this._softSelection] = !0),
                                this.update()),
                            (this._softSelection = '')),
                        0 === e.button && this._focusSelectedFile(),
                        0 !== e.button || !this._drag)
                    )
                        return (
                            document.removeEventListener('mousemove', this, !0),
                            void document.removeEventListener(
                                'mouseup',
                                this,
                                !0
                            )
                        );
                    e.preventDefault(), e.stopPropagation();
                }
                _evtMousemove(e) {
                    if (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        this._drag || !this._dragData)
                    )
                        return;
                    const t = this._dragData,
                        s = Math.abs(e.clientX - t.pressX),
                        i = Math.abs(e.clientY - t.pressY);
                    (s < 5 && i < 5) ||
                        this._startDrag(t.index, e.clientX, e.clientY);
                }
                handleOpen(e) {
                    if ((this._onItemOpened.emit(e), 'directory' === e.type)) {
                        const t = this._manager.services.contents.localPath(
                            e.path
                        );
                        this._model
                            .cd(`/${t}`)
                            .catch(e =>
                                (0, i.showErrorMessage)(
                                    this._trans._p(
                                        'showErrorMessage',
                                        'Open directory'
                                    ),
                                    e
                                )
                            );
                    } else {
                        const t = e.path;
                        this._manager.openOrReveal(t);
                    }
                }
                evtKeydown(e) {
                    switch (e.keyCode) {
                        case 13: {
                            if (
                                e.ctrlKey ||
                                e.shiftKey ||
                                e.altKey ||
                                e.metaKey
                            )
                                return;
                            e.preventDefault(), e.stopPropagation();
                            const t = Object.keys(this.selection)[0],
                                s = this._sortedItems,
                                i = h.ArrayExt.findFirstIndex(
                                    s,
                                    e => e.path === t
                                );
                            if (-1 === i) return;
                            const r = this._sortedItems[i];
                            this.handleOpen(r);
                            break;
                        }
                        case 38:
                            this.selectPrevious(e.shiftKey),
                                e.stopPropagation(),
                                e.preventDefault();
                            break;
                        case 40:
                            this.selectNext(e.shiftKey),
                                e.stopPropagation(),
                                e.preventDefault();
                    }
                    if (
                        !this._inRename &&
                        void 0 !== e.key &&
                        1 === e.key.length
                    ) {
                        if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)
                            return;
                        (this._searchPrefix += e.key),
                            clearTimeout(this._searchPrefixTimer),
                            (this._searchPrefixTimer = window.setTimeout(() => {
                                this._searchPrefix = '';
                            }, 1e3)),
                            this.selectByPrefix(),
                            e.stopPropagation(),
                            e.preventDefault();
                    }
                }
                evtDblClick(e) {
                    if (0 !== e.button) return;
                    if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)
                        return;
                    e.preventDefault(),
                        e.stopPropagation(),
                        clearTimeout(this._selectTimer),
                        this._editNode.blur();
                    const t = e.target,
                        s = h.ArrayExt.findFirstIndex(this._items, e =>
                            e.contains(t)
                        );
                    if (-1 === s) return;
                    const i = this._sortedItems[s];
                    this.handleOpen(i);
                }
                evtNativeDrop(e) {
                    var t, s, r;
                    const n =
                        null === (t = e.dataTransfer) || void 0 === t
                            ? void 0
                            : t.files;
                    if (!n || 0 === n.length) return;
                    const a =
                        null === (s = e.dataTransfer) || void 0 === s
                            ? void 0
                            : s.items.length;
                    if (a) {
                        for (let t = 0; t < a; t++)
                            (null === (r = e.dataTransfer) || void 0 === r
                                ? void 0
                                : r.items[t].webkitGetAsEntry()
                            ).isDirectory &&
                                (console.log(
                                    'currently not supporting drag + drop for folders'
                                ),
                                (0, i.showDialog)({
                                    title: this._trans.__(
                                        'Error Uploading Folder'
                                    ),
                                    body: this._trans.__(
                                        'Drag and Drop is currently not supported for folders'
                                    ),
                                    buttons: [
                                        i.Dialog.cancelButton({
                                            label: this._trans.__('Close'),
                                        }),
                                    ],
                                }));
                        e.preventDefault();
                        for (let e = 0; e < n.length; e++)
                            this._model.upload(n[e]);
                    }
                }
                evtDragEnter(e) {
                    if (e.mimeData.hasData(S)) {
                        const t = K.hitTestNodes(this._items, e);
                        if (-1 === t) return;
                        const s = this._sortedItems[t];
                        if ('directory' !== s.type || this.selection[s.path])
                            return;
                        e.target.classList.add(A),
                            e.preventDefault(),
                            e.stopPropagation();
                    }
                }
                evtDragLeave(e) {
                    e.preventDefault(), e.stopPropagation();
                    const t = i.DOMUtils.findElement(this.node, A);
                    t && t.classList.remove(A);
                }
                evtDragOver(e) {
                    e.preventDefault(),
                        e.stopPropagation(),
                        (e.dropAction = e.proposedAction);
                    const t = i.DOMUtils.findElement(this.node, A);
                    t && t.classList.remove(A);
                    const s = K.hitTestNodes(this._items, e);
                    this._items[s].classList.add(A);
                }
                evtDrop(e) {
                    if (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        clearTimeout(this._selectTimer),
                        'none' === e.proposedAction)
                    )
                        return void (e.dropAction = 'none');
                    if (!e.mimeData.hasData(S)) return;
                    let t = e.target;
                    for (; t && t.parentElement; ) {
                        if (t.classList.contains(A)) {
                            t.classList.remove(A);
                            break;
                        }
                        t = t.parentElement;
                    }
                    const s = h.ArrayExt.firstIndexOf(this._items, t),
                        r = this._sortedItems;
                    let n = this._model.path;
                    'directory' === r[s].type &&
                        (n = o.PathExt.join(n, r[s].name));
                    const a = this._manager,
                        d = [],
                        c = e.mimeData.getData(S);
                    e.ctrlKey && 'move' === e.proposedAction
                        ? (e.dropAction = 'copy')
                        : (e.dropAction = e.proposedAction);
                    for (const t of c) {
                        const s = a.services.contents.localPath(t),
                            i = o.PathExt.basename(s),
                            r = o.PathExt.join(n, i);
                        r !== t &&
                            ('copy' === e.dropAction
                                ? d.push(a.copy(t, n))
                                : d.push((0, l.renameFile)(a, t, r)));
                    }
                    Promise.all(d).catch(e => {
                        (0, i.showErrorMessage)(
                            this._trans._p(
                                'showErrorMessage',
                                'Error while copying/moving files'
                            ),
                            e
                        );
                    });
                }
                _startDrag(e, t, s) {
                    let i = Object.keys(this.selection);
                    const r = this._items[e],
                        n = this._sortedItems;
                    let a, o;
                    if (r.classList.contains(O)) {
                        const e = i[0];
                        (o = (0, h.find)(n, t => t.path === e)),
                            (a = (0, h.toArray)(this.selectedItems()));
                    } else (o = n[e]), (i = [o.path]), (a = [o]);
                    if (!o) return;
                    const l = this._manager.registry.getFileTypeForModel(o),
                        d = this.renderer.createDragImage(
                            r,
                            i.length,
                            this._trans,
                            l
                        );
                    (this._drag = new b.Drag({
                        dragImage: d,
                        mimeData: new E.MimeData(),
                        supportedActions: 'move',
                        proposedAction: 'move',
                    })),
                        this._drag.mimeData.setData(S, i);
                    const c = this.model.manager.services;
                    for (const e of a)
                        this._drag.mimeData.setData(
                            'application/x-jupyter-icontentsrich',
                            {
                                model: e,
                                withContent: async () =>
                                    await c.contents.get(e.path),
                            }
                        );
                    if (o && 'directory' !== o.type) {
                        const e = i.slice(1).reverse();
                        this._drag.mimeData.setData(
                            'application/vnd.lumino.widget-factory',
                            () => {
                                if (!o) return;
                                const t = o.path;
                                let s = this._manager.findWidget(t);
                                if (
                                    (s || (s = this._manager.open(o.path)),
                                    e.length)
                                ) {
                                    const t = new E.PromiseDelegate();
                                    t.promise.then(() => {
                                        let t = s;
                                        e.forEach(e => {
                                            const s = {
                                                ref: null == t ? void 0 : t.id,
                                                mode: 'tab-after',
                                            };
                                            (t = this._manager.openOrReveal(
                                                e,
                                                void 0,
                                                void 0,
                                                s
                                            )),
                                                this._manager.openOrReveal(
                                                    o.path
                                                );
                                        });
                                    }),
                                        t.resolve(void 0);
                                }
                                return s;
                            }
                        );
                    }
                    document.removeEventListener('mousemove', this, !0),
                        document.removeEventListener('mouseup', this, !0),
                        clearTimeout(this._selectTimer),
                        this._drag.start(t, s).then(e => {
                            (this._drag = null),
                                clearTimeout(this._selectTimer);
                        });
                }
                handleFileSelect(e) {
                    const t = this._sortedItems,
                        s = K.hitTestNodes(this._items, e);
                    if ((clearTimeout(this._selectTimer), -1 === s)) return;
                    this._softSelection = '';
                    const i = t[s].path,
                        r = Object.keys(this.selection);
                    if ((H && e.metaKey) || (!H && e.ctrlKey))
                        this.selection[i]
                            ? delete this.selection[i]
                            : (this.selection[i] = !0);
                    else if (e.shiftKey) this._handleMultiSelect(r, s);
                    else {
                        if (!(i in this.selection && r.length > 1))
                            return this._selectItem(s, !1);
                        this._softSelection = i;
                    }
                    this.update();
                }
                _focusSelectedFile(e) {
                    if (void 0 === e) {
                        const t = Object.keys(this.selection);
                        if (t.length > 1) return;
                        e = h.ArrayExt.findFirstIndex(
                            this._sortedItems,
                            e => e.path === t[0]
                        );
                    }
                    if (-1 === e) return;
                    const t = this._items[e],
                        s = i.DOMUtils.findElement(t, P);
                    s && s.focus();
                }
                _handleMultiSelect(e, t) {
                    const s = this._sortedItems;
                    let i = -1;
                    for (let r = 0; r < this._items.length; r++) {
                        if (r === t) continue;
                        const n = s[r].path;
                        -1 !== e.indexOf(n) &&
                            (-1 === i || Math.abs(t - r) < Math.abs(i - r)) &&
                            (i = r);
                    }
                    -1 === i && (i = 0);
                    for (let e = 0; e < this._items.length; e++)
                        ((i >= e && t <= e) || (i <= e && t >= e)) &&
                            (this.selection[s[e].path] = !0);
                }
                _copy() {
                    (this._clipboard.length = 0),
                        (0, h.each)(this.selectedItems(), e => {
                            this._clipboard.push(e.path);
                        });
                }
                async _delete(e) {
                    await Promise.all(
                        e.map(e =>
                            this._model.manager.deleteFile(e).catch(e => {
                                (0, i.showErrorMessage)(
                                    this._trans._p(
                                        'showErrorMessage',
                                        'Delete Failed'
                                    ),
                                    e
                                );
                            })
                        )
                    );
                }
                _doRename() {
                    this._inRename = !0;
                    const e = this._sortedItems,
                        t = Object.keys(this.selection)[0],
                        s = h.ArrayExt.findFirstIndex(e, e => e.path === t),
                        r = this._items[s],
                        n = e[s],
                        a = this.renderer.getNameNode(r),
                        d = n.name;
                    return (
                        (this._editNode.value = d),
                        this._selectItem(s, !1),
                        K.doRename(a, this._editNode, d).then(e => {
                            if ((this.node.focus(), !e || e === d))
                                return (this._inRename = !1), d;
                            if (!(0, l.isValidFileName)(e))
                                return (
                                    (0, i.showErrorMessage)(
                                        this._trans.__('Rename Error'),
                                        Error(
                                            this._trans._p(
                                                'showErrorMessage',
                                                '"%1" is not a valid name for a file. Names must have nonzero length, and cannot include "/", "\\", or ":"',
                                                e
                                            )
                                        )
                                    ),
                                    (this._inRename = !1),
                                    d
                                );
                            if (this.isDisposed)
                                throw ((this._inRename = !1),
                                new Error('File browser is disposed.'));
                            const t = this._manager,
                                s = o.PathExt.join(this._model.path, d),
                                r = o.PathExt.join(this._model.path, e);
                            return (0, l.renameFile)(t, s, r)
                                .catch(
                                    e => (
                                        'File not renamed' !== e &&
                                            (0, i.showErrorMessage)(
                                                this._trans._p(
                                                    'showErrorMessage',
                                                    'Rename Error'
                                                ),
                                                e
                                            ),
                                        (this._inRename = !1),
                                        d
                                    )
                                )
                                .then(() => {
                                    if (this.isDisposed)
                                        throw ((this._inRename = !1),
                                        new Error('File browser is disposed.'));
                                    return (
                                        this._inRename &&
                                            this.selectItemByName(e),
                                        (this._inRename = !1),
                                        e
                                    );
                                });
                        })
                    );
                }
                _selectItem(e, t, s = !0) {
                    const i = this._sortedItems;
                    t || this.clearSelectedItems();
                    const r = i[e].path;
                    (this.selection[r] = !0),
                        !t && s && this._focusSelectedFile(e),
                        this.update();
                }
                _onModelRefreshed() {
                    const e = Object.keys(this.selection);
                    this.clearSelectedItems(),
                        (0, h.each)(this._model.items(), t => {
                            const s = t.path;
                            -1 !== e.indexOf(s) && (this.selection[s] = !0);
                        }),
                        this.isVisible
                            ? this.sort(this.sortState)
                            : (this._isDirty = !0);
                }
                _onPathChanged() {
                    this.clearSelectedItems(), this.sort(this.sortState);
                }
                _onFileChanged(e, t) {
                    const s = t.newValue;
                    if (!s) return;
                    const i = s.name;
                    'new' === t.type &&
                        i &&
                        this.selectItemByName(i).catch(() => {});
                }
                _onActivateRequested(e, t) {
                    if (o.PathExt.dirname(t) !== this._model.path) return;
                    const s = o.PathExt.basename(t);
                    this.selectItemByName(s).catch(() => {});
                }
            }
            var K;
            !(function(e) {
                class t {
                    createNode() {
                        const e = document.createElement('div'),
                            t = document.createElement('div'),
                            s = document.createElement('ul');
                        return (
                            (s.className = x),
                            (t.className = I),
                            e.appendChild(t),
                            e.appendChild(s),
                            (e.tabIndex = 0),
                            e
                        );
                    }
                    populateHeaderNode(e, t, s) {
                        var r;
                        const a = (t = t || n.nullTranslator).load(
                                'jupyterlab'
                            ),
                            o = this.createHeaderItemNode(a.__('Name')),
                            l = document.createElement('div'),
                            d = this.createHeaderItemNode(
                                a.__('Last Modified')
                            );
                        o.classList.add(N),
                            o.classList.add(O),
                            d.classList.add(T),
                            l.classList.add('jp-id-narrow'),
                            (l.textContent = '...'),
                            e.appendChild(o),
                            e.appendChild(l),
                            e.appendChild(d),
                            (null === (r = null == s ? void 0 : s.has) ||
                            void 0 === r
                              ? void 0
                              : r.call(s, 'last_modified'))
                                ? d.classList.add(j)
                                : d.classList.remove(j),
                            K.updateCaret(
                                i.DOMUtils.findElement(o, F),
                                'right',
                                'up'
                            );
                    }
                    handleHeaderClick(e, t) {
                        const s = i.DOMUtils.findElement(e, N),
                            r = i.DOMUtils.findElement(e, T),
                            n = { direction: 'ascending', key: 'name' },
                            a = t.target;
                        if (s.contains(a)) {
                            const e = i.DOMUtils.findElement(r, F),
                                t = i.DOMUtils.findElement(s, F);
                            return (
                                s.classList.contains(O)
                                    ? s.classList.contains(V)
                                        ? (s.classList.remove(V),
                                          K.updateCaret(t, 'right', 'up'))
                                        : ((n.direction = 'descending'),
                                          s.classList.add(V),
                                          K.updateCaret(t, 'right', 'down'))
                                    : (s.classList.remove(V),
                                      K.updateCaret(t, 'right', 'up')),
                                s.classList.add(O),
                                r.classList.remove(O),
                                r.classList.remove(V),
                                K.updateCaret(e, 'left'),
                                n
                            );
                        }
                        if (r.contains(a)) {
                            const e = i.DOMUtils.findElement(r, F),
                                t = i.DOMUtils.findElement(s, F);
                            return (
                                (n.key = 'last_modified'),
                                r.classList.contains(O)
                                    ? r.classList.contains(V)
                                        ? (r.classList.remove(V),
                                          K.updateCaret(e, 'left', 'up'))
                                        : ((n.direction = 'descending'),
                                          r.classList.add(V),
                                          K.updateCaret(e, 'left', 'down'))
                                    : (r.classList.remove(V),
                                      K.updateCaret(e, 'left', 'up')),
                                r.classList.add(O),
                                s.classList.remove(O),
                                s.classList.remove(V),
                                K.updateCaret(t, 'right'),
                                n
                            );
                        }
                        return n;
                    }
                    createItemNode(e) {
                        var t;
                        const s = document.createElement('li'),
                            i = document.createElement('span'),
                            r = document.createElement('span'),
                            n = document.createElement('span');
                        return (
                            (i.className = k),
                            (r.className = P),
                            (n.className = M),
                            s.appendChild(i),
                            s.appendChild(r),
                            s.appendChild(n),
                            (r.tabIndex = 0),
                            (null === (t = null == e ? void 0 : e.has) ||
                            void 0 === t
                              ? void 0
                              : t.call(e, 'last_modified'))
                                ? n.classList.add(j)
                                : n.classList.remove(j),
                            s
                        );
                    }
                    updateItemNode(e, t, s, r, a) {
                        var l;
                        (r = r || n.nullTranslator),
                            (s =
                                s ||
                                w.DocumentRegistry.getDefaultTextFileType(r));
                        const { icon: c, iconClass: m, name: p } = s,
                            u = (r = r || n.nullTranslator).load('jupyterlab'),
                            _ = i.DOMUtils.findElement(e, k),
                            g = i.DOMUtils.findElement(e, P),
                            f = i.DOMUtils.findElement(e, M);
                        (null === (l = null == a ? void 0 : a.has) ||
                        void 0 === l
                          ? void 0
                          : l.call(a, 'last_modified'))
                            ? f.classList.add(j)
                            : f.classList.remove(j),
                            d.LabIcon.resolveElement({
                                icon: c,
                                iconClass: (0, d.classes)(m, 'jp-Icon'),
                                container: _,
                                className: k,
                                stylesheet: 'listing',
                            });
                        let v = u.__('Name: %1', t.name);
                        if (
                            (null !== t.size &&
                                void 0 !== t.size &&
                                (v += u.__(
                                    '\nSize: %1',
                                    K.formatFileSize(t.size, 1, 1024)
                                )),
                            t.path)
                        ) {
                            const e = o.PathExt.dirname(t.path);
                            e &&
                                ((v += u.__('\nPath: %1', e.substr(0, 50))),
                                e.length > 50 && (v += '...'));
                        }
                        if (
                            (t.created &&
                                (v += u.__(
                                    '\nCreated: %1',
                                    o.Time.format(
                                        new Date(t.created),
                                        'YYYY-MM-DD HH:mm:ss'
                                    )
                                )),
                            t.last_modified &&
                                (v += u.__(
                                    '\nModified: %1',
                                    o.Time.format(
                                        new Date(t.last_modified),
                                        'YYYY-MM-DD HH:mm:ss'
                                    )
                                )),
                            (v += u.__('\nWritable: %1', t.writable)),
                            (e.title = v),
                            e.setAttribute('data-file-type', p),
                            t.name.startsWith('.')
                                ? e.setAttribute('data-is-dot', 'true')
                                : e.removeAttribute('data-is-dot'),
                            g)
                        ) {
                            const e = t.indices ? t.indices : [];
                            let s = h.StringExt.highlight(t.name, e, L.h.mark);
                            L.VirtualDOM.render(L.h.span(s), g);
                        }
                        let y = '',
                            E = '';
                        t.last_modified &&
                            ((y = o.Time.formatHuman(
                                new Date(t.last_modified)
                            )),
                            (E = o.Time.format(
                                new Date(t.last_modified),
                                'lll'
                            ))),
                            (f.textContent = y),
                            (f.title = E);
                    }
                    getNameNode(e) {
                        return i.DOMUtils.findElement(e, P);
                    }
                    createDragImage(e, t, s, r) {
                        const n = e.cloneNode(!0),
                            a = i.DOMUtils.findElement(n, M),
                            o = i.DOMUtils.findElement(n, k);
                        return (
                            n.removeChild(a),
                            r
                                ? ((o.textContent = r.iconLabel || ''),
                                  (o.className = r.iconClass || ''))
                                : ((o.textContent = ''), (o.className = '')),
                            o.classList.add('jp-DragIcon'),
                            t > 1 &&
                                (i.DOMUtils.findElement(
                                    n,
                                    P
                                ).textContent = s._n('%1 Item', '%1 Items', t)),
                            n
                        );
                    }
                    createHeaderItemNode(e) {
                        const t = document.createElement('div'),
                            s = document.createElement('span'),
                            i = document.createElement('span');
                        return (
                            (t.className = 'jp-DirListing-headerItem'),
                            (s.className = 'jp-DirListing-headerItemText'),
                            (i.className = F),
                            (s.textContent = e),
                            t.appendChild(s),
                            t.appendChild(i),
                            t
                        );
                    }
                }
                (e.Renderer = t), (e.defaultRenderer = new t());
            })(z || (z = {})),
                (function(e) {
                    (e.doRename = function(e, t, s) {
                        const i = e.parentElement;
                        i.replaceChild(t, e), t.focus();
                        const r = t.value.lastIndexOf('.');
                        return (
                            -1 === r
                                ? t.setSelectionRange(0, t.value.length)
                                : t.setSelectionRange(0, r),
                            new Promise((r, n) => {
                                (t.onblur = () => {
                                    i.replaceChild(e, t), r(t.value);
                                }),
                                    (t.onkeydown = e => {
                                        switch (e.keyCode) {
                                            case 13:
                                                e.stopPropagation(),
                                                    e.preventDefault(),
                                                    t.blur();
                                                break;
                                            case 27:
                                                e.stopPropagation(),
                                                    e.preventDefault(),
                                                    (t.value = s),
                                                    t.blur();
                                                break;
                                            case 38:
                                                e.stopPropagation(),
                                                    e.preventDefault(),
                                                    t.selectionStart !==
                                                        t.selectionEnd &&
                                                        (t.selectionStart = t.selectionEnd = 0);
                                                break;
                                            case 40:
                                                e.stopPropagation(),
                                                    e.preventDefault(),
                                                    t.selectionStart !==
                                                        t.selectionEnd &&
                                                        (t.selectionStart = t.selectionEnd =
                                                            t.value.length);
                                        }
                                    });
                            })
                        );
                    }),
                        (e.sort = function(e, t) {
                            const s = (0, h.toArray)(e),
                                i = 'descending' === t.direction ? 1 : -1;
                            return (
                                'last_modified' === t.key
                                    ? s.sort((e, t) => {
                                          const s =
                                                  'directory' === e.type
                                                      ? 0
                                                      : 1,
                                              r =
                                                  'directory' === t.type
                                                      ? 0
                                                      : 1,
                                              n = new Date(
                                                  e.last_modified
                                              ).getTime(),
                                              a = new Date(
                                                  t.last_modified
                                              ).getTime();
                                          return s - r || (n - a) * i;
                                      })
                                    : s.sort(
                                          (e, t) =>
                                              ('directory' === e.type ? 0 : 1) -
                                                  ('directory' === t.type
                                                      ? 0
                                                      : 1) ||
                                              t.name.localeCompare(e.name) * i
                                      ),
                                s
                            );
                        }),
                        (e.hitTestNodes = function(e, t) {
                            return h.ArrayExt.findFirstIndex(
                                e,
                                e =>
                                    c.ElementExt.hitTest(
                                        e,
                                        t.clientX,
                                        t.clientY
                                    ) || t.target === e
                            );
                        }),
                        (e.formatFileSize = function(e, t, s) {
                            if (0 === e) return '0 Bytes';
                            const i = t || 2,
                                r = [
                                    'Bytes',
                                    'KB',
                                    'MB',
                                    'GB',
                                    'TB',
                                    'PB',
                                    'EB',
                                    'ZB',
                                    'YB',
                                ],
                                n = Math.floor(Math.log(e) / Math.log(s));
                            return n >= 0 && n < r.length
                                ? parseFloat((e / Math.pow(s, n)).toFixed(i)) +
                                      ' ' +
                                      r[n]
                                : String(e);
                        }),
                        (e.updateCaret = function(e, t, s) {
                            s
                                ? ('down' === s
                                      ? d.caretDownIcon
                                      : d.caretUpIcon
                                  ).element({
                                      container: e,
                                      tag: 'span',
                                      stylesheet: 'listingHeaderItem',
                                      float: t,
                                  })
                                : (d.LabIcon.remove(e), (e.className = F));
                        });
                })(K || (K = {}));
            const W = 'jp-FileBrowser-filterBox';
            class Y extends a.Widget {
                constructor(e) {
                    super(),
                        (this._showLastModifiedColumn = !0),
                        (this._useFuzzyFilter = !0),
                        (this._showHiddenFiles = !1),
                        this.addClass('jp-FileBrowser'),
                        (this.id = e.id);
                    const t = (this.model = e.model),
                        s = e.renderer,
                        r = this.translator;
                    t.connectionFailure.connect(
                        this._onConnectionFailure,
                        this
                    ),
                        (this.translator = e.translator || n.nullTranslator),
                        (this._manager = t.manager),
                        (this._trans = this.translator.load('jupyterlab')),
                        (this.crumbs = new v({ model: t, translator: r })),
                        (this.toolbar = new i.Toolbar()),
                        this.toolbar.node.setAttribute('role', 'navigation'),
                        this.toolbar.node.setAttribute(
                            'aria-label',
                            this._trans.__('file browser')
                        ),
                        (this._directoryPending = !1),
                        (this.listing = this.createDirListing({
                            model: t,
                            renderer: s,
                            translator: this.translator,
                        })),
                        (this._filenameSearcher = (0, i.FilenameSearcher)({
                            updateFilter: (e, t) => {
                                this.listing.model.setFilter(t =>
                                    e(t.name.toLowerCase())
                                );
                            },
                            useFuzzyFilter: this._useFuzzyFilter,
                            placeholder: this._trans.__('Filter files by name'),
                        })),
                        this.crumbs.addClass('jp-FileBrowser-crumbs'),
                        this.toolbar.addClass('jp-FileBrowser-toolbar'),
                        this._filenameSearcher.addClass(W),
                        this.listing.addClass('jp-FileBrowser-listing'),
                        (this.layout = new a.PanelLayout()),
                        this.layout.addWidget(this.toolbar),
                        this.layout.addWidget(this._filenameSearcher),
                        this.layout.addWidget(this.crumbs),
                        this.layout.addWidget(this.listing),
                        !1 !== e.restore && t.restore(this.id);
                }
                get navigateToCurrentDirectory() {
                    return this._navigateToCurrentDirectory;
                }
                set navigateToCurrentDirectory(e) {
                    this._navigateToCurrentDirectory = e;
                }
                get showLastModifiedColumn() {
                    return this._showLastModifiedColumn;
                }
                set showLastModifiedColumn(e) {
                    this.listing.setColumnVisibility
                        ? (this.listing.setColumnVisibility('last_modified', e),
                          (this._showLastModifiedColumn = e))
                        : console.warn(
                              'Listing does not support toggling column visibility'
                          );
                }
                set useFuzzyFilter(e) {
                    (this._useFuzzyFilter = e),
                        (this._filenameSearcher = (0, i.FilenameSearcher)({
                            updateFilter: (e, t) => {
                                this.listing.model.setFilter(t =>
                                    e(t.name.toLowerCase())
                                );
                            },
                            useFuzzyFilter: this._useFuzzyFilter,
                            placeholder: this._trans.__('Filter files by name'),
                            forceRefresh: !0,
                        })),
                        this._filenameSearcher.addClass(W),
                        this.layout.removeWidget(this._filenameSearcher),
                        this.layout.removeWidget(this.crumbs),
                        this.layout.removeWidget(this.listing),
                        this.layout.addWidget(this._filenameSearcher),
                        this.layout.addWidget(this.crumbs),
                        this.layout.addWidget(this.listing);
                }
                get showHiddenFiles() {
                    return this._showHiddenFiles;
                }
                set showHiddenFiles(e) {
                    this.model.showHiddenFiles(e), (this._showHiddenFiles = e);
                }
                selectedItems() {
                    return this.listing.selectedItems();
                }
                async selectItemByName(e) {
                    await this.listing.selectItemByName(e);
                }
                clearSelectedItems() {
                    this.listing.clearSelectedItems();
                }
                rename() {
                    return this.listing.rename();
                }
                cut() {
                    this.listing.cut();
                }
                copy() {
                    this.listing.copy();
                }
                paste() {
                    return this.listing.paste();
                }
                createNewDirectory() {
                    !0 !== this._directoryPending &&
                        ((this._directoryPending = !0),
                        this._manager
                            .newUntitled({
                                path: this.model.path,
                                type: 'directory',
                            })
                            .then(async e => {
                                await this.listing.selectItemByName(e.name),
                                    await this.rename(),
                                    (this._directoryPending = !1);
                            })
                            .catch(e => {
                                (0, i.showErrorMessage)(
                                    this._trans.__('Error'),
                                    e
                                ),
                                    (this._directoryPending = !1);
                            }));
                }
                createNewFile(e) {
                    !0 !== this._filePending &&
                        ((this._filePending = !0),
                        this._manager
                            .newUntitled({
                                path: this.model.path,
                                type: 'file',
                                ext: e.ext,
                            })
                            .then(async e => {
                                await this.listing.selectItemByName(e.name),
                                    await this.rename(),
                                    (this._filePending = !1);
                            })
                            .catch(e => {
                                (0, i.showErrorMessage)(
                                    this._trans.__('Error'),
                                    e
                                ),
                                    (this._filePending = !1);
                            }));
                }
                delete() {
                    return this.listing.delete();
                }
                duplicate() {
                    return this.listing.duplicate();
                }
                download() {
                    return this.listing.download();
                }
                shutdownKernels() {
                    return this.listing.shutdownKernels();
                }
                selectNext() {
                    this.listing.selectNext();
                }
                selectPrevious() {
                    this.listing.selectPrevious();
                }
                modelForClick(e) {
                    return this.listing.modelForClick(e);
                }
                createDirListing(e) {
                    return new z(e);
                }
                _onConnectionFailure(e, t) {
                    if (
                        t instanceof r.ServerConnection.ResponseError &&
                        404 === t.response.status
                    ) {
                        const e = this._trans.__('Directory not found');
                        (t.message = this._trans.__(
                            'Directory not found: "%1"',
                            this.model.path
                        )),
                            (0, i.showErrorMessage)(e, t);
                    }
                }
            }
            var X = s(61313);
            const q = 15728640,
                G = 1048576;
            class J {
                constructor(e) {
                    var t;
                    (this._connectionFailure = new D.Signal(this)),
                        (this._fileChanged = new D.Signal(this)),
                        (this._items = []),
                        (this._key = ''),
                        (this._pathChanged = new D.Signal(this)),
                        (this._paths = new Set()),
                        (this._pending = null),
                        (this._pendingPath = null),
                        (this._refreshed = new D.Signal(this)),
                        (this._sessions = []),
                        (this._state = null),
                        (this._isDisposed = !1),
                        (this._restored = new E.PromiseDelegate()),
                        (this._uploads = []),
                        (this._uploadChanged = new D.Signal(this)),
                        (this.manager = e.manager),
                        (this.translator = e.translator || n.nullTranslator),
                        (this._trans = this.translator.load('jupyterlab')),
                        (this._driveName = e.driveName || ''),
                        (this._model = {
                            path: this.rootPath,
                            name: o.PathExt.basename(this.rootPath),
                            type: 'directory',
                            content: void 0,
                            writable: !1,
                            created: 'unknown',
                            last_modified: 'unknown',
                            mimetype: 'text/plain',
                            format: 'text',
                        }),
                        (this._state = e.state || null);
                    const s = e.refreshInterval || 1e4,
                        { services: i } = e.manager;
                    i.contents.fileChanged.connect(this.onFileChanged, this),
                        i.sessions.runningChanged.connect(
                            this.onRunningChanged,
                            this
                        ),
                        (this._unloadEventListener = e => {
                            if (this._uploads.length > 0) {
                                const t = this._trans.__(
                                    'Files still uploading'
                                );
                                return (e.returnValue = t), t;
                            }
                        }),
                        window.addEventListener(
                            'beforeunload',
                            this._unloadEventListener
                        ),
                        (this._poll = new X.Poll({
                            auto: null === (t = e.auto) || void 0 === t || t,
                            name: '@jupyterlab/filebrowser:Model',
                            factory: () => this.cd('.'),
                            frequency: { interval: s, backoff: !0, max: 3e5 },
                            standby: 'when-hidden',
                        }));
                }
                get connectionFailure() {
                    return this._connectionFailure;
                }
                get driveName() {
                    return this._driveName;
                }
                get restored() {
                    return this._restored.promise;
                }
                get fileChanged() {
                    return this._fileChanged;
                }
                get path() {
                    return this._model ? this._model.path : '';
                }
                get rootPath() {
                    return this._driveName ? this._driveName + ':' : '';
                }
                get pathChanged() {
                    return this._pathChanged;
                }
                get refreshed() {
                    return this._refreshed;
                }
                get specs() {
                    return this.manager.services.kernelspecs.specs;
                }
                get isDisposed() {
                    return this._isDisposed;
                }
                get uploadChanged() {
                    return this._uploadChanged;
                }
                uploads() {
                    return new h.ArrayIterator(this._uploads);
                }
                dispose() {
                    this.isDisposed ||
                        (window.removeEventListener(
                            'beforeunload',
                            this._unloadEventListener
                        ),
                        (this._isDisposed = !0),
                        this._poll.dispose(),
                        (this._sessions.length = 0),
                        (this._items.length = 0),
                        D.Signal.clearData(this));
                }
                items() {
                    return new h.ArrayIterator(this._items);
                }
                sessions() {
                    return new h.ArrayIterator(this._sessions);
                }
                async refresh() {
                    await this._poll.refresh(),
                        await this._poll.tick,
                        this._refreshed.emit(void 0);
                }
                async cd(e = '.') {
                    if (
                        ((e =
                            '.' !== e
                                ? this.manager.services.contents.resolvePath(
                                      this._model.path,
                                      e
                                  )
                                : this._pendingPath || this._model.path),
                        this._pending)
                    ) {
                        if (e === this._pendingPath) return this._pending;
                        await this._pending;
                    }
                    const t = this.path;
                    (this._pendingPath = e),
                        t !== e && (this._sessions.length = 0);
                    const s = this.manager.services;
                    return (
                        (this._pending = s.contents
                            .get(e, { content: !0 })
                            .then(i => {
                                this.isDisposed ||
                                    (this.handleContents(i),
                                    (this._pendingPath = null),
                                    (this._pending = null),
                                    t !== e &&
                                        (this._state &&
                                            this._key &&
                                            this._state.save(this._key, {
                                                path: e,
                                            }),
                                        this._pathChanged.emit({
                                            name: 'path',
                                            oldValue: t,
                                            newValue: e,
                                        })),
                                    this.onRunningChanged(
                                        s.sessions,
                                        s.sessions.running()
                                    ),
                                    this._refreshed.emit(void 0));
                            })
                            .catch(t => {
                                if (
                                    ((this._pendingPath = null),
                                    (this._pending = null),
                                    t.response &&
                                        404 === t.response.status &&
                                        '/' !== e)
                                )
                                    return (
                                        (t.message = this._trans.__(
                                            'Directory not found: "%1"',
                                            this._model.path
                                        )),
                                        console.error(t),
                                        this._connectionFailure.emit(t),
                                        this.cd('/')
                                    );
                                this._connectionFailure.emit(t);
                            })),
                        this._pending
                    );
                }
                async download(e) {
                    const t = await this.manager.services.contents.getDownloadUrl(
                            e
                        ),
                        s = document.createElement('a');
                    (s.href = t),
                        (s.download = ''),
                        document.body.appendChild(s),
                        s.click(),
                        document.body.removeChild(s);
                }
                async restore(e, t = !0) {
                    const { manager: s } = this,
                        i = `file-browser-${e}:cwd`,
                        r = this._state;
                    if (!this._key)
                        if (((this._key = i), t && r)) {
                            await s.services.ready;
                            try {
                                const e = await r.fetch(i);
                                if (!e)
                                    return void this._restored.resolve(void 0);
                                const t = e.path;
                                t && (await this.cd('/'));
                                const n = s.services.contents.localPath(t);
                                await s.services.contents.get(t),
                                    await this.cd(n);
                            } catch (e) {
                                await r.remove(i);
                            }
                            this._restored.resolve(void 0);
                        } else this._restored.resolve(void 0);
                }
                async upload(e) {
                    const t = o.PageConfig.getNotebookVersion(),
                        s = t < [4, 0, 0] || t >= [5, 1, 0],
                        i = e.size > q;
                    if (i && !s) {
                        const t = this._trans.__(
                            'Cannot upload file (>%1 MB). %2',
                            q / 1048576,
                            e.name
                        );
                        throw (console.warn(t), t);
                    }
                    if (i && !(await this._shouldUploadLarge(e)))
                        throw 'Cancelled large file upload';
                    if (
                        (await this._uploadCheckDisposed(),
                        await this.refresh(),
                        await this._uploadCheckDisposed(),
                        (0, h.find)(this._items, t => t.name === e.name) &&
                            !(await (0, l.shouldOverwrite)(e.name)))
                    )
                        throw 'File not uploaded';
                    await this._uploadCheckDisposed();
                    const r = s && e.size > G;
                    return await this._upload(e, r);
                }
                async _shouldUploadLarge(e) {
                    const { button: t } = await (0, i.showDialog)({
                        title: this._trans.__('Large file size warning'),
                        body: this._trans.__(
                            'The file size is %1 MB. Do you still want to upload it?',
                            Math.round(e.size / 1048576)
                        ),
                        buttons: [
                            i.Dialog.cancelButton({
                                label: this._trans.__('Cancel'),
                            }),
                            i.Dialog.warnButton({
                                label: this._trans.__('Upload'),
                            }),
                        ],
                    });
                    return t.accept;
                }
                async _upload(e, t) {
                    let s = this._model.path;
                    s = s ? s + '/' + e.name : e.name;
                    const i = e.name,
                        r = async (t, r) => {
                            await this._uploadCheckDisposed();
                            const n = new FileReader();
                            n.readAsDataURL(t),
                                await new Promise((t, s) => {
                                    (n.onload = t),
                                        (n.onerror = t =>
                                            s(
                                                `Failed to upload "${e.name}":` +
                                                    t
                                            ));
                                }),
                                await this._uploadCheckDisposed();
                            const a = n.result.split(',')[1],
                                o = {
                                    type: 'file',
                                    format: 'base64',
                                    name: i,
                                    chunk: r,
                                    content: a,
                                };
                            return await this.manager.services.contents.save(
                                s,
                                o
                            );
                        };
                    if (!t)
                        try {
                            return await r(e);
                        } catch (t) {
                            throw (h.ArrayExt.removeFirstWhere(
                                this._uploads,
                                t => e.name === t.path
                            ),
                            t);
                        }
                    let n,
                        a = { path: s, progress: 0 };
                    this._uploadChanged.emit({
                        name: 'start',
                        newValue: a,
                        oldValue: null,
                    });
                    for (let t = 0; !n; t += G) {
                        const i = t + G,
                            o = i >= e.size,
                            l = o ? -1 : i / G,
                            d = { path: s, progress: t / e.size };
                        let c;
                        this._uploads.splice(this._uploads.indexOf(a)),
                            this._uploads.push(d),
                            this._uploadChanged.emit({
                                name: 'update',
                                newValue: d,
                                oldValue: a,
                            }),
                            (a = d);
                        try {
                            c = await r(e.slice(t, i), l);
                        } catch (t) {
                            throw (h.ArrayExt.removeFirstWhere(
                                this._uploads,
                                t => e.name === t.path
                            ),
                            this._uploadChanged.emit({
                                name: 'failure',
                                newValue: a,
                                oldValue: null,
                            }),
                            t);
                        }
                        o && (n = c);
                    }
                    return (
                        this._uploads.splice(this._uploads.indexOf(a)),
                        this._uploadChanged.emit({
                            name: 'finish',
                            newValue: null,
                            oldValue: a,
                        }),
                        n
                    );
                }
                _uploadCheckDisposed() {
                    return this.isDisposed
                        ? Promise.reject(
                              'Filemanager disposed. File upload canceled'
                          )
                        : Promise.resolve();
                }
                handleContents(e) {
                    (this._model = {
                        name: e.name,
                        path: e.path,
                        type: e.type,
                        content: void 0,
                        writable: e.writable,
                        created: e.created,
                        last_modified: e.last_modified,
                        mimetype: e.mimetype,
                        format: e.format,
                    }),
                        (this._items = e.content),
                        this._paths.clear(),
                        e.content.forEach(e => {
                            this._paths.add(e.path);
                        });
                }
                onRunningChanged(e, t) {
                    this._populateSessions(t), this._refreshed.emit(void 0);
                }
                onFileChanged(e, t) {
                    const s = this._model.path,
                        { sessions: i } = this.manager.services,
                        { oldValue: r, newValue: n } = t;
                    if (
                        r && r.path && o.PathExt.dirname(r.path) === s
                            ? r
                            : n && n.path && o.PathExt.dirname(n.path) === s
                            ? n
                            : void 0
                    )
                        return (
                            this._poll.refresh(),
                            this._populateSessions(i.running()),
                            void this._fileChanged.emit(t)
                        );
                }
                _populateSessions(e) {
                    (this._sessions.length = 0),
                        (0, h.each)(e, e => {
                            this._paths.has(e.path) && this._sessions.push(e);
                        });
                }
            }
            class Z extends J {
                constructor(e) {
                    super(e),
                        (this._includeHiddenFiles = e.includeHiddenFiles || !1);
                }
                items() {
                    return this._includeHiddenFiles
                        ? super.items()
                        : (0, h.filter)(
                              super.items(),
                              e => !e.name.startsWith('.')
                          );
                }
                showHiddenFiles(e) {
                    (this._includeHiddenFiles = e), this.refresh();
                }
            }
            class $ extends Z {
                constructor(e) {
                    var t;
                    super(e),
                        (this._filter = e.filter
                            ? e.filter
                            : e => Object.freeze({})),
                        (this._filterDirectories =
                            null === (t = e.filterDirectories) ||
                            void 0 === t ||
                            t);
                }
                get filterDirectories() {
                    return this._filterDirectories;
                }
                set filterDirectories(e) {
                    this._filterDirectories = e;
                }
                items() {
                    return (0, h.filter)(super.items(), (e, t) => {
                        if (this._filterDirectories || 'directory' !== e.type) {
                            const t = this._filter(e);
                            return (
                                'boolean' != typeof t &&
                                    (e.indices =
                                        null == t ? void 0 : t.indices),
                                !!t
                            );
                        }
                        return !0;
                    });
                }
                setFilter(e) {
                    (this._filter = e), this.refresh();
                }
            }
            var Q, ee;
            !(function(e) {
                function t(e) {
                    const t = e.translator || n.nullTranslator,
                        s = t.load('jupyterlab'),
                        r = {
                            title: e.title,
                            buttons: [
                                i.Dialog.cancelButton({
                                    label: s.__('Cancel'),
                                }),
                                i.Dialog.okButton({ label: s.__('Select') }),
                            ],
                            focusNodeSelector: e.focusNodeSelector,
                            host: e.host,
                            renderer: e.renderer,
                            body: new te(e.manager, e.filter, t),
                        };
                    return new i.Dialog(r).launch();
                }
                (e.getOpenFiles = t),
                    (e.getExistingDirectory = function(e) {
                        return t(
                            Object.assign(Object.assign({}, e), {
                                filter: e => 'directory' === e.type,
                            })
                        );
                    });
            })(Q || (Q = {}));
            class te extends a.Widget {
                constructor(e, t, s, r) {
                    super();
                    const o = (s = null != s ? s : n.nullTranslator).load(
                        'jupyterlab'
                    );
                    this.addClass('jp-Open-Dialog'),
                        (this._browser = ee.createFilteredFileBrowser(
                            'filtered-file-browser-dialog',
                            e,
                            t,
                            {},
                            s,
                            r
                        )),
                        (0, i.setToolbar)(this._browser, e => [
                            {
                                name: 'new-folder',
                                widget: new i.ToolbarButton({
                                    icon: d.newFolderIcon,
                                    onClick: () => {
                                        e.createNewDirectory();
                                    },
                                    tooltip: o.__('New Folder'),
                                }),
                            },
                            {
                                name: 'refresher',
                                widget: new i.ToolbarButton({
                                    icon: d.refreshIcon,
                                    onClick: () => {
                                        e.model.refresh().catch(e => {
                                            console.error(
                                                'Failed to refresh file browser in open dialog.',
                                                e
                                            );
                                        });
                                    },
                                    tooltip: o.__('Refresh File List'),
                                }),
                            },
                        ]);
                    const l = new a.PanelLayout();
                    l.addWidget(this._browser), (this.layout = l);
                }
                getValue() {
                    const e = (0, h.toArray)(this._browser.selectedItems());
                    return 0 === e.length
                        ? [
                              {
                                  path: this._browser.model.path,
                                  name: o.PathExt.basename(
                                      this._browser.model.path
                                  ),
                                  type: 'directory',
                                  content: void 0,
                                  writable: !1,
                                  created: 'unknown',
                                  last_modified: 'unknown',
                                  mimetype: 'text/plain',
                                  format: 'text',
                              },
                          ]
                        : e;
                }
            }
            !(function(e) {
                e.createFilteredFileBrowser = (e, t, s, i = {}, r, a) => {
                    r = r || n.nullTranslator;
                    const o = new $({
                        manager: t,
                        filter: s,
                        translator: r,
                        driveName: i.driveName,
                        refreshInterval: i.refreshInterval,
                        filterDirectories: a,
                    });
                    return new Y({ id: e, model: o, translator: r });
                };
            })(ee || (ee = {}));
            const se = new E.Token(
                    '@jupyterlab/filebrowser:IFileBrowserFactory'
                ),
                ie = new E.Token(
                    '@jupyterlab/filebrowser:IFileBrowserCommands'
                );
            class re extends i.ToolbarButton {
                constructor(e) {
                    super({
                        icon: d.fileUploadIcon,
                        onClick: () => {
                            this._input.click();
                        },
                        tooltip: ne.translateToolTip(e.translator),
                    }),
                        (this._onInputChanged = () => {
                            const e = Array.prototype.slice
                                .call(this._input.files)
                                .map(e => this.fileBrowserModel.upload(e));
                            Promise.all(e).catch(e => {
                                (0, i.showErrorMessage)(
                                    this._trans._p(
                                        'showErrorMessage',
                                        'Upload Error'
                                    ),
                                    e
                                );
                            });
                        }),
                        (this._onInputClicked = () => {
                            this._input.value = '';
                        }),
                        (this._input = ne.createUploadInput()),
                        (this.fileBrowserModel = e.model),
                        (this.translator = e.translator || n.nullTranslator),
                        (this._trans = this.translator.load('jupyterlab')),
                        (this._input.onclick = this._onInputClicked),
                        (this._input.onchange = this._onInputChanged),
                        this.addClass('jp-id-upload');
                }
            }
            var ne;
            !(function(e) {
                (e.createUploadInput = function() {
                    const e = document.createElement('input');
                    return (e.type = 'file'), (e.multiple = !0), e;
                }),
                    (e.translateToolTip = function(e) {
                        return (e = e || n.nullTranslator)
                            .load('jupyterlab')
                            .__('Upload Files');
                    });
            })(ne || (ne = {}));
            var ae = s(89934),
                oe = s(62471),
                le = s.n(oe);
            function de(e) {
                const t = (e.translator || n.nullTranslator).load('jupyterlab');
                return le().createElement(
                    ae.GroupItem,
                    { spacing: 4 },
                    le().createElement(ae.TextItem, {
                        source: t.__('Uploading…'),
                    }),
                    le().createElement(ae.ProgressBar, { percentage: e.upload })
                );
            }
            class he extends i.VDomRenderer {
                constructor(e) {
                    super(
                        new he.Model(
                            e.tracker.currentWidget &&
                                e.tracker.currentWidget.model
                        )
                    ),
                        (this._onBrowserChange = (e, t) => {
                            this.model.browserModel =
                                null === t ? null : t.model;
                        }),
                        (this.translator = e.translator || n.nullTranslator),
                        (this._trans = this.translator.load('jupyterlab')),
                        (this._tracker = e.tracker),
                        this._tracker.currentChanged.connect(
                            this._onBrowserChange
                        );
                }
                render() {
                    return this.model.items.length > 0
                        ? this.model.items[0].complete
                            ? le().createElement(ae.TextItem, {
                                  source: this._trans.__('Complete!'),
                              })
                            : le().createElement(de, {
                                  upload: this.model.items[0].progress,
                                  translator: this.translator,
                              })
                        : le().createElement(de, {
                              upload: 100,
                              translator: this.translator,
                          });
                }
                dispose() {
                    super.dispose(),
                        this._tracker.currentChanged.disconnect(
                            this._onBrowserChange
                        );
                }
            }
            !(function(e) {
                class t extends i.VDomModel {
                    constructor(e) {
                        super(),
                            (this._uploadChanged = (e, t) => {
                                if ('start' === t.name)
                                    this._items.push({
                                        path: t.newValue.path,
                                        progress: 100 * t.newValue.progress,
                                        complete: !1,
                                    });
                                else if ('update' === t.name) {
                                    const e = h.ArrayExt.findFirstIndex(
                                        this._items,
                                        e => e.path === t.oldValue.path
                                    );
                                    -1 !== e &&
                                        (this._items[e].progress =
                                            100 * t.newValue.progress);
                                } else if ('finish' === t.name) {
                                    const e = h.ArrayExt.findFirstValue(
                                        this._items,
                                        e => e.path === t.oldValue.path
                                    );
                                    e &&
                                        ((e.complete = !0),
                                        setTimeout(() => {
                                            h.ArrayExt.removeFirstOf(
                                                this._items,
                                                e
                                            ),
                                                this.stateChanged.emit(void 0);
                                        }, 2e3));
                                } else
                                    'failure' === t.name &&
                                        h.ArrayExt.removeFirstWhere(
                                            this._items,
                                            e => e.path === t.newValue.path
                                        );
                                this.stateChanged.emit(void 0);
                            }),
                            (this._items = []),
                            (this._browserModel = null),
                            (this.browserModel = e);
                    }
                    get items() {
                        return this._items;
                    }
                    get browserModel() {
                        return this._browserModel;
                    }
                    set browserModel(e) {
                        const t = this._browserModel;
                        t && t.uploadChanged.disconnect(this._uploadChanged),
                            (this._browserModel = e),
                            (this._items = []),
                            null !== this._browserModel &&
                                this._browserModel.uploadChanged.connect(
                                    this._uploadChanged
                                ),
                            this.stateChanged.emit(void 0);
                    }
                }
                e.Model = t;
            })(he || (he = {}));
        },
    },
]);
//# sourceMappingURL=1489.346e604.js.map
