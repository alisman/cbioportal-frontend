'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [1838, 4197],
    {
        74197: (t, e, n) => {
            n.r(e),
                n.d(e, {
                    HTMLViewer: () => d,
                    HTMLViewerFactory: () => m,
                    IHTMLViewerTracker: () => h,
                    ToolbarItems: () => _,
                });
            var r = n(47343),
                s = n(96801),
                o = n(87442),
                i = n(61345),
                a = n(99729),
                l = n(26169),
                c = n(32798),
                u = n(62471);
            const h = new l.Token('@jupyterlab/htmlviewer:IHTMLViewerTracker');
            class d extends o.DocumentWidget {
                constructor(t) {
                    super(
                        Object.assign(Object.assign({}, t), {
                            content: new r.IFrame({
                                sandbox: ['allow-same-origin'],
                            }),
                        })
                    ),
                        (this._renderPending = !1),
                        (this._parser = new DOMParser()),
                        (this._monitor = null),
                        (this._objectUrl = ''),
                        (this._trustedChanged = new c.Signal(this)),
                        (this.translator = t.translator || i.nullTranslator),
                        this.content.addClass('jp-HTMLViewer'),
                        this.context.ready.then(() => {
                            this.update(),
                                (this._monitor = new s.ActivityMonitor({
                                    signal: this.context.model.contentChanged,
                                    timeout: 1e3,
                                })),
                                this._monitor.activityStopped.connect(
                                    this.update,
                                    this
                                );
                        });
                }
                get trusted() {
                    return -1 !== this.content.sandbox.indexOf('allow-scripts');
                }
                set trusted(t) {
                    this.trusted !== t &&
                        ((this.content.sandbox = t ? T.trusted : T.untrusted),
                        (this.content.url = this.content.url),
                        this._trustedChanged.emit(t));
                }
                get trustedChanged() {
                    return this._trustedChanged;
                }
                dispose() {
                    if (this._objectUrl)
                        try {
                            URL.revokeObjectURL(this._objectUrl);
                        } catch (t) {}
                    super.dispose();
                }
                onUpdateRequest() {
                    this._renderPending ||
                        ((this._renderPending = !0),
                        this._renderModel().then(
                            () => (this._renderPending = !1)
                        ));
                }
                async _renderModel() {
                    let t = this.context.model.toString();
                    t = await this._setBase(t);
                    const e = new Blob([t], { type: 'text/html' }),
                        n = this._objectUrl;
                    if (
                        ((this._objectUrl = URL.createObjectURL(e)),
                        (this.content.url = this._objectUrl),
                        n)
                    )
                        try {
                            URL.revokeObjectURL(n);
                        } catch (t) {}
                }
                async _setBase(t) {
                    const e = this._parser.parseFromString(t, 'text/html');
                    let n = e.querySelector('base');
                    n ||
                        ((n = e.createElement('base')),
                        e.head.insertBefore(n, e.head.firstChild));
                    const r = this.context.path,
                        s = await this.context.urlResolver.getDownloadUrl(r);
                    return (
                        (n.href = s),
                        (n.target = '_self'),
                        e.documentElement.innerHTML
                    );
                }
            }
            class m extends o.ABCWidgetFactory {
                createNewWidget(t) {
                    return new d({ context: t });
                }
                defaultToolbarFactory(t) {
                    return [
                        {
                            name: 'refresh',
                            widget: _.createRefreshButton(t, this.translator),
                        },
                        {
                            name: 'trust',
                            widget: _.createTrustButton(t, this.translator),
                        },
                    ];
                }
            }
            var _, T;
            !(function(t) {
                (t.createRefreshButton = function(t, e) {
                    const n = (null != e ? e : i.nullTranslator).load(
                        'jupyterlab'
                    );
                    return new r.ToolbarButton({
                        icon: a.refreshIcon,
                        onClick: async () => {
                            t.context.model.dirty ||
                                (await t.context.revert(), t.update());
                        },
                        tooltip: n.__('Rerender HTML Document'),
                    });
                }),
                    (t.createTrustButton = function(t, e) {
                        return r.ReactWidget.create(
                            u.createElement(T.TrustButtonComponent, {
                                htmlDocument: t,
                                translator: e,
                            })
                        );
                    });
            })(_ || (_ = {})),
                (function(t) {
                    (t.untrusted = []),
                        (t.trusted = ['allow-scripts']),
                        (t.TrustButtonComponent = function(t) {
                            const e = (t.translator || i.nullTranslator).load(
                                'jupyterlab'
                            );
                            return u.createElement(
                                r.UseSignal,
                                {
                                    signal: t.htmlDocument.trustedChanged,
                                    initialSender: t.htmlDocument,
                                },
                                () =>
                                    u.createElement(r.ToolbarButtonComponent, {
                                        className: '',
                                        onClick: () =>
                                            (t.htmlDocument.trusted = !t
                                                .htmlDocument.trusted),
                                        tooltip: e.__(
                                            'Whether the HTML file is trusted.\nTrusting the file allows scripts to run in it,\nwhich may result in security risks.\nOnly enable for files you trust.'
                                        ),
                                        label: t.htmlDocument.trusted
                                            ? e.__('Distrust HTML')
                                            : e.__('Trust HTML'),
                                    })
                            );
                        });
                })(T || (T = {}));
        },
    },
]);
//# sourceMappingURL=1838.a1a9d61.js.map
