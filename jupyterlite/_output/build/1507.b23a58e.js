'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [1507, 509],
    {
        11507: (t, e, o) => {
            o.r(e), o.d(e, { ITooltipManager: () => s, Tooltip: () => a });
            const s = new (o(26169).Token)(
                '@jupyterlab/tooltip:ITooltipManager'
            );
            var i = o(47343),
                n = o(80814),
                r = o(86098);
            const d = 'jp-mod-tooltip',
                h = !0;
            class a extends r.Widget {
                constructor(t) {
                    super(), (this._content = null);
                    const e = (this.layout = new r.PanelLayout()),
                        o = new n.MimeModel({ data: t.bundle });
                    (this.anchor = t.anchor),
                        this.addClass('jp-Tooltip'),
                        this.hide(),
                        (this._editor = t.editor),
                        (this._position = t.position),
                        (this._rendermime = t.rendermime);
                    const s = this._rendermime.preferredMimeType(
                        t.bundle,
                        'any'
                    );
                    s &&
                        ((this._content = this._rendermime.createRenderer(s)),
                        this._content
                            .renderModel(o)
                            .then(() => this._setGeometry())
                            .catch(t =>
                                console.error('tooltip rendering failed', t)
                            ),
                        this._content.addClass('jp-Tooltip-content'),
                        e.addWidget(this._content));
                }
                dispose() {
                    this._content &&
                        (this._content.dispose(), (this._content = null)),
                        super.dispose();
                }
                handleEvent(t) {
                    if (this.isHidden || this.isDisposed) return;
                    const { node: e } = this,
                        o = t.target;
                    switch (t.type) {
                        case 'keydown':
                            if (e.contains(o)) return;
                            this.dispose();
                            break;
                        case 'mousedown':
                            if (e.contains(o)) return void this.activate();
                            this.dispose();
                            break;
                        case 'scroll':
                            this._evtScroll(t);
                    }
                }
                onActivateRequest(t) {
                    (this.node.tabIndex = 0), this.node.focus();
                }
                onAfterAttach(t) {
                    document.body.classList.add(d),
                        document.addEventListener('keydown', this, h),
                        document.addEventListener('mousedown', this, h),
                        this.anchor.node.addEventListener('scroll', this, h),
                        this.update();
                }
                onBeforeDetach(t) {
                    document.body.classList.remove(d),
                        document.removeEventListener('keydown', this, h),
                        document.removeEventListener('mousedown', this, h),
                        this.anchor.node.removeEventListener('scroll', this, h);
                }
                onUpdateRequest(t) {
                    this.isHidden && this.show(),
                        this._setGeometry(),
                        super.onUpdateRequest(t);
                }
                _evtScroll(t) {
                    this.node.contains(t.target) || this.update();
                }
                _getTokenPosition() {
                    const t = this._editor,
                        e = t.getCursorPosition(),
                        o = t.getOffsetAt(e),
                        s = t.getLine(e.line);
                    if (!s) return;
                    const i = s.substring(0, o).split(/\W+/),
                        n = i[i.length - 1],
                        r = n ? o - n.length : o;
                    return t.getPositionAt(r);
                }
                _setGeometry() {
                    const t = this._position
                        ? this._position
                        : this._getTokenPosition();
                    if (!t) return;
                    const e = this._editor,
                        o = e.getCoordinateForPosition(t),
                        s = window.getComputedStyle(this.node),
                        n = parseInt(s.paddingLeft, 10) || 0,
                        r =
                            e.host.closest('.jp-MainAreaWidget > .lm-Widget') ||
                            e.host;
                    i.HoverBox.setGeometry({
                        anchor: o,
                        host: r,
                        maxHeight: 250,
                        minHeight: 20,
                        node: this.node,
                        offset: { horizontal: -1 * n },
                        privilege: 'below',
                        outOfViewDisplay: {
                            top: 'stick-inside',
                            bottom: 'stick-inside',
                        },
                        style: s,
                    });
                }
            }
        },
    },
]);
//# sourceMappingURL=1507.b23a58e.js.map
