'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [7041, 816],
    {
        90816: (a, e, t) => {
            t.r(e), t.d(e, { ITranslation: () => i, Translation: () => s });
            var n = t(96801);
            class s {
                constructor() {
                    this._prevLocale = '';
                }
                async get(a) {
                    const e = n.URLExt.join(
                        n.PageConfig.getBaseUrl(),
                        `api/translations/${a}.json`
                    );
                    try {
                        const t = await fetch(e),
                            n = JSON.parse(await t.text());
                        if ('all' !== this._prevLocale && 'all' === a) {
                            const a = this._prevLocale;
                            (n.data[a].displayName = n.data[a].nativeName),
                                'en' !== a &&
                                    (n.data.en.displayName = `${n.data.en.nativeName} (default)`);
                        }
                        return (this._prevLocale = a), n;
                    } catch (e) {
                        return a
                            ? {
                                  data: {},
                                  message: `Language pack '${a}' not installed!`,
                              }
                            : {
                                  data: {
                                      en: {
                                          displayName: 'English',
                                          nativeName: 'English',
                                      },
                                  },
                                  message: '',
                              };
                    }
                }
            }
            const i = new (t(26169).Token)(
                '@jupyterlite/translation:ITranslation'
            );
        },
    },
]);
//# sourceMappingURL=7041.0b99981.js.map
