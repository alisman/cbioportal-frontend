'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [2212],
    {
        52212: (t, e, s) => {
            s.r(e), s.d(e, { default: () => Nt });
            var r = s(53979),
                o = s(61345),
                a = s(99729),
                i = s(90375),
                l = s(26169),
                n = s(21743),
                c = s(33349),
                h = s(86098),
                p = s(62471),
                d = s.n(p),
                u = s(43892),
                m = s(18300);
            const g = (0, m.style)({
                    content: ' ',
                    height: 'var(--jp-toolbar-micro-height)',
                    borderBottom:
                        'var(--jp-border-width) solid var(--jp-toolbar-border-color)',
                    boxShadow: 'var(--jp-toolbar-box-shadow)',
                    zIndex: 2,
                    width: '100%',
                    background: 'var(--jp-toolbar-background)',
                    position: 'relative',
                }),
                y = (0, m.style)({
                    display: 'flex',
                    flexDirection: 'column',
                    fontSize: 'var(--jp-ui-font-size1)',
                    fontFamily: 'var(--jp-ui-font-family)',
                    color: 'var(--jp-content-font-color1)',
                    minWidth: '450px',
                    width: '100%',
                }),
                f = (0, m.style)({
                    width: '100%',
                    display: 'table',
                    borderCollapse: 'collapse',
                }),
                b = (0, m.style)({
                    padding: '6px 12px',
                    display: 'table-cell',
                    width: '20%',
                    verticalAlign: 'middle',
                }),
                S = (0, m.style)({
                    display: 'flex',
                    minWidth: '100px',
                    flexWrap: 'wrap',
                }),
                v = (0, m.style)({
                    height: '32px',
                    $nest: { '& #add-link': {} },
                }),
                k = (0, m.style)({}),
                C = (0, m.style)({
                    padding: '10px',
                    width: '100%',
                    display: 'table-row',
                    borderBottom: 'solid',
                    borderBottomColor: 'var(--jp-border-color1)',
                    borderBottomWidth: 'var(--jp-border-width)',
                    verticalAlign: 'middle',
                    backgroundColor: 'var(--jp-layout-color0)',
                    $nest: {
                        '&:hover #shortcut-keys': {
                            borderColor: 'var(--jp-border-color1)',
                            background: 'var(--jp-layout-color2)',
                        },
                        '&:hover #add-link': { display: 'block' },
                        '&:hover #or': { display: 'block' },
                    },
                });
            function x(t, e) {
                return 0 === e ? (t ? '20%' : '25%') : '0';
            }
            const w = (0, m.style)({
                    color: 'var(--jp-error-color1)',
                    marginTop: '9px',
                }),
                E = (0, m.style)({
                    lineHeight: '34px',
                    marginLeft: '10px',
                    $nest: {
                        '& button:nth-of-type(1)': {
                            height: '25px',
                            marginRight: '5px',
                            backgroundColor: 'var(--jp-border-color0)',
                            color: 'white',
                            outline: 'none',
                            $nest: {
                                '&:hover': {},
                                '&:active': { outline: 'none', border: 'none' },
                                '&focus': { outline: 'none', border: 'none' },
                            },
                        },
                        '& button:nth-of-type(2)': {
                            height: '25px',
                            backgroundColor: 'var(--jp-error-color1)',
                            color: 'white',
                            outline: 'none',
                            $nest: {
                                '&:hover': {},
                                '&:active': { outline: 'none', border: 'none' },
                                '&focus': { outline: 'none', border: 'none' },
                            },
                        },
                    },
                }),
                I = (0, m.style)({
                    display: 'flex',
                    flexWrap: 'wrap',
                    $nest: {
                        '&:hover #shortcut-keys': {
                            borderColor: 'var(--jp-border-color3)',
                            background: 'var(--jp-layout-color3)',
                        },
                    },
                }),
                j = (0, m.style)({
                    fontSize: 'var(--jp-code-font-size)',
                    fontFamily: 'var(--jp-ui-font-family)',
                    display: 'flex',
                }),
                _ = (0, m.style)({
                    borderWidth: 'var(--jp-border-width)',
                    borderColor: 'var(--jp-layout-color0)',
                    background: 'var(--jp-layout-color0)',
                    padding: '5px 6px',
                    borderRadius: 'var(--jp-border-radius)',
                    margin: '3px 0',
                }),
                N = (0, m.style)({
                    marginRight: '12px',
                    marginLeft: '12px',
                    marginTop: '8px',
                    color: 'var(--jp-content-font-color3)',
                    display: 'none',
                    $nest: { '&:hover': { display: 'block' } },
                }),
                R = (0, m.style)({
                    marginRight: '12px',
                    marginLeft: '12px',
                    marginTop: '8px',
                    color: 'var(--jp-content-font-color3)',
                    display: 'block',
                }),
                L = (0, m.style)({
                    marginTop: '10px',
                    marginRight: '2px',
                    marginLeft: '2px',
                }),
                A = (0, m.style)({
                    display: 'none',
                    background: 'var(--jp-brand-color3)',
                    borderColor: 'var(--jp-layout-color0)',
                    borderRadius: 'var(--jp-border-radius)',
                    borderWidth: 'var(--jp-border-width)',
                    margin: '3px 0',
                    padding: '5px 6px',
                    $nest: {
                        '&:hover': {
                            backgroundColor: 'var(--jp-brand-color2)',
                        },
                        '&:active': {
                            backgroundColor: 'var(--jp-brand-color2)',
                        },
                    },
                }),
                B = (0, m.style)({
                    color: 'var(--jp-brand-color2)',
                    paddingLeft: '10px',
                    $nest: { '&:hover': { color: 'var(--jp-brand-color1)' } },
                }),
                O = (0, m.style)({ display: 'inline-block' });
            var T = s(46831);
            const U = (0, m.style)({
                    display: 'inline-flex',
                    paddingTop: '2px',
                }),
                z = (0, m.style)({ marginLeft: '10px' }),
                M = (0, m.style)({ display: 'hidden' }),
                F = (0, m.keyframes)({
                    from: { width: '0', left: '0' },
                    to: { width: '120px', left: '0' },
                }),
                $ = (0, m.style)({
                    animationDuration: '0.5s',
                    animationTimingFunction: 'ease-out',
                    animationName: F,
                    borderWidth: 'var(--jp-border-width)',
                    borderColor: 'var(--jp-border-color3)',
                    borderStyle: 'solid',
                    backgroundColor: 'var(--jp-layout-color0)',
                    marginLeft: 'auto',
                    paddingLeft: '10px',
                    width: '120px',
                    height: '25px',
                    lineHeight: '25px',
                    display: 'block',
                    $nest: {
                        '&:focus': {
                            outline: 'none',
                            color: 'var(--jp-content-font-color1)',
                            borderColor: 'var(--jp-brand-color2)',
                        },
                    },
                }),
                D = (0, m.style)({
                    $nest: {
                        '&:focus': { borderColor: 'var(--jp-error-color2)' },
                    },
                }),
                W = (0, m.style)({
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    margin: '0',
                    marginTop: '4px',
                    padding: '0 5px',
                    height: '17px',
                    lineHeight: '17px',
                    width: 'fit-content',
                }),
                K = (0, m.style)({
                    backgroundColor: 'var(--jp-brand-color3)',
                    overflow: 'hidden',
                }),
                P = (0, m.style)({ color: 'var(--jp-content-font-color3)' }),
                H = (0, m.style)({
                    background: 'var(--jp-brand-color1)',
                    borderRadius: '0px',
                    border: 'none',
                    color: 'var(--jp-layout-color0)',
                    fontFamily: 'var(--jp-ui-font-family)',
                    display: 'block',
                    height: '27px',
                    backgroundImage: 'var( --jp-icon-checkmark-white )',
                    backgroundRepeat: 'no-repeat',
                    width: '26px',
                    $nest: { '&:focus': { outline: 'none' } },
                }),
                Q = (0, m.style)({
                    backgroundImage: 'var( --jp-icon-checkmark-white )',
                    background: 'var(--jp-layout-color3)',
                }),
                Y = (0, m.style)({
                    background: 'var(--jp-error-color1)',
                    backgroundImage: 'var(--jp-icon-error-white )',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '20px',
                    backgroundPositionX: '2px',
                    backgroundPositionY: '2px',
                    border: 'none',
                });
            class J {
                constructor() {
                    (this.commandName = ''),
                        (this.label = ''),
                        (this.keys = {}),
                        (this.source = ''),
                        (this.selector = ''),
                        (this.category = ''),
                        (this.id = ''),
                        (this.numberOfShortcuts = 0),
                        (this.hasConflict = !1);
                }
                get(t) {
                    return 'label' === t
                        ? this.label
                        : 'selector' === t
                        ? this.selector
                        : 'category' === t
                        ? this.category
                        : 'source' === t
                        ? this.source
                        : '';
                }
            }
            class X extends J {
                constructor() {
                    super(), (this.takenBy = new q());
                }
            }
            class q {
                constructor(t) {
                    t
                        ? ((this.takenBy = t),
                          (this.takenByKey = ''),
                          (this.takenByLabel = t.category + ': ' + t.label),
                          (this.id = t.commandName + '_' + t.selector))
                        : ((this.takenBy = new J()),
                          (this.takenByKey = ''),
                          (this.takenByLabel = ''),
                          (this.id = ''));
                }
            }
            class G extends p.Component {
                constructor(t) {
                    super(t),
                        (this.handleUpdate = () => {
                            let t = this.state.keys;
                            t.push(this.state.currentChain),
                                this.setState({ keys: t }),
                                this.props.handleUpdate(
                                    this.props.shortcut,
                                    this.state.keys
                                );
                        }),
                        (this.handleOverwrite = async () => {
                            this.props
                                .deleteShortcut(
                                    this.state.takenByObject.takenBy,
                                    this.state.takenByObject.takenByKey
                                )
                                .then(this.handleUpdate());
                        }),
                        (this.handleReplace = async () => {
                            let t = this.state.keys;
                            t.push(this.state.currentChain),
                                this.props.toggleInput(),
                                await this.props.deleteShortcut(
                                    this.props.shortcut,
                                    this.props.shortcutId
                                ),
                                this.props.handleUpdate(this.props.shortcut, t);
                        }),
                        (this.parseChaining = (t, e, s, r, o) => {
                            let a = T.EN_US.keyForKeydownEvent(t.nativeEvent);
                            const i = [
                                'Shift',
                                'Control',
                                'Alt',
                                'Meta',
                                'Ctrl',
                                'Accel',
                            ];
                            if ('Backspace' === t.key)
                                (s = ''),
                                    (r = []),
                                    (o = ''),
                                    this.setState({
                                        value: '',
                                        userInput: s,
                                        keys: r,
                                        currentChain: o,
                                    });
                            else if ('CapsLock' !== t.key) {
                                const e = s
                                    .substr(s.lastIndexOf(' ') + 1, s.length)
                                    .trim();
                                -1 === i.lastIndexOf(e) && '' != e
                                    ? ((s += ','),
                                      r.push(o),
                                      (o = ''),
                                      t.ctrlKey &&
                                          'Control' != t.key &&
                                          ((s = (s + ' Ctrl').trim()),
                                          (o = (o + ' Ctrl').trim())),
                                      t.metaKey &&
                                          'Meta' != t.key &&
                                          ((s = (s + ' Accel').trim()),
                                          (o = (o + ' Accel').trim())),
                                      t.altKey &&
                                          'Alt' != t.key &&
                                          ((s = (s + ' Alt').trim()),
                                          (o = (o + ' Alt').trim())),
                                      t.shiftKey &&
                                          'Shift' != t.key &&
                                          ((s = (s + ' Shift').trim()),
                                          (o = (o + ' Shift').trim())),
                                      -1 === i.lastIndexOf(t.key)
                                          ? ((s = (s + ' ' + a).trim()),
                                            (o = (o + ' ' + a).trim()))
                                          : 'Meta' === t.key
                                          ? ((s = (s + ' Accel').trim()),
                                            (o = (o + ' Accel').trim()))
                                          : 'Control' === t.key
                                          ? ((s = (s + ' Ctrl').trim()),
                                            (o = (o + ' Ctrl').trim()))
                                          : 'Shift' === t.key
                                          ? ((s = (s + ' Shift').trim()),
                                            (o = (o + ' Shift').trim()))
                                          : 'Alt' === t.key
                                          ? ((s = (s + ' Alt').trim()),
                                            (o = (o + ' Alt').trim()))
                                          : ((s = (s + ' ' + t.key).trim()),
                                            (o = (o + ' ' + t.key).trim())))
                                    : 'Control' === t.key
                                    ? ((s = (s + ' Ctrl').trim()),
                                      (o = (o + ' Ctrl').trim()))
                                    : 'Meta' === t.key
                                    ? ((s = (s + ' Accel').trim()),
                                      (o = (o + ' Accel').trim()))
                                    : 'Shift' === t.key
                                    ? ((s = (s + ' Shift').trim()),
                                      (o = (o + ' Shift').trim()))
                                    : 'Alt' === t.key
                                    ? ((s = (s + ' Alt').trim()),
                                      (o = (o + ' Alt').trim()))
                                    : ((s = (s + ' ' + a).trim()),
                                      (o = (o + ' ' + a).trim()));
                            }
                            return (
                                this.setState({ keys: r, currentChain: o }),
                                [s, r, o]
                            );
                        }),
                        (this.checkNonFunctional = t => {
                            const e = ['Ctrl', 'Alt', 'Accel', 'Shift'],
                                s = this.state.currentChain.split(' '),
                                r = s[s.length - 1];
                            return (
                                this.setState({
                                    isFunctional: !(-1 !== e.indexOf(r)),
                                }),
                                -1 !== e.indexOf(r)
                            );
                        }),
                        (this.checkShortcutAvailability = (t, e, s) => {
                            let r =
                                    -1 ===
                                        Object.keys(
                                            this.props.keyBindingsUsed
                                        ).indexOf(
                                            e.join(' ') +
                                                s +
                                                '_' +
                                                this.props.shortcut.selector
                                        ) || '' === t,
                                o = new q();
                            if (r) {
                                for (let t of e)
                                    if (
                                        -1 !==
                                            Object.keys(
                                                this.props.keyBindingsUsed
                                            ).indexOf(
                                                t +
                                                    '_' +
                                                    this.props.shortcut.selector
                                            ) &&
                                        '' !== t
                                    ) {
                                        (r = !1),
                                            (o = this.props.keyBindingsUsed[
                                                t +
                                                    '_' +
                                                    this.props.shortcut.selector
                                            ]);
                                        break;
                                    }
                                r &&
                                    -1 !==
                                        Object.keys(
                                            this.props.keyBindingsUsed
                                        ).indexOf(
                                            s +
                                                '_' +
                                                this.props.shortcut.selector
                                        ) &&
                                    '' !== s &&
                                    ((r = !1),
                                    (o = this.props.keyBindingsUsed[
                                        s + '_' + this.props.shortcut.selector
                                    ]));
                            } else
                                o = this.props.keyBindingsUsed[
                                    e.join(' ') +
                                        s +
                                        '_' +
                                        this.props.shortcut.selector
                                ];
                            return (
                                r ||
                                    (o.takenBy.id === this.props.shortcut.id &&
                                        'replace' === this.props.newOrReplace &&
                                        ((r = !0), (o = new q()))),
                                this.setState({ isAvailable: r }),
                                o
                            );
                        }),
                        (this.handleInput = t => {
                            t.preventDefault(), this.setState({ selected: !1 });
                            const e = this.parseChaining(
                                    t,
                                    this.state.value,
                                    this.state.userInput,
                                    this.state.keys,
                                    this.state.currentChain
                                ),
                                s = e[0],
                                r = e[1],
                                o = e[2],
                                a = this.props.toSymbols(s);
                            let i = this.checkShortcutAvailability(s, r, o);
                            this.checkConflict(i, r),
                                this.setState(
                                    {
                                        value: a,
                                        userInput: s,
                                        takenByObject: i,
                                        keys: r,
                                        currentChain: o,
                                    },
                                    () =>
                                        this.checkNonFunctional(
                                            this.state.userInput
                                        )
                                );
                        }),
                        (this.handleBlur = t => {
                            (null === t.relatedTarget ||
                                ('no-blur' !== t.relatedTarget.id &&
                                    'overwrite' !== t.relatedTarget.id)) &&
                                (this.props.toggleInput(),
                                this.setState({ value: '', userInput: '' }),
                                this.props.clearConflicts());
                        }),
                        (this.state = {
                            value: this.props.placeholder,
                            userInput: '',
                            isAvailable: !0,
                            isFunctional: 'replace' === this.props.newOrReplace,
                            takenByObject: new q(),
                            keys: new Array(),
                            currentChain: '',
                            selected: !0,
                        });
                }
                checkConflict(t, e) {
                    '' !== t.id && t.takenBy.id !== this.props.shortcut.id
                        ? this.props.sortConflict(
                              this.props.shortcut,
                              t,
                              t.takenByLabel,
                              ''
                          )
                        : this.props.clearConflicts();
                }
                render() {
                    const t = this.props.translator.load('jupyterlab');
                    let e = $;
                    return (
                        this.state.isAvailable || (e = (0, m.classes)(e, D)),
                        p.createElement(
                            'div',
                            {
                                className: this.props.displayInput
                                    ? 'new' === this.props.newOrReplace
                                        ? (0, m.classes)(U, z)
                                        : U
                                    : M,
                                onBlur: t => this.handleBlur(t),
                            },
                            p.createElement(
                                'div',
                                {
                                    tabIndex: 0,
                                    id: 'no-blur',
                                    className: e,
                                    onKeyDown: this.handleInput,
                                    ref: t => t && t.focus(),
                                },
                                p.createElement(
                                    'p',
                                    {
                                        className:
                                            this.state.selected &&
                                            'replace' ===
                                                this.props.newOrReplace
                                                ? (0, m.classes)(W, K)
                                                : '' === this.state.value
                                                ? (0, m.classes)(W, P)
                                                : W,
                                    },
                                    '' === this.state.value
                                        ? t.__('press keys')
                                        : this.state.value
                                )
                            ),
                            p.createElement('button', {
                                className: this.state.isFunctional
                                    ? this.state.isAvailable
                                        ? (0, m.classes)(H)
                                        : (0, m.classes)(H, Y)
                                    : (0, m.classes)(H, Q),
                                id: 'no-blur',
                                disabled:
                                    !this.state.isAvailable ||
                                    !this.state.isFunctional,
                                onClick: () => {
                                    'new' === this.props.newOrReplace
                                        ? (this.handleUpdate(),
                                          this.setState({
                                              value: '',
                                              keys: [],
                                              currentChain: '',
                                          }),
                                          this.props.toggleInput())
                                        : this.state.selected
                                        ? (this.props.toggleInput(),
                                          this.setState({
                                              value: '',
                                              userInput: '',
                                          }),
                                          this.props.clearConflicts())
                                        : this.handleReplace();
                                },
                            }),
                            !this.state.isAvailable &&
                                p.createElement(
                                    'button',
                                    {
                                        hidden: !0,
                                        id: 'overwrite',
                                        onClick: () => {
                                            this.handleOverwrite(),
                                                this.props.clearConflicts(),
                                                this.props.toggleInput();
                                        },
                                    },
                                    t.__('Overwrite')
                                )
                        )
                    );
                }
            }
            var V;
            !(function(t) {
                (t[(t.Left = 0)] = 'Left'), (t[(t.Right = 1)] = 'Right');
            })(V || (V = {}));
            class Z extends p.Component {
                constructor(t) {
                    var e;
                    super(t),
                        (this.toggleInputNew = () => {
                            this.setState({
                                displayNewInput: !this.state.displayNewInput,
                            });
                        }),
                        (this.toggleInputReplaceLeft = () => {
                            this.setState({
                                displayReplaceInputLeft: !this.state
                                    .displayReplaceInputLeft,
                            });
                        }),
                        (this.toggleInputReplaceRight = () => {
                            this.setState({
                                displayReplaceInputRight: !this.state
                                    .displayReplaceInputRight,
                            });
                        }),
                        (this.addCommandIfNeeded = (t, e) => {
                            const s =
                                this.props.shortcut.commandName +
                                '_' +
                                this.props.shortcut.selector;
                            this.props.external.hasCommand(t.commandId + s) ||
                                this.props.external.addCommand(
                                    t.commandId + s,
                                    {
                                        label: t.label,
                                        caption: t.caption,
                                        execute: e,
                                    }
                                );
                        }),
                        (this.handleRightClick = t => {
                            this.addCommandIfNeeded(
                                this._commands.shortcutEdit,
                                () => this.toggleInputReplaceLeft()
                            ),
                                this.addCommandIfNeeded(
                                    this._commands.shortcutEditLeft,
                                    () => this.toggleInputReplaceLeft()
                                ),
                                this.addCommandIfNeeded(
                                    this._commands.shortcutEditRight,
                                    () => this.toggleInputReplaceRight()
                                ),
                                this.addCommandIfNeeded(
                                    this._commands.shortcutAddNew,
                                    () => this.toggleInputNew()
                                ),
                                this.addCommandIfNeeded(
                                    this._commands.shortcutAddAnother,
                                    () => this.toggleInputNew()
                                ),
                                this.addCommandIfNeeded(
                                    this._commands.shortcutReset,
                                    () =>
                                        this.props.resetShortcut(
                                            this.props.shortcut
                                        )
                                );
                            const e =
                                this.props.shortcut.commandName +
                                '_' +
                                this.props.shortcut.selector;
                            this.setState(
                                {
                                    numShortcuts: Object.keys(
                                        this.props.shortcut.keys
                                    ).filter(
                                        t =>
                                            '' !==
                                            this.props.shortcut.keys[t][0]
                                    ).length,
                                },
                                () => {
                                    let s = [];
                                    (s =
                                        2 == this.state.numShortcuts
                                            ? s.concat([
                                                  this._commands
                                                      .shortcutEditLeft
                                                      .commandId + e,
                                                  this._commands
                                                      .shortcutEditRight
                                                      .commandId + e,
                                              ])
                                            : 1 == this.state.numShortcuts
                                            ? s.concat([
                                                  this._commands.shortcutEdit
                                                      .commandId + e,
                                                  this._commands
                                                      .shortcutAddAnother
                                                      .commandId + e,
                                              ])
                                            : s.concat([
                                                  this._commands.shortcutAddNew
                                                      .commandId + e,
                                              ])),
                                        'Custom' ===
                                            this.props.shortcut.source &&
                                            (s = s.concat([
                                                this._commands.shortcutReset
                                                    .commandId + e,
                                            ])),
                                        this.props.contextMenu(t, s);
                                }
                            );
                        }),
                        (this.toSymbols = t =>
                            t
                                .split(' ')
                                .reduce(
                                    (t, e) =>
                                        'Ctrl' === e
                                            ? (t + ' ⌃').trim()
                                            : 'Alt' === e
                                            ? (t + ' ⌥').trim()
                                            : 'Shift' === e
                                            ? (t + ' ⇧').trim()
                                            : 'Accel' === e && c.Platform.IS_MAC
                                            ? (t + ' ⌘').trim()
                                            : 'Accel' === e
                                            ? (t + ' ⌃').trim()
                                            : (t + ' ' + e).trim(),
                                    ''
                                )),
                        (this._commands = {
                            shortcutEditLeft: {
                                commandId: 'shortcutui:EditLeft',
                                label: (e = t.external.translator.load(
                                    'jupyterlab'
                                )).__('Edit First'),
                                caption: e.__('Edit existing shortcut'),
                            },
                            shortcutEditRight: {
                                commandId: 'shortcutui:EditRight',
                                label: e.__('Edit Second'),
                                caption: e.__('Edit existing shortcut'),
                            },
                            shortcutEdit: {
                                commandId: 'shortcutui:Edit',
                                label: e.__('Edit'),
                                caption: e.__('Edit existing shortcut'),
                            },
                            shortcutAddNew: {
                                commandId: 'shortcutui:AddNew',
                                label: e.__('Add'),
                                caption: e.__('Add new shortcut'),
                            },
                            shortcutAddAnother: {
                                commandId: 'shortcutui:AddAnother',
                                label: e.__('Add'),
                                caption: e.__('Add another shortcut'),
                            },
                            shortcutReset: {
                                commandId: 'shortcutui:Reset',
                                label: e.__('Reset'),
                                caption: e.__('Reset shortcut back to default'),
                            },
                        }),
                        (this.state = {
                            displayNewInput: !1,
                            displayReplaceInputLeft: !1,
                            displayReplaceInputRight: !1,
                            numShortcuts: Object.keys(
                                this.props.shortcut.keys
                            ).filter(t => '' !== this.props.shortcut.keys[t][0])
                                .length,
                        });
                }
                getErrorRow() {
                    const t = this.props.external.translator.load('jupyterlab');
                    return p.createElement(
                        'div',
                        { className: (0, m.classes)(C) },
                        p.createElement(
                            'div',
                            {
                                className:
                                    ((e = this.props.showSelectors),
                                    (s = this.props.errorSize),
                                    (0, m.style)({
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        padding: '6px 12px',
                                        marginLeft: x(e, s),
                                    })),
                            },
                            p.createElement(
                                'div',
                                { className: w },
                                t.__(
                                    'Shortcut already in use by %1. Overwrite it?',
                                    this.props.shortcut.takenBy.takenByLabel
                                )
                            ),
                            p.createElement(
                                'div',
                                { className: E },
                                p.createElement('button', null, t.__('Cancel')),
                                p.createElement(
                                    'button',
                                    {
                                        id: 'no-blur',
                                        onClick: () => {
                                            var t;
                                            null ===
                                                (t = document.getElementById(
                                                    'overwrite'
                                                )) ||
                                                void 0 === t ||
                                                t.click();
                                        },
                                    },
                                    t.__('Overwrite')
                                )
                            )
                        )
                    );
                    var e, s;
                }
                getCategoryCell() {
                    return p.createElement(
                        'div',
                        { className: b },
                        this.props.shortcut.category
                    );
                }
                getLabelCell() {
                    return p.createElement(
                        'div',
                        { className: b },
                        p.createElement(
                            'div',
                            { className: 'jp-label' },
                            this.props.shortcut.label
                        )
                    );
                }
                getResetShortCutLink() {
                    const t = this.props.external.translator.load('jupyterlab');
                    return p.createElement(
                        'a',
                        {
                            className: B,
                            onClick: () =>
                                this.props.resetShortcut(this.props.shortcut),
                        },
                        t.__('Reset')
                    );
                }
                getSourceCell() {
                    return p.createElement(
                        'div',
                        { className: b },
                        p.createElement(
                            'div',
                            { className: O },
                            this.props.shortcut.source
                        ),
                        'Custom' === this.props.shortcut.source &&
                            this.getResetShortCutLink()
                    );
                }
                getOptionalSelectorCell() {
                    return this.props.showSelectors
                        ? p.createElement(
                              'div',
                              { className: b },
                              p.createElement(
                                  'div',
                                  { className: 'jp-selector' },
                                  this.props.shortcut.selector
                              )
                          )
                        : p.createElement('div', null);
                }
                getClassNameForShortCuts(t) {
                    return 0 === t.length
                        ? (0, m.classes)(S, v)
                        : 1 === t.length
                        ? (0, m.classes)(S, k)
                        : S;
                }
                getToggleInputReplaceMethod(t) {
                    switch (t) {
                        case V.Left:
                            return this.toggleInputReplaceLeft;
                        case V.Right:
                            return this.toggleInputReplaceRight;
                    }
                }
                getDisplayReplaceInput(t) {
                    switch (t) {
                        case V.Left:
                            return this.state.displayReplaceInputLeft;
                        case V.Right:
                            return this.state.displayReplaceInputRight;
                    }
                }
                getOrDiplayIfNeeded(t) {
                    const e = this.props.external.translator.load('jupyterlab');
                    return p.createElement(
                        'div',
                        {
                            className:
                                2 == t.length || this.state.displayNewInput
                                    ? R
                                    : N,
                            id:
                                2 == t.length
                                    ? 'secondor'
                                    : this.state.displayReplaceInputLeft
                                    ? 'noor'
                                    : 'or',
                        },
                        e.__('or')
                    );
                }
                getShortCutAsInput(t, e) {
                    return p.createElement(G, {
                        handleUpdate: this.props.handleUpdate,
                        deleteShortcut: this.props.deleteShortcut,
                        toggleInput: this.getToggleInputReplaceMethod(e),
                        shortcut: this.props.shortcut,
                        shortcutId: t,
                        toSymbols: this.toSymbols,
                        keyBindingsUsed: this.props.keyBindingsUsed,
                        sortConflict: this.props.sortConflict,
                        clearConflicts: this.props.clearConflicts,
                        displayInput: this.getDisplayReplaceInput(e),
                        newOrReplace: 'replace',
                        placeholder: this.toSymbols(
                            this.props.shortcut.keys[t].join(', ')
                        ),
                        translator: this.props.external.translator,
                    });
                }
                getShortCutForDisplayOnly(t) {
                    return this.props.shortcut.keys[t].map((e, s) =>
                        p.createElement(
                            'div',
                            { className: j, key: s },
                            p.createElement(
                                'div',
                                { className: _, id: 'shortcut-keys' },
                                this.toSymbols(e)
                            ),
                            s + 1 < this.props.shortcut.keys[t].length
                                ? p.createElement('div', { className: L }, ',')
                                : null
                        )
                    );
                }
                isLocationBeingEdited(t) {
                    return (
                        (t === V.Left && this.state.displayReplaceInputLeft) ||
                        (t === V.Right && this.state.displayReplaceInputRight)
                    );
                }
                getLocationFromIndex(t) {
                    return 0 === t ? V.Left : V.Right;
                }
                getDivForKey(t, e, s) {
                    const r = this.getLocationFromIndex(t);
                    return p.createElement(
                        'div',
                        {
                            className: I,
                            key: this.props.shortcut.id + '_' + t,
                            onClick: this.getToggleInputReplaceMethod(r),
                        },
                        this.isLocationBeingEdited(r)
                            ? this.getShortCutAsInput(e, r)
                            : this.getShortCutForDisplayOnly(e),
                        r === V.Left && this.getOrDiplayIfNeeded(s)
                    );
                }
                getAddLink() {
                    const t = this.props.external.translator.load('jupyterlab');
                    return p.createElement(
                        'a',
                        {
                            className: this.state.displayNewInput ? '' : A,
                            onClick: () => {
                                this.toggleInputNew(),
                                    this.props.clearConflicts();
                            },
                            id: 'add-link',
                        },
                        t.__('Add')
                    );
                }
                getInputBoxWhenToggled() {
                    return this.state.displayNewInput
                        ? p.createElement(G, {
                              handleUpdate: this.props.handleUpdate,
                              deleteShortcut: this.props.deleteShortcut,
                              toggleInput: this.toggleInputNew,
                              shortcut: this.props.shortcut,
                              shortcutId: '',
                              toSymbols: this.toSymbols,
                              keyBindingsUsed: this.props.keyBindingsUsed,
                              sortConflict: this.props.sortConflict,
                              clearConflicts: this.props.clearConflicts,
                              displayInput: this.state.displayNewInput,
                              newOrReplace: 'new',
                              placeholder: '',
                              translator: this.props.external.translator,
                          })
                        : p.createElement('div', null);
                }
                getShortCutsCell(t) {
                    return p.createElement(
                        'div',
                        { className: b },
                        p.createElement(
                            'div',
                            { className: this.getClassNameForShortCuts(t) },
                            t.map((e, s) => this.getDivForKey(s, e, t)),
                            1 === t.length &&
                                !this.state.displayNewInput &&
                                !this.state.displayReplaceInputLeft &&
                                this.getAddLink(),
                            0 === t.length &&
                                !this.state.displayNewInput &&
                                this.getAddLink(),
                            this.getInputBoxWhenToggled()
                        )
                    );
                }
                render() {
                    const t = Object.keys(this.props.shortcut.keys).filter(
                        t => '' !== this.props.shortcut.keys[t][0]
                    );
                    return 'error_row' === this.props.shortcut.id
                        ? this.getErrorRow()
                        : p.createElement(
                              'div',
                              {
                                  className: C,
                                  onContextMenu: t => {
                                      t.persist(), this.handleRightClick(t);
                                  },
                              },
                              this.getCategoryCell(),
                              this.getLabelCell(),
                              this.getShortCutsCell(t),
                              this.getSourceCell(),
                              this.getOptionalSelectorCell()
                          );
                }
            }
            class tt extends p.Component {
                render() {
                    return p.createElement(
                        'div',
                        {
                            className:
                                (115,
                                (t = this.props.height),
                                (0, m.style)({
                                    overflowY: 'scroll',
                                    height: t - 115,
                                    borderTop: 'solid',
                                    borderTopColor: 'var(--jp-border-color1)',
                                    borderTopWidth: 'var(--jp-border-width)',
                                })),
                            id: 'shortcutListContainer',
                        },
                        p.createElement(
                            'div',
                            { className: f },
                            this.props.shortcuts.map(t =>
                                p.createElement(Z, {
                                    key: t.commandName + '_' + t.selector,
                                    resetShortcut: this.props.resetShortcut,
                                    shortcut: t,
                                    handleUpdate: this.props.handleUpdate,
                                    deleteShortcut: this.props.deleteShortcut,
                                    showSelectors: this.props.showSelectors,
                                    keyBindingsUsed: this.props.keyBindingsUsed,
                                    sortConflict: this.props.sortConflict,
                                    clearConflicts: this.props.clearConflicts,
                                    errorSize: this.props.errorSize,
                                    contextMenu: this.props.contextMenu,
                                    external: this.props.external,
                                })
                            )
                        )
                    );
                    var t;
                }
            }
            const et = (0, m.style)({ display: 'block' }),
                st = (0, m.style)({
                    display: 'flex',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                    fontSize: 'var(--jp-ui-font-size1)',
                    backgroundColor: 'var(--jp-layout-color0)',
                    zIndex: 1,
                    height: '56px',
                }),
                rt = (0, m.style)({
                    width: '15%',
                    display: 'table',
                    paddingLeft: '12px',
                    lineHeight: '24px',
                    paddingTop: '5px',
                }),
                ot = (0, m.style)({ lineHeight: '14px' }),
                at = (0, m.style)({
                    justifyContent: 'center',
                    marginBottom: '8px',
                    display: 'table-row',
                    $nest: {
                        '& div': {
                            margin: '0px 10px',
                            fontSize: 'var(--jp-ui-font-size1)',
                            display: 'table-cell',
                        },
                        '& span': { fontSize: 'var(--jp-ui-font-size1)' },
                    },
                }),
                it = (0, m.style)({ width: '60%', textAlign: 'center' }),
                lt = (0, m.style)({
                    borderWidth: 'var(--jp-border-width)',
                    borderStyle: 'solid',
                    borderColor: 'var(--jp-layout-color3)',
                    height: '30px',
                    width: '65%',
                    fontSize: 'var(--jp-ui-font-size1)',
                    color: 'var(--jp-ui-font-color0)',
                    paddingLeft: '6px',
                    backgroundColor: 'var(--jp-layout-color1)',
                    backgroundImage: 'var(--jp-icon-search)',
                    backgroundSize: '18px',
                    backgroundPositionY: '6px',
                    backgroundPositionX: '98%',
                    backgroundRepeat: 'no-repeat',
                    marginTop: '8px',
                    outline: 'none',
                    $nest: {
                        '&:focus': {
                            border:
                                'var(--jp-border-width) solid var(--md-blue-500)',
                            boxShadow: 'inset 0 0 4px var(--md-blue-300)',
                        },
                        '&::placeholder': { color: 'var(--jp-ui-font-color2)' },
                    },
                }),
                nt = (0, m.style)({ display: 'contents' }),
                ct = (0, m.style)({ display: 'block', paddingTop: '5px' }),
                ht = (0, m.style)({ width: '30%' });
            function pt(t) {
                return 0 === t
                    ? (0, m.style)({
                          color: 'var(--jp-brand-color2)',
                          textDecoration: 'none',
                          marginRight: '15px',
                          $nest: {
                              '&:hover': { color: 'var(--jp-brand-color1)' },
                              '&:active': { color: 'var(--jp-brand-color0)' },
                          },
                      })
                    : (0, m.style)({
                          color: 'var(--jp-brand-color2)',
                          textDecoration: 'none',
                          textAlign: 'center',
                          display: 'block',
                          $nest: {
                              '&:hover': { color: 'var(--jp-brand-color1)' },
                              '&:active': { color: 'var(--jp-brand-color0)' },
                          },
                      });
            }
            (0, m.style)({ marginTop: '8px' });
            const dt = (0, m.style)({ paddingRight: '14px' }),
                ut = (0, m.style)({
                    fontWeight: 'bold',
                    fontSize: 'var(--jp-ui-font-size1)',
                    backgroundColor: 'var(--jp-layout-color0)',
                    width: '100%',
                    zIndex: 1,
                    display: 'table',
                    padding: '10px 0',
                }),
                mt = (0, m.style)({ marginRight: '13px' }),
                gt = (0, m.style)({ marginLeft: '14px' }),
                yt = (0, m.style)({ marginLeft: '8px', marginRight: '16px' }),
                ft = (0, m.style)({
                    display: 'flex',
                    $nest: {
                        '&:hover .jp-ShortcutTitleItem-sortButton': {
                            fontWeight: 600,
                            color: 'var(--jp-ui-font-color0)',
                        },
                        '&:focus .jp-ShortcutTitleItem-sortButton': {
                            outline: 'none',
                        },
                        '&:active .jp-ShortcutTitleItem-sortButton': {
                            fontWeight: 600,
                            color: 'var(--jp-ui-font-color0)',
                        },
                    },
                }),
                bt = (0, m.style)({
                    $nest: {
                        '& div': {
                            color: 'var(--jp-ui-font-color0)',
                            fontWeight: 'bold',
                        },
                    },
                }),
                St = (0, m.style)({
                    transform: 'rotate(180deg)',
                    marginLeft: '10px',
                    color: 'var(--jp-ui-font-color2)',
                    border: 'none',
                    backgroundColor: 'var(--jp-layout-color0)',
                    fontSize: 'var(--jp-ui-font-size1)',
                });
            class vt extends p.Component {
                render() {
                    return p.createElement(
                        'div',
                        {
                            className:
                                this.props.title.toLowerCase() ===
                                this.props.active
                                    ? (0, m.classes)(ft, bt)
                                    : ft,
                            onClick: () =>
                                this.props.updateSort(
                                    this.props.title.toLowerCase()
                                ),
                        },
                        this.props.title,
                        p.createElement(
                            'div',
                            {
                                className: `${St} jp-ShortcutTitleItem-sortButton`,
                            },
                            '⌃'
                        )
                    );
                }
            }
            var kt;
            !(function(t) {
                (t.showSelectors = 'shortcutui:showSelectors'),
                    (t.resetAll = 'shortcutui:resetAll');
            })(kt || (kt = {}));
            class Ct extends p.Component {
                getRegularSymbols() {
                    return p.createElement(
                        'div',
                        { className: rt },
                        p.createElement(
                            'div',
                            { className: at },
                            p.createElement('div', null, 'Cmd ⌘'),
                            p.createElement('div', null, 'Alt ⌥'),
                            p.createElement('div', null, 'Ctrl ⌃'),
                            p.createElement('div', null, 'Shift ⇧')
                        )
                    );
                }
                getSmallSymbols() {
                    return p.createElement(
                        'div',
                        { className: (0, m.classes)(rt, ot) },
                        p.createElement(
                            'div',
                            { className: at },
                            p.createElement('span', null, 'Cmd '),
                            p.createElement('span', { className: mt }, '⌘'),
                            p.createElement('span', null, 'Alt '),
                            p.createElement('span', { className: gt }, '⌥')
                        ),
                        p.createElement(
                            'div',
                            { className: at },
                            p.createElement('span', null, 'Ctrl '),
                            p.createElement('span', { className: yt }, '⌃'),
                            p.createElement('span', null, 'Shift '),
                            p.createElement('span', null, '⇧')
                        )
                    );
                }
                getTinySymbols() {
                    return p.createElement(
                        'div',
                        { className: (0, m.classes)(rt, ot) },
                        p.createElement(
                            'div',
                            { className: at },
                            p.createElement('span', null, 'Cmd'),
                            p.createElement('span', null, '⌘')
                        ),
                        p.createElement(
                            'div',
                            { className: at },
                            p.createElement('span', null, 'Alt'),
                            p.createElement('span', null, '⌥')
                        ),
                        p.createElement(
                            'div',
                            { className: at },
                            p.createElement('span', null, 'Ctrl'),
                            p.createElement('span', null, '⌃')
                        ),
                        p.createElement(
                            'div',
                            { className: at },
                            p.createElement('span', null, 'Shift'),
                            p.createElement('span', null, '⇧')
                        )
                    );
                }
                render() {
                    switch (this.props.size) {
                        case 0:
                            return this.getRegularSymbols();
                        case 1:
                            return this.getSmallSymbols();
                        case 2:
                            return this.getTinySymbols();
                    }
                }
            }
            class xt extends p.Component {
                render() {
                    const t = this.props.translator.load('jupyterlab');
                    return 0 === this.props.size
                        ? p.createElement(
                              'div',
                              { className: nt },
                              p.createElement(
                                  'div',
                                  { className: ct },
                                  p.createElement(
                                      'a',
                                      {
                                          className: pt(this.props.size),
                                          onClick: () =>
                                              this.props.toggleSelectors(),
                                      },
                                      this.props.showSelectors
                                          ? t.__('Hide Selectors')
                                          : t.__('Show Selectors')
                                  ),
                                  p.createElement(
                                      'a',
                                      {
                                          className: (0, m.classes)(
                                              pt(this.props.size)
                                          ),
                                          onClick: () =>
                                              this.props.resetShortcuts(),
                                      },
                                      t.__('Reset All')
                                  )
                              )
                          )
                        : p.createElement(
                              'div',
                              { className: (0, m.classes)(ct, ht) },
                              p.createElement(
                                  'a',
                                  {
                                      className: pt(this.props.size),
                                      onClick: () =>
                                          this.props.toggleSelectors(),
                                  },
                                  this.props.showSelectors
                                      ? t.__('Hide Selectors')
                                      : t.__('Show Selectors')
                              ),
                              p.createElement(
                                  'a',
                                  {
                                      className: (0, m.classes)(
                                          pt(this.props.size)
                                      ),
                                      onClick: () =>
                                          this.props.resetShortcuts(),
                                  },
                                  t.__('Reset All')
                              )
                          );
                }
            }
            class wt extends p.Component {
                constructor(t) {
                    super(t),
                        (this.getSize = t => (t < 730 ? 2 : t < 1260 ? 1 : 0)),
                        this.addMenuCommands(),
                        (this.menu = this.props.external.createMenu()),
                        this.menu.addItem({ command: kt.showSelectors }),
                        this.menu.addItem({ command: kt.resetAll });
                }
                addMenuCommands() {
                    const t = this.props.external.translator.load('jupyterlab');
                    this.props.external.hasCommand(kt.showSelectors) ||
                        this.props.external.addCommand(kt.showSelectors, {
                            label: t.__('Toggle Selectors'),
                            caption: t.__('Toggle command selectors'),
                            execute: () => {
                                this.props.toggleSelectors();
                            },
                        }),
                        this.props.external.hasCommand(kt.resetAll) ||
                            this.props.external.addCommand(kt.resetAll, {
                                label: t.__('Reset All'),
                                caption: t.__('Reset all shortcuts'),
                                execute: () => {
                                    this.props.resetShortcuts();
                                },
                            });
                }
                getShortCutTitleItem(t) {
                    return p.createElement(
                        'div',
                        { className: b },
                        p.createElement(vt, {
                            title: t,
                            updateSort: this.props.updateSort,
                            active: this.props.currentSort,
                        })
                    );
                }
                render() {
                    const t = this.props.external.translator.load('jupyterlab');
                    return p.createElement(
                        'div',
                        { className: et },
                        p.createElement(
                            'div',
                            { className: st },
                            p.createElement(Ct, {
                                size: this.getSize(this.props.width),
                            }),
                            p.createElement(
                                'div',
                                { className: it },
                                p.createElement('input', {
                                    onChange: t =>
                                        this.props.updateSearchQuery(t),
                                    className: lt,
                                    placeholder: t.__('Search'),
                                })
                            ),
                            p.createElement(xt, {
                                size: this.getSize(this.props.width),
                                toggleSelectors: this.props.toggleSelectors,
                                showSelectors: this.props.showSelectors,
                                resetShortcuts: this.props.resetShortcuts,
                                menu: this.menu,
                                translator: this.props.external.translator,
                            })
                        ),
                        p.createElement(
                            'div',
                            { className: dt },
                            p.createElement(
                                'div',
                                { className: ut },
                                this.getShortCutTitleItem(t.__('Category')),
                                this.getShortCutTitleItem(t.__('Command')),
                                p.createElement(
                                    'div',
                                    { className: b },
                                    p.createElement(
                                        'div',
                                        { className: 'title-div' },
                                        t.__('Shortcut')
                                    )
                                ),
                                this.getShortCutTitleItem(t.__('Source')),
                                this.props.showSelectors &&
                                    this.getShortCutTitleItem(t.__('Selectors'))
                            )
                        )
                    );
                }
            }
            function Et(t, e) {
                const s = t.category.toLowerCase(),
                    r = `${s} ${t.label.toLowerCase()}`;
                let o = 1 / 0,
                    a = null;
                const i = /\b\w/g;
                for (;;) {
                    const t = i.exec(r);
                    if (!t) break;
                    const s = u.StringExt.matchSumOfDeltas(r, e, t.index);
                    if (!s) break;
                    s && s.score <= o && ((o = s.score), (a = s.indices));
                }
                if (!a || o === 1 / 0) return null;
                const l = s.length + 1,
                    n = u.ArrayExt.lowerBound(a, l, (t, e) => t - e),
                    c = a.slice(0, n),
                    h = a.slice(n);
                for (let t = 0, e = h.length; t < e; ++t) h[t] -= l;
                return 0 === c.length
                    ? {
                          matchType: 0,
                          categoryIndices: null,
                          labelIndices: h,
                          score: o,
                          item: t,
                      }
                    : 0 === h.length
                    ? {
                          matchType: 1,
                          categoryIndices: c,
                          labelIndices: null,
                          score: o,
                          item: t,
                      }
                    : {
                          matchType: 2,
                          categoryIndices: c,
                          labelIndices: h,
                          score: o,
                          item: t,
                      };
            }
            class It extends p.Component {
                constructor(t) {
                    super(t),
                        (this.updateSearchQuery = t => {
                            this.setState({ searchQuery: t.target.value }, () =>
                                this.setState(
                                    {
                                        filteredShortcutList: this.searchFilterShortcuts(
                                            this.state.shortcutList
                                        ),
                                    },
                                    () => {
                                        this.sortShortcuts();
                                    }
                                )
                            );
                        }),
                        (this.resetShortcuts = async () => {
                            const t = await this.props.external.getAllShortCutSettings();
                            for (const e of Object.keys(t.user))
                                await this.props.external.removeShortCut(e);
                            await this._refreshShortcutList();
                        }),
                        (this.handleUpdate = async (t, e) => {
                            const s = await this.props.external.getAllShortCutSettings(),
                                r = s.user.shortcuts,
                                o = [];
                            let a = !1;
                            for (let s of r)
                                s.command === t.commandName &&
                                s.selector === t.selector
                                    ? (o.push({
                                          command: s.command,
                                          selector: s.selector,
                                          keys: e,
                                      }),
                                      (a = !0))
                                    : o.push(s);
                            a ||
                                o.push({
                                    command: t.commandName,
                                    selector: t.selector,
                                    keys: e,
                                }),
                                await s.set('shortcuts', o),
                                await this._refreshShortcutList();
                        }),
                        (this.deleteShortcut = async (t, e) => {
                            await this.handleUpdate(t, ['']),
                                await this._refreshShortcutList();
                        }),
                        (this.resetShortcut = async t => {
                            const e = await this.props.external.getAllShortCutSettings(),
                                s = e.user.shortcuts,
                                r = [];
                            for (let e of s)
                                (e.command === t.commandName &&
                                    e.selector === t.selector) ||
                                    r.push(e);
                            await e.set('shortcuts', r),
                                await this._refreshShortcutList();
                        }),
                        (this.toggleSelectors = () => {
                            this.setState({
                                showSelectors: !this.state.showSelectors,
                            });
                        }),
                        (this.updateSort = t => {
                            t !== this.state.currentSort &&
                                this.setState(
                                    { currentSort: t },
                                    this.sortShortcuts
                                );
                        }),
                        (this.sortConflict = (t, e) => {
                            const s = this.state.filteredShortcutList;
                            if (
                                0 === s.filter(t => 'error_row' === t.id).length
                            ) {
                                const r = new X();
                                (r.takenBy = e),
                                    (r.id = 'error_row'),
                                    s.splice(s.indexOf(t) + 1, 0, r),
                                    (r.hasConflict = !0),
                                    this.setState({ filteredShortcutList: s });
                            }
                        }),
                        (this.clearConflicts = () => {
                            const t = this.state.filteredShortcutList.filter(
                                t => 'error_row' !== t.id
                            );
                            t.forEach(t => {
                                t.hasConflict = !1;
                            }),
                                this.setState({ filteredShortcutList: t });
                        }),
                        (this.contextMenu = (t, e) => {
                            t.persist(),
                                this.setState(
                                    {
                                        contextMenu: this.props.external.createMenu(),
                                    },
                                    () => {
                                        t.preventDefault();
                                        for (let t of e)
                                            this.state.contextMenu.addItem({
                                                command: t,
                                            });
                                        this.state.contextMenu.open(
                                            t.clientX,
                                            t.clientY
                                        );
                                    }
                                );
                        }),
                        (this.state = {
                            shortcutList: {},
                            filteredShortcutList: new Array(),
                            shortcutsFetched: !1,
                            searchQuery: '',
                            showSelectors: !1,
                            currentSort: 'category',
                            keyBindingsUsed: {},
                            contextMenu: this.props.external.createMenu(),
                        });
                }
                componentDidMount() {
                    this._refreshShortcutList();
                }
                async _refreshShortcutList() {
                    const t = await this.props.external.getAllShortCutSettings(),
                        e = (function(t, e) {
                            const s = e.composite.shortcuts;
                            let r = {};
                            return (
                                s.forEach(e => {
                                    let s = e.command + '_' + e.selector;
                                    if (-1 !== Object.keys(r).indexOf(s)) {
                                        let t = r[s].numberOfShortcuts;
                                        (r[s].keys[t] = e.keys),
                                            r[s].numberOfShortcuts++;
                                    } else {
                                        let o = new J();
                                        o.commandName = e.command;
                                        let a = t.getLabel(e.command);
                                        a || (a = e.command.split(':')[1]),
                                            (o.label = a),
                                            (o.category = e.command.split(
                                                ':'
                                            )[0]),
                                            (o.keys[0] = e.keys),
                                            (o.selector = e.selector),
                                            (o.source = 'Default'),
                                            (o.id = s),
                                            (o.numberOfShortcuts = 1),
                                            (r[s] = o);
                                    }
                                }),
                                e.user.shortcuts.forEach(t => {
                                    const e = t.command + '_' + t.selector;
                                    r[e] && (r[e].source = 'Custom');
                                }),
                                r
                            );
                        })(this.props.external, t);
                    this.setState(
                        {
                            shortcutList: e,
                            filteredShortcutList: this.searchFilterShortcuts(e),
                            shortcutsFetched: !0,
                        },
                        () => {
                            let t = (function(t) {
                                let e = {};
                                return (
                                    Object.keys(t).forEach(s => {
                                        Object.keys(t[s].keys).forEach(r => {
                                            const o = new q(t[s]);
                                            (o.takenByKey = r),
                                                (e[
                                                    t[s].keys[r].join(' ') +
                                                        '_' +
                                                        t[s].selector
                                                ] = o);
                                        });
                                    }),
                                    e
                                );
                            })(e);
                            this.setState({ keyBindingsUsed: t }),
                                this.sortShortcuts();
                        }
                    );
                }
                searchFilterShortcuts(t) {
                    return (function(t, e) {
                        e = e.replace(/\s+/g, '').toLowerCase();
                        let s = [],
                            r = Object.keys(t);
                        for (let o = 0, a = r.length; o < a; ++o) {
                            let a = t[r[o]];
                            if (!e) {
                                s.push({
                                    matchType: 3,
                                    categoryIndices: null,
                                    labelIndices: null,
                                    score: 0,
                                    item: a,
                                });
                                continue;
                            }
                            let i = Et(a, e);
                            i && s.push(i);
                        }
                        return s;
                    })(t, this.state.searchQuery).map(t => t.item);
                }
                sortShortcuts() {
                    const t = this.state.filteredShortcutList;
                    let e = this.state.currentSort;
                    'command' === e && (e = 'label'),
                        '' !== e &&
                            t.sort((t, s) => {
                                const r = t.get(e),
                                    o = s.get(e);
                                return r < o
                                    ? -1
                                    : r > o
                                    ? 1
                                    : t.label < s.label
                                    ? -1
                                    : t.label > s.label
                                    ? 1
                                    : 0;
                            }),
                        this.setState({ filteredShortcutList: t });
                }
                render() {
                    return this.state.shortcutsFetched
                        ? p.createElement(
                              'div',
                              { className: y, id: 'jp-shortcutui' },
                              p.createElement('div', { className: g }),
                              p.createElement(wt, {
                                  updateSearchQuery: this.updateSearchQuery,
                                  resetShortcuts: this.resetShortcuts,
                                  toggleSelectors: this.toggleSelectors,
                                  showSelectors: this.state.showSelectors,
                                  updateSort: this.updateSort,
                                  currentSort: this.state.currentSort,
                                  width: this.props.width,
                                  external: this.props.external,
                              }),
                              p.createElement(tt, {
                                  shortcuts: this.state.filteredShortcutList,
                                  resetShortcut: this.resetShortcut,
                                  handleUpdate: this.handleUpdate,
                                  deleteShortcut: this.deleteShortcut,
                                  showSelectors: this.state.showSelectors,
                                  keyBindingsUsed: this.state.keyBindingsUsed,
                                  sortConflict: this.sortConflict,
                                  clearConflicts: this.clearConflicts,
                                  height: this.props.height,
                                  errorSize: this.props.width < 775 ? 1 : 0,
                                  contextMenu: this.contextMenu,
                                  external: this.props.external,
                              })
                          )
                        : null;
                }
            }
            function jt(t, e, s) {
                const { commands: r } = e,
                    o = '@jupyterlab/shortcuts-extension:shortcuts';
                return {
                    translator: s,
                    getAllShortCutSettings: () => t.reload(o),
                    removeShortCut: e => t.remove(o, e),
                    createMenu: () => new h.Menu({ commands: r }),
                    hasCommand: t => r.hasCommand(t),
                    addCommand: (t, e) => r.addCommand(t, e),
                    getLabel: t => r.label(t),
                };
            }
            const _t = {
                    id: '@jupyterlab/shortcuts-extension:shortcuts',
                    requires: [r.ISettingRegistry],
                    optional: [o.ITranslator, a.IFormComponentRegistry],
                    activate: async (t, e, s, a) => {
                        const n = null != s ? s : o.nullTranslator,
                            h = n.load('jupyterlab'),
                            { commands: p } = t;
                        let u,
                            m = {};
                        function g(s) {
                            const r = t.commands.listCommands().join('\n');
                            (m = {}),
                                (s.properties.shortcuts.default = Object.keys(
                                    e.plugins
                                )
                                    .map(t => {
                                        const s =
                                            e.plugins[t].schema[
                                                'jupyter.lab.shortcuts'
                                            ] || [];
                                        return (m[t] = s), s;
                                    })
                                    .concat([s.properties.shortcuts.default])
                                    .reduce(
                                        (t, e) =>
                                            c.Platform.IS_MAC
                                                ? t.concat(e)
                                                : t.concat(
                                                      e.filter(
                                                          t =>
                                                              !t.keys.some(
                                                                  t => {
                                                                      const {
                                                                          cmd: e,
                                                                      } = i.CommandRegistry.parseKeystroke(
                                                                          t
                                                                      );
                                                                      return e;
                                                                  }
                                                              )
                                                      )
                                                  ),
                                        []
                                    )
                                    .sort((t, e) =>
                                        t.command.localeCompare(e.command)
                                    )),
                                (s.properties.shortcuts.description = h.__(
                                    'Note: To disable a system default shortcut,\ncopy it to User Preferences and add the\n"disabled" key, for example:\n{\n    "command": "application:activate-next-tab",\n    "keys": [\n        "Ctrl Shift ]"\n    ],\n    "selector": "body",\n    "disabled": true\n}\n\nList of commands followed by keyboard shortcuts:\n%1\n\nList of keyboard shortcuts:',
                                    r
                                ));
                        }
                        a &&
                            a.addRenderer('shortcuts', s =>
                                (t =>
                                    d().createElement(It, {
                                        external: t.external,
                                        height: 1e3,
                                        width: 1e3,
                                    }))(
                                    Object.assign({ external: jt(e, t, n) }, s)
                                )
                            ),
                            e.pluginChanged.connect(async (t, s) => {
                                if (s !== _t.id) {
                                    const t = m[s],
                                        r =
                                            e.plugins[s].schema[
                                                'jupyter.lab.shortcuts'
                                            ] || [];
                                    (void 0 !== t &&
                                        l.JSONExt.deepEqual(t, r)) ||
                                        ((u = null), await e.reload(_t.id));
                                }
                            }),
                            e.transform(_t.id, {
                                compose: t => {
                                    var e, s, o, a;
                                    u ||
                                        ((u = l.JSONExt.deepCopy(t.schema)),
                                        g(u));
                                    const i =
                                            null !==
                                                (o =
                                                    null ===
                                                        (s =
                                                            null ===
                                                                (e =
                                                                    u.properties) ||
                                                            void 0 === e
                                                                ? void 0
                                                                : e.shortcuts) ||
                                                    void 0 === s
                                                        ? void 0
                                                        : s.default) &&
                                            void 0 !== o
                                                ? o
                                                : [],
                                        n = {
                                            shortcuts:
                                                null !==
                                                    (a =
                                                        t.data.user
                                                            .shortcuts) &&
                                                void 0 !== a
                                                    ? a
                                                    : [],
                                        },
                                        c = {
                                            shortcuts: r.SettingRegistry.reconcileShortcuts(
                                                i,
                                                n.shortcuts
                                            ),
                                        };
                                    return (
                                        (t.data = { composite: c, user: n }), t
                                    );
                                },
                                fetch: t => (
                                    u ||
                                        ((u = l.JSONExt.deepCopy(t.schema)),
                                        g(u)),
                                    {
                                        data: t.data,
                                        id: t.id,
                                        raw: t.raw,
                                        schema: u,
                                        version: t.version,
                                    }
                                ),
                            });
                        try {
                            u = null;
                            const t = await e.load(_t.id);
                            Rt.loadShortcuts(p, t.composite),
                                t.changed.connect(() => {
                                    Rt.loadShortcuts(p, t.composite);
                                });
                        } catch (t) {
                            console.error(`Loading ${_t.id} failed.`, t);
                        }
                    },
                    autoStart: !0,
                },
                Nt = _t;
            var Rt;
            !(function(t) {
                let e;
                t.loadShortcuts = function(t, s) {
                    var r;
                    const o =
                        null !== (r = null == s ? void 0 : s.shortcuts) &&
                        void 0 !== r
                            ? r
                            : [];
                    e && e.dispose(),
                        (e = o.reduce((e, s) => {
                            const r = (function(t) {
                                if (!t || 'object' != typeof t) return;
                                const { isArray: e } = Array;
                                return 'command' in t &&
                                    'keys' in t &&
                                    'selector' in t &&
                                    e(t.keys)
                                    ? t
                                    : void 0;
                            })(s);
                            return r && e.add(t.addKeyBinding(r)), e;
                        }, new n.DisposableSet()));
                };
            })(Rt || (Rt = {}));
        },
    },
]);
//# sourceMappingURL=2212.35ea40b.js.map
