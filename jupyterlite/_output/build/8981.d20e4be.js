'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [8981],
    {
        98981: (t, a, e) => {
            e.r(a), e.d(a, { default: () => T });
            var o = e(58099),
                r = e(8865),
                s = e(61345);
            const T = {
                id: '@jupyterlab/celltags',
                autoStart: !0,
                requires: [o.INotebookTools, o.INotebookTracker, s.ITranslator],
                activate: (t, a, e, o) => {
                    const s = new r.TagTool(e, t, o);
                    a.addItem({ tool: s, rank: 1.6 });
                },
            };
        },
    },
]);
//# sourceMappingURL=8981.d20e4be.js.map
