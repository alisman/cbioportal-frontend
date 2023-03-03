'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [8061],
    {
        38061: (e, t, n) => {
            n.r(t), n.d(t, { CommandRegistry: () => m });
            var i,
                r = n(43892),
                o = n(26169),
                a = n(21743),
                s = n(33349),
                c = n(46831),
                d = n(32798),
                l = function() {
                    return (
                        (l =
                            Object.assign ||
                            function(e) {
                                for (
                                    var t, n = 1, i = arguments.length;
                                    n < i;
                                    n++
                                )
                                    for (var r in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            r
                                        ) && (e[r] = t[r]);
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                },
                m = (function() {
                    function e() {
                        (this._timerID = 0),
                            (this._replaying = !1),
                            (this._keystrokes = []),
                            (this._keydownEvents = []),
                            (this._keyBindings = []),
                            (this._exactKeyMatch = null),
                            (this._commands = Object.create(null)),
                            (this._commandChanged = new d.Signal(this)),
                            (this._commandExecuted = new d.Signal(this)),
                            (this._keyBindingChanged = new d.Signal(this));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'commandChanged', {
                            get: function() {
                                return this._commandChanged;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'commandExecuted', {
                            get: function() {
                                return this._commandExecuted;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(
                            e.prototype,
                            'keyBindingChanged',
                            {
                                get: function() {
                                    return this._keyBindingChanged;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }
                        ),
                        Object.defineProperty(e.prototype, 'keyBindings', {
                            get: function() {
                                return this._keyBindings;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.listCommands = function() {
                            return Object.keys(this._commands);
                        }),
                        (e.prototype.hasCommand = function(e) {
                            return e in this._commands;
                        }),
                        (e.prototype.addCommand = function(e, t) {
                            var n = this;
                            if (e in this._commands)
                                throw new Error(
                                    "Command '" + e + "' already registered."
                                );
                            return (
                                (this._commands[e] = i.createCommand(t)),
                                this._commandChanged.emit({
                                    id: e,
                                    type: 'added',
                                }),
                                new a.DisposableDelegate(function() {
                                    delete n._commands[e],
                                        n._commandChanged.emit({
                                            id: e,
                                            type: 'removed',
                                        });
                                })
                            );
                        }),
                        (e.prototype.notifyCommandChanged = function(e) {
                            if (void 0 !== e && !(e in this._commands))
                                throw new Error(
                                    "Command '" + e + "' is not registered."
                                );
                            this._commandChanged.emit({
                                id: e,
                                type: e ? 'changed' : 'many-changed',
                            });
                        }),
                        (e.prototype.describedBy = function(e) {
                            var t = this._commands[e];
                            return (t && t.describedBy) || { args: null };
                        }),
                        (e.prototype.label = function(e, t) {
                            void 0 === t && (t = o.JSONExt.emptyObject);
                            var n = this._commands[e];
                            return n ? n.label.call(void 0, t) : '';
                        }),
                        (e.prototype.mnemonic = function(e, t) {
                            void 0 === t && (t = o.JSONExt.emptyObject);
                            var n = this._commands[e];
                            return n ? n.mnemonic.call(void 0, t) : -1;
                        }),
                        (e.prototype.icon = function(e, t) {
                            void 0 === t && (t = o.JSONExt.emptyObject);
                            var n = this._commands[e];
                            return n ? n.icon.call(void 0, t) : '';
                        }),
                        (e.prototype.iconClass = function(e, t) {
                            void 0 === t && (t = o.JSONExt.emptyObject);
                            var n = this._commands[e];
                            return n ? n.iconClass.call(void 0, t) : '';
                        }),
                        (e.prototype.iconLabel = function(e, t) {
                            void 0 === t && (t = o.JSONExt.emptyObject);
                            var n = this._commands[e];
                            return n ? n.iconLabel.call(void 0, t) : '';
                        }),
                        (e.prototype.caption = function(e, t) {
                            void 0 === t && (t = o.JSONExt.emptyObject);
                            var n = this._commands[e];
                            return n ? n.caption.call(void 0, t) : '';
                        }),
                        (e.prototype.usage = function(e, t) {
                            void 0 === t && (t = o.JSONExt.emptyObject);
                            var n = this._commands[e];
                            return n ? n.usage.call(void 0, t) : '';
                        }),
                        (e.prototype.className = function(e, t) {
                            void 0 === t && (t = o.JSONExt.emptyObject);
                            var n = this._commands[e];
                            return n ? n.className.call(void 0, t) : '';
                        }),
                        (e.prototype.dataset = function(e, t) {
                            void 0 === t && (t = o.JSONExt.emptyObject);
                            var n = this._commands[e];
                            return n ? n.dataset.call(void 0, t) : {};
                        }),
                        (e.prototype.isEnabled = function(e, t) {
                            void 0 === t && (t = o.JSONExt.emptyObject);
                            var n = this._commands[e];
                            return !!n && n.isEnabled.call(void 0, t);
                        }),
                        (e.prototype.isToggled = function(e, t) {
                            void 0 === t && (t = o.JSONExt.emptyObject);
                            var n = this._commands[e];
                            return !!n && n.isToggled.call(void 0, t);
                        }),
                        (e.prototype.isToggleable = function(e, t) {
                            var n = this._commands[e];
                            return !!n && n.isToggleable;
                        }),
                        (e.prototype.isVisible = function(e, t) {
                            void 0 === t && (t = o.JSONExt.emptyObject);
                            var n = this._commands[e];
                            return !!n && n.isVisible.call(void 0, t);
                        }),
                        (e.prototype.execute = function(e, t) {
                            void 0 === t && (t = o.JSONExt.emptyObject);
                            var n,
                                i = this._commands[e];
                            if (!i)
                                return Promise.reject(
                                    new Error(
                                        "Command '" + e + "' not registered."
                                    )
                                );
                            try {
                                n = i.execute.call(void 0, t);
                            } catch (e) {
                                n = Promise.reject(e);
                            }
                            var r = Promise.resolve(n);
                            return (
                                this._commandExecuted.emit({
                                    id: e,
                                    args: t,
                                    result: r,
                                }),
                                r
                            );
                        }),
                        (e.prototype.addKeyBinding = function(e) {
                            var t = this,
                                n = i.createKeyBinding(e);
                            return (
                                this._keyBindings.push(n),
                                this._keyBindingChanged.emit({
                                    binding: n,
                                    type: 'added',
                                }),
                                new a.DisposableDelegate(function() {
                                    r.ArrayExt.removeFirstOf(t._keyBindings, n),
                                        t._keyBindingChanged.emit({
                                            binding: n,
                                            type: 'removed',
                                        });
                                })
                            );
                        }),
                        (e.prototype.processKeydownEvent = function(t) {
                            if (
                                !this._replaying &&
                                !e.isModifierKeyPressed(t)
                            ) {
                                var n = e.keystrokeForKeydownEvent(t);
                                if (!n)
                                    return (
                                        this._replayKeydownEvents(),
                                        void this._clearPendingState()
                                    );
                                this._keystrokes.push(n);
                                var r = i.matchKeyBinding(
                                        this._keyBindings,
                                        this._keystrokes,
                                        t
                                    ),
                                    o = r.exact,
                                    a = r.partial;
                                if (!o && !a)
                                    return (
                                        this._replayKeydownEvents(),
                                        void this._clearPendingState()
                                    );
                                if (
                                    (t.preventDefault(),
                                    t.stopPropagation(),
                                    o && !a)
                                )
                                    return (
                                        this._executeKeyBinding(o),
                                        void this._clearPendingState()
                                    );
                                o && (this._exactKeyMatch = o),
                                    this._keydownEvents.push(t),
                                    this._startTimer();
                            }
                        }),
                        (e.prototype._startTimer = function() {
                            var e = this;
                            this._clearTimer(),
                                (this._timerID = window.setTimeout(function() {
                                    e._onPendingTimeout();
                                }, i.CHORD_TIMEOUT));
                        }),
                        (e.prototype._clearTimer = function() {
                            0 !== this._timerID &&
                                (clearTimeout(this._timerID),
                                (this._timerID = 0));
                        }),
                        (e.prototype._replayKeydownEvents = function() {
                            0 !== this._keydownEvents.length &&
                                ((this._replaying = !0),
                                this._keydownEvents.forEach(i.replayKeyEvent),
                                (this._replaying = !1));
                        }),
                        (e.prototype._executeKeyBinding = function(e) {
                            var t = e.command,
                                n = e.args;
                            if (this.hasCommand(t) && this.isEnabled(t, n))
                                this.execute(t, n);
                            else {
                                var i = this.hasCommand(t)
                                        ? 'enabled'
                                        : 'registered',
                                    r =
                                        "Cannot execute key binding '" +
                                        e.keys.join(', ') +
                                        "':",
                                    o = "command '" + t + "' is not " + i + '.';
                                console.warn(r + ' ' + o);
                            }
                        }),
                        (e.prototype._clearPendingState = function() {
                            this._clearTimer(),
                                (this._exactKeyMatch = null),
                                (this._keystrokes.length = 0),
                                (this._keydownEvents.length = 0);
                        }),
                        (e.prototype._onPendingTimeout = function() {
                            (this._timerID = 0),
                                this._exactKeyMatch
                                    ? this._executeKeyBinding(
                                          this._exactKeyMatch
                                      )
                                    : this._replayKeydownEvents(),
                                this._clearPendingState();
                        }),
                        e
                    );
                })();
            !(function(e) {
                function t(e) {
                    for (
                        var t = '',
                            n = !1,
                            i = !1,
                            r = !1,
                            o = !1,
                            a = 0,
                            c = e.split(/\s+/);
                        a < c.length;
                        a++
                    ) {
                        var d = c[a];
                        'Accel' === d
                            ? s.Platform.IS_MAC
                                ? (i = !0)
                                : (r = !0)
                            : 'Alt' === d
                            ? (n = !0)
                            : 'Cmd' === d
                            ? (i = !0)
                            : 'Ctrl' === d
                            ? (r = !0)
                            : 'Shift' === d
                            ? (o = !0)
                            : d.length > 0 && (t = d);
                    }
                    return { cmd: i, ctrl: r, alt: n, shift: o, key: t };
                }
                function n(e) {
                    var n = '',
                        i = t(e);
                    return (
                        i.ctrl && (n += 'Ctrl '),
                        i.alt && (n += 'Alt '),
                        i.shift && (n += 'Shift '),
                        i.cmd && s.Platform.IS_MAC && (n += 'Cmd '),
                        n + i.key
                    );
                }
                (e.parseKeystroke = t),
                    (e.normalizeKeystroke = n),
                    (e.normalizeKeys = function(e) {
                        return (s.Platform.IS_WIN
                            ? e.winKeys || e.keys
                            : s.Platform.IS_MAC
                            ? e.macKeys || e.keys
                            : e.linuxKeys || e.keys
                        ).map(n);
                    }),
                    (e.formatKeystroke = function(e) {
                        return 'string' == typeof e
                            ? n(e)
                            : e.map(n).join(', ');
                        function n(e) {
                            var n = [],
                                r = s.Platform.IS_MAC ? ' ' : '+',
                                o = t(e);
                            return (
                                o.ctrl && n.push('Ctrl'),
                                o.alt && n.push('Alt'),
                                o.shift && n.push('Shift'),
                                s.Platform.IS_MAC && o.cmd && n.push('Cmd'),
                                n.push(o.key),
                                n.map(i.formatKey).join(r)
                            );
                        }
                    }),
                    (e.isModifierKeyPressed = function(e) {
                        var t = (0, c.getKeyboardLayout)(),
                            n = t.keyForKeydownEvent(e);
                        return t.isModifierKey(n);
                    }),
                    (e.keystrokeForKeydownEvent = function(e) {
                        var t = (0, c.getKeyboardLayout)(),
                            n = t.keyForKeydownEvent(e);
                        if (!n || t.isModifierKey(n)) return '';
                        var i = [];
                        return (
                            e.ctrlKey && i.push('Ctrl'),
                            e.altKey && i.push('Alt'),
                            e.shiftKey && i.push('Shift'),
                            e.metaKey && s.Platform.IS_MAC && i.push('Cmd'),
                            i.push(n),
                            i.join(' ')
                        );
                    });
            })(m || (m = {})),
                (function(e) {
                    (e.CHORD_TIMEOUT = 1e3),
                        (e.createCommand = function(e) {
                            var t, n;
                            return (
                                e.icon && 'string' != typeof e.icon
                                    ? ((n = y(e.iconClass, i)),
                                      (t = y(e.icon, u)))
                                    : (t = n = y(e.iconClass || e.icon, i)),
                                {
                                    execute: e.execute,
                                    describedBy: l(
                                        { args: null },
                                        e.describedBy
                                    ),
                                    label: y(e.label, i),
                                    mnemonic: y(e.mnemonic, r),
                                    icon: t,
                                    iconClass: n,
                                    iconLabel: y(e.iconLabel, i),
                                    caption: y(e.caption, i),
                                    usage: y(e.usage, i),
                                    className: y(e.className, i),
                                    dataset: y(e.dataset, d),
                                    isEnabled: e.isEnabled || a,
                                    isToggled: e.isToggled || c,
                                    isToggleable:
                                        e.isToggleable || !!e.isToggled,
                                    isVisible: e.isVisible || a,
                                }
                            );
                        }),
                        (e.createKeyBinding = function(e) {
                            return {
                                keys: m.normalizeKeys(e),
                                selector: h(e),
                                command: e.command,
                                args: e.args || o.JSONExt.emptyObject,
                            };
                        }),
                        (e.matchKeyBinding = function(e, t, n) {
                            for (
                                var i = null,
                                    r = !1,
                                    o = 1 / 0,
                                    a = 0,
                                    c = 0,
                                    d = e.length;
                                c < d;
                                ++c
                            ) {
                                var l = e[c],
                                    m = p(l.keys, t);
                                if (0 !== m)
                                    if (2 !== m) {
                                        var u = f(l.selector, n);
                                        if (!(-1 === u || u > o)) {
                                            var y = s.Selector.calculateSpecificity(
                                                l.selector
                                            );
                                            (!i || u < o || y >= a) &&
                                                ((i = l), (o = u), (a = y));
                                        }
                                    } else
                                        r ||
                                            -1 === f(l.selector, n) ||
                                            (r = !0);
                            }
                            return { exact: i, partial: r };
                        }),
                        (e.replayKeyEvent = function(e) {
                            e.target.dispatchEvent(
                                (function(e) {
                                    var t = document.createEvent('Event'),
                                        n = e.bubbles || !0,
                                        i = e.cancelable || !0;
                                    return (
                                        t.initEvent(e.type || 'keydown', n, i),
                                        (t.key = e.key || ''),
                                        (t.keyCode = e.keyCode || 0),
                                        (t.which = e.keyCode || 0),
                                        (t.ctrlKey = e.ctrlKey || !1),
                                        (t.altKey = e.altKey || !1),
                                        (t.shiftKey = e.shiftKey || !1),
                                        (t.metaKey = e.metaKey || !1),
                                        (t.view = e.view || window),
                                        t
                                    );
                                })(e)
                            );
                        }),
                        (e.formatKey = function(e) {
                            return s.Platform.IS_MAC
                                ? t.hasOwnProperty(e)
                                    ? t[e]
                                    : e
                                : n.hasOwnProperty(e)
                                ? n[e]
                                : e;
                        });
                    var t = {
                            Backspace: '⌫',
                            Tab: '⇥',
                            Enter: '↩',
                            Shift: '⇧',
                            Ctrl: '⌃',
                            Alt: '⌥',
                            Escape: '⎋',
                            PageUp: '⇞',
                            PageDown: '⇟',
                            End: '↘',
                            Home: '↖',
                            ArrowLeft: '←',
                            ArrowUp: '↑',
                            ArrowRight: '→',
                            ArrowDown: '↓',
                            Delete: '⌦',
                            Cmd: '⌘',
                        },
                        n = {
                            Escape: 'Esc',
                            PageUp: 'Page Up',
                            PageDown: 'Page Down',
                            ArrowLeft: 'Left',
                            ArrowUp: 'Up',
                            ArrowRight: 'Right',
                            ArrowDown: 'Down',
                            Delete: 'Del',
                        },
                        i = function() {
                            return '';
                        },
                        r = function() {
                            return -1;
                        },
                        a = function() {
                            return !0;
                        },
                        c = function() {
                            return !1;
                        },
                        d = function() {
                            return {};
                        },
                        u = function() {};
                    function y(e, t) {
                        return void 0 === e
                            ? t
                            : 'function' == typeof e
                            ? e
                            : function() {
                                  return e;
                              };
                    }
                    function h(e) {
                        if (-1 !== e.selector.indexOf(','))
                            throw new Error(
                                'Selector cannot contain commas: ' + e.selector
                            );
                        if (!s.Selector.isValid(e.selector))
                            throw new Error('Invalid selector: ' + e.selector);
                        return e.selector;
                    }
                    function p(e, t) {
                        if (e.length < t.length) return 0;
                        for (var n = 0, i = t.length; n < i; ++n)
                            if (e[n] !== t[n]) return 0;
                        return e.length > t.length ? 2 : 1;
                    }
                    function f(e, t) {
                        for (
                            var n = t.target, i = t.currentTarget, r = 0;
                            null !== n;
                            n = n.parentElement, ++r
                        ) {
                            if (n.hasAttribute('data-lm-suppress-shortcuts'))
                                return -1;
                            if (n.hasAttribute('data-p-suppress-shortcuts'))
                                return -1;
                            if (s.Selector.matches(n, e)) return r;
                            if (n === i) return -1;
                        }
                        return -1;
                    }
                })(i || (i = {}));
        },
    },
]);
//# sourceMappingURL=8061.d54e614.js.map
