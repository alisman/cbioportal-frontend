'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [9307],
    {
        59307: (e, a, r) => {
            r.r(a), r.d(a, { default: () => l });
            var t = r(47343),
                s = r(61345);
            const l = {
                id: '@jupyterlab/theme-dark-extension:plugin',
                requires: [t.IThemeManager, s.ITranslator],
                activate: (e, a, r) => {
                    const t = r.load('jupyterlab');
                    a.register({
                        name: 'JupyterLab Dark',
                        displayName: t.__('JupyterLab Dark'),
                        isLight: !1,
                        themeScrollbars: !0,
                        load: () =>
                            a.loadCSS(
                                '@jupyterlab/theme-dark-extension/index.css'
                            ),
                        unload: () => Promise.resolve(void 0),
                    });
                },
                autoStart: !0,
            };
        },
    },
]);
//# sourceMappingURL=9307.eb17eb0.js.map
