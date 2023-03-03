'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [3042, 9626],
    {
        79626: (e, a, t) => {
            t.r(a), t.d(a, { default: () => u });
            var n,
                r = t(12867),
                c = t(47343),
                l = t(75150),
                o = t(61345),
                d = t(99729),
                i = t(43892);
            !(function(e) {
                e.create = 'launcher:create';
            })(n || (n = {}));
            const u = {
                activate: function(e, a, t, r) {
                    const { commands: o, shell: u } = e,
                        h = a.load('jupyterlab'),
                        m = new l.LauncherModel();
                    return (
                        o.addCommand(n.create, {
                            label: h.__('New Launcher'),
                            execute: e => {
                                const n = e.cwd ? String(e.cwd) : '',
                                    r = 'launcher-' + s.id++,
                                    w = new l.Launcher({
                                        model: m,
                                        cwd: n,
                                        callback: e => {
                                            u.add(e, 'main', { ref: r });
                                        },
                                        commands: o,
                                        translator: a,
                                    });
                                (w.model = m),
                                    (w.title.icon = d.launcherIcon),
                                    (w.title.label = h.__('Launcher'));
                                const f = new c.MainAreaWidget({ content: w });
                                return (
                                    (f.title.closable = !!(0, i.toArray)(
                                        u.widgets('main')
                                    ).length),
                                    (f.id = r),
                                    u.add(f, 'main', {
                                        activate: e.activate,
                                        ref: e.ref,
                                    }),
                                    t &&
                                        t.layoutModified.connect(() => {
                                            f.title.closable =
                                                (0, i.toArray)(
                                                    t.widgets('main')
                                                ).length > 1;
                                        }, f),
                                    f
                                );
                            },
                        }),
                        r &&
                            r.addItem({
                                command: n.create,
                                category: h.__('Launcher'),
                            }),
                        t &&
                            ((t.addButtonEnabled = !0),
                            t.addRequested.connect((e, a) => {
                                var t;
                                const r =
                                    (null === (t = a.currentTitle) ||
                                    void 0 === t
                                        ? void 0
                                        : t.owner.id) ||
                                    a.titles[a.titles.length - 1].owner.id;
                                return o.hasCommand(
                                    'filebrowser:create-main-launcher'
                                )
                                    ? o.execute(
                                          'filebrowser:create-main-launcher',
                                          { ref: r }
                                      )
                                    : o.execute(n.create, { ref: r });
                            })),
                        m
                    );
                },
                id: '@jupyterlab/launcher-extension:plugin',
                requires: [o.ITranslator],
                optional: [r.ILabShell, c.ICommandPalette],
                provides: l.ILauncher,
                autoStart: !0,
            };
            var s;
            !(function(e) {
                e.id = 0;
            })(s || (s = {}));
        },
    },
]);
//# sourceMappingURL=3042.4e0064a.js.map
