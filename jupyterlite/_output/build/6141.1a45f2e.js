'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [6141],
    {
        86141: (e, t, i) => {
            i.r(t),
                i.d(t, {
                    RenderedIFrame: () => s,
                    default: () => o,
                    rendererFactory: () => d,
                });
            var r = i(26169),
                a = i(86098);
            const n = 'text/html-sandboxed';
            class s extends a.Widget {
                constructor() {
                    super(),
                        this.addClass('jp-IFrameContainer'),
                        (this._iframe = document.createElement('iframe')),
                        this.node.appendChild(this._iframe);
                }
                async renderModel(e) {
                    var t, i;
                    this._iframe.parentNode &&
                        this._iframe.parentNode.removeChild(this._iframe);
                    const a = new r.PromiseDelegate();
                    (this._iframe = document.createElement('iframe')),
                        (this._iframe.onload = () => {
                            a.resolve(void 0);
                        }),
                        this.node.appendChild(this._iframe),
                        await a.promise;
                    const s = e.data[n];
                    if (!s || !this._iframe.contentWindow) return;
                    const d = e.metadata[n];
                    (this._iframe.width =
                        null !== (t = null == d ? void 0 : d.width) &&
                        void 0 !== t
                            ? t
                            : '100%'),
                        (this._iframe.height =
                            null !== (i = null == d ? void 0 : d.height) &&
                            void 0 !== i
                                ? i
                                : '400px'),
                        this._iframe.contentWindow.document.write(s);
                }
                dispose() {
                    this._iframe.remove(), super.dispose();
                }
            }
            const d = {
                    safe: !1,
                    mimeTypes: [n],
                    defaultRank: 100,
                    createRenderer: e => new s(),
                },
                o = [
                    {
                        id: '@jupyterlite/iframe-extension:factory',
                        rendererFactory: d,
                        dataType: 'string',
                        documentWidgetFactoryOptions: {
                            name: 'IFrame',
                            primaryFileType: 'IFrame',
                            fileTypes: ['IFrame'],
                            defaultFor: ['IFrame'],
                        },
                    },
                ];
        },
    },
]);
//# sourceMappingURL=6141.1a45f2e.js.map
