'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [1863, 1617],
    {
        91863: (e, a, r) => {
            r.r(a), r.d(a, { default: () => n });
            var s = r(96801),
                t = r(56255),
                c = r(20590);
            const n = [
                {
                    id: '@jupyterlite/javascript-kernel-extension:kernel',
                    autoStart: !0,
                    requires: [t.IKernelSpecs],
                    activate: (e, a) => {
                        const r = s.PageConfig.getBaseUrl();
                        a.register({
                            spec: {
                                name: 'javascript',
                                display_name: 'JavaScript',
                                language: 'javascript',
                                argv: [],
                                resources: {
                                    'logo-32x32': '',
                                    'logo-64x64': s.URLExt.join(
                                        r,
                                        '/kernelspecs/javascript.svg'
                                    ),
                                },
                            },
                            create: async e => new c.JavaScriptKernel(e),
                        });
                    },
                },
            ];
        },
    },
]);
//# sourceMappingURL=1863.ad2cf32.js.map
