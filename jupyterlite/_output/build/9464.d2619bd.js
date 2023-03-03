'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [9464, 1295],
    {
        21295: (t, e, s) => {
            s.r(e),
                s.d(e, {
                    IPropertyInspectorProvider: () => c,
                    SideBarPropertyInspectorProvider: () => a,
                });
            var n = s(47343),
                r = s(61345),
                o = s(32798),
                i = s(86098);
            const c = new (s(26169).Token)(
                '@jupyterlab/property-inspector:IPropertyInspectorProvider'
            );
            class h extends i.Widget {
                constructor() {
                    super(),
                        (this._tracker = new i.FocusTracker()),
                        (this._inspectors = new Map()),
                        this.addClass('jp-PropertyInspector'),
                        (this._tracker = new i.FocusTracker()),
                        this._tracker.currentChanged.connect(
                            this._onCurrentChanged,
                            this
                        );
                }
                register(t) {
                    if (this._inspectors.has(t))
                        throw new Error('Widget is already registered');
                    const e = new d.PropertyInspector(t);
                    return (
                        t.disposed.connect(this._onWidgetDisposed, this),
                        this._inspectors.set(t, e),
                        e.onAction.connect(this._onInspectorAction, this),
                        this._tracker.add(t),
                        e
                    );
                }
                get currentWidget() {
                    return this._tracker.currentWidget;
                }
                refresh() {
                    const t = this._tracker.currentWidget;
                    if (!t) return void this.setContent(null);
                    const e = this._inspectors.get(t);
                    e && this.setContent(e.content);
                }
                _onWidgetDisposed(t) {
                    const e = this._inspectors.get(t);
                    e && (e.dispose(), this._inspectors.delete(t));
                }
                _onInspectorAction(t, e) {
                    const s = t.owner,
                        n = this._tracker.currentWidget;
                    switch (e) {
                        case 'content':
                            n === s && this.setContent(t.content);
                            break;
                        case 'dispose':
                            s &&
                                (this._tracker.remove(s),
                                this._inspectors.delete(s));
                            break;
                        case 'show-panel':
                            n === s && this.showPanel();
                            break;
                        default:
                            throw new Error('Unsupported inspector action');
                    }
                }
                _onCurrentChanged() {
                    const t = this._tracker.currentWidget;
                    if (t) {
                        const e = this._inspectors.get(t).content;
                        this.setContent(e);
                    } else this.setContent(null);
                }
            }
            class a extends h {
                constructor(t, e, s) {
                    super(),
                        (this._labshell = t),
                        (this.translator = s || r.nullTranslator),
                        (this._trans = this.translator.load('jupyterlab'));
                    const n = (this.layout = new i.SingletonLayout());
                    if (e) this._placeholder = e;
                    else {
                        const t = document.createElement('div'),
                            e = document.createElement('div');
                        (e.textContent = this._trans.__(
                            'No properties to inspect.'
                        )),
                            (e.className =
                                'jp-PropertyInspector-placeholderContent'),
                            t.appendChild(e),
                            (this._placeholder = new i.Widget({ node: t })),
                            this._placeholder.addClass(
                                'jp-PropertyInspector-placeholder'
                            );
                    }
                    (n.widget = this._placeholder),
                        t.currentChanged.connect(
                            this._onShellCurrentChanged,
                            this
                        ),
                        this._onShellCurrentChanged();
                }
                setContent(t) {
                    const e = this.layout;
                    e.widget &&
                        (e.widget.removeClass('jp-PropertyInspector-content'),
                        e.removeWidget(e.widget)),
                        t || (t = this._placeholder),
                        t.addClass('jp-PropertyInspector-content'),
                        (e.widget = t);
                }
                showPanel() {
                    this._labshell.activateById(this.id);
                }
                _onShellCurrentChanged() {
                    const t = this.currentWidget;
                    if (!t) return void this.setContent(null);
                    const e = this._labshell.currentWidget;
                    (null == e
                      ? void 0
                      : e.node.contains(t.node))
                        ? this.refresh()
                        : this.setContent(null);
                }
            }
            var d;
            !(function(t) {
                t.PropertyInspector = class {
                    constructor(t) {
                        (this._isDisposed = !1),
                            (this._content = null),
                            (this._owner = null),
                            (this._onAction = new o.Signal(this)),
                            (this._owner = t);
                    }
                    get owner() {
                        return this._owner;
                    }
                    get content() {
                        return this._content;
                    }
                    get isDisposed() {
                        return this._isDisposed;
                    }
                    get onAction() {
                        return this._onAction;
                    }
                    showPanel() {
                        this._isDisposed || this._onAction.emit('show-panel');
                    }
                    render(t) {
                        this._isDisposed ||
                            (t instanceof i.Widget
                                ? (this._content = t)
                                : (this._content = n.ReactWidget.create(t)),
                            this._onAction.emit('content'));
                    }
                    dispose() {
                        this._isDisposed ||
                            ((this._isDisposed = !0),
                            (this._content = null),
                            (this._owner = null),
                            o.Signal.clearData(this));
                    }
                };
            })(d || (d = {}));
        },
    },
]);
//# sourceMappingURL=9464.d2619bd.js.map
