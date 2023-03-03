'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [6770],
    {
        93979: (e, t, n) => {
            n.r(t), n.d(t, { default: () => k });
            var a,
                s = n(12867),
                r = n(47343),
                l = n(96801),
                i = n(55101),
                o = n(61345),
                c = n(99729),
                d = n(62471),
                u = n(55610),
                m = n(26169),
                h = n(32798),
                p = n(93383),
                g = n(86098);
            class _ extends g.SplitPanel {
                constructor(e) {
                    super(),
                        this.addClass('jp-Licenses'),
                        (this.model = e.model),
                        this.initLeftPanel(),
                        this.initFilters(),
                        this.initBundles(),
                        this.initGrid(),
                        this.initLicenseText(),
                        this.setRelativeSizes([1, 2, 3]),
                        this.model
                            .initLicenses()
                            .then(() => this._updateBundles()),
                        this.model.trackerDataChanged.connect(() => {
                            this.title.label = this.model.title;
                        });
                }
                dispose() {
                    this.isDisposed ||
                        (this._bundles.currentChanged.disconnect(
                            this.onBundleSelected,
                            this
                        ),
                        this.model.dispose(),
                        super.dispose());
                }
                initLeftPanel() {
                    (this._leftPanel = new g.Panel()),
                        this._leftPanel.addClass('jp-Licenses-FormArea'),
                        this.addWidget(this._leftPanel),
                        g.SplitPanel.setStretch(this._leftPanel, 1);
                }
                initFilters() {
                    (this._filters = new _.Filters(this.model)),
                        g.SplitPanel.setStretch(this._filters, 1),
                        this._leftPanel.addWidget(this._filters);
                }
                initBundles() {
                    (this._bundles = new g.TabBar({
                        orientation: 'vertical',
                        renderer: new _.BundleTabRenderer(this.model),
                    })),
                        this._bundles.addClass('jp-Licenses-Bundles'),
                        g.SplitPanel.setStretch(this._bundles, 1),
                        this._leftPanel.addWidget(this._bundles),
                        this._bundles.currentChanged.connect(
                            this.onBundleSelected,
                            this
                        ),
                        this.model.stateChanged.connect(() =>
                            this._bundles.update()
                        );
                }
                initGrid() {
                    (this._grid = new _.Grid(this.model)),
                        g.SplitPanel.setStretch(this._grid, 1),
                        this.addWidget(this._grid);
                }
                initLicenseText() {
                    (this._licenseText = new _.FullText(this.model)),
                        g.SplitPanel.setStretch(this._grid, 1),
                        this.addWidget(this._licenseText);
                }
                onBundleSelected() {
                    var e;
                    (null === (e = this._bundles.currentTitle) || void 0 === e
                        ? void 0
                        : e.label) &&
                        (this.model.currentBundleName = this._bundles.currentTitle.label);
                }
                _updateBundles() {
                    this._bundles.clearTabs();
                    let e = 0;
                    const { currentBundleName: t } = this.model;
                    let n = 0;
                    for (const a of this.model.bundleNames) {
                        const s = new g.Widget();
                        (s.title.label = a),
                            a === t && (n = e),
                            this._bundles.insertTab(++e, s.title);
                    }
                    this._bundles.currentIndex = n;
                }
            }
            !(function(e) {
                (e.REPORT_FORMATS = {
                    markdown: {
                        id: 'markdown',
                        title: 'Markdown',
                        icon: c.markdownIcon,
                    },
                    csv: { id: 'csv', title: 'CSV', icon: c.spreadsheetIcon },
                    json: { id: 'csv', title: 'JSON', icon: c.jsonIcon },
                }),
                    (e.DEFAULT_FORMAT = 'markdown');
                class t extends r.VDomModel {
                    constructor(e) {
                        super(),
                            (this._selectedPackageChanged = new h.Signal(this)),
                            (this._trackerDataChanged = new h.Signal(this)),
                            (this._currentPackageIndex = 0),
                            (this._licensesReady = new m.PromiseDelegate()),
                            (this._packageFilter = {}),
                            (this._trans = e.trans),
                            (this._licensesUrl = e.licensesUrl),
                            (this._serverSettings =
                                e.serverSettings ||
                                u.ServerConnection.makeSettings()),
                            e.currentBundleName &&
                                (this._currentBundleName = e.currentBundleName),
                            e.packageFilter &&
                                (this._packageFilter = e.packageFilter),
                            e.currentPackageIndex &&
                                (this._currentPackageIndex =
                                    e.currentPackageIndex);
                    }
                    async initLicenses() {
                        try {
                            const e = await u.ServerConnection.makeRequest(
                                this._licensesUrl,
                                {},
                                this._serverSettings
                            );
                            (this._serverResponse = await e.json()),
                                this._licensesReady.resolve(),
                                this.stateChanged.emit(void 0);
                        } catch (e) {
                            this._licensesReady.reject(e);
                        }
                    }
                    async download(e) {
                        const t = `${this._licensesUrl}?format=${e.format}&download=1`,
                            n = document.createElement('a');
                        (n.href = t),
                            (n.download = ''),
                            document.body.appendChild(n),
                            n.click(),
                            document.body.removeChild(n);
                    }
                    get selectedPackageChanged() {
                        return this._selectedPackageChanged;
                    }
                    get trackerDataChanged() {
                        return this._trackerDataChanged;
                    }
                    get bundleNames() {
                        var e;
                        return Object.keys(
                            (null === (e = this._serverResponse) || void 0 === e
                                ? void 0
                                : e.bundles) || {}
                        );
                    }
                    get currentBundleName() {
                        return this._currentBundleName
                            ? this._currentBundleName
                            : this.bundleNames.length
                            ? this.bundleNames[0]
                            : null;
                    }
                    set currentBundleName(e) {
                        this._currentBundleName !== e &&
                            ((this._currentBundleName = e),
                            this.stateChanged.emit(void 0),
                            this._trackerDataChanged.emit(void 0));
                    }
                    get licensesReady() {
                        return this._licensesReady.promise;
                    }
                    get bundles() {
                        var e;
                        return (
                            (null === (e = this._serverResponse) || void 0 === e
                                ? void 0
                                : e.bundles) || {}
                        );
                    }
                    get currentPackageIndex() {
                        return this._currentPackageIndex;
                    }
                    set currentPackageIndex(e) {
                        this._currentPackageIndex !== e &&
                            ((this._currentPackageIndex = e),
                            this._selectedPackageChanged.emit(void 0),
                            this.stateChanged.emit(void 0),
                            this._trackerDataChanged.emit(void 0));
                    }
                    get currentPackage() {
                        var e;
                        return this.currentBundleName &&
                            this.bundles &&
                            null != this._currentPackageIndex
                            ? this.getFilteredPackages(
                                  (null ===
                                      (e = this.bundles[
                                          this.currentBundleName
                                      ]) || void 0 === e
                                      ? void 0
                                      : e.packages) || []
                              )[this._currentPackageIndex]
                            : null;
                    }
                    get trans() {
                        return this._trans;
                    }
                    get title() {
                        return `${this._currentBundleName ||
                            ''} ${this._trans.__('Licenses')}`.trim();
                    }
                    get packageFilter() {
                        return this._packageFilter;
                    }
                    set packageFilter(e) {
                        (this._packageFilter = e),
                            this.stateChanged.emit(void 0),
                            this._trackerDataChanged.emit(void 0);
                    }
                    getFilteredPackages(e) {
                        let t = [],
                            n = Object.entries(this._packageFilter)
                                .filter(([e, t]) => t && `${t}`.trim().length)
                                .map(([e, t]) => [
                                    e,
                                    `${t}`
                                        .toLowerCase()
                                        .trim()
                                        .split(' '),
                                ]);
                        for (const a of e) {
                            let e = 0;
                            for (const [t, s] of n) {
                                let n = 0,
                                    r = `${a[t]}`.toLowerCase();
                                for (const e of s) r.includes(e) && (n += 1);
                                n && (e += 1);
                            }
                            e === n.length && t.push(a);
                        }
                        return Object.values(t);
                    }
                }
                e.Model = t;
                class n extends r.VDomRenderer {
                    constructor(e) {
                        super(e),
                            (this.renderFilter = e => {
                                const t = this.model.packageFilter[e] || '';
                                return d.createElement('input', {
                                    type: 'text',
                                    name: e,
                                    defaultValue: t,
                                    className: 'jp-mod-styled',
                                    onInput: this.onFilterInput,
                                });
                            }),
                            (this.onFilterInput = e => {
                                const t = e.currentTarget,
                                    { name: n, value: a } = t;
                                this.model.packageFilter = Object.assign(
                                    Object.assign({}, this.model.packageFilter),
                                    { [n]: a }
                                );
                            }),
                            this.addClass('jp-Licenses-Filters'),
                            this.addClass('jp-RenderedHTMLCommon');
                    }
                    render() {
                        const { trans: e } = this.model;
                        return d.createElement(
                            'div',
                            null,
                            d.createElement(
                                'label',
                                null,
                                d.createElement(
                                    'strong',
                                    null,
                                    e.__('Filter Licenses By')
                                )
                            ),
                            d.createElement(
                                'ul',
                                null,
                                d.createElement(
                                    'li',
                                    null,
                                    d.createElement(
                                        'label',
                                        null,
                                        e.__('Package')
                                    ),
                                    this.renderFilter('name')
                                ),
                                d.createElement(
                                    'li',
                                    null,
                                    d.createElement(
                                        'label',
                                        null,
                                        e.__('Version')
                                    ),
                                    this.renderFilter('versionInfo')
                                ),
                                d.createElement(
                                    'li',
                                    null,
                                    d.createElement(
                                        'label',
                                        null,
                                        e.__('License')
                                    ),
                                    this.renderFilter('licenseId')
                                )
                            ),
                            d.createElement(
                                'label',
                                null,
                                d.createElement(
                                    'strong',
                                    null,
                                    e.__('Distributions')
                                )
                            )
                        );
                    }
                }
                e.Filters = n;
                class a extends g.TabBar.Renderer {
                    constructor(e) {
                        super(),
                            (this.closeIconSelector =
                                '.lm-TabBar-tabCloseIcon'),
                            (this.model = e);
                    }
                    renderTab(e) {
                        let t = e.title.caption,
                            n = this.createTabKey(e),
                            a = this.createTabStyle(e),
                            s = this.createTabClass(e),
                            r = this.createTabDataset(e);
                        return p.h.li(
                            {
                                key: n,
                                className: s,
                                title: t,
                                style: a,
                                dataset: r,
                            },
                            this.renderIcon(e),
                            this.renderLabel(e),
                            this.renderCountBadge(e)
                        );
                    }
                    renderCountBadge(e) {
                        const t = e.title.label,
                            { bundles: n } = this.model,
                            a = this.model.getFilteredPackages(
                                (n && t ? n[t].packages : []) || []
                            );
                        return p.h.label({}, `${a.length}`);
                    }
                }
                e.BundleTabRenderer = a;
                class s extends r.VDomRenderer {
                    constructor(e) {
                        super(e),
                            (this.renderRow = (e, t) => {
                                const n = t === this.model.currentPackageIndex,
                                    a = () =>
                                        (this.model.currentPackageIndex = t);
                                return d.createElement(
                                    'tr',
                                    {
                                        key: e.name,
                                        className: n ? 'jp-mod-selected' : '',
                                        onClick: a,
                                    },
                                    d.createElement(
                                        'td',
                                        null,
                                        d.createElement('input', {
                                            type: 'radio',
                                            name: 'show-package-license',
                                            value: t,
                                            onChange: a,
                                            checked: n,
                                        })
                                    ),
                                    d.createElement('th', null, e.name),
                                    d.createElement(
                                        'td',
                                        null,
                                        d.createElement(
                                            'code',
                                            null,
                                            e.versionInfo
                                        )
                                    ),
                                    d.createElement(
                                        'td',
                                        null,
                                        d.createElement(
                                            'code',
                                            null,
                                            e.licenseId
                                        )
                                    )
                                );
                            }),
                            this.addClass('jp-Licenses-Grid'),
                            this.addClass('jp-RenderedHTMLCommon');
                    }
                    render() {
                        var e;
                        const {
                                bundles: t,
                                currentBundleName: n,
                                trans: a,
                            } = this.model,
                            s = this.model.getFilteredPackages(
                                (t &&
                                    n &&
                                    (null === (e = t[n]) || void 0 === e
                                        ? void 0
                                        : e.packages)) ||
                                    []
                            );
                        return s.length
                            ? d.createElement(
                                  'form',
                                  null,
                                  d.createElement(
                                      'table',
                                      null,
                                      d.createElement(
                                          'thead',
                                          null,
                                          d.createElement(
                                              'tr',
                                              null,
                                              d.createElement('td', null),
                                              d.createElement(
                                                  'th',
                                                  null,
                                                  a.__('Package')
                                              ),
                                              d.createElement(
                                                  'th',
                                                  null,
                                                  a.__('Version')
                                              ),
                                              d.createElement(
                                                  'th',
                                                  null,
                                                  a.__('License')
                                              )
                                          )
                                      ),
                                      d.createElement(
                                          'tbody',
                                          null,
                                          s.map(this.renderRow)
                                      )
                                  )
                              )
                            : d.createElement(
                                  'blockquote',
                                  null,
                                  d.createElement(
                                      'em',
                                      null,
                                      a.__('No Packages found')
                                  )
                              );
                    }
                }
                e.Grid = s;
                class l extends r.VDomRenderer {
                    constructor(e) {
                        super(e),
                            this.addClass('jp-Licenses-Text'),
                            this.addClass('jp-RenderedHTMLCommon'),
                            this.addClass('jp-RenderedMarkdown');
                    }
                    render() {
                        const { currentPackage: e, trans: t } = this.model;
                        let n = '',
                            a = t.__('No Package selected'),
                            s = '';
                        if (e) {
                            const {
                                name: r,
                                versionInfo: l,
                                licenseId: i,
                                extractedText: o,
                            } = e;
                            (n = `${r} v${l}`),
                                (a = `${t.__('License')}: ${i ||
                                    t.__('No License ID found')}`),
                                (s = o || t.__('No License Text found'));
                        }
                        return [
                            d.createElement('h1', { key: 'h1' }, n),
                            d.createElement(
                                'blockquote',
                                { key: 'quote' },
                                d.createElement('em', null, a)
                            ),
                            d.createElement('code', { key: 'code' }, s),
                        ];
                    }
                }
                e.FullText = l;
            })(_ || (_ = {})),
                (function(e) {
                    (e.open = 'help:open'),
                        (e.about = 'help:about'),
                        (e.activate = 'help:activate'),
                        (e.close = 'help:close'),
                        (e.show = 'help:show'),
                        (e.hide = 'help:hide'),
                        (e.launchClassic = 'help:launch-classic-notebook'),
                        (e.jupyterForum = 'help:jupyter-forum'),
                        (e.licenses = 'help:licenses'),
                        (e.licenseReport = 'help:license-report'),
                        (e.refreshLicenses = 'help:licenses-refresh');
                })(a || (a = {}));
            const b = 'https:' === window.location.protocol,
                k = [
                    {
                        id: '@jupyterlab/help-extension:about',
                        autoStart: !0,
                        requires: [o.ITranslator],
                        optional: [r.ICommandPalette],
                        activate: (e, t, n) => {
                            const { commands: s } = e,
                                l = t.load('jupyterlab'),
                                i = l.__('Help');
                            s.addCommand(a.about, {
                                label: l.__('About %1', e.name),
                                execute: () => {
                                    const t = l.__('Version %1', e.version),
                                        n = d.createElement(
                                            'span',
                                            {
                                                className:
                                                    'jp-About-version-info',
                                            },
                                            d.createElement(
                                                'span',
                                                {
                                                    className:
                                                        'jp-About-version',
                                                },
                                                t
                                            )
                                        ),
                                        a = d.createElement(
                                            'span',
                                            { className: 'jp-About-header' },
                                            d.createElement(
                                                c.jupyterIcon.react,
                                                {
                                                    margin: '7px 9.5px',
                                                    height: 'auto',
                                                    width: '58px',
                                                }
                                            ),
                                            d.createElement(
                                                'div',
                                                {
                                                    className:
                                                        'jp-About-header-info',
                                                },
                                                d.createElement(
                                                    c.jupyterlabWordmarkIcon
                                                        .react,
                                                    {
                                                        height: 'auto',
                                                        width: '196px',
                                                    }
                                                ),
                                                n
                                            )
                                        ),
                                        s = d.createElement(
                                            'span',
                                            {
                                                className:
                                                    'jp-About-externalLinks',
                                            },
                                            d.createElement(
                                                'a',
                                                {
                                                    href:
                                                        'https://github.com/jupyterlab/jupyterlab/graphs/contributors',
                                                    target: '_blank',
                                                    rel: 'noopener noreferrer',
                                                    className: 'jp-Button-flat',
                                                },
                                                l.__('CONTRIBUTOR LIST')
                                            ),
                                            d.createElement(
                                                'a',
                                                {
                                                    href:
                                                        'https://jupyter.org/about.html',
                                                    target: '_blank',
                                                    rel: 'noopener noreferrer',
                                                    className: 'jp-Button-flat',
                                                },
                                                l.__('ABOUT PROJECT JUPYTER')
                                            )
                                        ),
                                        i = d.createElement(
                                            'span',
                                            { className: 'jp-About-copyright' },
                                            l.__(
                                                '© 2015-2022 Project Jupyter Contributors'
                                            )
                                        ),
                                        o = d.createElement(
                                            'div',
                                            { className: 'jp-About-body' },
                                            s,
                                            i
                                        );
                                    return (0, r.showDialog)({
                                        title: a,
                                        body: o,
                                        buttons: [
                                            r.Dialog.createButton({
                                                label: l.__('Dismiss'),
                                                className:
                                                    'jp-About-button jp-mod-reject jp-mod-styled',
                                            }),
                                        ],
                                    });
                                },
                            }),
                                n &&
                                    n.addItem({
                                        command: a.about,
                                        category: i,
                                    });
                        },
                    },
                    {
                        id: '@jupyterlab/help-extension:launch-classic',
                        autoStart: !0,
                        requires: [o.ITranslator],
                        optional: [r.ICommandPalette],
                        activate: (e, t, n) => {
                            const { commands: s } = e,
                                r = t.load('jupyterlab'),
                                i = r.__('Help');
                            s.addCommand(a.launchClassic, {
                                label: r.__('Launch Classic Notebook'),
                                execute: () => {
                                    window.open(
                                        l.PageConfig.getBaseUrl() + 'tree'
                                    );
                                },
                            }),
                                n &&
                                    n.addItem({
                                        command: a.launchClassic,
                                        category: i,
                                    });
                        },
                    },
                    {
                        id: '@jupyterlab/help-extension:jupyter-forum',
                        autoStart: !0,
                        requires: [o.ITranslator],
                        optional: [r.ICommandPalette],
                        activate: (e, t, n) => {
                            const { commands: s } = e,
                                r = t.load('jupyterlab'),
                                l = r.__('Help');
                            s.addCommand(a.jupyterForum, {
                                label: r.__('Jupyter Forum'),
                                execute: () => {
                                    window.open(
                                        'https://discourse.jupyter.org/c/jupyterlab'
                                    );
                                },
                            }),
                                n &&
                                    n.addItem({
                                        command: a.jupyterForum,
                                        category: l,
                                    });
                        },
                    },
                    {
                        id: '@jupyterlab/help-extension:resources',
                        autoStart: !0,
                        requires: [i.IMainMenu, o.ITranslator],
                        optional: [r.ICommandPalette, s.ILayoutRestorer],
                        activate: (e, t, n, s, i) => {
                            const o = n.load('jupyterlab');
                            let c = 0;
                            const u = o.__('Help'),
                                m = 'help-doc',
                                {
                                    commands: h,
                                    shell: p,
                                    serviceManager: g,
                                } = e,
                                _ = new r.WidgetTracker({ namespace: m }),
                                k = [
                                    {
                                        text: o.__('JupyterLab Reference'),
                                        url:
                                            'https://jupyterlab.readthedocs.io/en/3.5.x/',
                                    },
                                    {
                                        text: o.__('JupyterLab FAQ'),
                                        url:
                                            'https://jupyterlab.readthedocs.io/en/3.5.x/getting_started/faq.html',
                                    },
                                    {
                                        text: o.__('Jupyter Reference'),
                                        url:
                                            'https://jupyter.org/documentation',
                                    },
                                    {
                                        text: o.__('Markdown Reference'),
                                        url: 'https://commonmark.org/help/',
                                    },
                                ];
                            k.sort((e, t) => e.text.localeCompare(t.text)),
                                i &&
                                    i.restore(_, {
                                        command: a.open,
                                        args: e => ({
                                            url: e.content.url,
                                            text: e.content.title.label,
                                        }),
                                        name: e => e.content.url,
                                    });
                            const f = t.helpMenu,
                                v = k.map(e => ({ args: e, command: a.open }));
                            f.addGroup(v, 10);
                            const C = new Map();
                            g.sessions.runningChanged.connect((t, n) => {
                                var s;
                                if (!n.length) return;
                                const l = n[n.length - 1];
                                if (!l.kernel || C.has(l.kernel.name)) return;
                                const i = g.sessions.connectTo({
                                    model: l,
                                    kernelConnectionOptions: {
                                        handleComms: !1,
                                    },
                                });
                                null === (s = i.kernel) ||
                                    void 0 === s ||
                                    s.info.then(t => {
                                        var n, s;
                                        const l = i.kernel.name;
                                        if (C.has(l)) return;
                                        C.set(l, t);
                                        const c = () => {
                                                let t = !1;
                                                const n = e.shell.currentWidget;
                                                return n
                                                    ? (f.kernelUsers.forEach(
                                                          e => {
                                                              var a;
                                                              e.tracker.has(
                                                                  n
                                                              ) &&
                                                                  (null ===
                                                                      (a = e.getKernel(
                                                                          n
                                                                      )) ||
                                                                  void 0 === a
                                                                      ? void 0
                                                                      : a.name) ===
                                                                      l &&
                                                                  (t = !0);
                                                          }
                                                      ),
                                                      t)
                                                    : t;
                                            },
                                            u = `help-menu-${l}:banner`,
                                            m =
                                                null ===
                                                    (s =
                                                        null ===
                                                            (n =
                                                                g.kernelspecs) ||
                                                        void 0 === n
                                                            ? void 0
                                                            : n.specs) ||
                                                void 0 === s
                                                    ? void 0
                                                    : s.kernelspecs[l];
                                        if (!m) return;
                                        const p = m.display_name;
                                        let _ =
                                            m.resources['logo-svg'] ||
                                            m.resources['logo-64x64'];
                                        h.addCommand(u, {
                                            label: o.__(
                                                'About the %1 Kernel',
                                                p
                                            ),
                                            isVisible: c,
                                            isEnabled: c,
                                            execute: () => {
                                                const e = d.createElement(
                                                        'img',
                                                        { src: _ }
                                                    ),
                                                    n = d.createElement(
                                                        'span',
                                                        {
                                                            className:
                                                                'jp-About-header',
                                                        },
                                                        e,
                                                        d.createElement(
                                                            'div',
                                                            {
                                                                className:
                                                                    'jp-About-header-info',
                                                            },
                                                            p
                                                        )
                                                    ),
                                                    a = d.createElement(
                                                        'pre',
                                                        null,
                                                        t.banner
                                                    ),
                                                    s = d.createElement(
                                                        'div',
                                                        {
                                                            className:
                                                                'jp-About-body',
                                                        },
                                                        a
                                                    );
                                                return (0, r.showDialog)({
                                                    title: n,
                                                    body: s,
                                                    buttons: [
                                                        r.Dialog.createButton({
                                                            label: o.__(
                                                                'Dismiss'
                                                            ),
                                                            className:
                                                                'jp-About-button jp-mod-reject jp-mod-styled',
                                                        }),
                                                    ],
                                                });
                                            },
                                        }),
                                            f.addGroup([{ command: u }], 20);
                                        const b = [];
                                        (t.help_links || []).forEach(e => {
                                            const t = `help-menu-${l}:${e.text}`;
                                            h.addCommand(t, {
                                                label: e.text,
                                                isVisible: c,
                                                isEnabled: c,
                                                execute: () =>
                                                    h.execute(a.open, e),
                                            }),
                                                b.push({ command: t });
                                        }),
                                            f.addGroup(b, 21),
                                            i.dispose();
                                    });
                            }),
                                h.addCommand(a.open, {
                                    label: e => e.text,
                                    execute: e => {
                                        const t = e.url,
                                            n = e.text;
                                        if (
                                            e.newBrowserTab ||
                                            (b &&
                                                'https:' !==
                                                    l.URLExt.parse(t).protocol)
                                        )
                                            return void window.open(t);
                                        const a = (function(e, t) {
                                            const n = new r.IFrame({
                                                sandbox: [
                                                    'allow-scripts',
                                                    'allow-forms',
                                                ],
                                            });
                                            (n.url = e),
                                                n.addClass('jp-Help'),
                                                (n.title.label = t),
                                                (n.id = `${m}-${++c}`);
                                            const a = new r.MainAreaWidget({
                                                content: n,
                                            });
                                            return a.addClass('jp-Help'), a;
                                        })(t, n);
                                        return _.add(a), p.add(a, 'main'), a;
                                    },
                                }),
                                s &&
                                    (k.forEach(e => {
                                        s.addItem({
                                            args: e,
                                            command: a.open,
                                            category: u,
                                        });
                                    }),
                                    s.addItem({
                                        args: { reload: !0 },
                                        command: 'apputils:reset',
                                        category: u,
                                    }));
                        },
                    },
                    {
                        id: '@jupyterlab/help-extension:licenses',
                        autoStart: !0,
                        requires: [o.ITranslator],
                        optional: [
                            i.IMainMenu,
                            r.ICommandPalette,
                            s.ILayoutRestorer,
                        ],
                        activate: (e, t, n, s, i) => {
                            if (!l.PageConfig.getOption('licensesUrl')) return;
                            const { commands: o, shell: d } = e,
                                u = t.load('jupyterlab'),
                                m = u.__('Help'),
                                h = u.__('Download All Licenses as'),
                                p = u.__('Licenses'),
                                g = u.__('Refresh Licenses');
                            let b = 0;
                            const k =
                                    l.URLExt.join(
                                        l.PageConfig.getBaseUrl(),
                                        l.PageConfig.getOption('licensesUrl')
                                    ) + '/',
                                f = 'help-licenses',
                                v = new r.WidgetTracker({ namespace: f });
                            function C(e) {
                                return (
                                    _.REPORT_FORMATS[e] ||
                                    _.REPORT_FORMATS[_.DEFAULT_FORMAT]
                                );
                            }
                            o.addCommand(a.licenses, {
                                label: p,
                                execute: t => {
                                    const n = (function(t) {
                                        const n = new _.Model(
                                                Object.assign(
                                                    Object.assign({}, t),
                                                    {
                                                        licensesUrl: k,
                                                        trans: u,
                                                        serverSettings:
                                                            e.serviceManager
                                                                .serverSettings,
                                                    }
                                                )
                                            ),
                                            s = new _({ model: n });
                                        (s.id = `${f}-${++b}`),
                                            (s.title.label = p),
                                            (s.title.icon = c.copyrightIcon);
                                        const l = new r.MainAreaWidget({
                                            content: s,
                                            reveal: n.licensesReady,
                                        });
                                        l.toolbar.addItem(
                                            'refresh-licenses',
                                            new r.CommandToolbarButton({
                                                id: a.refreshLicenses,
                                                args: { noLabel: 1 },
                                                commands: o,
                                            })
                                        ),
                                            l.toolbar.addItem(
                                                'spacer',
                                                r.Toolbar.createSpacerItem()
                                            );
                                        for (const e of Object.keys(
                                            _.REPORT_FORMATS
                                        )) {
                                            const t = new r.CommandToolbarButton(
                                                {
                                                    id: a.licenseReport,
                                                    args: {
                                                        format: e,
                                                        noLabel: 1,
                                                    },
                                                    commands: o,
                                                }
                                            );
                                            l.toolbar.addItem(
                                                `download-${e}`,
                                                t
                                            );
                                        }
                                        return l;
                                    })(t);
                                    return (
                                        d.add(n, 'main'),
                                        v.add(n),
                                        n.content.model.trackerDataChanged.connect(
                                            () => {
                                                v.save(n);
                                            }
                                        ),
                                        n
                                    );
                                },
                            }),
                                o.addCommand(a.refreshLicenses, {
                                    label: e => (e.noLabel ? '' : g),
                                    caption: g,
                                    icon: c.refreshIcon,
                                    execute: async () => {
                                        var e;
                                        return null === (e = v.currentWidget) ||
                                            void 0 === e
                                            ? void 0
                                            : e.content.model.initLicenses();
                                    },
                                }),
                                o.addCommand(a.licenseReport, {
                                    label: e => {
                                        if (e.noLabel) return '';
                                        const t = C(`${e.format}`);
                                        return `${h} ${t.title}`;
                                    },
                                    caption: e => {
                                        const t = C(`${e.format}`);
                                        return `${h} ${t.title}`;
                                    },
                                    icon: e => C(`${e.format}`).icon,
                                    execute: async e => {
                                        var t;
                                        const n = C(`${e.format}`);
                                        return await (null ===
                                            (t = v.currentWidget) ||
                                        void 0 === t
                                            ? void 0
                                            : t.content.model.download({
                                                  format: n.id,
                                              }));
                                    },
                                }),
                                s &&
                                    s.addItem({
                                        command: a.licenses,
                                        category: m,
                                    }),
                                n &&
                                    n.helpMenu.addGroup(
                                        [{ command: a.licenses }],
                                        0
                                    ),
                                i &&
                                    i.restore(v, {
                                        command: a.licenses,
                                        name: e => 'licenses',
                                        args: e => {
                                            const {
                                                currentBundleName: t,
                                                currentPackageIndex: n,
                                                packageFilter: a,
                                            } = e.content.model;
                                            return {
                                                currentBundleName: t,
                                                currentPackageIndex: n,
                                                packageFilter: a,
                                            };
                                        },
                                    });
                        },
                    },
                ];
        },
    },
]);
//# sourceMappingURL=6770.827ffc2.js.map
