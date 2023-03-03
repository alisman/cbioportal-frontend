'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [1084],
    {
        51084: (e, t, r) => {
            r.r(t), r.d(t, { Drag: () => i });
            var n,
                o = r(21743),
                i = (function() {
                    function e(e) {
                        var t = this;
                        (this._onScrollFrame = function() {
                            if (t._scrollTarget) {
                                var e = t._scrollTarget,
                                    r = e.element,
                                    o = e.edge,
                                    i = e.distance,
                                    s = n.SCROLL_EDGE_SIZE - i,
                                    a = Math.pow(s / n.SCROLL_EDGE_SIZE, 2),
                                    d = Math.max(
                                        1,
                                        Math.round(a * n.SCROLL_EDGE_SIZE)
                                    );
                                switch (o) {
                                    case 'top':
                                        r.scrollTop -= d;
                                        break;
                                    case 'left':
                                        r.scrollLeft -= d;
                                        break;
                                    case 'right':
                                        r.scrollLeft += d;
                                        break;
                                    case 'bottom':
                                        r.scrollTop += d;
                                }
                                requestAnimationFrame(t._onScrollFrame);
                            }
                        }),
                            (this._disposed = !1),
                            (this._dropAction = 'none'),
                            (this._override = null),
                            (this._currentTarget = null),
                            (this._currentElement = null),
                            (this._promise = null),
                            (this._scrollTarget = null),
                            (this._resolve = null),
                            (this.document = e.document || document),
                            (this.mimeData = e.mimeData),
                            (this.dragImage = e.dragImage || null),
                            (this.proposedAction = e.proposedAction || 'copy'),
                            (this.supportedActions =
                                e.supportedActions || 'all'),
                            (this.source = e.source || null);
                    }
                    return (
                        (e.prototype.dispose = function() {
                            if (!this._disposed) {
                                if (
                                    ((this._disposed = !0), this._currentTarget)
                                ) {
                                    var e = n.createMouseEvent(
                                        'pointerup',
                                        -1,
                                        -1
                                    );
                                    n.dispatchDragLeave(
                                        this,
                                        this._currentTarget,
                                        null,
                                        e
                                    );
                                }
                                this._finalize('none');
                            }
                        }),
                        Object.defineProperty(e.prototype, 'isDisposed', {
                            get: function() {
                                return this._disposed;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.start = function(e, t) {
                            var r = this;
                            if (this._disposed) return Promise.resolve('none');
                            if (this._promise) return this._promise;
                            this._addListeners(),
                                this._attachDragImage(e, t),
                                (this._promise = new Promise(function(e, t) {
                                    r._resolve = e;
                                }));
                            var o = n.createMouseEvent('pointermove', e, t);
                            return document.dispatchEvent(o), this._promise;
                        }),
                        (e.prototype.handleEvent = function(e) {
                            switch (e.type) {
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
                                default:
                                    e.preventDefault(), e.stopPropagation();
                            }
                        }),
                        (e.prototype.moveDragImage = function(e, t) {
                            if (this.dragImage) {
                                var r = this.dragImage.style;
                                (r.top = t + 'px'), (r.left = e + 'px');
                            }
                        }),
                        (e.prototype._evtMouseMove = function(e) {
                            e.preventDefault(),
                                e.stopPropagation(),
                                this._updateCurrentTarget(e),
                                this._updateDragScroll(e),
                                this.moveDragImage(e.clientX, e.clientY);
                        }),
                        (e.prototype._evtMouseUp = function(e) {
                            if (
                                (e.preventDefault(),
                                e.stopPropagation(),
                                0 === e.button)
                            )
                                if (
                                    (this._updateCurrentTarget(e),
                                    this._currentTarget)
                                ) {
                                    if ('none' === this._dropAction)
                                        return (
                                            n.dispatchDragLeave(
                                                this,
                                                this._currentTarget,
                                                null,
                                                e
                                            ),
                                            void this._finalize('none')
                                        );
                                    var t = n.dispatchDrop(
                                        this,
                                        this._currentTarget,
                                        e
                                    );
                                    this._finalize(t);
                                } else this._finalize('none');
                        }),
                        (e.prototype._evtKeyDown = function(e) {
                            e.preventDefault(),
                                e.stopPropagation(),
                                27 === e.keyCode && this.dispose();
                        }),
                        (e.prototype._addListeners = function() {
                            document.addEventListener('mousedown', this, !0),
                                document.addEventListener(
                                    'mousemove',
                                    this,
                                    !0
                                ),
                                document.addEventListener('mouseup', this, !0),
                                document.addEventListener(
                                    'mouseenter',
                                    this,
                                    !0
                                ),
                                document.addEventListener(
                                    'mouseleave',
                                    this,
                                    !0
                                ),
                                document.addEventListener(
                                    'mouseover',
                                    this,
                                    !0
                                ),
                                document.addEventListener('mouseout', this, !0),
                                document.addEventListener(
                                    'pointerdown',
                                    this,
                                    !0
                                ),
                                document.addEventListener(
                                    'pointermove',
                                    this,
                                    !0
                                ),
                                document.addEventListener(
                                    'pointerup',
                                    this,
                                    !0
                                ),
                                document.addEventListener(
                                    'pointerenter',
                                    this,
                                    !0
                                ),
                                document.addEventListener(
                                    'pointerleave',
                                    this,
                                    !0
                                ),
                                document.addEventListener(
                                    'pointerover',
                                    this,
                                    !0
                                ),
                                document.addEventListener(
                                    'pointerout',
                                    this,
                                    !0
                                ),
                                document.addEventListener('keydown', this, !0),
                                document.addEventListener('keyup', this, !0),
                                document.addEventListener('keypress', this, !0),
                                document.addEventListener(
                                    'contextmenu',
                                    this,
                                    !0
                                );
                        }),
                        (e.prototype._removeListeners = function() {
                            document.removeEventListener('mousedown', this, !0),
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
                                    'mouseenter',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'mouseleave',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'mouseover',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'mouseout',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'pointerdown',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'pointermove',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'pointerup',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'pointerenter',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'pointerleave',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'pointerover',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'pointerout',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'keydown',
                                    this,
                                    !0
                                ),
                                document.removeEventListener('keyup', this, !0),
                                document.removeEventListener(
                                    'keypress',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'contextmenu',
                                    this,
                                    !0
                                );
                        }),
                        (e.prototype._updateDragScroll = function(e) {
                            var t = n.findScrollTarget(e);
                            (this._scrollTarget || t) &&
                                (this._scrollTarget ||
                                    setTimeout(this._onScrollFrame, 500),
                                (this._scrollTarget = t));
                        }),
                        (e.prototype._updateCurrentTarget = function(e) {
                            var t = this._currentTarget,
                                r = this._currentTarget,
                                o = this._currentElement,
                                i = this.document.elementFromPoint(
                                    e.clientX,
                                    e.clientY
                                );
                            (this._currentElement = i),
                                i !== o &&
                                    i !== r &&
                                    n.dispatchDragExit(this, r, i, e),
                                i !== o &&
                                    i !== r &&
                                    (r = n.dispatchDragEnter(this, i, r, e)),
                                r !== t &&
                                    ((this._currentTarget = r),
                                    n.dispatchDragLeave(this, t, r, e));
                            var s = n.dispatchDragOver(this, r, e);
                            this._setDropAction(s);
                        }),
                        (e.prototype._attachDragImage = function(e, t) {
                            if (this.dragImage) {
                                this.dragImage.classList.add(
                                    'lm-mod-drag-image'
                                ),
                                    this.dragImage.classList.add(
                                        'p-mod-drag-image'
                                    );
                                var r = this.dragImage.style;
                                (r.pointerEvents = 'none'),
                                    (r.position = 'fixed'),
                                    (r.top = t + 'px'),
                                    (r.left = e + 'px'),
                                    (this.document instanceof Document
                                        ? this.document.body
                                        : this.document.firstElementChild
                                    ).appendChild(this.dragImage);
                            }
                        }),
                        (e.prototype._detachDragImage = function() {
                            if (this.dragImage) {
                                var e = this.dragImage.parentNode;
                                e && e.removeChild(this.dragImage);
                            }
                        }),
                        (e.prototype._setDropAction = function(t) {
                            if (
                                ((t = n.validateAction(
                                    t,
                                    this.supportedActions
                                )),
                                !this._override || this._dropAction !== t)
                            )
                                switch (t) {
                                    case 'none':
                                        (this._dropAction = t),
                                            (this._override = e.overrideCursor(
                                                'no-drop',
                                                this.document
                                            ));
                                        break;
                                    case 'copy':
                                        (this._dropAction = t),
                                            (this._override = e.overrideCursor(
                                                'copy',
                                                this.document
                                            ));
                                        break;
                                    case 'link':
                                        (this._dropAction = t),
                                            (this._override = e.overrideCursor(
                                                'alias',
                                                this.document
                                            ));
                                        break;
                                    case 'move':
                                        (this._dropAction = t),
                                            (this._override = e.overrideCursor(
                                                'move',
                                                this.document
                                            ));
                                }
                        }),
                        (e.prototype._finalize = function(e) {
                            var t = this._resolve;
                            this._removeListeners(),
                                this._detachDragImage(),
                                this._override &&
                                    (this._override.dispose(),
                                    (this._override = null)),
                                this.mimeData.clear(),
                                (this._disposed = !0),
                                (this._dropAction = 'none'),
                                (this._currentTarget = null),
                                (this._currentElement = null),
                                (this._scrollTarget = null),
                                (this._promise = null),
                                (this._resolve = null),
                                t && t(e);
                        }),
                        e
                    );
                })();
            !(function(e) {
                e.overrideCursor = function(e, r) {
                    void 0 === r && (r = document);
                    var n = ++t,
                        i =
                            r instanceof Document
                                ? r.body
                                : r.firstElementChild;
                    return (
                        (i.style.cursor = e),
                        i.classList.add('lm-mod-override-cursor'),
                        i.classList.add('p-mod-override-cursor'),
                        new o.DisposableDelegate(function() {
                            n === t &&
                                ((i.style.cursor = ''),
                                i.classList.remove('lm-mod-override-cursor'),
                                i.classList.remove('p-mod-override-cursor'));
                        })
                    );
                };
                var t = 0;
            })(i || (i = {})),
                (function(e) {
                    (e.SCROLL_EDGE_SIZE = 20),
                        (e.validateAction = function(e, n) {
                            return t[e] & r[n] ? e : 'none';
                        }),
                        (e.createMouseEvent = function(e, t, r) {
                            var n = document.createEvent('MouseEvent');
                            return (
                                n.initMouseEvent(
                                    e,
                                    !0,
                                    !0,
                                    window,
                                    0,
                                    0,
                                    0,
                                    t,
                                    r,
                                    !1,
                                    !1,
                                    !1,
                                    !1,
                                    0,
                                    null
                                ),
                                n
                            );
                        }),
                        (e.findScrollTarget = function(t) {
                            for (
                                var r = t.clientX,
                                    n = t.clientY,
                                    o = document.elementFromPoint(r, n);
                                o;
                                o = o.parentElement
                            ) {
                                var i = o.hasAttribute('data-lm-dragscroll');
                                if (
                                    (i =
                                        i ||
                                        o.hasAttribute('data-p-dragscroll'))
                                ) {
                                    var s = 0,
                                        a = 0;
                                    o === document.body &&
                                        ((s = window.pageXOffset),
                                        (a = window.pageYOffset));
                                    var d = o.getBoundingClientRect(),
                                        c = d.top + a,
                                        u = d.left + s,
                                        p = u + d.width,
                                        h = c + d.height;
                                    if (!(r < u || r >= p || n < c || n >= h)) {
                                        var l = r - u + 1,
                                            m = n - c + 1,
                                            v = p - r,
                                            g = h - n,
                                            _ = Math.min(l, m, v, g);
                                        if (!(_ > e.SCROLL_EDGE_SIZE)) {
                                            var f = void 0;
                                            switch (_) {
                                                case g:
                                                    f = 'bottom';
                                                    break;
                                                case m:
                                                    f = 'top';
                                                    break;
                                                case v:
                                                    f = 'right';
                                                    break;
                                                case l:
                                                    f = 'left';
                                                    break;
                                                default:
                                                    throw 'unreachable';
                                            }
                                            var E =
                                                    o.scrollWidth -
                                                    o.clientWidth,
                                                L =
                                                    o.scrollHeight -
                                                    o.clientHeight,
                                                y = void 0;
                                            switch (f) {
                                                case 'top':
                                                    y =
                                                        L > 0 &&
                                                        o.scrollTop > 0;
                                                    break;
                                                case 'left':
                                                    y =
                                                        E > 0 &&
                                                        o.scrollLeft > 0;
                                                    break;
                                                case 'right':
                                                    y =
                                                        E > 0 &&
                                                        o.scrollLeft < E;
                                                    break;
                                                case 'bottom':
                                                    y =
                                                        L > 0 &&
                                                        o.scrollTop < L;
                                                    break;
                                                default:
                                                    throw 'unreachable';
                                            }
                                            if (y)
                                                return {
                                                    element: o,
                                                    edge: f,
                                                    distance: _,
                                                };
                                        }
                                    }
                                }
                            }
                            return null;
                        }),
                        (e.dispatchDragEnter = function(e, t, r, o) {
                            if (!t) return null;
                            var i = n('lm-dragenter', e, o, r),
                                s = !t.dispatchEvent(i);
                            if (s) return t;
                            if (
                                ((i = n('p-dragenter', e, o, r)),
                                (s = !t.dispatchEvent(i)))
                            )
                                return t;
                            var a =
                                e.document instanceof Document
                                    ? e.document.body
                                    : e.document.firstElementChild;
                            return t === a
                                ? r
                                : ((i = n('lm-dragenter', e, o, r)),
                                  a.dispatchEvent(i),
                                  (i = n('p-dragenter', e, o, r)),
                                  a.dispatchEvent(i),
                                  a);
                        }),
                        (e.dispatchDragExit = function(e, t, r, o) {
                            if (t) {
                                var i = n('lm-dragexit', e, o, r);
                                t.dispatchEvent(i),
                                    (i = n('p-dragexit', e, o, r)),
                                    t.dispatchEvent(i);
                            }
                        }),
                        (e.dispatchDragLeave = function(e, t, r, o) {
                            if (t) {
                                var i = n('lm-dragleave', e, o, r);
                                t.dispatchEvent(i),
                                    (i = n('p-dragleave', e, o, r)),
                                    t.dispatchEvent(i);
                            }
                        }),
                        (e.dispatchDragOver = function(e, t, r) {
                            if (!t) return 'none';
                            var o = n('lm-dragover', e, r, null),
                                i = !t.dispatchEvent(o);
                            return i
                                ? o.dropAction
                                : ((o = n('p-dragover', e, r, null)),
                                  (i = !t.dispatchEvent(o))
                                      ? o.dropAction
                                      : 'none');
                        }),
                        (e.dispatchDrop = function(e, t, r) {
                            if (!t) return 'none';
                            var o = n('lm-drop', e, r, null),
                                i = !t.dispatchEvent(o);
                            return i
                                ? o.dropAction
                                : ((o = n('p-drop', e, r, null)),
                                  (i = !t.dispatchEvent(o))
                                      ? o.dropAction
                                      : 'none');
                        });
                    var t = { none: 0, copy: 1, link: 2, move: 4 },
                        r = {
                            none: t.none,
                            copy: t.copy,
                            link: t.link,
                            move: t.move,
                            'copy-link': t.copy | t.link,
                            'copy-move': t.copy | t.move,
                            'link-move': t.link | t.move,
                            all: t.copy | t.link | t.move,
                        };
                    function n(e, t, r, n) {
                        var o = document.createEvent('MouseEvent');
                        return (
                            o.initMouseEvent(
                                e,
                                !0,
                                !0,
                                window,
                                0,
                                r.screenX,
                                r.screenY,
                                r.clientX,
                                r.clientY,
                                r.ctrlKey,
                                r.altKey,
                                r.shiftKey,
                                r.metaKey,
                                r.button,
                                n
                            ),
                            (o.dropAction = 'none'),
                            (o.mimeData = t.mimeData),
                            (o.proposedAction = t.proposedAction),
                            (o.supportedActions = t.supportedActions),
                            (o.source = t.source),
                            o
                        );
                    }
                })(n || (n = {}));
        },
    },
]);
//# sourceMappingURL=1084.8fcd5fb.js.map
