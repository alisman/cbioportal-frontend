'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [5666],
    {
        75666: (e, t, i) => {
            i.r(t),
                i.d(t, {
                    AccordionLayout: () => P,
                    AccordionPanel: () => R,
                    BoxEngine: () => g,
                    BoxLayout: () => H,
                    BoxPanel: () => j,
                    BoxSizer: () => b,
                    CommandPalette: () => F,
                    ContextMenu: () => X,
                    DockLayout: () => Q,
                    DockPanel: () => $,
                    FocusTracker: () => te,
                    GridLayout: () => ie,
                    Layout: () => x,
                    LayoutItem: () => C,
                    Menu: () => V,
                    MenuBar: () => oe,
                    Panel: () => B,
                    PanelLayout: () => E,
                    ScrollBar: () => se,
                    SingletonLayout: () => de,
                    SplitLayout: () => z,
                    SplitPanel: () => O,
                    StackedLayout: () => he,
                    StackedPanel: () => ce,
                    TabBar: () => G,
                    TabPanel: () => ue,
                    Title: () => _,
                    Widget: () => M,
                });
            var n = i(43892),
                o = i(33349),
                r = i(14064),
                s = i(89116),
                a = i(32798),
                d = i(18418),
                h = i(26169),
                c = i(90375),
                l = i(93383),
                u = i(21743),
                p = i(46831),
                m = function(e, t) {
                    return (
                        (m =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function(e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function(e, t) {
                                for (var i in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        i
                                    ) && (e[i] = t[i]);
                            }),
                        m(e, t)
                    );
                };
            function f(e, t) {
                if ('function' != typeof t && null !== t)
                    throw new TypeError(
                        'Class extends value ' +
                            String(t) +
                            ' is not a constructor or null'
                    );
                function i() {
                    this.constructor = e;
                }
                m(e, t),
                    (e.prototype =
                        null === t
                            ? Object.create(t)
                            : ((i.prototype = t.prototype), new i()));
            }
            var g,
                v = function() {
                    return (
                        (v =
                            Object.assign ||
                            function(e) {
                                for (
                                    var t, i = 1, n = arguments.length;
                                    i < n;
                                    i++
                                )
                                    for (var o in (t = arguments[i]))
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            o
                                        ) && (e[o] = t[o]);
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                },
                b = function() {
                    (this.sizeHint = 0),
                        (this.minSize = 0),
                        (this.maxSize = 1 / 0),
                        (this.stretch = 1),
                        (this.size = 0),
                        (this.done = !1);
                };
            !(function(e) {
                (e.calc = function(e, t) {
                    var i = e.length;
                    if (0 === i) return t;
                    for (
                        var n = 0, o = 0, r = 0, s = 0, a = 0, d = 0;
                        d < i;
                        ++d
                    ) {
                        var h = (b = e[d]).minSize,
                            c = b.maxSize,
                            l = b.sizeHint;
                        (b.done = !1),
                            (b.size = Math.max(h, Math.min(l, c))),
                            (r += b.size),
                            (n += h),
                            (o += c),
                            b.stretch > 0 && ((s += b.stretch), a++);
                    }
                    if (t === r) return 0;
                    if (t <= n) {
                        for (d = 0; d < i; ++d) (b = e[d]).size = b.minSize;
                        return t - n;
                    }
                    if (t >= o) {
                        for (d = 0; d < i; ++d) (b = e[d]).size = b.maxSize;
                        return t - o;
                    }
                    var u = 0.01,
                        p = i;
                    if (t < r) {
                        for (var m = r - t; a > 0 && m > u; ) {
                            var f = m,
                                g = s;
                            for (d = 0; d < i; ++d)
                                if (!(b = e[d]).done && 0 !== b.stretch) {
                                    var v = (b.stretch * f) / g;
                                    b.size - v <= b.minSize
                                        ? ((m -= b.size - b.minSize),
                                          (s -= b.stretch),
                                          (b.size = b.minSize),
                                          (b.done = !0),
                                          p--,
                                          a--)
                                        : ((m -= v), (b.size -= v));
                                }
                        }
                        for (; p > 0 && m > u; )
                            for (v = m / p, d = 0; d < i; ++d)
                                (b = e[d]).done ||
                                    (b.size - v <= b.minSize
                                        ? ((m -= b.size - b.minSize),
                                          (b.size = b.minSize),
                                          (b.done = !0),
                                          p--)
                                        : ((m -= v), (b.size -= v)));
                    } else {
                        for (m = t - r; a > 0 && m > u; )
                            for (f = m, g = s, d = 0; d < i; ++d)
                                (b = e[d]).done ||
                                    0 === b.stretch ||
                                    ((v = (b.stretch * f) / g),
                                    b.size + v >= b.maxSize
                                        ? ((m -= b.maxSize - b.size),
                                          (s -= b.stretch),
                                          (b.size = b.maxSize),
                                          (b.done = !0),
                                          p--,
                                          a--)
                                        : ((m -= v), (b.size += v)));
                        for (; p > 0 && m > u; )
                            for (v = m / p, d = 0; d < i; ++d) {
                                var b;
                                (b = e[d]).done ||
                                    (b.size + v >= b.maxSize
                                        ? ((m -= b.maxSize - b.size),
                                          (b.size = b.maxSize),
                                          (b.done = !0),
                                          p--)
                                        : ((m -= v), (b.size += v)));
                            }
                    }
                    return 0;
                }),
                    (e.adjust = function(e, t, i) {
                        0 !== e.length &&
                            0 !== i &&
                            (i > 0
                                ? (function(e, t, i) {
                                      for (var n = 0, o = 0; o <= t; ++o)
                                          n += (h = e[o]).maxSize - h.size;
                                      for (
                                          var r = 0,
                                              s = ((o = t + 1), e.length);
                                          o < s;
                                          ++o
                                      )
                                          r += (h = e[o]).size - h.minSize;
                                      var a = (i = Math.min(i, n, r));
                                      for (o = t; o >= 0 && a > 0; --o)
                                          (c = (h = e[o]).maxSize - h.size) >= a
                                              ? ((h.sizeHint = h.size + a),
                                                (a = 0))
                                              : ((h.sizeHint = h.size + c),
                                                (a -= c));
                                      var d = i;
                                      for (
                                          o = t + 1, s = e.length;
                                          o < s && d > 0;
                                          ++o
                                      ) {
                                          var h, c;
                                          (c = (h = e[o]).size - h.minSize) >= d
                                              ? ((h.sizeHint = h.size - d),
                                                (d = 0))
                                              : ((h.sizeHint = h.size - c),
                                                (d -= c));
                                      }
                                  })(e, t, i)
                                : (function(e, t, i) {
                                      for (
                                          var n = 0, o = t + 1, r = e.length;
                                          o < r;
                                          ++o
                                      )
                                          n += (h = e[o]).maxSize - h.size;
                                      var s = 0;
                                      for (o = 0; o <= t; ++o)
                                          s += (h = e[o]).size - h.minSize;
                                      var a = (i = Math.min(i, n, s));
                                      for (
                                          o = t + 1, r = e.length;
                                          o < r && a > 0;
                                          ++o
                                      )
                                          (c = (h = e[o]).maxSize - h.size) >= a
                                              ? ((h.sizeHint = h.size + a),
                                                (a = 0))
                                              : ((h.sizeHint = h.size + c),
                                                (a -= c));
                                      var d = i;
                                      for (o = t; o >= 0 && d > 0; --o) {
                                          var h, c;
                                          (c = (h = e[o]).size - h.minSize) >= d
                                              ? ((h.sizeHint = h.size - d),
                                                (d = 0))
                                              : ((h.sizeHint = h.size - c),
                                                (d -= c));
                                      }
                                  })(e, t, -i));
                    });
            })(g || (g = {}));
            var y,
                _ = (function() {
                    function e(e) {
                        (this._label = ''),
                            (this._caption = ''),
                            (this._mnemonic = -1),
                            (this._iconClass = ''),
                            (this._iconLabel = ''),
                            (this._className = ''),
                            (this._closable = !1),
                            (this._changed = new a.Signal(this)),
                            (this._isDisposed = !1),
                            (this.owner = e.owner),
                            void 0 !== e.label && (this._label = e.label),
                            void 0 !== e.mnemonic &&
                                (this._mnemonic = e.mnemonic),
                            void 0 !== e.icon
                                ? 'string' == typeof e.icon
                                    ? ((this._icon = null),
                                      (this._iconClass = e.icon))
                                    : (this._icon = e.icon)
                                : (this._icon = null),
                            void 0 !== e.iconClass &&
                                (this._iconClass = e.iconClass),
                            void 0 !== e.iconLabel &&
                                (this._iconLabel = e.iconLabel),
                            void 0 !== e.iconRenderer &&
                                (this._icon = e.iconRenderer),
                            void 0 !== e.caption && (this._caption = e.caption),
                            void 0 !== e.className &&
                                (this._className = e.className),
                            void 0 !== e.closable &&
                                (this._closable = e.closable),
                            (this._dataset = e.dataset || {});
                    }
                    return (
                        Object.defineProperty(e.prototype, 'changed', {
                            get: function() {
                                return this._changed;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'label', {
                            get: function() {
                                return this._label;
                            },
                            set: function(e) {
                                this._label !== e &&
                                    ((this._label = e),
                                    this._changed.emit(void 0));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'mnemonic', {
                            get: function() {
                                return this._mnemonic;
                            },
                            set: function(e) {
                                this._mnemonic !== e &&
                                    ((this._mnemonic = e),
                                    this._changed.emit(void 0));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'icon', {
                            get: function() {
                                return null === this._icon
                                    ? this.iconClass
                                    : this._icon;
                            },
                            set: function(e) {
                                if ('string' == typeof e)
                                    (this._icon = null), (this.iconClass = e);
                                else {
                                    if (this._icon === e) return;
                                    (this._icon = e),
                                        this._changed.emit(void 0);
                                }
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'iconClass', {
                            get: function() {
                                return this._iconClass;
                            },
                            set: function(e) {
                                this._iconClass !== e &&
                                    ((this._iconClass = e),
                                    this._changed.emit(void 0));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'iconLabel', {
                            get: function() {
                                return this._iconLabel;
                            },
                            set: function(e) {
                                this._iconLabel !== e &&
                                    ((this._iconLabel = e),
                                    this._changed.emit(void 0));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'iconRenderer', {
                            get: function() {
                                return this._icon || void 0;
                            },
                            set: function(e) {
                                this.icon = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'caption', {
                            get: function() {
                                return this._caption;
                            },
                            set: function(e) {
                                this._caption !== e &&
                                    ((this._caption = e),
                                    this._changed.emit(void 0));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'className', {
                            get: function() {
                                return this._className;
                            },
                            set: function(e) {
                                this._className !== e &&
                                    ((this._className = e),
                                    this._changed.emit(void 0));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'closable', {
                            get: function() {
                                return this._closable;
                            },
                            set: function(e) {
                                this._closable !== e &&
                                    ((this._closable = e),
                                    this._changed.emit(void 0));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'dataset', {
                            get: function() {
                                return this._dataset;
                            },
                            set: function(e) {
                                this._dataset !== e &&
                                    ((this._dataset = e),
                                    this._changed.emit(void 0));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'isDisposed', {
                            get: function() {
                                return this._isDisposed;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.dispose = function() {
                            this.isDisposed ||
                                ((this._isDisposed = !0),
                                a.Signal.clearData(this));
                        }),
                        e
                    );
                })(),
                M = (function() {
                    function e(t) {
                        void 0 === t && (t = {}),
                            (this._flags = 0),
                            (this._layout = null),
                            (this._parent = null),
                            (this._disposed = new a.Signal(this)),
                            (this._hiddenMode = e.HiddenMode.Display),
                            (this.node = y.createNode(t)),
                            this.addClass('lm-Widget'),
                            this.addClass('p-Widget');
                    }
                    return (
                        (e.prototype.dispose = function() {
                            this.isDisposed ||
                                (this.setFlag(e.Flag.IsDisposed),
                                this._disposed.emit(void 0),
                                this.parent
                                    ? (this.parent = null)
                                    : this.isAttached && e.detach(this),
                                this._layout &&
                                    (this._layout.dispose(),
                                    (this._layout = null)),
                                this.title.dispose(),
                                a.Signal.clearData(this),
                                r.MessageLoop.clearData(this),
                                s.AttachedProperty.clearData(this));
                        }),
                        Object.defineProperty(e.prototype, 'disposed', {
                            get: function() {
                                return this._disposed;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'isDisposed', {
                            get: function() {
                                return this.testFlag(e.Flag.IsDisposed);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'isAttached', {
                            get: function() {
                                return this.testFlag(e.Flag.IsAttached);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'isHidden', {
                            get: function() {
                                return this.testFlag(e.Flag.IsHidden);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'isVisible', {
                            get: function() {
                                return this.testFlag(e.Flag.IsVisible);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'title', {
                            get: function() {
                                return y.titleProperty.get(this);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'id', {
                            get: function() {
                                return this.node.id;
                            },
                            set: function(e) {
                                this.node.id = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'dataset', {
                            get: function() {
                                return this.node.dataset;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'hiddenMode', {
                            get: function() {
                                return this._hiddenMode;
                            },
                            set: function(t) {
                                if (this._hiddenMode !== t) {
                                    switch (((this._hiddenMode = t), t)) {
                                        case e.HiddenMode.Display:
                                            this.node.style.willChange = 'auto';
                                            break;
                                        case e.HiddenMode.Scale:
                                            this.node.style.willChange =
                                                'transform';
                                    }
                                    this.isHidden &&
                                        (t === e.HiddenMode.Display
                                            ? (this.addClass('lm-mod-hidden'),
                                              this.addClass('p-mod-hidden'),
                                              (this.node.style.transform = ''))
                                            : ((this.node.style.transform =
                                                  'scale(0)'),
                                              this.removeClass('lm-mod-hidden'),
                                              this.removeClass(
                                                  'p-mod-hidden'
                                              )));
                                }
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'parent', {
                            get: function() {
                                return this._parent;
                            },
                            set: function(t) {
                                if (this._parent !== t) {
                                    if (t && this.contains(t))
                                        throw new Error(
                                            'Invalid parent widget.'
                                        );
                                    if (
                                        this._parent &&
                                        !this._parent.isDisposed
                                    ) {
                                        var i = new e.ChildMessage(
                                            'child-removed',
                                            this
                                        );
                                        r.MessageLoop.sendMessage(
                                            this._parent,
                                            i
                                        );
                                    }
                                    (this._parent = t),
                                        this._parent &&
                                            !this._parent.isDisposed &&
                                            ((i = new e.ChildMessage(
                                                'child-added',
                                                this
                                            )),
                                            r.MessageLoop.sendMessage(
                                                this._parent,
                                                i
                                            )),
                                        this.isDisposed ||
                                            r.MessageLoop.sendMessage(
                                                this,
                                                e.Msg.ParentChanged
                                            );
                                }
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'layout', {
                            get: function() {
                                return this._layout;
                            },
                            set: function(t) {
                                if (this._layout !== t) {
                                    if (this.testFlag(e.Flag.DisallowLayout))
                                        throw new Error(
                                            'Cannot set widget layout.'
                                        );
                                    if (this._layout)
                                        throw new Error(
                                            'Cannot change widget layout.'
                                        );
                                    if (t.parent)
                                        throw new Error(
                                            'Cannot change layout parent.'
                                        );
                                    (this._layout = t), (t.parent = this);
                                }
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.children = function() {
                            return this._layout
                                ? this._layout.iter()
                                : (0, n.empty)();
                        }),
                        (e.prototype.contains = function(e) {
                            for (var t = e; t; t = t._parent)
                                if (t === this) return !0;
                            return !1;
                        }),
                        (e.prototype.hasClass = function(e) {
                            return this.node.classList.contains(e);
                        }),
                        (e.prototype.addClass = function(e) {
                            this.node.classList.add(e);
                        }),
                        (e.prototype.removeClass = function(e) {
                            this.node.classList.remove(e);
                        }),
                        (e.prototype.toggleClass = function(e, t) {
                            return !0 === t
                                ? (this.node.classList.add(e), !0)
                                : !1 === t
                                ? (this.node.classList.remove(e), !1)
                                : this.node.classList.toggle(e);
                        }),
                        (e.prototype.update = function() {
                            r.MessageLoop.postMessage(
                                this,
                                e.Msg.UpdateRequest
                            );
                        }),
                        (e.prototype.fit = function() {
                            r.MessageLoop.postMessage(this, e.Msg.FitRequest);
                        }),
                        (e.prototype.activate = function() {
                            r.MessageLoop.postMessage(
                                this,
                                e.Msg.ActivateRequest
                            );
                        }),
                        (e.prototype.close = function() {
                            r.MessageLoop.sendMessage(this, e.Msg.CloseRequest);
                        }),
                        (e.prototype.show = function() {
                            if (
                                this.testFlag(e.Flag.IsHidden) &&
                                (!this.isAttached ||
                                    (this.parent && !this.parent.isVisible) ||
                                    r.MessageLoop.sendMessage(
                                        this,
                                        e.Msg.BeforeShow
                                    ),
                                this.clearFlag(e.Flag.IsHidden),
                                this.node.removeAttribute('aria-hidden'),
                                this.hiddenMode === e.HiddenMode.Display
                                    ? (this.removeClass('lm-mod-hidden'),
                                      this.removeClass('p-mod-hidden'))
                                    : (this.node.style.transform = ''),
                                !this.isAttached ||
                                    (this.parent && !this.parent.isVisible) ||
                                    r.MessageLoop.sendMessage(
                                        this,
                                        e.Msg.AfterShow
                                    ),
                                this.parent)
                            ) {
                                var t = new e.ChildMessage('child-shown', this);
                                r.MessageLoop.sendMessage(this.parent, t);
                            }
                        }),
                        (e.prototype.hide = function() {
                            if (
                                !this.testFlag(e.Flag.IsHidden) &&
                                (!this.isAttached ||
                                    (this.parent && !this.parent.isVisible) ||
                                    r.MessageLoop.sendMessage(
                                        this,
                                        e.Msg.BeforeHide
                                    ),
                                this.setFlag(e.Flag.IsHidden),
                                this.node.setAttribute('aria-hidden', 'true'),
                                this.hiddenMode === e.HiddenMode.Display
                                    ? (this.addClass('lm-mod-hidden'),
                                      this.addClass('p-mod-hidden'))
                                    : (this.node.style.transform = 'scale(0)'),
                                !this.isAttached ||
                                    (this.parent && !this.parent.isVisible) ||
                                    r.MessageLoop.sendMessage(
                                        this,
                                        e.Msg.AfterHide
                                    ),
                                this.parent)
                            ) {
                                var t = new e.ChildMessage(
                                    'child-hidden',
                                    this
                                );
                                r.MessageLoop.sendMessage(this.parent, t);
                            }
                        }),
                        (e.prototype.setHidden = function(e) {
                            e ? this.hide() : this.show();
                        }),
                        (e.prototype.testFlag = function(e) {
                            return 0 != (this._flags & e);
                        }),
                        (e.prototype.setFlag = function(e) {
                            this._flags |= e;
                        }),
                        (e.prototype.clearFlag = function(e) {
                            this._flags &= ~e;
                        }),
                        (e.prototype.processMessage = function(t) {
                            switch (t.type) {
                                case 'resize':
                                    this.notifyLayout(t), this.onResize(t);
                                    break;
                                case 'update-request':
                                    this.notifyLayout(t),
                                        this.onUpdateRequest(t);
                                    break;
                                case 'fit-request':
                                    this.notifyLayout(t), this.onFitRequest(t);
                                    break;
                                case 'before-show':
                                    this.notifyLayout(t), this.onBeforeShow(t);
                                    break;
                                case 'after-show':
                                    this.setFlag(e.Flag.IsVisible),
                                        this.notifyLayout(t),
                                        this.onAfterShow(t);
                                    break;
                                case 'before-hide':
                                    this.notifyLayout(t), this.onBeforeHide(t);
                                    break;
                                case 'after-hide':
                                    this.clearFlag(e.Flag.IsVisible),
                                        this.notifyLayout(t),
                                        this.onAfterHide(t);
                                    break;
                                case 'before-attach':
                                    this.notifyLayout(t),
                                        this.onBeforeAttach(t);
                                    break;
                                case 'after-attach':
                                    this.isHidden ||
                                        (this.parent &&
                                            !this.parent.isVisible) ||
                                        this.setFlag(e.Flag.IsVisible),
                                        this.setFlag(e.Flag.IsAttached),
                                        this.notifyLayout(t),
                                        this.onAfterAttach(t);
                                    break;
                                case 'before-detach':
                                    this.notifyLayout(t),
                                        this.onBeforeDetach(t);
                                    break;
                                case 'after-detach':
                                    this.clearFlag(e.Flag.IsVisible),
                                        this.clearFlag(e.Flag.IsAttached),
                                        this.notifyLayout(t),
                                        this.onAfterDetach(t);
                                    break;
                                case 'activate-request':
                                    this.notifyLayout(t),
                                        this.onActivateRequest(t);
                                    break;
                                case 'close-request':
                                    this.notifyLayout(t),
                                        this.onCloseRequest(t);
                                    break;
                                case 'child-added':
                                    this.notifyLayout(t), this.onChildAdded(t);
                                    break;
                                case 'child-removed':
                                    this.notifyLayout(t),
                                        this.onChildRemoved(t);
                                    break;
                                default:
                                    this.notifyLayout(t);
                            }
                        }),
                        (e.prototype.notifyLayout = function(e) {
                            this._layout &&
                                this._layout.processParentMessage(e);
                        }),
                        (e.prototype.onCloseRequest = function(t) {
                            this.parent
                                ? (this.parent = null)
                                : this.isAttached && e.detach(this);
                        }),
                        (e.prototype.onResize = function(e) {}),
                        (e.prototype.onUpdateRequest = function(e) {}),
                        (e.prototype.onFitRequest = function(e) {}),
                        (e.prototype.onActivateRequest = function(e) {}),
                        (e.prototype.onBeforeShow = function(e) {}),
                        (e.prototype.onAfterShow = function(e) {}),
                        (e.prototype.onBeforeHide = function(e) {}),
                        (e.prototype.onAfterHide = function(e) {}),
                        (e.prototype.onBeforeAttach = function(e) {}),
                        (e.prototype.onAfterAttach = function(e) {}),
                        (e.prototype.onBeforeDetach = function(e) {}),
                        (e.prototype.onAfterDetach = function(e) {}),
                        (e.prototype.onChildAdded = function(e) {}),
                        (e.prototype.onChildRemoved = function(e) {}),
                        e
                    );
                })();
            !(function(e) {
                var t, i, n;
                ((t = e.HiddenMode || (e.HiddenMode = {}))[(t.Display = 0)] =
                    'Display'),
                    (t[(t.Scale = 1)] = 'Scale'),
                    ((i = e.Flag || (e.Flag = {}))[(i.IsDisposed = 1)] =
                        'IsDisposed'),
                    (i[(i.IsAttached = 2)] = 'IsAttached'),
                    (i[(i.IsHidden = 4)] = 'IsHidden'),
                    (i[(i.IsVisible = 8)] = 'IsVisible'),
                    (i[(i.DisallowLayout = 16)] = 'DisallowLayout'),
                    ((n = e.Msg || (e.Msg = {})).BeforeShow = new r.Message(
                        'before-show'
                    )),
                    (n.AfterShow = new r.Message('after-show')),
                    (n.BeforeHide = new r.Message('before-hide')),
                    (n.AfterHide = new r.Message('after-hide')),
                    (n.BeforeAttach = new r.Message('before-attach')),
                    (n.AfterAttach = new r.Message('after-attach')),
                    (n.BeforeDetach = new r.Message('before-detach')),
                    (n.AfterDetach = new r.Message('after-detach')),
                    (n.ParentChanged = new r.Message('parent-changed')),
                    (n.UpdateRequest = new r.ConflatableMessage(
                        'update-request'
                    )),
                    (n.FitRequest = new r.ConflatableMessage('fit-request')),
                    (n.ActivateRequest = new r.ConflatableMessage(
                        'activate-request'
                    )),
                    (n.CloseRequest = new r.ConflatableMessage(
                        'close-request'
                    ));
                var o = (function(e) {
                    function t(t, i) {
                        var n = e.call(this, t) || this;
                        return (n.child = i), n;
                    }
                    return f(t, e), t;
                })(r.Message);
                e.ChildMessage = o;
                var s = (function(e) {
                    function t(t, i) {
                        var n = e.call(this, 'resize') || this;
                        return (n.width = t), (n.height = i), n;
                    }
                    return f(t, e), t;
                })(r.Message);
                (e.ResizeMessage = s),
                    (function(e) {
                        e.UnknownSize = new e(-1, -1);
                    })((s = e.ResizeMessage || (e.ResizeMessage = {}))),
                    (e.attach = function(t, i, n) {
                        if ((void 0 === n && (n = null), t.parent))
                            throw new Error('Cannot attach a child widget.');
                        if (t.isAttached || t.node.isConnected)
                            throw new Error('Widget is already attached.');
                        if (!i.isConnected)
                            throw new Error('Host is not attached.');
                        r.MessageLoop.sendMessage(t, e.Msg.BeforeAttach),
                            i.insertBefore(t.node, n),
                            r.MessageLoop.sendMessage(t, e.Msg.AfterAttach);
                    }),
                    (e.detach = function(t) {
                        if (t.parent)
                            throw new Error('Cannot detach a child widget.');
                        if (!t.isAttached || !t.node.isConnected)
                            throw new Error('Widget is not attached.');
                        r.MessageLoop.sendMessage(t, e.Msg.BeforeDetach),
                            t.node.parentNode.removeChild(t.node),
                            r.MessageLoop.sendMessage(t, e.Msg.AfterDetach);
                    });
            })(M || (M = {})),
                (function(e) {
                    (e.titleProperty = new s.AttachedProperty({
                        name: 'title',
                        create: function(e) {
                            return new _({ owner: e });
                        },
                    })),
                        (e.createNode = function(e) {
                            return (
                                e.node || document.createElement(e.tag || 'div')
                            );
                        });
                })(y || (y = {}));
            var x = (function() {
                function e(e) {
                    void 0 === e && (e = {}),
                        (this._disposed = !1),
                        (this._parent = null),
                        (this._fitPolicy = e.fitPolicy || 'set-min-size');
                }
                return (
                    (e.prototype.dispose = function() {
                        (this._parent = null),
                            (this._disposed = !0),
                            a.Signal.clearData(this),
                            s.AttachedProperty.clearData(this);
                    }),
                    Object.defineProperty(e.prototype, 'isDisposed', {
                        get: function() {
                            return this._disposed;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, 'parent', {
                        get: function() {
                            return this._parent;
                        },
                        set: function(e) {
                            if (this._parent !== e) {
                                if (this._parent)
                                    throw new Error(
                                        'Cannot change parent widget.'
                                    );
                                if (e.layout !== this)
                                    throw new Error('Invalid parent widget.');
                                (this._parent = e), this.init();
                            }
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, 'fitPolicy', {
                        get: function() {
                            return this._fitPolicy;
                        },
                        set: function(e) {
                            if (
                                this._fitPolicy !== e &&
                                ((this._fitPolicy = e), this._parent)
                            ) {
                                var t = this._parent.node.style;
                                (t.minWidth = ''),
                                    (t.minHeight = ''),
                                    (t.maxWidth = ''),
                                    (t.maxHeight = ''),
                                    this._parent.fit();
                            }
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.processParentMessage = function(e) {
                        switch (e.type) {
                            case 'resize':
                                this.onResize(e);
                                break;
                            case 'update-request':
                                this.onUpdateRequest(e);
                                break;
                            case 'fit-request':
                                this.onFitRequest(e);
                                break;
                            case 'before-show':
                                this.onBeforeShow(e);
                                break;
                            case 'after-show':
                                this.onAfterShow(e);
                                break;
                            case 'before-hide':
                                this.onBeforeHide(e);
                                break;
                            case 'after-hide':
                                this.onAfterHide(e);
                                break;
                            case 'before-attach':
                                this.onBeforeAttach(e);
                                break;
                            case 'after-attach':
                                this.onAfterAttach(e);
                                break;
                            case 'before-detach':
                                this.onBeforeDetach(e);
                                break;
                            case 'after-detach':
                                this.onAfterDetach(e);
                                break;
                            case 'child-removed':
                                this.onChildRemoved(e);
                                break;
                            case 'child-shown':
                                this.onChildShown(e);
                                break;
                            case 'child-hidden':
                                this.onChildHidden(e);
                        }
                    }),
                    (e.prototype.init = function() {
                        var e = this;
                        (0, n.each)(this, function(t) {
                            t.parent = e.parent;
                        });
                    }),
                    (e.prototype.onResize = function(e) {
                        (0, n.each)(this, function(e) {
                            r.MessageLoop.sendMessage(
                                e,
                                M.ResizeMessage.UnknownSize
                            );
                        });
                    }),
                    (e.prototype.onUpdateRequest = function(e) {
                        (0, n.each)(this, function(e) {
                            r.MessageLoop.sendMessage(
                                e,
                                M.ResizeMessage.UnknownSize
                            );
                        });
                    }),
                    (e.prototype.onBeforeAttach = function(e) {
                        (0, n.each)(this, function(t) {
                            r.MessageLoop.sendMessage(t, e);
                        });
                    }),
                    (e.prototype.onAfterAttach = function(e) {
                        (0, n.each)(this, function(t) {
                            r.MessageLoop.sendMessage(t, e);
                        });
                    }),
                    (e.prototype.onBeforeDetach = function(e) {
                        (0, n.each)(this, function(t) {
                            r.MessageLoop.sendMessage(t, e);
                        });
                    }),
                    (e.prototype.onAfterDetach = function(e) {
                        (0, n.each)(this, function(t) {
                            r.MessageLoop.sendMessage(t, e);
                        });
                    }),
                    (e.prototype.onBeforeShow = function(e) {
                        (0, n.each)(this, function(t) {
                            t.isHidden || r.MessageLoop.sendMessage(t, e);
                        });
                    }),
                    (e.prototype.onAfterShow = function(e) {
                        (0, n.each)(this, function(t) {
                            t.isHidden || r.MessageLoop.sendMessage(t, e);
                        });
                    }),
                    (e.prototype.onBeforeHide = function(e) {
                        (0, n.each)(this, function(t) {
                            t.isHidden || r.MessageLoop.sendMessage(t, e);
                        });
                    }),
                    (e.prototype.onAfterHide = function(e) {
                        (0, n.each)(this, function(t) {
                            t.isHidden || r.MessageLoop.sendMessage(t, e);
                        });
                    }),
                    (e.prototype.onChildRemoved = function(e) {
                        this.removeWidget(e.child);
                    }),
                    (e.prototype.onFitRequest = function(e) {}),
                    (e.prototype.onChildShown = function(e) {}),
                    (e.prototype.onChildHidden = function(e) {}),
                    e
                );
            })();
            !(function(e) {
                (e.getHorizontalAlignment = function(e) {
                    return w.horizontalAlignmentProperty.get(e);
                }),
                    (e.setHorizontalAlignment = function(e, t) {
                        w.horizontalAlignmentProperty.set(e, t);
                    }),
                    (e.getVerticalAlignment = function(e) {
                        return w.verticalAlignmentProperty.get(e);
                    }),
                    (e.setVerticalAlignment = function(e, t) {
                        w.verticalAlignmentProperty.set(e, t);
                    });
            })(x || (x = {}));
            var w,
                C = (function() {
                    function e(e) {
                        (this._top = NaN),
                            (this._left = NaN),
                            (this._width = NaN),
                            (this._height = NaN),
                            (this._minWidth = 0),
                            (this._minHeight = 0),
                            (this._maxWidth = 1 / 0),
                            (this._maxHeight = 1 / 0),
                            (this._disposed = !1),
                            (this.widget = e),
                            (this.widget.node.style.position = 'absolute');
                    }
                    return (
                        (e.prototype.dispose = function() {
                            if (!this._disposed) {
                                this._disposed = !0;
                                var e = this.widget.node.style;
                                (e.position = ''),
                                    (e.top = ''),
                                    (e.left = ''),
                                    (e.width = ''),
                                    (e.height = '');
                            }
                        }),
                        Object.defineProperty(e.prototype, 'minWidth', {
                            get: function() {
                                return this._minWidth;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'minHeight', {
                            get: function() {
                                return this._minHeight;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'maxWidth', {
                            get: function() {
                                return this._maxWidth;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'maxHeight', {
                            get: function() {
                                return this._maxHeight;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'isDisposed', {
                            get: function() {
                                return this._disposed;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'isHidden', {
                            get: function() {
                                return this.widget.isHidden;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'isVisible', {
                            get: function() {
                                return this.widget.isVisible;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'isAttached', {
                            get: function() {
                                return this.widget.isAttached;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.fit = function() {
                            var e = o.ElementExt.sizeLimits(this.widget.node);
                            (this._minWidth = e.minWidth),
                                (this._minHeight = e.minHeight),
                                (this._maxWidth = e.maxWidth),
                                (this._maxHeight = e.maxHeight);
                        }),
                        (e.prototype.update = function(e, t, i, n) {
                            var o = Math.max(
                                    this._minWidth,
                                    Math.min(i, this._maxWidth)
                                ),
                                s = Math.max(
                                    this._minHeight,
                                    Math.min(n, this._maxHeight)
                                );
                            if (o < i)
                                switch (x.getHorizontalAlignment(this.widget)) {
                                    case 'left':
                                        break;
                                    case 'center':
                                        e += (i - o) / 2;
                                        break;
                                    case 'right':
                                        e += i - o;
                                        break;
                                    default:
                                        throw 'unreachable';
                                }
                            if (s < n)
                                switch (x.getVerticalAlignment(this.widget)) {
                                    case 'top':
                                        break;
                                    case 'center':
                                        t += (n - s) / 2;
                                        break;
                                    case 'bottom':
                                        t += n - s;
                                        break;
                                    default:
                                        throw 'unreachable';
                                }
                            var a = !1,
                                d = this.widget.node.style;
                            if (
                                (this._top !== t &&
                                    ((this._top = t), (d.top = t + 'px')),
                                this._left !== e &&
                                    ((this._left = e), (d.left = e + 'px')),
                                this._width !== o &&
                                    ((a = !0),
                                    (this._width = o),
                                    (d.width = o + 'px')),
                                this._height !== s &&
                                    ((a = !0),
                                    (this._height = s),
                                    (d.height = s + 'px')),
                                a)
                            ) {
                                var h = new M.ResizeMessage(o, s);
                                r.MessageLoop.sendMessage(this.widget, h);
                            }
                        }),
                        e
                    );
                })();
            !(function(e) {
                function t(e) {
                    e.parent && e.parent.layout && e.parent.update();
                }
                (e.horizontalAlignmentProperty = new s.AttachedProperty({
                    name: 'horizontalAlignment',
                    create: function() {
                        return 'center';
                    },
                    changed: t,
                })),
                    (e.verticalAlignmentProperty = new s.AttachedProperty({
                        name: 'verticalAlignment',
                        create: function() {
                            return 'top';
                        },
                        changed: t,
                    }));
            })(w || (w = {}));
            var L,
                E = (function(e) {
                    function t() {
                        var t =
                            (null !== e && e.apply(this, arguments)) || this;
                        return (t._widgets = []), t;
                    }
                    return (
                        f(t, e),
                        (t.prototype.dispose = function() {
                            for (; this._widgets.length > 0; )
                                this._widgets.pop().dispose();
                            e.prototype.dispose.call(this);
                        }),
                        Object.defineProperty(t.prototype, 'widgets', {
                            get: function() {
                                return this._widgets;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.iter = function() {
                            return (0, n.iter)(this._widgets);
                        }),
                        (t.prototype.addWidget = function(e) {
                            this.insertWidget(this._widgets.length, e);
                        }),
                        (t.prototype.insertWidget = function(e, t) {
                            t.parent = this.parent;
                            var i = this._widgets.indexOf(t),
                                o = Math.max(
                                    0,
                                    Math.min(e, this._widgets.length)
                                );
                            if (-1 === i)
                                return (
                                    n.ArrayExt.insert(this._widgets, o, t),
                                    void (
                                        this.parent && this.attachWidget(o, t)
                                    )
                                );
                            o === this._widgets.length && o--,
                                i !== o &&
                                    (n.ArrayExt.move(this._widgets, i, o),
                                    this.parent && this.moveWidget(i, o, t));
                        }),
                        (t.prototype.removeWidget = function(e) {
                            this.removeWidgetAt(this._widgets.indexOf(e));
                        }),
                        (t.prototype.removeWidgetAt = function(e) {
                            var t = n.ArrayExt.removeAt(this._widgets, e);
                            t && this.parent && this.detachWidget(e, t);
                        }),
                        (t.prototype.init = function() {
                            var t = this;
                            e.prototype.init.call(this),
                                (0, n.each)(this, function(e, i) {
                                    t.attachWidget(i, e);
                                });
                        }),
                        (t.prototype.attachWidget = function(e, t) {
                            var i = this.parent.node.children[e];
                            this.parent.isAttached &&
                                r.MessageLoop.sendMessage(
                                    t,
                                    M.Msg.BeforeAttach
                                ),
                                this.parent.node.insertBefore(t.node, i),
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        t,
                                        M.Msg.AfterAttach
                                    );
                        }),
                        (t.prototype.moveWidget = function(e, t, i) {
                            this.parent.isAttached &&
                                r.MessageLoop.sendMessage(
                                    i,
                                    M.Msg.BeforeDetach
                                ),
                                this.parent.node.removeChild(i.node),
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        i,
                                        M.Msg.AfterDetach
                                    );
                            var n = this.parent.node.children[t];
                            this.parent.isAttached &&
                                r.MessageLoop.sendMessage(
                                    i,
                                    M.Msg.BeforeAttach
                                ),
                                this.parent.node.insertBefore(i.node, n),
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        i,
                                        M.Msg.AfterAttach
                                    );
                        }),
                        (t.prototype.detachWidget = function(e, t) {
                            this.parent.isAttached &&
                                r.MessageLoop.sendMessage(
                                    t,
                                    M.Msg.BeforeDetach
                                ),
                                this.parent.node.removeChild(t.node),
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        t,
                                        M.Msg.AfterDetach
                                    );
                        }),
                        t
                    );
                })(x);
            !(function(e) {
                e.clampDimension = function(e) {
                    return Math.max(0, Math.floor(e));
                };
            })(L || (L = {}));
            var A,
                S = L,
                z = (function(e) {
                    function t(t) {
                        var i = e.call(this) || this;
                        return (
                            (i.widgetOffset = 0),
                            (i._fixed = 0),
                            (i._spacing = 4),
                            (i._dirty = !1),
                            (i._hasNormedSizes = !1),
                            (i._sizers = []),
                            (i._items = []),
                            (i._handles = []),
                            (i._box = null),
                            (i._alignment = 'start'),
                            (i._orientation = 'horizontal'),
                            (i.renderer = t.renderer),
                            void 0 !== t.orientation &&
                                (i._orientation = t.orientation),
                            void 0 !== t.alignment &&
                                (i._alignment = t.alignment),
                            void 0 !== t.spacing &&
                                (i._spacing = L.clampDimension(t.spacing)),
                            i
                        );
                    }
                    return (
                        f(t, e),
                        (t.prototype.dispose = function() {
                            (0, n.each)(this._items, function(e) {
                                e.dispose();
                            }),
                                (this._box = null),
                                (this._items.length = 0),
                                (this._sizers.length = 0),
                                (this._handles.length = 0),
                                e.prototype.dispose.call(this);
                        }),
                        Object.defineProperty(t.prototype, 'orientation', {
                            get: function() {
                                return this._orientation;
                            },
                            set: function(e) {
                                this._orientation !== e &&
                                    ((this._orientation = e),
                                    this.parent &&
                                        ((this.parent.dataset.orientation = e),
                                        this.parent.fit()));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'alignment', {
                            get: function() {
                                return this._alignment;
                            },
                            set: function(e) {
                                this._alignment !== e &&
                                    ((this._alignment = e),
                                    this.parent &&
                                        ((this.parent.dataset.alignment = e),
                                        this.parent.update()));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'spacing', {
                            get: function() {
                                return this._spacing;
                            },
                            set: function(e) {
                                (e = L.clampDimension(e)),
                                    this._spacing !== e &&
                                        ((this._spacing = e),
                                        this.parent && this.parent.fit());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'handles', {
                            get: function() {
                                return this._handles;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.absoluteSizes = function() {
                            return this._sizers.map(function(e) {
                                return e.size;
                            });
                        }),
                        (t.prototype.relativeSizes = function() {
                            return A.normalize(
                                this._sizers.map(function(e) {
                                    return e.size;
                                })
                            );
                        }),
                        (t.prototype.setRelativeSizes = function(e, t) {
                            void 0 === t && (t = !0);
                            for (
                                var i = this._sizers.length, n = e.slice(0, i);
                                n.length < i;

                            )
                                n.push(0);
                            for (var o = A.normalize(n), r = 0; r < i; ++r) {
                                var s = this._sizers[r];
                                (s.sizeHint = o[r]), (s.size = o[r]);
                            }
                            (this._hasNormedSizes = !0),
                                t && this.parent && this.parent.update();
                        }),
                        (t.prototype.moveHandle = function(e, t) {
                            var i,
                                n = this._handles[e];
                            if (
                                n &&
                                !n.classList.contains('lm-mod-hidden') &&
                                0 !=
                                    (i =
                                        'horizontal' === this._orientation
                                            ? t - n.offsetLeft
                                            : t - n.offsetTop)
                            ) {
                                for (
                                    var o = 0, r = this._sizers;
                                    o < r.length;
                                    o++
                                ) {
                                    var s = r[o];
                                    s.size > 0 && (s.sizeHint = s.size);
                                }
                                g.adjust(this._sizers, e, i),
                                    this.parent && this.parent.update();
                            }
                        }),
                        (t.prototype.init = function() {
                            (this.parent.dataset.orientation = this.orientation),
                                (this.parent.dataset.alignment = this.alignment),
                                e.prototype.init.call(this);
                        }),
                        (t.prototype.attachWidget = function(e, t) {
                            var i = new C(t),
                                o = A.createHandle(this.renderer),
                                s = A.averageSize(this._sizers),
                                a = A.createSizer(s);
                            n.ArrayExt.insert(this._items, e, i),
                                n.ArrayExt.insert(this._sizers, e, a),
                                n.ArrayExt.insert(this._handles, e, o),
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        t,
                                        M.Msg.BeforeAttach
                                    ),
                                this.parent.node.appendChild(t.node),
                                this.parent.node.appendChild(o),
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        t,
                                        M.Msg.AfterAttach
                                    ),
                                this.parent.fit();
                        }),
                        (t.prototype.moveWidget = function(e, t, i) {
                            n.ArrayExt.move(this._items, e, t),
                                n.ArrayExt.move(this._sizers, e, t),
                                n.ArrayExt.move(this._handles, e, t),
                                this.parent.fit();
                        }),
                        (t.prototype.detachWidget = function(e, t) {
                            var i = n.ArrayExt.removeAt(this._items, e),
                                o = n.ArrayExt.removeAt(this._handles, e);
                            n.ArrayExt.removeAt(this._sizers, e),
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        t,
                                        M.Msg.BeforeDetach
                                    ),
                                this.parent.node.removeChild(t.node),
                                this.parent.node.removeChild(o),
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        t,
                                        M.Msg.AfterDetach
                                    ),
                                i.dispose(),
                                this.parent.fit();
                        }),
                        (t.prototype.onBeforeShow = function(t) {
                            e.prototype.onBeforeShow.call(this, t),
                                this.parent.update();
                        }),
                        (t.prototype.onBeforeAttach = function(t) {
                            e.prototype.onBeforeAttach.call(this, t),
                                this.parent.fit();
                        }),
                        (t.prototype.onChildShown = function(e) {
                            this.parent.fit();
                        }),
                        (t.prototype.onChildHidden = function(e) {
                            this.parent.fit();
                        }),
                        (t.prototype.onResize = function(e) {
                            this.parent.isVisible &&
                                this._update(e.width, e.height);
                        }),
                        (t.prototype.onUpdateRequest = function(e) {
                            this.parent.isVisible && this._update(-1, -1);
                        }),
                        (t.prototype.onFitRequest = function(e) {
                            this.parent.isAttached && this._fit();
                        }),
                        (t.prototype.updateItemPosition = function(
                            e,
                            t,
                            i,
                            n,
                            o,
                            r,
                            s
                        ) {
                            var a = this._items[e];
                            if (!a.isHidden) {
                                var d = this._handles[e].style;
                                t
                                    ? ((i += this.widgetOffset),
                                      a.update(i, n, s, o),
                                      (i += s),
                                      (d.top = n + 'px'),
                                      (d.left = i + 'px'),
                                      (d.width = this._spacing + 'px'),
                                      (d.height = o + 'px'))
                                    : ((n += this.widgetOffset),
                                      a.update(i, n, r, s),
                                      (n += s),
                                      (d.top = n + 'px'),
                                      (d.left = i + 'px'),
                                      (d.width = r + 'px'),
                                      (d.height = this._spacing + 'px'));
                            }
                        }),
                        (t.prototype._fit = function() {
                            for (
                                var e = 0,
                                    i = -1,
                                    n = 0,
                                    s = this._items.length;
                                n < s;
                                ++n
                            )
                                this._items[n].isHidden
                                    ? (this._handles[n].classList.add(
                                          'lm-mod-hidden'
                                      ),
                                      this._handles[n].classList.add(
                                          'p-mod-hidden'
                                      ))
                                    : (this._handles[n].classList.remove(
                                          'lm-mod-hidden'
                                      ),
                                      this._handles[n].classList.remove(
                                          'p-mod-hidden'
                                      ),
                                      (i = n),
                                      e++);
                            -1 !== i &&
                                (this._handles[i].classList.add(
                                    'lm-mod-hidden'
                                ),
                                this._handles[i].classList.add('p-mod-hidden')),
                                (this._fixed =
                                    this._spacing * Math.max(0, e - 1) +
                                    this.widgetOffset * this._items.length);
                            var a = 'horizontal' === this._orientation,
                                d = a ? this._fixed : 0,
                                h = a ? 0 : this._fixed;
                            for (n = 0, s = this._items.length; n < s; ++n) {
                                var c = this._items[n],
                                    l = this._sizers[n];
                                l.size > 0 && (l.sizeHint = l.size),
                                    c.isHidden
                                        ? ((l.minSize = 0), (l.maxSize = 0))
                                        : (c.fit(),
                                          (l.stretch = t.getStretch(c.widget)),
                                          a
                                              ? ((l.minSize = c.minWidth),
                                                (l.maxSize = c.maxWidth),
                                                (d += c.minWidth),
                                                (h = Math.max(h, c.minHeight)))
                                              : ((l.minSize = c.minHeight),
                                                (l.maxSize = c.maxHeight),
                                                (h += c.minHeight),
                                                (d = Math.max(d, c.minWidth))));
                            }
                            var u = (this._box = o.ElementExt.boxSizing(
                                this.parent.node
                            ));
                            (d += u.horizontalSum), (h += u.verticalSum);
                            var p = this.parent.node.style;
                            (p.minWidth = d + 'px'),
                                (p.minHeight = h + 'px'),
                                (this._dirty = !0),
                                this.parent.parent &&
                                    r.MessageLoop.sendMessage(
                                        this.parent.parent,
                                        M.Msg.FitRequest
                                    ),
                                this._dirty &&
                                    r.MessageLoop.sendMessage(
                                        this.parent,
                                        M.Msg.UpdateRequest
                                    );
                        }),
                        (t.prototype._update = function(e, t) {
                            this._dirty = !1;
                            for (
                                var i = 0, n = 0, r = this._items.length;
                                n < r;
                                ++n
                            )
                                i += +!this._items[n].isHidden;
                            if (0 !== i || 0 !== this.widgetOffset) {
                                e < 0 && (e = this.parent.node.offsetWidth),
                                    t < 0 &&
                                        (t = this.parent.node.offsetHeight),
                                    this._box ||
                                        (this._box = o.ElementExt.boxSizing(
                                            this.parent.node
                                        ));
                                var s = this._box.paddingTop,
                                    a = this._box.paddingLeft,
                                    d = e - this._box.horizontalSum,
                                    h = t - this._box.verticalSum,
                                    c = 0,
                                    l = 0,
                                    u = 'horizontal' === this._orientation;
                                if (i > 0) {
                                    var p;
                                    if (
                                        ((p = u
                                            ? Math.max(0, d - this._fixed)
                                            : Math.max(0, h - this._fixed)),
                                        this._hasNormedSizes)
                                    ) {
                                        for (
                                            var m = 0, f = this._sizers;
                                            m < f.length;
                                            m++
                                        )
                                            f[m].sizeHint *= p;
                                        this._hasNormedSizes = !1;
                                    }
                                    var v = g.calc(this._sizers, p);
                                    if (v > 0)
                                        switch (this._alignment) {
                                            case 'start':
                                                break;
                                            case 'center':
                                                (c = 0), (l = v / 2);
                                                break;
                                            case 'end':
                                                (c = 0), (l = v);
                                                break;
                                            case 'justify':
                                                (c = v / i), (l = 0);
                                                break;
                                            default:
                                                throw 'unreachable';
                                        }
                                }
                                for (
                                    n = 0, r = this._items.length;
                                    n < r;
                                    ++n
                                ) {
                                    var b = this._items[n].isHidden
                                        ? 0
                                        : this._sizers[n].size + c;
                                    this.updateItemPosition(
                                        n,
                                        u,
                                        u ? a + l : a,
                                        u ? s : s + l,
                                        h,
                                        d,
                                        b
                                    );
                                    var y =
                                        this.widgetOffset +
                                        (this._handles[n].classList.contains(
                                            'lm-mod-hidden'
                                        )
                                            ? 0
                                            : this._spacing);
                                    u ? (a += b + y) : (s += b + y);
                                }
                            }
                        }),
                        t
                    );
                })(E);
            !(function(e) {
                (e.getStretch = function(e) {
                    return A.stretchProperty.get(e);
                }),
                    (e.setStretch = function(e, t) {
                        A.stretchProperty.set(e, t);
                    });
            })(z || (z = {})),
                (function(e) {
                    (e.stretchProperty = new s.AttachedProperty({
                        name: 'stretch',
                        create: function() {
                            return 0;
                        },
                        coerce: function(e, t) {
                            return Math.max(0, Math.floor(t));
                        },
                        changed: function(e) {
                            e.parent &&
                                e.parent.layout instanceof z &&
                                e.parent.fit();
                        },
                    })),
                        (e.createSizer = function(e) {
                            var t = new b();
                            return (t.sizeHint = Math.floor(e)), t;
                        }),
                        (e.createHandle = function(e) {
                            var t = e.createHandle();
                            return (t.style.position = 'absolute'), t;
                        }),
                        (e.averageSize = function(e) {
                            return (
                                e.reduce(function(e, t) {
                                    return e + t.size;
                                }, 0) / e.length || 0
                            );
                        }),
                        (e.normalize = function(e) {
                            var t = e.length;
                            if (0 === t) return [];
                            var i = e.reduce(function(e, t) {
                                return e + Math.abs(t);
                            }, 0);
                            return 0 === i
                                ? e.map(function(e) {
                                      return 1 / t;
                                  })
                                : e.map(function(e) {
                                      return e / i;
                                  });
                        });
                })(A || (A = {}));
            var I,
                P = (function(e) {
                    function t(t) {
                        var i =
                            e.call(
                                this,
                                v(v({}, t), {
                                    orientation: t.orientation || 'vertical',
                                })
                            ) || this;
                        return (
                            (i._titles = []),
                            (i.titleSpace = t.titleSpace || 22),
                            i
                        );
                    }
                    return (
                        f(t, e),
                        Object.defineProperty(t.prototype, 'titleSpace', {
                            get: function() {
                                return this.widgetOffset;
                            },
                            set: function(e) {
                                (e = S.clampDimension(e)),
                                    this.widgetOffset !== e &&
                                        ((this.widgetOffset = e),
                                        this.parent && this.parent.fit());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'titles', {
                            get: function() {
                                return this._titles;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.dispose = function() {
                            this.isDisposed ||
                                ((this._titles.length = 0),
                                e.prototype.dispose.call(this));
                        }),
                        (t.prototype.updateTitle = function(e, t) {
                            var i = this._titles[e],
                                n = i.classList.contains('lm-mod-expanded'),
                                o = I.createTitle(this.renderer, t.title, n);
                            (this._titles[e] = o),
                                this.parent.node.replaceChild(o, i);
                        }),
                        (t.prototype.attachWidget = function(t, i) {
                            var o = I.createTitle(this.renderer, i.title);
                            n.ArrayExt.insert(this._titles, t, o),
                                this.parent.node.appendChild(o),
                                i.node.setAttribute('role', 'region'),
                                i.node.setAttribute('aria-labelledby', o.id),
                                e.prototype.attachWidget.call(this, t, i);
                        }),
                        (t.prototype.moveWidget = function(t, i, o) {
                            n.ArrayExt.move(this._titles, t, i),
                                e.prototype.moveWidget.call(this, t, i, o);
                        }),
                        (t.prototype.detachWidget = function(t, i) {
                            var o = n.ArrayExt.removeAt(this._titles, t);
                            this.parent.node.removeChild(o),
                                e.prototype.detachWidget.call(this, t, i);
                        }),
                        (t.prototype.updateItemPosition = function(
                            t,
                            i,
                            n,
                            o,
                            r,
                            s,
                            a
                        ) {
                            var d = this._titles[t].style;
                            (d.top = o + 'px'),
                                (d.left = n + 'px'),
                                (d.height = this.widgetOffset + 'px'),
                                (d.width = i ? r + 'px' : s + 'px'),
                                e.prototype.updateItemPosition.call(
                                    this,
                                    t,
                                    i,
                                    n,
                                    o,
                                    r,
                                    s,
                                    a
                                );
                        }),
                        t
                    );
                })(z);
            !(function(e) {
                e.createTitle = function(e, t, i) {
                    void 0 === i && (i = !0);
                    var n = e.createSectionTitle(t);
                    return (
                        (n.style.position = 'absolute'),
                        n.setAttribute('aria-label', t.label + ' Section'),
                        n.setAttribute('aria-expanded', i ? 'true' : 'false'),
                        n.setAttribute('aria-controls', t.owner.id),
                        i && n.classList.add('lm-mod-expanded'),
                        n
                    );
                };
            })(I || (I = {}));
            var T,
                B = (function(e) {
                    function t(t) {
                        void 0 === t && (t = {});
                        var i = e.call(this) || this;
                        return (
                            i.addClass('lm-Panel'),
                            i.addClass('p-Panel'),
                            (i.layout = T.createLayout(t)),
                            i
                        );
                    }
                    return (
                        f(t, e),
                        Object.defineProperty(t.prototype, 'widgets', {
                            get: function() {
                                return this.layout.widgets;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.addWidget = function(e) {
                            this.layout.addWidget(e);
                        }),
                        (t.prototype.insertWidget = function(e, t) {
                            this.layout.insertWidget(e, t);
                        }),
                        t
                    );
                })(M);
            !(function(e) {
                e.createLayout = function(e) {
                    return e.layout || new E();
                };
            })(T || (T = {}));
            var D,
                O = (function(e) {
                    function t(t) {
                        void 0 === t && (t = {});
                        var i =
                            e.call(this, { layout: D.createLayout(t) }) || this;
                        return (
                            (i._handleMoved = new a.Signal(i)),
                            (i._pressData = null),
                            i.addClass('lm-SplitPanel'),
                            i.addClass('p-SplitPanel'),
                            i
                        );
                    }
                    return (
                        f(t, e),
                        (t.prototype.dispose = function() {
                            this._releaseMouse(),
                                e.prototype.dispose.call(this);
                        }),
                        Object.defineProperty(t.prototype, 'orientation', {
                            get: function() {
                                return this.layout.orientation;
                            },
                            set: function(e) {
                                this.layout.orientation = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'alignment', {
                            get: function() {
                                return this.layout.alignment;
                            },
                            set: function(e) {
                                this.layout.alignment = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'spacing', {
                            get: function() {
                                return this.layout.spacing;
                            },
                            set: function(e) {
                                this.layout.spacing = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'renderer', {
                            get: function() {
                                return this.layout.renderer;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'handleMoved', {
                            get: function() {
                                return this._handleMoved;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'handles', {
                            get: function() {
                                return this.layout.handles;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.relativeSizes = function() {
                            return this.layout.relativeSizes();
                        }),
                        (t.prototype.setRelativeSizes = function(e, t) {
                            void 0 === t && (t = !0),
                                this.layout.setRelativeSizes(e, t);
                        }),
                        (t.prototype.handleEvent = function(e) {
                            switch (e.type) {
                                case 'mousedown':
                                case 'pointerdown':
                                    this._evtMouseDown(e);
                                    break;
                                case 'mousemove':
                                case 'pointermove':
                                    this._evtMouseMove(e);
                                    break;
                                case 'mouseup':
                                case 'pointerup':
                                    this._evtMouseUp(e);
                                    break;
                                case 'keydown':
                                    this._evtKeyDown(e);
                                    break;
                                case 'contextmenu':
                                    e.preventDefault(), e.stopPropagation();
                            }
                        }),
                        (t.prototype.onBeforeAttach = function(e) {
                            this.node.addEventListener('mousedown', this),
                                this.node.addEventListener('pointerdown', this);
                        }),
                        (t.prototype.onAfterDetach = function(e) {
                            this.node.removeEventListener('mousedown', this),
                                this.node.removeEventListener(
                                    'pointerdown',
                                    this
                                ),
                                this._releaseMouse();
                        }),
                        (t.prototype.onChildAdded = function(e) {
                            e.child.addClass('lm-SplitPanel-child'),
                                e.child.addClass('p-SplitPanel-child'),
                                this._releaseMouse();
                        }),
                        (t.prototype.onChildRemoved = function(e) {
                            e.child.removeClass('lm-SplitPanel-child'),
                                e.child.removeClass('p-SplitPanel-child'),
                                this._releaseMouse();
                        }),
                        (t.prototype._evtKeyDown = function(e) {
                            this._pressData &&
                                (e.preventDefault(), e.stopPropagation()),
                                27 === e.keyCode && this._releaseMouse();
                        }),
                        (t.prototype._evtMouseDown = function(e) {
                            if (0 === e.button) {
                                var t = this.layout,
                                    i = n.ArrayExt.findFirstIndex(
                                        t.handles,
                                        function(t) {
                                            return t.contains(e.target);
                                        }
                                    );
                                if (-1 !== i) {
                                    var o;
                                    e.preventDefault(),
                                        e.stopPropagation(),
                                        document.addEventListener(
                                            'mouseup',
                                            this,
                                            !0
                                        ),
                                        document.addEventListener(
                                            'mousemove',
                                            this,
                                            !0
                                        ),
                                        document.addEventListener(
                                            'pointerup',
                                            this,
                                            !0
                                        ),
                                        document.addEventListener(
                                            'pointermove',
                                            this,
                                            !0
                                        ),
                                        document.addEventListener(
                                            'keydown',
                                            this,
                                            !0
                                        ),
                                        document.addEventListener(
                                            'contextmenu',
                                            this,
                                            !0
                                        );
                                    var r = t.handles[i],
                                        s = r.getBoundingClientRect();
                                    o =
                                        'horizontal' === t.orientation
                                            ? e.clientX - s.left
                                            : e.clientY - s.top;
                                    var a = window.getComputedStyle(r),
                                        h = d.Drag.overrideCursor(a.cursor);
                                    this._pressData = {
                                        index: i,
                                        delta: o,
                                        override: h,
                                    };
                                }
                            }
                        }),
                        (t.prototype._evtMouseMove = function(e) {
                            var t;
                            e.preventDefault(), e.stopPropagation();
                            var i = this.layout,
                                n = this.node.getBoundingClientRect();
                            (t =
                                'horizontal' === i.orientation
                                    ? e.clientX - n.left - this._pressData.delta
                                    : e.clientY -
                                      n.top -
                                      this._pressData.delta),
                                i.moveHandle(this._pressData.index, t);
                        }),
                        (t.prototype._evtMouseUp = function(e) {
                            0 === e.button &&
                                (e.preventDefault(),
                                e.stopPropagation(),
                                this._releaseMouse());
                        }),
                        (t.prototype._releaseMouse = function() {
                            this._pressData &&
                                (this._pressData.override.dispose(),
                                (this._pressData = null),
                                this._handleMoved.emit(),
                                document.removeEventListener(
                                    'mouseup',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'mousemove',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'keydown',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'pointerup',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'pointermove',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'contextmenu',
                                    this,
                                    !0
                                ));
                        }),
                        t
                    );
                })(B);
            !(function(e) {
                var t = (function() {
                    function e() {}
                    return (
                        (e.prototype.createHandle = function() {
                            var e = document.createElement('div');
                            return (
                                (e.className = 'lm-SplitPanel-handle'),
                                e.classList.add('p-SplitPanel-handle'),
                                e
                            );
                        }),
                        e
                    );
                })();
                (e.Renderer = t),
                    (e.defaultRenderer = new t()),
                    (e.getStretch = function(e) {
                        return z.getStretch(e);
                    }),
                    (e.setStretch = function(e, t) {
                        z.setStretch(e, t);
                    });
            })(O || (O = {})),
                (function(e) {
                    e.createLayout = function(e) {
                        return (
                            e.layout ||
                            new z({
                                renderer: e.renderer || O.defaultRenderer,
                                orientation: e.orientation,
                                alignment: e.alignment,
                                spacing: e.spacing,
                            })
                        );
                    };
                })(D || (D = {}));
            var k,
                R = (function(e) {
                    function t(t) {
                        void 0 === t && (t = {});
                        var i =
                            e.call(
                                this,
                                v(v({}, t), { layout: k.createLayout(t) })
                            ) || this;
                        return (
                            (i._widgetSizesCache = new WeakMap()),
                            i.addClass('lm-AccordionPanel'),
                            i
                        );
                    }
                    return (
                        f(t, e),
                        Object.defineProperty(t.prototype, 'renderer', {
                            get: function() {
                                return this.layout.renderer;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'titleSpace', {
                            get: function() {
                                return this.layout.titleSpace;
                            },
                            set: function(e) {
                                this.layout.titleSpace = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'titles', {
                            get: function() {
                                return this.layout.titles;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.addWidget = function(t) {
                            e.prototype.addWidget.call(this, t),
                                t.title.changed.connect(
                                    this._onTitleChanged,
                                    this
                                );
                        }),
                        (t.prototype.collapse = function(e) {
                            var t = this.layout.widgets[e];
                            t && !t.isHidden && this._toggleExpansion(e);
                        }),
                        (t.prototype.expand = function(e) {
                            var t = this.layout.widgets[e];
                            t && t.isHidden && this._toggleExpansion(e);
                        }),
                        (t.prototype.insertWidget = function(t, i) {
                            e.prototype.insertWidget.call(this, t, i),
                                i.title.changed.connect(
                                    this._onTitleChanged,
                                    this
                                );
                        }),
                        (t.prototype.handleEvent = function(t) {
                            switch (
                                (e.prototype.handleEvent.call(this, t), t.type)
                            ) {
                                case 'click':
                                    this._evtClick(t);
                                    break;
                                case 'keydown':
                                    this._eventKeyDown(t);
                            }
                        }),
                        (t.prototype.onBeforeAttach = function(t) {
                            this.node.addEventListener('click', this),
                                this.node.addEventListener('keydown', this),
                                e.prototype.onBeforeAttach.call(this, t);
                        }),
                        (t.prototype.onAfterDetach = function(t) {
                            e.prototype.onAfterDetach.call(this, t),
                                this.node.removeEventListener('click', this),
                                this.node.removeEventListener('keydown', this);
                        }),
                        (t.prototype._onTitleChanged = function(e) {
                            var t = n.ArrayExt.findFirstIndex(
                                this.widgets,
                                function(t) {
                                    return t.contains(e.owner);
                                }
                            );
                            t >= 0 &&
                                (this.layout.updateTitle(t, e.owner),
                                this.update());
                        }),
                        (t.prototype._computeWidgetSize = function(e) {
                            var t = this.layout,
                                i = t.widgets[e];
                            if (i) {
                                var n = i.isHidden,
                                    o = t.absoluteSizes(),
                                    r = (n ? -1 : 1) * this.spacing,
                                    s = o.reduce(function(e, t) {
                                        return e + t;
                                    }),
                                    a = (function() {
                                        for (
                                            var e = 0,
                                                t = 0,
                                                i = arguments.length;
                                            t < i;
                                            t++
                                        )
                                            e += arguments[t].length;
                                        var n = Array(e),
                                            o = 0;
                                        for (t = 0; t < i; t++)
                                            for (
                                                var r = arguments[t],
                                                    s = 0,
                                                    a = r.length;
                                                s < a;
                                                s++, o++
                                            )
                                                n[o] = r[s];
                                        return n;
                                    })(o);
                                if (n) {
                                    var d = this._widgetSizesCache.get(i);
                                    if (!d) return;
                                    (a[e] += d),
                                        -1 ===
                                        (h = a
                                            .map(function(e) {
                                                return e - d > 0;
                                            })
                                            .lastIndexOf(!0))
                                            ? a.forEach(function(t, i) {
                                                  i !== e &&
                                                      (a[i] -=
                                                          (o[i] / s) * (d - r));
                                              })
                                            : (a[h] -= d - r);
                                } else {
                                    var h,
                                        c = o[e];
                                    if (
                                        (this._widgetSizesCache.set(i, c),
                                        (a[e] = 0),
                                        -1 ===
                                            (h = a
                                                .map(function(e) {
                                                    return e > 0;
                                                })
                                                .lastIndexOf(!0)))
                                    )
                                        return;
                                    a[h] = o[h] + c + r;
                                }
                                return a.map(function(e) {
                                    return e / (s + r);
                                });
                            }
                        }),
                        (t.prototype._evtClick = function(e) {
                            var t = e.target;
                            if (t) {
                                var i = n.ArrayExt.findFirstIndex(
                                    this.titles,
                                    function(e) {
                                        return e.contains(t);
                                    }
                                );
                                i >= 0 &&
                                    (e.preventDefault(),
                                    e.stopPropagation(),
                                    this._toggleExpansion(i));
                            }
                        }),
                        (t.prototype._eventKeyDown = function(e) {
                            if (!e.defaultPrevented) {
                                var t = e.target,
                                    i = !1;
                                if (t) {
                                    var o = n.ArrayExt.findFirstIndex(
                                        this.titles,
                                        function(e) {
                                            return e.contains(t);
                                        }
                                    );
                                    if (o >= 0) {
                                        var r = e.keyCode.toString();
                                        if (
                                            e.key.match(/Space|Enter/) ||
                                            r.match(/13|32/)
                                        )
                                            t.click(), (i = !0);
                                        else if (
                                            'horizontal' === this.orientation
                                                ? e.key.match(
                                                      /ArrowLeft|ArrowRight/
                                                  ) || r.match(/37|39/)
                                                : e.key.match(
                                                      /ArrowUp|ArrowDown/
                                                  ) || r.match(/38|40/)
                                        ) {
                                            var s =
                                                    e.key.match(
                                                        /ArrowLeft|ArrowUp/
                                                    ) || r.match(/37|38/)
                                                        ? -1
                                                        : 1,
                                                a = this.titles.length,
                                                d = (o + a + s) % a;
                                            this.titles[d].focus(), (i = !0);
                                        } else
                                            'End' === e.key || '35' === r
                                                ? (this.titles[
                                                      this.titles.length - 1
                                                  ].focus(),
                                                  (i = !0))
                                                : ('Home' !== e.key &&
                                                      '36' !== r) ||
                                                  (this.titles[0].focus(),
                                                  (i = !0));
                                    }
                                    i && e.preventDefault();
                                }
                            }
                        }),
                        (t.prototype._toggleExpansion = function(e) {
                            var t = this.titles[e],
                                i = this.layout.widgets[e],
                                n = this._computeWidgetSize(e);
                            n && this.setRelativeSizes(n, !1),
                                i.isHidden
                                    ? (t.classList.add('lm-mod-expanded'),
                                      t.setAttribute('aria-expanded', 'true'),
                                      i.show())
                                    : (t.classList.remove('lm-mod-expanded'),
                                      t.setAttribute('aria-expanded', 'false'),
                                      i.hide());
                        }),
                        t
                    );
                })(O);
            !(function(e) {
                var t = (function(e) {
                    function t() {
                        var i = e.call(this) || this;
                        return (
                            (i.titleClassName = 'lm-AccordionPanel-title'),
                            (i._titleID = 0),
                            (i._titleKeys = new WeakMap()),
                            (i._uuid = ++t._nInstance),
                            i
                        );
                    }
                    return (
                        f(t, e),
                        (t.prototype.createCollapseIcon = function(e) {
                            return document.createElement('span');
                        }),
                        (t.prototype.createSectionTitle = function(e) {
                            var t = document.createElement('h3');
                            for (var i in (t.setAttribute('role', 'button'),
                            t.setAttribute('tabindex', '0'),
                            (t.id = this.createTitleKey(e)),
                            (t.className = this.titleClassName),
                            e.dataset))
                                t.dataset[i] = e.dataset[i];
                            t.appendChild(
                                this.createCollapseIcon(e)
                            ).className = 'lm-AccordionPanel-titleCollapser';
                            var n = t.appendChild(
                                document.createElement('span')
                            );
                            return (
                                (n.className = 'lm-AccordionPanel-titleLabel'),
                                (n.textContent = e.label),
                                (n.title = e.caption || e.label),
                                t
                            );
                        }),
                        (t.prototype.createTitleKey = function(e) {
                            var t = this._titleKeys.get(e);
                            return (
                                void 0 === t &&
                                    ((t =
                                        'title-key-' +
                                        this._uuid +
                                        '-' +
                                        this._titleID++),
                                    this._titleKeys.set(e, t)),
                                t
                            );
                        }),
                        (t._nInstance = 0),
                        t
                    );
                })(O.Renderer);
                (e.Renderer = t), (e.defaultRenderer = new t());
            })(R || (R = {})),
                (function(e) {
                    e.createLayout = function(e) {
                        return (
                            e.layout ||
                            new P({
                                renderer: e.renderer || R.defaultRenderer,
                                orientation: e.orientation,
                                alignment: e.alignment,
                                spacing: e.spacing,
                                titleSpace: e.titleSpace,
                            })
                        );
                    };
                })(k || (k = {}));
            var N,
                H = (function(e) {
                    function t(t) {
                        void 0 === t && (t = {});
                        var i = e.call(this) || this;
                        return (
                            (i._fixed = 0),
                            (i._spacing = 4),
                            (i._dirty = !1),
                            (i._sizers = []),
                            (i._items = []),
                            (i._box = null),
                            (i._alignment = 'start'),
                            (i._direction = 'top-to-bottom'),
                            void 0 !== t.direction &&
                                (i._direction = t.direction),
                            void 0 !== t.alignment &&
                                (i._alignment = t.alignment),
                            void 0 !== t.spacing &&
                                (i._spacing = S.clampDimension(t.spacing)),
                            i
                        );
                    }
                    return (
                        f(t, e),
                        (t.prototype.dispose = function() {
                            (0, n.each)(this._items, function(e) {
                                e.dispose();
                            }),
                                (this._box = null),
                                (this._items.length = 0),
                                (this._sizers.length = 0),
                                e.prototype.dispose.call(this);
                        }),
                        Object.defineProperty(t.prototype, 'direction', {
                            get: function() {
                                return this._direction;
                            },
                            set: function(e) {
                                this._direction !== e &&
                                    ((this._direction = e),
                                    this.parent &&
                                        ((this.parent.dataset.direction = e),
                                        this.parent.fit()));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'alignment', {
                            get: function() {
                                return this._alignment;
                            },
                            set: function(e) {
                                this._alignment !== e &&
                                    ((this._alignment = e),
                                    this.parent &&
                                        ((this.parent.dataset.alignment = e),
                                        this.parent.update()));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'spacing', {
                            get: function() {
                                return this._spacing;
                            },
                            set: function(e) {
                                (e = S.clampDimension(e)),
                                    this._spacing !== e &&
                                        ((this._spacing = e),
                                        this.parent && this.parent.fit());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.init = function() {
                            (this.parent.dataset.direction = this.direction),
                                (this.parent.dataset.alignment = this.alignment),
                                e.prototype.init.call(this);
                        }),
                        (t.prototype.attachWidget = function(e, t) {
                            n.ArrayExt.insert(this._items, e, new C(t)),
                                n.ArrayExt.insert(this._sizers, e, new b()),
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        t,
                                        M.Msg.BeforeAttach
                                    ),
                                this.parent.node.appendChild(t.node),
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        t,
                                        M.Msg.AfterAttach
                                    ),
                                this.parent.fit();
                        }),
                        (t.prototype.moveWidget = function(e, t, i) {
                            n.ArrayExt.move(this._items, e, t),
                                n.ArrayExt.move(this._sizers, e, t),
                                this.parent.update();
                        }),
                        (t.prototype.detachWidget = function(e, t) {
                            var i = n.ArrayExt.removeAt(this._items, e);
                            n.ArrayExt.removeAt(this._sizers, e),
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        t,
                                        M.Msg.BeforeDetach
                                    ),
                                this.parent.node.removeChild(t.node),
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        t,
                                        M.Msg.AfterDetach
                                    ),
                                i.dispose(),
                                this.parent.fit();
                        }),
                        (t.prototype.onBeforeShow = function(t) {
                            e.prototype.onBeforeShow.call(this, t),
                                this.parent.update();
                        }),
                        (t.prototype.onBeforeAttach = function(t) {
                            e.prototype.onBeforeAttach.call(this, t),
                                this.parent.fit();
                        }),
                        (t.prototype.onChildShown = function(e) {
                            this.parent.fit();
                        }),
                        (t.prototype.onChildHidden = function(e) {
                            this.parent.fit();
                        }),
                        (t.prototype.onResize = function(e) {
                            this.parent.isVisible &&
                                this._update(e.width, e.height);
                        }),
                        (t.prototype.onUpdateRequest = function(e) {
                            this.parent.isVisible && this._update(-1, -1);
                        }),
                        (t.prototype.onFitRequest = function(e) {
                            this.parent.isAttached && this._fit();
                        }),
                        (t.prototype._fit = function() {
                            for (
                                var e = 0, i = 0, n = this._items.length;
                                i < n;
                                ++i
                            )
                                e += +!this._items[i].isHidden;
                            this._fixed = this._spacing * Math.max(0, e - 1);
                            var s = N.isHorizontal(this._direction),
                                a = s ? this._fixed : 0,
                                d = s ? 0 : this._fixed;
                            for (i = 0, n = this._items.length; i < n; ++i) {
                                var h = this._items[i],
                                    c = this._sizers[i];
                                h.isHidden
                                    ? ((c.minSize = 0), (c.maxSize = 0))
                                    : (h.fit(),
                                      (c.sizeHint = t.getSizeBasis(h.widget)),
                                      (c.stretch = t.getStretch(h.widget)),
                                      s
                                          ? ((c.minSize = h.minWidth),
                                            (c.maxSize = h.maxWidth),
                                            (a += h.minWidth),
                                            (d = Math.max(d, h.minHeight)))
                                          : ((c.minSize = h.minHeight),
                                            (c.maxSize = h.maxHeight),
                                            (d += h.minHeight),
                                            (a = Math.max(a, h.minWidth))));
                            }
                            var l = (this._box = o.ElementExt.boxSizing(
                                this.parent.node
                            ));
                            (a += l.horizontalSum), (d += l.verticalSum);
                            var u = this.parent.node.style;
                            (u.minWidth = a + 'px'),
                                (u.minHeight = d + 'px'),
                                (this._dirty = !0),
                                this.parent.parent &&
                                    r.MessageLoop.sendMessage(
                                        this.parent.parent,
                                        M.Msg.FitRequest
                                    ),
                                this._dirty &&
                                    r.MessageLoop.sendMessage(
                                        this.parent,
                                        M.Msg.UpdateRequest
                                    );
                        }),
                        (t.prototype._update = function(e, t) {
                            this._dirty = !1;
                            for (
                                var i = 0, n = 0, r = this._items.length;
                                n < r;
                                ++n
                            )
                                i += +!this._items[n].isHidden;
                            if (0 !== i) {
                                e < 0 && (e = this.parent.node.offsetWidth),
                                    t < 0 &&
                                        (t = this.parent.node.offsetHeight),
                                    this._box ||
                                        (this._box = o.ElementExt.boxSizing(
                                            this.parent.node
                                        ));
                                var s,
                                    a = this._box.paddingTop,
                                    d = this._box.paddingLeft,
                                    h = e - this._box.horizontalSum,
                                    c = t - this._box.verticalSum;
                                switch (this._direction) {
                                    case 'left-to-right':
                                        s = g.calc(
                                            this._sizers,
                                            Math.max(0, h - this._fixed)
                                        );
                                        break;
                                    case 'top-to-bottom':
                                        s = g.calc(
                                            this._sizers,
                                            Math.max(0, c - this._fixed)
                                        );
                                        break;
                                    case 'right-to-left':
                                        (s = g.calc(
                                            this._sizers,
                                            Math.max(0, h - this._fixed)
                                        )),
                                            (d += h);
                                        break;
                                    case 'bottom-to-top':
                                        (s = g.calc(
                                            this._sizers,
                                            Math.max(0, c - this._fixed)
                                        )),
                                            (a += c);
                                        break;
                                    default:
                                        throw 'unreachable';
                                }
                                var l = 0,
                                    u = 0;
                                if (s > 0)
                                    switch (this._alignment) {
                                        case 'start':
                                            break;
                                        case 'center':
                                            (l = 0), (u = s / 2);
                                            break;
                                        case 'end':
                                            (l = 0), (u = s);
                                            break;
                                        case 'justify':
                                            (l = s / i), (u = 0);
                                            break;
                                        default:
                                            throw 'unreachable';
                                    }
                                for (
                                    n = 0, r = this._items.length;
                                    n < r;
                                    ++n
                                ) {
                                    var p = this._items[n];
                                    if (!p.isHidden) {
                                        var m = this._sizers[n].size;
                                        switch (this._direction) {
                                            case 'left-to-right':
                                                p.update(d + u, a, m + l, c),
                                                    (d +=
                                                        m + l + this._spacing);
                                                break;
                                            case 'top-to-bottom':
                                                p.update(d, a + u, h, m + l),
                                                    (a +=
                                                        m + l + this._spacing);
                                                break;
                                            case 'right-to-left':
                                                p.update(
                                                    d - u - m - l,
                                                    a,
                                                    m + l,
                                                    c
                                                ),
                                                    (d -=
                                                        m + l + this._spacing);
                                                break;
                                            case 'bottom-to-top':
                                                p.update(
                                                    d,
                                                    a - u - m - l,
                                                    h,
                                                    m + l
                                                ),
                                                    (a -=
                                                        m + l + this._spacing);
                                                break;
                                            default:
                                                throw 'unreachable';
                                        }
                                    }
                                }
                            }
                        }),
                        t
                    );
                })(E);
            !(function(e) {
                (e.getStretch = function(e) {
                    return N.stretchProperty.get(e);
                }),
                    (e.setStretch = function(e, t) {
                        N.stretchProperty.set(e, t);
                    }),
                    (e.getSizeBasis = function(e) {
                        return N.sizeBasisProperty.get(e);
                    }),
                    (e.setSizeBasis = function(e, t) {
                        N.sizeBasisProperty.set(e, t);
                    });
            })(H || (H = {})),
                (function(e) {
                    function t(e) {
                        e.parent &&
                            e.parent.layout instanceof H &&
                            e.parent.fit();
                    }
                    (e.stretchProperty = new s.AttachedProperty({
                        name: 'stretch',
                        create: function() {
                            return 0;
                        },
                        coerce: function(e, t) {
                            return Math.max(0, Math.floor(t));
                        },
                        changed: t,
                    })),
                        (e.sizeBasisProperty = new s.AttachedProperty({
                            name: 'sizeBasis',
                            create: function() {
                                return 0;
                            },
                            coerce: function(e, t) {
                                return Math.max(0, Math.floor(t));
                            },
                            changed: t,
                        })),
                        (e.isHorizontal = function(e) {
                            return (
                                'left-to-right' === e || 'right-to-left' === e
                            );
                        }),
                        (e.clampSpacing = function(e) {
                            return Math.max(0, Math.floor(e));
                        });
                })(N || (N = {}));
            var W,
                j = (function(e) {
                    function t(t) {
                        void 0 === t && (t = {});
                        var i =
                            e.call(this, { layout: W.createLayout(t) }) || this;
                        return (
                            i.addClass('lm-BoxPanel'),
                            i.addClass('p-BoxPanel'),
                            i
                        );
                    }
                    return (
                        f(t, e),
                        Object.defineProperty(t.prototype, 'direction', {
                            get: function() {
                                return this.layout.direction;
                            },
                            set: function(e) {
                                this.layout.direction = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'alignment', {
                            get: function() {
                                return this.layout.alignment;
                            },
                            set: function(e) {
                                this.layout.alignment = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'spacing', {
                            get: function() {
                                return this.layout.spacing;
                            },
                            set: function(e) {
                                this.layout.spacing = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.onChildAdded = function(e) {
                            e.child.addClass('lm-BoxPanel-child'),
                                e.child.addClass('p-BoxPanel-child');
                        }),
                        (t.prototype.onChildRemoved = function(e) {
                            e.child.removeClass('lm-BoxPanel-child'),
                                e.child.removeClass('p-BoxPanel-child');
                        }),
                        t
                    );
                })(B);
            !(function(e) {
                (e.getStretch = function(e) {
                    return H.getStretch(e);
                }),
                    (e.setStretch = function(e, t) {
                        H.setStretch(e, t);
                    }),
                    (e.getSizeBasis = function(e) {
                        return H.getSizeBasis(e);
                    }),
                    (e.setSizeBasis = function(e, t) {
                        H.setSizeBasis(e, t);
                    });
            })(j || (j = {})),
                (function(e) {
                    e.createLayout = function(e) {
                        return e.layout || new H(e);
                    };
                })(W || (W = {}));
            var q,
                F = (function(e) {
                    function t(i) {
                        var n = e.call(this, { node: q.createNode() }) || this;
                        return (
                            (n._activeIndex = -1),
                            (n._items = []),
                            (n._results = null),
                            n.addClass('lm-CommandPalette'),
                            n.addClass('p-CommandPalette'),
                            n.setFlag(M.Flag.DisallowLayout),
                            (n.commands = i.commands),
                            (n.renderer = i.renderer || t.defaultRenderer),
                            n.commands.commandChanged.connect(
                                n._onGenericChange,
                                n
                            ),
                            n.commands.keyBindingChanged.connect(
                                n._onGenericChange,
                                n
                            ),
                            n
                        );
                    }
                    return (
                        f(t, e),
                        (t.prototype.dispose = function() {
                            (this._items.length = 0),
                                (this._results = null),
                                e.prototype.dispose.call(this);
                        }),
                        Object.defineProperty(t.prototype, 'searchNode', {
                            get: function() {
                                return this.node.getElementsByClassName(
                                    'lm-CommandPalette-search'
                                )[0];
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'inputNode', {
                            get: function() {
                                return this.node.getElementsByClassName(
                                    'lm-CommandPalette-input'
                                )[0];
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'contentNode', {
                            get: function() {
                                return this.node.getElementsByClassName(
                                    'lm-CommandPalette-content'
                                )[0];
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'items', {
                            get: function() {
                                return this._items;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.addItem = function(e) {
                            var t = q.createItem(this.commands, e);
                            return this._items.push(t), this.refresh(), t;
                        }),
                        (t.prototype.addItems = function(e) {
                            var t = this,
                                i = e.map(function(e) {
                                    return q.createItem(t.commands, e);
                                });
                            return (
                                i.forEach(function(e) {
                                    return t._items.push(e);
                                }),
                                this.refresh(),
                                i
                            );
                        }),
                        (t.prototype.removeItem = function(e) {
                            this.removeItemAt(this._items.indexOf(e));
                        }),
                        (t.prototype.removeItemAt = function(e) {
                            n.ArrayExt.removeAt(this._items, e) &&
                                this.refresh();
                        }),
                        (t.prototype.clearItems = function() {
                            0 !== this._items.length &&
                                ((this._items.length = 0), this.refresh());
                        }),
                        (t.prototype.refresh = function() {
                            (this._results = null),
                                '' !== this.inputNode.value
                                    ? (this.node.getElementsByClassName(
                                          'lm-close-icon'
                                      )[0].style.display = 'inherit')
                                    : (this.node.getElementsByClassName(
                                          'lm-close-icon'
                                      )[0].style.display = 'none'),
                                this.update();
                        }),
                        (t.prototype.handleEvent = function(e) {
                            switch (e.type) {
                                case 'click':
                                    this._evtClick(e);
                                    break;
                                case 'keydown':
                                    this._evtKeyDown(e);
                                    break;
                                case 'input':
                                    this.refresh();
                                    break;
                                case 'focus':
                                case 'blur':
                                    this._toggleFocused();
                            }
                        }),
                        (t.prototype.onBeforeAttach = function(e) {
                            this.node.addEventListener('click', this),
                                this.node.addEventListener('keydown', this),
                                this.node.addEventListener('input', this),
                                this.node.addEventListener('focus', this, !0),
                                this.node.addEventListener('blur', this, !0);
                        }),
                        (t.prototype.onAfterDetach = function(e) {
                            this.node.removeEventListener('click', this),
                                this.node.removeEventListener('keydown', this),
                                this.node.removeEventListener('input', this),
                                this.node.removeEventListener(
                                    'focus',
                                    this,
                                    !0
                                ),
                                this.node.removeEventListener('blur', this, !0);
                        }),
                        (t.prototype.onActivateRequest = function(e) {
                            if (this.isAttached) {
                                var t = this.inputNode;
                                t.focus(), t.select();
                            }
                        }),
                        (t.prototype.onUpdateRequest = function(e) {
                            var t = this.inputNode.value,
                                i = this.contentNode,
                                r = this._results;
                            if (
                                (r ||
                                    ((r = this._results = q.search(
                                        this._items,
                                        t
                                    )),
                                    (this._activeIndex = t
                                        ? n.ArrayExt.findFirstIndex(
                                              r,
                                              q.canActivate
                                          )
                                        : -1)),
                                t || 0 !== r.length)
                            )
                                if (t && 0 === r.length) {
                                    var s = this.renderer.renderEmptyMessage({
                                        query: t,
                                    });
                                    l.VirtualDOM.render(s, i);
                                } else {
                                    for (
                                        var a = this.renderer,
                                            d = this._activeIndex,
                                            h = new Array(r.length),
                                            c = 0,
                                            u = r.length;
                                        c < u;
                                        ++c
                                    ) {
                                        var p = r[c];
                                        if ('header' === p.type) {
                                            var m = p.indices,
                                                f = p.category;
                                            h[c] = a.renderHeader({
                                                category: f,
                                                indices: m,
                                            });
                                        } else {
                                            var g = p.item,
                                                v = ((m = p.indices), c === d);
                                            h[c] = a.renderItem({
                                                item: g,
                                                indices: m,
                                                active: v,
                                            });
                                        }
                                    }
                                    if (
                                        (l.VirtualDOM.render(h, i),
                                        d < 0 || d >= r.length)
                                    )
                                        i.scrollTop = 0;
                                    else {
                                        var b = i.children[d];
                                        o.ElementExt.scrollIntoViewIfNeeded(
                                            i,
                                            b
                                        );
                                    }
                                }
                            else l.VirtualDOM.render(null, i);
                        }),
                        (t.prototype._evtClick = function(e) {
                            if (0 === e.button) {
                                if (
                                    e.target.classList.contains('lm-close-icon')
                                )
                                    return (
                                        (this.inputNode.value = ''),
                                        void this.refresh()
                                    );
                                var t = n.ArrayExt.findFirstIndex(
                                    this.contentNode.children,
                                    function(t) {
                                        return t.contains(e.target);
                                    }
                                );
                                -1 !== t &&
                                    (e.preventDefault(),
                                    e.stopPropagation(),
                                    this._execute(t));
                            }
                        }),
                        (t.prototype._evtKeyDown = function(e) {
                            if (
                                !(
                                    e.altKey ||
                                    e.ctrlKey ||
                                    e.metaKey ||
                                    e.shiftKey
                                )
                            )
                                switch (e.keyCode) {
                                    case 13:
                                        e.preventDefault(),
                                            e.stopPropagation(),
                                            this._execute(this._activeIndex);
                                        break;
                                    case 38:
                                        e.preventDefault(),
                                            e.stopPropagation(),
                                            this._activatePreviousItem();
                                        break;
                                    case 40:
                                        e.preventDefault(),
                                            e.stopPropagation(),
                                            this._activateNextItem();
                                }
                        }),
                        (t.prototype._activateNextItem = function() {
                            if (this._results && 0 !== this._results.length) {
                                var e = this._activeIndex,
                                    t = this._results.length,
                                    i = e < t - 1 ? e + 1 : 0,
                                    o = 0 === i ? t - 1 : i - 1;
                                (this._activeIndex = n.ArrayExt.findFirstIndex(
                                    this._results,
                                    q.canActivate,
                                    i,
                                    o
                                )),
                                    this.update();
                            }
                        }),
                        (t.prototype._activatePreviousItem = function() {
                            if (this._results && 0 !== this._results.length) {
                                var e = this._activeIndex,
                                    t = this._results.length,
                                    i = e <= 0 ? t - 1 : e - 1,
                                    o = i === t - 1 ? 0 : i + 1;
                                (this._activeIndex = n.ArrayExt.findLastIndex(
                                    this._results,
                                    q.canActivate,
                                    i,
                                    o
                                )),
                                    this.update();
                            }
                        }),
                        (t.prototype._execute = function(e) {
                            if (this._results) {
                                var t = this._results[e];
                                if (t) {
                                    if ('header' === t.type) {
                                        var i = this.inputNode;
                                        return (
                                            (i.value =
                                                t.category.toLowerCase() + ' '),
                                            i.focus(),
                                            void this.refresh()
                                        );
                                    }
                                    t.item.isEnabled &&
                                        (this.commands.execute(
                                            t.item.command,
                                            t.item.args
                                        ),
                                        (this.inputNode.value = ''),
                                        this.refresh());
                                }
                            }
                        }),
                        (t.prototype._toggleFocused = function() {
                            var e = document.activeElement === this.inputNode;
                            this.toggleClass('lm-mod-focused', e),
                                this.toggleClass('p-mod-focused', e);
                        }),
                        (t.prototype._onGenericChange = function() {
                            this.refresh();
                        }),
                        t
                    );
                })(M);
            !(function(e) {
                var t = (function() {
                    function e() {}
                    return (
                        (e.prototype.renderHeader = function(e) {
                            var t = this.formatHeader(e);
                            return l.h.li(
                                {
                                    className:
                                        'lm-CommandPalette-header p-CommandPalette-header',
                                },
                                t
                            );
                        }),
                        (e.prototype.renderItem = function(e) {
                            var t = this.createItemClass(e),
                                i = this.createItemDataset(e);
                            return e.item.isToggleable
                                ? l.h.li(
                                      {
                                          className: t,
                                          dataset: i,
                                          role: 'checkbox',
                                          'aria-checked': '' + e.item.isToggled,
                                      },
                                      this.renderItemIcon(e),
                                      this.renderItemContent(e),
                                      this.renderItemShortcut(e)
                                  )
                                : l.h.li(
                                      { className: t, dataset: i },
                                      this.renderItemIcon(e),
                                      this.renderItemContent(e),
                                      this.renderItemShortcut(e)
                                  );
                        }),
                        (e.prototype.renderEmptyMessage = function(e) {
                            var t = this.formatEmptyMessage(e);
                            return l.h.li(
                                {
                                    className:
                                        'lm-CommandPalette-emptyMessage p-CommandPalette-emptyMessage',
                                },
                                t
                            );
                        }),
                        (e.prototype.renderItemIcon = function(e) {
                            var t = this.createIconClass(e);
                            return 'string' == typeof e.item.icon
                                ? l.h.div({ className: t }, e.item.iconLabel)
                                : l.h.div(
                                      { className: t },
                                      e.item.icon,
                                      e.item.iconLabel
                                  );
                        }),
                        (e.prototype.renderItemContent = function(e) {
                            return l.h.div(
                                {
                                    className:
                                        'lm-CommandPalette-itemContent p-CommandPalette-itemContent',
                                },
                                this.renderItemLabel(e),
                                this.renderItemCaption(e)
                            );
                        }),
                        (e.prototype.renderItemLabel = function(e) {
                            var t = this.formatItemLabel(e);
                            return l.h.div(
                                {
                                    className:
                                        'lm-CommandPalette-itemLabel p-CommandPalette-itemLabel',
                                },
                                t
                            );
                        }),
                        (e.prototype.renderItemCaption = function(e) {
                            var t = this.formatItemCaption(e);
                            return l.h.div(
                                {
                                    className:
                                        'lm-CommandPalette-itemCaption p-CommandPalette-itemCaption',
                                },
                                t
                            );
                        }),
                        (e.prototype.renderItemShortcut = function(e) {
                            var t = this.formatItemShortcut(e);
                            return l.h.div(
                                {
                                    className:
                                        'lm-CommandPalette-itemShortcut p-CommandPalette-itemShortcut',
                                },
                                t
                            );
                        }),
                        (e.prototype.createItemClass = function(e) {
                            var t = 'lm-CommandPalette-item';
                            (t += ' p-CommandPalette-item'),
                                e.item.isEnabled ||
                                    ((t += ' lm-mod-disabled'),
                                    (t += ' p-mod-disabled')),
                                e.item.isToggled &&
                                    ((t += ' lm-mod-toggled'),
                                    (t += ' p-mod-toggled')),
                                e.active &&
                                    ((t += ' lm-mod-active'),
                                    (t += ' p-mod-active'));
                            var i = e.item.className;
                            return i && (t += ' ' + i), t;
                        }),
                        (e.prototype.createItemDataset = function(e) {
                            return v(v({}, e.item.dataset), {
                                command: e.item.command,
                            });
                        }),
                        (e.prototype.createIconClass = function(e) {
                            var t = 'lm-CommandPalette-itemIcon';
                            t += ' p-CommandPalette-itemIcon';
                            var i = e.item.iconClass;
                            return i ? t + ' ' + i : t;
                        }),
                        (e.prototype.formatHeader = function(e) {
                            return e.indices && 0 !== e.indices.length
                                ? n.StringExt.highlight(
                                      e.category,
                                      e.indices,
                                      l.h.mark
                                  )
                                : e.category;
                        }),
                        (e.prototype.formatEmptyMessage = function(e) {
                            return (
                                "No commands found that match '" + e.query + "'"
                            );
                        }),
                        (e.prototype.formatItemShortcut = function(e) {
                            var t = e.item.keyBinding;
                            return t
                                ? c.CommandRegistry.formatKeystroke(t.keys)
                                : null;
                        }),
                        (e.prototype.formatItemLabel = function(e) {
                            return e.indices && 0 !== e.indices.length
                                ? n.StringExt.highlight(
                                      e.item.label,
                                      e.indices,
                                      l.h.mark
                                  )
                                : e.item.label;
                        }),
                        (e.prototype.formatItemCaption = function(e) {
                            return e.item.caption;
                        }),
                        e
                    );
                })();
                (e.Renderer = t), (e.defaultRenderer = new t());
            })(F || (F = {})),
                (function(e) {
                    function t(e, t) {
                        for (
                            var i = e.category.toLowerCase(),
                                o = i + ' ' + e.label.toLowerCase(),
                                r = 1 / 0,
                                s = null,
                                a = /\b\w/g;
                            ;

                        ) {
                            var d = a.exec(o);
                            if (!d) break;
                            var h = n.StringExt.matchSumOfDeltas(o, t, d.index);
                            if (!h) break;
                            h &&
                                h.score <= r &&
                                ((r = h.score), (s = h.indices));
                        }
                        if (!s || r === 1 / 0) return null;
                        for (
                            var c = i.length + 1,
                                l = n.ArrayExt.lowerBound(s, c, function(e, t) {
                                    return e - t;
                                }),
                                u = s.slice(0, l),
                                p = s.slice(l),
                                m = 0,
                                f = p.length;
                            m < f;
                            ++m
                        )
                            p[m] -= c;
                        return 0 === u.length
                            ? {
                                  matchType: 0,
                                  categoryIndices: null,
                                  labelIndices: p,
                                  score: r,
                                  item: e,
                              }
                            : 0 === p.length
                            ? {
                                  matchType: 1,
                                  categoryIndices: u,
                                  labelIndices: null,
                                  score: r,
                                  item: e,
                              }
                            : {
                                  matchType: 2,
                                  categoryIndices: u,
                                  labelIndices: p,
                                  score: r,
                                  item: e,
                              };
                    }
                    function i(e, t) {
                        var i = e.matchType - t.matchType;
                        if (0 !== i) return i;
                        var n = e.score - t.score;
                        if (0 !== n) return n;
                        var o = 0,
                            r = 0;
                        switch (e.matchType) {
                            case 0:
                                (o = e.labelIndices[0]),
                                    (r = t.labelIndices[0]);
                                break;
                            case 1:
                            case 2:
                                (o = e.categoryIndices[0]),
                                    (r = t.categoryIndices[0]);
                        }
                        if (o !== r) return o - r;
                        var s = e.item.category.localeCompare(t.item.category);
                        if (0 !== s) return s;
                        var a = e.item.rank,
                            d = t.item.rank;
                        return a !== d
                            ? a < d
                                ? -1
                                : 1
                            : e.item.label.localeCompare(t.item.label);
                    }
                    (e.createNode = function() {
                        var e = document.createElement('div'),
                            t = document.createElement('div'),
                            i = document.createElement('div'),
                            n = document.createElement('input'),
                            o = document.createElement('ul'),
                            r = document.createElement('button');
                        return (
                            (t.className = 'lm-CommandPalette-search'),
                            (i.className = 'lm-CommandPalette-wrapper'),
                            (n.className = 'lm-CommandPalette-input'),
                            (r.className = 'lm-close-icon'),
                            (o.className = 'lm-CommandPalette-content'),
                            t.classList.add('p-CommandPalette-search'),
                            i.classList.add('p-CommandPalette-wrapper'),
                            n.classList.add('p-CommandPalette-input'),
                            o.classList.add('p-CommandPalette-content'),
                            (n.spellcheck = !1),
                            i.appendChild(n),
                            i.appendChild(r),
                            t.appendChild(i),
                            e.appendChild(t),
                            e.appendChild(o),
                            e
                        );
                    }),
                        (e.createItem = function(e, t) {
                            return new o(e, t);
                        }),
                        (e.search = function(e, o) {
                            var r = (function(e, i) {
                                i = i.replace(/\s+/g, '').toLowerCase();
                                for (
                                    var n = [], o = 0, r = e.length;
                                    o < r;
                                    ++o
                                ) {
                                    var s = e[o];
                                    if (s.isVisible)
                                        if (i) {
                                            var a = t(s, i);
                                            a &&
                                                (s.isEnabled ||
                                                    (a.score += 1e3),
                                                n.push(a));
                                        } else
                                            n.push({
                                                matchType: 3,
                                                categoryIndices: null,
                                                labelIndices: null,
                                                score: 0,
                                                item: s,
                                            });
                                }
                                return n;
                            })(e, o);
                            return (
                                r.sort(i),
                                (function(e) {
                                    var t = new Array(e.length);
                                    n.ArrayExt.fill(t, !1);
                                    for (
                                        var i = [], o = 0, r = e.length;
                                        o < r;
                                        ++o
                                    )
                                        if (!t[o]) {
                                            var s = e[o],
                                                a = s.item,
                                                d = s.categoryIndices,
                                                h = a.category;
                                            i.push({
                                                type: 'header',
                                                category: h,
                                                indices: d,
                                            });
                                            for (var c = o; c < r; ++c)
                                                if (!t[c]) {
                                                    var l = e[c],
                                                        u = l.item,
                                                        p = l.labelIndices;
                                                    u.category === h &&
                                                        (i.push({
                                                            type: 'item',
                                                            item: u,
                                                            indices: p,
                                                        }),
                                                        (t[c] = !0));
                                                }
                                        }
                                    return i;
                                })(r)
                            );
                        }),
                        (e.canActivate = function(e) {
                            return 'item' === e.type && e.item.isEnabled;
                        });
                    var o = (function() {
                        function e(e, t) {
                            (this._commands = e),
                                (this.category = t.category
                                    .trim()
                                    .replace(/\s+/g, ' ')),
                                (this.command = t.command),
                                (this.args = t.args || h.JSONExt.emptyObject),
                                (this.rank =
                                    void 0 !== t.rank ? t.rank : 1 / 0);
                        }
                        return (
                            Object.defineProperty(e.prototype, 'label', {
                                get: function() {
                                    return this._commands.label(
                                        this.command,
                                        this.args
                                    );
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'icon', {
                                get: function() {
                                    return this._commands.icon(
                                        this.command,
                                        this.args
                                    );
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'iconClass', {
                                get: function() {
                                    return this._commands.iconClass(
                                        this.command,
                                        this.args
                                    );
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'iconLabel', {
                                get: function() {
                                    return this._commands.iconLabel(
                                        this.command,
                                        this.args
                                    );
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'caption', {
                                get: function() {
                                    return this._commands.caption(
                                        this.command,
                                        this.args
                                    );
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'className', {
                                get: function() {
                                    return this._commands.className(
                                        this.command,
                                        this.args
                                    );
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'dataset', {
                                get: function() {
                                    return this._commands.dataset(
                                        this.command,
                                        this.args
                                    );
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'isEnabled', {
                                get: function() {
                                    return this._commands.isEnabled(
                                        this.command,
                                        this.args
                                    );
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'isToggled', {
                                get: function() {
                                    return this._commands.isToggled(
                                        this.command,
                                        this.args
                                    );
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'isToggleable', {
                                get: function() {
                                    return this._commands.isToggleable(
                                        this.command,
                                        this.args
                                    );
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'isVisible', {
                                get: function() {
                                    return this._commands.isVisible(
                                        this.command,
                                        this.args
                                    );
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'keyBinding', {
                                get: function() {
                                    var e = this.command,
                                        t = this.args;
                                    return (
                                        n.ArrayExt.findLastValue(
                                            this._commands.keyBindings,
                                            function(i) {
                                                return (
                                                    i.command === e &&
                                                    h.JSONExt.deepEqual(
                                                        i.args,
                                                        t
                                                    )
                                                );
                                            }
                                        ) || null
                                    );
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            e
                        );
                    })();
                })(q || (q = {}));
            var U,
                V = (function(e) {
                    function t(i) {
                        var n = e.call(this, { node: U.createNode() }) || this;
                        return (
                            (n._childIndex = -1),
                            (n._activeIndex = -1),
                            (n._openTimerID = 0),
                            (n._closeTimerID = 0),
                            (n._items = []),
                            (n._childMenu = null),
                            (n._parentMenu = null),
                            (n._aboutToClose = new a.Signal(n)),
                            (n._menuRequested = new a.Signal(n)),
                            n.addClass('lm-Menu'),
                            n.addClass('p-Menu'),
                            n.setFlag(M.Flag.DisallowLayout),
                            (n.commands = i.commands),
                            (n.renderer = i.renderer || t.defaultRenderer),
                            n
                        );
                    }
                    return (
                        f(t, e),
                        (t.prototype.dispose = function() {
                            this.close(),
                                (this._items.length = 0),
                                e.prototype.dispose.call(this);
                        }),
                        Object.defineProperty(t.prototype, 'aboutToClose', {
                            get: function() {
                                return this._aboutToClose;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'menuRequested', {
                            get: function() {
                                return this._menuRequested;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'parentMenu', {
                            get: function() {
                                return this._parentMenu;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'childMenu', {
                            get: function() {
                                return this._childMenu;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'rootMenu', {
                            get: function() {
                                for (var e = this; e._parentMenu; )
                                    e = e._parentMenu;
                                return e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'leafMenu', {
                            get: function() {
                                for (var e = this; e._childMenu; )
                                    e = e._childMenu;
                                return e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'contentNode', {
                            get: function() {
                                return this.node.getElementsByClassName(
                                    'lm-Menu-content'
                                )[0];
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'activeItem', {
                            get: function() {
                                return this._items[this._activeIndex] || null;
                            },
                            set: function(e) {
                                this.activeIndex = e
                                    ? this._items.indexOf(e)
                                    : -1;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'activeIndex', {
                            get: function() {
                                return this._activeIndex;
                            },
                            set: function(e) {
                                (e < 0 || e >= this._items.length) && (e = -1),
                                    -1 === e ||
                                        U.canActivate(this._items[e]) ||
                                        (e = -1),
                                    this._activeIndex !== e &&
                                        ((this._activeIndex = e),
                                        this._activeIndex >= 0 &&
                                            this.contentNode.childNodes[
                                                this._activeIndex
                                            ] &&
                                            this.contentNode.childNodes[
                                                this._activeIndex
                                            ].focus(),
                                        this.update());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'items', {
                            get: function() {
                                return this._items;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.activateNextItem = function() {
                            var e = this._items.length,
                                t = this._activeIndex,
                                i = t < e - 1 ? t + 1 : 0,
                                o = 0 === i ? e - 1 : i - 1;
                            this.activeIndex = n.ArrayExt.findFirstIndex(
                                this._items,
                                U.canActivate,
                                i,
                                o
                            );
                        }),
                        (t.prototype.activatePreviousItem = function() {
                            var e = this._items.length,
                                t = this._activeIndex,
                                i = t <= 0 ? e - 1 : t - 1,
                                o = i === e - 1 ? 0 : i + 1;
                            this.activeIndex = n.ArrayExt.findLastIndex(
                                this._items,
                                U.canActivate,
                                i,
                                o
                            );
                        }),
                        (t.prototype.triggerActiveItem = function() {
                            if (this.isAttached) {
                                var e = this.activeItem;
                                if (e)
                                    if (
                                        (this._cancelOpenTimer(),
                                        this._cancelCloseTimer(),
                                        'submenu' !== e.type)
                                    ) {
                                        this.rootMenu.close();
                                        var t = e.command,
                                            i = e.args;
                                        this.commands.isEnabled(t, i)
                                            ? this.commands.execute(t, i)
                                            : console.log(
                                                  "Command '" +
                                                      t +
                                                      "' is disabled."
                                              );
                                    } else this._openChildMenu(!0);
                            }
                        }),
                        (t.prototype.addItem = function(e) {
                            return this.insertItem(this._items.length, e);
                        }),
                        (t.prototype.insertItem = function(e, t) {
                            this.isAttached && this.close(),
                                (this.activeIndex = -1);
                            var i = Math.max(
                                    0,
                                    Math.min(e, this._items.length)
                                ),
                                o = U.createItem(this, t);
                            return (
                                n.ArrayExt.insert(this._items, i, o),
                                this.update(),
                                o
                            );
                        }),
                        (t.prototype.removeItem = function(e) {
                            this.removeItemAt(this._items.indexOf(e));
                        }),
                        (t.prototype.removeItemAt = function(e) {
                            this.isAttached && this.close(),
                                (this.activeIndex = -1),
                                n.ArrayExt.removeAt(this._items, e) &&
                                    this.update();
                        }),
                        (t.prototype.clearItems = function() {
                            this.isAttached && this.close(),
                                (this.activeIndex = -1),
                                0 !== this._items.length &&
                                    ((this._items.length = 0), this.update());
                        }),
                        (t.prototype.open = function(e, t, i) {
                            if ((void 0 === i && (i = {}), !this.isAttached)) {
                                var n = i.forceX || !1,
                                    o = i.forceY || !1;
                                U.openRootMenu(this, e, t, n, o),
                                    this.activate();
                            }
                        }),
                        (t.prototype.handleEvent = function(e) {
                            switch (e.type) {
                                case 'keydown':
                                    this._evtKeyDown(e);
                                    break;
                                case 'mouseup':
                                    this._evtMouseUp(e);
                                    break;
                                case 'mousemove':
                                    this._evtMouseMove(e);
                                    break;
                                case 'mouseenter':
                                    this._evtMouseEnter(e);
                                    break;
                                case 'mouseleave':
                                    this._evtMouseLeave(e);
                                    break;
                                case 'mousedown':
                                    this._evtMouseDown(e);
                                    break;
                                case 'contextmenu':
                                    e.preventDefault(), e.stopPropagation();
                            }
                        }),
                        (t.prototype.onBeforeAttach = function(e) {
                            this.node.addEventListener('keydown', this),
                                this.node.addEventListener('mouseup', this),
                                this.node.addEventListener('mousemove', this),
                                this.node.addEventListener('mouseenter', this),
                                this.node.addEventListener('mouseleave', this),
                                this.node.addEventListener('contextmenu', this),
                                document.addEventListener(
                                    'mousedown',
                                    this,
                                    !0
                                );
                        }),
                        (t.prototype.onAfterDetach = function(e) {
                            this.node.removeEventListener('keydown', this),
                                this.node.removeEventListener('mouseup', this),
                                this.node.removeEventListener(
                                    'mousemove',
                                    this
                                ),
                                this.node.removeEventListener(
                                    'mouseenter',
                                    this
                                ),
                                this.node.removeEventListener(
                                    'mouseleave',
                                    this
                                ),
                                this.node.removeEventListener(
                                    'contextmenu',
                                    this
                                ),
                                document.removeEventListener(
                                    'mousedown',
                                    this,
                                    !0
                                );
                        }),
                        (t.prototype.onActivateRequest = function(e) {
                            this.isAttached && this.node.focus();
                        }),
                        (t.prototype.onUpdateRequest = function(e) {
                            for (
                                var t = this,
                                    i = this._items,
                                    n = this.renderer,
                                    o = this._activeIndex,
                                    r = U.computeCollapsed(i),
                                    s = new Array(i.length),
                                    a = function(e, a) {
                                        var d = i[e],
                                            h = e === o,
                                            c = r[e];
                                        s[e] = n.renderItem({
                                            item: d,
                                            active: h,
                                            collapsed: c,
                                            onfocus: function() {
                                                t.activeIndex = e;
                                            },
                                        });
                                    },
                                    d = 0,
                                    h = i.length;
                                d < h;
                                ++d
                            )
                                a(d);
                            l.VirtualDOM.render(s, this.contentNode);
                        }),
                        (t.prototype.onCloseRequest = function(t) {
                            this._cancelOpenTimer(),
                                this._cancelCloseTimer(),
                                (this.activeIndex = -1);
                            var i = this._childMenu;
                            i &&
                                ((this._childIndex = -1),
                                (this._childMenu = null),
                                (i._parentMenu = null),
                                i.close());
                            var n = this._parentMenu;
                            n &&
                                ((this._parentMenu = null),
                                (n._childIndex = -1),
                                (n._childMenu = null),
                                n.activate()),
                                this.isAttached &&
                                    this._aboutToClose.emit(void 0),
                                e.prototype.onCloseRequest.call(this, t);
                        }),
                        (t.prototype._evtKeyDown = function(e) {
                            e.preventDefault(), e.stopPropagation();
                            var t = e.keyCode;
                            if (13 !== t)
                                if (27 !== t)
                                    if (37 !== t)
                                        if (38 !== t)
                                            if (39 !== t)
                                                if (40 !== t) {
                                                    var i = (0,
                                                    p.getKeyboardLayout)().keyForKeydownEvent(
                                                        e
                                                    );
                                                    if (i) {
                                                        var n =
                                                                this
                                                                    ._activeIndex +
                                                                1,
                                                            o = U.findMnemonic(
                                                                this._items,
                                                                i,
                                                                n
                                                            );
                                                        -1 === o.index ||
                                                        o.multiple
                                                            ? -1 !== o.index
                                                                ? (this.activeIndex =
                                                                      o.index)
                                                                : -1 !==
                                                                      o.auto &&
                                                                  (this.activeIndex =
                                                                      o.auto)
                                                            : ((this.activeIndex =
                                                                  o.index),
                                                              this.triggerActiveItem());
                                                    }
                                                } else this.activateNextItem();
                                            else {
                                                var r = this.activeItem;
                                                r && 'submenu' === r.type
                                                    ? this.triggerActiveItem()
                                                    : this.rootMenu._menuRequested.emit(
                                                          'next'
                                                      );
                                            }
                                        else this.activatePreviousItem();
                                    else
                                        this._parentMenu
                                            ? this.close()
                                            : this._menuRequested.emit(
                                                  'previous'
                                              );
                                else this.close();
                            else this.triggerActiveItem();
                        }),
                        (t.prototype._evtMouseUp = function(e) {
                            0 === e.button &&
                                (e.preventDefault(),
                                e.stopPropagation(),
                                this.triggerActiveItem());
                        }),
                        (t.prototype._evtMouseMove = function(e) {
                            var t = n.ArrayExt.findFirstIndex(
                                this.contentNode.children,
                                function(t) {
                                    return o.ElementExt.hitTest(
                                        t,
                                        e.clientX,
                                        e.clientY
                                    );
                                }
                            );
                            if (t !== this._activeIndex) {
                                if (
                                    ((this.activeIndex = t),
                                    (t = this.activeIndex) === this._childIndex)
                                )
                                    return (
                                        this._cancelOpenTimer(),
                                        void this._cancelCloseTimer()
                                    );
                                -1 !== this._childIndex &&
                                    this._startCloseTimer(),
                                    this._cancelOpenTimer();
                                var i = this.activeItem;
                                i &&
                                    'submenu' === i.type &&
                                    i.submenu &&
                                    this._startOpenTimer();
                            }
                        }),
                        (t.prototype._evtMouseEnter = function(e) {
                            for (var t = this._parentMenu; t; t = t._parentMenu)
                                t._cancelOpenTimer(),
                                    t._cancelCloseTimer(),
                                    (t.activeIndex = t._childIndex);
                        }),
                        (t.prototype._evtMouseLeave = function(e) {
                            if ((this._cancelOpenTimer(), this._childMenu)) {
                                var t = e.clientX,
                                    i = e.clientY;
                                o.ElementExt.hitTest(this._childMenu.node, t, i)
                                    ? this._cancelCloseTimer()
                                    : ((this.activeIndex = -1),
                                      this._startCloseTimer());
                            } else this.activeIndex = -1;
                        }),
                        (t.prototype._evtMouseDown = function(e) {
                            this._parentMenu ||
                                (U.hitTestMenus(this, e.clientX, e.clientY)
                                    ? (e.preventDefault(), e.stopPropagation())
                                    : this.close());
                        }),
                        (t.prototype._openChildMenu = function(e) {
                            void 0 === e && (e = !1);
                            var i = this.activeItem;
                            if (i && 'submenu' === i.type && i.submenu) {
                                var n = i.submenu;
                                if (n !== this._childMenu) {
                                    t.saveWindowData(),
                                        this._closeChildMenu(),
                                        (this._childMenu = n),
                                        (this._childIndex = this._activeIndex),
                                        (n._parentMenu = this),
                                        r.MessageLoop.sendMessage(
                                            this,
                                            M.Msg.UpdateRequest
                                        );
                                    var o = this.contentNode.children[
                                        this._activeIndex
                                    ];
                                    U.openSubmenu(n, o),
                                        e &&
                                            ((n.activeIndex = -1),
                                            n.activateNextItem()),
                                        n.activate();
                                }
                            } else this._closeChildMenu();
                        }),
                        (t.prototype._closeChildMenu = function() {
                            this._childMenu && this._childMenu.close();
                        }),
                        (t.prototype._startOpenTimer = function() {
                            var e = this;
                            0 === this._openTimerID &&
                                (this._openTimerID = window.setTimeout(
                                    function() {
                                        (e._openTimerID = 0),
                                            e._openChildMenu();
                                    },
                                    U.TIMER_DELAY
                                ));
                        }),
                        (t.prototype._startCloseTimer = function() {
                            var e = this;
                            0 === this._closeTimerID &&
                                (this._closeTimerID = window.setTimeout(
                                    function() {
                                        (e._closeTimerID = 0),
                                            e._closeChildMenu();
                                    },
                                    U.TIMER_DELAY
                                ));
                        }),
                        (t.prototype._cancelOpenTimer = function() {
                            0 !== this._openTimerID &&
                                (clearTimeout(this._openTimerID),
                                (this._openTimerID = 0));
                        }),
                        (t.prototype._cancelCloseTimer = function() {
                            0 !== this._closeTimerID &&
                                (clearTimeout(this._closeTimerID),
                                (this._closeTimerID = 0));
                        }),
                        (t.saveWindowData = function() {
                            U.saveWindowData();
                        }),
                        t
                    );
                })(M);
            !(function(e) {
                var t = (function() {
                    function e() {}
                    return (
                        (e.prototype.renderItem = function(e) {
                            var t = this.createItemClass(e),
                                i = this.createItemDataset(e),
                                n = this.createItemARIA(e);
                            return l.h.li(
                                v(
                                    {
                                        className: t,
                                        dataset: i,
                                        tabindex: '0',
                                        onfocus: e.onfocus,
                                    },
                                    n
                                ),
                                this.renderIcon(e),
                                this.renderLabel(e),
                                this.renderShortcut(e),
                                this.renderSubmenu(e)
                            );
                        }),
                        (e.prototype.renderIcon = function(e) {
                            var t = this.createIconClass(e);
                            return 'string' == typeof e.item.icon
                                ? l.h.div({ className: t }, e.item.iconLabel)
                                : l.h.div(
                                      { className: t },
                                      e.item.icon,
                                      e.item.iconLabel
                                  );
                        }),
                        (e.prototype.renderLabel = function(e) {
                            var t = this.formatLabel(e);
                            return l.h.div(
                                {
                                    className:
                                        'lm-Menu-itemLabel p-Menu-itemLabel',
                                },
                                t
                            );
                        }),
                        (e.prototype.renderShortcut = function(e) {
                            var t = this.formatShortcut(e);
                            return l.h.div(
                                {
                                    className:
                                        'lm-Menu-itemShortcut p-Menu-itemShortcut',
                                },
                                t
                            );
                        }),
                        (e.prototype.renderSubmenu = function(e) {
                            return l.h.div({
                                className:
                                    'lm-Menu-itemSubmenuIcon p-Menu-itemSubmenuIcon',
                            });
                        }),
                        (e.prototype.createItemClass = function(e) {
                            var t = 'lm-Menu-item';
                            (t += ' p-Menu-item'),
                                e.item.isEnabled ||
                                    ((t += ' lm-mod-disabled'),
                                    (t += ' p-mod-disabled')),
                                e.item.isToggled &&
                                    ((t += ' lm-mod-toggled'),
                                    (t += ' p-mod-toggled')),
                                e.item.isVisible ||
                                    ((t += ' lm-mod-hidden'),
                                    (t += ' p-mod-hidden')),
                                e.active &&
                                    ((t += ' lm-mod-active'),
                                    (t += ' p-mod-active')),
                                e.collapsed &&
                                    ((t += ' lm-mod-collapsed'),
                                    (t += ' p-mod-collapsed'));
                            var i = e.item.className;
                            return i && (t += ' ' + i), t;
                        }),
                        (e.prototype.createItemDataset = function(e) {
                            var t = e.item,
                                i = t.type,
                                n = t.command,
                                o = t.dataset;
                            return v(
                                v({}, o),
                                'command' === i
                                    ? { type: i, command: n }
                                    : { type: i }
                            );
                        }),
                        (e.prototype.createIconClass = function(e) {
                            var t = 'lm-Menu-itemIcon';
                            t += ' p-Menu-itemIcon';
                            var i = e.item.iconClass;
                            return i ? t + ' ' + i : t;
                        }),
                        (e.prototype.createItemARIA = function(e) {
                            var t = {};
                            switch (e.item.type) {
                                case 'separator':
                                    t.role = 'presentation';
                                    break;
                                case 'submenu':
                                    (t['aria-haspopup'] = 'true'),
                                        e.item.isEnabled ||
                                            (t['aria-disabled'] = 'true');
                                    break;
                                default:
                                    e.item.isEnabled ||
                                        (t['aria-disabled'] = 'true'),
                                        (t.role = 'menuitem');
                            }
                            return t;
                        }),
                        (e.prototype.formatLabel = function(e) {
                            var t = e.item,
                                i = t.label,
                                n = t.mnemonic;
                            if (n < 0 || n >= i.length) return i;
                            var o = i.slice(0, n),
                                r = i.slice(n + 1),
                                s = i[n];
                            return [
                                o,
                                l.h.span(
                                    {
                                        className:
                                            'lm-Menu-itemMnemonic p-Menu-itemMnemonic',
                                    },
                                    s
                                ),
                                r,
                            ];
                        }),
                        (e.prototype.formatShortcut = function(e) {
                            var t = e.item.keyBinding;
                            return t
                                ? c.CommandRegistry.formatKeystroke(t.keys)
                                : null;
                        }),
                        e
                    );
                })();
                (e.Renderer = t), (e.defaultRenderer = new t());
            })(V || (V = {})),
                (function(e) {
                    (e.TIMER_DELAY = 300), (e.SUBMENU_OVERLAP = 3);
                    var t = null,
                        i = 0;
                    function s() {
                        return i > 0 ? (i--, t) : d();
                    }
                    function a(e) {
                        return (
                            'separator' !== e.type && e.isEnabled && e.isVisible
                        );
                    }
                    function d() {
                        return {
                            pageXOffset: window.pageXOffset,
                            pageYOffset: window.pageYOffset,
                            clientWidth: document.documentElement.clientWidth,
                            clientHeight: document.documentElement.clientHeight,
                        };
                    }
                    (e.saveWindowData = function() {
                        (t = d()), i++;
                    }),
                        (e.createNode = function() {
                            var e = document.createElement('div'),
                                t = document.createElement('ul');
                            return (
                                (t.className = 'lm-Menu-content'),
                                t.classList.add('p-Menu-content'),
                                e.appendChild(t),
                                t.setAttribute('role', 'menu'),
                                (e.tabIndex = 0),
                                e
                            );
                        }),
                        (e.canActivate = a),
                        (e.createItem = function(e, t) {
                            return new c(e.commands, t);
                        }),
                        (e.hitTestMenus = function(e, t, i) {
                            for (var n = e; n; n = n.childMenu)
                                if (o.ElementExt.hitTest(n.node, t, i))
                                    return !0;
                            return !1;
                        }),
                        (e.computeCollapsed = function(e) {
                            var t = new Array(e.length);
                            n.ArrayExt.fill(t, !1);
                            for (var i = 0, o = e.length; i < o; ++i)
                                if ((a = e[i]).isVisible) {
                                    if ('separator' !== a.type) break;
                                    t[i] = !0;
                                }
                            for (var r = o - 1; r >= 0; --r)
                                if ((a = e[r]).isVisible) {
                                    if ('separator' !== a.type) break;
                                    t[r] = !0;
                                }
                            for (var s = !1; ++i < r; ) {
                                var a;
                                (a = e[i]).isVisible &&
                                    ('separator' !== a.type
                                        ? (s = !1)
                                        : s
                                        ? (t[i] = !0)
                                        : (s = !0));
                            }
                            return t;
                        }),
                        (e.openRootMenu = function(e, t, i, n, o) {
                            var a = s(),
                                d = a.pageXOffset,
                                h = a.pageYOffset,
                                c = a.clientWidth,
                                l = a.clientHeight;
                            r.MessageLoop.sendMessage(e, M.Msg.UpdateRequest);
                            var u = l - (o ? i : 0),
                                p = e.node,
                                m = p.style;
                            (m.opacity = '0'),
                                (m.maxHeight = u + 'px'),
                                M.attach(e, document.body);
                            var f = p.getBoundingClientRect(),
                                g = f.width,
                                v = f.height;
                            !n && t + g > d + c && (t = d + c - g),
                                !o &&
                                    i + v > h + l &&
                                    (i > h + l ? (i = h + l - v) : (i -= v)),
                                (m.transform =
                                    'translate(' +
                                    Math.max(0, t) +
                                    'px, ' +
                                    Math.max(0, i) +
                                    'px'),
                                (m.opacity = '1');
                        }),
                        (e.openSubmenu = function(t, i) {
                            var n = s(),
                                a = n.pageXOffset,
                                d = n.pageYOffset,
                                h = n.clientWidth,
                                c = n.clientHeight;
                            r.MessageLoop.sendMessage(t, M.Msg.UpdateRequest);
                            var l = c,
                                u = t.node,
                                p = u.style;
                            (p.opacity = '0'),
                                (p.maxHeight = l + 'px'),
                                M.attach(t, document.body);
                            var m = u.getBoundingClientRect(),
                                f = m.width,
                                g = m.height,
                                v = o.ElementExt.boxSizing(t.node),
                                b = i.getBoundingClientRect(),
                                y = b.right - e.SUBMENU_OVERLAP;
                            y + f > a + h &&
                                (y = b.left + e.SUBMENU_OVERLAP - f);
                            var _ = b.top - v.borderTop - v.paddingTop;
                            _ + g > d + c &&
                                (_ =
                                    b.bottom +
                                    v.borderBottom +
                                    v.paddingBottom -
                                    g),
                                (p.transform =
                                    'translate(' +
                                    Math.max(0, y) +
                                    'px, ' +
                                    Math.max(0, _) +
                                    'px'),
                                (p.opacity = '1');
                        }),
                        (e.findMnemonic = function(e, t, i) {
                            for (
                                var n = -1,
                                    o = -1,
                                    r = !1,
                                    s = t.toUpperCase(),
                                    d = 0,
                                    h = e.length;
                                d < h;
                                ++d
                            ) {
                                var c = (d + i) % h,
                                    l = e[c];
                                if (a(l)) {
                                    var u = l.label;
                                    if (0 !== u.length) {
                                        var p = l.mnemonic;
                                        p >= 0 && p < u.length
                                            ? u[p].toUpperCase() === s &&
                                              (-1 === n ? (n = c) : (r = !0))
                                            : -1 === o &&
                                              u[0].toUpperCase() === s &&
                                              (o = c);
                                    }
                                }
                            }
                            return { index: n, multiple: r, auto: o };
                        });
                    var c = (function() {
                        function e(e, t) {
                            (this._commands = e),
                                (this.type = t.type || 'command'),
                                (this.command = t.command || ''),
                                (this.args = t.args || h.JSONExt.emptyObject),
                                (this.submenu = t.submenu || null);
                        }
                        return (
                            Object.defineProperty(e.prototype, 'label', {
                                get: function() {
                                    return 'command' === this.type
                                        ? this._commands.label(
                                              this.command,
                                              this.args
                                          )
                                        : 'submenu' === this.type &&
                                          this.submenu
                                        ? this.submenu.title.label
                                        : '';
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'mnemonic', {
                                get: function() {
                                    return 'command' === this.type
                                        ? this._commands.mnemonic(
                                              this.command,
                                              this.args
                                          )
                                        : 'submenu' === this.type &&
                                          this.submenu
                                        ? this.submenu.title.mnemonic
                                        : -1;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'icon', {
                                get: function() {
                                    return 'command' === this.type
                                        ? this._commands.icon(
                                              this.command,
                                              this.args
                                          )
                                        : 'submenu' === this.type &&
                                          this.submenu
                                        ? this.submenu.title.icon
                                        : this.iconClass;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'iconClass', {
                                get: function() {
                                    return 'command' === this.type
                                        ? this._commands.iconClass(
                                              this.command,
                                              this.args
                                          )
                                        : 'submenu' === this.type &&
                                          this.submenu
                                        ? this.submenu.title.iconClass
                                        : '';
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'iconLabel', {
                                get: function() {
                                    return 'command' === this.type
                                        ? this._commands.iconLabel(
                                              this.command,
                                              this.args
                                          )
                                        : 'submenu' === this.type &&
                                          this.submenu
                                        ? this.submenu.title.iconLabel
                                        : '';
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'caption', {
                                get: function() {
                                    return 'command' === this.type
                                        ? this._commands.caption(
                                              this.command,
                                              this.args
                                          )
                                        : 'submenu' === this.type &&
                                          this.submenu
                                        ? this.submenu.title.caption
                                        : '';
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'className', {
                                get: function() {
                                    return 'command' === this.type
                                        ? this._commands.className(
                                              this.command,
                                              this.args
                                          )
                                        : 'submenu' === this.type &&
                                          this.submenu
                                        ? this.submenu.title.className
                                        : '';
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'dataset', {
                                get: function() {
                                    return 'command' === this.type
                                        ? this._commands.dataset(
                                              this.command,
                                              this.args
                                          )
                                        : 'submenu' === this.type &&
                                          this.submenu
                                        ? this.submenu.title.dataset
                                        : {};
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'isEnabled', {
                                get: function() {
                                    return 'command' === this.type
                                        ? this._commands.isEnabled(
                                              this.command,
                                              this.args
                                          )
                                        : 'submenu' !== this.type ||
                                              null !== this.submenu;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'isToggled', {
                                get: function() {
                                    return (
                                        'command' === this.type &&
                                        this._commands.isToggled(
                                            this.command,
                                            this.args
                                        )
                                    );
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'isVisible', {
                                get: function() {
                                    return 'command' === this.type
                                        ? this._commands.isVisible(
                                              this.command,
                                              this.args
                                          )
                                        : 'submenu' !== this.type ||
                                              null !== this.submenu;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'keyBinding', {
                                get: function() {
                                    if ('command' === this.type) {
                                        var e = this.command,
                                            t = this.args;
                                        return (
                                            n.ArrayExt.findLastValue(
                                                this._commands.keyBindings,
                                                function(i) {
                                                    return (
                                                        i.command === e &&
                                                        h.JSONExt.deepEqual(
                                                            i.args,
                                                            t
                                                        )
                                                    );
                                                }
                                            ) || null
                                        );
                                    }
                                    return null;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            e
                        );
                    })();
                })(U || (U = {}));
            var Y,
                X = (function() {
                    function e(e) {
                        (this._groupByTarget = !0),
                            (this._idTick = 0),
                            (this._items = []),
                            (this._sortBySelector = !0);
                        var t = e.groupByTarget,
                            i = e.sortBySelector,
                            n = (function(e, t) {
                                var i = {};
                                for (var n in e)
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        n
                                    ) &&
                                        t.indexOf(n) < 0 &&
                                        (i[n] = e[n]);
                                if (
                                    null != e &&
                                    'function' ==
                                        typeof Object.getOwnPropertySymbols
                                ) {
                                    var o = 0;
                                    for (
                                        n = Object.getOwnPropertySymbols(e);
                                        o < n.length;
                                        o++
                                    )
                                        t.indexOf(n[o]) < 0 &&
                                            Object.prototype.propertyIsEnumerable.call(
                                                e,
                                                n[o]
                                            ) &&
                                            (i[n[o]] = e[n[o]]);
                                }
                                return i;
                            })(e, ['groupByTarget', 'sortBySelector']);
                        (this.menu = new V(n)),
                            (this._groupByTarget = !1 !== t),
                            (this._sortBySelector = !1 !== i);
                    }
                    return (
                        (e.prototype.addItem = function(e) {
                            var t = this,
                                i = Y.createItem(e, this._idTick++);
                            return (
                                this._items.push(i),
                                new u.DisposableDelegate(function() {
                                    n.ArrayExt.removeFirstOf(t._items, i);
                                })
                            );
                        }),
                        (e.prototype.open = function(e) {
                            var t = this;
                            if (
                                (V.saveWindowData(),
                                this.menu.clearItems(),
                                0 === this._items.length)
                            )
                                return !1;
                            var i = Y.matchItems(
                                this._items,
                                e,
                                this._groupByTarget,
                                this._sortBySelector
                            );
                            return !(
                                !i ||
                                0 === i.length ||
                                ((0, n.each)(i, function(e) {
                                    t.menu.addItem(e);
                                }),
                                this.menu.open(e.clientX, e.clientY),
                                0)
                            );
                        }),
                        e
                    );
                })();
            !(function(e) {
                function t(e, t) {
                    var i = e.rank,
                        n = t.rank;
                    return i !== n ? (i < n ? -1 : 1) : e.id - t.id;
                }
                function i(e, i) {
                    var n = o.Selector.calculateSpecificity(e.selector),
                        r = o.Selector.calculateSpecificity(i.selector);
                    return n !== r ? r - n : t(e, i);
                }
                (e.createItem = function(e, t) {
                    var i = (function(e) {
                            if (-1 !== e.indexOf(','))
                                throw new Error(
                                    'Selector cannot contain commas: ' + e
                                );
                            if (!o.Selector.isValid(e))
                                throw new Error('Invalid selector: ' + e);
                            return e;
                        })(e.selector),
                        n = void 0 !== e.rank ? e.rank : 1 / 0;
                    return v(v({}, e), { selector: i, rank: n, id: t });
                }),
                    (e.matchItems = function(e, n, r, s) {
                        var a = n.target;
                        if (!a) return null;
                        var d = n.currentTarget;
                        if (!d) return null;
                        if (
                            !(
                                d.contains(a) ||
                                ((a = document.elementFromPoint(
                                    n.clientX,
                                    n.clientY
                                )) &&
                                    d.contains(a))
                            )
                        )
                            return null;
                        for (var h = [], c = e.slice(); null !== a; ) {
                            for (var l = [], u = 0, p = c.length; u < p; ++u) {
                                var m = c[u];
                                m &&
                                    o.Selector.matches(a, m.selector) &&
                                    (l.push(m), (c[u] = null));
                            }
                            if (
                                (0 !== l.length &&
                                    (r && l.sort(s ? i : t),
                                    h.push.apply(h, l)),
                                a === d)
                            )
                                break;
                            a = a.parentElement;
                        }
                        return r || h.sort(s ? i : t), h;
                    });
            })(Y || (Y = {}));
            var K,
                G = (function(e) {
                    function t(i) {
                        void 0 === i && (i = {});
                        var n = e.call(this, { node: K.createNode() }) || this;
                        return (
                            (n._currentIndex = -1),
                            (n._titles = []),
                            (n._titlesEditable = !1),
                            (n._previousTitle = null),
                            (n._dragData = null),
                            (n._addButtonEnabled = !1),
                            (n._tabMoved = new a.Signal(n)),
                            (n._currentChanged = new a.Signal(n)),
                            (n._addRequested = new a.Signal(n)),
                            (n._tabCloseRequested = new a.Signal(n)),
                            (n._tabDetachRequested = new a.Signal(n)),
                            (n._tabActivateRequested = new a.Signal(n)),
                            n.addClass('lm-TabBar'),
                            n.addClass('p-TabBar'),
                            n.contentNode.setAttribute('role', 'tablist'),
                            n.setFlag(M.Flag.DisallowLayout),
                            (n._document = i.document || document),
                            (n.tabsMovable = i.tabsMovable || !1),
                            (n.titlesEditable = i.titlesEditable || !1),
                            (n.allowDeselect = i.allowDeselect || !1),
                            (n.addButtonEnabled = i.addButtonEnabled || !1),
                            (n.insertBehavior =
                                i.insertBehavior || 'select-tab-if-needed'),
                            (n.name = i.name || ''),
                            (n.orientation = i.orientation || 'horizontal'),
                            (n.removeBehavior =
                                i.removeBehavior || 'select-tab-after'),
                            (n.renderer = i.renderer || t.defaultRenderer),
                            n
                        );
                    }
                    return (
                        f(t, e),
                        (t.prototype.dispose = function() {
                            this._releaseMouse(),
                                (this._titles.length = 0),
                                (this._previousTitle = null),
                                e.prototype.dispose.call(this);
                        }),
                        Object.defineProperty(t.prototype, 'currentChanged', {
                            get: function() {
                                return this._currentChanged;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'tabMoved', {
                            get: function() {
                                return this._tabMoved;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(
                            t.prototype,
                            'tabActivateRequested',
                            {
                                get: function() {
                                    return this._tabActivateRequested;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }
                        ),
                        Object.defineProperty(t.prototype, 'addRequested', {
                            get: function() {
                                return this._addRequested;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(
                            t.prototype,
                            'tabCloseRequested',
                            {
                                get: function() {
                                    return this._tabCloseRequested;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }
                        ),
                        Object.defineProperty(
                            t.prototype,
                            'tabDetachRequested',
                            {
                                get: function() {
                                    return this._tabDetachRequested;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }
                        ),
                        Object.defineProperty(t.prototype, 'document', {
                            get: function() {
                                return this._document;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'titlesEditable', {
                            get: function() {
                                return this._titlesEditable;
                            },
                            set: function(e) {
                                this._titlesEditable = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'currentTitle', {
                            get: function() {
                                return this._titles[this._currentIndex] || null;
                            },
                            set: function(e) {
                                this.currentIndex = e
                                    ? this._titles.indexOf(e)
                                    : -1;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'currentIndex', {
                            get: function() {
                                return this._currentIndex;
                            },
                            set: function(e) {
                                if (
                                    ((e < 0 || e >= this._titles.length) &&
                                        (e = -1),
                                    this._currentIndex !== e)
                                ) {
                                    var t = this._currentIndex,
                                        i = this._titles[t] || null,
                                        n = e,
                                        o = this._titles[n] || null;
                                    (this._currentIndex = n),
                                        (this._previousTitle = i),
                                        this.update(),
                                        this._currentChanged.emit({
                                            previousIndex: t,
                                            previousTitle: i,
                                            currentIndex: n,
                                            currentTitle: o,
                                        });
                                }
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'name', {
                            get: function() {
                                return this._name;
                            },
                            set: function(e) {
                                (this._name = e),
                                    e
                                        ? this.contentNode.setAttribute(
                                              'aria-label',
                                              e
                                          )
                                        : this.contentNode.removeAttribute(
                                              'aria-label'
                                          );
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'orientation', {
                            get: function() {
                                return this._orientation;
                            },
                            set: function(e) {
                                this._orientation !== e &&
                                    (this._releaseMouse(),
                                    (this._orientation = e),
                                    (this.dataset.orientation = e),
                                    this.contentNode.setAttribute(
                                        'aria-orientation',
                                        e
                                    ));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'addButtonEnabled', {
                            get: function() {
                                return this._addButtonEnabled;
                            },
                            set: function(e) {
                                this._addButtonEnabled !== e &&
                                    ((this._addButtonEnabled = e),
                                    e
                                        ? this.addButtonNode.classList.remove(
                                              'lm-mod-hidden'
                                          )
                                        : this.addButtonNode.classList.add(
                                              'lm-mod-hidden'
                                          ));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'titles', {
                            get: function() {
                                return this._titles;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'contentNode', {
                            get: function() {
                                return this.node.getElementsByClassName(
                                    'lm-TabBar-content'
                                )[0];
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'addButtonNode', {
                            get: function() {
                                return this.node.getElementsByClassName(
                                    'lm-TabBar-addButton'
                                )[0];
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.addTab = function(e) {
                            return this.insertTab(this._titles.length, e);
                        }),
                        (t.prototype.insertTab = function(e, t) {
                            this._releaseMouse();
                            var i = K.asTitle(t),
                                o = this._titles.indexOf(i),
                                r = Math.max(
                                    0,
                                    Math.min(e, this._titles.length)
                                );
                            return -1 === o
                                ? (n.ArrayExt.insert(this._titles, r, i),
                                  i.changed.connect(this._onTitleChanged, this),
                                  this.update(),
                                  this._adjustCurrentForInsert(r, i),
                                  i)
                                : (r === this._titles.length && r--,
                                  o === r ||
                                      (n.ArrayExt.move(this._titles, o, r),
                                      this.update(),
                                      this._adjustCurrentForMove(o, r)),
                                  i);
                        }),
                        (t.prototype.removeTab = function(e) {
                            this.removeTabAt(this._titles.indexOf(e));
                        }),
                        (t.prototype.removeTabAt = function(e) {
                            this._releaseMouse();
                            var t = n.ArrayExt.removeAt(this._titles, e);
                            t &&
                                (t.changed.disconnect(
                                    this._onTitleChanged,
                                    this
                                ),
                                t === this._previousTitle &&
                                    (this._previousTitle = null),
                                this.update(),
                                this._adjustCurrentForRemove(e, t));
                        }),
                        (t.prototype.clearTabs = function() {
                            if (0 !== this._titles.length) {
                                this._releaseMouse();
                                for (
                                    var e = 0, t = this._titles;
                                    e < t.length;
                                    e++
                                )
                                    t[e].changed.disconnect(
                                        this._onTitleChanged,
                                        this
                                    );
                                var i = this.currentIndex,
                                    n = this.currentTitle;
                                (this._currentIndex = -1),
                                    (this._previousTitle = null),
                                    (this._titles.length = 0),
                                    this.update(),
                                    -1 !== i &&
                                        this._currentChanged.emit({
                                            previousIndex: i,
                                            previousTitle: n,
                                            currentIndex: -1,
                                            currentTitle: null,
                                        });
                            }
                        }),
                        (t.prototype.releaseMouse = function() {
                            this._releaseMouse();
                        }),
                        (t.prototype.handleEvent = function(e) {
                            switch (e.type) {
                                case 'mousedown':
                                case 'pointerdown':
                                    this._evtMouseDown(e);
                                    break;
                                case 'mousemove':
                                case 'pointermove':
                                    this._evtMouseMove(e);
                                    break;
                                case 'mouseup':
                                case 'pointerup':
                                    this._evtMouseUp(e);
                                    break;
                                case 'dblclick':
                                    this._evtDblClick(e);
                                    break;
                                case 'keydown':
                                    this._evtKeyDown(e);
                                    break;
                                case 'contextmenu':
                                    e.preventDefault(), e.stopPropagation();
                            }
                        }),
                        (t.prototype.onBeforeAttach = function(e) {
                            this.node.addEventListener('mousedown', this),
                                this.node.addEventListener('pointerdown', this),
                                this.node.addEventListener('dblclick', this);
                        }),
                        (t.prototype.onAfterDetach = function(e) {
                            this.node.removeEventListener('mousedown', this),
                                this.node.removeEventListener(
                                    'pointerdown',
                                    this
                                ),
                                this.node.removeEventListener('dblclick', this),
                                this._releaseMouse();
                        }),
                        (t.prototype.onUpdateRequest = function(e) {
                            for (
                                var t = this._titles,
                                    i = this.renderer,
                                    n = this.currentTitle,
                                    o = new Array(t.length),
                                    r = 0,
                                    s = t.length;
                                r < s;
                                ++r
                            ) {
                                var a = t[r],
                                    d = a === n,
                                    h = d ? s : s - r - 1;
                                o[r] = i.renderTab({
                                    title: a,
                                    current: d,
                                    zIndex: h,
                                });
                            }
                            l.VirtualDOM.render(o, this.contentNode);
                        }),
                        (t.prototype._evtDblClick = function(e) {
                            if (this.titlesEditable) {
                                var t = this.contentNode.children,
                                    i = n.ArrayExt.findFirstIndex(t, function(
                                        t
                                    ) {
                                        return o.ElementExt.hitTest(
                                            t,
                                            e.clientX,
                                            e.clientY
                                        );
                                    });
                                if (-1 !== i) {
                                    var r = this.titles[i],
                                        s = t[i].querySelector(
                                            '.lm-TabBar-tabLabel'
                                        );
                                    if (s && s.contains(e.target)) {
                                        var a = r.label || '',
                                            d = s.innerHTML;
                                        s.innerHTML = '';
                                        var h = document.createElement('input');
                                        h.classList.add('lm-TabBar-tabInput'),
                                            (h.value = a),
                                            s.appendChild(h);
                                        var c = function() {
                                            h.removeEventListener('blur', c),
                                                (s.innerHTML = d);
                                        };
                                        h.addEventListener('dblclick', function(
                                            e
                                        ) {
                                            return e.stopPropagation();
                                        }),
                                            h.addEventListener('blur', c),
                                            h.addEventListener(
                                                'keydown',
                                                function(e) {
                                                    'Enter' === e.key
                                                        ? ('' !== h.value &&
                                                              (r.label = r.caption =
                                                                  h.value),
                                                          c())
                                                        : 'Escape' === e.key &&
                                                          c();
                                                }
                                            ),
                                            h.select(),
                                            h.focus(),
                                            s.children.length > 0 &&
                                                s.children[0].focus();
                                    }
                                }
                            }
                        }),
                        (t.prototype._evtKeyDown = function(e) {
                            e.preventDefault(),
                                e.stopPropagation(),
                                27 === e.keyCode && this._releaseMouse();
                        }),
                        (t.prototype._evtMouseDown = function(e) {
                            if (
                                (0 === e.button || 1 === e.button) &&
                                !this._dragData
                            ) {
                                var t =
                                        this.addButtonEnabled &&
                                        this.addButtonNode.contains(e.target),
                                    i = this.contentNode.children,
                                    r = n.ArrayExt.findFirstIndex(i, function(
                                        t
                                    ) {
                                        return o.ElementExt.hitTest(
                                            t,
                                            e.clientX,
                                            e.clientY
                                        );
                                    });
                                if (
                                    (-1 !== r || t) &&
                                    (e.preventDefault(),
                                    e.stopPropagation(),
                                    (this._dragData = {
                                        tab: i[r],
                                        index: r,
                                        pressX: e.clientX,
                                        pressY: e.clientY,
                                        tabPos: -1,
                                        tabSize: -1,
                                        tabPressPos: -1,
                                        targetIndex: -1,
                                        tabLayout: null,
                                        contentRect: null,
                                        override: null,
                                        dragActive: !1,
                                        dragAborted: !1,
                                        detachRequested: !1,
                                    }),
                                    this.document.addEventListener(
                                        'mouseup',
                                        this,
                                        !0
                                    ),
                                    this.document.addEventListener(
                                        'pointerup',
                                        this,
                                        !0
                                    ),
                                    1 !== e.button && !t)
                                ) {
                                    var s = i[r].querySelector(
                                        this.renderer.closeIconSelector
                                    );
                                    (s && s.contains(e.target)) ||
                                        (this.tabsMovable &&
                                            (this.document.addEventListener(
                                                'mousemove',
                                                this,
                                                !0
                                            ),
                                            this.document.addEventListener(
                                                'pointermove',
                                                this,
                                                !0
                                            ),
                                            this.document.addEventListener(
                                                'keydown',
                                                this,
                                                !0
                                            ),
                                            this.document.addEventListener(
                                                'contextmenu',
                                                this,
                                                !0
                                            )),
                                        this.allowDeselect &&
                                        this.currentIndex === r
                                            ? (this.currentIndex = -1)
                                            : (this.currentIndex = r),
                                        -1 !== this.currentIndex &&
                                            this._tabActivateRequested.emit({
                                                index: this.currentIndex,
                                                title: this.currentTitle,
                                            }));
                                }
                            }
                        }),
                        (t.prototype._evtMouseMove = function(e) {
                            var t = this._dragData;
                            if (t) {
                                e.preventDefault(), e.stopPropagation();
                                var i = this.contentNode.children;
                                if (t.dragActive || K.dragExceeded(t, e)) {
                                    if (!t.dragActive) {
                                        var n = t.tab.getBoundingClientRect();
                                        'horizontal' === this._orientation
                                            ? ((t.tabPos = t.tab.offsetLeft),
                                              (t.tabSize = n.width),
                                              (t.tabPressPos =
                                                  t.pressX - n.left))
                                            : ((t.tabPos = t.tab.offsetTop),
                                              (t.tabSize = n.height),
                                              (t.tabPressPos =
                                                  t.pressY - n.top)),
                                            (t.tabLayout = K.snapTabLayout(
                                                i,
                                                this._orientation
                                            )),
                                            (t.contentRect = this.contentNode.getBoundingClientRect()),
                                            (t.override = d.Drag.overrideCursor(
                                                'default'
                                            )),
                                            t.tab.classList.add(
                                                'lm-mod-dragging'
                                            ),
                                            this.addClass('lm-mod-dragging'),
                                            t.tab.classList.add(
                                                'p-mod-dragging'
                                            ),
                                            this.addClass('p-mod-dragging'),
                                            (t.dragActive = !0);
                                    }
                                    if (
                                        !t.detachRequested &&
                                        K.detachExceeded(t, e)
                                    ) {
                                        t.detachRequested = !0;
                                        var o = t.index,
                                            r = e.clientX,
                                            s = e.clientY,
                                            a = i[o],
                                            h = this._titles[o];
                                        if (
                                            (this._tabDetachRequested.emit({
                                                index: o,
                                                title: h,
                                                tab: a,
                                                clientX: r,
                                                clientY: s,
                                            }),
                                            t.dragAborted)
                                        )
                                            return;
                                    }
                                    K.layoutTabs(i, t, e, this._orientation);
                                }
                            }
                        }),
                        (t.prototype._evtMouseUp = function(e) {
                            var t = this;
                            if (0 === e.button || 1 === e.button) {
                                var i = this._dragData;
                                if (i) {
                                    if (
                                        (e.preventDefault(),
                                        e.stopPropagation(),
                                        this.document.removeEventListener(
                                            'mousemove',
                                            this,
                                            !0
                                        ),
                                        this.document.removeEventListener(
                                            'mouseup',
                                            this,
                                            !0
                                        ),
                                        this.document.removeEventListener(
                                            'pointermove',
                                            this,
                                            !0
                                        ),
                                        this.document.removeEventListener(
                                            'pointerup',
                                            this,
                                            !0
                                        ),
                                        this.document.removeEventListener(
                                            'keydown',
                                            this,
                                            !0
                                        ),
                                        this.document.removeEventListener(
                                            'contextmenu',
                                            this,
                                            !0
                                        ),
                                        !i.dragActive)
                                    ) {
                                        if (
                                            ((this._dragData = null),
                                            this.addButtonEnabled &&
                                                this.addButtonNode.contains(
                                                    e.target
                                                ))
                                        )
                                            return void this._addRequested.emit(
                                                void 0
                                            );
                                        var s = this.contentNode.children,
                                            a = n.ArrayExt.findFirstIndex(
                                                s,
                                                function(t) {
                                                    return o.ElementExt.hitTest(
                                                        t,
                                                        e.clientX,
                                                        e.clientY
                                                    );
                                                }
                                            );
                                        if (a !== i.index) return;
                                        var d = this._titles[a];
                                        if (!d.closable) return;
                                        if (1 === e.button)
                                            return void this._tabCloseRequested.emit(
                                                { index: a, title: d }
                                            );
                                        var h = s[a].querySelector(
                                            this.renderer.closeIconSelector
                                        );
                                        return h && h.contains(e.target)
                                            ? void this._tabCloseRequested.emit(
                                                  { index: a, title: d }
                                              )
                                            : void 0;
                                    }
                                    if (0 === e.button) {
                                        K.finalizeTabPosition(
                                            i,
                                            this._orientation
                                        ),
                                            i.tab.classList.remove(
                                                'lm-mod-dragging'
                                            ),
                                            i.tab.classList.remove(
                                                'p-mod-dragging'
                                            );
                                        var c = K.parseTransitionDuration(
                                            i.tab
                                        );
                                        setTimeout(function() {
                                            if (!i.dragAborted) {
                                                (t._dragData = null),
                                                    K.resetTabPositions(
                                                        t.contentNode.children,
                                                        t._orientation
                                                    ),
                                                    i.override.dispose(),
                                                    t.removeClass(
                                                        'lm-mod-dragging'
                                                    ),
                                                    t.removeClass(
                                                        'p-mod-dragging'
                                                    );
                                                var e = i.index,
                                                    o = i.targetIndex;
                                                -1 !== o &&
                                                    e !== o &&
                                                    (n.ArrayExt.move(
                                                        t._titles,
                                                        e,
                                                        o
                                                    ),
                                                    t._adjustCurrentForMove(
                                                        e,
                                                        o
                                                    ),
                                                    t._tabMoved.emit({
                                                        fromIndex: e,
                                                        toIndex: o,
                                                        title: t._titles[o],
                                                    }),
                                                    r.MessageLoop.sendMessage(
                                                        t,
                                                        M.Msg.UpdateRequest
                                                    ));
                                            }
                                        }, c);
                                    }
                                }
                            }
                        }),
                        (t.prototype._releaseMouse = function() {
                            var e = this._dragData;
                            e &&
                                ((this._dragData = null),
                                this.document.removeEventListener(
                                    'mousemove',
                                    this,
                                    !0
                                ),
                                this.document.removeEventListener(
                                    'mouseup',
                                    this,
                                    !0
                                ),
                                this.document.removeEventListener(
                                    'pointermove',
                                    this,
                                    !0
                                ),
                                this.document.removeEventListener(
                                    'pointerup',
                                    this,
                                    !0
                                ),
                                this.document.removeEventListener(
                                    'keydown',
                                    this,
                                    !0
                                ),
                                this.document.removeEventListener(
                                    'contextmenu',
                                    this,
                                    !0
                                ),
                                (e.dragAborted = !0),
                                e.dragActive &&
                                    (K.resetTabPositions(
                                        this.contentNode.children,
                                        this._orientation
                                    ),
                                    e.override.dispose(),
                                    e.tab.classList.remove('lm-mod-dragging'),
                                    this.removeClass('lm-mod-dragging'),
                                    e.tab.classList.remove('p-mod-dragging'),
                                    this.removeClass('p-mod-dragging')));
                        }),
                        (t.prototype._adjustCurrentForInsert = function(e, t) {
                            var i = this.currentTitle,
                                n = this._currentIndex,
                                o = this.insertBehavior;
                            if (
                                'select-tab' === o ||
                                ('select-tab-if-needed' === o && -1 === n)
                            )
                                return (
                                    (this._currentIndex = e),
                                    (this._previousTitle = i),
                                    void this._currentChanged.emit({
                                        previousIndex: n,
                                        previousTitle: i,
                                        currentIndex: e,
                                        currentTitle: t,
                                    })
                                );
                            n >= e && this._currentIndex++;
                        }),
                        (t.prototype._adjustCurrentForMove = function(e, t) {
                            this._currentIndex === e
                                ? (this._currentIndex = t)
                                : this._currentIndex < e &&
                                  this._currentIndex >= t
                                ? this._currentIndex++
                                : this._currentIndex > e &&
                                  this._currentIndex <= t &&
                                  this._currentIndex--;
                        }),
                        (t.prototype._adjustCurrentForRemove = function(e, t) {
                            var i = this._currentIndex,
                                n = this.removeBehavior;
                            if (i === e) {
                                if (0 === this._titles.length)
                                    return (
                                        (this._currentIndex = -1),
                                        void this._currentChanged.emit({
                                            previousIndex: e,
                                            previousTitle: t,
                                            currentIndex: -1,
                                            currentTitle: null,
                                        })
                                    );
                                if ('select-tab-after' === n)
                                    return (
                                        (this._currentIndex = Math.min(
                                            e,
                                            this._titles.length - 1
                                        )),
                                        void this._currentChanged.emit({
                                            previousIndex: e,
                                            previousTitle: t,
                                            currentIndex: this._currentIndex,
                                            currentTitle: this.currentTitle,
                                        })
                                    );
                                if ('select-tab-before' === n)
                                    return (
                                        (this._currentIndex = Math.max(
                                            0,
                                            e - 1
                                        )),
                                        void this._currentChanged.emit({
                                            previousIndex: e,
                                            previousTitle: t,
                                            currentIndex: this._currentIndex,
                                            currentTitle: this.currentTitle,
                                        })
                                    );
                                if ('select-previous-tab' === n)
                                    return (
                                        this._previousTitle
                                            ? ((this._currentIndex = this._titles.indexOf(
                                                  this._previousTitle
                                              )),
                                              (this._previousTitle = null))
                                            : (this._currentIndex = Math.min(
                                                  e,
                                                  this._titles.length - 1
                                              )),
                                        void this._currentChanged.emit({
                                            previousIndex: e,
                                            previousTitle: t,
                                            currentIndex: this._currentIndex,
                                            currentTitle: this.currentTitle,
                                        })
                                    );
                                (this._currentIndex = -1),
                                    this._currentChanged.emit({
                                        previousIndex: e,
                                        previousTitle: t,
                                        currentIndex: -1,
                                        currentTitle: null,
                                    });
                            } else i > e && this._currentIndex--;
                        }),
                        (t.prototype._onTitleChanged = function(e) {
                            this.update();
                        }),
                        t
                    );
                })(M);
            !(function(e) {
                var t = (function() {
                    function e() {
                        (this.closeIconSelector = '.lm-TabBar-tabCloseIcon'),
                            (this._tabID = 0),
                            (this._tabKeys = new WeakMap()),
                            (this._uuid = ++e._nInstance);
                    }
                    return (
                        (e.prototype.renderTab = function(e) {
                            var t = e.title.caption,
                                i = this.createTabKey(e),
                                n = i,
                                o = this.createTabStyle(e),
                                r = this.createTabClass(e),
                                s = this.createTabDataset(e),
                                a = this.createTabARIA(e);
                            return e.title.closable
                                ? l.h.li(
                                      v(
                                          {
                                              id: n,
                                              key: i,
                                              className: r,
                                              title: t,
                                              style: o,
                                              dataset: s,
                                          },
                                          a
                                      ),
                                      this.renderIcon(e),
                                      this.renderLabel(e),
                                      this.renderCloseIcon(e)
                                  )
                                : l.h.li(
                                      v(
                                          {
                                              id: n,
                                              key: i,
                                              className: r,
                                              title: t,
                                              style: o,
                                              dataset: s,
                                          },
                                          a
                                      ),
                                      this.renderIcon(e),
                                      this.renderLabel(e)
                                  );
                        }),
                        (e.prototype.renderIcon = function(e) {
                            var t = e.title,
                                i = this.createIconClass(e);
                            return 'string' == typeof t.icon
                                ? l.h.div({ className: i }, t.iconLabel)
                                : l.h.div(
                                      { className: i },
                                      t.icon,
                                      t.iconLabel
                                  );
                        }),
                        (e.prototype.renderLabel = function(e) {
                            return l.h.div(
                                {
                                    className:
                                        'lm-TabBar-tabLabel p-TabBar-tabLabel',
                                },
                                e.title.label
                            );
                        }),
                        (e.prototype.renderCloseIcon = function(e) {
                            return l.h.div({
                                className:
                                    'lm-TabBar-tabCloseIcon p-TabBar-tabCloseIcon',
                            });
                        }),
                        (e.prototype.createTabKey = function(e) {
                            var t = this._tabKeys.get(e.title);
                            return (
                                void 0 === t &&
                                    ((t =
                                        'tab-key-' +
                                        this._uuid +
                                        '-' +
                                        this._tabID++),
                                    this._tabKeys.set(e.title, t)),
                                t
                            );
                        }),
                        (e.prototype.createTabStyle = function(e) {
                            return { zIndex: '' + e.zIndex };
                        }),
                        (e.prototype.createTabClass = function(e) {
                            var t = 'lm-TabBar-tab';
                            return (
                                (t += ' p-TabBar-tab'),
                                e.title.className &&
                                    (t += ' ' + e.title.className),
                                e.title.closable &&
                                    ((t += ' lm-mod-closable'),
                                    (t += ' p-mod-closable')),
                                e.current &&
                                    ((t += ' lm-mod-current'),
                                    (t += ' p-mod-current')),
                                t
                            );
                        }),
                        (e.prototype.createTabDataset = function(e) {
                            return e.title.dataset;
                        }),
                        (e.prototype.createTabARIA = function(e) {
                            return {
                                role: 'tab',
                                'aria-selected': e.current.toString(),
                            };
                        }),
                        (e.prototype.createIconClass = function(e) {
                            var t = 'lm-TabBar-tabIcon';
                            t += ' p-TabBar-tabIcon';
                            var i = e.title.iconClass;
                            return i ? t + ' ' + i : t;
                        }),
                        (e._nInstance = 0),
                        e
                    );
                })();
                (e.Renderer = t),
                    (e.defaultRenderer = new t()),
                    (e.addButtonSelector = '.lm-TabBar-addButton');
            })(G || (G = {})),
                (function(e) {
                    (e.DRAG_THRESHOLD = 5),
                        (e.DETACH_THRESHOLD = 20),
                        (e.createNode = function() {
                            var e = document.createElement('div'),
                                t = document.createElement('ul');
                            t.setAttribute('role', 'tablist'),
                                (t.className = 'lm-TabBar-content'),
                                t.classList.add('p-TabBar-content'),
                                e.appendChild(t);
                            var i = document.createElement('div');
                            return (
                                (i.className =
                                    'lm-TabBar-addButton lm-mod-hidden'),
                                e.appendChild(i),
                                e
                            );
                        }),
                        (e.asTitle = function(e) {
                            return e instanceof _ ? e : new _(e);
                        }),
                        (e.parseTransitionDuration = function(e) {
                            var t = window.getComputedStyle(e);
                            return (
                                1e3 * (parseFloat(t.transitionDuration) || 0)
                            );
                        }),
                        (e.snapTabLayout = function(e, t) {
                            for (
                                var i = new Array(e.length),
                                    n = 0,
                                    o = e.length;
                                n < o;
                                ++n
                            ) {
                                var r = e[n],
                                    s = window.getComputedStyle(r);
                                i[n] =
                                    'horizontal' === t
                                        ? {
                                              pos: r.offsetLeft,
                                              size: r.offsetWidth,
                                              margin:
                                                  parseFloat(s.marginLeft) || 0,
                                          }
                                        : {
                                              pos: r.offsetTop,
                                              size: r.offsetHeight,
                                              margin:
                                                  parseFloat(s.marginTop) || 0,
                                          };
                            }
                            return i;
                        }),
                        (e.dragExceeded = function(t, i) {
                            var n = Math.abs(i.clientX - t.pressX),
                                o = Math.abs(i.clientY - t.pressY);
                            return (
                                n >= e.DRAG_THRESHOLD || o >= e.DRAG_THRESHOLD
                            );
                        }),
                        (e.detachExceeded = function(t, i) {
                            var n = t.contentRect;
                            return (
                                i.clientX < n.left - e.DETACH_THRESHOLD ||
                                i.clientX >= n.right + e.DETACH_THRESHOLD ||
                                i.clientY < n.top - e.DETACH_THRESHOLD ||
                                i.clientY >= n.bottom + e.DETACH_THRESHOLD
                            );
                        }),
                        (e.layoutTabs = function(e, t, i, n) {
                            var o, r, s, a;
                            'horizontal' === n
                                ? ((o = t.pressX),
                                  (r = i.clientX - t.contentRect.left),
                                  (s = i.clientX),
                                  (a = t.contentRect.width))
                                : ((o = t.pressY),
                                  (r = i.clientY - t.contentRect.top),
                                  (s = i.clientY),
                                  (a = t.contentRect.height));
                            for (
                                var d = t.index,
                                    h = r - t.tabPressPos,
                                    c = h + t.tabSize,
                                    l = 0,
                                    u = e.length;
                                l < u;
                                ++l
                            ) {
                                var p = void 0,
                                    m = t.tabLayout[l],
                                    f = m.pos + (m.size >> 1);
                                if (l < t.index && h < f)
                                    (p =
                                        t.tabSize +
                                        t.tabLayout[l + 1].margin +
                                        'px'),
                                        (d = Math.min(d, l));
                                else if (l > t.index && c > f)
                                    (p = -t.tabSize - m.margin + 'px'),
                                        (d = Math.max(d, l));
                                else if (l === t.index) {
                                    var g = s - o,
                                        v = a - (t.tabPos + t.tabSize);
                                    p =
                                        Math.max(-t.tabPos, Math.min(g, v)) +
                                        'px';
                                } else p = '';
                                'horizontal' === n
                                    ? (e[l].style.left = p)
                                    : (e[l].style.top = p);
                            }
                            t.targetIndex = d;
                        }),
                        (e.finalizeTabPosition = function(e, t) {
                            var i, n;
                            if (
                                ((i =
                                    'horizontal' === t
                                        ? e.contentRect.width
                                        : e.contentRect.height),
                                e.targetIndex === e.index)
                            )
                                n = 0;
                            else if (e.targetIndex > e.index)
                                n =
                                    (o = e.tabLayout[e.targetIndex]).pos +
                                    o.size -
                                    e.tabSize -
                                    e.tabPos;
                            else {
                                var o;
                                n =
                                    (o = e.tabLayout[e.targetIndex]).pos -
                                    e.tabPos;
                            }
                            var r = i - (e.tabPos + e.tabSize),
                                s = Math.max(-e.tabPos, Math.min(n, r));
                            'horizontal' === t
                                ? (e.tab.style.left = s + 'px')
                                : (e.tab.style.top = s + 'px');
                        }),
                        (e.resetTabPositions = function(e, t) {
                            (0, n.each)(e, function(e) {
                                'horizontal' === t
                                    ? (e.style.left = '')
                                    : (e.style.top = '');
                            });
                        });
                })(K || (K = {}));
            var J,
                Q = (function(e) {
                    function t(t) {
                        var i = e.call(this) || this;
                        return (
                            (i._spacing = 4),
                            (i._dirty = !1),
                            (i._root = null),
                            (i._box = null),
                            (i._items = new Map()),
                            (i.renderer = t.renderer),
                            void 0 !== t.spacing &&
                                (i._spacing = S.clampDimension(t.spacing)),
                            (i._document = t.document || document),
                            (i._hiddenMode =
                                void 0 !== t.hiddenMode
                                    ? t.hiddenMode
                                    : M.HiddenMode.Display),
                            i
                        );
                    }
                    return (
                        f(t, e),
                        (t.prototype.dispose = function() {
                            var t = this.iter();
                            this._items.forEach(function(e) {
                                e.dispose();
                            }),
                                (this._box = null),
                                (this._root = null),
                                this._items.clear(),
                                (0, n.each)(t, function(e) {
                                    e.dispose();
                                }),
                                e.prototype.dispose.call(this);
                        }),
                        Object.defineProperty(t.prototype, 'hiddenMode', {
                            get: function() {
                                return this._hiddenMode;
                            },
                            set: function(e) {
                                var t = this;
                                this._hiddenMode !== e &&
                                    ((this._hiddenMode = e),
                                    (0, n.each)(this.tabBars(), function(e) {
                                        e.titles.length > 1 &&
                                            e.titles.forEach(function(e) {
                                                e.owner.hiddenMode =
                                                    t._hiddenMode;
                                            });
                                    }));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'spacing', {
                            get: function() {
                                return this._spacing;
                            },
                            set: function(e) {
                                (e = S.clampDimension(e)),
                                    this._spacing !== e &&
                                        ((this._spacing = e),
                                        this.parent && this.parent.fit());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'isEmpty', {
                            get: function() {
                                return null === this._root;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.iter = function() {
                            return this._root
                                ? this._root.iterAllWidgets()
                                : (0, n.empty)();
                        }),
                        (t.prototype.widgets = function() {
                            return this._root
                                ? this._root.iterUserWidgets()
                                : (0, n.empty)();
                        }),
                        (t.prototype.selectedWidgets = function() {
                            return this._root
                                ? this._root.iterSelectedWidgets()
                                : (0, n.empty)();
                        }),
                        (t.prototype.tabBars = function() {
                            return this._root
                                ? this._root.iterTabBars()
                                : (0, n.empty)();
                        }),
                        (t.prototype.handles = function() {
                            return this._root
                                ? this._root.iterHandles()
                                : (0, n.empty)();
                        }),
                        (t.prototype.moveHandle = function(e, t, i) {
                            var n = e.classList.contains('lm-mod-hidden');
                            if (
                                ((n =
                                    n || e.classList.contains('p-mod-hidden')),
                                this._root && !n)
                            ) {
                                var o,
                                    r = this._root.findSplitNode(e);
                                r &&
                                    0 !=
                                        (o =
                                            'horizontal' === r.node.orientation
                                                ? t - e.offsetLeft
                                                : i - e.offsetTop) &&
                                    (r.node.holdSizes(),
                                    g.adjust(r.node.sizers, r.index, o),
                                    this.parent && this.parent.update());
                            }
                        }),
                        (t.prototype.saveLayout = function() {
                            return this._root
                                ? (this._root.holdAllSizes(),
                                  { main: this._root.createConfig() })
                                : { main: null };
                        }),
                        (t.prototype.restoreLayout = function(e) {
                            var t,
                                i = this,
                                o = new Set();
                            t = e.main
                                ? J.normalizeAreaConfig(e.main, o)
                                : null;
                            var r = this.widgets(),
                                s = this.tabBars(),
                                a = this.handles();
                            (this._root = null),
                                (0, n.each)(r, function(e) {
                                    o.has(e) || (e.parent = null);
                                }),
                                (0, n.each)(s, function(e) {
                                    e.dispose();
                                }),
                                (0, n.each)(a, function(e) {
                                    e.parentNode && e.parentNode.removeChild(e);
                                }),
                                o.forEach(function(e) {
                                    e.parent = i.parent;
                                }),
                                (this._root = t
                                    ? J.realizeAreaConfig(
                                          t,
                                          {
                                              createTabBar: function(e) {
                                                  return i._createTabBar();
                                              },
                                              createHandle: function() {
                                                  return i._createHandle();
                                              },
                                          },
                                          this._document
                                      )
                                    : null),
                                this.parent &&
                                    (o.forEach(function(e) {
                                        i.attachWidget(e);
                                    }),
                                    this.parent.fit());
                        }),
                        (t.prototype.addWidget = function(e, t) {
                            void 0 === t && (t = {});
                            var i = t.ref || null,
                                n = t.mode || 'tab-after',
                                o = null;
                            if (
                                (this._root &&
                                    i &&
                                    (o = this._root.findTabNode(i)),
                                i && !o)
                            )
                                throw new Error(
                                    'Reference widget is not in the layout.'
                                );
                            switch (((e.parent = this.parent), n)) {
                                case 'tab-after':
                                    this._insertTab(e, i, o, !0);
                                    break;
                                case 'tab-before':
                                    this._insertTab(e, i, o, !1);
                                    break;
                                case 'split-top':
                                    this._insertSplit(e, i, o, 'vertical', !1);
                                    break;
                                case 'split-left':
                                    this._insertSplit(
                                        e,
                                        i,
                                        o,
                                        'horizontal',
                                        !1
                                    );
                                    break;
                                case 'split-right':
                                    this._insertSplit(
                                        e,
                                        i,
                                        o,
                                        'horizontal',
                                        !0
                                    );
                                    break;
                                case 'split-bottom':
                                    this._insertSplit(e, i, o, 'vertical', !0);
                            }
                            this.parent &&
                                (this.attachWidget(e), this.parent.fit());
                        }),
                        (t.prototype.removeWidget = function(e) {
                            this._removeWidget(e),
                                this.parent &&
                                    (this.detachWidget(e), this.parent.fit());
                        }),
                        (t.prototype.hitTestTabAreas = function(e, t) {
                            if (
                                !this._root ||
                                !this.parent ||
                                !this.parent.isVisible
                            )
                                return null;
                            this._box ||
                                (this._box = o.ElementExt.boxSizing(
                                    this.parent.node
                                ));
                            var i = this.parent.node.getBoundingClientRect(),
                                n = e - i.left - this._box.borderLeft,
                                r = t - i.top - this._box.borderTop,
                                s = this._root.hitTestTabNodes(n, r);
                            if (!s) return null;
                            var a = s.tabBar,
                                d = s.top,
                                h = s.left,
                                c = s.width,
                                l = s.height,
                                u =
                                    this._box.borderLeft +
                                    this._box.borderRight,
                                p =
                                    this._box.borderTop +
                                    this._box.borderBottom;
                            return {
                                tabBar: a,
                                x: n,
                                y: r,
                                top: d,
                                left: h,
                                right: i.width - u - (h + c),
                                bottom: i.height - p - (d + l),
                                width: c,
                                height: l,
                            };
                        }),
                        (t.prototype.init = function() {
                            var t = this;
                            e.prototype.init.call(this),
                                (0, n.each)(this, function(e) {
                                    t.attachWidget(e);
                                }),
                                (0, n.each)(this.handles(), function(e) {
                                    t.parent.node.appendChild(e);
                                }),
                                this.parent.fit();
                        }),
                        (t.prototype.attachWidget = function(e) {
                            this.parent.node !== e.node.parentNode &&
                                (this._items.set(e, new C(e)),
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        e,
                                        M.Msg.BeforeAttach
                                    ),
                                this.parent.node.appendChild(e.node),
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        e,
                                        M.Msg.AfterAttach
                                    ));
                        }),
                        (t.prototype.detachWidget = function(e) {
                            if (this.parent.node === e.node.parentNode) {
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        e,
                                        M.Msg.BeforeDetach
                                    ),
                                    this.parent.node.removeChild(e.node),
                                    this.parent.isAttached &&
                                        r.MessageLoop.sendMessage(
                                            e,
                                            M.Msg.AfterDetach
                                        );
                                var t = this._items.get(e);
                                t && (this._items.delete(e), t.dispose());
                            }
                        }),
                        (t.prototype.onBeforeShow = function(t) {
                            e.prototype.onBeforeShow.call(this, t),
                                this.parent.update();
                        }),
                        (t.prototype.onBeforeAttach = function(t) {
                            e.prototype.onBeforeAttach.call(this, t),
                                this.parent.fit();
                        }),
                        (t.prototype.onChildShown = function(e) {
                            this.parent.fit();
                        }),
                        (t.prototype.onChildHidden = function(e) {
                            this.parent.fit();
                        }),
                        (t.prototype.onResize = function(e) {
                            this.parent.isVisible &&
                                this._update(e.width, e.height);
                        }),
                        (t.prototype.onUpdateRequest = function(e) {
                            this.parent.isVisible && this._update(-1, -1);
                        }),
                        (t.prototype.onFitRequest = function(e) {
                            this.parent.isAttached && this._fit();
                        }),
                        (t.prototype._removeWidget = function(e) {
                            if (this._root) {
                                var t = this._root.findTabNode(e);
                                if (t)
                                    if (
                                        (J.removeAria(e),
                                        t.tabBar.titles.length > 1)
                                    )
                                        t.tabBar.removeTab(e.title),
                                            this._hiddenMode ===
                                                M.HiddenMode.Scale &&
                                                1 == t.tabBar.titles.length &&
                                                (t.tabBar.titles[0].owner.hiddenMode =
                                                    M.HiddenMode.Display);
                                    else if (
                                        (t.tabBar.dispose(), this._root !== t)
                                    ) {
                                        this._root.holdAllSizes();
                                        var i = t.parent;
                                        t.parent = null;
                                        var o = n.ArrayExt.removeFirstOf(
                                                i.children,
                                                t
                                            ),
                                            r = n.ArrayExt.removeAt(
                                                i.handles,
                                                o
                                            );
                                        if (
                                            (n.ArrayExt.removeAt(i.sizers, o),
                                            r.parentNode &&
                                                r.parentNode.removeChild(r),
                                            i.children.length > 1)
                                        )
                                            i.syncHandles();
                                        else {
                                            var s = i.parent;
                                            i.parent = null;
                                            var a = i.children[0],
                                                d = i.handles[0];
                                            if (
                                                ((i.children.length = 0),
                                                (i.handles.length = 0),
                                                (i.sizers.length = 0),
                                                d.parentNode &&
                                                    d.parentNode.removeChild(d),
                                                this._root === i)
                                            )
                                                return (
                                                    (a.parent = null),
                                                    void (this._root = a)
                                                );
                                            var h = s,
                                                c = h.children.indexOf(i);
                                            if (a instanceof J.TabLayoutNode)
                                                return (
                                                    (a.parent = h),
                                                    void (h.children[c] = a)
                                                );
                                            var l = n.ArrayExt.removeAt(
                                                h.handles,
                                                c
                                            );
                                            n.ArrayExt.removeAt(h.children, c),
                                                n.ArrayExt.removeAt(
                                                    h.sizers,
                                                    c
                                                ),
                                                l.parentNode &&
                                                    l.parentNode.removeChild(l);
                                            for (
                                                var u = 0,
                                                    p = a.children.length;
                                                u < p;
                                                ++u
                                            ) {
                                                var m = a.children[u],
                                                    f = a.handles[u],
                                                    g = a.sizers[u];
                                                n.ArrayExt.insert(
                                                    h.children,
                                                    c + u,
                                                    m
                                                ),
                                                    n.ArrayExt.insert(
                                                        h.handles,
                                                        c + u,
                                                        f
                                                    ),
                                                    n.ArrayExt.insert(
                                                        h.sizers,
                                                        c + u,
                                                        g
                                                    ),
                                                    (m.parent = h);
                                            }
                                            (a.children.length = 0),
                                                (a.handles.length = 0),
                                                (a.sizers.length = 0),
                                                (a.parent = null),
                                                h.syncHandles();
                                        }
                                    } else this._root = null;
                            }
                        }),
                        (t.prototype._insertTab = function(e, t, i, n) {
                            if (e !== t) {
                                if (!this._root) {
                                    var o = new J.TabLayoutNode(
                                        this._createTabBar()
                                    );
                                    return (
                                        o.tabBar.addTab(e.title),
                                        (this._root = o),
                                        void J.addAria(e, o.tabBar)
                                    );
                                }
                                var r;
                                i || (i = this._root.findFirstTabNode()),
                                    -1 === i.tabBar.titles.indexOf(e.title) &&
                                        (this._removeWidget(e), e.hide()),
                                    (r = t
                                        ? i.tabBar.titles.indexOf(t.title)
                                        : i.tabBar.currentIndex),
                                    this._hiddenMode === M.HiddenMode.Scale &&
                                    i.tabBar.titles.length > 0
                                        ? (1 == i.tabBar.titles.length &&
                                              (i.tabBar.titles[0].owner.hiddenMode =
                                                  M.HiddenMode.Scale),
                                          (e.hiddenMode = M.HiddenMode.Scale))
                                        : (e.hiddenMode = M.HiddenMode.Display),
                                    i.tabBar.insertTab(
                                        r + (n ? 1 : 0),
                                        e.title
                                    ),
                                    J.addAria(e, i.tabBar);
                            }
                        }),
                        (t.prototype._insertSplit = function(e, t, i, o, r) {
                            if (e !== t || !i || 1 !== i.tabBar.titles.length) {
                                this._removeWidget(e);
                                var s = new J.TabLayoutNode(
                                    this._createTabBar()
                                );
                                if (
                                    (s.tabBar.addTab(e.title),
                                    J.addAria(e, s.tabBar),
                                    this._root)
                                ) {
                                    if (!i || !i.parent) {
                                        var a = this._splitRoot(o),
                                            d = r ? a.children.length : 0;
                                        a.normalizeSizes();
                                        var h = J.createSizer(
                                            i ? 1 : J.GOLDEN_RATIO
                                        );
                                        return (
                                            n.ArrayExt.insert(a.children, d, s),
                                            n.ArrayExt.insert(a.sizers, d, h),
                                            n.ArrayExt.insert(
                                                a.handles,
                                                d,
                                                this._createHandle()
                                            ),
                                            (s.parent = a),
                                            a.normalizeSizes(),
                                            void a.syncHandles()
                                        );
                                    }
                                    var c = i.parent;
                                    if (c.orientation === o) {
                                        var l = c.children.indexOf(i);
                                        c.normalizeSizes();
                                        var u = (c.sizers[l].sizeHint /= 2),
                                            p = l + (r ? 1 : 0);
                                        return (
                                            n.ArrayExt.insert(c.children, p, s),
                                            n.ArrayExt.insert(
                                                c.sizers,
                                                p,
                                                J.createSizer(u)
                                            ),
                                            n.ArrayExt.insert(
                                                c.handles,
                                                p,
                                                this._createHandle()
                                            ),
                                            (s.parent = c),
                                            void c.syncHandles()
                                        );
                                    }
                                    var m = n.ArrayExt.removeFirstOf(
                                            c.children,
                                            i
                                        ),
                                        f = new J.SplitLayoutNode(o);
                                    (f.normalized = !0),
                                        f.children.push(i),
                                        f.sizers.push(J.createSizer(0.5)),
                                        f.handles.push(this._createHandle()),
                                        (i.parent = f);
                                    var g = r ? 1 : 0;
                                    n.ArrayExt.insert(f.children, g, s),
                                        n.ArrayExt.insert(
                                            f.sizers,
                                            g,
                                            J.createSizer(0.5)
                                        ),
                                        n.ArrayExt.insert(
                                            f.handles,
                                            g,
                                            this._createHandle()
                                        ),
                                        (s.parent = f),
                                        f.syncHandles(),
                                        n.ArrayExt.insert(c.children, m, f),
                                        (f.parent = c);
                                } else this._root = s;
                            }
                        }),
                        (t.prototype._splitRoot = function(e) {
                            var t = this._root;
                            if (
                                t instanceof J.SplitLayoutNode &&
                                t.orientation === e
                            )
                                return t;
                            var i = (this._root = new J.SplitLayoutNode(e));
                            return (
                                t &&
                                    (i.children.push(t),
                                    i.sizers.push(J.createSizer(0)),
                                    i.handles.push(this._createHandle()),
                                    (t.parent = i)),
                                i
                            );
                        }),
                        (t.prototype._fit = function() {
                            var e = 0,
                                t = 0;
                            if (this._root) {
                                var i = this._root.fit(
                                    this._spacing,
                                    this._items
                                );
                                (e = i.minWidth), (t = i.minHeight);
                            }
                            var n = (this._box = o.ElementExt.boxSizing(
                                this.parent.node
                            ));
                            (e += n.horizontalSum), (t += n.verticalSum);
                            var s = this.parent.node.style;
                            (s.minWidth = e + 'px'),
                                (s.minHeight = t + 'px'),
                                (this._dirty = !0),
                                this.parent.parent &&
                                    r.MessageLoop.sendMessage(
                                        this.parent.parent,
                                        M.Msg.FitRequest
                                    ),
                                this._dirty &&
                                    r.MessageLoop.sendMessage(
                                        this.parent,
                                        M.Msg.UpdateRequest
                                    );
                        }),
                        (t.prototype._update = function(e, t) {
                            if (((this._dirty = !1), this._root)) {
                                e < 0 && (e = this.parent.node.offsetWidth),
                                    t < 0 &&
                                        (t = this.parent.node.offsetHeight),
                                    this._box ||
                                        (this._box = o.ElementExt.boxSizing(
                                            this.parent.node
                                        ));
                                var i = this._box.paddingTop,
                                    n = this._box.paddingLeft,
                                    r = e - this._box.horizontalSum,
                                    s = t - this._box.verticalSum;
                                this._root.update(
                                    i,
                                    n,
                                    r,
                                    s,
                                    this._spacing,
                                    this._items
                                );
                            }
                        }),
                        (t.prototype._createTabBar = function() {
                            var e = this.renderer.createTabBar(this._document);
                            return (
                                (e.orientation = 'horizontal'),
                                this.parent &&
                                    ((e.parent = this.parent),
                                    this.attachWidget(e)),
                                e
                            );
                        }),
                        (t.prototype._createHandle = function() {
                            var e = this.renderer.createHandle(),
                                t = e.style;
                            return (
                                (t.position = 'absolute'),
                                (t.top = '0'),
                                (t.left = '0'),
                                (t.width = '0'),
                                (t.height = '0'),
                                this.parent && this.parent.node.appendChild(e),
                                e
                            );
                        }),
                        t
                    );
                })(x);
            !(function(e) {
                function t(e) {
                    var t = new b();
                    return (t.sizeHint = e), (t.size = e), t;
                }
                (e.GOLDEN_RATIO = 0.618),
                    (e.createSizer = t),
                    (e.normalizeAreaConfig = function e(t, i) {
                        var o;
                        return (
                            (o =
                                'tab-area' === t.type
                                    ? (function(e, t) {
                                          if (0 === e.widgets.length)
                                              return null;
                                          var i = [];
                                          if (
                                              ((0, n.each)(e.widgets, function(
                                                  e
                                              ) {
                                                  t.has(e) ||
                                                      (t.add(e), i.push(e));
                                              }),
                                              0 === i.length)
                                          )
                                              return null;
                                          var o = e.currentIndex;
                                          return (
                                              -1 !== o &&
                                                  (o < 0 || o >= i.length) &&
                                                  (o = 0),
                                              {
                                                  type: 'tab-area',
                                                  widgets: i,
                                                  currentIndex: o,
                                              }
                                          );
                                      })(t, i)
                                    : (function(t, i) {
                                          for (
                                              var n = t.orientation,
                                                  o = [],
                                                  r = [],
                                                  s = 0,
                                                  a = t.children.length;
                                              s < a;
                                              ++s
                                          ) {
                                              var d = e(t.children[s], i);
                                              d &&
                                                  ('tab-area' === d.type ||
                                                  d.orientation !== n
                                                      ? (o.push(d),
                                                        r.push(
                                                            Math.abs(
                                                                t.sizes[s] || 0
                                                            )
                                                        ))
                                                      : (o.push.apply(
                                                            o,
                                                            d.children
                                                        ),
                                                        r.push.apply(
                                                            r,
                                                            d.sizes
                                                        )));
                                          }
                                          return 0 === o.length
                                              ? null
                                              : 1 === o.length
                                              ? o[0]
                                              : {
                                                    type: 'split-area',
                                                    orientation: n,
                                                    children: o,
                                                    sizes: r,
                                                };
                                      })(t, i)),
                            o
                        );
                    }),
                    (e.realizeAreaConfig = function r(s, a, d) {
                        var h;
                        return (
                            (h =
                                'tab-area' === s.type
                                    ? (function(t, o, r) {
                                          var s = o.createTabBar(r);
                                          return (
                                              (0, n.each)(t.widgets, function(
                                                  t
                                              ) {
                                                  t.hide(),
                                                      s.addTab(t.title),
                                                      e.addAria(t, s);
                                              }),
                                              (s.currentIndex = t.currentIndex),
                                              new i(s)
                                          );
                                      })(s, a, d)
                                    : (function(e, i, s) {
                                          var a = new o(e.orientation);
                                          return (
                                              (0, n.each)(e.children, function(
                                                  n,
                                                  o
                                              ) {
                                                  var d = r(n, i, s),
                                                      h = t(e.sizes[o]),
                                                      c = i.createHandle();
                                                  a.children.push(d),
                                                      a.handles.push(c),
                                                      a.sizers.push(h),
                                                      (d.parent = a);
                                              }),
                                              a.syncHandles(),
                                              a.normalizeSizes(),
                                              a
                                          );
                                      })(s, a, d)),
                            h
                        );
                    });
                var i = (function() {
                    function e(e) {
                        (this.parent = null),
                            (this._top = 0),
                            (this._left = 0),
                            (this._width = 0),
                            (this._height = 0);
                        var t = new b(),
                            i = new b();
                        (t.stretch = 0),
                            (i.stretch = 1),
                            (this.tabBar = e),
                            (this.sizers = [t, i]);
                    }
                    return (
                        Object.defineProperty(e.prototype, 'top', {
                            get: function() {
                                return this._top;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'left', {
                            get: function() {
                                return this._left;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'width', {
                            get: function() {
                                return this._width;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'height', {
                            get: function() {
                                return this._height;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.iterAllWidgets = function() {
                            return (0, n.chain)(
                                (0, n.once)(this.tabBar),
                                this.iterUserWidgets()
                            );
                        }),
                        (e.prototype.iterUserWidgets = function() {
                            return (0, n.map)(this.tabBar.titles, function(e) {
                                return e.owner;
                            });
                        }),
                        (e.prototype.iterSelectedWidgets = function() {
                            var e = this.tabBar.currentTitle;
                            return e ? (0, n.once)(e.owner) : (0, n.empty)();
                        }),
                        (e.prototype.iterTabBars = function() {
                            return (0, n.once)(this.tabBar);
                        }),
                        (e.prototype.iterHandles = function() {
                            return (0, n.empty)();
                        }),
                        (e.prototype.findTabNode = function(e) {
                            return -1 !== this.tabBar.titles.indexOf(e.title)
                                ? this
                                : null;
                        }),
                        (e.prototype.findSplitNode = function(e) {
                            return null;
                        }),
                        (e.prototype.findFirstTabNode = function() {
                            return this;
                        }),
                        (e.prototype.hitTestTabNodes = function(e, t) {
                            return e < this._left ||
                                e >= this._left + this._width ||
                                t < this._top ||
                                t >= this._top + this._height
                                ? null
                                : this;
                        }),
                        (e.prototype.createConfig = function() {
                            return {
                                type: 'tab-area',
                                widgets: this.tabBar.titles.map(function(e) {
                                    return e.owner;
                                }),
                                currentIndex: this.tabBar.currentIndex,
                            };
                        }),
                        (e.prototype.holdAllSizes = function() {}),
                        (e.prototype.fit = function(e, t) {
                            var i = 0,
                                n = 0,
                                o = t.get(this.tabBar),
                                r = this.tabBar.currentTitle,
                                s = r ? t.get(r.owner) : void 0,
                                a = this.sizers,
                                d = a[0],
                                h = a[1];
                            return (
                                o && o.fit(),
                                s && s.fit(),
                                o && !o.isHidden
                                    ? ((i = Math.max(i, o.minWidth)),
                                      (n += o.minHeight),
                                      (d.minSize = o.minHeight),
                                      (d.maxSize = o.maxHeight))
                                    : ((d.minSize = 0), (d.maxSize = 0)),
                                s && !s.isHidden
                                    ? ((i = Math.max(i, s.minWidth)),
                                      (n += s.minHeight),
                                      (h.minSize = s.minHeight),
                                      (h.maxSize = 1 / 0))
                                    : ((h.minSize = 0), (h.maxSize = 1 / 0)),
                                {
                                    minWidth: i,
                                    minHeight: n,
                                    maxWidth: 1 / 0,
                                    maxHeight: 1 / 0,
                                }
                            );
                        }),
                        (e.prototype.update = function(e, t, i, n, o, r) {
                            (this._top = t),
                                (this._left = e),
                                (this._width = i),
                                (this._height = n);
                            var s = r.get(this.tabBar),
                                a = this.tabBar.currentTitle,
                                d = a ? r.get(a.owner) : void 0;
                            if ((g.calc(this.sizers, n), s && !s.isHidden)) {
                                var h = this.sizers[0].size;
                                s.update(e, t, i, h), (t += h);
                            }
                            d &&
                                !d.isHidden &&
                                ((h = this.sizers[1].size),
                                d.update(e, t, i, h));
                        }),
                        e
                    );
                })();
                e.TabLayoutNode = i;
                var o = (function() {
                    function e(e) {
                        (this.parent = null),
                            (this.normalized = !1),
                            (this.children = []),
                            (this.sizers = []),
                            (this.handles = []),
                            (this.orientation = e);
                    }
                    return (
                        (e.prototype.iterAllWidgets = function() {
                            var e = (0, n.map)(this.children, function(e) {
                                return e.iterAllWidgets();
                            });
                            return new n.ChainIterator(e);
                        }),
                        (e.prototype.iterUserWidgets = function() {
                            var e = (0, n.map)(this.children, function(e) {
                                return e.iterUserWidgets();
                            });
                            return new n.ChainIterator(e);
                        }),
                        (e.prototype.iterSelectedWidgets = function() {
                            var e = (0, n.map)(this.children, function(e) {
                                return e.iterSelectedWidgets();
                            });
                            return new n.ChainIterator(e);
                        }),
                        (e.prototype.iterTabBars = function() {
                            var e = (0, n.map)(this.children, function(e) {
                                return e.iterTabBars();
                            });
                            return new n.ChainIterator(e);
                        }),
                        (e.prototype.iterHandles = function() {
                            var e = (0, n.map)(this.children, function(e) {
                                return e.iterHandles();
                            });
                            return (0, n.chain)(
                                this.handles,
                                new n.ChainIterator(e)
                            );
                        }),
                        (e.prototype.findTabNode = function(e) {
                            for (
                                var t = 0, i = this.children.length;
                                t < i;
                                ++t
                            ) {
                                var n = this.children[t].findTabNode(e);
                                if (n) return n;
                            }
                            return null;
                        }),
                        (e.prototype.findSplitNode = function(e) {
                            var t = this.handles.indexOf(e);
                            if (-1 !== t) return { index: t, node: this };
                            for (
                                var i = 0, n = this.children.length;
                                i < n;
                                ++i
                            ) {
                                var o = this.children[i].findSplitNode(e);
                                if (o) return o;
                            }
                            return null;
                        }),
                        (e.prototype.findFirstTabNode = function() {
                            return 0 === this.children.length
                                ? null
                                : this.children[0].findFirstTabNode();
                        }),
                        (e.prototype.hitTestTabNodes = function(e, t) {
                            for (
                                var i = 0, n = this.children.length;
                                i < n;
                                ++i
                            ) {
                                var o = this.children[i].hitTestTabNodes(e, t);
                                if (o) return o;
                            }
                            return null;
                        }),
                        (e.prototype.createConfig = function() {
                            var e = this.orientation,
                                t = this.createNormalizedSizes();
                            return {
                                type: 'split-area',
                                orientation: e,
                                children: this.children.map(function(e) {
                                    return e.createConfig();
                                }),
                                sizes: t,
                            };
                        }),
                        (e.prototype.syncHandles = function() {
                            var e = this;
                            (0, n.each)(this.handles, function(t, i) {
                                t.setAttribute(
                                    'data-orientation',
                                    e.orientation
                                ),
                                    i === e.handles.length - 1
                                        ? (t.classList.add('lm-mod-hidden'),
                                          t.classList.add('p-mod-hidden'))
                                        : (t.classList.remove('lm-mod-hidden'),
                                          t.classList.remove('p-mod-hidden'));
                            });
                        }),
                        (e.prototype.holdSizes = function() {
                            (0, n.each)(this.sizers, function(e) {
                                e.sizeHint = e.size;
                            });
                        }),
                        (e.prototype.holdAllSizes = function() {
                            (0, n.each)(this.children, function(e) {
                                return e.holdAllSizes();
                            }),
                                this.holdSizes();
                        }),
                        (e.prototype.normalizeSizes = function() {
                            var e = this.sizers.length;
                            if (0 !== e) {
                                this.holdSizes();
                                var t = (0, n.reduce)(
                                    this.sizers,
                                    function(e, t) {
                                        return e + t.sizeHint;
                                    },
                                    0
                                );
                                0 === t
                                    ? (0, n.each)(this.sizers, function(t) {
                                          t.size = t.sizeHint = 1 / e;
                                      })
                                    : (0, n.each)(this.sizers, function(e) {
                                          e.size = e.sizeHint /= t;
                                      }),
                                    (this.normalized = !0);
                            }
                        }),
                        (e.prototype.createNormalizedSizes = function() {
                            var e = this.sizers.length;
                            if (0 === e) return [];
                            var t = this.sizers.map(function(e) {
                                    return e.size;
                                }),
                                i = (0, n.reduce)(
                                    t,
                                    function(e, t) {
                                        return e + t;
                                    },
                                    0
                                );
                            return (
                                0 === i
                                    ? (0, n.each)(t, function(i, n) {
                                          t[n] = 1 / e;
                                      })
                                    : (0, n.each)(t, function(e, n) {
                                          t[n] = e / i;
                                      }),
                                t
                            );
                        }),
                        (e.prototype.fit = function(e, t) {
                            for (
                                var i = 'horizontal' === this.orientation,
                                    n =
                                        Math.max(0, this.children.length - 1) *
                                        e,
                                    o = i ? n : 0,
                                    r = i ? 0 : n,
                                    s = 0,
                                    a = this.children.length;
                                s < a;
                                ++s
                            ) {
                                var d = this.children[s].fit(e, t);
                                i
                                    ? ((r = Math.max(r, d.minHeight)),
                                      (o += d.minWidth),
                                      (this.sizers[s].minSize = d.minWidth))
                                    : ((o = Math.max(o, d.minWidth)),
                                      (r += d.minHeight),
                                      (this.sizers[s].minSize = d.minHeight));
                            }
                            return {
                                minWidth: o,
                                minHeight: r,
                                maxWidth: 1 / 0,
                                maxHeight: 1 / 0,
                            };
                        }),
                        (e.prototype.update = function(e, t, i, o, r, s) {
                            var a = 'horizontal' === this.orientation,
                                d = Math.max(0, this.children.length - 1) * r,
                                h = Math.max(0, (a ? i : o) - d);
                            this.normalized &&
                                ((0, n.each)(this.sizers, function(e) {
                                    e.sizeHint *= h;
                                }),
                                (this.normalized = !1)),
                                g.calc(this.sizers, h);
                            for (
                                var c = 0, l = this.children.length;
                                c < l;
                                ++c
                            ) {
                                var u = this.children[c],
                                    p = this.sizers[c].size,
                                    m = this.handles[c].style;
                                a
                                    ? (u.update(e, t, p, o, r, s),
                                      (e += p),
                                      (m.top = t + 'px'),
                                      (m.left = e + 'px'),
                                      (m.width = r + 'px'),
                                      (m.height = o + 'px'),
                                      (e += r))
                                    : (u.update(e, t, i, p, r, s),
                                      (t += p),
                                      (m.top = t + 'px'),
                                      (m.left = e + 'px'),
                                      (m.width = i + 'px'),
                                      (m.height = r + 'px'),
                                      (t += r));
                            }
                        }),
                        e
                    );
                })();
                (e.SplitLayoutNode = o),
                    (e.addAria = function(e, t) {
                        e.node.setAttribute('role', 'tabpanel');
                        var i = t.renderer;
                        if (i instanceof G.Renderer) {
                            var n = i.createTabKey({
                                title: e.title,
                                current: !1,
                                zIndex: 0,
                            });
                            e.node.setAttribute('aria-labelledby', n);
                        }
                    }),
                    (e.removeAria = function(e) {
                        e.node.removeAttribute('role'),
                            e.node.removeAttribute('aria-labelledby');
                    });
            })(J || (J = {}));
            var Z,
                $ = (function(e) {
                    function t(i) {
                        void 0 === i && (i = {});
                        var n = e.call(this) || this;
                        (n._drag = null),
                            (n._tabsMovable = !0),
                            (n._tabsConstrained = !1),
                            (n._addButtonEnabled = !1),
                            (n._pressData = null),
                            (n._layoutModified = new a.Signal(n)),
                            (n._addRequested = new a.Signal(n)),
                            n.addClass('lm-DockPanel'),
                            n.addClass('p-DockPanel'),
                            (n._document = i.document || document),
                            (n._mode = i.mode || 'multiple-document'),
                            (n._renderer = i.renderer || t.defaultRenderer),
                            (n._edges = i.edges || Z.DEFAULT_EDGES),
                            void 0 !== i.tabsMovable &&
                                (n._tabsMovable = i.tabsMovable),
                            void 0 !== i.tabsConstrained &&
                                (n._tabsConstrained = i.tabsConstrained),
                            void 0 !== i.addButtonEnabled &&
                                (n._addButtonEnabled = i.addButtonEnabled),
                            (n.dataset.mode = n._mode);
                        var o = {
                            createTabBar: function() {
                                return n._createTabBar();
                            },
                            createHandle: function() {
                                return n._createHandle();
                            },
                        };
                        return (
                            (n.layout = new Q({
                                document: n._document,
                                renderer: o,
                                spacing: i.spacing,
                                hiddenMode: i.hiddenMode,
                            })),
                            (n.overlay = i.overlay || new t.Overlay()),
                            n.node.appendChild(n.overlay.node),
                            n
                        );
                    }
                    return (
                        f(t, e),
                        (t.prototype.dispose = function() {
                            this._releaseMouse(),
                                this.overlay.hide(0),
                                this._drag && this._drag.dispose(),
                                e.prototype.dispose.call(this);
                        }),
                        Object.defineProperty(t.prototype, 'hiddenMode', {
                            get: function() {
                                return this.layout.hiddenMode;
                            },
                            set: function(e) {
                                this.layout.hiddenMode = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'layoutModified', {
                            get: function() {
                                return this._layoutModified;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'addRequested', {
                            get: function() {
                                return this._addRequested;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'renderer', {
                            get: function() {
                                return this.layout.renderer;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'spacing', {
                            get: function() {
                                return this.layout.spacing;
                            },
                            set: function(e) {
                                this.layout.spacing = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'mode', {
                            get: function() {
                                return this._mode;
                            },
                            set: function(e) {
                                if (this._mode !== e) {
                                    (this._mode = e), (this.dataset.mode = e);
                                    var t = this.layout;
                                    switch (e) {
                                        case 'multiple-document':
                                            (0, n.each)(t.tabBars(), function(
                                                e
                                            ) {
                                                e.show();
                                            });
                                            break;
                                        case 'single-document':
                                            t.restoreLayout(
                                                Z.createSingleDocumentConfig(
                                                    this
                                                )
                                            );
                                            break;
                                        default:
                                            throw 'unreachable';
                                    }
                                    r.MessageLoop.postMessage(
                                        this,
                                        Z.LayoutModified
                                    );
                                }
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'tabsMovable', {
                            get: function() {
                                return this._tabsMovable;
                            },
                            set: function(e) {
                                (this._tabsMovable = e),
                                    (0, n.each)(this.tabBars(), function(t) {
                                        t.tabsMovable = e;
                                    });
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'tabsConstrained', {
                            get: function() {
                                return this._tabsConstrained;
                            },
                            set: function(e) {
                                this._tabsConstrained = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'addButtonEnabled', {
                            get: function() {
                                return this._addButtonEnabled;
                            },
                            set: function(e) {
                                (this._addButtonEnabled = e),
                                    (0, n.each)(this.tabBars(), function(t) {
                                        t.addButtonEnabled = e;
                                    });
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'isEmpty', {
                            get: function() {
                                return this.layout.isEmpty;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.widgets = function() {
                            return this.layout.widgets();
                        }),
                        (t.prototype.selectedWidgets = function() {
                            return this.layout.selectedWidgets();
                        }),
                        (t.prototype.tabBars = function() {
                            return this.layout.tabBars();
                        }),
                        (t.prototype.handles = function() {
                            return this.layout.handles();
                        }),
                        (t.prototype.selectWidget = function(e) {
                            var t = (0, n.find)(this.tabBars(), function(t) {
                                return -1 !== t.titles.indexOf(e.title);
                            });
                            if (!t)
                                throw new Error(
                                    'Widget is not contained in the dock panel.'
                                );
                            t.currentTitle = e.title;
                        }),
                        (t.prototype.activateWidget = function(e) {
                            this.selectWidget(e), e.activate();
                        }),
                        (t.prototype.saveLayout = function() {
                            return this.layout.saveLayout();
                        }),
                        (t.prototype.restoreLayout = function(e) {
                            (this._mode = 'multiple-document'),
                                this.layout.restoreLayout(e),
                                (o.Platform.IS_EDGE || o.Platform.IS_IE) &&
                                    r.MessageLoop.flush(),
                                r.MessageLoop.postMessage(
                                    this,
                                    Z.LayoutModified
                                );
                        }),
                        (t.prototype.addWidget = function(e, t) {
                            void 0 === t && (t = {}),
                                'single-document' === this._mode
                                    ? this.layout.addWidget(e)
                                    : this.layout.addWidget(e, t),
                                r.MessageLoop.postMessage(
                                    this,
                                    Z.LayoutModified
                                );
                        }),
                        (t.prototype.processMessage = function(t) {
                            'layout-modified' === t.type
                                ? this._layoutModified.emit(void 0)
                                : e.prototype.processMessage.call(this, t);
                        }),
                        (t.prototype.handleEvent = function(e) {
                            switch (e.type) {
                                case 'lm-dragenter':
                                    this._evtDragEnter(e);
                                    break;
                                case 'lm-dragleave':
                                    this._evtDragLeave(e);
                                    break;
                                case 'lm-dragover':
                                    this._evtDragOver(e);
                                    break;
                                case 'lm-drop':
                                    this._evtDrop(e);
                                    break;
                                case 'mousedown':
                                case 'pointerdown':
                                    this._evtMouseDown(e);
                                    break;
                                case 'mousemove':
                                case 'pointermove':
                                    this._evtMouseMove(e);
                                    break;
                                case 'mouseup':
                                case 'pointerup':
                                    this._evtMouseUp(e);
                                    break;
                                case 'keydown':
                                    this._evtKeyDown(e);
                                    break;
                                case 'contextmenu':
                                    e.preventDefault(), e.stopPropagation();
                            }
                        }),
                        (t.prototype.onBeforeAttach = function(e) {
                            this.node.addEventListener('lm-dragenter', this),
                                this.node.addEventListener(
                                    'lm-dragleave',
                                    this
                                ),
                                this.node.addEventListener('lm-dragover', this),
                                this.node.addEventListener('lm-drop', this),
                                this.node.addEventListener('mousedown', this),
                                this.node.addEventListener('pointerdown', this);
                        }),
                        (t.prototype.onAfterDetach = function(e) {
                            this.node.removeEventListener('lm-dragenter', this),
                                this.node.removeEventListener(
                                    'lm-dragleave',
                                    this
                                ),
                                this.node.removeEventListener(
                                    'lm-dragover',
                                    this
                                ),
                                this.node.removeEventListener('lm-drop', this),
                                this.node.removeEventListener(
                                    'mousedown',
                                    this
                                ),
                                this.node.removeEventListener(
                                    'pointerdown',
                                    this
                                ),
                                this._releaseMouse();
                        }),
                        (t.prototype.onChildAdded = function(e) {
                            Z.isGeneratedTabBarProperty.get(e.child) ||
                                (e.child.addClass('lm-DockPanel-widget'),
                                e.child.addClass('p-DockPanel-widget'));
                        }),
                        (t.prototype.onChildRemoved = function(e) {
                            Z.isGeneratedTabBarProperty.get(e.child) ||
                                (e.child.removeClass('lm-DockPanel-widget'),
                                e.child.removeClass('p-DockPanel-widget'),
                                r.MessageLoop.postMessage(
                                    this,
                                    Z.LayoutModified
                                ));
                        }),
                        (t.prototype._evtDragEnter = function(e) {
                            e.mimeData.hasData(
                                'application/vnd.lumino.widget-factory'
                            ) && (e.preventDefault(), e.stopPropagation());
                        }),
                        (t.prototype._evtDragLeave = function(e) {
                            e.preventDefault(),
                                (this._tabsConstrained && e.source !== this) ||
                                    (e.stopPropagation(), this.overlay.hide(1));
                        }),
                        (t.prototype._evtDragOver = function(e) {
                            e.preventDefault(),
                                (this._tabsConstrained && e.source !== this) ||
                                'invalid' ===
                                    this._showOverlay(e.clientX, e.clientY)
                                    ? (e.dropAction = 'none')
                                    : (e.stopPropagation(),
                                      (e.dropAction = e.proposedAction));
                        }),
                        (t.prototype._evtDrop = function(e) {
                            if (
                                (e.preventDefault(),
                                this.overlay.hide(0),
                                'none' !== e.proposedAction)
                            ) {
                                var t = e.clientX,
                                    i = e.clientY,
                                    n = Z.findDropTarget(
                                        this,
                                        t,
                                        i,
                                        this._edges
                                    ),
                                    o = n.zone,
                                    r = n.target;
                                if (
                                    (this._tabsConstrained &&
                                        e.source !== this) ||
                                    'invalid' === o
                                )
                                    e.dropAction = 'none';
                                else {
                                    var s = e.mimeData.getData(
                                        'application/vnd.lumino.widget-factory'
                                    );
                                    if ('function' == typeof s) {
                                        var a = s();
                                        if (a instanceof M)
                                            if (a.contains(this))
                                                e.dropAction = 'none';
                                            else {
                                                var d = r
                                                    ? Z.getDropRef(r.tabBar)
                                                    : null;
                                                switch (o) {
                                                    case 'root-all':
                                                        this.addWidget(a);
                                                        break;
                                                    case 'root-top':
                                                        this.addWidget(a, {
                                                            mode: 'split-top',
                                                        });
                                                        break;
                                                    case 'root-left':
                                                        this.addWidget(a, {
                                                            mode: 'split-left',
                                                        });
                                                        break;
                                                    case 'root-right':
                                                        this.addWidget(a, {
                                                            mode: 'split-right',
                                                        });
                                                        break;
                                                    case 'root-bottom':
                                                        this.addWidget(a, {
                                                            mode:
                                                                'split-bottom',
                                                        });
                                                        break;
                                                    case 'widget-all':
                                                    case 'widget-tab':
                                                        this.addWidget(a, {
                                                            mode: 'tab-after',
                                                            ref: d,
                                                        });
                                                        break;
                                                    case 'widget-top':
                                                        this.addWidget(a, {
                                                            mode: 'split-top',
                                                            ref: d,
                                                        });
                                                        break;
                                                    case 'widget-left':
                                                        this.addWidget(a, {
                                                            mode: 'split-left',
                                                            ref: d,
                                                        });
                                                        break;
                                                    case 'widget-right':
                                                        this.addWidget(a, {
                                                            mode: 'split-right',
                                                            ref: d,
                                                        });
                                                        break;
                                                    case 'widget-bottom':
                                                        this.addWidget(a, {
                                                            mode:
                                                                'split-bottom',
                                                            ref: d,
                                                        });
                                                        break;
                                                    default:
                                                        throw 'unreachable';
                                                }
                                                (e.dropAction =
                                                    e.proposedAction),
                                                    e.stopPropagation(),
                                                    this.activateWidget(a);
                                            }
                                        else e.dropAction = 'none';
                                    } else e.dropAction = 'none';
                                }
                            } else e.dropAction = 'none';
                        }),
                        (t.prototype._evtKeyDown = function(e) {
                            e.preventDefault(),
                                e.stopPropagation(),
                                27 === e.keyCode &&
                                    (this._releaseMouse(),
                                    r.MessageLoop.postMessage(
                                        this,
                                        Z.LayoutModified
                                    ));
                        }),
                        (t.prototype._evtMouseDown = function(e) {
                            if (0 === e.button) {
                                var t = this.layout,
                                    i = e.target,
                                    o = (0, n.find)(t.handles(), function(e) {
                                        return e.contains(i);
                                    });
                                if (o) {
                                    e.preventDefault(),
                                        e.stopPropagation(),
                                        this._document.addEventListener(
                                            'keydown',
                                            this,
                                            !0
                                        ),
                                        this._document.addEventListener(
                                            'mouseup',
                                            this,
                                            !0
                                        ),
                                        this._document.addEventListener(
                                            'mousemove',
                                            this,
                                            !0
                                        ),
                                        this._document.addEventListener(
                                            'pointerup',
                                            this,
                                            !0
                                        ),
                                        this._document.addEventListener(
                                            'pointermove',
                                            this,
                                            !0
                                        ),
                                        this._document.addEventListener(
                                            'contextmenu',
                                            this,
                                            !0
                                        );
                                    var r = o.getBoundingClientRect(),
                                        s = e.clientX - r.left,
                                        a = e.clientY - r.top,
                                        h = window.getComputedStyle(o),
                                        c = d.Drag.overrideCursor(
                                            h.cursor,
                                            this._document
                                        );
                                    this._pressData = {
                                        handle: o,
                                        deltaX: s,
                                        deltaY: a,
                                        override: c,
                                    };
                                }
                            }
                        }),
                        (t.prototype._evtMouseMove = function(e) {
                            if (this._pressData) {
                                e.preventDefault(), e.stopPropagation();
                                var t = this.node.getBoundingClientRect(),
                                    i =
                                        e.clientX -
                                        t.left -
                                        this._pressData.deltaX,
                                    n =
                                        e.clientY -
                                        t.top -
                                        this._pressData.deltaY;
                                this.layout.moveHandle(
                                    this._pressData.handle,
                                    i,
                                    n
                                );
                            }
                        }),
                        (t.prototype._evtMouseUp = function(e) {
                            0 === e.button &&
                                (e.preventDefault(),
                                e.stopPropagation(),
                                this._releaseMouse(),
                                r.MessageLoop.postMessage(
                                    this,
                                    Z.LayoutModified
                                ));
                        }),
                        (t.prototype._releaseMouse = function() {
                            this._pressData &&
                                (this._pressData.override.dispose(),
                                (this._pressData = null),
                                this._document.removeEventListener(
                                    'keydown',
                                    this,
                                    !0
                                ),
                                this._document.removeEventListener(
                                    'mouseup',
                                    this,
                                    !0
                                ),
                                this._document.removeEventListener(
                                    'mousemove',
                                    this,
                                    !0
                                ),
                                this._document.removeEventListener(
                                    'pointerup',
                                    this,
                                    !0
                                ),
                                this._document.removeEventListener(
                                    'pointermove',
                                    this,
                                    !0
                                ),
                                this._document.removeEventListener(
                                    'contextmenu',
                                    this,
                                    !0
                                ));
                        }),
                        (t.prototype._showOverlay = function(e, t) {
                            var i,
                                n,
                                r,
                                s,
                                a = Z.findDropTarget(this, e, t, this._edges),
                                d = a.zone,
                                h = a.target;
                            if ('invalid' === d)
                                return this.overlay.hide(100), d;
                            var c = o.ElementExt.boxSizing(this.node),
                                l = this.node.getBoundingClientRect();
                            switch (d) {
                                case 'root-all':
                                    (i = c.paddingTop),
                                        (n = c.paddingLeft),
                                        (r = c.paddingRight),
                                        (s = c.paddingBottom);
                                    break;
                                case 'root-top':
                                    (i = c.paddingTop),
                                        (n = c.paddingLeft),
                                        (r = c.paddingRight),
                                        (s = l.height * Z.GOLDEN_RATIO);
                                    break;
                                case 'root-left':
                                    (i = c.paddingTop),
                                        (n = c.paddingLeft),
                                        (r = l.width * Z.GOLDEN_RATIO),
                                        (s = c.paddingBottom);
                                    break;
                                case 'root-right':
                                    (i = c.paddingTop),
                                        (n = l.width * Z.GOLDEN_RATIO),
                                        (r = c.paddingRight),
                                        (s = c.paddingBottom);
                                    break;
                                case 'root-bottom':
                                    (i = l.height * Z.GOLDEN_RATIO),
                                        (n = c.paddingLeft),
                                        (r = c.paddingRight),
                                        (s = c.paddingBottom);
                                    break;
                                case 'widget-all':
                                    (i = h.top),
                                        (n = h.left),
                                        (r = h.right),
                                        (s = h.bottom);
                                    break;
                                case 'widget-top':
                                    (i = h.top),
                                        (n = h.left),
                                        (r = h.right),
                                        (s = h.bottom + h.height / 2);
                                    break;
                                case 'widget-left':
                                    (i = h.top),
                                        (n = h.left),
                                        (r = h.right + h.width / 2),
                                        (s = h.bottom);
                                    break;
                                case 'widget-right':
                                    (i = h.top),
                                        (n = h.left + h.width / 2),
                                        (r = h.right),
                                        (s = h.bottom);
                                    break;
                                case 'widget-bottom':
                                    (i = h.top + h.height / 2),
                                        (n = h.left),
                                        (r = h.right),
                                        (s = h.bottom);
                                    break;
                                case 'widget-tab':
                                    var u = h.tabBar.node.getBoundingClientRect()
                                        .height;
                                    (i = h.top),
                                        (n = h.left),
                                        (r = h.right),
                                        (s = h.bottom + h.height - u);
                                    break;
                                default:
                                    throw 'unreachable';
                            }
                            return (
                                this.overlay.show({
                                    top: i,
                                    left: n,
                                    right: r,
                                    bottom: s,
                                }),
                                d
                            );
                        }),
                        (t.prototype._createTabBar = function() {
                            var e = this._renderer.createTabBar(this._document);
                            return (
                                Z.isGeneratedTabBarProperty.set(e, !0),
                                'single-document' === this._mode && e.hide(),
                                (e.tabsMovable = this._tabsMovable),
                                (e.allowDeselect = !1),
                                (e.addButtonEnabled = this._addButtonEnabled),
                                (e.removeBehavior = 'select-previous-tab'),
                                (e.insertBehavior = 'select-tab-if-needed'),
                                e.tabMoved.connect(this._onTabMoved, this),
                                e.currentChanged.connect(
                                    this._onCurrentChanged,
                                    this
                                ),
                                e.tabCloseRequested.connect(
                                    this._onTabCloseRequested,
                                    this
                                ),
                                e.tabDetachRequested.connect(
                                    this._onTabDetachRequested,
                                    this
                                ),
                                e.tabActivateRequested.connect(
                                    this._onTabActivateRequested,
                                    this
                                ),
                                e.addRequested.connect(
                                    this._onTabAddRequested,
                                    this
                                ),
                                e
                            );
                        }),
                        (t.prototype._createHandle = function() {
                            return this._renderer.createHandle();
                        }),
                        (t.prototype._onTabMoved = function() {
                            r.MessageLoop.postMessage(this, Z.LayoutModified);
                        }),
                        (t.prototype._onCurrentChanged = function(e, t) {
                            var i = t.previousTitle,
                                n = t.currentTitle;
                            i && i.owner.hide(),
                                n && n.owner.show(),
                                (o.Platform.IS_EDGE || o.Platform.IS_IE) &&
                                    r.MessageLoop.flush(),
                                r.MessageLoop.postMessage(
                                    this,
                                    Z.LayoutModified
                                );
                        }),
                        (t.prototype._onTabAddRequested = function(e) {
                            this._addRequested.emit(e);
                        }),
                        (t.prototype._onTabActivateRequested = function(e, t) {
                            t.title.owner.activate();
                        }),
                        (t.prototype._onTabCloseRequested = function(e, t) {
                            t.title.owner.close();
                        }),
                        (t.prototype._onTabDetachRequested = function(e, t) {
                            var i = this;
                            if (!this._drag) {
                                e.releaseMouse();
                                var n = t.title,
                                    o = t.tab,
                                    r = t.clientX,
                                    s = t.clientY,
                                    a = new h.MimeData();
                                a.setData(
                                    'application/vnd.lumino.widget-factory',
                                    function() {
                                        return n.owner;
                                    }
                                );
                                var c = o.cloneNode(!0);
                                (this._drag = new d.Drag({
                                    document: this._document,
                                    mimeData: a,
                                    dragImage: c,
                                    proposedAction: 'move',
                                    supportedActions: 'move',
                                    source: this,
                                })),
                                    o.classList.add('lm-mod-hidden'),
                                    o.classList.add('p-mod-hidden'),
                                    this._drag.start(r, s).then(function() {
                                        (i._drag = null),
                                            o.classList.remove('lm-mod-hidden'),
                                            o.classList.remove('p-mod-hidden');
                                    });
                            }
                        }),
                        t
                    );
                })(M);
            !(function(e) {
                var t = (function() {
                    function e() {
                        (this._timer = -1),
                            (this._hidden = !0),
                            (this.node = document.createElement('div')),
                            this.node.classList.add('lm-DockPanel-overlay'),
                            this.node.classList.add('lm-mod-hidden'),
                            this.node.classList.add('p-DockPanel-overlay'),
                            this.node.classList.add('p-mod-hidden'),
                            (this.node.style.position = 'absolute');
                    }
                    return (
                        (e.prototype.show = function(e) {
                            var t = this.node.style;
                            (t.top = e.top + 'px'),
                                (t.left = e.left + 'px'),
                                (t.right = e.right + 'px'),
                                (t.bottom = e.bottom + 'px'),
                                clearTimeout(this._timer),
                                (this._timer = -1),
                                this._hidden &&
                                    ((this._hidden = !1),
                                    this.node.classList.remove('lm-mod-hidden'),
                                    this.node.classList.remove('p-mod-hidden'));
                        }),
                        (e.prototype.hide = function(e) {
                            var t = this;
                            if (!this._hidden)
                                return e <= 0
                                    ? (clearTimeout(this._timer),
                                      (this._timer = -1),
                                      (this._hidden = !0),
                                      this.node.classList.add('lm-mod-hidden'),
                                      void this.node.classList.add(
                                          'p-mod-hidden'
                                      ))
                                    : void (
                                          -1 === this._timer &&
                                          (this._timer = window.setTimeout(
                                              function() {
                                                  (t._timer = -1),
                                                      (t._hidden = !0),
                                                      t.node.classList.add(
                                                          'lm-mod-hidden'
                                                      ),
                                                      t.node.classList.add(
                                                          'p-mod-hidden'
                                                      );
                                              },
                                              e
                                          ))
                                      );
                        }),
                        e
                    );
                })();
                e.Overlay = t;
                var i = (function() {
                    function e() {}
                    return (
                        (e.prototype.createTabBar = function(e) {
                            var t = new G({ document: e });
                            return (
                                t.addClass('lm-DockPanel-tabBar'),
                                t.addClass('p-DockPanel-tabBar'),
                                t
                            );
                        }),
                        (e.prototype.createHandle = function() {
                            var e = document.createElement('div');
                            return (
                                (e.className = 'lm-DockPanel-handle'),
                                e.classList.add('p-DockPanel-handle'),
                                e
                            );
                        }),
                        e
                    );
                })();
                (e.Renderer = i), (e.defaultRenderer = new i());
            })($ || ($ = {})),
                (function(e) {
                    (e.GOLDEN_RATIO = 0.618),
                        (e.DEFAULT_EDGES = {
                            top: 12,
                            right: 40,
                            bottom: 40,
                            left: 40,
                        }),
                        (e.LayoutModified = new r.ConflatableMessage(
                            'layout-modified'
                        )),
                        (e.isGeneratedTabBarProperty = new s.AttachedProperty({
                            name: 'isGeneratedTabBar',
                            create: function() {
                                return !1;
                            },
                        })),
                        (e.createSingleDocumentConfig = function(e) {
                            if (e.isEmpty) return { main: null };
                            var t = (0, n.toArray)(e.widgets()),
                                i = e.selectedWidgets().next(),
                                o = i ? t.indexOf(i) : -1;
                            return {
                                main: {
                                    type: 'tab-area',
                                    widgets: t,
                                    currentIndex: o,
                                },
                            };
                        }),
                        (e.findDropTarget = function(e, t, i, n) {
                            if (!o.ElementExt.hitTest(e.node, t, i))
                                return { zone: 'invalid', target: null };
                            var r = e.layout;
                            if (r.isEmpty)
                                return { zone: 'root-all', target: null };
                            if ('multiple-document' === e.mode) {
                                var s = e.node.getBoundingClientRect(),
                                    a = t - s.left + 1,
                                    d = i - s.top + 1,
                                    h = s.right - t,
                                    c = s.bottom - i;
                                switch (Math.min(d, h, c, a)) {
                                    case d:
                                        if (d < n.top)
                                            return {
                                                zone: 'root-top',
                                                target: null,
                                            };
                                        break;
                                    case h:
                                        if (h < n.right)
                                            return {
                                                zone: 'root-right',
                                                target: null,
                                            };
                                        break;
                                    case c:
                                        if (c < n.bottom)
                                            return {
                                                zone: 'root-bottom',
                                                target: null,
                                            };
                                        break;
                                    case a:
                                        if (a < n.left)
                                            return {
                                                zone: 'root-left',
                                                target: null,
                                            };
                                        break;
                                    default:
                                        throw 'unreachable';
                                }
                            }
                            var l = r.hitTestTabAreas(t, i);
                            if (!l) return { zone: 'invalid', target: null };
                            if ('single-document' === e.mode)
                                return { zone: 'widget-all', target: l };
                            var u = l.x - l.left + 1,
                                p = l.y - l.top + 1,
                                m = l.left + l.width - l.x,
                                f = l.top + l.height - l.y;
                            if (
                                p < l.tabBar.node.getBoundingClientRect().height
                            )
                                return { zone: 'widget-tab', target: l };
                            var g,
                                v = Math.round(l.width / 3),
                                b = Math.round(l.height / 3);
                            if (u > v && m > v && p > b && f > b)
                                return { zone: 'widget-all', target: l };
                            switch (
                                ((u /= v),
                                (p /= b),
                                (m /= v),
                                (f /= b),
                                Math.min(u, p, m, f))
                            ) {
                                case u:
                                    g = 'widget-left';
                                    break;
                                case p:
                                    g = 'widget-top';
                                    break;
                                case m:
                                    g = 'widget-right';
                                    break;
                                case f:
                                    g = 'widget-bottom';
                                    break;
                                default:
                                    throw 'unreachable';
                            }
                            return { zone: g, target: l };
                        }),
                        (e.getDropRef = function(e) {
                            return 0 === e.titles.length
                                ? null
                                : e.currentTitle
                                ? e.currentTitle.owner
                                : e.titles[e.titles.length - 1].owner;
                        });
                })(Z || (Z = {}));
            var ee,
                te = (function() {
                    function e() {
                        (this._counter = 0),
                            (this._widgets = []),
                            (this._activeWidget = null),
                            (this._currentWidget = null),
                            (this._numbers = new Map()),
                            (this._nodes = new Map()),
                            (this._activeChanged = new a.Signal(this)),
                            (this._currentChanged = new a.Signal(this));
                    }
                    return (
                        (e.prototype.dispose = function() {
                            var e = this;
                            this._counter < 0 ||
                                ((this._counter = -1),
                                a.Signal.clearData(this),
                                (0, n.each)(this._widgets, function(t) {
                                    t.node.removeEventListener('focus', e, !0),
                                        t.node.removeEventListener(
                                            'blur',
                                            e,
                                            !0
                                        );
                                }),
                                (this._activeWidget = null),
                                (this._currentWidget = null),
                                this._nodes.clear(),
                                this._numbers.clear(),
                                (this._widgets.length = 0));
                        }),
                        Object.defineProperty(e.prototype, 'currentChanged', {
                            get: function() {
                                return this._currentChanged;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'activeChanged', {
                            get: function() {
                                return this._activeChanged;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'isDisposed', {
                            get: function() {
                                return this._counter < 0;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'currentWidget', {
                            get: function() {
                                return this._currentWidget;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'activeWidget', {
                            get: function() {
                                return this._activeWidget;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'widgets', {
                            get: function() {
                                return this._widgets;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.focusNumber = function(e) {
                            var t = this._numbers.get(e);
                            return void 0 === t ? -1 : t;
                        }),
                        (e.prototype.has = function(e) {
                            return this._numbers.has(e);
                        }),
                        (e.prototype.add = function(e) {
                            if (!this._numbers.has(e)) {
                                var t = e.node.contains(document.activeElement),
                                    i = t ? this._counter++ : -1;
                                this._widgets.push(e),
                                    this._numbers.set(e, i),
                                    this._nodes.set(e.node, e),
                                    e.node.addEventListener('focus', this, !0),
                                    e.node.addEventListener('blur', this, !0),
                                    e.disposed.connect(
                                        this._onWidgetDisposed,
                                        this
                                    ),
                                    t && this._setWidgets(e, e);
                            }
                        }),
                        (e.prototype.remove = function(e) {
                            var t = this;
                            if (
                                this._numbers.has(e) &&
                                (e.disposed.disconnect(
                                    this._onWidgetDisposed,
                                    this
                                ),
                                e.node.removeEventListener('focus', this, !0),
                                e.node.removeEventListener('blur', this, !0),
                                n.ArrayExt.removeFirstOf(this._widgets, e),
                                this._nodes.delete(e.node),
                                this._numbers.delete(e),
                                this._currentWidget === e)
                            ) {
                                var i = (0, n.filter)(this._widgets, function(
                                        e
                                    ) {
                                        return -1 !== t._numbers.get(e);
                                    }),
                                    o =
                                        (0, n.max)(i, function(e, i) {
                                            return (
                                                t._numbers.get(e) -
                                                t._numbers.get(i)
                                            );
                                        }) || null;
                                this._setWidgets(o, null);
                            }
                        }),
                        (e.prototype.handleEvent = function(e) {
                            switch (e.type) {
                                case 'focus':
                                    this._evtFocus(e);
                                    break;
                                case 'blur':
                                    this._evtBlur(e);
                            }
                        }),
                        (e.prototype._setWidgets = function(e, t) {
                            var i = this._currentWidget;
                            this._currentWidget = e;
                            var n = this._activeWidget;
                            (this._activeWidget = t),
                                i !== e &&
                                    this._currentChanged.emit({
                                        oldValue: i,
                                        newValue: e,
                                    }),
                                n !== t &&
                                    this._activeChanged.emit({
                                        oldValue: n,
                                        newValue: t,
                                    });
                        }),
                        (e.prototype._evtFocus = function(e) {
                            var t = this._nodes.get(e.currentTarget);
                            t !== this._currentWidget &&
                                this._numbers.set(t, this._counter++),
                                this._setWidgets(t, t);
                        }),
                        (e.prototype._evtBlur = function(e) {
                            var t = this._nodes.get(e.currentTarget),
                                i = e.relatedTarget;
                            (i &&
                                (t.node.contains(i) ||
                                    (0, n.find)(this._widgets, function(e) {
                                        return e.node.contains(i);
                                    }))) ||
                                this._setWidgets(this._currentWidget, null);
                        }),
                        (e.prototype._onWidgetDisposed = function(e) {
                            this.remove(e);
                        }),
                        e
                    );
                })(),
                ie = (function(e) {
                    function t(t) {
                        void 0 === t && (t = {});
                        var i = e.call(this, t) || this;
                        return (
                            (i._dirty = !1),
                            (i._rowSpacing = 4),
                            (i._columnSpacing = 4),
                            (i._items = []),
                            (i._rowStarts = []),
                            (i._columnStarts = []),
                            (i._rowSizers = [new b()]),
                            (i._columnSizers = [new b()]),
                            (i._box = null),
                            void 0 !== t.rowCount &&
                                ee.reallocSizers(i._rowSizers, t.rowCount),
                            void 0 !== t.columnCount &&
                                ee.reallocSizers(
                                    i._columnSizers,
                                    t.columnCount
                                ),
                            void 0 !== t.rowSpacing &&
                                (i._rowSpacing = ee.clampValue(t.rowSpacing)),
                            void 0 !== t.columnSpacing &&
                                (i._columnSpacing = ee.clampValue(
                                    t.columnSpacing
                                )),
                            i
                        );
                    }
                    return (
                        f(t, e),
                        (t.prototype.dispose = function() {
                            (0, n.each)(this._items, function(e) {
                                var t = e.widget;
                                e.dispose(), t.dispose();
                            }),
                                (this._box = null),
                                (this._items.length = 0),
                                (this._rowStarts.length = 0),
                                (this._rowSizers.length = 0),
                                (this._columnStarts.length = 0),
                                (this._columnSizers.length = 0),
                                e.prototype.dispose.call(this);
                        }),
                        Object.defineProperty(t.prototype, 'rowCount', {
                            get: function() {
                                return this._rowSizers.length;
                            },
                            set: function(e) {
                                e !== this.rowCount &&
                                    (ee.reallocSizers(this._rowSizers, e),
                                    this.parent && this.parent.fit());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'columnCount', {
                            get: function() {
                                return this._columnSizers.length;
                            },
                            set: function(e) {
                                e !== this.columnCount &&
                                    (ee.reallocSizers(this._columnSizers, e),
                                    this.parent && this.parent.fit());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'rowSpacing', {
                            get: function() {
                                return this._rowSpacing;
                            },
                            set: function(e) {
                                (e = ee.clampValue(e)),
                                    this._rowSpacing !== e &&
                                        ((this._rowSpacing = e),
                                        this.parent && this.parent.fit());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'columnSpacing', {
                            get: function() {
                                return this._columnSpacing;
                            },
                            set: function(e) {
                                (e = ee.clampValue(e)),
                                    this._columnSpacing !== e &&
                                        ((this._columnSpacing = e),
                                        this.parent && this.parent.fit());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.rowStretch = function(e) {
                            var t = this._rowSizers[e];
                            return t ? t.stretch : -1;
                        }),
                        (t.prototype.setRowStretch = function(e, t) {
                            var i = this._rowSizers[e];
                            i &&
                                ((t = ee.clampValue(t)),
                                i.stretch !== t &&
                                    ((i.stretch = t),
                                    this.parent && this.parent.update()));
                        }),
                        (t.prototype.columnStretch = function(e) {
                            var t = this._columnSizers[e];
                            return t ? t.stretch : -1;
                        }),
                        (t.prototype.setColumnStretch = function(e, t) {
                            var i = this._columnSizers[e];
                            i &&
                                ((t = ee.clampValue(t)),
                                i.stretch !== t &&
                                    ((i.stretch = t),
                                    this.parent && this.parent.update()));
                        }),
                        (t.prototype.iter = function() {
                            return (0, n.map)(this._items, function(e) {
                                return e.widget;
                            });
                        }),
                        (t.prototype.addWidget = function(e) {
                            -1 ===
                                n.ArrayExt.findFirstIndex(this._items, function(
                                    t
                                ) {
                                    return t.widget === e;
                                }) &&
                                (this._items.push(new C(e)),
                                this.parent && this.attachWidget(e));
                        }),
                        (t.prototype.removeWidget = function(e) {
                            var t = n.ArrayExt.findFirstIndex(
                                this._items,
                                function(t) {
                                    return t.widget === e;
                                }
                            );
                            if (-1 !== t) {
                                var i = n.ArrayExt.removeAt(this._items, t);
                                this.parent && this.detachWidget(e),
                                    i.dispose();
                            }
                        }),
                        (t.prototype.init = function() {
                            var t = this;
                            e.prototype.init.call(this),
                                (0, n.each)(this, function(e) {
                                    t.attachWidget(e);
                                });
                        }),
                        (t.prototype.attachWidget = function(e) {
                            this.parent.isAttached &&
                                r.MessageLoop.sendMessage(
                                    e,
                                    M.Msg.BeforeAttach
                                ),
                                this.parent.node.appendChild(e.node),
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        e,
                                        M.Msg.AfterAttach
                                    ),
                                this.parent.fit();
                        }),
                        (t.prototype.detachWidget = function(e) {
                            this.parent.isAttached &&
                                r.MessageLoop.sendMessage(
                                    e,
                                    M.Msg.BeforeDetach
                                ),
                                this.parent.node.removeChild(e.node),
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        e,
                                        M.Msg.AfterDetach
                                    ),
                                this.parent.fit();
                        }),
                        (t.prototype.onBeforeShow = function(t) {
                            e.prototype.onBeforeShow.call(this, t),
                                this.parent.update();
                        }),
                        (t.prototype.onBeforeAttach = function(t) {
                            e.prototype.onBeforeAttach.call(this, t),
                                this.parent.fit();
                        }),
                        (t.prototype.onChildShown = function(e) {
                            this.parent.fit();
                        }),
                        (t.prototype.onChildHidden = function(e) {
                            this.parent.fit();
                        }),
                        (t.prototype.onResize = function(e) {
                            this.parent.isVisible &&
                                this._update(e.width, e.height);
                        }),
                        (t.prototype.onUpdateRequest = function(e) {
                            this.parent.isVisible && this._update(-1, -1);
                        }),
                        (t.prototype.onFitRequest = function(e) {
                            this.parent.isAttached && this._fit();
                        }),
                        (t.prototype._fit = function() {
                            for (var e = 0, i = this.rowCount; e < i; ++e)
                                this._rowSizers[e].minSize = 0;
                            for (e = 0, i = this.columnCount; e < i; ++e)
                                this._columnSizers[e].minSize = 0;
                            var n = this._items.filter(function(e) {
                                return !e.isHidden;
                            });
                            for (e = 0, i = n.length; e < i; ++e) n[e].fit();
                            var s = this.rowCount - 1,
                                a = this.columnCount - 1;
                            for (
                                n.sort(ee.rowSpanCmp), e = 0, i = n.length;
                                e < i;
                                ++e
                            ) {
                                var d = n[e],
                                    h = t.getCellConfig(d.widget),
                                    c = Math.min(h.row, s),
                                    l = Math.min(h.row + h.rowSpan - 1, s);
                                ee.distributeMin(
                                    this._rowSizers,
                                    c,
                                    l,
                                    d.minHeight
                                );
                            }
                            for (
                                n.sort(ee.columnSpanCmp), e = 0, i = n.length;
                                e < i;
                                ++e
                            ) {
                                (d = n[e]), (h = t.getCellConfig(d.widget));
                                var u = Math.min(h.column, a),
                                    p = Math.min(
                                        h.column + h.columnSpan - 1,
                                        a
                                    );
                                ee.distributeMin(
                                    this._columnSizers,
                                    u,
                                    p,
                                    d.minWidth
                                );
                            }
                            if ('set-no-constraint' !== this.fitPolicy) {
                                var m = s * this._rowSpacing,
                                    f = a * this._columnSpacing;
                                for (e = 0, i = this.rowCount; e < i; ++e)
                                    m += this._rowSizers[e].minSize;
                                for (e = 0, i = this.columnCount; e < i; ++e)
                                    f += this._columnSizers[e].minSize;
                                var g = (this._box = o.ElementExt.boxSizing(
                                    this.parent.node
                                ));
                                (f += g.horizontalSum), (m += g.verticalSum);
                                var v = this.parent.node.style;
                                (v.minWidth = f + 'px'),
                                    (v.minHeight = m + 'px'),
                                    (this._dirty = !0),
                                    this.parent.parent &&
                                        r.MessageLoop.sendMessage(
                                            this.parent.parent,
                                            M.Msg.FitRequest
                                        ),
                                    this._dirty &&
                                        r.MessageLoop.sendMessage(
                                            this.parent,
                                            M.Msg.UpdateRequest
                                        );
                            } else
                                r.MessageLoop.sendMessage(
                                    this.parent,
                                    M.Msg.UpdateRequest
                                );
                        }),
                        (t.prototype._update = function(e, i) {
                            (this._dirty = !1),
                                e < 0 && (e = this.parent.node.offsetWidth),
                                i < 0 && (i = this.parent.node.offsetHeight),
                                this._box ||
                                    (this._box = o.ElementExt.boxSizing(
                                        this.parent.node
                                    ));
                            var n = this._box.paddingTop,
                                r = this._box.paddingLeft,
                                s = e - this._box.horizontalSum,
                                a = i - this._box.verticalSum,
                                d = this.rowCount - 1,
                                h = this.columnCount - 1,
                                c = d * this._rowSpacing,
                                l = h * this._columnSpacing;
                            g.calc(this._rowSizers, Math.max(0, a - c)),
                                g.calc(this._columnSizers, Math.max(0, s - l));
                            for (
                                var u = 0, p = n, m = this.rowCount;
                                u < m;
                                ++u
                            )
                                (this._rowStarts[u] = p),
                                    (p +=
                                        this._rowSizers[u].size +
                                        this._rowSpacing);
                            for (u = 0, p = r, m = this.columnCount; u < m; ++u)
                                (this._columnStarts[u] = p),
                                    (p +=
                                        this._columnSizers[u].size +
                                        this._columnSpacing);
                            for (u = 0, m = this._items.length; u < m; ++u) {
                                var f = this._items[u];
                                if (!f.isHidden) {
                                    var v = t.getCellConfig(f.widget),
                                        b = Math.min(v.row, d),
                                        y = Math.min(v.column, h),
                                        _ = Math.min(v.row + v.rowSpan - 1, d),
                                        M = Math.min(
                                            v.column + v.columnSpan - 1,
                                            h
                                        ),
                                        x = this._columnStarts[y],
                                        w = this._rowStarts[b],
                                        C =
                                            this._columnStarts[M] +
                                            this._columnSizers[M].size -
                                            x,
                                        L =
                                            this._rowStarts[_] +
                                            this._rowSizers[_].size -
                                            w;
                                    f.update(x, w, C, L);
                                }
                            }
                        }),
                        t
                    );
                })(x);
            !(function(e) {
                (e.getCellConfig = function(e) {
                    return ee.cellConfigProperty.get(e);
                }),
                    (e.setCellConfig = function(e, t) {
                        ee.cellConfigProperty.set(e, ee.normalizeConfig(t));
                    });
            })(ie || (ie = {})),
                (function(e) {
                    (e.cellConfigProperty = new s.AttachedProperty({
                        name: 'cellConfig',
                        create: function() {
                            return {
                                row: 0,
                                column: 0,
                                rowSpan: 1,
                                columnSpan: 1,
                            };
                        },
                        changed: function(e) {
                            e.parent &&
                                e.parent.layout instanceof ie &&
                                e.parent.fit();
                        },
                    })),
                        (e.normalizeConfig = function(e) {
                            return {
                                row: Math.max(0, Math.floor(e.row || 0)),
                                column: Math.max(0, Math.floor(e.column || 0)),
                                rowSpan: Math.max(
                                    1,
                                    Math.floor(e.rowSpan || 0)
                                ),
                                columnSpan: Math.max(
                                    1,
                                    Math.floor(e.columnSpan || 0)
                                ),
                            };
                        }),
                        (e.clampValue = function(e) {
                            return Math.max(0, Math.floor(e));
                        }),
                        (e.rowSpanCmp = function(t, i) {
                            var n = e.cellConfigProperty.get(t.widget),
                                o = e.cellConfigProperty.get(i.widget);
                            return n.rowSpan - o.rowSpan;
                        }),
                        (e.columnSpanCmp = function(t, i) {
                            var n = e.cellConfigProperty.get(t.widget),
                                o = e.cellConfigProperty.get(i.widget);
                            return n.columnSpan - o.columnSpan;
                        }),
                        (e.reallocSizers = function(e, t) {
                            for (t = Math.max(1, Math.floor(t)); e.length < t; )
                                e.push(new b());
                            e.length > t && (e.length = t);
                        }),
                        (e.distributeMin = function(e, t, i, n) {
                            if (!(i < t))
                                if (t !== i) {
                                    for (var o = 0, r = t; r <= i; ++r)
                                        o += e[r].minSize;
                                    if (!(o >= n)) {
                                        var s = (n - o) / (i - t + 1);
                                        for (r = t; r <= i; ++r)
                                            e[r].minSize += s;
                                    }
                                } else {
                                    var a = e[t];
                                    a.minSize = Math.max(a.minSize, n);
                                }
                        });
                })(ee || (ee = {}));
            var ne,
                oe = (function(e) {
                    function t(i) {
                        void 0 === i && (i = {});
                        var n = e.call(this, { node: ne.createNode() }) || this;
                        return (
                            (n._activeIndex = -1),
                            (n._tabFocusIndex = 0),
                            (n._menus = []),
                            (n._childMenu = null),
                            n.addClass('lm-MenuBar'),
                            n.addClass('p-MenuBar'),
                            n.setFlag(M.Flag.DisallowLayout),
                            (n.renderer = i.renderer || t.defaultRenderer),
                            (n._forceItemsPosition = i.forceItemsPosition || {
                                forceX: !0,
                                forceY: !0,
                            }),
                            n
                        );
                    }
                    return (
                        f(t, e),
                        (t.prototype.dispose = function() {
                            this._closeChildMenu(),
                                (this._menus.length = 0),
                                e.prototype.dispose.call(this);
                        }),
                        Object.defineProperty(t.prototype, 'childMenu', {
                            get: function() {
                                return this._childMenu;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'contentNode', {
                            get: function() {
                                return this.node.getElementsByClassName(
                                    'lm-MenuBar-content'
                                )[0];
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'activeMenu', {
                            get: function() {
                                return this._menus[this._activeIndex] || null;
                            },
                            set: function(e) {
                                this.activeIndex = e
                                    ? this._menus.indexOf(e)
                                    : -1;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'activeIndex', {
                            get: function() {
                                return this._activeIndex;
                            },
                            set: function(e) {
                                (e < 0 || e >= this._menus.length) && (e = -1),
                                    this._activeIndex !== e &&
                                        ((this._activeIndex = e),
                                        -1 !== e && (this._tabFocusIndex = e),
                                        this._activeIndex >= 0 &&
                                            this.contentNode.childNodes[
                                                this._activeIndex
                                            ] &&
                                            this.contentNode.childNodes[
                                                this._activeIndex
                                            ].focus(),
                                        this.update());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'menus', {
                            get: function() {
                                return this._menus;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.openActiveMenu = function() {
                            -1 !== this._activeIndex &&
                                (this._openChildMenu(),
                                this._childMenu &&
                                    ((this._childMenu.activeIndex = -1),
                                    this._childMenu.activateNextItem()));
                        }),
                        (t.prototype.addMenu = function(e) {
                            this.insertMenu(this._menus.length, e);
                        }),
                        (t.prototype.insertMenu = function(e, t) {
                            this._closeChildMenu();
                            var i = this._menus.indexOf(t),
                                o = Math.max(
                                    0,
                                    Math.min(e, this._menus.length)
                                );
                            if (-1 === i)
                                return (
                                    n.ArrayExt.insert(this._menus, o, t),
                                    t.addClass('lm-MenuBar-menu'),
                                    t.addClass('p-MenuBar-menu'),
                                    t.aboutToClose.connect(
                                        this._onMenuAboutToClose,
                                        this
                                    ),
                                    t.menuRequested.connect(
                                        this._onMenuMenuRequested,
                                        this
                                    ),
                                    t.title.changed.connect(
                                        this._onTitleChanged,
                                        this
                                    ),
                                    void this.update()
                                );
                            o === this._menus.length && o--,
                                i !== o &&
                                    (n.ArrayExt.move(this._menus, i, o),
                                    this.update());
                        }),
                        (t.prototype.removeMenu = function(e) {
                            this.removeMenuAt(this._menus.indexOf(e));
                        }),
                        (t.prototype.removeMenuAt = function(e) {
                            this._closeChildMenu();
                            var t = n.ArrayExt.removeAt(this._menus, e);
                            t &&
                                (t.aboutToClose.disconnect(
                                    this._onMenuAboutToClose,
                                    this
                                ),
                                t.menuRequested.disconnect(
                                    this._onMenuMenuRequested,
                                    this
                                ),
                                t.title.changed.disconnect(
                                    this._onTitleChanged,
                                    this
                                ),
                                t.removeClass('lm-MenuBar-menu'),
                                t.removeClass('p-MenuBar-menu'),
                                this.update());
                        }),
                        (t.prototype.clearMenus = function() {
                            if (0 !== this._menus.length) {
                                this._closeChildMenu();
                                for (
                                    var e = 0, t = this._menus;
                                    e < t.length;
                                    e++
                                ) {
                                    var i = t[e];
                                    i.aboutToClose.disconnect(
                                        this._onMenuAboutToClose,
                                        this
                                    ),
                                        i.menuRequested.disconnect(
                                            this._onMenuMenuRequested,
                                            this
                                        ),
                                        i.title.changed.disconnect(
                                            this._onTitleChanged,
                                            this
                                        ),
                                        i.removeClass('lm-MenuBar-menu'),
                                        i.removeClass('p-MenuBar-menu');
                                }
                                (this._menus.length = 0), this.update();
                            }
                        }),
                        (t.prototype.handleEvent = function(e) {
                            switch (e.type) {
                                case 'keydown':
                                    this._evtKeyDown(e);
                                    break;
                                case 'mousedown':
                                    this._evtMouseDown(e);
                                    break;
                                case 'mousemove':
                                    this._evtMouseMove(e);
                                    break;
                                case 'mouseleave':
                                    this._evtMouseLeave(e);
                                    break;
                                case 'contextmenu':
                                    e.preventDefault(), e.stopPropagation();
                            }
                        }),
                        (t.prototype.onBeforeAttach = function(e) {
                            this.node.addEventListener('keydown', this),
                                this.node.addEventListener('mousedown', this),
                                this.node.addEventListener('mousemove', this),
                                this.node.addEventListener('mouseleave', this),
                                this.node.addEventListener('contextmenu', this);
                        }),
                        (t.prototype.onAfterDetach = function(e) {
                            this.node.removeEventListener('keydown', this),
                                this.node.removeEventListener(
                                    'mousedown',
                                    this
                                ),
                                this.node.removeEventListener(
                                    'mousemove',
                                    this
                                ),
                                this.node.removeEventListener(
                                    'mouseleave',
                                    this
                                ),
                                this.node.removeEventListener(
                                    'contextmenu',
                                    this
                                ),
                                this._closeChildMenu();
                        }),
                        (t.prototype.onActivateRequest = function(e) {
                            this.isAttached && (this.activeIndex = 0);
                        }),
                        (t.prototype.onUpdateRequest = function(e) {
                            for (
                                var t = this,
                                    i = this._menus,
                                    n = this.renderer,
                                    o = this._activeIndex,
                                    r =
                                        this._tabFocusIndex >= 0 &&
                                        this._tabFocusIndex < i.length
                                            ? this._tabFocusIndex
                                            : 0,
                                    s = new Array(i.length),
                                    a = function(e, a) {
                                        var d = i[e].title,
                                            h = e === o;
                                        h && 0 == i[e].items.length && (h = !1),
                                            (s[e] = n.renderItem({
                                                title: d,
                                                active: h,
                                                tabbable: e === r,
                                                onfocus: function() {
                                                    t.activeIndex = e;
                                                },
                                            }));
                                    },
                                    d = 0,
                                    h = i.length;
                                d < h;
                                ++d
                            )
                                a(d);
                            l.VirtualDOM.render(s, this.contentNode);
                        }),
                        (t.prototype._evtKeyDown = function(e) {
                            var t = e.keyCode;
                            if (9 !== t)
                                if (
                                    (e.preventDefault(),
                                    e.stopPropagation(),
                                    13 !== t &&
                                        32 !== t &&
                                        38 !== t &&
                                        40 !== t)
                                ) {
                                    if (27 === t)
                                        return (
                                            this._closeChildMenu(),
                                            (this.activeIndex = -1),
                                            void this.node.blur()
                                        );
                                    if (37 !== t)
                                        if (39 !== t) {
                                            var i = (0,
                                            p.getKeyboardLayout)().keyForKeydownEvent(
                                                e
                                            );
                                            if (i) {
                                                var n = this._activeIndex + 1,
                                                    o = ne.findMnemonic(
                                                        this._menus,
                                                        i,
                                                        n
                                                    );
                                                -1 === o.index || o.multiple
                                                    ? -1 !== o.index
                                                        ? (this.activeIndex =
                                                              o.index)
                                                        : -1 !== o.auto &&
                                                          (this.activeIndex =
                                                              o.auto)
                                                    : ((this.activeIndex =
                                                          o.index),
                                                      this.openActiveMenu());
                                            }
                                        } else
                                            (r = this._activeIndex),
                                                (s = this._menus.length),
                                                (this.activeIndex =
                                                    r === s - 1 ? 0 : r + 1);
                                    else {
                                        var r = this._activeIndex,
                                            s = this._menus.length;
                                        this.activeIndex =
                                            0 === r ? s - 1 : r - 1;
                                    }
                                } else this.openActiveMenu();
                            else this.activeIndex = -1;
                        }),
                        (t.prototype._evtMouseDown = function(e) {
                            if (
                                o.ElementExt.hitTest(
                                    this.node,
                                    e.clientX,
                                    e.clientY
                                )
                            ) {
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    e.stopImmediatePropagation();
                                var t = n.ArrayExt.findFirstIndex(
                                    this.contentNode.children,
                                    function(t) {
                                        return o.ElementExt.hitTest(
                                            t,
                                            e.clientX,
                                            e.clientY
                                        );
                                    }
                                );
                                if (-1 !== t) {
                                    if (0 === e.button)
                                        if (this._childMenu)
                                            this._closeChildMenu(),
                                                (this.activeIndex = t);
                                        else {
                                            var i = this._positionForMenu(t);
                                            V.saveWindowData(),
                                                (this.activeIndex = t),
                                                this._openChildMenu(i);
                                        }
                                } else this._closeChildMenu();
                            }
                        }),
                        (t.prototype._evtMouseMove = function(e) {
                            var t = n.ArrayExt.findFirstIndex(
                                this.contentNode.children,
                                function(t) {
                                    return o.ElementExt.hitTest(
                                        t,
                                        e.clientX,
                                        e.clientY
                                    );
                                }
                            );
                            if (
                                t !== this._activeIndex &&
                                (-1 !== t || !this._childMenu)
                            ) {
                                var i = this._positionForMenu(t);
                                V.saveWindowData(),
                                    (this.activeIndex = t),
                                    this._childMenu && this._openChildMenu(i);
                            }
                        }),
                        (t.prototype._positionForMenu = function(e) {
                            var t = this.contentNode.children[
                                    e
                                ].getBoundingClientRect(),
                                i = t.left;
                            return { top: t.bottom, left: i };
                        }),
                        (t.prototype._evtMouseLeave = function(e) {
                            this._childMenu || (this.activeIndex = -1);
                        }),
                        (t.prototype._openChildMenu = function(e) {
                            var t;
                            void 0 === e && (e = {});
                            var i = this.activeMenu;
                            if (i) {
                                var n = this._childMenu;
                                if (n !== i) {
                                    (this._childMenu = i),
                                        n
                                            ? n.close()
                                            : document.addEventListener(
                                                  'mousedown',
                                                  this,
                                                  !0
                                              ),
                                        r.MessageLoop.sendMessage(
                                            this,
                                            M.Msg.UpdateRequest
                                        );
                                    var o = e.left,
                                        s = e.top;
                                    (void 0 !== o && void 0 !== s) ||
                                        ((o = (t = this._positionForMenu(
                                            this._activeIndex
                                        )).left),
                                        (s = t.top)),
                                        n ||
                                            (this.addClass('lm-mod-active'),
                                            this.addClass('p-mod-active')),
                                        i.items.length > 0 &&
                                            i.open(
                                                o,
                                                s,
                                                this._forceItemsPosition
                                            );
                                }
                            } else this._closeChildMenu();
                        }),
                        (t.prototype._closeChildMenu = function() {
                            if (this._childMenu) {
                                this.removeClass('lm-mod-active'),
                                    this.removeClass('p-mod-active'),
                                    document.removeEventListener(
                                        'mousedown',
                                        this,
                                        !0
                                    );
                                var e = this._childMenu;
                                (this._childMenu = null),
                                    e.close(),
                                    (this.activeIndex = -1);
                            }
                        }),
                        (t.prototype._onMenuAboutToClose = function(e) {
                            e === this._childMenu &&
                                (this.removeClass('lm-mod-active'),
                                this.removeClass('p-mod-active'),
                                document.removeEventListener(
                                    'mousedown',
                                    this,
                                    !0
                                ),
                                (this._childMenu = null),
                                (this.activeIndex = -1));
                        }),
                        (t.prototype._onMenuMenuRequested = function(e, t) {
                            if (e === this._childMenu) {
                                var i = this._activeIndex,
                                    n = this._menus.length;
                                switch (t) {
                                    case 'next':
                                        this.activeIndex =
                                            i === n - 1 ? 0 : i + 1;
                                        break;
                                    case 'previous':
                                        this.activeIndex =
                                            0 === i ? n - 1 : i - 1;
                                }
                                this.openActiveMenu();
                            }
                        }),
                        (t.prototype._onTitleChanged = function() {
                            this.update();
                        }),
                        t
                    );
                })(M);
            !(function(e) {
                var t = (function() {
                    function e() {}
                    return (
                        (e.prototype.renderItem = function(e) {
                            var t = this.createItemClass(e),
                                i = this.createItemDataset(e),
                                n = this.createItemARIA(e);
                            return l.h.li(
                                v(
                                    {
                                        className: t,
                                        dataset: i,
                                        tabindex: e.tabbable ? '0' : '-1',
                                        onfocus: e.onfocus,
                                    },
                                    n
                                ),
                                this.renderIcon(e),
                                this.renderLabel(e)
                            );
                        }),
                        (e.prototype.renderIcon = function(e) {
                            var t = this.createIconClass(e);
                            return 'string' == typeof e.title.icon
                                ? l.h.div({ className: t }, e.title.iconLabel)
                                : l.h.div(
                                      { className: t },
                                      e.title.icon,
                                      e.title.iconLabel
                                  );
                        }),
                        (e.prototype.renderLabel = function(e) {
                            var t = this.formatLabel(e);
                            return l.h.div(
                                {
                                    className:
                                        'lm-MenuBar-itemLabel p-MenuBar-itemLabel',
                                },
                                t
                            );
                        }),
                        (e.prototype.createItemClass = function(e) {
                            var t = 'lm-MenuBar-item';
                            return (
                                (t += ' p-MenuBar-item'),
                                e.title.className &&
                                    (t += ' ' + e.title.className),
                                e.active &&
                                    ((t += ' lm-mod-active'),
                                    (t += ' p-mod-active')),
                                t
                            );
                        }),
                        (e.prototype.createItemDataset = function(e) {
                            return e.title.dataset;
                        }),
                        (e.prototype.createItemARIA = function(e) {
                            return {
                                role: 'menuitem',
                                'aria-haspopup': 'true',
                            };
                        }),
                        (e.prototype.createIconClass = function(e) {
                            var t = 'lm-MenuBar-itemIcon';
                            t += ' p-MenuBar-itemIcon';
                            var i = e.title.iconClass;
                            return i ? t + ' ' + i : t;
                        }),
                        (e.prototype.formatLabel = function(e) {
                            var t = e.title,
                                i = t.label,
                                n = t.mnemonic;
                            if (n < 0 || n >= i.length) return i;
                            var o = i.slice(0, n),
                                r = i.slice(n + 1),
                                s = i[n];
                            return [
                                o,
                                l.h.span(
                                    {
                                        className:
                                            'lm-MenuBar-itemMnemonic p-MenuBar-itemMnemonic',
                                    },
                                    s
                                ),
                                r,
                            ];
                        }),
                        e
                    );
                })();
                (e.Renderer = t), (e.defaultRenderer = new t());
            })(oe || (oe = {})),
                (function(e) {
                    (e.createNode = function() {
                        var e = document.createElement('div'),
                            t = document.createElement('ul');
                        return (
                            (t.className = 'lm-MenuBar-content'),
                            t.classList.add('p-MenuBar-content'),
                            e.appendChild(t),
                            t.setAttribute('role', 'menubar'),
                            e
                        );
                    }),
                        (e.findMnemonic = function(e, t, i) {
                            for (
                                var n = -1,
                                    o = -1,
                                    r = !1,
                                    s = t.toUpperCase(),
                                    a = 0,
                                    d = e.length;
                                a < d;
                                ++a
                            ) {
                                var h = (a + i) % d,
                                    c = e[h].title;
                                if (0 !== c.label.length) {
                                    var l = c.mnemonic;
                                    l >= 0 && l < c.label.length
                                        ? c.label[l].toUpperCase() === s &&
                                          (-1 === n ? (n = h) : (r = !0))
                                        : -1 === o &&
                                          c.label[0].toUpperCase() === s &&
                                          (o = h);
                                }
                            }
                            return { index: n, multiple: r, auto: o };
                        });
                })(ne || (ne = {}));
            var re,
                se = (function(e) {
                    function t(t) {
                        void 0 === t && (t = {});
                        var i = e.call(this, { node: re.createNode() }) || this;
                        return (
                            (i._onRepeat = function() {
                                if (((i._repeatTimer = -1), i._pressData)) {
                                    var e = i._pressData.part;
                                    if ('thumb' !== e) {
                                        i._repeatTimer = window.setTimeout(
                                            i._onRepeat,
                                            20
                                        );
                                        var t = i._pressData.mouseX,
                                            n = i._pressData.mouseY;
                                        if ('decrement' !== e)
                                            if ('increment' !== e) {
                                                if ('track' === e) {
                                                    if (
                                                        !o.ElementExt.hitTest(
                                                            i.trackNode,
                                                            t,
                                                            n
                                                        )
                                                    )
                                                        return;
                                                    var r = i.thumbNode;
                                                    if (
                                                        o.ElementExt.hitTest(
                                                            r,
                                                            t,
                                                            n
                                                        )
                                                    )
                                                        return;
                                                    var s,
                                                        a = r.getBoundingClientRect();
                                                    return (
                                                        (s =
                                                            'horizontal' ===
                                                            i._orientation
                                                                ? t < a.left
                                                                    ? 'decrement'
                                                                    : 'increment'
                                                                : n < a.top
                                                                ? 'decrement'
                                                                : 'increment'),
                                                        void i._pageRequested.emit(
                                                            s
                                                        )
                                                    );
                                                }
                                            } else {
                                                if (
                                                    !o.ElementExt.hitTest(
                                                        i.incrementNode,
                                                        t,
                                                        n
                                                    )
                                                )
                                                    return;
                                                i._stepRequested.emit(
                                                    'increment'
                                                );
                                            }
                                        else {
                                            if (
                                                !o.ElementExt.hitTest(
                                                    i.decrementNode,
                                                    t,
                                                    n
                                                )
                                            )
                                                return;
                                            i._stepRequested.emit('decrement');
                                        }
                                    }
                                }
                            }),
                            (i._value = 0),
                            (i._page = 10),
                            (i._maximum = 100),
                            (i._repeatTimer = -1),
                            (i._pressData = null),
                            (i._thumbMoved = new a.Signal(i)),
                            (i._stepRequested = new a.Signal(i)),
                            (i._pageRequested = new a.Signal(i)),
                            i.addClass('lm-ScrollBar'),
                            i.addClass('p-ScrollBar'),
                            i.setFlag(M.Flag.DisallowLayout),
                            (i._orientation = t.orientation || 'vertical'),
                            (i.dataset.orientation = i._orientation),
                            void 0 !== t.maximum &&
                                (i._maximum = Math.max(0, t.maximum)),
                            void 0 !== t.page &&
                                (i._page = Math.max(0, t.page)),
                            void 0 !== t.value &&
                                (i._value = Math.max(
                                    0,
                                    Math.min(t.value, i._maximum)
                                )),
                            i
                        );
                    }
                    return (
                        f(t, e),
                        Object.defineProperty(t.prototype, 'thumbMoved', {
                            get: function() {
                                return this._thumbMoved;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'stepRequested', {
                            get: function() {
                                return this._stepRequested;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'pageRequested', {
                            get: function() {
                                return this._pageRequested;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'orientation', {
                            get: function() {
                                return this._orientation;
                            },
                            set: function(e) {
                                this._orientation !== e &&
                                    (this._releaseMouse(),
                                    (this._orientation = e),
                                    (this.dataset.orientation = e),
                                    this.update());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'value', {
                            get: function() {
                                return this._value;
                            },
                            set: function(e) {
                                (e = Math.max(0, Math.min(e, this._maximum))),
                                    this._value !== e &&
                                        ((this._value = e), this.update());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'page', {
                            get: function() {
                                return this._page;
                            },
                            set: function(e) {
                                (e = Math.max(0, e)),
                                    this._page !== e &&
                                        ((this._page = e), this.update());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'maximum', {
                            get: function() {
                                return this._maximum;
                            },
                            set: function(e) {
                                (e = Math.max(0, e)),
                                    this._maximum !== e &&
                                        ((this._maximum = e),
                                        (this._value = Math.min(
                                            this._value,
                                            e
                                        )),
                                        this.update());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'decrementNode', {
                            get: function() {
                                return this.node.getElementsByClassName(
                                    'lm-ScrollBar-button'
                                )[0];
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'incrementNode', {
                            get: function() {
                                return this.node.getElementsByClassName(
                                    'lm-ScrollBar-button'
                                )[1];
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'trackNode', {
                            get: function() {
                                return this.node.getElementsByClassName(
                                    'lm-ScrollBar-track'
                                )[0];
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'thumbNode', {
                            get: function() {
                                return this.node.getElementsByClassName(
                                    'lm-ScrollBar-thumb'
                                )[0];
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.handleEvent = function(e) {
                            switch (e.type) {
                                case 'mousedown':
                                    this._evtMouseDown(e);
                                    break;
                                case 'mousemove':
                                    this._evtMouseMove(e);
                                    break;
                                case 'mouseup':
                                    this._evtMouseUp(e);
                                    break;
                                case 'keydown':
                                    this._evtKeyDown(e);
                                    break;
                                case 'contextmenu':
                                    e.preventDefault(), e.stopPropagation();
                            }
                        }),
                        (t.prototype.onBeforeAttach = function(e) {
                            this.node.addEventListener('mousedown', this),
                                this.update();
                        }),
                        (t.prototype.onAfterDetach = function(e) {
                            this.node.removeEventListener('mousedown', this),
                                this._releaseMouse();
                        }),
                        (t.prototype.onUpdateRequest = function(e) {
                            var t = (100 * this._value) / this._maximum,
                                i =
                                    (100 * this._page) /
                                    (this._page + this._maximum);
                            (t = Math.max(0, Math.min(t, 100))),
                                (i = Math.max(0, Math.min(i, 100)));
                            var n = this.thumbNode.style;
                            'horizontal' === this._orientation
                                ? ((n.top = ''),
                                  (n.height = ''),
                                  (n.left = t + '%'),
                                  (n.width = i + '%'),
                                  (n.transform = 'translate(' + -t + '%, 0%)'))
                                : ((n.left = ''),
                                  (n.width = ''),
                                  (n.top = t + '%'),
                                  (n.height = i + '%'),
                                  (n.transform = 'translate(0%, ' + -t + '%)'));
                        }),
                        (t.prototype._evtKeyDown = function(e) {
                            if (
                                (e.preventDefault(),
                                e.stopPropagation(),
                                27 === e.keyCode)
                            ) {
                                var t = this._pressData
                                    ? this._pressData.value
                                    : -1;
                                this._releaseMouse(),
                                    -1 !== t && this._moveThumb(t);
                            }
                        }),
                        (t.prototype._evtMouseDown = function(e) {
                            if (
                                0 === e.button &&
                                (this.activate(), !this._pressData)
                            ) {
                                var t = re.findPart(this, e.target);
                                if (t) {
                                    e.preventDefault(), e.stopPropagation();
                                    var i = d.Drag.overrideCursor('default');
                                    if (
                                        ((this._pressData = {
                                            part: t,
                                            override: i,
                                            delta: -1,
                                            value: -1,
                                            mouseX: e.clientX,
                                            mouseY: e.clientY,
                                        }),
                                        document.addEventListener(
                                            'mousemove',
                                            this,
                                            !0
                                        ),
                                        document.addEventListener(
                                            'mouseup',
                                            this,
                                            !0
                                        ),
                                        document.addEventListener(
                                            'keydown',
                                            this,
                                            !0
                                        ),
                                        document.addEventListener(
                                            'contextmenu',
                                            this,
                                            !0
                                        ),
                                        'thumb' === t)
                                    ) {
                                        var n = this.thumbNode,
                                            o = n.getBoundingClientRect();
                                        return (
                                            'horizontal' === this._orientation
                                                ? (this._pressData.delta =
                                                      e.clientX - o.left)
                                                : (this._pressData.delta =
                                                      e.clientY - o.top),
                                            n.classList.add('lm-mod-active'),
                                            n.classList.add('p-mod-active'),
                                            void (this._pressData.value = this._value)
                                        );
                                    }
                                    if ('track' === t) {
                                        o = this.thumbNode.getBoundingClientRect();
                                        var r;
                                        return (
                                            (r =
                                                'horizontal' ===
                                                this._orientation
                                                    ? e.clientX < o.left
                                                        ? 'decrement'
                                                        : 'increment'
                                                    : e.clientY < o.top
                                                    ? 'decrement'
                                                    : 'increment'),
                                            (this._repeatTimer = window.setTimeout(
                                                this._onRepeat,
                                                350
                                            )),
                                            void this._pageRequested.emit(r)
                                        );
                                    }
                                    return 'decrement' === t
                                        ? (this.decrementNode.classList.add(
                                              'lm-mod-active'
                                          ),
                                          this.decrementNode.classList.add(
                                              'p-mod-active'
                                          ),
                                          (this._repeatTimer = window.setTimeout(
                                              this._onRepeat,
                                              350
                                          )),
                                          void this._stepRequested.emit(
                                              'decrement'
                                          ))
                                        : 'increment' === t
                                        ? (this.incrementNode.classList.add(
                                              'lm-mod-active'
                                          ),
                                          this.incrementNode.classList.add(
                                              'p-mod-active'
                                          ),
                                          (this._repeatTimer = window.setTimeout(
                                              this._onRepeat,
                                              350
                                          )),
                                          void this._stepRequested.emit(
                                              'increment'
                                          ))
                                        : void 0;
                                }
                            }
                        }),
                        (t.prototype._evtMouseMove = function(e) {
                            if (
                                this._pressData &&
                                (e.preventDefault(),
                                e.stopPropagation(),
                                (this._pressData.mouseX = e.clientX),
                                (this._pressData.mouseY = e.clientY),
                                'thumb' === this._pressData.part)
                            ) {
                                var t,
                                    i,
                                    n = this.thumbNode.getBoundingClientRect(),
                                    o = this.trackNode.getBoundingClientRect();
                                'horizontal' === this._orientation
                                    ? ((t =
                                          e.clientX -
                                          o.left -
                                          this._pressData.delta),
                                      (i = o.width - n.width))
                                    : ((t =
                                          e.clientY -
                                          o.top -
                                          this._pressData.delta),
                                      (i = o.height - n.height));
                                var r = 0 === i ? 0 : (t * this._maximum) / i;
                                this._moveThumb(r);
                            }
                        }),
                        (t.prototype._evtMouseUp = function(e) {
                            0 === e.button &&
                                (e.preventDefault(),
                                e.stopPropagation(),
                                this._releaseMouse());
                        }),
                        (t.prototype._releaseMouse = function() {
                            this._pressData &&
                                (clearTimeout(this._repeatTimer),
                                (this._repeatTimer = -1),
                                this._pressData.override.dispose(),
                                (this._pressData = null),
                                document.removeEventListener(
                                    'mousemove',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'mouseup',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'keydown',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'contextmenu',
                                    this,
                                    !0
                                ),
                                this.thumbNode.classList.remove(
                                    'lm-mod-active'
                                ),
                                this.decrementNode.classList.remove(
                                    'lm-mod-active'
                                ),
                                this.incrementNode.classList.remove(
                                    'lm-mod-active'
                                ),
                                this.thumbNode.classList.remove('p-mod-active'),
                                this.decrementNode.classList.remove(
                                    'p-mod-active'
                                ),
                                this.incrementNode.classList.remove(
                                    'p-mod-active'
                                ));
                        }),
                        (t.prototype._moveThumb = function(e) {
                            (e = Math.max(0, Math.min(e, this._maximum))),
                                this._value !== e &&
                                    ((this._value = e),
                                    this.update(),
                                    this._thumbMoved.emit(e));
                        }),
                        t
                    );
                })(M);
            !(function(e) {
                (e.createNode = function() {
                    var e = document.createElement('div'),
                        t = document.createElement('div'),
                        i = document.createElement('div'),
                        n = document.createElement('div'),
                        o = document.createElement('div');
                    return (
                        (t.className = 'lm-ScrollBar-button'),
                        (i.className = 'lm-ScrollBar-button'),
                        (t.dataset.action = 'decrement'),
                        (i.dataset.action = 'increment'),
                        (n.className = 'lm-ScrollBar-track'),
                        (o.className = 'lm-ScrollBar-thumb'),
                        t.classList.add('p-ScrollBar-button'),
                        i.classList.add('p-ScrollBar-button'),
                        n.classList.add('p-ScrollBar-track'),
                        o.classList.add('p-ScrollBar-thumb'),
                        n.appendChild(o),
                        e.appendChild(t),
                        e.appendChild(n),
                        e.appendChild(i),
                        e
                    );
                }),
                    (e.findPart = function(e, t) {
                        return e.thumbNode.contains(t)
                            ? 'thumb'
                            : e.trackNode.contains(t)
                            ? 'track'
                            : e.decrementNode.contains(t)
                            ? 'decrement'
                            : e.incrementNode.contains(t)
                            ? 'increment'
                            : null;
                    });
            })(re || (re = {}));
            var ae,
                de = (function(e) {
                    function t() {
                        var t =
                            (null !== e && e.apply(this, arguments)) || this;
                        return (t._widget = null), t;
                    }
                    return (
                        f(t, e),
                        (t.prototype.dispose = function() {
                            if (this._widget) {
                                var t = this._widget;
                                (this._widget = null), t.dispose();
                            }
                            e.prototype.dispose.call(this);
                        }),
                        Object.defineProperty(t.prototype, 'widget', {
                            get: function() {
                                return this._widget;
                            },
                            set: function(e) {
                                e && (e.parent = this.parent),
                                    this._widget !== e &&
                                        (this._widget && this._widget.dispose(),
                                        (this._widget = e),
                                        this.parent &&
                                            e &&
                                            this.attachWidget(e));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.iter = function() {
                            return this._widget
                                ? (0, n.once)(this._widget)
                                : (0, n.empty)();
                        }),
                        (t.prototype.removeWidget = function(e) {
                            this._widget === e &&
                                ((this._widget = null),
                                this.parent && this.detachWidget(e));
                        }),
                        (t.prototype.init = function() {
                            var t = this;
                            e.prototype.init.call(this),
                                (0, n.each)(this, function(e) {
                                    t.attachWidget(e);
                                });
                        }),
                        (t.prototype.attachWidget = function(e) {
                            this.parent.isAttached &&
                                r.MessageLoop.sendMessage(
                                    e,
                                    M.Msg.BeforeAttach
                                ),
                                this.parent.node.appendChild(e.node),
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        e,
                                        M.Msg.AfterAttach
                                    );
                        }),
                        (t.prototype.detachWidget = function(e) {
                            this.parent.isAttached &&
                                r.MessageLoop.sendMessage(
                                    e,
                                    M.Msg.BeforeDetach
                                ),
                                this.parent.node.removeChild(e.node),
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        e,
                                        M.Msg.AfterDetach
                                    );
                        }),
                        t
                    );
                })(x),
                he = (function(e) {
                    function t(t) {
                        void 0 === t && (t = {});
                        var i = e.call(this, t) || this;
                        return (
                            (i._dirty = !1),
                            (i._items = []),
                            (i._box = null),
                            (i._hiddenMode =
                                void 0 !== t.hiddenMode
                                    ? t.hiddenMode
                                    : M.HiddenMode.Display),
                            i
                        );
                    }
                    return (
                        f(t, e),
                        Object.defineProperty(t.prototype, 'hiddenMode', {
                            get: function() {
                                return this._hiddenMode;
                            },
                            set: function(e) {
                                var t = this;
                                this._hiddenMode !== e &&
                                    ((this._hiddenMode = e),
                                    this.widgets.length > 1 &&
                                        this.widgets.forEach(function(e) {
                                            e.hiddenMode = t._hiddenMode;
                                        }));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.dispose = function() {
                            (0, n.each)(this._items, function(e) {
                                e.dispose();
                            }),
                                (this._box = null),
                                (this._items.length = 0),
                                e.prototype.dispose.call(this);
                        }),
                        (t.prototype.attachWidget = function(e, t) {
                            this._hiddenMode === M.HiddenMode.Scale &&
                            this._items.length > 0
                                ? (1 === this._items.length &&
                                      (this.widgets[0].hiddenMode =
                                          M.HiddenMode.Scale),
                                  (t.hiddenMode = M.HiddenMode.Scale))
                                : (t.hiddenMode = M.HiddenMode.Display),
                                n.ArrayExt.insert(this._items, e, new C(t)),
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        t,
                                        M.Msg.BeforeAttach
                                    ),
                                this.parent.node.appendChild(t.node),
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        t,
                                        M.Msg.AfterAttach
                                    ),
                                this.parent.fit();
                        }),
                        (t.prototype.moveWidget = function(e, t, i) {
                            n.ArrayExt.move(this._items, e, t),
                                this.parent.update();
                        }),
                        (t.prototype.detachWidget = function(e, t) {
                            var i = n.ArrayExt.removeAt(this._items, e);
                            this.parent.isAttached &&
                                r.MessageLoop.sendMessage(
                                    t,
                                    M.Msg.BeforeDetach
                                ),
                                this.parent.node.removeChild(t.node),
                                this.parent.isAttached &&
                                    r.MessageLoop.sendMessage(
                                        t,
                                        M.Msg.AfterDetach
                                    ),
                                (i.widget.node.style.zIndex = ''),
                                this._hiddenMode === M.HiddenMode.Scale &&
                                    ((t.hiddenMode = M.HiddenMode.Display),
                                    1 === this._items.length &&
                                        (this._items[0].widget.hiddenMode =
                                            M.HiddenMode.Display)),
                                i.dispose(),
                                this.parent.fit();
                        }),
                        (t.prototype.onBeforeShow = function(t) {
                            e.prototype.onBeforeShow.call(this, t),
                                this.parent.update();
                        }),
                        (t.prototype.onBeforeAttach = function(t) {
                            e.prototype.onBeforeAttach.call(this, t),
                                this.parent.fit();
                        }),
                        (t.prototype.onChildShown = function(e) {
                            this.parent.fit();
                        }),
                        (t.prototype.onChildHidden = function(e) {
                            this.parent.fit();
                        }),
                        (t.prototype.onResize = function(e) {
                            this.parent.isVisible &&
                                this._update(e.width, e.height);
                        }),
                        (t.prototype.onUpdateRequest = function(e) {
                            this.parent.isVisible && this._update(-1, -1);
                        }),
                        (t.prototype.onFitRequest = function(e) {
                            this.parent.isAttached && this._fit();
                        }),
                        (t.prototype._fit = function() {
                            for (
                                var e = 0, t = 0, i = 0, n = this._items.length;
                                i < n;
                                ++i
                            ) {
                                var s = this._items[i];
                                s.isHidden ||
                                    (s.fit(),
                                    (e = Math.max(e, s.minWidth)),
                                    (t = Math.max(t, s.minHeight)));
                            }
                            var a = (this._box = o.ElementExt.boxSizing(
                                this.parent.node
                            ));
                            (e += a.horizontalSum), (t += a.verticalSum);
                            var d = this.parent.node.style;
                            (d.minWidth = e + 'px'),
                                (d.minHeight = t + 'px'),
                                (this._dirty = !0),
                                this.parent.parent &&
                                    r.MessageLoop.sendMessage(
                                        this.parent.parent,
                                        M.Msg.FitRequest
                                    ),
                                this._dirty &&
                                    r.MessageLoop.sendMessage(
                                        this.parent,
                                        M.Msg.UpdateRequest
                                    );
                        }),
                        (t.prototype._update = function(e, t) {
                            this._dirty = !1;
                            for (
                                var i = 0, n = 0, r = this._items.length;
                                n < r;
                                ++n
                            )
                                i += +!this._items[n].isHidden;
                            if (0 !== i) {
                                e < 0 && (e = this.parent.node.offsetWidth),
                                    t < 0 &&
                                        (t = this.parent.node.offsetHeight),
                                    this._box ||
                                        (this._box = o.ElementExt.boxSizing(
                                            this.parent.node
                                        ));
                                var s = this._box.paddingTop,
                                    a = this._box.paddingLeft,
                                    d = e - this._box.horizontalSum,
                                    h = t - this._box.verticalSum;
                                for (
                                    n = 0, r = this._items.length;
                                    n < r;
                                    ++n
                                ) {
                                    var c = this._items[n];
                                    c.isHidden ||
                                        ((c.widget.node.style.zIndex = '' + n),
                                        c.update(a, s, d, h));
                                }
                            }
                        }),
                        t
                    );
                })(E),
                ce = (function(e) {
                    function t(t) {
                        void 0 === t && (t = {});
                        var i =
                            e.call(this, { layout: ae.createLayout(t) }) ||
                            this;
                        return (
                            (i._widgetRemoved = new a.Signal(i)),
                            i.addClass('lm-StackedPanel'),
                            i.addClass('p-StackedPanel'),
                            i
                        );
                    }
                    return (
                        f(t, e),
                        Object.defineProperty(t.prototype, 'hiddenMode', {
                            get: function() {
                                return this.layout.hiddenMode;
                            },
                            set: function(e) {
                                this.layout.hiddenMode = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'widgetRemoved', {
                            get: function() {
                                return this._widgetRemoved;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.onChildAdded = function(e) {
                            e.child.addClass('lm-StackedPanel-child'),
                                e.child.addClass('p-StackedPanel-child');
                        }),
                        (t.prototype.onChildRemoved = function(e) {
                            e.child.removeClass('lm-StackedPanel-child'),
                                e.child.removeClass('p-StackedPanel-child'),
                                this._widgetRemoved.emit(e.child);
                        }),
                        t
                    );
                })(B);
            !(function(e) {
                e.createLayout = function(e) {
                    return e.layout || new he();
                };
            })(ae || (ae = {}));
            var le,
                ue = (function(e) {
                    function t(t) {
                        void 0 === t && (t = {});
                        var i = e.call(this) || this;
                        (i._currentChanged = new a.Signal(i)),
                            (i._addRequested = new a.Signal(i)),
                            i.addClass('lm-TabPanel'),
                            i.addClass('p-TabPanel'),
                            (i.tabBar = new G(t)),
                            i.tabBar.addClass('lm-TabPanel-tabBar'),
                            (i.stackedPanel = new ce()),
                            i.stackedPanel.addClass('lm-TabPanel-stackedPanel'),
                            i.tabBar.addClass('p-TabPanel-tabBar'),
                            i.stackedPanel.addClass('p-TabPanel-stackedPanel'),
                            i.tabBar.tabMoved.connect(i._onTabMoved, i),
                            i.tabBar.currentChanged.connect(
                                i._onCurrentChanged,
                                i
                            ),
                            i.tabBar.tabCloseRequested.connect(
                                i._onTabCloseRequested,
                                i
                            ),
                            i.tabBar.tabActivateRequested.connect(
                                i._onTabActivateRequested,
                                i
                            ),
                            i.tabBar.addRequested.connect(
                                i._onTabAddRequested,
                                i
                            ),
                            i.stackedPanel.widgetRemoved.connect(
                                i._onWidgetRemoved,
                                i
                            ),
                            (i._tabPlacement = t.tabPlacement || 'top');
                        var n = le.directionFromPlacement(i._tabPlacement),
                            o = le.orientationFromPlacement(i._tabPlacement);
                        (i.tabBar.orientation = o),
                            (i.tabBar.dataset.placement = i._tabPlacement);
                        var r = new H({ direction: n, spacing: 0 });
                        return (
                            H.setStretch(i.tabBar, 0),
                            H.setStretch(i.stackedPanel, 1),
                            r.addWidget(i.tabBar),
                            r.addWidget(i.stackedPanel),
                            (i.layout = r),
                            i
                        );
                    }
                    return (
                        f(t, e),
                        Object.defineProperty(t.prototype, 'currentChanged', {
                            get: function() {
                                return this._currentChanged;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'currentIndex', {
                            get: function() {
                                return this.tabBar.currentIndex;
                            },
                            set: function(e) {
                                this.tabBar.currentIndex = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'currentWidget', {
                            get: function() {
                                var e = this.tabBar.currentTitle;
                                return e ? e.owner : null;
                            },
                            set: function(e) {
                                this.tabBar.currentTitle = e ? e.title : null;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'tabsMovable', {
                            get: function() {
                                return this.tabBar.tabsMovable;
                            },
                            set: function(e) {
                                this.tabBar.tabsMovable = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'addButtonEnabled', {
                            get: function() {
                                return this.tabBar.addButtonEnabled;
                            },
                            set: function(e) {
                                this.tabBar.addButtonEnabled = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'tabPlacement', {
                            get: function() {
                                return this._tabPlacement;
                            },
                            set: function(e) {
                                if (this._tabPlacement !== e) {
                                    this._tabPlacement = e;
                                    var t = le.directionFromPlacement(e),
                                        i = le.orientationFromPlacement(e);
                                    (this.tabBar.orientation = i),
                                        (this.tabBar.dataset.placement = e),
                                        (this.layout.direction = t);
                                }
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'addRequested', {
                            get: function() {
                                return this._addRequested;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'widgets', {
                            get: function() {
                                return this.stackedPanel.widgets;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.addWidget = function(e) {
                            this.insertWidget(this.widgets.length, e);
                        }),
                        (t.prototype.insertWidget = function(e, t) {
                            t !== this.currentWidget && t.hide(),
                                this.stackedPanel.insertWidget(e, t),
                                this.tabBar.insertTab(e, t.title),
                                t.node.setAttribute('role', 'tabpanel');
                            var i = this.tabBar.renderer;
                            if (i instanceof G.Renderer) {
                                var n = i.createTabKey({
                                    title: t.title,
                                    current: !1,
                                    zIndex: 0,
                                });
                                t.node.setAttribute('aria-labelledby', n);
                            }
                        }),
                        (t.prototype._onCurrentChanged = function(e, t) {
                            var i = t.previousIndex,
                                n = t.previousTitle,
                                s = t.currentIndex,
                                a = t.currentTitle,
                                d = n ? n.owner : null,
                                h = a ? a.owner : null;
                            d && d.hide(),
                                h && h.show(),
                                this._currentChanged.emit({
                                    previousIndex: i,
                                    previousWidget: d,
                                    currentIndex: s,
                                    currentWidget: h,
                                }),
                                (o.Platform.IS_EDGE || o.Platform.IS_IE) &&
                                    r.MessageLoop.flush();
                        }),
                        (t.prototype._onTabAddRequested = function(e, t) {
                            this._addRequested.emit(e);
                        }),
                        (t.prototype._onTabActivateRequested = function(e, t) {
                            t.title.owner.activate();
                        }),
                        (t.prototype._onTabCloseRequested = function(e, t) {
                            t.title.owner.close();
                        }),
                        (t.prototype._onTabMoved = function(e, t) {
                            this.stackedPanel.insertWidget(
                                t.toIndex,
                                t.title.owner
                            );
                        }),
                        (t.prototype._onWidgetRemoved = function(e, t) {
                            t.node.removeAttribute('role'),
                                t.node.removeAttribute('aria-labelledby'),
                                this.tabBar.removeTab(t.title);
                        }),
                        t
                    );
                })(M);
            !(function(e) {
                (e.orientationFromPlacement = function(e) {
                    return t[e];
                }),
                    (e.directionFromPlacement = function(e) {
                        return i[e];
                    });
                var t = {
                        top: 'horizontal',
                        left: 'vertical',
                        right: 'vertical',
                        bottom: 'horizontal',
                    },
                    i = {
                        top: 'top-to-bottom',
                        left: 'left-to-right',
                        right: 'right-to-left',
                        bottom: 'bottom-to-top',
                    };
            })(le || (le = {}));
        },
    },
]);
//# sourceMappingURL=5666.0d100c7.js.map
