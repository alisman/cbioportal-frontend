(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [1767],
    {
        40675: (e, t, n) => {
            'use strict';
            n.d(t, { g: () => o });
            var s,
                r = n(18205),
                a = n(26169),
                i = n(32798);
            class o {
                constructor(e) {
                    (this.trusted = !1),
                        (this._changed = new i.Signal(this)),
                        (this._raw = {});
                    const t = s.getData(e.value);
                    (this._data = new r.ObservableJSON({ values: t })),
                        (this._rawData = t);
                    const n = e.value;
                    for (const e in n)
                        'data' === e || (this._raw[e] = s.extract(n, e));
                }
                get changed() {
                    return this._changed;
                }
                dispose() {
                    this._data.dispose(), i.Signal.clearData(this);
                }
                get data() {
                    return this._rawData;
                }
                get metadata() {
                    return {};
                }
                setData(e) {
                    e.data &&
                        (this._updateObservable(this._data, e.data),
                        (this._rawData = e.data)),
                        this._changed.emit(void 0);
                }
                toJSON() {
                    const e = {};
                    for (const t in this._raw) e[t] = s.extract(this._raw, t);
                    return e;
                }
                _updateObservable(e, t) {
                    const n = e.keys(),
                        s = Object.keys(t);
                    for (const t of n) -1 === s.indexOf(t) && e.delete(t);
                    for (const n of s) {
                        const s = e.get(n),
                            r = t[n];
                        s !== r && e.set(n, r);
                    }
                }
            }
            !(function(e) {
                e.getData = function(e) {
                    return s.getData(e);
                };
            })(o || (o = {})),
                (function(e) {
                    function t(e) {
                        return (function(e) {
                            const t = Object.create(null);
                            for (const s in e) t[s] = n(e, s);
                            return t;
                        })(e);
                    }
                    function n(e, t) {
                        const n = e[t];
                        return void 0 === n || a.JSONExt.isPrimitive(n)
                            ? n
                            : a.JSONExt.deepCopy(n);
                    }
                    (e.getData = t),
                        (e.getBundleOptions = function(e) {
                            return { data: t(e.value) };
                        }),
                        (e.extract = n);
                })(s || (s = {}));
        },
        97257: (e, t, n) => {
            'use strict';
            n.d(t, {
                BJ: () => c,
                F: () => l,
                Lz: () => a,
                Nf: () => u,
                hJ: () => i,
                nF: () => d,
                vy: () => r,
                xr: () => o,
            });
            var s = n(77616);
            const r = {
                    safe: !0,
                    mimeTypes: ['text/html'],
                    defaultRank: 50,
                    createRenderer: e => new s.oI(e),
                },
                a = {
                    safe: !0,
                    mimeTypes: [
                        'image/bmp',
                        'image/png',
                        'image/jpeg',
                        'image/gif',
                        'image/webp',
                    ],
                    defaultRank: 90,
                    createRenderer: e => new s.UH(e),
                },
                i = {
                    safe: !0,
                    mimeTypes: ['text/latex'],
                    defaultRank: 70,
                    createRenderer: e => new s.FK(e),
                },
                o = {
                    safe: !0,
                    mimeTypes: ['text/markdown'],
                    defaultRank: 60,
                    createRenderer: e => new s.cw(e),
                },
                l = {
                    safe: !1,
                    mimeTypes: ['image/svg+xml'],
                    defaultRank: 80,
                    createRenderer: e => new s.zt(e),
                },
                c = {
                    safe: !0,
                    mimeTypes: [
                        'text/plain',
                        'application/vnd.jupyter.stdout',
                        'application/vnd.jupyter.stderr',
                    ],
                    defaultRank: 120,
                    createRenderer: e => new s.lH(e),
                },
                d = {
                    safe: !1,
                    mimeTypes: ['text/javascript', 'application/javascript'],
                    defaultRank: 110,
                    createRenderer: e => new s.ND(e),
                },
                u = [r, o, i, l, a, d, c];
        },
        81767: (e, t, n) => {
            'use strict';
            n.r(t),
                n.d(t, {
                    AttachmentModel: () => a.g,
                    ILatexTypesetter: () => h._,
                    IRenderMimeRegistry: () => h.Z,
                    MimeModel: () => l.a,
                    OutputModel: () => c.M,
                    RenderMimeRegistry: () => d.D,
                    RenderedCommon: () => p.pY,
                    RenderedHTML: () => p.oI,
                    RenderedHTMLCommon: () => p.BP,
                    RenderedImage: () => p.UH,
                    RenderedJavaScript: () => p.ND,
                    RenderedLatex: () => p.FK,
                    RenderedMarkdown: () => p.cw,
                    RenderedSVG: () => p.zt,
                    RenderedText: () => p.lH,
                    htmlRendererFactory: () => i.vy,
                    imageRendererFactory: () => i.Lz,
                    javaScriptRendererFactory: () => i.nF,
                    latexRendererFactory: () => i.hJ,
                    markdownRendererFactory: () => i.xr,
                    removeMath: () => o.D,
                    renderHTML: () => u.NN,
                    renderImage: () => u.co,
                    renderLatex: () => u.K3,
                    renderMarkdown: () => u.ap,
                    renderSVG: () => u.KB,
                    renderText: () => u.IY,
                    replaceMath: () => o.b,
                    standardRendererFactories: () => i.Nf,
                    svgRendererFactory: () => i.F,
                    textRendererFactory: () => i.BJ,
                });
            var s = n(19438),
                r = {};
            for (const e in s) 'default' !== e && (r[e] = () => s[e]);
            n.d(t, r);
            var a = n(40675),
                i = n(97257),
                o = n(44419),
                l = n(4061),
                c = n(33459),
                d = n(99685),
                u = n(10097),
                h = n(40076),
                p = n(77616);
        },
        44419: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => r, b: () => a });
            const s = /(\$\$?|\\(?:begin|end)\{[a-z]*\*?\}|\\[{}$]|[{}]|(?:\n\s*)+|@@\d+@@|\\\\(?:\(|\)|\[|\]))/i;
            function r(e) {
                const t = [];
                let n,
                    r = null,
                    a = null,
                    o = null,
                    l = 0;
                e.includes('`') || e.includes('~~~')
                    ? ((e = e
                          .replace(/~/g, '~T')
                          .replace(
                              /^(?<fence>`{3,}|(~T){3,})[^`\n]*\n([\s\S]*?)^\k<fence>`*$/gm,
                              e => e.replace(/\$/g, '~D')
                          )
                          .replace(/(^|[^\\])(`+)([^\n]*?[^`\n])\2(?!`)/gm, e =>
                              e.replace(/\$/g, '~D')
                          )),
                      (n = e =>
                          e.replace(/~([TD])/g, (e, t) =>
                              'T' === t ? '~' : '$'
                          )))
                    : (n = e => e);
                let c = e.replace(/\r\n?/g, '\n').split(s);
                for (let e = 1, s = c.length; e < s; e += 2) {
                    const s = c[e];
                    '@' === s.charAt(0)
                        ? ((c[e] = '@@' + t.length + '@@'), t.push(s))
                        : null !== r
                        ? s === a
                            ? l
                                ? (o = e)
                                : ((c = i(r, e, n, t, c)),
                                  (r = null),
                                  (a = null),
                                  (o = null))
                            : s.match(/\n.*\n/)
                            ? (null !== o && ((e = o), (c = i(r, e, n, t, c))),
                              (r = null),
                              (a = null),
                              (o = null),
                              (l = 0))
                            : '{' === s
                            ? l++
                            : '}' === s && l && l--
                        : '$' === s || '$$' === s
                        ? ((r = e), (a = s), (l = 0))
                        : '\\\\(' === s || '\\\\[' === s
                        ? ((r = e),
                          (a = '(' === s.slice(-1) ? '\\\\)' : '\\\\]'),
                          (l = 0))
                        : 'begin' === s.substr(1, 5) &&
                          ((r = e), (a = '\\end' + s.substr(6)), (l = 0));
                }
                return (
                    null !== r &&
                        null !== o &&
                        ((c = i(r, o, n, t, c)),
                        (r = null),
                        (a = null),
                        (o = null)),
                    { text: n(c.join('')), math: t }
                );
            }
            function a(e, t) {
                return e.replace(/@@(\d+)@@/g, (e, n) => {
                    let s = t[n];
                    return (
                        '\\\\(' === s.substr(0, 3) &&
                        '\\\\)' === s.substr(s.length - 3)
                            ? (s = '\\(' + s.substring(3, s.length - 3) + '\\)')
                            : '\\\\[' === s.substr(0, 3) &&
                              '\\\\]' === s.substr(s.length - 3) &&
                              (s =
                                  '\\[' + s.substring(3, s.length - 3) + '\\]'),
                        s
                    );
                });
            }
            function i(e, t, n, s, r) {
                let a = r
                    .slice(e, t + 1)
                    .join('')
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;');
                for (
                    navigator &&
                    'Microsoft Internet Explorer' === navigator.appName &&
                    (a = a.replace(/(%[^\n]*)\n/g, '$1<br/>\n'));
                    t > e;

                )
                    (r[t] = ''), t--;
                return (
                    (r[e] = '@@' + s.length + '@@'),
                    n && (a = n(a)),
                    s.push(a),
                    r
                );
            }
        },
        4061: (e, t, n) => {
            'use strict';
            n.d(t, { a: () => s });
            class s {
                constructor(e = {}) {
                    (this.trusted = !!e.trusted),
                        (this._data = e.data || {}),
                        (this._metadata = e.metadata || {}),
                        (this._callback = e.callback || r.noOp);
                }
                get data() {
                    return this._data;
                }
                get metadata() {
                    return this._metadata;
                }
                setData(e) {
                    (this._data = e.data || this._data),
                        (this._metadata = e.metadata || this._metadata),
                        this._callback(e);
                }
            }
            var r;
            !(function(e) {
                e.noOp = function() {};
            })(r || (r = {}));
        },
        33459: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => l });
            var s,
                r = n(44670),
                a = n(18205),
                i = n(26169),
                o = n(32798);
            class l {
                constructor(e) {
                    (this._changed = new o.Signal(this)), (this._raw = {});
                    const {
                        data: t,
                        metadata: n,
                        trusted: i,
                    } = s.getBundleOptions(e);
                    (this._data = new a.ObservableJSON({ values: t })),
                        (this._rawData = t),
                        (this._metadata = new a.ObservableJSON({ values: n })),
                        (this._rawMetadata = n),
                        (this.trusted = i);
                    const l = e.value;
                    for (const e in l)
                        switch (e) {
                            case 'data':
                            case 'metadata':
                                break;
                            default:
                                this._raw[e] = s.extract(l, e);
                        }
                    (this.type = l.output_type),
                        r.isExecuteResult(l)
                            ? (this.executionCount = l.execution_count)
                            : (this.executionCount = null);
                }
                get changed() {
                    return this._changed;
                }
                dispose() {
                    this._data.dispose(),
                        this._metadata.dispose(),
                        o.Signal.clearData(this);
                }
                get data() {
                    return this._rawData;
                }
                get metadata() {
                    return this._rawMetadata;
                }
                setData(e) {
                    e.data &&
                        (this._updateObservable(this._data, e.data),
                        (this._rawData = e.data)),
                        e.metadata &&
                            (this._updateObservable(this._metadata, e.metadata),
                            (this._rawMetadata = e.metadata)),
                        this._changed.emit(void 0);
                }
                toJSON() {
                    const e = {};
                    for (const t in this._raw) e[t] = s.extract(this._raw, t);
                    switch (this.type) {
                        case 'display_data':
                        case 'execute_result':
                        case 'update_display_data':
                            (e.data = this.data), (e.metadata = this.metadata);
                    }
                    return delete e.transient, e;
                }
                _updateObservable(e, t) {
                    const n = e.keys(),
                        s = Object.keys(t);
                    for (const t of n) -1 === s.indexOf(t) && e.delete(t);
                    for (const n of s) {
                        const s = e.get(n),
                            r = t[n];
                        s !== r && e.set(n, r);
                    }
                }
            }
            !(function(e) {
                (e.getData = function(e) {
                    return s.getData(e);
                }),
                    (e.getMetadata = function(e) {
                        return s.getMetadata(e);
                    });
            })(l || (l = {})),
                (function(e) {
                    function t(e) {
                        let t = {};
                        if (
                            r.isExecuteResult(e) ||
                            r.isDisplayData(e) ||
                            r.isDisplayUpdate(e)
                        )
                            t = e.data;
                        else if (r.isStream(e))
                            'stderr' === e.name
                                ? (t['application/vnd.jupyter.stderr'] = e.text)
                                : (t['application/vnd.jupyter.stdout'] =
                                      e.text);
                        else if (r.isError(e)) {
                            t['application/vnd.jupyter.error'] = e;
                            const n = e.traceback.join('\n');
                            t['application/vnd.jupyter.stderr'] =
                                n || `${e.ename}: ${e.evalue}`;
                        }
                        return (function(e) {
                            const t = Object.create(null);
                            for (const n in e) t[n] = s(e, n);
                            return t;
                        })(t);
                    }
                    function n(e) {
                        const t = Object.create(null);
                        if (r.isExecuteResult(e) || r.isDisplayData(e))
                            for (const n in e.metadata) t[n] = s(e.metadata, n);
                        return t;
                    }
                    function s(e, t) {
                        const n = e[t];
                        return void 0 === n || i.JSONExt.isPrimitive(n)
                            ? n
                            : JSON.parse(JSON.stringify(n));
                    }
                    (e.getData = t),
                        (e.getMetadata = n),
                        (e.getBundleOptions = function(e) {
                            return {
                                data: t(e.value),
                                metadata: n(e.value),
                                trusted: !!e.trusted,
                            };
                        }),
                        (e.extract = s);
                })(s || (s = {}));
        },
        99685: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => l });
            var s,
                r = n(47343),
                a = n(96801),
                i = n(61345),
                o = n(4061);
            class l {
                constructor(e = {}) {
                    if (
                        ((this._id = 0),
                        (this._ranks = {}),
                        (this._types = null),
                        (this._factories = {}),
                        (this.translator = e.translator || i.nullTranslator),
                        (this.resolver = e.resolver || null),
                        (this.linkHandler = e.linkHandler || null),
                        (this.latexTypesetter = e.latexTypesetter || null),
                        (this.sanitizer = e.sanitizer || r.defaultSanitizer),
                        e.initialFactories)
                    )
                        for (const t of e.initialFactories) this.addFactory(t);
                }
                get mimeTypes() {
                    return (
                        this._types ||
                        (this._types = s.sortedTypes(this._ranks))
                    );
                }
                preferredMimeType(e, t = 'ensure') {
                    if ('ensure' === t || 'prefer' === t)
                        for (const t of this.mimeTypes)
                            if (t in e && this._factories[t].safe) return t;
                    if ('ensure' !== t)
                        for (const t of this.mimeTypes) if (t in e) return t;
                }
                createRenderer(e) {
                    if (!(e in this._factories))
                        throw new Error(`No factory for mime type: '${e}'`);
                    return this._factories[e].createRenderer({
                        mimeType: e,
                        resolver: this.resolver,
                        sanitizer: this.sanitizer,
                        linkHandler: this.linkHandler,
                        latexTypesetter: this.latexTypesetter,
                        translator: this.translator,
                    });
                }
                createModel(e = {}) {
                    return new o.a(e);
                }
                clone(e = {}) {
                    const t = new l({
                        resolver: e.resolver || this.resolver || void 0,
                        sanitizer: e.sanitizer || this.sanitizer || void 0,
                        linkHandler:
                            e.linkHandler || this.linkHandler || void 0,
                        latexTypesetter:
                            e.latexTypesetter || this.latexTypesetter || void 0,
                        translator: this.translator,
                    });
                    return (
                        (t._factories = Object.assign({}, this._factories)),
                        (t._ranks = Object.assign({}, this._ranks)),
                        (t._id = this._id),
                        t
                    );
                }
                getFactory(e) {
                    return this._factories[e];
                }
                addFactory(e, t) {
                    void 0 === t && void 0 === (t = e.defaultRank) && (t = 100);
                    for (const n of e.mimeTypes)
                        (this._factories[n] = e),
                            (this._ranks[n] = { rank: t, id: this._id++ });
                    this._types = null;
                }
                removeMimeType(e) {
                    delete this._factories[e],
                        delete this._ranks[e],
                        (this._types = null);
                }
                getRank(e) {
                    const t = this._ranks[e];
                    return t && t.rank;
                }
                setRank(e, t) {
                    if (!this._ranks[e]) return;
                    const n = this._id++;
                    (this._ranks[e] = { rank: t, id: n }), (this._types = null);
                }
            }
            !(function(e) {
                e.UrlResolver = class {
                    constructor(e) {
                        if (e.path) this._path = e.path;
                        else {
                            if (!e.session)
                                throw new Error(
                                    "Either 'path' or 'session' must be given as a constructor option"
                                );
                            this._session = e.session;
                        }
                        this._contents = e.contents;
                    }
                    get path() {
                        var e;
                        return null !== (e = this._path) && void 0 !== e
                            ? e
                            : this._session.path;
                    }
                    set path(e) {
                        this._path = e;
                    }
                    async resolveUrl(e) {
                        if (this.isLocal(e)) {
                            const t = encodeURI(a.PathExt.dirname(this.path));
                            e = a.PathExt.resolve(t, e);
                        }
                        return e;
                    }
                    async getDownloadUrl(e) {
                        return this.isLocal(e)
                            ? this._contents.getDownloadUrl(
                                  decodeURIComponent(e)
                              )
                            : e;
                    }
                    isLocal(e) {
                        return (
                            !this.isMalformed(e) &&
                            (a.URLExt.isLocal(e) ||
                                !!this._contents.driveName(decodeURI(e)))
                        );
                    }
                    isMalformed(e) {
                        try {
                            return decodeURI(e), !1;
                        } catch (e) {
                            if (e instanceof URIError) return !0;
                            throw e;
                        }
                    }
                };
            })(l || (l = {})),
                (function(e) {
                    (e.sortedTypes = function(e) {
                        return Object.keys(e).sort((t, n) => {
                            const s = e[t],
                                r = e[n];
                            return s.rank !== r.rank
                                ? s.rank - r.rank
                                : s.id - r.id;
                        });
                    }),
                        (e.sessionConnection = function(e) {
                            return e.sessionChanged ? e.session : e;
                        });
                })(s || (s = {}));
        },
        10097: (e, t, n) => {
            'use strict';
            n.d(t, {
                IY: () => x,
                K3: () => f,
                KB: () => g,
                NN: () => h,
                ap: () => m,
                co: () => p,
            });
            var s,
                r = n(97951),
                a = n(96801),
                i = n(61345),
                o = n(43892),
                l = n(77568),
                c = n.n(l),
                d = n(21520),
                u = n(44419);
            function h(e) {
                let {
                    host: t,
                    source: n,
                    trusted: r,
                    sanitizer: a,
                    resolver: o,
                    linkHandler: l,
                    shouldTypeset: c,
                    latexTypesetter: d,
                    translator: u,
                } = e;
                u = u || i.nullTranslator;
                const h = null == u ? void 0 : u.load('jupyterlab');
                let p,
                    f = n;
                if (!n) return (t.textContent = ''), Promise.resolve(void 0);
                if (
                    (r || ((f = `${n}`), (n = a.sanitize(n))),
                    (t.innerHTML = n),
                    t.getElementsByTagName('script').length > 0)
                )
                    if (r) s.evalInnerHTMLScriptTags(t);
                    else {
                        const e = document.createElement('div'),
                            n = document.createElement('pre');
                        n.textContent = h.__(
                            'This HTML output contains inline scripts. Are you sure that you want to run arbitrary Javascript within your JupyterLab session?'
                        );
                        const r = document.createElement('button');
                        (r.textContent = h.__('Run')),
                            (r.onclick = e => {
                                (t.innerHTML = f),
                                    s.evalInnerHTMLScriptTags(t),
                                    t.firstChild && t.removeChild(t.firstChild);
                            }),
                            e.appendChild(n),
                            e.appendChild(r),
                            t.insertBefore(e, t.firstChild);
                    }
                return (
                    s.handleDefaults(t, o),
                    (p = o ? s.handleUrls(t, o, l) : Promise.resolve(void 0)),
                    p.then(() => {
                        c && d && d.typeset(t);
                    })
                );
            }
            function p(e) {
                const {
                    host: t,
                    mimeType: n,
                    source: s,
                    width: r,
                    height: a,
                    needsBackground: i,
                    unconfined: o,
                } = e;
                t.textContent = '';
                const l = document.createElement('img');
                return (
                    (l.src = `data:${n};base64,${s}`),
                    'number' == typeof a && (l.height = a),
                    'number' == typeof r && (l.width = r),
                    'light' === i
                        ? l.classList.add('jp-needs-light-background')
                        : 'dark' === i &&
                          l.classList.add('jp-needs-dark-background'),
                    !0 === o && l.classList.add('jp-mod-unconfined'),
                    t.appendChild(l),
                    Promise.resolve(void 0)
                );
            }
            function f(e) {
                const {
                    host: t,
                    source: n,
                    shouldTypeset: s,
                    latexTypesetter: r,
                } = e;
                return (
                    (t.textContent = n),
                    s && r && r.typeset(t),
                    Promise.resolve(void 0)
                );
            }
            async function m(e) {
                const { host: t, source: n } = e,
                    r = (function(e, t) {
                        var n = {};
                        for (var s in e)
                            Object.prototype.hasOwnProperty.call(e, s) &&
                                t.indexOf(s) < 0 &&
                                (n[s] = e[s]);
                        if (
                            null != e &&
                            'function' == typeof Object.getOwnPropertySymbols
                        ) {
                            var r = 0;
                            for (
                                s = Object.getOwnPropertySymbols(e);
                                r < s.length;
                                r++
                            )
                                t.indexOf(s[r]) < 0 &&
                                    Object.prototype.propertyIsEnumerable.call(
                                        e,
                                        s[r]
                                    ) &&
                                    (n[s[r]] = e[s[r]]);
                        }
                        return n;
                    })(e, ['host', 'source']);
                if (!n) return void (t.textContent = '');
                const a = (0, u.D)(n);
                let i = await s.renderMarked(a.text);
                (i = (0, u.b)(i, a.math)),
                    await h(Object.assign({ host: t, source: i }, r)),
                    s.headerAnchors(t);
            }
            function g(e) {
                let { host: t, source: n, trusted: s, unconfined: r } = e;
                if (!n) return (t.textContent = ''), Promise.resolve(void 0);
                if (!s)
                    return (
                        (t.textContent =
                            'Cannot display an untrusted SVG. Maybe you need to run the cell?'),
                        Promise.resolve(void 0)
                    );
                n.search('<svg[^>]+xmlns=[^>]+svg') < 0 &&
                    (n = n.replace(
                        '<svg',
                        '<svg xmlns="http://www.w3.org/2000/svg"'
                    ));
                const a = new Image();
                return (
                    (a.src = `data:image/svg+xml,${encodeURIComponent(n)}`),
                    t.appendChild(a),
                    !0 === r && t.classList.add('jp-mod-unconfined'),
                    Promise.resolve()
                );
            }
            function y(e, t) {
                var n, s;
                const r = e.cloneNode();
                r.textContent =
                    null === (n = e.textContent) || void 0 === n
                        ? void 0
                        : n.slice(0, t);
                const a = e.cloneNode();
                return (
                    (a.textContent =
                        null === (s = e.textContent) || void 0 === s
                            ? void 0
                            : s.slice(t)),
                    { pre: r, post: a }
                );
            }
            function* v(e) {
                var t;
                let n,
                    s = 0;
                for (let r of e)
                    (n =
                        s +
                        ((null === (t = r.textContent) || void 0 === t
                            ? void 0
                            : t.length) || 0)),
                        yield {
                            node: r,
                            start: s,
                            end: n,
                            isText: r.nodeType === Node.TEXT_NODE,
                        },
                        (s = n);
            }
            function x(e) {
                const { host: t, sanitizer: n, source: r } = e,
                    a = n.sanitize(s.ansiSpan(r), { allowedTags: ['span'] }),
                    i = document.createElement('pre'),
                    o = document.createElement('pre');
                o.innerHTML = a;
                const l = o.textContent;
                if (l) {
                    const e = (function(e) {
                        const t = '\\u0000-\\u0020\\u007f-\\u009f',
                            n = new RegExp(
                                '(?:[a-zA-Z][a-zA-Z0-9+.-]{2,}:\\/\\/|data:|www\\.)[^\\s' +
                                    t +
                                    '"]{2,}[^\\s' +
                                    t +
                                    '"\'(){}\\[\\],:;.!?]',
                                'ug'
                            ),
                            s = [];
                        let r,
                            a = 0;
                        for (; null != (r = n.exec(e)); ) {
                            r.index !== a &&
                                s.push(
                                    document.createTextNode(e.slice(a, r.index))
                                );
                            let t = r[0];
                            const n = t.slice(-1),
                                i =
                                    -1 !== ['>', '<'].indexOf(n)
                                        ? t.length - 1
                                        : t.length,
                                o = document.createElement('a');
                            (t = t.slice(0, i)),
                                (o.href = t.startsWith('www.')
                                    ? 'https://' + t
                                    : t),
                                (o.rel = 'noopener'),
                                (o.target = '_blank'),
                                o.appendChild(
                                    document.createTextNode(t.slice(0, i))
                                ),
                                s.push(o),
                                (a = r.index + i);
                        }
                        return (
                            a !== e.length &&
                                s.push(
                                    document.createTextNode(
                                        e.slice(a, e.length)
                                    )
                                ),
                            s
                        );
                    })(l);
                    let t = !1;
                    const n = [],
                        s = Array.from(o.childNodes);
                    for (let r of (function*(e, t) {
                        var n, s;
                        let r = v(e),
                            a = v(t),
                            i = r.next(),
                            o = a.next();
                        for (; !i.done && !o.done; ) {
                            let e = i.value,
                                t = o.value;
                            if (
                                e.isText &&
                                e.start <= t.start &&
                                e.end >= t.end
                            )
                                yield [null, t.node], (o = a.next());
                            else if (
                                t.isText &&
                                t.start <= e.start &&
                                t.end >= e.end
                            )
                                yield [e.node, null], (i = r.next());
                            else if (e.end === t.end && e.start === t.start)
                                yield [e.node, t.node],
                                    (i = r.next()),
                                    (o = a.next());
                            else if (e.end > t.end) {
                                let { pre: s, post: r } = y(
                                    e.node,
                                    t.end - e.start
                                );
                                t.start < e.start &&
                                    (t.node.textContent =
                                        null === (n = t.node.textContent) ||
                                        void 0 === n
                                            ? void 0
                                            : n.slice(e.start - t.start)),
                                    yield [s, t.node],
                                    (e.node = r),
                                    (e.start = t.end),
                                    (o = a.next());
                            } else {
                                if (!(t.end > e.end))
                                    throw new Error(
                                        `Unexpected intersection: ${JSON.stringify(
                                            e
                                        )} ${JSON.stringify(t)}`
                                    );
                                {
                                    let { pre: n, post: a } = y(
                                        t.node,
                                        e.end - t.start
                                    );
                                    e.start < t.start &&
                                        (e.node.textContent =
                                            null === (s = e.node.textContent) ||
                                            void 0 === s
                                                ? void 0
                                                : s.slice(t.start - e.start)),
                                        yield [e.node, n],
                                        (t.node = a),
                                        (t.start = e.end),
                                        (i = r.next());
                                }
                            }
                        }
                    })(s, e)) {
                        if (!r[0]) {
                            n.push(r[1]),
                                (t = r[1].nodeType !== Node.TEXT_NODE);
                            continue;
                        }
                        if (!r[1]) {
                            n.push(r[0]), (t = !1);
                            continue;
                        }
                        let [e, s] = r;
                        const a = n[n.length - 1];
                        t && s.href === a.href
                            ? a.appendChild(e)
                            : s.nodeType !== Node.TEXT_NODE
                            ? ((s.textContent = ''),
                              s.appendChild(e),
                              n.push(s),
                              (t = !0))
                            : (n.push(e), (t = !1));
                    }
                    for (const e of n) i.appendChild(e);
                }
                return t.appendChild(i), Promise.resolve(void 0);
            }
            !(function(e) {
                async function t(e, t, n) {
                    const s = e.getAttribute(t) || '',
                        r = n.isLocal ? n.isLocal(s) : a.URLExt.isLocal(s);
                    if (s && r)
                        try {
                            const r = await n.resolveUrl(s);
                            let i = await n.getDownloadUrl(r);
                            'data:' !== a.URLExt.parse(i).protocol &&
                                (i +=
                                    (/\?/.test(i) ? '&' : '?') +
                                    new Date().getTime()),
                                e.setAttribute(t, i);
                        } catch (n) {
                            throw (e.setAttribute(t, ''), n);
                        }
                }
                function n(e, t, n) {
                    let s = e.getAttribute('href') || '';
                    const r = t.isLocal ? t.isLocal(s) : a.URLExt.isLocal(s);
                    if (!s || !r) return Promise.resolve(void 0);
                    const i = e.hash;
                    if (i) {
                        if (i === s)
                            return (
                                (e.target = '_self'), Promise.resolve(void 0)
                            );
                        s = s.replace(i, '');
                    }
                    return t
                        .resolveUrl(s)
                        .then(s => {
                            const r = decodeURIComponent(s);
                            return (
                                n && n.handleLink(e, r, i), t.getDownloadUrl(s)
                            );
                        })
                        .then(t => {
                            e.href = t + i;
                        })
                        .catch(t => {
                            e.href = '';
                        });
                }
                (e.evalInnerHTMLScriptTags = function(e) {
                    const t = (0, o.toArray)(e.getElementsByTagName('script'));
                    for (const e of t) {
                        if (!e.parentNode) continue;
                        const t = document.createElement('script'),
                            n = e.attributes;
                        for (let e = 0, s = n.length; e < s; ++e) {
                            const { name: s, value: r } = n[e];
                            t.setAttribute(s, r);
                        }
                        (t.textContent = e.textContent),
                            e.parentNode.replaceChild(t, e);
                    }
                }),
                    (e.renderMarked = function(e) {
                        return (
                            s ||
                                ((s = !0),
                                d.TU.setOptions({
                                    gfm: !0,
                                    sanitize: !1,
                                    langPrefix: `cm-s-${r.CodeMirrorEditor.defaultConfig.theme} language-`,
                                    highlight: (e, t, n) => {
                                        const s = (e, t) => (n && n(e, t), t);
                                        return t
                                            ? (r.Mode.ensure(t)
                                                  .then(n => {
                                                      const a = document.createElement(
                                                          'div'
                                                      );
                                                      if (!n)
                                                          return (
                                                              console.error(
                                                                  `No CodeMirror mode: ${t}`
                                                              ),
                                                              s(null, e)
                                                          );
                                                      try {
                                                          return (
                                                              r.Mode.run(
                                                                  e,
                                                                  n.mime,
                                                                  a
                                                              ),
                                                              s(
                                                                  null,
                                                                  a.innerHTML
                                                              )
                                                          );
                                                      } catch (n) {
                                                          return (
                                                              console.error(
                                                                  `Failed to highlight ${t} code`,
                                                                  n
                                                              ),
                                                              s(n, e)
                                                          );
                                                      }
                                                  })
                                                  .catch(
                                                      n => (
                                                          console.error(
                                                              `No CodeMirror mode: ${t}`
                                                          ),
                                                          console.error(
                                                              `Require CodeMirror mode error: ${n}`
                                                          ),
                                                          s(null, e)
                                                      )
                                                  ),
                                              e)
                                            : s(null, e);
                                    },
                                })),
                            new Promise((t, n) => {
                                (0, d.TU)(e, (e, s) => {
                                    e ? n(e) : t(s);
                                });
                            })
                        );
                    }),
                    (e.handleDefaults = function(e, t) {
                        const n = e.getElementsByTagName('a');
                        for (let e = 0; e < n.length; e++) {
                            const s = n[e];
                            if (!(s instanceof HTMLAnchorElement)) continue;
                            const r = s.href,
                                i =
                                    t && t.isLocal
                                        ? t.isLocal(r)
                                        : a.URLExt.isLocal(r);
                            s.target || (s.target = i ? '_self' : '_blank'),
                                i || (s.rel = 'noopener');
                        }
                        const s = e.getElementsByTagName('img');
                        for (let e = 0; e < s.length; e++)
                            s[e].alt || (s[e].alt = 'Image');
                    }),
                    (e.handleUrls = function(e, s, r) {
                        const a = [],
                            i = e.querySelectorAll('*[src]');
                        for (let e = 0; e < i.length; e++)
                            a.push(t(i[e], 'src', s));
                        const o = e.getElementsByTagName('a');
                        for (let e = 0; e < o.length; e++)
                            a.push(n(o[e], s, r));
                        const l = e.getElementsByTagName('link');
                        for (let e = 0; e < l.length; e++)
                            a.push(t(l[e], 'href', s));
                        return Promise.all(a).then(() => {});
                    }),
                    (e.headerAnchors = function(e) {
                        var t;
                        const n = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
                        for (const s of n) {
                            const n = e.getElementsByTagName(s);
                            for (let e = 0; e < n.length; e++) {
                                const s = n[e];
                                s.id = (null !== (t = s.textContent) &&
                                void 0 !== t
                                    ? t
                                    : ''
                                ).replace(/ /g, '-');
                                const r = document.createElement('a');
                                (r.target = '_self'),
                                    (r.textContent = '¶'),
                                    (r.href = '#' + s.id),
                                    r.classList.add('jp-InternalAnchorLink'),
                                    s.appendChild(r);
                            }
                        }
                    });
                let s = !1;
                const i = [
                    'ansi-black',
                    'ansi-red',
                    'ansi-green',
                    'ansi-yellow',
                    'ansi-blue',
                    'ansi-magenta',
                    'ansi-cyan',
                    'ansi-white',
                    'ansi-black-intense',
                    'ansi-red-intense',
                    'ansi-green-intense',
                    'ansi-yellow-intense',
                    'ansi-blue-intense',
                    'ansi-magenta-intense',
                    'ansi-cyan-intense',
                    'ansi-white-intense',
                ];
                function l(e, t, n, s, r, a, o) {
                    if (e) {
                        const l = [],
                            c = [];
                        s &&
                            'number' == typeof t &&
                            0 <= t &&
                            t < 8 &&
                            (t += 8),
                            a && ([t, n] = [n, t]),
                            'number' == typeof t
                                ? l.push(i[t] + '-fg')
                                : t.length
                                ? c.push(`color: rgb(${t})`)
                                : a && l.push('ansi-default-inverse-fg'),
                            'number' == typeof n
                                ? l.push(i[n] + '-bg')
                                : n.length
                                ? c.push(`background-color: rgb(${n})`)
                                : a && l.push('ansi-default-inverse-bg'),
                            s && l.push('ansi-bold'),
                            r && l.push('ansi-underline'),
                            l.length || c.length
                                ? (o.push('<span'),
                                  l.length && o.push(` class="${l.join(' ')}"`),
                                  c.length &&
                                      o.push(` style="${c.join('; ')}"`),
                                  o.push('>'),
                                  o.push(e),
                                  o.push('</span>'))
                                : o.push(e);
                    }
                }
                function u(e) {
                    let t, n, s;
                    const r = e.shift();
                    if (2 === r && e.length >= 3) {
                        if (
                            ((t = e.shift()),
                            (n = e.shift()),
                            (s = e.shift()),
                            [t, n, s].some(e => e < 0 || 255 < e))
                        )
                            throw new RangeError(
                                'Invalid range for RGB colors'
                            );
                    } else {
                        if (!(5 === r && e.length >= 1))
                            throw new RangeError(
                                'Invalid extended color specification'
                            );
                        {
                            const r = e.shift();
                            if (r < 0)
                                throw new RangeError(
                                    'Color index must be >= 0'
                                );
                            if (r < 16) return r;
                            if (r < 232)
                                (t = Math.floor((r - 16) / 36)),
                                    (t = t > 0 ? 55 + 40 * t : 0),
                                    (n = Math.floor(((r - 16) % 36) / 6)),
                                    (n = n > 0 ? 55 + 40 * n : 0),
                                    (s = (r - 16) % 6),
                                    (s = s > 0 ? 55 + 40 * s : 0);
                            else {
                                if (!(r < 256))
                                    throw new RangeError(
                                        'Color index must be < 256'
                                    );
                                t = n = s = 10 * (r - 232) + 8;
                            }
                        }
                    }
                    return [t, n, s];
                }
                e.ansiSpan = function(e) {
                    const t = /\x1b\[(.*?)([@-~])/g;
                    let n,
                        s = [],
                        r = [],
                        a = !1,
                        i = !1,
                        o = !1;
                    const d = [],
                        h = [];
                    let p = 0;
                    for (e = c()(e), e += '[m'; (n = t.exec(e)); ) {
                        if ('m' === n[2]) {
                            const e = n[1].split(';');
                            for (let t = 0; t < e.length; t++) {
                                const n = e[t];
                                if ('' === n) h.push(0);
                                else {
                                    if (-1 === n.search(/^\d+$/)) {
                                        h.length = 0;
                                        break;
                                    }
                                    h.push(parseInt(n, 10));
                                }
                            }
                        }
                        for (
                            l(e.substring(p, n.index), s, r, a, i, o, d),
                                p = t.lastIndex;
                            h.length;

                        ) {
                            const e = h.shift();
                            switch (e) {
                                case 0:
                                    (s = r = []), (a = !1), (i = !1), (o = !1);
                                    break;
                                case 1:
                                case 5:
                                    a = !0;
                                    break;
                                case 4:
                                    i = !0;
                                    break;
                                case 7:
                                    o = !0;
                                    break;
                                case 21:
                                case 22:
                                    a = !1;
                                    break;
                                case 24:
                                    i = !1;
                                    break;
                                case 27:
                                    o = !1;
                                    break;
                                case 30:
                                case 31:
                                case 32:
                                case 33:
                                case 34:
                                case 35:
                                case 36:
                                case 37:
                                    s = e - 30;
                                    break;
                                case 38:
                                    try {
                                        s = u(h);
                                    } catch (e) {
                                        h.length = 0;
                                    }
                                    break;
                                case 39:
                                    s = [];
                                    break;
                                case 40:
                                case 41:
                                case 42:
                                case 43:
                                case 44:
                                case 45:
                                case 46:
                                case 47:
                                    r = e - 40;
                                    break;
                                case 48:
                                    try {
                                        r = u(h);
                                    } catch (e) {
                                        h.length = 0;
                                    }
                                    break;
                                case 49:
                                    r = [];
                                    break;
                                case 90:
                                case 91:
                                case 92:
                                case 93:
                                case 94:
                                case 95:
                                case 96:
                                case 97:
                                    s = e - 90 + 8;
                                    break;
                                case 100:
                                case 101:
                                case 102:
                                case 103:
                                case 104:
                                case 105:
                                case 106:
                                case 107:
                                    r = e - 100 + 8;
                            }
                        }
                    }
                    return d.join('');
                };
            })(s || (s = {}));
        },
        40076: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => r, _: () => a });
            var s = n(26169);
            const r = new s.Token('@jupyterlab/rendermime:IRenderMimeRegistry'),
                a = new s.Token('@jupyterlab/rendermime:ILatexTypesetter');
        },
        77616: (e, t, n) => {
            'use strict';
            n.d(t, {
                BP: () => o,
                FK: () => c,
                ND: () => f,
                UH: () => d,
                cw: () => u,
                lH: () => p,
                oI: () => l,
                pY: () => i,
                zt: () => h,
            });
            var s = n(61345),
                r = n(86098),
                a = n(10097);
            class i extends r.Widget {
                constructor(e) {
                    super(),
                        (this.mimeType = e.mimeType),
                        (this.sanitizer = e.sanitizer),
                        (this.resolver = e.resolver),
                        (this.linkHandler = e.linkHandler),
                        (this.translator = e.translator || s.nullTranslator),
                        (this.latexTypesetter = e.latexTypesetter),
                        (this.node.dataset.mimeType = this.mimeType);
                }
                async renderModel(e) {
                    for (; this.node.firstChild; )
                        this.node.removeChild(this.node.firstChild);
                    this.toggleClass('jp-mod-trusted', e.trusted),
                        await this.render(e);
                    const { fragment: t } = e.metadata;
                    t && this.setFragment(t);
                }
                setFragment(e) {}
            }
            class o extends i {
                constructor(e) {
                    super(e), this.addClass('jp-RenderedHTMLCommon');
                }
                setFragment(e) {
                    let t;
                    try {
                        t = this.node.querySelector(
                            e.startsWith('#') ? `#${CSS.escape(e.slice(1))}` : e
                        );
                    } catch (e) {
                        console.warn(
                            'Unable to set URI fragment identifier.',
                            e
                        );
                    }
                    t && t.scrollIntoView();
                }
            }
            class l extends o {
                constructor(e) {
                    super(e), this.addClass('jp-RenderedHTML');
                }
                render(e) {
                    return a.NN({
                        host: this.node,
                        source: String(e.data[this.mimeType]),
                        trusted: e.trusted,
                        resolver: this.resolver,
                        sanitizer: this.sanitizer,
                        linkHandler: this.linkHandler,
                        shouldTypeset: this.isAttached,
                        latexTypesetter: this.latexTypesetter,
                        translator: this.translator,
                    });
                }
                onAfterAttach(e) {
                    this.latexTypesetter &&
                        this.latexTypesetter.typeset(this.node);
                }
            }
            class c extends i {
                constructor(e) {
                    super(e), this.addClass('jp-RenderedLatex');
                }
                render(e) {
                    return a.K3({
                        host: this.node,
                        source: String(e.data[this.mimeType]),
                        shouldTypeset: this.isAttached,
                        latexTypesetter: this.latexTypesetter,
                    });
                }
                onAfterAttach(e) {
                    this.latexTypesetter &&
                        this.latexTypesetter.typeset(this.node);
                }
            }
            class d extends i {
                constructor(e) {
                    super(e), this.addClass('jp-RenderedImage');
                }
                render(e) {
                    const t = e.metadata[this.mimeType];
                    return a.co({
                        host: this.node,
                        mimeType: this.mimeType,
                        source: String(e.data[this.mimeType]),
                        width: t && t.width,
                        height: t && t.height,
                        needsBackground: e.metadata.needs_background,
                        unconfined: t && t.unconfined,
                    });
                }
            }
            class u extends o {
                constructor(e) {
                    super(e), this.addClass('jp-RenderedMarkdown');
                }
                render(e) {
                    return a.ap({
                        host: this.node,
                        source: String(e.data[this.mimeType]),
                        trusted: e.trusted,
                        resolver: this.resolver,
                        sanitizer: this.sanitizer,
                        linkHandler: this.linkHandler,
                        shouldTypeset: this.isAttached,
                        latexTypesetter: this.latexTypesetter,
                        translator: this.translator,
                    });
                }
                onAfterAttach(e) {
                    this.latexTypesetter &&
                        this.latexTypesetter.typeset(this.node);
                }
            }
            class h extends i {
                constructor(e) {
                    super(e), this.addClass('jp-RenderedSVG');
                }
                render(e) {
                    const t = e.metadata[this.mimeType];
                    return a.KB({
                        host: this.node,
                        source: String(e.data[this.mimeType]),
                        trusted: e.trusted,
                        unconfined: t && t.unconfined,
                        translator: this.translator,
                    });
                }
                onAfterAttach(e) {
                    this.latexTypesetter &&
                        this.latexTypesetter.typeset(this.node);
                }
            }
            class p extends i {
                constructor(e) {
                    super(e), this.addClass('jp-RenderedText');
                }
                render(e) {
                    return a.IY({
                        host: this.node,
                        sanitizer: this.sanitizer,
                        source: String(e.data[this.mimeType]),
                        translator: this.translator,
                    });
                }
            }
            class f extends i {
                constructor(e) {
                    super(e), this.addClass('jp-RenderedJavaScript');
                }
                render(e) {
                    const t = this.translator.load('jupyterlab');
                    return a.IY({
                        host: this.node,
                        sanitizer: this.sanitizer,
                        source: t.__(
                            'JavaScript output is disabled in JupyterLab'
                        ),
                        translator: this.translator,
                    });
                }
            }
        },
        77568: (e, t, n) => {
            var s,
                r = /[&<>"'`]/g,
                a = RegExp(r.source),
                i =
                    'object' == typeof n.g &&
                    n.g &&
                    n.g.Object === Object &&
                    n.g,
                o =
                    'object' == typeof self &&
                    self &&
                    self.Object === Object &&
                    self,
                l = i || o || Function('return this')(),
                c =
                    ((s = {
                        '&': '&amp;',
                        '<': '&lt;',
                        '>': '&gt;',
                        '"': '&quot;',
                        "'": '&#39;',
                        '`': '&#96;',
                    }),
                    function(e) {
                        return null == s ? void 0 : s[e];
                    }),
                d = Object.prototype.toString,
                u = l.Symbol,
                h = u ? u.prototype : void 0,
                p = h ? h.toString : void 0;
            e.exports = function(e) {
                var t;
                return (e =
                    null == (t = e)
                        ? ''
                        : (function(e) {
                              if ('string' == typeof e) return e;
                              if (
                                  (function(e) {
                                      return (
                                          'symbol' == typeof e ||
                                          ((function(e) {
                                              return (
                                                  !!e && 'object' == typeof e
                                              );
                                          })(e) &&
                                              '[object Symbol]' == d.call(e))
                                      );
                                  })(e)
                              )
                                  return p ? p.call(e) : '';
                              var t = e + '';
                              return '0' == t && 1 / e == -1 / 0 ? '-0' : t;
                          })(t)) && a.test(e)
                    ? e.replace(r, c)
                    : e;
            };
        },
    },
]);
//# sourceMappingURL=1767.21a8263.js.map
