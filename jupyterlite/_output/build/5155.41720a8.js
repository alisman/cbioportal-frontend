'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [5155],
    {
        15155: (t, e, a) => {
            a.r(e), a.d(e, { default: () => i });
            var o = a(53979),
                n = a(48402),
                l = a(47343),
                r = a(61345);
            const s = {
                    id: '@jupyterlab/cell-toolbar-extension:plugin',
                    autoStart: !0,
                    activate: async (t, e, a, o) => {
                        const i =
                            e && a
                                ? (0, l.createToolbarFactory)(
                                      a,
                                      e,
                                      n.CellBarExtension.FACTORY_NAME,
                                      s.id,
                                      null != o ? o : r.nullTranslator
                                  )
                                : void 0;
                        t.docRegistry.addWidgetExtension(
                            'Notebook',
                            new n.CellBarExtension(t.commands, i)
                        );
                    },
                    optional: [
                        o.ISettingRegistry,
                        l.IToolbarWidgetRegistry,
                        r.ITranslator,
                    ],
                },
                i = s;
        },
    },
]);
//# sourceMappingURL=5155.41720a8.js.map
