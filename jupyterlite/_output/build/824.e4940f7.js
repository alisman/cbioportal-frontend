'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [824],
    {
        40824: (e, n, t) => {
            t.r(n), t.d(n, { default: () => o });
            var a,
                r = t(47343),
                i = t(11123),
                d = t(80814),
                l = t(61345);
            !(function(e) {
                e.handleLink = 'rendermime:handle-local-link';
            })(a || (a = {}));
            const o = {
                id: '@jupyterlab/rendermime-extension:plugin',
                requires: [l.ITranslator],
                optional: [
                    i.IDocumentManager,
                    d.ILatexTypesetter,
                    r.ISanitizer,
                ],
                provides: d.IRenderMimeRegistry,
                activate: function(e, n, t, r, i) {
                    const l = n.load('jupyterlab');
                    return (
                        t &&
                            e.commands.addCommand(a.handleLink, {
                                label: l.__('Handle Local Link'),
                                execute: e => {
                                    const n = e.path,
                                        a = e.id;
                                    if (n)
                                        return t.services.contents
                                            .get(n, { content: !1 })
                                            .then(() => {
                                                const e = t.registry.defaultRenderedWidgetFactory(
                                                        n
                                                    ),
                                                    r = t.openOrReveal(
                                                        n,
                                                        e.name
                                                    );
                                                r && a && r.setFragment(a);
                                            });
                                },
                            }),
                        new d.RenderMimeRegistry({
                            initialFactories: d.standardRendererFactories,
                            linkHandler: t
                                ? {
                                      handleLink: (n, t, r) => {
                                          ('A' === n.tagName &&
                                              n.hasAttribute('download')) ||
                                              e.commandLinker.connectNode(
                                                  n,
                                                  a.handleLink,
                                                  { path: t, id: r }
                                              );
                                      },
                                  }
                                : void 0,
                            latexTypesetter: null != r ? r : void 0,
                            translator: n,
                            sanitizer: null != i ? i : void 0,
                        })
                    );
                },
                autoStart: !0,
            };
        },
    },
]);
//# sourceMappingURL=824.e4940f7.js.map
