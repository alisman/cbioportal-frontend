'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [5573],
    {
        65573: (e, t, s) => {
            s.r(t),
                s.d(t, {
                    GroupItem: () => h,
                    IStatusBar: () => se,
                    KernelStatus: () => L,
                    LineCol: () => J,
                    Popup: () => j,
                    ProgressBar: () => N,
                    ProgressCircle: () => B,
                    RunningSessions: () => Q,
                    StatusBar: () => te,
                    TextItem: () => R,
                    clickedItem: () => S,
                    interactiveItem: () => w,
                    item: () => k,
                    leftSide: () => f,
                    rightSide: () => y,
                    showPopup: () => I,
                    side: () => x,
                    statusBar: () => b,
                });
            var n = s(62471),
                i = s.n(n),
                a = s(82161);
            const r = { display: 'flex', alignItems: 'center' },
                o = { flexDirection: 'row' };
            const l = (0, a.oB)(r, o);
            function h(e) {
                const { spacing: t, children: s, className: i } = e,
                    r = (function(e, t) {
                        var s = {};
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) &&
                                t.indexOf(n) < 0 &&
                                (s[n] = e[n]);
                        if (
                            null != e &&
                            'function' == typeof Object.getOwnPropertySymbols
                        ) {
                            var i = 0;
                            for (
                                n = Object.getOwnPropertySymbols(e);
                                i < n.length;
                                i++
                            )
                                t.indexOf(n[i]) < 0 &&
                                    Object.prototype.propertyIsEnumerable.call(
                                        e,
                                        n[i]
                                    ) &&
                                    (s[n[i]] = e[n[i]]);
                        }
                        return s;
                    })(e, ['spacing', 'children', 'className']),
                    o = n.Children.count(s);
                return n.createElement(
                    'div',
                    Object.assign({ className: (0, a.Sh)(l, i) }, r),
                    n.Children.map(s, (e, s) =>
                        0 === s
                            ? n.createElement(
                                  'div',
                                  { style: { marginRight: `${t}px` } },
                                  e
                              )
                            : s === o - 1
                            ? n.createElement(
                                  'div',
                                  { style: { marginLeft: `${t}px` } },
                                  e
                              )
                            : n.createElement(
                                  'div',
                                  { style: { margin: `0px ${t}px` } },
                                  e
                              )
                    )
                );
            }
            var d = s(47343),
                c = s(86098);
            const u = 'var(--jp-statusbar-height)',
                m = 'var(--jp-ui-font-color1)',
                p = '10px',
                g = (0, a.oB)(
                    {
                        fontSize: 'var(--jp-ui-font-size1)',
                        fontFamily: 'var(--jp-ui-font-family)',
                    },
                    { lineHeight: '24px', color: m }
                ),
                _ = { paddingLeft: '6px', paddingRight: '6px' },
                v = {
                    $nest: {
                        '&:hover': {
                            backgroundColor: 'var(--jp-layout-color3)',
                        },
                    },
                },
                C = {
                    backgroundColor: 'var(--jp-brand-color1)',
                    $nest: { ['.' + g]: { color: 'white' } },
                },
                b = (0, a.oB)(
                    {
                        background: 'var(--jp-layout-color2)',
                        minHeight: u,
                        justifyContent: 'space-between',
                        paddingLeft: p,
                        paddingRight: p,
                    },
                    r
                ),
                x = (0, a.oB)(r),
                f = (0, a.oB)(o),
                y = (0, a.oB)({ flexDirection: 'row-reverse' }),
                k = (0, a.oB)(
                    {
                        maxHeight: u,
                        marginLeft: '2px',
                        marginRight: '2px',
                        height: u,
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        color: m,
                    },
                    _
                ),
                S = (0, a.oB)(C),
                w = (0, a.oB)(v),
                E = (0, a.oB)({ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' });
            function I(e) {
                const t = new j(e);
                return t.launch(), t;
            }
            class j extends c.Widget {
                constructor(e) {
                    super(),
                        (this._body = e.body),
                        this._body.addClass(E),
                        (this._anchor = e.anchor),
                        (this._align = e.align),
                        (this.layout = new c.PanelLayout()).addWidget(e.body),
                        this._body.node.addEventListener('resize', () => {
                            this.update();
                        });
                }
                launch() {
                    this._setGeometry(),
                        c.Widget.attach(this, document.body),
                        this.update(),
                        this._anchor.addClass(S),
                        this._anchor.removeClass(w);
                }
                onUpdateRequest(e) {
                    this._setGeometry(), super.onUpdateRequest(e);
                }
                onAfterAttach(e) {
                    document.addEventListener('click', this, !1),
                        this.node.addEventListener('keydown', this, !1),
                        window.addEventListener('resize', this, !1);
                }
                onAfterDetach(e) {
                    document.removeEventListener('click', this, !1),
                        this.node.removeEventListener('keydown', this, !1),
                        window.removeEventListener('resize', this, !1);
                }
                onResize() {
                    this.update();
                }
                dispose() {
                    super.dispose(),
                        this._anchor.removeClass(S),
                        this._anchor.addClass(w);
                }
                handleEvent(e) {
                    switch (e.type) {
                        case 'keydown':
                            this._evtKeydown(e);
                            break;
                        case 'click':
                            this._evtClick(e);
                            break;
                        case 'resize':
                            this.onResize();
                    }
                }
                _evtClick(e) {
                    !e.target ||
                        this._body.node.contains(e.target) ||
                        this._anchor.node.contains(e.target) ||
                        this.dispose();
                }
                _evtKeydown(e) {
                    27 === e.keyCode &&
                        (e.stopPropagation(),
                        e.preventDefault(),
                        this.dispose());
                }
                _setGeometry() {
                    let e = 0;
                    const t = this._anchor.node.getBoundingClientRect(),
                        s = this._body.node.getBoundingClientRect();
                    'right' === this._align && (e = -(s.width - t.width));
                    const n = window.getComputedStyle(this._body.node);
                    d.HoverBox.setGeometry({
                        anchor: t,
                        host: document.body,
                        maxHeight: 500,
                        minHeight: 20,
                        node: this._body.node,
                        offset: { horizontal: e },
                        privilege: 'forceAbove',
                        style: n,
                    });
                }
            }
            function N(e) {
                const { width: t, percentage: s } = e,
                    i = (function(e, t) {
                        var s = {};
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) &&
                                t.indexOf(n) < 0 &&
                                (s[n] = e[n]);
                        if (
                            null != e &&
                            'function' == typeof Object.getOwnPropertySymbols
                        ) {
                            var i = 0;
                            for (
                                n = Object.getOwnPropertySymbols(e);
                                i < n.length;
                                i++
                            )
                                t.indexOf(n[i]) < 0 &&
                                    Object.prototype.propertyIsEnumerable.call(
                                        e,
                                        n[i]
                                    ) &&
                                    (s[n[i]] = e[n[i]]);
                        }
                        return s;
                    })(e, ['width', 'percentage']);
                return n.createElement(
                    'div',
                    {
                        className: 'jp-Statusbar-ProgressBar-progress-bar',
                        role: 'progressbar',
                        'aria-valuemin': 0,
                        'aria-valuemax': 100,
                        'aria-valuenow': s,
                    },
                    n.createElement(
                        O,
                        Object.assign({}, Object.assign({ percentage: s }, i), {
                            contentWidth: t,
                        })
                    )
                );
            }
            function O(e) {
                return n.createElement(
                    'div',
                    { style: { width: `${e.percentage}%` } },
                    n.createElement('p', null, e.content)
                );
            }
            function R(e) {
                const { title: t, source: s, className: i } = e,
                    r = (function(e, t) {
                        var s = {};
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) &&
                                t.indexOf(n) < 0 &&
                                (s[n] = e[n]);
                        if (
                            null != e &&
                            'function' == typeof Object.getOwnPropertySymbols
                        ) {
                            var i = 0;
                            for (
                                n = Object.getOwnPropertySymbols(e);
                                i < n.length;
                                i++
                            )
                                t.indexOf(n[i]) < 0 &&
                                    Object.prototype.propertyIsEnumerable.call(
                                        e,
                                        n[i]
                                    ) &&
                                    (s[n[i]] = e[n[i]]);
                        }
                        return s;
                    })(e, ['title', 'source', 'className']);
                return n.createElement(
                    'span',
                    Object.assign({ className: (0, a.Sh)(g, i), title: t }, r),
                    s
                );
            }
            function B(e) {
                return i().createElement(
                    'div',
                    {
                        className: 'jp-Statusbar-ProgressCircle',
                        role: 'progressbar',
                        'aria-valuemin': 0,
                        'aria-valuemax': 100,
                        'aria-valuenow': e.progress,
                    },
                    i().createElement(
                        'svg',
                        { viewBox: '0 0 250 250' },
                        i().createElement('circle', {
                            cx: '125',
                            cy: '125',
                            r: '104',
                            stroke: 'var(--jp-inverse-layout-color3)',
                            strokeWidth: '20',
                            fill: 'none',
                        }),
                        i().createElement('path', {
                            transform: 'translate(125,125) scale(.9)',
                            d: (e => {
                                const t = Math.max(3.6 * e, 0.1),
                                    s = (t * Math.PI) / 180,
                                    n = 104 * Math.sin(s),
                                    i = -104 * Math.cos(s);
                                return (
                                    'M 0 0 v -104 A 104 104 1 ' +
                                    (t < 180 ? 1 : 0) +
                                    ' 0 ' +
                                    n.toFixed(4) +
                                    ' ' +
                                    i.toFixed(4) +
                                    ' z'
                                );
                            })(e.progress),
                            fill: 'var(--jp-inverse-layout-color3)',
                        })
                    )
                );
            }
            var P = s(61345),
                A = s(26169);
            function D(e) {
                const t = (e.translator || P.nullTranslator).load('jupyterlab');
                let s = '';
                return (
                    e.status && (s = ` | ${e.status}`),
                    i().createElement(R, {
                        onClick: e.handleClick,
                        source: `${e.kernelName}${s}`,
                        title: t.__('Change kernel for %1', e.activityName),
                    })
                );
            }
            class L extends d.VDomRenderer {
                constructor(e, t) {
                    super(new L.Model(t)),
                        (this.translator = t || P.nullTranslator),
                        (this._handleClick = e.onClick),
                        this.addClass(w);
                }
                render() {
                    return null === this.model
                        ? null
                        : i().createElement(D, {
                              status: this.model.status,
                              kernelName: this.model.kernelName,
                              activityName: this.model.activityName,
                              handleClick: this._handleClick,
                              translator: this.translator,
                          });
                }
            }
            !(function(e) {
                class t extends d.VDomModel {
                    constructor(e) {
                        super(),
                            (this._activityName = 'activity'),
                            (this._kernelStatus = ''),
                            (this._sessionContext = null),
                            (e = e || P.nullTranslator),
                            (this._trans = e.load('jupyterlab')),
                            (this._kernelName = this._trans.__('No Kernel!')),
                            (this._statusNames = (0, d.translateKernelStatuses)(
                                e
                            ));
                    }
                    get kernelName() {
                        return this._kernelName;
                    }
                    get status() {
                        return this._kernelStatus
                            ? this._statusNames[this._kernelStatus]
                            : void 0;
                    }
                    get activityName() {
                        return this._activityName;
                    }
                    set activityName(e) {
                        this._activityName !== e &&
                            ((this._activityName = e),
                            this.stateChanged.emit(void 0));
                    }
                    get sessionContext() {
                        return this._sessionContext;
                    }
                    set sessionContext(e) {
                        var t, s, n, i;
                        null === (t = this._sessionContext) ||
                            void 0 === t ||
                            t.statusChanged.disconnect(
                                this._onKernelStatusChanged,
                                this
                            ),
                            null === (s = this._sessionContext) ||
                                void 0 === s ||
                                s.connectionStatusChanged.disconnect(
                                    this._onKernelStatusChanged,
                                    this
                                ),
                            null === (n = this._sessionContext) ||
                                void 0 === n ||
                                n.kernelChanged.disconnect(
                                    this._onKernelChanged,
                                    this
                                );
                        const a = this._getAllState();
                        (this._sessionContext = e),
                            (this._kernelStatus =
                                null == e ? void 0 : e.kernelDisplayStatus),
                            (this._kernelName =
                                null !==
                                    (i =
                                        null == e
                                            ? void 0
                                            : e.kernelDisplayName) &&
                                void 0 !== i
                                    ? i
                                    : this._trans.__('No Kernel')),
                            null == e ||
                                e.statusChanged.connect(
                                    this._onKernelStatusChanged,
                                    this
                                ),
                            null == e ||
                                e.connectionStatusChanged.connect(
                                    this._onKernelStatusChanged,
                                    this
                                ),
                            null == e ||
                                e.kernelChanged.connect(
                                    this._onKernelChanged,
                                    this
                                ),
                            this._triggerChange(a, this._getAllState());
                    }
                    _onKernelStatusChanged() {
                        var e;
                        (this._kernelStatus =
                            null === (e = this._sessionContext) || void 0 === e
                                ? void 0
                                : e.kernelDisplayStatus),
                            this.stateChanged.emit(void 0);
                    }
                    _onKernelChanged(e, t) {
                        var s;
                        const n = this._getAllState();
                        (this._kernelStatus =
                            null === (s = this._sessionContext) || void 0 === s
                                ? void 0
                                : s.kernelDisplayStatus),
                            (this._kernelName = e.kernelDisplayName),
                            this._triggerChange(n, this._getAllState());
                    }
                    _getAllState() {
                        return [
                            this._kernelName,
                            this._kernelStatus,
                            this._activityName,
                        ];
                    }
                    _triggerChange(e, t) {
                        A.JSONExt.deepEqual(e, t) &&
                            this.stateChanged.emit(void 0);
                    }
                }
                e.Model = t;
            })(L || (L = {}));
            var M = s(99729);
            (0, a.oB)({ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' });
            const T = (0, a.oB)({
                    padding: '4px 12px',
                    backgroundColor: 'var(--jp-layout-color2)',
                    boxShadow: 'var(--jp-toolbar-box-shadow)',
                    zIndex: 2,
                    fontSize: 'var(--jp-ui-font-size1)',
                }),
                z = (0, a.oB)({
                    fontSize: 'var(--jp-ui-font-size0)',
                    lineHeight: 'var(--jp-ui-font-size1)',
                    marginTop: '4px',
                    color: 'var(--jp-ui-font-color0)',
                }),
                F = {
                    border: 'none',
                    borderRadius: '0px',
                    position: 'absolute',
                    backgroundSize: '16px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    outline: 'none',
                    top: '0px',
                    right: '0px',
                },
                K = (0, a.oB)(F, {
                    top: '4px',
                    right: '8px',
                    height: '24px',
                    padding: '0px 12px',
                    width: '12px',
                }),
                W = (0, a.oB)(F, {
                    backgroundColor: 'var(--jp-brand-color1)',
                    height: '100%',
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '4px 6px',
                }),
                U = (0, a.oB)(F, {
                    backgroundColor: 'transparent',
                    height: '100%',
                    width: '100%',
                    boxSizing: 'border-box',
                }),
                $ = (0, a.oB)({
                    overflow: 'hidden',
                    padding: '0px 8px',
                    border: '1px solid var(--jp-border-color0)',
                    backgroundColor: 'var(--jp-input-active-background)',
                    height: '22px',
                }),
                H = (0, a.oB)({
                    border: 'var(--jp-border-width) solid var(--md-blue-500)',
                    boxShadow: 'inset 0 0 4px var(--md-blue-300)',
                }),
                G = (0, a.oB)({
                    background: 'transparent',
                    width: '200px',
                    height: '100%',
                    border: 'none',
                    outline: 'none',
                    color: 'var(--jp-ui-font-color0)',
                    lineHeight: '28px',
                });
            class V extends i().Component {
                constructor(e) {
                    super(e),
                        (this._handleChange = e => {
                            this.setState({ value: e.currentTarget.value });
                        }),
                        (this._handleSubmit = e => {
                            e.preventDefault();
                            const t = parseInt(this._textInput.value, 10);
                            return (
                                !isNaN(t) &&
                                    isFinite(t) &&
                                    1 <= t &&
                                    t <= this.props.maxLine &&
                                    this.props.handleSubmit(t),
                                !1
                            );
                        }),
                        (this._handleFocus = () => {
                            this.setState({ hasFocus: !0 });
                        }),
                        (this._handleBlur = () => {
                            this.setState({ hasFocus: !1 });
                        }),
                        (this._textInput = null),
                        (this.translator = e.translator || P.nullTranslator),
                        (this._trans = this.translator.load('jupyterlab')),
                        (this.state = { value: '', hasFocus: !1 });
                }
                componentDidMount() {
                    this._textInput.focus();
                }
                render() {
                    return i().createElement(
                        'div',
                        { className: T },
                        i().createElement(
                            'form',
                            {
                                name: 'lineColumnForm',
                                onSubmit: this._handleSubmit,
                                noValidate: !0,
                            },
                            i().createElement(
                                'div',
                                {
                                    className: (0, a.Sh)(
                                        $,
                                        'lm-lineForm-wrapper',
                                        this.state.hasFocus ? H : void 0
                                    ),
                                },
                                i().createElement('input', {
                                    type: 'text',
                                    className: G,
                                    onChange: this._handleChange,
                                    onFocus: this._handleFocus,
                                    onBlur: this._handleBlur,
                                    value: this.state.value,
                                    ref: e => {
                                        this._textInput = e;
                                    },
                                }),
                                i().createElement(
                                    'div',
                                    { className: K },
                                    i().createElement(M.lineFormIcon.react, {
                                        className: W,
                                        elementPosition: 'center',
                                    }),
                                    i().createElement('input', {
                                        type: 'submit',
                                        className: U,
                                        value: '',
                                    })
                                )
                            ),
                            i().createElement(
                                'label',
                                { className: z },
                                this._trans.__(
                                    'Go to line number between 1 and %1',
                                    this.props.maxLine
                                )
                            )
                        )
                    );
                }
            }
            function q(e) {
                const t = (e.translator || P.nullTranslator).load('jupyterlab');
                return i().createElement(R, {
                    onClick: e.handleClick,
                    source: t.__('Ln %1, Col %2', e.line, e.column),
                    title: t.__('Go to line number…'),
                });
            }
            class J extends d.VDomRenderer {
                constructor(e) {
                    super(new J.Model()),
                        (this._popup = null),
                        this.addClass(w),
                        (this.translator = e || P.nullTranslator);
                }
                render() {
                    return null === this.model
                        ? null
                        : i().createElement(q, {
                              line: this.model.line,
                              column: this.model.column,
                              translator: this.translator,
                              handleClick: () => this._handleClick(),
                          });
                }
                _handleClick() {
                    this._popup && this._popup.dispose();
                    const e = d.ReactWidget.create(
                        i().createElement(V, {
                            handleSubmit: e => this._handleSubmit(e),
                            currentLine: this.model.line,
                            maxLine: this.model.editor.lineCount,
                            translator: this.translator,
                        })
                    );
                    this._popup = I({ body: e, anchor: this, align: 'right' });
                }
                _handleSubmit(e) {
                    this.model.editor.setCursorPosition({
                        line: e - 1,
                        column: 0,
                    }),
                        this._popup.dispose(),
                        this.model.editor.focus();
                }
            }
            function Y(e) {
                return i().createElement(
                    h,
                    { spacing: 4, onClick: e.handleClick },
                    i().createElement(
                        h,
                        { spacing: 4 },
                        i().createElement(R, { source: e.terminals }),
                        i().createElement(M.terminalIcon.react, {
                            left: '1px',
                            top: '3px',
                            stylesheet: 'statusBar',
                        })
                    ),
                    i().createElement(
                        h,
                        { spacing: 4 },
                        i().createElement(R, { source: e.sessions }),
                        i().createElement(M.kernelIcon.react, {
                            top: '2px',
                            stylesheet: 'statusBar',
                        })
                    )
                );
            }
            !(function(e) {
                class t extends d.VDomModel {
                    constructor() {
                        super(...arguments),
                            (this._onSelectionChanged = () => {
                                const e = this._getAllState(),
                                    t = this.editor.getCursorPosition();
                                (this._line = t.line + 1),
                                    (this._column = t.column + 1),
                                    this._triggerChange(e, this._getAllState());
                            }),
                            (this._line = 1),
                            (this._column = 1),
                            (this._editor = null);
                    }
                    get editor() {
                        return this._editor;
                    }
                    set editor(e) {
                        var t;
                        const s = this._editor;
                        (null === (t = null == s ? void 0 : s.model) ||
                        void 0 === t
                            ? void 0
                            : t.selections) &&
                            s.model.selections.changed.disconnect(
                                this._onSelectionChanged
                            );
                        const n = this._getAllState();
                        if (((this._editor = e), this._editor)) {
                            this._editor.model.selections.changed.connect(
                                this._onSelectionChanged
                            );
                            const e = this._editor.getCursorPosition();
                            (this._column = e.column + 1),
                                (this._line = e.line + 1);
                        } else (this._column = 1), (this._line = 1);
                        this._triggerChange(n, this._getAllState());
                    }
                    get line() {
                        return this._line;
                    }
                    get column() {
                        return this._column;
                    }
                    _getAllState() {
                        return [this._line, this._column];
                    }
                    _triggerChange(e, t) {
                        (e[0] === t[0] && e[1] === t[1]) ||
                            this.stateChanged.emit(void 0);
                    }
                }
                e.Model = t;
            })(J || (J = {}));
            class Q extends d.VDomRenderer {
                constructor(e) {
                    super(new Q.Model()),
                        (this._serviceManager = e.serviceManager),
                        (this._handleClick = e.onClick),
                        (this.translator = e.translator || P.nullTranslator),
                        (this._trans = this.translator.load('jupyterload')),
                        this._serviceManager.sessions.runningChanged.connect(
                            this._onSessionsRunningChanged,
                            this
                        ),
                        this._serviceManager.terminals.runningChanged.connect(
                            this._onTerminalsRunningChanged,
                            this
                        ),
                        this.addClass(w);
                }
                render() {
                    return this.model
                        ? ((this.title.caption = this._trans.__(
                              '%1 Terminals, %2 Kernel sessions',
                              this.model.terminals,
                              this.model.sessions
                          )),
                          i().createElement(Y, {
                              sessions: this.model.sessions,
                              terminals: this.model.terminals,
                              handleClick: this._handleClick,
                          }))
                        : null;
                }
                dispose() {
                    super.dispose(),
                        this._serviceManager.sessions.runningChanged.disconnect(
                            this._onSessionsRunningChanged,
                            this
                        ),
                        this._serviceManager.terminals.runningChanged.disconnect(
                            this._onTerminalsRunningChanged,
                            this
                        );
                }
                _onSessionsRunningChanged(e, t) {
                    this.model.sessions = t.length;
                }
                _onTerminalsRunningChanged(e, t) {
                    this.model.terminals = t.length;
                }
            }
            !(function(e) {
                class t extends d.VDomModel {
                    constructor() {
                        super(...arguments),
                            (this._terminals = 0),
                            (this._sessions = 0);
                    }
                    get sessions() {
                        return this._sessions;
                    }
                    set sessions(e) {
                        const t = this._sessions;
                        (this._sessions = e),
                            t !== this._sessions &&
                                this.stateChanged.emit(void 0);
                    }
                    get terminals() {
                        return this._terminals;
                    }
                    set terminals(e) {
                        const t = this._terminals;
                        (this._terminals = e),
                            t !== this._terminals &&
                                this.stateChanged.emit(void 0);
                    }
                }
                e.Model = t;
            })(Q || (Q = {}));
            var X,
                Z = s(43892),
                ee = s(21743);
            class te extends c.Widget {
                constructor() {
                    super(),
                        (this._leftRankItems = []),
                        (this._rightRankItems = []),
                        (this._statusItems = {}),
                        (this._disposables = new ee.DisposableSet()),
                        this.addClass(b);
                    const e = (this.layout = new c.PanelLayout()),
                        t = (this._leftSide = new c.Panel()),
                        s = (this._middlePanel = new c.Panel()),
                        n = (this._rightSide = new c.Panel());
                    t.addClass(x),
                        t.addClass(f),
                        s.addClass(x),
                        n.addClass(x),
                        n.addClass(y),
                        e.addWidget(t),
                        e.addWidget(s),
                        e.addWidget(n);
                }
                registerStatusItem(e, t) {
                    if (e in this._statusItems)
                        throw new Error(`Status item ${e} already registered.`);
                    const s = Object.assign(
                            Object.assign({}, X.statusItemDefaults),
                            t
                        ),
                        { align: n, item: i, rank: a } = s,
                        r = () => {
                            this._refreshItem(e);
                        };
                    s.activeStateChanged && s.activeStateChanged.connect(r);
                    const o = { id: e, rank: a };
                    if (
                        (s.item.addClass(k),
                        (this._statusItems[e] = s),
                        'left' === n)
                    ) {
                        const e = this._findInsertIndex(this._leftRankItems, o);
                        -1 === e
                            ? (this._leftSide.addWidget(i),
                              this._leftRankItems.push(o))
                            : (Z.ArrayExt.insert(this._leftRankItems, e, o),
                              this._leftSide.insertWidget(e, i));
                    } else if ('right' === n) {
                        const e = this._findInsertIndex(
                            this._rightRankItems,
                            o
                        );
                        -1 === e
                            ? (this._rightSide.addWidget(i),
                              this._rightRankItems.push(o))
                            : (Z.ArrayExt.insert(this._rightRankItems, e, o),
                              this._rightSide.insertWidget(e, i));
                    } else this._middlePanel.addWidget(i);
                    this._refreshItem(e);
                    const l = new ee.DisposableDelegate(() => {
                        delete this._statusItems[e],
                            s.activeStateChanged &&
                                s.activeStateChanged.disconnect(r),
                            (i.parent = null),
                            i.dispose();
                    });
                    return this._disposables.add(l), l;
                }
                dispose() {
                    (this._leftRankItems.length = 0),
                        (this._rightRankItems.length = 0),
                        this._disposables.dispose(),
                        super.dispose();
                }
                onUpdateRequest(e) {
                    this._refreshAll(), super.onUpdateRequest(e);
                }
                _findInsertIndex(e, t) {
                    return Z.ArrayExt.findFirstIndex(e, e => e.rank > t.rank);
                }
                _refreshItem(e) {
                    const t = this._statusItems[e];
                    t.isActive()
                        ? (t.item.show(), t.item.update())
                        : t.item.hide();
                }
                _refreshAll() {
                    Object.keys(this._statusItems).forEach(e => {
                        this._refreshItem(e);
                    });
                }
            }
            !(function(e) {
                e.statusItemDefaults = {
                    align: 'left',
                    rank: 0,
                    isActive: () => !0,
                    activeStateChanged: void 0,
                };
            })(X || (X = {}));
            const se = new A.Token('@jupyterlab/statusbar:IStatusBar');
        },
    },
]);
//# sourceMappingURL=5573.63b8954.js.map
