'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [2047],
    {
        52047: (t, e, r) => {
            function n(t) {
                return t.replace('-', '_');
            }
            r.r(e),
                r.d(e, {
                    Gettext: () => s,
                    ITranslator: () => g,
                    ITranslatorConnector: () => h,
                    TranslationManager: () => p,
                    TranslatorConnector: () => _,
                    nullTranslator: () => i,
                    requestTranslationsAPI: () => c,
                });
            class s {
                constructor(t) {
                    (t = t || {}),
                        (this._defaults = {
                            domain: 'messages',
                            locale:
                                document.documentElement.getAttribute('lang') ||
                                'en',
                            pluralFunc: function(t) {
                                return { nplurals: 2, plural: 1 != t ? 1 : 0 };
                            },
                            contextDelimiter: String.fromCharCode(4),
                            stringsPrefix: '',
                        }),
                        (this._locale = (
                            t.locale || this._defaults.locale
                        ).replace('_', '-')),
                        (this._domain = n(t.domain || this._defaults.domain)),
                        (this._contextDelimiter =
                            t.contextDelimiter ||
                            this._defaults.contextDelimiter),
                        (this._stringsPrefix =
                            t.stringsPrefix || this._defaults.stringsPrefix),
                        (this._pluralFuncs = {}),
                        (this._dictionary = {}),
                        (this._pluralForms = {}),
                        t.messages &&
                            ((this._dictionary[this._domain] = {}),
                            (this._dictionary[this._domain][this._locale] =
                                t.messages)),
                        t.pluralForms &&
                            (this._pluralForms[this._locale] = t.pluralForms);
                }
                setContextDelimiter(t) {
                    this._contextDelimiter = t;
                }
                getContextDelimiter() {
                    return this._contextDelimiter;
                }
                setLocale(t) {
                    this._locale = t.replace('_', '-');
                }
                getLocale() {
                    return this._locale;
                }
                setDomain(t) {
                    this._domain = n(t);
                }
                getDomain() {
                    return this._domain;
                }
                setStringsPrefix(t) {
                    this._stringsPrefix = t;
                }
                getStringsPrefix() {
                    return this._stringsPrefix;
                }
                static strfmt(t, ...e) {
                    return t
                        .replace(/%%/g, '%% ')
                        .replace(/%(\d+)/g, function(t, r) {
                            return e[r - 1];
                        })
                        .replace(/%% /g, '%');
                }
                loadJSON(t, e) {
                    if (!t[''] || !t[''].language || !t[''].pluralForms)
                        throw new Error(
                            `Wrong jsonData, it must have an empty key ("") with "language" and "pluralForms" information: ${t}`
                        );
                    e = n(e);
                    let r = t[''],
                        s = JSON.parse(JSON.stringify(t));
                    delete s[''],
                        this.setMessages(
                            e || this._defaults.domain,
                            r.language,
                            s,
                            r.pluralForms
                        );
                }
                __(t, ...e) {
                    return this.gettext(t, ...e);
                }
                _n(t, e, r, ...n) {
                    return this.ngettext(t, e, r, ...n);
                }
                _p(t, e, ...r) {
                    return this.pgettext(t, e, ...r);
                }
                _np(t, e, r, n, ...s) {
                    return this.npgettext(t, e, r, n, ...s);
                }
                gettext(t, ...e) {
                    return this.dcnpgettext('', '', t, '', 0, ...e);
                }
                ngettext(t, e, r, ...n) {
                    return this.dcnpgettext('', '', t, e, r, ...n);
                }
                pgettext(t, e, ...r) {
                    return this.dcnpgettext('', t, e, '', 0, ...r);
                }
                npgettext(t, e, r, n, ...s) {
                    return this.dcnpgettext('', t, e, r, n, ...s);
                }
                dcnpgettext(t, e, r, s, i, ...a) {
                    let l;
                    t = n(t) || this._domain;
                    let o = e ? e + this._contextDelimiter + r : r,
                        u = { pluralForm: !1 },
                        c = !1,
                        h = this._locale,
                        _ = this.expandLocale(this._locale);
                    for (let e in _)
                        if (
                            ((h = _[e]),
                            (c =
                                this._dictionary[t] &&
                                this._dictionary[t][h] &&
                                this._dictionary[t][h][o]),
                            (c = s
                                ? c && this._dictionary[t][h][o].length > 1
                                : c && 1 == this._dictionary[t][h][o].length),
                            c)
                        ) {
                            u.locale = h;
                            break;
                        }
                    if (
                        (c
                            ? (l = this._dictionary[t][h][o])
                            : ((l = [r]),
                              (u.pluralFunc = this._defaults.pluralFunc)),
                        !s)
                    )
                        return this.t(l, i, u, ...a);
                    u.pluralForm = !0;
                    let g = c ? l : [r, s];
                    return this.t(g, i, u, ...a);
                }
                expandLocale(t) {
                    let e = [t],
                        r = t.lastIndexOf('-');
                    for (; r > 0; )
                        (t = t.slice(0, r)),
                            e.push(t),
                            (r = t.lastIndexOf('-'));
                    return e;
                }
                getPluralFunc(t) {
                    if (
                        !new RegExp(
                            '^\\s*nplurals\\s*=\\s*[0-9]+\\s*;\\s*plural\\s*=\\s*(?:\\s|[-\\?\\|&=!<>+*/%:;n0-9_()])+'
                        ).test(t)
                    )
                        throw new Error(
                            s.strfmt('The plural form "%1" is not valid', t)
                        );
                    return new Function(
                        'n',
                        'let plural, nplurals; ' +
                            t +
                            ' return { nplurals: nplurals, plural: (plural === true ? 1 : (plural ? plural : 0)) };'
                    );
                }
                removeContext(t) {
                    return -1 !== t.indexOf(this._contextDelimiter)
                        ? t.split(this._contextDelimiter)[1]
                        : t;
                }
                t(t, e, r, ...n) {
                    if (!r.pluralForm)
                        return (
                            this._stringsPrefix +
                            s.strfmt(this.removeContext(t[0]), ...n)
                        );
                    let i;
                    return (
                        r.pluralFunc
                            ? (i = r.pluralFunc(e))
                            : (this._pluralFuncs[r.locale || ''] ||
                                  (this._pluralFuncs[
                                      r.locale || ''
                                  ] = this.getPluralFunc(
                                      this._pluralForms[r.locale || '']
                                  )),
                              (i = this._pluralFuncs[r.locale || ''](e))),
                        (void 0 === !i.plural ||
                            i.plural > i.nplurals ||
                            t.length <= i.plural) &&
                            (i.plural = 0),
                        this._stringsPrefix +
                            s.strfmt(
                                this.removeContext(t[i.plural]),
                                ...[e].concat(n)
                            )
                    );
                }
                setMessages(t, e, r, s) {
                    (t = n(t)),
                        s && (this._pluralForms[e] = s),
                        this._dictionary[t] || (this._dictionary[t] = {}),
                        (this._dictionary[t][e] = r);
                }
            }
            const i = new (class {
                constructor(t) {
                    this._languageBundle = t;
                }
                load(t) {
                    return this._languageBundle;
                }
                locale() {
                    return 'en';
                }
            })(
                new (class {
                    __(t, ...e) {
                        return this.gettext(t, ...e);
                    }
                    _n(t, e, r, ...n) {
                        return this.ngettext(t, e, r, ...n);
                    }
                    _p(t, e, ...r) {
                        return this.pgettext(t, e, ...r);
                    }
                    _np(t, e, r, n, ...s) {
                        return this.npgettext(t, e, r, n, ...s);
                    }
                    gettext(t, ...e) {
                        return s.strfmt(t, ...e);
                    }
                    ngettext(t, e, r, ...n) {
                        return s.strfmt(1 == r ? t : e, ...[r].concat(n));
                    }
                    pgettext(t, e, ...r) {
                        return s.strfmt(e, ...r);
                    }
                    npgettext(t, e, r, n, ...s) {
                        return this.ngettext(e, r, n, ...s);
                    }
                    dcnpgettext(t, e, r, n, s, ...i) {
                        return this.ngettext(r, n, s, ...i);
                    }
                })()
            );
            var a = r(64176),
                l = r(26169),
                o = r(96801),
                u = r(55610);
            async function c(t = '', e = '', r = {}, n) {
                const s = null != n ? n : u.ServerConnection.makeSettings();
                t = t || `${s.appUrl}/api/translations/`;
                const i = o.URLExt.join(s.baseUrl, t, e);
                let a;
                try {
                    a = await u.ServerConnection.makeRequest(i, r, s);
                } catch (t) {
                    throw new u.ServerConnection.NetworkError(t);
                }
                let l = await a.text();
                if (l.length > 0)
                    try {
                        l = JSON.parse(l);
                    } catch (t) {
                        console.error('Not a JSON response body.', a);
                    }
                if (!a.ok)
                    throw new u.ServerConnection.ResponseError(
                        a,
                        l.message || l
                    );
                return l;
            }
            const h = new l.Token(
                '@jupyterlab/translation:ITranslatorConnector'
            );
            class _ extends a.DataConnector {
                constructor(t = '', e) {
                    super(),
                        (this._translationsUrl = t),
                        (this._serverSettings = e);
                }
                async fetch(t) {
                    return c(
                        this._translationsUrl,
                        t.language,
                        {},
                        this._serverSettings
                    );
                }
            }
            const g = new l.Token('@jupyterlab/translation:ITranslator');
            class p {
                constructor(t = '', e, r) {
                    (this._domainData = {}),
                        (this._translationBundles = {}),
                        (this._connector = new _(t, r)),
                        (this._stringsPrefix = e || ''),
                        (this._englishBundle = new s({
                            stringsPrefix: this._stringsPrefix,
                        }));
                }
                async fetch(t) {
                    var e, r;
                    (this._currentLocale = t),
                        (this._languageData = await this._connector.fetch({
                            language: t,
                        })),
                        (this._domainData =
                            (null === (e = this._languageData) || void 0 === e
                                ? void 0
                                : e.data) || {});
                    const n =
                        null === (r = this._languageData) || void 0 === r
                            ? void 0
                            : r.message;
                    n && 'en' !== t && console.warn(n);
                }
                load(t) {
                    if (this._domainData) {
                        if ('en' == this._currentLocale)
                            return this._englishBundle;
                        if (!((t = n(t)) in this._translationBundles)) {
                            let e = new s({
                                domain: t,
                                locale: this._currentLocale,
                                stringsPrefix: this._stringsPrefix,
                            });
                            if (t in this._domainData) {
                                let r = this._domainData[t][''];
                                'plural_forms' in r &&
                                    ((r.pluralForms = r.plural_forms),
                                    delete r.plural_forms,
                                    (this._domainData[t][''] = r)),
                                    e.loadJSON(this._domainData[t], t);
                            }
                            this._translationBundles[t] = e;
                        }
                        return this._translationBundles[t];
                    }
                    return this._englishBundle;
                }
            }
        },
    },
]);
//# sourceMappingURL=2047.f7098e0.js.map
