'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [920],
    {
        30920: (t, e, i) => {
            i.r(e),
                i.d(e, {
                    BasicKeyHandler: () => u,
                    BasicMouseHandler: () => b,
                    BasicSelectionModel: () => M,
                    BooleanCellEditor: () => G,
                    CellEditor: () => L,
                    CellEditorController: () => N,
                    CellGroup: () => y,
                    CellRenderer: () => _,
                    DataGrid: () => Z,
                    DataModel: () => V,
                    DateCellEditor: () => W,
                    DynamicOptionCellEditor: () => j,
                    GraphicsContext: () => K,
                    HyperlinkRenderer: () => g,
                    InputCellEditor: () => P,
                    IntegerCellEditor: () => B,
                    IntegerInputValidator: () => E,
                    JSONModel: () => Q,
                    MutableDataModel: () => X,
                    NumberCellEditor: () => D,
                    NumberInputValidator: () => k,
                    OptionCellEditor: () => A,
                    PassInputValidator: () => z,
                    Private: () => w,
                    RendererMap: () => q,
                    SectionList: () => U,
                    SelectionModel: () => x,
                    TextCellEditor: () => T,
                    TextInputValidator: () => R,
                    TextRenderer: () => v,
                    resolveOption: () => I,
                });
            var o = i(33349),
                r = i(46831),
                n = i(18418),
                s = i(43892),
                a = i(32798),
                l = i(86098),
                h = i(14064),
                c = i(26169),
                u = (function() {
                    function t() {
                        this._disposed = !1;
                    }
                    return (
                        Object.defineProperty(t.prototype, 'isDisposed', {
                            get: function() {
                                return this._disposed;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.dispose = function() {
                            this._disposed = !0;
                        }),
                        (t.prototype.onKeyDown = function(t, e) {
                            if (
                                t.editable &&
                                -1 !== t.selectionModel.cursorRow &&
                                -1 !== t.selectionModel.cursorColumn
                            ) {
                                var i = String.fromCharCode(e.keyCode);
                                if (/[a-zA-Z0-9-_ ]/.test(i)) {
                                    var o = {
                                        grid: t,
                                        row: t.selectionModel.cursorRow,
                                        column: t.selectionModel.cursorColumn,
                                    };
                                    return (
                                        t.editorController.edit(o),
                                        void (
                                            'Space' ===
                                                (0,
                                                r.getKeyboardLayout)().keyForKeydownEvent(
                                                    e
                                                ) &&
                                            (e.stopPropagation(),
                                            e.preventDefault())
                                        )
                                    );
                                }
                            }
                            switch (
                                (0, r.getKeyboardLayout)().keyForKeydownEvent(e)
                            ) {
                                case 'ArrowLeft':
                                    this.onArrowLeft(t, e);
                                    break;
                                case 'ArrowRight':
                                    this.onArrowRight(t, e);
                                    break;
                                case 'ArrowUp':
                                    this.onArrowUp(t, e);
                                    break;
                                case 'ArrowDown':
                                    this.onArrowDown(t, e);
                                    break;
                                case 'PageUp':
                                    this.onPageUp(t, e);
                                    break;
                                case 'PageDown':
                                    this.onPageDown(t, e);
                                    break;
                                case 'Escape':
                                    this.onEscape(t, e);
                                    break;
                                case 'Delete':
                                    this.onDelete(t, e);
                                    break;
                                case 'C':
                                    this.onKeyC(t, e);
                                    break;
                                case 'Enter':
                                    t.selectionModel &&
                                        (t.moveCursor(
                                            e.shiftKey ? 'up' : 'down'
                                        ),
                                        t.scrollToCursor());
                                    break;
                                case 'Tab':
                                    t.selectionModel &&
                                        (t.moveCursor(
                                            e.shiftKey ? 'left' : 'right'
                                        ),
                                        t.scrollToCursor(),
                                        e.stopPropagation(),
                                        e.preventDefault());
                            }
                        }),
                        (t.prototype.onArrowLeft = function(t, e) {
                            e.preventDefault(), e.stopPropagation();
                            var i = t.selectionModel,
                                r = e.shiftKey,
                                n = o.Platform.accelKey(e);
                            if (i || !n)
                                if (i) {
                                    var s = i.selectionMode;
                                    if ('row' === s && n)
                                        t.scrollTo(0, t.scrollY);
                                    else if ('row' !== s) {
                                        var a,
                                            l,
                                            h,
                                            c,
                                            u,
                                            d,
                                            p,
                                            f = i.cursorRow,
                                            _ = i.cursorColumn,
                                            m = i.currentSelection();
                                        n && r
                                            ? ((a = m ? m.r1 : 0),
                                              (l = m ? m.r2 : 0),
                                              (h = m ? m.c1 : 0),
                                              (c = 0),
                                              (u = f),
                                              (d = _),
                                              (p = 'current'))
                                            : r
                                            ? ((a = m ? m.r1 : 0),
                                              (l = m ? m.r2 : 0),
                                              (h = m ? m.c1 : 0),
                                              (c = m ? m.c2 - 1 : 0),
                                              (u = f),
                                              (d = _),
                                              (p = 'current'))
                                            : n
                                            ? ((l = f),
                                              (c = 0),
                                              (u = a = f),
                                              (d = h = 0),
                                              (p = 'all'))
                                            : ((l = f),
                                              (c = _ - 1),
                                              (u = a = f),
                                              (d = h = _ - 1),
                                              (p = 'all')),
                                            i.select({
                                                r1: a,
                                                c1: h,
                                                r2: l,
                                                c2: c,
                                                cursorRow: u,
                                                cursorColumn: d,
                                                clear: p,
                                            }),
                                            (m = i.currentSelection()) &&
                                                (r || 'column' === s
                                                    ? t.scrollToColumn(m.c2)
                                                    : t.scrollToCursor());
                                    } else t.scrollByStep('left');
                                } else t.scrollByStep('left');
                            else t.scrollTo(0, t.scrollY);
                        }),
                        (t.prototype.onArrowRight = function(t, e) {
                            e.preventDefault(), e.stopPropagation();
                            var i = t.selectionModel,
                                r = e.shiftKey,
                                n = o.Platform.accelKey(e);
                            if (i || !n)
                                if (i) {
                                    var s = i.selectionMode;
                                    if ('row' === s && n)
                                        t.scrollTo(t.maxScrollX, t.scrollY);
                                    else if ('row' !== s) {
                                        var a,
                                            l,
                                            h,
                                            c,
                                            u,
                                            d,
                                            p,
                                            f = i.cursorRow,
                                            _ = i.cursorColumn,
                                            m = i.currentSelection();
                                        n && r
                                            ? ((a = m ? m.r1 : 0),
                                              (l = m ? m.r2 : 0),
                                              (h = m ? m.c1 : 0),
                                              (c = 1 / 0),
                                              (u = f),
                                              (d = _),
                                              (p = 'current'))
                                            : r
                                            ? ((a = m ? m.r1 : 0),
                                              (l = m ? m.r2 : 0),
                                              (h = m ? m.c1 : 0),
                                              (c = m ? m.c2 + 1 : 0),
                                              (u = f),
                                              (d = _),
                                              (p = 'current'))
                                            : n
                                            ? ((l = f),
                                              (c = 1 / 0),
                                              (u = a = f),
                                              (d = h = 1 / 0),
                                              (p = 'all'))
                                            : ((l = f),
                                              (c = _ + 1),
                                              (u = a = f),
                                              (d = h = _ + 1),
                                              (p = 'all')),
                                            i.select({
                                                r1: a,
                                                c1: h,
                                                r2: l,
                                                c2: c,
                                                cursorRow: u,
                                                cursorColumn: d,
                                                clear: p,
                                            }),
                                            (m = i.currentSelection()) &&
                                                (r || 'column' === s
                                                    ? t.scrollToColumn(m.c2)
                                                    : t.scrollToCursor());
                                    } else t.scrollByStep('right');
                                } else t.scrollByStep('right');
                            else t.scrollTo(t.maxScrollX, t.scrollY);
                        }),
                        (t.prototype.onArrowUp = function(t, e) {
                            e.preventDefault(), e.stopPropagation();
                            var i = t.selectionModel,
                                r = e.shiftKey,
                                n = o.Platform.accelKey(e);
                            if (i || !n)
                                if (i) {
                                    var s = i.selectionMode;
                                    if ('column' === s && n)
                                        t.scrollTo(t.scrollX, 0);
                                    else if ('column' !== s) {
                                        var a,
                                            l,
                                            h,
                                            c,
                                            u,
                                            d,
                                            p,
                                            f = i.cursorRow,
                                            _ = i.cursorColumn,
                                            m = i.currentSelection();
                                        n && r
                                            ? ((a = m ? m.r1 : 0),
                                              (l = 0),
                                              (h = m ? m.c1 : 0),
                                              (c = m ? m.c2 : 0),
                                              (u = f),
                                              (d = _),
                                              (p = 'current'))
                                            : r
                                            ? ((a = m ? m.r1 : 0),
                                              (l = m ? m.r2 - 1 : 0),
                                              (h = m ? m.c1 : 0),
                                              (c = m ? m.c2 : 0),
                                              (u = f),
                                              (d = _),
                                              (p = 'current'))
                                            : n
                                            ? ((l = 0),
                                              (c = _),
                                              (u = a = 0),
                                              (d = h = _),
                                              (p = 'all'))
                                            : ((l = f - 1),
                                              (c = _),
                                              (u = a = f - 1),
                                              (d = h = _),
                                              (p = 'all')),
                                            i.select({
                                                r1: a,
                                                c1: h,
                                                r2: l,
                                                c2: c,
                                                cursorRow: u,
                                                cursorColumn: d,
                                                clear: p,
                                            }),
                                            (m = i.currentSelection()) &&
                                                (r || 'row' === s
                                                    ? t.scrollToRow(m.r2)
                                                    : t.scrollToCursor());
                                    } else t.scrollByStep('up');
                                } else t.scrollByStep('up');
                            else t.scrollTo(t.scrollX, 0);
                        }),
                        (t.prototype.onArrowDown = function(t, e) {
                            e.preventDefault(), e.stopPropagation();
                            var i = t.selectionModel,
                                r = e.shiftKey,
                                n = o.Platform.accelKey(e);
                            if (i || !n)
                                if (i) {
                                    var s = i.selectionMode;
                                    if ('column' === s && n)
                                        t.scrollTo(t.scrollX, t.maxScrollY);
                                    else if ('column' !== s) {
                                        var a,
                                            l,
                                            h,
                                            c,
                                            u,
                                            d,
                                            p,
                                            f = i.cursorRow,
                                            _ = i.cursorColumn,
                                            m = i.currentSelection();
                                        n && r
                                            ? ((a = m ? m.r1 : 0),
                                              (l = 1 / 0),
                                              (h = m ? m.c1 : 0),
                                              (c = m ? m.c2 : 0),
                                              (u = f),
                                              (d = _),
                                              (p = 'current'))
                                            : r
                                            ? ((a = m ? m.r1 : 0),
                                              (l = m ? m.r2 + 1 : 0),
                                              (h = m ? m.c1 : 0),
                                              (c = m ? m.c2 : 0),
                                              (u = f),
                                              (d = _),
                                              (p = 'current'))
                                            : n
                                            ? ((l = 1 / 0),
                                              (c = _),
                                              (u = a = 1 / 0),
                                              (d = h = _),
                                              (p = 'all'))
                                            : ((l = f + 1),
                                              (c = _),
                                              (u = a = f + 1),
                                              (d = h = _),
                                              (p = 'all')),
                                            i.select({
                                                r1: a,
                                                c1: h,
                                                r2: l,
                                                c2: c,
                                                cursorRow: u,
                                                cursorColumn: d,
                                                clear: p,
                                            }),
                                            (m = i.currentSelection()) &&
                                                (r || 'row' === s
                                                    ? t.scrollToRow(m.r2)
                                                    : t.scrollToCursor());
                                    } else t.scrollByStep('down');
                                } else t.scrollByStep('down');
                            else t.scrollTo(t.scrollX, t.maxScrollY);
                        }),
                        (t.prototype.onPageUp = function(t, e) {
                            if (!o.Platform.accelKey(e)) {
                                e.preventDefault(), e.stopPropagation();
                                var i = t.selectionModel;
                                if (i && 'column' !== i.selectionMode) {
                                    var r,
                                        n,
                                        s,
                                        a,
                                        l,
                                        h,
                                        c,
                                        u = Math.floor(
                                            t.pageHeight /
                                                t.defaultSizes.rowHeight
                                        ),
                                        d = i.cursorRow,
                                        p = i.cursorColumn,
                                        f = i.currentSelection();
                                    e.shiftKey
                                        ? ((r = f ? f.r1 : 0),
                                          (n = f ? f.r2 - u : 0),
                                          (s = f ? f.c1 : 0),
                                          (a = f ? f.c2 : 0),
                                          (l = d),
                                          (h = p),
                                          (c = 'current'))
                                        : ((n = r = f ? f.r1 - u : 0),
                                          (s = p),
                                          (a = p),
                                          (l = r),
                                          (h = p),
                                          (c = 'all')),
                                        i.select({
                                            r1: r,
                                            c1: s,
                                            r2: n,
                                            c2: a,
                                            cursorRow: l,
                                            cursorColumn: h,
                                            clear: c,
                                        }),
                                        (f = i.currentSelection()) &&
                                            t.scrollToRow(f.r2);
                                } else t.scrollByPage('up');
                            }
                        }),
                        (t.prototype.onPageDown = function(t, e) {
                            if (!o.Platform.accelKey(e)) {
                                e.preventDefault(), e.stopPropagation();
                                var i = t.selectionModel;
                                if (i && 'column' !== i.selectionMode) {
                                    var r,
                                        n,
                                        s,
                                        a,
                                        l,
                                        h,
                                        c,
                                        u = Math.floor(
                                            t.pageHeight /
                                                t.defaultSizes.rowHeight
                                        ),
                                        d = i.cursorRow,
                                        p = i.cursorColumn,
                                        f = i.currentSelection();
                                    e.shiftKey
                                        ? ((r = f ? f.r1 : 0),
                                          (n = f ? f.r2 + u : 0),
                                          (s = f ? f.c1 : 0),
                                          (a = f ? f.c2 : 0),
                                          (l = d),
                                          (h = p),
                                          (c = 'current'))
                                        : ((n = r = f ? f.r1 + u : 0),
                                          (s = p),
                                          (a = p),
                                          (l = r),
                                          (h = p),
                                          (c = 'all')),
                                        i.select({
                                            r1: r,
                                            c1: s,
                                            r2: n,
                                            c2: a,
                                            cursorRow: l,
                                            cursorColumn: h,
                                            clear: c,
                                        }),
                                        (f = i.currentSelection()) &&
                                            t.scrollToRow(f.r2);
                                } else t.scrollByPage('down');
                            }
                        }),
                        (t.prototype.onEscape = function(t, e) {
                            t.selectionModel && t.selectionModel.clear();
                        }),
                        (t.prototype.onDelete = function(t, e) {
                            if (t.editable && !t.selectionModel.isEmpty)
                                for (
                                    var i = t.dataModel,
                                        o = i.rowCount('body') - 1,
                                        r = i.columnCount('body') - 1,
                                        n = t.selectionModel.selections(),
                                        s = void 0;
                                    void 0 !== (s = n.next());

                                )
                                    for (
                                        var a = Math.max(0, Math.min(s.r1, o)),
                                            l = Math.max(0, Math.min(s.c1, r)),
                                            h = Math.max(0, Math.min(s.r2, o)),
                                            c = Math.max(0, Math.min(s.c2, r)),
                                            u = a;
                                        u <= h;
                                        ++u
                                    )
                                        for (var d = l; d <= c; ++d)
                                            i.setData('body', u, d, null);
                        }),
                        (t.prototype.onKeyC = function(t, e) {
                            !e.shiftKey &&
                                o.Platform.accelKey(e) &&
                                (e.preventDefault(),
                                e.stopPropagation(),
                                t.copyToClipboard());
                        }),
                        t
                    );
                })(),
                d = function(t, e) {
                    return (
                        (d =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function(t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function(t, e) {
                                for (var i in e)
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        i
                                    ) && (t[i] = e[i]);
                            }),
                        d(t, e)
                    );
                };
            function p(t, e) {
                if ('function' != typeof e && null !== e)
                    throw new TypeError(
                        'Class extends value ' +
                            String(e) +
                            ' is not a constructor or null'
                    );
                function i() {
                    this.constructor = t;
                }
                d(t, e),
                    (t.prototype =
                        null === e
                            ? Object.create(e)
                            : ((i.prototype = e.prototype), new i()));
            }
            var f = function() {
                    return (
                        (f =
                            Object.assign ||
                            function(t) {
                                for (
                                    var e, i = 1, o = arguments.length;
                                    i < o;
                                    i++
                                )
                                    for (var r in (e = arguments[i]))
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            r
                                        ) && (t[r] = e[r]);
                                return t;
                            }),
                        f.apply(this, arguments)
                    );
                },
                _ = function() {};
            !(function(t) {
                t.resolveOption = function(t, e) {
                    return 'function' == typeof t ? t(e) : t;
                };
            })(_ || (_ = {}));
            var m,
                v = (function(t) {
                    function e(i) {
                        void 0 === i && (i = {});
                        var o = t.call(this) || this;
                        return (
                            (o.font = i.font || '12px sans-serif'),
                            (o.textColor = i.textColor || '#000000'),
                            (o.backgroundColor = i.backgroundColor || ''),
                            (o.verticalAlignment =
                                i.verticalAlignment || 'center'),
                            (o.horizontalAlignment =
                                i.horizontalAlignment || 'left'),
                            (o.format = i.format || e.formatGeneric()),
                            (o.elideDirection = i.elideDirection || 'right'),
                            (o.wrapText = i.wrapText || !1),
                            o
                        );
                    }
                    return (
                        p(e, t),
                        (e.prototype.paint = function(t, e) {
                            this.drawBackground(t, e), this.drawText(t, e);
                        }),
                        (e.prototype.drawBackground = function(t, e) {
                            var i = _.resolveOption(this.backgroundColor, e);
                            i &&
                                ((t.fillStyle = i),
                                t.fillRect(e.x, e.y, e.width, e.height));
                        }),
                        (e.prototype.drawText = function(t, i) {
                            var o = _.resolveOption(this.font, i);
                            if (o) {
                                var r = _.resolveOption(this.textColor, i);
                                if (r) {
                                    var n = (0, this.format)(i);
                                    if (n) {
                                        var s = _.resolveOption(
                                                this.verticalAlignment,
                                                i
                                            ),
                                            a = _.resolveOption(
                                                this.horizontalAlignment,
                                                i
                                            ),
                                            l = _.resolveOption(
                                                this.elideDirection,
                                                i
                                            ),
                                            h = _.resolveOption(
                                                this.wrapText,
                                                i
                                            ),
                                            c =
                                                i.height -
                                                ('center' === s ? 1 : 2);
                                        if (!(c <= 0)) {
                                            var u,
                                                d,
                                                p,
                                                f = e.measureFontHeight(o);
                                            switch (s) {
                                                case 'top':
                                                    d = i.y + 2 + f;
                                                    break;
                                                case 'center':
                                                    d =
                                                        i.y +
                                                        i.height / 2 +
                                                        f / 2;
                                                    break;
                                                case 'bottom':
                                                    d = i.y + i.height - 2;
                                                    break;
                                                default:
                                                    throw 'unreachable';
                                            }
                                            switch (a) {
                                                case 'left':
                                                    (u = i.x + 8),
                                                        (p = i.width - 14);
                                                    break;
                                                case 'center':
                                                    (u = i.x + i.width / 2),
                                                        (p = i.width);
                                                    break;
                                                case 'right':
                                                    (u = i.x + i.width - 8),
                                                        (p = i.width - 14);
                                                    break;
                                                default:
                                                    throw 'unreachable';
                                            }
                                            f > c &&
                                                (t.beginPath(),
                                                t.rect(
                                                    i.x,
                                                    i.y,
                                                    i.width,
                                                    i.height - 1
                                                ),
                                                t.clip()),
                                                (t.font = o),
                                                (t.fillStyle = r),
                                                (t.textAlign = a),
                                                (t.textBaseline = 'bottom');
                                            var m = t.measureText(n).width;
                                            if (h && m > p) {
                                                t.beginPath(),
                                                    t.rect(
                                                        i.x,
                                                        i.y,
                                                        i.width,
                                                        i.height - 1
                                                    ),
                                                    t.clip();
                                                var v = n.split(/\s(?=\b)/),
                                                    y = d,
                                                    g = v.shift();
                                                if (0 === v.length)
                                                    for (
                                                        var w = t.measureText(g)
                                                            .width;
                                                        w > p && '' !== g;

                                                    )
                                                        for (
                                                            var b = g.length;
                                                            b > 0;
                                                            b--
                                                        ) {
                                                            var C = g.substring(
                                                                0,
                                                                b
                                                            );
                                                            if (
                                                                t.measureText(C)
                                                                    .width <
                                                                    p ||
                                                                1 === C.length
                                                            ) {
                                                                var x = g.substring(
                                                                    b,
                                                                    g.length
                                                                );
                                                                (g = x),
                                                                    (w = t.measureText(
                                                                        g
                                                                    ).width),
                                                                    t.fillText(
                                                                        C,
                                                                        u,
                                                                        y
                                                                    ),
                                                                    (y += f);
                                                                break;
                                                            }
                                                        }
                                                else
                                                    for (; 0 !== v.length; ) {
                                                        var S = v.shift(),
                                                            M = [g, S].join(
                                                                ' '
                                                            );
                                                        t.measureText(M).width >
                                                        p
                                                            ? (t.fillText(
                                                                  g,
                                                                  u,
                                                                  y
                                                              ),
                                                              (y += f),
                                                              (g = S))
                                                            : (g = M);
                                                    }
                                                t.fillText(g, u, y);
                                            } else {
                                                var O = '…';
                                                if ('right' === l)
                                                    for (
                                                        ;
                                                        m > p && n.length > 1;

                                                    )
                                                        (n =
                                                            n.length > 4 &&
                                                            m >= 2 * p
                                                                ? n.substring(
                                                                      0,
                                                                      n.length /
                                                                          2 +
                                                                          1
                                                                  ) + O
                                                                : n.substring(
                                                                      0,
                                                                      n.length -
                                                                          2
                                                                  ) + O),
                                                            (m = t.measureText(
                                                                n
                                                            ).width);
                                                else
                                                    for (
                                                        ;
                                                        m > p && n.length > 1;

                                                    )
                                                        (n =
                                                            n.length > 4 &&
                                                            m >= 2 * p
                                                                ? O +
                                                                  n.substring(
                                                                      n.length /
                                                                          2
                                                                  )
                                                                : O +
                                                                  n.substring(
                                                                      2
                                                                  )),
                                                            (m = t.measureText(
                                                                n
                                                            ).width);
                                                t.fillText(n, u, d);
                                            }
                                        }
                                    }
                                }
                            }
                        }),
                        e
                    );
                })(_);
            !(function(t) {
                (t.formatGeneric = function(t) {
                    void 0 === t && (t = {});
                    var e = t.missing || '';
                    return function(t) {
                        var i = t.value;
                        return null == i ? e : String(i);
                    };
                }),
                    (t.formatFixed = function(t) {
                        void 0 === t && (t = {});
                        var e = t.digits,
                            i = t.missing || '';
                        return function(t) {
                            var o = t.value;
                            return null == o ? i : Number(o).toFixed(e);
                        };
                    }),
                    (t.formatPrecision = function(t) {
                        void 0 === t && (t = {});
                        var e = t.digits,
                            i = t.missing || '';
                        return function(t) {
                            var o = t.value;
                            return null == o ? i : Number(o).toPrecision(e);
                        };
                    }),
                    (t.formatExponential = function(t) {
                        void 0 === t && (t = {});
                        var e = t.digits,
                            i = t.missing || '';
                        return function(t) {
                            var o = t.value;
                            return null == o ? i : Number(o).toExponential(e);
                        };
                    }),
                    (t.formatIntlNumber = function(t) {
                        void 0 === t && (t = {});
                        var e = t.missing || '',
                            i = new Intl.NumberFormat(t.locales, t.options);
                        return function(t) {
                            var o = t.value;
                            return null == o ? e : i.format(o);
                        };
                    }),
                    (t.formatDate = function(t) {
                        void 0 === t && (t = {});
                        var e = t.missing || '';
                        return function(t) {
                            var i = t.value;
                            return null == i
                                ? e
                                : i instanceof Date
                                ? i.toDateString()
                                : new Date(i).toDateString();
                        };
                    }),
                    (t.formatTime = function(t) {
                        void 0 === t && (t = {});
                        var e = t.missing || '';
                        return function(t) {
                            var i = t.value;
                            return null == i
                                ? e
                                : i instanceof Date
                                ? i.toTimeString()
                                : new Date(i).toTimeString();
                        };
                    }),
                    (t.formatISODateTime = function(t) {
                        void 0 === t && (t = {});
                        var e = t.missing || '';
                        return function(t) {
                            var i = t.value;
                            return null == i
                                ? e
                                : i instanceof Date
                                ? i.toISOString()
                                : new Date(i).toISOString();
                        };
                    }),
                    (t.formatUTCDateTime = function(t) {
                        void 0 === t && (t = {});
                        var e = t.missing || '';
                        return function(t) {
                            var i = t.value;
                            return null == i
                                ? e
                                : i instanceof Date
                                ? i.toUTCString()
                                : new Date(i).toUTCString();
                        };
                    }),
                    (t.formatIntlDateTime = function(t) {
                        void 0 === t && (t = {});
                        var e = t.missing || '',
                            i = new Intl.DateTimeFormat(t.locales, t.options);
                        return function(t) {
                            var o = t.value;
                            return null == o ? e : i.format(o);
                        };
                    }),
                    (t.measureFontHeight = function(t) {
                        var e = m.fontHeightCache[t];
                        if (void 0 !== e) return e;
                        m.fontMeasurementGC.font = t;
                        var i = m.fontMeasurementGC.font;
                        return (
                            (m.fontMeasurementNode.style.font = i),
                            document.body.appendChild(m.fontMeasurementNode),
                            (e = m.fontMeasurementNode.offsetHeight),
                            document.body.removeChild(m.fontMeasurementNode),
                            (m.fontHeightCache[t] = e),
                            (m.fontHeightCache[i] = e),
                            e
                        );
                    });
            })(v || (v = {})),
                (function(t) {
                    var e, i;
                    (t.fontHeightCache = Object.create(null)),
                        (t.fontMeasurementNode =
                            (((e = document.createElement(
                                'div'
                            )).style.position = 'absolute'),
                            (e.style.top = '-99999px'),
                            (e.style.left = '-99999px'),
                            (e.style.visibility = 'hidden'),
                            (e.textContent = 'M'),
                            e)),
                        (t.fontMeasurementGC =
                            (((i = document.createElement('canvas')).width = 0),
                            (i.height = 0),
                            i.getContext('2d')));
                })(m || (m = {}));
            var y,
                g = (function(t) {
                    function e(e) {
                        void 0 === e && (e = {});
                        var i = this;
                        return (
                            (e.textColor = e.textColor || 'navy'),
                            (e.font = e.font || 'bold 12px sans-serif'),
                            ((i = t.call(this, e) || this).url = e.url),
                            (i.urlName = e.urlName),
                            i
                        );
                    }
                    return (
                        p(e, t),
                        (e.prototype.drawText = function(t, i) {
                            var o = _.resolveOption(this.font, i);
                            if (o) {
                                var r,
                                    n = _.resolveOption(this.urlName, i),
                                    s = _.resolveOption(this.textColor, i);
                                if (s)
                                    if (
                                        (r = (0, this.format)(
                                            n ? f(f({}, i), { value: n }) : i
                                        ))
                                    ) {
                                        var a = _.resolveOption(
                                                this.verticalAlignment,
                                                i
                                            ),
                                            l = _.resolveOption(
                                                this.horizontalAlignment,
                                                i
                                            ),
                                            h = _.resolveOption(
                                                this.elideDirection,
                                                i
                                            ),
                                            c = _.resolveOption(
                                                this.wrapText,
                                                i
                                            ),
                                            u =
                                                i.height -
                                                ('center' === a ? 1 : 2);
                                        if (!(u <= 0)) {
                                            var d,
                                                p,
                                                m,
                                                v = e.measureFontHeight(o);
                                            switch (a) {
                                                case 'top':
                                                    p = i.y + 2 + v;
                                                    break;
                                                case 'center':
                                                    p =
                                                        i.y +
                                                        i.height / 2 +
                                                        v / 2;
                                                    break;
                                                case 'bottom':
                                                    p = i.y + i.height - 2;
                                                    break;
                                                default:
                                                    throw 'unreachable';
                                            }
                                            switch (l) {
                                                case 'left':
                                                    (d = i.x + 8),
                                                        (m = i.width - 14);
                                                    break;
                                                case 'center':
                                                    (d = i.x + i.width / 2),
                                                        (m = i.width);
                                                    break;
                                                case 'right':
                                                    (d = i.x + i.width - 8),
                                                        (m = i.width - 14);
                                                    break;
                                                default:
                                                    throw 'unreachable';
                                            }
                                            v > u &&
                                                (t.beginPath(),
                                                t.rect(
                                                    i.x,
                                                    i.y,
                                                    i.width,
                                                    i.height - 1
                                                ),
                                                t.clip()),
                                                (t.font = o),
                                                (t.fillStyle = s),
                                                (t.textAlign = l),
                                                (t.textBaseline = 'bottom');
                                            var y = t.measureText(r).width;
                                            if (c && y > m) {
                                                t.beginPath(),
                                                    t.rect(
                                                        i.x,
                                                        i.y,
                                                        i.width,
                                                        i.height - 1
                                                    ),
                                                    t.clip();
                                                var g = r.split(/\s(?=\b)/),
                                                    w = p,
                                                    b = g.shift();
                                                if (0 === g.length)
                                                    for (
                                                        var C = t.measureText(b)
                                                            .width;
                                                        C > m && '' !== b;

                                                    )
                                                        for (
                                                            var x = b.length;
                                                            x > 0;
                                                            x--
                                                        ) {
                                                            var S = b.substring(
                                                                0,
                                                                x
                                                            );
                                                            if (
                                                                t.measureText(S)
                                                                    .width <
                                                                    m ||
                                                                1 === S.length
                                                            ) {
                                                                var M = b.substring(
                                                                    x,
                                                                    b.length
                                                                );
                                                                (b = M),
                                                                    (C = t.measureText(
                                                                        b
                                                                    ).width),
                                                                    t.fillText(
                                                                        S,
                                                                        d,
                                                                        w
                                                                    ),
                                                                    (w += v);
                                                                break;
                                                            }
                                                        }
                                                else
                                                    for (; 0 !== g.length; ) {
                                                        var O = g.shift(),
                                                            H = [b, O].join(
                                                                ' '
                                                            );
                                                        t.measureText(H).width >
                                                        m
                                                            ? (t.fillText(
                                                                  b,
                                                                  d,
                                                                  w
                                                              ),
                                                              (w += v),
                                                              (b = O))
                                                            : (b = H);
                                                    }
                                                t.fillText(b, d, w);
                                            } else {
                                                var z = '…';
                                                if ('right' === h)
                                                    for (
                                                        ;
                                                        y > m && r.length > 1;

                                                    )
                                                        (r =
                                                            r.length > 4 &&
                                                            y >= 2 * m
                                                                ? r.substring(
                                                                      0,
                                                                      r.length /
                                                                          2 +
                                                                          1
                                                                  ) + z
                                                                : r.substring(
                                                                      0,
                                                                      r.length -
                                                                          2
                                                                  ) + z),
                                                            (y = t.measureText(
                                                                r
                                                            ).width);
                                                else
                                                    for (
                                                        ;
                                                        y > m && r.length > 1;

                                                    )
                                                        (r =
                                                            r.length > 4 &&
                                                            y >= 2 * m
                                                                ? z +
                                                                  r.substring(
                                                                      r.length /
                                                                          2
                                                                  )
                                                                : z +
                                                                  r.substring(
                                                                      2
                                                                  )),
                                                            (y = t.measureText(
                                                                r
                                                            ).width);
                                                t.fillText(r, d, p);
                                            }
                                        }
                                    }
                            }
                        }),
                        e
                    );
                })(v);
            !(function(t) {
                function e(t, e, i) {
                    return 'row' === i
                        ? (t.r1 >= e.r1 && t.r1 <= e.r2) ||
                              (t.r2 >= e.r1 && t.r2 <= e.r2) ||
                              (e.r1 >= t.r1 && e.r1 <= t.r2) ||
                              (e.r2 >= t.r1 && e.r2 <= t.r2)
                        : (t.c1 >= e.c1 && t.c1 <= e.c2) ||
                              (t.c2 >= e.c1 && t.c2 <= e.c2) ||
                              (e.c1 >= t.c1 && e.c1 <= t.c2) ||
                              (e.c2 >= t.c1 && e.c2 <= t.c2);
                }
                function i(t, e) {
                    return (
                        ((t.r1 >= e.r1 && t.r1 <= e.r2) ||
                            (t.r2 >= e.r1 && t.r2 <= e.r2) ||
                            (e.r1 >= t.r1 && e.r1 <= t.r2) ||
                            (e.r2 >= t.r1 && e.r2 <= t.r2)) &&
                        ((t.c1 >= e.c1 && t.c1 <= e.c2) ||
                            (t.c2 >= e.c1 && t.c2 <= e.c2) ||
                            (e.c1 >= t.c1 && e.c1 <= t.c2) ||
                            (e.c2 >= t.c1 && e.c2 <= t.c2))
                    );
                }
                function o(t, e, i, o) {
                    for (var r = t.groupCount(e), n = 0; n < r; n++) {
                        var s = t.group(e, n);
                        if (i >= s.r1 && i <= s.r2 && o >= s.c1 && o <= s.c2)
                            return n;
                    }
                    return -1;
                }
                function r(t, e) {
                    for (var i = [], o = t.groupCount(e), r = 0; r < o; r++) {
                        var n = t.group(e, r);
                        i.push(n);
                    }
                    return i;
                }
                function n(t) {
                    for (
                        var e = Number.MAX_VALUE,
                            i = Number.MIN_VALUE,
                            o = Number.MAX_VALUE,
                            r = Number.MIN_VALUE,
                            n = 0,
                            s = t;
                        n < s.length;
                        n++
                    ) {
                        var a = s[n];
                        (e = Math.min(e, a.r1)),
                            (i = Math.max(i, a.r2)),
                            (o = Math.min(o, a.c1)),
                            (r = Math.max(r, a.c2));
                    }
                    return { r1: e, r2: i, c1: o, c2: r };
                }
                function s(t, e, i) {
                    for (var o = [], r = t.groupCount(e), n = 0; n < r; n++) {
                        var s = t.group(e, n);
                        i >= s.r1 && i <= s.r2 && o.push(s);
                    }
                    return o;
                }
                function a(t, e, i) {
                    for (var o = [], r = t.groupCount(e), n = 0; n < r; n++) {
                        var s = t.group(e, n);
                        i >= s.c1 && i <= s.c2 && o.push(s);
                    }
                    return o;
                }
                (t.areCellsMerged = function(t, e, i, o) {
                    for (
                        var r = t.groupCount(e),
                            n = i[0],
                            s = i[1],
                            a = o[0],
                            l = o[1],
                            h = 0;
                        h < r;
                        h++
                    ) {
                        var c = t.group(e, h);
                        if (
                            n >= c.r1 &&
                            n <= c.r2 &&
                            s >= c.c1 &&
                            s <= c.c2 &&
                            a >= c.r1 &&
                            a <= c.r2 &&
                            l >= c.c1 &&
                            l <= c.c2
                        )
                            return !0;
                    }
                    return !1;
                }),
                    (t.calculateMergeOffsets = function(t, i, o, l, h) {
                        for (
                            var c = 0, u = 0, d = [], p = 0, f = i;
                            p < f.length;
                            p++
                        ) {
                            var _ = f[p];
                            d = d.concat(r(t, _));
                        }
                        var m = [];
                        if ('row' === o)
                            for (var v = 0, y = i; v < y.length; v++)
                                (_ = y[v]), (m = m.concat(s(t, _, h)));
                        else
                            for (var g = 0, w = i; g < w.length; g++)
                                (_ = w[g]), (m = m.concat(a(t, _, h)));
                        if (0 === m.length)
                            return [0, 0, { r1: -1, r2: -1, c1: -1, c2: -1 }];
                        for (var b = m[0], C = 0; C < d.length; C++) {
                            var x = d[C];
                            e(b, x, o) &&
                                ((b = n([x, b])), d.splice(C, 1), (C = 0));
                        }
                        for (var S = b.r1, M = b.r2, O = h - 1; O >= S; O--)
                            c += l.sizeOf(O);
                        for (O = h + 1; O <= M; O++) u += l.sizeOf(O);
                        return [c, u, b];
                    }),
                    (t.areCellGroupsIntersectingAtAxis = e),
                    (t.areCellGroupsIntersecting = i),
                    (t.getGroupIndex = o),
                    (t.getGroup = function(t, e, i, r) {
                        var n = o(t, e, i, r);
                        return -1 === n ? null : t.group(e, n);
                    }),
                    (t.getCellGroupsAtRegion = r),
                    (t.joinCellGroups = n),
                    (t.joinCellGroupWithMergedCellGroups = function(t, e, o) {
                        for (
                            var s = f({}, e), a = r(t, o), l = 0;
                            l < a.length;
                            l++
                        ) {
                            var h = a[l];
                            i(s, h) && (s = n([s, h]));
                        }
                        return s;
                    }),
                    (t.getCellGroupsAtRow = s),
                    (t.getCellGroupsAtColumn = a),
                    (t.isCellGroupAbove = function(t, e) {
                        return e.r2 >= t.r1;
                    }),
                    (t.isCellGroupBelow = function(t, e) {
                        return e.r1 <= t.r2;
                    }),
                    (t.joinCellGroupsIntersectingAtAxis = function(e, i, o, r) {
                        var n = [];
                        if ('row' === o)
                            for (var s = 0, a = i; s < a.length; s++)
                                for (var l = a[s], h = r.r1; h <= r.r2; h++)
                                    n = n.concat(t.getCellGroupsAtRow(e, l, h));
                        else
                            for (var c = 0, u = i; c < u.length; c++) {
                                l = u[c];
                                for (var d = r.c1; d <= r.c2; d++)
                                    n = n.concat(
                                        t.getCellGroupsAtColumn(e, l, d)
                                    );
                            }
                        var p = t.joinCellGroups(n);
                        if (n.length > 0) {
                            for (var f = [], _ = 0, m = i; _ < m.length; _++)
                                (l = m[_]),
                                    (f = f.concat(
                                        t.getCellGroupsAtRegion(e, l)
                                    ));
                            for (var v = 0; v < f.length; v++) {
                                var y = f[v];
                                t.areCellGroupsIntersectingAtAxis(p, y, o) &&
                                    ((p = t.joinCellGroups([y, p])),
                                    f.splice(v, 1),
                                    (v = 0));
                            }
                        }
                        return p;
                    });
            })(y || (y = {}));
            var w,
                b = (function() {
                    function t() {
                        (this._disposed = !1), (this._pressData = null);
                    }
                    return (
                        (t.prototype.dispose = function() {
                            this._disposed ||
                                (this.release(), (this._disposed = !0));
                        }),
                        Object.defineProperty(t.prototype, 'isDisposed', {
                            get: function() {
                                return this._disposed;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.release = function() {
                            this._pressData &&
                                ('select' === this._pressData.type &&
                                    (this._pressData.timeout = -1),
                                this._pressData.override.dispose(),
                                (this._pressData = null));
                        }),
                        (t.prototype.onMouseHover = function(t, e) {
                            var i = t.hitTest(e.clientX, e.clientY),
                                o = w.resizeHandleForHitTest(i),
                                r = this.cursorForHandle(o),
                                n = w.createCellConfigObject(t, i);
                            n &&
                                t.cellRenderers.get(n) instanceof g &&
                                (r = this.cursorForHandle('hyperlink')),
                                (t.viewport.node.style.cursor = r);
                        }),
                        (t.prototype.onMouseLeave = function(t, e) {
                            t.viewport.node.style.cursor = '';
                        }),
                        (t.prototype.onMouseDown = function(t, e) {
                            var i = e.clientX,
                                r = e.clientY,
                                s = t.hitTest(i, r),
                                a = s.region,
                                l = s.row,
                                h = s.column;
                            if ('void' !== a) {
                                var c = e.shiftKey,
                                    u = o.Platform.accelKey(e);
                                if (t) {
                                    var d = w.createCellConfigObject(t, s),
                                        p = t.cellRenderers.get(d);
                                    if (p instanceof g) {
                                        var f = _.resolveOption(p.url, d);
                                        if (
                                            (f || (f = v.formatGeneric()(d)), u)
                                        ) {
                                            window.open(f);
                                            var m = this.cursorForHandle(
                                                'none'
                                            );
                                            return void (t.viewport.node.style.cursor = m);
                                        }
                                    }
                                }
                                if ('body' === a) {
                                    var b = t.selectionModel;
                                    if (!b) return;
                                    var C,
                                        x,
                                        S,
                                        M,
                                        O,
                                        H,
                                        z,
                                        R = n.Drag.overrideCursor('default');
                                    return (
                                        (this._pressData = {
                                            type: 'select',
                                            region: a,
                                            row: l,
                                            column: h,
                                            override: R,
                                            localX: -1,
                                            localY: -1,
                                            timeout: -1,
                                        }),
                                        u
                                            ? ((C = l),
                                              (S = l),
                                              (x = h),
                                              (M = h),
                                              (O = l),
                                              (H = h),
                                              (z = 'none'))
                                            : c
                                            ? ((C = b.cursorRow),
                                              (S = l),
                                              (x = b.cursorColumn),
                                              (M = h),
                                              (O = b.cursorRow),
                                              (H = b.cursorColumn),
                                              (z = 'current'))
                                            : ((C = l),
                                              (S = l),
                                              (x = h),
                                              (M = h),
                                              (O = l),
                                              (H = h),
                                              (z = 'all')),
                                        void b.select({
                                            r1: C,
                                            c1: x,
                                            r2: S,
                                            c2: M,
                                            cursorRow: O,
                                            cursorColumn: H,
                                            clear: z,
                                        })
                                    );
                                }
                                var E = w.resizeHandleForHitTest(s),
                                    k = this.cursorForHandle(E);
                                if ('left' !== E && 'right' !== E)
                                    if ('top' !== E && 'bottom' !== E) {
                                        var L = t.selectionModel;
                                        if (L) {
                                            var P,
                                                T,
                                                D,
                                                B,
                                                W,
                                                G,
                                                A,
                                                j = n.Drag.overrideCursor(
                                                    'default'
                                                );
                                            if (
                                                ((this._pressData = {
                                                    type: 'select',
                                                    region: a,
                                                    row: l,
                                                    column: h,
                                                    override: j,
                                                    localX: -1,
                                                    localY: -1,
                                                    timeout: -1,
                                                }),
                                                'corner-header' === a)
                                            )
                                                (P = 0),
                                                    (D = 1 / 0),
                                                    (T = 0),
                                                    (B = 1 / 0),
                                                    (W = u
                                                        ? 0
                                                        : c
                                                        ? L.cursorRow
                                                        : 0),
                                                    (G = u
                                                        ? 0
                                                        : c
                                                        ? L.cursorColumn
                                                        : 0),
                                                    (A = u
                                                        ? 'none'
                                                        : c
                                                        ? 'current'
                                                        : 'all');
                                            else if ('row-header' === a) {
                                                var I = {
                                                    r1: (P = u
                                                        ? l
                                                        : c
                                                        ? L.cursorRow
                                                        : l),
                                                    c1: 0,
                                                    r2: (D = l),
                                                    c2: 0,
                                                };
                                                (N = y.joinCellGroupsIntersectingAtAxis(
                                                    t.dataModel,
                                                    ['row-header', 'body'],
                                                    'row',
                                                    I
                                                )).r1 != Number.MAX_VALUE &&
                                                    ((P = N.r1), (D = N.r2)),
                                                    (T = 0),
                                                    (B = 1 / 0),
                                                    (W = u
                                                        ? l
                                                        : c
                                                        ? L.cursorRow
                                                        : l),
                                                    (G = u
                                                        ? 0
                                                        : c
                                                        ? L.cursorColumn
                                                        : 0),
                                                    (A = u
                                                        ? 'none'
                                                        : c
                                                        ? 'current'
                                                        : 'all');
                                            } else if ('column-header' === a) {
                                                var N;
                                                (P = 0),
                                                    (D = 1 / 0),
                                                    (I = {
                                                        r1: 0,
                                                        c1: (T = u
                                                            ? h
                                                            : c
                                                            ? L.cursorColumn
                                                            : h),
                                                        r2: 0,
                                                        c2: (B = h),
                                                    }),
                                                    (N = y.joinCellGroupsIntersectingAtAxis(
                                                        t.dataModel,
                                                        [
                                                            'column-header',
                                                            'body',
                                                        ],
                                                        'column',
                                                        I
                                                    )).c1 != Number.MAX_VALUE &&
                                                        ((T = N.c1),
                                                        (B = N.c2)),
                                                    (W = u
                                                        ? 0
                                                        : c
                                                        ? L.cursorRow
                                                        : 0),
                                                    (G = u
                                                        ? h
                                                        : c
                                                        ? L.cursorColumn
                                                        : h),
                                                    (A = u
                                                        ? 'none'
                                                        : c
                                                        ? 'current'
                                                        : 'all');
                                            } else
                                                (P = u
                                                    ? l
                                                    : c
                                                    ? L.cursorRow
                                                    : l),
                                                    (D = l),
                                                    (T = u
                                                        ? h
                                                        : c
                                                        ? L.cursorColumn
                                                        : h),
                                                    (B = h),
                                                    (W = u
                                                        ? l
                                                        : c
                                                        ? L.cursorRow
                                                        : l),
                                                    (G = u
                                                        ? h
                                                        : c
                                                        ? L.cursorColumn
                                                        : h),
                                                    (A = u
                                                        ? 'none'
                                                        : c
                                                        ? 'current'
                                                        : 'all');
                                            L.select({
                                                r1: P,
                                                c1: T,
                                                r2: D,
                                                c2: B,
                                                cursorRow: W,
                                                cursorColumn: G,
                                                clear: A,
                                            });
                                        }
                                    } else {
                                        (X = 'row-resize'),
                                            (Y =
                                                'row-header' === a
                                                    ? 'body'
                                                    : 'column-header'),
                                            (K = 'top' === E ? l - 1 : l),
                                            (F = t.rowSize(Y, K));
                                        var V = n.Drag.overrideCursor(k);
                                        this._pressData = {
                                            type: X,
                                            region: Y,
                                            index: K,
                                            size: F,
                                            clientY: r,
                                            override: V,
                                        };
                                    }
                                else {
                                    var X = 'column-resize',
                                        Y =
                                            'column-header' === a
                                                ? 'body'
                                                : 'row-header',
                                        K = 'left' === E ? h - 1 : h,
                                        F = t.columnSize(Y, K),
                                        q = n.Drag.overrideCursor(k);
                                    this._pressData = {
                                        type: X,
                                        region: Y,
                                        index: K,
                                        size: F,
                                        clientX: i,
                                        override: q,
                                    };
                                }
                            }
                        }),
                        (t.prototype.onMouseMove = function(t, e) {
                            var i = this._pressData;
                            if (i)
                                if ('row-resize' !== i.type)
                                    if ('column-resize' !== i.type) {
                                        if ('corner-header' !== i.region) {
                                            var o = t.selectionModel;
                                            if (o) {
                                                var r = t.mapToLocal(
                                                        e.clientX,
                                                        e.clientY
                                                    ),
                                                    n = r.lx,
                                                    s = r.ly;
                                                (i.localX = n), (i.localY = s);
                                                var a = t.headerWidth,
                                                    l = t.headerHeight,
                                                    h = t.viewportWidth,
                                                    c = t.viewportHeight,
                                                    u = t.scrollX,
                                                    d = t.scrollY,
                                                    p = t.maxScrollY,
                                                    f = t.maxScrollY,
                                                    _ = o.selectionMode,
                                                    m = -1;
                                                if (
                                                    ('row-header' ===
                                                        i.region || 'row' === _
                                                        ? s < l && d > 0
                                                            ? (m = w.computeTimeout(
                                                                  l - s
                                                              ))
                                                            : s >= c &&
                                                              d < f &&
                                                              (m = w.computeTimeout(
                                                                  s - c
                                                              ))
                                                        : 'column-header' ===
                                                              i.region ||
                                                          'column' === _
                                                        ? n < a && u > 0
                                                            ? (m = w.computeTimeout(
                                                                  a - n
                                                              ))
                                                            : n >= h &&
                                                              u < p &&
                                                              (m = w.computeTimeout(
                                                                  n - h
                                                              ))
                                                        : n < a && u > 0
                                                        ? (m = w.computeTimeout(
                                                              a - n
                                                          ))
                                                        : n >= h && u < p
                                                        ? (m = w.computeTimeout(
                                                              n - h
                                                          ))
                                                        : s < l && d > 0
                                                        ? (m = w.computeTimeout(
                                                              l - s
                                                          ))
                                                        : s >= c &&
                                                          d < f &&
                                                          (m = w.computeTimeout(
                                                              s - c
                                                          )),
                                                    m >= 0)
                                                )
                                                    i.timeout < 0
                                                        ? ((i.timeout = m),
                                                          setTimeout(
                                                              function() {
                                                                  w.autoselect(
                                                                      t,
                                                                      i
                                                                  );
                                                              },
                                                              m
                                                          ))
                                                        : (i.timeout = m);
                                                else {
                                                    i.timeout = -1;
                                                    var v,
                                                        g,
                                                        b,
                                                        C,
                                                        x = t.mapToVirtual(
                                                            e.clientX,
                                                            e.clientY
                                                        ),
                                                        S = x.vx,
                                                        M = x.vy;
                                                    (S = Math.max(
                                                        0,
                                                        Math.min(
                                                            S,
                                                            t.bodyWidth - 1
                                                        )
                                                    )),
                                                        (M = Math.max(
                                                            0,
                                                            Math.min(
                                                                M,
                                                                t.bodyHeight - 1
                                                            )
                                                        ));
                                                    var O = o.cursorRow,
                                                        H = o.cursorColumn;
                                                    if (
                                                        'row-header' ===
                                                            i.region ||
                                                        'row' === _
                                                    ) {
                                                        var z = {
                                                            r1: (v = i.row),
                                                            c1: 0,
                                                            r2: (b = t.rowAt(
                                                                'body',
                                                                M
                                                            )),
                                                            c2: 0,
                                                        };
                                                        (R = y.joinCellGroupsIntersectingAtAxis(
                                                            t.dataModel,
                                                            [
                                                                'row-header',
                                                                'body',
                                                            ],
                                                            'row',
                                                            z
                                                        )).r1 !=
                                                            Number.MAX_VALUE &&
                                                            ((v = Math.min(
                                                                v,
                                                                R.r1
                                                            )),
                                                            (b = Math.max(
                                                                b,
                                                                R.r2
                                                            ))),
                                                            (g = 0),
                                                            (C = 1 / 0);
                                                    } else if (
                                                        'column-header' ===
                                                            i.region ||
                                                        'column' === _
                                                    ) {
                                                        var R;
                                                        (v = 0),
                                                            (b = 1 / 0),
                                                            (z = {
                                                                r1: 0,
                                                                c1: (g =
                                                                    i.column),
                                                                r2: 0,
                                                                c2: (C = t.columnAt(
                                                                    'body',
                                                                    S
                                                                )),
                                                            }),
                                                            (R = y.joinCellGroupsIntersectingAtAxis(
                                                                t.dataModel,
                                                                [
                                                                    'column-header',
                                                                    'body',
                                                                ],
                                                                'column',
                                                                z
                                                            )).c1 !=
                                                                Number.MAX_VALUE &&
                                                                ((g = R.c1),
                                                                (C = R.c2));
                                                    } else
                                                        (v = O),
                                                            (b = t.rowAt(
                                                                'body',
                                                                M
                                                            )),
                                                            (g = H),
                                                            (C = t.columnAt(
                                                                'body',
                                                                S
                                                            ));
                                                    o.select({
                                                        r1: v,
                                                        c1: g,
                                                        r2: b,
                                                        c2: C,
                                                        cursorRow: O,
                                                        cursorColumn: H,
                                                        clear: 'current',
                                                    });
                                                }
                                            }
                                        }
                                    } else {
                                        var E = e.clientX - i.clientX;
                                        t.resizeColumn(
                                            i.region,
                                            i.index,
                                            i.size + E
                                        );
                                    }
                                else {
                                    var k = e.clientY - i.clientY;
                                    t.resizeRow(i.region, i.index, i.size + k);
                                }
                        }),
                        (t.prototype.onMouseUp = function(t, e) {
                            this.release();
                        }),
                        (t.prototype.onMouseDoubleClick = function(t, e) {
                            if (t.dataModel) {
                                var i = e.clientX,
                                    o = e.clientY,
                                    r = t.hitTest(i, o),
                                    n = r.region,
                                    s = r.row,
                                    a = r.column;
                                if ('void' !== n) {
                                    if ('body' === n && t.editable) {
                                        var l = { grid: t, row: s, column: a };
                                        t.editorController.edit(l);
                                    }
                                    this.release();
                                } else this.release();
                            } else this.release();
                        }),
                        (t.prototype.onContextMenu = function(t, e) {}),
                        (t.prototype.onWheel = function(t, e) {
                            if (!this._pressData) {
                                var i = e.deltaX,
                                    o = e.deltaY;
                                switch (e.deltaMode) {
                                    case 0:
                                        break;
                                    case 1:
                                        var r = t.defaultSizes;
                                        (i *= r.columnWidth),
                                            (o *= r.rowHeight);
                                        break;
                                    case 2:
                                        (i *= t.pageWidth), (o *= t.pageHeight);
                                        break;
                                    default:
                                        throw 'unreachable';
                                }
                                t.scrollBy(i, o);
                            }
                        }),
                        (t.prototype.cursorForHandle = function(t) {
                            return w.cursorMap[t];
                        }),
                        Object.defineProperty(t.prototype, 'pressData', {
                            get: function() {
                                return this._pressData;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        t
                    );
                })();
            !(function(t) {
                (t.createCellConfigObject = function(t, e) {
                    var i = e.region,
                        o = e.row,
                        r = e.column;
                    if ('void' !== i) {
                        var n = t.dataModel.data(i, o, r),
                            s = t.dataModel.metadata(i, o, r);
                        return f(f({}, e), { value: n, metadata: s });
                    }
                }),
                    (t.resizeHandleForHitTest = function(t) {
                        var e,
                            i = t.row,
                            o = t.column,
                            r = t.x,
                            n = t.y,
                            s = t.width - t.x,
                            a = t.height - t.y;
                        switch (t.region) {
                            case 'corner-header':
                            case 'column-header':
                            case 'row-header':
                                e =
                                    o > 0 && r <= 5
                                        ? 'left'
                                        : s <= 6
                                        ? 'right'
                                        : i > 0 && n <= 5
                                        ? 'top'
                                        : a <= 6
                                        ? 'bottom'
                                        : 'none';
                                break;
                            case 'body':
                            case 'void':
                                e = 'none';
                                break;
                            default:
                                throw 'unreachable';
                        }
                        return e;
                    }),
                    (t.autoselect = function t(e, i) {
                        if (!(i.timeout < 0)) {
                            var o = e.selectionModel;
                            if (o) {
                                var r = o.currentSelection();
                                if (r) {
                                    var n = i.localX,
                                        s = i.localY,
                                        a = r.r1,
                                        l = r.c1,
                                        h = r.r2,
                                        c = r.c2,
                                        u = o.cursorRow,
                                        d = o.cursorColumn,
                                        p = e.headerWidth,
                                        f = e.headerHeight,
                                        _ = e.viewportWidth,
                                        m = e.viewportHeight,
                                        v = o.selectionMode;
                                    'row-header' === i.region || 'row' === v
                                        ? (h += s <= f ? -1 : s >= m ? 1 : 0)
                                        : ('column-header' === i.region ||
                                              'column' === v ||
                                              (h +=
                                                  s <= f ? -1 : s >= m ? 1 : 0),
                                          (c += n <= p ? -1 : n >= _ ? 1 : 0)),
                                        o.select({
                                            r1: a,
                                            c1: l,
                                            r2: h,
                                            c2: c,
                                            cursorRow: u,
                                            cursorColumn: d,
                                            clear: 'current',
                                        }),
                                        (r = o.currentSelection()) &&
                                            ('row-header' === i.region ||
                                            'row' === v
                                                ? e.scrollToRow(r.r2)
                                                : 'column-header' ===
                                                      i.region || 'column' == v
                                                ? e.scrollToColumn(r.c2)
                                                : 'cell' === v &&
                                                  e.scrollToCell(r.r2, r.c2),
                                            setTimeout(function() {
                                                t(e, i);
                                            }, i.timeout));
                                }
                            }
                        }
                    }),
                    (t.computeTimeout = function(t) {
                        return 5 + 120 * (1 - Math.min(128, Math.abs(t)) / 128);
                    }),
                    (t.cursorMap = {
                        top: 'ns-resize',
                        left: 'ew-resize',
                        right: 'ew-resize',
                        bottom: 'ns-resize',
                        hyperlink: 'pointer',
                        none: 'default',
                    });
            })(w || (w = {}));
            var C,
                x = (function() {
                    function t(t) {
                        (this._changed = new a.Signal(this)),
                            (this._selectionMode = 'cell'),
                            (this.dataModel = t.dataModel),
                            (this._selectionMode = t.selectionMode || 'cell'),
                            this.dataModel.changed.connect(
                                this.onDataModelChanged,
                                this
                            );
                    }
                    return (
                        Object.defineProperty(t.prototype, 'changed', {
                            get: function() {
                                return this._changed;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'selectionMode', {
                            get: function() {
                                return this._selectionMode;
                            },
                            set: function(t) {
                                this._selectionMode !== t &&
                                    ((this._selectionMode = t), this.clear());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.isRowSelected = function(t) {
                            return (0, s.some)(this.selections(), function(e) {
                                return C.containsRow(e, t);
                            });
                        }),
                        (t.prototype.isColumnSelected = function(t) {
                            return (0, s.some)(this.selections(), function(e) {
                                return C.containsColumn(e, t);
                            });
                        }),
                        (t.prototype.isCellSelected = function(t, e) {
                            return (0, s.some)(this.selections(), function(i) {
                                return C.containsCell(i, t, e);
                            });
                        }),
                        (t.prototype.onDataModelChanged = function(t, e) {}),
                        (t.prototype.emitChanged = function() {
                            this._changed.emit(void 0);
                        }),
                        t
                    );
                })();
            !(function(t) {
                function e(t, e) {
                    var i = t.r1,
                        o = t.r2;
                    return (e >= i && e <= o) || (e >= o && e <= i);
                }
                function i(t, e) {
                    var i = t.c1,
                        o = t.c2;
                    return (e >= i && e <= o) || (e >= o && e <= i);
                }
                (t.containsRow = e),
                    (t.containsColumn = i),
                    (t.containsCell = function(t, o, r) {
                        return e(t, o) && i(t, r);
                    });
            })(C || (C = {}));
            var S,
                M = (function(t) {
                    function e() {
                        var e =
                            (null !== t && t.apply(this, arguments)) || this;
                        return (
                            (e._cursorRow = -1),
                            (e._cursorColumn = -1),
                            (e._cursorRectIndex = -1),
                            (e._selections = []),
                            e
                        );
                    }
                    return (
                        p(e, t),
                        Object.defineProperty(e.prototype, 'isEmpty', {
                            get: function() {
                                return 0 === this._selections.length;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'cursorRow', {
                            get: function() {
                                return this._cursorRow;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'cursorColumn', {
                            get: function() {
                                return this._cursorColumn;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.moveCursorWithinSelections = function(t) {
                            var e = this;
                            if (
                                !this.isEmpty &&
                                -1 !== this.cursorRow &&
                                -1 !== this._cursorColumn
                            ) {
                                var i = this._selections[0];
                                if (
                                    1 !== this._selections.length ||
                                    i.r1 !== i.r2 ||
                                    i.c1 !== i.c2
                                ) {
                                    -1 === this._cursorRectIndex &&
                                        (this._cursorRectIndex =
                                            this._selections.length - 1);
                                    var o = this._selections[
                                            this._cursorRectIndex
                                        ],
                                        r =
                                            'down' === t
                                                ? 1
                                                : 'up' === t
                                                ? -1
                                                : 0,
                                        n =
                                            'right' === t
                                                ? 1
                                                : 'left' === t
                                                ? -1
                                                : 0,
                                        s = this._cursorRow + r,
                                        a = this._cursorColumn + n,
                                        l = Math.min(o.r1, o.r2),
                                        h = Math.max(o.r1, o.r2),
                                        c = Math.min(o.c1, o.c2),
                                        u = Math.max(o.c1, o.c2),
                                        d = function() {
                                            (e._cursorRectIndex =
                                                (e._cursorRectIndex + 1) %
                                                e._selections.length),
                                                (o =
                                                    e._selections[
                                                        e._cursorRectIndex
                                                    ]),
                                                (s = Math.min(o.r1, o.r2)),
                                                (a = Math.min(o.c1, o.c2));
                                        },
                                        p = function() {
                                            (e._cursorRectIndex =
                                                0 === e._cursorRectIndex
                                                    ? e._selections.length - 1
                                                    : e._cursorRectIndex - 1),
                                                (o =
                                                    e._selections[
                                                        e._cursorRectIndex
                                                    ]),
                                                (s = Math.max(o.r1, o.r2)),
                                                (a = Math.max(o.c1, o.c2));
                                        };
                                    s > h
                                        ? ((s = l), (a += 1) > u && d())
                                        : s < l
                                        ? ((s = h), (a -= 1) < c && p())
                                        : a > u
                                        ? ((a = c), (s += 1) > h && d())
                                        : a < c &&
                                          ((a = u), (s -= 1) < l && p()),
                                        (this._cursorRow = s),
                                        (this._cursorColumn = a),
                                        this.emitChanged();
                                }
                            }
                        }),
                        (e.prototype.currentSelection = function() {
                            return (
                                this._selections[this._selections.length - 1] ||
                                null
                            );
                        }),
                        (e.prototype.selections = function() {
                            return (0, s.iter)(this._selections);
                        }),
                        (e.prototype.select = function(t) {
                            var e = this.dataModel.rowCount('body'),
                                i = this.dataModel.columnCount('body');
                            if (!(e <= 0 || i <= 0)) {
                                var o = t.r1,
                                    r = t.c1,
                                    n = t.r2,
                                    s = t.c2,
                                    a = t.cursorRow,
                                    l = t.cursorColumn,
                                    h = t.clear;
                                'all' === h
                                    ? (this._selections.length = 0)
                                    : 'current' === h && this._selections.pop(),
                                    (o = Math.max(0, Math.min(o, e - 1))),
                                    (n = Math.max(0, Math.min(n, e - 1))),
                                    (r = Math.max(0, Math.min(r, i - 1))),
                                    (s = Math.max(0, Math.min(s, i - 1)));
                                var c = !1;
                                'row' === this.selectionMode
                                    ? ((r = 0),
                                      (s = i - 1),
                                      (c =
                                          0 !==
                                          this._selections.filter(function(t) {
                                              return t.r1 === o;
                                          }).length),
                                      (this._selections = c
                                          ? this._selections.filter(function(
                                                t
                                            ) {
                                                return t.r1 !== o;
                                            })
                                          : this._selections))
                                    : 'column' === this.selectionMode &&
                                      ((o = 0),
                                      (n = e - 1),
                                      (c =
                                          0 !==
                                          this._selections.filter(function(t) {
                                              return t.c1 === r;
                                          }).length),
                                      (this._selections = c
                                          ? this._selections.filter(function(
                                                t
                                            ) {
                                                return t.c1 !== r;
                                            })
                                          : this._selections));
                                var u = a,
                                    d = l;
                                (u < 0 ||
                                    (u < o && u < n) ||
                                    (u > o && u > n)) &&
                                    (u = o),
                                    (d < 0 ||
                                        (d < r && d < s) ||
                                        (d > r && d > s)) &&
                                        (d = r),
                                    (this._cursorRow = u),
                                    (this._cursorColumn = d),
                                    (this._cursorRectIndex = this._selections.length),
                                    c ||
                                        this._selections.push({
                                            r1: o,
                                            c1: r,
                                            r2: n,
                                            c2: s,
                                        }),
                                    this.emitChanged();
                            }
                        }),
                        (e.prototype.clear = function() {
                            0 !== this._selections.length &&
                                ((this._cursorRow = -1),
                                (this._cursorColumn = -1),
                                (this._cursorRectIndex = -1),
                                (this._selections.length = 0),
                                this.emitChanged());
                        }),
                        (e.prototype.onDataModelChanged = function(t, e) {
                            if (
                                0 !== this._selections.length &&
                                'cells-changed' !== e.type &&
                                'rows-moved' !== e.type &&
                                'columns-moved' !== e.type
                            ) {
                                var i = t.rowCount('body') - 1,
                                    o = t.columnCount('body') - 1;
                                if (i < 0 || o < 0)
                                    return (
                                        (this._selections.length = 0),
                                        void this.emitChanged()
                                    );
                                for (
                                    var r = this.selectionMode,
                                        n = 0,
                                        s = 0,
                                        a = this._selections.length;
                                    s < a;
                                    ++s
                                ) {
                                    var l = this._selections[s],
                                        h = l.r1,
                                        c = l.c1,
                                        u = l.r2,
                                        d = l.c2;
                                    (i < h && i < u) ||
                                        (o < c && o < d) ||
                                        ('row' === r
                                            ? ((h = Math.max(
                                                  0,
                                                  Math.min(h, i)
                                              )),
                                              (u = Math.max(0, Math.min(u, i))),
                                              (c = 0),
                                              (d = o))
                                            : 'column' === r
                                            ? ((h = 0),
                                              (u = i),
                                              (c = Math.max(0, Math.min(c, o))),
                                              (d = Math.max(0, Math.min(d, o))))
                                            : ((h = Math.max(
                                                  0,
                                                  Math.min(h, i)
                                              )),
                                              (u = Math.max(0, Math.min(u, i))),
                                              (c = Math.max(0, Math.min(c, o))),
                                              (d = Math.max(
                                                  0,
                                                  Math.min(d, o)
                                              ))),
                                        (this._selections[n++] = {
                                            r1: h,
                                            c1: c,
                                            r2: u,
                                            c2: d,
                                        }));
                                }
                                (this._selections.length = n),
                                    this.emitChanged();
                            }
                        }),
                        e
                    );
                })(x),
                O = (function(t) {
                    function e(e) {
                        var i = t.call(this, { node: S.createNode() }) || this;
                        return (
                            (i._message = ''),
                            i.addClass('lm-DataGrid-notification'),
                            i.setFlag(l.Widget.Flag.DisallowLayout),
                            (i._target = e.target),
                            (i._message = e.message || ''),
                            (i._placement = e.placement || 'bottom'),
                            l.Widget.attach(i, document.body),
                            e.timeout &&
                                e.timeout > 0 &&
                                setTimeout(function() {
                                    i.close();
                                }, e.timeout),
                            i
                        );
                    }
                    return (
                        p(e, t),
                        (e.prototype.handleEvent = function(t) {
                            switch (t.type) {
                                case 'mousedown':
                                    this._evtMouseDown(t);
                                    break;
                                case 'contextmenu':
                                    t.preventDefault(), t.stopPropagation();
                            }
                        }),
                        Object.defineProperty(e.prototype, 'placement', {
                            get: function() {
                                return this._placement;
                            },
                            set: function(t) {
                                this._placement !== t &&
                                    ((this._placement = t), this.update());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'message', {
                            get: function() {
                                return this._message;
                            },
                            set: function(t) {
                                this._message !== t &&
                                    ((this._message = t), this.update());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'messageNode', {
                            get: function() {
                                return this.node.getElementsByClassName(
                                    'lm-DataGrid-notificationMessage'
                                )[0];
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.onBeforeAttach = function(t) {
                            this.node.addEventListener('mousedown', this),
                                this.update();
                        }),
                        (e.prototype.onAfterDetach = function(t) {
                            this.node.removeEventListener('mousedown', this);
                        }),
                        (e.prototype.onUpdateRequest = function(t) {
                            var e = this._target.getBoundingClientRect(),
                                i = this.node.style;
                            switch (this._placement) {
                                case 'bottom':
                                    (i.left = e.left + 'px'),
                                        (i.top = e.bottom + 'px');
                                    break;
                                case 'top':
                                    (i.left = e.left + 'px'),
                                        (i.height = e.top + 'px'),
                                        (i.top = '0'),
                                        (i.alignItems = 'flex-end'),
                                        (i.justifyContent = 'flex-end');
                                    break;
                                case 'left':
                                    (i.left = '0'),
                                        (i.width = e.left + 'px'),
                                        (i.top = e.top + 'px'),
                                        (i.alignItems = 'flex-end'),
                                        (i.justifyContent = 'flex-end');
                                    break;
                                case 'right':
                                    (i.left = e.right + 'px'),
                                        (i.top = e.top + 'px');
                            }
                            this.messageNode.innerHTML = this._message;
                        }),
                        (e.prototype._evtMouseDown = function(t) {
                            0 === t.button &&
                                (t.preventDefault(),
                                t.stopPropagation(),
                                this.close());
                        }),
                        e
                    );
                })(l.Widget);
            !(function(t) {
                t.createNode = function() {
                    var t = document.createElement('div'),
                        e = document.createElement('div');
                    e.className = 'lm-DataGrid-notificationContainer';
                    var i = document.createElement('span');
                    return (
                        (i.className = 'lm-DataGrid-notificationMessage'),
                        e.appendChild(i),
                        t.appendChild(e),
                        t
                    );
                };
            })(S || (S = {}));
            var H = 'Invalid input!',
                z = (function() {
                    function t() {}
                    return (
                        (t.prototype.validate = function(t, e) {
                            return { valid: !0 };
                        }),
                        t
                    );
                })(),
                R = (function() {
                    function t() {
                        (this.minLength = Number.NaN),
                            (this.maxLength = Number.NaN),
                            (this.pattern = null);
                    }
                    return (
                        (t.prototype.validate = function(t, e) {
                            return null === e
                                ? { valid: !0 }
                                : 'string' != typeof e
                                ? {
                                      valid: !1,
                                      message: 'Input must be valid text',
                                  }
                                : !isNaN(this.minLength) &&
                                  e.length < this.minLength
                                ? {
                                      valid: !1,
                                      message:
                                          'Text length must be greater than ' +
                                          this.minLength,
                                  }
                                : !isNaN(this.maxLength) &&
                                  e.length > this.maxLength
                                ? {
                                      valid: !1,
                                      message:
                                          'Text length must be less than ' +
                                          this.maxLength,
                                  }
                                : this.pattern && !this.pattern.test(e)
                                ? {
                                      valid: !1,
                                      message:
                                          "Text doesn't match the required pattern",
                                  }
                                : { valid: !0 };
                        }),
                        t
                    );
                })(),
                E = (function() {
                    function t() {
                        (this.min = Number.NaN), (this.max = Number.NaN);
                    }
                    return (
                        (t.prototype.validate = function(t, e) {
                            return null === e
                                ? { valid: !0 }
                                : isNaN(e) || e % 1 != 0
                                ? {
                                      valid: !1,
                                      message: 'Input must be valid integer',
                                  }
                                : !isNaN(this.min) && e < this.min
                                ? {
                                      valid: !1,
                                      message:
                                          'Input must be greater than ' +
                                          this.min,
                                  }
                                : !isNaN(this.max) && e > this.max
                                ? {
                                      valid: !1,
                                      message:
                                          'Input must be less than ' + this.max,
                                  }
                                : { valid: !0 };
                        }),
                        t
                    );
                })(),
                k = (function() {
                    function t() {
                        (this.min = Number.NaN), (this.max = Number.NaN);
                    }
                    return (
                        (t.prototype.validate = function(t, e) {
                            return null === e
                                ? { valid: !0 }
                                : isNaN(e)
                                ? {
                                      valid: !1,
                                      message: 'Input must be valid number',
                                  }
                                : !isNaN(this.min) && e < this.min
                                ? {
                                      valid: !1,
                                      message:
                                          'Input must be greater than ' +
                                          this.min,
                                  }
                                : !isNaN(this.max) && e > this.max
                                ? {
                                      valid: !1,
                                      message:
                                          'Input must be less than ' + this.max,
                                  }
                                : { valid: !0 };
                        }),
                        t
                    );
                })(),
                L = (function() {
                    function t() {
                        var t = this;
                        (this.inputChanged = new a.Signal(this)),
                            (this.validityNotification = null),
                            (this._disposed = !1),
                            (this._validInput = !0),
                            (this._gridWheelEventHandler = null),
                            this.inputChanged.connect(function() {
                                t.validate();
                            });
                    }
                    return (
                        Object.defineProperty(t.prototype, 'isDisposed', {
                            get: function() {
                                return this._disposed;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.dispose = function() {
                            this._disposed ||
                                (this._gridWheelEventHandler &&
                                    (this.cell.grid.node.removeEventListener(
                                        'wheel',
                                        this._gridWheelEventHandler
                                    ),
                                    (this._gridWheelEventHandler = null)),
                                this._closeValidityNotification(),
                                (this._disposed = !0),
                                this.cell.grid.node.removeChild(
                                    this.viewportOccluder
                                ));
                        }),
                        (t.prototype.edit = function(t, e) {
                            var i = this;
                            (this.cell = t),
                                (this.onCommit = e && e.onCommit),
                                (this.onCancel = e && e.onCancel),
                                (this.validator =
                                    e && e.validator
                                        ? e.validator
                                        : this.createValidatorBasedOnType()),
                                (this._gridWheelEventHandler = function() {
                                    i._closeValidityNotification(),
                                        i.updatePosition();
                                }),
                                t.grid.node.addEventListener(
                                    'wheel',
                                    this._gridWheelEventHandler
                                ),
                                this._addContainer(),
                                this.updatePosition(),
                                this.startEditing();
                        }),
                        (t.prototype.cancel = function() {
                            this._disposed ||
                                (this.dispose(),
                                this.onCancel && this.onCancel());
                        }),
                        Object.defineProperty(t.prototype, 'validInput', {
                            get: function() {
                                return this._validInput;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.validate = function() {
                            var t;
                            try {
                                t = this.getInput();
                            } catch (t) {
                                return (
                                    console.log('Input error: ' + t.message),
                                    void this.setValidity(!1, t.message || H)
                                );
                            }
                            if (this.validator) {
                                var e = this.validator.validate(this.cell, t);
                                e.valid
                                    ? this.setValidity(!0)
                                    : this.setValidity(!1, e.message || H);
                            } else this.setValidity(!0);
                        }),
                        (t.prototype.setValidity = function(t, e) {
                            void 0 === e && (e = ''),
                                (this._validInput = t),
                                this._closeValidityNotification(),
                                t
                                    ? this.editorContainer.classList.remove(
                                          'lm-mod-invalid'
                                      )
                                    : (this.editorContainer.classList.add(
                                          'lm-mod-invalid'
                                      ),
                                      '' !== e &&
                                          ((this.validityNotification = new O({
                                              target: this.editorContainer,
                                              message: e,
                                              placement: 'bottom',
                                              timeout: 5e3,
                                          })),
                                          this.validityNotification.show()));
                        }),
                        (t.prototype.createValidatorBasedOnType = function() {
                            var t = this.cell,
                                e = t.grid.dataModel.metadata(
                                    'body',
                                    t.row,
                                    t.column
                                );
                            switch (e && e.type) {
                                case 'string':
                                    var i = new R();
                                    if ('string' == typeof e.format)
                                        switch (e.format) {
                                            case 'email':
                                                i.pattern = new RegExp(
                                                    '^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$'
                                                );
                                                break;
                                            case 'uuid':
                                                i.pattern = new RegExp(
                                                    '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}'
                                                );
                                        }
                                    return (
                                        e.constraint &&
                                            (void 0 !==
                                                e.constraint.minLength &&
                                                (i.minLength =
                                                    e.constraint.minLength),
                                            void 0 !== e.constraint.maxLength &&
                                                (i.maxLength =
                                                    e.constraint.maxLength),
                                            'string' ==
                                                typeof e.constraint.pattern &&
                                                (i.pattern = new RegExp(
                                                    e.constraint.pattern
                                                ))),
                                        i
                                    );
                                case 'number':
                                    return (
                                        (i = new k()),
                                        e.constraint &&
                                            (void 0 !== e.constraint.minimum &&
                                                (i.min = e.constraint.minimum),
                                            void 0 !== e.constraint.maximum &&
                                                (i.max = e.constraint.maximum)),
                                        i
                                    );
                                case 'integer':
                                    return (
                                        (i = new E()),
                                        e.constraint &&
                                            (void 0 !== e.constraint.minimum &&
                                                (i.min = e.constraint.minimum),
                                            void 0 !== e.constraint.maximum &&
                                                (i.max = e.constraint.maximum)),
                                        i
                                    );
                            }
                        }),
                        (t.prototype.getCellInfo = function(t) {
                            var e,
                                i,
                                o,
                                r,
                                n,
                                s = t.grid,
                                a = t.row,
                                l = t.column,
                                h = y.getGroup(s.dataModel, 'body', a, l);
                            if (h) {
                                (i =
                                    s.headerWidth -
                                    s.scrollX +
                                    s.columnOffset('body', h.c1)),
                                    (o =
                                        s.headerHeight -
                                        s.scrollY +
                                        s.rowOffset('body', h.r1)),
                                    (r = 0),
                                    (n = 0);
                                for (var c = h.r1; c <= h.r2; c++)
                                    n += s.rowSize('body', c);
                                for (var u = h.c1; u <= h.c2; u++)
                                    r += s.columnSize('body', u);
                                e = s.dataModel.data('body', h.r1, h.c1);
                            } else
                                (i =
                                    s.headerWidth -
                                    s.scrollX +
                                    s.columnOffset('body', l)),
                                    (o =
                                        s.headerHeight -
                                        s.scrollY +
                                        s.rowOffset('body', a)),
                                    (r = s.columnSize('body', l)),
                                    (n = s.rowSize('body', a)),
                                    (e = s.dataModel.data('body', a, l));
                            return {
                                grid: s,
                                row: a,
                                column: l,
                                data: e,
                                x: i,
                                y: o,
                                width: r,
                                height: n,
                            };
                        }),
                        (t.prototype.updatePosition = function() {
                            var t = this.cell.grid,
                                e = this.getCellInfo(this.cell),
                                i = t.headerHeight,
                                o = t.headerWidth;
                            (this.viewportOccluder.style.top = i + 'px'),
                                (this.viewportOccluder.style.left = o + 'px'),
                                (this.viewportOccluder.style.width =
                                    t.viewportWidth - o + 'px'),
                                (this.viewportOccluder.style.height =
                                    t.viewportHeight - i + 'px'),
                                (this.viewportOccluder.style.position =
                                    'absolute'),
                                (this.editorContainer.style.left =
                                    e.x - 1 - o + 'px'),
                                (this.editorContainer.style.top =
                                    e.y - 1 - i + 'px'),
                                (this.editorContainer.style.width =
                                    e.width + 1 + 'px'),
                                (this.editorContainer.style.height =
                                    e.height + 1 + 'px'),
                                (this.editorContainer.style.visibility =
                                    'visible'),
                                (this.editorContainer.style.position =
                                    'absolute');
                        }),
                        (t.prototype.commit = function(t) {
                            if (
                                (void 0 === t && (t = 'none'),
                                this.validate(),
                                !this._validInput)
                            )
                                return !1;
                            var e;
                            try {
                                e = this.getInput();
                            } catch (t) {
                                return (
                                    console.log('Input error: ' + t.message), !1
                                );
                            }
                            return (
                                this.dispose(),
                                this.onCommit &&
                                    this.onCommit({
                                        cell: this.cell,
                                        value: e,
                                        cursorMovement: t,
                                    }),
                                !0
                            );
                        }),
                        (t.prototype._addContainer = function() {
                            var t = this;
                            (this.viewportOccluder = document.createElement(
                                'div'
                            )),
                                (this.viewportOccluder.className =
                                    'lm-DataGrid-cellEditorOccluder'),
                                this.cell.grid.node.appendChild(
                                    this.viewportOccluder
                                ),
                                (this.editorContainer = document.createElement(
                                    'div'
                                )),
                                (this.editorContainer.className =
                                    'lm-DataGrid-cellEditorContainer'),
                                this.viewportOccluder.appendChild(
                                    this.editorContainer
                                ),
                                this.editorContainer.addEventListener(
                                    'mouseleave',
                                    function(e) {
                                        t.viewportOccluder.style.pointerEvents = t._validInput
                                            ? 'none'
                                            : 'auto';
                                    }
                                ),
                                this.editorContainer.addEventListener(
                                    'mouseenter',
                                    function(e) {
                                        t.viewportOccluder.style.pointerEvents =
                                            'none';
                                    }
                                );
                        }),
                        (t.prototype._closeValidityNotification = function() {
                            this.validityNotification &&
                                (this.validityNotification.close(),
                                (this.validityNotification = null));
                        }),
                        t
                    );
                })(),
                P = (function(t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                        p(e, t),
                        (e.prototype.handleEvent = function(t) {
                            switch (t.type) {
                                case 'keydown':
                                    this._onKeyDown(t);
                                    break;
                                case 'blur':
                                    this._onBlur(t);
                                    break;
                                case 'input':
                                    this._onInput(t);
                            }
                        }),
                        (e.prototype.dispose = function() {
                            this.isDisposed ||
                                (this._unbindEvents(),
                                t.prototype.dispose.call(this));
                        }),
                        (e.prototype.startEditing = function() {
                            this.createWidget();
                            var t = this.cell,
                                e = this.getCellInfo(t);
                            (this.input.value = this.deserialize(e.data)),
                                this.editorContainer.appendChild(this.input),
                                this.input.focus(),
                                this.input.select(),
                                this.bindEvents();
                        }),
                        (e.prototype.deserialize = function(t) {
                            return null == t ? '' : t.toString();
                        }),
                        (e.prototype.createWidget = function() {
                            var t = document.createElement('input');
                            t.classList.add('lm-DataGrid-cellEditorWidget'),
                                t.classList.add('lm-DataGrid-cellEditorInput'),
                                (t.spellcheck = !1),
                                (t.type = this.inputType),
                                (this.input = t);
                        }),
                        (e.prototype.bindEvents = function() {
                            this.input.addEventListener('keydown', this),
                                this.input.addEventListener('blur', this),
                                this.input.addEventListener('input', this);
                        }),
                        (e.prototype._unbindEvents = function() {
                            this.input.removeEventListener('keydown', this),
                                this.input.removeEventListener('blur', this),
                                this.input.removeEventListener('input', this);
                        }),
                        (e.prototype._onKeyDown = function(t) {
                            switch (
                                (0, r.getKeyboardLayout)().keyForKeydownEvent(t)
                            ) {
                                case 'Enter':
                                    this.commit(t.shiftKey ? 'up' : 'down');
                                    break;
                                case 'Tab':
                                    this.commit(t.shiftKey ? 'left' : 'right'),
                                        t.stopPropagation(),
                                        t.preventDefault();
                                    break;
                                case 'Escape':
                                    this.cancel();
                            }
                        }),
                        (e.prototype._onBlur = function(t) {
                            this.isDisposed ||
                                this.commit() ||
                                (t.preventDefault(),
                                t.stopPropagation(),
                                this.input.focus());
                        }),
                        (e.prototype._onInput = function(t) {
                            this.inputChanged.emit(void 0);
                        }),
                        e
                    );
                })(L),
                T = (function(t) {
                    function e() {
                        var e =
                            (null !== t && t.apply(this, arguments)) || this;
                        return (e.inputType = 'text'), e;
                    }
                    return (
                        p(e, t),
                        (e.prototype.getInput = function() {
                            return this.input.value;
                        }),
                        e
                    );
                })(P),
                D = (function(t) {
                    function e() {
                        var e =
                            (null !== t && t.apply(this, arguments)) || this;
                        return (e.inputType = 'number'), e;
                    }
                    return (
                        p(e, t),
                        (e.prototype.startEditing = function() {
                            t.prototype.startEditing.call(this),
                                (this.input.step = 'any');
                            var e = this.cell,
                                i = e.grid.dataModel.metadata(
                                    'body',
                                    e.row,
                                    e.column
                                ).constraint;
                            i &&
                                (i.minimum && (this.input.min = i.minimum),
                                i.maximum && (this.input.max = i.maximum));
                        }),
                        (e.prototype.getInput = function() {
                            var t = this.input.value;
                            if ('' === t.trim()) return null;
                            var e = parseFloat(t);
                            if (isNaN(e)) throw new Error('Invalid input');
                            return e;
                        }),
                        e
                    );
                })(P),
                B = (function(t) {
                    function e() {
                        var e =
                            (null !== t && t.apply(this, arguments)) || this;
                        return (e.inputType = 'number'), e;
                    }
                    return (
                        p(e, t),
                        (e.prototype.startEditing = function() {
                            t.prototype.startEditing.call(this),
                                (this.input.step = '1');
                            var e = this.cell,
                                i = e.grid.dataModel.metadata(
                                    'body',
                                    e.row,
                                    e.column
                                ).constraint;
                            i &&
                                (i.minimum && (this.input.min = i.minimum),
                                i.maximum && (this.input.max = i.maximum));
                        }),
                        (e.prototype.getInput = function() {
                            var t = this.input.value;
                            if ('' === t.trim()) return null;
                            var e = parseInt(t);
                            if (isNaN(e)) throw new Error('Invalid input');
                            return e;
                        }),
                        e
                    );
                })(P),
                W = (function(t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                        p(e, t),
                        (e.prototype.handleEvent = function(t) {
                            switch (t.type) {
                                case 'keydown':
                                    this._onKeyDown(t);
                                    break;
                                case 'blur':
                                    this._onBlur(t);
                            }
                        }),
                        (e.prototype.dispose = function() {
                            this.isDisposed ||
                                (this._unbindEvents(),
                                t.prototype.dispose.call(this));
                        }),
                        (e.prototype.startEditing = function() {
                            this._createWidget();
                            var t = this.cell,
                                e = this.getCellInfo(t);
                            (this._input.value = this._deserialize(e.data)),
                                this.editorContainer.appendChild(this._input),
                                this._input.focus(),
                                this._bindEvents();
                        }),
                        (e.prototype.getInput = function() {
                            return this._input.value;
                        }),
                        (e.prototype._deserialize = function(t) {
                            return null == t ? '' : t.toString();
                        }),
                        (e.prototype._createWidget = function() {
                            var t = document.createElement('input');
                            (t.type = 'date'),
                                (t.pattern = 'd{4}-d{2}-d{2}'),
                                t.classList.add('lm-DataGrid-cellEditorWidget'),
                                t.classList.add('lm-DataGrid-cellEditorInput'),
                                (this._input = t);
                        }),
                        (e.prototype._bindEvents = function() {
                            this._input.addEventListener('keydown', this),
                                this._input.addEventListener('blur', this);
                        }),
                        (e.prototype._unbindEvents = function() {
                            this._input.removeEventListener('keydown', this),
                                this._input.removeEventListener('blur', this);
                        }),
                        (e.prototype._onKeyDown = function(t) {
                            switch (
                                (0, r.getKeyboardLayout)().keyForKeydownEvent(t)
                            ) {
                                case 'Enter':
                                    this.commit(t.shiftKey ? 'up' : 'down');
                                    break;
                                case 'Tab':
                                    this.commit(t.shiftKey ? 'left' : 'right'),
                                        t.stopPropagation(),
                                        t.preventDefault();
                                    break;
                                case 'Escape':
                                    this.cancel();
                            }
                        }),
                        (e.prototype._onBlur = function(t) {
                            this.isDisposed ||
                                this.commit() ||
                                (t.preventDefault(),
                                t.stopPropagation(),
                                this._input.focus());
                        }),
                        e
                    );
                })(L),
                G = (function(t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                        p(e, t),
                        (e.prototype.handleEvent = function(t) {
                            switch (t.type) {
                                case 'keydown':
                                    this._onKeyDown(t);
                                    break;
                                case 'mousedown':
                                    this._input.focus(),
                                        t.stopPropagation(),
                                        t.preventDefault();
                                    break;
                                case 'blur':
                                    this._onBlur(t);
                            }
                        }),
                        (e.prototype.dispose = function() {
                            this.isDisposed ||
                                (this._unbindEvents(),
                                t.prototype.dispose.call(this));
                        }),
                        (e.prototype.startEditing = function() {
                            this._createWidget();
                            var t = this.cell,
                                e = this.getCellInfo(t);
                            (this._input.checked = this._deserialize(e.data)),
                                this.editorContainer.appendChild(this._input),
                                this._input.focus(),
                                this._bindEvents();
                        }),
                        (e.prototype.getInput = function() {
                            return this._input.checked;
                        }),
                        (e.prototype._deserialize = function(t) {
                            return null != t && 1 == t;
                        }),
                        (e.prototype._createWidget = function() {
                            var t = document.createElement('input');
                            t.classList.add('lm-DataGrid-cellEditorWidget'),
                                t.classList.add(
                                    'lm-DataGrid-cellEditorCheckbox'
                                ),
                                (t.type = 'checkbox'),
                                (t.spellcheck = !1),
                                (this._input = t);
                        }),
                        (e.prototype._bindEvents = function() {
                            this._input.addEventListener('keydown', this),
                                this._input.addEventListener('mousedown', this),
                                this._input.addEventListener('blur', this);
                        }),
                        (e.prototype._unbindEvents = function() {
                            this._input.removeEventListener('keydown', this),
                                this._input.removeEventListener(
                                    'mousedown',
                                    this
                                ),
                                this._input.removeEventListener('blur', this);
                        }),
                        (e.prototype._onKeyDown = function(t) {
                            switch (
                                (0, r.getKeyboardLayout)().keyForKeydownEvent(t)
                            ) {
                                case 'Enter':
                                    this.commit(t.shiftKey ? 'up' : 'down');
                                    break;
                                case 'Tab':
                                    this.commit(t.shiftKey ? 'left' : 'right'),
                                        t.stopPropagation(),
                                        t.preventDefault();
                                    break;
                                case 'Escape':
                                    this.cancel();
                            }
                        }),
                        (e.prototype._onBlur = function(t) {
                            this.isDisposed ||
                                this.commit() ||
                                (t.preventDefault(),
                                t.stopPropagation(),
                                this._input.focus());
                        }),
                        e
                    );
                })(L),
                A = (function(t) {
                    function e() {
                        var e =
                            (null !== t && t.apply(this, arguments)) || this;
                        return (e._isMultiSelect = !1), e;
                    }
                    return (
                        p(e, t),
                        (e.prototype.dispose = function() {
                            this.isDisposed ||
                                (t.prototype.dispose.call(this),
                                this._isMultiSelect &&
                                    document.body.removeChild(this._select));
                        }),
                        (e.prototype.startEditing = function() {
                            var t = this.cell,
                                e = this.getCellInfo(t),
                                i = t.grid.dataModel.metadata(
                                    'body',
                                    t.row,
                                    t.column
                                );
                            if (
                                ((this._isMultiSelect = 'array' === i.type),
                                this._createWidget(),
                                this._isMultiSelect)
                            ) {
                                this._select.multiple = !0;
                                for (
                                    var o = this._deserialize(e.data), r = 0;
                                    r < this._select.options.length;
                                    ++r
                                ) {
                                    var n = this._select.options.item(r);
                                    n.selected = -1 !== o.indexOf(n.value);
                                }
                                document.body.appendChild(this._select);
                            } else
                                (this._select.value = this._deserialize(
                                    e.data
                                )),
                                    this.editorContainer.appendChild(
                                        this._select
                                    );
                            this._select.focus(),
                                this._bindEvents(),
                                this.updatePosition();
                        }),
                        (e.prototype.getInput = function() {
                            if (this._isMultiSelect) {
                                for (
                                    var t = [], e = 0;
                                    e < this._select.selectedOptions.length;
                                    ++e
                                )
                                    t.push(
                                        this._select.selectedOptions.item(e)
                                            .value
                                    );
                                return t;
                            }
                            return this._select.value;
                        }),
                        (e.prototype.updatePosition = function() {
                            if (
                                (t.prototype.updatePosition.call(this),
                                this._isMultiSelect)
                            ) {
                                var e = this.getCellInfo(this.cell);
                                this._select.style.position = 'absolute';
                                var i = this.editorContainer.getBoundingClientRect();
                                (this._select.style.left = i.left + 'px'),
                                    (this._select.style.top =
                                        i.top + e.height + 'px'),
                                    (this._select.style.width = i.width + 'px'),
                                    (this._select.style.maxHeight = '60px'),
                                    (this.editorContainer.style.visibility =
                                        'hidden');
                            }
                        }),
                        (e.prototype._deserialize = function(t) {
                            if (null == t) return '';
                            if (this._isMultiSelect) {
                                var e = [];
                                if (Array.isArray(t))
                                    for (var i = 0, o = t; i < o.length; i++) {
                                        var r = o[i];
                                        e.push(r.toString());
                                    }
                                return e;
                            }
                            return t.toString();
                        }),
                        (e.prototype._createWidget = function() {
                            var t = this.cell,
                                e = t.grid.dataModel.metadata(
                                    'body',
                                    t.row,
                                    t.column
                                ).constraint.enum,
                                i = document.createElement('select');
                            i.classList.add('lm-DataGrid-cellEditorWidget');
                            for (var o = 0, r = e; o < r.length; o++) {
                                var n = r[o],
                                    s = document.createElement('option');
                                (s.value = n), (s.text = n), i.appendChild(s);
                            }
                            this._select = i;
                        }),
                        (e.prototype._bindEvents = function() {
                            this._select.addEventListener(
                                'keydown',
                                this._onKeyDown.bind(this)
                            ),
                                this._select.addEventListener(
                                    'blur',
                                    this._onBlur.bind(this)
                                );
                        }),
                        (e.prototype._onKeyDown = function(t) {
                            switch (
                                (0, r.getKeyboardLayout)().keyForKeydownEvent(t)
                            ) {
                                case 'Enter':
                                    this.commit(t.shiftKey ? 'up' : 'down');
                                    break;
                                case 'Tab':
                                    this.commit(t.shiftKey ? 'left' : 'right'),
                                        t.stopPropagation(),
                                        t.preventDefault();
                                    break;
                                case 'Escape':
                                    this.cancel();
                            }
                        }),
                        (e.prototype._onBlur = function(t) {
                            this.isDisposed ||
                                this.commit() ||
                                (t.preventDefault(),
                                t.stopPropagation(),
                                this._select.focus());
                        }),
                        e
                    );
                })(L),
                j = (function(t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                        p(e, t),
                        (e.prototype.handleEvent = function(t) {
                            switch (t.type) {
                                case 'keydown':
                                    this._onKeyDown(t);
                                    break;
                                case 'blur':
                                    this._onBlur(t);
                            }
                        }),
                        (e.prototype.dispose = function() {
                            this.isDisposed ||
                                (this._unbindEvents(),
                                t.prototype.dispose.call(this));
                        }),
                        (e.prototype.startEditing = function() {
                            this._createWidget();
                            var t = this.cell,
                                e = this.getCellInfo(t);
                            (this._input.value = this._deserialize(e.data)),
                                this.editorContainer.appendChild(this._input),
                                this._input.focus(),
                                this._input.select(),
                                this._bindEvents();
                        }),
                        (e.prototype.getInput = function() {
                            return this._input.value;
                        }),
                        (e.prototype._deserialize = function(t) {
                            return null == t ? '' : t.toString();
                        }),
                        (e.prototype._createWidget = function() {
                            var t = this.cell,
                                e = t.grid.dataModel,
                                i = e.rowCount('body'),
                                o = 'cell-editor-list',
                                r = document.createElement('datalist');
                            r.id = o;
                            var n = document.createElement('input');
                            n.classList.add('lm-DataGrid-cellEditorWidget'),
                                n.classList.add('lm-DataGrid-cellEditorInput');
                            for (var s = new Set(), a = 0; a < i; ++a) {
                                var l = e.data('body', a, t.column);
                                l && s.add(l);
                            }
                            s.forEach(function(t) {
                                var e = document.createElement('option');
                                (e.value = t), (e.text = t), r.appendChild(e);
                            }),
                                this.editorContainer.appendChild(r),
                                n.setAttribute('list', o),
                                (this._input = n);
                        }),
                        (e.prototype._bindEvents = function() {
                            this._input.addEventListener('keydown', this),
                                this._input.addEventListener('blur', this);
                        }),
                        (e.prototype._unbindEvents = function() {
                            this._input.removeEventListener('keydown', this),
                                this._input.removeEventListener('blur', this);
                        }),
                        (e.prototype._onKeyDown = function(t) {
                            switch (
                                (0, r.getKeyboardLayout)().keyForKeydownEvent(t)
                            ) {
                                case 'Enter':
                                    this.commit(t.shiftKey ? 'up' : 'down');
                                    break;
                                case 'Tab':
                                    this.commit(t.shiftKey ? 'left' : 'right'),
                                        t.stopPropagation(),
                                        t.preventDefault();
                                    break;
                                case 'Escape':
                                    this.cancel();
                            }
                        }),
                        (e.prototype._onBlur = function(t) {
                            this.isDisposed ||
                                this.commit() ||
                                (t.preventDefault(),
                                t.stopPropagation(),
                                this._input.focus());
                        }),
                        e
                    );
                })(L);
            function I(t, e) {
                return 'function' == typeof t ? t(e) : t;
            }
            var N = (function() {
                    function t() {
                        (this._editor = null),
                            (this._cell = null),
                            (this._typeBasedOverrides = new Map()),
                            (this._metadataBasedOverrides = new Map());
                    }
                    return (
                        (t.prototype.setEditor = function(t, e) {
                            if ('string' == typeof t)
                                this._typeBasedOverrides.set(t, e);
                            else {
                                var i = this._metadataIdentifierToKey(t);
                                this._metadataBasedOverrides.set(i, [t, e]);
                            }
                        }),
                        (t.prototype.edit = function(t, e) {
                            if (!t.grid.editable)
                                return (
                                    console.error('Grid cannot be edited!'), !1
                                );
                            if (
                                (this.cancel(),
                                (this._cell = t),
                                ((e = e || {}).onCommit =
                                    e.onCommit || this._onCommit.bind(this)),
                                (e.onCancel =
                                    e.onCancel || this._onCancel.bind(this)),
                                e.editor)
                            )
                                return (
                                    (this._editor = e.editor),
                                    e.editor.edit(t, e),
                                    !0
                                );
                            var i = this._getEditor(t);
                            return (
                                !!i && ((this._editor = i), i.edit(t, e), !0)
                            );
                        }),
                        (t.prototype.cancel = function() {
                            this._editor &&
                                (this._editor.cancel(), (this._editor = null)),
                                (this._cell = null);
                        }),
                        (t.prototype._onCommit = function(t) {
                            var e = this._cell;
                            if (e) {
                                var i = e.grid,
                                    o = i.dataModel,
                                    r = e.row,
                                    n = e.column,
                                    s = y.getGroup(i.dataModel, 'body', r, n);
                                s && ((r = s.r1), (n = s.c1)),
                                    o.setData('body', r, n, t.value),
                                    i.viewport.node.focus(),
                                    'none' !== t.cursorMovement &&
                                        (i.moveCursor(t.cursorMovement),
                                        i.scrollToCursor());
                            }
                        }),
                        (t.prototype._onCancel = function() {
                            this._cell && this._cell.grid.viewport.node.focus();
                        }),
                        (t.prototype._getDataTypeKey = function(t) {
                            var e = t.grid.dataModel
                                ? t.grid.dataModel.metadata(
                                      'body',
                                      t.row,
                                      t.column
                                  )
                                : null;
                            if (!e) return 'default';
                            var i = '';
                            return (
                                e && (i = e.type),
                                e.constraint &&
                                    e.constraint.enum &&
                                    ('dynamic' === e.constraint.enum
                                        ? (i += ':dynamic-option')
                                        : (i += ':option')),
                                i
                            );
                        }),
                        (t.prototype._objectToKey = function(t) {
                            var e = '';
                            for (var i in t) {
                                var o = t[i];
                                e +=
                                    'object' == typeof o
                                        ? i + ':' + this._objectToKey(o)
                                        : '[' + i + ':' + o + ']';
                            }
                            return e;
                        }),
                        (t.prototype._metadataIdentifierToKey = function(t) {
                            return this._objectToKey(t);
                        }),
                        (t.prototype._metadataMatchesIdentifier = function(
                            t,
                            e
                        ) {
                            for (var i in e) {
                                if (!t.hasOwnProperty(i)) return !1;
                                var o = e[i],
                                    r = t[i];
                                if ('object' == typeof o) {
                                    if (!this._metadataMatchesIdentifier(r, o))
                                        return !1;
                                } else if (r !== o) return !1;
                            }
                            return !0;
                        }),
                        (t.prototype._getMetadataBasedEditor = function(t) {
                            var e,
                                i = this,
                                o = t.grid.dataModel.metadata(
                                    'body',
                                    t.row,
                                    t.column
                                );
                            return (
                                o &&
                                    this._metadataBasedOverrides.forEach(
                                        function(r) {
                                            if (!e) {
                                                var n = r[0],
                                                    s = r[1];
                                                i._metadataMatchesIdentifier(
                                                    o,
                                                    n
                                                ) && (e = I(s, t));
                                            }
                                        }
                                    ),
                                e
                            );
                        }),
                        (t.prototype._getEditor = function(t) {
                            var e,
                                i = this._getDataTypeKey(t);
                            if (this._typeBasedOverrides.has(i))
                                return I(
                                    (e = this._typeBasedOverrides.get(i)),
                                    t
                                );
                            if (
                                this._metadataBasedOverrides.size > 0 &&
                                (e = this._getMetadataBasedEditor(t))
                            )
                                return e;
                            switch (i) {
                                case 'string':
                                    return new T();
                                case 'number':
                                    return new D();
                                case 'integer':
                                    return new B();
                                case 'boolean':
                                    return new G();
                                case 'date':
                                    return new W();
                                case 'string:option':
                                case 'number:option':
                                case 'integer:option':
                                case 'date:option':
                                case 'array:option':
                                    return new A();
                                case 'string:dynamic-option':
                                case 'number:dynamic-option':
                                case 'integer:dynamic-option':
                                case 'date:dynamic-option':
                                    return new j();
                            }
                            if (this._typeBasedOverrides.has('default'))
                                return I(
                                    (e = this._typeBasedOverrides.get(
                                        'default'
                                    )),
                                    t
                                );
                            var o = t.grid.dataModel.data(
                                'body',
                                t.row,
                                t.column
                            );
                            return o && 'object' == typeof o ? void 0 : new T();
                        }),
                        t
                    );
                })(),
                V = (function() {
                    function t() {
                        this._changed = new a.Signal(this);
                    }
                    return (
                        Object.defineProperty(t.prototype, 'changed', {
                            get: function() {
                                return this._changed;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.groupCount = function(t) {
                            return 0;
                        }),
                        (t.prototype.metadata = function(e, i, o) {
                            return t.emptyMetadata;
                        }),
                        (t.prototype.group = function(t, e) {
                            return null;
                        }),
                        (t.prototype.emitChanged = function(t) {
                            this._changed.emit(t);
                        }),
                        t
                    );
                })(),
                X = (function(t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return p(e, t), e;
                })(V);
            !(function(t) {
                t.emptyMetadata = Object.freeze({});
            })(V || (V = {}));
            var Y,
                K = (function() {
                    function t(t) {
                        (this._disposed = !1),
                            (this._context = t),
                            (this._state = Y.State.create(t));
                    }
                    return (
                        (t.prototype.dispose = function() {
                            if (!this._disposed)
                                for (this._disposed = !0; this._state.next; )
                                    (this._state = this._state.next),
                                        this._context.restore();
                        }),
                        Object.defineProperty(t.prototype, 'isDisposed', {
                            get: function() {
                                return this._disposed;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'fillStyle', {
                            get: function() {
                                return this._context.fillStyle;
                            },
                            set: function(t) {
                                this._state.fillStyle !== t &&
                                    ((this._state.fillStyle = t),
                                    (this._context.fillStyle = t));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'strokeStyle', {
                            get: function() {
                                return this._context.strokeStyle;
                            },
                            set: function(t) {
                                this._state.strokeStyle !== t &&
                                    ((this._state.strokeStyle = t),
                                    (this._context.strokeStyle = t));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'font', {
                            get: function() {
                                return this._context.font;
                            },
                            set: function(t) {
                                this._state.font !== t &&
                                    ((this._state.font = t),
                                    (this._context.font = t));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'textAlign', {
                            get: function() {
                                return this._context.textAlign;
                            },
                            set: function(t) {
                                this._state.textAlign !== t &&
                                    ((this._state.textAlign = t),
                                    (this._context.textAlign = t));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'textBaseline', {
                            get: function() {
                                return this._context.textBaseline;
                            },
                            set: function(t) {
                                this._state.textBaseline !== t &&
                                    ((this._state.textBaseline = t),
                                    (this._context.textBaseline = t));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'lineCap', {
                            get: function() {
                                return this._context.lineCap;
                            },
                            set: function(t) {
                                this._state.lineCap !== t &&
                                    ((this._state.lineCap = t),
                                    (this._context.lineCap = t));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'lineDashOffset', {
                            get: function() {
                                return this._context.lineDashOffset;
                            },
                            set: function(t) {
                                this._state.lineDashOffset !== t &&
                                    ((this._state.lineDashOffset = t),
                                    (this._context.lineDashOffset = t));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'lineJoin', {
                            get: function() {
                                return this._context.lineJoin;
                            },
                            set: function(t) {
                                this._state.lineJoin !== t &&
                                    ((this._state.lineJoin = t),
                                    (this._context.lineJoin = t));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'lineWidth', {
                            get: function() {
                                return this._context.lineWidth;
                            },
                            set: function(t) {
                                this._state.lineWidth !== t &&
                                    ((this._state.lineWidth = t),
                                    (this._context.lineWidth = t));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'miterLimit', {
                            get: function() {
                                return this._context.miterLimit;
                            },
                            set: function(t) {
                                this._state.miterLimit !== t &&
                                    ((this._state.miterLimit = t),
                                    (this._context.miterLimit = t));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'shadowBlur', {
                            get: function() {
                                return this._context.shadowBlur;
                            },
                            set: function(t) {
                                this._state.shadowBlur !== t &&
                                    ((this._state.shadowBlur = t),
                                    (this._context.shadowBlur = t));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'shadowColor', {
                            get: function() {
                                return this._context.shadowColor;
                            },
                            set: function(t) {
                                this._state.shadowColor !== t &&
                                    ((this._state.shadowColor = t),
                                    (this._context.shadowColor = t));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'shadowOffsetX', {
                            get: function() {
                                return this._context.shadowOffsetX;
                            },
                            set: function(t) {
                                this._state.shadowOffsetX !== t &&
                                    ((this._state.shadowOffsetX = t),
                                    (this._context.shadowOffsetX = t));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'shadowOffsetY', {
                            get: function() {
                                return this._context.shadowOffsetY;
                            },
                            set: function(t) {
                                this._state.shadowOffsetY !== t &&
                                    ((this._state.shadowOffsetY = t),
                                    (this._context.shadowOffsetY = t));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(
                            t.prototype,
                            'imageSmoothingEnabled',
                            {
                                get: function() {
                                    return this._context.imageSmoothingEnabled;
                                },
                                set: function(t) {
                                    this._state.imageSmoothingEnabled !== t &&
                                        ((this._state.imageSmoothingEnabled = t),
                                        (this._context.imageSmoothingEnabled = t));
                                },
                                enumerable: !0,
                                configurable: !0,
                            }
                        ),
                        Object.defineProperty(t.prototype, 'globalAlpha', {
                            get: function() {
                                return this._context.globalAlpha;
                            },
                            set: function(t) {
                                this._state.globalAlpha !== t &&
                                    ((this._state.globalAlpha = t),
                                    (this._context.globalAlpha = t));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(
                            t.prototype,
                            'globalCompositeOperation',
                            {
                                get: function() {
                                    return this._context
                                        .globalCompositeOperation;
                                },
                                set: function(t) {
                                    this._state.globalCompositeOperation !==
                                        t &&
                                        ((this._state.globalCompositeOperation = t),
                                        (this._context.globalCompositeOperation = t));
                                },
                                enumerable: !0,
                                configurable: !0,
                            }
                        ),
                        (t.prototype.getLineDash = function() {
                            return this._context.getLineDash();
                        }),
                        (t.prototype.setLineDash = function(t) {
                            this._context.setLineDash(t);
                        }),
                        (t.prototype.rotate = function(t) {
                            this._context.rotate(t);
                        }),
                        (t.prototype.scale = function(t, e) {
                            this._context.scale(t, e);
                        }),
                        (t.prototype.transform = function(t, e, i, o, r, n) {
                            this._context.transform(t, e, i, o, r, n);
                        }),
                        (t.prototype.translate = function(t, e) {
                            this._context.translate(t, e);
                        }),
                        (t.prototype.setTransform = function(t, e, i, o, r, n) {
                            this._context.setTransform(t, e, i, o, r, n);
                        }),
                        (t.prototype.save = function() {
                            (this._state = Y.State.push(this._state)),
                                this._context.save();
                        }),
                        (t.prototype.restore = function() {
                            this._state.next &&
                                ((this._state = Y.State.pop(this._state)),
                                this._context.restore());
                        }),
                        (t.prototype.beginPath = function() {
                            return this._context.beginPath();
                        }),
                        (t.prototype.closePath = function() {
                            this._context.closePath();
                        }),
                        (t.prototype.isPointInPath = function(t, e, i) {
                            return 2 === arguments.length
                                ? this._context.isPointInPath(t, e)
                                : this._context.isPointInPath(t, e, i);
                        }),
                        (t.prototype.arc = function(t, e, i, o, r, n) {
                            5 === arguments.length
                                ? this._context.arc(t, e, i, o, r)
                                : this._context.arc(t, e, i, o, r, n);
                        }),
                        (t.prototype.arcTo = function(t, e, i, o, r) {
                            this._context.arcTo(t, e, i, o, r);
                        }),
                        (t.prototype.bezierCurveTo = function(
                            t,
                            e,
                            i,
                            o,
                            r,
                            n
                        ) {
                            this._context.bezierCurveTo(t, e, i, o, r, n);
                        }),
                        (t.prototype.ellipse = function(
                            t,
                            e,
                            i,
                            o,
                            r,
                            n,
                            s,
                            a
                        ) {
                            7 === arguments.length
                                ? this._context.ellipse(t, e, i, o, r, n, s)
                                : this._context.ellipse(t, e, i, o, r, n, s, a);
                        }),
                        (t.prototype.lineTo = function(t, e) {
                            this._context.lineTo(t, e);
                        }),
                        (t.prototype.moveTo = function(t, e) {
                            this._context.moveTo(t, e);
                        }),
                        (t.prototype.quadraticCurveTo = function(t, e, i, o) {
                            this._context.quadraticCurveTo(t, e, i, o);
                        }),
                        (t.prototype.rect = function(t, e, i, o) {
                            this._context.rect(t, e, i, o);
                        }),
                        (t.prototype.clip = function(t) {
                            0 === arguments.length
                                ? this._context.clip()
                                : this._context.clip(t);
                        }),
                        (t.prototype.fill = function(t) {
                            0 === arguments.length
                                ? this._context.fill()
                                : this._context.fill(t);
                        }),
                        (t.prototype.stroke = function() {
                            this._context.stroke();
                        }),
                        (t.prototype.clearRect = function(t, e, i, o) {
                            return this._context.clearRect(t, e, i, o);
                        }),
                        (t.prototype.fillRect = function(t, e, i, o) {
                            this._context.fillRect(t, e, i, o);
                        }),
                        (t.prototype.fillText = function(t, e, i, o) {
                            3 === arguments.length
                                ? this._context.fillText(t, e, i)
                                : this._context.fillText(t, e, i, o);
                        }),
                        (t.prototype.strokeRect = function(t, e, i, o) {
                            this._context.strokeRect(t, e, i, o);
                        }),
                        (t.prototype.strokeText = function(t, e, i, o) {
                            3 === arguments.length
                                ? this._context.strokeText(t, e, i)
                                : this._context.strokeText(t, e, i, o);
                        }),
                        (t.prototype.measureText = function(t) {
                            return this._context.measureText(t);
                        }),
                        (t.prototype.createLinearGradient = function(
                            t,
                            e,
                            i,
                            o
                        ) {
                            return this._context.createLinearGradient(
                                t,
                                e,
                                i,
                                o
                            );
                        }),
                        (t.prototype.createRadialGradient = function(
                            t,
                            e,
                            i,
                            o,
                            r,
                            n
                        ) {
                            return this._context.createRadialGradient(
                                t,
                                e,
                                i,
                                o,
                                r,
                                n
                            );
                        }),
                        (t.prototype.createPattern = function(t, e) {
                            return this._context.createPattern(t, e);
                        }),
                        (t.prototype.createImageData = function() {
                            return this._context.createImageData.apply(
                                this._context,
                                arguments
                            );
                        }),
                        (t.prototype.getImageData = function(t, e, i, o) {
                            return this._context.getImageData(t, e, i, o);
                        }),
                        (t.prototype.putImageData = function() {
                            this._context.putImageData.apply(
                                this._context,
                                arguments
                            );
                        }),
                        (t.prototype.drawImage = function() {
                            this._context.drawImage.apply(
                                this._context,
                                arguments
                            );
                        }),
                        (t.prototype.drawFocusIfNeeded = function(t) {
                            this._context.drawFocusIfNeeded(t);
                        }),
                        t
                    );
                })();
            !(function(t) {
                var e = -1,
                    i = [],
                    o = (function() {
                        function t() {}
                        return (
                            (t.create = function(o) {
                                var r = e < 0 ? new t() : i[e--];
                                return (
                                    (r.next = null),
                                    (r.fillStyle = o.fillStyle),
                                    (r.font = o.font),
                                    (r.globalAlpha = o.globalAlpha),
                                    (r.globalCompositeOperation =
                                        o.globalCompositeOperation),
                                    (r.imageSmoothingEnabled =
                                        o.imageSmoothingEnabled),
                                    (r.lineCap = o.lineCap),
                                    (r.lineDashOffset = o.lineDashOffset),
                                    (r.lineJoin = o.lineJoin),
                                    (r.lineWidth = o.lineWidth),
                                    (r.miterLimit = o.miterLimit),
                                    (r.shadowBlur = o.shadowBlur),
                                    (r.shadowColor = o.shadowColor),
                                    (r.shadowOffsetX = o.shadowOffsetX),
                                    (r.shadowOffsetY = o.shadowOffsetY),
                                    (r.strokeStyle = o.strokeStyle),
                                    (r.textAlign = o.textAlign),
                                    (r.textBaseline = o.textBaseline),
                                    r
                                );
                            }),
                            (t.push = function(o) {
                                var r = e < 0 ? new t() : i[e--];
                                return (
                                    (r.next = o),
                                    (r.fillStyle = o.fillStyle),
                                    (r.font = o.font),
                                    (r.globalAlpha = o.globalAlpha),
                                    (r.globalCompositeOperation =
                                        o.globalCompositeOperation),
                                    (r.imageSmoothingEnabled =
                                        o.imageSmoothingEnabled),
                                    (r.lineCap = o.lineCap),
                                    (r.lineDashOffset = o.lineDashOffset),
                                    (r.lineJoin = o.lineJoin),
                                    (r.lineWidth = o.lineWidth),
                                    (r.miterLimit = o.miterLimit),
                                    (r.shadowBlur = o.shadowBlur),
                                    (r.shadowColor = o.shadowColor),
                                    (r.shadowOffsetX = o.shadowOffsetX),
                                    (r.shadowOffsetY = o.shadowOffsetY),
                                    (r.strokeStyle = o.strokeStyle),
                                    (r.textAlign = o.textAlign),
                                    (r.textBaseline = o.textBaseline),
                                    r
                                );
                            }),
                            (t.pop = function(t) {
                                return (
                                    (t.fillStyle = ''),
                                    (t.strokeStyle = ''),
                                    (i[++e] = t),
                                    t.next
                                );
                            }),
                            t
                        );
                    })();
                t.State = o;
            })(Y || (Y = {}));
            var F,
                q = (function() {
                    function t(t, e) {
                        void 0 === t && (t = {}),
                            (this._changed = new a.Signal(this)),
                            (this._values = f({}, t)),
                            (this._fallback = e || new v());
                    }
                    return (
                        Object.defineProperty(t.prototype, 'changed', {
                            get: function() {
                                return this._changed;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.get = function(t) {
                            var e = this._values[t.region];
                            if ('function' == typeof e)
                                try {
                                    e = e(t);
                                } catch (t) {
                                    (e = void 0), console.error(t);
                                }
                            return e || this._fallback;
                        }),
                        (t.prototype.update = function(t, e) {
                            void 0 === t && (t = {}),
                                (this._values = f(f({}, this._values), t)),
                                (this._fallback = e || this._fallback),
                                this._changed.emit(void 0);
                        }),
                        t
                    );
                })(),
                U = (function() {
                    function t(t) {
                        (this._count = 0),
                            (this._length = 0),
                            (this._sections = []),
                            (this._minimumSize = t.minimumSize || 2),
                            (this._defaultSize = Math.max(
                                this._minimumSize,
                                Math.floor(t.defaultSize)
                            ));
                    }
                    return (
                        Object.defineProperty(t.prototype, 'length', {
                            get: function() {
                                return this._length;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'count', {
                            get: function() {
                                return this._count;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'minimumSize', {
                            get: function() {
                                return this._minimumSize;
                            },
                            set: function(t) {
                                (t = Math.max(2, Math.floor(t))),
                                    this._minimumSize !== t &&
                                        ((this._minimumSize = t),
                                        t > this._defaultSize &&
                                            (this.defaultSize = t));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'defaultSize', {
                            get: function() {
                                return this._defaultSize;
                            },
                            set: function(t) {
                                if (
                                    ((t = Math.max(
                                        this._minimumSize,
                                        Math.floor(t)
                                    )),
                                    this._defaultSize !== t)
                                ) {
                                    var e = t - this._defaultSize;
                                    if (
                                        ((this._defaultSize = t),
                                        (this._length +=
                                            e *
                                            (this._count -
                                                this._sections.length)),
                                        0 !== this._sections.length)
                                    )
                                        for (
                                            var i = 0,
                                                o = this._sections.length;
                                            i < o;
                                            ++i
                                        ) {
                                            var r = this._sections[i - 1],
                                                n = this._sections[i];
                                            if (r) {
                                                var s = n.index - r.index - 1;
                                                n.offset =
                                                    r.offset + r.size + s * t;
                                            } else n.offset = n.index * t;
                                        }
                                }
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.clampSize = function(t) {
                            return Math.max(this._minimumSize, Math.floor(t));
                        }),
                        (t.prototype.indexOf = function(t) {
                            if (t < 0 || t >= this._length || 0 === this._count)
                                return -1;
                            if (0 === this._sections.length)
                                return Math.floor(t / this._defaultSize);
                            var e = s.ArrayExt.lowerBound(
                                this._sections,
                                t,
                                F.offsetCmp
                            );
                            if (
                                e < this._sections.length &&
                                this._sections[e].offset <= t
                            )
                                return this._sections[e].index;
                            if (0 === e)
                                return Math.floor(t / this._defaultSize);
                            var i = this._sections[e - 1],
                                o = t - (i.offset + i.size);
                            return (
                                i.index + Math.floor(o / this._defaultSize) + 1
                            );
                        }),
                        (t.prototype.offsetOf = function(t) {
                            if (t < 0 || t >= this._count) return -1;
                            if (0 === this._sections.length)
                                return t * this._defaultSize;
                            var e = s.ArrayExt.lowerBound(
                                this._sections,
                                t,
                                F.indexCmp
                            );
                            if (
                                e < this._sections.length &&
                                this._sections[e].index === t
                            )
                                return this._sections[e].offset;
                            if (0 === e) return t * this._defaultSize;
                            var i = this._sections[e - 1],
                                o = t - i.index - 1;
                            return i.offset + i.size + o * this._defaultSize;
                        }),
                        (t.prototype.extentOf = function(t) {
                            if (t < 0 || t >= this._count) return -1;
                            if (0 === this._sections.length)
                                return (t + 1) * this._defaultSize - 1;
                            var e = s.ArrayExt.lowerBound(
                                this._sections,
                                t,
                                F.indexCmp
                            );
                            if (
                                e < this._sections.length &&
                                this._sections[e].index === t
                            )
                                return (
                                    this._sections[e].offset +
                                    this._sections[e].size -
                                    1
                                );
                            if (0 === e) return (t + 1) * this._defaultSize - 1;
                            var i = this._sections[e - 1],
                                o = t - i.index;
                            return (
                                i.offset + i.size + o * this._defaultSize - 1
                            );
                        }),
                        (t.prototype.sizeOf = function(t) {
                            if (t < 0 || t >= this._count) return -1;
                            if (0 === this._sections.length)
                                return this._defaultSize;
                            var e = s.ArrayExt.lowerBound(
                                this._sections,
                                t,
                                F.indexCmp
                            );
                            return e < this._sections.length &&
                                this._sections[e].index === t
                                ? this._sections[e].size
                                : this._defaultSize;
                        }),
                        (t.prototype.resize = function(t, e) {
                            if (!(t < 0 || t >= this._count)) {
                                e = Math.max(this._minimumSize, Math.floor(e));
                                var i,
                                    o = s.ArrayExt.lowerBound(
                                        this._sections,
                                        t,
                                        F.indexCmp
                                    );
                                if (
                                    o < this._sections.length &&
                                    this._sections[o].index === t
                                )
                                    (i = e - (n = this._sections[o]).size),
                                        (n.size = e);
                                else if (0 === o) {
                                    var r = t * this._defaultSize;
                                    s.ArrayExt.insert(this._sections, o, {
                                        index: t,
                                        offset: r,
                                        size: e,
                                    }),
                                        (i = e - this._defaultSize);
                                } else {
                                    var n,
                                        a =
                                            t -
                                            (n = this._sections[o - 1]).index -
                                            1;
                                    (r =
                                        n.offset +
                                        n.size +
                                        a * this._defaultSize),
                                        s.ArrayExt.insert(this._sections, o, {
                                            index: t,
                                            offset: r,
                                            size: e,
                                        }),
                                        (i = e - this._defaultSize);
                                }
                                this._length += i;
                                for (
                                    var l = o + 1, h = this._sections.length;
                                    l < h;
                                    ++l
                                )
                                    this._sections[l].offset += i;
                            }
                        }),
                        (t.prototype.insert = function(t, e) {
                            if (!(e <= 0)) {
                                t = Math.max(0, Math.min(t, this._count));
                                var i = e * this._defaultSize;
                                if (
                                    ((this._count += e),
                                    (this._length += i),
                                    0 !== this._sections.length)
                                )
                                    for (
                                        var o = s.ArrayExt.lowerBound(
                                                this._sections,
                                                t,
                                                F.indexCmp
                                            ),
                                            r = this._sections.length;
                                        o < r;
                                        ++o
                                    ) {
                                        var n = this._sections[o];
                                        (n.index += e), (n.offset += i);
                                    }
                            }
                        }),
                        (t.prototype.remove = function(t, e) {
                            if (!(t < 0 || t >= this._count || e <= 0)) {
                                if (
                                    ((e = Math.min(this._count - t, e)),
                                    0 === this._sections.length)
                                )
                                    return (
                                        (this._count -= e),
                                        void (this._length -=
                                            e * this._defaultSize)
                                    );
                                if (e === this._count)
                                    return (
                                        (this._length = 0),
                                        (this._count = 0),
                                        void (this._sections.length = 0)
                                    );
                                for (
                                    var i = s.ArrayExt.lowerBound(
                                            this._sections,
                                            t,
                                            F.indexCmp
                                        ),
                                        o = s.ArrayExt.lowerBound(
                                            this._sections,
                                            t + e,
                                            F.indexCmp
                                        ),
                                        r = this._sections.splice(i, o - i),
                                        n = (e - r.length) * this._defaultSize,
                                        a = 0,
                                        l = r.length;
                                    a < l;
                                    ++a
                                )
                                    n += r[a].size;
                                for (
                                    this._count -= e,
                                        this._length -= n,
                                        a = i,
                                        l = this._sections.length;
                                    a < l;
                                    ++a
                                ) {
                                    var h = this._sections[a];
                                    (h.index -= e), (h.offset -= n);
                                }
                            }
                        }),
                        (t.prototype.move = function(t, e, i) {
                            if (
                                !(t < 0 || t >= this._count || e <= 0) &&
                                0 !== this._sections.length &&
                                ((e = Math.min(e, this._count - t)),
                                t !==
                                    (i = Math.min(
                                        Math.max(0, i),
                                        this._count - e
                                    )))
                            ) {
                                var o = Math.min(t, i),
                                    r = s.ArrayExt.lowerBound(
                                        this._sections,
                                        o,
                                        F.indexCmp
                                    );
                                if (r !== this._sections.length) {
                                    var n = Math.max(t + e - 1, i + e - 1),
                                        a =
                                            s.ArrayExt.upperBound(
                                                this._sections,
                                                n,
                                                F.indexCmp
                                            ) - 1;
                                    if (!(a < r)) {
                                        for (
                                            var l = i < t ? t : t + e,
                                                h = l - o,
                                                c = n - l + 1,
                                                u = h * this._defaultSize,
                                                d = c * this._defaultSize,
                                                p = r;
                                            p <= a;
                                            ++p
                                        )
                                            (_ = this._sections[p]).index < l
                                                ? (u +=
                                                      _.size -
                                                      this._defaultSize)
                                                : (d +=
                                                      _.size -
                                                      this._defaultSize);
                                        var f = s.ArrayExt.lowerBound(
                                            this._sections,
                                            l,
                                            F.indexCmp
                                        );
                                        for (
                                            r <= f &&
                                                f <= a &&
                                                s.ArrayExt.rotate(
                                                    this._sections,
                                                    f - r,
                                                    r,
                                                    a
                                                ),
                                                p = r;
                                            p <= a;
                                            ++p
                                        ) {
                                            var _;
                                            (_ = this._sections[p]).index < l
                                                ? ((_.index += c),
                                                  (_.offset += d))
                                                : ((_.index -= h),
                                                  (_.offset -= u));
                                        }
                                    }
                                }
                            }
                        }),
                        (t.prototype.reset = function() {
                            (this._sections.length = 0),
                                (this._length =
                                    this._count * this._defaultSize);
                        }),
                        (t.prototype.clear = function() {
                            (this._count = 0),
                                (this._length = 0),
                                (this._sections.length = 0);
                        }),
                        t
                    );
                })();
            !(function(t) {
                (t.offsetCmp = function(t, e) {
                    return e < t.offset ? 1 : t.offset + t.size <= e ? -1 : 0;
                }),
                    (t.indexCmp = function(t, e) {
                        return t.index - e;
                    });
            })(F || (F = {}));
            var J,
                Z = (function(t) {
                    function e(i) {
                        void 0 === i && (i = {});
                        var o = t.call(this) || this;
                        (o._scrollX = 0),
                            (o._scrollY = 0),
                            (o._viewportWidth = 0),
                            (o._viewportHeight = 0),
                            (o._mousedown = !1),
                            (o._keyHandler = null),
                            (o._mouseHandler = null),
                            (o._vScrollBarMinWidth = 0),
                            (o._hScrollBarMinHeight = 0),
                            (o._dpiRatio = Math.ceil(window.devicePixelRatio)),
                            (o._dataModel = null),
                            (o._selectionModel = null),
                            (o._editingEnabled = !1),
                            o.addClass('lm-DataGrid'),
                            o.addClass('p-DataGrid'),
                            (o._style = i.style || e.defaultStyle),
                            (o._stretchLastRow = i.stretchLastRow || !1),
                            (o._stretchLastColumn = i.stretchLastColumn || !1),
                            (o._headerVisibility = i.headerVisibility || 'all'),
                            (o._cellRenderers = i.cellRenderers || new q()),
                            (o._copyConfig =
                                i.copyConfig || e.defaultCopyConfig),
                            o._cellRenderers.changed.connect(
                                o._onRenderersChanged,
                                o
                            );
                        var r = i.defaultSizes || e.defaultSizes,
                            n = i.minimumSizes || e.minimumSizes;
                        (o._rowSections = new U({
                            defaultSize: r.rowHeight,
                            minimumSize: n.rowHeight,
                        })),
                            (o._columnSections = new U({
                                defaultSize: r.columnWidth,
                                minimumSize: n.columnWidth,
                            })),
                            (o._rowHeaderSections = new U({
                                defaultSize: r.rowHeaderWidth,
                                minimumSize: n.rowHeaderWidth,
                            })),
                            (o._columnHeaderSections = new U({
                                defaultSize: r.columnHeaderHeight,
                                minimumSize: n.columnHeaderHeight,
                            })),
                            (o._canvas = J.createCanvas()),
                            (o._buffer = J.createCanvas()),
                            (o._overlay = J.createCanvas()),
                            (o._canvasGC = o._canvas.getContext('2d')),
                            (o._bufferGC = o._buffer.getContext('2d')),
                            (o._overlayGC = o._overlay.getContext('2d')),
                            (o._canvas.style.position = 'absolute'),
                            (o._canvas.style.top = '0px'),
                            (o._canvas.style.left = '0px'),
                            (o._canvas.style.width = '0px'),
                            (o._canvas.style.height = '0px'),
                            (o._overlay.style.position = 'absolute'),
                            (o._overlay.style.top = '0px'),
                            (o._overlay.style.left = '0px'),
                            (o._overlay.style.width = '0px'),
                            (o._overlay.style.height = '0px'),
                            (o._viewport = new l.Widget()),
                            (o._viewport.node.tabIndex = -1),
                            (o._viewport.node.style.outline = 'none'),
                            (o._vScrollBar = new l.ScrollBar({
                                orientation: 'vertical',
                            })),
                            (o._hScrollBar = new l.ScrollBar({
                                orientation: 'horizontal',
                            })),
                            (o._scrollCorner = new l.Widget()),
                            (o._editorController = new N()),
                            o._viewport.addClass('lm-DataGrid-viewport'),
                            o._vScrollBar.addClass('lm-DataGrid-scrollBar'),
                            o._hScrollBar.addClass('lm-DataGrid-scrollBar'),
                            o._scrollCorner.addClass(
                                'lm-DataGrid-scrollCorner'
                            ),
                            o._viewport.addClass('p-DataGrid-viewport'),
                            o._vScrollBar.addClass('p-DataGrid-scrollBar'),
                            o._hScrollBar.addClass('p-DataGrid-scrollBar'),
                            o._scrollCorner.addClass('p-DataGrid-scrollCorner'),
                            o._viewport.node.appendChild(o._canvas),
                            o._viewport.node.appendChild(o._overlay),
                            h.MessageLoop.installMessageHook(o._viewport, o),
                            h.MessageLoop.installMessageHook(o._hScrollBar, o),
                            h.MessageLoop.installMessageHook(o._vScrollBar, o),
                            o._vScrollBar.hide(),
                            o._hScrollBar.hide(),
                            o._scrollCorner.hide(),
                            o._vScrollBar.thumbMoved.connect(
                                o._onThumbMoved,
                                o
                            ),
                            o._hScrollBar.thumbMoved.connect(
                                o._onThumbMoved,
                                o
                            ),
                            o._vScrollBar.pageRequested.connect(
                                o._onPageRequested,
                                o
                            ),
                            o._hScrollBar.pageRequested.connect(
                                o._onPageRequested,
                                o
                            ),
                            o._vScrollBar.stepRequested.connect(
                                o._onStepRequested,
                                o
                            ),
                            o._hScrollBar.stepRequested.connect(
                                o._onStepRequested,
                                o
                            ),
                            l.GridLayout.setCellConfig(o._viewport, {
                                row: 0,
                                column: 0,
                            }),
                            l.GridLayout.setCellConfig(o._vScrollBar, {
                                row: 0,
                                column: 1,
                            }),
                            l.GridLayout.setCellConfig(o._hScrollBar, {
                                row: 1,
                                column: 0,
                            }),
                            l.GridLayout.setCellConfig(o._scrollCorner, {
                                row: 1,
                                column: 1,
                            });
                        var s = new l.GridLayout({
                            rowCount: 2,
                            columnCount: 2,
                            rowSpacing: 0,
                            columnSpacing: 0,
                            fitPolicy: 'set-no-constraint',
                        });
                        return (
                            s.setRowStretch(0, 1),
                            s.setRowStretch(1, 0),
                            s.setColumnStretch(0, 1),
                            s.setColumnStretch(1, 0),
                            s.addWidget(o._viewport),
                            s.addWidget(o._vScrollBar),
                            s.addWidget(o._hScrollBar),
                            s.addWidget(o._scrollCorner),
                            (o.layout = s),
                            o
                        );
                    }
                    return (
                        p(e, t),
                        (e.prototype.dispose = function() {
                            this._releaseMouse(),
                                this._keyHandler && this._keyHandler.dispose(),
                                this._mouseHandler &&
                                    this._mouseHandler.dispose(),
                                (this._keyHandler = null),
                                (this._mouseHandler = null),
                                (this._dataModel = null),
                                (this._selectionModel = null),
                                this._rowSections.clear(),
                                this._columnSections.clear(),
                                this._rowHeaderSections.clear(),
                                this._columnHeaderSections.clear(),
                                t.prototype.dispose.call(this);
                        }),
                        Object.defineProperty(e.prototype, 'dataModel', {
                            get: function() {
                                return this._dataModel;
                            },
                            set: function(t) {
                                this._dataModel !== t &&
                                    (this._releaseMouse(),
                                    (this.selectionModel = null),
                                    this._dataModel &&
                                        this._dataModel.changed.disconnect(
                                            this._onDataModelChanged,
                                            this
                                        ),
                                    t &&
                                        t.changed.connect(
                                            this._onDataModelChanged,
                                            this
                                        ),
                                    (this._dataModel = t),
                                    this._rowSections.clear(),
                                    this._columnSections.clear(),
                                    this._rowHeaderSections.clear(),
                                    this._columnHeaderSections.clear(),
                                    t &&
                                        (this._rowSections.insert(
                                            0,
                                            t.rowCount('body')
                                        ),
                                        this._columnSections.insert(
                                            0,
                                            t.columnCount('body')
                                        ),
                                        this._rowHeaderSections.insert(
                                            0,
                                            t.columnCount('row-header')
                                        ),
                                        this._columnHeaderSections.insert(
                                            0,
                                            t.rowCount('column-header')
                                        )),
                                    (this._scrollX = 0),
                                    (this._scrollY = 0),
                                    this._syncViewport());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'selectionModel', {
                            get: function() {
                                return this._selectionModel;
                            },
                            set: function(t) {
                                if (this._selectionModel !== t) {
                                    if (
                                        (this._releaseMouse(),
                                        t && t.dataModel !== this._dataModel)
                                    )
                                        throw new Error(
                                            'SelectionModel.dataModel !== DataGrid.dataModel'
                                        );
                                    this._selectionModel &&
                                        this._selectionModel.changed.disconnect(
                                            this._onSelectionsChanged,
                                            this
                                        ),
                                        t &&
                                            t.changed.connect(
                                                this._onSelectionsChanged,
                                                this
                                            ),
                                        (this._selectionModel = t),
                                        this.repaintOverlay();
                                }
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'keyHandler', {
                            get: function() {
                                return this._keyHandler;
                            },
                            set: function(t) {
                                this._keyHandler = t;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'mouseHandler', {
                            get: function() {
                                return this._mouseHandler;
                            },
                            set: function(t) {
                                this._mouseHandler !== t &&
                                    (this._releaseMouse(),
                                    (this._mouseHandler = t));
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'style', {
                            get: function() {
                                return this._style;
                            },
                            set: function(t) {
                                this._style !== t &&
                                    ((this._style = f({}, t)),
                                    this.repaintContent(),
                                    this.repaintOverlay());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'cellRenderers', {
                            get: function() {
                                return this._cellRenderers;
                            },
                            set: function(t) {
                                this._cellRenderers !== t &&
                                    (this._cellRenderers.changed.disconnect(
                                        this._onRenderersChanged,
                                        this
                                    ),
                                    t.changed.connect(
                                        this._onRenderersChanged,
                                        this
                                    ),
                                    (this._cellRenderers = t),
                                    this.repaintContent());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'headerVisibility', {
                            get: function() {
                                return this._headerVisibility;
                            },
                            set: function(t) {
                                this._headerVisibility !== t &&
                                    ((this._headerVisibility = t),
                                    this._syncViewport());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'defaultSizes', {
                            get: function() {
                                return {
                                    rowHeight: this._rowSections.defaultSize,
                                    columnWidth: this._columnSections
                                        .defaultSize,
                                    rowHeaderWidth: this._rowHeaderSections
                                        .defaultSize,
                                    columnHeaderHeight: this
                                        ._columnHeaderSections.defaultSize,
                                };
                            },
                            set: function(t) {
                                (this._rowSections.defaultSize = t.rowHeight),
                                    (this._columnSections.defaultSize =
                                        t.columnWidth),
                                    (this._rowHeaderSections.defaultSize =
                                        t.rowHeaderWidth),
                                    (this._columnHeaderSections.defaultSize =
                                        t.columnHeaderHeight),
                                    this._syncViewport();
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'minimumSizes', {
                            get: function() {
                                return {
                                    rowHeight: this._rowSections.minimumSize,
                                    columnWidth: this._columnSections
                                        .minimumSize,
                                    rowHeaderWidth: this._rowHeaderSections
                                        .minimumSize,
                                    columnHeaderHeight: this
                                        ._columnHeaderSections.minimumSize,
                                };
                            },
                            set: function(t) {
                                (this._rowSections.minimumSize = t.rowHeight),
                                    (this._columnSections.minimumSize =
                                        t.columnWidth),
                                    (this._rowHeaderSections.minimumSize =
                                        t.rowHeaderWidth),
                                    (this._columnHeaderSections.minimumSize =
                                        t.columnHeaderHeight),
                                    this._syncViewport();
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'copyConfig', {
                            get: function() {
                                return this._copyConfig;
                            },
                            set: function(t) {
                                this._copyConfig = t;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'stretchLastRow', {
                            get: function() {
                                return this._stretchLastRow;
                            },
                            set: function(t) {
                                t !== this._stretchLastRow &&
                                    ((this._stretchLastRow = t),
                                    this._syncViewport());
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(
                            e.prototype,
                            'stretchLastColumn',
                            {
                                get: function() {
                                    return this._stretchLastColumn;
                                },
                                set: function(t) {
                                    t !== this._stretchLastColumn &&
                                        ((this._stretchLastColumn = t),
                                        this._syncViewport());
                                },
                                enumerable: !0,
                                configurable: !0,
                            }
                        ),
                        Object.defineProperty(e.prototype, 'headerWidth', {
                            get: function() {
                                return 'none' === this._headerVisibility ||
                                    'column' === this._headerVisibility
                                    ? 0
                                    : this._rowHeaderSections.length;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'headerHeight', {
                            get: function() {
                                return 'none' === this._headerVisibility ||
                                    'row' === this._headerVisibility
                                    ? 0
                                    : this._columnHeaderSections.length;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'bodyWidth', {
                            get: function() {
                                return this._columnSections.length;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'bodyHeight', {
                            get: function() {
                                return this._rowSections.length;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'totalWidth', {
                            get: function() {
                                return this.headerWidth + this.bodyWidth;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'totalHeight', {
                            get: function() {
                                return this.headerHeight + this.bodyHeight;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'viewportWidth', {
                            get: function() {
                                return this._viewportWidth;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'viewportHeight', {
                            get: function() {
                                return this._viewportHeight;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'pageWidth', {
                            get: function() {
                                return Math.max(
                                    0,
                                    this.viewportWidth - this.headerWidth
                                );
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'pageHeight', {
                            get: function() {
                                return Math.max(
                                    0,
                                    this.viewportHeight - this.headerHeight
                                );
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'scrollX', {
                            get: function() {
                                return this._hScrollBar.value;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'scrollY', {
                            get: function() {
                                return this._vScrollBar.value;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'maxScrollX', {
                            get: function() {
                                return Math.max(
                                    0,
                                    this.bodyWidth - this.pageWidth - 1
                                );
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'maxScrollY', {
                            get: function() {
                                return Math.max(
                                    0,
                                    this.bodyHeight - this.pageHeight - 1
                                );
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'viewport', {
                            get: function() {
                                return this._viewport;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'editorController', {
                            get: function() {
                                return this._editorController;
                            },
                            set: function(t) {
                                this._editorController = t;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'editingEnabled', {
                            get: function() {
                                return this._editingEnabled;
                            },
                            set: function(t) {
                                this._editingEnabled = t;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'editable', {
                            get: function() {
                                return (
                                    this._editingEnabled &&
                                    null !== this._selectionModel &&
                                    null !== this._editorController &&
                                    this.dataModel instanceof X
                                );
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'canvasGC', {
                            get: function() {
                                return this._canvasGC;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'rowSections', {
                            get: function() {
                                return this._rowSections;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'columnSections', {
                            get: function() {
                                return this._columnSections;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(
                            e.prototype,
                            'rowHeaderSections',
                            {
                                get: function() {
                                    return this._rowHeaderSections;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }
                        ),
                        Object.defineProperty(
                            e.prototype,
                            'columnHeaderSections',
                            {
                                get: function() {
                                    return this._columnHeaderSections;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }
                        ),
                        (e.prototype.scrollToRow = function(t) {
                            var e = this._rowSections.count;
                            if (0 !== e) {
                                (t = Math.floor(t)),
                                    (t = Math.max(0, Math.min(t, e - 1)));
                                var i = this._rowSections.offsetOf(t),
                                    o = this._rowSections.extentOf(t),
                                    r = this._scrollY,
                                    n = this._scrollY + this.pageHeight - 1,
                                    s = 0;
                                i < r
                                    ? (s = i - r - 10)
                                    : o > n && (s = o - n + 10),
                                    0 !== s && this.scrollBy(0, s);
                            }
                        }),
                        (e.prototype.scrollToColumn = function(t) {
                            var e = this._columnSections.count;
                            if (0 !== e) {
                                (t = Math.floor(t)),
                                    (t = Math.max(0, Math.min(t, e - 1)));
                                var i = this._columnSections.offsetOf(t),
                                    o = this._columnSections.extentOf(t),
                                    r = this._scrollX,
                                    n = this._scrollX + this.pageWidth - 1,
                                    s = 0;
                                i < r
                                    ? (s = i - r - 10)
                                    : o > n && (s = o - n + 10),
                                    0 !== s && this.scrollBy(s, 0);
                            }
                        }),
                        (e.prototype.scrollToCell = function(t, e) {
                            var i = this._rowSections.count,
                                o = this._columnSections.count;
                            if (0 !== i && 0 !== o) {
                                (t = Math.floor(t)),
                                    (e = Math.floor(e)),
                                    (t = Math.max(0, Math.min(t, i - 1))),
                                    (e = Math.max(0, Math.min(e, o - 1)));
                                var r = this._columnSections.offsetOf(e),
                                    n = this._columnSections.extentOf(e),
                                    s = this._rowSections.offsetOf(t),
                                    a = this._rowSections.extentOf(t),
                                    l = this._scrollX,
                                    h = this._scrollX + this.pageWidth - 1,
                                    c = this._scrollY,
                                    u = this._scrollY + this.pageHeight - 1,
                                    d = 0,
                                    p = 0;
                                r < l
                                    ? (d = r - l - 10)
                                    : n > h && (d = n - h + 10),
                                    s < c
                                        ? (p = s - c - 10)
                                        : a > u && (p = a - u + 10),
                                    (0 === d && 0 === p) || this.scrollBy(d, p);
                            }
                        }),
                        (e.prototype.moveCursor = function(t) {
                            if (
                                this.dataModel &&
                                this._selectionModel &&
                                !this._selectionModel.isEmpty
                            ) {
                                var e = this._selectionModel.selections();
                                if (e.next() && !e.next()) {
                                    var i = this._selectionModel.currentSelection();
                                    if (i.r1 === i.r2 && i.c1 === i.c2) {
                                        var o =
                                                'down' === t
                                                    ? 1
                                                    : 'up' === t
                                                    ? -1
                                                    : 0,
                                            r =
                                                'right' === t
                                                    ? 1
                                                    : 'left' === t
                                                    ? -1
                                                    : 0,
                                            n = i.r1 + o,
                                            s = i.c1 + r,
                                            a = this.dataModel.rowCount('body'),
                                            l = this.dataModel.columnCount(
                                                'body'
                                            );
                                        return (
                                            n >= a
                                                ? ((n = 0), (s += 1))
                                                : -1 === n &&
                                                  ((n = a - 1), (s -= 1)),
                                            s >= l
                                                ? ((s = 0),
                                                  (n += 1) >= a && (n = 0))
                                                : -1 === s &&
                                                  ((s = l - 1),
                                                  -1 == (n -= 1) &&
                                                      (n = a - 1)),
                                            void this._selectionModel.select({
                                                r1: n,
                                                c1: s,
                                                r2: n,
                                                c2: s,
                                                cursorRow: n,
                                                cursorColumn: s,
                                                clear: 'all',
                                            })
                                        );
                                    }
                                }
                                this._selectionModel.moveCursorWithinSelections(
                                    t
                                );
                            }
                        }),
                        (e.prototype.scrollToCursor = function() {
                            if (this._selectionModel) {
                                var t = this._selectionModel.cursorRow,
                                    e = this._selectionModel.cursorColumn;
                                this.scrollToCell(t, e);
                            }
                        }),
                        (e.prototype.scrollBy = function(t, e) {
                            this.scrollTo(this.scrollX + t, this.scrollY + e);
                        }),
                        (e.prototype.scrollByPage = function(t) {
                            var e = 0,
                                i = 0;
                            switch (t) {
                                case 'up':
                                    i = -this.pageHeight;
                                    break;
                                case 'down':
                                    i = this.pageHeight;
                                    break;
                                case 'left':
                                    e = -this.pageWidth;
                                    break;
                                case 'right':
                                    e = this.pageWidth;
                                    break;
                                default:
                                    throw 'unreachable';
                            }
                            this.scrollTo(this.scrollX + e, this.scrollY + i);
                        }),
                        (e.prototype.scrollByStep = function(t) {
                            var e,
                                i,
                                o = this.scrollX,
                                r = this.scrollY,
                                n = this._rowSections,
                                s = this._columnSections;
                            switch (t) {
                                case 'up':
                                    r =
                                        (e = n.indexOf(r - 1)) < 0
                                            ? r
                                            : n.offsetOf(e);
                                    break;
                                case 'down':
                                    r =
                                        (e = n.indexOf(r)) < 0
                                            ? r
                                            : n.offsetOf(e) + n.sizeOf(e);
                                    break;
                                case 'left':
                                    o =
                                        (i = s.indexOf(o - 1)) < 0
                                            ? o
                                            : s.offsetOf(i);
                                    break;
                                case 'right':
                                    o =
                                        (i = s.indexOf(o)) < 0
                                            ? o
                                            : s.offsetOf(i) + s.sizeOf(i);
                                    break;
                                default:
                                    throw 'unreachable';
                            }
                            this.scrollTo(o, r);
                        }),
                        (e.prototype.scrollTo = function(t, e) {
                            (t = Math.max(
                                0,
                                Math.min(Math.floor(t), this.maxScrollX)
                            )),
                                (e = Math.max(
                                    0,
                                    Math.min(Math.floor(e), this.maxScrollY)
                                )),
                                (this._hScrollBar.value = t),
                                (this._vScrollBar.value = e),
                                h.MessageLoop.postMessage(
                                    this._viewport,
                                    J.ScrollRequest
                                );
                        }),
                        (e.prototype.rowCount = function(t) {
                            return 'body' === t
                                ? this._rowSections.count
                                : this._columnHeaderSections.count;
                        }),
                        (e.prototype.columnCount = function(t) {
                            return 'body' === t
                                ? this._columnSections.count
                                : this._rowHeaderSections.count;
                        }),
                        (e.prototype.rowAt = function(t, e) {
                            if (e < 0) return -1;
                            if ('column-header' === t)
                                return this._columnHeaderSections.indexOf(e);
                            var i = this._rowSections.indexOf(e);
                            if (i >= 0) return i;
                            if (!this._stretchLastRow) return -1;
                            var o = this.bodyHeight,
                                r = this.pageHeight;
                            return r <= o || e >= r
                                ? -1
                                : this._rowSections.count - 1;
                        }),
                        (e.prototype.columnAt = function(t, e) {
                            if (e < 0) return -1;
                            if ('row-header' === t)
                                return this._rowHeaderSections.indexOf(e);
                            var i = this._columnSections.indexOf(e);
                            if (i >= 0) return i;
                            if (!this._stretchLastColumn) return -1;
                            var o = this.bodyWidth,
                                r = this.pageWidth;
                            return r <= o || e >= r
                                ? -1
                                : this._columnSections.count - 1;
                        }),
                        (e.prototype.rowOffset = function(t, e) {
                            return 'body' === t
                                ? this._rowSections.offsetOf(e)
                                : this._columnHeaderSections.offsetOf(e);
                        }),
                        (e.prototype.columnOffset = function(t, e) {
                            return 'body' === t
                                ? this._columnSections.offsetOf(e)
                                : this._rowHeaderSections.offsetOf(e);
                        }),
                        (e.prototype.rowSize = function(t, e) {
                            if ('column-header' === t)
                                return this._columnHeaderSections.sizeOf(e);
                            var i = this._rowSections.sizeOf(e);
                            if (i < 0) return i;
                            if (!this._stretchLastRow) return i;
                            if (e < this._rowSections.count - 1) return i;
                            var o = this.bodyHeight,
                                r = this.pageHeight;
                            return r <= o ? i : i + (r - o);
                        }),
                        (e.prototype.columnSize = function(t, e) {
                            if ('row-header' === t)
                                return this._rowHeaderSections.sizeOf(e);
                            var i = this._columnSections.sizeOf(e);
                            if (i < 0) return i;
                            if (!this._stretchLastColumn) return i;
                            if (e < this._columnSections.count - 1) return i;
                            var o = this.bodyWidth,
                                r = this.pageWidth;
                            return r <= o ? i : i + (r - o);
                        }),
                        (e.prototype.resizeRow = function(t, e, i) {
                            var o = new J.RowResizeRequest(t, e, i);
                            h.MessageLoop.postMessage(this._viewport, o);
                        }),
                        (e.prototype.resizeColumn = function(t, e, i) {
                            var o = new J.ColumnResizeRequest(t, e, i);
                            h.MessageLoop.postMessage(this._viewport, o);
                        }),
                        (e.prototype.resetRows = function(t) {
                            switch (t) {
                                case 'all':
                                    this._rowSections.reset(),
                                        this._columnHeaderSections.reset();
                                    break;
                                case 'body':
                                    this._rowSections.reset();
                                    break;
                                case 'column-header':
                                    this._columnHeaderSections.reset();
                                    break;
                                default:
                                    throw 'unreachable';
                            }
                            this.repaintContent(), this.repaintOverlay();
                        }),
                        (e.prototype.resetColumns = function(t) {
                            switch (t) {
                                case 'all':
                                    this._columnSections.reset(),
                                        this._rowHeaderSections.reset();
                                    break;
                                case 'body':
                                    this._columnSections.reset();
                                    break;
                                case 'row-header':
                                    this._rowHeaderSections.reset();
                                    break;
                                default:
                                    throw 'unreachable';
                            }
                            this.repaintContent(), this.repaintOverlay();
                        }),
                        (e.prototype.fitColumnNames = function(t, e, i) {
                            if (
                                (void 0 === t && (t = 'all'),
                                void 0 === e && (e = 15),
                                this.dataModel)
                            ) {
                                var o = void 0 === i || i < 0 ? void 0 : i;
                                if ('row-header' === t || 'all' === t)
                                    if (void 0 !== o) {
                                        var r = this.dataModel.columnCount(
                                            'row-header'
                                        );
                                        o - r < 0
                                            ? (this._fitRowColumnHeaders(
                                                  this.dataModel,
                                                  e,
                                                  o
                                              ),
                                              (o = 0))
                                            : (this._fitRowColumnHeaders(
                                                  this.dataModel,
                                                  e,
                                                  r
                                              ),
                                              (o -= r));
                                    } else
                                        this._fitRowColumnHeaders(
                                            this.dataModel,
                                            e
                                        );
                                if ('body' === t || 'all' === t)
                                    if (void 0 !== o) {
                                        var n = this.dataModel.columnCount(
                                            'body'
                                        );
                                        o - n < 0
                                            ? (this._fitBodyColumnHeaders(
                                                  this.dataModel,
                                                  e,
                                                  o
                                              ),
                                              (o = 0))
                                            : this._fitBodyColumnHeaders(
                                                  this.dataModel,
                                                  e,
                                                  Math.min(o, n)
                                              );
                                    } else
                                        this._fitBodyColumnHeaders(
                                            this.dataModel,
                                            e
                                        );
                            }
                        }),
                        (e.prototype.mapToLocal = function(t, e) {
                            var i = this._viewport.node.getBoundingClientRect(),
                                o = i.left,
                                r = i.top;
                            return {
                                lx: t - (o = Math.floor(o)),
                                ly: e - (r = Math.floor(r)),
                            };
                        }),
                        (e.prototype.mapToVirtual = function(t, e) {
                            var i = this.mapToLocal(t, e),
                                o = i.lx,
                                r = i.ly;
                            return {
                                vx: o + this.scrollX - this.headerWidth,
                                vy: r + this.scrollY - this.headerHeight,
                            };
                        }),
                        (e.prototype.hitTest = function(t, e) {
                            var i = this.mapToLocal(t, e),
                                o = i.lx,
                                r = i.ly,
                                n = this.headerWidth,
                                s = this.headerHeight,
                                a = this.bodyWidth,
                                l = this.bodyHeight,
                                h = this.pageHeight,
                                c = this.pageWidth;
                            if (
                                (this._stretchLastColumn && c > a && (a = c),
                                this._stretchLastRow && h > l && (l = h),
                                o >= 0 && o < n && r >= 0 && r < s)
                            ) {
                                var u = o,
                                    d = r,
                                    p = this.rowAt('column-header', d),
                                    f = this.columnAt('row-header', u);
                                return {
                                    region: 'corner-header',
                                    row: p,
                                    column: f,
                                    x: u - this.columnOffset('row-header', f),
                                    y: d - this.rowOffset('column-header', p),
                                    width: this.columnSize('row-header', f),
                                    height: this.rowSize('column-header', p),
                                };
                            }
                            if (r >= 0 && r < s && o >= 0 && o < n + a) {
                                (u = o + this._scrollX - n), (d = r);
                                var _ = this.rowAt('column-header', d),
                                    m = this.columnAt('body', u);
                                return {
                                    region: 'column-header',
                                    row: _,
                                    column: m,
                                    x: u - this.columnOffset('body', m),
                                    y: d - this.rowOffset('column-header', _),
                                    width: this.columnSize('body', m),
                                    height: this.rowSize('column-header', _),
                                };
                            }
                            if (o >= 0 && o < n && r >= 0 && r < s + l) {
                                (u = o), (d = r + this._scrollY - s);
                                var v = this.rowAt('body', d),
                                    y = this.columnAt('row-header', u);
                                return {
                                    region: 'row-header',
                                    row: v,
                                    column: y,
                                    x: u - this.columnOffset('row-header', y),
                                    y: d - this.rowOffset('body', v),
                                    width: this.columnSize('row-header', y),
                                    height: this.rowSize('body', v),
                                };
                            }
                            if (o >= n && o < n + a && r >= s && r < s + l) {
                                (u = o + this._scrollX - n),
                                    (d = r + this._scrollY - s);
                                var g = this.rowAt('body', d),
                                    w = this.columnAt('body', u);
                                return {
                                    region: 'body',
                                    row: g,
                                    column: w,
                                    x: u - this.columnOffset('body', w),
                                    y: d - this.rowOffset('body', g),
                                    width: this.columnSize('body', w),
                                    height: this.rowSize('body', g),
                                };
                            }
                            return {
                                region: 'void',
                                row: -1,
                                column: -1,
                                x: -1,
                                y: -1,
                                width: -1,
                                height: -1,
                            };
                        }),
                        (e.prototype.copyToClipboard = function() {
                            var t,
                                e,
                                i = this._dataModel;
                            if (i) {
                                var r = this._selectionModel;
                                if (r) {
                                    var n = (0, s.toArray)(r.selections());
                                    if (0 !== n.length)
                                        if (n.length > 1)
                                            alert(
                                                'Cannot copy multiple grid selections.'
                                            );
                                        else {
                                            var a = i.rowCount('body'),
                                                l = i.columnCount('body');
                                            if (0 !== a && 0 !== l) {
                                                var h = n[0],
                                                    c = h.r1,
                                                    u = h.c1,
                                                    d = h.r2,
                                                    p = h.c2;
                                                (c = Math.max(
                                                    0,
                                                    Math.min(c, a - 1)
                                                )),
                                                    (u = Math.max(
                                                        0,
                                                        Math.min(u, l - 1)
                                                    )),
                                                    (d = Math.max(
                                                        0,
                                                        Math.min(d, a - 1)
                                                    )),
                                                    (p = Math.max(
                                                        0,
                                                        Math.min(p, l - 1)
                                                    )),
                                                    d < c &&
                                                        ((c = (t = [d, c])[0]),
                                                        (d = t[1])),
                                                    p < u &&
                                                        ((u = (e = [p, u])[0]),
                                                        (p = e[1]));
                                                var f = i.columnCount(
                                                        'row-header'
                                                    ),
                                                    _ = i.rowCount(
                                                        'column-header'
                                                    ),
                                                    m = this._copyConfig
                                                        .separator,
                                                    v = this._copyConfig.format,
                                                    y = this._copyConfig
                                                        .headers,
                                                    g = this._copyConfig
                                                        .warningThreshold,
                                                    w = d - c + 1,
                                                    b = p - u + 1;
                                                switch (y) {
                                                    case 'none':
                                                        (f = 0), (_ = 0);
                                                        break;
                                                    case 'row':
                                                        (_ = 0), (b += f);
                                                        break;
                                                    case 'column':
                                                        (f = 0), (w += _);
                                                        break;
                                                    case 'all':
                                                        (w += _), (b += f);
                                                        break;
                                                    default:
                                                        throw 'unreachable';
                                                }
                                                var C = w * b;
                                                if (C > g) {
                                                    var x =
                                                        'Copying ' +
                                                        C +
                                                        ' cells may take a while. Continue?';
                                                    if (!window.confirm(x))
                                                        return;
                                                }
                                                for (
                                                    var S = {
                                                            region: 'body',
                                                            row: 0,
                                                            column: 0,
                                                            value: null,
                                                            metadata: {},
                                                        },
                                                        M = new Array(w),
                                                        O = 0;
                                                    O < w;
                                                    ++O
                                                ) {
                                                    for (
                                                        var H = new Array(b),
                                                            z = 0;
                                                        z < b;
                                                        ++z
                                                    ) {
                                                        var R = void 0,
                                                            E = void 0,
                                                            k = void 0;
                                                        O < _ && z < f
                                                            ? ((R =
                                                                  'corner-header'),
                                                              (E = O),
                                                              (k = z))
                                                            : O < _
                                                            ? ((R =
                                                                  'column-header'),
                                                              (E = O),
                                                              (k = z - f + u))
                                                            : z < f
                                                            ? ((R =
                                                                  'row-header'),
                                                              (E = O - _ + c),
                                                              (k = z))
                                                            : ((R = 'body'),
                                                              (E = O - _ + c),
                                                              (k = z - f + u)),
                                                            (S.region = R),
                                                            (S.row = E),
                                                            (S.column = k),
                                                            (S.value = i.data(
                                                                R,
                                                                E,
                                                                k
                                                            )),
                                                            (S.metadata = i.metadata(
                                                                R,
                                                                E,
                                                                k
                                                            )),
                                                            (H[z] = v(S));
                                                    }
                                                    M[O] = H;
                                                }
                                                var L = M.map(function(t) {
                                                        return t.join(m);
                                                    }),
                                                    P = L.join('\n');
                                                o.ClipboardExt.copyText(P);
                                            }
                                        }
                                }
                            }
                        }),
                        (e.prototype.processMessage = function(e) {
                            if (
                                'child-shown' !== e.type &&
                                'child-hidden' !== e.type
                            ) {
                                if ('fit-request' === e.type) {
                                    var i = o.ElementExt.sizeLimits(
                                            this._vScrollBar.node
                                        ),
                                        r = o.ElementExt.sizeLimits(
                                            this._hScrollBar.node
                                        );
                                    (this._vScrollBarMinWidth = i.minWidth),
                                        (this._hScrollBarMinHeight =
                                            r.minHeight);
                                }
                                t.prototype.processMessage.call(this, e);
                            }
                        }),
                        (e.prototype.messageHook = function(t, e) {
                            return t === this._viewport
                                ? (this._processViewportMessage(e), !0)
                                : t === this._hScrollBar &&
                                  'activate-request' === e.type
                                ? (this.activate(), !1)
                                : t !== this._vScrollBar ||
                                  'activate-request' !== e.type ||
                                  (this.activate(), !1);
                        }),
                        (e.prototype.handleEvent = function(t) {
                            switch (t.type) {
                                case 'keydown':
                                    this._evtKeyDown(t);
                                    break;
                                case 'mousedown':
                                    this._evtMouseDown(t);
                                    break;
                                case 'mousemove':
                                    this._evtMouseMove(t);
                                    break;
                                case 'mouseup':
                                    this._evtMouseUp(t);
                                    break;
                                case 'dblclick':
                                    this._evtMouseDoubleClick(t);
                                    break;
                                case 'mouseleave':
                                    this._evtMouseLeave(t);
                                    break;
                                case 'contextmenu':
                                    this._evtContextMenu(t);
                                    break;
                                case 'wheel':
                                    this._evtWheel(t);
                                    break;
                                case 'resize':
                                    this._refreshDPI();
                            }
                        }),
                        (e.prototype.onActivateRequest = function(t) {
                            this.viewport.node.focus({ preventScroll: !0 });
                        }),
                        (e.prototype.onBeforeAttach = function(t) {
                            window.addEventListener('resize', this),
                                this.node.addEventListener('wheel', this),
                                this._viewport.node.addEventListener(
                                    'keydown',
                                    this
                                ),
                                this._viewport.node.addEventListener(
                                    'mousedown',
                                    this
                                ),
                                this._viewport.node.addEventListener(
                                    'mousemove',
                                    this
                                ),
                                this._viewport.node.addEventListener(
                                    'dblclick',
                                    this
                                ),
                                this._viewport.node.addEventListener(
                                    'mouseleave',
                                    this
                                ),
                                this._viewport.node.addEventListener(
                                    'contextmenu',
                                    this
                                ),
                                this.repaintContent(),
                                this.repaintOverlay();
                        }),
                        (e.prototype.onAfterDetach = function(t) {
                            window.removeEventListener('resize', this),
                                this.node.removeEventListener('wheel', this),
                                this._viewport.node.removeEventListener(
                                    'keydown',
                                    this
                                ),
                                this._viewport.node.removeEventListener(
                                    'mousedown',
                                    this
                                ),
                                this._viewport.node.removeEventListener(
                                    'mousemove',
                                    this
                                ),
                                this._viewport.node.removeEventListener(
                                    'mouseleave',
                                    this
                                ),
                                this._viewport.node.removeEventListener(
                                    'dblclick',
                                    this
                                ),
                                this._viewport.node.removeEventListener(
                                    'contextmenu',
                                    this
                                ),
                                this._releaseMouse();
                        }),
                        (e.prototype.onBeforeShow = function(t) {
                            this.repaintContent(), this.repaintOverlay();
                        }),
                        (e.prototype.onResize = function(t) {
                            this._editorController &&
                                this._editorController.cancel(),
                                this._syncScrollState();
                        }),
                        (e.prototype.repaintContent = function() {
                            var t = new J.PaintRequest('all', 0, 0, 0, 0);
                            h.MessageLoop.postMessage(this._viewport, t);
                        }),
                        (e.prototype.repaintRegion = function(t, e, i, o, r) {
                            var n = new J.PaintRequest(t, e, i, o, r);
                            h.MessageLoop.postMessage(this._viewport, n);
                        }),
                        (e.prototype.repaintOverlay = function() {
                            h.MessageLoop.postMessage(
                                this._viewport,
                                J.OverlayPaintRequest
                            );
                        }),
                        (e.prototype._resizeCanvasIfNeeded = function(t, e) {
                            (t *= this._dpiRatio), (e *= this._dpiRatio);
                            var i = 512 * (Math.ceil((t + 1) / 512) + 1),
                                o = 512 * (Math.ceil((e + 1) / 512) + 1),
                                r = this._canvas.width,
                                n = this._canvas.height;
                            if (!(r >= t && n >= e && r <= i && n <= o)) {
                                var s = i - 512,
                                    a = o - 512;
                                this._canvasGC.setTransform(1, 0, 0, 1, 0, 0),
                                    this._bufferGC.setTransform(
                                        1,
                                        0,
                                        0,
                                        1,
                                        0,
                                        0
                                    ),
                                    this._overlayGC.setTransform(
                                        1,
                                        0,
                                        0,
                                        1,
                                        0,
                                        0
                                    ),
                                    r < t
                                        ? (this._buffer.width = s)
                                        : r > i && (this._buffer.width = i),
                                    n < e
                                        ? (this._buffer.height = a)
                                        : n > o && (this._buffer.height = o);
                                var l = n > 0 && n > 0 && t > 0 && e > 0;
                                l &&
                                    this._bufferGC.drawImage(
                                        this._canvas,
                                        0,
                                        0
                                    ),
                                    r < t
                                        ? ((this._canvas.width = s),
                                          (this._canvas.style.width =
                                              s / this._dpiRatio + 'px'))
                                        : r > i &&
                                          ((this._canvas.width = i),
                                          (this._canvas.style.width =
                                              i / this._dpiRatio + 'px')),
                                    n < e
                                        ? ((this._canvas.height = a),
                                          (this._canvas.style.height =
                                              a / this._dpiRatio + 'px'))
                                        : n > o &&
                                          ((this._canvas.height = o),
                                          (this._canvas.style.height =
                                              o / this._dpiRatio + 'px')),
                                    l &&
                                        this._canvasGC.drawImage(
                                            this._buffer,
                                            0,
                                            0
                                        ),
                                    l &&
                                        this._bufferGC.drawImage(
                                            this._overlay,
                                            0,
                                            0
                                        ),
                                    r < t
                                        ? ((this._overlay.width = s),
                                          (this._overlay.style.width =
                                              s / this._dpiRatio + 'px'))
                                        : r > i &&
                                          ((this._overlay.width = i),
                                          (this._overlay.style.width =
                                              i / this._dpiRatio + 'px')),
                                    n < e
                                        ? ((this._overlay.height = a),
                                          (this._overlay.style.height =
                                              a / this._dpiRatio + 'px'))
                                        : n > o &&
                                          ((this._overlay.height = o),
                                          (this._overlay.style.height =
                                              o / this._dpiRatio + 'px')),
                                    l &&
                                        this._overlayGC.drawImage(
                                            this._buffer,
                                            0,
                                            0
                                        );
                            }
                        }),
                        (e.prototype._syncScrollState = function() {
                            var t = this.bodyWidth,
                                e = this.bodyHeight,
                                i = this.pageWidth,
                                o = this.pageHeight,
                                r = !this._vScrollBar.isHidden,
                                n = !this._hScrollBar.isHidden,
                                s = this._vScrollBarMinWidth,
                                a = this._hScrollBarMinHeight,
                                c = i + (r ? s : 0),
                                u = o + (n ? a : 0),
                                d = u < e - 1,
                                p = c < t - 1;
                            d && !p && (p = c - s < t - 1),
                                p && !d && (d = u - a < e - 1),
                                (d === r && p === n) ||
                                    (this._vScrollBar.setHidden(!d),
                                    this._hScrollBar.setHidden(!p),
                                    this._scrollCorner.setHidden(!d || !p),
                                    h.MessageLoop.sendMessage(
                                        this,
                                        l.Widget.Msg.FitRequest
                                    )),
                                (this._vScrollBar.maximum = this.maxScrollY),
                                (this._vScrollBar.page = this.pageHeight),
                                (this._hScrollBar.maximum = this.maxScrollX),
                                (this._hScrollBar.page = this.pageWidth),
                                this._scrollTo(this._scrollX, this._scrollY);
                        }),
                        (e.prototype._syncViewport = function() {
                            this.repaintContent(),
                                this.repaintOverlay(),
                                this._syncScrollState();
                        }),
                        (e.prototype._processViewportMessage = function(t) {
                            switch (t.type) {
                                case 'resize':
                                    this._onViewportResize(t);
                                    break;
                                case 'scroll-request':
                                    this._onViewportScrollRequest(t);
                                    break;
                                case 'paint-request':
                                    this._onViewportPaintRequest(t);
                                    break;
                                case 'overlay-paint-request':
                                    this._onViewportOverlayPaintRequest(t);
                                    break;
                                case 'row-resize-request':
                                    this._onViewportRowResizeRequest(t);
                                    break;
                                case 'column-resize-request':
                                    this._onViewportColumnResizeRequest(t);
                            }
                        }),
                        (e.prototype._onViewportResize = function(t) {
                            if (this._viewport.isVisible) {
                                var e = t.width,
                                    i = t.height;
                                -1 === e &&
                                    (e = this._viewport.node.offsetWidth),
                                    -1 === i &&
                                        (i = this._viewport.node.offsetHeight),
                                    (e = Math.round(e)),
                                    (i = Math.round(i));
                                var o = this._viewportWidth,
                                    r = this._viewportHeight;
                                if (
                                    ((this._viewportWidth = e),
                                    (this._viewportHeight = i),
                                    this._resizeCanvasIfNeeded(e, i),
                                    0 !== e && 0 !== i)
                                ) {
                                    if (0 === o || 0 === r)
                                        return (
                                            this.paintContent(0, 0, e, i),
                                            void this._paintOverlay()
                                        );
                                    if (
                                        this._stretchLastColumn &&
                                        this.pageWidth > this.bodyWidth
                                    ) {
                                        var n = this._columnSections.offsetOf(
                                                this._columnSections.count - 1
                                            ),
                                            s = Math.min(
                                                this.headerWidth + n,
                                                o
                                            );
                                        this.paintContent(s, 0, e - s, i);
                                    } else
                                        e > o &&
                                            this.paintContent(
                                                o,
                                                0,
                                                e - o + 1,
                                                i
                                            );
                                    if (
                                        this._stretchLastRow &&
                                        this.pageHeight > this.bodyHeight
                                    ) {
                                        var a = this._rowSections.offsetOf(
                                                this._rowSections.count - 1
                                            ),
                                            l = Math.min(
                                                this.headerHeight + a,
                                                r
                                            );
                                        this.paintContent(0, l, e, i - l);
                                    } else
                                        i > r &&
                                            this.paintContent(
                                                0,
                                                r,
                                                e,
                                                i - r + 1
                                            );
                                    this._paintOverlay();
                                }
                            }
                        }),
                        (e.prototype._onViewportScrollRequest = function(t) {
                            this._scrollTo(
                                this._hScrollBar.value,
                                this._vScrollBar.value
                            );
                        }),
                        (e.prototype._onViewportPaintRequest = function(t) {
                            if (
                                this._viewport.isVisible &&
                                0 !== this._viewportWidth &&
                                0 !== this._viewportHeight
                            ) {
                                var e,
                                    i,
                                    o,
                                    r,
                                    n = this._viewportWidth - 1,
                                    s = this._viewportHeight - 1,
                                    a = this._scrollX,
                                    l = this._scrollY,
                                    h = this.headerWidth,
                                    c = this.headerHeight,
                                    u = this._rowSections,
                                    d = this._columnSections,
                                    p = this._rowHeaderSections,
                                    f = this._columnHeaderSections,
                                    _ = t.region,
                                    m = t.r1,
                                    v = t.c1,
                                    y = t.r2,
                                    g = t.c2;
                                switch (_) {
                                    case 'all':
                                        (e = 0), (i = 0), (o = n), (r = s);
                                        break;
                                    case 'body':
                                        (m = Math.max(0, Math.min(m, u.count))),
                                            (v = Math.max(
                                                0,
                                                Math.min(v, d.count)
                                            )),
                                            (y = Math.max(
                                                0,
                                                Math.min(y, u.count)
                                            )),
                                            (g = Math.max(
                                                0,
                                                Math.min(g, d.count)
                                            )),
                                            (e = d.offsetOf(v) - a + h),
                                            (i = u.offsetOf(m) - l + c),
                                            (o = d.extentOf(g) - a + h),
                                            (r = u.extentOf(y) - l + c);
                                        break;
                                    case 'row-header':
                                        (m = Math.max(0, Math.min(m, u.count))),
                                            (v = Math.max(
                                                0,
                                                Math.min(v, p.count)
                                            )),
                                            (y = Math.max(
                                                0,
                                                Math.min(y, u.count)
                                            )),
                                            (g = Math.max(
                                                0,
                                                Math.min(g, p.count)
                                            )),
                                            (e = p.offsetOf(v)),
                                            (i = u.offsetOf(m) - l + c),
                                            (o = p.extentOf(g)),
                                            (r = u.extentOf(y) - l + c);
                                        break;
                                    case 'column-header':
                                        (m = Math.max(0, Math.min(m, f.count))),
                                            (v = Math.max(
                                                0,
                                                Math.min(v, d.count)
                                            )),
                                            (y = Math.max(
                                                0,
                                                Math.min(y, f.count)
                                            )),
                                            (g = Math.max(
                                                0,
                                                Math.min(g, d.count)
                                            )),
                                            (e = d.offsetOf(v) - a + h),
                                            (i = f.offsetOf(m)),
                                            (o = d.extentOf(g) - a + h),
                                            (r = f.extentOf(y));
                                        break;
                                    case 'corner-header':
                                        (m = Math.max(0, Math.min(m, f.count))),
                                            (v = Math.max(
                                                0,
                                                Math.min(v, p.count)
                                            )),
                                            (y = Math.max(
                                                0,
                                                Math.min(y, f.count)
                                            )),
                                            (g = Math.max(
                                                0,
                                                Math.min(g, p.count)
                                            )),
                                            (e = p.offsetOf(v)),
                                            (i = f.offsetOf(m)),
                                            (o = p.extentOf(g)),
                                            (r = f.extentOf(y));
                                        break;
                                    default:
                                        throw 'unreachable';
                                }
                                o < 0 ||
                                    r < 0 ||
                                    e > n ||
                                    i > s ||
                                    ((e = Math.max(0, Math.min(e, n))),
                                    (i = Math.max(0, Math.min(i, s))),
                                    (o = Math.max(0, Math.min(o, n))),
                                    (r = Math.max(0, Math.min(r, s))),
                                    this.paintContent(
                                        e,
                                        i,
                                        o - e + 1,
                                        r - i + 1
                                    ));
                            }
                        }),
                        (e.prototype._onViewportOverlayPaintRequest = function(
                            t
                        ) {
                            this._viewport.isVisible &&
                                0 !== this._viewportWidth &&
                                0 !== this._viewportHeight &&
                                this._paintOverlay();
                        }),
                        (e.prototype._onViewportRowResizeRequest = function(t) {
                            'body' === t.region
                                ? this._resizeRow(t.index, t.size)
                                : this._resizeColumnHeader(t.index, t.size);
                        }),
                        (e.prototype._onViewportColumnResizeRequest = function(
                            t
                        ) {
                            'body' === t.region
                                ? this._resizeColumn(t.index, t.size)
                                : this._resizeRowHeader(t.index, t.size);
                        }),
                        (e.prototype._onThumbMoved = function(t) {
                            h.MessageLoop.postMessage(
                                this._viewport,
                                J.ScrollRequest
                            );
                        }),
                        (e.prototype._onPageRequested = function(t, e) {
                            t === this._vScrollBar
                                ? this.scrollByPage(
                                      'decrement' === e ? 'up' : 'down'
                                  )
                                : this.scrollByPage(
                                      'decrement' === e ? 'left' : 'right'
                                  );
                        }),
                        (e.prototype._onStepRequested = function(t, e) {
                            t === this._vScrollBar
                                ? this.scrollByStep(
                                      'decrement' === e ? 'up' : 'down'
                                  )
                                : this.scrollByStep(
                                      'decrement' === e ? 'left' : 'right'
                                  );
                        }),
                        (e.prototype._onDataModelChanged = function(t, e) {
                            switch (e.type) {
                                case 'rows-inserted':
                                    this._onRowsInserted(e);
                                    break;
                                case 'columns-inserted':
                                    this._onColumnsInserted(e);
                                    break;
                                case 'rows-removed':
                                    this._onRowsRemoved(e);
                                    break;
                                case 'columns-removed':
                                    this._onColumnsRemoved(e);
                                    break;
                                case 'rows-moved':
                                    this._onRowsMoved(e);
                                    break;
                                case 'columns-moved':
                                    this._onColumnsMoved(e);
                                    break;
                                case 'cells-changed':
                                    this._onCellsChanged(e);
                                    break;
                                case 'model-reset':
                                    this._onModelReset(e);
                                    break;
                                default:
                                    throw 'unreachable';
                            }
                        }),
                        (e.prototype._onSelectionsChanged = function(t) {
                            this.repaintOverlay();
                        }),
                        (e.prototype._onRowsInserted = function(t) {
                            var e,
                                i = t.region,
                                o = t.index,
                                r = t.span;
                            r <= 0 ||
                                ((e =
                                    'body' === i
                                        ? this._rowSections
                                        : this._columnHeaderSections),
                                this._scrollY === this.maxScrollY &&
                                this.maxScrollY > 0
                                    ? (e.insert(o, r),
                                      (this._scrollY = this.maxScrollY))
                                    : e.insert(o, r),
                                this._syncViewport());
                        }),
                        (e.prototype._onColumnsInserted = function(t) {
                            var e,
                                i = t.region,
                                o = t.index,
                                r = t.span;
                            r <= 0 ||
                                ((e =
                                    'body' === i
                                        ? this._columnSections
                                        : this._rowHeaderSections),
                                this._scrollX === this.maxScrollX &&
                                this.maxScrollX > 0
                                    ? (e.insert(o, r),
                                      (this._scrollX = this.maxScrollX))
                                    : e.insert(o, r),
                                this._syncViewport());
                        }),
                        (e.prototype._onRowsRemoved = function(t) {
                            var e,
                                i = t.region,
                                o = t.index,
                                r = t.span;
                            r <= 0 ||
                                ((e =
                                    'body' === i
                                        ? this._rowSections
                                        : this._columnHeaderSections),
                                o < 0 ||
                                    o >= e.count ||
                                    (this._scrollY === this.maxScrollY &&
                                    this.maxScrollY > 0
                                        ? (e.remove(o, r),
                                          (this._scrollY = this.maxScrollY))
                                        : e.remove(o, r),
                                    this._syncViewport()));
                        }),
                        (e.prototype._onColumnsRemoved = function(t) {
                            var e,
                                i = t.region,
                                o = t.index,
                                r = t.span;
                            r <= 0 ||
                                ((e =
                                    'body' === i
                                        ? this._columnSections
                                        : this._rowHeaderSections),
                                o < 0 ||
                                    o >= e.count ||
                                    (this._scrollX === this.maxScrollX &&
                                    this.maxScrollX > 0
                                        ? (e.remove(o, r),
                                          (this._scrollX = this.maxScrollX))
                                        : e.remove(o, r),
                                    this._syncViewport()));
                        }),
                        (e.prototype._onRowsMoved = function(t) {
                            var e,
                                i = t.region,
                                o = t.index,
                                r = t.span,
                                n = t.destination;
                            if (
                                !(
                                    r <= 0 ||
                                    ((e =
                                        'body' === i
                                            ? this._rowSections
                                            : this._columnHeaderSections),
                                    o < 0 ||
                                        o >= e.count ||
                                        ((r = Math.min(r, e.count - o)),
                                        o ===
                                            (n = Math.min(
                                                Math.max(0, n),
                                                e.count - r
                                            ))))
                                )
                            ) {
                                var s = Math.min(o, n),
                                    a = Math.max(o + r - 1, n + r - 1);
                                e.move(o, r, n),
                                    'body' === i
                                        ? (this.repaintRegion(
                                              'body',
                                              s,
                                              0,
                                              a,
                                              1 / 0
                                          ),
                                          this.repaintRegion(
                                              'row-header',
                                              s,
                                              0,
                                              a,
                                              1 / 0
                                          ))
                                        : (this.repaintRegion(
                                              'column-header',
                                              s,
                                              0,
                                              a,
                                              1 / 0
                                          ),
                                          this.repaintRegion(
                                              'corner-header',
                                              s,
                                              0,
                                              a,
                                              1 / 0
                                          )),
                                    this._syncViewport();
                            }
                        }),
                        (e.prototype._onColumnsMoved = function(t) {
                            var e,
                                i = t.region,
                                o = t.index,
                                r = t.span,
                                n = t.destination;
                            if (
                                !(
                                    r <= 0 ||
                                    ((e =
                                        'body' === i
                                            ? this._columnSections
                                            : this._rowHeaderSections),
                                    o < 0 ||
                                        o >= e.count ||
                                        ((r = Math.min(r, e.count - o)),
                                        o ===
                                            (n = Math.min(
                                                Math.max(0, n),
                                                e.count - r
                                            ))))
                                )
                            ) {
                                e.move(o, r, n);
                                var s = Math.min(o, n),
                                    a = Math.max(o + r - 1, n + r - 1);
                                'body' === i
                                    ? (this.repaintRegion(
                                          'body',
                                          0,
                                          s,
                                          1 / 0,
                                          a
                                      ),
                                      this.repaintRegion(
                                          'column-header',
                                          0,
                                          s,
                                          1 / 0,
                                          a
                                      ))
                                    : (this.repaintRegion(
                                          'row-header',
                                          0,
                                          s,
                                          1 / 0,
                                          a
                                      ),
                                      this.repaintRegion(
                                          'corner-header',
                                          0,
                                          s,
                                          1 / 0,
                                          a
                                      )),
                                    this._syncViewport();
                            }
                        }),
                        (e.prototype._onCellsChanged = function(t) {
                            var e = t.region,
                                i = t.row,
                                o = t.column,
                                r = t.rowSpan,
                                n = t.columnSpan;
                            if (!(r <= 0 && n <= 0)) {
                                var s = i,
                                    a = o,
                                    l = s + r - 1,
                                    h = a + n - 1;
                                this.repaintRegion(e, s, a, l, h);
                            }
                        }),
                        (e.prototype._onModelReset = function(t) {
                            var e = this._rowSections.count,
                                i = this._columnSections.count,
                                o = this._rowHeaderSections.count,
                                r = this._columnHeaderSections.count,
                                n = this._dataModel.rowCount('body') - e,
                                s = this._dataModel.columnCount('body') - i,
                                a =
                                    this._dataModel.columnCount('row-header') -
                                    o,
                                l =
                                    this._dataModel.rowCount('column-header') -
                                    r;
                            n > 0
                                ? this._rowSections.insert(e, n)
                                : n < 0 && this._rowSections.remove(e + n, -n),
                                s > 0
                                    ? this._columnSections.insert(i, s)
                                    : s < 0 &&
                                      this._columnSections.remove(i + s, -s),
                                a > 0
                                    ? this._rowHeaderSections.insert(o, a)
                                    : a < 0 &&
                                      this._rowHeaderSections.remove(o + a, -a),
                                l > 0
                                    ? this._columnHeaderSections.insert(r, l)
                                    : l < 0 &&
                                      this._columnHeaderSections.remove(
                                          r + l,
                                          -l
                                      ),
                                this._syncViewport();
                        }),
                        (e.prototype._onRenderersChanged = function() {
                            this.repaintContent();
                        }),
                        (e.prototype._evtKeyDown = function(t) {
                            this._mousedown
                                ? (t.preventDefault(), t.stopPropagation())
                                : this._keyHandler &&
                                  this._keyHandler.onKeyDown(this, t);
                        }),
                        (e.prototype._evtMouseDown = function(t) {
                            0 === t.button &&
                                (this.activate(),
                                t.preventDefault(),
                                t.stopPropagation(),
                                document.addEventListener('keydown', this, !0),
                                document.addEventListener('mouseup', this, !0),
                                document.addEventListener(
                                    'mousedown',
                                    this,
                                    !0
                                ),
                                document.addEventListener(
                                    'mousemove',
                                    this,
                                    !0
                                ),
                                document.addEventListener(
                                    'contextmenu',
                                    this,
                                    !0
                                ),
                                (this._mousedown = !0),
                                this._mouseHandler &&
                                    this._mouseHandler.onMouseDown(this, t));
                        }),
                        (e.prototype._evtMouseMove = function(t) {
                            this._mousedown &&
                                (t.preventDefault(), t.stopPropagation()),
                                this._mouseHandler &&
                                    (this._mousedown
                                        ? this._mouseHandler.onMouseMove(
                                              this,
                                              t
                                          )
                                        : this._mouseHandler.onMouseHover(
                                              this,
                                              t
                                          ));
                        }),
                        (e.prototype._evtMouseUp = function(t) {
                            0 === t.button &&
                                (t.preventDefault(),
                                t.stopPropagation(),
                                this._mouseHandler &&
                                    this._mouseHandler.onMouseUp(this, t),
                                this._releaseMouse());
                        }),
                        (e.prototype._evtMouseDoubleClick = function(t) {
                            0 === t.button &&
                                (t.preventDefault(),
                                t.stopPropagation(),
                                this._mouseHandler &&
                                    this._mouseHandler.onMouseDoubleClick(
                                        this,
                                        t
                                    ),
                                this._releaseMouse());
                        }),
                        (e.prototype._evtMouseLeave = function(t) {
                            this._mousedown
                                ? (t.preventDefault(), t.stopPropagation())
                                : this._mouseHandler &&
                                  this._mouseHandler.onMouseLeave(this, t);
                        }),
                        (e.prototype._evtContextMenu = function(t) {
                            this._mousedown
                                ? (t.preventDefault(), t.stopPropagation())
                                : this._mouseHandler &&
                                  this._mouseHandler.onContextMenu(this, t);
                        }),
                        (e.prototype._evtWheel = function(t) {
                            o.Platform.accelKey(t) ||
                                (this._mouseHandler &&
                                    (t.preventDefault(),
                                    t.stopPropagation(),
                                    this._mouseHandler.onWheel(this, t)));
                        }),
                        (e.prototype._releaseMouse = function() {
                            (this._mousedown = !1),
                                this._mouseHandler &&
                                    this._mouseHandler.release(),
                                document.removeEventListener(
                                    'keydown',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'mouseup',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'mousedown',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'mousemove',
                                    this,
                                    !0
                                ),
                                document.removeEventListener(
                                    'contextmenu',
                                    this,
                                    !0
                                );
                        }),
                        (e.prototype._refreshDPI = function() {
                            var t = Math.ceil(window.devicePixelRatio);
                            this._dpiRatio !== t &&
                                ((this._dpiRatio = t),
                                this.repaintContent(),
                                this.repaintOverlay(),
                                this._resizeCanvasIfNeeded(
                                    this._viewportWidth,
                                    this._viewportHeight
                                ),
                                (this._canvas.style.width =
                                    this._canvas.width / this._dpiRatio + 'px'),
                                (this._canvas.style.height =
                                    this._canvas.height / this._dpiRatio +
                                    'px'),
                                (this._overlay.style.width =
                                    this._overlay.width / this._dpiRatio +
                                    'px'),
                                (this._overlay.style.height =
                                    this._overlay.height / this._dpiRatio +
                                    'px'));
                        }),
                        (e.prototype._resizeRow = function(t, e) {
                            var i = this._rowSections;
                            if (!(t < 0 || t >= i.count)) {
                                var o = i.sizeOf(t),
                                    r = i.clampSize(e);
                                if (o !== r) {
                                    i.resize(t, r);
                                    var n = this._viewportWidth,
                                        s = this._viewportHeight;
                                    if (
                                        this._viewport.isVisible &&
                                        0 !== n &&
                                        0 !== s
                                    ) {
                                        if (
                                            J.shouldPaintEverything(
                                                this._dataModel
                                            )
                                        )
                                            return (
                                                this.paintContent(0, 0, n, s),
                                                this._paintOverlay(),
                                                void this._syncScrollState()
                                            );
                                        var a = r - o,
                                            l = this.headerHeight,
                                            h =
                                                i.offsetOf(t) +
                                                l -
                                                this._scrollY;
                                        if (l >= s || h >= s)
                                            this._syncScrollState();
                                        else {
                                            if (h + o <= l)
                                                return (
                                                    (this._scrollY += a),
                                                    void this._syncScrollState()
                                                );
                                            var c = Math.max(l, h);
                                            if (h + o >= s || h + r >= s)
                                                return (
                                                    this.paintContent(
                                                        0,
                                                        c,
                                                        n,
                                                        s - c
                                                    ),
                                                    this._paintOverlay(),
                                                    void this._syncScrollState()
                                                );
                                            var u,
                                                d,
                                                p,
                                                f = n;
                                            if (
                                                (h + r <= l
                                                    ? ((d = s - (u = l - a)),
                                                      (p = l))
                                                    : ((d = s - (u = h + o)),
                                                      (p = u + a)),
                                                this._blitContent(
                                                    this._canvas,
                                                    0,
                                                    u,
                                                    f,
                                                    d,
                                                    0,
                                                    p
                                                ),
                                                r > 0 &&
                                                    h + r > l &&
                                                    this.paintContent(
                                                        0,
                                                        c,
                                                        n,
                                                        h + r - c
                                                    ),
                                                this._stretchLastRow &&
                                                    this.pageHeight >
                                                        this.bodyHeight)
                                            ) {
                                                var _ =
                                                        this._rowSections
                                                            .count - 1,
                                                    m =
                                                        l +
                                                        this._rowSections.offsetOf(
                                                            _
                                                        );
                                                this.paintContent(
                                                    0,
                                                    m,
                                                    n,
                                                    s - m
                                                );
                                            } else
                                                a < 0 &&
                                                    this.paintContent(
                                                        0,
                                                        s + a,
                                                        n,
                                                        -a
                                                    );
                                            this._paintOverlay(),
                                                this._syncScrollState();
                                        }
                                    } else this._syncScrollState();
                                }
                            }
                        }),
                        (e.prototype._resizeColumn = function(t, e) {
                            var i = this._columnSections;
                            if (!(t < 0 || t >= i.count)) {
                                var o = i.sizeOf(t),
                                    r = i.clampSize(e);
                                if (o !== r) {
                                    i.resize(t, r);
                                    var n = this._viewportWidth,
                                        s = this._viewportHeight;
                                    if (
                                        this._viewport.isVisible &&
                                        0 !== n &&
                                        0 !== s
                                    ) {
                                        if (
                                            J.shouldPaintEverything(
                                                this._dataModel
                                            )
                                        )
                                            return (
                                                this.paintContent(0, 0, n, s),
                                                this._paintOverlay(),
                                                void this._syncScrollState()
                                            );
                                        var a = r - o,
                                            l = this.headerWidth,
                                            h =
                                                i.offsetOf(t) +
                                                l -
                                                this._scrollX;
                                        if (l >= n || h >= n)
                                            this._syncScrollState();
                                        else {
                                            if (h + o <= l)
                                                return (
                                                    (this._scrollX += a),
                                                    void this._syncScrollState()
                                                );
                                            var c = Math.max(l, h);
                                            if (h + o >= n || h + r >= n)
                                                return (
                                                    this.paintContent(
                                                        c,
                                                        0,
                                                        n - c,
                                                        s
                                                    ),
                                                    this._paintOverlay(),
                                                    void this._syncScrollState()
                                                );
                                            var u,
                                                d,
                                                p,
                                                f = s;
                                            if (
                                                (h + r <= l
                                                    ? ((d = n - (u = l - a)),
                                                      (p = l))
                                                    : ((d = n - (u = h + o)),
                                                      (p = u + a)),
                                                this._blitContent(
                                                    this._canvas,
                                                    u,
                                                    0,
                                                    d,
                                                    f,
                                                    p,
                                                    0
                                                ),
                                                r > 0 &&
                                                    h + r > l &&
                                                    this.paintContent(
                                                        c,
                                                        0,
                                                        h + r - c,
                                                        s
                                                    ),
                                                this._stretchLastColumn &&
                                                    this.pageWidth >
                                                        this.bodyWidth)
                                            ) {
                                                var _ =
                                                        this._columnSections
                                                            .count - 1,
                                                    m =
                                                        l +
                                                        this._columnSections.offsetOf(
                                                            _
                                                        );
                                                this.paintContent(
                                                    m,
                                                    0,
                                                    n - m,
                                                    s
                                                );
                                            } else
                                                a < 0 &&
                                                    this.paintContent(
                                                        n + a,
                                                        0,
                                                        -a,
                                                        s
                                                    );
                                            this._paintOverlay(),
                                                this._syncScrollState();
                                        }
                                    } else this._syncScrollState();
                                }
                            }
                        }),
                        (e.prototype._resizeRowHeader = function(t, e) {
                            var i = this._rowHeaderSections;
                            if (!(t < 0 || t >= i.count)) {
                                var o = i.sizeOf(t),
                                    r = i.clampSize(e);
                                if (o !== r) {
                                    i.resize(t, r);
                                    var n = this._viewportWidth,
                                        s = this._viewportHeight;
                                    if (
                                        this._viewport.isVisible &&
                                        0 !== n &&
                                        0 !== s
                                    ) {
                                        if (
                                            J.shouldPaintEverything(
                                                this._dataModel
                                            )
                                        )
                                            return (
                                                this.paintContent(0, 0, n, s),
                                                this._paintOverlay(),
                                                void this._syncScrollState()
                                            );
                                        var a = r - o,
                                            l = i.offsetOf(t);
                                        if (l >= n) this._syncScrollState();
                                        else {
                                            if (l + o >= n || l + r >= n)
                                                return (
                                                    this.paintContent(
                                                        l,
                                                        0,
                                                        n - l,
                                                        s
                                                    ),
                                                    this._paintOverlay(),
                                                    void this._syncScrollState()
                                                );
                                            var h = l + o,
                                                c = n - h,
                                                u = s,
                                                d = h + a;
                                            if (
                                                (this._blitContent(
                                                    this._canvas,
                                                    h,
                                                    0,
                                                    c,
                                                    u,
                                                    d,
                                                    0
                                                ),
                                                r > 0 &&
                                                    this.paintContent(
                                                        l,
                                                        0,
                                                        r,
                                                        s
                                                    ),
                                                this._stretchLastColumn &&
                                                    this.pageWidth >
                                                        this.bodyWidth)
                                            ) {
                                                var p =
                                                        this._columnSections
                                                            .count - 1,
                                                    f =
                                                        this.headerWidth +
                                                        this._columnSections.offsetOf(
                                                            p
                                                        );
                                                this.paintContent(
                                                    f,
                                                    0,
                                                    n - f,
                                                    s
                                                );
                                            } else
                                                a < 0 &&
                                                    this.paintContent(
                                                        n + a,
                                                        0,
                                                        1 - a,
                                                        s
                                                    );
                                            this._paintOverlay(),
                                                this._syncScrollState();
                                        }
                                    } else this._syncScrollState();
                                }
                            }
                        }),
                        (e.prototype._resizeColumnHeader = function(t, e) {
                            var i = this._columnHeaderSections;
                            if (!(t < 0 || t >= i.count)) {
                                var o = i.sizeOf(t),
                                    r = i.clampSize(e);
                                if (o !== r) {
                                    i.resize(t, r);
                                    var n = this._viewportWidth,
                                        s = this._viewportHeight;
                                    if (
                                        this._viewport.isVisible &&
                                        0 !== n &&
                                        0 !== s
                                    ) {
                                        if (
                                            J.shouldPaintEverything(
                                                this._dataModel
                                            )
                                        )
                                            return (
                                                this.paintContent(0, 0, n, s),
                                                this._paintOverlay(),
                                                void this._syncScrollState()
                                            );
                                        this._paintOverlay();
                                        var a = r - o,
                                            l = i.offsetOf(t);
                                        if (l >= s) this._syncScrollState();
                                        else {
                                            if (l + o >= s || l + r >= s)
                                                return (
                                                    this.paintContent(
                                                        0,
                                                        l,
                                                        n,
                                                        s - l
                                                    ),
                                                    this._paintOverlay(),
                                                    void this._syncScrollState()
                                                );
                                            var h = l + o,
                                                c = n,
                                                u = s - h,
                                                d = h + a;
                                            if (
                                                (this._blitContent(
                                                    this._canvas,
                                                    0,
                                                    h,
                                                    c,
                                                    u,
                                                    0,
                                                    d
                                                ),
                                                r > 0 &&
                                                    this.paintContent(
                                                        0,
                                                        l,
                                                        n,
                                                        r
                                                    ),
                                                this._stretchLastRow &&
                                                    this.pageHeight >
                                                        this.bodyHeight)
                                            ) {
                                                var p =
                                                        this._rowSections
                                                            .count - 1,
                                                    f =
                                                        this.headerHeight +
                                                        this._rowSections.offsetOf(
                                                            p
                                                        );
                                                this.paintContent(
                                                    0,
                                                    f,
                                                    n,
                                                    s - f
                                                );
                                            } else
                                                a < 0 &&
                                                    this.paintContent(
                                                        0,
                                                        s + a,
                                                        n,
                                                        1 - a
                                                    );
                                            this._paintOverlay(),
                                                this._syncScrollState();
                                        }
                                    } else this._syncScrollState();
                                }
                            }
                        }),
                        (e.prototype._scrollTo = function(t, e) {
                            if (this.dataModel) {
                                (t = Math.max(
                                    0,
                                    Math.min(Math.floor(t), this.maxScrollX)
                                )),
                                    (e = Math.max(
                                        0,
                                        Math.min(Math.floor(e), this.maxScrollY)
                                    )),
                                    (this._hScrollBar.value = t),
                                    (this._vScrollBar.value = e);
                                var i = t - this._scrollX,
                                    o = e - this._scrollY;
                                if (0 !== i || 0 !== o) {
                                    if (!this._viewport.isVisible)
                                        return (
                                            (this._scrollX = t),
                                            void (this._scrollY = e)
                                        );
                                    var r = this._viewportWidth,
                                        n = this._viewportHeight;
                                    if (0 === r || 0 === n)
                                        return (
                                            (this._scrollX = t),
                                            void (this._scrollY = e)
                                        );
                                    var s = this.headerWidth,
                                        a = this.headerHeight,
                                        l = r - s,
                                        h = n - a;
                                    if (l <= 0 && h <= 0)
                                        return (
                                            (this._scrollX = t),
                                            void (this._scrollY = e)
                                        );
                                    var c = 0;
                                    0 !== i &&
                                        l > 0 &&
                                        (c =
                                            Math.abs(i) >= l
                                                ? l * n
                                                : Math.abs(i) * n);
                                    var u = 0;
                                    if (
                                        (0 !== o &&
                                            h > 0 &&
                                            (u =
                                                Math.abs(o) >= h
                                                    ? r * h
                                                    : r * Math.abs(o)),
                                        c + u >= r * n)
                                    )
                                        return (
                                            (this._scrollX = t),
                                            (this._scrollY = e),
                                            this.paintContent(0, 0, r, n),
                                            void this._paintOverlay()
                                        );
                                    if (((this._scrollY = e), 0 !== o && h > 0))
                                        if (Math.abs(o) >= h)
                                            this.paintContent(0, a, r, h);
                                        else {
                                            var d = o < 0 ? a : a + o,
                                                p = r,
                                                f = h - Math.abs(o);
                                            this._blitContent(
                                                this._canvas,
                                                0,
                                                d,
                                                p,
                                                f,
                                                0,
                                                d - o
                                            ),
                                                this.paintContent(
                                                    0,
                                                    o < 0 ? a : n - o,
                                                    r,
                                                    Math.abs(o)
                                                );
                                        }
                                    if (((this._scrollX = t), 0 !== i && l > 0))
                                        if (Math.abs(i) >= l)
                                            this.paintContent(s, 0, l, n);
                                        else {
                                            var _ = i < 0 ? s : s + i;
                                            (p = l - Math.abs(i)),
                                                (f = n),
                                                this._blitContent(
                                                    this._canvas,
                                                    _,
                                                    0,
                                                    p,
                                                    f,
                                                    _ - i,
                                                    0
                                                ),
                                                this.paintContent(
                                                    i < 0 ? s : r - i,
                                                    0,
                                                    Math.abs(i),
                                                    n
                                                );
                                        }
                                    this._paintOverlay();
                                }
                            }
                        }),
                        (e.prototype._blitContent = function(
                            t,
                            e,
                            i,
                            o,
                            r,
                            n,
                            s
                        ) {
                            (e *= this._dpiRatio),
                                (i *= this._dpiRatio),
                                (o *= this._dpiRatio),
                                (r *= this._dpiRatio),
                                (n *= this._dpiRatio),
                                (s *= this._dpiRatio),
                                this._canvasGC.save(),
                                this._canvasGC.setTransform(1, 0, 0, 1, 0, 0),
                                this._canvasGC.drawImage(
                                    t,
                                    e,
                                    i,
                                    o,
                                    r,
                                    n,
                                    s,
                                    o,
                                    r
                                ),
                                this._canvasGC.restore();
                        }),
                        (e.prototype.paintContent = function(t, e, i, o) {
                            this._canvasGC.setTransform(
                                this._dpiRatio,
                                0,
                                0,
                                this._dpiRatio,
                                0,
                                0
                            ),
                                this._bufferGC.setTransform(
                                    this._dpiRatio,
                                    0,
                                    0,
                                    this._dpiRatio,
                                    0,
                                    0
                                ),
                                this._canvasGC.clearRect(t, e, i, o),
                                this._drawVoidRegion(t, e, i, o),
                                this._drawBodyRegion(t, e, i, o),
                                this._drawRowHeaderRegion(t, e, i, o),
                                this._drawColumnHeaderRegion(t, e, i, o),
                                this.drawCornerHeaderRegion(t, e, i, o);
                        }),
                        (e.prototype._fitBodyColumnHeaders = function(t, e, i) {
                            for (
                                var o =
                                        void 0 === i
                                            ? t.columnCount('body')
                                            : i,
                                    r = 0;
                                r < o;
                                r++
                            ) {
                                for (
                                    var n = t.rowCount('column-header'),
                                        s = 0,
                                        a = 0;
                                    a < n;
                                    a++
                                ) {
                                    var l = t.data('column-header', a, r),
                                        h = {
                                            x: 0,
                                            y: 0,
                                            width: 0,
                                            height: 0,
                                            region: 'column-header',
                                            row: 0,
                                            column: r,
                                            value: null,
                                            metadata: V.emptyMetadata,
                                        },
                                        c = this.cellRenderers.get(h),
                                        u = this.canvasGC;
                                    u.font = _.resolveOption(c.font, h);
                                    var d = u.measureText(l).width;
                                    s = Math.max(s, d);
                                }
                                this.resizeColumn('body', r, s + e);
                            }
                        }),
                        (e.prototype._fitRowColumnHeaders = function(t, e, i) {
                            for (
                                var o =
                                        void 0 === i
                                            ? t.columnCount('row-header')
                                            : i,
                                    r = 0;
                                r < o;
                                r++
                            ) {
                                for (
                                    var n = t.rowCount('column-header'),
                                        s = 0,
                                        a = 0;
                                    a < n;
                                    a++
                                ) {
                                    var l = t.data('corner-header', a, r),
                                        h = {
                                            x: 0,
                                            y: 0,
                                            width: 0,
                                            height: 0,
                                            region: 'column-header',
                                            row: 0,
                                            column: r,
                                            value: null,
                                            metadata: V.emptyMetadata,
                                        },
                                        c = this.cellRenderers.get(h),
                                        u = this.canvasGC;
                                    u.font = _.resolveOption(c.font, h);
                                    var d = u.measureText(l).width;
                                    s = Math.max(s, d);
                                }
                                this.resizeColumn('row-header', r, s + e);
                            }
                        }),
                        (e.prototype._paintOverlay = function() {
                            this._overlayGC.setTransform(
                                this._dpiRatio,
                                0,
                                0,
                                this._dpiRatio,
                                0,
                                0
                            ),
                                this._overlayGC.clearRect(
                                    0,
                                    0,
                                    this._overlay.width,
                                    this._overlay.height
                                ),
                                this._drawBodySelections(),
                                this._drawRowHeaderSelections(),
                                this._drawColumnHeaderSelections(),
                                this._drawCursor(),
                                this._drawShadows();
                        }),
                        (e.prototype._drawVoidRegion = function(t, e, i, o) {
                            var r = this._style.voidColor;
                            r &&
                                ((this._canvasGC.fillStyle = r),
                                this._canvasGC.fillRect(t, e, i, o));
                        }),
                        (e.prototype._drawBodyRegion = function(t, e, i, o) {
                            var r = this._columnSections.length - this._scrollX,
                                n = this._rowSections.length - this._scrollY;
                            if (!(r <= 0 || n <= 0)) {
                                var s = this.headerWidth,
                                    a = this.headerHeight;
                                if (
                                    !(
                                        t + i <= s ||
                                        e + o <= a ||
                                        t >= s + r ||
                                        e >= a + n
                                    )
                                ) {
                                    var l = this.bodyHeight,
                                        h = this.bodyWidth,
                                        c = this.pageHeight,
                                        u = this.pageWidth,
                                        d = Math.max(t, s),
                                        p = Math.max(e, a),
                                        f = Math.min(t + i - 1, s + r - 1),
                                        _ = Math.min(e + o - 1, a + n - 1),
                                        m = this._rowSections.indexOf(
                                            p - a + this._scrollY
                                        ),
                                        v = this._columnSections.indexOf(
                                            d - s + this._scrollX
                                        ),
                                        y = this._rowSections.indexOf(
                                            _ - a + this._scrollY
                                        ),
                                        g = this._columnSections.indexOf(
                                            f - s + this._scrollX
                                        ),
                                        w = this._rowSections.count - 1,
                                        b = this._columnSections.count - 1;
                                    y < 0 && (y = w), g < 0 && (g = b);
                                    for (
                                        var C =
                                                this._columnSections.offsetOf(
                                                    v
                                                ) +
                                                s -
                                                this._scrollX,
                                            x =
                                                this._rowSections.offsetOf(m) +
                                                a -
                                                this._scrollY,
                                            S = 0,
                                            M = 0,
                                            O = new Array(y - m + 1),
                                            H = new Array(g - v + 1),
                                            z = m;
                                        z <= y;
                                        ++z
                                    ) {
                                        var R = this._rowSections.sizeOf(z);
                                        (O[z - m] = R), (M += R);
                                    }
                                    for (var E = v; E <= g; ++E)
                                        (R = this._columnSections.sizeOf(E)),
                                            (H[E - v] = R),
                                            (S += R);
                                    if (
                                        this._stretchLastRow &&
                                        c > l &&
                                        y === w
                                    ) {
                                        var k =
                                            this.pageHeight - this.bodyHeight;
                                        (O[O.length - 1] += k),
                                            (M += k),
                                            (_ += k);
                                    }
                                    if (
                                        this._stretchLastColumn &&
                                        u > h &&
                                        g === b
                                    ) {
                                        var L = this.pageWidth - this.bodyWidth;
                                        (H[H.length - 1] += L),
                                            (S += L),
                                            (f += L);
                                    }
                                    var P = {
                                        region: 'body',
                                        xMin: d,
                                        yMin: p,
                                        xMax: f,
                                        yMax: _,
                                        x: C,
                                        y: x,
                                        width: S,
                                        height: M,
                                        row: m,
                                        column: v,
                                        rowSizes: O,
                                        columnSizes: H,
                                    };
                                    this._drawBackground(
                                        P,
                                        this._style.backgroundColor
                                    ),
                                        this._drawRowBackground(
                                            P,
                                            this._style.rowBackgroundColor
                                        ),
                                        this._drawColumnBackground(
                                            P,
                                            this._style.columnBackgroundColor
                                        ),
                                        this._drawCells(P),
                                        this._drawHorizontalGridLines(
                                            P,
                                            this._style
                                                .horizontalGridLineColor ||
                                                this._style.gridLineColor
                                        ),
                                        this._drawVerticalGridLines(
                                            P,
                                            this._style.verticalGridLineColor ||
                                                this._style.gridLineColor
                                        );
                                }
                            }
                        }),
                        (e.prototype._drawRowHeaderRegion = function(
                            t,
                            e,
                            i,
                            o
                        ) {
                            var r = this.headerWidth,
                                n = this.bodyHeight - this._scrollY;
                            if (!(r <= 0 || n <= 0)) {
                                var s = this.headerHeight;
                                if (
                                    !(
                                        t + i <= 0 ||
                                        e + o <= s ||
                                        t >= 0 + r ||
                                        e >= s + n
                                    )
                                ) {
                                    var a = this.bodyHeight,
                                        l = this.pageHeight,
                                        h = t,
                                        c = Math.max(e, s),
                                        u = Math.min(t + i - 1, 0 + r - 1),
                                        d = Math.min(e + o - 1, s + n - 1),
                                        p = this._rowSections.indexOf(
                                            c - s + this._scrollY
                                        ),
                                        f = this._rowHeaderSections.indexOf(h),
                                        _ = this._rowSections.indexOf(
                                            d - s + this._scrollY
                                        ),
                                        m = this._rowHeaderSections.indexOf(u),
                                        v = this._rowSections.count - 1,
                                        y = this._rowHeaderSections.count - 1;
                                    _ < 0 && (_ = v), m < 0 && (m = y);
                                    for (
                                        var g = this._rowHeaderSections.offsetOf(
                                                f
                                            ),
                                            w =
                                                this._rowSections.offsetOf(p) +
                                                s -
                                                this._scrollY,
                                            b = 0,
                                            C = 0,
                                            x = new Array(_ - p + 1),
                                            S = new Array(m - f + 1),
                                            M = p;
                                        M <= _;
                                        ++M
                                    ) {
                                        var O = this._rowSections.sizeOf(M);
                                        (x[M - p] = O), (C += O);
                                    }
                                    for (var H = f; H <= m; ++H)
                                        (O = this._rowHeaderSections.sizeOf(H)),
                                            (S[H - f] = O),
                                            (b += O);
                                    if (
                                        this._stretchLastRow &&
                                        l > a &&
                                        _ === v
                                    ) {
                                        var z =
                                            this.pageHeight - this.bodyHeight;
                                        (x[x.length - 1] += z),
                                            (C += z),
                                            (d += z);
                                    }
                                    var R = {
                                        region: 'row-header',
                                        xMin: h,
                                        yMin: c,
                                        xMax: u,
                                        yMax: d,
                                        x: g,
                                        y: w,
                                        width: b,
                                        height: C,
                                        row: p,
                                        column: f,
                                        rowSizes: x,
                                        columnSizes: S,
                                    };
                                    this._drawBackground(
                                        R,
                                        this._style.headerBackgroundColor
                                    ),
                                        this._drawCells(R),
                                        this._drawHorizontalGridLines(
                                            R,
                                            this._style
                                                .headerHorizontalGridLineColor ||
                                                this._style.headerGridLineColor
                                        ),
                                        this._drawVerticalGridLines(
                                            R,
                                            this._style
                                                .headerVerticalGridLineColor ||
                                                this._style.headerGridLineColor
                                        );
                                }
                            }
                        }),
                        (e.prototype._drawColumnHeaderRegion = function(
                            t,
                            e,
                            i,
                            o
                        ) {
                            var r = this.bodyWidth - this._scrollX,
                                n = this.headerHeight;
                            if (!(r <= 0 || n <= 0)) {
                                var s = this.headerWidth;
                                if (
                                    !(
                                        t + i <= s ||
                                        e + o <= 0 ||
                                        t >= s + r ||
                                        e >= 0 + n
                                    )
                                ) {
                                    var a = this.bodyWidth,
                                        l = this.pageWidth,
                                        h = Math.max(t, s),
                                        c = e,
                                        u = Math.min(t + i - 1, s + r - 1),
                                        d = Math.min(e + o - 1, 0 + n - 1),
                                        p = this._columnHeaderSections.indexOf(
                                            c
                                        ),
                                        f = this._columnSections.indexOf(
                                            h - s + this._scrollX
                                        ),
                                        _ = this._columnHeaderSections.indexOf(
                                            d
                                        ),
                                        m = this._columnSections.indexOf(
                                            u - s + this._scrollX
                                        ),
                                        v =
                                            this._columnHeaderSections.count -
                                            1,
                                        y = this._columnSections.count - 1;
                                    _ < 0 && (_ = v), m < 0 && (m = y);
                                    for (
                                        var g =
                                                this._columnSections.offsetOf(
                                                    f
                                                ) +
                                                s -
                                                this._scrollX,
                                            w = this._columnHeaderSections.offsetOf(
                                                p
                                            ),
                                            b = 0,
                                            C = 0,
                                            x = new Array(_ - p + 1),
                                            S = new Array(m - f + 1),
                                            M = p;
                                        M <= _;
                                        ++M
                                    ) {
                                        var O = this._columnHeaderSections.sizeOf(
                                            M
                                        );
                                        (x[M - p] = O), (C += O);
                                    }
                                    for (var H = f; H <= m; ++H)
                                        (O = this._columnSections.sizeOf(H)),
                                            (S[H - f] = O),
                                            (b += O);
                                    if (
                                        this._stretchLastColumn &&
                                        l > a &&
                                        m === y
                                    ) {
                                        var z = this.pageWidth - this.bodyWidth;
                                        (S[S.length - 1] += z),
                                            (b += z),
                                            (u += z);
                                    }
                                    var R = {
                                        region: 'column-header',
                                        xMin: h,
                                        yMin: c,
                                        xMax: u,
                                        yMax: d,
                                        x: g,
                                        y: w,
                                        width: b,
                                        height: C,
                                        row: p,
                                        column: f,
                                        rowSizes: x,
                                        columnSizes: S,
                                    };
                                    this._drawBackground(
                                        R,
                                        this._style.headerBackgroundColor
                                    ),
                                        this._drawCells(R),
                                        this._drawHorizontalGridLines(
                                            R,
                                            this._style
                                                .headerHorizontalGridLineColor ||
                                                this._style.headerGridLineColor
                                        ),
                                        this._drawVerticalGridLines(
                                            R,
                                            this._style
                                                .headerVerticalGridLineColor ||
                                                this._style.headerGridLineColor
                                        );
                                }
                            }
                        }),
                        (e.prototype.drawCornerHeaderRegion = function(
                            t,
                            e,
                            i,
                            o
                        ) {
                            var r = this.headerWidth,
                                n = this.headerHeight;
                            if (
                                !(
                                    r <= 0 ||
                                    n <= 0 ||
                                    t + i <= 0 ||
                                    e + o <= 0 ||
                                    t >= 0 + r ||
                                    e >= 0 + n
                                )
                            ) {
                                var s = t,
                                    a = e,
                                    l = Math.min(t + i - 1, 0 + r - 1),
                                    h = Math.min(e + o - 1, 0 + n - 1),
                                    c = this._columnHeaderSections.indexOf(a),
                                    u = this._rowHeaderSections.indexOf(s),
                                    d = this._columnHeaderSections.indexOf(h),
                                    p = this._rowHeaderSections.indexOf(l);
                                d < 0 &&
                                    (d = this._columnHeaderSections.count - 1),
                                    p < 0 &&
                                        (p = this._rowHeaderSections.count - 1);
                                for (
                                    var f = this._rowHeaderSections.offsetOf(u),
                                        _ = this._columnHeaderSections.offsetOf(
                                            c
                                        ),
                                        m = 0,
                                        v = 0,
                                        y = new Array(d - c + 1),
                                        g = new Array(p - u + 1),
                                        w = c;
                                    w <= d;
                                    ++w
                                ) {
                                    var b = this._columnHeaderSections.sizeOf(
                                        w
                                    );
                                    (y[w - c] = b), (v += b);
                                }
                                for (var C = u; C <= p; ++C)
                                    (b = this._rowHeaderSections.sizeOf(C)),
                                        (g[C - u] = b),
                                        (m += b);
                                var x = {
                                    region: 'corner-header',
                                    xMin: s,
                                    yMin: a,
                                    xMax: l,
                                    yMax: h,
                                    x: f,
                                    y: _,
                                    width: m,
                                    height: v,
                                    row: c,
                                    column: u,
                                    rowSizes: y,
                                    columnSizes: g,
                                };
                                this._drawBackground(
                                    x,
                                    this._style.headerBackgroundColor
                                ),
                                    this._drawCells(x),
                                    this._drawHorizontalGridLines(
                                        x,
                                        this._style
                                            .headerHorizontalGridLineColor ||
                                            this._style.headerGridLineColor
                                    ),
                                    this._drawVerticalGridLines(
                                        x,
                                        this._style
                                            .headerVerticalGridLineColor ||
                                            this._style.headerGridLineColor
                                    );
                            }
                        }),
                        (e.prototype._drawBackground = function(t, e) {
                            if (e) {
                                var i = t.xMin,
                                    o = t.yMin,
                                    r = t.xMax,
                                    n = t.yMax;
                                (this._canvasGC.fillStyle = e),
                                    this._canvasGC.fillRect(
                                        i,
                                        o,
                                        r - i + 1,
                                        n - o + 1
                                    );
                            }
                        }),
                        (e.prototype._drawRowBackground = function(t, e) {
                            if (e)
                                for (
                                    var i = Math.max(t.xMin, t.x),
                                        o = Math.min(t.x + t.width - 1, t.xMax),
                                        r = t.y,
                                        n = 0,
                                        s = t.rowSizes.length;
                                    n < s;
                                    ++n
                                ) {
                                    var a = t.rowSizes[n];
                                    if (0 !== a) {
                                        var l = e(t.row + n);
                                        if (l) {
                                            var h = Math.max(t.yMin, r),
                                                c = Math.min(r + a - 1, t.yMax);
                                            (this._canvasGC.fillStyle = l),
                                                this._canvasGC.fillRect(
                                                    i,
                                                    h,
                                                    o - i + 1,
                                                    c - h + 1
                                                );
                                        }
                                        r += a;
                                    }
                                }
                        }),
                        (e.prototype._drawColumnBackground = function(t, e) {
                            if (e)
                                for (
                                    var i = Math.max(t.yMin, t.y),
                                        o = Math.min(
                                            t.y + t.height - 1,
                                            t.yMax
                                        ),
                                        r = t.x,
                                        n = 0,
                                        s = t.columnSizes.length;
                                    n < s;
                                    ++n
                                ) {
                                    var a = t.columnSizes[n];
                                    if (0 !== a) {
                                        var l = e(t.column + n);
                                        if (l) {
                                            var h = Math.max(t.xMin, r),
                                                c = Math.min(r + a - 1, t.xMax);
                                            (this._canvasGC.fillStyle = l),
                                                this._canvasGC.fillRect(
                                                    h,
                                                    i,
                                                    c - h + 1,
                                                    o - i + 1
                                                );
                                        }
                                        r += a;
                                    }
                                }
                        }),
                        (e.prototype._getColumnSize = function(t, e) {
                            return 'corner-header' === t
                                ? this._rowHeaderSections.sizeOf(e)
                                : this.columnSize(t, e);
                        }),
                        (e.prototype._getRowSize = function(t, e) {
                            return 'corner-header' === t
                                ? this._columnHeaderSections.sizeOf(e)
                                : this.rowSize(t, e);
                        }),
                        (e.prototype._drawCells = function(t) {
                            if (this._dataModel) {
                                var e = y.getCellGroupsAtColumn(
                                        this._dataModel,
                                        t.region,
                                        t.column
                                    ),
                                    i = y.getCellGroupsAtRow(
                                        this._dataModel,
                                        t.region,
                                        t.row
                                    );
                                t = c.JSONExt.deepCopy(t);
                                for (
                                    var o = y.joinCellGroupWithMergedCellGroups(
                                            this.dataModel,
                                            {
                                                r1: t.row,
                                                r2:
                                                    t.row +
                                                    t.rowSizes.length -
                                                    1,
                                                c1: t.column,
                                                c2:
                                                    t.column +
                                                    t.columnSizes.length -
                                                    1,
                                            },
                                            t.region
                                        ),
                                        r = o.r1;
                                    r < t.row;
                                    r++
                                ) {
                                    var n = this._getRowSize(t.region, r);
                                    (t.y -= n),
                                        (t.rowSizes = [n].concat(t.rowSizes));
                                }
                                t.row = o.r1;
                                for (var s = o.c1; s < t.column; s++) {
                                    var a = this._getColumnSize(t.region, s);
                                    (t.x -= a),
                                        (t.columnSizes = [a].concat(
                                            t.columnSizes
                                        ));
                                }
                                t.column = o.c1;
                                var l = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0,
                                        region: t.region,
                                        row: 0,
                                        column: 0,
                                        value: null,
                                        metadata: V.emptyMetadata,
                                    },
                                    h = -1;
                                this._bufferGC.save();
                                for (
                                    var u = new K(this._bufferGC),
                                        d = 0,
                                        p = t.x,
                                        f = 0,
                                        _ = t.columnSizes.length;
                                    f < _;
                                    ++f
                                ) {
                                    var m,
                                        v = 0,
                                        g = t.columnSizes[f];
                                    if (0 !== g) {
                                        m = g;
                                        var w = t.column + f;
                                        (l.x = p),
                                            (l.width = g),
                                            (l.column = w);
                                        for (
                                            var b = t.y,
                                                C = 0,
                                                x = t.rowSizes.length;
                                            C < x;
                                            ++C
                                        )
                                            if (0 !== (d = t.rowSizes[C])) {
                                                var S = t.row + C;
                                                if (
                                                    ((v = d),
                                                    -1 !==
                                                        (h = y.getGroupIndex(
                                                            this.dataModel,
                                                            l.region,
                                                            S,
                                                            w
                                                        )))
                                                ) {
                                                    var M = this.dataModel.group(
                                                        l.region,
                                                        h
                                                    );
                                                    if (
                                                        M.r1 !== S ||
                                                        M.c1 !== w
                                                    ) {
                                                        b += v;
                                                        continue;
                                                    }
                                                    for (
                                                        g = 0, s = M.c1;
                                                        s <= M.c2;
                                                        s++
                                                    )
                                                        g += this._getColumnSize(
                                                            l.region,
                                                            s
                                                        );
                                                    for (
                                                        d = 0, r = M.r1;
                                                        r <= M.r2;
                                                        r++
                                                    )
                                                        d += this._getRowSize(
                                                            l.region,
                                                            r
                                                        );
                                                } else
                                                    'column-header' ==
                                                        t.region &&
                                                        (g = t.columnSizes[f]);
                                                u.clearRect(p, b, g, d),
                                                    u.save();
                                                var O = void 0;
                                                try {
                                                    O = this._dataModel.data(
                                                        t.region,
                                                        S,
                                                        w
                                                    );
                                                } catch (t) {
                                                    (O = void 0),
                                                        console.error(t);
                                                }
                                                var H = void 0;
                                                try {
                                                    H = this._dataModel.metadata(
                                                        t.region,
                                                        S,
                                                        w
                                                    );
                                                } catch (t) {
                                                    (H = V.emptyMetadata),
                                                        console.error(t);
                                                }
                                                (l.y = b),
                                                    (l.height = d),
                                                    (l.width = g),
                                                    (l.row = S),
                                                    (l.value = O),
                                                    (l.metadata = H);
                                                var z = this._cellRenderers.get(
                                                    l
                                                );
                                                u.save();
                                                try {
                                                    z.paint(u, l);
                                                } catch (t) {
                                                    console.error(t);
                                                }
                                                u.restore();
                                                var R = Math.max(t.xMin, l.x),
                                                    E = Math.min(
                                                        l.x + l.width - 1,
                                                        t.xMax
                                                    ),
                                                    k = Math.max(t.yMin, l.y),
                                                    L = Math.min(
                                                        l.y + l.height - 1,
                                                        t.yMax
                                                    );
                                                0 !== e.length || 0 !== i.length
                                                    ? E > R &&
                                                      L > k &&
                                                      this._blitContent(
                                                          this._buffer,
                                                          R,
                                                          k,
                                                          E - R + 1,
                                                          L - k + 1,
                                                          R,
                                                          k
                                                      )
                                                    : this._blitContent(
                                                          this._buffer,
                                                          R,
                                                          k,
                                                          E - R + 1,
                                                          L - k + 1,
                                                          R,
                                                          k
                                                      ),
                                                    (b += v);
                                            }
                                        u.restore(), (p += m);
                                    }
                                }
                                u.dispose(), this._bufferGC.restore();
                            }
                        }),
                        (e.prototype._drawHorizontalGridLines = function(t, e) {
                            if (e) {
                                var i = Math.max(t.xMin, t.x);
                                this._canvasGC.beginPath(),
                                    (this._canvasGC.lineWidth = 1);
                                var o = this.bodyHeight,
                                    r = this.pageHeight,
                                    n = t.rowSizes.length;
                                this._stretchLastRow &&
                                    r > o &&
                                    t.row + n === this._rowSections.count &&
                                    (n -= 1);
                                for (var s = t.y, a = 0; a < n; ++a) {
                                    var l = t.rowSizes[a];
                                    if (0 !== l) {
                                        for (
                                            var h = 0,
                                                c = !1,
                                                u = [],
                                                d = i,
                                                p = t.column;
                                            p < t.column + t.columnSizes.length;
                                            p++
                                        ) {
                                            var f = p - t.column,
                                                _ = [t.row + a, p],
                                                m = [t.row + a + 1, p];
                                            y.areCellsMerged(
                                                this.dataModel,
                                                t.region,
                                                _,
                                                m
                                            )
                                                ? (c && u.push([h, d]),
                                                  (c = !1))
                                                : c || ((c = !0), (h = d)),
                                                (d += t.columnSizes[f]),
                                                p === t.column &&
                                                    (d -= t.xMin - t.x);
                                        }
                                        c && u.push([h, t.xMax + 1]);
                                        var v = s + l - 1;
                                        if (v >= t.yMin && v <= t.yMax)
                                            if (
                                                J.shouldPaintEverything(
                                                    this._dataModel
                                                )
                                            )
                                                for (
                                                    var g = 0, w = u;
                                                    g < w.length;
                                                    g++
                                                ) {
                                                    var b = w[g],
                                                        C = b[0],
                                                        x = b[1];
                                                    this._canvasGC.moveTo(
                                                        C,
                                                        v + 0.5
                                                    ),
                                                        this._canvasGC.lineTo(
                                                            x,
                                                            v + 0.5
                                                        );
                                                }
                                            else
                                                (x = Math.min(
                                                    t.x + t.width,
                                                    t.xMax + 1
                                                )),
                                                    this._canvasGC.moveTo(
                                                        i,
                                                        v + 0.5
                                                    ),
                                                    this._canvasGC.lineTo(
                                                        x,
                                                        v + 0.5
                                                    );
                                        s += l;
                                    }
                                }
                                (this._canvasGC.strokeStyle = e),
                                    this._canvasGC.stroke();
                            }
                        }),
                        (e.prototype._drawVerticalGridLines = function(t, e) {
                            if (e) {
                                var i = Math.max(t.yMin, t.y);
                                this._canvasGC.beginPath(),
                                    (this._canvasGC.lineWidth = 1);
                                var o = this.bodyWidth,
                                    r = this.pageWidth,
                                    n = t.columnSizes.length;
                                this._stretchLastColumn &&
                                    r > o &&
                                    t.column + n ===
                                        this._columnSections.count &&
                                    (n -= 1);
                                for (var s = t.x, a = 0; a < n; ++a) {
                                    var l = t.columnSizes[a];
                                    if (0 !== l) {
                                        for (
                                            var h = 0,
                                                c = !1,
                                                u = [],
                                                d = i,
                                                p = t.row;
                                            p < t.row + t.rowSizes.length;
                                            p++
                                        ) {
                                            var f = p - t.row,
                                                _ = [p, t.column + a],
                                                m = [p, t.column + a + 1];
                                            y.areCellsMerged(
                                                this.dataModel,
                                                t.region,
                                                _,
                                                m
                                            )
                                                ? (c && u.push([h, d]),
                                                  (c = !1))
                                                : c || ((c = !0), (h = d)),
                                                (d += t.rowSizes[f]),
                                                p === t.row &&
                                                    (d -= t.yMin - t.y);
                                        }
                                        c && u.push([h, t.yMax + 1]);
                                        var v = s + l - 1;
                                        if (v >= t.xMin && v <= t.xMax)
                                            if (
                                                J.shouldPaintEverything(
                                                    this._dataModel
                                                )
                                            )
                                                for (
                                                    var g = 0, w = u;
                                                    g < w.length;
                                                    g++
                                                ) {
                                                    var b = w[g];
                                                    this._canvasGC.moveTo(
                                                        v + 0.5,
                                                        b[0]
                                                    ),
                                                        this._canvasGC.lineTo(
                                                            v + 0.5,
                                                            b[1]
                                                        );
                                                }
                                            else {
                                                var C = Math.min(
                                                    t.y + t.height,
                                                    t.yMax + 1
                                                );
                                                this._canvasGC.moveTo(
                                                    v + 0.5,
                                                    i
                                                ),
                                                    this._canvasGC.lineTo(
                                                        v + 0.5,
                                                        C
                                                    );
                                            }
                                        s += l;
                                    }
                                }
                                (this._canvasGC.strokeStyle = e),
                                    this._canvasGC.stroke();
                            }
                        }),
                        (e.prototype._drawBodySelections = function() {
                            var t = this._selectionModel;
                            if (t && !t.isEmpty) {
                                var e = this._style.selectionFillColor,
                                    i = this._style.selectionBorderColor;
                                if (e || i) {
                                    var o = this._scrollX,
                                        r = this._scrollY,
                                        n = this._rowSections.indexOf(r),
                                        s = this._columnSections.indexOf(o);
                                    if (!(n < 0 || s < 0)) {
                                        var a = this.bodyWidth,
                                            l = this.bodyHeight,
                                            h = this.pageWidth,
                                            c = this.pageHeight,
                                            u = this.headerWidth,
                                            d = this.headerHeight,
                                            p = this._rowSections.indexOf(
                                                r + c
                                            ),
                                            f = this._columnSections.indexOf(
                                                o + h
                                            ),
                                            _ = this._rowSections.count - 1,
                                            m = this._columnSections.count - 1;
                                        (p = p < 0 ? _ : p),
                                            (f = f < 0 ? m : f);
                                        var v = this._overlayGC;
                                        v.save(),
                                            v.beginPath(),
                                            v.rect(u, d, h, c),
                                            v.clip(),
                                            e && (v.fillStyle = e),
                                            i &&
                                                ((v.strokeStyle = i),
                                                (v.lineWidth = 1));
                                        for (
                                            var g, w = t.selections();
                                            void 0 !== (g = w.next());

                                        )
                                            if (
                                                !(
                                                    (g.r1 < n && g.r2 < n) ||
                                                    (g.r1 > p && g.r2 > p) ||
                                                    (g.c1 < s && g.c2 < s) ||
                                                    (g.c1 > f && g.c2 > f)
                                                )
                                            ) {
                                                var b = Math.max(
                                                        0,
                                                        Math.min(g.r1, _)
                                                    ),
                                                    C = Math.max(
                                                        0,
                                                        Math.min(g.c1, m)
                                                    ),
                                                    x = Math.max(
                                                        0,
                                                        Math.min(g.r2, _)
                                                    ),
                                                    S = Math.max(
                                                        0,
                                                        Math.min(g.c2, m)
                                                    ),
                                                    M = void 0;
                                                b > x &&
                                                    ((M = b), (b = x), (x = M)),
                                                    C > S &&
                                                        ((M = C),
                                                        (C = S),
                                                        (S = M));
                                                var O = y.joinCellGroupWithMergedCellGroups(
                                                    this.dataModel,
                                                    {
                                                        r1: b,
                                                        r2: x,
                                                        c1: C,
                                                        c2: S,
                                                    },
                                                    'body'
                                                );
                                                (b = O.r1),
                                                    (x = O.r2),
                                                    (C = O.c1),
                                                    (S = O.c2);
                                                var H =
                                                        this._columnSections.offsetOf(
                                                            C
                                                        ) -
                                                        o +
                                                        u,
                                                    z =
                                                        this._rowSections.offsetOf(
                                                            b
                                                        ) -
                                                        r +
                                                        d,
                                                    R =
                                                        this._columnSections.extentOf(
                                                            S
                                                        ) -
                                                        o +
                                                        u,
                                                    E =
                                                        this._rowSections.extentOf(
                                                            x
                                                        ) -
                                                        r +
                                                        d;
                                                this._stretchLastColumn &&
                                                    h > a &&
                                                    S === m &&
                                                    (R = u + h - 1),
                                                    this._stretchLastRow &&
                                                        c > l &&
                                                        x === _ &&
                                                        (E = d + c - 1),
                                                    (H = Math.max(u - 1, H)),
                                                    (z = Math.max(d - 1, z)),
                                                    (R = Math.min(
                                                        u + h + 1,
                                                        R
                                                    )),
                                                    (E = Math.min(
                                                        d + c + 1,
                                                        E
                                                    )),
                                                    R < H ||
                                                        E < z ||
                                                        (e &&
                                                            v.fillRect(
                                                                H,
                                                                z,
                                                                R - H + 1,
                                                                E - z + 1
                                                            ),
                                                        i &&
                                                            v.strokeRect(
                                                                H - 0.5,
                                                                z - 0.5,
                                                                R - H + 1,
                                                                E - z + 1
                                                            ));
                                            }
                                        v.restore();
                                    }
                                }
                            }
                        }),
                        (e.prototype._drawRowHeaderSelections = function() {
                            var t = this._selectionModel;
                            if (
                                t &&
                                !t.isEmpty &&
                                'column' != t.selectionMode &&
                                0 !== this.headerWidth &&
                                0 !== this.pageHeight
                            ) {
                                var e = this._style.headerSelectionFillColor,
                                    i = this._style.headerSelectionBorderColor;
                                if (e || i) {
                                    var o = this._scrollY,
                                        r = this.bodyHeight,
                                        n = this.pageHeight,
                                        s = this.headerWidth,
                                        a = this.headerHeight,
                                        l = this._rowSections,
                                        h = this._overlayGC;
                                    h.save(),
                                        h.beginPath(),
                                        h.rect(0, a, s, n),
                                        h.clip(),
                                        e && (h.fillStyle = e),
                                        i &&
                                            ((h.strokeStyle = i),
                                            (h.lineWidth = 1));
                                    var c = l.count - 1,
                                        u = l.indexOf(o),
                                        d = l.indexOf(o + n - 1);
                                    d = d < 0 ? c : d;
                                    for (var p = u; p <= d; ++p)
                                        if (t.isRowSelected(p)) {
                                            var f = l.offsetOf(p) - o + a,
                                                _ = l.sizeOf(p);
                                            this._stretchLastRow &&
                                                n > r &&
                                                p === c &&
                                                (_ = a + n - f),
                                                0 !== _ &&
                                                    (e &&
                                                        h.fillRect(0, f, s, _),
                                                    i &&
                                                        (h.beginPath(),
                                                        h.moveTo(
                                                            s - 0.5,
                                                            f - 1
                                                        ),
                                                        h.lineTo(
                                                            s - 0.5,
                                                            f + _
                                                        ),
                                                        h.stroke()));
                                        }
                                    h.restore();
                                }
                            }
                        }),
                        (e.prototype._drawColumnHeaderSelections = function() {
                            var t = this._selectionModel;
                            if (
                                t &&
                                !t.isEmpty &&
                                'row' != t.selectionMode &&
                                0 !== this.headerHeight &&
                                0 !== this.pageWidth
                            ) {
                                var e = this._style.headerSelectionFillColor,
                                    i = this._style.headerSelectionBorderColor;
                                if (e || i) {
                                    var o = this._scrollX,
                                        r = this.bodyWidth,
                                        n = this.pageWidth,
                                        s = this.headerWidth,
                                        a = this.headerHeight,
                                        l = this._columnSections,
                                        h = this._overlayGC;
                                    h.save(),
                                        h.beginPath(),
                                        h.rect(s, 0, n, a),
                                        h.clip(),
                                        e && (h.fillStyle = e),
                                        i &&
                                            ((h.strokeStyle = i),
                                            (h.lineWidth = 1));
                                    var c = l.count - 1,
                                        u = l.indexOf(o),
                                        d = l.indexOf(o + n - 1);
                                    d = d < 0 ? c : d;
                                    for (var p = u; p <= d; ++p)
                                        if (t.isColumnSelected(p)) {
                                            var f = l.offsetOf(p) - o + s,
                                                _ = l.sizeOf(p);
                                            this._stretchLastColumn &&
                                                n > r &&
                                                p === c &&
                                                (_ = s + n - f),
                                                0 !== _ &&
                                                    (e &&
                                                        h.fillRect(f, 0, _, a),
                                                    i &&
                                                        (h.beginPath(),
                                                        h.moveTo(
                                                            f - 1,
                                                            a - 0.5
                                                        ),
                                                        h.lineTo(
                                                            f + _,
                                                            a - 0.5
                                                        ),
                                                        h.stroke()));
                                        }
                                    h.restore();
                                }
                            }
                        }),
                        (e.prototype._drawCursor = function() {
                            var t = this._selectionModel;
                            if (t && !t.isEmpty && 'cell' === t.selectionMode) {
                                var e = this._style.cursorFillColor,
                                    i = this._style.cursorBorderColor;
                                if (e || i) {
                                    var o = t.cursorRow,
                                        r = t.cursorColumn,
                                        n = this._rowSections.count - 1,
                                        s = this._columnSections.count - 1;
                                    if (!(o < 0 || o > n || r < 0 || r > s)) {
                                        var a = o,
                                            l = r,
                                            h = y.joinCellGroupWithMergedCellGroups(
                                                this.dataModel,
                                                { r1: o, r2: a, c1: r, c2: l },
                                                'body'
                                            );
                                        (o = h.r1),
                                            (a = h.r2),
                                            (r = h.c1),
                                            (l = h.c2);
                                        var c = this._scrollX,
                                            u = this._scrollY,
                                            d = this.bodyWidth,
                                            p = this.bodyHeight,
                                            f = this.pageWidth,
                                            _ = this.pageHeight,
                                            m = this.headerWidth,
                                            v = this.headerHeight,
                                            g = this._viewportWidth,
                                            w = this._viewportHeight,
                                            b =
                                                this._columnSections.offsetOf(
                                                    r
                                                ) -
                                                c +
                                                m,
                                            C =
                                                this._columnSections.extentOf(
                                                    l
                                                ) -
                                                c +
                                                m,
                                            x =
                                                this._rowSections.offsetOf(o) -
                                                u +
                                                v,
                                            S =
                                                this._rowSections.extentOf(a) -
                                                u +
                                                v;
                                        if (
                                            (this._stretchLastColumn &&
                                                f > d &&
                                                r === s &&
                                                (C = g - 1),
                                            this._stretchLastRow &&
                                                _ > p &&
                                                o === n &&
                                                (S = w - 1),
                                            !(
                                                C < b ||
                                                S < x ||
                                                b - 1 >= g ||
                                                x - 1 >= w ||
                                                C + 1 < m ||
                                                S + 1 < v
                                            ))
                                        ) {
                                            var M = this._overlayGC;
                                            M.save(),
                                                M.beginPath(),
                                                M.rect(m, v, f, _),
                                                M.clip(),
                                                M.clearRect(
                                                    b,
                                                    x,
                                                    C - b + 1,
                                                    S - x + 1
                                                ),
                                                e &&
                                                    ((M.fillStyle = e),
                                                    M.fillRect(
                                                        b,
                                                        x,
                                                        C - b + 1,
                                                        S - x + 1
                                                    )),
                                                i &&
                                                    ((M.strokeStyle = i),
                                                    (M.lineWidth = 2),
                                                    M.strokeRect(
                                                        b,
                                                        x,
                                                        C - b,
                                                        S - x
                                                    )),
                                                M.restore();
                                        }
                                    }
                                }
                            }
                        }),
                        (e.prototype._drawShadows = function() {
                            var t = this._style.scrollShadow;
                            if (t) {
                                var e = this._scrollX,
                                    i = this._scrollY,
                                    o = this.maxScrollX,
                                    r = this.maxScrollY,
                                    n = this.headerWidth,
                                    s = this.headerHeight,
                                    a = this.pageWidth,
                                    l = this.pageHeight,
                                    h = this._viewportWidth,
                                    c = this._viewportHeight,
                                    u = this.bodyWidth,
                                    d = this.bodyHeight;
                                this._stretchLastRow && l > d && (d = l),
                                    this._stretchLastColumn && a > u && (u = a);
                                var p,
                                    f = this._overlayGC;
                                if ((f.save(), i > 0)) {
                                    var _ = 0,
                                        m = 0,
                                        v = (C = s) + t.size;
                                    (p = f.createLinearGradient(
                                        _,
                                        C,
                                        m,
                                        v
                                    )).addColorStop(0, t.color1),
                                        p.addColorStop(0.5, t.color2),
                                        p.addColorStop(1, t.color3);
                                    var y = 0,
                                        g = s,
                                        w = n + Math.min(a, u - e),
                                        b = t.size;
                                    (f.fillStyle = p), f.fillRect(y, g, w, b);
                                }
                                if (e > 0) {
                                    var C = 0;
                                    (m = (_ = n) + t.size),
                                        (v = 0),
                                        (p = f.createLinearGradient(
                                            _,
                                            C,
                                            m,
                                            v
                                        )).addColorStop(0, t.color1),
                                        p.addColorStop(0.5, t.color2),
                                        p.addColorStop(1, t.color3),
                                        (y = n),
                                        (g = 0),
                                        (w = t.size),
                                        (b = s + Math.min(l, d - i)),
                                        (f.fillStyle = p),
                                        f.fillRect(y, g, w, b);
                                }
                                if (
                                    (i < r &&
                                        ((_ = 0),
                                        (C = c),
                                        (m = 0),
                                        (v = c - t.size),
                                        (p = f.createLinearGradient(
                                            _,
                                            C,
                                            m,
                                            v
                                        )).addColorStop(0, t.color1),
                                        p.addColorStop(0.5, t.color2),
                                        p.addColorStop(1, t.color3),
                                        (y = 0),
                                        (g = c - t.size),
                                        (w = n + Math.min(a, u - e)),
                                        (b = t.size),
                                        (f.fillStyle = p),
                                        f.fillRect(y, g, w, b)),
                                    e < o)
                                )
                                    (_ = h),
                                        (C = 0),
                                        (m = h - t.size),
                                        (v = 0),
                                        (p = f.createLinearGradient(
                                            _,
                                            C,
                                            m,
                                            v
                                        )).addColorStop(0, t.color1),
                                        p.addColorStop(0.5, t.color2),
                                        p.addColorStop(1, t.color3),
                                        (y = h - t.size),
                                        (g = 0),
                                        (w = t.size),
                                        (b = s + Math.min(l, d - i)),
                                        (f.fillStyle = p),
                                        f.fillRect(y, g, w, b);
                                f.restore();
                            }
                        }),
                        e
                    );
                })(l.Widget);
            !(function(t) {
                function e(t) {
                    return null === t.value || void 0 === t.value
                        ? ''
                        : String(t.value);
                }
                (t.copyFormatGeneric = e),
                    (t.defaultStyle = {
                        voidColor: '#F3F3F3',
                        backgroundColor: '#FFFFFF',
                        gridLineColor: 'rgba(20, 20, 20, 0.15)',
                        headerBackgroundColor: '#F3F3F3',
                        headerGridLineColor: 'rgba(20, 20, 20, 0.25)',
                        selectionFillColor: 'rgba(49, 119, 229, 0.2)',
                        selectionBorderColor: 'rgba(0, 107, 247, 1.0)',
                        cursorBorderColor: 'rgba(0, 107, 247, 1.0)',
                        headerSelectionFillColor: 'rgba(20, 20, 20, 0.1)',
                        headerSelectionBorderColor: 'rgba(0, 107, 247, 1.0)',
                        scrollShadow: {
                            size: 10,
                            color1: 'rgba(0, 0, 0, 0.20)',
                            color2: 'rgba(0, 0, 0, 0.05)',
                            color3: 'rgba(0, 0, 0, 0.00)',
                        },
                    }),
                    (t.defaultSizes = {
                        rowHeight: 20,
                        columnWidth: 64,
                        rowHeaderWidth: 64,
                        columnHeaderHeight: 20,
                    }),
                    (t.minimumSizes = {
                        rowHeight: 20,
                        columnWidth: 10,
                        rowHeaderWidth: 10,
                        columnHeaderHeight: 20,
                    }),
                    (t.defaultCopyConfig = {
                        separator: '\t',
                        format: e,
                        headers: 'none',
                        warningThreshold: 1e6,
                    });
            })(Z || (Z = {})),
                (function(t) {
                    (t.ScrollRequest = new h.ConflatableMessage(
                        'scroll-request'
                    )),
                        (t.OverlayPaintRequest = new h.ConflatableMessage(
                            'overlay-paint-request'
                        )),
                        (t.createCanvas = function() {
                            var t = document.createElement('canvas');
                            return (t.width = 0), (t.height = 0), t;
                        }),
                        (t.shouldPaintEverything = function(t) {
                            var e = y.getCellGroupsAtRegion(t, 'column-header'),
                                i = y.getCellGroupsAtRegion(t, 'row-header'),
                                o = y.getCellGroupsAtRegion(t, 'corner-header'),
                                r = y.getCellGroupsAtRegion(t, 'body');
                            return (
                                e.length > 0 ||
                                i.length > 0 ||
                                o.length > 0 ||
                                r.length > 0
                            );
                        }),
                        (t.regionHasMergedCells = function(t, e) {
                            return y.getCellGroupsAtRegion(t, e).length > 0;
                        });
                    var e = (function(t) {
                        function e(e, i, o, r, n) {
                            var s = t.call(this, 'paint-request') || this;
                            return (
                                (s._region = e),
                                (s._r1 = i),
                                (s._c1 = o),
                                (s._r2 = r),
                                (s._c2 = n),
                                s
                            );
                        }
                        return (
                            p(e, t),
                            Object.defineProperty(e.prototype, 'region', {
                                get: function() {
                                    return this._region;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'r1', {
                                get: function() {
                                    return this._r1;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'c1', {
                                get: function() {
                                    return this._c1;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'r2', {
                                get: function() {
                                    return this._r2;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'c2', {
                                get: function() {
                                    return this._c2;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            (e.prototype.conflate = function(t) {
                                return (
                                    'all' === this._region ||
                                    ('all' === t._region
                                        ? ((this._region = 'all'), !0)
                                        : this._region === t._region &&
                                          ((this._r1 = Math.min(
                                              this._r1,
                                              t._r1
                                          )),
                                          (this._c1 = Math.min(
                                              this._c1,
                                              t._c1
                                          )),
                                          (this._r2 = Math.max(
                                              this._r2,
                                              t._r2
                                          )),
                                          (this._c2 = Math.max(
                                              this._c2,
                                              t._c2
                                          )),
                                          !0))
                                );
                            }),
                            e
                        );
                    })(h.ConflatableMessage);
                    t.PaintRequest = e;
                    var i = (function(t) {
                        function e(e, i, o) {
                            var r = t.call(this, 'row-resize-request') || this;
                            return (
                                (r._region = e),
                                (r._index = i),
                                (r._size = o),
                                r
                            );
                        }
                        return (
                            p(e, t),
                            Object.defineProperty(e.prototype, 'region', {
                                get: function() {
                                    return this._region;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'index', {
                                get: function() {
                                    return this._index;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'size', {
                                get: function() {
                                    return this._size;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            (e.prototype.conflate = function(t) {
                                return (
                                    this._region === t._region &&
                                    this._index === t._index &&
                                    ((this._size = t._size), !0)
                                );
                            }),
                            e
                        );
                    })(h.ConflatableMessage);
                    t.RowResizeRequest = i;
                    var o = (function(t) {
                        function e(e, i, o) {
                            var r =
                                t.call(this, 'column-resize-request') || this;
                            return (
                                (r._region = e),
                                (r._index = i),
                                (r._size = o),
                                r
                            );
                        }
                        return (
                            p(e, t),
                            Object.defineProperty(e.prototype, 'region', {
                                get: function() {
                                    return this._region;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'index', {
                                get: function() {
                                    return this._index;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, 'size', {
                                get: function() {
                                    return this._size;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            (e.prototype.conflate = function(t) {
                                return (
                                    this._region === t._region &&
                                    this._index === t._index &&
                                    ((this._size = t._size), !0)
                                );
                            }),
                            e
                        );
                    })(h.ConflatableMessage);
                    t.ColumnResizeRequest = o;
                })(J || (J = {}));
            var $,
                Q = (function(t) {
                    function e(e) {
                        var i = t.call(this) || this,
                            o = $.splitFields(e.schema);
                        return (
                            (i._data = e.data),
                            (i._bodyFields = o.bodyFields),
                            (i._headerFields = o.headerFields),
                            (i._missingValues = $.createMissingMap(e.schema)),
                            i
                        );
                    }
                    return (
                        p(e, t),
                        (e.prototype.rowCount = function(t) {
                            return 'body' === t ? this._data.length : 1;
                        }),
                        (e.prototype.columnCount = function(t) {
                            return 'body' === t
                                ? this._bodyFields.length
                                : this._headerFields.length;
                        }),
                        (e.prototype.data = function(t, e, i) {
                            var o, r;
                            switch (t) {
                                case 'body':
                                    (o = this._bodyFields[i]),
                                        (r = this._data[e][o.name]);
                                    break;
                                case 'column-header':
                                    r =
                                        (o = this._bodyFields[i]).title ||
                                        o.name;
                                    break;
                                case 'row-header':
                                    (o = this._headerFields[i]),
                                        (r = this._data[e][o.name]);
                                    break;
                                case 'corner-header':
                                    r =
                                        (o = this._headerFields[i]).title ||
                                        o.name;
                                    break;
                                default:
                                    throw 'unreachable';
                            }
                            return null !== this._missingValues &&
                                'string' == typeof r &&
                                !0 === this._missingValues[r]
                                ? null
                                : r;
                        }),
                        (e.prototype.metadata = function(t, e, i) {
                            return 'body' === t || 'column-header' === t
                                ? this._bodyFields[i]
                                : this._headerFields[i];
                        }),
                        e
                    );
                })(V);
            !(function(t) {
                (t.splitFields = function(t) {
                    var e;
                    e =
                        void 0 === t.primaryKey
                            ? []
                            : 'string' == typeof t.primaryKey
                            ? [t.primaryKey]
                            : t.primaryKey;
                    for (
                        var i = [], o = [], r = 0, n = t.fields;
                        r < n.length;
                        r++
                    ) {
                        var s = n[r];
                        -1 === e.indexOf(s.name) ? i.push(s) : o.push(s);
                    }
                    return { bodyFields: i, headerFields: o };
                }),
                    (t.createMissingMap = function(t) {
                        if (!t.missingValues || 0 === t.missingValues.length)
                            return null;
                        for (
                            var e = Object.create(null),
                                i = 0,
                                o = t.missingValues;
                            i < o.length;
                            i++
                        )
                            e[o[i]] = !0;
                        return e;
                    });
            })($ || ($ = {}));
        },
    },
]);
//# sourceMappingURL=920.15b46fa.js.map
