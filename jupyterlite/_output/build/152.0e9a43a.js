'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [152, 9622],
    {
        60152: (t, e, a) => {
            a.r(e), a.d(e, { default: () => i });
            var n = a(96801),
                o = a(77053);
            const r = {
                    id: '@jupyterlab/mathjax2-extension:plugin',
                    autoStart: !0,
                    provides: a(80814).ILatexTypesetter,
                    activate: () => {
                        const [t, e] = ['fullMathjaxUrl', 'mathjaxConfig'],
                            a = n.PageConfig.getOption(t),
                            i = n.PageConfig.getOption(e);
                        if (!a) {
                            const a = `${r.id} uses '${t}' and '${e}' in PageConfig to operate but '${t}' was not found.`;
                            throw new Error(a);
                        }
                        return new o.MathJaxTypesetter({ url: a, config: i });
                    },
                },
                i = r;
        },
    },
]);
//# sourceMappingURL=152.0e9a43a.js.map
