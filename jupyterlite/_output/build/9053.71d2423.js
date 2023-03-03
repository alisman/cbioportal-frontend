'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [9053, 261],
    {
        79053: (e, t, s) => {
            s.r(t),
                s.d(t, {
                    ILauncher: () => m,
                    Launcher: () => p,
                    LauncherModel: () => u,
                });
            var n = s(47343),
                a = s(61345),
                c = s(99729),
                r = s(43892),
                i = s(26169),
                o = s(21743),
                l = s(89116),
                d = s(86098),
                h = s(62471);
            const m = new i.Token('@jupyterlab/launcher:ILauncher');
            class u extends n.VDomModel {
                constructor() {
                    super(...arguments), (this.itemsList = []);
                }
                add(e) {
                    const t = _.createItem(e);
                    return (
                        this.itemsList.push(t),
                        this.stateChanged.emit(void 0),
                        new o.DisposableDelegate(() => {
                            r.ArrayExt.removeFirstOf(this.itemsList, t),
                                this.stateChanged.emit(void 0);
                        })
                    );
                }
                items() {
                    return new r.ArrayIterator(this.itemsList);
                }
            }
            class p extends n.VDomRenderer {
                constructor(e) {
                    super(e.model),
                        (this._pending = !1),
                        (this._cwd = ''),
                        (this._cwd = e.cwd),
                        (this.translator = e.translator || a.nullTranslator),
                        (this._trans = this.translator.load('jupyterlab')),
                        (this._callback = e.callback),
                        (this._commands = e.commands),
                        this.addClass('jp-Launcher');
                }
                get cwd() {
                    return this._cwd;
                }
                set cwd(e) {
                    (this._cwd = e), this.update();
                }
                get pending() {
                    return this._pending;
                }
                set pending(e) {
                    this._pending = e;
                }
                render() {
                    if (!this.model) return null;
                    const e = [
                            this._trans.__('Notebook'),
                            this._trans.__('Console'),
                            this._trans.__('Other'),
                        ],
                        t = [
                            this._trans.__('Notebook'),
                            this._trans.__('Console'),
                        ],
                        s = Object.create(null);
                    (0, r.each)(this.model.items(), (e, t) => {
                        const n = e.category || this._trans.__('Other');
                        n in s || (s[n] = []), s[n].push(e);
                    });
                    for (const e in s)
                        s[e] = s[e].sort((e, t) =>
                            _.sortCmp(e, t, this._cwd, this._commands)
                        );
                    const a = [];
                    let i;
                    const o = [];
                    (0, r.each)(e, (e, t) => {
                        o.push(e);
                    });
                    for (const t in s) -1 === e.indexOf(t) && o.push(t);
                    return (
                        o.forEach(e => {
                            if (!s[e]) return;
                            const o = s[e][0],
                                l = Object.assign(Object.assign({}, o.args), {
                                    cwd: this.cwd,
                                }),
                                m = t.indexOf(e) > -1,
                                u = this._commands.iconClass(o.command, l),
                                p = this._commands.icon(o.command, l),
                                g = p === u ? void 0 : p;
                            e in s &&
                                ((i = h.createElement(
                                    'div',
                                    {
                                        className: 'jp-Launcher-section',
                                        key: e,
                                    },
                                    h.createElement(
                                        'div',
                                        {
                                            className:
                                                'jp-Launcher-sectionHeader',
                                        },
                                        h.createElement(
                                            c.LabIcon.resolveReact,
                                            {
                                                icon: g,
                                                iconClass: (0, c.classes)(
                                                    u,
                                                    'jp-Icon-cover'
                                                ),
                                                stylesheet: 'launcherSection',
                                            }
                                        ),
                                        h.createElement(
                                            'h2',
                                            {
                                                className:
                                                    'jp-Launcher-sectionTitle',
                                            },
                                            e
                                        )
                                    ),
                                    h.createElement(
                                        'div',
                                        {
                                            className:
                                                'jp-Launcher-cardContainer',
                                        },
                                        (0, r.toArray)(
                                            (0, r.map)(s[e], e =>
                                                (function(e, t, s, a, r, i) {
                                                    const o = t.command,
                                                        l = Object.assign(
                                                            Object.assign(
                                                                {},
                                                                t.args
                                                            ),
                                                            { cwd: s.cwd }
                                                        ),
                                                        m = a.caption(o, l),
                                                        u = a.label(o, l),
                                                        p = e ? u : m || u,
                                                        g = () => {
                                                            !0 !== s.pending &&
                                                                ((s.pending = !0),
                                                                a
                                                                    .execute(
                                                                        o,
                                                                        Object.assign(
                                                                            Object.assign(
                                                                                {},
                                                                                t.args
                                                                            ),
                                                                            {
                                                                                cwd:
                                                                                    s.cwd,
                                                                            }
                                                                        )
                                                                    )
                                                                    .then(e => {
                                                                        (s.pending = !1),
                                                                            e instanceof
                                                                                d.Widget &&
                                                                                (i(
                                                                                    e
                                                                                ),
                                                                                s.dispose());
                                                                    })
                                                                    .catch(
                                                                        e => {
                                                                            console.error(
                                                                                e
                                                                            ),
                                                                                (s.pending = !1),
                                                                                (0,
                                                                                n.showErrorMessage)(
                                                                                    r._p(
                                                                                        'Error',
                                                                                        'Launcher Error'
                                                                                    ),
                                                                                    e
                                                                                );
                                                                        }
                                                                    ));
                                                        },
                                                        b = a.iconClass(o, l),
                                                        j = a.icon(o, l),
                                                        E =
                                                            j === b
                                                                ? void 0
                                                                : j;
                                                    return h.createElement(
                                                        'div',
                                                        {
                                                            className:
                                                                'jp-LauncherCard',
                                                            title: p,
                                                            onClick: g,
                                                            onKeyPress: e => {
                                                                'Enter' ===
                                                                    e.key &&
                                                                    g();
                                                            },
                                                            tabIndex: 0,
                                                            'data-category':
                                                                t.category ||
                                                                r.__('Other'),
                                                            key: _.keyProperty.get(
                                                                t
                                                            ),
                                                        },
                                                        h.createElement(
                                                            'div',
                                                            {
                                                                className:
                                                                    'jp-LauncherCard-icon',
                                                            },
                                                            e
                                                                ? t.kernelIconUrl
                                                                    ? h.createElement(
                                                                          'img',
                                                                          {
                                                                              src:
                                                                                  t.kernelIconUrl,
                                                                              className:
                                                                                  'jp-Launcher-kernelIcon',
                                                                          }
                                                                      )
                                                                    : h.createElement(
                                                                          'div',
                                                                          {
                                                                              className:
                                                                                  'jp-LauncherCard-noKernelIcon',
                                                                          },
                                                                          u[0].toUpperCase()
                                                                      )
                                                                : h.createElement(
                                                                      c.LabIcon
                                                                          .resolveReact,
                                                                      {
                                                                          icon: E,
                                                                          iconClass: (0,
                                                                          c.classes)(
                                                                              b,
                                                                              'jp-Icon-cover'
                                                                          ),
                                                                          stylesheet:
                                                                              'launcherCard',
                                                                      }
                                                                  )
                                                        ),
                                                        h.createElement(
                                                            'div',
                                                            {
                                                                className:
                                                                    'jp-LauncherCard-label',
                                                                title: p,
                                                            },
                                                            h.createElement(
                                                                'p',
                                                                null,
                                                                u
                                                            )
                                                        )
                                                    );
                                                })(
                                                    m,
                                                    e,
                                                    this,
                                                    this._commands,
                                                    this._trans,
                                                    this._callback
                                                )
                                            )
                                        )
                                    )
                                )),
                                a.push(i));
                        }),
                        h.createElement(
                            'div',
                            { className: 'jp-Launcher-body' },
                            h.createElement(
                                'div',
                                { className: 'jp-Launcher-content' },
                                h.createElement(
                                    'div',
                                    { className: 'jp-Launcher-cwd' },
                                    h.createElement('h3', null, this.cwd)
                                ),
                                a
                            )
                        )
                    );
                }
            }
            var _;
            !(function(e) {
                let t = 0;
                (e.keyProperty = new l.AttachedProperty({
                    name: 'key',
                    create: () => t++,
                })),
                    (e.createItem = function(e) {
                        return Object.assign(Object.assign({}, e), {
                            category: e.category || '',
                            rank: void 0 !== e.rank ? e.rank : 1 / 0,
                        });
                    }),
                    (e.sortCmp = function(e, t, s, n) {
                        const a = e.rank,
                            c = t.rank;
                        if (a !== c && void 0 !== a && void 0 !== c)
                            return a < c ? -1 : 1;
                        const r = n.label(
                                e.command,
                                Object.assign(Object.assign({}, e.args), {
                                    cwd: s,
                                })
                            ),
                            i = n.label(
                                t.command,
                                Object.assign(Object.assign({}, t.args), {
                                    cwd: s,
                                })
                            );
                        return r.localeCompare(i);
                    });
            })(_ || (_ = {}));
        },
    },
]);
//# sourceMappingURL=9053.71d2423.js.map
