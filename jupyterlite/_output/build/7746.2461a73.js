'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [7746],
    {
        37746: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            var r = a(47343),
                s = a(61345);
            const i = {
                id: '@jupyterlab/theme-light-extension:plugin',
                requires: [r.IThemeManager, s.ITranslator],
                activate: (e, t, a) => {
                    const r = a.load('jupyterlab');
                    t.register({
                        name: 'JupyterLab Light',
                        displayName: r.__('JupyterLab Light'),
                        isLight: !0,
                        themeScrollbars: !1,
                        load: () =>
                            t.loadCSS(
                                '@jupyterlab/theme-light-extension/index.css'
                            ),
                        unload: () => Promise.resolve(void 0),
                    });
                },
                autoStart: !0,
            };
        },
    },
]);
//# sourceMappingURL=7746.2461a73.js.map
